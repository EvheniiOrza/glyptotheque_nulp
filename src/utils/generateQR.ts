// utils/qrGenerator.ts
import supabase from './supabaseClient'
import QRCode from 'qrcode'

export async function saveQRToSupabase(sculptureId: string): Promise<void> {
    try {
        const url = `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/${sculptureId}`

        console.log('🔗 Генеруємо QR для URL:', url)

        // Генерація QR-коду як Data URL
        const qrDataUrl = await QRCode.toDataURL(url, {
            width: 400,
            margin: 2,
            color: {
                dark: '#d4af37',
                light: '#ffffff'
            }
        })

        // Конвертація Data URL в Blob
        const response = await fetch(qrDataUrl)
        const blob = await response.blob()

        // Завантаження файлу
        const fileName = `qr_${sculptureId}.png`
        console.log('📤 Завантажуємо файл:', fileName)

        const { error: uploadError } = await supabase.storage
            .from('qrcodes')
            .upload(fileName, blob, {
                contentType: 'image/png',
                upsert: true
            })

        if (uploadError) {
            console.error('❌ Помилка завантаження:', uploadError)

            // Якщо помилка RLS, спробуємо зберегти тільки Data URL
            if (uploadError.message.includes('row-level security')) {
                console.log('🔄 RLS помилка, зберігаємо тільки Data URL')
                await saveQRDataURLOnly(sculptureId, qrDataUrl)
                return
            }
            throw uploadError
        }

        // Отримання публічного URL
        const { data: publicUrlData } = supabase.storage
            .from('qrcodes')
            .getPublicUrl(fileName)

        const publicUrl = publicUrlData?.publicUrl

        if (!publicUrl) {
            throw new Error('Не вдалося отримати публічний URL')
        }

        console.log('📷 Публічний URL QR-коду:', publicUrl)

        // Збереження в таблицю
        const { error: insertError } = await supabase
            .from('sculpture_qr_codes')
            .insert({
                sculpture_id: sculptureId,
                qr_url: publicUrl
            })

        if (insertError) {
            console.error('❌ Помилка збереження в базу:', insertError)
            throw insertError
        }

        console.log('✅ QR-код успішно збережено в storage та базу даних')

    } catch (error) {
        console.error('❌ Критична помилка при збереженні QR-коду:', error)
        throw error
    }
}

// Альтернативний метод: збереження тільки Data URL
async function saveQRDataURLOnly(sculptureId: string, qrDataUrl: string): Promise<void> {
    try {
        console.log('💾 Зберігаємо QR-код як Data URL в базу даних...')

        const { error: insertError } = await supabase
            .from('sculpture_qr_codes')
            .insert({
                sculpture_id: sculptureId,
                qr_url: qrDataUrl
            })

        if (insertError) {
            console.error('❌ Помилка збереження Data URL:', insertError)
            throw insertError
        }

        console.log('✅ QR-код збережено як Data URL в базу даних')

    } catch (error) {
        console.error('❌ Помилка в альтернативному методі:', error)
        throw error
    }
}

// Спрощена версія без використання Buffer
export async function saveQRToSupabaseSimple(sculptureId: string): Promise<string> {
    try {
        const url = `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/${sculptureId}`

        // Генерація QR-коду як Data URL
        const qrDataUrl = await QRCode.toDataURL(url, {
            width: 400,
            margin: 2,
            color: {
                dark: '#d4af37',
                light: '#000000'
            }
        })

        // Спроба завантажити в storage
        try {
            const response = await fetch(qrDataUrl)
            const blob = await response.blob()
            const fileName = `qr_${sculptureId}.png`

            const { error: uploadError } = await supabase.storage
                .from('qrcodes')
                .upload(fileName, blob, {
                    contentType: 'image/png',
                    upsert: true
                })

            if (!uploadError) {
                // Отримання публічного URL
                const { data: publicUrlData } = supabase.storage
                    .from('qrcodes')
                    .getPublicUrl(fileName)

                if (publicUrlData?.publicUrl) {
                    await saveQRToDatabase(sculptureId, publicUrlData.publicUrl)
                    return publicUrlData.publicUrl
                }
            }
        } catch (storageError) {
            console.warn('⚠️ Не вдалося завантажити в storage, використовуємо Data URL')
        }

        // Якщо storage не працює, зберігаємо Data URL
        await saveQRToDatabase(sculptureId, qrDataUrl)
        return qrDataUrl

    } catch (error) {
        console.error('❌ Помилка при генерації QR-коду:', error)
        throw error
    }
}

// Допоміжна функція для збереження в базу даних
async function saveQRToDatabase(sculptureId: string, qrUrl: string): Promise<void> {
    const { error } = await supabase
        .from('sculpture_qr_codes')
        .insert({
            sculpture_id: sculptureId,
            qr_url: qrUrl
        })

    if (error) {
        console.error('❌ Помилка збереження QR в базу:', error)
        throw error
    }
}

// Отримання QR-коду за sculpture_id
export async function getQRCodeBySculptureId(sculptureId: string) {
    try {
        const { data, error } = await supabase
            .from('sculpture_qr_codes')
            .select('*')
            .eq('sculpture_id', sculptureId)
            .single()

        if (error) throw error
        return data
    } catch (error) {
        console.error('Помилка при отриманні QR-коду:', error)
        return null
    }
}

// Видалення QR-коду
export async function deleteQRCode(sculptureId: string): Promise<void> {
    try {
        // Видалення файлу з storage (якщо він там)
        const fileName = `qr_${sculptureId}.png`
        const { error: storageError } = await supabase.storage
            .from('qrcodes')
            .remove([fileName])

        if (storageError && !storageError.message.includes('NotFound')) {
            console.warn('Помилка видалення з storage:', storageError)
        }

        // Видалення запису з таблиці
        const { error: deleteError } = await supabase
            .from('sculpture_qr_codes')
            .delete()
            .eq('sculpture_id', sculptureId)

        if (deleteError) throw deleteError

        console.log(`✅ QR-код видалено для скульптури ${sculptureId}`)
    } catch (error) {
        console.error('❌ Помилка при видаленні QR-коду:', error)
        throw error
    }
}
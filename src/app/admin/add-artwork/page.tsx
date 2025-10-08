'use client'

import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'
import { ArtworkFormData } from '@/types/artwork'
import { saveQRToSupabaseSimple } from '@/utils/generateQR'
import { useRouter } from 'next/navigation'

const AddArtworkPage: React.FC = () => {
    const router = useRouter()
    const [saving, setSaving] = useState(false)

    const handleFormSubmit = async (data: ArtworkFormData) => {
        if (!data.name?.trim()) {
            alert('Будь ласка, введіть назву скульптури')
            return
        }

        setSaving(true)

        try {
            const uploadedUrls: string[] = []

            // Завантаження фото на Supabase Storage
            for (const photo of data.photos) {
                // Перевірка розміру файлу (макс. 5MB)
                if (photo.size > 5 * 1024 * 1024) {
                    alert(`Файл "${photo.name}" занадто великий. Максимальний розмір: 5MB`)
                    continue
                }

                const fileExt = photo.name.split('.').pop()
                const fileName = `${uuidv4()}.${fileExt}`

                const { error: uploadError } = await supabase.storage
                    .from('artworks')
                    .upload(fileName, photo, {
                        cacheControl: '3600',
                        upsert: true
                    })

                if (uploadError) {
                    console.error('Помилка завантаження:', uploadError)
                    throw new Error(`Не вдалося завантажити фото: ${photo.name}`)
                }

                const { data: publicUrlData } = supabase.storage
                    .from('artworks')
                    .getPublicUrl(fileName)

                if (!publicUrlData?.publicUrl) {
                    throw new Error('Не вдалося отримати URL для завантаженого фото')
                }

                uploadedUrls.push(publicUrlData.publicUrl)
            }

            if (uploadedUrls.length === 0) {
                throw new Error('Не вдалося завантажити жодного фото')
            }

            // Вставка запису у таблицю sculptures
            // В функції handleFormSubmit оновлюємо insert запит:
            const { data: insertData, error: insertError } = await supabase
                .from('sculptures')
                .insert({
                    name: data.name,
                    author: data.author || null,
                    style: data.style || null,
                    year: data.year || null,
                    number: data.number || null,
                    space_id: data.space_id || null, // Додаємо space_id
                    description: data.description,
                    image_urls: uploadedUrls,
                    created_at: new Date().toISOString(),
                })
                .select()

            if (insertError) throw insertError

            const sculptureId = insertData?.[0]?.id
            if (!sculptureId) throw new Error('Не вдалося отримати ID створеної скульптури')

            // Генерація та збереження QR-коду
            try {
                const qrUrl = await saveQRToSupabaseSimple(sculptureId)
                console.log('✅ QR-код згенеровано:', qrUrl)
                alert('Скульптура успішно додана з QR-кодом!')
                router.push('/admin')
            } catch (qrError) {
                console.warn('QR-код не згенеровано, але скульптура створена:', qrError)
                alert('Скульптура успішно додана, але QR-код не вдалося згенерувати')
                router.push('/admin')
            }

        } catch (err: unknown) {
            console.error('❌ Помилка при додаванні скульптури:', err)
            alert(`Сталася помилка при додаванні скульптури: ${err instanceof Error ? err.message : 'Невідома помилка'}`)
        } finally {
            setSaving(false)
        }
    }

    return (
        <Layout>
            <div className="min-h-screen bg-black text-white py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-serif text-[#d4af37]">
                            Додати нову скульптуру
                        </h1>
                        <button
                            onClick={() => router.push('/admin')}
                            className="bg-gray-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition"
                        >
                            Назад до списку
                        </button>
                    </div>

                    <ArtworkForm
                        onSubmit={handleFormSubmit}
                        saving={saving}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default AddArtworkPage
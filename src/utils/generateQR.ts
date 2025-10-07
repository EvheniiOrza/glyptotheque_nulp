import supabase from './supabaseClient'
import QRCode from 'qrcode'

export async function saveQRToSupabase(sculptureId: string) {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${sculptureId}`
    const dataUrl = await QRCode.toDataURL(url)

    const fileName = `qr_${sculptureId}.png`
    const buffer = Buffer.from(dataUrl.split(',')[1], 'base64')

    // Завантаження файлу в сховище Supabase
    const { error: uploadError } = await supabase.storage
        .from('qrcodes')
        .upload(fileName, buffer, {
            contentType: 'image/png',
            upsert: true,
        })
    if (uploadError) throw uploadError

    // Отримання публічного URL
    const { data: publicUrlData } = supabase.storage
        .from('qrcodes')
        .getPublicUrl(fileName)
    const publicUrl = publicUrlData?.publicUrl

    // Оновлення запису в таблиці sculptures
    const { error: updateError } = await supabase
        .from('sculptures')
        .update({ qr_url: publicUrl })
        .eq('id', sculptureId)
    if (updateError) throw updateError
}

import { supabase } from './supabaseClient'
import QRCode from 'qrcode'

export async function saveQRToSupabase(sculptureId: string) {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${sculptureId}`
    const dataUrl = await QRCode.toDataURL(url)

    const fileName = `qr_${sculptureId}.png`
    const buffer = Buffer.from(dataUrl.split(',')[1], 'base64')

    await supabase.storage.from('qrcodes').upload(fileName, buffer, {
        contentType: 'image/png',
        upsert: true
    })

    const { data: publicUrlData } = supabase.storage.from('qrcodes').getPublicUrl(fileName)
    await supabase.from('sculptures').update({ qr_url: publicUrlData.publicUrl }).eq('id', sculptureId)
}

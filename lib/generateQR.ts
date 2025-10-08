import QRCode from 'qrcode';
import supabase from '../src/utils/supabaseClient';

export async function generateQR(sculptureId: string) {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${sculptureId}`;
    const qrData = await QRCode.toDataURL(url);

    const fileName = `qr_${sculptureId}.png`;
    const imageBuffer = Buffer.from(qrData.split(',')[1], 'base64');
    await supabase.storage.from('qrcodes').upload(fileName, imageBuffer, { contentType: 'image/png' });

    const { data: publicUrl } = supabase.storage.from('qrcodes').getPublicUrl(fileName);
    await supabase.from('sculptures').update({ qr_url: publicUrl.publicUrl }).eq('id', sculptureId);
}

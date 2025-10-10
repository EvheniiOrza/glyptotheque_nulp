'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { useParams, useRouter } from 'next/navigation'
import { ArtworkFormData } from '@/types/artwork'
import { v4 as uuidv4 } from 'uuid'

const EditArtworkPage: React.FC = () => {
    const params = useParams()
    const router = useRouter()
    const { id } = params as { id: string }

    const [artworkData, setArtworkData] = useState<ArtworkFormData | null>(null)
    const [existingImages, setExistingImages] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        const fetchArtwork = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.error('Error fetching artwork:', error)
                setLoading(false)
                return
            }

            if (data) {
                // Зберігаємо існуючі фото в окремому стані
                setExistingImages(data.image_urls || [])

                setArtworkData({
                    name: data.name,
                    description: data.description || '',
                    author: data.author || '',
                    style: data.style || '',
                    year: data.year || undefined,
                    number: data.number || '',
                    photos: [], // Нові фото, які будуть додані
                    qr_url: data.qr_url || '',
                })
            }
            setLoading(false)
        }

        fetchArtwork()
    }, [id])

    const handleSubmit = async (data: ArtworkFormData) => {
        if (!artworkData) return
        setSaving(true)
        try {
            const uploadedUrls: string[] = []

            // Завантаження нових фото, якщо вони є
            if (data.photos && data.photos.length > 0) {
                for (const photo of data.photos) {
                    // Перевіряємо, чи це новий файл (File), чи вже існуючий URL (string)
                    if (photo instanceof File) {
                        const fileExt = photo.name.split('.').pop()
                        const fileName = `${uuidv4()}.${fileExt}`
                        const { error: uploadError } = await supabase.storage
                            .from('artworks')
                            .upload(fileName, photo)

                        if (uploadError) throw uploadError

                        const { data: publicUrlData } = supabase.storage
                            .from('artworks')
                            .getPublicUrl(fileName)

                        if (publicUrlData?.publicUrl) {
                            uploadedUrls.push(publicUrlData.publicUrl)
                        }
                    }
                }
            }

            // Об'єднуємо існуючі фото з новими
            const allImages = [...existingImages, ...uploadedUrls]

            // Оновлення запису
            const { error: updateError } = await supabase
                .from('sculptures')
                .update({
                    name: data.name,
                    description: data.description,
                    author: data.author,
                    style: data.style,
                    year: data.year,
                    number: data.number,
                    qr_url: data.qr_url,
                    image_urls: allImages,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', id)

            if (updateError) throw updateError

            alert('Скульптуру успішно оновлено!')
            router.push('/admin')
        } catch (err) {
            console.error('Error updating artwork:', err)
            alert('Сталася помилка при оновленні скульптури.')
        } finally {
            setSaving(false)
        }
    }

    if (loading)
        return (
            <Layout>
                <div className="py-40 flex justify-center">
                    <Loader />
                </div>
            </Layout>
        )

    if (!artworkData)
        return (
            <Layout>
                <div className="py-40 text-red-500 text-center">
                    Скульптуру не знайдено.
                </div>
            </Layout>
        )

    return (
        <Layout>
            <div className="py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d4af37] mb-8 text-center">
                    Редагувати скульптуру
                </h1>
                <ArtworkForm
                    initialData={artworkData}
                    existingImages={existingImages} // Передаємо існуючі фото
                    onSubmit={handleSubmit}
                    saving={saving}
                    onExistingImagesChange={setExistingImages} // Дозволяємо видаляти існуючі фото
                />
            </div>
        </Layout>
    )
}

export default EditArtworkPage
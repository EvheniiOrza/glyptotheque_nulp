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
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        const fetchArtwork = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .eq('id', id)
                .single()

            if (error) console.error(error)
            else if (data) {
                setArtworkData({
                    name: data.name,
                    description: data.description || '',
                    author: data.author || '',
                    year: data.year || undefined,
                    photos: [],
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

            // Завантаження нових фото
            for (const photo of data.photos) {
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

            // Отримуємо старі фото
            const { data: existingArtwork } = await supabase
                .from('sculptures')
                .select('image_urls')
                .eq('id', id)
                .single()

            const allImages = [...(existingArtwork?.image_urls || []), ...uploadedUrls]

            // Оновлення запису
            const { error: updateError } = await supabase
                .from('sculptures')
                .update({
                    name: data.name,
                    description: data.description,
                    author: data.author,
                    year: data.year,
                    qr_url: data.qr_url,
                    image_urls: allImages,
                })
                .eq('id', id)

            if (updateError) throw updateError

            alert('Скульптуру успішно оновлено!')
            router.push('/admin')
        } catch (err) {
            console.error(err)
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
                    onSubmit={handleSubmit}
                    saving={saving}
                />
            </div>
        </Layout>
    )
}

export default EditArtworkPage

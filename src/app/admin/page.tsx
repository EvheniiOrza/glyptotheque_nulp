'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { useParams } from 'next/navigation'
import { ArtworkFormData } from '@/types/artwork'
import { v4 as uuidv4 } from 'uuid'

interface Sculpture {
    id: string
    name: string
    author?: string | null
    year?: number | null
    description?: string
    image_urls: string[]
}

const EditArtworkPage: React.FC = () => {
    const { id } = useParams()
    const [artworkData, setArtworkData] = useState<Sculpture | null>(null)
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
            else setArtworkData(data)
            setLoading(false)
        }
        if (id) fetchArtwork()
    }, [id])

    const handleSubmit = async (data: ArtworkFormData) => {
        if (!artworkData) return
        setSaving(true)

        try {
            const uploadedUrls: string[] = []

            // Завантаження нових фото, якщо є
            for (const photo of data.photos || []) {
                const fileExt = photo.name.split('.').pop()
                const fileName = `${uuidv4()}.${fileExt}`
                const { error: uploadError } = await supabase.storage
                    .from('artworks')
                    .upload(fileName, photo, { cacheControl: '3600', upsert: true })
                if (uploadError) throw uploadError

                const { data: publicUrlData } = supabase.storage.from('artworks').getPublicUrl(fileName)
                if (!publicUrlData?.publicUrl) throw new Error('Не вдалося отримати URL')
                uploadedUrls.push(publicUrlData.publicUrl)
            }

            const updatedImageUrls = uploadedUrls.length ? uploadedUrls : artworkData.image_urls

            const { error: updateError } = await supabase
                .from('sculptures')
                .update({
                    name: data.name,
                    author: data.author,
                    year: data.year,
                    description: data.description,
                    image_urls: updatedImageUrls,
                })
                .eq('id', artworkData.id)

            if (updateError) throw updateError

            alert('Скульптура успішно оновлена!')
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
                <div className="py-40 text-red-500 text-center">Скульптуру не знайдено.</div>
            </Layout>
        )

    return (
        <Layout>
            <div className="py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d4af37] mb-8 text-center">Редагувати скульптуру</h1>
                <ArtworkForm
                    initialData={{
                        name: artworkData.name,
                        description: artworkData.description || '',
                        photos: [],
                        author: artworkData.author || '',
                        year: artworkData.year || undefined,
                    }}
                    onSubmit={handleSubmit}
                    saving={saving}
                />
            </div>
        </Layout>
    )
}

export default EditArtworkPage

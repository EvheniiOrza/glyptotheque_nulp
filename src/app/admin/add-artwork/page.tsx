'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'
import { ArtworkFormData } from '@/types/artwork'

const AddArtworkPage: React.FC = () => {
    const handleFormSubmit = async (data: ArtworkFormData) => {
        if (!data.name?.trim()) {
            alert('Будь ласка, введіть назву скульптури')
            return
        }

        try {
            const uploadedUrls: string[] = []

            // Завантаження фото на Supabase Storage
            for (const photo of data.photos) {
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

            // Вставка запису у таблицю sculptures
            const { error: insertError } = await supabase
                .from('sculptures')
                .insert({
                    name: data.name,
                    author: data.author || undefined,
                    year: data.year || undefined,
                    description: data.description,
                    image_urls: uploadedUrls.length ? uploadedUrls : undefined,
                    created_at: new Date().toISOString(),
                })

            if (insertError) throw insertError

            alert('Скульптура успішно додана!')
        } catch (err: unknown) {
            console.error(err)
            alert('Сталася помилка при додаванні скульптури.')
        }
    }

    return (
        <Layout>
            <div className="py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d4af37] mb-8 text-center">
                    Додати нову скульптуру
                </h1>
                <ArtworkForm onSubmit={handleFormSubmit} />
            </div>
        </Layout>
    )
}

export default AddArtworkPage

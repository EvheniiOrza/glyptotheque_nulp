'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'
import { ArtworkFormData } from '@/types/artwork'

const AddArtworkPage: React.FC = () => {
    // Адаптер для даних з форми
    const handleFormSubmit = async (data: {
        title: string
        description: string
        photos: File[]
        characteristics: Record<string, string>
    }) => {
        // Приводимо до ArtworkFormData
        const formData: ArtworkFormData = {
            name: data.title,
            description: data.description,
            photos: data.photos,
            author: data.characteristics?.author,
            year: data.characteristics?.year ? Number(data.characteristics.year) : undefined,
            qr_url: data.characteristics?.qr_url,
        }

        try {
            const uploadedUrls: string[] = []

            for (const photo of formData.photos) {
                const fileExt = photo.name.split('.').pop()
                const fileName = `${uuidv4()}.${fileExt}`

                // Завантаження фото на Supabase Storage
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('artworks')
                    .upload(fileName, photo)

                if (uploadError) throw uploadError

                // Отримання публічного URL
                const { data: publicUrlData } = supabase.storage.from('artworks').getPublicUrl(fileName)
                uploadedUrls.push(publicUrlData.publicUrl)
            }

            // Вставка запису у таблицю sculptures
            const { data: insertData, error: insertError } = await supabase
                .from('sculptures')
                .insert({
                    name: formData.name,
                    author: formData.author,
                    year: formData.year,
                    description: formData.description,
                    image_urls: uploadedUrls,
                    qr_url: formData.qr_url,
                    created_at: new Date(),
                })

            if (insertError) throw insertError

            alert('Скульптура успішно додана!')
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message)
            } else {
                console.error(err)
            }
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

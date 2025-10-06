'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'

const AddArtworkPage: React.FC = () => {
    const handleSubmit = async (data: any) => {
        const { title, description, photos, characteristics } = data

        try {
            // Завантажуємо фото на Supabase Storage
            const uploadedUrls: string[] = []
            for (const photo of photos) {
                const fileExt = photo.name.split('.').pop()
                const fileName = `${uuidv4()}.${fileExt}`
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('artworks') // твій bucket
                    .upload(fileName, photo)

                if (uploadError) throw uploadError

                // Отримуємо публічний URL
                const { publicUrl } = supabase.storage.from('artworks').getPublicUrl(fileName)
                uploadedUrls.push(publicUrl)
            }

            // Створюємо запис у таблиці sculptures
            const { data: insertData, error: insertError } = await supabase
                .from('sculptures')
                .insert({
                    name: title,
                    description,
                    image_urls: uploadedUrls,
                    characteristics,
                    created_at: new Date()
                })

            if (insertError) throw insertError

            alert('Скульптура успішно додана!')
        } catch (err: any) {
            console.error(err)
            alert('Сталася помилка при додаванні скульптури.')
        }
    }

    return (
        <Layout>
            <div className="py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d4af37] mb-8 text-center">Додати нову скульптуру</h1>
                <ArtworkForm onSubmit={handleSubmit} />
            </div>
        </Layout>
    )
}

export default AddArtworkPage

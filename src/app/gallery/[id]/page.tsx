'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ArtworkModal from '@/components/Gallery/ArtworkModal'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'

interface SculptureDetail {
    id: string
    name: string
    author?: string
    year?: number
    description?: string
    image_urls: string[]
}

const SculptureDetailPage: React.FC = () => {
    const { id } = useParams()
    const [sculpture, setSculpture] = useState<SculptureDetail | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSculpture = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .eq('id', id)
                .single()

            if (error) console.error(error)
            else setSculpture(data)
            setLoading(false)
        }

        if (id) fetchSculpture()
    }, [id])

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center py-40">
                    <Loader />
                </div>
            </Layout>
        )
    }

    if (!sculpture) {
        return (
            <Layout>
                <div className="flex justify-center py-40 text-red-500">
                    Скульптура не знайдена.
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <main className="bg-black text-white min-h-screen py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37] text-center mb-8">
                    {sculpture.name}
                </h1>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Галерея фото */}
                    <ArtworkModal images={sculpture.image_urls} title={sculpture.name} />

                    {/* Детальна інформація */}
                    <div className="flex flex-col space-y-6 text-gray-300">
                        {sculpture.description && <p>{sculpture.description}</p>}
                        {sculpture.year && <p>Рік: {sculpture.year}</p>}
                        {sculpture.author && <p>Автор: {sculpture.author}</p>}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default SculptureDetailPage

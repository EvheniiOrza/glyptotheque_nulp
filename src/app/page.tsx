'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/Home/Hero'
import FeaturedArtworks from '@/components/Home/FeaturedArtworks'
import { Artwork } from '@/types/artwork'
import supabase from '@/utils/supabaseClient'

const HomePage: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtworks = async () => {
            const { data, error } = await supabase
                .from('artworks')
                .select('id, title, images') // images - масив або перше фото
                .limit(6) // популярні скульптури
            if (error) console.error(error)
            else {
                const mapped = data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    description: item.description || '', // замінюємо undefined на порожній рядок
                    imageUrl: item.image_urls?.[0] || '/placeholder.jpg',
                }))
                setArtworks(mapped)
            }
            setLoading(false)
        }

        fetchArtworks()
    }, [])

    return (
        <Layout>
            <Hero />
            {loading ? (
                <div className="flex justify-center py-20">
                    <p className="text-gray-500">Завантаження популярних скульптур...</p>
                </div>
            ) : (
                <FeaturedArtworks artworks={artworks} />
            )}
        </Layout>
    )
}

export default HomePage

'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/Home/Hero'
import FeaturedArtworks from '@/components/Home/FeaturedArtworks'
import { Artwork } from '@/types/artwork'
import supabase from '@/utils/supabaseClient'

interface SupabaseArtwork {
    id: string
    title?: string | null
    name?: string | null
    description?: string | null
    image_urls?: string[] | null
    author?: string | null
    year?: number | null
}

const HomePage: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const { data, error } = await supabase
                    .from('sculptures')
                    .select('id, name, description, image_urls, author, year')
                    .order('created_at', { ascending: false })
                    .limit(6)

                if (error) {
                    console.error('Помилка завантаження скульптур:', error)
                } else if (data) {
                    const mapped = data.map((item: SupabaseArtwork): Artwork => ({
                        id: item.id,
                        title: item.title || item.name || 'Без назви',
                        description: item.description || '',
                        imageUrl: item.image_urls?.[0] || '/placeholder.jpg',
                    }))
                    setArtworks(mapped)
                }
            } catch (error) {
                console.error('Помилка:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchArtworks()
    }, [])

    return (
        <Layout>
            <Hero />
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500">Завантаження скульптур...</p>
                    </div>
                </div>
            ) : (
                <FeaturedArtworks artworks={artworks} />
            )}
        </Layout>
    )
}

export default HomePage
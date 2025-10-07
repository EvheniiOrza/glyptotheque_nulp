'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkGrid from '@/components/Gallery/ArtworkGrid'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { Artwork } from '@/types/artwork'
import { SculptureDB } from '@/types/artwork'

const GalleryPage: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [artworkData, setArtworkData] = useState<SculptureDB | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtworks = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('id, name, description, image_urls')


            if (error) console.error(error)
            else if (data) {
                const mapped = data.map((item: Partial<SculptureDB>) => ({
                    id: item.id!,
                    title: item.name!,
                    description: item.description || '',
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
            <main className="bg-black text-white min-h-screen py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-sans text-gold text-center mb-12">
                        Галерея скульптур
                    </h1>
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader />
                        </div>
                    ) : (
                        <ArtworkGrid artworks={artworks} />
                    )}
                </div>
            </main>
        </Layout>
    )
}

export default GalleryPage
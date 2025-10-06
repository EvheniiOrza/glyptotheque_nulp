'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkGrid from '@/components/Gallery/ArtworkGrid'
import { Artwork } from '@/types/artwork'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'

const GalleryPage: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtworks = async () => {
            const { data, error } = await supabase
                .from('artworks')
                .select('id, title, images') // images - масив фото
            if (error) console.error(error)
            else {
                const mapped = data.map((item) => ({
                    id: item.id,
                    title: item.title,
                    image: item.images?.[0] || '/placeholder.jpg',
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
                <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37] text-center mb-12">
                    Галерея скульптур
                </h1>
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader />
                    </div>
                ) : (
                    <ArtworkGrid artworks={artworks} />
                )}
            </main>
        </Layout>
    )
}

export default GalleryPage

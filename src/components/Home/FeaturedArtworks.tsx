'use client'

import React from 'react'
import ArtworkCard from '@/components/Gallery/ArtworkCard'

interface Artwork {
    id: string
    title: string
    image: string
}

interface FeaturedArtworksProps {
    artworks: Artwork[]
}

const FeaturedArtworks: React.FC<FeaturedArtworksProps> = ({ artworks }) => {
    return (
        <section className="py-20 bg-black text-white">
            <h2 className="text-3xl md:text-4xl font-serif text-[#d4af37] mb-10 text-center">
                Популярні скульптури
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {artworks.map((art) => (
                    <ArtworkCard key={art.id} id={art.id} title={art.title} image={art.image} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedArtworks

'use client'

import React from 'react'
import ArtworkCard from '@/components/Gallery/ArtworkCard'
import { Artwork } from '@/types/artwork'

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
                    <ArtworkCard
                        key={art.id}
                        title={art.title}
                        description={art.description || ''}
                        imageUrl={art.imageUrl}
                        onClick={() => console.log('Clicked:', art.id)}
                    />
                ))}
            </div>
        </section>
    )
}

export default FeaturedArtworks

'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ArtworkCard from './ArtworkCard'

interface Artwork {
    id: string | number
    title: string
    description: string
    imageUrl: string
}

interface ArtworkGridProps {
    artworks: Artwork[]
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
    const router = useRouter()

    const handleSelect = (id: string | number) => {
        router.push(`/gallery/${id}`)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
                <ArtworkCard
                    key={artwork.id}
                    title={artwork.title}
                    description={artwork.description}
                    imageUrl={artwork.imageUrl}
                    onClick={() => handleSelect(artwork.id)}
                />
            ))}
        </div>
    )
}

export default ArtworkGrid

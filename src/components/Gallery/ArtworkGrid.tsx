'use client'

import React from 'react'
import ArtworkCard from './ArtworkCard'

interface Artwork {
    id: string | number
    title: string
    description: string
    imageUrl: string
}

interface ArtworkGridProps {
    artworks: Artwork[]
    onSelect?: (artwork: Artwork) => void
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks, onSelect }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
                <ArtworkCard
                    key={artwork.id}
                    title={artwork.title}
                    description={artwork.description}
                    imageUrl={artwork.imageUrl}
                    onClick={() => onSelect?.(artwork)}
                />
            ))}
        </div>
    )
}

export default ArtworkGrid

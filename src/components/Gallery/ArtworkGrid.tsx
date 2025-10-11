'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ArtworkCard from './ArtworkCard'

interface Artwork {
    id: string
    title: string
    description: string
    imageUrl: string
    author?: string
    style?: string
    year?: number
    number?: string
}

interface ArtworkGridProps {
    artworks: Artwork[]
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
    const router = useRouter()

    const handleArtworkClick = (artwork: Artwork) => {
        // ДОДАНО: Зберігаємо позицію прокрутки перед переходом
        sessionStorage.setItem('galleryScrollPosition', window.scrollY.toString())
        router.push(`/gallery/${artwork.id}`)
    }

    // Сортування за полем number
    const sortedArtworks = [...artworks].sort((a, b) => {
        if (!a.number) return 1
        if (!b.number) return -1

        const numA = parseInt(a.number, 10)
        const numB = parseInt(b.number, 10)

        if (isNaN(numA) || isNaN(numB)) {
            return a.number.localeCompare(b.number)
        }

        return numA - numB
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedArtworks.map((artwork) => (
                <ArtworkCard
                    key={artwork.id}
                    title={artwork.title}
                    description={artwork.description}
                    imageUrl={artwork.imageUrl}
                    author={artwork.author}
                    style={artwork.style}
                    year={artwork.year}
                    number={artwork.number}
                    onClick={() => handleArtworkClick(artwork)}
                />
            ))}
        </div>
    )
}

export default ArtworkGrid
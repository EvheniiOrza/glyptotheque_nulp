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
    space_id?: number
}

interface ArtworkGridProps {
    artworks: Artwork[]
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
    const router = useRouter()

    // ДОДАЙТЕ ЦЕ ДЛЯ ПЕРЕВІРКИ ДАНИХ
    console.log('All artworks:', artworks)
    console.log('Artworks with space_id 4:', artworks.filter(artwork => artwork.space_id === 4))

    const handleArtworkClick = (artwork: Artwork) => {
        sessionStorage.setItem('galleryScrollPosition', window.scrollY.toString())
        router.push(`/gallery/${artwork.id}`)
    }

    // Сортування з урахуванням локації (space_id)
    const sortedArtworks = [...artworks].sort((a, b) => {
        const spaceA = a.space_id || 0
        const spaceB = b.space_id || 0

        if (spaceA !== spaceB) {
            return spaceA - spaceB
        }

        if (spaceA === 4) {
            if (!a.number) return 1
            if (!b.number) return -1

            const matchA = a.number.match(/(\d+)([a-zA-Z]*)/)
            const matchB = b.number.match(/(\d+)([a-zA-Z]*)/)

            if (matchA && matchB) {
                const numA = parseInt(matchA[1], 10)
                const numB = parseInt(matchB[1], 10)
                const letterA = matchA[2] || ''
                const letterB = matchB[2] || ''

                if (numA !== numB) {
                    return numA - numB
                }
                return letterA.localeCompare(letterB)
            }
        }

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
                    spaceId={artwork.space_id}
                    onClick={() => handleArtworkClick(artwork)}
                />
            ))}
        </div>
    )
}

export default ArtworkGrid
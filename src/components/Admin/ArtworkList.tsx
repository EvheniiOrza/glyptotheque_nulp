'use client'

import React from 'react'
import Button from '../ui/Button'

interface Artwork {
    id: string | number
    title: string
    description: string
}

interface ArtworkListProps {
    artworks: Artwork[]
    onEdit: (artwork: Artwork) => void
    onDelete: (id: string | number) => void
    onGenerateQR: (id: string | number) => void
}

const ArtworkList: React.FC<ArtworkListProps> = ({ artworks, onEdit, onDelete, onGenerateQR }) => {
    return (
        <div className="space-y-4">
            {artworks.map((art) => (
                <div
                    key={art.id}
                    className="flex justify-between items-center bg-zinc-900 p-4 rounded-2xl border border-zinc-800"
                >
                    <div>
                        <h3 className="text-[#d4af37] font-serif">{art.title}</h3>
                        <p className="text-gray-300 text-sm">{art.description}</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="gold" onClick={() => onEdit(art)}>
                            Редагувати
                        </Button>
                        <Button variant="gold" onClick={() => onDelete(art.id)}>
                            Видалити
                        </Button>
                        <Button variant="gold" onClick={() => onGenerateQR(art.id)}>
                            QR
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArtworkList

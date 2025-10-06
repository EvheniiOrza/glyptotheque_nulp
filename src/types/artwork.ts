export interface ArtworkFormData {
    name: string
    author?: string
    year?: number
    description?: string
    photos: File[]
    qr_url?: string
}

export interface Artwork {
    id: string
    title: string
    description: string // робимо обов’язковим, щоб TS не скаржився
    imageUrl: string
}

interface ArtworkCardProps {
    title: string
    description: string
    imageUrl: string
    onClick?: () => void
}

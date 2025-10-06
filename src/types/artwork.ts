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
    description: string  // обов'язкове
    imageUrl: string
}


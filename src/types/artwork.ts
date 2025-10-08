export interface ArtworkFormData {
    name: string
    author?: string
    style?: string
    year?: number
    description?: string
    photos: File[]
    qr_url?: string
    number?: string
    space_id?: number // Додаємо space_id
}

export interface Artwork {
    id: string
    title: string
    description: string
    imageUrl: string
    author?: string
    style?: string
    year?: number
    number?: string
    space_id?: number // Додаємо space_id
}

export interface SculptureDB {
    id: string
    name: string
    author?: string
    style?: string
    year?: number
    description?: string
    image_urls?: string[]
    qr_url?: string
    number?: string
    space_id?: number // Додаємо space_id
    created_at: string
}
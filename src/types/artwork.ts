export interface ArtworkFormData {
    name: string
    author?: string
    year?: number
    description?: string
    photos: File[]
    qr_url?: string
}

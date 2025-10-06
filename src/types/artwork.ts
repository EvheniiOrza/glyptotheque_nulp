export interface Artwork {
    id: string
    name: string
    author?: string
    year?: number
    description?: string
    image_urls: string[]
    qr_url?: string
}

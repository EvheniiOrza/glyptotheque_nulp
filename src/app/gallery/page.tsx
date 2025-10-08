'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkGrid from '@/components/Gallery/ArtworkGrid'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { Artwork } from '@/types/artwork'
import { SculptureDB } from '@/types/artwork'

const GalleryPage: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtworks = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('id, name, description, image_urls, author, style, number')

            if (error) console.error(error)
            else if (data) {
                const mapped = data.map((item: Partial<SculptureDB>) => ({
                    id: item.id!,
                    title: item.name!,
                    description: item.description || '',
                    imageUrl: item.image_urls?.[0] || '/placeholder.jpg',
                    author: item.author,
                    style: item.style,
                    number: item.number,
                }))
                setArtworks(mapped)
                setFilteredArtworks(mapped)
            }

            setLoading(false)
        }

        fetchArtworks()
    }, [])

    // Фільтрація за номером
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredArtworks(artworks)
        } else {
            const filtered = artworks.filter(artwork =>
                artwork.number?.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredArtworks(filtered)
        }
    }, [searchTerm, artworks])

    return (
        <Layout>
            <main className="bg-gray-100 text-black min-h-screen py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-sans text-black text-center font-bold mb-12">
                        ЕКСПОНАТИ
                    </h1>

                    {/* Пошуковий рядок */}
                    <div className="max-w-md mx-auto mb-12">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Пошук за номером експонату..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 text-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500
                                         focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none
                                         transition-all duration-200 shadow-sm"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Інформація про результати пошуку */}
                        {searchTerm && (
                            <div className="mt-4 text-center">
                                <p className="text-gray-600">
                                    {filteredArtworks.length === 0 ? (
                                        `Експонат з номером "${searchTerm}" не знайдено`
                                    ) : (
                                        `Знайдено експонатів: ${filteredArtworks.length}`
                                    )}
                                </p>
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader />
                        </div>
                    ) : (
                        <ArtworkGrid artworks={filteredArtworks} />
                    )}
                </div>
            </main>
        </Layout>
    )
}

export default GalleryPage
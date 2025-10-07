'use client'

import React from 'react'
import ArtworkCard from '@/components/Gallery/ArtworkCard'
import { Artwork } from '@/types/artwork'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface FeaturedArtworksProps {
    artworks: Artwork[]
}

const FeaturedArtworks: React.FC<FeaturedArtworksProps> = ({ artworks }) => {
    const router = useRouter()

    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-sans text-gold mb-4 text-center"
                >
                    Останні додані скульптури
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-center mb-10 max-w-2xl mx-auto"
                >
                    Ознайомтеся з найновішими доданими скульптурами до нашої колекції
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artworks.map((art, index) => (
                        <motion.div
                            key={art.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ArtworkCard
                                title={art.title}
                                description={art.description || ''}
                                imageUrl={art.imageUrl}
                                onClick={() => router.push(`/gallery/${art.id}`)}
                            />
                        </motion.div>
                    ))}
                </div>

                {artworks.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500 text-lg mb-4">Ще немає скульптур у колекції</p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default FeaturedArtworks
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

interface ArtworkModalProps {
    isOpen: boolean
    onClose: () => void
    images: string[]
    title?: string
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ isOpen, onClose, images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!images || images.length === 0) return null

    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-gray-100 rounded-none max-w-3xl w-full overflow-hidden relative shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Artwork ${currentIndex + 1}`}
                            className="w-full h-96 object-cover"
                        />

                        <div className="p-6 flex flex-col space-y-4">
                            {title && <h2 className="text-gold font-sans text-2xl">{title}</h2>}

                            {images.length > 1 && (
                                <div className="flex justify-between">
                                    <Button variant="gold" onClick={prevImage}>
                                        ← Попереднє
                                    </Button>
                                    <Button variant="gold" onClick={nextImage}>
                                        Наступне →
                                    </Button>
                                </div>
                            )}

                            <Button variant="gold" onClick={onClose}>
                                Закрити
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ArtworkModal
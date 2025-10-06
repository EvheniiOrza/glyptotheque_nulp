'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

interface ArtworkModalProps {
    isOpen: boolean
    artwork: {
        title: string
        description: string
        imageUrl: string
    } | null
    onClose: () => void
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ isOpen, artwork, onClose }) => {
    if (!artwork) return null

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
                        className="bg-zinc-900 rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-96 object-cover" />
                        <div className="p-6">
                            <h2 className="text-[#d4af37] font-serif text-2xl mb-2">{artwork.title}</h2>
                            <p className="text-gray-300 mb-4">{artwork.description}</p>
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

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

interface ArtworkCardProps {
    title: string
    description: string
    imageUrl: string
    author?: string
    style?: string // Додаємо стиль
    number?: string // Додаємо номер
    onClick?: () => void
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
                                                     title,
                                                     description,
                                                     imageUrl,
                                                     author,
                                                     style,
                                                     number,
                                                     onClick
                                                 }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-black font-sans text-lg mb-2">{title}</h3>
                {author && <p className="text-black text-sm font-body mb-1">Автор: {author}</p>}
                {style && <p className="text-black text-sm font-body mb-1">Стиль: {style}</p>}
                {number && <p className="text-black text-3xl font-body font-bold mb-1">{number}</p>}
                <p className="text-black text-sm font-body">{description}</p>
            </div>
        </motion.div>
    )
}

export default ArtworkCard
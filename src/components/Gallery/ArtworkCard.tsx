'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

interface ArtworkCardProps {
    title: string
    description: string
    imageUrl: string
    onClick?: () => void
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ title, description, imageUrl, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-black border border-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-gold font-sans text-lg mb-2">{title}</h3>
                <p className="text-gray-300 text-sm font-body">{description}</p>
            </div>
        </motion.div>
    )
}

export default ArtworkCard

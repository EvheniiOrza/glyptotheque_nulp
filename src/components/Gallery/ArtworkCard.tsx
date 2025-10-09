'use client'
import supabase from '@/utils/supabaseClient'
import React from 'react'
import { motion } from 'framer-motion'

interface ArtworkCardProps {
    title: string
    description: string
    imageUrl: string
    author?: string
    style?: string
    year?: number
    number?: string
    onClick?: () => void
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
                                                     title,
                                                     description,
                                                     imageUrl,
                                                     author,
                                                     style,
                                                     year,
                                                     number,
                                                     onClick
                                                 }) => {

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-300 shadow-sm overflow-hidden cursor-pointer group h-full flex flex-col"
            onClick={onClick}
        >
            {/* Контейнер 1:1 для картинки без фону */}
            <div className="relative aspect-square flex items-center justify-center overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                {number && (
                    <p className="text-black text-2xl font-bold font-sans mb-3">
                        {number}
                    </p>
                )}

                <div className="mb-3">
                    {author && (
                        <p className="text-black text-lg font-semibold font-sans mb-1">
                            {author}
                        </p>
                    )}
                    <p className="text-black text-lg font-semibold font-sans mb-1">
                        {title}
                    </p>

                    {/* ОКРЕМІ БЛОКИ ДЛЯ РОКУ ТА СТИЛЮ */}
                    {year && (
                        <p className="text-black text-base font-body">
                            {year}
                        </p>
                    )}
                    {style && (
                        <p className="text-black text-base font-body">
                            {style}
                        </p>
                    )}
                </div>

                {description && (
                    <p className="text-black text-sm font-body leading-relaxed mt-auto">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    )
}

export default ArtworkCard
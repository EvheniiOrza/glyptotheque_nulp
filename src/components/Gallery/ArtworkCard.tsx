'use client'

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
            {/* Контейнер для картинки з фіксованою висотою */}
            <div className="h-64 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Контент з фіксованою структурою */}
            <div className="p-4 flex-1 flex flex-col">
                {/* Порядковий номер */}
                {number && (
                    <p className="text-black text-2xl font-bold font-sans mb-3">
                        {number}
                    </p>
                )}

                {/* Основна інформація */}
                <div className="mb-3">
                    {author && (
                        <p className="text-black text-lg font-semibold font-sans mb-1">
                            {author}
                        </p>
                    )}
                    <p className="text-black text-lg font-semibold font-sans mb-1">
                        {title}
                    </p>
                    {(year || style) && (
                        <p className="text-black text-base font-body">
                            {year && <span>{year}</span>}
                            {year && style && <span>, </span>}
                            {style && <span>{style}</span>}
                        </p>
                    )}
                </div>

                {/* Коментар до твору */}
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
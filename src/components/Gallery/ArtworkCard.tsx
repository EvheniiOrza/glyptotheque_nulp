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
    spaceId?: number
    onClick: () => void
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
                                                     title,
                                                     description,
                                                     imageUrl,
                                                     author,
                                                     style,
                                                     year,
                                                     number,
                                                     spaceId,
                                                     onClick
                                                 }) => {

    // ДОДАЙТЕ ЦЕ ДЛЯ ПЕРЕВІРКИ
    console.log('ArtworkCard props:', { title, number, spaceId })

    // Визначаємо, чи це локація 4 (подвір'я-автостоянка)
    const isParkingLocation = spaceId === 4

    console.log('Is parking location:', isParkingLocation)

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-300 shadow-sm overflow-hidden cursor-pointer group h-full flex flex-col relative"
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
                <div className="flex justify-between items-start mb-3">
                    {number && (
                        <p className="text-black text-2xl font-bold font-sans">
                            {number}
                        </p>
                    )}
                    {/* Дубльована інформація про локацію внизу для кращої видимості */}
                    {isParkingLocation && (
                        <span className="text-black text-sm font-medium bg-gray-200 px-2 py-1 ">
                            Подвір&#39;я-автостоянка
                        </span>
                    )}
                </div>

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
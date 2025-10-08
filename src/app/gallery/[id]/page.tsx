'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface SculptureDetail {
    id: string
    name: string
    author: string
    style?: string // Додаємо стиль
    year: number
    number?: string // Додаємо номер
    description?: string
    image_urls: string[]
    created_at: string
}

const SculptureDetailPage: React.FC = () => {
    const { id } = useParams()
    const [sculpture, setSculpture] = useState<SculptureDetail | null>(null)
    const [loading, setLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchSculpture = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .eq('id', id)
                .single()

            if (error) console.error(error)
            else setSculpture(data)
            setLoading(false)
        }

        if (id) fetchSculpture()
    }, [id])

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center py-40">
                    <Loader />
                </div>
            </Layout>
        )
    }

    if (!sculpture) {
        return (
            <Layout>
                <div className="flex justify-center items-center py-40 text-red-500 text-xl font-semibold">
                    Скульптура не знайдена
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <main className="bg-gray-100 text-black min-h-screen py-16 px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl font-sans text-black text-center mb-12">
                    {sculpture.name}
                </h1>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Галерея фото */}
                    <div className="flex flex-col space-y-4">
                        {sculpture.image_urls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`${sculpture.name} ${index + 1}`}
                                className="w-full h-full md:h-96 object-cover rounded-none shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedImage(url)}
                            />
                        ))}
                    </div>

                    {/* Детальна інформація */}
                    <div className="flex flex-col space-y-6 text-black text-lg font-body">
                        {sculpture.author && (
                            <p>
                                <span className="text-black font-sans">Автор:</span> {sculpture.author}
                            </p>
                        )}
                        {sculpture.style && (
                            <p>
                                <span className="text-black font-sans">Стиль:</span> {sculpture.style}
                            </p>
                        )}
                        {sculpture.year && (
                            <p>
                                <span className="text-black font-sans">Рік створення:</span> {sculpture.year}
                            </p>
                        )}
                        {sculpture.number && (
                            <p>
                                <span className="text-black font-sans">Номер:</span> {sculpture.number}
                            </p>
                        )}
                        {sculpture.description && (
                            <div>
                                <h2 className="text-black font-sans mb-2">Опис</h2>
                                <p className="leading-relaxed">{sculpture.description}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Модалка для великого перегляду фото */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-gray-100 rounded-2xl max-w-4xl w-full overflow-hidden relative shadow-2xl"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Велике зображення"
                                    className="w-full h-[500px] md:h-[700px] object-contain bg-white"
                                />
                                <div className="p-6 flex justify-end">
                                    <Button variant="gold" onClick={() => setSelectedImage(null)}>
                                        Закрити
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </Layout>
    )
}

export default SculptureDetailPage
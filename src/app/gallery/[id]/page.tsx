'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface SculptureDetail {
    id: string
    name: string
    author: string
    style?: string
    year: number
    number?: string
    description?: string
    image_urls: string[]
    created_at: string
}

const SculptureDetailPage: React.FC = () => {
    const { id } = useParams()
    const router = useRouter()
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

    const handleBack = () => {
        router.push('/gallery')
    }

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
                {/* Кнопка назад */}
                <div className="max-w-6xl mx-auto mb-8">
                    <button
                        onClick={handleBack}
                        className="flex items-center text-gray-600 hover:text-black transition-colors duration-200 text-lg font-sans mb-8"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Назад до галереї
                    </button>
                </div>



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
                        {sculpture.number && (
                            <p>
                                <span className="font-bold text-black text-3xl">{sculpture.number}</span>
                            </p>
                        )}
                        {sculpture.author && (
                        <p>
                            <span className="text-black font-sans"></span> {sculpture.author}
                        </p>
                        )}
                        <p className="text-black font-sans">
                            {sculpture.name}
                        </p>
                        {sculpture.year && (
                            <p>
                                <span className="text-black font-sans"></span> {sculpture.year}
                            </p>
                        )}
                        {sculpture.style && (
                            <p>
                                <span className="text-black font-sans"></span> {sculpture.style}
                            </p>
                        )}
                        {sculpture.description && (
                            <div>
                                <h2 className="text-black font-sans mb-2"></h2>
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
                                className="bg-gray-100 rounded-none max-w-4xl w-full overflow-hidden relative shadow-2xl"
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
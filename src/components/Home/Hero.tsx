'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'

import MinimalTextSection from "./book";

const AboutPage: React.FC = () => {
    const router = useRouter()

    return (
        <Layout>
            <div className="min-h-screen bg-white text-black pt-28 sm:pt-32 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Заголовок */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h1
                            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-tight leading-tight"
                            style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}
                        >
                            Гліптотека
                        </h1>
                        <p
                            className="text-xl sm:text-2xl text-gray-700"
                            style={{ fontFamily: 'MursGotic - KeyRegular, sans-serif' }}
                        >
                            Куратор Павло Гудімов
                        </p>
                    </motion.div>

                    {/* Основний текст */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-lg leading-relaxed sm:leading-loose space-y-6 sm:space-y-8"
                        style={{ fontFamily: 'MursGotic - KeyRegular, sans-serif' }}
                    >
                       <MinimalTextSection/>
                    </motion.div>

                    {/* Кнопки дій - правильний порядок як у Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-12 sm:mt-16"
                    >
                        <Button
                            variant="dark"
                            onClick={() => router.push('/place')}
                            className="bg-gray-500 hover:bg-gray-200 text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-none transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Простори
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/gallery')}
                            className="bg-gray-500 hover:bg-gray-200 text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-none transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Експонати
                        </Button>
                    </motion.div>

                    {/* Додаткові кнопки - правильний порядок */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4"
                    >
                        <Button
                            variant="dark"
                            onClick={() => router.push('/interview')}
                            className="bg-gray-500 text-black hover:bg-gray-200 hover:text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-none transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Тексти
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/organizers')}
                            className="bg-gray-500 hover:bg-gray-200 text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-none transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Організатори
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/festival')}
                            className="bg-gray-500 hover:bg-gray-200 text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-none transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Про Фестиваль
                        </Button>
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage
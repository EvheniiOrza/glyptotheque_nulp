'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const info: React.FC = () => {
    return (
        <Layout>
            <main className="bg-[#ffff] text-black min-h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto px-4 text-center">
                    {/* Логотип */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="bg-white flex items-center justify-center">
                            <img
                                src="/logos/cafedra.png"
                                alt="Кафедра СШІ"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Текст */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <p className="text-xl text-gray-700 font-light">
                            Цей сайт створено<br />
                            <span className="font-semibold">Кафедрою СШІ</span>
                        </p>
                    </motion.div>
                </div>
            </main>
        </Layout>
    )
}

export default info
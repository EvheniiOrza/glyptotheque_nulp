'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const FestivalPage: React.FC = () => {


    return (
        <Layout>
            <main className="bg-gray-100 text-black min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-sans text-center mb-12"
                        style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}
                    >
                        Про Фестиваль
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Львівський тиждень скульптури 2025
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                <strong>Тема: &#34;Діалоги&#34;</strong>
                            </p>
                            <p>
                                У Львові відкривається четвертий Тиждень скульптури, що має тему — «Діалоги».
                                Фестиваль був започаткований у час війни й став платформою для розвитку мистецтва
                                та його інтеграції у всі простори й процеси міста.
                            </p>
                            <p>
                                Ви побачите близько 50 скульптур просто неба, конкурс молодої скульптури,
                                персональні виставки митців і, звісно, головний проєкт — «Гліптотека»,
                                який цього року відбувається за участі нового партнера фестивалю — Львівської політехніки.
                            </p>
                            <p>
                                Класичне й сучасне мистецтво зустрічаються, щоб взаємодіяти, контрастувати та бути в діалозі.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </Layout>
    )
}

export default FestivalPage
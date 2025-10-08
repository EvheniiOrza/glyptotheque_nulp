'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const ProjectPage: React.FC = () => {
    return (
        <Layout>
            <main className="bg-gray-100 text-black min-h-screen py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-sans text-center mb-12"
                        style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}
                    >
                        Про проект
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Що таке Гліптотека?</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                <strong>Glyptein</strong> грецькою означає <em>&#34;різати камінь&#34;</em>, а закінчення <em>&#34;-тека&#34;</em>
                                за аналогією бібліотеки чи пінакотеки означає збірку або колекцію. У нашому випадку — саме скульптури.
                            </p>
                            <p>
                                Відомо декілька музеїв, які носять цю розкішну назву у Мюнхені, Копенгагені та Афінах.
                                Тому ми пропонуємо в рамках вже четвертого фестивалю Львівський тиждень скульптури створити
                                нашу львівську гліптотеку в корпусах Політехніки на вулиці Князя Романа.
                            </p>
                            <p>
                                Цей архітектурний ансамбль щедро декорований скульптурними творами на фасадах.
                                Як наприклад ця будівля колишньої гімназії імені Франца Йосифа 1876 року за проєктом
                                Юліуша Гохбергера, де з вулиці на рівні другого поверху ми можемо бачити скульптурні
                                фігури польських науковців, освітян та діячів культури авторства Тадеуша Баронча.
                            </p>
                            <p>
                                Наша Гліптотека далека від античних стандартів — це суміш різних періодів, тем,
                                жанрів і авторів від давніх часів до сьогоднішнього дня. Тема цьогорічного скульптурного
                                фестивалю — <strong>&#34;Діалоги&#34;</strong>.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Команда проєкту</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Керівництво:</h3>
                                <ul className="space-y-2">
                                    <li>• Куратор: Павло Гудімов</li>
                                    <li>• Менеджмент: АГ, НМ</li>
                                    <li>• Консультанти</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Команда:</h3>
                                <ul className="space-y-2">
                                    <li>• Тексти: Діана Клочко, Павло Гудімов</li>
                                    <li>• Дизайн</li>
                                    <li>• Експозиція</li>
                                    <li>• Ректорка</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </Layout>
    )
}

export default ProjectPage
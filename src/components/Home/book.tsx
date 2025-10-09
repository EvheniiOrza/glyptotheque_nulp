'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MinimalTextSection = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const shortText = "Glyptein грецькою означає «різати камінь», а –тека — «збірка». У межах фестивалю «Львівський тиждень скульптури» ми створюємо нашу львівську Гліптотеку..."

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
        >
            {/* Короткий уривок або повний текст */}
            <motion.div
                className="bg-white rounded-none p-6 shadow-sm border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        <motion.div
                            key="short"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-700 font-body leading-relaxed mb-4">
                                {shortText}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 text-gray-700 font-body leading-relaxed"
                        >
                            <p>
                                Якщо ви не знаєте слово, яким названо наш проєкт у Політехніці, — прошу не лякатись.
                            </p>

                            <p>
                                Відомо кілька музеїв, які носять цю розкішну назву — у Мюнхені, Копенгагені та Афінах.
                            </p>

                            <p>
                                У межах уже четвертого фестивалю «Львівський тиждень скульптури» ми створюємо нашу львівську Гліптотеку в корпусах Політехніки на вулиці Князя Романа — у прекрасному архітектурному ансамблі, щедро декорованому скульптурними творами на фасадах.
                            </p>

                            <p>
                                Наприклад, ця будівля колишньої гімназії імені Франца Йосифа (1876 рік, проєкт Юліуша Гохбергера) прикрашена фігурами польських науковців, освітян і діячів культури авторства Тадеуша Баронча.
                            </p>

                            <p>
                                Наша Гліптотека далека від античних стандартів — це поєднання різних періодів, тем, жанрів і авторів: від давнини до сьогодення.
                            </p>

                            <p>
                                Нагадуємо тему цьогорічного скульптурного фестивалю — <strong>«Діалоги»</strong>.
                            </p>

                            <p>
                                Бажаємо натхненного перегляду і подорожі в часі та просторі.
                            </p>

                            <p className="text-gray-600 text-sm italic">
                                Дякуємо всім, хто долучився до організації та підтримки фестивалю.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Кнопка розкриття */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group mt-4"
                >
                    <span className="text-sm font-medium">
                        {isExpanded ? 'Згорнути' : 'Читати далі'}
                    </span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-500 group-hover:text-gray-700"
                    >
                        ↓
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}

export default MinimalTextSection
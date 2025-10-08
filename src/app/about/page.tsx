'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 text-black overflow-x-hidden w-screen max-w-[100vw]">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full px-4 text-center mb-12 pt-8"
                >
                    <div className="mx-auto w-full max-w-[95vw]">
                        <h1 className="text-3xl md:text-4xl font-sans text-black mb-4 break-words">
                            Про нас
                        </h1>
                        <p className="text-base md:text-lg text-gray-800 font-body mx-auto break-words leading-relaxed max-w-[90vw]">
                            Відкриваємо красу скульптурної спадщини через сучасні технології
                        </p>
                    </div>
                </motion.section>

                {/* Main Content */}
                <div className="w-full px-4">
                    <div className="mx-auto w-full max-w-[95vw]">
                        {/* Author Introduction */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-12 w-full"
                        >
                            <div className="bg-white rounded-none p-5 border-l-4 border-gray-300 shadow-sm w-full">
                                <h2 className="text-xl md:text-2xl font-sans text-black mb-3 break-words">
                                    Навіщо нам гліптотека?
                                </h2>
                                <p className="text-gray-800 font-body text-base">
                                    <strong className="text-black font-display">Діана Клочко</strong>
                                </p>
                            </div>
                        </motion.div>

                        {/* Content Sections */}
                        <div className="space-y-8 w-full">
                            {/* Section 1 */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="w-full"
                            >
                                <p className="text-gray-800 font-body text-base leading-relaxed break-words">
                                    Вперше в історії людства так поставив питання на початку ХІХ століття монарх{' '}
                                    <strong className="text-black font-display">Людвіг І Баварський</strong>.
                                    Він був противником Наполеона, але швидко зрозумів думку французького імператора,
                                    що велич держави не в останню чергу тримається на колекціях творів давніх цивілізацій.
                                </p>
                            </motion.section>

                            {/* Historical Sections with Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                            >
                                <div className="bg-white rounded-none p-4 border-l-4 border-gray-300 shadow-sm w-full break-words">
                                    <h3 className="text-lg md:text-xl font-sans text-black mb-3">Мюнхенська Гліптотека</h3>
                                    <p className="text-gray-800 font-body text-sm leading-relaxed">
                                        Усього 14 кімнат мала класицистична будівля, споруджена за проєктом Лео фон Кленце,
                                        та чітка структура показу експонатів доби античності швидко перетворили цей невеликий
                                        музей на зразковий для вивчення античної скульптури.
                                    </p>
                                </div>

                                <div className="bg-white rounded-none p-4 border-l-4 border-gray-300 shadow-sm w-full break-words">
                                    <h3 className="text-lg md:text-xl font-sans text-black mb-3">Гліптотека Карлсберга</h3>
                                    <p className="text-gray-800 font-body text-sm leading-relaxed">
                                        «Нова гліптотека Карлсберга» постала у Копенгагені завдяки Карлу Якобсену,
                                        сину засновника знаменитої броварні. Задум архітектора стосувався музею денного
                                        світла, відкритого лише в світлий час доби.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Modern Era Section */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="bg-white rounded-none p-5 border-l-4 border-gray-300 shadow-sm w-full break-words"
                            >
                                <h3 className="text-xl md:text-2xl font-sans text-black mb-4 text-center">
                                    Сучасна ера гліптотек
                                </h3>
                                <div className="text-gray-800 font-body text-base leading-relaxed space-y-3">
                                    <p>
                                        ХХ століття не сприяло розвитку ідеї музею, присвяченого давній скульптурі,
                                        інтерес до неї не був втрачений, але тенденції арт-ринку і законодавства європейських
                                        країн стосовно археологічних знахідок, здавалось, унеможливили появу нових музеїв такого типу.
                                    </p>
                                    <p>
                                        Однак у Греції, що володіє найбільшою кількістю скульптурних артефактів античності,
                                        на початку ХХІ століття почався масштабний процес створення Нового музею Акрополя.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Ukrainian Context */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="w-full"
                            >
                                <div className="bg-white rounded-none p-5 border-l-4 border-gray-300 shadow-sm w-full break-words">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-sans text-black mb-4 text-center">
                                        Навіщо нам, українцям, гліптотека?
                                    </h2>
                                    <div className="text-gray-800 font-body text-base leading-relaxed space-y-3">
                                        <p>
                                            Мюнхенці й копенгагенці не мали великого античного минулого, зафіксованого у скульптурних артефактах,
                                            та у сприятливих умовах археологічного буму витворили принцип музеєфікації творів, що має загальноєвропейську цінність.
                                        </p>
                                        <p>
                                            Українська культура входить до середземноморської культурної традиції, відтак музеї зберігають чимало артефактів,
                                            що належать до доби античності, хоча власне кам&#39;яна скульптура не є пріоритетною ні за чисельністю, ні за збереженістю.
                                        </p>
                                        <p className="text-black font-display font-semibold">
                                            Однак сама ідея «гліптотеки», тобто збереження, реставрації, демонстрації фрагментів,
                                            решток скульптурних артефактів давніх епох може бути переосмислена і доповнена.
                                        </p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Mission Statement */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="text-center py-6 w-full"
                            >
                                <div className="mx-auto w-full max-w-[90vw]">
                                    <h3 className="text-lg md:text-xl font-sans text-black mb-4">
                                        Наша місія
                                    </h3>
                                    <p className="text-gray-800 font-body text-base md:text-lg leading-relaxed break-words">
                                        Створюємо сучасний цифровий простір для збереження, вивчення та популяризації
                                        скульптурної спадщини України, поєднуючи традиційні цінності з інноваційними технологіями
                                    </p>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage
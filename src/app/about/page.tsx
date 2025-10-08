'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 text-black py-12">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-sans text-black mb-6">
                        Про нас
                    </h1>
                    <p className="text-xl text-gray-800 font-body max-w-3xl mx-auto">
                        Відкриваємо красу скульптурної спадщини через сучасні технології
                    </p>
                </motion.section>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Author Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-16"
                    >
                        <div className="bg-white rounded-2xl p-8 border-l-4 border-gold shadow-sm">
                            <h2 className="text-3xl font-sans text-black mb-4">
                                Навіщо нам гліптотека?
                            </h2>
                            <p className="text-gray-800 font-body text-lg">
                                <strong className="text-black font-display">Діана Клочко</strong>
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-none"
                        >
                            <p className="text-gray-800 font-body text-lg leading-relaxed">
                                Вперше в історії людства так поставив питання на початку ХІХ століття монарх
                                <strong className="text-black font-display"> Людвіг І Баварський</strong>. Він був противником Наполеона,
                                але швидко зрозумів думку французького імператора, що велич держави не в останню
                                чергу тримається на колекціях творів давніх цивілізацій.
                            </p>
                        </motion.section>

                        {/* Historical Sections with Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            <div className="bg-white rounded-2xl p-6 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-sans text-black mb-4">Мюнхенська Гліптотека</h3>
                                <p className="text-gray-800 font-body leading-relaxed">
                                    Усього 14 кімнат мала класицистична будівля, споруджена за проєктом Лео фон Кленце,
                                    та чітка структура показу експонатів доби античності швидко перетворили цей невеликий
                                    музей на зразковий для вивчення античної скульптури.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-sans text-black mb-4">Гліптотека Карлсберга</h3>
                                <p className="text-gray-800 font-body leading-relaxed">
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
                            className="bg-white rounded-2xl p-8 border-l-4 border-gold shadow-sm"
                        >
                            <h3 className="text-3xl font-sans text-black mb-6 text-center">
                                Сучасна ера гліптотек
                            </h3>
                            <div className="text-gray-800 font-body text-lg leading-relaxed space-y-4">
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
                            className="text-center"
                        >
                            <div className="bg-white rounded-2xl p-8 border-l-4 border-gold shadow-sm">
                                <h2 className="text-4xl font-sans text-black mb-6">
                                    Навіщо нам, українцям, гліптотека?
                                </h2>
                                <div className="text-gray-800 font-body text-lg leading-relaxed space-y-4 max-w-4xl mx-auto">
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
                            className="text-center py-12"
                        >
                            <div className="max-w-4xl mx-auto">
                                <h3 className="text-2xl font-sans text-black mb-6">
                                    Наша місія
                                </h3>
                                <p className="text-gray-800 font-body text-xl leading-relaxed">
                                    Створюємо сучасний цифровий простір для збереження, вивчення та популяризації
                                    скульптурної спадщини України, поєднуючи традиційні цінності з інноваційними технологіями
                                </p>
                            </div>
                        </motion.section>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gold opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
        </Layout>
    )
}

export default AboutPage
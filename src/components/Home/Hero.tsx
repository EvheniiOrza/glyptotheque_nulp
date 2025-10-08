'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Hero: React.FC = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 text-black">
            {/* Main Content */}
            <main className="pt-28 sm:pt-32 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Заголовок Гліптотека */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-bold text-center mb-12 sm:mb-16 tracking-tight leading-tight"
                        style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}
                    >
                        Гліптотека
                    </motion.h1>

                    {/* Основний текст */}
                    <div className="space-y-8 sm:space-y-12">
                        {/* Перший блок тексту */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-base sm:text-lg leading-relaxed sm:leading-loose"
                            style={{ fontFamily: 'MursGotic - KeyRegular, sans-serif' }}
                        >
                            <p className="mb-4 sm:mb-6">
                                <strong className="text-lg sm:text-xl">Львівський тиждень скульптури 2025. Діалоги.</strong>
                            </p>
                            <p className="mb-4 sm:mb-6">
                                У Львові відкривається четвертий Тиждень скульптури, що має тему — «Діалоги».
                                Фестиваль був започаткований у час війни й став платформою для розвитку мистецтва та його інтеграції у всі простори й процеси міста.
                            </p>
                            <p className="mb-4 sm:mb-6">
                                Ви побачите близько 50 скульптур просто неба, конкурс молодої скульптури, персональні виставки митців і, звісно, головний проєкт — «Гліптотека», який цього року відбувається за участі нового партнера фестивалю — Львівської політехніки. Точніше — у корпусах історичних будівель на вулиці Князя Романа, 1–3 та 5, у центрі Львова.
                            </p>
                            <p className="mb-4 sm:mb-6">
                                Класичне й сучасне мистецтво зустрічаються, щоб взаємодіяти, контрастувати та бути в діалозі.
                            </p>
                            <p className="mb-4 sm:mb-6">
                                Цьогоріч Тиждень скульптури став більш міжнародним: скульптори з Німеччини та Литви взяли участь, створивши власні твори для міського простору. У Стрийському парку доповнено скульптурний маршрут новою галереєю на платановій алеї. Таког буде створено скульптурну мапу Львова, очищено від бруду скульптури періоду незалежності та проведено освітню — особливо скульптурну — програму для дітей і дорослих.
                            </p>
                            <p>
                                Завершиться фестиваль конференцією «Скульптура в публічному просторі».
                                Куратор Львівського тижня скульптури — Павло Гудімов.
                            </p>
                        </motion.div>

                        {/* Другий блок тексту */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-base sm:text-lg leading-relaxed sm:leading-loose"
                            style={{ fontFamily: 'MursGotic - KeyRegular, sans-serif' }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}>
                                Навіщо нам гліптотека?
                            </h2>
                            <p className="mb-4 italic text-sm sm:text-base">Діана Клочко</p>

                            <div className="space-y-4 sm:space-y-6">
                                <p>
                                    Вперше в історії людства так поставив питання на початку ХІХ століття монарх Людвіг І Баварський. Він був противником Наполеона, але швидко зрозумів думку французького імператора, що велич держави не в останню чергу тримається на колекціях творів давніх цивілізацій.
                                </p>

                                <p>
                                    Ймовірно, розуміючи, що його приватна колекція повинна чимось вигідно відрізнятись від інших музейних збірок, що повставали у європейських країнах на основі велетенських монарших і папських зібрань, Людвіг вирішив її оригінально оформити.
                                </p>

                                <p>
                                    Усього 14 кімнат мала класицистична будівля, споруджена за проєктом Лео фон Кленце, та чітка структура показу експонатів доби античності – від архаїки близько 650 р.до н.е до пізньоелінського 4 ст. н.е., – швидко перетворили цей невеликий музей на зразковий для вивчення античної скульптури.
                                </p>

                                <p>
                                    Після смерті монарха колекція стала державною і продовжувала поповнюватись, до неї почали додавати і ювелірні коштовності доби елінізму, наприклад, т.зв. «діадема Льоба», що походить з Пантікапей, нинішня Керч, яку датують 150 р. до н.е.
                                </p>

                                <p>
                                    Мюнхенська Гліптотека у ХІХ столітті була зразком для європейських вчених і туристів, які вивчали історію античної скульптури як основи для кількох стилів сучасності (класицизм, ампір, історизм), та особливо полонила уяву датчан.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Кнопки дій */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-12 sm:mt-16"
                    >
                        <Button
                            variant="dark"
                            onClick={() => router.push('/gallery')}
                            className="bg-gray-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Перейти до Галереї
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/place')}
                            className="bg-gray-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Простори
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/project')}
                            className="bg-gray-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Про проект
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/festival')}
                            className="bg-gray-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Про Фестиваль
                        </Button>
                    </motion.div>

                    {/* Додаткові кнопки */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4"
                    >
                        <Button
                            variant="dark"
                            onClick={() => router.push('/interview')}
                            className="bg-gray-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Інтерв&#39;ю
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => router.push('/about')}
                            className="bg-gray-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center border border-gray-400"
                        >
                            Про нас
                        </Button>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default Hero
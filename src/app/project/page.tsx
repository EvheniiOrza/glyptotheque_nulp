'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
    // Дані партнерів з логотипами
    const partners = {
        organizers: [
            { name: "Львівська міська рада", logo: "/logos/lvivrada.png" },
            { name: "Я Галерея", logo: "/logos/gallry.png" },
            { name: "Coma - Сучасний музей мистецтва", logo: "/logos/coma.png" },
            { name: "Львівська обласна військова адміністрація", logo: "/logos/loda.png" },
            { name: "Фундація ЧервонеЧорне", logo: "/logos/chervone.png" }
        ],
        coOrganizers: [
            { name: "Музей народної архітектури і побуту ім. Климентія Шептицького", logo: "/logos/shevchenko-gai.png" },
            { name: "Jam Factory", logo: "/logos/jam-factory.png" },
            { name: "Львівська політехніка", logo: "/logos/lpnu.png" },
            { name: "Культурний простір MONO", logo: "/logos/mono.png" },
            { name: "Дизайн-студія MAKHNO", logo: "/logos/makhno.png" },
            { name: "Стрийський парк", logo: "/logos/stryi-park.png" },
            { name: "Литовський культурний інститут", logo: "/logos/lithuanian-institute.png" },
            { name: "Територія Терору", logo: "/logos/terror-territory.png" },
            { name: "Міжрегіональне вище професійне училище автомобільного транспорту та будівництва", logo: "/logos/transport-college.png" }
        ],
        mediaPartners: [
            { name: "ZAXID.NET", logo: "/logos/zaxid.png" },
            { name: "Холдинг емоцій «!FEST»", logo: "/logos/fest.png" },
            { name: "lviv.travel", logo: "/logos/lviv-travel.png" },
            { name: "Укрзалізниця", logo: "/logos/uz.png" }
        ],
        hotelPartner: [
            { name: "ibis", logo: "/logos/ibis.png" }
        ]
    }

    const sponsors = [
        "Олена Вовк",
        "Гліб Загорій",
        "Андрій Федорів",
        "Юрій Сташків (Фундація ЧервонеЧорне)",
        "Гарольд Біндер (Jam Factory)",
        "Фундація Адама Харбера",
        "девелоперське бюро Будинки та люди",
        "Віктор Гищук",
        "Олег Мацех"
    ]

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
                        Про проєкт
                    </motion.h1>

                    {/* Секція про фестиваль */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-none shadow-lg p-8 mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Львівський тиждень скульптури 2025
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                <strong className="text-black">Тема: «Діалоги»</strong>
                            </p>
                            <p>
                                Ласкаво просимо до четвертого Львівського тижня скульптури! Цей фестиваль народився
                                у складний воєнний час і став потужною платформою для розвитку мистецтва, інтегруючи
                                його в усі куточки нашого міста.
                            </p>
                            <p>
                                На вас чекають понад 50 скульптур просто неба, захоплюючий конкурс молодої скульптури,
                                персональні виставки таборатов і, звичайно, головна подія — «Гліптотека», яка цього
                                року створюється разом з нашим новим партнером — Львівською політехнікою.
                            </p>
                            <p>
                                Класичне та сучасне мистецтво зустрічаються, щоб вести між собою захопливий діалог —
                                іноді контрастуючи, іноді гармонійно поєднуючись.
                            </p>
                        </div>
                    </motion.div>

                    {/* Секція про Гліптотеку */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-none shadow-lg p-8 mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Що таке Гліптотека?</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                <strong>Glyptein</strong> з грецької мови перекладається як <em>«різати камінь»</em>,
                                а закінчення <em>«-тека»</em> (як у бібліотеці чи пінакотеці) означає збірку чи колекцію.
                                У нашому випадку — це колекція скульптур.
                            </p>
                            <p>
                                У світі існують відомі гліптотеки в Мюнхені, Копенгагені та Афінах. Ми ж пропонуємо
                                створити нашу власну львівську гліптотеку в історичних корпусах Політехніки на вулиці
                                Князя Романа.
                            </p>
                            <p>
                                Цей унікальний архітектурний ансамбль прикрашений скульптурними творами на фасадах.
                                Наприклад, будівля колишньої гімназії імені Франца Йосифа (1876 рік), де на рівні
                                другого поверху можна побачити скульптурні фігури польських науковців та діячів
                                культури роботи Тадеуша Баронча.
                            </p>
                            <p>
                                Наша Гліптотека — це сучасний діалог різних епох, тем, жанрів та авторів — від
                                історичних творів до сучасних митців.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutPage
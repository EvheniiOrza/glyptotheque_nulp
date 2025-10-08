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
                        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
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
                        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
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

                    {/* Секція з логотипами партнерів */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Організатори */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Організатори</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
                                {partners.organizers.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2 p-2">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none'
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                                }}
                                            />
                                            <div className="hidden text-xs text-center text-gray-500">
                                                {partner.name}
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600 text-center">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Співорганізатори */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Співорганізатори та партнери</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
                                {partners.coOrganizers.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2 p-2">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none'
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                                }}
                                            />
                                            <div className="hidden text-xs text-center text-gray-500">
                                                {partner.name}
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600 text-center">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Медіа-партнери */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Медіа-партнери</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                                {partners.mediaPartners.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-2 p-2">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none'
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                                }}
                                            />
                                            <div className="hidden text-xs text-center text-gray-500">
                                                {partner.name}
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600 text-center">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Готельний партнер */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Готельний партнер</h3>
                            <div className="flex justify-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-2 p-2">
                                        <img
                                            src={partners.hotelPartner[0].logo}
                                            alt={partners.hotelPartner[0].name}
                                            className="max-w-full max-h-full object-contain"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none'
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                            }}
                                        />
                                        <div className="hidden text-xs text-center text-gray-500">
                                            {partners.hotelPartner[0].name}
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-600">{partners.hotelPartner[0].name}</span>
                                </div>
                            </div>
                        </div>

                        {/* Меценати */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Меценати проєкту</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {sponsors.map((sponsor, index) => (
                                    <div key={index} className="text-center py-3 px-4 bg-gray-200 rounded-lg">
                                        <span className="text-gray-700">{sponsor}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Команда проєкту */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg p-8 mt-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Команда проєкту</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
                            <div>
                                <h3 className="font-semibold text-lg mb-4 text-black">Керівництво:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Куратор: Павло Гудімов
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Менеджмент: АГ, НМ
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Консультанти
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-4 text-black">Команда:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Тексти: Діана Клочко, Павло Гудімов
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Дизайн
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Експозиція
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        Ректорка
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-center text-gray-600 text-lg"
                    >
                        <p className="mb-4">Дякуємо всім, хто долучився до організації і підтримки фестивалю!</p>
                        <p>Особлива подяка ЗСУ, завдяки героїзму захисників можливо організовувати такі культурні проєкти.</p>
                    </motion.div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutPage
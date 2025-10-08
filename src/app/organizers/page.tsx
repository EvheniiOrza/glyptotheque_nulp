'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const OrganizersPage: React.FC = () => {
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
                        Організатори та партнери
                    </motion.h1>

                    {/* Секція з логотипами партнерів */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
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

export default OrganizersPage
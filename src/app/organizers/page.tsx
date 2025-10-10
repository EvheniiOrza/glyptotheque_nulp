'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const OrganizersPage: React.FC = () => {
    // Дані партнерів з логотипами згідно з вашою структурою папок
    const partners = {
        superOrganizers: [
            { name: "Jam Factory", logo: "/logos/suporganizers/jamfactory.png" },
            { name: "Львівська політехніка", logo: "/logos/suporganizers/nulp.png" },
            { name: "Культурний простір MONO", logo: "/logos/suporganizers/mono.png" },
            { name: "Дизайн-студія MAKHNO", logo: "/logos/suporganizers/makhno.png" },
            { name: "Стрийський парк", logo: "/logos/suporganizers/stryipark.png" },
            { name: "Литовський культурний інститут", logo: "/logos/suporganizers/LCI.png" },
            { name: "Територія Терору", logo: "/logos/suporganizers/teretoryteror.png" },
            { name: "АВОБУД", logo: "/logos/suporganizers/avobud.png" }
        ],
        organizers: [
            { name: "Львівська міська рада", logo: "/logos/organizers/lviv.png" },
            { name: "Львівська обласна рада", logo: "/logos/organizers/lvivrad.png" },
            { name: "Львівська обласна адміністрація", logo: "/logos/organizers/lvivshnobladm.png" },
            { name: "Я Галерея", logo: "/logos/organizers/jagallery.png" },
            { name: "Coma - Сучасний музей мистецтва", logo: "/logos/organizers/coma.png" },
            { name: "Фундація ЧервонеЧорне", logo: "/logos/organizers/chervone.png" },
        ],
        mediaPartners: [
            { name: "24 Канал", logo: "/logos/media-partners/24chanel.png" },
            { name: "Maximum Radio", logo: "/logos/media-partners/maximumradio.png" },
            { name: "ZAXID.NET", logo: "/logos/media-partners/zahidnet.png" },
            { name: "LUX Radio", logo: "/logos/media-partners/luxradio.png" }
        ],
        infoPartners: [
            { name: "Холдинг емоцій «!FEST»", logo: "/logos/info-partners/fest.png" },
            { name: "Укрзалізниця", logo: "/logos/info-partners/uz.png" },
            { name: "lviv.travel", logo: "/logos/info-partners/lvivtravel.png" }
        ]
    }

    const sponsors = [
        "Олена Вовк",
        "Гліб Загорій",
        "Андрій Федорів",
        "Юрій Сташків (Фундація ЧервонеЧорне)",
        "Гарольд Біндер (Jam Factory)",
        "Фундація Адама Харбера",
        "Девелоперське Бюро Будинки та люди",
        "Віктор Гищук",
        "Олег Мацех"
    ]

    // Компонент для логотипу з автоматичним видаленням білого фону
    const LogoImage = ({ src, alt }: { src: string; alt: string }) => (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain max-w-[80px] max-h-[80px]"
            style={{
                backgroundColor: 'transparent'
            }}
        />
    )

    return (
        <Layout>
            <main className="bg-white text-black min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-sans font-bold text-center mb-12"
                    >
                        ОРГАНІЗАТОРИ ТА ПАРТНЕРИ
                    </motion.h1>

                    {/* Секція з логотипами партнерів */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Організатори */}
                        <div className="bg-gray-50 rounded-none p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Організатори</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center">
                                {partners.organizers.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center group">
                                        <div className="w-32 h-32 bg-[#ffff] rounded-none flex items-center justify-center p-4 shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow">
                                            <LogoImage
                                                src={partner.logo}
                                                alt={partner.name}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-600 text-center mt-3">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Суперорганізатори */}
                        <div className="bg-gray-50 rounded-none p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Співорганізатори та партнери</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
                                {partners.superOrganizers.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center group">
                                        <div className="w-32 h-32 bg-[#ffff] rounded-none flex items-center justify-center p-4 shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow">
                                            <LogoImage
                                                src={partner.logo}
                                                alt={partner.name}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-600 text-center mt-3">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Медіа-партнери */}
                        <div className="bg-gray-50 rounded-none p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Генеральні Медіа-партнери</h3>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
                                {partners.mediaPartners.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center group">
                                        <div className="w-40 h-24 bg-[#ffff] rounded-none flex items-center justify-center p-4 shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow">
                                            <LogoImage
                                                src={partner.logo}
                                                alt={partner.name}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-600 text-center mt-3">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Інформаційні партнери */}
                        <div className="bg-gray-50 rounded-none p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Інформаційні партнери</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                                {partners.infoPartners.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center group">
                                        <div className="w-40 h-24 bg-[#ffff] rounded-none flex items-center justify-center p-4 shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow">
                                            <LogoImage
                                                src={partner.logo}
                                                alt={partner.name}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-600 text-center mt-3">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Меценати */}
                        <div className="bg-gray-50 rounded-none p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Меценати проєкту</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {sponsors.map((sponsor, index) => (
                                    <div key={index} className="text-center py-3 px-4 bg-[#ffff] rounded-none shadow-sm border border-gray-200">
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
                        className="mt-12 text-center text-gray-600 text-lg"
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
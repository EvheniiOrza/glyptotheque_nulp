'use client'

import React, { useState, useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import supabase from '@/utils/supabaseClient'
import { SculptureDB } from '@/types/artwork'
import Link from 'next/link'

interface Space {
    id: number
    title: string
    location: string
    description: string
    exhibits: string[]
}

const PlacePage: React.FC = () => {
    const [expandedSpace, setExpandedSpace] = useState<number | null>(null)
    const [sculptures, setSculptures] = useState<SculptureDB[]>([])
    const [loading, setLoading] = useState(true)

    const spaces: Space[] = [
        {
            id: 1,
            title: "Велика виставкова зала",
            location: "20 корпус, другий поверх, Князя Романа 5",
            description: "Основне скульптурне дійство відбувається в великій залі другого поверху 20 корпусу львівської політехніки. Навіщо школі Франца Йосифа зала висотою майже 8 метрів і такої великої площі? Навіщо в ній балкон на рівні третього поверху, можливо щоб Цисар відвідавши школу зміг промовити з нього? Можливо зала чекала на виставкову історію і саме Гліптотека розпочинає цей новий етап.",
            exhibits: ["Сучасні скульптурні композиції", "Інсталяції", "Мультимедійні проєкти"]
        },
        {
            id: 2,
            title: "Вхідний хол з левами",
            location: "19 корпус, Князя Романа 1-3",
            description: "Корпуси за адресою Князя Романа 1-3 це колишній будинок Крайового Суду – 'Палац справедливості' 1891-1895, архітектора Франциска Сковрона. Вестибюль з скульптурною групою двох лежачих левів авторства Леонарда Марконі.",
            exhibits: ["Скульптурна група левів Леонарда Марконі", "Історичні архітектурні елементи"]
        },
        {
            id: 3,
            title: "Скульптурна галерея",
            location: "Коридори корпусів Політехніки",
            description: "Скульптурна галерея в коридорах корпусів Політехніки показує приклади реставрації давньої скульптури здійснену студентами та науковцями факультету Архітектури та Реставрації Львівської політехніки.",
            exhibits: ["Відреставровані скульптури", "Студентські роботи", "Історичні артефакти"]
        },
        {
            id: 4,
            title: "Подвір'я - автостоянка",
            location: "Стоянка між корпусами",
            description: "Цей прихований відкритий простір є автостоянкою яка колись була накрита дахом від якого лишились конструкції ферм. Всього 13 пронумерованих паркомісць які на час фестивалю приймають 13 скульптурних об'єктів які можуть жити на вулиці.",
            exhibits: ["13 скульптурних об'єктів", "Стрит-арт інсталяції", "Просторові композиції"]
        },
        {
            id: 5,
            title: "Вхідний хол з Юстицією",
            location: "19 корпус, Князя Романа 1-3",
            description: "Давно закритий північний вестибюль прикрашений мармуровою алегоричною скульптурою правосуддя львівського різбляра Антонія Попеля 1896 року що тримає в руках терези і меча. Очі в неї широко відкриті а не зав'язані. Попель працював викладачем рисунку та скульптури у львівській політехніці.",
            exhibits: ["Скульптура Юстиції Антонія Попеля", "Мармурові роботи", "Історичні інтер'єри"]
        },
        {
            id: 6,
            title: "Кімната-музей",
            location: "Кафедра архітектури та реставрації",
            description: "Кожен університет має свої особливі колекції. Політехніка зберігає частину своєї скульптурної колекції в авдиторії факультету Архітектури і реставрації. Рідко хто мав можливість туди потрапити- тепер під час фестивалю Тиждень скульптури це можливо.",
            exhibits: ["Університетська колекція", "Історичні скульптури", "Навчальні матеріали"]
        },
        {
            id: 7,
            title: "Нарадча кімната",
            location: "19 корпус, Князя Романа 1-3",
            description: "Добре збережена Нарадча кімната що слугувала місцем обговорення судового засідання перед винесенням вердикту була розкішно прикрашена шпалерами, столяркою та живописною композицію на полотні що закріплене на стелі що символізує справедливість юстиції від художника Тадеуша Попеля.",
            exhibits: ["Автентичний інтер'єр", "Живописна композиція", "Історичні деталі"]
        }
    ]

    useEffect(() => {
        const fetchSculptures = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .order('number')

            if (error) {
                console.error('Error fetching sculptures:', error)
            } else {
                setSculptures(data || [])
            }
            setLoading(false)
        }

        fetchSculptures()
    }, [])

    const getSculpturesBySpace = (spaceId: number) => {
        return sculptures.filter(sculpture => sculpture.space_id === spaceId)
    }

    const toggleSpace = (spaceId: number) => {
        setExpandedSpace(expandedSpace === spaceId ? null : spaceId)
    }

    return (
        <Layout>
            <main className="bg-gray-100 text-black min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-sans text-center mb-12"
                        style={{ fontFamily: 'MursGotic - MassiveDemi', fontWeight: 'bold'}}
                    >
                        ПРОСТОРИ
                    </motion.h1>

                    <div className="space-y-4">
                        {spaces.map((space, index) => {
                            const spaceSculptures = getSculpturesBySpace(space.id)

                            return (
                                <motion.div
                                    key={space.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white shadow-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleSpace(space.id)}
                                        className="w-full p-8 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-6">
                                                    {/* Виправлена цифра - велика, мінімалістична, без обводки */}
                                                    <div className="text-black font-bold text-6xl md:text-7xl leading-none">
                                                        {space.id}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                                            {space.title}
                                                        </h2>
                                                        <p className="text-gray-600 text-lg">
                                                            {space.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <motion.div
                                                    animate={{ rotate: expandedSpace === space.id ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-gray-500 text-2xl"
                                                >
                                                    ▼
                                                </motion.div>
                                            </div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {expandedSpace === space.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-gray-200"
                                            >
                                                <div className="p-8">
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                        <div>
                                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                                {space.description}
                                                            </p>

                                                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                                                                Експонати:
                                                            </h4>

                                                        </div>

                                                        <div>
                                                            {loading ? (
                                                                <p className="text-gray-500">Завантаження...</p>
                                                            ) : spaceSculptures.length > 0 ? (
                                                                <div className="space-y-3">
                                                                    {spaceSculptures.map((sculpture) => (
                                                                        <Link
                                                                            key={sculpture.id}
                                                                            href={`/gallery/${sculpture.id}`}
                                                                            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                                                                        >
                                                                            <div className="flex items-start gap-3">
                                                                                {sculpture.image_urls?.[0] && (
                                                                                    <img
                                                                                        src={sculpture.image_urls[0]}
                                                                                        alt={sculpture.name}
                                                                                        className="w-16 h-16 object-cover "
                                                                                    />
                                                                                )}
                                                                                <div className="flex-1">
                                                                                    <h4 className="font-semibold text-gray-800 hover:text-amber-600 transition-colors">
                                                                                        {sculpture.number && (
                                                                                            <span className="text-gray-600 font-bold">
                                                                                                № {sculpture.number}
                                                                                            </span>
                                                                                        )}
                                                                                        <p className="text-sm text-gray-600">{sculpture.name}</p>
                                                                                    </h4>
                                                                                    {sculpture.author && (
                                                                                        <p className="text-sm text-gray-600">
                                                                                            {sculpture.author}
                                                                                        </p>
                                                                                    )}
                                                                                    {sculpture.style && (
                                                                                        <p className="text-sm text-gray-600">
                                                                                            Техніка: {sculpture.style}
                                                                                        </p>
                                                                                    )}
                                                                                    {sculpture.year && (
                                                                                        <p className="text-sm text-gray-600">
                                                                                            Рік: {sculpture.year}
                                                                                        </p>
                                                                                    )}
                                                                                    {sculpture.description && (
                                                                                        <p className="text-sm text-gray-500 mt-2">
                                                                                            {sculpture.description.length > 65
                                                                                                ? `${sculpture.description.substring(0, 65)}...`
                                                                                                : sculpture.description
                                                                                            }
                                                                                        </p>
                                                                                    )}
                                                                                </div>
                                                                                <div className="text-gray-400 hover:text-amber-600 transition-colors">
                                                                                    →
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <p className="text-gray-500">Поки що немає скульптур у цьому просторі</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default PlacePage
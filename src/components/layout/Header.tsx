'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const Header = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed top-0 w-full z-50 bg-[#f4ecdf] border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                {/* Текст у 3 рядки замість лого */}
                <Link href="/">
                <div className="text-center uppercase tracking-wider" style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}>
                    <div className="text-xs sm:text-sm leading-tight">львівський</div>
                    <div className="text-sm sm:text-lg leading-tight">тиждень</div>
                    <div className="text-base sm:text-xl leading-tight">скульптури&#39;25</div>
                </div>
                </Link>
                {/* Десктопне меню */}
                <nav className="hidden sm:flex space-x-6 text-sm uppercase text-black">
                    <Link href="/gallery" className="hover:text-gray-100 transition-colors">
                        Галерея
                    </Link>
                    <Link href="/place" className="hover:text-gray-100 transition-colors">
                        Простори
                    </Link>
                    <Link href="/project" className="hover:text-gray-100 transition-colors">
                        Про проект
                    </Link>
                    <Link href="/festival" className="hover:text-gray-100 transition-colors">
                        Про Фестиваль
                    </Link>
                    <Link href="/interview" className="hover:text-gray-100 transition-colors">
                        Інтерв&#39;ю
                    </Link>
                    <Link href="/about" className="hover:text-gray-100 transition-colors">
                        Про нас
                    </Link>
                </nav>

                {/* Бургер меню справа (тільки на мобільних) */}
                <button
                    className="sm:hidden w-8 h-8 flex flex-col justify-center space-y-1.5 relative z-60"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${
                        isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${
                        isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${
                        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
                </button>

                {/* Мобільне меню */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="sm:hidden absolute top-full left-0 w-full bg-[#f4ecdf] border-b border-gray-300 shadow-lg"
                    >
                        <nav className="flex flex-col space-y-0 p-4 text-center">
                            <Link
                                href="/gallery"
                                className="py-3 px-4 hover:bg-amber-100 hover:text-amber-700 transition-colors border-b border-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Перейти до Галереї
                            </Link>
                            <Link
                                href="/place"
                                className="py-3 px-4 hover:bg-amber-100 hover:text-amber-700 transition-colors border-b border-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Простори
                            </Link>
                            <Link
                                href="/project"
                                className="py-3 px-4 hover:bg-amber-100 hover:text-amber-700 transition-colors border-b border-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Про проект
                            </Link>
                            <Link
                                href="/festival"
                                className="py-3 px-4 hover:bg-amber-100 hover:text-amber-700 transition-colors border-b border-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Про Фестиваль
                            </Link>
                            <Link
                                href="/interview"
                                className="py-3 px-4 hover:bg-amber-100 hover:text-amber-700 transition-colors border-b border-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Інтерв&#39;ю
                            </Link>
                            <Link
                                href="/about"
                                className="py-3 px-4 hover:bg-amber-100 hover:text-amber-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Про нас
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    )
}

export default Header
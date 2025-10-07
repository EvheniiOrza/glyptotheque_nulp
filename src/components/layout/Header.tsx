'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Лого */}
                <Link href="/" className="text-2xl font-sans text-gold tracking-widest">
                    Glyptotheque
                </Link>

                {/* Меню */}
                <nav className="space-x-8 hidden md:flex text-sm uppercase text-gray-100">
                    <Link href="/" className="hover:text-gold transition-colors">
                        Головна
                    </Link>
                    <Link href="/gallery" className="hover:text-gold transition-colors">
                        Галерея
                    </Link>
                    <Link href="/interview" className="hover:text-gold transition-colors">
                        Інтерв’ю
                    </Link>
                    <Link href="/about" className="hover:text-gold transition-colors">
                        Про нас
                    </Link>
                </nav>

                {/* Соцмережі */}
                <div className="flex items-center space-x-4 text-gold">
                    <a href="#" aria-label="Instagram" className="hover:text-white transition">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-white transition">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header

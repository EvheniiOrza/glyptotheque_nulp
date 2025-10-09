'use client'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 text-sm py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-center md:text-left">
                    © {new Date().getFullYear()} Glyptotheque. Всі права захищено.
                </p>

                <div className="flex space-x-6">
                    <Link href="/info" className="hover:text-amber-400 transition">
                        Політика конфіденційності
                    </Link>
                    <Link href="/info" className="hover:text-amber-400 transition">
                        Контакти
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
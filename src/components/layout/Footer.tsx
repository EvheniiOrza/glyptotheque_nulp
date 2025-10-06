'use client'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 text-sm py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-center md:text-left">
                    © {new Date().getFullYear()} Glyptotheque. Всі права захищено.
                </p>

                <div className="flex space-x-6">
                    <Link href="/privacy" className="hover:text-[#d4af37] transition">
                        Політика конфіденційності
                    </Link>
                    <Link href="/contact" className="hover:text-[#d4af37] transition">
                        Контакти
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

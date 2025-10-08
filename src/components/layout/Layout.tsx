'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-[#f4ecdf] text-black font-sans min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20"> {/* Додаємо padding-top для header */}
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
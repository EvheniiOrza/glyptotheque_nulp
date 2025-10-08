'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-white text-black font-sans min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 pt-20 w-full max-w-full"> {/* Додаємо обмеження ширини */}
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
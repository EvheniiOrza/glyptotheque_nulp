'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-black text-white font-sans min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout

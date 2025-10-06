'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import QRScanner from '@/components/qr/QRScanner'

const QRPage: React.FC = () => {
    return (
        <Layout>
            <main className="bg-black min-h-screen text-white py-16 px-4">
                <h1 className="text-4xl font-serif text-[#d4af37] text-center mb-12">
                    Сканер QR
                </h1>

                <div className="max-w-md mx-auto">
                    <QRScanner />
                </div>
            </main>
        </Layout>
    )
}

export default QRPage

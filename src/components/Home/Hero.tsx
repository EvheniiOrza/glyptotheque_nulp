'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

const Hero: React.FC = () => {
    const router = useRouter()

    return (
        <section className="flex flex-col items-center justify-center text-center py-32 bg-black text-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-sans text-gold mb-6"
            >
                Glyptotheque NULP
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-body text-gray-100"
            >
                Віртуальний каталог скульптур та витворів мистецтва. Досліджуй, надихайся та переходь по QR-кодах до детальної інформації про кожен витвір.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <Button variant="gold" onClick={() => router.push('/gallery')}>
                    Перейти до Галереї
                </Button>
                <Button variant="dark" onClick={() => router.push('/qr')}>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                        <span>QR Сканер</span>
                    </div>
                </Button>
                <Button variant="gold" onClick={() => router.push('/interview')}>
                    Інтерв&#39;ю
                </Button>
                <Button variant="dark" onClick={() => router.push('/about')}>
                    Про нас
                </Button>
            </motion.div>

            {/* QR Feature Highlight */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-12 p-6 bg-zinc-900 rounded-2xl border border-zinc-800 max-w-2xl"
            >
                <div className="flex items-center justify-center space-x-4">
                    <div className="text-gold">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <h3 className="text-gold font-semibold mb-1">Скануйте QR-коди скульптур</h3>
                        <p className="text-gray-400 text-sm">
                            Кожна скульптура має унікальний QR-код для отримання детальної інформації
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
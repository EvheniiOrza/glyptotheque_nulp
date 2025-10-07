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
                <Button onClick={() => router.push('/gallery')}>Перейти до Галереї</Button>
                <Button variant="gold" onClick={() => router.push('/interview')}>
                    Інтерв’ю
                </Button>
            </motion.div>
        </section>
    )
}

export default Hero

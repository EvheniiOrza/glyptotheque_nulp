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
                className="text-5xl md:text-6xl font-serif text-[#d4af37] mb-6"
            >
                Glyptotheque NULP
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-300 max-w-2xl mb-10"
            >
                Віртуальний каталог скульптур та витворів мистецтва. Досліджуй, надихайся та переходь по QR-кодах до детальної інформації про кожен витвір.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex space-x-4"
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

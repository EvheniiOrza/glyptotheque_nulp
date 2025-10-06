'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SectionProps {
    title: string
    content: string
    initiallyOpen?: boolean
}

const Section: React.FC<SectionProps> = ({ title, content, initiallyOpen = false }) => {
    const [open, setOpen] = useState(initiallyOpen)

    return (
        <div className="mb-6 border-b border-zinc-800 pb-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left text-[#d4af37] font-serif text-xl mb-2 flex justify-between items-center"
            >
                {title}
                <span className="ml-2">{open ? '−' : '+'}</span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-300 leading-relaxed mt-2">{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Section

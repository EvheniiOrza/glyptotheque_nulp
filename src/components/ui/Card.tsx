'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className={`bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg p-6 hover:border-[#d4af37] cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Card

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
            className={`bg-black border border-gray-800 rounded-none shadow-lg p-6 hover:border-gold cursor-pointer transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Card

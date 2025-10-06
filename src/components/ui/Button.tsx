'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'gold' | 'dark'
    className?: string
    type?: 'button' | 'submit' | 'reset'  // додано
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'gold', className = '', type = 'button' }) => {
    const base = 'px-6 py-2 uppercase tracking-widest text-sm font-medium rounded-full transition-all duration-300'
    const styles =
        variant === 'gold'
            ? 'bg-[#d4af37] text-black hover:bg-black hover:text-[#d4af37] border border-[#d4af37]'
            : 'bg-black text-[#d4af37] hover:bg-[#d4af37] hover:text-black border border-[#d4af37]'

    return (
        <motion.button
            type={type}           // передаємо type
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${base} ${styles} ${className}`}
        >
            {children}
        </motion.button>
    )
}

export default Button

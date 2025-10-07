'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'gold' | 'dark'
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean // ✅ додано
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           variant = 'gold',
                                           className = '',
                                           type = 'button',
                                           disabled = false, // ✅ дефолтне значення
                                       }) => {
    const base =
        'px-6 py-2 uppercase tracking-widest text-sm font-medium rounded-full transition-all duration-300 border'

    const styles =
        variant === 'gold'
            ? 'bg-gold text-black border-gold hover:bg-black hover:text-gold'
            : 'bg-black text-gold border-gold hover:bg-gold hover:text-black'

    return (
        <motion.button
            type={type}
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled} // ✅ передаємо в DOM
            className={`${base} ${styles} ${className} ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            {children}
        </motion.button>
    )
}

export default Button

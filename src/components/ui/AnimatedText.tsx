'use client'

import { motion } from 'framer-motion'
import React from 'react'
import styles from './AnimatedText.module.scss'

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', delay = 0 }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className={`${styles.animatedText} ${className}`}
        >
            {text}
        </motion.h2>
    )
}

export default AnimatedText

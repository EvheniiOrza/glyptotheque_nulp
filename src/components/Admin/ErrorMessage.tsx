'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-700 text-white p-3 rounded-md mb-4 shadow-md"
        >
            {message}
        </motion.div>
    )
}

export default ErrorMessage

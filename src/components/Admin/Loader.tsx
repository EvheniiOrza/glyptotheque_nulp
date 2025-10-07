'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Loader: React.FC = () => {
    return (
        <motion.div
            className="w-16 h-16 border-4 border-t-[#f4ddca] border-zinc-800 rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
        ></motion.div>
    )
}

export default Loader

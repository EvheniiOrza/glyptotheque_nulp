'use client'

import React from 'react'

interface DividerProps {
    className?: string
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
    return (
        <div
            className={`h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent my-8 opacity-70 ${className}`}
        />
    )
}

export default Divider

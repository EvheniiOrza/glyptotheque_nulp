'use client'

import React from 'react'

interface DividerProps {
    className?: string
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
    return (
        <div
            className={`h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-8 opacity-60 ${className}`}
        ></div>
    )
}

export default Divider

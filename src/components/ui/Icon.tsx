'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface IconProps {
    icon: LucideIcon
    size?: number
    className?: string
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 20, className = '' }) => {
    return <IconComponent size={size} className={`text-[#d4af37] ${className}`} />
}

export default Icon

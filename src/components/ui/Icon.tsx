'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'
import styles from './Icon.module.scss'

interface IconProps {
    icon: LucideIcon
    size?: number
    className?: string
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 20, className = '' }) => {
    return <IconComponent size={size} className={`${styles.icon} ${className}`} />
}

export default Icon

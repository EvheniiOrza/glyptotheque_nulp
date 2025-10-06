'use client'

import React from 'react'

interface QuoteProps {
    text: string
    author?: string
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
    return (
        <blockquote className="border-l-4 border-[#d4af37] pl-4 italic text-gray-200 my-6">
            <p className="text-[#d4af37]">“{text}”</p>
            {author && <span className="block mt-1 text-sm text-gray-400">— {author}</span>}
        </blockquote>
    )
}

export default Quote

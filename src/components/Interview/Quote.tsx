'use client'

import React from 'react'

interface QuoteProps {
    text: string
    author?: string
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
    return (
        <blockquote className="border-l-4 border-gold pl-4 italic text-gray-100 my-6">
            <p className="text-gold">“{text}”</p>
            {author && <span className="block mt-1 text-sm text-gray-300">— {author}</span>}
        </blockquote>
    )
}

export default Quote

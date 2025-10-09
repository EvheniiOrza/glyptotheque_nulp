'use client'

import React from 'react'

interface QuoteProps {
    text: React.ReactNode
    author?: string
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
    return (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-800 my-6">
            <div className="text-gray-900">{text}</div>
            {author && <span className="block mt-1 text-sm text-gray-600">— {author}</span>}
        </blockquote>
    )
}

export default Quote
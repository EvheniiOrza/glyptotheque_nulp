'use client'

import React from 'react'
import QRCode from 'react-qr-code'

interface QRGeneratorProps {
    artworkId: string
}

const QRGenerator: React.FC<QRGeneratorProps> = ({ artworkId }) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const url = `${origin}/gallery/${artworkId}`

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <QRCode value={url} size={200} fgColor="#d4af37" bgColor="#000000" />
            <p className="text-gray-300 break-all text-center">{url}</p>
            <button
                className="px-4 py-2 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition"
                onClick={() => navigator.clipboard.writeText(url)}
            >
                Скопіювати посилання
            </button>
        </div>
    )
}

export default QRGenerator

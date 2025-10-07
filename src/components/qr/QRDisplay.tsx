// components/QRDisplay.tsx
'use client'

import React from 'react'

interface QRDisplayProps {
    sculptureId: string
    qrUrl: string
    sculptureName: string
}

const QRDisplay: React.FC<QRDisplayProps> = ({ sculptureId, qrUrl, sculptureName }) => {
    const handleDownload = async () => {
        try {
            const response = await fetch(qrUrl)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = url
            a.download = `qr_${sculptureName.replace(/\s+/g, '_')}.png`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        } catch (error) {
            console.error('Помилка завантаження QR-коду:', error)
        }
    }

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-serif text-[#d4af37]">
                QR-код: {sculptureName}
            </h3>

            <img
                src={qrUrl}
                alt={`QR код для ${sculptureName}`}
                className="w-48 h-48 rounded-lg"
            />

            <div className="flex space-x-3">
                <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition"
                >
                    Завантажити QR
                </button>

                <button
                    onClick={() => navigator.clipboard.writeText(qrUrl)}
                    className="px-4 py-2 bg-zinc-700 text-white rounded-md font-semibold hover:bg-zinc-600 transition"
                >
                    Копіювати URL
                </button>
            </div>
        </div>
    )
}

export default QRDisplay
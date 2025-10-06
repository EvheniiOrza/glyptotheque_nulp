'use client'

import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { useRouter } from 'next/navigation'

const QRScanner: React.FC = () => {
    const [result, setResult] = useState<string>('')
    const router = useRouter()

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="w-full max-w-xs rounded overflow-hidden">
                <QrReader
                    onResult={(res, err) => {
                        if (!!res) {
                            const text = res.getText()
                            setResult(text)
                            // автоматичний перехід якщо URL веде на /gallery/[id]
                            if (text.includes('/gallery/')) {
                                router.push(text.replace(window.location.origin, ''))
                            }
                        }
                        if (!!err) {
                            console.error(err)
                        }
                    }}
                    constraints={{ facingMode: 'environment' }}
                    videoStyle={{ borderRadius: '1rem' }}
                />
            </div>

            {result && (
                <div className="bg-black/70 p-2 rounded text-[#d4af37] w-full text-center">
                    Розпізнано: {result}
                </div>
            )}

            <button
                className="px-4 py-2 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition"
                onClick={() => setResult('')}
            >
                Очистити
            </button>
        </div>
    )
}

export default QRScanner

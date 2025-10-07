'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Camera } from 'react-camera-pro'
import jsQR from 'jsqr'
import { useRouter } from 'next/navigation'

const QRScanner: React.FC = () => {
    const cameraRef = useRef<any>(null)
    const [result, setResult] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            if (!cameraRef.current) return

            const photo = cameraRef.current.takePhoto()
            if (!photo || typeof photo !== 'string') return

            const img = new Image()
            img.src = photo
            img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = img.width
                canvas.height = img.height
                const ctx = canvas.getContext('2d')
                if (!ctx) return

                ctx.drawImage(img, 0, 0)
                const imageData = ctx.getImageData(0, 0, img.width, img.height)
                const code = jsQR(imageData.data, img.width, img.height)

                if (code?.data) {
                    setResult(code.data)

                    // Перевіряємо, чи це посилання на галерею
                    if (code.data.includes('/gallery/')) {
                        // Вилучаємо шлях з повного URL
                        const url = new URL(code.data)
                        const path = url.pathname
                        router.push(path)
                    }
                }
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [router])

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-black border border-gray-800 rounded-2xl">
            <div className="w-full max-w-xs rounded overflow-hidden">
                <Camera
                    ref={cameraRef}
                    aspectRatio={1}
                    facingMode="environment"
                    errorMessages={{
                        noCameraAccessible: 'Камера не знайдена',
                        permissionDenied: 'Доступ до камери заборонено',
                        switchCamera: 'Перемикання камер не підтримується',
                        canvas: 'Помилка рендеру камери',
                    }}
                />
            </div>

            {result && (
                <div className="bg-black/70 p-2 rounded text-[#d4af37] w-full text-center font-body">
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
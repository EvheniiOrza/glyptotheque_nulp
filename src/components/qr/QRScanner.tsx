'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Camera, type CameraType } from 'react-camera-pro'
import jsQR from 'jsqr'
import { useRouter } from 'next/navigation'

const QRScanner: React.FC = () => {
    const cameraRef = useRef<CameraType>(null)
    const [result, setResult] = useState<string>('')
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [error, setError] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        // Перевірка доступу до камери
        const checkCameraPermission = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                stream.getTracks().forEach(track => track.stop())
                setHasPermission(true)
            } catch (err) {
                setHasPermission(false)
                setError('Доступ до камери заборонено або камера недоступна')
            }
        }

        checkCameraPermission()
    }, [])

    useEffect(() => {
        if (!hasPermission) return

        const interval = setInterval(() => {
            if (!cameraRef.current) return

            try {
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
                            try {
                                // Спробуємо створити URL для перевірки
                                const url = new URL(code.data)
                                const path = url.pathname
                                clearInterval(interval) // Зупиняємо сканування після успішного розпізнавання
                                router.push(path)
                            } catch {
                                // Якщо це не валідний URL, але має /gallery/ в тексті
                                if (code.data.startsWith('/gallery/')) {
                                    clearInterval(interval)
                                    router.push(code.data)
                                }
                            }
                        }
                    }
                }

                img.onerror = () => {
                    console.error('Помилка завантаження зображення для QR сканування')
                }
            } catch (err) {
                console.error('Помилка при скануванні QR:', err)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [router, hasPermission])

    const handleRetry = () => {
        setResult('')
        setError('')
    }

    if (hasPermission === false) {
        return (
            <div className="flex flex-col items-center space-y-4 p-6 bg-black border border-gray-800 rounded-2xl">
                <div className="text-red-500 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">Доступ до камери заборонено</p>
                    <p className="text-gray-400">Будь ласка, надайте дозвіл на використання камери у налаштуваннях браузера</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition"
                >
                    Спробувати знову
                </button>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col items-center space-y-4 p-6 bg-black border border-gray-800 rounded-2xl">
                <div className="text-red-500 text-center">
                    <p className="text-lg font-semibold">{error}</p>
                </div>
                <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition"
                >
                    Спробувати знову
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center space-y-6 p-6 bg-black border border-gray-800 rounded-2xl">
            <h2 className="text-xl font-semibold text-[#d4af37] text-center">
                Наведіть камеру на QR-код
            </h2>

            <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-2xl">
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
                <div className="w-full max-w-xs">
                    <div className="bg-green-900 bg-opacity-20 border border-green-500 p-3 rounded-lg">
                        <p className="text-green-400 text-sm font-semibold mb-1">QR-код розпізнано:</p>
                        <p className="text-green-300 text-xs break-all">{result}</p>
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-2">
                        Перенаправлення...
                    </p>
                </div>
            )}

            <div className="flex space-x-3">
                <button
                    className="px-4 py-2 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition disabled:opacity-50"
                    onClick={() => setResult('')}
                    disabled={!result}
                >
                    Очистити
                </button>
                <button
                    className="px-4 py-2 bg-gray-600 text-white rounded-md font-semibold hover:bg-gray-500 transition"
                    onClick={() => router.push('/gallery')}
                >
                    До галереї
                </button>
            </div>

            <div className="text-center text-gray-500 text-sm">
                <p>Сканування автоматичне. Просто наведіть камеру на QR-код</p>
            </div>
        </div>
    )
}

export default QRScanner
'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import jsQR from 'jsqr'
import { useRouter } from 'next/navigation'

const QRScanner: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [result, setResult] = useState<string>('')
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [error, setError] = useState<string>('')
    const [isScanning, setIsScanning] = useState(false)
    const router = useRouter()
    const streamRef = useRef<MediaStream | null>(null)
    const animationFrameRef = useRef<number>(0)

    // Перевірка дозволу камери
    useEffect(() => {
        const checkCamera = async () => {
            try {
                if (!navigator.mediaDevices?.getUserMedia) {
                    setError('Браузер не підтримує камеру')
                    setHasPermission(false)
                    return
                }

                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                stream.getTracks().forEach(track => track.stop())
                setHasPermission(true)
            } catch (err) {
                setHasPermission(false)
                setError('Дозвіл на камеру не надано')
            }
        }

        checkCamera()
    }, [])

    // Запуск камери
    const startCamera = useCallback(async () => {
        try {
            setError('')
            setIsScanning(true)

            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            })

            streamRef.current = stream

            if (videoRef.current) {
                videoRef.current.srcObject = stream
                await videoRef.current.play()
                startScanning()
            }
        } catch (err) {
            console.error('Помилка камери:', err)
            setError('Не вдалося запустити камеру')
            setIsScanning(false)
        }
    }, [])

    // Зупинка камери
    const stopCamera = useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => {
                track.stop()
            })
            streamRef.current = null
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null
        }

        setIsScanning(false)
    }, [])

    // Сканування QR-коду
    const startScanning = useCallback(() => {
        if (!videoRef.current || !canvasRef.current) return

        const scan = () => {
            if (!videoRef.current || !canvasRef.current || videoRef.current.readyState !== videoRef.current.HAVE_ENOUGH_DATA) {
                animationFrameRef.current = requestAnimationFrame(scan)
                return
            }

            const video = videoRef.current
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')

            if (!context) {
                animationFrameRef.current = requestAnimationFrame(scan)
                return
            }

            // Встановлюємо розміри canvas
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight

            // Малюємо відео на canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height)

            // Отримуємо дані зображення
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

            // Скануємо QR-код
            const code = jsQR(imageData.data, imageData.width, imageData.height)

            if (code) {
                console.log('QR знайдено:', code.data)
                setResult(code.data)
                handleQRDetected(code.data)
            } else {
                // Продовжуємо сканування
                animationFrameRef.current = requestAnimationFrame(scan)
            }
        }

        animationFrameRef.current = requestAnimationFrame(scan)
    }, [])

    // Обробка знайденого QR-коду
    const handleQRDetected = useCallback((data: string) => {
        console.log('Обробка QR:', data)
        stopCamera()

        // Спроба розпізнати URL
        let path = data

        try {
            // Якщо це повний URL
            if (data.startsWith('http')) {
                const url = new URL(data)
                path = url.pathname + url.search
            }

            // Перевіряємо, чи це посилання на галерею
            if (path.includes('/gallery/')) {
                // Вилучаємо тільки шлях
                const match = path.match(/\/gallery\/[^?#]+/)
                if (match) {
                    router.push(match[0])
                    return
                }
            }

            // Якщо не вдалося розпізнати, показуємо результат
            setResult(data)
        } catch (err) {
            console.error('Помилка обробки QR:', err)
            setResult(data)
        }
    }, [router, stopCamera])

    // Очищення при розмонтуванні
    useEffect(() => {
        return () => {
            stopCamera()
        }
    }, [stopCamera])

    const handleRetry = () => {
        setResult('')
        setError('')
        if (hasPermission) {
            startCamera()
        }
    }

    // Стан помилки дозволу
    if (hasPermission === false) {
        return (
            <div className="flex flex-col items-center space-y-6 p-6 bg-black border border-gray-800 rounded-2xl max-w-md mx-auto">
                <div className="text-red-500 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">Доступ до камери заборонено</p>
                    <p className="text-gray-400 text-sm mb-4">
                        Будь ласка, надайте дозвіл на використання камери у налаштуваннях браузера
                    </p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition w-full"
                >
                    Оновити сторінку
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white py-8 px-4">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif text-[#d4af37] mb-2">
                        Сканер QR-кодів
                    </h1>
                    <p className="text-gray-400">
                        Наведіть камеру на QR-код скульптури
                    </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    {/* Відео елемент */}
                    {isScanning ? (
                        <div className="relative">
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                muted
                                className="w-full h-64 object-cover rounded-lg bg-black"
                            />
                            {/* Оверлей для сканування */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 border-2 border-[#d4af37] rounded-lg relative">
                                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]"></div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]"></div>
                                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]"></div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-64 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-[#d4af37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                <p className="text-gray-400">Камера вимкнена</p>
                            </div>
                        </div>
                    )}

                    {/* Прихований canvas для обробки */}
                    <canvas ref={canvasRef} className="hidden" />

                    {/* Результат сканування */}
                    {result && (
                        <div className="mt-4 p-4 bg-green-900 bg-opacity-20 border border-green-500 rounded-lg">
                            <p className="text-green-400 text-sm font-semibold mb-2">QR-код розпізнано:</p>
                            <p className="text-green-300 text-xs break-all bg-green-900 bg-opacity-30 p-2 rounded">
                                {result}
                            </p>
                            <p className="text-gray-400 text-sm mt-2 text-center">
                                Перенаправлення...
                            </p>
                        </div>
                    )}

                    {/* Повідомлення про помилку */}
                    {error && (
                        <div className="mt-4 p-4 bg-red-900 bg-opacity-20 border border-red-500 rounded-lg">
                            <p className="text-red-400 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Кнопки управління */}
                    <div className="flex space-x-3 mt-6">
                        {!isScanning ? (
                            <button
                                onClick={startCamera}
                                disabled={!hasPermission}
                                className="flex-1 px-4 py-3 bg-[#d4af37] text-black rounded-lg font-semibold hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span>Запустити камеру</span>
                            </button>
                        ) : (
                            <button
                                onClick={stopCamera}
                                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                                </svg>
                                <span>Зупинити</span>
                            </button>
                        )}

                        <button
                            onClick={() => router.push('/gallery')}
                            className="px-4 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-500 transition"
                        >
                            Галерея
                        </button>
                    </div>

                    {/* Інструкція */}
                    <div className="text-center text-gray-500 text-sm mt-4">
                        <p>Наведіть камеру на QR-код скульптури для автоматичного сканування</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRScanner
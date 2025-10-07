'use client'

import React, { useRef, useEffect, useState } from 'react'
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
    const animationFrameRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        checkCameraPermission()
        return () => {
            stopCamera()
        }
    }, [])

    const checkCameraPermission = async () => {
        try {
            // Проста перевірка доступності камери
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setError('Ваш браузер не підтримує доступ до камери')
                setHasPermission(false)
                return
            }

            const devices = await navigator.mediaDevices.enumerateDevices()
            const videoDevices = devices.filter(device => device.kind === 'videoinput')

            if (videoDevices.length === 0) {
                setError('Камера не знайдена на цьому пристрої')
                setHasPermission(false)
                return
            }

            setHasPermission(true)
        } catch (err) {
            setError('Помилка при перевірці камери')
            setHasPermission(false)
        }
    }

    const startCamera = async () => {
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
                videoRef.current.play()
            }

            // Почати сканування після завантаження відео
            if (videoRef.current) {
                videoRef.current.onloadedmetadata = () => {
                    scanQRCode()
                }
            }
        } catch (err) {
            console.error('Помилка запуску камери:', err)
            setError('Не вдалося запустити камеру. Перевірте дозволи.')
            setIsScanning(false)
        }
    }

    const stopCamera = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop())
            streamRef.current = null
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null
        }

        setIsScanning(false)
    }

    const scanQRCode = () => {
        if (!videoRef.current || !canvasRef.current || !isScanning) return

        const video = videoRef.current
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        if (!context || video.readyState !== video.HAVE_ENOUGH_DATA) {
            animationFrameRef.current = requestAnimationFrame(scanQRCode)
            return
        }

        // Встановлюємо розміри canvas відповідно до відео
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        // Малюємо поточний кадр на canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Отримуємо дані зображення для аналізу
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const code = jsQR(imageData.data, imageData.width, imageData.height)

        if (code) {
            setResult(code.data)
            handleQRDetected(code.data)
        } else {
            // Продовжуємо сканування, якщо QR не знайдено
            animationFrameRef.current = requestAnimationFrame(scanQRCode)
        }
    }

    const handleQRDetected = (data: string) => {
        stopCamera()

        // Перевіряємо, чи це посилання на галерею
        if (data.includes('/gallery/')) {
            try {
                const url = new URL(data)
                router.push(url.pathname)
            } catch {
                if (data.startsWith('/gallery/')) {
                    router.push(data)
                } else if (data.includes(window.location.origin + '/gallery/')) {
                    const path = data.replace(window.location.origin, '')
                    router.push(path)
                }
            }
        }
    }

    const handleRetry = () => {
        setResult('')
        setError('')
        if (hasPermission) {
            startCamera()
        }
    }

    if (hasPermission === false) {
        return (
            <div className="flex flex-col items-center space-y-6 p-6 bg-black border border-gray-800 rounded-2xl max-w-md mx-auto">
                <div className="text-red-500 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">Проблема з камерою</p>
                    <p className="text-gray-400 text-sm mb-4">{error || 'Камера недоступна'}</p>
                </div>
                <button
                    onClick={handleRetry}
                    className="px-6 py-3 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition w-full"
                >
                    Спробувати знову
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center space-y-6 p-6 bg-black border border-gray-800 rounded-2xl max-w-md mx-auto">
            <h2 className="text-2xl font-serif text-[#d4af37] text-center">
                Сканер QR-кодів
            </h2>

            {!isScanning ? (
                <div className="text-center space-y-4">
                    <div className="w-48 h-48 mx-auto bg-zinc-900 rounded-2xl border-2 border-dashed border-[#d4af37] flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <p className="text-gray-400">Натисніть &#34;Запустити камеру&#34; для початку сканування</p>
                </div>
            ) : (
                <div className="relative">
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full max-w-xs rounded-xl bg-black"
                    />
                    {/* QR scanning overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 border-2 border-[#d4af37] rounded-lg bg-transparent">
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]"></div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]"></div>
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Прихований canvas для аналізу зображення */}
            <canvas ref={canvasRef} className="hidden" />

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

            {error && (
                <div className="w-full max-w-xs bg-red-900 bg-opacity-20 border border-red-500 p-3 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}

            <div className="flex space-x-3 w-full max-w-xs">
                {!isScanning ? (
                    <button
                        onClick={startCamera}
                        className="flex-1 px-4 py-3 bg-[#d4af37] text-black rounded-md font-semibold hover:brightness-110 transition flex items-center justify-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Запустити камеру</span>
                    </button>
                ) : (
                    <button
                        onClick={stopCamera}
                        className="flex-1 px-4 py-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-500 transition flex items-center justify-center space-x-2"
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
                    className="px-4 py-3 bg-gray-600 text-white rounded-md font-semibold hover:bg-gray-500 transition"
                >
                    Галерея
                </button>
            </div>

            <div className="text-center text-gray-500 text-sm">
                <p>Наведіть камеру на QR-код скульптури</p>
                <p className="text-xs mt-1">Сканування автоматичне при запущеній камері</p>
            </div>
        </div>
    )
}

export default QRScanner
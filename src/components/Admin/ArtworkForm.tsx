'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import ErrorMessage from './ErrorMessage'
import { ArtworkFormData } from '@/types/artwork'

interface ArtworkFormProps {
    initialData?: ArtworkFormData
    existingImages?: string[]
    onSubmit?: (data: ArtworkFormData) => void | Promise<void>
    saving?: boolean
}

const ArtworkForm: React.FC<ArtworkFormProps> = ({
                                                     initialData,
                                                     existingImages = [],
                                                     onSubmit,
                                                     saving
                                                 }) => {
    const [name, setName] = useState(initialData?.name || '')
    const [author, setAuthor] = useState(initialData?.author || '')
    const [style, setStyle] = useState(initialData?.style || '')
    const [year, setYear] = useState<number | undefined>(initialData?.year ?? undefined)
    const [number, setNumber] = useState(initialData?.number || '')
    const [spaceId, setSpaceId] = useState<number | undefined>(initialData?.space_id ?? undefined)
    const [description, setDescription] = useState(initialData?.description || '')
    const [photos, setPhotos] = useState<File[]>(initialData?.photos || [])
    const [error, setError] = useState('')
    const [previewUrls, setPreviewUrls] = useState<string[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Генерація preview для нових фото
    React.useEffect(() => {
        const newPreviewUrls: string[] = []
        photos.forEach(file => {
            const objectUrl = URL.createObjectURL(file)
            newPreviewUrls.push(objectUrl)
        })
        setPreviewUrls(newPreviewUrls)

        return () => {
            newPreviewUrls.forEach(url => URL.revokeObjectURL(url))
        }
    }, [photos])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        if (files.length > 0) {
            setPhotos(prev => [...prev, ...files])
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const files = Array.from(e.dataTransfer.files).filter(file =>
            file.type.startsWith('image/')
        )
        if (files.length > 0) {
            setPhotos(prev => [...prev, ...files])
        }
    }

    const removePhoto = (index: number) => {
        setPhotos(prev => prev.filter((_, i) => i !== index))
        if (previewUrls[index]) {
            URL.revokeObjectURL(previewUrls[index])
        }
        setPreviewUrls(prev => prev.filter((_, i) => i !== index))
    }

    const removeExistingImage = (index: number) => {
        // Логіка для видалення існуючих зображень з бази даних
        console.log('Remove existing image:', existingImages[index])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name.trim()) {
            setError('Будь ласка, введіть назву скульптури')
            return
        }

        if (photos.length === 0 && existingImages.length === 0) {
            setError('Будь ласка, додайте хоча б одне фото')
            return
        }

        setError('')
        onSubmit?.({
            name: name.trim(),
            author: author.trim() || undefined,
            style: style.trim() || undefined,
            year,
            number: number.trim() || undefined,
            space_id: spaceId,
            description: description.trim(),
            photos,
        })
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-6 max-w-2xl mx-auto"
        >
            {error && <ErrorMessage message={error} />}

            {/* Назва */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Назва скульптури *
                </label>
                <input
                    type="text"
                    placeholder="Введіть назву скульптури"
                    className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* Автор, Стиль, Рік, Номер */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Автор
                    </label>
                    <input
                        type="text"
                        placeholder="Ім'я автора"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Стиль
                    </label>
                    <input
                        type="text"
                        placeholder="Стиль скульптури"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Рік створення
                    </label>
                    <input
                        type="number"
                        placeholder="Рік"
                        min="0"
                        max={new Date().getFullYear()}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                        value={year ?? ''}
                        onChange={(e) => setYear(e.target.value ? Number(e.target.value) : undefined)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Номер
                    </label>
                    <input
                        type="text"
                        placeholder="Номер скульптури"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
            </div>

            {/* Простір */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Простір
                </label>
                <select
                    className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    value={spaceId ?? ''}
                    onChange={(e) => setSpaceId(e.target.value ? Number(e.target.value) : undefined)}
                >
                    <option value="">Оберіть простір</option>
                    <option value="1">1 - Велика виставкова зала</option>
                    <option value="2">2 - Вхідний хол з левами</option>
                    <option value="3">3 - Скульптурна галерея</option>
                    <option value="4">4 - Подвір'я - автостоянка</option>
                    <option value="5">5 - Вхідний хол з Юстицією</option>
                    <option value="6">6 - Кімната-музей</option>
                    <option value="7">7 - Нарадча кімната</option>
                </select>
            </div>

            {/* Опис */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Опис скульптури
                </label>
                <textarea
                    placeholder="Детальний опис скульптури..."
                    rows={4}
                    className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition resize-vertical"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Існуючі зображення */}
            {existingImages.length > 0 && (
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                        Існуючі зображення
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {existingImages.map((url, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={url}
                                    alt={`Існуюче зображення ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={() => removeExistingImage(index)}
                                        className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-1 rounded text-xs transition"
                                    >
                                        Видалити
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Додавання нових фото */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                    Додати нові фото
                </label>

                {/* Preview нових фото */}
                {previewUrls.length > 0 && (
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {previewUrls.map((url, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <img
                                        src={url}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg"
                                    />
                                    <motion.button
                                        type="button"
                                        onClick={() => removePhoto(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        ×
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Drag & Drop область */}
                <motion.div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition cursor-pointer ${
                        isDragging
                            ? 'border-gold bg-gold bg-opacity-10'
                            : 'border-zinc-700 hover:border-gold'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer block">
                        <div className="space-y-2">
                            <div className="text-gold">
                                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div className="text-gray-300">
                                <span className="text-gold font-medium">Натисніть для завантаження</span>
                                <p className="text-sm text-gray-400">або перетягніть файли сюди</p>
                            </div>
                            <p className="text-xs text-gray-500">
                                PNG, JPG, WEBP (макс. 5MB на файл)
                            </p>
                        </div>
                    </label>
                </motion.div>

                {/* Інформація про вибрані файли */}
                {photos.length > 0 && (
                    <motion.div
                        className="mt-2 text-sm text-gray-400 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Вибрано файлів: {photos.length}
                    </motion.div>
                )}
            </div>

            {/* Кнопка збереження */}
            <div className="flex justify-end pt-4">
                <Button
                    type="submit"
                    disabled={saving}
                    className="min-w-32"
                >
                    {saving ? (
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Збереження...</span>
                        </div>
                    ) : (
                        'Зберегти скульптуру'
                    )}
                </Button>
            </div>
        </motion.form>
    )
}

export default ArtworkForm
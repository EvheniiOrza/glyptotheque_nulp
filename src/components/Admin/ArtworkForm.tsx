'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'
import ErrorMessage from './ErrorMessage'

interface ArtworkFormProps {
    initialData?: {
        title?: string
        description?: string
        photos?: File[]
        characteristics?: Record<string, string>
    }
    onSubmit?: (data: {
        title: string
        description: string
        photos: File[]
        characteristics: Record<string, string>
    }) => void
}

const ArtworkForm: React.FC<ArtworkFormProps> = ({ initialData, onSubmit }) => {
    const [title, setTitle] = useState(initialData?.title || '')
    const [description, setDescription] = useState(initialData?.description || '')
    const [photos, setPhotos] = useState<File[]>(initialData?.photos || [])
    const [charKey, setCharKey] = useState('')
    const [charValue, setCharValue] = useState('')
    const [characteristics, setCharacteristics] = useState<Record<string, string>>(initialData?.characteristics || {})
    const [error, setError] = useState('')

    const handleAddCharacteristic = () => {
        if (charKey && charValue) {
            setCharacteristics({ ...characteristics, [charKey]: charValue })
            setCharKey('')
            setCharValue('')
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title || !description || photos.length === 0) {
            setError('Будь ласка, заповніть всі обов’язкові поля та додайте хоча б одне фото.')
            return
        }
        onSubmit?.({ title, description, photos, characteristics })
    }

    return (
        <form className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-4" onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}

            <input
                type="text"
                placeholder="Назва скульптури"
                className="w-full p-2 rounded-md text-black"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Опис"
                className="w-full p-2 rounded-md text-black"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setPhotos(Array.from(e.target.files || []))}
            />

            <div className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Характеристика"
                    className="p-2 rounded-md text-black flex-1"
                    value={charKey}
                    onChange={(e) => setCharKey(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Значення"
                    className="p-2 rounded-md text-black flex-1"
                    value={charValue}
                    onChange={(e) => setCharValue(e.target.value)}
                />
                <Button type="button" onClick={handleAddCharacteristic}>
                    Додати
                </Button>
            </div>

            {Object.keys(characteristics).length > 0 && (
                <ul className="text-gray-300">
                    {Object.entries(characteristics).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            )}

            <Button type="submit">Зберегти скульптуру</Button>
        </form>
    )
}

export default ArtworkForm

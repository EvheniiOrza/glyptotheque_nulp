'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'
import ErrorMessage from './ErrorMessage'
import { ArtworkFormData } from '@/types/artwork'

interface ArtworkFormProps {
    initialData?: ArtworkFormData
    onSubmit?: (data: ArtworkFormData) => void | Promise<void>
    saving?: boolean
}

const ArtworkForm: React.FC<ArtworkFormProps> = ({ initialData, onSubmit, saving }) => {
    const [name, setName] = useState(initialData?.name || '')
    const [author, setAuthor] = useState(initialData?.author || '')
    const [year, setYear] = useState<number | undefined>(initialData?.year ?? undefined)
    const [description, setDescription] = useState(initialData?.description || '')
    const [photos, setPhotos] = useState<File[]>(initialData?.photos || [])
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !description) {
            setError('Будь ласка, заповніть усі обов’язкові поля.')
            return
        }
        setError('')
        onSubmit?.({
            name,
            author: author || undefined,
            year,
            description,
            photos,
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-4"
        >
            {error && <ErrorMessage message={error} />}

            <input
                type="text"
                placeholder="Назва скульптури"
                className="w-full p-2 rounded-md text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Автор"
                className="w-full p-2 rounded-md text-black"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <input
                type="number"
                placeholder="Рік створення"
                className="w-full p-2 rounded-md text-black"
                value={year ?? ''}
                onChange={(e) => setYear(Number(e.target.value))}
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

            <Button type="submit" disabled={saving}>
                {saving ? 'Збереження...' : 'Зберегти скульптуру'}
            </Button>
        </form>
    )
}

export default ArtworkForm

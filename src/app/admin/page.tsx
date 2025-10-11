'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import AdminLogin from '@/components/Admin/AdminLogin'
import supabase from '@/utils/supabaseClient'
import Link from 'next/link'
import { getQRCodeBySculptureId } from '@/utils/generateQR'

interface Sculpture {
    id: string
    name: string
    author?: string | null
    year?: number | null
    description?: string
    image_urls: string[]
    created_at: string
}

interface SculptureWithQR extends Sculpture {
    qr_url?: string
}

const AdminPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [sculptures, setSculptures] = useState<SculptureWithQR[]>([])
    const [loading, setLoading] = useState(true)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    useEffect(() => {
        checkAuth()
        if (isAuthenticated) {
            fetchSculptures()
        }
    }, [isAuthenticated])

    const checkAuth = () => {
        const adminEmail = localStorage.getItem('adminEmail')
        setIsAuthenticated(!!adminEmail)
    }

    const fetchSculptures = async () => {
        try {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error

            // Отримати QR-коди для кожної скульптури
            const sculpturesWithQR = await Promise.all(
                data.map(async (sculpture) => {
                    const qrData = await getQRCodeBySculptureId(sculpture.id)
                    return {
                        ...sculpture,
                        qr_url: qrData?.qr_url
                    }
                })
            )

            setSculptures(sculpturesWithQR)
        } catch (error) {
            console.error('Помилка при завантаженні скульптур:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleDownloadQR = async (sculpture: SculptureWithQR) => {
        if (!sculpture.qr_url) {
            alert('QR-код не знайдено для цієї скульптури')
            return
        }

        try {
            const response = await fetch(sculpture.qr_url)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = url

            // Форматуємо назву файлу
            const fileName = `QR_${sculpture.name.replace(/[^a-zA-Z0-9а-яА-ЯїЇіІєЄґҐ]/g, '_')}.png`
            a.download = fileName

            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        } catch (error) {
            console.error('Помилка завантаження QR-коду:', error)
            alert('Не вдалося завантажити QR-код')
        }
    }

    const handleDelete = async (sculptureId: string, sculptureName: string) => {
        if (!confirm(`Ви впевнені, що хочете видалити скульптуру "${sculptureName}"?`)) {
            return
        }

        setDeletingId(sculptureId)
        try {
            const { error } = await supabase
                .from('sculptures')
                .delete()
                .eq('id', sculptureId)

            if (error) throw error

            // Оновлюємо список після видалення
            setSculptures(prev => prev.filter(s => s.id !== sculptureId))

        } catch (error) {
            console.error('Помилка при видаленні скульптури:', error)
            alert('Не вдалося видалити скульптуру')
        } finally {
            setDeletingId(null)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('adminEmail')
        localStorage.removeItem('adminId')
        setIsAuthenticated(false)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={() => setIsAuthenticated(true)} />
    }

    return (
        <Layout>
            <div className="min-h-screen bg-black text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Заголовок та кнопки */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-serif text-[#d4af37]">
                                Панель адміністратора
                            </h1>
                            <p className="text-gray-400 mt-2">
                                Керування скульптурами та QR-кодами
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <Link
                                href="/admin/add-artwork"
                                className="bg-[#d4af37] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#b8941f] transition"
                            >
                                Додати скульптуру
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition"
                            >
                                Вийти
                            </button>
                        </div>
                    </div>

                    {/* Таблиця скульптур */}
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="text-[#d4af37]">Завантаження...</div>
                        </div>
                    ) : sculptures.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-gray-400 text-lg">Немає скульптур</div>
                            <Link
                                href="/admin/add-artwork"
                                className="inline-block mt-4 bg-[#d4af37] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#b8941f] transition"
                            >
                                Додати першу скульптуру
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-zinc-900 rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead className="bg-zinc-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Скульптура
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Автор
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Дата створення
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        QR-код
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Дії
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                {sculptures.map((sculpture) => (
                                    <tr key={sculpture.id} className="hover:bg-zinc-800">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {sculpture.image_urls?.[0] && (
                                                    <img
                                                        className="h-10 w-10 rounded-lg object-cover mr-3"
                                                        src={sculpture.image_urls[0]}
                                                        alt={sculpture.name}
                                                    />
                                                )}
                                                <div>
                                                    <div className="text-sm font-medium text-white">
                                                        {sculpture.name}
                                                    </div>
                                                    {sculpture.year && (
                                                        <div className="text-sm text-gray-400">
                                                            {sculpture.year} р.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-300">
                                                {sculpture.author || '—'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {formatDate(sculpture.created_at)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {sculpture.qr_url ? (
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                    <span className="text-sm text-green-400">Є QR-код</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                                                        <span className="text-white text-xs">✗</span>
                                                    </div>
                                                    <span className="text-sm text-red-400">Немає QR-коду</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                {sculpture.qr_url && (
                                                    <button
                                                        onClick={() => handleDownloadQR(sculpture)}
                                                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-500 transition"
                                                    >
                                                        Завантажити QR
                                                    </button>
                                                )}
                                                <Link
                                                    href={`/admin/edit-artwork/${sculpture.id}`}
                                                    className="bg-[#d4af37] text-black px-3 py-1 rounded text-xs hover:bg-[#b8941f] transition"
                                                >
                                                    Редагувати
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(sculpture.id, sculpture.name)}
                                                    disabled={deletingId === sculpture.id}
                                                    className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-500 disabled:bg-red-400 disabled:cursor-not-allowed transition"
                                                >
                                                    {deletingId === sculpture.id ? 'Видалення...' : 'Видалити'}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Статистика */}
                    {sculptures.length > 0 && (
                        <div className="mt-6 text-sm text-gray-400">
                            Всього скульптур: {sculptures.length} |
                            З QR-кодами: {sculptures.filter(s => s.qr_url).length} |
                            Без QR-кодів: {sculptures.filter(s => !s.qr_url).length}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default AdminPage
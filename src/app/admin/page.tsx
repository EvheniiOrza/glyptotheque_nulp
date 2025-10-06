'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import Loader from '@/components/Admin/Loader'
import ArtworkCard from '@/components/Gallery/ArtworkCard'
import supabase from '@/utils/supabaseClient'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

interface Sculpture {
    id: string
    name: string
    author?: string
    year?: number
    image_urls: string[]
    qr_url?: string
}

const AdminDashboard: React.FC = () => {
    const [artworks, setArtworks] = useState<Sculpture[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const fetchArtworks = async () => {
            const { data, error } = await supabase
                .from('sculptures')
                .select('*')
                .order('created_at', { ascending: false })
            if (error) console.error(error)
            else setArtworks(data as Sculpture[])
            setLoading(false)
        }
        fetchArtworks()
    }, [])

    const handleDelete = async (id: string) => {
        if (!confirm('Видалити скульптуру?')) return
        const { error } = await supabase.from('sculptures').delete().eq('id', id)
        if (error) console.error(error)
        else setArtworks(artworks.filter(a => a.id !== id))
    }

    const handleGenerateQR = async (artwork: Sculpture) => {
        const url = `${window.location.origin}/gallery/${artwork.id}`
        const { error } = await supabase.from('sculptures').update({ qr_url: url }).eq('id', artwork.id)
        if (error) console.error(error)
        else {
            alert('QR згенеровано!')
            setArtworks(
                artworks.map(a => (a.id === artwork.id ? { ...a, qr_url: url } : a))
            )
        }
    }

    if (loading)
        return (
            <Layout>
                <div className="py-40 flex justify-center">
                    <Loader />
                </div>
            </Layout>
        )

    return (
        <Layout>
            <div className="py-16 px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d4af37] mb-8 text-center">
                    Адмін-панель
                </h1>

                <div className="flex justify-between items-center mb-8">
                    <span>Загальна кількість скульптур: {artworks.length}</span>
                    <Button onClick={() => router.push('/admin/add-artwork')}>
                        Додати нову скульптуру
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artworks.map(a => (
                        <div
                            key={a.id}
                            className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800"
                        >
                            <ArtworkCard
                                title={a.name}
                                description={a.author || 'Без автора'}
                                imageUrl={a.image_urls[0] || ''}
                                onClick={() => router.push(`/gallery/${a.id}`)}
                            />
                            <div className="mt-2 flex flex-col space-y-2">
                                <Button onClick={() => router.push(`/admin/edit-artwork/${a.id}`)}>
                                    Редагувати
                                </Button>
                                <Button onClick={() => handleDelete(a.id)} variant="dark">
                                    Видалити
                                </Button>
                                {!a.qr_url && (
                                    <Button onClick={() => handleGenerateQR(a)}>
                                        Згенерувати QR
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard

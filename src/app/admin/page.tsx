'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import ArtworkForm from '@/components/Admin/ArtworkForm'
import supabase from '@/utils/supabaseClient'
import Loader from '@/components/Admin/Loader'
import { useParams } from 'next/navigation'

const EditArtworkPage: React.FC = () => {
    const params = useParams()
    const { id } = params
    const [artworkData, setArtworkData] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtwork = async () => {
            const { data, error } = await supabase.from('sculptures').select('*').eq('id', id).single()
            if (error) console.error(error)
            else setArtworkData(data)
            setLoading(false)
        }
        fetchArtwork()
    }, [id])

    const handleSubmit = async (data: any) => {
        console.log('Дані для оновлення:', data)
        // Тут оновлення у Supabase
    }

    if (loading) return <Layout><div className="py-40 flex justify-center"><Loader /></div></Layout>
    if (!artworkData) return <Layout><div className="py-40 text-red-500 text-center">Скульптуру не знайдено.</div></Layout>

    return (
        <Layout>
            <div className="py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d4af37] mb-8 text-center">Редагувати скульптуру</h1>
                <ArtworkForm initialData={artworkData} onSubmit={handleSubmit} />
            </div>
        </Layout>
    )
}

export default EditArtworkPage

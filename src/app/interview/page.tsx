'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import Interview from '@/components/Interview/Interview'

const InterviewPage: React.FC = () => {
    return (
        <Layout>
            <main className="bg-black text-white min-h-screen py-16 px-4">
                <Interview />
            </main>
        </Layout>
    )
}

export default InterviewPage

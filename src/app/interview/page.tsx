'use client'

import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import Interview from '@/components/Interview/Interview'
import InterviewRyb from '@/components/Interview/Interviewryb'

const InterviewPage: React.FC = () => {
    const [activeInterview, setActiveInterview] = useState<string | null>(null)

    const toggleInterview = (interviewName: string) => {
        setActiveInterview(activeInterview === interviewName ? null : interviewName)
    }

    return (
        <Layout>
            <main className="bg-black text-white min-h-screen py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Інтерв'ю з Миколою Бевзом */}
                    <div className="border border-gold rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleInterview('bevz')}
                            className="w-full text-left p-6 bg-gold bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl md:text-3xl font-sans text-gold">
                                    Інтерв&#39;ю з Миколою Бевзом
                                </h2>
                                <span className="text-gold text-2xl ml-4">
                                    {activeInterview === 'bevz' ? '−' : '+'}
                                </span>
                            </div>
                            <p className="text-gray-300 mt-2 font-body">
                                «Ми працюємо над тим, щоб реставрація скульптурних творів стала високофаховою частиною української реставраційної школи»
                            </p>
                        </button>

                        {activeInterview === 'bevz' && (
                            <div className="p-6 border-t border-gold border-opacity-30">
                                <Interview />
                            </div>
                        )}
                    </div>

                    {/* Інтерв'ю з Олегом Рибчинським */}
                    <div className="border border-gold rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleInterview('rybchynsky')}
                            className="w-full text-left p-6 bg-gold bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl md:text-3xl font-sans text-gold">
                                    Інтерв&#39;ю з Олегом Рибчинським
                                </h2>
                                <span className="text-gold text-2xl ml-4">
                                    {activeInterview === 'rybchynsky' ? '−' : '+'}
                                </span>
                            </div>
                            <p className="text-gray-300 mt-2 font-body">
                                «Реставрація є політичним ставленням до українського спадку»
                            </p>
                        </button>

                        {activeInterview === 'rybchynsky' && (
                            <div className="p-6 border-t border-gold border-opacity-30">
                                <InterviewRyb />
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default InterviewPage
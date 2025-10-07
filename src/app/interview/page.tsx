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
            <main className="bg-black text-white min-h-screen py-16 px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Заголовок сторінки */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-light text-gold tracking-wide mb-4">
                            Glyptotheque
                        </h1>
                        <div className="w-24 h-px bg-gold bg-opacity-50 mx-auto"></div>
                        <p className="text-gray-400 font-body mt-4 text-sm uppercase tracking-wider">
                            Ексклюзивні інтерв&#39;ю
                        </p>
                    </div>

                    {/* Інтерв'ю з Миколою Бевзом */}
                    <div className="border border-gold border-opacity-30 rounded-xl overflow-hidden transition-all duration-500 hover:border-opacity-50">
                        <button
                            onClick={() => toggleInterview('bevz')}
                            className="w-full text-left p-6 bg-gold bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-light text-gold group-hover:text-opacity-90 transition-colors duration-300 mb-3">
                                        Інтерв&#39;ю з Миколою Бевзом
                                    </h2>
                                    <p className="text-gray-300 font-body text-base leading-relaxed italic">
                                        «Ми працюємо над тим, щоб реставрація скульптурних творів стала високофаховою частиною української реставраційної школи»
                                    </p>
                                </div>
                                <span className="text-gold text-2xl ml-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    {activeInterview === 'bevz' ? '−' : '+'}
                                </span>
                            </div>
                        </button>

                        {activeInterview === 'bevz' && (
                            <div className="border-t border-gold border-opacity-20 bg-black bg-opacity-40">
                                <div className="p-6 animate-fadeIn">
                                    <Interview />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Інтерв'ю з Олегом Рибчинським */}
                    <div className="border border-gold border-opacity-30 rounded-xl overflow-hidden transition-all duration-500 hover:border-opacity-50">
                        <button
                            onClick={() => toggleInterview('rybchynsky')}
                            className="w-full text-left p-6 bg-gold bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-light text-gold group-hover:text-opacity-90 transition-colors duration-300 mb-3">
                                        Інтерв&#39;ю з Олегом Рибчинським
                                    </h2>
                                    <p className="text-gray-300 font-body text-base leading-relaxed italic">
                                        «Реставрація є політичним ставленням до українського спадку»
                                    </p>
                                </div>
                                <span className="text-gold text-2xl ml-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    {activeInterview === 'rybchynsky' ? '−' : '+'}
                                </span>
                            </div>
                        </button>

                        {activeInterview === 'rybchynsky' && (
                            <div className="border-t border-gold border-opacity-20 bg-black bg-opacity-40">
                                <div className="p-6 animate-fadeIn">
                                    <InterviewRyb />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default InterviewPage
'use client'

import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import Interview from '@/components/Interview/Interview'
import InterviewRyb from '@/components/Interview/Interviewryb'
import InterviewGlyp from '@/components/Interview/Interviewglyp'

const InterviewPage: React.FC = () => {
    const [activeInterview, setActiveInterview] = useState<string | null>(null)

    const toggleInterview = (interviewName: string) => {
        setActiveInterview(activeInterview === interviewName ? null : interviewName)
    }

    return (
        <Layout>
            <main className="bg-white text-black min-h-screen py-16 px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Заголовок сторінки */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-black tracking-wide mb-4">
                            ТЕКСТИ
                        </h1>
                        <div className="w-24 h-px bg-gray-300 mx-auto"></div>
                    </div>

                    {/* Матеріал про гліптотеку */}
                    <div className="border border-gray-300 rounded-none overflow-hidden transition-all duration-500 hover:border-gray-400">
                        <button
                            onClick={() => toggleInterview('glyptotheque')}
                            className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-light text-black group-hover:text-opacity-90 transition-colors duration-300 mb-3">
                                        Навіщо нам гліптотека?
                                    </h2>
                                    <p className="text-black font-body text-base leading-relaxed italic">
                                        Історичний досвід та український контекст
                                    </p>
                                    <p className="text-gray-600 font-body text-sm mt-2">Діана Клочко</p>
                                </div>
                                <span className="text-black text-2xl ml-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    {activeInterview === 'glyptotheque' ? '−' : '+'}
                                </span>
                            </div>
                        </button>

                        {activeInterview === 'glyptotheque' && (
                            <div className="border-t border-gray-300 bg-gray-50">
                                <div className="p-6 animate-fadeIn">
                                    <InterviewGlyp />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Інтерв'ю з Миколою Бевзом */}
                    <div className="border border-gray-300 rounded-none overflow-hidden transition-all duration-500 hover:border-gray-400">
                        <button
                            onClick={() => toggleInterview('bevz')}
                            className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-light text-black group-hover:text-opacity-90 transition-colors duration-300 mb-3">
                                        Інтерв&#39;ю з Миколою Бевзом
                                    </h2>
                                    <p className="text-black font-body text-base leading-relaxed italic">
                                        «Ми працюємо над тим, щоб реставрація скульптурних творів стала високофаховою частиною української реставраційної школи»
                                    </p>
                                </div>
                                <span className="text-black text-2xl ml-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    {activeInterview === 'bevz' ? '−' : '+'}
                                </span>
                            </div>
                        </button>

                        {activeInterview === 'bevz' && (
                            <div className="border-t border-gray-300 bg-gray-50">
                                <div className="p-6 animate-fadeIn">
                                    <Interview />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Інтерв'ю з Олегом Рибчинським */}
                    <div className="border border-gray-300 rounded-none overflow-hidden transition-all duration-500 hover:border-gray-400">
                        <button
                            onClick={() => toggleInterview('rybchynsky')}
                            className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-light text-black group-hover:text-opacity-90 transition-colors duration-300 mb-3">
                                        Інтерв&#39;ю з Олегом Рибчинським
                                    </h2>
                                    <p className="text-black font-body text-base leading-relaxed italic">
                                        «Реставрація є політичним ставленням до українського спадку»
                                    </p>
                                </div>
                                <span className="text-black text-2xl ml-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    {activeInterview === 'rybchynsky' ? '−' : '+'}
                                </span>
                            </div>
                        </button>

                        {activeInterview === 'rybchynsky' && (
                            <div className="border-t border-gray-300 bg-gray-50">
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
'use client'

import React, { useState } from 'react'
import supabase from '@/utils/supabaseClient'

interface AdminLoginProps {
    onLogin: () => void
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            // Перевірка email в таблиці admins
            const { data, error } = await supabase
                .from('admins')
                .select('id, email')
                .eq('email', email.trim().toLowerCase())
                .single()

            if (error || !data) {
                setError('Невірна email адреса або ви не маєте доступу')
                return
            }

            // Зберегти інформацію про адміна в localStorage
            localStorage.setItem('adminEmail', data.email)
            localStorage.setItem('adminId', data.id)
            onLogin()

        } catch (err) {
            setError('Сталася помилка при вході')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-serif text-[#d4af37]">
                        Вхід для адміністратора
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email адреса
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] focus:z-10"
                            placeholder="Введіть ваш email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#d4af37] hover:bg-[#b8941f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] disabled:opacity-50"
                        >
                            {loading ? 'Вхід...' : 'Увійти'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
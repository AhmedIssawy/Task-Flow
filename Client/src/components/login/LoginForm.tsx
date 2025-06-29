'use client';

'use client'

import { getPathByRole } from '@/utils/roleRedirect'
import { useState } from 'react'
import { useLoginMutation } from '@/services/authapi'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'



export default function LoginForm() {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [login, { isLoading }] = useLoginMutation()
    const router = useRouter()
    const t = useTranslations('auth.login')
    const { isRTL } = useLanguage()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const { role, data } = await login({ id: userId, password }).unwrap()
            const redirectPath = getPathByRole(role, data.id)
            router.push(redirectPath)
            console.log('Login response:', role, data)
        } catch (err) {
            console.error('Login failed:', err)
        }
    }

    return (
        <div className={`space-y-6 max-w-sm mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    placeholder={t('ID')}
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    type="text"
                    required
                    className={`${isRTL ? 'text-right' : 'text-left'} h-12 text-lg`}
                />
                <Input
                    placeholder={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    className={`${isRTL ? 'text-right' : 'text-left'} h-12 text-lg`}
                />
                <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg">
                    {isLoading ? 'Logging in...' : t('signIn')}
                </Button>
                
            </form>
        </div>
    )
}

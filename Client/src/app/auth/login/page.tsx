'use client'

import LoginForm from '@/components/login/LoginForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'
import { LanguageSwitcher } from '@/components/made/language-switcher'
import { ThemeToggle } from '@/components/ui/theme-toggle'
export default function LocaleLoginPage() {
    const t = useTranslations('auth.login')
    const { isRTL } = useLanguage()

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
            <div className="relative z-10 w-full max-w-lg">
                <Card className="bg-background/80 backdrop-blur-md border border-border shadow-2xl">
                    <CardHeader className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                        <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} space-x-2 rtl:space-x-reverse`}>
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                        <CardTitle className="text-2xl font-bold">{t('title')}</CardTitle>
                        <CardDescription>{t('subtitle')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

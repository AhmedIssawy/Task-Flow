import React from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
// import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../ui/language-switcher'

const Header: React.FC = () => {
    const { t } = useTranslation()
    return (
        <header className="sticky top-0 z-50 w-full bg-theme border-b border-primary/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-signature text-primary">{t('app.name')}</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <ThemeToggle />
                        {/* Language Switcher */}
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

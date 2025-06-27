'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const { t } = useLanguage()

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="icon"
                onClick={() => {
                    const themes = ['light', 'dark', 'system']
                    const currentIndex = themes.indexOf(theme || 'system')
                    const nextTheme = themes[(currentIndex + 1) % themes.length]
                    setTheme(nextTheme)
                }}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t('common', 'theme')}</span>
            </Button>
        </div>
    )
}

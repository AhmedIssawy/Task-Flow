'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
    const { language, setLanguage, t } = useLanguage()

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="icon"
                onClick={() => {
                    setLanguage(language === 'ar' ? 'en' : 'ar')
                }}
            >
                <Languages className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t('common', 'language')}</span>
            </Button>
        </div>
    )
}

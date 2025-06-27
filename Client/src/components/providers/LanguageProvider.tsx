'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations, getBrowserLanguage, getDirection, getNestedTranslation, TranslationStructure } from '@/lib/i18n'

interface LanguageContextType {
    language: Language
    setLanguage: (language: Language) => void
    t: (category: keyof TranslationStructure, key: string) => string
    tFlat: (key: string) => string // Legacy support
    direction: 'ltr' | 'rtl'
    isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export default function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Get language from localStorage after component mounts
        const savedLanguage = localStorage.getItem('language') as Language
        const initialLanguage = savedLanguage || getBrowserLanguage()

        if (initialLanguage && (initialLanguage === 'en' || initialLanguage === 'ar')) {
            setLanguageState(initialLanguage)
            updateDocumentLanguage(initialLanguage)
        }
        setMounted(true)
    }, [])

    const updateDocumentLanguage = (lang: Language) => {
        const direction = getDirection(lang)
        document.documentElement.dir = direction
        document.documentElement.lang = lang
    }

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
        updateDocumentLanguage(lang)        // Set cookie for server-side access
        document.cookie = `language=${lang}; path=/; max-age=${60 * 60 * 24 * 365}` // 1 year
    }

    const t = (category: keyof TranslationStructure, key: string): string => {
        return getNestedTranslation(language, category, key)
    }

    // Legacy flat key support - searches all categories
    const tFlat = (key: string): string => {
        // Try to find the key in any category
        const languageTranslations = translations[language]
        for (const category of Object.keys(languageTranslations) as Array<keyof TranslationStructure>) {
            const categoryTranslations = languageTranslations[category] as Record<string, string>
            if (categoryTranslations[key]) {
                return categoryTranslations[key]
            }
        }
        return key
    }

    const direction = getDirection(language)
    const isRTL = direction === 'rtl'

    // Always provide context, but conditionally render content to prevent hydration mismatch
    const contextValue = {
        language,
        setLanguage,
        t,
        tFlat,
        direction,
        isRTL
    }

    return (
        <LanguageContext.Provider value={contextValue}>
            {!mounted ? (
                <div style={{ visibility: 'hidden' }}>{children}</div>
            ) : (
                children
            )}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}


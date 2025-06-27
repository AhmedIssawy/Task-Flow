// Internationalization configuration and utilities
import enTranslations from './local/en.json'
import arTranslations from './local/ar.json'

export type Language = 'en' | 'ar'

// Nested translation structure
export interface TranslationStructure {
    common: {
        welcome: string
        language: string
        theme: string
        loading: string
        error: string
        save: string
        cancel: string
        delete: string
        edit: string
        view: string
        search: string
        filter: string
    }
    theme: {
        light: string
        dark: string
        system: string
    }
    navigation: {
        home: string
        students: string
        teachers: string
        universities: string
        admin: string
        logout: string
    }
    forms: {
        name: string
        email: string
        phone: string
        address: string
        password: string
        confirm_password: string
    }
    status: {
        active: string
        inactive: string
        pending: string
        approved: string
        rejected: string
    }
    messages: {
        success: string
        not_found: string
        unauthorized: string
        invalid_credentials: string
    }
    app: {
        title: string
        subtitle: string
        description: string
        theme_support: string
        language_support: string
        rtk_support: string
    }
}

export const translations: Record<Language, TranslationStructure> = {
    en: enTranslations,
    ar: arTranslations,
}

// Helper function to get nested translation
export function getNestedTranslation(
    language: Language,
    category: keyof TranslationStructure,
    key: string
): string {
    const categoryTranslations = translations[language]?.[category] as Record<string, string>
    return categoryTranslations?.[key] || `${category}.${key}`
}

// Legacy support for flat key access (backward compatibility)
export function getTranslation(language: Language, key: string): string {
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

// Hook for getting browser language preference
export function getBrowserLanguage(): Language {
    if (typeof window === 'undefined') return 'en'

    const browserLang = navigator.language.split('-')[0]
    return browserLang === 'ar' ? 'ar' : 'en'
}

// Direction utility
export function getDirection(language: Language): 'ltr' | 'rtl' {
    return language === 'ar' ? 'rtl' : 'ltr'
}

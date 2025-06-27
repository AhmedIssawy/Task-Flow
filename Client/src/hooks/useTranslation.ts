import { useLanguage } from '@/components/providers/LanguageProvider'
import type { TranslationStructure } from '@/lib/i18n'

/**
 * Custom hook for accessing translations
 * Provides both nested and flat translation methods with enhanced error handling
 */
export function useTranslation() {
    const { t, tFlat, language, isRTL, direction } = useLanguage()

    return {        // Nested translation with category
        t: (category: keyof TranslationStructure, key: string) => {
            try {
                return t(category, key)
            } catch {
                console.warn(`Translation missing: ${category}.${key}`)
                return `${category}.${key}`
            }
        },
        // Flat translation (searches all categories)
        tFlat: (key: string) => {
            try {
                return tFlat(key)
            } catch {
                console.warn(`Translation missing: ${key}`)
                return key
            }
        },
        language,
        isRTL,
        direction,
    }
}

export default useTranslation

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SupportedLanguage = 'en' | 'ar'
export type TextDirection = 'ltr' | 'rtl'

interface LanguageState {
    currentLanguage: SupportedLanguage
    direction: TextDirection
    isLoading: boolean
}

// Get initial language from localStorage or default to 'en'
const getInitialLanguage = (): SupportedLanguage => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('language') as SupportedLanguage | null
        return saved || 'en'
    }
    return 'en'
}

const initialLanguage = getInitialLanguage()

const initialState: LanguageState = {
    currentLanguage: initialLanguage,
    direction: initialLanguage === 'ar' ? 'rtl' : 'ltr',
    isLoading: false,
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<SupportedLanguage>) => {
            state.currentLanguage = action.payload
            state.direction = action.payload === 'ar' ? 'rtl' : 'ltr'

            // Persist to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('language', action.payload)
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        toggleLanguage: (state) => {
            const newLanguage: SupportedLanguage = state.currentLanguage === 'en' ? 'ar' : 'en'
            state.currentLanguage = newLanguage
            state.direction = newLanguage === 'ar' ? 'rtl' : 'ltr'

            // Persist to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('language', newLanguage)
            }
        },
    },
})

export const { setLanguage, setLoading, toggleLanguage } = languageSlice.actions

// Selectors
export const selectLanguage = (state: { language: LanguageState }) => state.language
export const selectCurrentLanguage = (state: { language: LanguageState }) => state.language.currentLanguage
export const selectTextDirection = (state: { language: LanguageState }) => state.language.direction

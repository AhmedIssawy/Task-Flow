'use client'

import React, { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { setLanguage } from '@/store/slices/languageSlice'
import { setThemeMode, setSystemTheme } from '@/store/slices/themeSlice'

export const ClientHydration: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Only run on client side after mount
        if (typeof window === 'undefined') return

        // Load and apply saved language
        const savedLanguage = localStorage.getItem('language') as 'en' | 'ar' | null
        if (savedLanguage) {
            dispatch(setLanguage(savedLanguage))
        }

        // Load and apply saved theme
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
        if (savedTheme) {
            dispatch(setThemeMode(savedTheme))
        }

        // Detect and set system theme
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        dispatch(setSystemTheme(mediaQuery.matches ? 'dark' : 'light'))

        // Apply current language to document immediately
        const language = savedLanguage || 'en'
        document.documentElement.lang = language
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'

        console.log('ClientHydration: Theme and language initialized')
    }, [dispatch])

    return <>{children}</>
}

export default ClientHydration

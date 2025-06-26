'use client'

import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectEffectiveTheme, setSystemTheme } from '@/store/slices/themeSlice'

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch()
    const effectiveTheme = useAppSelector(selectEffectiveTheme)

    useEffect(() => {
        // Detect system theme preference (client-side only)
        if (typeof window === 'undefined') return

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            dispatch(setSystemTheme(e.matches ? 'dark' : 'light'))
        }

        // Set initial system theme
        dispatch(setSystemTheme(mediaQuery.matches ? 'dark' : 'light'))

        // Listen for system theme changes
        mediaQuery.addEventListener('change', handleSystemThemeChange)

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange)
        }
    }, [dispatch])

    useEffect(() => {
        // Apply theme to document (client-side only)
        if (typeof window === 'undefined') return

        const root = document.documentElement

        // Force remove all theme classes first
        root.classList.remove('light', 'dark')

        // Add the effective theme class
        root.classList.add(effectiveTheme)

        // Force apply theme styles directly to ensure they work
        if (effectiveTheme === 'dark') {
            root.style.setProperty('--color-background', '#0f1a24')
            root.style.setProperty('--color-foreground', '#ffffff')
        } else {
            root.style.setProperty('--color-background', '#ffffff')
            root.style.setProperty('--color-foreground', '#0d141c')
        }

        // Force a repaint to ensure styles are applied
        void root.offsetHeight // Trigger reflow

        // Debug logging
        console.log('ThemeProvider: Theme applied ->', effectiveTheme)
        console.log('ThemeProvider: HTML classes ->', root.className)
        console.log('ThemeProvider: CSS vars ->', {
            background: getComputedStyle(root).getPropertyValue('--color-background'),
            foreground: getComputedStyle(root).getPropertyValue('--color-foreground')
        })
    }, [effectiveTheme])

    return <>{children}</>
}

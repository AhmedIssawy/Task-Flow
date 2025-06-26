'use client'

import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import { useAppSelector } from '@/store/hooks'
import { selectCurrentLanguage, selectTextDirection } from '@/store/slices/languageSlice'
import i18n from '@/lib/i18n'

interface LanguageProviderProps {
    children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const currentLanguage = useAppSelector(selectCurrentLanguage)
    const textDirection = useAppSelector(selectTextDirection)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        // Initialize i18n and wait for it to be ready
        const initializeI18n = () => {
            if (i18n.isInitialized) {
                setIsReady(true)
                return
            }

            // Set up event listeners for initialization
            const onInitialized = () => {
                setIsReady(true)
                i18n.off('initialized', onInitialized)
            }

            const onFailedLoading = () => {
                console.warn('i18n failed to load resources, proceeding anyway')
                setIsReady(true)
                i18n.off('failedLoading', onFailedLoading)
            }

            i18n.on('initialized', onInitialized)
            i18n.on('failedLoading', onFailedLoading)

            // Fallback timeout to prevent infinite loading
            const timeout = setTimeout(() => {
                console.warn('i18n initialization timeout, proceeding anyway')
                setIsReady(true)
            }, 3000)

            // Clean up timeout if initialization completes
            i18n.on('initialized', () => clearTimeout(timeout))
        }

        initializeI18n()
    }, [])

    useEffect(() => {
        // Update i18n language and document when state changes
        if (!isReady) return

        // Change i18n language
        if (i18n.language !== currentLanguage) {
            i18n.changeLanguage(currentLanguage)
        }

        // Update document (client-side only)
        if (typeof window !== 'undefined') {
            const root = document.documentElement
            root.lang = currentLanguage
            root.dir = textDirection
        }
    }, [currentLanguage, textDirection, isReady])

    if (!isReady) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    )
}

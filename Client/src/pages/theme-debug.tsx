import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectEffectiveTheme, selectCurrentTheme, toggleTheme } from '@/store/slices/themeSlice'

export default function ThemeDebugPage() {
    const dispatch = useAppDispatch()
    const effectiveTheme = useAppSelector(selectEffectiveTheme)
    const currentTheme = useAppSelector(selectCurrentTheme)
    const [domClasses, setDomClasses] = useState('')
    const [cssVars, setCssVars] = useState<Record<string, string>>({})

    useEffect(() => {
        const updateDebugInfo = () => {
            if (typeof window !== 'undefined') {
                const root = document.documentElement
                setDomClasses(root.className)

                const computedStyle = getComputedStyle(root)
                setCssVars({
                    background: computedStyle.getPropertyValue('--color-background'),
                    foreground: computedStyle.getPropertyValue('--color-foreground'),
                })
            }
        }

        updateDebugInfo()
        const interval = setInterval(updateDebugInfo, 1000)
        return () => clearInterval(interval)
    }, [])

    const handleToggle = () => {
        console.log('Debug: Toggling theme')
        dispatch(toggleTheme())
    }

    return (
        <div className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold mb-8">Theme Debug Page</h1>

                {/* Theme Controls */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Theme Controls</h2>
                    <button
                        onClick={handleToggle}
                        className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Toggle Theme
                    </button>
                </div>

                {/* Theme State */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Theme State</h2>
                    <div className="space-y-2 font-mono text-sm">
                        <div>Effective Theme: <span className="font-bold">{effectiveTheme}</span></div>
                        <div>Current Theme: <span className="font-bold">{currentTheme}</span></div>
                        <div>LocalStorage Theme: <span className="font-bold">{typeof window !== 'undefined' ? localStorage.getItem('theme') : 'N/A'}</span></div>
                    </div>
                </div>

                {/* DOM State */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">DOM State</h2>
                    <div className="space-y-2 font-mono text-sm">
                        <div>HTML Classes: <span className="font-bold">{domClasses}</span></div>
                        <div>Background CSS Var: <span className="font-bold">{cssVars.background}</span></div>
                        <div>Foreground CSS Var: <span className="font-bold">{cssVars.foreground}</span></div>
                    </div>
                </div>

                {/* Visual Tests */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Visual Tests</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded border">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Card with theme classes</h3>
                            <p className="text-gray-600 dark:text-gray-300">This should change colors with theme</p>
                        </div>
                        <div className="bg-blue-500 dark:bg-blue-600 p-4 rounded text-white">
                            <h3 className="font-semibold">Blue card</h3>
                            <p>This should have different blue shades</p>
                        </div>
                    </div>
                </div>        {/* Back to Landing */}
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-block bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Landing Page
                    </Link>
                </div>
            </div>
        </div>
    )
}

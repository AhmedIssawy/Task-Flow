import React from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectCurrentTheme, toggleTheme } from '@/store/slices/themeSlice'
import { Button } from './button'

export const ThemeToggle: React.FC = () => {
    const dispatch = useAppDispatch()
    const currentTheme = useAppSelector(selectCurrentTheme)

    const handleToggle = () => {
        console.log('Before toggle - Current theme:', currentTheme)
        dispatch(toggleTheme())
        console.log('After toggle dispatched')
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="flex items-center gap-2 border-none rounded-xl min-w-[80px]"
            aria-label="Toggle theme"
        >
            {currentTheme === 'light' ? (
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ) : (
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            )}
            <span className="hidden sm:inline">
                {currentTheme === 'light' ? 'Dark' : 'Light'}
            </span>
        </Button>
    )
}

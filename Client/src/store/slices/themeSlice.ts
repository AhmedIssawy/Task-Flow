import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeState {
    mode: ThemeMode
    systemTheme: 'light' | 'dark'
    effectiveTheme: 'light' | 'dark'
}

// Get initial theme from localStorage or default to 'system'
const getInitialTheme = (): ThemeMode => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme') as ThemeMode | null
        return saved || 'system'
    }
    return 'system'
}

// Detect system theme preference
const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
}

const initialTheme = getInitialTheme()
const systemTheme = getSystemTheme()

const initialState: ThemeState = {
    mode: initialTheme,
    systemTheme: systemTheme,
    effectiveTheme: initialTheme === 'system' ? systemTheme : (initialTheme as 'light' | 'dark'),
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload
            state.effectiveTheme = action.payload === 'system' ? state.systemTheme : action.payload

            // Persist to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload)
                // Update document class
                const root = document.documentElement
                root.classList.remove('light', 'dark')
                root.classList.add(state.effectiveTheme)
            }
        },
        setSystemTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.systemTheme = action.payload
            if (state.mode === 'system') {
                state.effectiveTheme = action.payload

                // Update document class if in system mode
                if (typeof window !== 'undefined') {
                    const root = document.documentElement
                    root.classList.remove('light', 'dark')
                    root.classList.add(action.payload)
                }
            }
        },
        toggleTheme: (state) => {
            const newMode = state.mode === 'light' ? 'dark' : 'light'
            state.mode = newMode
            state.effectiveTheme = newMode

            // Persist to localStorage and update document
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', newMode)

                // Force immediate DOM update
                const root = document.documentElement
                root.classList.remove('light', 'dark')
                root.classList.add(newMode)

                console.log('Theme toggled to:', newMode)
            }
        },
    },
})

export const { setThemeMode, setSystemTheme, toggleTheme } = themeSlice.actions

// Selectors
export const selectTheme = (state: { theme: ThemeState }) => state.theme
export const selectCurrentTheme = (state: { theme: ThemeState }) => state.theme.effectiveTheme
export const selectEffectiveTheme = (state: { theme: ThemeState }) => state.theme.effectiveTheme

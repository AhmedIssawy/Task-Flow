'use client'

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps as NextThemeProviderProps } from 'next-themes'

interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: NextThemeProviderProps['attribute']
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
}

export default function ThemeProvider({
    children,
    attribute = "class",
    defaultTheme = "system",
    enableSystem = true,
    disableTransitionOnChange = true,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}

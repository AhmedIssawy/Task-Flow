import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                // Primary color
                primary: {
                    DEFAULT: '#369EFF',
                    50: '#E6F3FF',
                    100: '#CCE7FF',
                    200: '#99CFFF',
                    300: '#66B7FF',
                    400: '#369EFF',
                    500: '#0385FF',
                    600: '#0066CC',
                    700: '#004C99',
                    800: '#003366',
                    900: '#001933',
                },
                // Light mode colors
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',
                // Custom semantic colors
                'bg-light': '#FFFFFF',
                'text-light': '#0D141C',
                'bg-dark': '#0F1A24',
                'text-dark': '#FFFFFF',
            },
            fontFamily: {
                'signature': ['Dancing Script', 'cursive'],
                'logo': ['Edu NSW ACT Hand', 'cursive'],
                'body': ['Lora', 'serif'],
                'sans': ['Lora', 'serif'], // Make Lora the default
            },
        },
    },
    plugins: [],
}

export default config

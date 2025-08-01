'use client'

import * as React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-accent transition-all duration-200">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 theme-icon" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 theme-icon" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[140px] dropdown-content-enhanced">
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${theme === 'light' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                >
                    <Sun className="h-4 w-4" />
                    <span className="font-medium">Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                >
                    <Moon className="h-4 w-4" />
                    <span className="font-medium">Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${theme === 'system' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                >
                    <Monitor className="h-4 w-4" />
                    <span className="font-medium">System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

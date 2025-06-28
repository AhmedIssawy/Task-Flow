'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSwitcher } from '@/components/made/language-switcher'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations('landing.header')
    const { isRTL } = useLanguage()

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-lg shadow-black/5">
                <div className="px-6 py-4">
                    <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {/* Logo */}
                        <Link href="/" className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} group`}>
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-primary-foreground font-bold text-lg">TF</span>
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </div>
                            <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">TaskFlow</span>
                        </Link>



                        {/* Desktop CTA */}
                        <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                            <LanguageSwitcher />
                            <ThemeToggle />
                            <Link href="/auth/login">
                                <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {t('login')}
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className={`md:hidden flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                            <LanguageSwitcher />
                            <ThemeToggle />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="hover:bg-primary/10 transition-colors duration-300"
                            >
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/10 dark:border-gray-700/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-b-2xl">
                        <div className={`px-6 py-4 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <div className="pt-3 border-t border-white/10 dark:border-gray-700/20">
                                <Link href="/auth/login" className="block">
                                    <Button variant="ghost" className={`w-full ${isRTL ? 'justify-end' : 'justify-start'} hover:bg-primary/10 transition-all duration-300`}>
                                        {t('login')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

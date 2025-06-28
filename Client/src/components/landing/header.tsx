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
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 lg:px-6">
                <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Logo */}
                    <Link href="/" className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">TF</span>
                        </div>
                        <span className="font-bold text-xl text-foreground">TaskFlow</span>
                    </Link>

                    {/* Desktop CTA */}
                    <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Link href="/auth/login">
                            <Button variant="ghost" size="sm">
                                {t('login')}
                            </Button>
                        </Link>
                        <Link href="/auth/login">
                            <Button size="sm">
                                {t('signup')}
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
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t bg-background/95 backdrop-blur">
                        <div className={`px-2 pt-2 pb-3 space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <Link href="/auth/login" className="block">
                                <Button variant="ghost" className={`w-full ${isRTL ? 'justify-end' : 'justify-start'}`}>
                                    {t('login')}
                                </Button>
                            </Link>
                            <Link href="/auth/login" className="block">
                                <Button className="w-full">
                                    {t('signup')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

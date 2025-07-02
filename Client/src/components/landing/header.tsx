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
    const tLanding = useTranslations('landing')
    const { isRTL } = useLanguage()
    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group font-display">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-primary-foreground font-bold text-sm">TF</span>
                        </div>
                        <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                            {tLanding('taskFlow')}
                        </span>
                    </Link>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Link href="/auth/login">
                            <Button
                                variant="default"
                                size="sm"
                                className=" text-primary-foreground font-medium px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5"
                            >
                                {t('login')}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="hover:bg-accent transition-colors duration-300"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/50 shadow-lg">
                    <div className="px-4 py-4 space-y-3 text-start">
                        <Link href="/auth/login" className="block">
                            <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-all duration-300 text-foreground">
                                {t('login')}
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header

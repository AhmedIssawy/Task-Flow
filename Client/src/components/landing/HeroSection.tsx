'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, ArrowLeft } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

const HeroSection = () => {
    const t = useTranslations('landing.hero')
    const locale = useLocale()
    const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-bg-secondary to-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--secondary-color-rgb),0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--accent-color-rgb),0.08),transparent_50%)]"></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 backdrop-blur-sm mb-6">
                        <Sparkles className="w-4 h-4 animate-pulse me-2" />
                        {t('badge') || 'New Experience'}
                    </div>

                    {/* Main Headlines */}
                    <div className="space-y-6 max-w-4xl mx-auto flex flex-col items-center justify-center text-center rtl:text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight font-heading">
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center rtl:sm:flex-row-reverse">
                        <Link href="/auth/login">
                            <Button size="lg" className="w-full sm:w-auto group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                                {t('getStarted')}
                                <Arrow className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center items-center hover:border-primary transition-all duration-300 cursor-pointer">
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

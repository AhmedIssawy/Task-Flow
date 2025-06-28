'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Play, ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const HeroSection = () => {
    const t = useTranslations('landing.hero')
    const tHighlights = useTranslations('landing.featureHighlights')
    const { isRTL } = useLanguage()

    const features = [
        tHighlights('realtimeUpdates') || 'Real-time Collaboration',
        tHighlights('aiInsights') || 'AI-Powered Insights',
        tHighlights('analytics') || 'Advanced Analytics',
        tHighlights('integration') || 'Seamless Integration'
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className={`absolute top-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl ${isRTL ? 'right-10' : 'left-10'}`}></div>
            <div className={`absolute bottom-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl ${isRTL ? 'left-10' : 'right-10'}`}></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className={`max-w-5xl mx-auto text-center space-y-8 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    {/* Main Headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent font-serif">
                            {t('title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
                            {t('description')}
                        </p>
                    </div>

                    {/* Feature highlights */}
                    <div className={`flex flex-wrap justify-center gap-6 text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                        {features.map((feature) => (
                            <div key={feature} className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'}`}>
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                        <Link href="/auth/login">
                            <Button size="lg" className="w-full sm:w-auto group">
                                {t('getStarted')}
                                {isRTL ? (
                                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                ) : (
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                )}
                            </Button>
                        </Link>

                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto group"
                        >
                            <Play className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            {t('learnMore')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

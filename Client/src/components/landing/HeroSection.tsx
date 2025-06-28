'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, ArrowLeft, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

// Enhanced 3D Background Component
const Spline3DBackground = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Animated 3D-like background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/15 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-accent/25 to-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-secondary/15 to-primary/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>

        {/* Central focal point */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full animate-pulse"></div>

        {/* Interactive 3D icon in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/25 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border border-white/10">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            </div>
        </div>

        {/* Connecting lines/paths */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
            <path d="M50,200 Q200,50 350,200 T650,200" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/30 animate-pulse" />
            <path d="M200,50 Q350,200 200,350 T200,650" stroke="currentColor" strokeWidth="1" fill="none" className="text-secondary/30 animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
    </div>
)

const HeroSection = () => {
    const t = useTranslations('landing.hero')
    const { isRTL } = useLanguage()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-50/5 to-primary/5 dark:from-background dark:via-slate-900/20 dark:to-primary/10">
            {/* 3D Background */}
            <Spline3DBackground />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {t('badge') || 'New Experience'}
                    </div>

                    {/* Main Headlines - Reduced and centered */}
                    <div className="space-y-6 max-w-4xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight font-dancing-script">
                            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-lora">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* CTA Buttons - Centered */}
                    <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                        <Link href="/auth/login">
                            <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300">
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
                            className="w-full sm:w-auto group border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                        >
                            <Play className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} group-hover:scale-110 transition-transform`} />
                            {t('learnMore')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center hover:border-primary transition-colors cursor-pointer">
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

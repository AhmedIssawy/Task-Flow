'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, ArrowLeft, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'
import { useState, useCallback } from 'react'

// Loading component for Spline
const SplineLoader = () => (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg overflow-hidden">
        {/* Loading indicator */}
        <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/40 to-secondary/35 rounded-full flex items-center justify-center animate-pulse backdrop-blur-sm border border-white/20 shadow-lg">
                <Sparkles className="w-8 h-8 text-primary animate-spin" />
            </div>
        </div>

        {/* Simple floating shapes during loading */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/25 to-secondary/20 rounded-full blur-xl animate-pulse opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-primary/35 to-accent/25 rounded-full blur-lg animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full animate-pulse opacity-30"></div>
    </div>
)

// Spline 3D Component for side placement
const Spline3DComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    const onLoad = useCallback(() => {
        setIsLoaded(true)
        setHasError(false)
    }, [])

    const onError = useCallback(() => {
        setHasError(true)
        setIsLoaded(false)
    }, [])

    // Fallback component for errors or loading
    const FallbackComponent = () => (
        <div className="relative w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-60"></div>
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/25 to-secondary/20 rounded-full blur-xl animate-pulse opacity-50"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/25 rounded-full blur-lg animate-pulse opacity-40"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/30 rounded-full blur-2xl animate-pulse opacity-30"></div>
            <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-primary/35 to-accent/25 rounded-full blur-lg animate-pulse opacity-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full animate-pulse opacity-30"></div>
        </div>
    )

    return (
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden shadow-2xl border border-primary/10">
            {hasError ? (
                <FallbackComponent />
            ) : (
                <>
                    {/* Spline 3D Scene using iframe */}
                    <div className={`relative w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <iframe
                            src="https://my.spline.design/miniroomartcopy-gAA5Wqx9Oic8W8rkp0q7axHd/"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                outline: 'none',
                                borderRadius: '0.5rem'
                            }}
                            onLoad={onLoad}
                            onError={onError}
                            title="Spline 3D Scene"
                        />
                    </div>

                    {/* Show loader while loading */}
                    {!isLoaded && (
                        <div className="absolute inset-0">
                            <SplineLoader />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

const HeroSection = () => {
    const t = useTranslations('landing.hero')
    const { isRTL } = useLanguage()

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-background via-slate-50/5 to-primary/5 dark:from-background dark:via-slate-900/20 dark:to-primary/10">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-small opacity-[0.02] dark:opacity-[0.05]"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="min-h-screen flex items-center justify-center py-20">
                    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>

                        {/* Text Content */}
                        <div className={`space-y-8 ${isRTL ? 'lg:col-start-2 text-right' : 'lg:col-start-1 text-left'} lg:text-left ${isRTL && 'lg:text-right'}`}>
                            {/* Badge */}
                            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/25 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <Sparkles className={`w-4 h-4 animate-pulse ${isRTL ? 'ml-2' : 'mr-2'}`} />
                                {t('badge') || 'New Experience'}
                            </div>

                            {/* Main Headlines */}
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight font-dancing-script">
                                    <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent hover:from-primary hover:via-foreground hover:to-primary transition-all duration-500">
                                        {t('title')}
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-lora hover:text-foreground transition-colors duration-300">
                                    {t('subtitle')}
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                                <Link href="/auth/login">
                                    <Button size="lg" className="w-full sm:w-auto group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20">
                                        {t('getStarted')}
                                        {isRTL ? (
                                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                                        ) : (
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        )}
                                    </Button>
                                </Link>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto group/btn border-2 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-xl"
                                >
                                    <Play className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} group-hover/btn:scale-110 transition-transform`} />
                                    {t('learnMore')}
                                </Button>
                            </div>


                        </div>

                        {/* Spline 3D Component */}
                        <div className={`${isRTL ? 'lg:col-start-1' : 'lg:col-start-2'} flex items-center justify-center`}>
                            <div className="w-full max-w-lg lg:max-w-none">
                                <Spline3DComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse hover:bg-primary transition-colors duration-300"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

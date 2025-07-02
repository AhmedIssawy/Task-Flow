'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, ArrowLeft } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const t = useTranslations('landing.hero')
    const locale = useLocale()
    const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        }
    }

    const floatingAnimation = {
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 text-foreground overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary-light/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.12),transparent_50%)]"></div>

            {/* Animated Floating Elements */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-primary/15 rounded-full blur-3xl"
                animate={floatingAnimation}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/15 rounded-full blur-3xl"
                animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1 }
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-dark/10 rounded-full blur-2xl"
                animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 2 }
                }}
            />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center px-6 py-3 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/30 backdrop-blur-sm mb-8 shadow-lg ring-1 ring-primary/20"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Sparkles className="w-4 h-4 animate-pulse me-2" />
                        {t('badge') || 'New Experience'}
                    </motion.div>

                    {/* Main Headlines */}
                    <div className="space-y-6 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight font-heading"
                            variants={itemVariants}
                        >
                            <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body max-w-3xl"
                            variants={itemVariants}
                        >
                            {t('subtitle')}
                        </motion.p>
                        <motion.p
                            className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl"
                            variants={itemVariants}
                        >
                            {t('description')}
                        </motion.p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-10 justify-center rtl:sm:flex-row-reverse"
                        variants={itemVariants}
                    >
                        <Link href="/auth/login">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto group bg-primary text-primary-foreground hover:bg-primary-dark shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-medium"
                                >
                                    {t('getStarted')}
                                    <Arrow className="ms-2 h-5 w-5 transition-transform group-hover:translate-x-1 rtl:-translate-x-1" />
                                </Button>
                            </motion.div>
                        </Link>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg"
                            >
                                {t('learnMore')}
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center items-center hover:border-primary transition-all duration-300 cursor-pointer">
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection

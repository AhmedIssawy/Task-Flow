'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const Testimonials = () => {
    const t = useTranslations('landing.testimonials')
    const tExtended = useTranslations('landing.extendedTestimonials')
    const tStats = useTranslations('landing.stats')
    const { isRTL } = useLanguage()

    const testimonials = [
        {
            id: 1,
            content: t('testimonial1.text'),
            author: t('testimonial1.author'),
            role: t('testimonial1.role'),
            company: "TechCorp Solutions",
            avatar: "/avatars/sarah.jpg",
            rating: 5,
            featured: true
        },
        {
            id: 2,
            content: t('testimonial2.text'),
            author: t('testimonial2.author'),
            role: t('testimonial2.role'),
            company: "InnovateLab",
            avatar: "/avatars/michael.jpg",
            rating: 5,
            featured: true
        },
        {
            id: 3,
            content: t('testimonial3.text'),
            author: t('testimonial3.author'),
            role: t('testimonial3.role'),
            company: "GlobalTech Inc",
            avatar: "/avatars/emily.jpg",
            rating: 5,
            featured: true
        },
        {
            id: 4,
            content: tExtended('testimonial4.text'),
            author: tExtended('testimonial4.author'),
            role: tExtended('testimonial4.role'),
            company: "Creative Studios",
            avatar: "/avatars/david.jpg",
            rating: 5,
            featured: false
        },
        {
            id: 5,
            content: tExtended('testimonial5.text'),
            author: tExtended('testimonial5.author'),
            role: tExtended('testimonial5.role'),
            company: "StartupXYZ",
            avatar: "/avatars/lisa.jpg",
            rating: 5,
            featured: false
        },
        {
            id: 6,
            content: tExtended('testimonial6.text'),
            author: tExtended('testimonial6.author'),
            role: tExtended('testimonial6.role'),
            company: "DevTech Pro",
            avatar: "/avatars/james.jpg",
            rating: 5,
            featured: false
        }
    ]

    const stats = [
        { value: "10,000+", label: tStats('happyCustomers') },
        { value: "99.9%", label: tStats('uptimeGuarantee') },
        { value: "4.9/5", label: tStats('customerRating') },
        { value: "50+", label: tStats('countriesServed') }
    ]

    const featuredTestimonials = testimonials.filter(t => t.featured)
    const regularTestimonials = testimonials.filter(t => !t.featured)

    return (
        <section id="testimonials" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.05),transparent_50%)]"></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 text-orange-600 dark:text-orange-400 text-sm font-medium border border-orange-200 dark:border-orange-800 mb-4">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        {t('badge') || 'Customer Love'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-edu-nsw">
                        {t('title')}
                        <span className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent mt-2 font-dancing-script">
                            {t('subtitle')}
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-lora">
                        {t('description') || 'See what our customers have to say about their experience with TaskFlow.'}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="group relative">
                            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:border-primary/30 transition-all duration-300">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                            {/* Floating index */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Testimonials - Creative Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {featuredTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="group relative">
                            {/* Card */}
                            <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                        <Quote className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Rating */}
                                <div className={`flex mb-6 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                                    ))}
                                </div>

                                {/* Content */}
                                <blockquote className={`text-base leading-relaxed text-foreground mb-6 relative z-10 ${isRTL ? 'text-right' : ''}`}>
                                    &quot;{testimonial.content}&quot;
                                </blockquote>

                                {/* Author */}
                                <div className={`flex items-center pt-6 border-t border-gray-200/50 dark:border-gray-700/50 relative z-10 ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                                    <div className="relative">
                                        <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                                            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-semibold">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                                    </div>
                                    <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-xs text-muted-foreground/70 font-medium">
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regular Testimonials - Masonry Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {regularTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="group">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/30 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200/30 dark:border-gray-700/30 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                                {/* Rating */}
                                <div className={`flex mb-4 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                                    ))}
                                </div>

                                {/* Content */}
                                <blockquote className={`text-sm leading-relaxed text-muted-foreground mb-4 ${isRTL ? 'text-right' : ''}`}>
                                    &quot;{testimonial.content}&quot;
                                </blockquote>

                                {/* Author */}
                                <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}>
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                        <AvatarFallback className="text-xs bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                                        <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {testimonial.role}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Bottom CTA */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-12 text-center border border-yellow-200/50 dark:border-yellow-800/30">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_70%)]"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-medium border border-yellow-200 dark:border-yellow-800 mb-6">
                            <Star className="w-4 h-4 mr-2 fill-current" />
                            {tStats('ratedByUsers') || '4.9/5 Rated by 10k+ Users'}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                            {tStats('joinSatisfiedCustomers') || 'Join Our Satisfied Customers'}
                        </h3>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {tStats('startTrialToday') || 'Experience the difference that thousands of teams are already enjoying. Start your free trial today.'}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center px-4 py-2 bg-white/80 dark:bg-gray-900/80 rounded-full border border-white/30 dark:border-gray-700/30 backdrop-blur-sm">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-2" />
                                <span className="text-sm font-medium">4.9/5 Rating</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white/80 dark:bg-gray-900/80 rounded-full border border-white/30 dark:border-gray-700/30 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                <span className="text-sm font-medium">10k+ Happy Users</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white/80 dark:bg-gray-900/80 rounded-full border border-white/30 dark:border-gray-700/30 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                                <span className="text-sm font-medium">99.9% Uptime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

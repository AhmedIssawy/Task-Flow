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
            rating: 5,
            featured: true
        },
        {
            id: 2,
            content: t('testimonial2.text'),
            author: t('testimonial2.author'),
            role: t('testimonial2.role'),
            company: "InnovateLab",
            rating: 5,
            featured: true
        },
        {
            id: 3,
            content: t('testimonial3.text'),
            author: t('testimonial3.author'),
            role: t('testimonial3.role'),
            company: "GlobalTech Inc",
            rating: 5,
            featured: true
        },
        {
            id: 4,
            content: tExtended('testimonial4.text'),
            author: tExtended('testimonial4.author'),
            role: tExtended('testimonial4.role'),
            company: "Creative Studios",
            rating: 5,
            featured: false
        },
        {
            id: 5,
            content: tExtended('testimonial5.text'),
            author: tExtended('testimonial5.author'),
            role: tExtended('testimonial5.role'),
            company: "StartupXYZ",
            rating: 5,
            featured: false
        },
        {
            id: 6,
            content: tExtended('testimonial6.text'),
            author: tExtended('testimonial6.author'),
            role: tExtended('testimonial6.role'),
            company: "DevTech Pro",
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

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background text-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]"></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/30 backdrop-blur-sm">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        {t('badge') || 'Customer Love'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
                        {t('title')}
                        <span className="block text-primary mt-2 font-display">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                        {t('description') || 'See what our customers have to say about their experience with TaskFlow.'}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                            <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-300 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/30 transition-colors duration-300" />
                            <div className="flex items-center mb-4 relative z-10">
                                <Avatar className="w-12 h-12 mr-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                                    <AvatarImage src="/" alt={testimonial.author} />
                                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.author}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                            <div className="flex mb-4 relative z-10">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-muted-foreground italic relative z-10">
                                {`"${testimonial.content}"`}
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials

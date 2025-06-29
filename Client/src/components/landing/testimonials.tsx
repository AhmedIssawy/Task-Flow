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

    return (
        <section id="testimonials" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
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
                        <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
                        <div key={testimonial.id} className="group relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
                            <div className="flex items-center mb-4">
                                <Avatar className="w-12 h-12 mr-4">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-muted-foreground italic">
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

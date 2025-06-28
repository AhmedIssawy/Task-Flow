'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Testimonials = () => {
    const t = useTranslations('landing.testimonials')

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
            content: "Simple, intuitive, and powerful. TaskFlow helped us reduce project delivery time by 25%. The customer support is exceptional too.",
            author: "David Thompson",
            role: "Team Lead",
            company: "Creative Studios",
            avatar: "/avatars/david.jpg",
            rating: 5,
            featured: false
        },
        {
            id: 5,
            content: "The real-time collaboration features are game-changing. Our remote team feels more connected than ever before.",
            author: "Lisa Park",
            role: "Product Manager",
            company: "StartupXYZ",
            avatar: "/avatars/lisa.jpg",
            rating: 5,
            featured: false
        },
        {
            id: 6,
            content: "TaskFlow's automation features have saved us countless hours. We can now focus on strategic work instead of repetitive tasks.",
            author: "James Wilson",
            role: "Engineering Manager",
            company: "DevTech Pro",
            avatar: "/avatars/james.jpg",
            rating: 5,
            featured: false
        }
    ]

    const stats = [
        { value: "10,000+", label: "Happy customers" },
        { value: "99.9%", label: "Uptime guarantee" },
        { value: "4.9/5", label: "Customer rating" },
        { value: "50+", label: "Countries served" }
    ]

    const featuredTestimonials = testimonials.filter(t => t.featured)
    const regularTestimonials = testimonials.filter(t => !t.featured)

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className="text-center space-y-6 mb-16">
                    <Badge variant="secondary" className="px-4 py-2">
                        {t('title')}
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {t('title')}
                        <span className="block text-primary">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {featuredTestimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-background relative overflow-hidden">
                            <div className="absolute top-4 right-4 opacity-20">
                                <Quote className="w-8 h-8 text-primary" />
                            </div>
                            <CardContent className="p-6 space-y-6">
                                {/* Rating */}
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <blockquote className="text-base leading-relaxed text-foreground">
                                    &quot;{testimonial.content}&quot;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center space-x-4 pt-4 border-t">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                        <AvatarFallback>
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-foreground truncate">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-muted-foreground truncate">
                                            {testimonial.role} at {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Regular Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularTestimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="group hover:shadow-lg transition-all duration-300 bg-card">
                            <CardContent className="p-5 space-y-4">
                                {/* Rating */}
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                                    &quot;{testimonial.content}&quot;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center space-x-3 pt-2">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                        <AvatarFallback className="text-xs">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm text-foreground truncate">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-xs text-muted-foreground truncate">
                                            {testimonial.role}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Join thousands of satisfied customers</h3>
                    <p className="text-muted-foreground mb-6">
                        Start your free trial today and experience the difference TaskFlow makes.
                    </p>
                    <div className="flex justify-center">
                        <Badge variant="secondary" className="px-6 py-2">
                            <Star className="w-4 h-4 mr-2 fill-current" />
                            Rated 4.9/5 by over 10,000 users
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

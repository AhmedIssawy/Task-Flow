"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Testimonials = () => {
    const t = useTranslations('Landing.Testimonials');
    
    const testimonials = [
        {
            name: t('testimonials.sarah.name'),
            role: t('testimonials.sarah.role'),
            company: t('testimonials.sarah.company'),
            rating: 5,
            content: t('testimonials.sarah.content'),
            highlight: t('testimonials.sarah.highlight')
        },
        {
            name: t('testimonials.michael.name'),
            role: t('testimonials.michael.role'),
            company: t('testimonials.michael.company'),
            rating: 5,
            content: t('testimonials.michael.content'),
            highlight: t('testimonials.michael.highlight')
        },
        {
            name: t('testimonials.emily.name'),
            role: t('testimonials.emily.role'),
            company: t('testimonials.emily.company'),
            rating: 5,
            content: t('testimonials.emily.content'),
            highlight: t('testimonials.emily.highlight')
        },
        {
            name: t('testimonials.david.name'),
            role: t('testimonials.david.role'),
            company: t('testimonials.david.company'),
            rating: 5,
            content: t('testimonials.david.content'),
            highlight: t('testimonials.david.highlight')
        },
        {
            name: t('testimonials.lisa.name'),
            role: t('testimonials.lisa.role'),
            company: t('testimonials.lisa.company'),
            rating: 5,
            content: t('testimonials.lisa.content'),
            highlight: t('testimonials.lisa.highlight')
        },
        {
            name: t('testimonials.alex.name'),
            role: t('testimonials.alex.role'),
            company: t('testimonials.alex.company'),
            rating: 5,
            content: t('testimonials.alex.content'),
            highlight: t('testimonials.alex.highlight')
        }
    ];

    const stats = [
        { value: t('stats.customers.value'), label: t('stats.customers.label') },
        { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
        { value: t('stats.rating.value'), label: t('stats.rating.label') },
        { value: t('stats.uptime.value'), label: t('stats.uptime.label') }
    ];

    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-primary mb-6">
                        {t('title.part1')}
                        <span className="text-primary block">{t('title.part2')}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-primary">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground text-sm lg:text-base">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Quote size={16} className="text-primary-foreground" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        size={16}
                                        className="text-yellow-500 fill-current"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                                &quot;{testimonial.content}&quot;
                            </p>

                            {/* Highlight */}
                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-6 inline-block">
                                {testimonial.highlight}
                            </div>

                            {/* Author */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-bold text-foreground text-sm">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-muted-foreground text-xs">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
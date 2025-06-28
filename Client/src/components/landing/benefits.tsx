'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    TrendingUp,
    Clock,
    DollarSign,
    Users,
    Target,
    Rocket,
    ArrowRight,
    CheckCircle
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const Benefits = () => {
    const t = useTranslations('landing.benefits')
    const { isRTL } = useLanguage()

    const mainBenefits = [
        {
            icon: TrendingUp,
            title: t('productivity.title'),
            description: t('productivity.description'),
            metric: '40%',
            metricLabel: 'Productivity Increase',
            color: 'text-green-500'
        },
        {
            icon: Clock,
            title: t('collaboration.title'),
            description: t('collaboration.description'),
            metric: '15hrs',
            metricLabel: 'Time Saved Weekly',
            color: 'text-blue-500'
        },
        {
            icon: DollarSign,
            title: t('insights.title'),
            description: t('insights.description'),
            metric: '30%',
            metricLabel: 'Cost Reduction',
            color: 'text-yellow-500'
        }
    ]

    const secondaryBenefits = [
        {
            icon: Users,
            title: 'Better Team Collaboration',
            description: 'Enhanced communication and seamless collaboration across all team members.',
            features: ['Real-time updates', 'Shared workspaces', 'Team chat integration']
        },
        {
            icon: Target,
            title: 'Improved Goal Achievement',
            description: 'Track progress and achieve objectives with clear visibility and accountability.',
            features: ['Goal tracking', 'Progress monitoring', 'Achievement analytics']
        },
        {
            icon: Rocket,
            title: 'Faster Project Delivery',
            description: 'Accelerate project timelines with efficient task management and automation.',
            features: ['Automated workflows', 'Priority management', 'Deadline tracking']
        }
    ]

    return (
        <section id="benefits" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
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

                {/* Main Benefits - Large Cards */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {mainBenefits.map((benefit) => {
                        const IconComponent = benefit.icon
                        return (
                            <Card key={benefit.title} className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-background">
                                <CardHeader className="space-y-6 pb-4">
                                    <div className="mx-auto p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                                        <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <div className={`text-4xl font-bold ${benefit.color}`}>
                                                {benefit.metric}
                                            </div>
                                            <div className="text-sm text-muted-foreground font-medium">
                                                {benefit.metricLabel}
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                            {benefit.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {benefit.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Secondary Benefits */}
                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-center">Additional advantages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {secondaryBenefits.map((benefit) => {
                            const IconComponent = benefit.icon
                            return (
                                <Card key={benefit.title} className="group hover:shadow-lg transition-all duration-300">
                                    <CardHeader className="space-y-4">
                                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                {benefit.title}
                                            </CardTitle>
                                            <CardDescription className="mt-2">
                                                {benefit.description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {benefit.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to experience these benefits?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Join thousands of teams who have already transformed their workflow with TaskFlow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="group">
                            Start Free Trial
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits

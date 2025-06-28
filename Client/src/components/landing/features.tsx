'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Brain,
    Users,
    BarChart3,
    Zap,
    Shield,
    Globe,
    Clock,
    MessageSquare,
    CheckCircle
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const Features = () => {
    const t = useTranslations('landing.features')
    const { isRTL } = useLanguage()

    const features = [
        {
            icon: Brain,
            title: t('taskManagement.title'),
            description: t('taskManagement.description'),
            badge: 'Smart',
            highlights: ['Predictive Analytics', 'Auto-Assignment', 'Smart Suggestions']
        },
        {
            icon: Users,
            title: t('teamCollaboration.title'),
            description: t('teamCollaboration.description'),
            badge: 'Team',
            highlights: ['Live Updates', 'Shared Workspaces', 'Team Chat']
        },
        {
            icon: BarChart3,
            title: t('analytics.title'),
            description: t('analytics.description'),
            badge: 'Analytics',
            highlights: ['Custom Reports', 'Performance Metrics', 'Trend Analysis']
        },
        {
            icon: Zap,
            title: t('integration.title'),
            description: t('integration.description'),
            badge: 'Performance',
            highlights: ['Sub-second Loading', 'Global CDN', 'Offline Support']
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Your data is protected with enterprise-grade security and compliance standards.',
            badge: 'Security',
            highlights: ['End-to-End Encryption', 'GDPR Compliant', 'SSO Integration']
        },
        {
            icon: Globe,
            title: 'Global Integration',
            description: 'Connect with over 100+ tools and services to create a unified workflow experience.',
            badge: 'Integration',
            highlights: ['API Access', '100+ Integrations', 'Custom Webhooks']
        }
    ]

    const additionalFeatures = [
        { icon: Clock, title: 'Time Tracking', description: 'Built-in time tracking with detailed reports' },
        { icon: MessageSquare, title: 'Team Communication', description: 'Integrated chat and video calls' },
        { icon: CheckCircle, title: 'Goal Management', description: 'Set and track team objectives and key results' }
    ]

    return (
        <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {t('title')}
                        <span className="block text-primary">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {features.map((feature) => {
                        const IconComponent = feature.icon
                        return (
                            <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                                <CardHeader className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {feature.badge}
                                        </Badge>
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                        <CardDescription className="mt-2 text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {feature.highlights.map((highlight) => (
                                            <li key={highlight} className="flex items-center text-sm text-muted-foreground">
                                                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Additional Features */}
                <div className="border-t pt-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Plus many more features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {additionalFeatures.map((feature) => {
                            const IconComponent = feature.icon
                            return (
                                <div key={feature.title} className="flex items-start space-x-4 p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
                                    <div className="p-2 rounded-md bg-primary/10">
                                        <IconComponent className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features

'use client'
import React from 'react'
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
    const tSecurity = useTranslations('landing.securityFeature')
    const tGlobal = useTranslations('landing.globalIntegration')
    const tHighlights = useTranslations('landing.featureHighlights')
    const tAdditional = useTranslations('landing.additionalFeatures')
    const { isRTL } = useLanguage()

    const features = [
        {
            icon: Brain,
            title: t('taskManagement.title'),
            description: t('taskManagement.description'),
            badge: 'Smart',
            highlights: [
                tHighlights('predictiveAnalytics'),
                tHighlights('autoAssignment'),
                tHighlights('smartSuggestions')
            ]
        },
        {
            icon: Users,
            title: t('teamCollaboration.title'),
            description: t('teamCollaboration.description'),
            badge: 'Team',
            highlights: [
                tHighlights('liveUpdates'),
                tHighlights('sharedWorkspaces'),
                tHighlights('teamChat')
            ]
        },
        {
            icon: BarChart3,
            title: t('analytics.title'),
            description: t('analytics.description'),
            badge: 'Analytics',
            highlights: [
                tHighlights('customReports'),
                tHighlights('performanceMetrics'),
                tHighlights('trendAnalysis')
            ]
        },
        {
            icon: Zap,
            title: t('integration.title'),
            description: t('integration.description'),
            badge: 'Performance',
            highlights: [
                tHighlights('subSecondLoading'),
                tHighlights('globalCDN'),
                tHighlights('offlineSupport')
            ]
        },
        {
            icon: Shield,
            title: tSecurity('title'),
            description: tSecurity('description'),
            badge: 'Security',
            highlights: [
                tHighlights('endToEndEncryption'),
                tHighlights('gdprCompliant'),
                tHighlights('ssoIntegration')
            ]
        },
        {
            icon: Globe,
            title: tGlobal('title'),
            description: tGlobal('description'),
            badge: 'Integration',
            highlights: [
                tHighlights('apiAccess'),
                tHighlights('hundredPlusIntegrations'),
                tHighlights('customWebhooks')
            ]
        }
    ]

    const additionalFeatures = [
        {
            icon: Clock,
            title: tAdditional('timeTracking.title'),
            description: tAdditional('timeTracking.description')
        },
        {
            icon: MessageSquare,
            title: tAdditional('teamCommunication.title'),
            description: tAdditional('teamCommunication.description')
        },
        {
            icon: CheckCircle,
            title: tAdditional('goalManagement.title'),
            description: tAdditional('goalManagement.description')
        }
    ]

    return (
        <section id="features" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
                        <Zap className="w-4 h-4 mr-2" />
                        {t('badge') || 'Powerful Features'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
                        {t('title')}
                        <span className="block text-primary mt-2 font-display">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                        {t('description') || 'Discover the tools that will transform how you manage tasks and collaborate with your team.'}
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={feature.title} className="group relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="p-4 rounded-xl bg-primary/10 inline-block">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Highlights */}
                                <div className="mt-6 space-y-3">
                                    {feature.highlights.map((highlight) => (
                                        <div key={highlight} className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                                            <CheckCircle className={`w-4 h-4 text-secondary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Features Section */}
                <div className="relative">
                    <h3 className="text-2xl font-bold text-center mb-12">{tAdditional('title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalFeatures.map((feature) => {
                            const IconComponent = feature.icon
                            return (
                                <div key={feature.title} className={`group p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                                        <div className="p-3 rounded-xl bg-secondary/10">
                                            <IconComponent className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-2 group-hover:text-secondary transition-colors duration-300">
                                                {feature.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
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

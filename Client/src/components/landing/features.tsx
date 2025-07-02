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
            color: 'primary', // Blue theme
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
            color: 'success', // Green theme
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
            color: 'warning', // Yellow theme
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
            color: 'accent', // Purple theme
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
            color: 'danger', // Red theme
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
            color: 'secondary', // Gray theme
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
        <section id="features" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background text-foreground">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/30 backdrop-blur-sm">
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
                        const getColorClasses = (color: string) => {
                            switch (color) {
                                case 'primary':
                                    return {
                                        iconBg: 'bg-primary/15 group-hover:bg-primary/20',
                                        iconColor: 'text-primary',
                                        titleHover: 'group-hover:text-primary',
                                        border: 'hover:border-primary/30',
                                        shadow: 'hover:shadow-primary/10'
                                    }
                                case 'success':
                                    return {
                                        iconBg: 'bg-success/15 group-hover:bg-success/20',
                                        iconColor: 'text-success',
                                        titleHover: 'group-hover:text-success',
                                        border: 'hover:border-success/30',
                                        shadow: 'hover:shadow-success/10'
                                    }
                                case 'warning':
                                    return {
                                        iconBg: 'bg-warning/15 group-hover:bg-warning/20',
                                        iconColor: 'text-warning',
                                        titleHover: 'group-hover:text-warning',
                                        border: 'hover:border-warning/30',
                                        shadow: 'hover:shadow-warning/10'
                                    }
                                case 'danger':
                                    return {
                                        iconBg: 'bg-danger/15 group-hover:bg-danger/20',
                                        iconColor: 'text-danger',
                                        titleHover: 'group-hover:text-danger',
                                        border: 'hover:border-danger/30',
                                        shadow: 'hover:shadow-danger/10'
                                    }
                                case 'accent':
                                    return {
                                        iconBg: 'bg-accent/15 group-hover:bg-accent/20',
                                        iconColor: 'text-accent',
                                        titleHover: 'group-hover:text-accent',
                                        border: 'hover:border-accent/30',
                                        shadow: 'hover:shadow-accent/10'
                                    }
                                case 'secondary':
                                    return {
                                        iconBg: 'bg-secondary/15 group-hover:bg-secondary/20',
                                        iconColor: 'text-secondary',
                                        titleHover: 'group-hover:text-secondary',
                                        border: 'hover:border-secondary/30',
                                        shadow: 'hover:shadow-secondary/10'
                                    }
                                default:
                                    return {
                                        iconBg: 'bg-primary/15 group-hover:bg-primary/20',
                                        iconColor: 'text-primary',
                                        titleHover: 'group-hover:text-primary',
                                        border: 'hover:border-primary/30',
                                        shadow: 'hover:shadow-primary/10'
                                    }
                            }
                        }

                        const colorClasses = getColorClasses(feature.color)

                        return (
                            <div key={feature.title} className={`group relative p-8 rounded-2xl bg-card border border-border ${colorClasses.border} hover:shadow-xl ${colorClasses.shadow} transition-all duration-300 hover:-translate-y-1`}>
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className={`p-4 rounded-xl ${colorClasses.iconBg} inline-block transition-colors duration-300`}>
                                        <IconComponent className={`w-8 h-8 ${colorClasses.iconColor}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className={`text-xl font-bold text-foreground ${colorClasses.titleHover} transition-colors duration-300`}>
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
                                            <CheckCircle className={`w-4 h-4 ${colorClasses.iconColor} ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
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
                                <div key={feature.title} className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
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

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
    CheckCircle,
    Sparkles
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
        <section id="features" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-20 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm mb-4">
                        <Zap className="w-4 h-4 mr-2" />
                        {t('badge') || 'Powerful Features'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-edu-nsw">
                        {t('title')}
                        <span className="block text-primary mt-2 font-dancing-script">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lora">
                        {t('description') || 'Discover the tools that will transform how you manage tasks and collaborate with your team.'}
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {features.map((feature) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={feature.title} className="group relative">
                                {/* Card */}
                                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm">
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className="relative inline-flex">
                                            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>

                                        {/* Badge */}
                                        <div className="absolute -top-2 -right-2">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                                {feature.badge}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative space-y-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div className="relative mt-6 space-y-3">
                                        {feature.highlights.map((highlight, highlightIndex) => (
                                            <div
                                                key={highlight}
                                                className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                                                style={{
                                                    transitionDelay: `${300 + (highlightIndex * 100)}ms`,
                                                    transform: 'translateY(10px)',
                                                }}
                                            >
                                                <CheckCircle className={`w-4 h-4 text-primary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Features Section */}
                <div className="relative">
                    {/* Separator */}
                    <div className="flex items-center justify-center mb-16">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
                        <div className="mx-4 p-2 rounded-full bg-primary/10 border border-primary/20">
                            <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-center mb-12">{tAdditional('title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalFeatures.map((feature) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={feature.title}
                                    className={`group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/30 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200/30 dark:border-gray-700/30 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}
                                >
                                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
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

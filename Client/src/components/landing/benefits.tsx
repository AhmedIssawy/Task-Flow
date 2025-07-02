'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    TrendingUp,
    Clock,
    DollarSign,
    Users,
    Target,
    Rocket,
    ArrowRight
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const Benefits = () => {
    const t = useTranslations('landing.benefits')
    const tAdditional = useTranslations('landing.additionalBenefits')
    const tHighlights = useTranslations('landing.featureHighlights')
    const { isRTL } = useLanguage()

    const mainBenefits = [
        {
            icon: TrendingUp,
            title: t('productivity.title'),
            description: t('productivity.description'),
            metric: '',
            metricLabel: tHighlights('productivity') || 'Productivity Increase',
            color: 'success'
        },
        {
            icon: Clock,
            title: t('collaboration.title'),
            description: t('collaboration.description'),
            metric: '15hrs',
            metricLabel: tHighlights('timeSaved') || 'Time Saved Weekly',
            color: 'primary'
        },
        {
            icon: DollarSign,
            title: t('insights.title'),
            description: t('insights.description'),
            metric: '',
            metricLabel: tHighlights('costReduction') || 'Cost Reduction',
            color: 'warning'
        }
    ]

    const secondaryBenefits = [
        {
            icon: Users,
            title: tAdditional('betterTeamCollaboration.title'),
            description: tAdditional('betterTeamCollaboration.description'),
            features: [
                tHighlights('realtimeUpdates'),
                tHighlights('sharedWorkspaces2'),
                tHighlights('teamChatIntegration')
            ]
        },
        {
            icon: Target,
            title: tAdditional('improvedGoalAchievement.title'),
            description: tAdditional('improvedGoalAchievement.description'),
            features: [
                tHighlights('goalTracking'),
                tHighlights('progressMonitoring'),
                tHighlights('achievementAnalytics')
            ]
        },
        {
            icon: Rocket,
            title: tAdditional('fasterProjectDelivery.title'),
            description: tAdditional('fasterProjectDelivery.description'),
            features: [
                tHighlights('automatedWorkflows'),
                tHighlights('priorityManagement'),
                tHighlights('deadlineTracking')
            ]
        }
    ]

    return (
        <section id="benefits" className="py-20 bg-gradient-to-b from-primary/5 via-background to-primary/10 text-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,197,253,0.08),transparent_70%)]"></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/30 backdrop-blur-sm">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {t('badge') || 'Proven Results'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
                        {t('title')}
                        <span className="block text-primary mt-2 font-display">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                        {t('description') || 'Join thousands of teams who have transformed their productivity with TaskFlow.'}
                    </p>
                </div>

                {/* Main Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {mainBenefits.map((benefit) => {
                        const IconComponent = benefit.icon
                        const getColorClasses = (color: string) => {
                            switch (color) {
                                case 'success':
                                    return {
                                        iconBg: 'bg-success/15 group-hover:bg-success/20',
                                        iconColor: 'text-success',
                                        metricColor: 'text-success',
                                        titleHover: 'group-hover:text-success',
                                        border: 'hover:border-success/30',
                                        shadow: 'hover:shadow-success/10',
                                        gradient: 'from-success/5'
                                    }
                                case 'warning':
                                    return {
                                        iconBg: 'bg-warning/15 group-hover:bg-warning/20',
                                        iconColor: 'text-warning',
                                        metricColor: 'text-warning',
                                        titleHover: 'group-hover:text-warning',
                                        border: 'hover:border-warning/30',
                                        shadow: 'hover:shadow-warning/10',
                                        gradient: 'from-warning/5'
                                    }
                                case 'primary':
                                default:
                                    return {
                                        iconBg: 'bg-primary/15 group-hover:bg-primary/20',
                                        iconColor: 'text-primary',
                                        metricColor: 'text-primary',
                                        titleHover: 'group-hover:text-primary',
                                        border: 'hover:border-primary/30',
                                        shadow: 'hover:shadow-primary/10',
                                        gradient: 'from-primary/5'
                                    }
                            }
                        }

                        const colorClasses = getColorClasses(benefit.color)

                        return (
                            <div key={benefit.title} className={`group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 ${colorClasses.border} hover:shadow-xl ${colorClasses.shadow} transition-all duration-300 hover:-translate-y-1`}>
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>

                                {/* Icon */}
                                <div className="mb-6 relative z-10">
                                    <div className={`p-4 rounded-xl ${colorClasses.iconBg} inline-block transition-colors duration-300`}>
                                        <IconComponent className={`w-8 h-8 ${colorClasses.iconColor}`} />
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="mb-6 relative z-10">
                                    <div className={`text-4xl font-bold ${colorClasses.metricColor} group-hover:scale-105 transition-transform duration-300`}>{benefit.metric}</div>
                                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{benefit.metricLabel}</div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className={`text-xl font-bold text-foreground ${colorClasses.titleHover} transition-colors duration-300`}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Secondary Benefits Section */}
                <div className="relative">
                    <h3 className="text-2xl font-bold text-center mb-12">{tAdditional('title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {secondaryBenefits.map((benefit) => {
                            const IconComponent = benefit.icon
                            return (
                                <div key={benefit.title} className={`group p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                                        <div className="p-3 rounded-xl bg-accent/10">
                                            <IconComponent className="w-6 h-6 text-accent" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold mb-4">{tAdditional('readyToExperience.title')}</h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{tAdditional('readyToExperience.description')}</p>
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            {tAdditional('readyToExperience.startFreeTrial')}
                            <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
                        </Button>
                        <Button size="lg" variant="outline">
                            {tAdditional('readyToExperience.scheduleDemo')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits

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
            metric: '40%',
            metricLabel: tHighlights('productivity') || 'Productivity Increase',
            color: 'text-green-500'
        },
        {
            icon: Clock,
            title: t('collaboration.title'),
            description: t('collaboration.description'),
            metric: '15hrs',
            metricLabel: tHighlights('timeSaved') || 'Time Saved Weekly',
            color: 'text-blue-500'
        },
        {
            icon: DollarSign,
            title: t('insights.title'),
            description: t('insights.description'),
            metric: '30%',
            metricLabel: tHighlights('costReduction') || 'Cost Reduction',
            color: 'text-yellow-500'
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
        <section id="benefits" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
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
                        return (
                            <div key={benefit.title} className="group relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="p-4 rounded-xl bg-accent/10 inline-block">
                                        <IconComponent className="w-8 h-8 text-accent" />
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-primary">{benefit.metric}</div>
                                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{benefit.metricLabel}</div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
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

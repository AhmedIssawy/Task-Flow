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
    ArrowRight,
    CheckCircle
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
        <section id="benefits" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,165,0,0.08),transparent_50%)]"></div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center space-y-6 mb-20 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm mb-4">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {t('badge') || 'Proven Results'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-edu-nsw">
                        {t('title')}
                        <span className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent mt-2 font-dancing-script">
                            {t('subtitle')}
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-lora">
                        {t('description') || 'Join thousands of teams who have transformed their productivity with TaskFlow.'}
                    </p>
                </div>

                {/* Main Benefits - Interactive Cards */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {mainBenefits.map((benefit, index) => {
                        const IconComponent = benefit.icon
                        return (
                            <div key={benefit.title} className="group relative">
                                {/* Card */}
                                <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Icon with animated background */}
                                    <div className="relative mb-8 text-center">
                                        <div className="relative inline-flex">
                                            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500">
                                                <IconComponent className={`w-10 h-10 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                                            </div>
                                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="relative text-center mb-6">
                                        <div className={`text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2`}>
                                            {benefit.metric}
                                        </div>
                                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                            {benefit.metricLabel}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative text-center space-y-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Floating number indicator */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                            </div>
                        )
                    })}
                </div>

                {/* Secondary Benefits - Modern Layout */}
                <div className="relative">
                    {/* Section Divider */}
                    <div className="flex items-center justify-center mb-16">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
                        <div className="mx-4 p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                            <Rocket className="w-5 h-5 text-primary" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
                    </div>

                    <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        {tAdditional('title')}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {secondaryBenefits.map((benefit) => {
                            const IconComponent = benefit.icon
                            return (
                                <div key={benefit.title} className="group relative">
                                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/30 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200/30 dark:border-gray-700/30 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                                        {/* Icon and Title */}
                                        <div className={`flex items-start mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                                                <IconComponent className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-2">
                                            {benefit.features.map((feature, featureIndex) => (
                                                <div
                                                    key={feature}
                                                    className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                                                    style={{
                                                        transitionDelay: `${featureIndex * 100}ms`,
                                                    }}
                                                >
                                                    <CheckCircle className={`w-4 h-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`} />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Enhanced CTA Section */}
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/5 to-secondary/10 p-12 text-center backdrop-blur-sm border border-primary/20 ${isRTL ? 'text-right' : ''}`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
                            <Rocket className="w-4 h-4 mr-2" />
                            Ready to Transform?
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                            {tAdditional('readyToExperience.title') || 'Start Your Success Story Today'}
                        </h3>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                            {tAdditional('readyToExperience.description') || 'Join thousands of teams already experiencing these benefits. Start your free trial today.'}
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                            <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                                {tAdditional('readyToExperience.startFreeTrial') || 'Start Free Trial'}
                                <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                                {tAdditional('readyToExperience.scheduleDemo') || 'Schedule Demo'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits

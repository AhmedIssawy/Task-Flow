"use client";
import React from 'react';
import { TrendingUp, Clock, Target, Smile } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Benefits = () => {
    const t = useTranslations('Landing.Benefits');
    
    const benefits = [
        {
            icon: TrendingUp,
            title: t('list.productivity.title'),
            description: t('list.productivity.description'),
            stat: t('list.productivity.stat'),
            statLabel: t('list.productivity.statLabel')
        },
        {
            icon: Clock,
            title: t('list.saveTime.title'),
            description: t('list.saveTime.description'),
            stat: t('list.saveTime.stat'),
            statLabel: t('list.saveTime.statLabel')
        },
        {
            icon: Target,
            title: t('list.hitGoals.title'),
            description: t('list.hitGoals.description'),
            stat: t('list.hitGoals.stat'),
            statLabel: t('list.hitGoals.statLabel')
        },
        {
            icon: Smile,
            title: t('list.satisfaction.title'),
            description: t('list.satisfaction.description'),
            stat: t('list.satisfaction.stat'),
            statLabel: t('list.satisfaction.statLabel')
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-primary mb-6">
                        {t('title')}
                        <span className="text-primary block">{t('subtitle')}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Benefits */}
                    <div className="space-y-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="flex items-start space-x-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <IconComponent size={28} className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground font-primary mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            {benefit.description}
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                                            <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-lg font-bold text-foreground">{t('dashboard.title')}</h4>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Progress Bars */}
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">{t('dashboard.taskCompletion')}</span>
                                            <span className="text-primary font-medium">87%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: '87%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">{t('dashboard.teamPerformance')}</span>
                                            <span className="text-primary font-medium">92%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">{t('dashboard.goalAchievement')}</span>
                                            <span className="text-primary font-medium">95%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                                        <div className="text-xl font-bold text-primary">127</div>
                                        <div className="text-sm text-muted-foreground">{t('dashboard.tasksDone')}</div>
                                    </div>
                                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                                        <div className="text-xl font-bold text-primary">8</div>
                                        <div className="text-sm text-muted-foreground">{t('dashboard.teamMembers')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

"use client";
import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Analytics = () => {
    const t = useTranslations('Landing.Analytics');

    const metrics = [
        {
            icon: TrendingUp,
            value: t('metrics.productivityIncrease.value'),
            label: t('metrics.productivityIncrease.label'),
            description: t('metrics.productivityIncrease.description')
        },
        {
            icon: BarChart3,
            value: t('metrics.successRate.value'),
            label: t('metrics.successRate.label'),
            description: t('metrics.successRate.description')
        },
        {
            icon: PieChart,
            value: t('metrics.timeSaved.value'),
            label: t('metrics.timeSaved.label'),
            description: t('metrics.timeSaved.description')
        },
        {
            icon: Activity,
            value: t('metrics.satisfaction.value'),
            label: t('metrics.satisfaction.label'),
            description: t('metrics.satisfaction.description')
        }
    ]; return (
        <section id="analytics" className="py-24 bg-background">
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
                </div>                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {metrics.map((metric, index) => {
                        const IconComponent = metric.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent size={32} className="text-primary" />
                                    </div>
                                    <div className="text-4xl font-bold text-primary mb-2 font-primary">
                                        {metric.value}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground font-primary mb-3">
                                        {metric.label}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {metric.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Visual Analytics Dashboard */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-foreground font-primary">
                            {t('dashboard.title')}
                        </h3>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-muted-foreground">{t('dashboard.live')}</span>
                        </div>
                    </div>                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Chart Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-muted/30 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">{t('dashboard.chartDescription')}</p>
                </div>
              </div>
            </div>                        {/* Stats Panel */}
                        <div className="space-y-4">
                            <div className="bg-muted/30 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground">{t('dashboard.activeTasks')}</span>
                                    <TrendingUp size={16} className="text-green-500" />
                                </div>
                                <div className="text-2xl font-bold text-foreground">247</div>
                                <div className="text-xs text-green-500">{t('dashboard.trends.weekGrowth')}</div>
                            </div>

                            <div className="bg-muted/30 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground">{t('dashboard.completed')}</span>
                                    <Activity size={16} className="text-blue-500" />
                                </div>
                                <div className="text-2xl font-bold text-foreground">1,432</div>
                                <div className="text-xs text-blue-500">{t('dashboard.trends.monthGrowth')}</div>
                            </div>

                            <div className="bg-muted/30 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground">{t('dashboard.efficiency')}</span>
                                    <PieChart size={16} className="text-purple-500" />
                                </div>
                                <div className="text-2xl font-bold text-foreground">92%</div>
                                <div className="text-xs text-purple-500">{t('dashboard.trends.aboveTarget')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;
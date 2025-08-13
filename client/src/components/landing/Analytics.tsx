import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity, Zap, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Analytics = () => {
    const t = useTranslations('Landing.Analytics');

    const metrics = [
        {
            icon: TrendingUp,
            value: t('metrics.productivityIncrease.value'),
            label: t('metrics.productivityIncrease.label'),
            description: t('metrics.productivityIncrease.description'),
            color: "from-emerald-500 to-teal-600",
            bgColor: "from-emerald-500/10 to-teal-600/10"
        },
        {
            icon: BarChart3,
            value: t('metrics.successRate.value'),
            label: t('metrics.successRate.label'),
            description: t('metrics.successRate.description'),
            color: "from-blue-500 to-cyan-600",
            bgColor: "from-blue-500/10 to-cyan-600/10"
        },
        {
            icon: PieChart,
            value: t('metrics.timeSaved.value'),
            label: t('metrics.timeSaved.label'),
            description: t('metrics.timeSaved.description'),
            color: "from-purple-500 to-violet-600",
            bgColor: "from-purple-500/10 to-violet-600/10"
        },
        {
            icon: Activity,
            value: t('metrics.satisfaction.value'),
            label: t('metrics.satisfaction.label'),
            description: t('metrics.satisfaction.description'),
            color: "from-orange-500 to-red-600",
            bgColor: "from-orange-500/10 to-red-600/10"
        }
    ];

    return (
        <section id="analytics" className="py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-32 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">


                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-primary mb-8 leading-tight">
                        <span className="text-foreground">{t('title')}</span>
                        <span className="text-gradient block mt-2">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {metrics.map((metric) => {
                        const IconComponent = metric.icon;
                        return (
                            <div
                                key={metric.label}
                                className="group relative glass-effect rounded-3xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/10 text-center overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${metric.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent size={36} className={`bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`} />
                                    </div>

                                    {/* Value */}
                                    <div className={`text-5xl font-bold font-primary mb-3 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}>
                                        {metric.value}
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-xl font-bold text-foreground font-primary mb-4 group-hover:text-primary transition-colors">
                                        {metric.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {metric.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Analytics Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Dashboard */}
                    <div className="lg:col-span-2 glass-effect rounded-3xl p-8 shadow-3xl border border-white/10 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-foreground font-primary">
                                    {t('dashboard.title')}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-muted-foreground">Real-time</span>
                                </div>
                            </div>

                            {/* Chart Area Mockup */}
                            <div className="bg-muted/20 rounded-2xl p-6 mb-6 relative overflow-hidden">
                                {/* Simulated Chart Lines */}
                                <div className="flex items-end justify-between h-32 gap-2">
                                    {[65, 45, 78, 52, 89, 67, 94, 73, 86, 91, 77, 95].map((height, i) => (
                                        <div key={`chart-bar-${i}-${height}`} className="flex-1 flex flex-col justify-end">
                                            <div
                                                className="bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-1000 hover:from-accent hover:to-accent/60"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Labels */}
                                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                                    <span>Jan</span>
                                    <span>Feb</span>
                                    <span>Mar</span>
                                    <span>Apr</span>
                                    <span>May</span>
                                    <span>Jun</span>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-primary/5 rounded-2xl p-4 text-center hover-lift">
                                    <div className="text-2xl font-bold text-primary font-primary">247</div>
                                    <div className="text-xs text-muted-foreground">{t('dashboard.activeTasks')}</div>
                                </div>
                                <div className="bg-emerald-500/5 rounded-2xl p-4 text-center hover-lift">
                                    <div className="text-2xl font-bold text-emerald-500 font-primary">1,432</div>
                                    <div className="text-xs text-muted-foreground">{t('dashboard.completed')}</div>
                                </div>
                                <div className="bg-purple-500/5 rounded-2xl p-4 text-center hover-lift">
                                    <div className="text-2xl font-bold text-purple-500 font-primary">92%</div>
                                    <div className="text-xs text-muted-foreground">{t('dashboard.efficiency')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Stats Panel */}
                    <div className="space-y-6">
                        {/* Activity Feed */}
                        <div className="glass-effect rounded-3xl p-6 shadow-xl border border-white/10">
                            <h4 className="text-lg font-bold text-foreground font-primary mb-4">Recent Activity</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover-lift">
                                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                                        <TrendingUp size={16} className="text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-foreground">Performance Up</div>
                                        <div className="text-xs text-muted-foreground">{t('dashboard.trends.weekGrowth')}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover-lift">
                                    <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                                        <Activity size={16} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-foreground">Tasks Completed</div>
                                        <div className="text-xs text-muted-foreground">{t('dashboard.trends.monthGrowth')}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover-lift">
                                    <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                                        <PieChart size={16} className="text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-foreground">Efficiency Rate</div>
                                        <div className="text-xs text-muted-foreground">{t('dashboard.trends.aboveTarget')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Overview */}
                        <div className="glass-effect rounded-3xl p-6 shadow-xl border border-white/10">
                            <h4 className="text-lg font-bold text-foreground font-primary mb-4">Team Overview</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Users size={16} className="text-primary" />
                                        <span className="text-sm text-foreground">Active Members</span>
                                    </div>
                                    <span className="text-lg font-bold text-primary font-primary">24</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Zap size={16} className="text-yellow-500" />
                                        <span className="text-sm text-foreground">Productivity Score</span>
                                    </div>
                                    <span className="text-lg font-bold text-yellow-500 font-primary">9.2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;
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
            statLabel: t('list.productivity.statLabel'),
            color: "from-emerald-500 to-teal-600",
            bgColor: "from-emerald-500/10 to-teal-600/10"
        },
        {
            icon: Clock,
            title: t('list.saveTime.title'),
            description: t('list.saveTime.description'),
            stat: t('list.saveTime.stat'),
            statLabel: t('list.saveTime.statLabel'),
            color: "from-blue-500 to-cyan-600",
            bgColor: "from-blue-500/10 to-cyan-600/10"
        },
        {
            icon: Target,
            title: t('list.hitGoals.title'),
            description: t('list.hitGoals.description'),
            stat: t('list.hitGoals.stat'),
            statLabel: t('list.hitGoals.statLabel'),
            color: "from-purple-500 to-violet-600",
            bgColor: "from-purple-500/10 to-violet-600/10"
        },
        {
            icon: Smile,
            title: t('list.satisfaction.title'),
            description: t('list.satisfaction.description'),
            stat: t('list.satisfaction.stat'),
            statLabel: t('list.satisfaction.statLabel'),
            color: "from-orange-500 to-red-600",
            bgColor: "from-orange-500/10 to-red-600/10"
        }
    ];

    return (
        <section id="benefits" className="py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-32 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
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

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Benefits */}
                    <div className="space-y-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="group relative">
                                    {/* Connecting Line */}
                                    {index < benefits.length - 1 && (
                                        <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/30 to-transparent"></div>
                                    )}

                                    <div className="flex items-start gap-6 p-6 rounded-3xl hover:bg-muted/20 transition-all duration-300 hover-lift">
                                        {/* Icon */}
                                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                            <IconComponent size={28} className={`bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent relative z-10`} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-foreground font-primary mb-3 group-hover:text-primary transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                                                {benefit.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="flex items-center gap-4">
                                                <div className={`text-4xl font-bold font-primary bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                                                    {benefit.stat}
                                                </div>
                                                <div className="text-muted-foreground">
                                                    {benefit.statLabel}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column - Interactive Dashboard */}
                    <div className="relative">
                        {/* Main Dashboard Card */}
                        <div className="glass-effect rounded-3xl p-8 shadow-3xl border border-white/10 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                            {/* Header */}
                            <div className="relative z-10 mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-2xl font-bold text-foreground font-primary">{t('dashboard.title')}</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-muted-foreground">Live</span>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Sections */}
                            <div className="relative z-10 space-y-6">
                                {/* Task Completion */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-foreground font-medium">{t('dashboard.taskCompletion')}</span>
                                        <span className="text-2xl font-bold text-primary font-primary">87%</span>
                                    </div>
                                    <div className="relative w-full bg-muted/30 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse-glow transition-all duration-1000"
                                            style={{ width: '87%' }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Team Performance */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-foreground font-medium">{t('dashboard.teamPerformance')}</span>
                                        <span className="text-2xl font-bold text-emerald-500 font-primary">92%</span>
                                    </div>
                                    <div className="relative w-full bg-muted/30 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
                                            style={{ width: '92%' }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Goal Achievement */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-foreground font-medium">{t('dashboard.goalAchievement')}</span>
                                        <span className="text-2xl font-bold text-purple-500 font-primary">95%</span>
                                    </div>
                                    <div className="relative w-full bg-muted/30 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000"
                                            style={{ width: '95%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-primary/5 rounded-2xl p-6 text-center hover-lift">
                                    <div className="text-3xl font-bold text-primary font-primary mb-1">127</div>
                                    <div className="text-sm text-muted-foreground">{t('dashboard.tasksDone')}</div>
                                </div>
                                <div className="bg-accent/5 rounded-2xl p-6 text-center hover-lift">
                                    <div className="text-3xl font-bold text-accent font-primary">8</div>
                                    <div className="text-sm text-muted-foreground">{t('dashboard.teamMembers')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Achievement Cards */}
                        <div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-xl border border-white/10 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                                    <Target size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-foreground">Goal Reached!</div>
                                    <div className="text-xs text-muted-foreground">+25% efficiency</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 glass-effect rounded-2xl p-4 shadow-xl border border-white/10 animate-float" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                                    <TrendingUp size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-foreground">Trending Up</div>
                                    <div className="text-xs text-muted-foreground">Best month yet</div>
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
"use client";
import React from 'react';
import { ExternalLink, Github, Play, Users, Calendar, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const OurWork = () => {
    const t = useTranslations('Landing.OurWork');

    const projects = [
        {
            title: t('projects.enterprise.title'),
            description: t('projects.enterprise.description'),
            image: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBjaGFydHMlMjBpbnRlcmZhY2V8ZW58MHwwfHxibHVlfDE3NTQ4MjczNDJ8MA&ixlib=rb-4.1.0&q=85",
            tags: ["React", "TypeScript", "Analytics"],
            metrics: {
                users: "10K+",
                tasks: "50K+",
                efficiency: "45%"
            },
            cta: t('projects.enterprise.cta'),
            color: "from-blue-500/20 to-cyan-600/20",
            size: "large"
        },
        {
            title: t('projects.startup.title'),
            description: t('projects.startup.description'),
            image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDB8fHwxNzU0ODI3MzQzfDA&ixlib=rb-4.1.0&q=85",
            tags: ["Vue.js", "Node.js", "Real-time"],
            metrics: {
                users: "2K+",
                tasks: "15K+",
                efficiency: "60%"
            },
            cta: t('projects.startup.cta'),
            color: "from-emerald-500/20 to-teal-600/20",
            size: "medium"
        },
        {
            title: t('projects.education.title'),
            description: t('projects.education.description'),
            image: "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDB8fHwxNzU0ODI3MzQzfDA&ixlib=rb-4.1.0&q=85",
            tags: ["Next.js", "Collaboration", "Education"],
            metrics: {
                users: "5K+",
                tasks: "25K+",
                efficiency: "35%"
            },
            cta: t('projects.education.cta'),
            color: "from-purple-500/20 to-violet-600/20",
            size: "medium"
        }
    ];

    const processSteps = [
        {
            icon: Users,
            title: t('process.steps.discovery.title'),
            description: t('process.steps.discovery.description'),
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: Calendar,
            title: t('process.steps.planning.title'),
            description: t('process.steps.planning.description'),
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: Github,
            title: t('process.steps.development.title'),
            description: t('process.steps.development.description'),
            color: "from-purple-500 to-violet-600"
        },
        {
            icon: CheckCircle,
            title: t('process.steps.delivery.title'),
            description: t('process.steps.delivery.description'),
            color: "from-orange-500 to-red-600"
        }
    ];

    return (
        <section id="ourwork" className="py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-32 left-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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

                {/* Projects Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => {
                        const isLarge = project.size === "large";

                        return (
                            <div
                                key={index}
                                className={`group glass-effect rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/10 relative ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <image
                                        src={project.image}
                                        alt={`${project.title} - Luca Bravo on Unsplash`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        style={{ width: '100%', height: '256px' }}
                                    />

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60 group-hover:opacity-80 transition-opacity`}></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                                            <Play size={24} className="text-white ml-1" />
                                        </div>
                                    </div>

                                    {/* External Link */}
                                    <div className="absolute top-4 right-4">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30">
                                            <ExternalLink size={16} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                    <h3 className={`font-bold font-primary mb-4 text-foreground group-hover:text-primary transition-colors ${isLarge ? 'text-2xl' : 'text-xl'
                                        }`}>
                                        {project.title}
                                    </h3>

                                    <p className={`text-muted-foreground leading-relaxed mb-6 ${isLarge ? 'text-base' : 'text-sm'
                                        }`}>
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="text-center p-3 bg-muted/20 rounded-xl hover-lift">
                                            <div className="text-lg font-bold text-primary font-primary">{project.metrics.users}</div>
                                            <div className="text-xs text-muted-foreground">{t('metrics.users')}</div>
                                        </div>
                                        <div className="text-center p-3 bg-muted/20 rounded-xl hover-lift">
                                            <div className="text-lg font-bold text-primary font-primary">{project.metrics.tasks}</div>
                                            <div className="text-xs text-muted-foreground">{t('metrics.tasks')}</div>
                                        </div>
                                        <div className="text-center p-3 bg-muted/20 rounded-xl hover-lift">
                                            <div className="text-lg font-bold text-primary font-primary">+{project.metrics.efficiency}</div>
                                            <div className="text-xs text-muted-foreground">{t('metrics.efficiency')}</div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button className="group/btn w-full bg-primary text-primary-foreground py-4 rounded-2xl hover:opacity-90 transition-all font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
                                        <span>{project.cta}</span>
                                        <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Process Section */}
                <div className="glass-effect rounded-3xl p-12 shadow-3xl border border-white/10 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                    <div className="relative z-10">
                        {/* Process Header */}
                        <div className="text-center mb-16">
                            <h3 className="text-3xl sm:text-4xl font-bold text-foreground font-primary mb-6">
                                {t('process.title')}
                            </h3>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {t('process.description')}
                            </p>
                        </div>

                        {/* Process Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <div key={index} className="relative group">
                                        {/* Connecting Line */}
                                        {index < processSteps.length - 1 && (
                                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                                        )}

                                        <div className="text-center relative z-10">
                                            {/* Step Number */}
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                                                {index + 1}
                                            </div>

                                            {/* Icon */}
                                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color.replace('from-', 'from-').replace(' to-', '/10 to-')}/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent size={32} className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                                            </div>

                                            {/* Content */}
                                            <h4 className="text-xl font-bold text-foreground font-primary mb-3 group-hover:text-primary transition-colors">
                                                {step.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
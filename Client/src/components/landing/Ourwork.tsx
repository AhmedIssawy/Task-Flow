"use client";
import React from 'react';
import { ExternalLink, Github, Play, Users, Calendar, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const OurWork = () => {
  const t = useTranslations('Landing.OurWork');

  const projects = [
    {
      title: t('projects.enterprise.title'),
      description: t('projects.enterprise.description'),
      image: "/api/placeholder/600/400",
      tags: ["React", "TypeScript", "Analytics"],
      metrics: {
        users: "10K+",
        tasks: "50K+",
        efficiency: "45%"
      },
      cta: t('projects.enterprise.cta')
    },
    {
      title: t('projects.startup.title'),
      description: t('projects.startup.description'),
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Node.js", "Real-time"],
      metrics: {
        users: "2K+",
        tasks: "15K+",
        efficiency: "60%"
      },
      cta: t('projects.startup.cta')
    },
    {
      title: t('projects.education.title'),
      description: t('projects.education.description'),
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Collaboration", "Education"],
      metrics: {
        users: "5K+",
        tasks: "25K+",
        efficiency: "35%"
      },
      cta: t('projects.education.cta')
    }
  ];    return (
        <section id="ourwork" className="py-24 bg-muted/30">
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
        </div>                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <Play size={48} className="text-primary opacity-60 group-hover:scale-110 transition-transform" />
                                <div className="absolute top-4 right-4">
                                    <ExternalLink size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground font-primary mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{project.metrics.users}</div>
                                        <div className="text-xs text-muted-foreground">{t('metrics.users')}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{project.metrics.tasks}</div>
                                        <div className="text-xs text-muted-foreground">{t('metrics.tasks')}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">+{project.metrics.efficiency}</div>
                                        <div className="text-xs text-muted-foreground">{t('metrics.efficiency')}</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition-opacity font-medium">
                                    {project.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground font-primary mb-4">
              {t('process.title')}
            </h3>
            <p className="text-muted-foreground">
              {t('process.description')}
            </p>
          </div>                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users size={24} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">{t('process.steps.discovery.title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('process.steps.discovery.description')}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar size={24} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">{t('process.steps.planning.title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('process.steps.planning.description')}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Github size={24} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">{t('process.steps.development.title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('process.steps.development.description')}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={24} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">{t('process.steps.delivery.title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('process.steps.delivery.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
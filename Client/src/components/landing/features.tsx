"use client";
import React from 'react';
import { Calendar, Users, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Features = () => {
  const t = useTranslations('Landing.Features');

  const features = [
    {
      icon: Calendar,
      title: t('list.smartScheduling.title'),
      description: t('list.smartScheduling.description'),
      color: "text-blue-500",
      button: t('list.smartScheduling.button')
    },
    {
      icon: Users,
      title: t('list.teamCollaboration.title'),
      description: t('list.teamCollaboration.description'),
      color: "text-green-500",
      button: t('list.smartScheduling.button')
    },
    {
      icon: BarChart3,
      title: t('list.advancedAnalytics.title'),
      description: t('list.advancedAnalytics.description'),
      color: "text-purple-500",
      button: t('list.smartScheduling.button')
    },
    {
      icon: Zap,
      title: t('list.automation.title'),
      description: t('list.automation.description'),
      color: "text-yellow-500",
      button: t('list.smartScheduling.button')
    },
    {
      icon: Shield,
      title: t('list.enterpriseSecurity.title'),
      description: t('list.enterpriseSecurity.description'),
      color: "text-red-500",
      button: t('list.smartScheduling.button')
    },
    {
      icon: Globe,
      title: t('list.globalAccess.title'),
      description: t('list.globalAccess.description'),
      color: "text-indigo-500",
      button: t('list.smartScheduling.button')
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
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
        </div>                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={24} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground font-primary">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="mt-6">
                                    <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                                        {feature.button}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                
            </div>
        </section>
    );
};

export default Features;
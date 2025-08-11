"use client";
import React from 'react';
import { Calendar, Users, BarChart3, Zap, Shield, Globe, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Features = () => {
  const t = useTranslations('Landing.Features');

  const features = [
    {
      icon: Calendar,
      title: t('list.smartScheduling.title'),
      description: t('list.smartScheduling.description'),
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      size: "large"
    },
    {
      icon: Users,
      title: t('list.teamCollaboration.title'),
      description: t('list.teamCollaboration.description'),
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
      size: "medium"
    },
    {
      icon: BarChart3,
      title: t('list.advancedAnalytics.title'),
      description: t('list.advancedAnalytics.description'),
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
      size: "medium"
    },
    {
      icon: Zap,
      title: t('list.automation.title'),
      description: t('list.automation.description'),
      color: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-600",
      size: "small"
    },
    {
      icon: Shield,
      title: t('list.enterpriseSecurity.title'),
      description: t('list.enterpriseSecurity.description'),
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-600",
      size: "small"
    },
    {
      icon: Globe,
      title: t('list.globalAccess.title'),
      description: t('list.globalAccess.description'),
      color: "from-indigo-500/20 to-indigo-600/20",
      iconColor: "text-indigo-600",
      size: "large"
    }
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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

        {/* Features Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isLarge = feature.size === "large";
            const isMedium = feature.size === "medium";

            return (
              <div
                key={index}
                className={`group glass-effect rounded-3xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/10 relative overflow-hidden ${isLarge ? 'md:col-span-2 md:row-span-2' :
                    isMedium ? 'md:row-span-2' : ''
                  }`}
                style={{
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[1]} 0%, transparent 100%)`
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-grid-pattern"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={isLarge ? 32 : 28} className={feature.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold font-primary mb-4 text-foreground group-hover:text-primary transition-colors ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-muted-foreground leading-relaxed flex-grow ${isLarge ? 'text-lg' : 'text-base'
                    }`}>
                    {feature.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <button className="group/btn flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                      <span>Learn more</span>
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
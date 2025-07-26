"use client";
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations('Landing.Hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center  overflow-hidden bg-gradient-to-br from-background to-muted/20 border-b border-solid border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-primary leading-tight">
              {t('title')}
              <span className="text-primary block">{t('subtitle')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-xl hover:shadow-2xl flex items-center font-medium text-lg">
              {t('cta.primary')}
              <ArrowRight size={20} className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center px-8 py-4 text-muted-foreground hover:text-primary transition-colors font-medium text-lg">
              <Play size={20} className="mr-2 rtl:mr-0 rtl:ml-2 group-hover:scale-110 transition-transform" />
              {t('cta.secondary')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{t('stats.teams').split(' ')[0]}</div>
              <div className="text-muted-foreground">{t('stats.teams').split(' ').slice(1).join(' ')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{t('stats.rating')}</div>
              <div className="text-muted-foreground">{t('stats.text')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{t('stats.countries').split(' ')[0]}</div>
              <div className="text-muted-foreground">{t('stats.countries').split(' ').slice(1).join(' ')}</div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;
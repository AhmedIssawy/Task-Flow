"use client";
import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMobile } from '@/hooks/useMobile';

const HeroSection = () => {
  const t = useTranslations('Landing.Hero');
  const { isMobile, isMobilePlatform } = useMobile();

  return (
    <section className={`relative ${isMobile ? 'min-h-[90vh]' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      {/* Dynamic Background with Glassmorphism */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            

            {/* Main Heading */}
            <div className={`space-y-6 ${isMobile ? 'px-4' : ''}`}>
              <h1 className={`${isMobile ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'} font-bold font-primary leading-[0.9]`}>
                <span className="text-foreground">{t('title')}</span>
                <span className="text-gradient block mt-2">{t('subtitle')}</span>
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl sm:text-2xl'} text-muted-foreground max-w-2xl leading-relaxed`}>
                {t('description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col ${isMobile ? 'gap-4' : 'sm:flex-row gap-6'} items-center pt-4 ${isMobile ? 'px-4' : ''}`}>
              <button className={`group relative bg-primary text-primary-foreground ${isMobile ? 'w-full px-8 py-4 text-base' : 'px-10 py-5 text-lg'} rounded-2xl hover:opacity-90 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center font-semibold overflow-hidden ${isMobilePlatform ? 'mobile-touch-target' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">{t('cta.primary')}</span>
                <ArrowRight size={isMobile ? 20 : 24} className="ml-3 rtl:ml-0 rtl:mr-3 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform relative z-10" />
              </button>

              <button className={`group flex items-center ${isMobile ? 'w-full justify-center px-6 py-4 text-base' : 'px-8 py-5 text-lg'} text-muted-foreground hover:text-primary transition-all font-semibold hover-lift ${isMobilePlatform ? 'mobile-touch-target' : ''}`}>
                <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-primary/10 rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-primary/20 transition-colors`}>
                  <Play size={isMobile ? 16 : 20} className="ml-1 group-hover:scale-110 transition-transform" />
                </div>
                {t('cta.secondary')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary font-primary">{t('stats.teams').split(' ')[0]}</div>
                <div className="text-muted-foreground text-sm">{t('stats.teams').split(' ').slice(1).join(' ')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary font-primary">{t('stats.rating')}</div>
                <div className="text-muted-foreground text-sm">{t('stats.text')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary font-primary">{t('stats.countries').split(' ')[0]}</div>
                <div className="text-muted-foreground text-sm">{t('stats.countries').split(' ').slice(1).join(' ')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isMobile ? 'mt-8 px-4' : ''}`}>
            {/* Main Glass Card */}
            <div className={`relative glass-effect rounded-3xl ${isMobile ? 'p-6' : 'p-8'} shadow-3xl border border-white/20`}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live Dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">Project Alpha</span>
                      <span className="text-primary font-semibold">87%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full animate-pulse-glow" style={{ width: '87%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">Team Performance</span>
                      <span className="text-primary font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-accent to-accent/80 h-3 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-2xl p-4 text-center hover-lift">
                    <div className="text-2xl font-bold text-primary font-primary">247</div>
                    <div className="text-xs text-muted-foreground">Active Tasks</div>
                  </div>
                  <div className="bg-accent/5 rounded-2xl p-4 text-center hover-lift">
                    <div className="text-2xl font-bold text-accent font-primary">8</div>
                    <div className="text-xs text-muted-foreground">Team Members</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap size={14} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">Task completed</div>
                      <div className="text-xs text-muted-foreground">2 minutes ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/20 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Goal Achieved!</div>
                  <div className="text-xs text-muted-foreground">95% completion</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/20 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">+</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">New Member</div>
                  <div className="text-xs text-muted-foreground">Sarah joined</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
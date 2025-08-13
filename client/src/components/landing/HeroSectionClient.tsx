'use client';
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMobile } from '@/hooks/useMobile';
import { useRouter } from 'next/navigation';

export const HeroSectionClient = () => {
    const t = useTranslations('Landing.Hero');
    const { isMobile, isMobilePlatform } = useMobile();
    const router = useRouter();

    const handleStartTrialClick = () => {
        router.push('/auth/login');
    };

    return (
        <div className={`flex flex-col ${isMobile ? 'gap-4' : 'sm:flex-row gap-6'} items-center pt-4 ${isMobile ? 'px-4' : ''}`}>
            <button
                onClick={handleStartTrialClick}
                className={`group relative bg-primary text-primary-foreground ${isMobile ? 'w-full px-8 py-4 text-base' : 'px-10 py-5 text-lg'} rounded-2xl hover:opacity-90 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center font-semibold overflow-hidden ${isMobilePlatform ? 'mobile-touch-target' : ''}`}>
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
    );
};

import Image from 'next/image';
import { GraduationCap, Users, Globe, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
    const { t } = useTranslation();

    const pillars = [
        {
            icon: <GraduationCap className="h-7 w-7 text-blue-600" />,
            title: t('pages.about.pillars.excellence.title'),
            desc: t('pages.about.pillars.excellence.description')
        },
        {
            icon: <Users className="h-7 w-7 text-green-600" />,
            title: t('pages.about.pillars.community.title'),
            desc: t('pages.about.pillars.community.description')
        },
        {
            icon: <Globe className="h-7 w-7 text-purple-600" />,
            title: t('pages.about.pillars.perspective.title'),
            desc: t('pages.about.pillars.perspective.description')
        },
        {
            icon: <Award className="h-7 w-7 text-orange-600" />,
            title: t('pages.about.pillars.impact.title'),
            desc: t('pages.about.pillars.impact.description')
        },
    ];

    return (<section id="about" className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-15 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Left: Illustration */}
            <div className="flex-1 flex justify-center order-2 lg:order-1">
                <Image
                    src="/about.jpg"
                    alt="About Enterprise University"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-2xl object-contain bg-white/40 backdrop-blur-md w-full max-w-sm sm:max-w-md lg:max-w-lg"
                    priority
                />
            </div>
            {/* Right: Content Card */}
            <div className="flex-1 w-full max-w-xl order-1 lg:order-2">
                <div className="bg-theme backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">{t('pages.about.title')}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-2">
                            {t('pages.about.description1')}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg">
                            {t('pages.about.description2')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-2">
                                <div className="mb-1">{pillar.icon}</div>
                                <div className="font-bold text-sm sm:text-base lg:text-lg">{pillar.title}</div>
                                <div className="text-xs sm:text-sm">{pillar.desc}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-2">
                        <Button className="bg-primary hover:bg-primary-hover px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold rounded-full shadow-md w-full sm:w-auto">
                            {t('pages.about.button')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

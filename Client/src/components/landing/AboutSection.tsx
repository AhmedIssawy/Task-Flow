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

    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                {/* Left: Illustration */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/about.jpg"
                        alt="About Enterprise University"
                        width={500}
                        height={500}
                        className="rounded-3xl shadow-2xl object-contain bg-white/40 backdrop-blur-md"
                        priority
                    />
                </div>
                {/* Right: Content Card */}
                <div className="flex-1 w-full max-w-xl">
                    <div className="bg-theme backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col gap-8">
                        <div>
                            <h2 className="text-5xl font-black mb-4 ">{t('pages.about.title')}</h2>
                            <p className="text-xl  mb-2">
                                {t('pages.about.description1')}
                            </p>
                            <p className="text-lg ">
                                {t('pages.about.description2')}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            {pillars.map((pillar, i) => (
                                <div key={i} className="flex flex-col items-center text-center flex-1 gap-2">
                                    <div className="mb-1">{pillar.icon}</div>
                                    <div className="font-bold text-lg ">{pillar.title}</div>
                                    <div className=" text-sm">{pillar.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center pt-2">
                            <Button className="bg-primary hover:bg-primary-hover px-8 py-3 text-lg font-bold rounded-full shadow-md">
                                {t('pages.about.button')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

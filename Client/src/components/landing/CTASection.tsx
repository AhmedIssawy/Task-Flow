import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CTASection = () => {
    const { t } = useTranslation();

    return (<section className="py-16 sm:py-20 bg-theme text-theme relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
                    {t("pages.cta.title")}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {t("pages.cta.description")}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
                <div className="bg-theme rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col items-center">
                    <div className="bg-main/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 sm:h-8 sm:w-8 text-main" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t("pages.cta.cards.current.title")}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                        {t("pages.cta.cards.current.description")}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary-hover text-white font-semibold rounded w-full sm:w-auto"
                    >
                        <Link href="/login" className="flex items-center justify-center gap-2">
                            {t("pages.cta.cards.current.button")}
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                    </Button>
                </div>
                <div className="bg-theme rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col items-center">
                    <div className="bg-main/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-main" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t("pages.cta.cards.prospective.title")}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                        {t("pages.cta.cards.prospective.description")}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary-hover font-semibold rounded w-full sm:w-auto"
                    >
                        <Link href="#programs" className="flex items-center justify-center gap-2">
                            {t("pages.cta.cards.prospective.button")}
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="text-center">
                <p className="text-gray-500 mb-4 sm:mb-6 text-base sm:text-lg">
                    {t("pages.cta.help.text")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                    <Button
                        className="bg-primary hover:bg-primary-hover font-semibold rounded w-full sm:w-auto"
                    >
                        {t("pages.cta.help.contactButton")}
                    </Button>
                    <Button
                        className="bg-primary hover:bg-primary-hover font-semibold rounded w-full sm:w-auto"
                    >
                        {t("pages.cta.help.tourButton")}
                    </Button>
                </div>
            </div>
        </div>
    </section>
    );
};

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CTASection = () => {
    const { t } = useTranslation();
    
    return (
        <section className="py-20 bg-theme text-theme relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-black mb-6">
                        {t("pages.cta.title")}
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t("pages.cta.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div className="bg-theme rounded-2xl p-10 text-center shadow-lg flex flex-col items-center">
                        <div className="bg-main/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-8 w-8 text-main" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{t("pages.cta.cards.current.title")}</h3>
                        <p className="text-gray-600 mb-6">
                            {t("pages.cta.cards.current.description")}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary-hover text-white font-semibold rounded"
                        >
                            <Link href="/login" className="flex items-center gap-2">
                                {t("pages.cta.cards.current.button")}
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    <div className="bg-theme rounded-2xl p-10 text-center shadow-lg flex flex-col items-center">
                        <div className="bg-main/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <BookOpen className="h-8 w-8 text-main" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{t("pages.cta.cards.prospective.title")}</h3>
                        <p className="text-gray-600 mb-6">
                            {t("pages.cta.cards.prospective.description")}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary-hover font-semibold rounded"
                        >
                            <Link href="#programs" className="flex items-center gap-2">
                                {t("pages.cta.cards.prospective.button")}
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-gray-500 mb-6 text-lg">
                        {t("pages.cta.help.text")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className=" bg-primary hover:bg-primary-hover  font-semibold rounded"
                        >
                            {t("pages.cta.help.contactButton")}
                        </Button>
                        <Button
                            className="bg-primary hover:bg-primary-hover font-semibold rounded"
                        >
                            {t("pages.cta.help.tourButton")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

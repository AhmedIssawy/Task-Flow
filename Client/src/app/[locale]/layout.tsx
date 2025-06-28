import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import LocaleWrapper from '@/components/layout/LocaleWrapper';

export const metadata: Metadata = {
    title: "Task Flow - Streamline Your Workflow",
    description: "The ultimate task management platform designed to help teams collaborate efficiently and achieve their goals faster.",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    const locales = ['en', 'ar'];
    if (!locales.includes(locale)) {
        notFound();
    }

    // Get messages for the locale directly
    const messages = (await import(`../../../locales/${locale}.json`)).default;

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <LocaleWrapper />
            {children}
        </NextIntlClientProvider>
    );
}

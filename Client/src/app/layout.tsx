import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Epilogue, Monsieur_La_Doulaise } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import ReduxProvider from '@/providers/ReduxProvider';
import LocaleWrapper from '@/components/layout/LocaleWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
});

const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

const monsieur = Monsieur_La_Doulaise({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-signiture',
});

export const metadata: Metadata = {
  title: 'Task Flow - Streamline Your Workflow',
  description:
    'The ultimate task management platform designed to help teams collaborate efficiently and achieve their goals faster.',
};

const supportedLocales = ['en', 'ar'];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('lang')?.value;
  const locale = supportedLocales.includes(cookieLang || '')
    ? cookieLang!
    : 'en';

  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${epilogue.variable} ${inter.variable} ${monsieur.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <LocaleWrapper />
              {children}
            </NextIntlClientProvider>
          </ReduxProvider>
        </ThemeProvider>
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
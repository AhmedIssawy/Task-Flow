import './globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Epilogue, Monsieur_La_Doulaise } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import ReduxProvider from '@/providers/ReduxProvider';
import LocaleWrapper from '@/components/layout/LocaleWrapper';
import { getServerLocale, getLocaleDirection, type Locale } from '@/lib/i18n';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read language from cookies using the centralized i18n utility
  const locale: Locale = await getServerLocale();

  // Get locale direction for HTML dir attribute
  const direction = getLocaleDirection(locale);

  // Load messages based on cookie-determined locale with error handling
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.warn(`Failed to load messages for locale ${locale}, falling back to English:`, error);
    // Fallback to English messages if locale-specific messages fail to load
    messages = (await import(`../../locales/en.json`)).default;
  }

  return (
    <html
      lang={locale}
      dir={direction}
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
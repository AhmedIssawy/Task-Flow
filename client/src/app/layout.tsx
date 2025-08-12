import './globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import ReduxProvider from '@/providers/ReduxProvider';
import { getServerLocale, getLocaleDirection, type Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Task Flow - Streamline Your Workflow',
  description:
    'The ultimate task management platform designed to help teams collaborate efficiently and achieve their goals faster.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Task Flow',
  },
  formatDetection: {
    telephone: false,
  },
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
      suppressHydrationWarning
    >

      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ReduxProvider>
        </ThemeProvider>
        <Toaster richColors position="bottom-left" closeButton />
      </body>
    </html>
  );
}
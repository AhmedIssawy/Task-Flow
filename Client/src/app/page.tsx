'use client'

import useTranslation from "@/hooks/useTranslation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme and language toggles */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">{t('app', 'title')}</h1>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main welcome content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t('common', 'welcome')}
          </h1>

          <h2 className="text-2xl text-muted-foreground mb-8">
            {t('app', 'subtitle')}
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('app', 'description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">{t('common', 'theme')}</h3>
              <p className="text-muted-foreground">
                {t('app', 'theme_support')}
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">{t('common', 'language')}</h3>
              <p className="text-muted-foreground">
                {t('app', 'language_support')}
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">RTK</h3>
              <p className="text-muted-foreground">
                {t('app', 'rtk_support')}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">✅ {t('messages', 'success')}</h3>
            <p className="text-muted-foreground">
              {t('messages', 'success')} - {t('app', 'description')}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
import React from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
// import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/language-switcher';
import { useAppSelector } from '@/store/hooks';
import { selectEffectiveTheme } from '@/store/slices/themeSlice';
import Image from 'next/image';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const theme = useAppSelector(selectEffectiveTheme);
  console.log(theme);

  const logoSrc =
    theme === 'dark' ? '/nav-logo-dark.svg' : '/nav-logo-light.svg';
  return (
    <header className="sticky top-0 z-50 w-full bg-theme border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative h-10 content-center">
              <Image
                src={logoSrc}
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl font-signature font-black font-bold">
              {t('app.name')}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

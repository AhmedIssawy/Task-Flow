'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { useTranslations } from 'next-intl';
import { getPathByRole } from '@/utils/roleRedirect';
import UserAvatar from '../user/UserAvatar';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations('Landing.Header');

  const handleLoginClick = () => {
    router.push('/login');
  };

  const userData = useAuth();
  
  const { isLoggedIn, role, id } = userData;

  const name = userData.user?.name;
  const userPath = getPathByRole(role, id);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-header">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xl font-bold text-foreground font-primary">
              {t('logo.taskflow')}
            </span>
          </div>

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {isLoggedIn ? (
              <UserAvatar name={name} onClick={() => router.push(userPath)} />
            ) : (
              <>
                <ThemeToggle />
                <LanguageSwitcher />

                <button
                  onClick={handleLoginClick}
                  className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md"
                >
                  {t('cta.login')}
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={handleLoginClick}
                  className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md"
                >
                  {t('cta.login')}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

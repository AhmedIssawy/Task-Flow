'use client';
import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { useTranslations } from 'next-intl';
import { getPathByRole } from '@/utils/roleRedirect';
import UserAvatar from '../user/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { useMobilePlatform, getPlatformClasses } from '@/lib/mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations('Landing.Header');
  const isMobile = useMobilePlatform();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const userData = useAuth();

  const { isLoggedIn, role, id } = userData;

  const name = userData.user?.name;
  const userPath = getPathByRole(role, id);

  // Platform-specific classes
  const headerClasses = getPlatformClasses(
    'fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl mobile-safe-header',
    'fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl'
  );

  const containerHeight = isMobile ? 'h-16' : 'h-20';

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${containerHeight}`}>
          {/* Logo */}
          <div className="flex items-center gap-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground font-primary">
              {t('logo.taskflow')}
            </span>
          </div>
          {/* Right Side Actions */}
          <div className="flex items-center gap-4 rtl:space-x-reverse">
            {isLoggedIn ? (
              <UserAvatar name={name} onClick={() => router.push(userPath)} />
            ) : (
              <>
                <div className="hidden md:flex items-center gap-3">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>

                <button
                  onClick={handleLoginClick}
                  className={`hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold ${isMobile ? 'mobile-touch-target' : ''}`}
                >
                  <span>{t('cta.login')}</span>
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 text-muted-foreground hover:text-primary transition-colors ${isMobile ? 'mobile-touch-target' : ''}`}
            >
              {isMenuOpen ? <X size={isMobile ? 28 : 24} /> : <Menu size={isMobile ? 28 : 24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {!isLoggedIn ? (
                <>
                  {/* Mobile Theme and Language Controls */}
                  <div className="flex items-center justify-center gap-4 pb-4 border-b border-white/10">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  
                  {/* Mobile Login Button */}
                  <button
                    onClick={() => {
                      handleLoginClick();
                      setIsMenuOpen(false);
                    }}
                    className={`w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg font-semibold text-center ${isMobile ? 'mobile-touch-target' : ''}`}
                  >
                    {t('cta.login')}
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <UserAvatar 
                    name={name} 
                    onClick={() => {
                      router.push(userPath);
                      setIsMenuOpen(false);
                    }} 
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
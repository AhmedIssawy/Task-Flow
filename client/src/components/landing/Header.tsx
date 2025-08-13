import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { HeaderClient } from './HeaderClient';

const Header = () => {
  const t = useTranslations('Landing.Header');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Static part */}
          <div className="flex items-center gap-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground font-primary">
              {t('logo.taskflow')}
            </span>
          </div>

          {/* Dynamic part - Client component */}
          <HeaderClient />
        </div>
      </div>
    </header>
  );
};

export default Header;
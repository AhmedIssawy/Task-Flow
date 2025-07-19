"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Landing.Header');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-header">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            
            <span className="text-xl font-bold text-foreground font-primary">{t('logo.taskflow')}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.features')}
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.benefits')}
            </a>
            <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Theme Toggle, Language Switcher & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle />
            <LanguageSwitcher />
            <button className="text-muted-foreground hover:text-primary transition-colors">
              {t('cta.login')}
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md">
              {t('cta.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.features')}
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.benefits')}
              </a>
              <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">
                Analytics
              </a>
              <a href="#work" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
              
              {/* Mobile Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 pt-2">
                <button className="text-muted-foreground hover:text-primary transition-colors text-left rtl:text-right">
                  {t('cta.login')}
                </button>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                  {t('cta.getStarted')}
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
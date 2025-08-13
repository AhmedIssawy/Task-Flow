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
import { useMobile } from '@/hooks/useMobile';

export const HeaderClient = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const t = useTranslations('Landing.Header');
    const { isMobile, isMobilePlatform } = useMobile();

    const handleLoginClick = () => {
        router.push('/login');
    };

    const userData = useAuth();
    const { isLoggedIn, role, id, isLoading, isError } = userData;
    const name = userData.user?.name;

    // Only compute user path when we have valid role and id
    const userPath = isLoggedIn && role && id ? getPathByRole(role, id) : '/';

    // Handle loading state
    if (isLoading) {
        return (
            <div className="flex items-center gap-4 rtl:space-x-reverse">
                <div className="w-8 h-8 animate-pulse bg-muted rounded-full"></div>
            </div>
        );
    }

    // Handle error state - show login option
    if (isError) {
        return (
            <div className="flex items-center gap-4 rtl:space-x-reverse">
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <LanguageSwitcher />
                </div>
                <button
                    onClick={handleLoginClick}
                    className={`hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold ${isMobilePlatform ? 'mobile-touch-target' : ''}`}
                >
                    <span>{t('cta.login')}</span>
                </button>
            </div>
        );
    }

    return (
        <>
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
                            className={`hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold ${isMobilePlatform ? 'mobile-touch-target' : ''}`}
                        >
                            <span>{t('cta.login')}</span>
                        </button>
                    </>
                )}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 text-muted-foreground hover:text-primary transition-colors ${isMobilePlatform ? 'mobile-touch-target' : ''}`}
                >
                    {isMenuOpen ? <X size={isMobile ? 28 : 24} /> : <Menu size={isMobile ? 28 : 24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-full left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-xl [background:rgba(var(--background),0.95)] supports-[backdrop-filter]:bg-background/80 supports-[backdrop-filter]:[-webkit-backdrop-filter:blur(12px)] supports-[backdrop-filter]:[backdrop-filter:blur(12px)]">
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
                                    className={`w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg font-semibold text-center ${isMobilePlatform ? 'mobile-touch-target' : ''}`}
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
        </>
    );
};

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
    const { isLoggedIn, role, id } = userData;
    const name = userData.user?.name;
    const userPath = getPathByRole(role, id);

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

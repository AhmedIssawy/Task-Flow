'use client';

import LoginForm from '@/components/login/LoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';

export default function LocaleLoginPage() {
    const t = useTranslations('auth.login');
    const { isRTL } = useLanguage();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <Card className="w-full max-w-md">
                <CardHeader className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary-foreground font-bold text-lg">TF</span>
                    </div>
                    <CardTitle className="text-2xl font-bold">{t('title')}</CardTitle>
                    <CardDescription>{t('subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
}

'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { authApi, useLogoutMutation } from '@/store/services/authApi'
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export default function LogoutButton() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const t = useTranslations('auth.logout');
  const { isRTL } = useLanguage();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(authApi.util.resetApiState());
    } catch (err) {
      console.error('Logout failed:', err);
      toast.error(t('error'));
    } finally {
      router.push('/login');   // Redirect to login
      toast.success(t('success'));
    }
  };

  return (
    <div className={cn(
      "w-full",
      isRTL ? "flex flex-row-reverse justify-end" : "flex flex-row justify-start"
    )}>
      <Button
        onClick={handleLogout}
        variant="ghost"
        className={cn(
          "w-full h-auto p-2 hover:bg-destructive/10 text-destructive",
          isRTL ? "justify-end" : "justify-start"
        )}
      >
        <div className={cn(
          "flex items-center gap-2 w-full",
          isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"
        )}>
          <LogOut className={cn("h-4 w-4 shrink-0", isRTL ? "ml-2" : "mr-2")} />
          <span className="font-primary">{t('button')}</span>
        </div>
      </Button>
    </div>
  );
}

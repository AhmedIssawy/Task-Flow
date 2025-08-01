import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
    const { switchLanguage, availableLocales, currentLocaleInfo, isPending } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" disabled={isPending}>
                    <Globe className="h-4 w-4 mr-2" />
                    {currentLocaleInfo?.name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {availableLocales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.code}
                        onClick={() => switchLanguage(locale.code)}
                        className="cursor-pointer"
                    >
                        {locale.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

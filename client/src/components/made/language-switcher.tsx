import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';
import { getLocaleFlag } from '@/lib/i18n';

// Flag icons as components with enhanced styling
const FlagIcon = ({ country, className = "w-4 h-4" }: { country: string; className?: string }) => {
    const flag = getLocaleFlag(country as 'en' | 'ar');

    return (
        <span className={`${className} flex items-center justify-center text-lg leading-none transition-transform duration-200 hover:scale-110`}>
            {flag}
        </span>
    );
};

export function LanguageSwitcher() {
    const { switchLanguage, availableLocales, currentLocaleInfo, isPending } = useLanguage();

    const handleLanguageSwitch = (localeCode: string) => {
        // Prevent switching to the same language
        if (localeCode === currentLocaleInfo?.code) return;

        // Call the switch function which now handles cookie-based switching
        switchLanguage(localeCode);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={isPending}
                    className={`h-9 px-3 bg-background hover:bg-accent border-border hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md ${isPending ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    aria-label={`Current language: ${currentLocaleInfo?.name}. Click to change language.`}
                >
                    <FlagIcon
                        country={currentLocaleInfo?.code || 'en'}
                        className={`w-4 h-4 mr-2 flag-icon ${isPending ? 'animate-pulse' : ''}`}
                    />
                    <span className="font-medium">
                        {currentLocaleInfo?.name}
                    </span>
                    {isPending && (
                        <div
                            className="ml-2 w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"
                            aria-label="Changing language..."
                        />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[160px] p-1 dropdown-content-enhanced"
                sideOffset={4}
            >
                {availableLocales.map((locale) => {
                    const isCurrentLocale = currentLocaleInfo?.code === locale.code;

                    return (
                        <DropdownMenuItem
                            key={locale.code}
                            onClick={() => handleLanguageSwitch(locale.code)}
                            disabled={isPending || isCurrentLocale}
                            className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${isCurrentLocale
                                    ? 'bg-primary/10 text-primary cursor-default'
                                    : isPending
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-accent hover:text-accent-foreground active:bg-accent/80'
                                }`}
                            aria-label={`Switch to ${locale.name}`}
                        >
                            <FlagIcon
                                country={locale.code}
                                className={`w-4 h-4 flag-icon ${isPending && !isCurrentLocale ? 'opacity-50' : ''
                                    }`}
                            />
                            <span className="font-medium flex-1">
                                {locale.name}
                            </span>
                            {isCurrentLocale && (
                                <Check
                                    className="w-4 h-4 text-primary animate-in fade-in-0 zoom-in-95 duration-200"
                                    aria-label="Current language"
                                />
                            )}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';

// Flag icons as components
const FlagIcon = ({ country, className = "w-4 h-4" }: { country: string; className?: string }) => {
    const flags = {
        'en': '🇺🇸',
        'ar': '🇸🇦'
    };

    return (
        <span className={`${className} flex items-center justify-center text-lg leading-none`}>
            {flags[country as keyof typeof flags] || '🌐'}
        </span>
    );
};

export function LanguageSwitcher() {
    const { switchLanguage, availableLocales, currentLocaleInfo, isPending } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={isPending}
                    className="h-9 px-3 bg-background hover:bg-accent border-border hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                    <FlagIcon country={currentLocaleInfo?.code || 'en'} className="w-4 h-4 mr-2 flag-icon" />
                    <span className="font-medium">{currentLocaleInfo?.name}</span>
                    {isPending && (
                        <div className="ml-2 w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"></div>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[160px] p-1 dropdown-content-enhanced"
            >
                {availableLocales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.code}
                        onClick={() => switchLanguage(locale.code)}
                        className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${currentLocaleInfo?.code === locale.code
                                ? 'bg-primary/10 text-primary'
                                : 'hover:bg-accent hover:text-accent-foreground'
                            }`}
                    >
                        <FlagIcon country={locale.code} className="w-4 h-4 flag-icon" />
                        <span className="font-medium flex-1">{locale.name}</span>
                        {currentLocaleInfo?.code === locale.code && (
                            <Check className="w-4 h-4 text-primary" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

'use client';
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/made/language-switcher";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
    const t = useTranslations("Landing.Header");
    const router = useRouter();

    const handleLogin = () => {
        router.push('/auth/login');
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-md fixed top-0 z-50 w-full border-b border-border/50 shadow-sm"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-serif text-light transition-colors">
                    {t("brandName")}
                </a>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Button
                        onClick={handleLogin}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        {t("login")}
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="outline" size="icon" className="border-border hover:bg-accent">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-border/50">
                        <div className="grid gap-6 p-6">
                            <a href="#" className="text-2xl font-bold font-serif text-foreground">
                                {t("brandName")}
                            </a>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-3">
                                    <LanguageSwitcher />
                                    <ThemeToggle />
                                </div>
                                <Button 
                                    onClick={handleLogin}
                                    variant="ghost" 
                                    className="justify-start text-muted-foreground hover:text-foreground"
                                >
                                    {t("login")}
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
};

export default Header;

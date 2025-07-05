'use client';
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/made/language-switcher";
import { motion } from "framer-motion";

const Header = () => {
    const t = useTranslations("Header");

    const navLinks = [
        { href: "#features", label: t("features") },
        { href: "#benefits", label: t("benefits") },
        { href: "#our-work", label: t("ourWork") },
        { href: "#testimonials", label: t("testimonials") },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-md fixed top-0 z-50 w-full border-b border-border/50 shadow-sm"
        >
            <div className="container flex h-16 items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-serif text-foreground hover:text-primary transition-colors">
                    TaskFlow
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-3">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        {t("login")}
                    </Button>
                    <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                    >
                        {t("signup")}
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
                                TaskFlow
                            </a>
                            <nav className="grid gap-4">
                                {navLinks.map((link) => (
                                    <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent">
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-3">
                                    <LanguageSwitcher />
                                    <ThemeToggle />
                                </div>
                                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground">
                                    {t("login")}
                                </Button>
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                    {t("signup")}
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

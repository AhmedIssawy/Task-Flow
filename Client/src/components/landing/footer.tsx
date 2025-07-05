"use client";
import { useTranslations } from "next-intl";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const t = useTranslations("Landing.Footer");
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm relative">
      <div className="container mx-auto py-16 px-4 md:px-8 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold font-serif text-foreground hover:text-primary transition-colors">
              {t("brandName")}
            </a>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("brandDescription")}
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">{t("sections.product")}</h4>
            <nav className="grid gap-3 ltr:text-left rtl:text-right">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("productLinks.features")}
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("productLinks.benefits")}
              </a>
              <a href="#our-work" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("productLinks.ourWork")}
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("productLinks.testimonials")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("productLinks.pricing")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("productLinks.api")}
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">{t("sections.company")}</h4>
            <nav className="grid gap-3 ltr:text-left rtl:text-right">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("companyLinks.aboutUs")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("companyLinks.careers")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("companyLinks.press")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("companyLinks.blog")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("companyLinks.contact")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("companyLinks.helpCenter")}
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">{t("sections.legal")}</h4>
            <nav className="grid gap-3 ltr:text-left rtl:text-right">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("legalLinks.termsOfService")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("legalLinks.privacyPolicy")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("legalLinks.cookiePolicy")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("legalLinks.security")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("legalLinks.gdpr")}
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("newsletter.title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("newsletter.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("newsletter.emailPlaceholder")}
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200">
                {t("newsletter.subscribe")}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("bottom.copyright", { year: currentYear })}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{t("bottom.language")}</span>
              <span>•</span>
              <span>{t("bottom.theme")}</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="w-10 h-10 p-0 rounded-lg border-border hover:bg-accent transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";
import { useTranslations } from "next-intl";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm relative">
      <div className="container py-16 px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold font-serif text-foreground hover:text-primary transition-colors">
              TaskFlow
            </a>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The ultimate task management platform for teams. Streamline your workflow and achieve your goals faster.
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
            <h4 className="font-semibold text-foreground mb-6">{t("product")}</h4>
            <nav className="grid gap-3">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Features
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Benefits
              </a>
              <a href="#our-work" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Our Work
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Testimonials
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Pricing
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                API
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">{t("company")}</h4>
            <nav className="grid gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("aboutUs")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("careers")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("press")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("blog")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Help Center
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">{t("legal")}</h4>
            <nav className="grid gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("termsOfService")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("privacyPolicy")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                {t("cookiePolicy")}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Security
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                GDPR
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates, tips, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>🌍 English</span>
              <span>•</span>
              <span>🌙 Dark Mode</span>
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
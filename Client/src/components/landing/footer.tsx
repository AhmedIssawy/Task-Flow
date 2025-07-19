"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const t = useTranslations('Landing.Footer');
  const footerLinks = {
    product: [
      { name: t('links.product.features'), href: "#features" },
      { name: t('links.product.pricing'), href: "#pricing" },
      { name: t('links.product.integrations'), href: "#integrations" },
      { name: t('links.product.api'), href: "#api" },
      { name: t('links.product.updates'), href: "#updates" }
    ],
    company: [
      { name: t('links.company.about'), href: "#about" },
      { name: t('links.company.careers'), href: "#careers" },
      { name: t('links.company.blog'), href: "#blog" },
      { name: t('links.company.press'), href: "#press" },
      { name: t('links.company.partners'), href: "#partners" }
    ],
    support: [
      { name: t('links.support.helpCenter'), href: "#help" },
      { name: t('links.support.documentation'), href: "#docs" },
      { name: t('links.support.contactUs'), href: "#contact" },
      { name: t('links.support.status'), href: "#status" },
      { name: t('links.support.community'), href: "#community" }
    ],
    legal: [
      { name: t('links.legal.privacy'), href: "#privacy" },
      { name: t('links.legal.terms'), href: "#terms" },
      { name: t('links.legal.cookies'), href: "#cookies" },
      { name: t('links.legal.gdpr'), href: "#gdpr" },
      { name: t('links.legal.security'), href: "#security" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#github" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "LinkedIn", icon: Linkedin, href: "#linkedin" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
                <span className="text-xl font-bold text-foreground font-primary">TaskFlow</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {t('brand.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary" />
                  <span className="text-muted-foreground">hello@taskflow.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">{t('sections.product')}</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">{t('sections.company')}</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">{t('sections.support')}</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">{t('sections.legal')}</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground font-primary mb-4">
              {t('newsletter.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-medium text-sm">
                {t('newsletter.button')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
              <span>{t('copyright.text')}</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>{t('copyright.suffix')}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors ml-4"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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
  Heart,
  Sparkles
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
    { name: "GitHub", icon: Github, href: "#github", color: "hover:text-gray-600" },
    { name: "Twitter", icon: Twitter, href: "#twitter", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#linkedin", color: "hover:text-blue-600" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground font-primary">{t('brand.name')}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm text-lg">
                {t('brand.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">hello@taskflow.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">+20 155 445 9196</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{t('contactinfo.address')}</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg font-primary">{t('sections.product')}</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg font-primary">{t('sections.company')}</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg font-primary">{t('sections.support')}</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg font-primary">{t('sections.legal')}</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{t('copyright.text')}</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>{t('copyright.suffix')}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-muted/20 rounded-xl flex items-center justify-center text-muted-foreground ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
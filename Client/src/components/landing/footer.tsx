'use client'
import React from 'react'
import Link from 'next/link'
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Github
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'

const Footer = () => {
    const t = useTranslations('landing.footer')
    const { isRTL } = useLanguage()

    const footerLinks = {
        product: [
            { title: t('features'), href: '#features' },
            { title: t('pricing'), href: '#pricing' },
            { title: t('api'), href: '#api' },
            { title: t('documentation'), href: '#docs' }
        ],
        company: [
            { title: t('about'), href: '#about' },
            { title: t('careers'), href: '#careers' },
            { title: t('press'), href: '#press' },
            { title: t('news'), href: '#news' }
        ],
        support: [
            { title: t('helpCenter'), href: '#help' },
            { title: t('community'), href: '#community' },
            { title: t('contact'), href: '#contact' },
            { title: t('status'), href: '#status' }
        ],
        legal: [
            { title: t('privacy'), href: '#privacy' },
            { title: t('terms'), href: '#terms' },
            { title: t('cookies'), href: '#cookies' }
        ]
    }

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Github, href: '#', label: 'GitHub' }
    ]

    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="inline-flex items-center space-x-3 group">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">TF</span>
                            </div>
                            <span className="font-bold text-xl text-foreground">TaskFlow</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-foreground">{t('product') || 'Product'}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-foreground">{t('company') || 'Company'}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-foreground">{t('support') || 'Support'}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border">
                    <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                        <p className="text-sm text-muted-foreground">
                            {t('copyright')}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

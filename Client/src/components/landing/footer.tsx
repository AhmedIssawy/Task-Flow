'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Github,
    Mail,
    Phone,
    MapPin,
    ArrowRight
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

    const contactInfo = [
        { icon: Mail, text: 'hello@taskflow.com', href: 'mailto:hello@taskflow.com' },
        { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: MapPin, text: '123 Business Ave, Suite 100, San Francisco, CA 94105', href: '#' }
    ]

    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Newsletter Section */}
                <div className="py-12 border-b">
                    <div className={`max-w-4xl mx-auto text-center space-y-6 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                        <h3 className="text-2xl md:text-3xl font-bold">
                            {t('newsletter')}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            {t('subscribe')}
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                            <Input
                                type="email"
                                placeholder={t('email')}
                                className="flex-1"
                            />
                            <Button className="group">
                                {t('subscribeButton')}
                                <ArrowRight className={`h-4 w-4 transition-transform ${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            No spam, unsubscribe at any time. By subscribing, you agree to our Privacy Policy.
                        </p>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold text-sm">TF</span>
                                </div>
                                <span className="font-bold text-xl text-foreground">TaskFlow</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed max-w-md">
                                TaskFlow is the modern task management platform that helps teams collaborate,
                                stay organized, and achieve their goals faster than ever before.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                {contactInfo.map((contact) => {
                                    const IconComponent = contact.icon
                                    return (
                                        <Link
                                            key={contact.text}
                                            href={contact.href}
                                            className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                                        >
                                            <IconComponent className="w-4 h-4 group-hover:text-primary transition-colors" />
                                            <span>{contact.text}</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const IconComponent = social.icon
                                    return (
                                        <Link
                                            key={social.label}
                                            href={social.href}
                                            className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                                            aria-label={social.label}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Links Sections */}
                        <div className={`lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <div>
                                <h4 className="font-semibold text-foreground mb-4">{t('product')}</h4>
                                <ul className="space-y-3">
                                    {footerLinks.product.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-4">{t('company')}</h4>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-4">{t('support')}</h4>
                                <ul className="space-y-3">
                                    {footerLinks.support.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-4">{t('legal')}</h4>
                                <ul className="space-y-3">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Bottom Bar */}
                <div className="py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-muted-foreground">
                            {t('copyright')}
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm text-muted-foreground">
                            <span>Made with ❤️ in San Francisco</span>
                            <span>•</span>
                            <span>99.9% Uptime</span>
                            <span>•</span>
                            <span>GDPR Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

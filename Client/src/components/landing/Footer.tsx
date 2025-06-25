import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <h3 className="text-2xl sm:text-3xl font-black text-primary">
                                {t("common.brandName") || "Task-Flow LMS"}
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                            {t("pages.footer.description") || "Empowering education through innovative learning management solutions. Transform your teaching and learning experience with our comprehensive platform."}
                        </p>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>info@taskflow-lms.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Education District, Learning City</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                            {t("pages.footer.quickLinks.title") || "Quick Links"}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link
                                    href="#about"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.quickLinks.about") || "About"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#programs"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.quickLinks.programs") || "Programs"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#features"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.quickLinks.features") || "Features"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#news"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.quickLinks.news") || "News"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base font-semibold"
                                >
                                    {t("pages.footer.quickLinks.login") || "Login"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Academic */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                            {t("pages.footer.academic.title") || "Academic"}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link
                                    href="#programs"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.academic.programs") || "Academic Programs"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.academic.admissions") || "Admissions"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.academic.calendar") || "Academic Calendar"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.academic.library") || "Library"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.academic.resources") || "Resources"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                            {t("pages.footer.support.title") || "Support"}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.support.help") || "Help Center"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.support.contact") || "Contact Us"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.support.faq") || "FAQ"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.support.privacy") || "Privacy Policy"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {t("pages.footer.support.terms") || "Terms of Service"}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {currentYear} {t("common.brandName") || "Task-Flow LMS"}. {t("pages.footer.copyright") || "All rights reserved."}
                    </p>
                    <div className="flex space-x-4 sm:space-x-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 p-2"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 p-2"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 p-2"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
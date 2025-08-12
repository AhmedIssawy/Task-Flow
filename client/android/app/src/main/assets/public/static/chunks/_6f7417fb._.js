(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/landing/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Footer = ()=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Landing.Footer');
    const footerLinks = {
        product: [
            {
                name: t('links.product.features'),
                href: "#features"
            },
            {
                name: t('links.product.pricing'),
                href: "#pricing"
            },
            {
                name: t('links.product.integrations'),
                href: "#integrations"
            },
            {
                name: t('links.product.api'),
                href: "#api"
            },
            {
                name: t('links.product.updates'),
                href: "#updates"
            }
        ],
        company: [
            {
                name: t('links.company.about'),
                href: "#about"
            },
            {
                name: t('links.company.careers'),
                href: "#careers"
            },
            {
                name: t('links.company.blog'),
                href: "#blog"
            },
            {
                name: t('links.company.press'),
                href: "#press"
            },
            {
                name: t('links.company.partners'),
                href: "#partners"
            }
        ],
        support: [
            {
                name: t('links.support.helpCenter'),
                href: "#help"
            },
            {
                name: t('links.support.documentation'),
                href: "#docs"
            },
            {
                name: t('links.support.contactUs'),
                href: "#contact"
            },
            {
                name: t('links.support.status'),
                href: "#status"
            },
            {
                name: t('links.support.community'),
                href: "#community"
            }
        ],
        legal: [
            {
                name: t('links.legal.privacy'),
                href: "#privacy"
            },
            {
                name: t('links.legal.terms'),
                href: "#terms"
            },
            {
                name: t('links.legal.cookies'),
                href: "#cookies"
            },
            {
                name: t('links.legal.gdpr'),
                href: "#gdpr"
            },
            {
                name: t('links.legal.security'),
                href: "#security"
            }
        ]
    };
    const socialLinks = [
        {
            name: "GitHub",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
            href: "#github"
        },
        {
            name: "Twitter",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
            href: "#twitter"
        },
        {
            name: "LinkedIn",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
            href: "#linkedin"
        }
    ];
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-card border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-foreground font-primary",
                                            children: t('brand.name')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground leading-relaxed mb-6 max-w-sm",
                                        children: t('brand.description')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 16,
                                                        className: "text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: "hello@taskflow.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 16,
                                                        className: "text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: "+20 155 445 9196"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 16,
                                                        className: "text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: [
                                                            " ",
                                                            t('contactinfo.address')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-foreground mb-4",
                                        children: t('sections.product')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: footerLinks.product.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-foreground mb-4",
                                        children: t('sections.company')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: footerLinks.company.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-foreground mb-4",
                                        children: t('sections.support')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: footerLinks.support.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-foreground mb-4",
                                        children: t('sections.legal')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: footerLinks.legal.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/Footer.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('copyright.text')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 16,
                                        className: "text-red-500 fill-current"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('copyright.suffix')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-6",
                                children: socialLinks.map((social, index)=>{
                                    const IconComponent = social.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: social.href,
                                        className: "text-muted-foreground hover:text-primary transition-colors",
                                        "aria-label": social.name,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, index, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/Footer.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/Footer.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/Footer.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing/Footer.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/landing/Footer.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/landing/Footer.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useFormatter": ()=>useFormatter,
    "useTranslations": ()=>useTranslations
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
;
;
/**
 * This is the main entry file when non-'react-server'
 * environments import from 'next-intl'.
 *
 * Maintainer notes:
 * - Make sure this mirrors the API from 'react-server'.
 * - Make sure everything exported from this module is
 *   supported in all Next.js versions that are supported.
 */ // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function callHook(name, hook) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        try {
            return hook(...args);
        } catch (e) {
            throw new Error("Failed to call `".concat(name, "` because the context from `NextIntlClientProvider` was not found.\n\nThis can happen because:\n1) You intended to render this component as a Server Component, the render\n   failed, and therefore React attempted to render the component on the client\n   instead. If this is the case, check the console for server errors.\n2) You intended to render this component on the client side, but no context was found.\n   Learn more about this error here: https://next-intl.dev/docs/environments/server-client-components#missing-context"));
        }
    };
}
const useTranslations = callHook('useTranslations', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]);
const useFormatter = callHook('useFormatter', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatter"]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": ()=>hasA11yProp,
    "mergeClasses": ()=>mergeClasses,
    "toCamelCase": ()=>toCamelCase,
    "toKebabCase": ()=>toKebabCase,
    "toPascalCase": ()=>toPascalCase
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>defaultAttributes
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Icon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>createLucideIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
        let { className, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))), "lucide-".concat(iconName), className),
            ...props
        });
    });
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Github
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
];
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("github", __iconNode);
;
 //# sourceMappingURL=github.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Github": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Twitter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
];
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("twitter", __iconNode);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Twitter": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Linkedin
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
];
const Linkedin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("linkedin", __iconNode);
;
 //# sourceMappingURL=linkedin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Linkedin": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Mail
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Mail": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Phone
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Phone": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>MapPin
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MapPin": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Heart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }
    ]
];
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("heart", __iconNode);
;
 //# sourceMappingURL=heart.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Heart": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)");
}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJztcclxuaW1wb3J0IHtcclxuICBHaXRodWIsXHJcbiAgVHdpdHRlcixcclxuICBMaW5rZWRpbixcclxuICBNYWlsLFxyXG4gIFBob25lLFxyXG4gIE1hcFBpbixcclxuICBBcnJvd1VwLFxyXG4gIEhlYXJ0XHJcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCdMYW5kaW5nLkZvb3RlcicpO1xyXG4gIGNvbnN0IGZvb3RlckxpbmtzID0ge1xyXG4gICAgcHJvZHVjdDogW1xyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnByb2R1Y3QuZmVhdHVyZXMnKSwgaHJlZjogXCIjZmVhdHVyZXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnByb2R1Y3QucHJpY2luZycpLCBocmVmOiBcIiNwcmljaW5nXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5wcm9kdWN0LmludGVncmF0aW9ucycpLCBocmVmOiBcIiNpbnRlZ3JhdGlvbnNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnByb2R1Y3QuYXBpJyksIGhyZWY6IFwiI2FwaVwiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MucHJvZHVjdC51cGRhdGVzJyksIGhyZWY6IFwiI3VwZGF0ZXNcIiB9XHJcbiAgICBdLFxyXG4gICAgY29tcGFueTogW1xyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmNvbXBhbnkuYWJvdXQnKSwgaHJlZjogXCIjYWJvdXRcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmNvbXBhbnkuY2FyZWVycycpLCBocmVmOiBcIiNjYXJlZXJzXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5jb21wYW55LmJsb2cnKSwgaHJlZjogXCIjYmxvZ1wiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MuY29tcGFueS5wcmVzcycpLCBocmVmOiBcIiNwcmVzc1wiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MuY29tcGFueS5wYXJ0bmVycycpLCBocmVmOiBcIiNwYXJ0bmVyc1wiIH1cclxuICAgIF0sXHJcbiAgICBzdXBwb3J0OiBbXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3Muc3VwcG9ydC5oZWxwQ2VudGVyJyksIGhyZWY6IFwiI2hlbHBcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnN1cHBvcnQuZG9jdW1lbnRhdGlvbicpLCBocmVmOiBcIiNkb2NzXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5zdXBwb3J0LmNvbnRhY3RVcycpLCBocmVmOiBcIiNjb250YWN0XCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5zdXBwb3J0LnN0YXR1cycpLCBocmVmOiBcIiNzdGF0dXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnN1cHBvcnQuY29tbXVuaXR5JyksIGhyZWY6IFwiI2NvbW11bml0eVwiIH1cclxuICAgIF0sXHJcbiAgICBsZWdhbDogW1xyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmxlZ2FsLnByaXZhY3knKSwgaHJlZjogXCIjcHJpdmFjeVwiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MubGVnYWwudGVybXMnKSwgaHJlZjogXCIjdGVybXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmxlZ2FsLmNvb2tpZXMnKSwgaHJlZjogXCIjY29va2llc1wiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MubGVnYWwuZ2RwcicpLCBocmVmOiBcIiNnZHByXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5sZWdhbC5zZWN1cml0eScpLCBocmVmOiBcIiNzZWN1cml0eVwiIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBjb25zdCBzb2NpYWxMaW5rcyA9IFtcclxuICAgIHsgbmFtZTogXCJHaXRIdWJcIiwgaWNvbjogR2l0aHViLCBocmVmOiBcIiNnaXRodWJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR3aXR0ZXJcIiwgaWNvbjogVHdpdHRlciwgaHJlZjogXCIjdHdpdHRlclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGlua2VkSW5cIiwgaWNvbjogTGlua2VkaW4sIGhyZWY6IFwiI2xpbmtlZGluXCIgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctY2FyZCBib3JkZXItdCBib3JkZXItYm9yZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICB7LyogTWFpbiBGb290ZXIgQ29udGVudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTYgZ2FwLThcIj5cclxuICAgICAgICAgICAgey8qIEJyYW5kIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnlcIj57dCgnYnJhbmQubmFtZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkIG1iLTYgbWF4LXctc21cIj5cclxuICAgICAgICAgICAgICAgIHt0KCdicmFuZC5kZXNjcmlwdGlvbicpfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgey8qIENvbnRhY3QgSW5mbyAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TWFpbCBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+aGVsbG9AdGFza2Zsb3cuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UGhvbmUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPisyMCAxNTUgNDQ1IDkxOTY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNYXBQaW4gc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPiB7dCgnY29udGFjdGluZm8uYWRkcmVzcycpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQcm9kdWN0IExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTRcIj57dCgnc2VjdGlvbnMucHJvZHVjdCcpfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAge2Zvb3RlckxpbmtzLnByb2R1Y3QubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDb21wYW55IExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTRcIj57dCgnc2VjdGlvbnMuY29tcGFueScpfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAge2Zvb3RlckxpbmtzLmNvbXBhbnkubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdXBwb3J0IExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTRcIj57dCgnc2VjdGlvbnMuc3VwcG9ydCcpfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAge2Zvb3RlckxpbmtzLnN1cHBvcnQubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMZWdhbCBMaW5rcyAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi00XCI+e3QoJ3NlY3Rpb25zLmxlZ2FsJyl9PC9oMz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9vdGVyTGlua3MubGVnYWwubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBCb3R0b20gRm9vdGVyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBweS04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICB7LyogQ29weXJpZ2h0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi00IG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0LnRleHQnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZmlsbC1jdXJyZW50XCIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0LnN1ZmZpeCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU29jaWFsIExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNlwiPlxyXG4gICAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHNvY2lhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBzb2NpYWwuaWNvbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtzb2NpYWwuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzb2NpYWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFIQTs7O0FBY0EsTUFBTSxTQUFTOztJQUNiLE1BQU0sSUFBSSxDQUFBLEdBQUEseU1BQUEsQ0FBQSxrQkFB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NkxBQUM7b0JBQUksV0FBVTs4QkFDYixjQUFBLDZMQUFDO3dCQUFJLFdBQVU7OzBDQUViLDZMQUFDO2dDQUFJLFdBQVU7O2tEQUNiLDZMQUFDO2tEQUFNLEVBQUU7Ozs7OztrREFDVCw2TEFBQyx1TUFBQSxDQUFBLFFBQUs7d0NBQUMsTUFBTTt3Q0FBSSxXQUFVOzs7Ozs7a0RBQzNCLDZMQUFDO2tEQUFNLEVBQUU7Ozs7Ozs7Ozs7OzswQ0FJWCw2TEFBQztnQ0FBSSxXQUFVOzBDQUNaLFlBQVksR0FBRyxDQUFDLENBQUMsUUFBUTtvQ0FDeEIsTUFBTSxnQkFBZ0IsT0FBTyxJQUFJO29DQUNqQyxxQkFDRSw2TEFBQzt3Q0FFQyxNQUFNLE9BQU8sSUFBSTt3Q0FDakIsV0FBVTt3Q0FDVixjQUFZLE9BQU8sSUFBSTtrREFFdkIsY0FBQSw2TEFBQzs0Q0FBYyxNQUFNOzs7Ozs7dUNBTGhCOzs7OztnQ0FRWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0dBL0tNOztRQUNNLHlNQUFBLENBQUEsa0JBQWU7OztLQURyQjt1Q0FpTFMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDUzNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0LWludGwvZGlzdC9lc20vZGV2ZWxvcG1lbnQvcmVhY3QtY2xpZW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1hdHRlciBhcyB1c2VGb3JtYXR0ZXIkMSwgdXNlVHJhbnNsYXRpb25zIGFzIHVzZVRyYW5zbGF0aW9ucyQxIH0gZnJvbSAndXNlLWludGwnO1xuZXhwb3J0ICogZnJvbSAndXNlLWludGwnO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gZW50cnkgZmlsZSB3aGVuIG5vbi0ncmVhY3Qtc2VydmVyJ1xuICogZW52aXJvbm1lbnRzIGltcG9ydCBmcm9tICduZXh0LWludGwnLlxuICpcbiAqIE1haW50YWluZXIgbm90ZXM6XG4gKiAtIE1ha2Ugc3VyZSB0aGlzIG1pcnJvcnMgdGhlIEFQSSBmcm9tICdyZWFjdC1zZXJ2ZXInLlxuICogLSBNYWtlIHN1cmUgZXZlcnl0aGluZyBleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlIGlzXG4gKiAgIHN1cHBvcnRlZCBpbiBhbGwgTmV4dC5qcyB2ZXJzaW9ucyB0aGF0IGFyZSBzdXBwb3J0ZWQuXG4gKi9cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1mdW5jdGlvbi10eXBlXG5mdW5jdGlvbiBjYWxsSG9vayhuYW1lLCBob29rKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaG9vayguLi5hcmdzKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNhbGwgXFxgJHtuYW1lfVxcYCBiZWNhdXNlIHRoZSBjb250ZXh0IGZyb20gXFxgTmV4dEludGxDbGllbnRQcm92aWRlclxcYCB3YXMgbm90IGZvdW5kLlxuXG5UaGlzIGNhbiBoYXBwZW4gYmVjYXVzZTpcbjEpIFlvdSBpbnRlbmRlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQgYXMgYSBTZXJ2ZXIgQ29tcG9uZW50LCB0aGUgcmVuZGVyXG4gICBmYWlsZWQsIGFuZCB0aGVyZWZvcmUgUmVhY3QgYXR0ZW1wdGVkIHRvIHJlbmRlciB0aGUgY29tcG9uZW50IG9uIHRoZSBjbGllbnRcbiAgIGluc3RlYWQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIGNoZWNrIHRoZSBjb25zb2xlIGZvciBzZXJ2ZXIgZXJyb3JzLlxuMikgWW91IGludGVuZGVkIHRvIHJlbmRlciB0aGlzIGNvbXBvbmVudCBvbiB0aGUgY2xpZW50IHNpZGUsIGJ1dCBubyBjb250ZXh0IHdhcyBmb3VuZC5cbiAgIExlYXJuIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBoZXJlOiBodHRwczovL25leHQtaW50bC5kZXYvZG9jcy9lbnZpcm9ubWVudHMvc2VydmVyLWNsaWVudC1jb21wb25lbnRzI21pc3NpbmctY29udGV4dGAgKTtcbiAgICB9XG4gIH07XG59XG5jb25zdCB1c2VUcmFuc2xhdGlvbnMgPSBjYWxsSG9vaygndXNlVHJhbnNsYXRpb25zJywgdXNlVHJhbnNsYXRpb25zJDEpO1xuY29uc3QgdXNlRm9ybWF0dGVyID0gY2FsbEhvb2soJ3VzZUZvcm1hdHRlcicsIHVzZUZvcm1hdHRlciQxKTtcblxuZXhwb3J0IHsgdXNlRm9ybWF0dGVyLCB1c2VUcmFuc2xhdGlvbnMgfTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQUdBOzs7Ozs7OztDQVFDLEdBR0Qsc0VBQXNFO0FBQ3RFLFNBQVMsU0FBUyxJQUFJLEVBQUUsSUFBSTtJQUMxQixPQUFPO3lDQUFJO1lBQUE7O1FBQ1QsSUFBSTtZQUNGLE9BQU8sUUFBUTtRQUNqQixFQUFFLFVBQU07WUFDTixNQUFNLElBQUksTUFBTSxBQUFDLG1CQUF3QixPQUFMLE1BQUs7UUFRM0M7SUFDRjtBQUNGO0FBQ0EsTUFBTSxrQkFBa0IsU0FBUyxtQkFBbUIscUtBQUEsQ0FBQSxrQkFBaUI7QUFDckUsTUFBTSxlQUFlLFNBQVMsZ0JBQWdCLHFLQUFBLENBQUEsZUFBYyIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1NzIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9zaGFyZWQvc3JjL3V0aWxzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvc2hhcmVkL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lbFRvUGFzY2FsIH0gZnJvbSAnLi91dGlsaXR5LXR5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmcgdG8ga2ViYWIgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEga2ViYWJpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9LZWJhYkNhc2UgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG4gIHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyB0byBjYW1lbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gQSBjYW1lbGl6ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCB0b0NhbWVsQ2FzZSA9IDxUIGV4dGVuZHMgc3RyaW5nPihzdHJpbmc6IFQpID0+XG4gIHN0cmluZy5yZXBsYWNlKC9eKFtBLVpdKXxbXFxzLV9dKyhcXHcpL2csIChtYXRjaCwgcDEsIHAyKSA9PlxuICAgIHAyID8gcDIudG9VcHBlckNhc2UoKSA6IHAxLnRvTG93ZXJDYXNlKCksXG4gICk7XG5cbi8qKlxuICogQ29udmVydHMgc3RyaW5nIHRvIHBhc2NhbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gQSBwYXNjYWxpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9QYXNjYWxDYXNlID0gPFQgZXh0ZW5kcyBzdHJpbmc+KHN0cmluZzogVCk6IENhbWVsVG9QYXNjYWw8VD4gPT4ge1xuICBjb25zdCBjYW1lbENhc2UgPSB0b0NhbWVsQ2FzZShzdHJpbmcpO1xuXG4gIHJldHVybiAoY2FtZWxDYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxDYXNlLnNsaWNlKDEpKSBhcyBDYW1lbFRvUGFzY2FsPFQ+O1xufTtcblxuLyoqXG4gKiBNZXJnZXMgY2xhc3NlcyBpbnRvIGEgc2luZ2xlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNsYXNzZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIG9mIGNsYXNzZXNcbiAqL1xuZXhwb3J0IGNvbnN0IG1lcmdlQ2xhc3NlcyA9IDxDbGFzc1R5cGUgPSBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPiguLi5jbGFzc2VzOiBDbGFzc1R5cGVbXSkgPT5cbiAgY2xhc3Nlc1xuICAgIC5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBCb29sZWFuKGNsYXNzTmFtZSkgJiZcbiAgICAgICAgKGNsYXNzTmFtZSBhcyBzdHJpbmcpLnRyaW0oKSAhPT0gJycgJiZcbiAgICAgICAgYXJyYXkuaW5kZXhPZihjbGFzc05hbWUpID09PSBpbmRleFxuICAgICAgKTtcbiAgICB9KVxuICAgIC5qb2luKCcgJylcbiAgICAudHJpbSgpO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29tcG9uZW50IGhhcyBhbiBhY2Nlc3NpYmlsaXR5IHByb3BcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIGFuIGFjY2Vzc2liaWxpdHkgcHJvcFxuICovXG5leHBvcnQgY29uc3QgaGFzQTExeVByb3AgPSAocHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnYXJpYS0nKSB8fCBwcm9wID09PSAncm9sZScgfHwgcHJvcCA9PT0gJ3RpdGxlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBYyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUMxQixHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sT0FBQSxDQUFRLENBQXNCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBRSxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBUS9DLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBYyxDQUFBLENBQUEsQ0FBbUIsTUFBQSxDQUM1QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQXlCLENBQUMsT0FBTyxDQUFJLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FDbEQsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZ0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBWSxDQUFBLENBQUEsQ0FBQSxD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LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2RlZmF1bHRBdHRyaWJ1dGVzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9kZWZhdWx0QXR0cmlidXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuICBmaWxsOiAnbm9uZScsXG4gIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gIHN0cm9rZVdpZHRoOiAyLFxuICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxDQUFlLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNiLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sRUFBQSxDQUFBLENBQUE7SUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQTtJQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDVCxDQUFBLENBQUEsQ0FBQSxDQUFNLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDTixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBYSxFQUFBLENBQUE7SUFDYixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFlLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNmLGNBQWdCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNsQixDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA2MzYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9JY29uLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9JY29uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJY29uTm9kZSwgTHVjaWRlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgaGFzQTExeVByb3AgfSBmcm9tICdAbHVjaWRlL3NoYXJlZCc7XG5cbmludGVyZmFjZSBJY29uQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBMdWNpZGVQcm9wcyB7XG4gIGljb25Ob2RlOiBJY29uTm9kZTtcbn1cblxuLyoqXG4gKiBMdWNpZGUgaWNvbiBjb21wb25lbnRcbiAqXG4gKiBAY29tcG9uZW50IEljb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuc3Ryb2tlV2lkdGggLSBUaGUgc3Ryb2tlIHdpZHRoIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByb3BzLmFic29sdXRlU3Ryb2tlV2lkdGggLSBXaGV0aGVyIHRvIHVzZSBhYnNvbHV0ZSBzdHJva2Ugd2lkdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtJY29uTm9kZX0gcHJvcHMuY2hpbGRyZW4gLSBUaGUgY2hpbGRyZW4gb2YgdGhlIGljb25cbiAqIEBwYXJhbSB7SWNvbk5vZGV9IHByb3BzLmljb25Ob2RlIC0gVGhlIGljb24gbm9kZSBvZiB0aGUgaWNvblxuICpcbiAqIEByZXR1cm5zIHtGb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50fSBMdWNpZGVJY29uXG4gKi9cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmPFNWR1NWR0VsZW1lbnQsIEljb25Db21wb25lbnRQcm9wcz4oXG4gIChcbiAgICB7XG4gICAgICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICAgICAgc2l6ZSA9IDI0LFxuICAgICAgc3Ryb2tlV2lkdGggPSAyLFxuICAgICAgYWJzb2x1dGVTdHJva2VXaWR0aCxcbiAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uTm9kZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZixcbiAgKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3ZnJyxcbiAgICAgIHtcbiAgICAgICAgcmVmLFxuICAgICAgICAuLi5kZWZhdWx0QXR0cmlidXRlcyxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IGFic29sdXRlU3Ryb2tlV2lkdGggPyAoTnVtYmVyKHN0cm9rZVdpZHRoKSAqIDI0KSAvIE51bWJlcihzaXplKSA6IHN0cm9rZVdpZHRoLFxuICAgICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcygnbHVjaWRlJywgY2xhc3NOYW1lKSxcbiAgICAgICAgLi4uKCFjaGlsZHJlbiAmJiAhaGFzQTExeVByb3AocmVzdCkgJiYgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICAuLi5pY29uTm9kZS5tYXAoKFt0YWcsIGF0dHJzXSkgPT4gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzKSksXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSksXG4gICAgICBdLFxuICAgICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8scUtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFDWCxRQVdFLENBRUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFaQSxFQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNSLENBQUEsQ0FBQSxDQUFBLENBQU8sR0FBQSxDQUFBLENBQUEsRUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsR0FBQSxDQUFBLEVBQ2QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLEdBQUEsQ0FBQSxDQUFBLEVBQ1osQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0EsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTs2S0FJTCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBO1FBQ0UsQ0FBQSxDQUFBLENBQUE7UUFDQSwwS0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0gsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNQLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ1IsV0FBQSxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBdUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxDQUFBLENBQUEsQ0FBTSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQy9FLFNBQUEsQ0FBVyxpTEFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQUFBYSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsU0FBUyxDQUFBO1FBQzNDLENBQUksQ0FBQSxDQUFBLENBQUMsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsaUxBQUMsY0FBQSxFQUFZLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZSxNQUFPO1FBQUEsQ0FBQTtRQUMvRCxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ0wsQ0FBQSxFQUNBO1dBQ0ssQ0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFJO2dCQUFDLENBQUMsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNO3FMQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQWMsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUMsQ0FBQTs7V0FDdkQsQ0FBTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLENBQUEsQ0FBQTtZQUFDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtTQUFBO0tBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDY4MCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2NyZWF0ZUx1Y2lkZUljb24uanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2NyZWF0ZUx1Y2lkZUljb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgdG9LZWJhYkNhc2UsIHRvUGFzY2FsQ2FzZSB9IGZyb20gJ0BsdWNpZGUvc2hhcmVkJztcbmltcG9ydCB7IEljb25Ob2RlLCBMdWNpZGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBMdWNpZGUgaWNvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uTmFtZVxuICogQHBhcmFtIHthcnJheX0gaWNvbk5vZGVcbiAqIEByZXR1cm5zIHtGb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50fSBMdWNpZGVJY29uXG4gKi9cbmNvbnN0IGNyZWF0ZUx1Y2lkZUljb24gPSAoaWNvbk5hbWU6IHN0cmluZywgaWNvbk5vZGU6IEljb25Ob2RlKSA9PiB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGZvcndhcmRSZWY8U1ZHU1ZHRWxlbWVudCwgTHVjaWRlUHJvcHM+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgcmVmLFxuICAgICAgaWNvbk5vZGUsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcyhcbiAgICAgICAgYGx1Y2lkZS0ke3RvS2ViYWJDYXNlKHRvUGFzY2FsQ2FzZShpY29uTmFtZSkpfWAsXG4gICAgICAgIGBsdWNpZGUtJHtpY29uTmFtZX1gLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApLFxuICAgICAgLi4ucHJvcHMsXG4gICAgfSksXG4gICk7XG5cbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gdG9QYXNjYWxDYXNlKGljb25OYW1lKTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTHVjaWRlSWNvbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVdNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQW1CLENBQUEsQ0FBQSxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWtCLFFBQXVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNqRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsbUtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBdUMsUUFBMEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUF6QixDQUFBLENBQUUsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUyxDQUFBLENBQUE7aUxBQ2pGLGdCQUFBLDRKQUFjLFVBQU0sQ0FBQSxDQUFBO1lBQ2xCLENBQUEsQ0FBQSxDQUFBO1lBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVcsa0xBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQ1QsQUFBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBbUMsQ0FBQSxzTEFBbkMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxrTEFBWSxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxDQUFDLEdBQzdDLFFBQVUsRUFBUSxDQUFBLE1BQVIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQ2xCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUVGLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNKLENBQUE7O0lBR08sU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxtTEFBYyxlQUFBLEVBQWEsUUFBUSxDQUFBO0lBRXRDLE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDVCxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3MTMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9naXRodWIuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL2dpdGh1Yi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFtcbiAgICAncGF0aCcsXG4gICAge1xuICAgICAgZDogJ00xNSAyMnYtNGE0LjggNC44IDAgMCAwLTEtMy41YzMgMCA2LTIgNi01LjUuMDgtMS4yNS0uMjctMi40OC0xLTMuNS4yOC0xLjE1LjI4LTIuMzUgMC0zLjUgMCAwLTEgMC0zIDEuNS0yLjY0LS41LTUuMzYtLjUtOCAwQzYgMiA1IDIgNSAyYy0uMyAxLjE1LS4zIDIuMzUgMCAzLjVBNS40MDMgNS40MDMgMCAwIDAgNCA5YzAgMy41IDMgNS41IDYgNS41LS4zOS40OS0uNjggMS4wNS0uODUgMS42NS0uMTcuNi0uMjIgMS4yMy0uMTUgMS44NXY0JyxcbiAgICAgIGtleTogJ3RvbmVmJyxcbiAgICB9LFxuICBdLFxuICBbJ3BhdGgnLCB7IGQ6ICdNOSAxOGMtNC41MSAyLTUtMi03LTInLCBrZXk6ICc5Y29tc24nIH1dLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIEdpdGh1YlxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTVRVZ01qSjJMVFJoTkM0NElEUXVPQ0F3SURBZ01DMHhMVE11TldNeklEQWdOaTB5SURZdE5TNDFMakE0TFRFdU1qVXRMakkzTFRJdU5EZ3RNUzB6TGpVdU1qZ3RNUzR4TlM0eU9DMHlMak0xSURBdE15NDFJREFnTUMweElEQXRNeUF4TGpVdE1pNDJOQzB1TlMwMUxqTTJMUzQxTFRnZ01FTTJJRElnTlNBeUlEVWdNbU10TGpNZ01TNHhOUzB1TXlBeUxqTTFJREFnTXk0MVFUVXVOREF6SURVdU5EQXpJREFnTUNBd0lEUWdPV013SURNdU5TQXpJRFV1TlNBMklEVXVOUzB1TXprdU5Ea3RMalk0SURFdU1EVXRMamcxSURFdU5qVXRMakUzTGpZdExqSXlJREV1TWpNdExqRTFJREV1T0RWMk5DSWdMejRLSUNBOGNHRjBhQ0JrUFNKTk9TQXhPR010TkM0MU1TQXlMVFV0TWkwM0xUSWlJQzgrQ2p3dmMzWm5QZ289KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9naXRodWJcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKiBAZGVwcmVjYXRlZCBCcmFuZCBpY29ucyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgYXJlIGR1ZSB0byBiZSByZW1vdmVkLCBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL2x1Y2lkZS1pY29ucy9sdWNpZGUvaXNzdWVzLzY3MC4gV2UgcmVjb21tZW5kIHVzaW5nIGh0dHBzOi8vc2ltcGxlaWNvbnMub3JnLz9xPWdpdGh1YiBpbnN0ZWFkLiBUaGlzIGljb24gd2lsbCBiZSByZW1vdmVkIGluIHYxLjBcbiAqL1xuY29uc3QgR2l0aHViID0gY3JlYXRlTHVjaWRlSWNvbignZ2l0aHViJywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdpdGh1YjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQ0UsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDQTtZQUNFLENBQUcsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQTtLQUVUO0lBQ0E7UUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUEsQ0FBRTtZQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQXlCLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFVLENBQUE7S0FBQTtDQUN4RDtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBUyxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBaUIsQUFBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFVLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzU1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvdHdpdHRlci5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvdHdpdHRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFtcbiAgICAncGF0aCcsXG4gICAge1xuICAgICAgZDogJ00yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeicsXG4gICAgICBrZXk6ICdwZmYwejYnLFxuICAgIH0sXG4gIF0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgVHdpdHRlclxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTWpJZ05ITXRMamNnTWk0eExUSWdNeTQwWXpFdU5pQXhNQzA1TGpRZ01UY3VNeTB4T0NBeE1TNDJJREl1TWk0eElEUXVOQzB1TmlBMkxUSkRNeUF4TlM0MUxqVWdPUzQySURNZ05XTXlMaklnTWk0MklEVXVOaUEwTGpFZ09TQTBMUzQ1TFRRdU1pQTBMVFl1TmlBM0xUTXVPQ0F4TGpFZ01DQXpMVEV1TWlBekxURXVNbm9pSUM4K0Nqd3ZjM1puUGdvPSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvdHdpdHRlclxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqIEBkZXByZWNhdGVkIEJyYW5kIGljb25zIGhhdmUgYmVlbiBkZXByZWNhdGVkIGFuZCBhcmUgZHVlIHRvIGJlIHJlbW92ZWQsIHBsZWFzZSByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vbHVjaWRlLWljb25zL2x1Y2lkZS9pc3N1ZXMvNjcwLiBXZSByZWNvbW1lbmQgdXNpbmcgaHR0cHM6Ly9zaW1wbGVpY29ucy5vcmcvP3E9dHdpdHRlciBpbnN0ZWFkLiBUaGlzIGljb24gd2lsbCBiZSByZW1vdmVkIGluIHYxLjBcbiAqL1xuY29uc3QgVHdpdHRlciA9IGNyZWF0ZUx1Y2lkZUljb24oJ3R3aXR0ZXInLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlcjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQ0UsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDQTtZQUNFLENBQUcsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFDSCxHQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7S0FDUDtDQUVKO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFVLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBVyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDc5MCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2xpbmtlZGluLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy9saW5rZWRpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFtcbiAgICAncGF0aCcsXG4gICAge1xuICAgICAgZDogJ00xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02eicsXG4gICAgICBrZXk6ICdjMmpxOWYnLFxuICAgIH0sXG4gIF0sXG4gIFsncmVjdCcsIHsgd2lkdGg6ICc0JywgaGVpZ2h0OiAnMTInLCB4OiAnMicsIHk6ICc5Jywga2V5OiAnbWszb241JyB9XSxcbiAgWydjaXJjbGUnLCB7IGN4OiAnNCcsIGN5OiAnNCcsIHI6ICcyJywga2V5OiAnYnQ1cmE4JyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBMaW5rZWRpblxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTVRZZ09HRTJJRFlnTUNBd0lERWdOaUEyZGpkb0xUUjJMVGRoTWlBeUlEQWdNQ0F3TFRJdE1pQXlJRElnTUNBd0lEQXRNaUF5ZGpkb0xUUjJMVGRoTmlBMklEQWdNQ0F4SURZdE5ub2lJQzgrQ2lBZ1BISmxZM1FnZDJsa2RHZzlJalFpSUdobGFXZG9kRDBpTVRJaUlIZzlJaklpSUhrOUlqa2lJQzgrQ2lBZ1BHTnBjbU5zWlNCamVEMGlOQ0lnWTNrOUlqUWlJSEk5SWpJaUlDOCtDand2YzNablBnbz0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL2xpbmtlZGluXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICogQGRlcHJlY2F0ZWQgQnJhbmQgaWNvbnMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgYW5kIGFyZSBkdWUgdG8gYmUgcmVtb3ZlZCwgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNpZGUtaWNvbnMvbHVjaWRlL2lzc3Vlcy82NzAuIFdlIHJlY29tbWVuZCB1c2luZyBodHRwczovL3NpbXBsZWljb25zLm9yZy8/cT1saW5rZWRpbiBpbnN0ZWFkLiBUaGlzIGljb24gd2lsbCBiZSByZW1vdmVkIGluIHYxLjBcbiAqL1xuY29uc3QgTGlua2VkaW4gPSBjcmVhdGVMdWNpZGVJY29uKCdsaW5rZWRpbicsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRpbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQ0UsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDQTtZQUNFLENBQUcsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFDSCxHQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7S0FFVDtJQUNBO1FBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFRLENBQUU7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBTyxDQUFLLENBQUEsQ0FBQSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUE7WUFBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBSztZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUNwRTtRQUFDLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7WUFBRSxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBSztZQUFBLENBQUEsQ0FBSSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBSyxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFLLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxRQUFBO1FBQVUsQ0FBQTtLQUFBO0NBQ3hEO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxDQUFXLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFZLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODQ0LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbWFpbC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFsncGF0aCcsIHsgZDogJ20yMiA3LTguOTkxIDUuNzI3YTIgMiAwIDAgMS0yLjAwOSAwTDIgNycsIGtleTogJzEzMnE3cScgfV0sXG4gIFsncmVjdCcsIHsgeDogJzInLCB5OiAnNCcsIHdpZHRoOiAnMjAnLCBoZWlnaHQ6ICcxNicsIHJ4OiAnMicsIGtleTogJ2l6eGxhbycgfV0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgTWFpbFxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0p0TWpJZ055MDRMams1TVNBMUxqY3lOMkV5SURJZ01DQXdJREV0TWk0d01Ea2dNRXd5SURjaUlDOCtDaUFnUEhKbFkzUWdlRDBpTWlJZ2VUMGlOQ0lnZDJsa2RHZzlJakl3SWlCb1pXbG5hSFE5SWpFMklpQnllRDBpTWlJZ0x6NEtQQzl6ZG1jK0NnPT0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL21haWxcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKlxuICovXG5jb25zdCBNYWlsID0gY3JlYXRlTHVjaWRlSWNvbignbWFpbCcsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWlsO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBO1FBQUEsQ0FBQTtZQUFFLEdBQUcsQ0FBMkMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLO1FBQUEsQ0FBVTtLQUFBO0lBQ3hFO1FBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFRLENBQUU7WUFBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsRUFBSztZQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBVSxDQUFBO0tBQUE7Q0FDaEY7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQU8sQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFRLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODkwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGhvbmUuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL3Bob25lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgW1xuICAgICdwYXRoJyxcbiAgICB7XG4gICAgICBkOiAnTTEzLjgzMiAxNi41NjhhMSAxIDAgMCAwIDEuMjEzLS4zMDNsLjM1NS0uNDY1QTIgMiAwIDAgMSAxNyAxNWgzYTIgMiAwIDAgMSAyIDJ2M2EyIDIgMCAwIDEtMiAyQTE4IDE4IDAgMCAxIDIgNGEyIDIgMCAwIDEgMi0yaDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0uOCAxLjZsLS40NjguMzUxYTEgMSAwIDAgMC0uMjkyIDEuMjMzIDE0IDE0IDAgMCAwIDYuMzkyIDYuMzg0JyxcbiAgICAgIGtleTogJzluanA1dicsXG4gICAgfSxcbiAgXSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBQaG9uZVxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTVRNdU9ETXlJREUyTGpVMk9HRXhJREVnTUNBd0lEQWdNUzR5TVRNdExqTXdNMnd1TXpVMUxTNDBOalZCTWlBeUlEQWdNQ0F4SURFM0lERTFhRE5oTWlBeUlEQWdNQ0F4SURJZ01uWXpZVElnTWlBd0lEQWdNUzB5SURKQk1UZ2dNVGdnTUNBd0lERWdNaUEwWVRJZ01pQXdJREFnTVNBeUxUSm9NMkV5SURJZ01DQXdJREVnTWlBeWRqTmhNaUF5SURBZ01DQXhMUzQ0SURFdU5td3RMalEyT0M0ek5URmhNU0F4SURBZ01DQXdMUzR5T1RJZ01TNHlNek1nTVRRZ01UUWdNQ0F3SURBZ05pNHpPVElnTmk0ek9EUWlJQzgrQ2p3dmMzWm5QZ289KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9waG9uZVxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IFBob25lID0gY3JlYXRlTHVjaWRlSWNvbigncGhvbmUnLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvbmU7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0E7WUFDRSxDQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBQ1A7Q0FFSjtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBUSxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDkyNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL21hcC1waW4uanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL21hcC1waW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwJyxcbiAgICAgIGtleTogJzFyMGYweicsXG4gICAgfSxcbiAgXSxcbiAgWydjaXJjbGUnLCB7IGN4OiAnMTInLCBjeTogJzEwJywgcjogJzMnLCBrZXk6ICdpbHFocjcnIH1dLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIE1hcFBpblxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTWpBZ01UQmpNQ0EwTGprNU15MDFMalV6T1NBeE1DNHhPVE10Tnk0ek9Ua2dNVEV1TnprNVlURWdNU0F3SURBZ01TMHhMakl3TWlBd1F6a3VOVE01SURJd0xqRTVNeUEwSURFMExqazVNeUEwSURFd1lUZ2dPQ0F3SURBZ01TQXhOaUF3SWlBdlBnb2dJRHhqYVhKamJHVWdZM2c5SWpFeUlpQmplVDBpTVRBaUlISTlJak1pSUM4K0Nqd3ZjM1puUGdvPSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvbWFwLXBpblxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IE1hcFBpbiA9IGNyZWF0ZUx1Y2lkZUljb24oJ21hcC1waW4nLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwUGluO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNBO1lBQ0UsQ0FBRyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBRVQ7SUFDQTtRQUFDLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7WUFBRSxDQUFJLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBTTtZQUFBLENBQUEsQ0FBSSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFNLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUssQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUE7UUFBVSxDQUFBO0tBQUE7Q0FDMUQ7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQVMsQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFXLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogOTY5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvaGVhcnQuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL2hlYXJ0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgW1xuICAgICdwYXRoJyxcbiAgICB7XG4gICAgICBkOiAnTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WicsXG4gICAgICBrZXk6ICdjM3lta3knLFxuICAgIH0sXG4gIF0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgSGVhcnRcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk1Ua2dNVFJqTVM0ME9TMHhMalEySURNdE15NHlNU0F6TFRVdU5VRTFMalVnTlM0MUlEQWdNQ0F3SURFMkxqVWdNMk10TVM0M05pQXdMVE1nTGpVdE5DNDFJREl0TVM0MUxURXVOUzB5TGpjMExUSXROQzQxTFRKQk5TNDFJRFV1TlNBd0lEQWdNQ0F5SURndU5XTXdJREl1TXlBeExqVWdOQzR3TlNBeklEVXVOV3czSURkYUlpQXZQZ284TDNOMlp6NEspIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL2hlYXJ0XG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgSGVhcnQgPSBjcmVhdGVMdWNpZGVJY29uKCdoZWFydCcsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFydDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQ0UsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDQTtZQUNFLENBQUcsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUNILEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQTtLQUNQO0NBRUo7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQVEsQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVMsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBIiwiZGVidWdJZCI6bnVsbH19XQp9
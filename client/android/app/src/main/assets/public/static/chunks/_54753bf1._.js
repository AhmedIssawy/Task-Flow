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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
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
            href: "#github",
            color: "hover:text-gray-600"
        },
        {
            name: "Twitter",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
            href: "#twitter",
            color: "hover:text-blue-400"
        },
        {
            name: "LinkedIn",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
            href: "#linkedin",
            color: "hover:text-blue-600"
        }
    ];
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gradient-to-b from-background to-muted/20 border-t border-white/10 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-32 right-16 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float",
                        style: {
                            animationDelay: '2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-pattern opacity-[0.01]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/Footer.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        size: 24,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-foreground font-primary",
                                                    children: t('brand.name')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed mb-8 max-w-sm text-lg",
                                            children: t('brand.description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                size: 18,
                                                                className: "text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground group-hover:text-foreground transition-colors",
                                                            children: "hello@taskflow.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                size: 18,
                                                                className: "text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground group-hover:text-foreground transition-colors",
                                                            children: "+20 155 445 9196"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 18,
                                                                className: "text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground group-hover:text-foreground transition-colors",
                                                            children: t('contactinfo.address')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-foreground mb-6 text-lg font-primary",
                                            children: t('sections.product')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: footerLinks.product.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, index, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-foreground mb-6 text-lg font-primary",
                                            children: t('sections.company')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: footerLinks.company.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, index, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-foreground mb-6 text-lg font-primary",
                                            children: t('sections.support')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: footerLinks.support.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, index, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-foreground mb-6 text-lg font-primary",
                                            children: t('sections.legal')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: footerLinks.legal.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, index, false, {
                                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/Footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center justify-between gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('copyright.text')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            size: 16,
                                            className: "text-red-500 fill-current animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('copyright.suffix')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: socialLinks.map((social, index)=>{
                                        const IconComponent = social.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: social.href,
                                            className: "w-10 h-10 bg-muted/20 rounded-xl flex items-center justify-center text-muted-foreground ".concat(social.color, " transition-all hover:scale-110 hover:shadow-lg"),
                                            "aria-label": social.name,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/Footer.tsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/src/components/landing/Footer.tsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: scrollToTop,
                                    className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary/20 transition-all hover:scale-110 hover:shadow-lg",
                                    "aria-label": "Scroll to top",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Footer.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Footer.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/Footer.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/Footer.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/Footer.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing/Footer.tsx",
        lineNumber: 60,
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
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ArrowUp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }
    ],
    [
        "path",
        {
            d: "M12 19V5",
            key: "x0mq9r"
        }
    ]
];
const ArrowUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-up", __iconNode);
;
 //# sourceMappingURL=arrow-up.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ArrowUp": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Sparkles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Sparkles": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJztcclxuaW1wb3J0IHtcclxuICBHaXRodWIsXHJcbiAgVHdpdHRlcixcclxuICBMaW5rZWRpbixcclxuICBNYWlsLFxyXG4gIFBob25lLFxyXG4gIE1hcFBpbixcclxuICBBcnJvd1VwLFxyXG4gIEhlYXJ0LFxyXG4gIFNwYXJrbGVzXHJcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCdMYW5kaW5nLkZvb3RlcicpO1xyXG4gIGNvbnN0IGZvb3RlckxpbmtzID0ge1xyXG4gICAgcHJvZHVjdDogW1xyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnByb2R1Y3QuZmVhdHVyZXMnKSwgaHJlZjogXCIjZmVhdHVyZXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnByb2R1Y3QucHJpY2luZycpLCBocmVmOiBcIiNwcmljaW5nXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5wcm9kdWN0LmludGVncmF0aW9ucycpLCBocmVmOiBcIiNpbnRlZ3JhdGlvbnNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnByb2R1Y3QuYXBpJyksIGhyZWY6IFwiI2FwaVwiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MucHJvZHVjdC51cGRhdGVzJyksIGhyZWY6IFwiI3VwZGF0ZXNcIiB9XHJcbiAgICBdLFxyXG4gICAgY29tcGFueTogW1xyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmNvbXBhbnkuYWJvdXQnKSwgaHJlZjogXCIjYWJvdXRcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmNvbXBhbnkuY2FyZWVycycpLCBocmVmOiBcIiNjYXJlZXJzXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5jb21wYW55LmJsb2cnKSwgaHJlZjogXCIjYmxvZ1wiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MuY29tcGFueS5wcmVzcycpLCBocmVmOiBcIiNwcmVzc1wiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MuY29tcGFueS5wYXJ0bmVycycpLCBocmVmOiBcIiNwYXJ0bmVyc1wiIH1cclxuICAgIF0sXHJcbiAgICBzdXBwb3J0OiBbXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3Muc3VwcG9ydC5oZWxwQ2VudGVyJyksIGhyZWY6IFwiI2hlbHBcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnN1cHBvcnQuZG9jdW1lbnRhdGlvbicpLCBocmVmOiBcIiNkb2NzXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5zdXBwb3J0LmNvbnRhY3RVcycpLCBocmVmOiBcIiNjb250YWN0XCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5zdXBwb3J0LnN0YXR1cycpLCBocmVmOiBcIiNzdGF0dXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLnN1cHBvcnQuY29tbXVuaXR5JyksIGhyZWY6IFwiI2NvbW11bml0eVwiIH1cclxuICAgIF0sXHJcbiAgICBsZWdhbDogW1xyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmxlZ2FsLnByaXZhY3knKSwgaHJlZjogXCIjcHJpdmFjeVwiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MubGVnYWwudGVybXMnKSwgaHJlZjogXCIjdGVybXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ2xpbmtzLmxlZ2FsLmNvb2tpZXMnKSwgaHJlZjogXCIjY29va2llc1wiIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnbGlua3MubGVnYWwuZ2RwcicpLCBocmVmOiBcIiNnZHByXCIgfSxcclxuICAgICAgeyBuYW1lOiB0KCdsaW5rcy5sZWdhbC5zZWN1cml0eScpLCBocmVmOiBcIiNzZWN1cml0eVwiIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBjb25zdCBzb2NpYWxMaW5rcyA9IFtcclxuICAgIHsgbmFtZTogXCJHaXRIdWJcIiwgaWNvbjogR2l0aHViLCBocmVmOiBcIiNnaXRodWJcIiwgY29sb3I6IFwiaG92ZXI6dGV4dC1ncmF5LTYwMFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHdpdHRlclwiLCBpY29uOiBUd2l0dGVyLCBocmVmOiBcIiN0d2l0dGVyXCIsIGNvbG9yOiBcImhvdmVyOnRleHQtYmx1ZS00MDBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpbmtlZEluXCIsIGljb246IExpbmtlZGluLCBocmVmOiBcIiNsaW5rZWRpblwiLCBjb2xvcjogXCJob3Zlcjp0ZXh0LWJsdWUtNjAwXCIgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJhY2tncm91bmQgdG8tbXV0ZWQvMjAgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICB7LyogQmFja2dyb3VuZCBFbGVtZW50cyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgbGVmdC0yMCB3LTY0IGgtNjQgYmctcHJpbWFyeS81IHJvdW5kZWQtZnVsbCBibHVyLTN4bCBhbmltYXRlLWZsb2F0XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMzIgcmlnaHQtMTYgdy00OCBoLTQ4IGJnLWFjY2VudC81IHJvdW5kZWQtZnVsbCBibHVyLTN4bCBhbmltYXRlLWZsb2F0XCIgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcycycgfX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyaWQtcGF0dGVybiBvcGFjaXR5LVswLjAxXVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgIHsvKiBNYWluIEZvb3RlciBDb250ZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMjBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNiBnYXAtMTJcIj5cclxuICAgICAgICAgICAgey8qIEJyYW5kIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5IHRvLWFjY2VudCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgPFNwYXJrbGVzIHNpemU9ezI0fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnlcIj57dCgnYnJhbmQubmFtZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZCBtYi04IG1heC13LXNtIHRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgIHt0KCdicmFuZC5kZXNjcmlwdGlvbicpfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgey8qIENvbnRhY3QgSW5mbyAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy1wcmltYXJ5LzEwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWlsIHNpemU9ezE4fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGdyb3VwLWhvdmVyOnRleHQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9yc1wiPmhlbGxvQHRhc2tmbG93LmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy1wcmltYXJ5LzEwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBncm91cC1ob3Zlcjp0ZXh0LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIj4rMjAgMTU1IDQ0NSA5MTk2PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLXByaW1hcnkvMTAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm91cC1ob3ZlcjpiZy1wcmltYXJ5LzIwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBncm91cC1ob3Zlcjp0ZXh0LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIj57dCgnY29udGFjdGluZm8uYWRkcmVzcycpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQcm9kdWN0IExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTYgdGV4dC1sZyBmb250LXByaW1hcnlcIj57dCgnc2VjdGlvbnMucHJvZHVjdCcpfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvb3RlckxpbmtzLnByb2R1Y3QubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENvbXBhbnkgTGlua3MgKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItNiB0ZXh0LWxnIGZvbnQtcHJpbWFyeVwiPnt0KCdzZWN0aW9ucy5jb21wYW55Jyl9PC9oMz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9vdGVyTGlua3MuY29tcGFueS5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjp0cmFuc2xhdGUteC0xIHRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3VwcG9ydCBMaW5rcyAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi02IHRleHQtbGcgZm9udC1wcmltYXJ5XCI+e3QoJ3NlY3Rpb25zLnN1cHBvcnQnKX08L2gzPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgIHtmb290ZXJMaW5rcy5zdXBwb3J0Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCBibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMZWdhbCBMaW5rcyAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi02IHRleHQtbGcgZm9udC1wcmltYXJ5XCI+e3QoJ3NlY3Rpb25zLmxlZ2FsJyl9PC9oMz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9vdGVyTGlua3MubGVnYWwubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEJvdHRvbSBGb290ZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvMTAgcHktOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTZcIj5cclxuICAgICAgICAgICAgey8qIENvcHlyaWdodCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0LnRleHQnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZmlsbC1jdXJyZW50IGFuaW1hdGUtcHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0KCdjb3B5cmlnaHQuc3VmZml4Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTb2NpYWwgTGlua3MgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKChzb2NpYWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBJY29uQ29tcG9uZW50ID0gc29jaWFsLmljb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIGJnLW11dGVkLzIwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kICR7c29jaWFsLmNvbG9yfSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6c2hhZG93LWxnYH1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzb2NpYWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTY3JvbGwgdG8gVG9wICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLXByaW1hcnkvMTAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8yMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6c2hhZG93LWxnXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2Nyb2xsIHRvIHRvcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QXJyb3dVcCBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUhBOzs7QUFlQSxNQUFNLFNBQVM7O0lBQ2IsTUFBTSxJQUFJLENBQUEsR0FBQSx5TUFBQSxDQUFBLGtCQUFlLEFBQUQsRUFBRTtJQUMxQixNQUFNLGNBQWM7UUFDbEIsU0FBUztZQUNQO2dCQUFFLE1BQU0sRUFBRTtnQkFBMkIsTUFBTTtZQUFZO1lBQ3ZEO2dCQUFFLE1BQU0sRUFBRTtnQkFBMEIsTUFBTTtZQUFXO1lBQ3JEO2dCQUFFLE1BQU0sRUFBRTtnQkFBK0IsTUFBTTtZQUFnQjtZQUMvRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXNCLE1BQU07WUFBTztZQUM3QztnQkFBRSxNQUFNLEVBQUU7Z0JBQTBCLE1BQU07WUFBVztTQUN0RDtRQUNELFNBQVM7WUFDUDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXdCLE1BQU07WUFBUztZQUNqRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQTBCLE1BQU07WUFBVztZQUNyRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXVCLE1BQU07WUFBUTtZQUMvQztnQkFBRSxNQUFNLEVBQUU7Z0JBQXdCLE1BQU07WUFBUztZQUNqRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQTJCLE1BQU07WUFBWTtTQUN4RDtRQUNELFNBQVM7WUFDUDtnQkFBRSxNQUFNLEVBQUU7Z0JBQTZCLE1BQU07WUFBUTtZQUNyRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQWdDLE1BQU07WUFBUTtZQUN4RDtnQkFBRSxNQUFNLEVBQUU7Z0JBQTRCLE1BQU07WUFBVztZQUN2RDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXlCLE1BQU07WUFBVTtZQUNuRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQTRCLE1BQU07WUFBYTtTQUMxRDtRQUNELE9BQU87WUFDTDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXdCLE1BQU07WUFBVztZQUNuRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXNCLE1BQU07WUFBUztZQUMvQztnQkFBRSxNQUFNLEVBQUU7Z0JBQXdCLE1BQU07WUFBVztZQUNuRDtnQkFBRSxNQUFNLEVBQUU7Z0JBQXFCLE1BQU07WUFBUTtZQUM3QztnQkFBRSxNQUFNLEVBQUU7Z0JBQXlCLE1BQU07WUFBWTtTQUN0RDtJQUNIO0lBRUEsTUFBTSxjQUFjO1FBQ2xCO1lBQUUsTUFBTTtZQUFVLE1BQU0seU1BQUEsQ0FBQSxTQUFNO1lBQUUsTUFBTTtZQUFXLE9BQU87UUFBc0I7UUFDOUU7WUFBRSxNQUFNO1lBQVcsTUFBTSwyTUFBQSxDQUFBLFVBQU87WUFBRSxNQUFNO1lBQVksT0FBTztRQUFzQjtRQUNqRjtZQUFFLE1BQU07WUFBWSxNQUFNLDZNQUFBLENBQUEsV0FBUTtZQUFFLE1BQU07WUFBYSxPQUFPO1FBQXNCO0tBQ3JGO0lBRUQsTUFBTSxjQUFjO1FBQ2xCLE9BQU8sUUFBUSxDQUFDO1lBQUUsS0FBSztZQUFHLFVBQVU7UUFBUztJQUMvQztJQUVBLHFCQUNFLDZMQUFDO1FBQU8sV0FBVTs7MEJBRWhCLDZMQUFDO2dCQUFJLFdBQVU7O2tDQUNiLDZMQUFDO3dCQUFJLFdBQVU7Ozs7OztrQ0FDZiw2TEFBQzt3QkFBSSxXQUFVO3dCQUF3RixPQUFPOzRCQUFFLGdCQUFnQjt3QkFBSzs7Ozs7O2tDQUNySSw2TEFBQzt3QkFBSSxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR2pCLDZMQUFDO2dCQUFJLFdBQVU7O2tDQUViLDZMQUFDO3dCQUFJLFdBQVU7a0NBQ2IsY0FBQSw2TEFBQzs0QkFBSSxXQUFVOzs4Q0FFYiw2TEFBQztvQ0FBSSxXQUFVOztzREFDYiw2TEFBQzs0Q0FBSSxXQUFVOzs4REFDYiw2TEFBQztvREFBSSxXQUFVOzhEQUNiLGNBQUEsNkxBQUMsNk1BQUEsQ0FBQSxXQUFRO3dEQUFDLE1BQU07d0RBQUksV0FBVTs7Ozs7Ozs7Ozs7OERBRWhDLDZMQUFDO29EQUFLLFdBQVU7OERBQW1ELEVBQUU7Ozs7Ozs7Ozs7OztzREFHdkUsNkxBQUM7NENBQUUsV0FBVTtzREFDVixFQUFFOzs7Ozs7c0RBSUwsNkxBQUM7NENBQUksV0FBVTs7OERBQ2IsNkxBQUM7b0RBQUksV0FBVTs7c0VBQ2IsNkxBQUM7NERBQUksV0FBVTtzRUFDYixjQUFBLDZMQUFDLHFNQUFBLENBQUEsT0FBSTtnRUFBQyxNQUFNO2dFQUFJLFdBQVU7Ozs7Ozs7Ozs7O3NFQUU1Qiw2TEFBQzs0REFBSyxXQUFVO3NFQUFzRTs7Ozs7Ozs7Ozs7OzhEQUV4Riw2TEFBQztvREFBSSxXQUFVOztzRUFDYiw2TEFBQzs0REFBSSxXQUFVO3NFQUNiLGNBQUEsNkxBQUMsdU1BQUEsQ0FBQSxRQUFLO2dFQUFDLE1BQU07Z0VBQUksV0FBVTs7Ozs7Ozs7Ozs7c0VBRTdCLDZMQUFDOzREQUFLLFdBQVU7c0VBQXNFOzs7Ozs7Ozs7Ozs7OERBRXhGLDZMQUFDO29EQUFJLFdBQVU7O3NFQUNiLDZMQUFDOzREQUFJLFdBQVU7c0VBQ2IsY0FBQSw2TEFBQyw2TUFBQSxDQUFBLFNBQU07Z0VBQUMsTUFBTTtnRUFBSSxXQUFVOzs7Ozs7Ozs7OztzRUFFOUIsNkxBQUM7NERBQUssV0FBVTtzRUFBdUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU0vRiw2TEFBQzs7c0RBQ0MsNkxBQUM7NENBQUcsV0FBVTtzREFBdUQsRUFBRTs7Ozs7O3NEQUN2RSw2TEFBQzs0Q0FBRyxXQUFVO3NEQUNYLFlBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sc0JBQzlCLDZMQUFDOzhEQUNDLGNBQUEsNkxBQUM7d0RBQ0MsTUFBTSxLQUFLLElBQUk7d0RBQ2YsV0FBVTtrRUFFVCxLQUFLLElBQUk7Ozs7OzttREFMTDs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FhZiw2TEFBQzs7c0RBQ0MsNkxBQUM7NENBQUcsV0FBVTtzREFBdUQsRUFBRTs7Ozs7O3NEQUN2RSw2TEFBQzs0Q0FBRyxXQUFVO3NEQUNYLFlBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sc0JBQzlCLDZMQUFDOzhEQUNDLGNBQUEsNkxBQUM7d0RBQ0MsTUFBTSxLQUFLLElBQUk7d0RBQ2YsV0FBVTtrRUFFVCxLQUFLLElBQUk7Ozs7OzttREFMTDs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FhZiw2TEFBQzs7c0RBQ0MsNkxBQUM7NENBQUcsV0FBVTtzREFBdUQsRUFBRTs7Ozs7O3NEQUN2RSw2TEFBQzs0Q0FBRyxXQUFVO3NEQUNYLFlBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sc0JBQzlCLDZMQUFDOzhEQUNDLGNBQUEsNkxBQUM7d0RBQ0MsTUFBTSxLQUFLLElBQUk7d0RBQ2YsV0FBVTtrRUFFVCxLQUFLLElBQUk7Ozs7OzttREFMTDs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FhZiw2TEFBQzs7c0RBQ0MsNkxBQUM7NENBQUcsV0FBVTtzREFBdUQsRUFBRTs7Ozs7O3NEQUN2RSw2TEFBQzs0Q0FBRyxXQUFVO3NEQUNYLFlBQVksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sc0JBQzVCLDZMQUFDOzhEQUNDLGNBQUEsNkxBQUM7d0RBQ0MsTUFBTSxLQUFLLElBQUk7d0RBQ2YsV0FBVTtrRUFFVCxLQUFLLElBQUk7Ozs7OzttREFMTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWNuQiw2TEFBQzt3QkFBSSxXQUFVO2tDQUNiLGNBQUEsNkxBQUM7NEJBQUksV0FBVTs7OENBRWIsNkxBQUM7b0NBQUksV0FBVTs7c0RBQ2IsNkxBQUM7c0RBQU0sRUFBRTs7Ozs7O3NEQUNULDZMQUFDLHVNQUFBLENBQUEsUUFBSzs0Q0FBQyxNQUFNOzRDQUFJLFdBQVU7Ozs7OztzREFDM0IsNkxBQUM7c0RBQU0sRUFBRTs7Ozs7Ozs7Ozs7OzhDQUlYLDZMQUFDO29DQUFJLFdBQVU7OENBQ1osWUFBWSxHQUFHLENBQUMsQ0FBQyxRQUFRO3dDQUN4QixNQUFNLGdCQUFnQixPQUFPLElBQUk7d0NBQ2pDLHFCQUNFLDZMQUFDOzRDQUVDLE1BQU0sT0FBTyxJQUFJOzRDQUNqQixXQUFXLEFBQUMsMkZBQXVHLE9BQWIsT0FBTyxLQUFLLEVBQUM7NENBQ25ILGNBQVksT0FBTyxJQUFJO3NEQUV2QixjQUFBLDZMQUFDO2dEQUFjLE1BQU07Ozs7OzsyQ0FMaEI7Ozs7O29DQVFYOzs7Ozs7OENBSUYsNkxBQUM7b0NBQ0MsU0FBUztvQ0FDVCxXQUFVO29DQUNWLGNBQVc7OENBRVgsY0FBQSw2TEFBQywrTUFBQSxDQUFBLFVBQU87d0NBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83QjtHQXpNTTs7UUFDTSx5TUFBQSxDQUFBLGtCQUFlOzs7S0FEckI7dUNBMk1TIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA2MjgsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3QvZXNtL2RldmVsb3BtZW50L3JlYWN0LWNsaWVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtYXR0ZXIgYXMgdXNlRm9ybWF0dGVyJDEsIHVzZVRyYW5zbGF0aW9ucyBhcyB1c2VUcmFuc2xhdGlvbnMkMSB9IGZyb20gJ3VzZS1pbnRsJztcbmV4cG9ydCAqIGZyb20gJ3VzZS1pbnRsJztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGVudHJ5IGZpbGUgd2hlbiBub24tJ3JlYWN0LXNlcnZlcidcbiAqIGVudmlyb25tZW50cyBpbXBvcnQgZnJvbSAnbmV4dC1pbnRsJy5cbiAqXG4gKiBNYWludGFpbmVyIG5vdGVzOlxuICogLSBNYWtlIHN1cmUgdGhpcyBtaXJyb3JzIHRoZSBBUEkgZnJvbSAncmVhY3Qtc2VydmVyJy5cbiAqIC0gTWFrZSBzdXJlIGV2ZXJ5dGhpbmcgZXhwb3J0ZWQgZnJvbSB0aGlzIG1vZHVsZSBpc1xuICogICBzdXBwb3J0ZWQgaW4gYWxsIE5leHQuanMgdmVyc2lvbnMgdGhhdCBhcmUgc3VwcG9ydGVkLlxuICovXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtZnVuY3Rpb24tdHlwZVxuZnVuY3Rpb24gY2FsbEhvb2sobmFtZSwgaG9vaykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGhvb2soLi4uYXJncyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjYWxsIFxcYCR7bmFtZX1cXGAgYmVjYXVzZSB0aGUgY29udGV4dCBmcm9tIFxcYE5leHRJbnRsQ2xpZW50UHJvdmlkZXJcXGAgd2FzIG5vdCBmb3VuZC5cblxuVGhpcyBjYW4gaGFwcGVuIGJlY2F1c2U6XG4xKSBZb3UgaW50ZW5kZWQgdG8gcmVuZGVyIHRoaXMgY29tcG9uZW50IGFzIGEgU2VydmVyIENvbXBvbmVudCwgdGhlIHJlbmRlclxuICAgZmFpbGVkLCBhbmQgdGhlcmVmb3JlIFJlYWN0IGF0dGVtcHRlZCB0byByZW5kZXIgdGhlIGNvbXBvbmVudCBvbiB0aGUgY2xpZW50XG4gICBpbnN0ZWFkLiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBjaGVjayB0aGUgY29uc29sZSBmb3Igc2VydmVyIGVycm9ycy5cbjIpIFlvdSBpbnRlbmRlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQgb24gdGhlIGNsaWVudCBzaWRlLCBidXQgbm8gY29udGV4dCB3YXMgZm91bmQuXG4gICBMZWFybiBtb3JlIGFib3V0IHRoaXMgZXJyb3IgaGVyZTogaHR0cHM6Ly9uZXh0LWludGwuZGV2L2RvY3MvZW52aXJvbm1lbnRzL3NlcnZlci1jbGllbnQtY29tcG9uZW50cyNtaXNzaW5nLWNvbnRleHRgICk7XG4gICAgfVxuICB9O1xufVxuY29uc3QgdXNlVHJhbnNsYXRpb25zID0gY2FsbEhvb2soJ3VzZVRyYW5zbGF0aW9ucycsIHVzZVRyYW5zbGF0aW9ucyQxKTtcbmNvbnN0IHVzZUZvcm1hdHRlciA9IGNhbGxIb29rKCd1c2VGb3JtYXR0ZXInLCB1c2VGb3JtYXR0ZXIkMSk7XG5cbmV4cG9ydCB7IHVzZUZvcm1hdHRlciwgdXNlVHJhbnNsYXRpb25zIH07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUFHQTs7Ozs7Ozs7Q0FRQyxHQUdELHNFQUFzRTtBQUN0RSxTQUFTLFNBQVMsSUFBSSxFQUFFLElBQUk7SUFDMUIsT0FBTzt5Q0FBSTtZQUFBOztRQUNULElBQUk7WUFDRixPQUFPLFFBQVE7UUFDakIsRUFBRSxVQUFNO1lBQ04sTUFBTSxJQUFJLE1BQU0sQUFBQyxtQkFBd0IsT0FBTCxNQUFLO1FBUTNDO0lBQ0Y7QUFDRjtBQUNBLE1BQU0sa0JBQWtCLFNBQVMsbUJBQW1CLHFLQUFBLENBQUEsa0JBQWlCO0FBQ3JFLE1BQU0sZUFBZSxTQUFTLGdCQUFnQixxS0FBQSxDQUFBLGVBQWMiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNjYzLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vc2hhcmVkL3NyYy91dGlscy5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL3NoYXJlZC9zcmMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZWxUb1Bhc2NhbCB9IGZyb20gJy4vdXRpbGl0eS10eXBlcyc7XG5cbi8qKlxuICogQ29udmVydHMgc3RyaW5nIHRvIGtlYmFiIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGtlYmFiaXplZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IHRvS2ViYWJDYXNlID0gKHN0cmluZzogc3RyaW5nKSA9PlxuICBzdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmcgdG8gY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgY2FtZWxpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9DYW1lbENhc2UgPSA8VCBleHRlbmRzIHN0cmluZz4oc3RyaW5nOiBUKSA9PlxuICBzdHJpbmcucmVwbGFjZSgvXihbQS1aXSl8W1xccy1fXSsoXFx3KS9nLCAobWF0Y2gsIHAxLCBwMikgPT5cbiAgICBwMiA/IHAyLnRvVXBwZXJDYXNlKCkgOiBwMS50b0xvd2VyQ2FzZSgpLFxuICApO1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyB0byBwYXNjYWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcGFzY2FsaXplZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUGFzY2FsQ2FzZSA9IDxUIGV4dGVuZHMgc3RyaW5nPihzdHJpbmc6IFQpOiBDYW1lbFRvUGFzY2FsPFQ+ID0+IHtcbiAgY29uc3QgY2FtZWxDYXNlID0gdG9DYW1lbENhc2Uoc3RyaW5nKTtcblxuICByZXR1cm4gKGNhbWVsQ2FzZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhbWVsQ2FzZS5zbGljZSgxKSkgYXMgQ2FtZWxUb1Bhc2NhbDxUPjtcbn07XG5cbi8qKlxuICogTWVyZ2VzIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBjbGFzc2VzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBvZiBjbGFzc2VzXG4gKi9cbmV4cG9ydCBjb25zdCBtZXJnZUNsYXNzZXMgPSA8Q2xhc3NUeXBlID0gc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4oLi4uY2xhc3NlczogQ2xhc3NUeXBlW10pID0+XG4gIGNsYXNzZXNcbiAgICAuZmlsdGVyKChjbGFzc05hbWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgQm9vbGVhbihjbGFzc05hbWUpICYmXG4gICAgICAgIChjbGFzc05hbWUgYXMgc3RyaW5nKS50cmltKCkgIT09ICcnICYmXG4gICAgICAgIGFycmF5LmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gaW5kZXhcbiAgICAgICk7XG4gICAgfSlcbiAgICAuam9pbignICcpXG4gICAgLnRyaW0oKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIGNvbXBvbmVudCBoYXMgYW4gYWNjZXNzaWJpbGl0eSBwcm9wXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBhbiBhY2Nlc3NpYmlsaXR5IHByb3BcbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0ExMXlQcm9wID0gKHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoJ2FyaWEtJykgfHwgcHJvcCA9PT0gJ3JvbGUnIHx8IHByb3AgPT09ICd0aXRsZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDMUIsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLE9BQUEsQ0FBUSxDQUFzQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUUsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQVEvQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLENBQWMsQ0FBQSxDQUFBLENBQW1CLE1BQUEsQ0FDNUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUF5QixDQUFDLE9BQU8sQ0FBSSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQ2xELENBQUEsQ0FBQSxDQUFBLEVBQUssQ0FBQSxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWdCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBUzlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFlLENBQW1CLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFnQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDdkUsTUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxZQUFZLE1BQU0sQ0FBQTtJQUU1QixPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsTUFBQSxDQUFPLENBQUMsQ0FBQSxDQUFFLFdBQUEsRUFBZ0IsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFVLEtBQUEsQ0FBTSxDQUFDLENBQUE7QUFDL0QsQ0FBQTtBQVFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBZSxDQUFBLENBQUEsRUFBMkMsQ0FBQTs7UUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUNyRTs7V0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQ0csTUFBQSxDQUFPLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLE9BQU8sS0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFFakMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsQ0FBQSxDQUNoQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBcUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBVyxDQUNqQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQSxDQUFTLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBRWpDLENBQUMsQ0FDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQ1IsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7O0FBUUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFjLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUErQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDekQsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVyxRQUFRLEtBQU8sQ0FBQTtRQUN4QixDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVyxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVSxTQUFTLE9BQVMsQ0FBQSxDQUFBO1lBQzVELE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0lBQ1Q7QUFFSixDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3MDIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9kZWZhdWx0QXR0cmlidXRlcy5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvZGVmYXVsdEF0dHJpYnV0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgd2lkdGg6IDI0LFxuICBoZWlnaHQ6IDI0LFxuICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgZmlsbDogJ25vbmUnLFxuICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICBzdHJva2VXaWR0aDogMixcbiAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgc3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsQ0FBZSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDYixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ1AsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLEVBQUEsQ0FBQSxDQUFBO0lBQ1AsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsRUFBQSxDQUFBLENBQUE7SUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ1QsQ0FBQSxDQUFBLENBQUEsQ0FBTSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ04sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWEsRUFBQSxDQUFBO0lBQ2IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDZixjQUFnQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDbEIsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzI3LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vSWNvbi5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvSWNvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgSWNvbk5vZGUsIEx1Y2lkZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMsIGhhc0ExMXlQcm9wIH0gZnJvbSAnQGx1Y2lkZS9zaGFyZWQnO1xuXG5pbnRlcmZhY2UgSWNvbkNvbXBvbmVudFByb3BzIGV4dGVuZHMgTHVjaWRlUHJvcHMge1xuICBpY29uTm9kZTogSWNvbk5vZGU7XG59XG5cbi8qKlxuICogTHVjaWRlIGljb24gY29tcG9uZW50XG4gKlxuICogQGNvbXBvbmVudCBJY29uXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jb2xvciAtIFRoZSBjb2xvciBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnN0cm9rZVdpZHRoIC0gVGhlIHN0cm9rZSB3aWR0aCBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtib29sZWFufSBwcm9wcy5hYnNvbHV0ZVN0cm9rZVdpZHRoIC0gV2hldGhlciB0byB1c2UgYWJzb2x1dGUgc3Ryb2tlIHdpZHRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGljb25cbiAqIEBwYXJhbSB7SWNvbk5vZGV9IHByb3BzLmNoaWxkcmVuIC0gVGhlIGNoaWxkcmVuIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge0ljb25Ob2RlfSBwcm9wcy5pY29uTm9kZSAtIFRoZSBpY29uIG5vZGUgb2YgdGhlIGljb25cbiAqXG4gKiBAcmV0dXJucyB7Rm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudH0gTHVjaWRlSWNvblxuICovXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZjxTVkdTVkdFbGVtZW50LCBJY29uQ29tcG9uZW50UHJvcHM+KFxuICAoXG4gICAge1xuICAgICAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgICAgIHNpemUgPSAyNCxcbiAgICAgIHN0cm9rZVdpZHRoID0gMixcbiAgICAgIGFic29sdXRlU3Ryb2tlV2lkdGgsXG4gICAgICBjbGFzc05hbWUgPSAnJyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWNvbk5vZGUsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWYsXG4gICkgPT5cbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3N2ZycsXG4gICAgICB7XG4gICAgICAgIHJlZixcbiAgICAgICAgLi4uZGVmYXVsdEF0dHJpYnV0ZXMsXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBhYnNvbHV0ZVN0cm9rZVdpZHRoID8gKE51bWJlcihzdHJva2VXaWR0aCkgKiAyNCkgLyBOdW1iZXIoc2l6ZSkgOiBzdHJva2VXaWR0aCxcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzZXMoJ2x1Y2lkZScsIGNsYXNzTmFtZSksXG4gICAgICAgIC4uLighY2hpbGRyZW4gJiYgIWhhc0ExMXlQcm9wKHJlc3QpICYmIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICAgICAuLi5yZXN0LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgLi4uaWNvbk5vZGUubWFwKChbdGFnLCBhdHRyc10pID0+IGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycykpLFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl0pLFxuICAgICAgXSxcbiAgICApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXdCQSxDQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLHFLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQ1gsUUFXRSxDQUVBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBWkEsRUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDUixDQUFBLENBQUEsQ0FBQSxDQUFPLEdBQUEsQ0FBQSxDQUFBLEVBQ1AsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFjLEdBQUEsQ0FBQSxFQUNkLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxHQUFBLENBQUEsQ0FBQSxFQUNaLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUE7NktBSUwsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQTtRQUNFLENBQUEsQ0FBQSxDQUFBO1FBQ0EsMEtBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNILENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNSLFdBQUEsQ0FBYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQXVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxDQUFBLENBQVcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFJLENBQUEsQ0FBQSxDQUFBLENBQU0sR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUMvRSxTQUFBLENBQVcsaUxBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEFBQWEsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFVLFNBQVMsQ0FBQTtRQUMzQyxDQUFJLENBQUEsQ0FBQSxDQUFDLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGlMQUFDLGNBQUEsRUFBWSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWUsTUFBTztRQUFBLENBQUE7UUFDL0QsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNMLENBQUEsRUFDQTtXQUNLLENBQVMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBSTtnQkFBQyxDQUFDLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTTtxTEFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUFjLEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFDLENBQUE7O1dBQ3ZELENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVyxDQUFBLENBQUE7WUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7U0FBQTtLQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3NzEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9jcmVhdGVMdWNpZGVJY29uLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9jcmVhdGVMdWNpZGVJY29uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMsIHRvS2ViYWJDYXNlLCB0b1Bhc2NhbENhc2UgfSBmcm9tICdAbHVjaWRlL3NoYXJlZCc7XG5pbXBvcnQgeyBJY29uTm9kZSwgTHVjaWRlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQ3JlYXRlIGEgTHVjaWRlIGljb24gY29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gaWNvbk5hbWVcbiAqIEBwYXJhbSB7YXJyYXl9IGljb25Ob2RlXG4gKiBAcmV0dXJucyB7Rm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudH0gTHVjaWRlSWNvblxuICovXG5jb25zdCBjcmVhdGVMdWNpZGVJY29uID0gKGljb25OYW1lOiBzdHJpbmcsIGljb25Ob2RlOiBJY29uTm9kZSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBmb3J3YXJkUmVmPFNWR1NWR0VsZW1lbnQsIEx1Y2lkZVByb3BzPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT5cbiAgICBjcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgIHJlZixcbiAgICAgIGljb25Ob2RlLFxuICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzZXMoXG4gICAgICAgIGBsdWNpZGUtJHt0b0tlYmFiQ2FzZSh0b1Bhc2NhbENhc2UoaWNvbk5hbWUpKX1gLFxuICAgICAgICBgbHVjaWRlLSR7aWNvbk5hbWV9YCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKSxcbiAgICAgIC4uLnByb3BzLFxuICAgIH0pLFxuICApO1xuXG4gIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IHRvUGFzY2FsQ2FzZShpY29uTmFtZSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUx1Y2lkZUljb247XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFtQixDQUFBLENBQUEsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFrQixRQUF1QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDakUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLG1LQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQXVDLFFBQTBCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBekIsQ0FBQSxDQUFFLENBQVcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVMsQ0FBQSxDQUFBO2lMQUNqRixnQkFBQSw0SkFBYyxVQUFNLENBQUEsQ0FBQTtZQUNsQixDQUFBLENBQUEsQ0FBQTtZQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLGtMQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUNULEFBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQW1DLENBQUEsc0xBQW5DLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsa0xBQVksQ0FBYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUMsQ0FBQyxHQUM3QyxRQUFVLEVBQVEsQ0FBQSxNQUFSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUNsQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFFRixDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDSixDQUFBOztJQUdPLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsbUxBQWMsZUFBQSxFQUFhLFFBQVEsQ0FBQTtJQUV0QyxPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODA0LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvZ2l0aHViLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy9naXRodWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCcsXG4gICAgICBrZXk6ICd0b25lZicsXG4gICAgfSxcbiAgXSxcbiAgWydwYXRoJywgeyBkOiAnTTkgMThjLTQuNTEgMi01LTItNy0yJywga2V5OiAnOWNvbXNuJyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBHaXRodWJcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk1UVWdNakoyTFRSaE5DNDRJRFF1T0NBd0lEQWdNQzB4TFRNdU5XTXpJREFnTmkweUlEWXROUzQxTGpBNExURXVNalV0TGpJM0xUSXVORGd0TVMwekxqVXVNamd0TVM0eE5TNHlPQzB5TGpNMUlEQXRNeTQxSURBZ01DMHhJREF0TXlBeExqVXRNaTQyTkMwdU5TMDFMak0yTFM0MUxUZ2dNRU0ySURJZ05TQXlJRFVnTW1NdExqTWdNUzR4TlMwdU15QXlMak0xSURBZ015NDFRVFV1TkRBeklEVXVOREF6SURBZ01DQXdJRFFnT1dNd0lETXVOU0F6SURVdU5TQTJJRFV1TlMwdU16a3VORGt0TGpZNElERXVNRFV0TGpnMUlERXVOalV0TGpFM0xqWXRMakl5SURFdU1qTXRMakUxSURFdU9EVjJOQ0lnTHo0S0lDQThjR0YwYUNCa1BTSk5PU0F4T0dNdE5DNDFNU0F5TFRVdE1pMDNMVElpSUM4K0Nqd3ZjM1puUGdvPSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvZ2l0aHViXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICogQGRlcHJlY2F0ZWQgQnJhbmQgaWNvbnMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgYW5kIGFyZSBkdWUgdG8gYmUgcmVtb3ZlZCwgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNpZGUtaWNvbnMvbHVjaWRlL2lzc3Vlcy82NzAuIFdlIHJlY29tbWVuZCB1c2luZyBodHRwczovL3NpbXBsZWljb25zLm9yZy8/cT1naXRodWIgaW5zdGVhZC4gVGhpcyBpY29uIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MS4wXG4gKi9cbmNvbnN0IEdpdGh1YiA9IGNyZWF0ZUx1Y2lkZUljb24oJ2dpdGh1YicsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0E7WUFDRSxDQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUNILEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7S0FFVDtJQUNBO1FBQUMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBLENBQUU7WUFBQSxFQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUF5QixDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBVSxDQUFBO0tBQUE7Q0FDeEQ7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQVMsQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQWlCLEFBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBVSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDg0NiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3R3aXR0ZXIuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL3R3aXR0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNMjIgNHMtLjcgMi4xLTIgMy40YzEuNiAxMC05LjQgMTcuMy0xOCAxMS42IDIuMi4xIDQuNC0uNiA2LTJDMyAxNS41LjUgOS42IDMgNWMyLjIgMi42IDUuNiA0LjEgOSA0LS45LTQuMiA0LTYuNiA3LTMuOCAxLjEgMCAzLTEuMiAzLTEuMnonLFxuICAgICAga2V5OiAncGZmMHo2JyxcbiAgICB9LFxuICBdLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIFR3aXR0ZXJcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk1qSWdOSE10TGpjZ01pNHhMVElnTXk0MFl6RXVOaUF4TUMwNUxqUWdNVGN1TXkweE9DQXhNUzQySURJdU1pNHhJRFF1TkMwdU5pQTJMVEpETXlBeE5TNDFMalVnT1M0MklETWdOV015TGpJZ01pNDJJRFV1TmlBMExqRWdPU0EwTFM0NUxUUXVNaUEwTFRZdU5pQTNMVE11T0NBeExqRWdNQ0F6TFRFdU1pQXpMVEV1TW5vaUlDOCtDand2YzNablBnbz0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL3R3aXR0ZXJcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKiBAZGVwcmVjYXRlZCBCcmFuZCBpY29ucyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgYXJlIGR1ZSB0byBiZSByZW1vdmVkLCBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL2x1Y2lkZS1pY29ucy9sdWNpZGUvaXNzdWVzLzY3MC4gV2UgcmVjb21tZW5kIHVzaW5nIGh0dHBzOi8vc2ltcGxlaWNvbnMub3JnLz9xPXR3aXR0ZXIgaW5zdGVhZC4gVGhpcyBpY29uIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MS4wXG4gKi9cbmNvbnN0IFR3aXR0ZXIgPSBjcmVhdGVMdWNpZGVJY29uKCd0d2l0dGVyJywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3aXR0ZXI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0E7WUFDRSxDQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBQ1A7Q0FFSjtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBVSxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVcsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4ODEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9saW5rZWRpbi5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvbGlua2VkaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnonLFxuICAgICAga2V5OiAnYzJqcTlmJyxcbiAgICB9LFxuICBdLFxuICBbJ3JlY3QnLCB7IHdpZHRoOiAnNCcsIGhlaWdodDogJzEyJywgeDogJzInLCB5OiAnOScsIGtleTogJ21rM29uNScgfV0sXG4gIFsnY2lyY2xlJywgeyBjeDogJzQnLCBjeTogJzQnLCByOiAnMicsIGtleTogJ2J0NXJhOCcgfV0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgTGlua2VkaW5cbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk1UWWdPR0UySURZZ01DQXdJREVnTmlBMmRqZG9MVFIyTFRkaE1pQXlJREFnTUNBd0xUSXRNaUF5SURJZ01DQXdJREF0TWlBeWRqZG9MVFIyTFRkaE5pQTJJREFnTUNBeElEWXRObm9pSUM4K0NpQWdQSEpsWTNRZ2QybGtkR2c5SWpRaUlHaGxhV2RvZEQwaU1USWlJSGc5SWpJaUlIazlJamtpSUM4K0NpQWdQR05wY21Oc1pTQmplRDBpTkNJZ1kzazlJalFpSUhJOUlqSWlJQzgrQ2p3dmMzWm5QZ289KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9saW5rZWRpblxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqIEBkZXByZWNhdGVkIEJyYW5kIGljb25zIGhhdmUgYmVlbiBkZXByZWNhdGVkIGFuZCBhcmUgZHVlIHRvIGJlIHJlbW92ZWQsIHBsZWFzZSByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vbHVjaWRlLWljb25zL2x1Y2lkZS9pc3N1ZXMvNjcwLiBXZSByZWNvbW1lbmQgdXNpbmcgaHR0cHM6Ly9zaW1wbGVpY29ucy5vcmcvP3E9bGlua2VkaW4gaW5zdGVhZC4gVGhpcyBpY29uIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MS4wXG4gKi9cbmNvbnN0IExpbmtlZGluID0gY3JlYXRlTHVjaWRlSWNvbignbGlua2VkaW4nLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkaW47XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0E7WUFDRSxDQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBRVQ7SUFDQTtRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBUSxDQUFFO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQU8sQ0FBSyxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFNLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBO1lBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUs7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7UUFBQSxDQUFVO0tBQUE7SUFDcEU7UUFBQyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO1lBQUUsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUs7WUFBQSxDQUFBLENBQUksRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUssQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBSyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQTtRQUFVLENBQUE7S0FBQTtDQUN4RDtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBVyxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBWSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDkzNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL21haWwuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL21haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbJ3BhdGgnLCB7IGQ6ICdtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDcnLCBrZXk6ICcxMzJxN3EnIH1dLFxuICBbJ3JlY3QnLCB7IHg6ICcyJywgeTogJzQnLCB3aWR0aDogJzIwJywgaGVpZ2h0OiAnMTYnLCByeDogJzInLCBrZXk6ICdpenhsYW8nIH1dLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIE1haWxcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKdE1qSWdOeTA0TGprNU1TQTFMamN5TjJFeUlESWdNQ0F3SURFdE1pNHdNRGtnTUV3eUlEY2lJQzgrQ2lBZ1BISmxZM1FnZUQwaU1pSWdlVDBpTkNJZ2QybGtkR2c5SWpJd0lpQm9aV2xuYUhROUlqRTJJaUJ5ZUQwaU1pSWdMejRLUEM5emRtYytDZz09KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9tYWlsXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgTWFpbCA9IGNyZWF0ZUx1Y2lkZUljb24oJ21haWwnLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQTtRQUFBLENBQUE7WUFBRSxHQUFHLENBQTJDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUN4RTtRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBUSxDQUFFO1lBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLEVBQUs7WUFBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU07WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQVUsQ0FBQTtLQUFBO0NBQ2hGO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFPLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDk4MSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3Bob25lLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy9waG9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFtcbiAgICAncGF0aCcsXG4gICAge1xuICAgICAgZDogJ00xMy44MzIgMTYuNTY4YTEgMSAwIDAgMCAxLjIxMy0uMzAzbC4zNTUtLjQ2NUEyIDIgMCAwIDEgMTcgMTVoM2EyIDIgMCAwIDEgMiAydjNhMiAyIDAgMCAxLTIgMkExOCAxOCAwIDAgMSAyIDRhMiAyIDAgMCAxIDItMmgzYTIgMiAwIDAgMSAyIDJ2M2EyIDIgMCAwIDEtLjggMS42bC0uNDY4LjM1MWExIDEgMCAwIDAtLjI5MiAxLjIzMyAxNCAxNCAwIDAgMCA2LjM5MiA2LjM4NCcsXG4gICAgICBrZXk6ICc5bmpwNXYnLFxuICAgIH0sXG4gIF0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgUGhvbmVcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk1UTXVPRE15SURFMkxqVTJPR0V4SURFZ01DQXdJREFnTVM0eU1UTXRMak13TTJ3dU16VTFMUzQwTmpWQk1pQXlJREFnTUNBeElERTNJREUxYUROaE1pQXlJREFnTUNBeElESWdNbll6WVRJZ01pQXdJREFnTVMweUlESkJNVGdnTVRnZ01DQXdJREVnTWlBMFlUSWdNaUF3SURBZ01TQXlMVEpvTTJFeUlESWdNQ0F3SURFZ01pQXlkak5oTWlBeUlEQWdNQ0F4TFM0NElERXVObXd0TGpRMk9DNHpOVEZoTVNBeElEQWdNQ0F3TFM0eU9USWdNUzR5TXpNZ01UUWdNVFFnTUNBd0lEQWdOaTR6T1RJZ05pNHpPRFFpSUM4K0Nqd3ZjM1puUGdvPSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvcGhvbmVcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKlxuICovXG5jb25zdCBQaG9uZSA9IGNyZWF0ZUx1Y2lkZUljb24oJ3Bob25lJywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBob25lO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNBO1lBQ0UsQ0FBRyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUNILEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQTtLQUNQO0NBRUo7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQVEsQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVMsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMDE2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbWFwLXBpbi5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvbWFwLXBpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFtcbiAgICAncGF0aCcsXG4gICAge1xuICAgICAgZDogJ00yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAnLFxuICAgICAga2V5OiAnMXIwZjB6JyxcbiAgICB9LFxuICBdLFxuICBbJ2NpcmNsZScsIHsgY3g6ICcxMicsIGN5OiAnMTAnLCByOiAnMycsIGtleTogJ2lscWhyNycgfV0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgTWFwUGluXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSk5NakFnTVRCak1DQTBMams1TXkwMUxqVXpPU0F4TUM0eE9UTXROeTR6T1RrZ01URXVOems1WVRFZ01TQXdJREFnTVMweExqSXdNaUF3UXprdU5UTTVJREl3TGpFNU15QTBJREUwTGprNU15QTBJREV3WVRnZ09DQXdJREFnTVNBeE5pQXdJaUF2UGdvZ0lEeGphWEpqYkdVZ1kzZzlJakV5SWlCamVUMGlNVEFpSUhJOUlqTWlJQzgrQ2p3dmMzWm5QZ289KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9tYXAtcGluXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgTWFwUGluID0gY3JlYXRlTHVjaWRlSWNvbignbWFwLXBpbicsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXBQaW47XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0E7WUFDRSxDQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFDSCxHQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7S0FFVDtJQUNBO1FBQUMsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQTtZQUFFLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFNO1lBQUEsQ0FBQSxDQUFJLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBSyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQTtRQUFVLENBQUE7S0FBQTtDQUMxRDtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBUyxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVcsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMDYwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvYXJyb3ctdXAuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL2Fycm93LXVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgWydwYXRoJywgeyBkOiAnbTUgMTIgNy03IDcgNycsIGtleTogJ2hhdjB2ZycgfV0sXG4gIFsncGF0aCcsIHsgZDogJ00xMiAxOVY1Jywga2V5OiAneDBtcTlyJyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBBcnJvd1VwXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSnROU0F4TWlBM0xUY2dOeUEzSWlBdlBnb2dJRHh3WVhSb0lHUTlJazB4TWlBeE9WWTFJaUF2UGdvOEwzTjJaejRLKSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9hcnJvdy11cFxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IEFycm93VXAgPSBjcmVhdGVMdWNpZGVJY29uKCdhcnJvdy11cCcsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd1VwO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBO1FBQUEsQ0FBQTtZQUFFLEdBQUcsQ0FBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7UUFBQSxDQUFVO0tBQUE7SUFDOUM7UUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUEsQ0FBRTtZQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFVLENBQUE7S0FBQTtDQUMzQztBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBVSxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBWSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDExMDIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9oZWFydC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvaGVhcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNMTkgMTRjMS40OS0xLjQ2IDMtMy4yMSAzLTUuNUE1LjUgNS41IDAgMCAwIDE2LjUgM2MtMS43NiAwLTMgLjUtNC41IDItMS41LTEuNS0yLjc0LTItNC41LTJBNS41IDUuNSAwIDAgMCAyIDguNWMwIDIuMyAxLjUgNC4wNSAzIDUuNWw3IDdaJyxcbiAgICAgIGtleTogJ2MzeW1reScsXG4gICAgfSxcbiAgXSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBIZWFydFxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTVRrZ01UUmpNUzQwT1MweExqUTJJRE10TXk0eU1TQXpMVFV1TlVFMUxqVWdOUzQxSURBZ01DQXdJREUyTGpVZ00yTXRNUzQzTmlBd0xUTWdMalV0TkM0MUlESXRNUzQxTFRFdU5TMHlMamMwTFRJdE5DNDFMVEpCTlM0MUlEVXVOU0F3SURBZ01DQXlJRGd1TldNd0lESXVNeUF4TGpVZ05DNHdOU0F6SURVdU5XdzNJRGRhSWlBdlBnbzhMM04yWno0SykgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvaGVhcnRcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKlxuICovXG5jb25zdCBIZWFydCA9IGNyZWF0ZUx1Y2lkZUljb24oJ2hlYXJ0JywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYXJ0O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNBO1lBQ0UsQ0FBRyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBQ1A7Q0FFSjtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBUSxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDExMzcsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9zcGFya2xlcy5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvc3BhcmtsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNOS45MzcgMTUuNUEyIDIgMCAwIDAgOC41IDE0LjA2M2wtNi4xMzUtMS41ODJhLjUuNSAwIDAgMSAwLS45NjJMOC41IDkuOTM2QTIgMiAwIDAgMCA5LjkzNyA4LjVsMS41ODItNi4xMzVhLjUuNSAwIDAgMSAuOTYzIDBMMTQuMDYzIDguNUEyIDIgMCAwIDAgMTUuNSA5LjkzN2w2LjEzNSAxLjU4MWEuNS41IDAgMCAxIDAgLjk2NEwxNS41IDE0LjA2M2EyIDIgMCAwIDAtMS40MzcgMS40MzdsLTEuNTgyIDYuMTM1YS41LjUgMCAwIDEtLjk2MyAweicsXG4gICAgICBrZXk6ICc0cGoyeXgnLFxuICAgIH0sXG4gIF0sXG4gIFsncGF0aCcsIHsgZDogJ00yMCAzdjQnLCBrZXk6ICcxb2xsaTEnIH1dLFxuICBbJ3BhdGgnLCB7IGQ6ICdNMjIgNWgtNCcsIGtleTogJzFndnFhdScgfV0sXG4gIFsncGF0aCcsIHsgZDogJ000IDE3djInLCBrZXk6ICd2dW1naHQnIH1dLFxuICBbJ3BhdGgnLCB7IGQ6ICdNNSAxOEgzJywga2V5OiAnemNocGhzJyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBTcGFya2xlc1xuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOT1M0NU16Y2dNVFV1TlVFeUlESWdNQ0F3SURBZ09DNDFJREUwTGpBMk0yd3ROaTR4TXpVdE1TNDFPREpoTGpVdU5TQXdJREFnTVNBd0xTNDVOakpNT0M0MUlEa3VPVE0yUVRJZ01pQXdJREFnTUNBNUxqa3pOeUE0TGpWc01TNDFPREl0Tmk0eE16VmhMalV1TlNBd0lEQWdNU0F1T1RZeklEQk1NVFF1TURZeklEZ3VOVUV5SURJZ01DQXdJREFnTVRVdU5TQTVMamt6TjJ3MkxqRXpOU0F4TGpVNE1XRXVOUzQxSURBZ01DQXhJREFnTGprMk5Fd3hOUzQxSURFMExqQTJNMkV5SURJZ01DQXdJREF0TVM0ME16Y2dNUzQwTXpkc0xURXVOVGd5SURZdU1UTTFZUzQxTGpVZ01DQXdJREV0TGprMk15QXdlaUlnTHo0S0lDQThjR0YwYUNCa1BTSk5NakFnTTNZMElpQXZQZ29nSUR4d1lYUm9JR1E5SWsweU1pQTFhQzAwSWlBdlBnb2dJRHh3WVhSb0lHUTlJazAwSURFM2RqSWlJQzgrQ2lBZ1BIQmhkR2dnWkQwaVRUVWdNVGhJTXlJZ0x6NEtQQzl6ZG1jK0NnPT0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL3NwYXJrbGVzXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgU3BhcmtsZXMgPSBjcmVhdGVMdWNpZGVJY29uKCdzcGFya2xlcycsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBTcGFya2xlcztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQ0UsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDQTtZQUNFLENBQUcsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBRVQ7SUFDQTtRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFXLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLO1FBQUEsQ0FBVTtLQUFBO0lBQ3hDO1FBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQTtRQUFBLENBQUE7WUFBRSxHQUFHLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUN6QztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFXLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLO1FBQUEsQ0FBVTtLQUFBO0lBQ3hDO1FBQUMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBLENBQUU7WUFBQSxFQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVcsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQVUsQ0FBQTtLQUFBO0NBQzFDO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxDQUFXLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFZLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fV0KfQ==
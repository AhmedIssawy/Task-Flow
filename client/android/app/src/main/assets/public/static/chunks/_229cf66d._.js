(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/useMobile.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMobile": ()=>useMobile
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useMobile = ()=>{
    _s();
    const [isMobilePlatform, setIsMobilePlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileScreen, setIsMobileScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobile.useEffect": ()=>{
            // Check if running on Capacitor (native mobile)
            setIsMobilePlatform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform());
            // Check screen size for mobile breakpoint
            const checkScreenSize = {
                "useMobile.useEffect.checkScreenSize": ()=>{
                    setIsMobileScreen(window.innerWidth < 768);
                }
            }["useMobile.useEffect.checkScreenSize"];
            // Initial check
            checkScreenSize();
            setIsLoaded(true);
            // Listen for resize events
            window.addEventListener('resize', checkScreenSize);
            return ({
                "useMobile.useEffect": ()=>{
                    window.removeEventListener('resize', checkScreenSize);
                }
            })["useMobile.useEffect"];
        }
    }["useMobile.useEffect"], []);
    return {
        isMobilePlatform,
        isMobileScreen,
        isMobile: isMobilePlatform || isMobileScreen,
        isLoaded,
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform()
    };
};
_s(useMobile, "yYkx09mvm3zAtliczUiGkjOrc8M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/landing/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const HeroSection = ()=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Landing.Hero');
    const { isMobile, isMobilePlatform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleStartTrialClick = ()=>{
        router.push('/auth/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative ".concat(isMobile ? 'min-h-[90vh]' : 'min-h-screen', " flex items-center justify-center overflow-hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-pattern opacity-[0.02]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-32 right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float",
                        style: {
                            animationDelay: '1s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float",
                        style: {
                            animationDelay: '2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/HeroSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8 text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 ".concat(isMobile ? 'px-4' : ''),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "".concat(isMobile ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl', " font-bold font-primary leading-[0.9]"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground",
                                                    children: t('title')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient block mt-2",
                                                    children: t('subtitle')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "".concat(isMobile ? 'text-lg' : 'text-xl sm:text-2xl', " text-muted-foreground max-w-2xl leading-relaxed"),
                                            children: t('description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col ".concat(isMobile ? 'gap-4' : 'sm:flex-row gap-6', " items-center pt-4 ").concat(isMobile ? 'px-4' : ''),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleStartTrialClick,
                                            className: "group relative bg-primary text-primary-foreground ".concat(isMobile ? 'w-full px-8 py-4 text-base' : 'px-10 py-5 text-lg', " rounded-2xl hover:opacity-90 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center font-semibold overflow-hidden ").concat(isMobilePlatform ? 'mobile-touch-target' : ''),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10",
                                                    children: t('cta.primary')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: isMobile ? 20 : 24,
                                                    className: "ml-3 rtl:ml-0 rtl:mr-3 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform relative z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "group flex items-center ".concat(isMobile ? 'w-full justify-center px-6 py-4 text-base' : 'px-8 py-5 text-lg', " text-muted-foreground hover:text-primary transition-all font-semibold hover-lift ").concat(isMobilePlatform ? 'mobile-touch-target' : ''),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "".concat(isMobile ? 'w-10 h-10' : 'w-12 h-12', " bg-primary/10 rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-primary/20 transition-colors"),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: isMobile ? 16 : 20,
                                                        className: "ml-1 group-hover:scale-110 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                t('cta.secondary')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto lg:mx-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center lg:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl font-bold text-primary font-primary",
                                                    children: t('stats.teams').split(' ')[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: t('stats.teams').split(' ').slice(1).join(' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center lg:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl font-bold text-primary font-primary",
                                                    children: t('stats.rating')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: t('stats.text')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center lg:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl font-bold text-primary font-primary",
                                                    children: t('stats.countries').split(' ')[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: t('stats.countries').split(' ').slice(1).join(' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative ".concat(isMobile ? 'mt-8 px-4' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative glass-effect rounded-3xl ".concat(isMobile ? 'p-6' : 'p-8', " shadow-3xl border border-white/20"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 bg-red-400 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 bg-yellow-400 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 bg-green-400 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Live Dashboard"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-foreground font-medium",
                                                                            children: "Project Alpha"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                            lineNumber: 105,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-primary font-semibold",
                                                                            children: "87%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                            lineNumber: 106,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full bg-muted/30 rounded-full h-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full animate-pulse-glow",
                                                                        style: {
                                                                            width: '87%'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-foreground font-medium",
                                                                            children: "Team Performance"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-primary font-semibold",
                                                                            children: "92%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full bg-muted/30 rounded-full h-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-gradient-to-r from-accent to-accent/80 h-3 rounded-full",
                                                                        style: {
                                                                            width: '92%'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-primary/5 rounded-2xl p-4 text-center hover-lift",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold text-primary font-primary",
                                                                    children: "247"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Active Tasks"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-accent/5 rounded-2xl p-4 text-center hover-lift",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold text-accent font-primary",
                                                                    children: "8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Team Members"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 p-3 bg-muted/20 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                    size: 14,
                                                                    className: "text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-medium text-foreground",
                                                                        children: "Task completed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground",
                                                                        children: "2 minutes ago"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/20 animate-float",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-600 text-xs font-bold",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: "Goal Achieved!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "95% completion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/20 animate-float",
                                    style: {
                                        animationDelay: '1.5s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600 text-xs font-bold",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: "New Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Sarah joined"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/landing/HeroSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing/HeroSection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSection, "PxReLvn1FR05MUE28+YJpTxvyv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/landing/HeroSection.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/landing/HeroSection.tsx [app-client] (ecmascript)"));
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
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ArrowRight
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ArrowRight": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Play
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "polygon",
        {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Play": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Zap
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Zap": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
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
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VNb2JpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FwYWNpdG9yIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBIb29rIHRvIGRldGVjdCBtb2JpbGUgcGxhdGZvcm0gYW5kIHNjcmVlbiBzaXplXHJcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIG1vYmlsZSBkZXRlY3Rpb24gc3RhdGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vYmlsZVBsYXRmb3JtLCBzZXRJc01vYmlsZVBsYXRmb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGVTY3JlZW4sIHNldElzTW9iaWxlU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgb24gQ2FwYWNpdG9yIChuYXRpdmUgbW9iaWxlKVxyXG4gICAgc2V0SXNNb2JpbGVQbGF0Zm9ybShDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcclxuXHJcbiAgICAvLyBDaGVjayBzY3JlZW4gc2l6ZSBmb3IgbW9iaWxlIGJyZWFrcG9pbnRcclxuICAgIGNvbnN0IGNoZWNrU2NyZWVuU2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2JpbGVTY3JlZW4od2luZG93LmlubmVyV2lkdGggPCA3NjgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsIGNoZWNrXHJcbiAgICBjaGVja1NjcmVlblNpemUoKTtcclxuICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgcmVzaXplIGV2ZW50c1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTW9iaWxlUGxhdGZvcm0sXHJcbiAgICBpc01vYmlsZVNjcmVlbixcclxuICAgIGlzTW9iaWxlOiBpc01vYmlsZVBsYXRmb3JtIHx8IGlzTW9iaWxlU2NyZWVuLFxyXG4gICAgaXNMb2FkZWQsXHJcbiAgICBwbGF0Zm9ybTogQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCksXHJcbiAgfTtcclxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7QUFDQTs7QUFIQTs7O0FBU08sTUFBTSxZQUFZOztJQUN2QixNQUFNLENBQUMsa0JBQWtCLG9CQUFvQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ3pELE1BQU0sQ0FBQyxnQkFBZ0Isa0JBQWtCLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDckQsTUFBTSxDQUFDLFVBQVUsWUFBWSxHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBRXpDLENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDsrQkFBRTtZQUNSLGdEQUFnRDtZQUNoRCxvQkFBb0IsdUpBQUEsQ0FBQSxZQUFTLENBQUMsZ0JBQWdCO1lBRTlDLDBDQUEwQztZQUMxQyxNQUFNO3VEQUFrQjtvQkFDdEIsa0JBQWtCLE9BQU8sVUFBVSxHQUFHO2dCQUN4Qzs7WUFFQSxnQkFBZ0I7WUFDaEI7WUFDQSxZQUFZO1lBRVosMkJBQTJCO1lBQzNCLE9BQU8sZ0JBQWdCLENBQUMsVUFBVTtZQUVsQzt1Q0FBTztvQkFDTCxPQUFPLG1CQUFtQixDQUFDLFVBQVU7Z0JBQ3ZDOztRQUNGOzhCQUFHLEVBQUU7SUFFTCxPQUFPO1FBQ0w7UUFDQTtRQUNBLFVBQVUsb0JBQW9CO1FBQzlCO1FBQ0EsVUFBVSx1SkFBQSxDQUFBLFlBQVMsQ0FBQyxXQUFXO0lBQ2pDO0FBQ0Y7R0FqQ2EiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDYxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFycm93UmlnaHQsIFBsYXksIFphcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcbmltcG9ydCB7IHVzZU1vYmlsZSB9IGZyb20gJ0AvaG9va3MvdXNlTW9iaWxlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ0xhbmRpbmcuSGVybycpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUsIGlzTW9iaWxlUGxhdGZvcm0gfSA9IHVzZU1vYmlsZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGFydFRyaWFsQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtpc01vYmlsZSA/ICdtaW4taC1bOTB2aF0nIDogJ21pbi1oLXNjcmVlbid9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbmB9PlxyXG4gICAgICB7LyogRHluYW1pYyBCYWNrZ3JvdW5kIHdpdGggR2xhc3Ntb3JwaGlzbSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeS81IHZpYS1iYWNrZ3JvdW5kIHRvLWFjY2VudC81XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyaWQtcGF0dGVybiBvcGFjaXR5LVswLjAyXVwiPjwvZGl2PlxyXG5cclxuICAgICAgICB7LyogRmxvYXRpbmcgRWxlbWVudHMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgbGVmdC0xMCB3LTMyIGgtMzIgYmctcHJpbWFyeS8xMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgYW5pbWF0ZS1mbG9hdFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMyIHJpZ2h0LTE2IHctNDggaC00OCBiZy1hY2NlbnQvMTAgcm91bmRlZC1mdWxsIGJsdXItM3hsIGFuaW1hdGUtZmxvYXRcIiBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzQgdy0yNCBoLTI0IGJnLXNlY29uZGFyeS8xMCByb3VuZGVkLWZ1bGwgYmx1ci0yeGwgYW5pbWF0ZS1mbG9hdFwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMnMnIH19PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtMTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7LyogTGVmdCBDb2x1bW4gLSBDb250ZW50ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTggdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgey8qIE1haW4gSGVhZGluZyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzcGFjZS15LTYgJHtpc01vYmlsZSA/ICdweC00JyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2lzTW9iaWxlID8gJ3RleHQtNHhsIHNtOnRleHQtNXhsJyA6ICd0ZXh0LTV4bCBzbTp0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBsZzp0ZXh0LTh4bCd9IGZvbnQtYm9sZCBmb250LXByaW1hcnkgbGVhZGluZy1bMC45XWB9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kXCI+e3QoJ3RpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudCBibG9jayBtdC0yXCI+e3QoJ3N1YnRpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtpc01vYmlsZSA/ICd0ZXh0LWxnJyA6ICd0ZXh0LXhsIHNtOnRleHQtMnhsJ30gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1heC13LTJ4bCBsZWFkaW5nLXJlbGF4ZWRgfT5cclxuICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbicpfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ1RBIEJ1dHRvbnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAke2lzTW9iaWxlID8gJ2dhcC00JyA6ICdzbTpmbGV4LXJvdyBnYXAtNid9IGl0ZW1zLWNlbnRlciBwdC00ICR7aXNNb2JpbGUgPyAncHgtNCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhcnRUcmlhbENsaWNrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCAke2lzTW9iaWxlID8gJ3ctZnVsbCBweC04IHB5LTQgdGV4dC1iYXNlJyA6ICdweC0xMCBweS01IHRleHQtbGcnfSByb3VuZGVkLTJ4bCBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tYWxsIHNoYWRvdy0yeGwgaG92ZXI6c2hhZG93LTN4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkIG92ZXJmbG93LWhpZGRlbiAke2lzTW9iaWxlUGxhdGZvcm0gPyAnbW9iaWxlLXRvdWNoLXRhcmdldCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1wcmltYXJ5LzgwIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj57dCgnY3RhLnByaW1hcnknKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBzaXplPXtpc01vYmlsZSA/IDIwIDogMjR9IGNsYXNzTmFtZT1cIm1sLTMgcnRsOm1sLTAgcnRsOm1yLTMgcnRsOnJvdGF0ZS0xODAgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSBydGw6Z3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvbi10cmFuc2Zvcm0gcmVsYXRpdmUgei0xMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgJHtpc01vYmlsZSA/ICd3LWZ1bGwganVzdGlmeS1jZW50ZXIgcHgtNiBweS00IHRleHQtYmFzZScgOiAncHgtOCBweS01IHRleHQtbGcnfSB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tYWxsIGZvbnQtc2VtaWJvbGQgaG92ZXItbGlmdCAke2lzTW9iaWxlUGxhdGZvcm0gPyAnbW9iaWxlLXRvdWNoLXRhcmdldCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc01vYmlsZSA/ICd3LTEwIGgtMTAnIDogJ3ctMTIgaC0xMid9IGJnLXByaW1hcnkvMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTQgcnRsOm1yLTAgcnRsOm1sLTQgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCB0cmFuc2l0aW9uLWNvbG9yc2B9PlxyXG4gICAgICAgICAgICAgICAgICA8UGxheSBzaXplPXtpc01vYmlsZSA/IDE2IDogMjB9IGNsYXNzTmFtZT1cIm1sLTEgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3QoJ2N0YS5zZWNvbmRhcnknKX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3RhdHMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtOCBwdC0xMiBtYXgtdy1sZyBteC1hdXRvIGxnOm14LTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1wcmltYXJ5IGZvbnQtcHJpbWFyeVwiPnt0KCdzdGF0cy50ZWFtcycpLnNwbGl0KCcgJylbMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+e3QoJ3N0YXRzLnRlYW1zJykuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtcHJpbWFyeSBmb250LXByaW1hcnlcIj57dCgnc3RhdHMucmF0aW5nJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+e3QoJ3N0YXRzLnRleHQnKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1wcmltYXJ5IGZvbnQtcHJpbWFyeVwiPnt0KCdzdGF0cy5jb3VudHJpZXMnKS5zcGxpdCgnICcpWzBdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiPnt0KCdzdGF0cy5jb3VudHJpZXMnKS5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogUmlnaHQgQ29sdW1uIC0gVmlzdWFsICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2lzTW9iaWxlID8gJ210LTggcHgtNCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgey8qIE1haW4gR2xhc3MgQ2FyZCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBnbGFzcy1lZmZlY3Qgcm91bmRlZC0zeGwgJHtpc01vYmlsZSA/ICdwLTYnIDogJ3AtOCd9IHNoYWRvdy0zeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yMGB9PlxyXG4gICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMyBoLTMgYmctcmVkLTQwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMgaC0zIGJnLXllbGxvdy00MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyBiZy1ncmVlbi00MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLWdyZWVuLTQwMCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1wdWxzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBMaXZlIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBEYXNoYm9hcmQgQ29udGVudCAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFByb2dyZXNzIEJhcnMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmQgZm9udC1tZWRpdW1cIj5Qcm9qZWN0IEFscGhhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj44NyU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctbXV0ZWQvMzAgcm91bmRlZC1mdWxsIGgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1wcmltYXJ5LzgwIGgtMyByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1wdWxzZS1nbG93XCIgc3R5bGU9e3sgd2lkdGg6ICc4NyUnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bVwiPlRlYW0gUGVyZm9ybWFuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiPjkyJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1tdXRlZC8zMCByb3VuZGVkLWZ1bGwgaC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1hY2NlbnQgdG8tYWNjZW50LzgwIGgtMyByb3VuZGVkLWZ1bGxcIiBzdHlsZT17eyB3aWR0aDogJzkyJScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0YXRzIEdyaWQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LzUgcm91bmRlZC0yeGwgcC00IHRleHQtY2VudGVyIGhvdmVyLWxpZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgZm9udC1wcmltYXJ5XCI+MjQ3PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkFjdGl2ZSBUYXNrczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hY2NlbnQvNSByb3VuZGVkLTJ4bCBwLTQgdGV4dC1jZW50ZXIgaG92ZXItbGlmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYWNjZW50IGZvbnQtcHJpbWFyeVwiPjg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VGVhbSBNZW1iZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEFjdGl2aXR5IEZlZWQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHAtMyBiZy1tdXRlZC8yMCByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IGJnLXByaW1hcnkvMjAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8WmFwIHNpemU9ezE0fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kXCI+VGFzayBjb21wbGV0ZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj4yIG1pbnV0ZXMgYWdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEZsb2F0aW5nIENhcmRzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNiAtcmlnaHQtNiBnbGFzcy1lZmZlY3Qgcm91bmRlZC0yeGwgcC00IHNoYWRvdy14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIGFuaW1hdGUtZmxvYXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggYmctZ3JlZW4tNDAwLzIwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCB0ZXh0LXhzIGZvbnQtYm9sZFwiPuKckzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZFwiPkdvYWwgQWNoaWV2ZWQhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj45NSUgY29tcGxldGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTYgLWxlZnQtNiBnbGFzcy1lZmZlY3Qgcm91bmRlZC0yeGwgcC00IHNoYWRvdy14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIGFuaW1hdGUtZmxvYXRcIiBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzEuNXMnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCBiZy1ibHVlLTQwMC8yMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB0ZXh0LXhzIGZvbnQtYm9sZFwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIj5OZXcgTWVtYmVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5TYXJhaCBqb2luZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBOzs7OztBQU9BLE1BQU0sY0FBYzs7SUFDbEIsTUFBTSxJQUFJLENBQUEsR0FBQSx5TUFBQSxDQUFBLGtCQUFlLEFBQUQsRUFBRTtJQUMxQixNQUFNLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQSxHQUFBLDRIQUFBLENBQUEsWUFBUyxBQUFEO0lBQy9DLE1BQU0sU0FBUyxDQUFBLEdBQUEscUlBQUEsQ0FBQSxZQUFTLEFBQUQ7SUFFdkIsTUFBTSx3QkFBd0I7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDZMQUFDO1FBQVEsV0FBVyxBQUFDLFlBQXNELE9BQTNDLFdBQVcsaUJBQWlCLGdCQUFlOzswQkFFekUsNkxBQUM7Z0JBQUksV0FBVTs7a0NBQ2IsNkxBQUM7d0JBQUksV0FBVTs7Ozs7O2tDQUNmLDZMQUFDO3dCQUFJLFdBQVU7Ozs7OztrQ0FHZiw2TEFBQzt3QkFBSSxXQUFVOzs7Ozs7a0NBQ2YsNkxBQUM7d0JBQUksV0FBVTt3QkFBeUYsT0FBTzs0QkFBRSxnQkFBZ0I7d0JBQUs7Ozs7OztrQ0FDdEksNkxBQUM7d0JBQUksV0FBVTt3QkFBMEYsT0FBTzs0QkFBRSxnQkFBZ0I7d0JBQUs7Ozs7Ozs7Ozs7OzswQkFHekksNkxBQUM7Z0JBQUksV0FBVTswQkFDYixjQUFBLDZMQUFDO29CQUFJLFdBQVU7O3NDQUViLDZMQUFDOzRCQUFJLFdBQVU7OzhDQUliLDZMQUFDO29DQUFJLFdBQVcsQUFBQyxhQUFtQyxPQUF2QixXQUFXLFNBQVM7O3NEQUMvQyw2TEFBQzs0Q0FBRyxXQUFXLEFBQUMsR0FBcUYsT0FBbkYsV0FBVyx5QkFBeUIsZ0RBQStDOzs4REFDbkcsNkxBQUM7b0RBQUssV0FBVTs4REFBbUIsRUFBRTs7Ozs7OzhEQUNyQyw2TEFBQztvREFBSyxXQUFVOzhEQUE0QixFQUFFOzs7Ozs7Ozs7Ozs7c0RBRWhELDZMQUFDOzRDQUFFLFdBQVcsQUFBQyxHQUErQyxPQUE3QyxXQUFXLFlBQVksdUJBQXNCO3NEQUMzRCxFQUFFOzs7Ozs7Ozs7Ozs7OENBS1AsNkxBQUM7b0NBQUksV0FBVyxBQUFDLGlCQUE4RSxPQUE5RCxXQUFXLFVBQVUscUJBQW9CLHVCQUE0QyxPQUF2QixXQUFXLFNBQVM7O3NEQUNqSCw2TEFBQzs0Q0FDQyxTQUFTOzRDQUNULFdBQVcsQUFBQyxxREFBNlAsT0FBek0sV0FBVywrQkFBK0Isc0JBQXFCLDRJQUF3TCxPQUE5QyxtQkFBbUIsd0JBQXdCOzs4REFDcFQsNkxBQUM7b0RBQUksV0FBVTs7Ozs7OzhEQUNmLDZMQUFDO29EQUFLLFdBQVU7OERBQWlCLEVBQUU7Ozs7Ozs4REFDbkMsNkxBQUMscU5BQUEsQ0FBQSxhQUFVO29EQUFDLE1BQU0sV0FBVyxLQUFLO29EQUFJLFdBQVU7Ozs7Ozs7Ozs7OztzREFHbEQsNkxBQUM7NENBQU8sV0FBVyxBQUFDLDJCQUEyTCxPQUFqSyxXQUFXLDhDQUE4QyxxQkFBb0Isc0ZBQWtJLE9BQTlDLG1CQUFtQix3QkFBd0I7OzhEQUN4UCw2TEFBQztvREFBSSxXQUFXLEFBQUMsR0FBdUMsT0FBckMsV0FBVyxjQUFjLGFBQVk7OERBQ3RELGNBQUEsNkxBQUMscU1BQUEsQ0FBQSxPQUFJO3dEQUFDLE1BQU0sV0FBVyxLQUFLO3dEQUFJLFdBQVU7Ozs7Ozs7Ozs7O2dEQUUzQyxFQUFFOzs7Ozs7Ozs7Ozs7OzhDQUtQLDZMQUFDO29DQUFJLFdBQVU7O3NEQUNiLDZMQUFDOzRDQUFJLFdBQVU7OzhEQUNiLDZMQUFDO29EQUFJLFdBQVU7OERBQWdELEVBQUUsZUFBZSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs4REFDN0YsNkxBQUM7b0RBQUksV0FBVTs4REFBaUMsRUFBRSxlQUFlLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O3NEQUU1Riw2TEFBQzs0Q0FBSSxXQUFVOzs4REFDYiw2TEFBQztvREFBSSxXQUFVOzhEQUFnRCxFQUFFOzs7Ozs7OERBQ2pFLDZMQUFDO29EQUFJLFdBQVU7OERBQWlDLEVBQUU7Ozs7Ozs7Ozs7OztzREFFcEQsNkxBQUM7NENBQUksV0FBVTs7OERBQ2IsNkxBQUM7b0RBQUksV0FBVTs4REFBZ0QsRUFBRSxtQkFBbUIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7OERBQ2pHLDZMQUFDO29EQUFJLFdBQVU7OERBQWlDLEVBQUUsbUJBQW1CLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU1wRyw2TEFBQzs0QkFBSSxXQUFXLEFBQUMsWUFBdUMsT0FBNUIsV0FBVyxjQUFjOzs4Q0FFbkQsNkxBQUM7b0NBQUksV0FBVyxBQUFDLHFDQUE2RCxPQUF6QixXQUFXLFFBQVEsT0FBTTs7c0RBRTVFLDZMQUFDOzRDQUFJLFdBQVU7OzhEQUNiLDZMQUFDO29EQUFJLFdBQVU7O3NFQUNiLDZMQUFDOzREQUFJLFdBQVU7Ozs7OztzRUFDZiw2TEFBQzs0REFBSSxXQUFVOzs7Ozs7c0VBQ2YsNkxBQUM7NERBQUksV0FBVTs7Ozs7Ozs7Ozs7OzhEQUVqQiw2TEFBQztvREFBSSxXQUFVOztzRUFDYiw2TEFBQzs0REFBSSxXQUFVOzs7Ozs7d0RBQXdEOzs7Ozs7Ozs7Ozs7O3NEQU0zRSw2TEFBQzs0Q0FBSSxXQUFVOzs4REFFYiw2TEFBQztvREFBSSxXQUFVOztzRUFDYiw2TEFBQzs7OEVBQ0MsNkxBQUM7b0VBQUksV0FBVTs7c0ZBQ2IsNkxBQUM7NEVBQUssV0FBVTtzRkFBOEI7Ozs7OztzRkFDOUMsNkxBQUM7NEVBQUssV0FBVTtzRkFBNkI7Ozs7Ozs7Ozs7Ozs4RUFFL0MsNkxBQUM7b0VBQUksV0FBVTs4RUFDYixjQUFBLDZMQUFDO3dFQUFJLFdBQVU7d0VBQWtGLE9BQU87NEVBQUUsT0FBTzt3RUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBSTNILDZMQUFDOzs4RUFDQyw2TEFBQztvRUFBSSxXQUFVOztzRkFDYiw2TEFBQzs0RUFBSyxXQUFVO3NGQUE4Qjs7Ozs7O3NGQUM5Qyw2TEFBQzs0RUFBSyxXQUFVO3NGQUE2Qjs7Ozs7Ozs7Ozs7OzhFQUUvQyw2TEFBQztvRUFBSSxXQUFVOzhFQUNiLGNBQUEsNkxBQUM7d0VBQUksV0FBVTt3RUFBNkQsT0FBTzs0RUFBRSxPQUFPO3dFQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFNeEcsNkxBQUM7b0RBQUksV0FBVTs7c0VBQ2IsNkxBQUM7NERBQUksV0FBVTs7OEVBQ2IsNkxBQUM7b0VBQUksV0FBVTs4RUFBK0M7Ozs7Ozs4RUFDOUQsNkxBQUM7b0VBQUksV0FBVTs4RUFBZ0M7Ozs7Ozs7Ozs7OztzRUFFakQsNkxBQUM7NERBQUksV0FBVTs7OEVBQ2IsNkxBQUM7b0VBQUksV0FBVTs4RUFBOEM7Ozs7Ozs4RUFDN0QsNkxBQUM7b0VBQUksV0FBVTs4RUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFLbkQsNkxBQUM7b0RBQUksV0FBVTs4REFDYixjQUFBLDZMQUFDO3dEQUFJLFdBQVU7OzBFQUNiLDZMQUFDO2dFQUFJLFdBQVU7MEVBQ2IsY0FBQSw2TEFBQyxtTUFBQSxDQUFBLE1BQUc7b0VBQUMsTUFBTTtvRUFBSSxXQUFVOzs7Ozs7Ozs7OzswRUFFM0IsNkxBQUM7Z0VBQUksV0FBVTs7a0ZBQ2IsNkxBQUM7d0VBQUksV0FBVTtrRkFBc0M7Ozs7OztrRkFDckQsNkxBQUM7d0VBQUksV0FBVTtrRkFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQVF6RCw2TEFBQztvQ0FBSSxXQUFVOzhDQUNiLGNBQUEsNkxBQUM7d0NBQUksV0FBVTs7MERBQ2IsNkxBQUM7Z0RBQUksV0FBVTswREFDYixjQUFBLDZMQUFDO29EQUFLLFdBQVU7OERBQW1DOzs7Ozs7Ozs7OzswREFFckQsNkxBQUM7O2tFQUNDLDZMQUFDO3dEQUFJLFdBQVU7a0VBQXNDOzs7Ozs7a0VBQ3JELDZMQUFDO3dEQUFJLFdBQVU7a0VBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLckQsNkxBQUM7b0NBQUksV0FBVTtvQ0FBeUcsT0FBTzt3Q0FBRSxnQkFBZ0I7b0NBQU87OENBQ3RKLGNBQUEsNkxBQUM7d0NBQUksV0FBVTs7MERBQ2IsNkxBQUM7Z0RBQUksV0FBVTswREFDYixjQUFBLDZMQUFDO29EQUFLLFdBQVU7OERBQWtDOzs7Ozs7Ozs7OzswREFFcEQsNkxBQUM7O2tFQUNDLDZMQUFDO3dEQUFJLFdBQVU7a0VBQXNDOzs7Ozs7a0VBQ3JELDZMQUFDO3dEQUFJLFdBQVU7a0VBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pFO0dBNUtNOztRQUNNLHlNQUFBLENBQUEsa0JBQWU7UUFDYyw0SEFBQSxDQUFBLFlBQVM7UUFDakMscUlBQUEsQ0FBQSxZQUFTOzs7S0FIcEI7dUNBOEtTIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4MDYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9zaGFyZWQvc3JjL3V0aWxzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvc2hhcmVkL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lbFRvUGFzY2FsIH0gZnJvbSAnLi91dGlsaXR5LXR5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmcgdG8ga2ViYWIgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEga2ViYWJpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9LZWJhYkNhc2UgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG4gIHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyB0byBjYW1lbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gQSBjYW1lbGl6ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCB0b0NhbWVsQ2FzZSA9IDxUIGV4dGVuZHMgc3RyaW5nPihzdHJpbmc6IFQpID0+XG4gIHN0cmluZy5yZXBsYWNlKC9eKFtBLVpdKXxbXFxzLV9dKyhcXHcpL2csIChtYXRjaCwgcDEsIHAyKSA9PlxuICAgIHAyID8gcDIudG9VcHBlckNhc2UoKSA6IHAxLnRvTG93ZXJDYXNlKCksXG4gICk7XG5cbi8qKlxuICogQ29udmVydHMgc3RyaW5nIHRvIHBhc2NhbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gQSBwYXNjYWxpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9QYXNjYWxDYXNlID0gPFQgZXh0ZW5kcyBzdHJpbmc+KHN0cmluZzogVCk6IENhbWVsVG9QYXNjYWw8VD4gPT4ge1xuICBjb25zdCBjYW1lbENhc2UgPSB0b0NhbWVsQ2FzZShzdHJpbmcpO1xuXG4gIHJldHVybiAoY2FtZWxDYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxDYXNlLnNsaWNlKDEpKSBhcyBDYW1lbFRvUGFzY2FsPFQ+O1xufTtcblxuLyoqXG4gKiBNZXJnZXMgY2xhc3NlcyBpbnRvIGEgc2luZ2xlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNsYXNzZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIG9mIGNsYXNzZXNcbiAqL1xuZXhwb3J0IGNvbnN0IG1lcmdlQ2xhc3NlcyA9IDxDbGFzc1R5cGUgPSBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPiguLi5jbGFzc2VzOiBDbGFzc1R5cGVbXSkgPT5cbiAgY2xhc3Nlc1xuICAgIC5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBCb29sZWFuKGNsYXNzTmFtZSkgJiZcbiAgICAgICAgKGNsYXNzTmFtZSBhcyBzdHJpbmcpLnRyaW0oKSAhPT0gJycgJiZcbiAgICAgICAgYXJyYXkuaW5kZXhPZihjbGFzc05hbWUpID09PSBpbmRleFxuICAgICAgKTtcbiAgICB9KVxuICAgIC5qb2luKCcgJylcbiAgICAudHJpbSgpO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29tcG9uZW50IGhhcyBhbiBhY2Nlc3NpYmlsaXR5IHByb3BcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIGFuIGFjY2Vzc2liaWxpdHkgcHJvcFxuICovXG5leHBvcnQgY29uc3QgaGFzQTExeVByb3AgPSAocHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnYXJpYS0nKSB8fCBwcm9wID09PSAncm9sZScgfHwgcHJvcCA9PT0gJ3RpdGxlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBYyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUMxQixHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sT0FBQSxDQUFRLENBQXNCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBRSxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBUS9DLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBYyxDQUFBLENBQUEsQ0FBbUIsTUFBQSxDQUM1QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQXlCLENBQUMsT0FBTyxDQUFJLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FDbEQsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZ0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFTOUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWUsQ0FBbUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWdDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUN2RSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLFlBQVksTUFBTSxDQUFBO0lBRTVCLE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVSxNQUFBLENBQU8sQ0FBQyxDQUFBLENBQUUsV0FBQSxFQUFnQixHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsS0FBQSxDQUFNLENBQUMsQ0FBQTtBQUMvRCxDQUFBO0FBUWEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsWUFBQSxDQUFlLENBQUEsQ0FBQSxFQUEyQyxDQUFBOztRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQ3JFOztXQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDRyxNQUFBLENBQU8sQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVcsT0FBTyxLQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUVqQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUyxDQUFBLENBQ2hCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFxQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFXLENBQ2pDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBLENBQVMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFFakMsQ0FBQyxDQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FDUixDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFRRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQStCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUN6RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLFFBQVEsS0FBTyxDQUFBO1FBQ3hCLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLENBQUEsQ0FBTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFVLFNBQVMsT0FBUyxDQUFBLENBQUE7WUFDNUQsT0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7SUFDVDtBQUVKLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDg0NSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2RlZmF1bHRBdHRyaWJ1dGVzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9kZWZhdWx0QXR0cmlidXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuICBmaWxsOiAnbm9uZScsXG4gIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gIHN0cm9rZVdpZHRoOiAyLFxuICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxDQUFlLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNiLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sRUFBQSxDQUFBLENBQUE7SUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQTtJQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDVCxDQUFBLENBQUEsQ0FBQSxDQUFNLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDTixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBYSxFQUFBLENBQUE7SUFDYixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFlLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNmLGNBQWdCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNsQixDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4NzAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9JY29uLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9JY29uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJY29uTm9kZSwgTHVjaWRlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgaGFzQTExeVByb3AgfSBmcm9tICdAbHVjaWRlL3NoYXJlZCc7XG5cbmludGVyZmFjZSBJY29uQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBMdWNpZGVQcm9wcyB7XG4gIGljb25Ob2RlOiBJY29uTm9kZTtcbn1cblxuLyoqXG4gKiBMdWNpZGUgaWNvbiBjb21wb25lbnRcbiAqXG4gKiBAY29tcG9uZW50IEljb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuc3Ryb2tlV2lkdGggLSBUaGUgc3Ryb2tlIHdpZHRoIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByb3BzLmFic29sdXRlU3Ryb2tlV2lkdGggLSBXaGV0aGVyIHRvIHVzZSBhYnNvbHV0ZSBzdHJva2Ugd2lkdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtJY29uTm9kZX0gcHJvcHMuY2hpbGRyZW4gLSBUaGUgY2hpbGRyZW4gb2YgdGhlIGljb25cbiAqIEBwYXJhbSB7SWNvbk5vZGV9IHByb3BzLmljb25Ob2RlIC0gVGhlIGljb24gbm9kZSBvZiB0aGUgaWNvblxuICpcbiAqIEByZXR1cm5zIHtGb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50fSBMdWNpZGVJY29uXG4gKi9cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmPFNWR1NWR0VsZW1lbnQsIEljb25Db21wb25lbnRQcm9wcz4oXG4gIChcbiAgICB7XG4gICAgICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICAgICAgc2l6ZSA9IDI0LFxuICAgICAgc3Ryb2tlV2lkdGggPSAyLFxuICAgICAgYWJzb2x1dGVTdHJva2VXaWR0aCxcbiAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uTm9kZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZixcbiAgKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3ZnJyxcbiAgICAgIHtcbiAgICAgICAgcmVmLFxuICAgICAgICAuLi5kZWZhdWx0QXR0cmlidXRlcyxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IGFic29sdXRlU3Ryb2tlV2lkdGggPyAoTnVtYmVyKHN0cm9rZVdpZHRoKSAqIDI0KSAvIE51bWJlcihzaXplKSA6IHN0cm9rZVdpZHRoLFxuICAgICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcygnbHVjaWRlJywgY2xhc3NOYW1lKSxcbiAgICAgICAgLi4uKCFjaGlsZHJlbiAmJiAhaGFzQTExeVByb3AocmVzdCkgJiYgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICAuLi5pY29uTm9kZS5tYXAoKFt0YWcsIGF0dHJzXSkgPT4gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzKSksXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSksXG4gICAgICBdLFxuICAgICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8scUtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFDWCxRQVdFLENBRUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFaQSxFQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNSLENBQUEsQ0FBQSxDQUFBLENBQU8sR0FBQSxDQUFBLENBQUEsRUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsR0FBQSxDQUFBLEVBQ2QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLEdBQUEsQ0FBQSxDQUFBLEVBQ1osQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0EsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTs2S0FJTCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBO1FBQ0UsQ0FBQSxDQUFBLENBQUE7UUFDQSwwS0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0gsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNQLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ1IsV0FBQSxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBdUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxDQUFBLENBQUEsQ0FBTSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQy9FLFNBQUEsQ0FBVyxpTEFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQUFBYSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsU0FBUyxDQUFBO1FBQzNDLENBQUksQ0FBQSxDQUFBLENBQUMsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsaUxBQUMsY0FBQSxFQUFZLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZSxNQUFPO1FBQUEsQ0FBQTtRQUMvRCxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ0wsQ0FBQSxFQUNBO1dBQ0ssQ0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFJO2dCQUFDLENBQUMsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNO3FMQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQWMsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUMsQ0FBQTs7V0FDdkQsQ0FBTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLENBQUEsQ0FBQTtZQUFDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtTQUFBO0tBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDkxNCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2NyZWF0ZUx1Y2lkZUljb24uanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2NyZWF0ZUx1Y2lkZUljb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgdG9LZWJhYkNhc2UsIHRvUGFzY2FsQ2FzZSB9IGZyb20gJ0BsdWNpZGUvc2hhcmVkJztcbmltcG9ydCB7IEljb25Ob2RlLCBMdWNpZGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBMdWNpZGUgaWNvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uTmFtZVxuICogQHBhcmFtIHthcnJheX0gaWNvbk5vZGVcbiAqIEByZXR1cm5zIHtGb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50fSBMdWNpZGVJY29uXG4gKi9cbmNvbnN0IGNyZWF0ZUx1Y2lkZUljb24gPSAoaWNvbk5hbWU6IHN0cmluZywgaWNvbk5vZGU6IEljb25Ob2RlKSA9PiB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGZvcndhcmRSZWY8U1ZHU1ZHRWxlbWVudCwgTHVjaWRlUHJvcHM+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgcmVmLFxuICAgICAgaWNvbk5vZGUsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcyhcbiAgICAgICAgYGx1Y2lkZS0ke3RvS2ViYWJDYXNlKHRvUGFzY2FsQ2FzZShpY29uTmFtZSkpfWAsXG4gICAgICAgIGBsdWNpZGUtJHtpY29uTmFtZX1gLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApLFxuICAgICAgLi4ucHJvcHMsXG4gICAgfSksXG4gICk7XG5cbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gdG9QYXNjYWxDYXNlKGljb25OYW1lKTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTHVjaWRlSWNvbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVdNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQW1CLENBQUEsQ0FBQSxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWtCLFFBQXVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNqRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsbUtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBdUMsUUFBMEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUF6QixDQUFBLENBQUUsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUyxDQUFBLENBQUE7aUxBQ2pGLGdCQUFBLDRKQUFjLFVBQU0sQ0FBQSxDQUFBO1lBQ2xCLENBQUEsQ0FBQSxDQUFBO1lBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVcsa0xBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQ1QsQUFBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBbUMsQ0FBQSxzTEFBbkMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxrTEFBWSxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxDQUFDLEdBQzdDLFFBQVUsRUFBUSxDQUFBLE1BQVIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQ2xCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUVGLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNKLENBQUE7O0lBR08sU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxtTEFBYyxlQUFBLEVBQWEsUUFBUSxDQUFBO0lBRXRDLE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDVCxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5NDcsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9hcnJvdy1yaWdodC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvYXJyb3ctcmlnaHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbJ3BhdGgnLCB7IGQ6ICdNNSAxMmgxNCcsIGtleTogJzFheXMwaCcgfV0sXG4gIFsncGF0aCcsIHsgZDogJ20xMiA1IDcgNy03IDcnLCBrZXk6ICd4cXV6NGMnIH1dLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIEFycm93UmlnaHRcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk5TQXhNbWd4TkNJZ0x6NEtJQ0E4Y0dGMGFDQmtQU0p0TVRJZ05TQTNJRGN0TnlBM0lpQXZQZ284TDNOMlp6NEspIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL2Fycm93LXJpZ2h0XG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgQXJyb3dSaWdodCA9IGNyZWF0ZUx1Y2lkZUljb24oJ2Fycm93LXJpZ2h0JywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFycm93UmlnaHQ7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7UUFBQSxDQUFVO0tBQUE7SUFDekM7UUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUEsQ0FBRTtZQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBaUIsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQVUsQ0FBQTtLQUFBO0NBQ2hEO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFhLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFlLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogOTg5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGxheS5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvcGxheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbWydwb2x5Z29uJywgeyBwb2ludHM6ICc2IDMgMjAgMTIgNiAyMSA2IDMnLCBrZXk6ICcxb2E4aGInIH1dXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIFBsYXlcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHOXNlV2R2YmlCd2IybHVkSE05SWpZZ015QXlNQ0F4TWlBMklESXhJRFlnTXlJZ0x6NEtQQzl6ZG1jK0NnPT0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL3BsYXlcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKlxuICovXG5jb25zdCBQbGF5ID0gY3JlYXRlTHVjaWRlSWNvbigncGxheScsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR2EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBdUI7SUFBQztRQUFDLFNBQVcsQ0FBQTtRQUFBLENBQUE7WUFBRSxRQUFRLG9CQUFzQixDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUztRQUFBLENBQUM7S0FBQztDQUFBO0FBYTNGLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBTyxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVEsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMDI0LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvemFwLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy96YXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbXG4gICAgJ3BhdGgnLFxuICAgIHtcbiAgICAgIGQ6ICdNNCAxNGExIDEgMCAwIDEtLjc4LTEuNjNsOS45LTEwLjJhLjUuNSAwIDAgMSAuODYuNDZsLTEuOTIgNi4wMkExIDEgMCAwIDAgMTMgMTBoN2ExIDEgMCAwIDEgLjc4IDEuNjNsLTkuOSAxMC4yYS41LjUgMCAwIDEtLjg2LS40NmwxLjkyLTYuMDJBMSAxIDAgMCAwIDExIDE0eicsXG4gICAgICBrZXk6ICcxeHEyZGInLFxuICAgIH0sXG4gIF0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgWmFwXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSk5OQ0F4TkdFeElERWdNQ0F3SURFdExqYzRMVEV1TmpOc09TNDVMVEV3TGpKaExqVXVOU0F3SURBZ01TQXVPRFl1TkRac0xURXVPVElnTmk0d01rRXhJREVnTUNBd0lEQWdNVE1nTVRCb04yRXhJREVnTUNBd0lERWdMamM0SURFdU5qTnNMVGt1T1NBeE1DNHlZUzQxTGpVZ01DQXdJREV0TGpnMkxTNDBObXd4TGpreUxUWXVNREpCTVNBeElEQWdNQ0F3SURFeElERTBlaUlnTHo0S1BDOXpkbWMrQ2c9PSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvemFwXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgWmFwID0gY3JlYXRlTHVjaWRlSWNvbignemFwJywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFphcDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLFVBQXVCLENBQUEsQ0FBQSxDQUFBO0lBQ2xDO1FBQ0UsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDQTtZQUNFLENBQUcsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0gsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBQ1A7Q0FFSjtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBTSxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxFQUFPLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTA1OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0LWludGwvZGlzdC9lc20vZGV2ZWxvcG1lbnQvcmVhY3QtY2xpZW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1hdHRlciBhcyB1c2VGb3JtYXR0ZXIkMSwgdXNlVHJhbnNsYXRpb25zIGFzIHVzZVRyYW5zbGF0aW9ucyQxIH0gZnJvbSAndXNlLWludGwnO1xuZXhwb3J0ICogZnJvbSAndXNlLWludGwnO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gZW50cnkgZmlsZSB3aGVuIG5vbi0ncmVhY3Qtc2VydmVyJ1xuICogZW52aXJvbm1lbnRzIGltcG9ydCBmcm9tICduZXh0LWludGwnLlxuICpcbiAqIE1haW50YWluZXIgbm90ZXM6XG4gKiAtIE1ha2Ugc3VyZSB0aGlzIG1pcnJvcnMgdGhlIEFQSSBmcm9tICdyZWFjdC1zZXJ2ZXInLlxuICogLSBNYWtlIHN1cmUgZXZlcnl0aGluZyBleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlIGlzXG4gKiAgIHN1cHBvcnRlZCBpbiBhbGwgTmV4dC5qcyB2ZXJzaW9ucyB0aGF0IGFyZSBzdXBwb3J0ZWQuXG4gKi9cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1mdW5jdGlvbi10eXBlXG5mdW5jdGlvbiBjYWxsSG9vayhuYW1lLCBob29rKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaG9vayguLi5hcmdzKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNhbGwgXFxgJHtuYW1lfVxcYCBiZWNhdXNlIHRoZSBjb250ZXh0IGZyb20gXFxgTmV4dEludGxDbGllbnRQcm92aWRlclxcYCB3YXMgbm90IGZvdW5kLlxuXG5UaGlzIGNhbiBoYXBwZW4gYmVjYXVzZTpcbjEpIFlvdSBpbnRlbmRlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQgYXMgYSBTZXJ2ZXIgQ29tcG9uZW50LCB0aGUgcmVuZGVyXG4gICBmYWlsZWQsIGFuZCB0aGVyZWZvcmUgUmVhY3QgYXR0ZW1wdGVkIHRvIHJlbmRlciB0aGUgY29tcG9uZW50IG9uIHRoZSBjbGllbnRcbiAgIGluc3RlYWQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIGNoZWNrIHRoZSBjb25zb2xlIGZvciBzZXJ2ZXIgZXJyb3JzLlxuMikgWW91IGludGVuZGVkIHRvIHJlbmRlciB0aGlzIGNvbXBvbmVudCBvbiB0aGUgY2xpZW50IHNpZGUsIGJ1dCBubyBjb250ZXh0IHdhcyBmb3VuZC5cbiAgIExlYXJuIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBoZXJlOiBodHRwczovL25leHQtaW50bC5kZXYvZG9jcy9lbnZpcm9ubWVudHMvc2VydmVyLWNsaWVudC1jb21wb25lbnRzI21pc3NpbmctY29udGV4dGAgKTtcbiAgICB9XG4gIH07XG59XG5jb25zdCB1c2VUcmFuc2xhdGlvbnMgPSBjYWxsSG9vaygndXNlVHJhbnNsYXRpb25zJywgdXNlVHJhbnNsYXRpb25zJDEpO1xuY29uc3QgdXNlRm9ybWF0dGVyID0gY2FsbEhvb2soJ3VzZUZvcm1hdHRlcicsIHVzZUZvcm1hdHRlciQxKTtcblxuZXhwb3J0IHsgdXNlRm9ybWF0dGVyLCB1c2VUcmFuc2xhdGlvbnMgfTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQUdBOzs7Ozs7OztDQVFDLEdBR0Qsc0VBQXNFO0FBQ3RFLFNBQVMsU0FBUyxJQUFJLEVBQUUsSUFBSTtJQUMxQixPQUFPO3lDQUFJO1lBQUE7O1FBQ1QsSUFBSTtZQUNGLE9BQU8sUUFBUTtRQUNqQixFQUFFLFVBQU07WUFDTixNQUFNLElBQUksTUFBTSxBQUFDLG1CQUF3QixPQUFMLE1BQUs7UUFRM0M7SUFDRjtBQUNGO0FBQ0EsTUFBTSxrQkFBa0IsU0FBUyxtQkFBbUIscUtBQUEsQ0FBQSxrQkFBaUI7QUFDckUsTUFBTSxlQUFlLFNBQVMsZ0JBQWdCLHFLQUFBLENBQUEsZUFBYyIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMDk1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8iLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fV0KfQ==
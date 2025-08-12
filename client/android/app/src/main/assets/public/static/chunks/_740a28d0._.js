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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const HeroSection = ()=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Landing.Hero');
    const { isMobile, isMobilePlatform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
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
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-pattern opacity-[0.02]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-32 right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float",
                        style: {
                            animationDelay: '1s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float",
                        style: {
                            animationDelay: '2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/HeroSection.tsx",
                lineNumber: 14,
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
                                                    lineNumber: 33,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient block mt-2",
                                                    children: t('subtitle')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "".concat(isMobile ? 'text-lg' : 'text-xl sm:text-2xl', " text-muted-foreground max-w-2xl leading-relaxed"),
                                            children: t('description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col ".concat(isMobile ? 'gap-4' : 'sm:flex-row gap-6', " items-center pt-4 ").concat(isMobile ? 'px-4' : ''),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "group relative bg-primary text-primary-foreground ".concat(isMobile ? 'w-full px-8 py-4 text-base' : 'px-10 py-5 text-lg', " rounded-2xl hover:opacity-90 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center font-semibold overflow-hidden ").concat(isMobilePlatform ? 'mobile-touch-target' : ''),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10",
                                                    children: t('cta.primary')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: isMobile ? 20 : 24,
                                                    className: "ml-3 rtl:ml-0 rtl:mr-3 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform relative z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 43,
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
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                t('cta.secondary')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 42,
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
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: t('stats.teams').split(' ').slice(1).join(' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 59,
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
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: t('stats.text')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 63,
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
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: t('stats.countries').split(' ').slice(1).join(' ')
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
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                            lineNumber: 27,
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
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 bg-yellow-400 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 bg-green-400 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Live Dashboard"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 79,
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
                                                                            lineNumber: 97,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-primary font-semibold",
                                                                            children: "87%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                            lineNumber: 98,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 96,
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
                                                                        lineNumber: 101,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 95,
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
                                                                            lineNumber: 107,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-primary font-semibold",
                                                                            children: "92%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                            lineNumber: 108,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 106,
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
                                                                        lineNumber: 111,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 94,
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
                                                                    lineNumber: 119,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Active Tasks"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 118,
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
                                                                    lineNumber: 123,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Team Members"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 117,
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
                                                                    lineNumber: 132,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                lineNumber: 131,
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
                                                                        lineNumber: 135,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground",
                                                                        children: "2 minutes ago"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 77,
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
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: "Goal Achieved!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "95% completion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 144,
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
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: "New Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Sarah joined"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing/HeroSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/HeroSection.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/HeroSection.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/HeroSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/landing/HeroSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing/HeroSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSection, "6jJc86Tysxpl1ZFgAwLiU3ASpmQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"]
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
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VNb2JpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FwYWNpdG9yIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBIb29rIHRvIGRldGVjdCBtb2JpbGUgcGxhdGZvcm0gYW5kIHNjcmVlbiBzaXplXHJcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIG1vYmlsZSBkZXRlY3Rpb24gc3RhdGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vYmlsZVBsYXRmb3JtLCBzZXRJc01vYmlsZVBsYXRmb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGVTY3JlZW4sIHNldElzTW9iaWxlU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgb24gQ2FwYWNpdG9yIChuYXRpdmUgbW9iaWxlKVxyXG4gICAgc2V0SXNNb2JpbGVQbGF0Zm9ybShDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcclxuXHJcbiAgICAvLyBDaGVjayBzY3JlZW4gc2l6ZSBmb3IgbW9iaWxlIGJyZWFrcG9pbnRcclxuICAgIGNvbnN0IGNoZWNrU2NyZWVuU2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2JpbGVTY3JlZW4od2luZG93LmlubmVyV2lkdGggPCA3NjgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsIGNoZWNrXHJcbiAgICBjaGVja1NjcmVlblNpemUoKTtcclxuICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgcmVzaXplIGV2ZW50c1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTW9iaWxlUGxhdGZvcm0sXHJcbiAgICBpc01vYmlsZVNjcmVlbixcclxuICAgIGlzTW9iaWxlOiBpc01vYmlsZVBsYXRmb3JtIHx8IGlzTW9iaWxlU2NyZWVuLFxyXG4gICAgaXNMb2FkZWQsXHJcbiAgICBwbGF0Zm9ybTogQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCksXHJcbiAgfTtcclxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7QUFDQTs7QUFIQTs7O0FBU08sTUFBTSxZQUFZOztJQUN2QixNQUFNLENBQUMsa0JBQWtCLG9CQUFvQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ3pELE1BQU0sQ0FBQyxnQkFBZ0Isa0JBQWtCLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDckQsTUFBTSxDQUFDLFVBQVUsWUFBWSxHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBRXpDLENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDsrQkFBRTtZQUNSLGdEQUFnRDtZQUNoRCxvQkFBb0IsdUpBQUEsQ0FBQSxZQUFTLENBQUMsZ0JBQWdCO1lBRTlDLDBDQUEwQztZQUMxQyxNQUFNO3VEQUFrQjtvQkFDdEIsa0JBQWtCLE9BQU8sVUFBVSxHQUFHO2dCQUN4Qzs7WUFFQSxnQkFBZ0I7WUFDaEI7WUFDQSxZQUFZO1lBRVosMkJBQTJCO1lBQzNCLE9BQU8sZ0JBQWdCLENBQUMsVUFBVTtZQUVsQzt1Q0FBTztvQkFDTCxPQUFPLG1CQUFtQixDQUFDLFVBQVU7Z0JBQ3ZDOztRQUNGOzhCQUFHLEVBQUU7SUFFTCxPQUFPO1FBQ0w7UUFDQTtRQUNBLFVBQVUsb0JBQW9CO1FBQzlCO1FBQ0EsVUFBVSx1SkFBQSxDQUFBLFlBQVMsQ0FBQyxXQUFXO0lBQ2pDO0FBQ0Y7R0FqQ2EiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDYxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFycm93UmlnaHQsIFBsYXksIFphcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcbmltcG9ydCB7IHVzZU1vYmlsZSB9IGZyb20gJ0AvaG9va3MvdXNlTW9iaWxlJztcclxuXHJcbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ0xhbmRpbmcuSGVybycpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUsIGlzTW9iaWxlUGxhdGZvcm0gfSA9IHVzZU1vYmlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtpc01vYmlsZSA/ICdtaW4taC1bOTB2aF0nIDogJ21pbi1oLXNjcmVlbid9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbmB9PlxyXG4gICAgICB7LyogRHluYW1pYyBCYWNrZ3JvdW5kIHdpdGggR2xhc3Ntb3JwaGlzbSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeS81IHZpYS1iYWNrZ3JvdW5kIHRvLWFjY2VudC81XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyaWQtcGF0dGVybiBvcGFjaXR5LVswLjAyXVwiPjwvZGl2PlxyXG5cclxuICAgICAgICB7LyogRmxvYXRpbmcgRWxlbWVudHMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgbGVmdC0xMCB3LTMyIGgtMzIgYmctcHJpbWFyeS8xMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgYW5pbWF0ZS1mbG9hdFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMyIHJpZ2h0LTE2IHctNDggaC00OCBiZy1hY2NlbnQvMTAgcm91bmRlZC1mdWxsIGJsdXItM3hsIGFuaW1hdGUtZmxvYXRcIiBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzQgdy0yNCBoLTI0IGJnLXNlY29uZGFyeS8xMCByb3VuZGVkLWZ1bGwgYmx1ci0yeGwgYW5pbWF0ZS1mbG9hdFwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMnMnIH19PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtMTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7LyogTGVmdCBDb2x1bW4gLSBDb250ZW50ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTggdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgey8qIE1haW4gSGVhZGluZyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzcGFjZS15LTYgJHtpc01vYmlsZSA/ICdweC00JyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2lzTW9iaWxlID8gJ3RleHQtNHhsIHNtOnRleHQtNXhsJyA6ICd0ZXh0LTV4bCBzbTp0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBsZzp0ZXh0LTh4bCd9IGZvbnQtYm9sZCBmb250LXByaW1hcnkgbGVhZGluZy1bMC45XWB9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kXCI+e3QoJ3RpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudCBibG9jayBtdC0yXCI+e3QoJ3N1YnRpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtpc01vYmlsZSA/ICd0ZXh0LWxnJyA6ICd0ZXh0LXhsIHNtOnRleHQtMnhsJ30gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1heC13LTJ4bCBsZWFkaW5nLXJlbGF4ZWRgfT5cclxuICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbicpfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ1RBIEJ1dHRvbnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAke2lzTW9iaWxlID8gJ2dhcC00JyA6ICdzbTpmbGV4LXJvdyBnYXAtNid9IGl0ZW1zLWNlbnRlciBwdC00ICR7aXNNb2JpbGUgPyAncHgtNCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGdyb3VwIHJlbGF0aXZlIGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgJHtpc01vYmlsZSA/ICd3LWZ1bGwgcHgtOCBweS00IHRleHQtYmFzZScgOiAncHgtMTAgcHktNSB0ZXh0LWxnJ30gcm91bmRlZC0yeGwgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy0zeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCBvdmVyZmxvdy1oaWRkZW4gJHtpc01vYmlsZVBsYXRmb3JtID8gJ21vYmlsZS10b3VjaC10YXJnZXQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tcHJpbWFyeS84MCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+e3QoJ2N0YS5wcmltYXJ5Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgc2l6ZT17aXNNb2JpbGUgPyAyMCA6IDI0fSBjbGFzc05hbWU9XCJtbC0zIHJ0bDptbC0wIHJ0bDptci0zIHJ0bDpyb3RhdGUtMTgwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgcnRsOmdyb3VwLWhvdmVyOi10cmFuc2xhdGUteC0xIHRyYW5zaXRpb24tdHJhbnNmb3JtIHJlbGF0aXZlIHotMTBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGdyb3VwIGZsZXggaXRlbXMtY2VudGVyICR7aXNNb2JpbGUgPyAndy1mdWxsIGp1c3RpZnktY2VudGVyIHB4LTYgcHktNCB0ZXh0LWJhc2UnIDogJ3B4LTggcHktNSB0ZXh0LWxnJ30gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWFsbCBmb250LXNlbWlib2xkIGhvdmVyLWxpZnQgJHtpc01vYmlsZVBsYXRmb3JtID8gJ21vYmlsZS10b3VjaC10YXJnZXQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNNb2JpbGUgPyAndy0xMCBoLTEwJyA6ICd3LTEyIGgtMTInfSBiZy1wcmltYXJ5LzEwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci00IHJ0bDptci0wIHJ0bDptbC00IGdyb3VwLWhvdmVyOmJnLXByaW1hcnkvMjAgdHJhbnNpdGlvbi1jb2xvcnNgfT5cclxuICAgICAgICAgICAgICAgICAgPFBsYXkgc2l6ZT17aXNNb2JpbGUgPyAxNiA6IDIwfSBjbGFzc05hbWU9XCJtbC0xIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0KCdjdGEuc2Vjb25kYXJ5Jyl9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0YXRzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTggcHQtMTIgbWF4LXctbGcgbXgtYXV0byBsZzpteC0wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtcHJpbWFyeSBmb250LXByaW1hcnlcIj57dCgnc3RhdHMudGVhbXMnKS5zcGxpdCgnICcpWzBdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiPnt0KCdzdGF0cy50ZWFtcycpLnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgZm9udC1wcmltYXJ5XCI+e3QoJ3N0YXRzLnJhdGluZycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiPnt0KCdzdGF0cy50ZXh0Jyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtcHJpbWFyeSBmb250LXByaW1hcnlcIj57dCgnc3RhdHMuY291bnRyaWVzJykuc3BsaXQoJyAnKVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc21cIj57dCgnc3RhdHMuY291bnRyaWVzJykuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIFJpZ2h0IENvbHVtbiAtIFZpc3VhbCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtpc01vYmlsZSA/ICdtdC04IHB4LTQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIHsvKiBNYWluIEdsYXNzIENhcmQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZ2xhc3MtZWZmZWN0IHJvdW5kZWQtM3hsICR7aXNNb2JpbGUgPyAncC02JyA6ICdwLTgnfSBzaGFkb3ctM3hsIGJvcmRlciBib3JkZXItd2hpdGUvMjBgfT5cclxuICAgICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMgaC0zIGJnLXJlZC00MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyBiZy15ZWxsb3ctNDAwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMyBoLTMgYmctZ3JlZW4tNDAwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiBiZy1ncmVlbi00MDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcHVsc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgTGl2ZSBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7LyogRGFzaGJvYXJkIENvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9ncmVzcyBCYXJzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtXCI+UHJvamVjdCBBbHBoYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+ODclPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLW11dGVkLzMwIHJvdW5kZWQtZnVsbCBoLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tcHJpbWFyeS84MCBoLTMgcm91bmRlZC1mdWxsIGFuaW1hdGUtcHVsc2UtZ2xvd1wiIHN0eWxlPXt7IHdpZHRoOiAnODclJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmQgZm9udC1tZWRpdW1cIj5UZWFtIFBlcmZvcm1hbmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj45MiU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctbXV0ZWQvMzAgcm91bmRlZC1mdWxsIGgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYWNjZW50IHRvLWFjY2VudC84MCBoLTMgcm91bmRlZC1mdWxsXCIgc3R5bGU9e3sgd2lkdGg6ICc5MiUnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdGF0cyBHcmlkICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS81IHJvdW5kZWQtMnhsIHAtNCB0ZXh0LWNlbnRlciBob3Zlci1saWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1wcmltYXJ5IGZvbnQtcHJpbWFyeVwiPjI0NzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5BY3RpdmUgVGFza3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYWNjZW50LzUgcm91bmRlZC0yeGwgcC00IHRleHQtY2VudGVyIGhvdmVyLWxpZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWFjY2VudCBmb250LXByaW1hcnlcIj44PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlRlYW0gTWVtYmVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBY3Rpdml0eSBGZWVkICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBwLTMgYmctbXV0ZWQvMjAgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCBiZy1wcmltYXJ5LzIwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFphcCBzaXplPXsxNH0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZFwiPlRhc2sgY29tcGxldGVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+MiBtaW51dGVzIGFnbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGbG9hdGluZyBDYXJkcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTYgLXJpZ2h0LTYgZ2xhc3MtZWZmZWN0IHJvdW5kZWQtMnhsIHAtNCBzaGFkb3cteGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBhbmltYXRlLWZsb2F0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IGJnLWdyZWVuLTQwMC8yMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgdGV4dC14cyBmb250LWJvbGRcIj7inJM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIj5Hb2FsIEFjaGlldmVkITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+OTUlIGNvbXBsZXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS02IC1sZWZ0LTYgZ2xhc3MtZWZmZWN0IHJvdW5kZWQtMnhsIHAtNCBzaGFkb3cteGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBhbmltYXRlLWZsb2F0XCIgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxLjVzJyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggYmctYmx1ZS00MDAvMjAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdGV4dC14cyBmb250LWJvbGRcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kXCI+TmV3IE1lbWJlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+U2FyYWggam9pbmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBSkE7Ozs7QUFNQSxNQUFNLGNBQWM7O0lBQ2xCLE1BQU0sSUFBSSxDQUFBLEdBQUEseU1BQUEsQ0FBQSxrQkFBZSxBQUFELEVBQUU7SUFDMUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLENBQUEsR0FBQSw0SEFBQSxDQUFBLFlBQVMsQUFBRDtJQUUvQyxxQkFDRSw2TEFBQztRQUFRLFdBQVcsQUFBQyxZQUFzRCxPQUEzQyxXQUFXLGlCQUFpQixnQkFBZTs7MEJBRXpFLDZMQUFDO2dCQUFJLFdBQVU7O2tDQUNiLDZMQUFDO3dCQUFJLFdBQVU7Ozs7OztrQ0FDZiw2TEFBQzt3QkFBSSxXQUFVOzs7Ozs7a0NBR2YsNkxBQUM7d0JBQUksV0FBVTs7Ozs7O2tDQUNmLDZMQUFDO3dCQUFJLFdBQVU7d0JBQXlGLE9BQU87NEJBQUUsZ0JBQWdCO3dCQUFLOzs7Ozs7a0NBQ3RJLDZMQUFDO3dCQUFJLFdBQVU7d0JBQTBGLE9BQU87NEJBQUUsZ0JBQWdCO3dCQUFLOzs7Ozs7Ozs7Ozs7MEJBR3pJLDZMQUFDO2dCQUFJLFdBQVU7MEJBQ2IsY0FBQSw2TEFBQztvQkFBSSxXQUFVOztzQ0FFYiw2TEFBQzs0QkFBSSxXQUFVOzs4Q0FJYiw2TEFBQztvQ0FBSSxXQUFXLEFBQUMsYUFBbUMsT0FBdkIsV0FBVyxTQUFTOztzREFDL0MsNkxBQUM7NENBQUcsV0FBVyxBQUFDLEdBQXFGLE9BQW5GLFdBQVcseUJBQXlCLGdEQUErQzs7OERBQ25HLDZMQUFDO29EQUFLLFdBQVU7OERBQW1CLEVBQUU7Ozs7Ozs4REFDckMsNkxBQUM7b0RBQUssV0FBVTs4REFBNEIsRUFBRTs7Ozs7Ozs7Ozs7O3NEQUVoRCw2TEFBQzs0Q0FBRSxXQUFXLEFBQUMsR0FBK0MsT0FBN0MsV0FBVyxZQUFZLHVCQUFzQjtzREFDM0QsRUFBRTs7Ozs7Ozs7Ozs7OzhDQUtQLDZMQUFDO29DQUFJLFdBQVcsQUFBQyxpQkFBOEUsT0FBOUQsV0FBVyxVQUFVLHFCQUFvQix1QkFBNEMsT0FBdkIsV0FBVyxTQUFTOztzREFDakgsNkxBQUM7NENBQU8sV0FBVyxBQUFDLHFEQUE2UCxPQUF6TSxXQUFXLCtCQUErQixzQkFBcUIsNElBQXdMLE9BQTlDLG1CQUFtQix3QkFBd0I7OzhEQUMxVCw2TEFBQztvREFBSSxXQUFVOzs7Ozs7OERBQ2YsNkxBQUM7b0RBQUssV0FBVTs4REFBaUIsRUFBRTs7Ozs7OzhEQUNuQyw2TEFBQyxxTkFBQSxDQUFBLGFBQVU7b0RBQUMsTUFBTSxXQUFXLEtBQUs7b0RBQUksV0FBVTs7Ozs7Ozs7Ozs7O3NEQUdsRCw2TEFBQzs0Q0FBTyxXQUFXLEFBQUMsMkJBQTJMLE9BQWpLLFdBQVcsOENBQThDLHFCQUFvQixzRkFBa0ksT0FBOUMsbUJBQW1CLHdCQUF3Qjs7OERBQ3hQLDZMQUFDO29EQUFJLFdBQVcsQUFBQyxHQUF1QyxPQUFyQyxXQUFXLGNBQWMsYUFBWTs4REFDdEQsY0FBQSw2TEFBQyxxTUFBQSxDQUFBLE9BQUk7d0RBQUMsTUFBTSxXQUFXLEtBQUs7d0RBQUksV0FBVTs7Ozs7Ozs7Ozs7Z0RBRTNDLEVBQUU7Ozs7Ozs7Ozs7Ozs7OENBS1AsNkxBQUM7b0NBQUksV0FBVTs7c0RBQ2IsNkxBQUM7NENBQUksV0FBVTs7OERBQ2IsNkxBQUM7b0RBQUksV0FBVTs4REFBZ0QsRUFBRSxlQUFlLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7Ozs7OzhEQUM3Riw2TEFBQztvREFBSSxXQUFVOzhEQUFpQyxFQUFFLGVBQWUsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7c0RBRTVGLDZMQUFDOzRDQUFJLFdBQVU7OzhEQUNiLDZMQUFDO29EQUFJLFdBQVU7OERBQWdELEVBQUU7Ozs7Ozs4REFDakUsNkxBQUM7b0RBQUksV0FBVTs4REFBaUMsRUFBRTs7Ozs7Ozs7Ozs7O3NEQUVwRCw2TEFBQzs0Q0FBSSxXQUFVOzs4REFDYiw2TEFBQztvREFBSSxXQUFVOzhEQUFnRCxFQUFFLG1CQUFtQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs4REFDakcsNkxBQUM7b0RBQUksV0FBVTs4REFBaUMsRUFBRSxtQkFBbUIsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTXBHLDZMQUFDOzRCQUFJLFdBQVcsQUFBQyxZQUF1QyxPQUE1QixXQUFXLGNBQWM7OzhDQUVuRCw2TEFBQztvQ0FBSSxXQUFXLEFBQUMscUNBQTZELE9BQXpCLFdBQVcsUUFBUSxPQUFNOztzREFFNUUsNkxBQUM7NENBQUksV0FBVTs7OERBQ2IsNkxBQUM7b0RBQUksV0FBVTs7c0VBQ2IsNkxBQUM7NERBQUksV0FBVTs7Ozs7O3NFQUNmLDZMQUFDOzREQUFJLFdBQVU7Ozs7OztzRUFDZiw2TEFBQzs0REFBSSxXQUFVOzs7Ozs7Ozs7Ozs7OERBRWpCLDZMQUFDO29EQUFJLFdBQVU7O3NFQUNiLDZMQUFDOzREQUFJLFdBQVU7Ozs7Ozt3REFBd0Q7Ozs7Ozs7Ozs7Ozs7c0RBTTNFLDZMQUFDOzRDQUFJLFdBQVU7OzhEQUViLDZMQUFDO29EQUFJLFdBQVU7O3NFQUNiLDZMQUFDOzs4RUFDQyw2TEFBQztvRUFBSSxXQUFVOztzRkFDYiw2TEFBQzs0RUFBSyxXQUFVO3NGQUE4Qjs7Ozs7O3NGQUM5Qyw2TEFBQzs0RUFBSyxXQUFVO3NGQUE2Qjs7Ozs7Ozs7Ozs7OzhFQUUvQyw2TEFBQztvRUFBSSxXQUFVOzhFQUNiLGNBQUEsNkxBQUM7d0VBQUksV0FBVTt3RUFBa0YsT0FBTzs0RUFBRSxPQUFPO3dFQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztzRUFJM0gsNkxBQUM7OzhFQUNDLDZMQUFDO29FQUFJLFdBQVU7O3NGQUNiLDZMQUFDOzRFQUFLLFdBQVU7c0ZBQThCOzs7Ozs7c0ZBQzlDLDZMQUFDOzRFQUFLLFdBQVU7c0ZBQTZCOzs7Ozs7Ozs7Ozs7OEVBRS9DLDZMQUFDO29FQUFJLFdBQVU7OEVBQ2IsY0FBQSw2TEFBQzt3RUFBSSxXQUFVO3dFQUE2RCxPQUFPOzRFQUFFLE9BQU87d0VBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQU14Ryw2TEFBQztvREFBSSxXQUFVOztzRUFDYiw2TEFBQzs0REFBSSxXQUFVOzs4RUFDYiw2TEFBQztvRUFBSSxXQUFVOzhFQUErQzs7Ozs7OzhFQUM5RCw2TEFBQztvRUFBSSxXQUFVOzhFQUFnQzs7Ozs7Ozs7Ozs7O3NFQUVqRCw2TEFBQzs0REFBSSxXQUFVOzs4RUFDYiw2TEFBQztvRUFBSSxXQUFVOzhFQUE4Qzs7Ozs7OzhFQUM3RCw2TEFBQztvRUFBSSxXQUFVOzhFQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUtuRCw2TEFBQztvREFBSSxXQUFVOzhEQUNiLGNBQUEsNkxBQUM7d0RBQUksV0FBVTs7MEVBQ2IsNkxBQUM7Z0VBQUksV0FBVTswRUFDYixjQUFBLDZMQUFDLG1NQUFBLENBQUEsTUFBRztvRUFBQyxNQUFNO29FQUFJLFdBQVU7Ozs7Ozs7Ozs7OzBFQUUzQiw2TEFBQztnRUFBSSxXQUFVOztrRkFDYiw2TEFBQzt3RUFBSSxXQUFVO2tGQUFzQzs7Ozs7O2tGQUNyRCw2TEFBQzt3RUFBSSxXQUFVO2tGQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBUXpELDZMQUFDO29DQUFJLFdBQVU7OENBQ2IsY0FBQSw2TEFBQzt3Q0FBSSxXQUFVOzswREFDYiw2TEFBQztnREFBSSxXQUFVOzBEQUNiLGNBQUEsNkxBQUM7b0RBQUssV0FBVTs4REFBbUM7Ozs7Ozs7Ozs7OzBEQUVyRCw2TEFBQzs7a0VBQ0MsNkxBQUM7d0RBQUksV0FBVTtrRUFBc0M7Ozs7OztrRUFDckQsNkxBQUM7d0RBQUksV0FBVTtrRUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtyRCw2TEFBQztvQ0FBSSxXQUFVO29DQUF5RyxPQUFPO3dDQUFFLGdCQUFnQjtvQ0FBTzs4Q0FDdEosY0FBQSw2TEFBQzt3Q0FBSSxXQUFVOzswREFDYiw2TEFBQztnREFBSSxXQUFVOzBEQUNiLGNBQUEsNkxBQUM7b0RBQUssV0FBVTs4REFBa0M7Ozs7Ozs7Ozs7OzBEQUVwRCw2TEFBQzs7a0VBQ0MsNkxBQUM7d0RBQUksV0FBVTtrRUFBc0M7Ozs7OztrRUFDckQsNkxBQUM7d0RBQUksV0FBVTtrRUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakU7R0FyS007O1FBQ00seU1BQUEsQ0FBQSxrQkFBZTtRQUNjLDRIQUFBLENBQUEsWUFBUzs7O0tBRjVDO3VDQXVLUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzk4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vc2hhcmVkL3NyYy91dGlscy5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL3NoYXJlZC9zcmMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZWxUb1Bhc2NhbCB9IGZyb20gJy4vdXRpbGl0eS10eXBlcyc7XG5cbi8qKlxuICogQ29udmVydHMgc3RyaW5nIHRvIGtlYmFiIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGtlYmFiaXplZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IHRvS2ViYWJDYXNlID0gKHN0cmluZzogc3RyaW5nKSA9PlxuICBzdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmcgdG8gY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgY2FtZWxpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9DYW1lbENhc2UgPSA8VCBleHRlbmRzIHN0cmluZz4oc3RyaW5nOiBUKSA9PlxuICBzdHJpbmcucmVwbGFjZSgvXihbQS1aXSl8W1xccy1fXSsoXFx3KS9nLCAobWF0Y2gsIHAxLCBwMikgPT5cbiAgICBwMiA/IHAyLnRvVXBwZXJDYXNlKCkgOiBwMS50b0xvd2VyQ2FzZSgpLFxuICApO1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyB0byBwYXNjYWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcGFzY2FsaXplZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUGFzY2FsQ2FzZSA9IDxUIGV4dGVuZHMgc3RyaW5nPihzdHJpbmc6IFQpOiBDYW1lbFRvUGFzY2FsPFQ+ID0+IHtcbiAgY29uc3QgY2FtZWxDYXNlID0gdG9DYW1lbENhc2Uoc3RyaW5nKTtcblxuICByZXR1cm4gKGNhbWVsQ2FzZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhbWVsQ2FzZS5zbGljZSgxKSkgYXMgQ2FtZWxUb1Bhc2NhbDxUPjtcbn07XG5cbi8qKlxuICogTWVyZ2VzIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBjbGFzc2VzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBvZiBjbGFzc2VzXG4gKi9cbmV4cG9ydCBjb25zdCBtZXJnZUNsYXNzZXMgPSA8Q2xhc3NUeXBlID0gc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4oLi4uY2xhc3NlczogQ2xhc3NUeXBlW10pID0+XG4gIGNsYXNzZXNcbiAgICAuZmlsdGVyKChjbGFzc05hbWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgQm9vbGVhbihjbGFzc05hbWUpICYmXG4gICAgICAgIChjbGFzc05hbWUgYXMgc3RyaW5nKS50cmltKCkgIT09ICcnICYmXG4gICAgICAgIGFycmF5LmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gaW5kZXhcbiAgICAgICk7XG4gICAgfSlcbiAgICAuam9pbignICcpXG4gICAgLnRyaW0oKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIGNvbXBvbmVudCBoYXMgYW4gYWNjZXNzaWJpbGl0eSBwcm9wXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBhbiBhY2Nlc3NpYmlsaXR5IHByb3BcbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0ExMXlQcm9wID0gKHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoJ2FyaWEtJykgfHwgcHJvcCA9PT0gJ3JvbGUnIHx8IHByb3AgPT09ICd0aXRsZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDMUIsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLE9BQUEsQ0FBUSxDQUFzQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUUsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQVEvQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLENBQWMsQ0FBQSxDQUFBLENBQW1CLE1BQUEsQ0FDNUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUF5QixDQUFDLE9BQU8sQ0FBSSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQ2xELENBQUEsQ0FBQSxDQUFBLEVBQUssQ0FBQSxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWdCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBUzlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFlLENBQW1CLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFnQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDdkUsTUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxZQUFZLE1BQU0sQ0FBQTtJQUU1QixPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsTUFBQSxDQUFPLENBQUMsQ0FBQSxDQUFFLFdBQUEsRUFBZ0IsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFVLEtBQUEsQ0FBTSxDQUFDLENBQUE7QUFDL0QsQ0FBQTtBQVFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBZSxDQUFBLENBQUEsRUFBMkMsQ0FBQTs7UUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUNyRTs7V0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQ0csTUFBQSxDQUFPLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLE9BQU8sS0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFFakMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsQ0FBQSxDQUNoQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBcUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBVyxDQUNqQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQSxDQUFTLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBRWpDLENBQUMsQ0FDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQ1IsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7O0FBUUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFjLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUErQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDekQsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVyxRQUFRLEtBQU8sQ0FBQTtRQUN4QixDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVyxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVSxTQUFTLE9BQVMsQ0FBQSxDQUFBO1lBQzVELE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0lBQ1Q7QUFFSixDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4MzcsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9kZWZhdWx0QXR0cmlidXRlcy5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvZGVmYXVsdEF0dHJpYnV0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgd2lkdGg6IDI0LFxuICBoZWlnaHQ6IDI0LFxuICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgZmlsbDogJ25vbmUnLFxuICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICBzdHJva2VXaWR0aDogMixcbiAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgc3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsQ0FBZSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDYixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ1AsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLEVBQUEsQ0FBQSxDQUFBO0lBQ1AsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsRUFBQSxDQUFBLENBQUE7SUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ1QsQ0FBQSxDQUFBLENBQUEsQ0FBTSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ04sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWEsRUFBQSxDQUFBO0lBQ2IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDZixjQUFnQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDbEIsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODYyLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vSWNvbi5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvSWNvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgSWNvbk5vZGUsIEx1Y2lkZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMsIGhhc0ExMXlQcm9wIH0gZnJvbSAnQGx1Y2lkZS9zaGFyZWQnO1xuXG5pbnRlcmZhY2UgSWNvbkNvbXBvbmVudFByb3BzIGV4dGVuZHMgTHVjaWRlUHJvcHMge1xuICBpY29uTm9kZTogSWNvbk5vZGU7XG59XG5cbi8qKlxuICogTHVjaWRlIGljb24gY29tcG9uZW50XG4gKlxuICogQGNvbXBvbmVudCBJY29uXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jb2xvciAtIFRoZSBjb2xvciBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnN0cm9rZVdpZHRoIC0gVGhlIHN0cm9rZSB3aWR0aCBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtib29sZWFufSBwcm9wcy5hYnNvbHV0ZVN0cm9rZVdpZHRoIC0gV2hldGhlciB0byB1c2UgYWJzb2x1dGUgc3Ryb2tlIHdpZHRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGljb25cbiAqIEBwYXJhbSB7SWNvbk5vZGV9IHByb3BzLmNoaWxkcmVuIC0gVGhlIGNoaWxkcmVuIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge0ljb25Ob2RlfSBwcm9wcy5pY29uTm9kZSAtIFRoZSBpY29uIG5vZGUgb2YgdGhlIGljb25cbiAqXG4gKiBAcmV0dXJucyB7Rm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudH0gTHVjaWRlSWNvblxuICovXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZjxTVkdTVkdFbGVtZW50LCBJY29uQ29tcG9uZW50UHJvcHM+KFxuICAoXG4gICAge1xuICAgICAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgICAgIHNpemUgPSAyNCxcbiAgICAgIHN0cm9rZVdpZHRoID0gMixcbiAgICAgIGFic29sdXRlU3Ryb2tlV2lkdGgsXG4gICAgICBjbGFzc05hbWUgPSAnJyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWNvbk5vZGUsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWYsXG4gICkgPT5cbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3N2ZycsXG4gICAgICB7XG4gICAgICAgIHJlZixcbiAgICAgICAgLi4uZGVmYXVsdEF0dHJpYnV0ZXMsXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBhYnNvbHV0ZVN0cm9rZVdpZHRoID8gKE51bWJlcihzdHJva2VXaWR0aCkgKiAyNCkgLyBOdW1iZXIoc2l6ZSkgOiBzdHJva2VXaWR0aCxcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzZXMoJ2x1Y2lkZScsIGNsYXNzTmFtZSksXG4gICAgICAgIC4uLighY2hpbGRyZW4gJiYgIWhhc0ExMXlQcm9wKHJlc3QpICYmIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICAgICAuLi5yZXN0LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgLi4uaWNvbk5vZGUubWFwKChbdGFnLCBhdHRyc10pID0+IGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycykpLFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl0pLFxuICAgICAgXSxcbiAgICApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXdCQSxDQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLHFLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQ1gsUUFXRSxDQUVBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBWkEsRUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDUixDQUFBLENBQUEsQ0FBQSxDQUFPLEdBQUEsQ0FBQSxDQUFBLEVBQ1AsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFjLEdBQUEsQ0FBQSxFQUNkLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxHQUFBLENBQUEsQ0FBQSxFQUNaLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUE7NktBSUwsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQTtRQUNFLENBQUEsQ0FBQSxDQUFBO1FBQ0EsMEtBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNILENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNSLFdBQUEsQ0FBYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQXVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxDQUFBLENBQVcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFJLENBQUEsQ0FBQSxDQUFBLENBQU0sR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUMvRSxTQUFBLENBQVcsaUxBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEFBQWEsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFVLFNBQVMsQ0FBQTtRQUMzQyxDQUFJLENBQUEsQ0FBQSxDQUFDLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGlMQUFDLGNBQUEsRUFBWSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWUsTUFBTztRQUFBLENBQUE7UUFDL0QsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNMLENBQUEsRUFDQTtXQUNLLENBQVMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBSTtnQkFBQyxDQUFDLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTTtxTEFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUFjLEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFDLENBQUE7O1dBQ3ZELENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVyxDQUFBLENBQUE7WUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7U0FBQTtLQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5MDYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9jcmVhdGVMdWNpZGVJY29uLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9jcmVhdGVMdWNpZGVJY29uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMsIHRvS2ViYWJDYXNlLCB0b1Bhc2NhbENhc2UgfSBmcm9tICdAbHVjaWRlL3NoYXJlZCc7XG5pbXBvcnQgeyBJY29uTm9kZSwgTHVjaWRlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQ3JlYXRlIGEgTHVjaWRlIGljb24gY29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gaWNvbk5hbWVcbiAqIEBwYXJhbSB7YXJyYXl9IGljb25Ob2RlXG4gKiBAcmV0dXJucyB7Rm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudH0gTHVjaWRlSWNvblxuICovXG5jb25zdCBjcmVhdGVMdWNpZGVJY29uID0gKGljb25OYW1lOiBzdHJpbmcsIGljb25Ob2RlOiBJY29uTm9kZSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBmb3J3YXJkUmVmPFNWR1NWR0VsZW1lbnQsIEx1Y2lkZVByb3BzPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT5cbiAgICBjcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgIHJlZixcbiAgICAgIGljb25Ob2RlLFxuICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzZXMoXG4gICAgICAgIGBsdWNpZGUtJHt0b0tlYmFiQ2FzZSh0b1Bhc2NhbENhc2UoaWNvbk5hbWUpKX1gLFxuICAgICAgICBgbHVjaWRlLSR7aWNvbk5hbWV9YCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKSxcbiAgICAgIC4uLnByb3BzLFxuICAgIH0pLFxuICApO1xuXG4gIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IHRvUGFzY2FsQ2FzZShpY29uTmFtZSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUx1Y2lkZUljb247XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFtQixDQUFBLENBQUEsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFrQixRQUF1QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDakUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLG1LQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQXVDLFFBQTBCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBekIsQ0FBQSxDQUFFLENBQVcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVMsQ0FBQSxDQUFBO2lMQUNqRixnQkFBQSw0SkFBYyxVQUFNLENBQUEsQ0FBQTtZQUNsQixDQUFBLENBQUEsQ0FBQTtZQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLGtMQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUNULEFBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQW1DLENBQUEsc0xBQW5DLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsa0xBQVksQ0FBYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUMsQ0FBQyxHQUM3QyxRQUFVLEVBQVEsQ0FBQSxNQUFSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUNsQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFFRixDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFDSixDQUFBOztJQUdPLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsbUxBQWMsZUFBQSxFQUFhLFFBQVEsQ0FBQTtJQUV0QyxPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogOTM5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvYXJyb3ctcmlnaHQuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL2Fycm93LXJpZ2h0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgWydwYXRoJywgeyBkOiAnTTUgMTJoMTQnLCBrZXk6ICcxYXlzMGgnIH1dLFxuICBbJ3BhdGgnLCB7IGQ6ICdtMTIgNSA3IDctNyA3Jywga2V5OiAneHF1ejRjJyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBBcnJvd1JpZ2h0XG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSk5OU0F4TW1neE5DSWdMejRLSUNBOGNHRjBhQ0JrUFNKdE1USWdOU0EzSURjdE55QTNJaUF2UGdvOEwzTjJaejRLKSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9hcnJvdy1yaWdodFxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IEFycm93UmlnaHQgPSBjcmVhdGVMdWNpZGVJY29uKCdhcnJvdy1yaWdodCcsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd1JpZ2h0O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBO1FBQUEsQ0FBQTtZQUFFLEdBQUcsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLO1FBQUEsQ0FBVTtLQUFBO0lBQ3pDO1FBQUMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBLENBQUU7WUFBQSxFQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWlCLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFVLENBQUE7S0FBQTtDQUNoRDtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBYSxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBZSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDk4MSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3BsYXkuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL3BsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1sncG9seWdvbicsIHsgcG9pbnRzOiAnNiAzIDIwIDEyIDYgMjEgNiAzJywga2V5OiAnMW9hOGhiJyB9XV07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBQbGF5XG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjRzlzZVdkdmJpQndiMmx1ZEhNOUlqWWdNeUF5TUNBeE1pQTJJREl4SURZZ015SWdMejRLUEM5emRtYytDZz09KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9wbGF5XG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgUGxheSA9IGNyZWF0ZUx1Y2lkZUljb24oJ3BsYXknLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQXVCO0lBQUM7UUFBQyxTQUFXLENBQUE7UUFBQSxDQUFBO1lBQUUsUUFBUSxvQkFBc0IsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVM7UUFBQSxDQUFDO0tBQUM7Q0FBQTtBQWEzRixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQU8sQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFRLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTAxNiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3phcC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvemFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgW1xuICAgICdwYXRoJyxcbiAgICB7XG4gICAgICBkOiAnTTQgMTRhMSAxIDAgMCAxLS43OC0xLjYzbDkuOS0xMC4yYS41LjUgMCAwIDEgLjg2LjQ2bC0xLjkyIDYuMDJBMSAxIDAgMCAwIDEzIDEwaDdhMSAxIDAgMCAxIC43OCAxLjYzbC05LjkgMTAuMmEuNS41IDAgMCAxLS44Ni0uNDZsMS45Mi02LjAyQTEgMSAwIDAgMCAxMSAxNHonLFxuICAgICAga2V5OiAnMXhxMmRiJyxcbiAgICB9LFxuICBdLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIFphcFxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOTkNBeE5HRXhJREVnTUNBd0lERXRMamM0TFRFdU5qTnNPUzQ1TFRFd0xqSmhMalV1TlNBd0lEQWdNU0F1T0RZdU5EWnNMVEV1T1RJZ05pNHdNa0V4SURFZ01DQXdJREFnTVRNZ01UQm9OMkV4SURFZ01DQXdJREVnTGpjNElERXVOak5zTFRrdU9TQXhNQzR5WVM0MUxqVWdNQ0F3SURFdExqZzJMUzQwTm13eExqa3lMVFl1TURKQk1TQXhJREFnTUNBd0lERXhJREUwZWlJZ0x6NEtQQzl6ZG1jK0NnPT0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL3phcFxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IFphcCA9IGNyZWF0ZUx1Y2lkZUljb24oJ3phcCcsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBaYXA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0E7WUFDRSxDQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUNILEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQTtLQUNQO0NBRUo7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQU0sQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsRUFBTyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDEwNTEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3QvZXNtL2RldmVsb3BtZW50L3JlYWN0LWNsaWVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtYXR0ZXIgYXMgdXNlRm9ybWF0dGVyJDEsIHVzZVRyYW5zbGF0aW9ucyBhcyB1c2VUcmFuc2xhdGlvbnMkMSB9IGZyb20gJ3VzZS1pbnRsJztcbmV4cG9ydCAqIGZyb20gJ3VzZS1pbnRsJztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGVudHJ5IGZpbGUgd2hlbiBub24tJ3JlYWN0LXNlcnZlcidcbiAqIGVudmlyb25tZW50cyBpbXBvcnQgZnJvbSAnbmV4dC1pbnRsJy5cbiAqXG4gKiBNYWludGFpbmVyIG5vdGVzOlxuICogLSBNYWtlIHN1cmUgdGhpcyBtaXJyb3JzIHRoZSBBUEkgZnJvbSAncmVhY3Qtc2VydmVyJy5cbiAqIC0gTWFrZSBzdXJlIGV2ZXJ5dGhpbmcgZXhwb3J0ZWQgZnJvbSB0aGlzIG1vZHVsZSBpc1xuICogICBzdXBwb3J0ZWQgaW4gYWxsIE5leHQuanMgdmVyc2lvbnMgdGhhdCBhcmUgc3VwcG9ydGVkLlxuICovXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtZnVuY3Rpb24tdHlwZVxuZnVuY3Rpb24gY2FsbEhvb2sobmFtZSwgaG9vaykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGhvb2soLi4uYXJncyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjYWxsIFxcYCR7bmFtZX1cXGAgYmVjYXVzZSB0aGUgY29udGV4dCBmcm9tIFxcYE5leHRJbnRsQ2xpZW50UHJvdmlkZXJcXGAgd2FzIG5vdCBmb3VuZC5cblxuVGhpcyBjYW4gaGFwcGVuIGJlY2F1c2U6XG4xKSBZb3UgaW50ZW5kZWQgdG8gcmVuZGVyIHRoaXMgY29tcG9uZW50IGFzIGEgU2VydmVyIENvbXBvbmVudCwgdGhlIHJlbmRlclxuICAgZmFpbGVkLCBhbmQgdGhlcmVmb3JlIFJlYWN0IGF0dGVtcHRlZCB0byByZW5kZXIgdGhlIGNvbXBvbmVudCBvbiB0aGUgY2xpZW50XG4gICBpbnN0ZWFkLiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBjaGVjayB0aGUgY29uc29sZSBmb3Igc2VydmVyIGVycm9ycy5cbjIpIFlvdSBpbnRlbmRlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQgb24gdGhlIGNsaWVudCBzaWRlLCBidXQgbm8gY29udGV4dCB3YXMgZm91bmQuXG4gICBMZWFybiBtb3JlIGFib3V0IHRoaXMgZXJyb3IgaGVyZTogaHR0cHM6Ly9uZXh0LWludGwuZGV2L2RvY3MvZW52aXJvbm1lbnRzL3NlcnZlci1jbGllbnQtY29tcG9uZW50cyNtaXNzaW5nLWNvbnRleHRgICk7XG4gICAgfVxuICB9O1xufVxuY29uc3QgdXNlVHJhbnNsYXRpb25zID0gY2FsbEhvb2soJ3VzZVRyYW5zbGF0aW9ucycsIHVzZVRyYW5zbGF0aW9ucyQxKTtcbmNvbnN0IHVzZUZvcm1hdHRlciA9IGNhbGxIb29rKCd1c2VGb3JtYXR0ZXInLCB1c2VGb3JtYXR0ZXIkMSk7XG5cbmV4cG9ydCB7IHVzZUZvcm1hdHRlciwgdXNlVHJhbnNsYXRpb25zIH07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUFHQTs7Ozs7Ozs7Q0FRQyxHQUdELHNFQUFzRTtBQUN0RSxTQUFTLFNBQVMsSUFBSSxFQUFFLElBQUk7SUFDMUIsT0FBTzt5Q0FBSTtZQUFBOztRQUNULElBQUk7WUFDRixPQUFPLFFBQVE7UUFDakIsRUFBRSxVQUFNO1lBQ04sTUFBTSxJQUFJLE1BQU0sQUFBQyxtQkFBd0IsT0FBTCxNQUFLO1FBUTNDO0lBQ0Y7QUFDRjtBQUNBLE1BQU0sa0JBQWtCLFNBQVMsbUJBQW1CLHFLQUFBLENBQUEsa0JBQWlCO0FBQ3JFLE1BQU0sZUFBZSxTQUFTLGdCQUFnQixxS0FBQSxDQUFBLGVBQWMiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fV0KfQ==
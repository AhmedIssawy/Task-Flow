(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": ()=>Input
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input(param) {
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Server-side imports are handled conditionally to avoid client-side issues
// Supported locales configuration
__turbopack_context__.s({
    "DEFAULT_LOCALE": ()=>DEFAULT_LOCALE,
    "LANGUAGE_COOKIE": ()=>LANGUAGE_COOKIE,
    "getCurrentLocale": ()=>getCurrentLocale,
    "getDefaultLocale": ()=>getDefaultLocale,
    "getLocaleDirection": ()=>getLocaleDirection,
    "getLocaleDisplayName": ()=>getLocaleDisplayName,
    "getLocaleFlag": ()=>getLocaleFlag,
    "getLocaleFromCookie": ()=>getLocaleFromCookie,
    "getServerLocale": ()=>getServerLocale,
    "getSupportedLocales": ()=>getSupportedLocales,
    "isValidLocale": ()=>isValidLocale,
    "localeInfo": ()=>localeInfo,
    "locales": ()=>locales,
    "setLocale": ()=>setLocale,
    "setLocaleCookie": ()=>setLocaleCookie,
    "updateHTMLAttributes": ()=>updateHTMLAttributes,
    "validateI18n": ()=>validateI18n
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const locales = [
    'en',
    'ar'
];
const DEFAULT_LOCALE = 'en';
const LANGUAGE_COOKIE = {
    name: 'lang',
    maxAge: 365 * 24 * 60 * 60,
    httpOnly: false,
    secure: ("TURBOPACK compile-time value", "development") === 'production',
    sameSite: 'lax',
    path: '/'
};
const localeInfo = {
    en: {
        name: 'English',
        direction: 'ltr',
        flag: '🇺🇸'
    },
    ar: {
        name: 'العربية',
        direction: 'rtl',
        flag: '🇸🇦'
    }
};
function isValidLocale(locale) {
    return locales.includes(locale);
}
function getDefaultLocale() {
    return DEFAULT_LOCALE;
}
function getSupportedLocales() {
    return locales;
}
async function getServerLocale() {
    try {
        const { cookies } = await __turbopack_context__.r("[project]/node_modules/next/headers.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        const cookieStore = await cookies();
        const langCookie = cookieStore.get(LANGUAGE_COOKIE.name);
        const cookieValue = langCookie === null || langCookie === void 0 ? void 0 : langCookie.value;
        if (cookieValue && isValidLocale(cookieValue)) {
            return cookieValue;
        }
    } catch (error) {
        console.warn('Failed to read language cookie on server:', error);
    }
    return DEFAULT_LOCALE;
}
function getLocaleFromCookie() {
    if (typeof document === 'undefined') return null;
    try {
        const cookies = document.cookie.split(';');
        const langCookie = cookies.find((cookie)=>cookie.trim().startsWith("".concat(LANGUAGE_COOKIE.name, "=")));
        if (langCookie) {
            var _langCookie_split_;
            const cookieValue = (_langCookie_split_ = langCookie.split('=')[1]) === null || _langCookie_split_ === void 0 ? void 0 : _langCookie_split_.trim();
            if (cookieValue && isValidLocale(cookieValue)) {
                return cookieValue;
            }
        }
    } catch (error) {
        console.warn('Failed to read language cookie on client:', error);
    }
    return null;
}
function setLocaleCookie(locale) {
    if (typeof document === 'undefined') return;
    try {
        // Validate locale before setting
        if (!isValidLocale(locale)) {
            console.warn("Invalid locale: ".concat(locale, ". Using default locale."));
            locale = DEFAULT_LOCALE;
        }
        const expires = new Date();
        expires.setTime(expires.getTime() + LANGUAGE_COOKIE.maxAge * 1000);
        const cookieString = [
            "".concat(LANGUAGE_COOKIE.name, "=").concat(locale),
            "expires=".concat(expires.toUTCString()),
            "path=".concat(LANGUAGE_COOKIE.path),
            "SameSite=".concat(LANGUAGE_COOKIE.sameSite),
            LANGUAGE_COOKIE.secure ? 'Secure' : ''
        ].filter(Boolean).join('; ');
        document.cookie = cookieString;
    } catch (error) {
        console.error('Failed to set language cookie:', error);
    }
}
function getCurrentLocale() {
    const cookieLocale = getLocaleFromCookie();
    return cookieLocale || DEFAULT_LOCALE;
}
function setLocale(locale) {
    if (!isValidLocale(locale)) {
        console.warn("Invalid locale: ".concat(locale, ". Using default locale."));
        locale = DEFAULT_LOCALE;
    }
    setLocaleCookie(locale);
    // Update HTML attributes immediately
    updateHTMLAttributes(locale);
    // Trigger a custom event for components to listen to
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent('localeChange', {
            detail: {
                locale
            }
        }));
    }
}
function updateHTMLAttributes(locale) {
    if (typeof document === 'undefined') return;
    try {
        const localeData = localeInfo[locale];
        if (localeData) {
            document.documentElement.lang = locale;
            document.documentElement.dir = localeData.direction;
        }
    } catch (error) {
        console.error('Failed to update HTML attributes:', error);
    }
}
function getLocaleDirection(locale) {
    var _localeInfo_locale;
    return ((_localeInfo_locale = localeInfo[locale]) === null || _localeInfo_locale === void 0 ? void 0 : _localeInfo_locale.direction) || 'ltr';
}
function getLocaleDisplayName(locale) {
    var _localeInfo_locale;
    return ((_localeInfo_locale = localeInfo[locale]) === null || _localeInfo_locale === void 0 ? void 0 : _localeInfo_locale.name) || locale;
}
function getLocaleFlag(locale) {
    var _localeInfo_locale;
    return ((_localeInfo_locale = localeInfo[locale]) === null || _localeInfo_locale === void 0 ? void 0 : _localeInfo_locale.flag) || '🌐';
}
function validateI18n() {
    try {
        return locales.length > 0 && DEFAULT_LOCALE !== undefined;
    } catch (e) {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useLanguage() {
    _s();
    const [currentLocale, setCurrentLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLanguage.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLocale"])()
    }["useLanguage.useState"]);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Available locales with enhanced information
    const availableLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupportedLocales"])().map((code)=>({
            code,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][code].name,
            dir: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][code].direction,
            flag: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][code].flag
        }));
    const currentLocaleInfo = availableLocales.find((l)=>l.code === currentLocale);
    // Listen for locale changes from other components or tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLanguage.useEffect": ()=>{
            const handleLocaleChange = {
                "useLanguage.useEffect.handleLocaleChange": (event)=>{
                    setCurrentLocale(event.detail.locale);
                }
            }["useLanguage.useEffect.handleLocaleChange"];
            window.addEventListener('localeChange', handleLocaleChange);
            return ({
                "useLanguage.useEffect": ()=>{
                    window.removeEventListener('localeChange', handleLocaleChange);
                }
            })["useLanguage.useEffect"];
        }
    }["useLanguage.useEffect"], []);
    // 🔥 OPTIMIZED: Replace polling with event-driven cross-tab sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLanguage.useEffect": ()=>{
            // Handle storage events for cross-tab synchronization
            const handleStorageChange = {
                "useLanguage.useEffect.handleStorageChange": (event)=>{
                    if (event.key === 'locale-sync' && event.newValue) {
                        const newLocale = event.newValue;
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLocale"])(newLocale) && newLocale !== currentLocale) {
                            setCurrentLocale(newLocale);
                        }
                    }
                }
            }["useLanguage.useEffect.handleStorageChange"];
            // Handle focus events to check for external cookie changes
            const handleFocus = {
                "useLanguage.useEffect.handleFocus": ()=>{
                    const cookieLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLocale"])();
                    if (cookieLocale !== currentLocale) {
                        setCurrentLocale(cookieLocale);
                    }
                }
            }["useLanguage.useEffect.handleFocus"];
            // Handle visibility change for better performance
            const handleVisibilityChange = {
                "useLanguage.useEffect.handleVisibilityChange": ()=>{
                    if (!document.hidden) {
                        const cookieLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLocale"])();
                        if (cookieLocale !== currentLocale) {
                            setCurrentLocale(cookieLocale);
                        }
                    }
                }
            }["useLanguage.useEffect.handleVisibilityChange"];
            window.addEventListener('storage', handleStorageChange);
            window.addEventListener('focus', handleFocus);
            document.addEventListener('visibilitychange', handleVisibilityChange);
            return ({
                "useLanguage.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                    window.removeEventListener('focus', handleFocus);
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            })["useLanguage.useEffect"];
        }
    }["useLanguage.useEffect"], [
        currentLocale
    ]);
    const switchLanguage = (newLocale)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLocale"])(newLocale) || newLocale === currentLocale) return;
        startTransition(()=>{
            // Use the centralized setLocale function which handles:
            // - Cookie setting
            // - HTML attribute updates
            // - Event dispatching for component updates
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLocale"])(newLocale);
            // 🔥 NEW: Trigger cross-tab sync via localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                // Clear any existing timeout
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                localStorage.setItem('locale-sync', newLocale);
                // Remove the sync item after a short delay to avoid memory buildup
                timeoutRef.current = setTimeout(()=>{
                    localStorage.removeItem('locale-sync');
                    timeoutRef.current = null;
                }, 1000);
            }
            // Update local state immediately for visual feedback
            setCurrentLocale(newLocale);
            // Force a re-render of the entire app by reloading
            // This ensures all server components get the new locale
            setTimeout(()=>{
                window.location.reload();
            }, 100); // Small delay for visual feedback
        });
    };
    return {
        locale: currentLocale,
        switchLanguage,
        availableLocales,
        currentLocaleInfo,
        isPending,
        isRTL: currentLocale === 'ar'
    };
}
_s(useLanguage, "QQPRj1Kxv9rYNFGEvF80ptD+RSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/role.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "isValidRole": ()=>isValidRole,
    "normalizeRole": ()=>normalizeRole
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)");
;
function isValidRole(value) {
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoleEnum"]).includes(value.toUpperCase());
}
function normalizeRole(value) {
    const normalized = value.toUpperCase().replace(/-/g, '_');
    return isValidRole(normalized) ? normalized : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": ()=>DropdownMenu,
    "DropdownMenuCheckboxItem": ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent": ()=>DropdownMenuContent,
    "DropdownMenuGroup": ()=>DropdownMenuGroup,
    "DropdownMenuItem": ()=>DropdownMenuItem,
    "DropdownMenuLabel": ()=>DropdownMenuLabel,
    "DropdownMenuPortal": ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup": ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem": ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator": ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut": ()=>DropdownMenuShortcut,
    "DropdownMenuSub": ()=>DropdownMenuSub,
    "DropdownMenuSubContent": ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger": ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger": ()=>DropdownMenuTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent(param) {
    let { className, sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem(param) {
    let { className, inset, variant = "default", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem(param) {
    let { className, children, checked, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel(param) {
    let { className, inset, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger(param) {
    let { className, inset, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/theme-toggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggle": ()=>ThemeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ThemeToggle() {
    _s();
    const { setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "relative hover:bg-accent transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 theme-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/theme-toggle.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 theme-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/theme-toggle.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/theme-toggle.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/theme-toggle.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[140px] dropdown-content-enhanced",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme('light'),
                        className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ".concat(theme === 'light' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme('dark'),
                        className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ".concat(theme === 'dark' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Dark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme('system'),
                        className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ".concat(theme === 'system' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "System"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/theme-toggle.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(ThemeToggle, "kjMaTCu4pMuEcNEiAMgHdDqRIck=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/made/language-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageSwitcher": ()=>LanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Flag icons as components with enhanced styling
const FlagIcon = (param)=>{
    let { country, className = "w-4 h-4" } = param;
    const flag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocaleFlag"])(country);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "".concat(className, " flex items-center justify-center text-lg leading-none transition-transform duration-200 hover:scale-110"),
        children: flag
    }, void 0, false, {
        fileName: "[project]/src/components/made/language-switcher.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FlagIcon;
function LanguageSwitcher() {
    _s();
    const { switchLanguage, availableLocales, currentLocaleInfo, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const handleLanguageSwitch = (localeCode)=>{
        // Prevent switching to the same language
        if (localeCode === (currentLocaleInfo === null || currentLocaleInfo === void 0 ? void 0 : currentLocaleInfo.code)) return;
        // Call the switch function which now handles cookie-based switching
        switchLanguage(localeCode);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    disabled: isPending,
                    className: "h-9 px-3 bg-background hover:bg-accent border-border hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md ".concat(isPending ? 'opacity-70 cursor-not-allowed' : ''),
                    "aria-label": "Current language: ".concat(currentLocaleInfo === null || currentLocaleInfo === void 0 ? void 0 : currentLocaleInfo.name, ". Click to change language."),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagIcon, {
                            country: (currentLocaleInfo === null || currentLocaleInfo === void 0 ? void 0 : currentLocaleInfo.code) || 'en',
                            className: "w-4 h-4 mr-2 flag-icon ".concat(isPending ? 'animate-pulse' : '')
                        }, void 0, false, {
                            fileName: "[project]/src/components/made/language-switcher.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: currentLocaleInfo === null || currentLocaleInfo === void 0 ? void 0 : currentLocaleInfo.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/made/language-switcher.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-2 w-3 h-3 border border-current border-t-transparent rounded-full animate-spin",
                            "aria-label": "Changing language..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/made/language-switcher.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/made/language-switcher.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/made/language-switcher.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[160px] p-1 dropdown-content-enhanced",
                sideOffset: 4,
                children: availableLocales.map((locale)=>{
                    const isCurrentLocale = (currentLocaleInfo === null || currentLocaleInfo === void 0 ? void 0 : currentLocaleInfo.code) === locale.code;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>handleLanguageSwitch(locale.code),
                        disabled: isPending || isCurrentLocale,
                        className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ".concat(isCurrentLocale ? 'bg-primary/10 text-primary cursor-default' : isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent hover:text-accent-foreground active:bg-accent/80'),
                        "aria-label": "Switch to ".concat(locale.name),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagIcon, {
                                country: locale.code,
                                className: "w-4 h-4 flag-icon ".concat(isPending && !isCurrentLocale ? 'opacity-50' : '')
                            }, void 0, false, {
                                fileName: "[project]/src/components/made/language-switcher.tsx",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium flex-1",
                                children: locale.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/made/language-switcher.tsx",
                                lineNumber: 86,
                                columnNumber: 29
                            }, this),
                            isCurrentLocale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-4 h-4 text-primary animate-in fade-in-0 zoom-in-95 duration-200",
                                "aria-label": "Current language"
                            }, void 0, false, {
                                fileName: "[project]/src/components/made/language-switcher.tsx",
                                lineNumber: 90,
                                columnNumber: 33
                            }, this)
                        ]
                    }, locale.code, true, {
                        fileName: "[project]/src/components/made/language-switcher.tsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/made/language-switcher.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/made/language-switcher.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(LanguageSwitcher, "HLpmAPS5gyw5/yLb4KyA1UBhTDg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = LanguageSwitcher;
var _c, _c1;
__turbopack_context__.k.register(_c, "FlagIcon");
__turbopack_context__.k.register(_c1, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/components/login/LoginForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LoginForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/roleRedirect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$role$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/role.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/made/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobile.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function LoginForm() {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [login, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('auth.login');
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { isMobile, isMobilePlatform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setErrorMessage('');
        try {
            var _data_user;
            const { data } = await login({
                id: userId,
                password
            }).unwrap();
            console.log("login data", data);
            const role = data.role;
            const redirectPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathByRole"])(role, data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.id);
            const normalizedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$role$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRole"])(role);
            if (!normalizedRole) {
                console.error('Invalid role from backend:', role);
                return;
            }
            router.push(redirectPath);
        } catch (err) {
            console.error('Login failed:', err);
            if (err.status === 400) {
                setErrorMessage('Invalid credentials. Please try again.');
            } else {
                setErrorMessage('');
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative ".concat(isMobilePlatform ? 'mobile-safe-content' : ''),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "".concat(isMobile ? 'p-4 w-full' : 'p-8', " h-full flex flex-col justify-center"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card rounded-2xl shadow-xl border border-border ".concat(isMobile ? 'w-full min-h-[500px]' : ''),
                    style: !isMobile ? {
                        width: '480px',
                        minHeight: '600px'
                    } : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-start mb-6 pt-4 px-4", isRTL ? "space-x-reverse" : "space-x-2"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(" flex items-center space-x-3", isRTL ? "" : " rtl:space-x-reverse"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                                fileName: "[project]/src/components/login/LoginForm.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                                fileName: "[project]/src/components/login/LoginForm.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/login/LoginForm.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-bold text-primary font-primary ml-2 rtl:ml-0 rtl:mr-2",
                                    children: t('brandName')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm",
                                    children: t('subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/login/LoginForm.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6 px-4 flex-grow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm pr-2 pl-2 font-medium text-foreground block", isRTL ? "text-right" : "text-left"),
                                            children: t('userIdLabel')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/login/LoginForm.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: t('enterUserId'),
                                                    value: userId,
                                                    onChange: (e)=>setUserId(e.target.value),
                                                    type: "text",
                                                    required: true,
                                                    dir: isRTL ? 'rtl' : 'ltr',
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("".concat(isMobile ? 'h-14' : 'h-12', " rounded-md border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-200"), "focus:ring-2 focus:ring-primary/20 focus:border-primary", isRTL ? 'text-right pr-12 pl-4' : 'text-left pl-12 pr-4', errorMessage && 'border-destructive focus:border-destructive focus:ring-destructive/20', isMobilePlatform && 'mobile-touch-target')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors", isRTL ? 'right-4' : 'left-4')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/login/LoginForm.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm pr-2 pl-2 font-medium text-foreground block", isRTL ? "text-right" : "text-left"),
                                            children: t('password')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/login/LoginForm.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: t('enterPassword'),
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    type: showPassword ? 'text' : 'password',
                                                    required: true,
                                                    dir: isRTL ? 'rtl' : 'ltr',
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("".concat(isMobile ? 'h-14' : 'h-12', " rounded-md border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-200"), "focus:ring-2 focus:ring-primary/20 focus:border-primary", isRTL ? 'text-right pr-12 pl-12' : 'text-left pl-12 pr-12', errorMessage && 'border-destructive focus:border-destructive focus:ring-destructive/20', isMobilePlatform && 'mobile-touch-target')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors", isRTL ? 'right-4' : 'left-4')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-1/2 transform -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors rounded-md", isRTL ? 'left-3' : 'right-3'),
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/login/LoginForm.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/login/LoginForm.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/login/LoginForm.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-3 bg-destructive/10 border border-destructive/20 rounded-xl", isRTL ? "space-x-reverse" : "space-x-2"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-4 h-4 text-destructive flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/login/LoginForm.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-destructive",
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/login/LoginForm.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isLoading || !userId.trim() || !password.trim(),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full ".concat(isMobile ? 'h-14' : 'h-12', " bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base rounded-xl"), "shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5", "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg", "focus:ring-2 focus:ring-primary/20 focus:ring-offset-2", isMobilePlatform && 'mobile-touch-target'),
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center", isRTL ? "space-x-reverse" : "space-x-2"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/login/LoginForm.tsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: isRTL ? "mr-2" : "ml-2",
                                                children: t('loggingIn')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/login/LoginForm.tsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/login/LoginForm.tsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this) : t('submit')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/login/LoginForm.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/login/LoginForm.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/login/LoginForm.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/login/LoginForm.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/login/LoginForm.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/login/LoginForm.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "A45Mk9aDYAi2YaasizWdd35819I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/auth/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LoginPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$login$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/login/LoginForm.tsx [app-client] (ecmascript)");
'use client';
;
;
function LoginPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$login$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/auth/login/page.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSBcImNsc3hcIlxyXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xyXG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7O0FBRU8sU0FBUztJQUFHLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHLFNBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBRyxPQUFILFFBQUEsU0FBQSxDQUFBLEtBQXVCOztJQUN4QyxPQUFPLENBQUEsR0FBQSw4SkFBQSxDQUFBLFVBQU8sQUFBRCxFQUFFLENBQUEsR0FBQSx3SUFBQSxDQUFBLE9BQUksQUFBRCxFQUFFO0FBQ3RCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyOSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5cclxuZnVuY3Rpb24gSW5wdXQoeyBjbGFzc05hbWUsIHR5cGUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiaW5wdXRcIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIGRhdGEtc2xvdD1cImlucHV0XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZpbGU6dGV4dC1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzZWxlY3Rpb246YmctcHJpbWFyeSBzZWxlY3Rpb246dGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBib3JkZXItaW5wdXQgZmxleCBoLTkgdy1mdWxsIG1pbi13LTAgcm91bmRlZC1tZCBib3JkZXIgYmctdHJhbnNwYXJlbnQgcHgtMyBweS0xIHRleHQtYmFzZSBzaGFkb3cteHMgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gb3V0bGluZS1ub25lIGZpbGU6aW5saW5lLWZsZXggZmlsZTpoLTcgZmlsZTpib3JkZXItMCBmaWxlOmJnLXRyYW5zcGFyZW50IGZpbGU6dGV4dC1zbSBmaWxlOmZvbnQtbWVkaXVtIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgbWQ6dGV4dC1zbVwiLFxyXG4gICAgICAgIFwiZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF1cIixcclxuICAgICAgICBcImFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZVwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgSW5wdXQgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOzs7QUFFQSxTQUFTLE1BQU0sS0FBNEQ7UUFBNUQsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBc0MsR0FBNUQ7SUFDYixxQkFDRSw2TEFBQztRQUNDLE1BQU07UUFDTixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixtY0FDQSxpRkFDQSwwR0FDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7S0FkUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNjIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIlxyXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcclxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgc2hyaW5rLTAgWyZfc3ZnXTpzaHJpbmstMCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlXCIsXHJcbiAge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDoge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LXhzIGhvdmVyOmJnLXByaW1hcnkvOTBcIixcclxuICAgICAgICBkZXN0cnVjdGl2ZTpcclxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC13aGl0ZSBzaGFkb3cteHMgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIGRhcms6YmctZGVzdHJ1Y3RpdmUvNjBcIixcclxuICAgICAgICBvdXRsaW5lOlxyXG4gICAgICAgICAgXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OlxyXG4gICAgICAgICAgXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6Ymctc2Vjb25kYXJ5LzgwXCIsXHJcbiAgICAgICAgZ2hvc3Q6XHJcbiAgICAgICAgICBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhcms6aG92ZXI6YmctYWNjZW50LzUwXCIsXHJcbiAgICAgICAgbGluazogXCJ0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtNCBweS0yIGhhcy1bPnN2Z106cHgtM1wiLFxyXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxyXG4gICAgICAgIGxnOiBcImgtMTAgcm91bmRlZC1tZCBweC02IGhhcy1bPnN2Z106cHgtNFwiLFxyXG4gICAgICAgIGljb246IFwic2l6ZS05XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgIH0sXHJcbiAgfVxyXG4pXHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICB2YXJpYW50LFxyXG4gIHNpemUsXHJcbiAgYXNDaGlsZCA9IGZhbHNlLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICZcclxuICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiAmIHtcclxuICAgIGFzQ2hpbGQ/OiBib29sZWFuXHJcbiAgfSkge1xyXG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wXHJcbiAgICAgIGRhdGEtc2xvdD1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxNQUFNLGlCQUFpQixDQUFBLEdBQUEsbUtBQUEsQ0FBQSxNQUFHLEFBQUQsRUFDdkIsOGNBQ0E7SUFDRSxVQUFVO1FBQ1IsU0FBUztZQUNQLFNBQ0U7WUFDRixhQUNFO1lBQ0YsU0FDRTtZQUNGLFdBQ0U7WUFDRixPQUNFO1lBQ0YsTUFBTTtRQUNSO1FBQ0EsTUFBTTtZQUNKLFNBQVM7WUFDVCxJQUFJO1lBQ0osSUFBSTtZQUNKLE1BQU07UUFDUjtJQUNGO0lBQ0EsaUJBQWlCO1FBQ2YsU0FBUztRQUNULE1BQU07SUFDUjtBQUNGO0FBR0YsU0FBUyxPQUFPLEtBU2I7UUFUYSxFQUNkLFNBQVMsRUFDVCxPQUFPLEVBQ1AsSUFBSSxFQUNKLFVBQVUsS0FBSyxFQUNmLEdBQUcsT0FJRixHQVRhO0lBVWQsTUFBTSxPQUFPLFVBQVUsbUtBQUEsQ0FBQSxPQUFJLEdBQUc7SUFFOUIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxlQUFlO1lBQUU7WUFBUztZQUFNO1FBQVU7UUFDdkQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtLQW5CUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTI2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2xpYi9pMThuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNlcnZlci1zaWRlIGltcG9ydHMgYXJlIGhhbmRsZWQgY29uZGl0aW9uYWxseSB0byBhdm9pZCBjbGllbnQtc2lkZSBpc3N1ZXNcclxuXHJcbi8vIFN1cHBvcnRlZCBsb2NhbGVzIGNvbmZpZ3VyYXRpb25cclxuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ2FyJ10gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIExvY2FsZSA9IHR5cGVvZiBsb2NhbGVzW251bWJlcl07XHJcblxyXG4vLyBEZWZhdWx0IGxvY2FsZVxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTEU6IExvY2FsZSA9ICdlbic7XHJcblxyXG4vLyBDb29raWUgY29uZmlndXJhdGlvblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfQ09PS0lFID0ge1xyXG4gICAgbmFtZTogJ2xhbmcnLFxyXG4gICAgbWF4QWdlOiAzNjUgKiAyNCAqIDYwICogNjAsIC8vIDEgeWVhciBpbiBzZWNvbmRzXHJcbiAgICBodHRwT25seTogZmFsc2UsIC8vIEFjY2Vzc2libGUgdG8gY2xpZW50LXNpZGUgSmF2YVNjcmlwdFxyXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgc2FtZVNpdGU6ICdsYXgnIGFzIGNvbnN0LFxyXG4gICAgcGF0aDogJy8nLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gTG9jYWxlIGluZm9ybWF0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2NhbGVJbmZvID0ge1xyXG4gICAgZW46IHtcclxuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnbHRyJyBhcyBjb25zdCxcclxuICAgICAgICBmbGFnOiAn8J+HuvCfh7gnLFxyXG4gICAgfSxcclxuICAgIGFyOiB7XHJcbiAgICAgICAgbmFtZTogJ9in2YTYudix2KjZitipJyxcclxuICAgICAgICBkaXJlY3Rpb246ICdydGwnIGFzIGNvbnN0LFxyXG4gICAgICAgIGZsYWc6ICfwn4e48J+HpicsXHJcbiAgICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gVmFsaWRhdGUgaWYgYSBsb2NhbGUgaXMgc3VwcG9ydGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTG9jYWxlKGxvY2FsZTogc3RyaW5nKTogbG9jYWxlIGlzIExvY2FsZSB7XHJcbiAgICByZXR1cm4gbG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUgYXMgTG9jYWxlKTtcclxufVxyXG5cclxuLy8gR2V0IGRlZmF1bHQgbG9jYWxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TG9jYWxlKCk6IExvY2FsZSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9MT0NBTEU7XHJcbn1cclxuXHJcbi8vIEdldCBzdXBwb3J0ZWQgbG9jYWxlcyBsaXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRMb2NhbGVzKCk6IHJlYWRvbmx5IExvY2FsZVtdIHtcclxuICAgIHJldHVybiBsb2NhbGVzO1xyXG59XHJcblxyXG4vLyBTZXJ2ZXItc2lkZSBjb29raWUgcmVhZGluZyAoTmV4dC5qcylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlckxvY2FsZSgpOiBQcm9taXNlPExvY2FsZT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGNvb2tpZXMgfSA9IGF3YWl0IGltcG9ydCgnbmV4dC9oZWFkZXJzJyk7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ0Nvb2tpZSA9IGNvb2tpZVN0b3JlLmdldChMQU5HVUFHRV9DT09LSUUubmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBsYW5nQ29va2llPy52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvb2tpZVZhbHVlICYmIGlzVmFsaWRMb2NhbGUoY29va2llVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWVWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYWQgbGFuZ3VhZ2UgY29va2llIG9uIHNlcnZlcjonLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBDbGllbnQtc2lkZSBjb29raWUgcmVhZGluZ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRnJvbUNvb2tpZSgpOiBMb2NhbGUgfCBudWxsIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICBjb25zdCBsYW5nQ29va2llID0gY29va2llcy5maW5kKGNvb2tpZSA9PlxyXG4gICAgICAgICAgICBjb29raWUudHJpbSgpLnN0YXJ0c1dpdGgoYCR7TEFOR1VBR0VfQ09PS0lFLm5hbWV9PWApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGxhbmdDb29raWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBsYW5nQ29va2llLnNwbGl0KCc9JylbMV0/LnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKGNvb2tpZVZhbHVlICYmIGlzVmFsaWRMb2NhbGUoY29va2llVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYWQgbGFuZ3VhZ2UgY29va2llIG9uIGNsaWVudDonLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8vIENsaWVudC1zaWRlIGNvb2tpZSB3cml0aW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGVDb29raWUobG9jYWxlOiBMb2NhbGUpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBsb2NhbGUgYmVmb3JlIHNldHRpbmdcclxuICAgICAgICBpZiAoIWlzVmFsaWRMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgbG9jYWxlOiAke2xvY2FsZX0uIFVzaW5nIGRlZmF1bHQgbG9jYWxlLmApO1xyXG4gICAgICAgICAgICBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArIChMQU5HVUFHRV9DT09LSUUubWF4QWdlICogMTAwMCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBbXHJcbiAgICAgICAgICAgIGAke0xBTkdVQUdFX0NPT0tJRS5uYW1lfT0ke2xvY2FsZX1gLFxyXG4gICAgICAgICAgICBgZXhwaXJlcz0ke2V4cGlyZXMudG9VVENTdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICBgcGF0aD0ke0xBTkdVQUdFX0NPT0tJRS5wYXRofWAsXHJcbiAgICAgICAgICAgIGBTYW1lU2l0ZT0ke0xBTkdVQUdFX0NPT0tJRS5zYW1lU2l0ZX1gLFxyXG4gICAgICAgICAgICBMQU5HVUFHRV9DT09LSUUuc2VjdXJlID8gJ1NlY3VyZScgOiAnJyxcclxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCc7ICcpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZXQgbGFuZ3VhZ2UgY29va2llOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0IGN1cnJlbnQgbG9jYWxlIChjbGllbnQtc2lkZSlcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhbGUoKTogTG9jYWxlIHtcclxuICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldExvY2FsZUZyb21Db29raWUoKTtcclxuICAgIHJldHVybiBjb29raWVMb2NhbGUgfHwgREVGQVVMVF9MT0NBTEU7XHJcbn1cclxuXHJcbi8vIFNldCBsb2NhbGUgKGNsaWVudC1zaWRlKVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzVmFsaWRMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBsb2NhbGU6ICR7bG9jYWxlfS4gVXNpbmcgZGVmYXVsdCBsb2NhbGUuYCk7XHJcbiAgICAgICAgbG9jYWxlID0gREVGQVVMVF9MT0NBTEU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYWxlQ29va2llKGxvY2FsZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIEhUTUwgYXR0cmlidXRlcyBpbW1lZGlhdGVseVxyXG4gICAgdXBkYXRlSFRNTEF0dHJpYnV0ZXMobG9jYWxlKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGEgY3VzdG9tIGV2ZW50IGZvciBjb21wb25lbnRzIHRvIGxpc3RlbiB0b1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsb2NhbGVDaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDogeyBsb2NhbGUgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXBkYXRlIEhUTUwgYXR0cmlidXRlcyBiYXNlZCBvbiBsb2NhbGVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhUTUxBdHRyaWJ1dGVzKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlRGF0YSA9IGxvY2FsZUluZm9bbG9jYWxlXTtcclxuICAgICAgICBpZiAobG9jYWxlRGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxvY2FsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9IGxvY2FsZURhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBHZXQgbG9jYWxlIGRpcmVjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGlyZWN0aW9uKGxvY2FsZTogTG9jYWxlKTogJ2x0cicgfCAncnRsJyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5kaXJlY3Rpb24gfHwgJ2x0cic7XHJcbn1cclxuXHJcbi8vIEdldCBsb2NhbGUgZGlzcGxheSBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEaXNwbGF5TmFtZShsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5uYW1lIHx8IGxvY2FsZTtcclxufVxyXG5cclxuLy8gR2V0IGxvY2FsZSBmbGFnXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVGbGFnKGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbGVJbmZvW2xvY2FsZV0/LmZsYWcgfHwgJ/CfjJAnO1xyXG59XHJcblxyXG4vLyBUeXBlU2NyaXB0IHZhbGlkYXRpb24gZm9yIGkxOG4gc2V0dXAgKGxlZ2FjeSBmdW5jdGlvbiBrZXB0IGZvciBjb21wYXRpYmlsaXR5KVxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJMThuKCk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlcy5sZW5ndGggPiAwICYmIERFRkFVTFRfTE9DQUxFICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUU1RSxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRCO0FBWEwsTUFBTSxVQUFVO0lBQUM7SUFBTTtDQUFLO0FBSTVCLE1BQU0saUJBQXlCO0FBRy9CLE1BQU0sa0JBQWtCO0lBQzNCLE1BQU07SUFDTixRQUFRLE1BQU0sS0FBSyxLQUFLO0lBQ3hCLFVBQVU7SUFDVixRQUFRLG9EQUF5QjtJQUNqQyxVQUFVO0lBQ1YsTUFBTTtBQUNWO0FBR08sTUFBTSxhQUFhO0lBQ3RCLElBQUk7UUFDQSxNQUFNO1FBQ04sV0FBVztRQUNYLE1BQU07SUFDVjtJQUNBLElBQUk7UUFDQSxNQUFNO1FBQ04sV0FBVztRQUNYLE1BQU07SUFDVjtBQUNKO0FBR08sU0FBUyxjQUFjLE1BQWM7SUFDeEMsT0FBTyxRQUFRLFFBQVEsQ0FBQztBQUM1QjtBQUdPLFNBQVM7SUFDWixPQUFPO0FBQ1g7QUFHTyxTQUFTO0lBQ1osT0FBTztBQUNYO0FBR08sZUFBZTtJQUNsQixJQUFJO1FBQ0EsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHO1FBQ3BCLE1BQU0sY0FBYyxNQUFNO1FBQzFCLE1BQU0sYUFBYSxZQUFZLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSTtRQUN2RCxN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O0FBR08sU0FBUyxjQUFjLE1BQWM7UUFDakM7SUFBUCxPQUFPLEVBQUEscUJBQUEsVUFBVSxDQUFDLE9BQU8sY0FBbEIseUNBQUEsbUJBQW9CLElBQUksS0FBSTtBQUN2QztBQUdPLFNBQVM7SUFDWixJQUFJO1FBQ0EsT0FBTyxRQUFRLE1BQU0sR0FBRyxLQUFLLG1CQUFtQjtJQUNwRCxFQUFFLFVBQU07UUFDSixPQUFPO0lBQ1g7QUFDSiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjk2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2hvb2tzL3VzZUxhbmd1YWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVRyYW5zaXRpb24sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBnZXRDdXJyZW50TG9jYWxlLFxyXG4gIHNldExvY2FsZSxcclxuICBsb2NhbGVJbmZvLFxyXG4gIGdldFN1cHBvcnRlZExvY2FsZXMsXHJcbiAgaXNWYWxpZExvY2FsZSxcclxuICB0eXBlIExvY2FsZVxyXG59IGZyb20gJ0AvbGliL2kxOG4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50TG9jYWxlLCBzZXRDdXJyZW50TG9jYWxlXSA9IHVzZVN0YXRlPExvY2FsZT4oKCkgPT4gZ2V0Q3VycmVudExvY2FsZSgpKTtcclxuICBjb25zdCBbaXNQZW5kaW5nLCBzdGFydFRyYW5zaXRpb25dID0gdXNlVHJhbnNpdGlvbigpO1xyXG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLy8gQXZhaWxhYmxlIGxvY2FsZXMgd2l0aCBlbmhhbmNlZCBpbmZvcm1hdGlvblxyXG4gIGNvbnN0IGF2YWlsYWJsZUxvY2FsZXMgPSBnZXRTdXBwb3J0ZWRMb2NhbGVzKCkubWFwKGNvZGUgPT4gKHtcclxuICAgIGNvZGUsXHJcbiAgICBuYW1lOiBsb2NhbGVJbmZvW2NvZGVdLm5hbWUsXHJcbiAgICBkaXI6IGxvY2FsZUluZm9bY29kZV0uZGlyZWN0aW9uLFxyXG4gICAgZmxhZzogbG9jYWxlSW5mb1tjb2RlXS5mbGFnXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50TG9jYWxlSW5mbyA9IGF2YWlsYWJsZUxvY2FsZXMuZmluZCgobCkgPT4gbC5jb2RlID09PSBjdXJyZW50TG9jYWxlKTtcclxuXHJcbiAgLy8gTGlzdGVuIGZvciBsb2NhbGUgY2hhbmdlcyBmcm9tIG90aGVyIGNvbXBvbmVudHMgb3IgdGFic1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVMb2NhbGVDaGFuZ2UgPSAoZXZlbnQ6IEN1c3RvbUV2ZW50PHsgbG9jYWxlOiBMb2NhbGUgfT4pID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvY2FsZShldmVudC5kZXRhaWwubG9jYWxlKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2FsZUNoYW5nZScsIGhhbmRsZUxvY2FsZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxlQ2hhbmdlJywgaGFuZGxlTG9jYWxlQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIPCflKUgT1BUSU1JWkVEOiBSZXBsYWNlIHBvbGxpbmcgd2l0aCBldmVudC1kcml2ZW4gY3Jvc3MtdGFiIHN5bmNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHN0b3JhZ2UgZXZlbnRzIGZvciBjcm9zcy10YWIgc3luY2hyb25pemF0aW9uXHJcbiAgICBjb25zdCBoYW5kbGVTdG9yYWdlQ2hhbmdlID0gKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2xvY2FsZS1zeW5jJyAmJiBldmVudC5uZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xvY2FsZSA9IGV2ZW50Lm5ld1ZhbHVlO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkTG9jYWxlKG5ld0xvY2FsZSkgJiYgbmV3TG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb2N1cyBldmVudHMgdG8gY2hlY2sgZm9yIGV4dGVybmFsIGNvb2tpZSBjaGFuZ2VzXHJcbiAgICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY29va2llTG9jYWxlID0gZ2V0Q3VycmVudExvY2FsZSgpO1xyXG4gICAgICBpZiAoY29va2llTG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudExvY2FsZShjb29raWVMb2NhbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSB2aXNpYmlsaXR5IGNoYW5nZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICBjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldEN1cnJlbnRMb2NhbGUoKTtcclxuICAgICAgICBpZiAoY29va2llTG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TG9jYWxlKGNvb2tpZUxvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICAgIGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbY3VycmVudExvY2FsZV0pO1xyXG5cclxuICBjb25zdCBzd2l0Y2hMYW5ndWFnZSA9IChuZXdMb2NhbGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFpc1ZhbGlkTG9jYWxlKG5ld0xvY2FsZSkgfHwgbmV3TG9jYWxlID09PSBjdXJyZW50TG9jYWxlKSByZXR1cm47XHJcblxyXG4gICAgc3RhcnRUcmFuc2l0aW9uKCgpID0+IHtcclxuICAgICAgLy8gVXNlIHRoZSBjZW50cmFsaXplZCBzZXRMb2NhbGUgZnVuY3Rpb24gd2hpY2ggaGFuZGxlczpcclxuICAgICAgLy8gLSBDb29raWUgc2V0dGluZ1xyXG4gICAgICAvLyAtIEhUTUwgYXR0cmlidXRlIHVwZGF0ZXNcclxuICAgICAgLy8gLSBFdmVudCBkaXNwYXRjaGluZyBmb3IgY29tcG9uZW50IHVwZGF0ZXNcclxuICAgICAgc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcblxyXG4gICAgICAvLyDwn5SlIE5FVzogVHJpZ2dlciBjcm9zcy10YWIgc3luYyB2aWEgbG9jYWxTdG9yYWdlXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0XHJcbiAgICAgICAgaWYgKHRpbWVvdXRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlLXN5bmMnLCBuZXdMb2NhbGUpO1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc3luYyBpdGVtIGFmdGVyIGEgc2hvcnQgZGVsYXkgdG8gYXZvaWQgbWVtb3J5IGJ1aWxkdXBcclxuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2NhbGUtc3luYycpO1xyXG4gICAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIGltbWVkaWF0ZWx5IGZvciB2aXN1YWwgZmVlZGJhY2tcclxuICAgICAgc2V0Q3VycmVudExvY2FsZShuZXdMb2NhbGUpO1xyXG5cclxuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIgb2YgdGhlIGVudGlyZSBhcHAgYnkgcmVsb2FkaW5nXHJcbiAgICAgIC8vIFRoaXMgZW5zdXJlcyBhbGwgc2VydmVyIGNvbXBvbmVudHMgZ2V0IHRoZSBuZXcgbG9jYWxlXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSwgMTAwKTsgLy8gU21hbGwgZGVsYXkgZm9yIHZpc3VhbCBmZWVkYmFja1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogY3VycmVudExvY2FsZSxcclxuICAgIHN3aXRjaExhbmd1YWdlLFxyXG4gICAgYXZhaWxhYmxlTG9jYWxlcyxcclxuICAgIGN1cnJlbnRMb2NhbGVJbmZvLFxyXG4gICAgaXNQZW5kaW5nLFxyXG4gICAgaXNSVEw6IGN1cnJlbnRMb2NhbGUgPT09ICdhcidcclxuICB9O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0FBQ0E7O0FBSEE7OztBQVlPLFNBQVM7O0lBQ2QsTUFBTSxDQUFDLGVBQWUsaUJBQWlCLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFEO2dDQUFVLElBQU0sQ0FBQSxHQUFBLHFIQUFBLENBQUEsbUJBQWdCLEFBQUQ7O0lBQ2hGLE1BQU0sQ0FBQyxXQUFXLGdCQUFnQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLGdCQUFhLEFBQUQ7SUFDakQsTUFBTSxhQUFhLENBQUEsR0FBQSw2SkFBQSxDQUFBLFNBQU0sQUFBRCxFQUF5QjtJQUVqRCw4Q0FBOEM7SUFDOUMsTUFBTSxtQkFBbUIsQ0FBQSxHQUFBLHFIQUFBLENBQUEsc0JBQW1CLEFBQUQsSUFBSSxHQUFHLENBQUMsQ0FBQSxPQUFRLENBQUM7WUFDMUQ7WUFDQSxNQUFNLHFIQUFBLENBQUEsYUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzNCLEtBQUsscUhBQUEsQ0FBQSxhQUFVLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDL0IsTUFBTSxxSEFBQSxDQUFBLGFBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUM3QixDQUFDO0lBRUQsTUFBTSxvQkFBb0IsaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQU0sRUFBRSxJQUFJLEtBQUs7SUFFbEUsMERBQTBEO0lBQzFELENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDtpQ0FBRTtZQUNSLE1BQU07NERBQXFCLENBQUM7b0JBQzFCLGlCQUFpQixNQUFNLE1BQU0sQ0FBQyxNQUFNO2dCQUN0Qzs7WUFFQSxPQUFPLGdCQUFnQixDQUFDLGdCQUFnQjtZQUV4Qzt5Q0FBTztvQkFDTCxPQUFPLG1CQUFtQixDQUFDLGdCQUFnQjtnQkFDN0M7O1FBQ0Y7Z0NBQUcsRUFBRTtJQUVMLGlFQUFpRTtJQUNqRSxDQUFBLEdBQUEsNkpBQUEsQ0FBQSxZQUFTLEFBQUQ7aUNBQUU7WUFDUixzREFBc0Q7WUFDdEQsTUFBTTs2REFBc0IsQ0FBQztvQkFDM0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxpQkFBaUIsTUFBTSxRQUFRLEVBQUU7d0JBQ2pELE1BQU0sWUFBWSxNQUFNLFFBQVE7d0JBQ2hDLElBQUksQ0FBQSxHQUFBLHFIQUFBLENBQUEsZ0JBQWEsQUFBRCxFQUFFLGNBQWMsY0FBYyxlQUFlOzRCQUMzRCxpQkFBaUI7d0JBQ25CO29CQUNGO2dCQUNGOztZQUVBLDJEQUEyRDtZQUMzRCxNQUFNO3FEQUFjO29CQUNsQixNQUFNLGVBQWUsQ0FBQSxHQUFBLHFIQUFBLENBQUEsbUJBQWdCLEFBQUQ7b0JBQ3BDLElBQUksaUJBQWlCLGVBQWU7d0JBQ2xDLGlCQUFpQjtvQkFDbkI7Z0JBQ0Y7O1lBRUEsa0RBQWtEO1lBQ2xELE1BQU07Z0VBQXlCO29CQUM3QixJQUFJLENBQUMsU0FBUyxNQUFNLEVBQUU7d0JBQ3BCLE1BQU0sZUFBZSxDQUFBLEdBQUEscUhBQUEsQ0FBQSxtQkFBZ0IsQUFBRDt3QkFDcEMsSUFBSSxpQkFBaUIsZUFBZTs0QkFDbEMsaUJBQWlCO3dCQUNuQjtvQkFDRjtnQkFDRjs7WUFFQSxPQUFPLGdCQUFnQixDQUFDLFdBQVc7WUFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ2pDLFNBQVMsZ0JBQWdCLENBQUMsb0JBQW9CO1lBRTlDO3lDQUFPO29CQUNMLE9BQU8sbUJBQW1CLENBQUMsV0FBVztvQkFDdEMsT0FBTyxtQkFBbUIsQ0FBQyxTQUFTO29CQUNwQyxTQUFTLG1CQUFtQixDQUFDLG9CQUFvQjtvQkFDakQsSUFBSSxXQUFXLE9BQU8sRUFBRTt3QkFDdEIsYUFBYSxXQUFXLE9BQU87b0JBQ2pDO2dCQUNGOztRQUNGO2dDQUFHO1FBQUM7S0FBYztJQUVsQixNQUFNLGlCQUFpQixDQUFDO1FBQ3RCLElBQUksQ0FBQyxDQUFBLEdBQUEscUhBQUEsQ0FBQSxnQkFBYSxBQUFELEVBQUUsY0FBYyxjQUFjLGVBQWU7UUFFOUQsZ0JBQWdCO1lBQ2Qsd0RBQXdEO1lBQ3hELG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0IsNENBQTRDO1lBQzVDLENBQUEsR0FBQSxxSEFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO1lBRVYsa0RBQWtEO1lBQ2xELHdDQUFtQztnQkFDakMsNkJBQTZCO2dCQUM3QixJQUFJLFdBQVcsT0FBTyxFQUFFO29CQUN0QixhQUFhLFdBQVcsT0FBTztnQkFDakM7Z0JBRUEsYUFBYSxPQUFPLENBQUMsZUFBZTtnQkFDcEMsbUVBQW1FO2dCQUNuRSxXQUFXLE9BQU8sR0FBRyxXQUFXO29CQUM5QixhQUFhLFVBQVUsQ0FBQztvQkFDeEIsV0FBVyxPQUFPLEdBQUc7Z0JBQ3ZCLEdBQUc7WUFDTDtZQUVBLHFEQUFxRDtZQUNyRCxpQkFBaUI7WUFFakIsbURBQW1EO1lBQ25ELHdEQUF3RDtZQUN4RCxXQUFXO2dCQUNULE9BQU8sUUFBUSxDQUFDLE1BQU07WUFDeEIsR0FBRyxNQUFNLGtDQUFrQztRQUM3QztJQUNGO0lBRUEsT0FBTztRQUNMLFFBQVE7UUFDUjtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU8sa0JBQWtCO0lBQzNCO0FBQ0Y7R0FwSGdCOztRQUV1Qiw2SkFBQSxDQUFBLGdCQUFhIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA0NDAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvdXRpbHMvcm9sZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2xlRW51bSB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvYXV0aFNsaWNlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSb2xlID0ga2V5b2YgdHlwZW9mIFJvbGVFbnVtO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSb2xlKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBSb2xlIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoUm9sZUVudW0pLmluY2x1ZGVzKHZhbHVlLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUm9sZSh2YWx1ZTogc3RyaW5nKTogUm9sZSB8IG51bGwge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLy0vZywgJ18nKTtcclxuICByZXR1cm4gaXNWYWxpZFJvbGUobm9ybWFsaXplZCkgPyAobm9ybWFsaXplZCBhcyBSb2xlKSA6IG51bGw7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUlPLFNBQVMsWUFBWSxLQUFhO0lBQ3ZDLE9BQU8sT0FBTyxJQUFJLENBQUMsc0lBQUEsQ0FBQSxXQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sV0FBVztBQUN6RDtBQUVPLFNBQVMsY0FBYyxLQUFhO0lBQ3pDLE1BQU0sYUFBYSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTtJQUNyRCxPQUFPLFlBQVksY0FBZSxhQUFzQjtBQUMxRCIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNDYyLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIERyb3Bkb3duTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIlxyXG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25SaWdodEljb24sIENpcmNsZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudVwiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UG9ydGFsKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWwgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1wb3J0YWxcIiB7Li4ucHJvcHN9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVUcmlnZ2VyKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlRyaWdnZXI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuVHJpZ2dlclxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXRyaWdnZXJcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHNpZGVPZmZzZXQgPSA0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY29udGVudFwiXHJcbiAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiB6LTUwIG1heC1oLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC1hdmFpbGFibGUtaGVpZ2h0KSBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1tZFwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVHcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWdyb3VwXCIgey4uLnByb3BzfSAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51SXRlbSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xyXG4gIGluc2V0PzogYm9vbGVhblxyXG4gIHZhcmlhbnQ/OiBcImRlZmF1bHRcIiB8IFwiZGVzdHJ1Y3RpdmVcIlxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbVxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWl0ZW1cIlxyXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cclxuICAgICAgZGF0YS12YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06dGV4dC1kZXN0cnVjdGl2ZSBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS8xMCBkYXJrOmRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOmJnLWRlc3RydWN0aXZlLzIwIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Kjpbc3ZnXTohdGV4dC1kZXN0cnVjdGl2ZSBbJl9zdmc6bm90KFtjbGFzcyo9J3RleHQtJ10pXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgcmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIGRhdGEtW2luc2V0XTpwbC04IFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2hlY2tlZCxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1jaGVja2JveC1pdGVtXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTIgcGwtOCB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UmFkaW9Hcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvR3JvdXBcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1ncm91cFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVSYWRpb0l0ZW0oe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1pdGVtXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTIgcGwtOCB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENpcmNsZUljb24gY2xhc3NOYW1lPVwic2l6ZS0yIGZpbGwtY3VycmVudFwiIC8+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVMYWJlbCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWw+ICYge1xyXG4gIGluc2V0PzogYm9vbGVhblxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1sYWJlbFwiXHJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LW1lZGl1bSBkYXRhLVtpbnNldF06cGwtOFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U2VwYXJhdG9yKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc2VwYXJhdG9yXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcImJnLWJvcmRlciAtbXgtMSBteS0xIGgtcHhcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVNob3J0Y3V0KHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJzcGFuXCI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc2hvcnRjdXRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3RcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVN1Yih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWI+KSB7XHJcbiAgcmV0dXJuIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViXCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWJUcmlnZ2VyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgaW5zZXQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcclxuICBpbnNldD86IGJvb2xlYW5cclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zdWItdHJpZ2dlclwiXHJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmQgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2luc2V0XTpwbC04XCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC1hdXRvIHNpemUtNFwiIC8+XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U3ViQ29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50XHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLWNvbnRlbnRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1sZ1wiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxyXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbiAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICBEcm9wZG93bk1lbnVHcm91cCxcclxuICBEcm9wZG93bk1lbnVMYWJlbCxcclxuICBEcm9wZG93bk1lbnVJdGVtLFxyXG4gIERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSxcclxuICBEcm9wZG93bk1lbnVSYWRpb0dyb3VwLFxyXG4gIERyb3Bkb3duTWVudVJhZGlvSXRlbSxcclxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXHJcbiAgRHJvcGRvd25NZW51U2hvcnRjdXQsXHJcbiAgRHJvcGRvd25NZW51U3ViLFxyXG4gIERyb3Bkb3duTWVudVN1YlRyaWdnZXIsXHJcbiAgRHJvcGRvd25NZW51U3ViQ29udGVudCxcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQU5BOzs7OztBQVFBLFNBQVMsYUFBYSxLQUVvQztRQUZwQyxFQUNwQixHQUFHLE9BQ3FELEdBRnBDO0lBR3BCLHFCQUFPLDZMQUFDLCtLQUFBLENBQUEsT0FBMEI7UUFBQyxhQUFVO1FBQWlCLEdBQUcsS0FBSzs7Ozs7O0FBQ3hFO0tBSlM7QUFNVCxTQUFTLG1CQUFtQixLQUVnQztRQUZoQyxFQUMxQixHQUFHLE9BQ3VELEdBRmhDO0lBRzFCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsU0FBNEI7UUFBQyxhQUFVO1FBQXdCLEdBQUcsS0FBSzs7Ozs7O0FBRTVFO01BTlM7QUFRVCxTQUFTLG9CQUFvQixLQUVnQztRQUZoQyxFQUMzQixHQUFHLE9BQ3dELEdBRmhDO0lBRzNCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsVUFBNkI7UUFDNUIsYUFBVTtRQUNULEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFUUztBQVdULFNBQVMsb0JBQW9CLEtBSWdDO1FBSmhDLEVBQzNCLFNBQVMsRUFDVCxhQUFhLENBQUMsRUFDZCxHQUFHLE9BQ3dELEdBSmhDO0lBSzNCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsU0FBNEI7a0JBQzNCLGNBQUEsNkxBQUMsK0tBQUEsQ0FBQSxVQUE2QjtZQUM1QixhQUFVO1lBQ1YsWUFBWTtZQUNaLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsMGpCQUNBO1lBRUQsR0FBRyxLQUFL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Q3ZCLEdBQUcsT0FDb0QsR0FGaEM7SUFHdkIscUJBQU8sNkxBQUMsK0tBQUEsQ0FBQSxNQUF5QjtRQUFDLGFBQVU7UUFBcUIsR0FBRyxLQUFLOzs7Ozs7QUFDM0U7T0FKUztBQU1ULFNBQVMsdUJBQXVCLEtBTy9CO1FBUCtCLEVBQzlCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsT0FHSixHQVArQjtJQVE5QixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLGFBQWdDO1FBQy9CLGFBQVU7UUFDVixjQUFZO1FBQ1osV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixrT0FDQTtRQUVELEdBQUcsS0FBSzs7WUFFUjswQkFDRCw2TEFBQyw2TkFBQSxDQUFBLG1CQUFnQjtnQkFBQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHbEM7T0F0QlM7QUF3QlQsU0FBUyx1QkFBdUIsS0FHZ0M7UUFIaEMsRUFDOUIsU0FBUyxFQUNULEdBQUcsT0FDMkQsR0FIaEM7SUFJOUIscUJBQ0UsNkxBQUMsK0tBQUEsQ0FBQSxhQUFnQztRQUMvQixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixpZkFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7T0FkUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzczLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvdGhlbWUtdG9nZ2xlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb29uLCBTdW4sIE1vbml0b3IgfSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJ1xyXG5pbXBvcnQge1xyXG4gICAgRHJvcGRvd25NZW51LFxyXG4gICAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lVG9nZ2xlKCkge1xyXG4gICAgY29uc3QgeyBzZXRUaGVtZSwgdGhlbWUgfSA9IHVzZVRoZW1lKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaG92ZXI6YmctYWNjZW50IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdW4gY2xhc3NOYW1lPVwiaC1bMS4ycmVtXSB3LVsxLjJyZW1dIHJvdGF0ZS0wIHNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbCBkYXJrOi1yb3RhdGUtOTAgZGFyazpzY2FsZS0wIHRoZW1lLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb29uIGNsYXNzTmFtZT1cImFic29sdXRlIGgtWzEuMnJlbV0gdy1bMS4ycmVtXSByb3RhdGUtOTAgc2NhbGUtMCB0cmFuc2l0aW9uLWFsbCBkYXJrOnJvdGF0ZS0wIGRhcms6c2NhbGUtMTAwIHRoZW1lLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgdGhlbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudCBhbGlnbj1cImVuZFwiIGNsYXNzTmFtZT1cImJnLWNhcmQvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBzaGFkb3cteGwgcm91bmRlZC14bCBtaW4tdy1bMTQwcHhdIGRyb3Bkb3duLWNvbnRlbnQtZW5oYW5jZWRcIj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ2xpZ2h0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHt0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeScgOiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdW4gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5MaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ2RhcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke3RoZW1lID09PSAnZGFyaycgPyAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnknIDogJ2hvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TW9vbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkRhcms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKCdzeXN0ZW0nKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke3RoZW1lID09PSAnc3lzdGVtJyA/ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeScgOiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb25pdG9yIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+U3lzdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQVBBOzs7OztBQWNPLFNBQVM7O0lBQ1osTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFBLEdBQUEsbUpBQUEsQ0FBQSxXQUFRLEFBQUQ7SUFFbkMscUJBQ0ksNkxBQUMsK0lBQUEsQ0FBQSxlQUFZOzswQkFDVCw2TEFBQywrSUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFPOzBCQUN4QixjQUFBLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtvQkFBQyxTQUFRO29CQUFRLE1BQUs7b0JBQU8sV0FBVTs7c0NBQzFDLDZMQUFDLG1NQUFBLENBQUEsTUFBRzs0QkFBQyxXQUFVOzs7Ozs7c0NBQ2YsNkxBQUMscU1BQUEsQ0FBQSxPQUFJOzRCQUFDLFdBQVU7Ozs7OztzQ0FDaEIsNkxBQUM7NEJBQUssV0FBVTtzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xDLDZMQUFDLCtJQUFBLENBQUEsc0JBQW1CO2dCQUFDLE9BQU07Z0JBQU0sV0FBVTs7a0NBQ3ZDLDZMQUFDLCtJQUFBLENBQUEsbUJBQWdCO3dCQUNiLFNBQVMsSUFBTSxTQUFTO3dCQUN4QixXQUFXLEFBQUMsNkZBQ1AsT0FEbUcsVUFBVSxVQUFVLCtCQUErQjs7MENBRzNKLDZMQUFDLG1NQUFBLENBQUEsTUFBRztnQ0FBQyxXQUFVOzs7Ozs7MENBQ2YsNkxBQUM7Z0NBQUssV0FBVTswQ0FBYzs7Ozs7Ozs7Ozs7O2tDQUVsQyw2TEFBQywrSUFBQSxDQUFBLG1CQUFnQjt3QkFDYixTQUFTLElBQU0sU0FBUzt3QkFDeEIsV0FBVyxBQUFDLDZGQUNQLE9BRG1HLFVBQVUsU0FBUywrQkFBK0I7OzBDQUcxSiw2TEFBQyxxTUFBQSxDQUFBLE9BQUk7Z0NBQUMsV0FBVTs7Ozs7OzBDQUNoQiw2TEFBQztnQ0FBSyxXQUFVOzBDQUFjOzs7Ozs7Ozs7Ozs7a0NBRWxDLDZMQUFDLCtJQUFBLENBQUEsbUJBQWdCO3dCQUNiLFNBQVMsSUFBTSxTQUFTO3dCQUN4QixXQUFXLEFBQUMsNkZBQ1AsT0FEbUcsVUFBVSxXQUFXLCtCQUErQjs7MENBRzVKLDZMQUFDLDJNQUFBLENBQUEsVUFBTztnQ0FBQyxXQUFVOzs7Ozs7MENBQ25CLDZMQUFDO2dDQUFLLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQXhDZ0I7O1FBQ2dCLG1KQUFBLENBQUEsV0FBUTs7O0tBRHhCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5NDQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9tYWRlL2xhbmd1YWdlLXN3aXRjaGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVjayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgRHJvcGRvd25NZW51LFxyXG4gICAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxhbmd1YWdlJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlRmxhZyB9IGZyb20gJ0AvbGliL2kxOG4nO1xyXG5cclxuLy8gRmxhZyBpY29ucyBhcyBjb21wb25lbnRzIHdpdGggZW5oYW5jZWQgc3R5bGluZ1xyXG5jb25zdCBGbGFnSWNvbiA9ICh7IGNvdW50cnksIGNsYXNzTmFtZSA9IFwidy00IGgtNFwiIH06IHsgY291bnRyeTogc3RyaW5nOyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgY29uc3QgZmxhZyA9IGdldExvY2FsZUZsYWcoY291bnRyeSBhcyAnZW4nIHwgJ2FyJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1sZyBsZWFkaW5nLW5vbmUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTExMGB9PlxyXG4gICAgICAgICAgICB7ZmxhZ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlU3dpdGNoZXIoKSB7XHJcbiAgICBjb25zdCB7IHN3aXRjaExhbmd1YWdlLCBhdmFpbGFibGVMb2NhbGVzLCBjdXJyZW50TG9jYWxlSW5mbywgaXNQZW5kaW5nIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxhbmd1YWdlU3dpdGNoID0gKGxvY2FsZUNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc3dpdGNoaW5nIHRvIHRoZSBzYW1lIGxhbmd1YWdlXHJcbiAgICAgICAgaWYgKGxvY2FsZUNvZGUgPT09IGN1cnJlbnRMb2NhbGVJbmZvPy5jb2RlKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIENhbGwgdGhlIHN3aXRjaCBmdW5jdGlvbiB3aGljaCBub3cgaGFuZGxlcyBjb29raWUtYmFzZWQgc3dpdGNoaW5nXHJcbiAgICAgICAgc3dpdGNoTGFuZ3VhZ2UobG9jYWxlQ29kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtOSBweC0zIGJnLWJhY2tncm91bmQgaG92ZXI6YmctYWNjZW50IGJvcmRlci1ib3JkZXIgaG92ZXI6Ym9yZGVyLXByaW1hcnkvNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgJHtpc1BlbmRpbmcgPyAnb3BhY2l0eS03MCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEN1cnJlbnQgbGFuZ3VhZ2U6ICR7Y3VycmVudExvY2FsZUluZm8/Lm5hbWV9LiBDbGljayB0byBjaGFuZ2UgbGFuZ3VhZ2UuYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RmxhZ0ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT17Y3VycmVudExvY2FsZUluZm8/LmNvZGUgfHwgJ2VuJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00IGgtNCBtci0yIGZsYWctaWNvbiAke2lzUGVuZGluZyA/ICdhbmltYXRlLXB1bHNlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExvY2FsZUluZm8/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1BlbmRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHctMyBoLTMgYm9yZGVyIGJvcmRlci1jdXJyZW50IGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoYW5naW5nIGxhbmd1YWdlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWNhcmQvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBzaGFkb3cteGwgcm91bmRlZC14bCBtaW4tdy1bMTYwcHhdIHAtMSBkcm9wZG93bi1jb250ZW50LWVuaGFuY2VkXCJcclxuICAgICAgICAgICAgICAgIHNpZGVPZmZzZXQ9ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthdmFpbGFibGVMb2NhbGVzLm1hcCgobG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50TG9jYWxlID0gY3VycmVudExvY2FsZUluZm8/LmNvZGUgPT09IGxvY2FsZS5jb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsb2NhbGUuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxhbmd1YWdlU3dpdGNoKGxvY2FsZS5jb2RlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1BlbmRpbmcgfHwgaXNDdXJyZW50TG9jYWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgJHtpc0N1cnJlbnRMb2NhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgY3Vyc29yLWRlZmF1bHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNQZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGFjdGl2ZTpiZy1hY2NlbnQvODAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7bG9jYWxlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYWdJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT17bG9jYWxlLmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00IGgtNCBmbGFnLWljb24gJHtpc1BlbmRpbmcgJiYgIWlzQ3VycmVudExvY2FsZSA/ICdvcGFjaXR5LTUwJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0N1cnJlbnRMb2NhbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeSBhbmltYXRlLWluIGZhZGUtaW4tMCB6b29tLWluLTk1IGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDdXJyZW50IGxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FBRUEsaURBQWlEO0FBQ2pELE1BQU0sV0FBVztRQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksU0FBUyxFQUEyQztJQUN6RixNQUFNLE9BQU8sQ0FBQSxHQUFBLHFIQUFBLENBQUEsZ0JBQWEsQUFBRCxFQUFFO0lBRTNCLHFCQUNJLDZMQUFDO1FBQUssV0FBVyxBQUFDLEdBQVksT0FBVixXQUFVO2tCQUN6Qjs7Ozs7O0FBR2I7S0FSTTtBQVVDLFNBQVM7O0lBQ1osTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFBLEdBQUEsOEhBQUEsQ0FBQSxjQUFXLEFBQUQ7SUFFckYsTUFBTSx1QkFBdUIsQ0FBQztRQUMxQix5Q0FBeUM7UUFDekMsSUFBSSxnQkFBZSw4QkFBQSx3Q0FBQSxrQkFBbUIsSUFBSSxHQUFFO1FBRTVDLG9FQUFvRTtRQUNwRSxlQUFlO0lBQ25CO0lBRUEscUJBQ0ksNkxBQUMsK0lBQUEsQ0FBQSxlQUFZOzswQkFDVCw2TEFBQywrSUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFPOzBCQUN4QixjQUFBLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtvQkFDSCxTQUFRO29CQUNSLE1BQUs7b0JBQ0wsVUFBVTtvQkFDVixXQUFXLEFBQUMsc0lBQ1AsT0FENEksWUFBWSxrQ0FBa0M7b0JBRS9MLGNBQVksQUFBQyxxQkFBNEMsT0FBeEIsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUksRUFBQzs7c0NBRXpELDZMQUFDOzRCQUNHLFNBQVMsQ0FBQSw4QkFBQSx3Q0FBQSxrQkFBbUIsSUFBSSxLQUFJOzRCQUNwQyxXQUFXLEFBQUMsMEJBQTBELE9BQWpDLFlBQVksa0JBQWtCOzs7Ozs7c0NBRXZFLDZMQUFDOzRCQUFLLFdBQVU7c0NBQ1gsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUk7Ozs7Ozt3QkFFM0IsMkJBQ0csNkxBQUM7NEJBQ0csV0FBVTs0QkFDVixjQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLM0IsNkxBQUMsK0lBQUEsQ0FBQSxzQkFBbUI7Z0JBQ2hCLE9BQU07Z0JBQ04sV0FBVTtnQkFDVixZQUFZOzBCQUVYLGlCQUFpQixHQUFHLENBQUMsQ0FBQztvQkFDbkIsTUFBTSxrQkFBa0IsQ0FBQSw4QkFBQSx3Q0FBQSxrQkFBbUIsSUFBSSxNQUFLLE9BQU8sSUFBSTtvQkFFL0QscUJBQ0ksNkxBQUMsK0lBQUEsQ0FBQSxtQkFBZ0I7d0JBRWIsU0FBUyxJQUFNLHFCQUFxQixPQUFPLElBQUk7d0JBQy9DLFVBQVUsYUFBYTt3QkFDdkIsV0FBVyxBQUFDLG1KQUtQLE9BTHlKLGtCQUNwSiw4Q0FDQSxZQUNJLGtDQUNBO3dCQUVkLGNBQVksQUFBQyxhQUF3QixPQUFaLE9BQU8sSUFBSTs7MENBRXBDLDZMQUFDO2dDQUNHLFNBQVMsT0FBTyxJQUFJO2dDQUNwQixXQUFXLEFBQUMscUJBQ1AsT0FEMkIsYUFBYSxDQUFDLGtCQUFrQixlQUFlOzs7Ozs7MENBR25GLDZMQUFDO2dDQUFLLFdBQVU7MENBQ1gsT0FBTyxJQUFJOzs7Ozs7NEJBRWYsaUNBQ0csNkxBQUMsdU1BQUEsQ0FBQSxRQUFLO2dDQUNGLFdBQVU7Z0NBQ1YsY0FBVzs7Ozs7Ozt1QkF0QmQsT0FBTyxJQUFJOzs7OztnQkEyQjVCOzs7Ozs7Ozs7Ozs7QUFJaEI7R0E5RWdCOztRQUMrRCw4SEFBQSxDQUFBLGNBQVc7OztNQUQxRSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTEwMiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VNb2JpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FwYWNpdG9yIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBIb29rIHRvIGRldGVjdCBtb2JpbGUgcGxhdGZvcm0gYW5kIHNjcmVlbiBzaXplXHJcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIG1vYmlsZSBkZXRlY3Rpb24gc3RhdGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vYmlsZVBsYXRmb3JtLCBzZXRJc01vYmlsZVBsYXRmb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGVTY3JlZW4sIHNldElzTW9iaWxlU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgb24gQ2FwYWNpdG9yIChuYXRpdmUgbW9iaWxlKVxyXG4gICAgc2V0SXNNb2JpbGVQbGF0Zm9ybShDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcclxuXHJcbiAgICAvLyBDaGVjayBzY3JlZW4gc2l6ZSBmb3IgbW9iaWxlIGJyZWFrcG9pbnRcclxuICAgIGNvbnN0IGNoZWNrU2NyZWVuU2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2JpbGVTY3JlZW4od2luZG93LmlubmVyV2lkdGggPCA3NjgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsIGNoZWNrXHJcbiAgICBjaGVja1NjcmVlblNpemUoKTtcclxuICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgcmVzaXplIGV2ZW50c1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTW9iaWxlUGxhdGZvcm0sXHJcbiAgICBpc01vYmlsZVNjcmVlbixcclxuICAgIGlzTW9iaWxlOiBpc01vYmlsZVBsYXRmb3JtIHx8IGlzTW9iaWxlU2NyZWVuLFxyXG4gICAgaXNMb2FkZWQsXHJcbiAgICBwbGF0Zm9ybTogQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCksXHJcbiAgfTtcclxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7QUFDQTs7QUFIQTs7O0FBU08sTUFBTSxZQUFZOztJQUN2QixNQUFNLENBQUMsa0JBQWtCLG9CQUFvQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ3pELE1BQU0sQ0FBQyxnQkFBZ0Isa0JBQWtCLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDckQsTUFBTSxDQUFDLFVBQVUsWUFBWSxHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBRXpDLENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDsrQkFBRTtZQUNSLGdEQUFnRDtZQUNoRCxvQkFBb0IsdUpBQUEsQ0FBQSxZQUFTLENBQUMsZ0JBQWdCO1lBRTlDLDBDQUEwQztZQUMxQyxNQUFNO3VEQUFrQjtvQkFDdEIsa0JBQWtCLE9BQU8sVUFBVSxHQUFHO2dCQUN4Qzs7WUFFQSxnQkFBZ0I7WUFDaEI7WUFDQSxZQUFZO1lBRVosMkJBQTJCO1lBQzNCLE9BQU8sZ0JBQWdCLENBQUMsVUFBVTtZQUVsQzt1Q0FBTztvQkFDTCxPQUFPLG1CQUFtQixDQUFDLFVBQVU7Z0JBQ3ZDOztRQUNGOzhCQUFHLEVBQUU7SUFFTCxPQUFPO1FBQ0w7UUFDQTtRQUNBLFVBQVUsb0JBQW9CO1FBQzlCO1FBQ0EsVUFBVSx1SkFBQSxDQUFBLFlBQVMsQ0FBQyxXQUFXO0lBQ2pDO0FBQ0Y7R0FqQ2EiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDExNTYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IGdldFBhdGhCeVJvbGUgfSBmcm9tICdAL3V0aWxzL3JvbGVSZWRpcmVjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9hdXRoQXBpJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJztcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxhbmd1YWdlJztcclxuaW1wb3J0IHsgbm9ybWFsaXplUm9sZSB9IGZyb20gJ0AvdXRpbHMvcm9sZSc7XHJcbmltcG9ydCB7IExvY2ssIFVzZXIsIEV5ZSwgRXllT2ZmLCBBbGVydENpcmNsZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90aGVtZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVN3aXRjaGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL21hZGUvbGFuZ3VhZ2Utc3dpdGNoZXInO1xyXG5pbXBvcnQgeyB1c2VNb2JpbGUgfSBmcm9tICdAL2hvb2tzL3VzZU1vYmlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvZ2luLCB7IGlzTG9hZGluZyB9XSA9IHVzZUxvZ2luTXV0YXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCdhdXRoLmxvZ2luJyk7XHJcbiAgY29uc3QgeyBpc1JUTCB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuICBjb25zdCB7IGlzTW9iaWxlLCBpc01vYmlsZVBsYXRmb3JtIH0gPSB1c2VNb2JpbGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbG9naW4oeyBpZDogdXNlcklkLCBwYXNzd29yZCB9KS51bndyYXAoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBkYXRhXCIsIGRhdGEpO1xyXG4gICAgICBjb25zdCByb2xlID0gZGF0YS5yb2xlO1xyXG5cclxuICAgICAgY29uc3QgcmVkaXJlY3RQYXRoID0gZ2V0UGF0aEJ5Um9sZShyb2xlLCBkYXRhPy51c2VyPy5pZCk7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRSb2xlID0gbm9ybWFsaXplUm9sZShyb2xlKTtcclxuXHJcbiAgICAgIGlmICghbm9ybWFsaXplZFJvbGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHJvbGUgZnJvbSBiYWNrZW5kOicsIHJvbGUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RQYXRoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBmYWlsZWQ6JywgZXJyKTtcclxuXHJcbiAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ludmFsaWQgY3JlZGVudGlhbHMuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgc206cHgtNiBsZzpweC04IHJlbGF0aXZlICR7aXNNb2JpbGVQbGF0Zm9ybSA/ICdtb2JpbGUtc2FmZS1jb250ZW50JyA6ICcnfWB9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzTW9iaWxlID8gJ3AtNCB3LWZ1bGwnIDogJ3AtOCd9IGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiZy1jYXJkIHJvdW5kZWQtMnhsIHNoYWRvdy14bCBib3JkZXIgYm9yZGVyLWJvcmRlciAke2lzTW9iaWxlID8gJ3ctZnVsbCBtaW4taC1bNTAwcHhdJyA6ICcnfWB9IHN0eWxlPXshaXNNb2JpbGUgPyB7IHdpZHRoOiAnNDgwcHgnLCBtaW5IZWlnaHQ6ICc2MDBweCcgfSA6IHt9fT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBtYi02IHB0LTQgcHgtNFwiLFxyXG4gICAgICAgICAgICAgICAgaXNSVEwgPyBcInNwYWNlLXgtcmV2ZXJzZVwiIDogXCJzcGFjZS14LTJcIlxyXG4gICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgey8qIFRvcCBDb250cm9scyAtIFRoZW1lIGFuZCBMYW5ndWFnZSBTd2l0Y2hlciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgXCIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlzUlRMID8gXCJcIiA6IFwiIHJ0bDpzcGFjZS14LXJldmVyc2VcIlxyXG4gICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgZm9udC1wcmltYXJ5IG1sLTIgcnRsOm1sLTAgcnRsOm1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAge3QoJ2JyYW5kTmFtZScpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnc3VidGl0bGUnKX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02IHB4LTQgZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgey8qIFVzZXIgSUQgSW5wdXQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICBcInRleHQtc20gcHItMiBwbC0yIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZCBibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICBpc1JUTCA/IFwidGV4dC1yaWdodFwiIDogXCJ0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCd1c2VySWRMYWJlbCcpfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ2VudGVyVXNlcklkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyPXtpc1JUTCA/ICdydGwnIDogJ2x0cid9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgIGAke2lzTW9iaWxlID8gJ2gtMTQnIDogJ2gtMTInfSByb3VuZGVkLW1kIGJvcmRlci1ib3JkZXIgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvMjAgZm9jdXM6Ym9yZGVyLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQgcHItMTIgcGwtNCcgOiAndGV4dC1sZWZ0IHBsLTEyIHByLTQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmICdib3JkZXItZGVzdHJ1Y3RpdmUgZm9jdXM6Ym9yZGVyLWRlc3RydWN0aXZlIGZvY3VzOnJpbmctZGVzdHJ1Y3RpdmUvMjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGVQbGF0Zm9ybSAmJiAnbW9iaWxlLXRvdWNoLXRhcmdldCdcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFic29sdXRlIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdy01IGgtNSB0ZXh0LW11dGVkLWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3JpZ2h0LTQnIDogJ2xlZnQtNCdcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBQYXNzd29yZCBJbnB1dCAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgIFwidGV4dC1zbSBwci0yIHBsLTIgZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kIGJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlzUlRMID8gXCJ0ZXh0LXJpZ2h0XCIgOiBcInRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnZW50ZXJQYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyPXtpc1JUTCA/ICdydGwnIDogJ2x0cid9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgIGAke2lzTW9iaWxlID8gJ2gtMTQnIDogJ2gtMTInfSByb3VuZGVkLW1kIGJvcmRlci1ib3JkZXIgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvMjAgZm9jdXM6Ym9yZGVyLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQgcHItMTIgcGwtMTInIDogJ3RleHQtbGVmdCBwbC0xMiBwci0xMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgJ2JvcmRlci1kZXN0cnVjdGl2ZSBmb2N1czpib3JkZXItZGVzdHJ1Y3RpdmUgZm9jdXM6cmluZy1kZXN0cnVjdGl2ZS8yMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc01vYmlsZVBsYXRmb3JtICYmICdtb2JpbGUtdG91Y2gtdGFyZ2V0J1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB3LTUgaC01IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9yc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAncmlnaHQtNCcgOiAnbGVmdC00J1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBwLTEgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9ycyByb3VuZGVkLW1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICdsZWZ0LTMnIDogJ3JpZ2h0LTMnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXllT2ZmIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXllIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBFcnJvciBNZXNzYWdlICovfVxyXG4gICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIHAtMyBiZy1kZXN0cnVjdGl2ZS8xMCBib3JkZXIgYm9yZGVyLWRlc3RydWN0aXZlLzIwIHJvdW5kZWQteGxcIixcclxuICAgICAgICAgICAgICAgICAgaXNSVEwgPyBcInNwYWNlLXgtcmV2ZXJzZVwiIDogXCJzcGFjZS14LTJcIlxyXG4gICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydENpcmNsZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZGVzdHJ1Y3RpdmUgZmxleC1zaHJpbmstMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1kZXN0cnVjdGl2ZVwiPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgey8qIFN1Ym1pdCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nIHx8ICF1c2VySWQudHJpbSgpIHx8ICFwYXNzd29yZC50cmltKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICBgdy1mdWxsICR7aXNNb2JpbGUgPyAnaC0xNCcgOiAnaC0xMid9IGJnLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS85MCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb250LW1lZGl1bSB0ZXh0LWJhc2Ugcm91bmRlZC14bGAsXHJcbiAgICAgICAgICAgICAgICAgIFwic2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0wLjVcIixcclxuICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZDpvcGFjaXR5LTYwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDp0cmFuc2Zvcm0tbm9uZSBkaXNhYmxlZDpzaGFkb3ctbGdcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzIwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIixcclxuICAgICAgICAgICAgICAgICAgaXNNb2JpbGVQbGF0Zm9ybSAmJiAnbW9iaWxlLXRvdWNoLXRhcmdldCdcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBpc1JUTCA/IFwic3BhY2UteC1yZXZlcnNlXCIgOiBcInNwYWNlLXgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00IGgtNCBib3JkZXItMiBib3JkZXItY3VycmVudCBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc1JUTCA/IFwibXItMlwiIDogXCJtbC0yXCJ9Pnt0KCdsb2dnaW5nSW4nKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgdCgnc3VibWl0JylcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBZkE7Ozs7Ozs7Ozs7Ozs7OztBQWlCZSxTQUFTOztJQUN0QixNQUFNLENBQUMsUUFBUSxVQUFVLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDckMsTUFBTSxDQUFDLFVBQVUsWUFBWSxHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ3pDLE1BQU0sQ0FBQyxjQUFjLGdCQUFnQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ2pELE1BQU0sQ0FBQyxjQUFjLGdCQUFnQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ2pELE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFBLEdBQUEsc0lBQUEsQ0FBQSxtQkFBZ0IsQUFBRDtJQUM5QyxNQUFNLFNBQVMsQ0FBQSxHQUFBLHFJQUFBLENBQUEsWUFBUyxBQUFEO0lBQ3ZCLE1BQU0sSUFBSSxDQUFBLEdBQUEseU1BQUEsQ0FBQSxrQkFBZSxBQUFELEVBQUU7SUFDMUIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUEsR0FBQSw4SEFBQSxDQUFBLGNBQVcsQUFBRDtJQUM1QixNQUFNLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FB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Ozs7Ozs7Ozs7Ozs7OENBSzdDLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtvQ0FDTCxNQUFLO29DQUNMLFVBQVUsYUFBYSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJO29DQUN2RCxXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLEFBQUMsVUFBb0MsT0FBM0IsV0FBVyxTQUFTLFFBQU8sNkZBQ3JDLDBGQUNBLDhGQUNBLDBEQUNBLG9CQUFvQjs4Q0FHckIsMEJBQ0MsNkxBQUM7d0NBQUksV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDZixxQkFDQSxRQUFRLG9CQUFvQjs7MERBRTVCLDZMQUFDO2dEQUFJLFdBQVU7Ozs7OzswREFDZiw2TEFBQztnREFBSyxXQUFXLFFBQVEsU0FBUzswREFBUyxFQUFFOzs7Ozs7Ozs7OzsrQ0FHL0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3BCO0dBbE13Qjs7UUFLUyxzSUFBQSxDQUFBLG1CQUFnQjtRQUNoQyxxSUFBQSxDQUFBLFlBQVM7UUFDZCx5TUFBQSxDQUFBLGtCQUFlO1FBQ1AsOEhBQUEsQ0FBQSxjQUFXO1FBQ1UsNEhBQUEsQ0FBQSxZQUFTOzs7S0FUMUIiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE1MjEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvYXBwL2F1dGgvbG9naW4vcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTtBQURBOzs7QUFFZSxTQUFTO0lBQ3BCLHFCQUNJLDZMQUFDLDJJQUFBLENBQUEsVUFBUzs7Ozs7QUFFbEI7S0FKd0IiLCJkZWJ1Z0lkIjpudWxsfX1dCn0=
module.exports = {

"[project]/src/lib/i18n.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
        const { cookies } = await __turbopack_context__.r("[project]/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i);
        const cookieStore = await cookies();
        const langCookie = cookieStore.get(LANGUAGE_COOKIE.name);
        const cookieValue = langCookie?.value;
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
        const langCookie = cookies.find((cookie)=>cookie.trim().startsWith(`${LANGUAGE_COOKIE.name}=`));
        if (langCookie) {
            const cookieValue = langCookie.split('=')[1]?.trim();
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
            console.warn(`Invalid locale: ${locale}. Using default locale.`);
            locale = DEFAULT_LOCALE;
        }
        const expires = new Date();
        expires.setTime(expires.getTime() + LANGUAGE_COOKIE.maxAge * 1000);
        const cookieString = [
            `${LANGUAGE_COOKIE.name}=${locale}`,
            `expires=${expires.toUTCString()}`,
            `path=${LANGUAGE_COOKIE.path}`,
            `SameSite=${LANGUAGE_COOKIE.sameSite}`,
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
        console.warn(`Invalid locale: ${locale}. Using default locale.`);
        locale = DEFAULT_LOCALE;
    }
    setLocaleCookie(locale);
    // Update HTML attributes immediately
    updateHTMLAttributes(locale);
    // Trigger a custom event for components to listen to
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
    return localeInfo[locale]?.direction || 'ltr';
}
function getLocaleDisplayName(locale) {
    return localeInfo[locale]?.name || locale;
}
function getLocaleFlag(locale) {
    return localeInfo[locale]?.flag || '🌐';
}
function validateI18n() {
    try {
        return locales.length > 0 && DEFAULT_LOCALE !== undefined;
    } catch  {
        return false;
    }
}
}),
"[project]/src/i18n/request.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ()=>{
    // Get locale from cookies instead of URL parameters
    const locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerLocale"])();
    try {
        const messages = (await __turbopack_context__.f({
            "../../locales/ar.json": {
                id: ()=>"[project]/locales/ar.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/locales/ar.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../locales/en.json": {
                id: ()=>"[project]/locales/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/locales/en.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../locales/${locale}.json`)).default;
        return {
            locale,
            messages
        };
    } catch (error) {
        console.warn(`Failed to load messages for locale ${locale}, falling back to default:`, error);
        // Fallback to default locale messages
        const fallbackMessages = (await __turbopack_context__.f({
            "../../locales/ar.json": {
                id: ()=>"[project]/locales/ar.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/locales/ar.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../locales/en.json": {
                id: ()=>"[project]/locales/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/locales/en.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../locales/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"]}.json`)).default;
        return {
            locale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"],
            messages: fallbackMessages
        };
    }
});
}),
"[project]/src/providers/ReduxProvider.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/providers/ReduxProvider.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/providers/ReduxProvider.tsx <module evaluation>", "default");
}),
"[project]/src/providers/ReduxProvider.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/providers/ReduxProvider.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/providers/ReduxProvider.tsx", "default");
}),
"[project]/src/providers/ReduxProvider.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ReduxProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/providers/ReduxProvider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ReduxProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/providers/ReduxProvider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ReduxProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ReduxProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ReduxProvider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const metadata = {
    title: 'Task Flow - Streamline Your Workflow',
    description: 'The ultimate task management platform designed to help teams collaborate efficiently and achieve their goals faster.',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
        viewportFit: 'cover'
    },
    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: '#ffffff'
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: '#000000'
        }
    ],
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Task Flow'
    },
    formatDetection: {
        telephone: false
    }
};
async function RootLayout({ children }) {
    // Read language from cookies using the centralized i18n utility
    const locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerLocale"])();
    // Get locale direction for HTML dir attribute
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocaleDirection"])(locale);
    // Load messages based on cookie-determined locale with error handling
    let messages;
    try {
        messages = (await __turbopack_context__.f({
            "../../locales/ar.json": {
                id: ()=>"[project]/locales/ar.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/locales/ar.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../locales/en.json": {
                id: ()=>"[project]/locales/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/locales/en.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../locales/${locale}.json`)).default;
    } catch (error) {
        console.warn(`Failed to load messages for locale ${locale}, falling back to English:`, error);
        // Fallback to English messages if locale-specific messages fail to load
        messages = (await __turbopack_context__.r("[project]/locales/en.json (json, async loader)")(__turbopack_context__.i)).default;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        dir: direction,
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                    attribute: "class",
                    defaultTheme: "system",
                    enableSystem: true,
                    disableTransitionOnChange: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ReduxProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                            locale: locale,
                            messages: messages,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Toaster"], {
                    richColors: true,
                    position: "bottom-left",
                    closeButton: true
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZXJ2ZXItc2lkZSBpbXBvcnRzIGFyZSBoYW5kbGVkIGNvbmRpdGlvbmFsbHkgdG8gYXZvaWQgY2xpZW50LXNpZGUgaXNzdWVzXHJcblxyXG4vLyBTdXBwb3J0ZWQgbG9jYWxlcyBjb25maWd1cmF0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2NhbGVzID0gWydlbicsICdhciddIGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBMb2NhbGUgPSB0eXBlb2YgbG9jYWxlc1tudW1iZXJdO1xyXG5cclxuLy8gRGVmYXVsdCBsb2NhbGVcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9DQUxFOiBMb2NhbGUgPSAnZW4nO1xyXG5cclxuLy8gQ29va2llIGNvbmZpZ3VyYXRpb25cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0NPT0tJRSA9IHtcclxuICAgIG5hbWU6ICdsYW5nJyxcclxuICAgIG1heEFnZTogMzY1ICogMjQgKiA2MCAqIDYwLCAvLyAxIHllYXIgaW4gc2Vjb25kc1xyXG4gICAgaHR0cE9ubHk6IGZhbHNlLCAvLyBBY2Nlc3NpYmxlIHRvIGNsaWVudC1zaWRlIEphdmFTY3JpcHRcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgIHNhbWVTaXRlOiAnbGF4JyBhcyBjb25zdCxcclxuICAgIHBhdGg6ICcvJyxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIExvY2FsZSBpbmZvcm1hdGlvblxyXG5leHBvcnQgY29uc3QgbG9jYWxlSW5mbyA9IHtcclxuICAgIGVuOiB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ2x0cicgYXMgY29uc3QsXHJcbiAgICAgICAgZmxhZzogJ/Cfh7rwn4e4JyxcclxuICAgIH0sXHJcbiAgICBhcjoge1xyXG4gICAgICAgIG5hbWU6ICfYp9mE2LnYsdio2YrYqScsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAncnRsJyBhcyBjb25zdCxcclxuICAgICAgICBmbGFnOiAn8J+HuPCfh6YnLFxyXG4gICAgfSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIFZhbGlkYXRlIGlmIGEgbG9jYWxlIGlzIHN1cHBvcnRlZFxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZExvY2FsZShsb2NhbGU6IHN0cmluZyk6IGxvY2FsZSBpcyBMb2NhbGUge1xyXG4gICAgcmV0dXJuIGxvY2FsZXMuaW5jbHVkZXMobG9jYWxlIGFzIExvY2FsZSk7XHJcbn1cclxuXHJcbi8vIEdldCBkZWZhdWx0IGxvY2FsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdExvY2FsZSgpOiBMb2NhbGUge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBHZXQgc3VwcG9ydGVkIGxvY2FsZXMgbGlzdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkTG9jYWxlcygpOiByZWFkb25seSBMb2NhbGVbXSB7XHJcbiAgICByZXR1cm4gbG9jYWxlcztcclxufVxyXG5cclxuLy8gU2VydmVyLXNpZGUgY29va2llIHJlYWRpbmcgKE5leHQuanMpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJMb2NhbGUoKTogUHJvbWlzZTxMb2NhbGU+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBjb29raWVzIH0gPSBhd2FpdCBpbXBvcnQoJ25leHQvaGVhZGVycycpO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gICAgICAgIGNvbnN0IGxhbmdDb29raWUgPSBjb29raWVTdG9yZS5nZXQoTEFOR1VBR0VfQ09PS0lFLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gbGFuZ0Nvb2tpZT8udmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChjb29raWVWYWx1ZSAmJiBpc1ZhbGlkTG9jYWxlKGNvb2tpZVZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byByZWFkIGxhbmd1YWdlIGNvb2tpZSBvbiBzZXJ2ZXI6JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBERUZBVUxUX0xPQ0FMRTtcclxufVxyXG5cclxuLy8gQ2xpZW50LXNpZGUgY29va2llIHJlYWRpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZUZyb21Db29raWUoKTogTG9jYWxlIHwgbnVsbCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgY29uc3QgbGFuZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjb29raWUgPT5cclxuICAgICAgICAgICAgY29va2llLnRyaW0oKS5zdGFydHNXaXRoKGAke0xBTkdVQUdFX0NPT0tJRS5uYW1lfT1gKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChsYW5nQ29va2llKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gbGFuZ0Nvb2tpZS5zcGxpdCgnPScpWzFdPy50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChjb29raWVWYWx1ZSAmJiBpc1ZhbGlkTG9jYWxlKGNvb2tpZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byByZWFkIGxhbmd1YWdlIGNvb2tpZSBvbiBjbGllbnQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBDbGllbnQtc2lkZSBjb29raWUgd3JpdGluZ1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlQ29va2llKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVmFsaWRhdGUgbG9jYWxlIGJlZm9yZSBzZXR0aW5nXHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkTG9jYWxlKGxvY2FsZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIGxvY2FsZTogJHtsb2NhbGV9LiBVc2luZyBkZWZhdWx0IGxvY2FsZS5gKTtcclxuICAgICAgICAgICAgbG9jYWxlID0gREVGQVVMVF9MT0NBTEU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuICAgICAgICBleHBpcmVzLnNldFRpbWUoZXhwaXJlcy5nZXRUaW1lKCkgKyAoTEFOR1VBR0VfQ09PS0lFLm1heEFnZSAqIDEwMDApKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llU3RyaW5nID0gW1xyXG4gICAgICAgICAgICBgJHtMQU5HVUFHRV9DT09LSUUubmFtZX09JHtsb2NhbGV9YCxcclxuICAgICAgICAgICAgYGV4cGlyZXM9JHtleHBpcmVzLnRvVVRDU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgYHBhdGg9JHtMQU5HVUFHRV9DT09LSUUucGF0aH1gLFxyXG4gICAgICAgICAgICBgU2FtZVNpdGU9JHtMQU5HVUFHRV9DT09LSUUuc2FtZVNpdGV9YCxcclxuICAgICAgICAgICAgTEFOR1VBR0VfQ09PS0lFLnNlY3VyZSA/ICdTZWN1cmUnIDogJycsXHJcbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignOyAnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2V0IGxhbmd1YWdlIGNvb2tpZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEdldCBjdXJyZW50IGxvY2FsZSAoY2xpZW50LXNpZGUpXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYWxlKCk6IExvY2FsZSB7XHJcbiAgICBjb25zdCBjb29raWVMb2NhbGUgPSBnZXRMb2NhbGVGcm9tQ29va2llKCk7XHJcbiAgICByZXR1cm4gY29va2llTG9jYWxlIHx8IERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBTZXQgbG9jYWxlIChjbGllbnQtc2lkZSlcclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGU6IExvY2FsZSk6IHZvaWQge1xyXG4gICAgaWYgKCFpc1ZhbGlkTG9jYWxlKGxvY2FsZSkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgbG9jYWxlOiAke2xvY2FsZX0uIFVzaW5nIGRlZmF1bHQgbG9jYWxlLmApO1xyXG4gICAgICAgIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2FsZUNvb2tpZShsb2NhbGUpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXMgaW1tZWRpYXRlbHlcclxuICAgIHVwZGF0ZUhUTUxBdHRyaWJ1dGVzKGxvY2FsZSk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBhIGN1c3RvbSBldmVudCBmb3IgY29tcG9uZW50cyB0byBsaXN0ZW4gdG9cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9jYWxlQ2hhbmdlJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHsgbG9jYWxlIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXMgYmFzZWQgb24gbG9jYWxlXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIVE1MQXR0cmlidXRlcyhsb2NhbGU6IExvY2FsZSk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZURhdGEgPSBsb2NhbGVJbmZvW2xvY2FsZV07XHJcbiAgICAgICAgaWYgKGxvY2FsZURhdGEpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsb2NhbGU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSBsb2NhbGVEYXRhLmRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgSFRNTCBhdHRyaWJ1dGVzOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0IGxvY2FsZSBkaXJlY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZURpcmVjdGlvbihsb2NhbGU6IExvY2FsZSk6ICdsdHInIHwgJ3J0bCcge1xyXG4gICAgcmV0dXJuIGxvY2FsZUluZm9bbG9jYWxlXT8uZGlyZWN0aW9uIHx8ICdsdHInO1xyXG59XHJcblxyXG4vLyBHZXQgbG9jYWxlIGRpc3BsYXkgbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGlzcGxheU5hbWUobG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsZUluZm9bbG9jYWxlXT8ubmFtZSB8fCBsb2NhbGU7XHJcbn1cclxuXHJcbi8vIEdldCBsb2NhbGUgZmxhZ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRmxhZyhsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5mbGFnIHx8ICfwn4yQJztcclxufVxyXG5cclxuLy8gVHlwZVNjcmlwdCB2YWxpZGF0aW9uIGZvciBpMThuIHNldHVwIChsZWdhY3kgZnVuY3Rpb24ga2VwdCBmb3IgY29tcGF0aWJpbGl0eSlcclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSTE4bigpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZXMubGVuZ3RoID4gMCAmJiBERUZBVUxUX0xPQ0FMRSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7QUFFNUUsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMzQixNQUFNLFVBQVU7SUFBQztJQUFNO0NBQUs7QUFJNUIsTUFBTSxpQkFBeUI7QUFHL0IsTUFBTSxrQkFBa0I7SUFDM0IsTUFBTTtJQUNOLFFBQVEsTUFBTSxLQUFLLEtBQUs7SUFDeEIsVUFBVTtJQUNWLFFBQVEsb0RBQXlCO0lBQ2pDLFVBQVU7SUFDVixNQUFNO0FBQ1Y7QUFHTyxNQUFNLGFBQWE7SUFDdEIsSUFBSTtRQUNBLE1BQU07UUFDTixXQUFXO1FBQ1gsTUFBTTtJQUNWO0lBQ0EsSUFBSTtRQUNBLE1BQU07UUFDTixXQUFXO1FBQ1gsTUFBTTtJQUNWO0FBQ0o7QUFHTyxTQUFTLGNBQWMsTUFBYztJQUN4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QixNQUFjO0lBQy9DLE9BQU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRO0FBQ3ZDO0FBR08sU0FBUyxjQUFjLE1BQWM7SUFDeEMsT0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVE7QUFDdkM7QUFHTyxTQUFTO0lBQ1osSUFBSTtRQUNBLE9BQU8sUUFBUSxNQUFNLEdBQUcsS0FBSyxtQkFBbUI7SUFDcEQsRUFBRSxPQUFNO1FBQ0osT0FBTztJQUNYO0FBQ0oiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE2MCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9pMThuL3JlcXVlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmVxdWVzdENvbmZpZyB9IGZyb20gJ25leHQtaW50bC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJMb2NhbGUsIERFRkFVTFRfTE9DQUxFIH0gZnJvbSAnQC9saWIvaTE4bic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSZXF1ZXN0Q29uZmlnKGFzeW5jICgpID0+IHtcclxuICAgIC8vIEdldCBsb2NhbGUgZnJvbSBjb29raWVzIGluc3RlYWQgb2YgVVJMIHBhcmFtZXRlcnNcclxuICAgIGNvbnN0IGxvY2FsZSA9IGF3YWl0IGdldFNlcnZlckxvY2FsZSgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSAoYXdhaXQgaW1wb3J0KGAuLi8uLi9sb2NhbGVzLyR7bG9jYWxlfS5qc29uYCkpLmRlZmF1bHQ7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgICAgICBtZXNzYWdlc1xyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGxvYWQgbWVzc2FnZXMgZm9yIGxvY2FsZSAke2xvY2FsZX0sIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0OmAsIGVycm9yKTtcclxuICAgICAgICAvLyBGYWxsYmFjayB0byBkZWZhdWx0IGxvY2FsZSBtZXNzYWdlc1xyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTWVzc2FnZXMgPSAoYXdhaXQgaW1wb3J0KGAuLi8uLi9sb2NhbGVzLyR7REVGQVVMVF9MT0NBTEV9Lmpzb25gKSkuZGVmYXVsdDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2NhbGU6IERFRkFVTFRfTE9DQUxFLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogZmFsbGJhY2tNZXNzYWdlc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7O3VDQUVlLENBQUEsR0FBQSwwUEFBQSxDQUFBLG1CQUFnQixBQUFELEVBQUU7SUFDNUIsb0RBQW9EO0lBQ3BELE1BQU0sU0FBUyxNQUFNLENBQUEsR0FBQSxrSEFBQSxDQUFBLGtCQUFlLEFBQUQ7SUFFbkMsSUFBSTtRQUNBLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7a0JBQWEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU87UUFDdkUsT0FBTztZQUNIO1lBQ0E7UUFDSjtJQUNKLEVBQUUsT0FBTyxPQUFPO1FBQ1osUUFBUSxJQUFJLENBQUMsQ0FBQyxtQ0FBbUMsRUFBRSxPQUFPLDBCQUEwQixDQUFDLEVBQUU7UUFDdkYsc0NBQXNDO1FBQ3RDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7OztrQkFBYSxDQUFDLGNBQWMsRUFBRSxrSEFBQSxDQUFBLGlCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPO1FBQ3ZGLE9BQU87WUFDSCxRQUFRLGtIQUFBLENBQUEsaUJBQWM7WUFDdEIsVUFBVTtRQUNkO0lBQ0o7QUFDSiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjA4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3Byb3ZpZGVycy9SZWR1eFByb3ZpZGVyLnRzeC9wcm94eS5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJDbGllbnRSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3Qtc2VydmVyLWRvbS10dXJib3BhY2svc2VydmVyXCI7XG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckNsaWVudFJlZmVyZW5jZShcbiAgICBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGNhbGwgdGhlIGRlZmF1bHQgZXhwb3J0IG9mIFtwcm9qZWN0XS9zcmMvcHJvdmlkZXJzL1JlZHV4UHJvdmlkZXIudHN4IDxtb2R1bGUgZXZhbHVhdGlvbj4gZnJvbSB0aGUgc2VydmVyLCBidXQgaXQncyBvbiB0aGUgY2xpZW50LiBJdCdzIG5vdCBwb3NzaWJsZSB0byBpbnZva2UgYSBjbGllbnQgZnVuY3Rpb24gZnJvbSB0aGUgc2VydmVyLCBpdCBjYW4gb25seSBiZSByZW5kZXJlZCBhcyBhIENvbXBvbmVudCBvciBwYXNzZWQgdG8gcHJvcHMgb2YgYSBDbGllbnQgQ29tcG9uZW50LlwiKTsgfSxcbiAgICBcIltwcm9qZWN0XS9zcmMvcHJvdmlkZXJzL1JlZHV4UHJvdmlkZXIudHN4IDxtb2R1bGUgZXZhbHVhdGlvbj5cIixcbiAgICBcImRlZmF1bHRcIixcbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O3VDQUNlLENBQUEsR0FBQSw2T0FBQSxDQUFBLDBCQUF1QixBQUFELEVBQ2pDO0lBQWEsTUFBTSxJQUFJLE1BQU07QUFBbVMsR0FDaFUsaUVBQ0EiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDIyMCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9wcm92aWRlcnMvUmVkdXhQcm92aWRlci50c3gvcHJveHkubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQ2xpZW50UmVmZXJlbmNlIH0gZnJvbSBcInJlYWN0LXNlcnZlci1kb20tdHVyYm9wYWNrL3NlcnZlclwiO1xuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJDbGllbnRSZWZlcmVuY2UoXG4gICAgZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBjYWxsIHRoZSBkZWZhdWx0IGV4cG9ydCBvZiBbcHJvamVjdF0vc3JjL3Byb3ZpZGVycy9SZWR1eFByb3ZpZGVyLnRzeCBmcm9tIHRoZSBzZXJ2ZXIsIGJ1dCBpdCdzIG9uIHRoZSBjbGllbnQuIEl0J3Mgbm90IHBvc3NpYmxlIHRvIGludm9rZSBhIGNsaWVudCBmdW5jdGlvbiBmcm9tIHRoZSBzZXJ2ZXIsIGl0IGNhbiBvbmx5IGJlIHJlbmRlcmVkIGFzIGEgQ29tcG9uZW50IG9yIHBhc3NlZCB0byBwcm9wcyBvZiBhIENsaWVudCBDb21wb25lbnQuXCIpOyB9LFxuICAgIFwiW3Byb2plY3RdL3NyYy9wcm92aWRlcnMvUmVkdXhQcm92aWRlci50c3hcIixcbiAgICBcImRlZmF1bHRcIixcbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O3VDQUNlLENBQUEsR0FBQSw2T0FBQSxDQUFBLDBCQUF1QixBQUFELEVBQ2pDO0lBQWEsTUFBTSxJQUFJLE1BQU07QUFBK1EsR0FDNVMsNkNBQ0EiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDIzMiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjQwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2FwcC9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgTWV0YWRhdGEgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgTmV4dEludGxDbGllbnRQcm92aWRlciB9IGZyb20gJ25leHQtaW50bCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdzb25uZXInO1xyXG5cclxuaW1wb3J0IFJlZHV4UHJvdmlkZXIgZnJvbSAnQC9wcm92aWRlcnMvUmVkdXhQcm92aWRlcic7XHJcbmltcG9ydCB7IGdldFNlcnZlckxvY2FsZSwgZ2V0TG9jYWxlRGlyZWN0aW9uLCB0eXBlIExvY2FsZSB9IGZyb20gJ0AvbGliL2kxOG4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcclxuICB0aXRsZTogJ1Rhc2sgRmxvdyAtIFN0cmVhbWxpbmUgWW91ciBXb3JrZmxvdycsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnVGhlIHVsdGltYXRlIHRhc2sgbWFuYWdlbWVudCBwbGF0Zm9ybSBkZXNpZ25lZCB0byBoZWxwIHRlYW1zIGNvbGxhYm9yYXRlIGVmZmljaWVudGx5IGFuZCBhY2hpZXZlIHRoZWlyIGdvYWxzIGZhc3Rlci4nLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICB3aWR0aDogJ2RldmljZS13aWR0aCcsXHJcbiAgICBpbml0aWFsU2NhbGU6IDEsXHJcbiAgICBtYXhpbXVtU2NhbGU6IDEsXHJcbiAgICB1c2VyU2NhbGFibGU6IGZhbHNlLFxyXG4gICAgdmlld3BvcnRGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxuICB0aGVtZUNvbG9yOiBbXHJcbiAgICB7IG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknLCBjb2xvcjogJyNmZmZmZmYnIH0sXHJcbiAgICB7IG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScsIGNvbG9yOiAnIzAwMDAwMCcgfSxcclxuICBdLFxyXG4gIGFwcGxlV2ViQXBwOiB7XHJcbiAgICBjYXBhYmxlOiB0cnVlLFxyXG4gICAgc3RhdHVzQmFyU3R5bGU6ICdkZWZhdWx0JyxcclxuICAgIHRpdGxlOiAnVGFzayBGbG93JyxcclxuICB9LFxyXG4gIGZvcm1hdERldGVjdGlvbjoge1xyXG4gICAgdGVsZXBob25lOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUm9vdExheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSB7XHJcbiAgLy8gUmVhZCBsYW5ndWFnZSBmcm9tIGNvb2tpZXMgdXNpbmcgdGhlIGNlbnRyYWxpemVkIGkxOG4gdXRpbGl0eVxyXG4gIGNvbnN0IGxvY2FsZTogTG9jYWxlID0gYXdhaXQgZ2V0U2VydmVyTG9jYWxlKCk7XHJcblxyXG4gIC8vIEdldCBsb2NhbGUgZGlyZWN0aW9uIGZvciBIVE1MIGRpciBhdHRyaWJ1dGVcclxuICBjb25zdCBkaXJlY3Rpb24gPSBnZXRMb2NhbGVEaXJlY3Rpb24obG9jYWxlKTtcclxuXHJcbiAgLy8gTG9hZCBtZXNzYWdlcyBiYXNlZCBvbiBjb29raWUtZGV0ZXJtaW5lZCBsb2NhbGUgd2l0aCBlcnJvciBoYW5kbGluZ1xyXG4gIGxldCBtZXNzYWdlcztcclxuICB0cnkge1xyXG4gICAgbWVzc2FnZXMgPSAoYXdhaXQgaW1wb3J0KGAuLi8uLi9sb2NhbGVzLyR7bG9jYWxlfS5qc29uYCkpLmRlZmF1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGxvYWQgbWVzc2FnZXMgZm9yIGxvY2FsZSAke2xvY2FsZX0sIGZhbGxpbmcgYmFjayB0byBFbmdsaXNoOmAsIGVycm9yKTtcclxuICAgIC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2ggbWVzc2FnZXMgaWYgbG9jYWxlLXNwZWNpZmljIG1lc3NhZ2VzIGZhaWwgdG8gbG9hZFxyXG4gICAgbWVzc2FnZXMgPSAoYXdhaXQgaW1wb3J0KGAuLi8uLi9sb2NhbGVzL2VuLmpzb25gKSkuZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbFxyXG4gICAgICBsYW5nPXtsb2NhbGV9XHJcbiAgICAgIGRpcj17ZGlyZWN0aW9ufVxyXG4gICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcclxuICAgID5cclxuXHJcbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImFudGlhbGlhc2VkXCI+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICAgIGF0dHJpYnV0ZT1cImNsYXNzXCJcclxuICAgICAgICAgIGRlZmF1bHRUaGVtZT1cInN5c3RlbVwiXHJcbiAgICAgICAgICBlbmFibGVTeXN0ZW1cclxuICAgICAgICAgIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2VcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmVkdXhQcm92aWRlcj5cclxuICAgICAgICAgICAgPE5leHRJbnRsQ2xpZW50UHJvdmlkZXIgbG9jYWxlPXtsb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L05leHRJbnRsQ2xpZW50UHJvdmlkZXI+XHJcbiAgICAgICAgICA8L1JlZHV4UHJvdmlkZXI+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDxUb2FzdGVyIHJpY2hDb2xvcnMgcG9zaXRpb249XCJib3R0b20tbGVmdFwiIGNsb3NlQnV0dG9uIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFFTyxNQUFNLFdBQXFCO0lBQ2hDLE9BQU87SUFDUCxhQUNFO0lBQ0YsVUFBVTtRQUNSLE9BQU87UUFDUCxjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7UUFDZCxhQUFhO0lBQ2Y7SUFDQSxZQUFZO1FBQ1Y7WUFBRSxPQUFPO1lBQWlDLE9BQU87UUFBVTtRQUMzRDtZQUFFLE9BQU87WUFBZ0MsT0FBTztRQUFVO0tBQzNEO0lBQ0QsYUFBYTtRQUNYLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsT0FBTztJQUNUO0lBQ0EsaUJBQWlCO1FBQ2YsV0FBVztJQUNiO0FBQ0Y7QUFFZSxlQUFlLFdBQVcsRUFDdkMsUUFBUSxFQUdUO0lBQ0MsZ0VBQWdFO0lBQ2hFLE1BQU0sU0FBaUIsTUFBTSxDQUFBLEdBQUEsa0hBQUEsQ0FBQSxrQkFBZSxBQUFEO0lBRTNDLDhDQUE4QztJQUM5QyxNQUFNLFlBQVksQ0FBQSxHQUFBLGtIQUFBLENBQUEscUJBQWtCLEFBQUQsRUFBRTtJQUVyQyxzRUFBc0U7SUFDdEUsSUFBSTtJQUNKLElBQUk7UUFDRixXQUFXLENBQUM7Ozs7Ozs7OztrQkFBYSxDQUFDLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTztJQUNuRSxFQUFFLE9BQU8sT0FBTztRQUNkLFFBQVEsSUFBSSxDQUFDLENBQUMsbUNBQW1DLEVBQUUsT0FBTywwQkFBMEIsQ0FBQyxFQUFFO1FBQ3ZGLHdFQUF3RTtRQUN4RSxXQUFXLENBQUMsd0dBQXFDLEVBQUUsT0FBTztJQUM1RDtJQUVBLHFCQUNFLDhPQUFDO1FBQ0MsTUFBTTtRQUNOLEtBQUs7UUFDTCx3QkFBd0I7a0JBR3hCLGNBQUEsOE9BQUM7WUFBSyxXQUFVOzs4QkFDZCw4T0FBQyxnSkFBQSxDQUFBLGdCQUFhO29CQUNaLFdBQVU7b0JBQ1YsY0FBYTtvQkFDYixZQUFZO29CQUNaLHlCQUF5Qjs4QkFFekIsY0FBQSw4T0FBQyxrSUFBQSxDQUFBLFVBQWE7a0NBQ1osY0FBQSw4T0FBQyxrUUFBQSxDQUFBLHlCQUFzQjs0QkFBQyxRQUFROzRCQUFRLFVBQVU7c0NBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlQLDhPQUFDLHdJQUFBLENBQUEsVUFBTztvQkFBQyxVQUFVO29CQUFDLFVBQVM7b0JBQWMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUQiLCJkZWJ1Z0lkIjpudWxsfX1dCn0=
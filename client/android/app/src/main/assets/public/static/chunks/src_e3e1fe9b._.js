(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/auth/Unauthorized.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Unauthorized
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Unauthorized() {
    _s();
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Unauthorized.useEffect": ()=>{
            const timer = setInterval({
                "Unauthorized.useEffect.timer": ()=>{
                    setCountdown({
                        "Unauthorized.useEffect.timer": (prev)=>{
                            if (prev === 1) {
                                clearInterval(timer);
                                router.replace('/login');
                            }
                            return prev - 1;
                        }
                    }["Unauthorized.useEffect.timer"]);
                }
            }["Unauthorized.useEffect.timer"], 1000);
            return ({
                "Unauthorized.useEffect": ()=>clearInterval(timer)
            })["Unauthorized.useEffect"];
        }
    }["Unauthorized.useEffect"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-col items-center justify-center text-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold text-destructive",
                children: "Unauthorized"
            }, void 0, false, {
                fileName: "[project]/src/components/auth/Unauthorized.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-muted-foreground",
                children: "You don’t have access to this page."
            }, void 0, false, {
                fileName: "[project]/src/components/auth/Unauthorized.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm",
                children: [
                    "Redirecting to login in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: countdown
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/Unauthorized.tsx",
                        lineNumber: 31,
                        columnNumber: 33
                    }, this),
                    " seconds..."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/Unauthorized.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/Unauthorized.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Unauthorized, "ufHE295HPMI9dE6bV2mQj+y5EP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Unauthorized;
var _c;
__turbopack_context__.k.register(_c, "Unauthorized");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useAuth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAuth = ()=>{
    var _data_data, _data_data1, _data_data2;
    _s();
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMeQuery"])();
    return {
        user: data === null || data === void 0 ? void 0 : data.data,
        isLoading,
        isError,
        isLoggedIn: !!data,
        role: data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.role,
        id: data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.id,
        mongoId: data === null || data === void 0 ? void 0 : (_data_data2 = data.data) === null || _data_data2 === void 0 ? void 0 : _data_data2._id
    };
};
_s(useAuth, "vVd668T5MwhQkgLzqeUI2Wcy9uw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMeQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/auth/UserAuthGuard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserAuthGuard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/Unauthorized.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Loading spinner component
function AuthLoadingSpinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Verifying authentication..."
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = AuthLoadingSpinner;
function UserAuthGuard(param) {
    let { children, requiredRole, fallback } = param;
    _s();
    const { role, isLoggedIn, isLoading, isError, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Show loading state while checking authentication
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthLoadingSpinner, {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    // Check for authentication errors
    if (isError) {
        console.warn('[UserAuthGuard] Authentication error detected');
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 40,
            columnNumber: 24
        }, this);
    }
    // Check if user is logged in and has valid data
    if (!isLoggedIn || !user || !role) {
        console.warn('[UserAuthGuard] Authentication failed:', {
            isLoggedIn,
            hasUser: !!user,
            hasRole: !!role
        });
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 50,
            columnNumber: 24
        }, this);
    }
    // Check for specific role requirement
    if (requiredRole && role !== requiredRole) {
        console.warn("[UserAuthGuard] Role mismatch. Required: ".concat(requiredRole, ", Current: ").concat(role));
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 56,
            columnNumber: 24
        }, this);
    }
    // All checks passed, render children
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(UserAuthGuard, "q6psLfpJd6XPMNh1H90JO3ZJio8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c1 = UserAuthGuard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AuthLoadingSpinner");
__turbopack_context__.k.register(_c1, "UserAuthGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/store/hooks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAppDispatch": ()=>useAppDispatch,
    "useAppSelector": ()=>useAppSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
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
"[project]/src/components/auth/LogoutBtn.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LogoutButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function LogoutButton() {
    _s();
    const [logout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoutMutation"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('auth.logout');
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const handleLogout = async ()=>{
        try {
            await logout().unwrap();
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].util.resetApiState());
        } catch (err) {
            console.error('Logout failed:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t('error'));
        } finally{
            router.push('/login'); // Redirect to login
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t('success'));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", isRTL ? "flex flex-row-reverse justify-end" : "flex flex-row justify-start"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleLogout,
            variant: "ghost",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-auto p-2 hover:bg-destructive/10 text-destructive", isRTL ? "justify-end" : "justify-start"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 w-full", isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 shrink-0", isRTL ? "ml-2" : "mr-2")
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LogoutBtn.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-primary",
                        children: t('button')
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LogoutBtn.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/LogoutBtn.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LogoutBtn.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/auth/LogoutBtn.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(LogoutButton, "ncz8cnt0jwJpRN5e/rJ9k3p1Tvw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoutMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LogoutButton;
var _c;
__turbopack_context__.k.register(_c, "LogoutButton");
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
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": ()=>Avatar,
    "AvatarFallback": ()=>AvatarFallback,
    "AvatarImage": ()=>AvatarImage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Avatar(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/user/UserAvatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserAvatar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
;
;
function UserAvatar(param) {
    let { name, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
        className: "h-10 w-10 ring-2 ring-primary/20 rounded-2xl cursor-pointer",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
            className: "bg-primary text-primary-foreground font-medium rounded-2xl font-primary",
            children: name === null || name === void 0 ? void 0 : name.split(' ').map((name)=>name[0]).join('')
        }, void 0, false, {
            fileName: "[project]/src/components/user/UserAvatar.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/user/UserAvatar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = UserAvatar;
var _c;
__turbopack_context__.k.register(_c, "UserAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": ()=>Badge,
    "badgeVariants": ()=>badgeVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Popover": ()=>Popover,
    "PopoverAnchor": ()=>PopoverAnchor,
    "PopoverContent": ()=>PopoverContent,
    "PopoverTrigger": ()=>PopoverTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Popover(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Popover;
function PopoverTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = PopoverTrigger;
function PopoverContent(param) {
    let { className, align = "center", sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = PopoverContent;
function PopoverAnchor(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
_c3 = PopoverAnchor;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
__turbopack_context__.k.register(_c3, "PopoverAnchor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/dashboard/UnifiedNotificationPopup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UnifiedNotificationPopup": ()=>UnifiedNotificationPopup
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
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
const getNotificationIcon = (type)=>{
    const iconMap = {
        assignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        grade: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        event: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        system: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        reminder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    };
    return iconMap[type];
};
const getNotificationColors = (type)=>{
    const colorMap = {
        assignment: {
            bg: 'bg-blue-50 dark:bg-blue-500/10',
            border: 'border-blue-200 dark:border-blue-500/30',
            iconBg: 'bg-blue-100 dark:bg-blue-500/20',
            iconColor: 'text-blue-600 dark:text-blue-400',
            shadow: 'shadow-blue-500/20'
        },
        grade: {
            bg: 'bg-emerald-50 dark:bg-emerald-500/10',
            border: 'border-emerald-200 dark:border-emerald-500/30',
            iconBg: 'bg-emerald-100 dark:bg-emerald-500/20',
            iconColor: 'text-emerald-600 dark:text-emerald-400',
            shadow: 'shadow-emerald-500/20'
        },
        event: {
            bg: 'bg-purple-50 dark:bg-purple-500/10',
            border: 'border-purple-200 dark:border-purple-500/30',
            iconBg: 'bg-purple-100 dark:bg-purple-500/20',
            iconColor: 'text-purple-600 dark:text-purple-400',
            shadow: 'shadow-purple-500/20'
        },
        system: {
            bg: 'bg-orange-50 dark:bg-orange-500/10',
            border: 'border-orange-200 dark:border-orange-500/30',
            iconBg: 'bg-orange-100 dark:bg-orange-500/20',
            iconColor: 'text-orange-600 dark:text-orange-400',
            shadow: 'shadow-orange-500/20'
        },
        reminder: {
            bg: 'bg-amber-50 dark:bg-amber-500/10',
            border: 'border-amber-200 dark:border-amber-500/30',
            iconBg: 'bg-amber-100 dark:bg-amber-500/20',
            iconColor: 'text-amber-600 dark:text-amber-400',
            shadow: 'shadow-amber-500/20'
        }
    };
    return colorMap[type];
};
const formatTimestamp = (timestamp, t, isRTL)=>{
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);
    if (diffInHours < 1) {
        const minutes = Math.floor(diffInHours * 60);
        return isRTL ? "".concat(t('popup.timeAgo.prefix'), " ").concat(minutes, " ").concat(t('popup.timeAgo.minutes')) : "".concat(minutes).concat(t('popup.timeAgo.minutes'));
    } else if (diffInHours < 24) {
        const hours = Math.floor(diffInHours);
        return isRTL ? "".concat(t('popup.timeAgo.prefix'), " ").concat(hours, " ").concat(t('popup.timeAgo.hours')) : "".concat(hours).concat(t('popup.timeAgo.hours'));
    } else {
        const days = Math.floor(diffInHours / 24);
        return isRTL ? "".concat(t('popup.timeAgo.prefix'), " ").concat(days, " ").concat(t('popup.timeAgo.days')) : "".concat(days).concat(t('popup.timeAgo.days'));
    }
};
function UnifiedNotificationPopup() {
    _s();
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('notifications');
    // TODO: Replace with actual API call - using translations for static data now
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            type: 'assignment',
            title: t('popup.staticData.assignment.title'),
            message: t('popup.staticData.assignment.message'),
            timestamp: '2025-01-23T10:30:00',
            isRead: false,
            priority: 'high',
            actionUrl: '/assignments/math-3'
        },
        {
            id: '2',
            type: 'grade',
            title: t('popup.staticData.grade.title'),
            message: t('popup.staticData.grade.message'),
            timestamp: '2025-01-23T09:15:00',
            isRead: false,
            priority: 'medium',
            actionUrl: '/grades'
        },
        {
            id: '3',
            type: 'event',
            title: t('popup.staticData.event.title'),
            message: t('popup.staticData.event.message'),
            timestamp: '2025-01-23T08:00:00',
            isRead: true,
            priority: 'medium',
            actionUrl: '/schedule'
        },
        {
            id: '4',
            type: 'system',
            title: t('popup.staticData.system.title'),
            message: t('popup.staticData.system.message'),
            timestamp: '2025-01-22T16:45:00',
            isRead: true,
            priority: 'low'
        },
        {
            id: '5',
            type: 'reminder',
            title: t('popup.staticData.reminder.title'),
            message: t('popup.staticData.reminder.message'),
            timestamp: '2025-01-22T14:20:00',
            isRead: false,
            priority: 'medium',
            actionUrl: '/library'
        }
    ]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const unreadCount = notifications.filter((n)=>!n.isRead).length;
    // TODO: Implement API call to mark notification as read
    const markAsRead = (notificationId)=>{
        setNotifications((prev)=>prev.map((notification)=>notification.id === notificationId ? {
                    ...notification,
                    isRead: true
                } : notification));
    };
    // TODO: Implement API call to mark all notifications as read
    const markAllAsRead = ()=>{
        setNotifications((prev)=>prev.map((notification)=>({
                    ...notification,
                    isRead: true
                })));
    };
    // TODO: Implement API call to dismiss notification
    const dismissNotification = (notificationId)=>{
        setNotifications((prev)=>prev.filter((notification)=>notification.id !== notificationId));
    };
    const getSubtitleText = ()=>{
        if (unreadCount === 0) {
            return t('popup.subtitle.allCaughtUp');
        } else {
            return t('popup.subtitle.hasNew', {
                count: unreadCount
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        open: isOpen,
        onOpenChange: setIsOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "relative text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 group",
                    title: t('popup.title'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute h-5 w-5 p-0 text-xs bg-destructive hover:bg-destructive/90 rounded-full', 'flex items-center justify-center font-medium animate-pulse shadow-lg', 'border-2 border-background', isRTL ? '-top-1 -left-1' : '-top-1 -right-1'),
                            children: unreadCount > 9 ? '9+' : unreadCount
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-80 max-w-[calc(100vw-1rem)] bg-background/95 backdrop-blur-xl border border-border/40', 'rounded-2xl shadow-2xl p-0 overflow-hidden', 'data-[state=open]:animate-in data-[state=closed]:animate-out', 'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', 'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95', 'data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1', 'transform-gpu'),
                align: isRTL ? 'start' : 'end',
                sideOffset: 12,
                dir: isRTL ? 'rtl' : 'ltr',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden border-b border-border/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-secondary/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-between', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative p-2.5 rounded-xl bg-primary/15 backdrop-blur-sm border border-primary/25 shadow-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base font-semibold text-foreground font-primary', isRTL ? 'text-right' : 'text-left'),
                                                            children: t('popup.title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground mt-0.5 font-medium', isRTL ? 'text-right' : 'text-left'),
                                                            children: getSubtitleText()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: markAllAsRead,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs text-primary hover:bg-primary/15 rounded-lg h-7 px-3', 'font-medium transition-all duration-300 hover:scale-105 active:scale-95', 'shadow-sm hover:shadow-md'),
                                            children: t('popup.markAllRead')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-80 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-80 overflow-y-auto overflow-x-hidden scroll-smooth p-2 space-y-1",
                            onWheel: (e)=>{
                                e.stopPropagation();
                                const target = e.currentTarget;
                                const { scrollTop, scrollHeight, clientHeight } = target;
                                // Check if we're at the boundaries
                                const atTop = scrollTop === 0;
                                const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
                                // Only allow scrolling within the container
                                if (e.deltaY < 0 && atTop || e.deltaY > 0 && atBottom) {
                                    e.preventDefault();
                                }
                            },
                            style: {
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(0,0,0,0.3) rgba(0,0,0,0.1)'
                            },
                            children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-br from-muted/20 to-muted/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-8 h-8 text-muted-foreground/70"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                            lineNumber: 318,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm font-medium mb-1",
                                        children: t('popup.noNotifications')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-xs",
                                        children: t('popup.allCaughtUpMessage')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 space-y-1 animate-fade-in",
                                children: notifications.map((notification, index)=>{
                                    const Icon = getNotificationIcon(notification.type);
                                    const colors = getNotificationColors(notification.type);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group relative p-3 mx-1 rounded-xl transition-all duration-300 cursor-pointer', 'hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transform-gpu', 'border backdrop-blur-sm scroll-mb-2', !notification.isRead && [
                                            colors.bg,
                                            colors.border,
                                            colors.shadow,
                                            'shadow-md hover:shadow-lg'
                                        ], notification.isRead && [
                                            'bg-muted/20 border-border/30 hover:bg-muted/40 hover:border-border/50',
                                            'hover:shadow-md'
                                        ], 'animate-slide-in-fade opacity-0'),
                                        style: {
                                            animationDelay: "".concat(index * 100, "ms"),
                                            animationFillMode: 'forwards'
                                        },
                                        onClick: ()=>{
                                            markAsRead(notification.id);
                                            if (notification.actionUrl) {
                                                console.log('Navigate to:', notification.actionUrl);
                                            }
                                        },
                                        children: [
                                            !notification.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute w-2.5 h-2.5 bg-primary rounded-full shadow-sm', 'animate-pulse-glow border border-primary/30', isRTL ? 'left-2 bottom-3' : 'right-2 bottom-3')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                lineNumber: 365,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-300', 'hover:bg-destructive/20 hover:text-destructive rounded-lg backdrop-blur-sm', 'shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95', isRTL ? 'left-1 top-1' : 'right-1 top-1'),
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    dismissNotification(notification.id);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                lineNumber: 373,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex gap-3', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-start justify-between gap-2 mb-2', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold text-foreground line-clamp-1 font-primary leading-tight', 'transition-colors duration-200 group-hover:text-primary', isRTL ? 'text-right' : 'text-left'),
                                                                    children: notification.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground shrink-0 font-medium px-2 py-1', 'bg-muted/30 rounded-md backdrop-blur-sm', isRTL ? 'text-left' : 'text-right'),
                                                                    children: formatTimestamp(notification.timestamp, t, isRTL)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3', 'transition-colors duration-200 group-hover:text-foreground/80', isRTL ? 'text-right' : 'text-left'),
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 flex-wrap', isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'),
                                                            children: [
                                                                notification.priority === 'high' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "destructive",
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs py-1 px-2.5 h-6 rounded-lg font-medium shadow-sm', 'animate-pulse-glow border border-destructive/30'),
                                                                    children: t('popup.priority.high')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs py-1 px-2.5 h-6 rounded-lg font-medium capitalize', 'backdrop-blur-sm shadow-sm transition-all duration-200', 'hover:shadow-md hover:scale-105', colors.border, colors.iconColor),
                                                                    children: t("popup.types.".concat(notification.type))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                lineNumber: 390,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, notification.id, true, {
                                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                        lineNumber: 334,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 328,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border/20 p-3 bg-gradient-to-r from-muted/20 via-background/60 to-muted/20 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full text-sm rounded-xl h-9 font-medium backdrop-blur-sm', 'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]', 'hover:bg-primary/10 hover:border-primary/40 hover:text-primary', 'shadow-sm hover:shadow-md'),
                            onClick: ()=>{
                                setIsOpen(false);
                                console.log('Navigate to full notifications page');
                            },
                            children: t('popup.viewAll')
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                        lineNumber: 466,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(UnifiedNotificationPopup, "ct4dHTOthQGEMP2ojr/rwlMZ3sM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = UnifiedNotificationPopup;
var _c;
__turbopack_context__.k.register(_c, "UnifiedNotificationPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navbar": ()=>Navbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LogoutBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/LogoutBtn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/made/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user/UserAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$UnifiedNotificationPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/UnifiedNotificationPopup.tsx [app-client] (ecmascript)");
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
function Navbar() {
    _s();
    const { name, email } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])().user;
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('navbar');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-xl w-full', isRTL ? 'direction-rtl' : 'direction-ltr'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center h-16 w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 absolute', isRTL ? 'right-0' : 'left-0'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-2xl bg-primary shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    className: "h-6 w-6 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xl font-bold text-foreground font-primary', isRTL ? 'text-right' : 'text-left'),
                                        children: t('brand')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground', isRTL ? 'text-right' : 'text-left'),
                                        children: t('portal')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 absolute flex-row', isRTL ? 'left-0 ' : 'right-0 '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$UnifiedNotificationPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedNotificationPopup"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: "relative h-10 w-10 rounded-2xl hover:bg-primary/10 transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                name: name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        className: "w-56 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl",
                                        align: isRTL ? 'start' : 'end',
                                        forceMount: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                className: "font-normal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1', isRTL ? 'items-end' : 'items-start'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium leading-none text-foreground font-primary', isRTL ? 'text-right' : 'text-left'),
                                                            children: name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs leading-none text-muted-foreground', isRTL ? 'text-right' : 'text-left'),
                                                            children: email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                className: "bg-border/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-primary/10 rounded-xl transition-all duration-200 cursor-pointer', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-primary",
                                                        children: t('profile')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                className: "bg-border/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "hover:bg-destructive/10 text-destructive rounded-xl transition-all duration-200 cursor-pointer p-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LogoutBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Navbar, "kw3JQrkTDIfmzAZSb63fJ9mLO6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/StudentLayout/StudentLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StudentLayout": ()=>StudentLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function StudentLayout(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/StudentLayout/StudentLayout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('lg:ml-64 pt-16 min-h-screen overflow-y-auto', 'scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent', 'dark:scrollbar-thumb-blue-800', className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 sm:p-6 lg:p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/StudentLayout/StudentLayout.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/StudentLayout/StudentLayout.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/StudentLayout/StudentLayout.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/StudentLayout/StudentLayout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = StudentLayout;
var _c;
__turbopack_context__.k.register(_c, "StudentLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": ()=>ScrollArea,
    "ScrollBar": ()=>ScrollBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar(param) {
    let { className, orientation = "vertical", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/SideMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SideMenu": ()=>SideMenu,
    "SideNavContent": ()=>SideNavContent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function SideNavContent(param) {
    let { navItems, onItemClick } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full flex-col bg-background/80 backdrop-blur-md border-border/50", isRTL ? "border-l" : "border-r"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "flex-1 px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-3",
                children: navItems.map((param)=>{
                    let { labelKey, href, icon: Icon, badge } = param;
                    const isActive = pathname.endsWith(href);
                    const translatedLabel = t(labelKey);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        onClick: onItemClick,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]', isActive ? 'bg-primary text-primary-foreground shadow-lg border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-md hover:border hover:border-primary/20 border border-transparent', isRTL ? 'flex-row-reverse' : 'flex-row'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-4", isRTL ? "flex-row-reverse" : "flex-row"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 rounded-xl transition-all duration-300', isActive ? 'bg-primary-foreground/20 shadow-sm' : 'group-hover:bg-primary/20 group-hover:shadow-sm'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-5 w-5 transition-all duration-300', isActive ? 'text-primary-foreground' : 'text-current group-hover:text-primary group-hover:scale-110')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SideMenu.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SideMenu.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium tracking-wide leading-relaxed font-primary", isRTL ? "text-right" : "text-left"),
                                        children: translatedLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SideMenu.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SideMenu.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this),
                            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: isActive ? 'secondary' : 'outline',
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs px-3 py-1 font-semibold transition-all duration-300 rounded-xl shadow-sm', isActive ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 group-hover:scale-105'),
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SideMenu.tsx",
                                lineNumber: 77,
                                columnNumber: 19
                            }, this)
                        ]
                    }, labelKey, true, {
                        fileName: "[project]/src/components/layout/SideMenu.tsx",
                        lineNumber: 36,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SideMenu.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/SideMenu.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/SideMenu.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(SideNavContent, "kJzuDzDHGrHjUj+98ifG3WoYGeQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = SideNavContent;
function SideMenu(param) {
    let { navItems, onItemClick } = param;
    _s1();
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const MemoizedSideNavContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SideNavContent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-16 h-[calc(100vh-4rem)] w-72 z-40 hidden lg:flex bg-background/80 backdrop-blur-md border-border/50 shadow-xl", isRTL ? "right-0 border-l rounded-l-2xl" : "left-0 border-r rounded-r-2xl"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoizedSideNavContent, {
                    navItems: navItems,
                    onItemClick: onItemClick
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/SideMenu.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SideMenu.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsSidebarOpen(true),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("lg:hidden fixed bottom-8 z-50 bg-background border border-border p-2 rounded-xl shadow-lg transition-all duration-200 hover:bg-primary/10", isRTL ? "right-4" : "left-4"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "w-6 h-6 text-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/SideMenu.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SideMenu.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 h-full w-72 z-50 bg-background/90 backdrop-blur-md border-border/50 shadow-xl transition-transform duration-300 lg:hidden', isRTL ? 'right-0 border-l rounded-l-2xl' : 'left-0 border-r rounded-r-2xl', isSidebarOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex p-4", isRTL ? "justify-start" : "justify-end"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsSidebarOpen(false),
                            className: "p-2 rounded-xl hover:bg-primary/10 transition-all duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "w-5 h-5 text-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SideMenu.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/SideMenu.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SideMenu.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoizedSideNavContent, {
                        navItems: navItems,
                        onItemClick: ()=>setIsSidebarOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SideMenu.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SideMenu.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-background/50 backdrop-blur-sm z-40 lg:hidden",
                onClick: ()=>setIsSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SideMenu.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(SideMenu, "15CJtQr7Q6YMhN2o/MoIw3aYka0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = SideMenu;
var _c, _c1;
__turbopack_context__.k.register(_c, "SideNavContent");
__turbopack_context__.k.register(_c1, "SideMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$StudentLayout$2f$StudentLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/StudentLayout/StudentLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SideMenu.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$StudentLayout$2f$StudentLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/StudentLayout/StudentLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SideMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/constants/sideMenuData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "navItemsData": ()=>navItemsData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
;
const navItemsData = {
    student: (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: "/student/".concat(id),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.courses',
                href: "/student/".concat(id, "/courses"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.assignments',
                href: "/student/".concat(id, "/assignment"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.grades',
                href: "/student/".concat(id, "/grades"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.calendar',
                href: "/student/".concat(id, "/calendar"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                badge: ''
            },
            {
                labelKey: 'sidebar.sections',
                href: "/student/".concat(id, "/sections"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: ''
            },
            {
                labelKey: 'sidebar.settings',
                href: "/student/".concat(id, "/settings"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ],
    teacher: (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: "/teacher/".concat(id),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.courses',
                href: "/teacher/".concat(id, "/courses"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.assignments',
                href: "/teacher/".concat(id, "/assignments"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.sections',
                href: "/teacher/".concat(id, "/sections"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: ''
            },
            {
                labelKey: 'sidebar.settings',
                href: "/teacher/".concat(id, "/settings"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ],
    admin: (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: "/admin/".concat(id),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.colleges',
                href: "/admin/".concat(id, "/colleges"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.departments',
                href: "/admin/".concat(id, "/departments"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.courses',
                href: "/admin/".concat(id, "/courses"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.teachers',
                href: "/admin/".concat(id, "/teachers"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.settings',
                href: "/admin/".concat(id, "/settings"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ],
    'super-admin': (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: "/super-admin/".concat(id),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.university',
                href: "/super-admin/".concat(id, "/university"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.colleges',
                href: "/super-admin/".concat(id, "/colleges"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.departments',
                href: "/super-admin/".concat(id, "/departments"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.courses',
                href: "/super-admin/".concat(id, "/courses"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.teachers',
                href: "/super-admin/".concat(id, "/teachers"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.students',
                href: "/super-admin/".concat(id, "/students"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.settings',
                href: "/super-admin/".concat(id, "/settings"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/error/ErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorBoundary": ()=>ErrorBoundary,
    "ErrorBoundaryWithRouter": ()=>ErrorBoundaryWithRouter,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorInfo: undefined
        };
    }
    componentDidCatch(error, errorInfo) {
        var // Call custom error handler if provided
        _this_props_onError, _this_props;
        console.error("[".concat(this.props.level || 'Unknown', " Error Boundary]:"), error);
        console.error('Error Info:', errorInfo);
        (_this_props_onError = (_this_props = this.props).onError) === null || _this_props_onError === void 0 ? void 0 : _this_props_onError.call(_this_props, error, errorInfo);
        // Store error info for debugging
        this.setState({
            errorInfo
        });
    }
    render() {
        if (this.state.hasError) {
            // Use custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default error UI based on level
            const { level = 'component' } = this.props;
            if (level === 'app') {
                var _this_state_errorInfo;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-screen flex flex-col items-center justify-center p-8 bg-background",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-20 w-20 text-destructive mx-auto mb-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-4",
                                children: "Application Error"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: "The application encountered a critical error. Please refresh the page or contact support if the problem persists."
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: this.handleRefresh,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            "Refresh Page"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: this.handleGoHome,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this),
                                            "Go Home"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "mt-6 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground",
                                        children: "Error Details (Development)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto",
                                        children: [
                                            this.state.error.toString(),
                                            (_this_state_errorInfo = this.state.errorInfo) === null || _this_state_errorInfo === void 0 ? void 0 : _this_state_errorInfo.componentStack
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this);
            }
            if (level === 'page') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center min-h-[60vh] p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-16 w-16 text-destructive mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold mb-2",
                            children: "Page Error"
                        }, void 0, false, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-4 text-center max-w-md",
                            children: "This page encountered an error. You can try refreshing or go back to the previous page."
                        }, void 0, false, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: this.handleRetry,
                                    variant: "outline",
                                    children: "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: this.handleRefresh,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        "Refresh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                this.props.showHomeButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: this.handleGoHome,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        "Home"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this);
            }
            // Component level error
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border border-destructive/20 rounded-lg bg-destructive/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 text-destructive"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-destructive",
                                children: "Component Error"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mb-3",
                        children: "This component failed to load properly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "outline",
                        onClick: this.handleRetry,
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "handleRetry", ()=>{
            this.setState({
                hasError: false,
                error: undefined,
                errorInfo: undefined
            });
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "handleRefresh", ()=>{
            window.location.reload();
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "handleGoHome", ()=>{
            if (this.props.onNavigateHome) {
                this.props.onNavigateHome();
            } else {
                // Fallback to window.location if no navigation handler is provided
                window.location.href = '/';
            }
        });
        this.state = {
            hasError: false
        };
    }
}
function ErrorBoundaryWithRouter(props) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleNavigateHome = ()=>{
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        ...props,
        onNavigateHome: handleNavigateHome
    }, void 0, false, {
        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
_s(ErrorBoundaryWithRouter, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ErrorBoundaryWithRouter;
const __TURBOPACK__default__export__ = ErrorBoundaryWithRouter;
var _c;
__turbopack_context__.k.register(_c, "ErrorBoundaryWithRouter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/error/PageErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageErrorBoundary": ()=>PageErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-client] (ecmascript)");
'use client';
;
;
function PageErrorBoundary(param) {
    let { children, showHomeButton = true } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        level: "page",
        showHomeButton: showHomeButton,
        onError: (error, errorInfo)=>{
            // Log page-level errors for monitoring
            console.error('[Page Error]:', {
                error: error.message,
                stack: error.stack,
                componentStack: errorInfo.componentStack,
                timestamp: new Date().toISOString(),
                url: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"
            });
        // Here you could send to error reporting service
        // Example: Sentry, LogRocket, etc.
        // errorReportingService.captureException(error, { extra: errorInfo });
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/error/PageErrorBoundary.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = PageErrorBoundary;
var _c;
__turbopack_context__.k.register(_c, "PageErrorBoundary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/error/ComponentErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ComponentErrorBoundary": ()=>ComponentErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-client] (ecmascript)");
'use client';
;
;
function ComponentErrorBoundary(param) {
    let { children, fallback, componentName = 'Unknown Component' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        level: "component",
        fallback: fallback,
        onError: (error, errorInfo)=>{
            // Log component-level errors
            console.error("[Component Error - ".concat(componentName, "]:"), {
                error: error.message,
                stack: error.stack,
                componentStack: errorInfo.componentStack,
                timestamp: new Date().toISOString(),
                componentName
            });
        // Component errors are usually less critical
        // but still worth tracking for debugging
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/error/ComponentErrorBoundary.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = ComponentErrorBoundary;
var _c;
__turbopack_context__.k.register(_c, "ComponentErrorBoundary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/error/AppErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppErrorBoundary": ()=>AppErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-client] (ecmascript)");
'use client';
;
;
function AppErrorBoundary(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        level: "app",
        onError: (error, errorInfo)=>{
            // Log critical app-level errors
            console.error('[Critical App Error]:', {
                error: error.message,
                stack: error.stack,
                componentStack: errorInfo.componentStack,
                timestamp: new Date().toISOString(),
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
                url: ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable"
            });
        // Critical errors should be reported immediately
        // Example: Send to error monitoring service
        // errorReportingService.captureException(error, {
        //   level: 'fatal',
        //   extra: errorInfo
        // });
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/error/AppErrorBoundary.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = AppErrorBoundary;
var _c;
__turbopack_context__.k.register(_c, "AppErrorBoundary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/error/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/PageErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ComponentErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ComponentErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$AppErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/AppErrorBoundary.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/error/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/PageErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ComponentErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ComponentErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$AppErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/AppErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/error/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/app/(user)/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$UserAuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/UserAuthGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SideMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$sideMenuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/sideMenuData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/error/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/PageErrorBoundary.tsx [app-client] (ecmascript)");
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
function UserLayout(param) {
    let { children } = param;
    _s();
    const [, role, id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])().split('/');
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('UserLayout role:', role, 'id:', id);
    }
    const getNavItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$sideMenuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemsData"][role];
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserLayout.useMemo[navItems]": ()=>{
            return getNavItems ? getNavItems(id) : [];
        }
    }["UserLayout.useMemo[navItems]"], [
        getNavItems,
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$UserAuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                        fileName: "[project]/src/app/(user)/layout.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex pt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SideMenu"], {
                                navItems: navItems
                            }, void 0, false, {
                                fileName: "[project]/src/app/(user)/layout.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1", isRTL ? "lg:mr-72" : "lg:ml-72"),
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/app/(user)/layout.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(user)/layout.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(user)/layout.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/layout.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(user)/layout.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(UserLayout, "ueNQscpB+WpOhxmoG0s1nhRYJm4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = UserLayout;
var _c;
__turbopack_context__.k.register(_c, "UserLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2F1dGgvVW5hdXRob3JpemVkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVW5hdXRob3JpemVkKCkge1xyXG4gIGNvbnN0IFtjb3VudGRvd24sIHNldENvdW50ZG93bl0gPSB1c2VTdGF0ZSg0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRDb3VudGRvd24oKHByZXYpID0+IHtcclxuICAgICAgICBpZiAocHJldiA9PT0gMSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2IC0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBweC00XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtZGVzdHJ1Y3RpdmVcIj5VbmF1dGhvcml6ZWQ8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgIFlvdSBkb27igJl0IGhhdmUgYWNjZXNzIHRvIHRoaXMgcGFnZS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc21cIj5cclxuICAgICAgICBSZWRpcmVjdGluZyB0byBsb2dpbiBpbiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntjb3VudGRvd259PC9zcGFuPiBzZWNvbmRzLi4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBOzs7QUFIQTs7O0FBS2UsU0FBUzs7SUFDdEIsTUFBTSxDQUFDLFdBQVcsYUFBYSxHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQzNDLE1BQU0sU0FBUyxDQUFBLEdBQUEscUlBQUEsQ0FBQSxZQUFTLEFBQUQ7SUFFdkIsQ0FBQSxHQUFBLDZKQUFBLENBQUEsWUFBUyxBQUFEO2tDQUFFO1lBQ1IsTUFBTSxRQUFRO2dEQUFZO29CQUN4Qjt3REFBYSxDQUFDOzRCQUNaLElBQUksU0FBUyxHQUFHO2dDQUNkLGNBQWM7Z0NBQ2QsT0FBTyxPQUFPLENBQUM7NEJBQ2pCOzRCQUNBLE9BQU8sT0FBTzt3QkFDaEI7O2dCQUNGOytDQUFHO1lBRUg7MENBQU8sSUFBTSxjQUFjOztRQUM3QjtpQ0FBRztRQUFDO0tBQU87SUFFWCxxQkFDRSw2TEFBQztRQUFJLFdBQVU7OzBCQUNiLDZMQUFDO2dCQUFHLFdBQVU7MEJBQTBDOzs7Ozs7MEJBQ3hELDZMQUFDO2dCQUFFLFdBQVU7MEJBQTZCOzs7Ozs7MEJBRzFDLDZMQUFDO2dCQUFFLFdBQVU7O29CQUFlO2tDQUNGLDZMQUFDO3dCQUFLLFdBQVU7a0NBQWU7Ozs7OztvQkFBaUI7Ozs7Ozs7Ozs7Ozs7QUFJaEY7R0E3QndCOztRQUVQLHFJQUFBLENBQUEsWUFBUzs7O0tBRkYiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDEwNiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VBdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldE1lUXVlcnkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2F1dGhBcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZUdldE1lUXVlcnkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IGRhdGE/LmRhdGEsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0Vycm9yLFxyXG4gICAgaXNMb2dnZWRJbjogISFkYXRhLFxyXG4gICAgcm9sZTogZGF0YT8uZGF0YT8ucm9sZSxcclxuICAgIGlkOiBkYXRhPy5kYXRhPy5pZCxcclxuICAgIG1vbmdvSWQ6IGRhdGE/LmRhdGE/Ll9pZCxcclxuICB9O1xyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBRU8sTUFBTSxVQUFVO1FBUWIsWUFDRixhQUNLOztJQVRYLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUEsR0FBQSxzSUFBQSxDQUFBLGdCQUFhLEFBQUQ7SUFFakQsT0FBTztRQUNMLElBQUksRUFBRSxpQkFBQSwyQkFBQSxLQUFNLElBQUk7UUFDaEI7UUFDQTtRQUNBLFlBQVksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLGlCQUFBLDRCQUFBLGFBQUEsS0FBTSxJQUFJLGNBQVYsaUNBQUEsV0FBWSxJQUFJO1FBQ3RCLEVBQUUsRUFBRSxpQkFBQSw0QkFBQSxjQUFBLEtBQU0sSUFBSSxjQUFWLGtDQUFBLFlBQVksRUFBRTtRQUNsQixPQUFPLEVBQUUsaUJBQUEsNEJBQUEsY0FBQSxLQUFNLElBQUksY0FBVixrQ0FBQSxZQUFZLEdBQUc7SUFDMUI7QUFDRjtHQVphOztRQUMwQixzSUFBQSxDQUFBLGdCQUFhIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNDAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9hdXRoL1VzZXJBdXRoR3VhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVuYXV0aG9yaXplZCBmcm9tICdAL2NvbXBvbmVudHMvYXV0aC9VbmF1dGhvcml6ZWQnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9ob29rcy91c2VBdXRoJztcclxuXHJcbmludGVyZmFjZSBVc2VyQXV0aEd1YXJkUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgcmVxdWlyZWRSb2xlPzogc3RyaW5nO1xyXG4gIGZhbGxiYWNrPzogUmVhY3ROb2RlO1xyXG59XHJcblxyXG4vLyBMb2FkaW5nIHNwaW5uZXIgY29tcG9uZW50XHJcbmZ1bmN0aW9uIEF1dGhMb2FkaW5nU3Bpbm5lcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTggdy04IGJvcmRlci1iLTIgYm9yZGVyLXByaW1hcnlcIj48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlZlcmlmeWluZyBhdXRoZW50aWNhdGlvbi4uLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQXV0aEd1YXJkKHsgXHJcbiAgY2hpbGRyZW4sIFxyXG4gIHJlcXVpcmVkUm9sZSxcclxuICBmYWxsYmFjayBcclxufTogVXNlckF1dGhHdWFyZFByb3BzKSB7XHJcbiAgY29uc3QgeyByb2xlLCBpc0xvZ2dlZEluLCBpc0xvYWRpbmcsIGlzRXJyb3IsIHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgLy8gU2hvdyBsb2FkaW5nIHN0YXRlIHdoaWxlIGNoZWNraW5nIGF1dGhlbnRpY2F0aW9uXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxBdXRoTG9hZGluZ1NwaW5uZXIgLz47XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBmb3IgYXV0aGVudGljYXRpb24gZXJyb3JzXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIGNvbnNvbGUud2FybignW1VzZXJBdXRoR3VhcmRdIEF1dGhlbnRpY2F0aW9uIGVycm9yIGRldGVjdGVkJyk7XHJcbiAgICByZXR1cm4gZmFsbGJhY2sgfHwgPFVuYXV0aG9yaXplZCAvPjtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluIGFuZCBoYXMgdmFsaWQgZGF0YVxyXG4gIGlmICghaXNMb2dnZWRJbiB8fCAhdXNlciB8fCAhcm9sZSkge1xyXG4gICAgY29uc29sZS53YXJuKCdbVXNlckF1dGhHdWFyZF0gQXV0aGVudGljYXRpb24gZmFpbGVkOicsIHtcclxuICAgICAgaXNMb2dnZWRJbixcclxuICAgICAgaGFzVXNlcjogISF1c2VyLFxyXG4gICAgICBoYXNSb2xlOiAhIXJvbGVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbGxiYWNrIHx8IDxVbmF1dGhvcml6ZWQgLz47XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBmb3Igc3BlY2lmaWMgcm9sZSByZXF1aXJlbWVudFxyXG4gIGlmIChyZXF1aXJlZFJvbGUgJiYgcm9sZSAhPT0gcmVxdWlyZWRSb2xlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYFtVc2VyQXV0aEd1YXJkXSBSb2xlIG1pc21hdGNoLiBSZXF1aXJlZDogJHtyZXF1aXJlZFJvbGV9LCBDdXJyZW50OiAke3JvbGV9YCk7XHJcbiAgICByZXR1cm4gZmFsbGJhY2sgfHwgPFVuYXV0aG9yaXplZCAvPjtcclxuICB9XHJcblxyXG4gIC8vIEFsbCBjaGVja3MgcGFzc2VkLCByZW5kZXIgY2hpbGRyZW5cclxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUNBOzs7QUFKQTs7O0FBWUEsNEJBQTRCO0FBQzVCLFNBQVM7SUFDUCxxQkFDRSw2TEFBQztRQUFJLFdBQVU7a0JBQ2IsY0FBQSw2TEFBQztZQUFJLFdBQVU7OzhCQUNiLDZMQUFDO29CQUFJLFdBQVU7Ozs7Ozs4QkFDZiw2TEFBQztvQkFBRSxXQUFVOzhCQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckQ7S0FUUztBQVdNLFNBQVMsY0FBYyxLQUlqQjtRQUppQixFQUNwQyxRQUFRLEVBQ1IsWUFBWSxFQUNaLFFBQVEsRUFDVyxHQUppQjs7SUFLcEMsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFBLEdBQUEsMEhBQUEsQ0FBQSxVQUFPLEFBQUQ7SUFFN0QsbURBQW1EO0lBQ25ELElBQUksV0FBVztRQUNiLHFCQUFPLDZMQUFDOzs7OztJQUNWO0lBRUEsa0NBQWtDO0lBQ2xDLElBQUksU0FBUztRQUNYLFFBQVEsSUFBSSxDQUFDO1FBQ2IsT0FBTywwQkFBWSw2TEFBQyw2SUFBQSxDQUFBLFVBQVk7Ozs7O0lBQ2xDO0lBRUEsZ0RBQWdEO0lBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDakMsUUFBUSxJQUFJLENBQUMsMENBQTBDO1lBQ3JEO1lBQ0EsU0FBUyxDQUFDLENBQUM7WUFDWCxTQUFTLENBQUMsQ0FBQztRQUNiO1FBQ0EsT0FBTywwQkFBWSw2TEFBQyw2SUFBQSxDQUFBLFVBQVk7Ozs7O0lBQ2xDO0lBRUEsc0NBQXNDO0lBQ3RDLElBQUksZ0JBQWdCLFNBQVMsY0FBYztRQUN6QyxRQUFRLElBQUksQ0FBQyxBQUFDLDRDQUFxRSxPQUExQixjQUFhLGVBQWtCLE9BQUw7UUFDbkYsT0FBTywwQkFBWSw2TEFBQyw2SUFBQSxDQUFBLFVBQVk7Ozs7O0lBQ2xDO0lBRUEscUNBQXFDO0lBQ3JDLHFCQUFPO2tCQUFHOztBQUNaO0dBcEN3Qjs7UUFLaUMsMEhBQUEsQ0FBQSxVQUFPOzs7TUFMeEMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI1MiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSBcImNsc3hcIlxyXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xyXG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7O0FBRU8sU0FBUztJQUFHLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHLFNBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBRyxPQUFILFFBQUEsU0FBQSxDQUFBLEtBQXVCOztJQUN4QyxPQUFPLENBQUEsR0FBQSw4SkFBQSxDQUFBLFVBQU8sQUFBRCxFQUFFLENBQUEsR0FBQSx3SUFBQSxDQUFBLE9BQUksQUFBRCxFQUFFO0FBQ3RCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyNzQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIlxyXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcclxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgc2hyaW5rLTAgWyZfc3ZnXTpzaHJpbmstMCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlXCIsXHJcbiAge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDoge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LXhzIGhvdmVyOmJnLXByaW1hcnkvOTBcIixcclxuICAgICAgICBkZXN0cnVjdGl2ZTpcclxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC13aGl0ZSBzaGFkb3cteHMgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIGRhcms6YmctZGVzdHJ1Y3RpdmUvNjBcIixcclxuICAgICAgICBvdXRsaW5lOlxyXG4gICAgICAgICAgXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OlxyXG4gICAgICAgICAgXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6Ymctc2Vjb25kYXJ5LzgwXCIsXHJcbiAgICAgICAgZ2hvc3Q6XHJcbiAgICAgICAgICBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhcms6aG92ZXI6YmctYWNjZW50LzUwXCIsXHJcbiAgICAgICAgbGluazogXCJ0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtNCBweS0yIGhhcy1bPnN2Z106cHgtM1wiLFxyXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxyXG4gICAgICAgIGxnOiBcImgtMTAgcm91bmRlZC1tZCBweC02IGhhcy1bPnN2Z106cHgtNFwiLFxyXG4gICAgICAgIGljb246IFwic2l6ZS05XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgIH0sXHJcbiAgfVxyXG4pXHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICB2YXJpYW50LFxyXG4gIHNpemUsXHJcbiAgYXNDaGlsZCA9IGZhbHNlLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICZcclxuICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiAmIHtcclxuICAgIGFzQ2hpbGQ/OiBib29sZWFuXHJcbiAgfSkge1xyXG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wXHJcbiAgICAgIGRhdGEtc2xvdD1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxNQUFNLGlCQUFpQixDQUFBLEdBQUEsbUtBQUEsQ0FBQSxNQUFHLEFBQUQsRUFDdkIsOGNBQ0E7SUFDRSxVQUFVO1FBQ1IsU0FBUztZQUNQLFNBQ0U7WUFDRixhQUNFO1lBQ0YsU0FDRTtZQUNGLFdBQ0U7WUFDRixPQUNFO1lBQ0YsTUFBTTtRQUNSO1FBQ0EsTUFBTTtZQUNKLFNBQVM7WUFDVCxJQUFJO1lBQ0osSUFBSTtZQUNKLE1BQU07UUFDUjtJQUNGO0lBQ0EsaUJBQWlCO1FBQ2YsU0FBUztRQUNULE1BQU07SUFDUjtBQUNGO0FBR0YsU0FBUyxPQUFPLEtBU2I7UUFUYSxFQUNkLFNBQVMsRUFDVCxPQUFPLEVBQ1AsSUFBSSxFQUNKLFVBQVUsS0FBSyxFQUNmLEdBQUcsT0FJRixHQVRhO0lBVWQsTUFBTSxPQUFPLFVBQVUsbUtBQUEsQ0FBQSxPQUFJLEdBQUc7SUFFOUIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxlQUFlO1lBQUU7WUFBUztZQUFNO1FBQVU7UUFDdkQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtLQW5CUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzM4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIERyb3Bkb3duTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIlxyXG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25SaWdodEljb24sIENpcmNsZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudVwiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UG9ydGFsKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWwgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1wb3J0YWxcIiB7Li4ucHJvcHN9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVUcmlnZ2VyKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlRyaWdnZXI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuVHJpZ2dlclxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXRyaWdnZXJcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHNpZGVPZmZzZXQgPSA0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY29udGVudFwiXHJcbiAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiB6LTUwIG1heC1oLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC1hdmFpbGFibGUtaGVpZ2h0KSBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1tZFwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVHcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWdyb3VwXCIgey4uLnByb3BzfSAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51SXRlbSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xyXG4gIGluc2V0PzogYm9vbGVhblxyXG4gIHZhcmlhbnQ/OiBcImRlZmF1bHRcIiB8IFwiZGVzdHJ1Y3RpdmVcIlxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbVxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWl0ZW1cIlxyXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cclxuICAgICAgZGF0YS12YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06dGV4dC1kZXN0cnVjdGl2ZSBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS8xMCBkYXJrOmRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOmJnLWRlc3RydWN0aXZlLzIwIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Kjpbc3ZnXTohdGV4dC1kZXN0cnVjdGl2ZSBbJl9zdmc6bm90KFtjbGFzcyo9J3RleHQtJ10pXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgcmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIGRhdGEtW2luc2V0XTpwbC04IFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2hlY2tlZCxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1jaGVja2JveC1pdGVtXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTIgcGwtOCB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UmFkaW9Hcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvR3JvdXBcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1ncm91cFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVSYWRpb0l0ZW0oe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1pdGVtXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTIgcGwtOCB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENpcmNsZUljb24gY2xhc3NOYW1lPVwic2l6ZS0yIGZpbGwtY3VycmVudFwiIC8+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVMYWJlbCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWw+ICYge1xyXG4gIGluc2V0PzogYm9vbGVhblxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1sYWJlbFwiXHJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LW1lZGl1bSBkYXRhLVtpbnNldF06cGwtOFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U2VwYXJhdG9yKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc2VwYXJhdG9yXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcImJnLWJvcmRlciAtbXgtMSBteS0xIGgtcHhcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVNob3J0Y3V0KHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJzcGFuXCI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc2hvcnRjdXRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3RcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVN1Yih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWI+KSB7XHJcbiAgcmV0dXJuIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViXCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWJUcmlnZ2VyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgaW5zZXQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcclxuICBpbnNldD86IGJvb2xlYW5cclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zdWItdHJpZ2dlclwiXHJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmQgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2luc2V0XTpwbC04XCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC1hdXRvIHNpemUtNFwiIC8+XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U3ViQ29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50XHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLWNvbnRlbnRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1sZ1wiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxyXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbiAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICBEcm9wZG93bk1lbnVHcm91cCxcclxuICBEcm9wZG93bk1lbnVMYWJlbCxcclxuICBEcm9wZG93bk1lbnVJdGVtLFxyXG4gIERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSxcclxuICBEcm9wZG93bk1lbnVSYWRpb0dyb3VwLFxyXG4gIERyb3Bkb3duTWVudVJhZGlvSXRlbSxcclxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXHJcbiAgRHJvcGRvd25NZW51U2hvcnRjdXQsXHJcbiAgRHJvcGRvd25NZW51U3ViLFxyXG4gIERyb3Bkb3duTWVudVN1YlRyaWdnZXIsXHJcbiAgRHJvcGRvd25NZW51U3ViQ29udGVudCxcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQU5BOzs7OztBQVFBLFNBQVMsYUFBYSxLQUVvQztRQUZwQyxFQUNwQixHQUFHLE9BQ3FELEdBRnBDO0lBR3BCLHFCQUFPLDZMQUFDLCtLQUFBLENBQUEsT0FBMEI7UUFBQyxhQUFVO1FBQWlCLEdBQUcsS0FBSzs7Ozs7O0FBQ3hFO0tBSlM7QUFNVCxTQUFTLG1CQUFtQixLQUVnQztRQUZoQyxFQUMxQixHQUFHLE9BQ3VELEdBRmhDO0lBRzFCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsU0FBNEI7UUFBQyxhQUFVO1FBQXdCLEdBQUcsS0FBSzs7Ozs7O0FBRTVFO01BTlM7QUFRVCxTQUFTLG9CQUFvQixLQUVnQztRQUZoQyxFQUMzQixHQUFHLE9BQ3dELEdBRmhDO0lBRzNCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsVUFBNkI7UUFDNUIsYUFBVTtRQUNULEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFUUztBQVdULFNBQVMsb0JBQW9CLEtBSWdDO1FBSmhDLEVBQzNCLFNBQVMsRUFDVCxhQUFhLENBQUMsRUFDZCxHQUFHLE9BQ3dELEdBSmhDO0lBSzNCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsU0FBNEI7a0JBQzNCLGNBQUEsNkxBQUMsK0tBQUEsQ0FBQSxVQUE2QjtZQUM1QixhQUFVO1lBQ1YsWUFBWTtZQUNaLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsMGpCQUNBO1lBRUQsR0FBRyxLQUFLOzs7Ozs7Ozs7OztBQUlqQjtNQWxCUztBQW9CVCxTQUFTLGtCQUFrQixLQUVnQztRQUZoQyxFQUN6QixHQUFHLE9BQ3NELEdBRmhDO0lBR3pCLHFCQUNFLDZM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M0U7T0FKUztBQU1ULFNBQVMsdUJBQXVCLEtBTy9CO1FBUCtCLEVBQzlCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsT0FHSixHQVArQjtJQVE5QixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLGFBQWdDO1FBQy9CLGFBQVU7UUFDVixjQUFZO1FBQ1osV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixrT0FDQTtRQUVELEdBQUcsS0FBSzs7WUFFUjswQkFDRCw2TEFBQyw2TkFBQSxDQUFBLG1CQUFnQjtnQkFBQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHbEM7T0F0QlM7QUF3QlQsU0FBUyx1QkFBdUIsS0FHZ0M7UUFIaEMsRUFDOUIsU0FBUyxFQUNULEdBQUcsT0FDMkQsR0FIaEM7SUFJOUIscUJBQ0UsNkxBQUMsK0tBQUEsQ0FBQSxhQUFnQztRQUMvQixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixpZkFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7T0FkUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNjQ5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL2hvb2tzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHR5cGUgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxyXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQUlPLE1BQU0saUJBQWlCOztJQUFNLE9BQUEsQ0FBQSxHQUFBLDRKQUFBLENBQUEsY0FBVyxBQUFEO0FBQWU7R0FBaEQ7O1FBQXVCLDRKQUFBLENBQUEsY0FBVzs7O0FBQ3hDLE1BQU0saUJBQWtELDRKQUFBLENBQUEsY0FBVyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNjc1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2xpYi9pMThuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNlcnZlci1zaWRlIGltcG9ydHMgYXJlIGhhbmRsZWQgY29uZGl0aW9uYWxseSB0byBhdm9pZCBjbGllbnQtc2lkZSBpc3N1ZXNcclxuXHJcbi8vIFN1cHBvcnRlZCBsb2NhbGVzIGNvbmZpZ3VyYXRpb25cclxuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ2FyJ10gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIExvY2FsZSA9IHR5cGVvZiBsb2NhbGVzW251bWJlcl07XHJcblxyXG4vLyBEZWZhdWx0IGxvY2FsZVxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTEU6IExvY2FsZSA9ICdlbic7XHJcblxyXG4vLyBDb29raWUgY29uZmlndXJhdGlvblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfQ09PS0lFID0ge1xyXG4gICAgbmFtZTogJ2xhbmcnLFxyXG4gICAgbWF4QWdlOiAzNjUgKiAyNCAqIDYwICogNjAsIC8vIDEgeWVhciBpbiBzZWNvbmRzXHJcbiAgICBodHRwT25seTogZmFsc2UsIC8vIEFjY2Vzc2libGUgdG8gY2xpZW50LXNpZGUgSmF2YVNjcmlwdFxyXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgc2FtZVNpdGU6ICdsYXgnIGFzIGNvbnN0LFxyXG4gICAgcGF0aDogJy8nLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gTG9jYWxlIGluZm9ybWF0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2NhbGVJbmZvID0ge1xyXG4gICAgZW46IHtcclxuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnbHRyJyBhcyBjb25zdCxcclxuICAgICAgICBmbGFnOiAn8J+HuvCfh7gnLFxyXG4gICAgfSxcclxuICAgIGFyOiB7XHJcbiAgICAgICAgbmFtZTogJ9in2YTYudix2KjZitipJyxcclxuICAgICAgICBkaXJlY3Rpb246ICdydGwnIGFzIGNvbnN0LFxyXG4gICAgICAgIGZsYWc6ICfwn4e48J+HpicsXHJcbiAgICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gVmFsaWRhdGUgaWYgYSBsb2NhbGUgaXMgc3VwcG9ydGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTG9jYWxlKGxvY2FsZTogc3RyaW5nKTogbG9jYWxlIGlzIExvY2FsZSB7XHJcbiAgICByZXR1cm4gbG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUgYXMgTG9jYWxlKTtcclxufVxyXG5cclxuLy8gR2V0IGRlZmF1bHQgbG9jYWxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TG9jYWxlKCk6IExvY2FsZSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9MT0NBTEU7XHJcbn1cclxuXHJcbi8vIEdldCBzdXBwb3J0ZWQgbG9jYWxlcyBsaXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRMb2NhbGVzKCk6IHJlYWRvbmx5IExvY2FsZVtdIHtcclxuICAgIHJldHVybiBsb2NhbGVzO1xyXG59XHJcblxyXG4vLyBTZXJ2ZXItc2lkZSBjb29raWUgcmVhZGluZyAoTmV4dC5qcylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlckxvY2FsZSgpOiBQcm9taXNlPExvY2FsZT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGNvb2tpZXMgfSA9IGF3YWl0IGltcG9ydCgnbmV4dC9oZWFkZXJzJyk7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ0Nvb2tpZSA9IGNvb2tpZVN0b3JlLmdldChMQU5HVUFHRV9DT09LSUUubmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBsYW5nQ29va2llPy52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvb2tpZVZhbHVlICYmIGlzVmFsaWRMb2NhbGUoY29va2llVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWVWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYWQgbGFuZ3VhZ2UgY29va2llIG9uIHNlcnZlcjonLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBDbGllbnQtc2lkZSBjb29raWUgcmVhZGluZ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRnJvbUNvb2tpZSgpOiBMb2NhbGUgfCBudWxsIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICBjb25zdCBsYW5nQ29va2llID0gY29va2llcy5maW5kKGNvb2tpZSA9PlxyXG4gICAgICAgICAgICBjb29raWUudHJpbSgpLnN0YXJ0c1dpdGgoYCR7TEFOR1VBR0VfQ09PS0lFLm5hbWV9PWApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGxhbmdDb29raWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBsYW5nQ29va2llLnNwbGl0KCc9JylbMV0/LnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKGNvb2tpZVZhbHVlICYmIGlzVmFsaWRMb2NhbGUoY29va2llVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYWQgbGFuZ3VhZ2UgY29va2llIG9uIGNsaWVudDonLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8vIENsaWVudC1zaWRlIGNvb2tpZSB3cml0aW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGVDb29raWUobG9jYWxlOiBMb2NhbGUpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBsb2NhbGUgYmVmb3JlIHNldHRpbmdcclxuICAgICAgICBpZiAoIWlzVmFsaWRMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgbG9jYWxlOiAke2xvY2FsZX0uIFVzaW5nIGRlZmF1bHQgbG9jYWxlLmApO1xyXG4gICAgICAgICAgICBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArIChMQU5HVUFHRV9DT09LSUUubWF4QWdlICogMTAwMCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBbXHJcbiAgICAgICAgICAgIGAke0xBTkdVQUdFX0NPT0tJRS5uYW1lfT0ke2xvY2FsZX1gLFxyXG4gICAgICAgICAgICBgZXhwaXJlcz0ke2V4cGlyZXMudG9VVENTdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICBgcGF0aD0ke0xBTkdVQUdFX0NPT0tJRS5wYXRofWAsXHJcbiAgICAgICAgICAgIGBTYW1lU2l0ZT0ke0xBTkdVQUdFX0NPT0tJRS5zYW1lU2l0ZX1gLFxyXG4gICAgICAgICAgICBMQU5HVUFHRV9DT09LSUUuc2VjdXJlID8gJ1NlY3VyZScgOiAnJyxcclxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCc7ICcpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZXQgbGFuZ3VhZ2UgY29va2llOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0IGN1cnJlbnQgbG9jYWxlIChjbGllbnQtc2lkZSlcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhbGUoKTogTG9jYWxlIHtcclxuICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldExvY2FsZUZyb21Db29raWUoKTtcclxuICAgIHJldHVybiBjb29raWVMb2NhbGUgfHwgREVGQVVMVF9MT0NBTEU7XHJcbn1cclxuXHJcbi8vIFNldCBsb2NhbGUgKGNsaWVudC1zaWRlKVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzVmFsaWRMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBsb2NhbGU6ICR7bG9jYWxlfS4gVXNpbmcgZGVmYXVsdCBsb2NhbGUuYCk7XHJcbiAgICAgICAgbG9jYWxlID0gREVGQVVMVF9MT0NBTEU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYWxlQ29va2llKGxvY2FsZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIEhUTUwgYXR0cmlidXRlcyBpbW1lZGlhdGVseVxyXG4gICAgdXBkYXRlSFRNTEF0dHJpYnV0ZXMobG9jYWxlKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGEgY3VzdG9tIGV2ZW50IGZvciBjb21wb25lbnRzIHRvIGxpc3RlbiB0b1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsb2NhbGVDaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDogeyBsb2NhbGUgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXBkYXRlIEhUTUwgYXR0cmlidXRlcyBiYXNlZCBvbiBsb2NhbGVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhUTUxBdHRyaWJ1dGVzKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlRGF0YSA9IGxvY2FsZUluZm9bbG9jYWxlXTtcclxuICAgICAgICBpZiAobG9jYWxlRGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxvY2FsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9IGxvY2FsZURhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBHZXQgbG9jYWxlIGRpcmVjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGlyZWN0aW9uKGxvY2FsZTogTG9jYWxlKTogJ2x0cicgfCAncnRsJyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5kaXJlY3Rpb24gfHwgJ2x0cic7XHJcbn1cclxuXHJcbi8vIEdldCBsb2NhbGUgZGlzcGxheSBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEaXNwbGF5TmFtZShsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5uYW1lIHx8IGxvY2FsZTtcclxufVxyXG5cclxuLy8gR2V0IGxvY2FsZSBmbGFnXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVGbGFnKGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbGVJbmZvW2xvY2FsZV0/LmZsYWcgfHwgJ/CfjJAnO1xyXG59XHJcblxyXG4vLyBUeXBlU2NyaXB0IHZhbGlkYXRpb24gZm9yIGkxOG4gc2V0dXAgKGxlZ2FjeSBmdW5jdGlvbiBrZXB0IGZvciBjb21wYXRpYmlsaXR5KVxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJMThuKCk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlcy5sZW5ndGggPiAwICYmIERFRkFVTFRfTE9DQUxFICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUU1RSxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRCO0FBWEwsTUFBTSxVQUFVO0lBQUM7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RCxRQUFRO2dCQUFFO1lBQU87UUFDckI7SUFDSjtBQUNKO0FBR08sU0FBUyxxQkFBcUIsTUFBYztJQUMvQyxJQUFJLE9BQU8sYUFBYSxhQUFhO0lBRXJDLElBQUk7UUFDQSxNQUFNLGFBQWEsVUFBVSxDQUFDLE9BQU87UUFDckMsSUFBSSxZQUFZO1lBQ1osU0FBUyxlQUFlLENBQUMsSUFBSSxHQUFHO1lBQ2hDLFNBQVMsZUFBZSxDQUFDLEdBQUcsR0FBRyxXQUFXLFNBQVM7UUFDdkQ7SUFDSixFQUFFLE9BQU8sT0FBTztRQUNaLFFBQVEsS0FBSyxDQUFDLHFDQUFxQztJQUN2RDtBQUNKO0FBR08sU0FBUyxtQkFBbUIsTUFBYztRQUN0QztJQUFQLE9BQU8sRUFBQSxxQkFBQSxVQUFVLENBQUMsT0FBTyxjQUFsQix5Q0FBQSxtQkFBb0IsU0FBUyxLQUFJO0FBQzVDO0FBR08sU0FBUyxxQkFBcUIsTUFBYztRQUN4QztJQUFQLE9BQU8sRUFBQSxxQkFBQSxVQUFVLENBQUMsT0FBTyxjQUFsQix5Q0FBQSxtQkFBb0IsSUFBSSxLQUFJO0FBQ3ZDO0FBR08sU0FBUyxjQUFjLE1BQWM7UUFDakM7SUFBUCxPQUFPLEVBQUEscUJBQUEsVUFBVSxDQUFDLE9BQU8sY0FBbEIseUNBQUEsbUJBQW9CLElBQUksS0FBSTtBQUN2QztBQUdPLFNBQVM7SUFDWixJQUFJO1FBQ0EsT0FBTyxRQUFRLE1BQU0sR0FBRyxLQUFLLG1CQUFtQjtJQUNwRCxFQUFFLFVBQU07UUFDSixPQUFPO0lBQ1g7QUFDSiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODQ1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2hvb2tzL3VzZUxhbmd1YWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVRyYW5zaXRpb24sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBnZXRDdXJyZW50TG9jYWxlLFxyXG4gIHNldExvY2FsZSxcclxuICBsb2NhbGVJbmZvLFxyXG4gIGdldFN1cHBvcnRlZExvY2FsZXMsXHJcbiAgaXNWYWxpZExvY2FsZSxcclxuICB0eXBlIExvY2FsZVxyXG59IGZyb20gJ0AvbGliL2kxOG4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50TG9jYWxlLCBzZXRDdXJyZW50TG9jYWxlXSA9IHVzZVN0YXRlPExvY2FsZT4oKCkgPT4gZ2V0Q3VycmVudExvY2FsZSgpKTtcclxuICBjb25zdCBbaXNQZW5kaW5nLCBzdGFydFRyYW5zaXRpb25dID0gdXNlVHJhbnNpdGlvbigpO1xyXG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLy8gQXZhaWxhYmxlIGxvY2FsZXMgd2l0aCBlbmhhbmNlZCBpbmZvcm1hdGlvblxyXG4gIGNvbnN0IGF2YWlsYWJsZUxvY2FsZXMgPSBnZXRTdXBwb3J0ZWRMb2NhbGVzKCkubWFwKGNvZGUgPT4gKHtcclxuICAgIGNvZGUsXHJcbiAgICBuYW1lOiBsb2NhbGVJbmZvW2NvZGVdLm5hbWUsXHJcbiAgICBkaXI6IGxvY2FsZUluZm9bY29kZV0uZGlyZWN0aW9uLFxyXG4gICAgZmxhZzogbG9jYWxlSW5mb1tjb2RlXS5mbGFnXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50TG9jYWxlSW5mbyA9IGF2YWlsYWJsZUxvY2FsZXMuZmluZCgobCkgPT4gbC5jb2RlID09PSBjdXJyZW50TG9jYWxlKTtcclxuXHJcbiAgLy8gTGlzdGVuIGZvciBsb2NhbGUgY2hhbmdlcyBmcm9tIG90aGVyIGNvbXBvbmVudHMgb3IgdGFic1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVMb2NhbGVDaGFuZ2UgPSAoZXZlbnQ6IEN1c3RvbUV2ZW50PHsgbG9jYWxlOiBMb2NhbGUgfT4pID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvY2FsZShldmVudC5kZXRhaWwubG9jYWxlKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2FsZUNoYW5nZScsIGhhbmRsZUxvY2FsZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxlQ2hhbmdlJywgaGFuZGxlTG9jYWxlQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIPCflKUgT1BUSU1JWkVEOiBSZXBsYWNlIHBvbGxpbmcgd2l0aCBldmVudC1kcml2ZW4gY3Jvc3MtdGFiIHN5bmNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHN0b3JhZ2UgZXZlbnRzIGZvciBjcm9zcy10YWIgc3luY2hyb25pemF0aW9uXHJcbiAgICBjb25zdCBoYW5kbGVTdG9yYWdlQ2hhbmdlID0gKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2xvY2FsZS1zeW5jJyAmJiBldmVudC5uZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xvY2FsZSA9IGV2ZW50Lm5ld1ZhbHVlO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkTG9jYWxlKG5ld0xvY2FsZSkgJiYgbmV3TG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb2N1cyBldmVudHMgdG8gY2hlY2sgZm9yIGV4dGVybmFsIGNvb2tpZSBjaGFuZ2VzXHJcbiAgICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY29va2llTG9jYWxlID0gZ2V0Q3VycmVudExvY2FsZSgpO1xyXG4gICAgICBpZiAoY29va2llTG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudExvY2FsZShjb29raWVMb2NhbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSB2aXNpYmlsaXR5IGNoYW5nZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICBjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldEN1cnJlbnRMb2NhbGUoKTtcclxuICAgICAgICBpZiAoY29va2llTG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TG9jYWxlKGNvb2tpZUxvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICAgIGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbY3VycmVudExvY2FsZV0pO1xyXG5cclxuICBjb25zdCBzd2l0Y2hMYW5ndWFnZSA9IChuZXdMb2NhbGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFpc1ZhbGlkTG9jYWxlKG5ld0xvY2FsZSkgfHwgbmV3TG9jYWxlID09PSBjdXJyZW50TG9jYWxlKSByZXR1cm47XHJcblxyXG4gICAgc3RhcnRUcmFuc2l0aW9uKCgpID0+IHtcclxuICAgICAgLy8gVXNlIHRoZSBjZW50cmFsaXplZCBzZXRMb2NhbGUgZnVuY3Rpb24gd2hpY2ggaGFuZGxlczpcclxuICAgICAgLy8gLSBDb29raWUgc2V0dGluZ1xyXG4gICAgICAvLyAtIEhUTUwgYXR0cmlidXRlIHVwZGF0ZXNcclxuICAgICAgLy8gLSBFdmVudCBkaXNwYXRjaGluZyBmb3IgY29tcG9uZW50IHVwZGF0ZXNcclxuICAgICAgc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcblxyXG4gICAgICAvLyDwn5SlIE5FVzogVHJpZ2dlciBjcm9zcy10YWIgc3luYyB2aWEgbG9jYWxTdG9yYWdlXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0XHJcbiAgICAgICAgaWYgKHRpbWVvdXRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlLXN5bmMnLCBuZXdMb2NhbGUpO1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc3luYyBpdGVtIGFmdGVyIGEgc2hvcnQgZGVsYXkgdG8gYXZvaWQgbWVtb3J5IGJ1aWxkdXBcclxuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2NhbGUtc3luYycpO1xyXG4gICAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIGltbWVkaWF0ZWx5IGZvciB2aXN1YWwgZmVlZGJhY2tcclxuICAgICAgc2V0Q3VycmVudExvY2FsZShuZXdMb2NhbGUpO1xyXG5cclxuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIgb2YgdGhlIGVudGlyZSBhcHAgYnkgcmVsb2FkaW5nXHJcbiAgICAgIC8vIFRoaXMgZW5zdXJlcyBhbGwgc2VydmVyIGNvbXBvbmVudHMgZ2V0IHRoZSBuZXcgbG9jYWxlXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSwgMTAwKTsgLy8gU21hbGwgZGVsYXkgZm9yIHZpc3VhbCBmZWVkYmFja1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogY3VycmVudExvY2FsZSxcclxuICAgIHN3aXRjaExhbmd1YWdlLFxyXG4gICAgYXZhaWxhYmxlTG9jYWxlcyxcclxuICAgIGN1cnJlbnRMb2NhbGVJbmZvLFxyXG4gICAgaXNQZW5kaW5nLFxyXG4gICAgaXNSVEw6IGN1cnJlbnRMb2NhbGUgPT09ICdhcidcclxuICB9O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0FBQ0E7O0FBSEE7OztBQVlPLFNBQVM7O0lBQ2QsTUFBTSxDQUFDLGVBQWUsaUJBQWlCLEdBQUcsQ0FBQSxHQUFB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TyxFQUFFO29CQUN0QixhQUFhLFdBQVcsT0FBTztnQkFDakM7Z0JBRUEsYUFBYSxPQUFPLENBQUMsZUFBZTtnQkFDcEMsbUVBQW1FO2dCQUNuRSxXQUFXLE9BQU8sR0FBRyxXQUFXO29CQUM5QixhQUFhLFVBQVUsQ0FBQztvQkFDeEIsV0FBVyxPQUFPLEdBQUc7Z0JBQ3ZCLEdBQUc7WUFDTDtZQUVBLHFEQUFxRDtZQUNyRCxpQkFBaUI7WUFFakIsbURBQW1EO1lBQ25ELHdEQUF3RDtZQUN4RCxXQUFXO2dCQUNULE9BQU8sUUFBUSxDQUFDLE1BQU07WUFDeEIsR0FBRyxNQUFNLGtDQUFrQztRQUM3QztJQUNGO0lBRUEsT0FBTztRQUNMLFFBQVE7UUFDUjtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU8sa0JBQWtCO0lBQzNCO0FBQ0Y7R0FwSGdCOztRQUV1Qiw2SkFBQSxDQUFBLGdCQUFhIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5ODksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9hdXRoL0xvZ291dEJ0bi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdzb25uZXInO1xyXG5pbXBvcnQgeyBhdXRoQXBpLCB1c2VMb2dvdXRNdXRhdGlvbiB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvYXV0aEFwaSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IExvZ091dCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zdG9yZS9ob29rcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9ob29rcy91c2VMYW5ndWFnZSc7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nb3V0QnV0dG9uKCkge1xyXG4gIGNvbnN0IFtsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygnYXV0aC5sb2dvdXQnKTtcclxuICBjb25zdCB7IGlzUlRMIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBsb2dvdXQoKS51bndyYXAoKTtcclxuICAgICAgZGlzcGF0Y2goYXV0aEFwaS51dGlsLnJlc2V0QXBpU3RhdGUoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTG9nb3V0IGZhaWxlZDonLCBlcnIpO1xyXG4gICAgICB0b2FzdC5lcnJvcih0KCdlcnJvcicpKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTsgICAvLyBSZWRpcmVjdCB0byBsb2dpblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKHQoJ3N1Y2Nlc3MnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJ3LWZ1bGxcIixcclxuICAgICAgaXNSVEwgPyBcImZsZXggZmxleC1yb3ctcmV2ZXJzZSBqdXN0aWZ5LWVuZFwiIDogXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnRcIlxyXG4gICAgKX0+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJ3LWZ1bGwgaC1hdXRvIHAtMiBob3ZlcjpiZy1kZXN0cnVjdGl2ZS8xMCB0ZXh0LWRlc3RydWN0aXZlXCIsXHJcbiAgICAgICAgICBpc1JUTCA/IFwianVzdGlmeS1lbmRcIiA6IFwianVzdGlmeS1zdGFydFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdy1mdWxsXCIsXHJcbiAgICAgICAgICBpc1JUTCA/IFwiZmxleC1yb3ctcmV2ZXJzZSBqdXN0aWZ5LWVuZFwiIDogXCJmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0XCJcclxuICAgICAgICApfT5cclxuICAgICAgICAgIDxMb2dPdXQgY2xhc3NOYW1lPXtjbihcImgtNCB3LTQgc2hyaW5rLTBcIiwgaXNSVEwgPyBcIm1sLTJcIiA6IFwibXItMlwiKX0gLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeVwiPnt0KCdidXR0b24nKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVkE7Ozs7Ozs7Ozs7QUFZZSxTQUFTOztJQUN0QixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUEsR0FBQSxzSUFBQSxDQUFBLG9CQUFpQixBQUFEO0lBQ2pDLE1BQU0sV0FBVyxDQUFBLEdBQUEsd0hBQUEsQ0FBQSxpQkFBYyxBQUFEO0lBQzlCLE1BQU0sU0FBUyxDQUFBLEdBQUEscUlBQUEsQ0FBQSxZQUFTLEFBQUQ7SUFDdkIsTUFBTSxJQUFJLENBQUEsR0FBQSx5TUFBQSxDQUFBLGtCQUFlLEFBQUQsRUFBRTtJQUMxQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQSxHQUFBLDhIQUFBLENBQUEsY0FBVyxBQUFEO0lBRTVCLE1BQU0sZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTSxTQUFTLE1BQU07WUFDckIsU0FBUyxzSUFBQSxDQUFBLFVBQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTtRQUNyQyxFQUFFLE9BQU8sS0FBSztZQUNaLFFBQVEsS0FBSyxDQUFDLGtCQUFrQjtZQUNoQywySUFBQSxDQUFBLFFBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoQixTQUFVO1lBQ1IsT0FBTyxJQUFJLENBQUMsV0FBYSxvQkFBb0I7WUFDN0MsMklBQUEsQ0FBQSxRQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDZMQUFDO1FBQUksV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDZixVQUNBLFFBQVEsc0NBQXNDO2tCQUU5QyxjQUFBLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtZQUNMLFNBQVM7WUFDVCxTQUFRO1lBQ1IsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViw4REFDQSxRQUFRLGdCQUFnQjtzQkFHMUIsY0FBQSw2TEFBQztnQkFBSSxXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLGtDQUNBLFFBQVEsaUNBQWlDOztrQ0FFekMsNkxBQUMsNk1BQUEsQ0FBQSxTQUFNO3dCQUFDLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsb0JBQW9CLFFBQVEsU0FBUzs7Ozs7O2tDQUMzRCw2TEFBQzt3QkFBSyxXQUFVO2tDQUFnQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0dBM0N3Qjs7UUFDTCxzSUFBQSxDQUFBLG9CQUFpQjtRQUNqQix3SEFBQSxDQUFBLGlCQUFjO1FBQ2hCLHFJQUFBLENBQUEsWUFBUztRQUNkLHlNQUFBLENBQUEsa0JBQWU7UUFDUCw4SEFBQSxDQUFBLGNBQVc7OztLQUxQIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMDk1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvdGhlbWUtdG9nZ2xlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb29uLCBTdW4sIE1vbml0b3IgfSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJ1xyXG5pbXBvcnQge1xyXG4gICAgRHJvcGRvd25NZW51LFxyXG4gICAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lVG9nZ2xlKCkge1xyXG4gICAgY29uc3QgeyBzZXRUaGVtZSwgdGhlbWUgfSA9IHVzZVRoZW1lKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaG92ZXI6YmctYWNjZW50IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdW4gY2xhc3NOYW1lPVwiaC1bMS4ycmVtXSB3LVsxLjJyZW1dIHJvdGF0ZS0wIHNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbCBkYXJrOi1yb3RhdGUtOTAgZGFyazpzY2FsZS0wIHRoZW1lLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb29uIGNsYXNzTmFtZT1cImFic29sdXRlIGgtWzEuMnJlbV0gdy1bMS4ycmVtXSByb3RhdGUtOTAgc2NhbGUtMCB0cmFuc2l0aW9uLWFsbCBkYXJrOnJvdGF0ZS0wIGRhcms6c2NhbGUtMTAwIHRoZW1lLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgdGhlbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudCBhbGlnbj1cImVuZFwiIGNsYXNzTmFtZT1cImJnLWNhcmQvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBzaGFkb3cteGwgcm91bmRlZC14bCBtaW4tdy1bMTQwcHhdIGRyb3Bkb3duLWNvbnRlbnQtZW5oYW5jZWRcIj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ2xpZ2h0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHt0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeScgOiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdW4gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5MaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ2RhcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke3RoZW1lID09PSAnZGFyaycgPyAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnknIDogJ2hvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TW9vbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkRhcms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKCdzeXN0ZW0nKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke3RoZW1lID09PSAnc3lzdGVtJyA/ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeScgOiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb25pdG9yIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+U3lzdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQVBBOzs7OztBQWNPLFNBQVM7O0lBQ1osTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFBLEdBQUEsbUpBQUEsQ0FBQSxXQUFRLEFBQUQ7SUFFbkMscUJBQ0ksNkxBQUMsK0lBQUEsQ0FBQSxlQUFZOzswQkFDVCw2TEFBQywrSUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFPOzBCQUN4QixjQUFBLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtvQkFBQyxTQUFRO29CQUFRLE1BQUs7b0JBQU8sV0FBVTs7c0NBQzFDLDZMQUFDLG1NQUFBLENBQUEsTUFBRzs0QkFBQyxXQUFVOzs7Ozs7c0NBQ2YsNkxBQUMscU1BQUEsQ0FBQSxPQUFJOzRCQUFDLFdBQVU7Ozs7OztzQ0FDaEIsNkxBQUM7NEJBQUssV0FBVTtzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xDLDZMQUFDLCtJQUFBLENBQUEsc0JBQW1CO2dCQUFDLE9BQU07Z0JBQU0sV0FBVTs7a0NBQ3ZDLDZMQUFDLCtJQUFBLENBQUEsbUJBQWdCO3dCQUNiLFNBQVMsSUFBTSxTQUFTO3dCQUN4QixXQUFXLEFBQUMsNkZBQ1AsT0FEbUcsVUFBVSxVQUFVLCtCQUErQjs7MENBRzNKLDZMQUFDLG1NQUFBLENBQUEsTUFBRztnQ0FBQyxXQUFVOzs7Ozs7MENBQ2YsNkxBQUM7Z0NBQUssV0FBVTswQ0FBYzs7Ozs7Ozs7Ozs7O2tDQUVsQyw2TEFBQywrSUFBQSxDQUFBLG1CQUFnQjt3QkFDYixTQUFTLElBQU0sU0FBUzt3QkFDeEIsV0FBVyxBQUFDLDZGQUNQLE9BRG1HLFVBQVUsU0FBUywrQkFBK0I7OzBDQUcxSiw2TEFBQyxxTUFBQSxDQUFBLE9BQUk7Z0NBQUMsV0FBVTs7Ozs7OzBDQUNoQiw2TEFBQztnQ0FBSyxXQUFVOzBDQUFjOzs7Ozs7Ozs7Ozs7a0NBRWxDLDZMQUFDLCtJQUFBLENBQUEsbUJBQWdCO3dCQUNiLFNBQVMsSUFBTSxTQUFTO3dCQUN4QixXQUFXLEFBQUMsNkZBQ1AsT0FEbUcsVUFBVSxXQUFXLCtCQUErQjs7MENBRzVKLDZMQUFDLDJNQUFBLENBQUEsVUFBTztnQ0FBQyxXQUFVOzs7Ozs7MENBQ25CLDZMQUFDO2dDQUFLLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQXhDZ0I7O1FBQ2dCLG1KQUFBLENBQUEsV0FBUTs7O0tBRHhCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMjY2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbWFkZS9sYW5ndWFnZS1zd2l0Y2hlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHtcclxuICAgIERyb3Bkb3duTWVudSxcclxuICAgIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgICBEcm9wZG93bk1lbnVJdGVtLFxyXG4gICAgRHJvcGRvd25NZW51VHJpZ2dlcixcclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudSc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9ob29rcy91c2VMYW5ndWFnZSc7XHJcbmltcG9ydCB7IGdldExvY2FsZUZsYWcgfSBmcm9tICdAL2xpYi9pMThuJztcclxuXHJcbi8vIEZsYWcgaWNvbnMgYXMgY29tcG9uZW50cyB3aXRoIGVuaGFuY2VkIHN0eWxpbmdcclxuY29uc3QgRmxhZ0ljb24gPSAoeyBjb3VudHJ5LCBjbGFzc05hbWUgPSBcInctNCBoLTRcIiB9OiB7IGNvdW50cnk6IHN0cmluZzsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGZsYWcgPSBnZXRMb2NhbGVGbGFnKGNvdW50cnkgYXMgJ2VuJyB8ICdhcicpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtbGcgbGVhZGluZy1ub25lIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMTBgfT5cclxuICAgICAgICAgICAge2ZsYWd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZVN3aXRjaGVyKCkge1xyXG4gICAgY29uc3QgeyBzd2l0Y2hMYW5ndWFnZSwgYXZhaWxhYmxlTG9jYWxlcywgY3VycmVudExvY2FsZUluZm8sIGlzUGVuZGluZyB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYW5ndWFnZVN3aXRjaCA9IChsb2NhbGVDb2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50IHN3aXRjaGluZyB0byB0aGUgc2FtZSBsYW5ndWFnZVxyXG4gICAgICAgIGlmIChsb2NhbGVDb2RlID09PSBjdXJyZW50TG9jYWxlSW5mbz8uY29kZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRoZSBzd2l0Y2ggZnVuY3Rpb24gd2hpY2ggbm93IGhhbmRsZXMgY29va2llLWJhc2VkIHN3aXRjaGluZ1xyXG4gICAgICAgIHN3aXRjaExhbmd1YWdlKGxvY2FsZUNvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUGVuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTkgcHgtMyBiZy1iYWNrZ3JvdW5kIGhvdmVyOmJnLWFjY2VudCBib3JkZXItYm9yZGVyIGhvdmVyOmJvcmRlci1wcmltYXJ5LzUwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kICR7aXNQZW5kaW5nID8gJ29wYWNpdHktNzAgY3Vyc29yLW5vdC1hbGxvd2VkJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BDdXJyZW50IGxhbmd1YWdlOiAke2N1cnJlbnRMb2NhbGVJbmZvPy5uYW1lfS4gQ2xpY2sgdG8gY2hhbmdlIGxhbmd1YWdlLmB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsYWdJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk9e2N1cnJlbnRMb2NhbGVJbmZvPy5jb2RlIHx8ICdlbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNCBoLTQgbXItMiBmbGFnLWljb24gJHtpc1BlbmRpbmcgPyAnYW5pbWF0ZS1wdWxzZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMb2NhbGVJbmZvPy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNQZW5kaW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiB3LTMgaC0zIGJvcmRlciBib3JkZXItY3VycmVudCBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGFuZ2luZyBsYW5ndWFnZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50XHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jYXJkLzk1IGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci1ib3JkZXIvNTAgc2hhZG93LXhsIHJvdW5kZWQteGwgbWluLXctWzE2MHB4XSBwLTEgZHJvcGRvd24tY29udGVudC1lbmhhbmNlZFwiXHJcbiAgICAgICAgICAgICAgICBzaWRlT2Zmc2V0PXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YXZhaWxhYmxlTG9jYWxlcy5tYXAoKGxvY2FsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudExvY2FsZSA9IGN1cnJlbnRMb2NhbGVJbmZvPy5jb2RlID09PSBsb2NhbGUuY29kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bG9jYWxlLmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZVN3aXRjaChsb2NhbGUuY29kZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQZW5kaW5nIHx8IGlzQ3VycmVudExvY2FsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMi41IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwICR7aXNDdXJyZW50TG9jYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IGN1cnNvci1kZWZhdWx0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzUGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBhY3RpdmU6YmctYWNjZW50LzgwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFN3aXRjaCB0byAke2xvY2FsZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGFnSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk9e2xvY2FsZS5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNCBoLTQgZmxhZy1pY29uICR7aXNQZW5kaW5nICYmICFpc0N1cnJlbnRMb2NhbGUgPyAnb3BhY2l0eS01MCcgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYWxlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDdXJyZW50TG9jYWxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnkgYW5pbWF0ZS1pbiBmYWRlLWluLTAgem9vbS1pbi05NSBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ3VycmVudCBsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOzs7Ozs7OztBQUVBLGlEQUFpRDtBQUNqRCxNQUFNLFdBQVc7UUFBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLFNBQVMsRUFBMkM7SUFDekYsTUFBTSxPQUFPLENBQUEsR0FBQSxxSEFBQSxDQUFBLGdCQUFhLEFBQUQsRUFBRTtJQUUzQixxQkFDSSw2TEFBQztRQUFLLFdBQVcsQUFBQyxHQUFZLE9BQVYsV0FBVTtrQkFDekI7Ozs7OztBQUdiO0tBUk07QUFVQyxTQUFTOztJQUNaLE1BQU0sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQSxHQUFBLDhIQUFBLENBQUEsY0FBVyxBQUFEO0lBRXJGLE1BQU0sdUJBQXVCLENBQUM7UUFDMUIseUNBQXlDO1FBQ3pDLElBQUksZ0JBQWUsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUksR0FBRTtRQUU1QyxvRUFBb0U7UUFDcEUsZUFBZTtJQUNuQjtJQUVBLHFCQUNJLDZMQUFDLCtJQUFBLENBQUEsZUFBWTs7MEJBQ1QsNkxBQUMsK0lBQUEsQ0FBQSxzQkFBbUI7Z0JBQUMsT0FBTzswQkFDeEIsY0FBQSw2TEFBQyxxSUFBQSxDQUFBLFNBQU07b0JBQ0gsU0FBUTtvQkFDUixNQUFLO29CQUNMLFVBQVU7b0JBQ1YsV0FBVyxBQUFDLHNJQUNQLE9BRDRJLFlBQVksa0NBQWtDO29CQUUvTCxjQUFZLEFBQUMscUJBQTRDLE9BQXhCLDhCQUFBLHdDQUFBLGtCQUFtQixJQUFJLEVBQUM7O3NDQUV6RCw2TEFBQzs0QkFDRyxTQUFTLENBQUEsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUksS0FBSTs0QkFDcEMsV0FBVyxBQUFDLDBCQUEwRCxPQUFqQyxZQUFZLGtCQUFrQjs7Ozs7O3NDQUV2RSw2TEFBQzs0QkFBSyxXQUFVO3NDQUNYLDhCQUFBLHdDQUFBLGtCQUFtQixJQUFJOzs7Ozs7d0JBRTNCLDJCQUNHLDZMQUFDOzRCQUNHLFdBQVU7NEJBQ1YsY0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNCLDZMQUFDLCtJQUFBLENBQUEsc0JBQW1CO2dCQUNoQixPQUFNO2dCQUNOLFdBQVU7Z0JBQ1YsWUFBWTswQkFFWCxpQkFBaUIsR0FBRyxDQUFDLENBQUM7b0JBQ25CLE1BQU0sa0JBQWtCLENBQUEsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUksTUFBSyxPQUFPLElBQUk7b0JBRS9ELHFCQUNJLDZMQUFDLCtJQUFBLENBQUEsbUJBQWdCO3dCQUViLFNBQVMsSUFBTSxxQkFBcUIsT0FBTyxJQUFJO3dCQUMvQyxVQUFVLGFBQWE7d0JBQ3ZCLFdBQVcsQUFBQyxtSkFLUCxPQUx5SixrQkFDcEosOENBQ0EsWUFDSSxrQ0FDQTt3QkFFZCxjQUFZLEFBQUMsYUFBd0IsT0FBWixPQUFPLElBQUk7OzBDQUVwQyw2TEFBQztnQ0FDRyxTQUFTLE9BQU8sSUFBSTtnQ0FDcEIsV0FBVyxBQUFDLHFCQUNQLE9BRDJCLGFBQWEsQ0FBQyxrQkFBa0IsZUFBZTs7Ozs7OzBDQUduRiw2TEFBQztnQ0FBSyxXQUFVOzBDQUNYLE9BQU8sSUFBSTs7Ozs7OzRCQUVmLGlDQUNHLDZMQUFDLHVNQUFBLENBQUEsUUFBSztnQ0FDRixXQUFVO2dDQUNWLGNBQVc7Ozs7Ozs7dUJBdEJkLE9BQU8sSUFBSTs7Ozs7Z0JBMkI1Qjs7Ozs7Ozs7Ozs7O0FBSWhCO0dBOUVnQjs7UUFDK0QsOEhBQUEsQ0FBQSxjQUFXOzs7TUFEMUUiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE0MjQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9hdmF0YXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBBdmF0YXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1hdmF0YXJcIlxyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5cclxuZnVuY3Rpb24gQXZhdGFyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXZhdGFyUHJpbWl0aXZlLlJvb3RcclxuICAgICAgZGF0YS1zbG90PVwiYXZhdGFyXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInJlbGF0aXZlIGZsZXggc2l6ZS04IHNocmluay0wIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGxcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF2YXRhckltYWdlKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5JbWFnZT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhclByaW1pdGl2ZS5JbWFnZVxyXG4gICAgICBkYXRhLXNsb3Q9XCJhdmF0YXItaW1hZ2VcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwiYXNwZWN0LXNxdWFyZSBzaXplLWZ1bGxcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF2YXRhckZhbGxiYWNrKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5GYWxsYmFjaz4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhclByaW1pdGl2ZS5GYWxsYmFja1xyXG4gICAgICBkYXRhLXNsb3Q9XCJhdmF0YXItZmFsbGJhY2tcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiYmctbXV0ZWQgZmxleCBzaXplLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQXZhdGFyLCBBdmF0YXJJbWFnZSwgQXZhdGFyRmFsbGJhY2sgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7QUFFQTtBQUxBOzs7O0FBT0EsU0FBUyxPQUFPLEtBR29DO1FBSHBDLEVBQ2QsU0FBUyxFQUNULEdBQUcsT0FDK0MsR0FIcEM7SUFJZCxxQkFDRSw2TEFBQyxxS0FBQSxDQUFBLE9BQW9CO1FBQ25CLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDhEQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtLQWRTO0FBZ0JULFNBQVMsWUFBWSxLQUdnQztRQUhoQyxFQUNuQixTQUFTLEVBQ1QsR0FBRyxPQUNnRCxHQUhoQztJQUluQixxQkFDRSw2TEFBQyxxS0FBQSxDQUFBLFFBQXFCO1FBQ3BCLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLDJCQUEyQjtRQUN4QyxHQUFHLEtBQUs7Ozs7OztBQUdmO01BWFM7QUFhVCxTQUFTLGVBQWUsS0FHZ0M7UUFIaEMsRUFDdEIsU0FBUyxFQUNULEdBQUcsT0FDbUQsR0FIaEM7SUFJdEIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxXQUF3QjtRQUN2QixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixvRUFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFkUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTQ4OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VzZXIvVXNlckF2YXRhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJGYWxsYmFjayB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9hdmF0YXInO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJBdmF0YXJDb250ZW50UHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdmF0YXIoeyBuYW1lLCBvbkNsaWNrIH06IFVzZXJBdmF0YXJDb250ZW50UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhciBjbGFzc05hbWU9XCJoLTEwIHctMTAgcmluZy0yIHJpbmctcHJpbWFyeS8yMCByb3VuZGVkLTJ4bCBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8QXZhdGFyRmFsbGJhY2sgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb250LW1lZGl1bSByb3VuZGVkLTJ4bCBmb250LXByaW1hcnlcIj5cclxuICAgICAgICB7bmFtZVxyXG4gICAgICAgICAgPy5zcGxpdCgnICcpXHJcbiAgICAgICAgICAubWFwKChuYW1lKSA9PiBuYW1lWzBdKVxyXG4gICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICA8L0F2YXRhckZhbGxiYWNrPlxyXG4gICAgPC9BdmF0YXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUFPZSxTQUFTLFdBQVcsS0FBeUM7UUFBekMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUEwQixHQUF6QztJQUNqQyxxQkFDRSw2TEFBQyxxSUFBQSxDQUFBLFNBQU07UUFBQyxXQUFVO1FBQThELFNBQVM7a0JBQ3ZGLGNBQUEsNkxBQUMscUlBQUEsQ0FBQSxpQkFBYztZQUFDLFdBQVU7c0JBQ3ZCLGlCQUFBLDJCQUFBLEtBQ0csS0FBSyxDQUFDLEtBQ1AsR0FBRyxDQUFDLENBQUMsT0FBUyxJQUFJLENBQUMsRUFBRSxFQUNyQixJQUFJLENBQUM7Ozs7Ozs7Ozs7O0FBSWhCO0tBWHdCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNTI3LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvYmFkZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIlxyXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxyXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIHB4LTIgcHktMC41IHRleHQteHMgZm9udC1tZWRpdW0gdy1maXQgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgWyY+c3ZnXTpzaXplLTMgZ2FwLTEgWyY+c3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZSB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBvdmVyZmxvdy1oaWRkZW5cIixcclxuICB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICB2YXJpYW50OiB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgW2EmXTpob3ZlcjpiZy1wcmltYXJ5LzkwXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OlxyXG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctc2Vjb25kYXJ5IHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgW2EmXTpob3ZlcjpiZy1zZWNvbmRhcnkvOTBcIixcclxuICAgICAgICBkZXN0cnVjdGl2ZTpcclxuICAgICAgICAgIFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLWRlc3RydWN0aXZlIHRleHQtd2hpdGUgW2EmXTpob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MCBmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazpmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvNDAgZGFyazpiZy1kZXN0cnVjdGl2ZS82MFwiLFxyXG4gICAgICAgIG91dGxpbmU6XHJcbiAgICAgICAgICBcInRleHQtZm9yZWdyb3VuZCBbYSZdOmhvdmVyOmJnLWFjY2VudCBbYSZdOmhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXHJcbiAgICB9LFxyXG4gIH1cclxuKVxyXG5cclxuZnVuY3Rpb24gQmFkZ2Uoe1xyXG4gIGNsYXNzTmFtZSxcclxuICB2YXJpYW50LFxyXG4gIGFzQ2hpbGQgPSBmYWxzZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInNwYW5cIj4gJlxyXG4gIFZhcmlhbnRQcm9wczx0eXBlb2YgYmFkZ2VWYXJpYW50cz4gJiB7IGFzQ2hpbGQ/OiBib29sZWFuIH0pIHtcclxuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcInNwYW5cIlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBcclxuICAgICAgZGF0YS1zbG90PVwiYmFkZ2VcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKGJhZGdlVmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBRUEsTUFBTSxnQkFBZ0IsQ0FBQSxHQUFBLG1LQUFBLENBQUEsTUFBRyxBQUFELEVBQ3RCLGtaQUNBO0lBQ0UsVUFBVTtRQUNSLFNBQVM7WUFDUCxTQUNFO1lBQ0YsV0FDRTtZQUNGLGFBQ0U7WUFDRixTQUNFO1FBQ0o7SUFDRjtJQUNBLGlCQUFpQjtRQUNmLFNBQVM7SUFDWDtBQUNGO0FBR0YsU0FBUyxNQUFNLEtBTTZDO1FBTjdDLEVBQ2IsU0FBUyxFQUNULE9BQU8sRUFDUCxVQUFVLEtBQUssRUFDZixHQUFHLE9BRXVELEdBTjdDO0lBT2IsTUFBTSxPQUFPLFVBQVUsbUtBQUEsQ0FBQSxPQUFJLEdBQUc7SUFFOUIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxjQUFjO1lBQUU7UUFBUSxJQUFJO1FBQ3pDLEdBQUcsS0FBSzs7Ozs7O0FBR2Y7S0FoQlMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE1ODAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9wb3BvdmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgUG9wb3ZlclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXJcIlxyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5cclxuZnVuY3Rpb24gUG9wb3Zlcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuUm9vdD4pIHtcclxuICByZXR1cm4gPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBkYXRhLXNsb3Q9XCJwb3BvdmVyXCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBQb3BvdmVyVHJpZ2dlcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlcj4pIHtcclxuICByZXR1cm4gPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBkYXRhLXNsb3Q9XCJwb3BvdmVyLXRyaWdnZXJcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBvcG92ZXJDb250ZW50KHtcclxuICBjbGFzc05hbWUsXHJcbiAgYWxpZ24gPSBcImNlbnRlclwiLFxyXG4gIHNpZGVPZmZzZXQgPSA0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBQb3BvdmVyUHJpbWl0aXZlLkNvbnRlbnQ+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQb3BvdmVyUHJpbWl0aXZlLlBvcnRhbD5cclxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cInBvcG92ZXItY29udGVudFwiXHJcbiAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCB3LTcyIG9yaWdpbi0oLS1yYWRpeC1wb3BvdmVyLWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgcm91bmRlZC1tZCBib3JkZXIgcC00IHNoYWRvdy1tZCBvdXRsaW5lLWhpZGRlblwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BvcG92ZXJQcmltaXRpdmUuUG9ydGFsPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gUG9wb3ZlckFuY2hvcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuQW5jaG9yPikge1xyXG4gIHJldHVybiA8UG9wb3ZlclByaW1pdGl2ZS5BbmNob3IgZGF0YS1zbG90PVwicG9wb3Zlci1hbmNob3JcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJUcmlnZ2VyLCBQb3BvdmVyQ29udGVudCwgUG9wb3ZlckFuY2hvciB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7QUFFQTtBQUxBOzs7O0FBT0EsU0FBUyxRQUFRLEtBRW9DO1FBRnBDLEVBQ2YsR0FBRyxPQUNnRCxHQUZwQztJQUdmLHFCQUFPLDZMQUFDLHNLQUFBLENBQUEsT0FBcUI7UUFBQyxhQUFVO1FBQVcsR0FBRyxLQUFLOzs7Ozs7QUFDN0Q7S0FKUztBQU1ULFNBQVMsZUFBZSxLQUVnQztRQUZoQyxFQUN0QixHQUFHLE9BQ21ELEdBRmhDO0lBR3RCLHFCQUFPLDZMQUFDLHNLQUFBLENBQUEsVUFBd0I7UUFBQyxhQUFVO1FBQW1CLEdBQUcsS0FBSzs7Ozs7O0FBQ3hFO01BSlM7QUFNVCxTQUFTLGVBQWUsS0FLZ0M7UUFMaEMsRUFDdEIsU0FBUyxFQUNULFFBQVEsUUFBUSxFQUNoQixhQUFhLENBQUMsRUFDZCxHQUFHLE9BQ21ELEdBTGhDO0lBTXRCLHFCQUNFLDZMQUFDLHNLQUFBLENBQUEsU0FBdUI7a0JBQ3RCLGNBQUEsNkxBQUMsc0tBQUEsQ0FBQSxVQUF3QjtZQUN2QixhQUFVO1lBQ1YsT0FBTztZQUNQLFlBQVk7WUFDWixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGtlQUNBO1lBRUQsR0FBRyxLQUFLOzs7Ozs7Ozs7OztBQUlqQjtNQXBCUztBQXNCVCxTQUFTLGNBQWMsS0FFZ0M7UUFGaEMsRUFDckIsR0FBRyxPQUNrRCxHQUZoQztJQUdyQixxQkFBTyw2TEFBQyxzS0FBQSxDQUFBLFNBQXVCO1FBQUMsYUFBVTtRQUFrQixHQUFHLEtBQUs7Ozs7OztBQUN0RTtNQUpTIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNjY1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL1VuaWZpZWROb3RpZmljYXRpb25Qb3B1cC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWRnZSc7XHJcbmltcG9ydCB7XHJcbiAgUG9wb3ZlcixcclxuICBQb3BvdmVyQ29udGVudCxcclxuICBQb3BvdmVyVHJpZ2dlclxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9wb3BvdmVyJztcclxuaW1wb3J0IHtcclxuICBCZWxsLFxyXG4gIENoZWNrQ2lyY2xlLFxyXG4gIENsb2NrLFxyXG4gIEZpbGVUZXh0LFxyXG4gIEdyYWR1YXRpb25DYXAsXHJcbiAgQ2FsZW5kYXIsXHJcbiAgQWxlcnRUcmlhbmdsZSxcclxuICBYXHJcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9ob29rcy91c2VMYW5ndWFnZSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcblxyXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggQVBJIHR5cGVzIHdoZW4gaW1wbGVtZW50aW5nIGJhY2tlbmQgaW50ZWdyYXRpb25cclxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiAnYXNzaWdubWVudCcgfCAnZ3JhZGUnIHwgJ2V2ZW50JyB8ICdzeXN0ZW0nIHwgJ3JlbWluZGVyJztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBpc1JlYWQ6IGJvb2xlYW47XHJcbiAgcHJpb3JpdHk6ICdsb3cnIHwgJ21lZGl1bScgfCAnaGlnaCc7XHJcbiAgYWN0aW9uVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBnZXROb3RpZmljYXRpb25JY29uID0gKHR5cGU6IE5vdGlmaWNhdGlvblsndHlwZSddKSA9PiB7XHJcbiAgY29uc3QgaWNvbk1hcCA9IHtcclxuICAgIGFzc2lnbm1lbnQ6IEZpbGVUZXh0LFxyXG4gICAgZ3JhZGU6IEdyYWR1YXRpb25DYXAsXHJcbiAgICBldmVudDogQ2FsZW5kYXIsXHJcbiAgICBzeXN0ZW06IEFsZXJ0VHJpYW5nbGUsXHJcbiAgICByZW1pbmRlcjogQ2xvY2tcclxuICB9O1xyXG4gIHJldHVybiBpY29uTWFwW3R5cGVdO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Tm90aWZpY2F0aW9uQ29sb3JzID0gKHR5cGU6IE5vdGlmaWNhdGlvblsndHlwZSddKSA9PiB7XHJcbiAgY29uc3QgY29sb3JNYXAgPSB7XHJcbiAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgIGJnOiAnYmctYmx1ZS01MCBkYXJrOmJnLWJsdWUtNTAwLzEwJyxcclxuICAgICAgYm9yZGVyOiAnYm9yZGVyLWJsdWUtMjAwIGRhcms6Ym9yZGVyLWJsdWUtNTAwLzMwJyxcclxuICAgICAgaWNvbkJnOiAnYmctYmx1ZS0xMDAgZGFyazpiZy1ibHVlLTUwMC8yMCcsXHJcbiAgICAgIGljb25Db2xvcjogJ3RleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNDAwJyxcclxuICAgICAgc2hhZG93OiAnc2hhZG93LWJsdWUtNTAwLzIwJ1xyXG4gICAgfSxcclxuICAgIGdyYWRlOiB7XHJcbiAgICAgIGJnOiAnYmctZW1lcmFsZC01MCBkYXJrOmJnLWVtZXJhbGQtNTAwLzEwJyxcclxuICAgICAgYm9yZGVyOiAnYm9yZGVyLWVtZXJhbGQtMjAwIGRhcms6Ym9yZGVyLWVtZXJhbGQtNTAwLzMwJyxcclxuICAgICAgaWNvbkJnOiAnYmctZW1lcmFsZC0xMDAgZGFyazpiZy1lbWVyYWxkLTUwMC8yMCcsXHJcbiAgICAgIGljb25Db2xvcjogJ3RleHQtZW1lcmFsZC02MDAgZGFyazp0ZXh0LWVtZXJhbGQtNDAwJyxcclxuICAgICAgc2hhZG93OiAnc2hhZG93LWVtZXJhbGQtNTAwLzIwJ1xyXG4gICAgfSxcclxuICAgIGV2ZW50OiB7XHJcbiAgICAgIGJnOiAnYmctcHVycGxlLTUwIGRhcms6YmctcHVycGxlLTUwMC8xMCcsXHJcbiAgICAgIGJvcmRlcjogJ2JvcmRlci1wdXJwbGUtMjAwIGRhcms6Ym9yZGVyLXB1cnBsZS01MDAvMzAnLFxyXG4gICAgICBpY29uQmc6ICdiZy1wdXJwbGUtMTAwIGRhcms6YmctcHVycGxlLTUwMC8yMCcsXHJcbiAgICAgIGljb25Db2xvcjogJ3RleHQtcHVycGxlLTYwMCBkYXJrOnRleHQtcHVycGxlLTQwMCcsXHJcbiAgICAgIHNoYWRvdzogJ3NoYWRvdy1wdXJwbGUtNTAwLzIwJ1xyXG4gICAgfSxcclxuICAgIHN5c3RlbToge1xyXG4gICAgICBiZzogJ2JnLW9yYW5nZS01MCBkYXJrOmJnLW9yYW5nZS01MDAvMTAnLFxyXG4gICAgICBib3JkZXI6ICdib3JkZXItb3JhbmdlLTIwMCBkYXJrOmJvcmRlci1vcmFuZ2UtNTAwLzMwJyxcclxuICAgICAgaWNvbkJnOiAnYmctb3JhbmdlLTEwMCBkYXJrOmJnLW9yYW5nZS01MDAvMjAnLFxyXG4gICAgICBpY29uQ29sb3I6ICd0ZXh0LW9yYW5nZS02MDAgZGFyazp0ZXh0LW9yYW5nZS00MDAnLFxyXG4gICAgICBzaGFkb3c6ICdzaGFkb3ctb3JhbmdlLTUwMC8yMCdcclxuICAgIH0sXHJcbiAgICByZW1pbmRlcjoge1xyXG4gICAgICBiZzogJ2JnLWFtYmVyLTUwIGRhcms6YmctYW1iZXItNTAwLzEwJyxcclxuICAgICAgYm9yZGVyOiAnYm9yZGVyLWFtYmVyLTIwMCBkYXJrOmJvcmRlci1hbWJlci01MDAvMzAnLFxyXG4gICAgICBpY29uQmc6ICdiZy1hbWJlci0xMDAgZGFyazpiZy1hbWJlci01MDAvMjAnLFxyXG4gICAgICBpY29uQ29sb3I6ICd0ZXh0LWFtYmVyLTYwMCBkYXJrOnRleHQtYW1iZXItNDAwJyxcclxuICAgICAgc2hhZG93OiAnc2hhZG93LWFtYmVyLTUwMC8yMCdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29sb3JNYXBbdHlwZV07XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUaW1lc3RhbXAgPSAodGltZXN0YW1wOiBzdHJpbmcsIHQ6IChrZXk6IHN0cmluZykgPT4gc3RyaW5nLCBpc1JUTDogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSBNYXRoLmFicyhub3cuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwKTtcclxuXHJcbiAgaWYgKGRpZmZJbkhvdXJzIDwgMSkge1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZkluSG91cnMgKiA2MCk7XHJcbiAgICByZXR1cm4gaXNSVEwgPyBgJHt0KCdwb3B1cC50aW1lQWdvLnByZWZpeCcpfSAke21pbnV0ZXN9ICR7dCgncG9wdXAudGltZUFnby5taW51dGVzJyl9YCA6IGAke21pbnV0ZXN9JHt0KCdwb3B1cC50aW1lQWdvLm1pbnV0ZXMnKX1gO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGRpZmZJbkhvdXJzKTtcclxuICAgIHJldHVybiBpc1JUTCA/IGAke3QoJ3BvcHVwLnRpbWVBZ28ucHJlZml4Jyl9ICR7aG91cnN9ICR7dCgncG9wdXAudGltZUFnby5ob3VycycpfWAgOiBgJHtob3Vyc30ke3QoJ3BvcHVwLnRpbWVBZ28uaG91cnMnKX1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmSW5Ib3VycyAvIDI0KTtcclxuICAgIHJldHVybiBpc1JUTCA/IGAke3QoJ3BvcHVwLnRpbWVBZ28ucHJlZml4Jyl9ICR7ZGF5c30gJHt0KCdwb3B1cC50aW1lQWdvLmRheXMnKX1gIDogYCR7ZGF5c30ke3QoJ3BvcHVwLnRpbWVBZ28uZGF5cycpfWA7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVuaWZpZWROb3RpZmljYXRpb25Qb3B1cCgpIHtcclxuICBjb25zdCB7IGlzUlRMIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ25vdGlmaWNhdGlvbnMnKTtcclxuXHJcbiAgLy8gVE9ETzogUmVwbGFjZSB3aXRoIGFjdHVhbCBBUEkgY2FsbCAtIHVzaW5nIHRyYW5zbGF0aW9ucyBmb3Igc3RhdGljIGRhdGEgbm93XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbnMsIHNldE5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGU8Tm90aWZpY2F0aW9uW10+KFtcclxuICAgIHtcclxuICAgICAgaWQ6ICcxJyxcclxuICAgICAgdHlwZTogJ2Fzc2lnbm1lbnQnLFxyXG4gICAgICB0aXRsZTogdCgncG9wdXAuc3RhdGljRGF0YS5hc3NpZ25tZW50LnRpdGxlJyksXHJcbiAgICAgIG1lc3NhZ2U6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuYXNzaWdubWVudC5tZXNzYWdlJyksXHJcbiAgICAgIHRpbWVzdGFtcDogJzIwMjUtMDEtMjNUMTA6MzA6MDAnLFxyXG4gICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLFxyXG4gICAgICBhY3Rpb25Vcmw6ICcvYXNzaWdubWVudHMvbWF0aC0zJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICcyJyxcclxuICAgICAgdHlwZTogJ2dyYWRlJyxcclxuICAgICAgdGl0bGU6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuZ3JhZGUudGl0bGUnKSxcclxuICAgICAgbWVzc2FnZTogdCgncG9wdXAuc3RhdGljRGF0YS5ncmFkZS5tZXNzYWdlJyksXHJcbiAgICAgIHRpbWVzdGFtcDogJzIwMjUtMDEtMjNUMDk6MTU6MDAnLFxyXG4gICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsXHJcbiAgICAgIGFjdGlvblVybDogJy9ncmFkZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzMnLFxyXG4gICAgICB0eXBlOiAnZXZlbnQnLFxyXG4gICAgICB0aXRsZTogdCgncG9wdXAuc3RhdGljRGF0YS5ldmVudC50aXRsZScpLFxyXG4gICAgICBtZXNzYWdlOiB0KCdwb3B1cC5zdGF0aWNEYXRhLmV2ZW50Lm1lc3NhZ2UnKSxcclxuICAgICAgdGltZXN0YW1wOiAnMjAyNS0wMS0yM1QwODowMDowMCcsXHJcbiAgICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxyXG4gICAgICBhY3Rpb25Vcmw6ICcvc2NoZWR1bGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzQnLFxyXG4gICAgICB0eXBlOiAnc3lzdGVtJyxcclxuICAgICAgdGl0bGU6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuc3lzdGVtLnRpdGxlJyksXHJcbiAgICAgIG1lc3NhZ2U6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuc3lzdGVtLm1lc3NhZ2UnKSxcclxuICAgICAgdGltZXN0YW1wOiAnMjAyNS0wMS0yMlQxNjo0NTowMCcsXHJcbiAgICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgICAgcHJpb3JpdHk6ICdsb3cnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzUnLFxyXG4gICAgICB0eXBlOiAncmVtaW5kZXInLFxyXG4gICAgICB0aXRsZTogdCgncG9wdXAuc3RhdGljRGF0YS5yZW1pbmRlci50aXRsZScpLFxyXG4gICAgICBtZXNzYWdlOiB0KCdwb3B1cC5zdGF0aWNEYXRhLnJlbWluZGVyLm1lc3NhZ2UnKSxcclxuICAgICAgdGltZXN0YW1wOiAnMjAyNS0wMS0yMlQxNDoyMDowMCcsXHJcbiAgICAgIGlzUmVhZDogZmFsc2UsXHJcbiAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcclxuICAgICAgYWN0aW9uVXJsOiAnL2xpYnJhcnknXHJcbiAgICB9XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdW5yZWFkQ291bnQgPSBub3RpZmljYXRpb25zLmZpbHRlcihuID0+ICFuLmlzUmVhZCkubGVuZ3RoO1xyXG5cclxuICAvLyBUT0RPOiBJbXBsZW1lbnQgQVBJIGNhbGwgdG8gbWFyayBub3RpZmljYXRpb24gYXMgcmVhZFxyXG4gIGNvbnN0IG1hcmtBc1JlYWQgPSAobm90aWZpY2F0aW9uSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Tm90aWZpY2F0aW9ucyhwcmV2ID0+XHJcbiAgICAgIHByZXYubWFwKG5vdGlmaWNhdGlvbiA9PlxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5pZCA9PT0gbm90aWZpY2F0aW9uSWRcclxuICAgICAgICAgID8geyAuLi5ub3RpZmljYXRpb24sIGlzUmVhZDogdHJ1ZSB9XHJcbiAgICAgICAgICA6IG5vdGlmaWNhdGlvblxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIFRPRE86IEltcGxlbWVudCBBUEkgY2FsbCB0byBtYXJrIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICBjb25zdCBtYXJrQWxsQXNSZWFkID0gKCkgPT4ge1xyXG4gICAgc2V0Tm90aWZpY2F0aW9ucyhwcmV2ID0+XHJcbiAgICAgIHByZXYubWFwKG5vdGlmaWNhdGlvbiA9PiAoeyAuLi5ub3RpZmljYXRpb24sIGlzUmVhZDogdHJ1ZSB9KSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVE9ETzogSW1wbGVtZW50IEFQSSBjYWxsIHRvIGRpc21pc3Mgbm90aWZpY2F0aW9uXHJcbiAgY29uc3QgZGlzbWlzc05vdGlmaWNhdGlvbiA9IChub3RpZmljYXRpb25JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXROb3RpZmljYXRpb25zKHByZXYgPT5cclxuICAgICAgcHJldi5maWx0ZXIobm90aWZpY2F0aW9uID0+IG5vdGlmaWNhdGlvbi5pZCAhPT0gbm90aWZpY2F0aW9uSWQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFN1YnRpdGxlVGV4dCA9ICgpID0+IHtcclxuICAgIGlmICh1bnJlYWRDb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdCgncG9wdXAuc3VidGl0bGUuYWxsQ2F1Z2h0VXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0KCdwb3B1cC5zdWJ0aXRsZS5oYXNOZXcnLCB7XHJcbiAgICAgICAgY291bnQ6IHVucmVhZENvdW50XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9wb3ZlciBvcGVuPXtpc09wZW59IG9uT3BlbkNoYW5nZT17c2V0SXNPcGVufT5cclxuICAgICAgPFBvcG92ZXJUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgIHNpemU9XCJpY29uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8xMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBncm91cFwiXHJcbiAgICAgICAgICB0aXRsZT17dCgncG9wdXAudGl0bGUnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QmVsbCBjbGFzc05hbWU9XCJoLTUgdy01IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpzY2FsZS0xMTBcIiAvPlxyXG4gICAgICAgICAge3VucmVhZENvdW50ID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAnYWJzb2x1dGUgaC01IHctNSBwLTAgdGV4dC14cyBiZy1kZXN0cnVjdGl2ZSBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MCByb3VuZGVkLWZ1bGwnLFxyXG4gICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtbWVkaXVtIGFuaW1hdGUtcHVsc2Ugc2hhZG93LWxnJyxcclxuICAgICAgICAgICAgICAgICdib3JkZXItMiBib3JkZXItYmFja2dyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICBpc1JUTCA/ICctdG9wLTEgLWxlZnQtMScgOiAnLXRvcC0xIC1yaWdodC0xJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5yZWFkQ291bnQgPiA5ID8gJzkrJyA6IHVucmVhZENvdW50fVxyXG4gICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cclxuXHJcbiAgICAgIDxQb3BvdmVyQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAndy04MCBtYXgtdy1bY2FsYygxMDB2dy0xcmVtKV0gYmctYmFja2dyb3VuZC85NSBiYWNrZHJvcC1ibHVyLXhsIGJvcmRlciBib3JkZXItYm9yZGVyLzQwJyxcclxuICAgICAgICAgICdyb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIHAtMCBvdmVyZmxvdy1oaWRkZW4nLFxyXG4gICAgICAgICAgJ2RhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCcsXHJcbiAgICAgICAgICAnZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCcsXHJcbiAgICAgICAgICAnZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1JyxcclxuICAgICAgICAgICdkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by10b3AtMSBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLXRvcC0xJyxcclxuICAgICAgICAgICd0cmFuc2Zvcm0tZ3B1J1xyXG4gICAgICAgICl9XHJcbiAgICAgICAgYWxpZ249e2lzUlRMID8gJ3N0YXJ0JyA6ICdlbmQnfVxyXG4gICAgICAgIHNpZGVPZmZzZXQ9ezEyfVxyXG4gICAgICAgIGRpcj17aXNSVEwgPyAncnRsJyA6ICdsdHInfVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEhlYWRlciB3aXRoIGVuaGFuY2VkIGdyYWRpZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1ib3JkZXIvMjBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkvMTAgdmlhLWJhY2tncm91bmQvODAgdG8tc2Vjb25kYXJ5LzEwXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXByaW1hcnkvNSB0by10cmFuc3BhcmVudCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBpc1JUTCA/ICdmbGV4LXJvdy1yZXZlcnNlJyA6ICdmbGV4LXJvdydcclxuICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0zJyxcclxuICAgICAgICAgICAgICAgIGlzUlRMID8gJ2ZsZXgtcm93LXJldmVyc2UnIDogJ2ZsZXgtcm93J1xyXG4gICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTIuNSByb3VuZGVkLXhsIGJnLXByaW1hcnkvMTUgYmFja2Ryb3AtYmx1ci1zbSBib3JkZXIgYm9yZGVyLXByaW1hcnkvMjUgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCZWxsIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5LzIwIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3BvcHVwLnRpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTAuNSBmb250LW1lZGl1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0J1xyXG4gICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0U3VidGl0bGVUZXh0KCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7dW5yZWFkQ291bnQgPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17bWFya0FsbEFzUmVhZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAndGV4dC14cyB0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8xNSByb3VuZGVkLWxnIGgtNyBweC0zJyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dCgncG9wdXAubWFya0FsbFJlYWQnKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBFbmhhbmNlZCBOb3RpZmljYXRpb25zIExpc3Qgd2l0aCBzbW9vdGggc2Nyb2xsaW5nICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtODAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC1oLTgwIG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiBzY3JvbGwtc21vb3RoIHAtMiBzcGFjZS15LTFcIlxyXG4gICAgICAgICAgICBvbldoZWVsPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSdyZSBhdCB0aGUgYm91bmRhcmllc1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF0VG9wID0gc2Nyb2xsVG9wID09PSAwO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF0Qm90dG9tID0gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAtIDE7XHJcblxyXG4gICAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgc2Nyb2xsaW5nIHdpdGhpbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaWYgKChlLmRlbHRhWSA8IDAgJiYgYXRUb3ApIHx8IChlLmRlbHRhWSA+IDAgJiYgYXRCb3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiAndGhpbicsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMykgcmdiYSgwLDAsMCwwLjEpJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXIgYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1ncmFkaWVudC10by1iciBmcm9tLW11dGVkLzIwIHRvLW11dGVkLzQwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTQgc2hhZG93LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtbXV0ZWQtZm9yZWdyb3VuZC83MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAge3QoJ3BvcHVwLm5vTm90aWZpY2F0aW9ucycpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAge3QoJ3BvcHVwLmFsbENhdWdodFVwTWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHNwYWNlLXktMSBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBJY29uID0gZ2V0Tm90aWZpY2F0aW9uSWNvbihub3RpZmljYXRpb24udHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IGdldE5vdGlmaWNhdGlvbkNvbG9ycyhub3RpZmljYXRpb24udHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHJlbGF0aXZlIHAtMyBteC0xIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGN1cnNvci1wb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOnNoYWRvdy1sZyBob3ZlcjpzY2FsZS1bMS4wMl0gYWN0aXZlOnNjYWxlLVswLjk4XSB0cmFuc2Zvcm0tZ3B1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlciBiYWNrZHJvcC1ibHVyLXNtIHNjcm9sbC1tYi0yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW5vdGlmaWNhdGlvbi5pc1JlYWQgJiYgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5iZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5zaGFkb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NoYWRvdy1tZCBob3ZlcjpzaGFkb3ctbGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5pc1JlYWQgJiYgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdiZy1tdXRlZC8yMCBib3JkZXItYm9yZGVyLzMwIGhvdmVyOmJnLW11dGVkLzQwIGhvdmVyOmJvcmRlci1ib3JkZXIvNTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdob3ZlcjpzaGFkb3ctbWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbmltYXRlLXNsaWRlLWluLWZhZGUgb3BhY2l0eS0wJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtpbmRleCAqIDEwMH1tc2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnZm9yd2FyZHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtBc1JlYWQobm90aWZpY2F0aW9uLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5hY3Rpb25VcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGUgdG86Jywgbm90aWZpY2F0aW9uLmFjdGlvblVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVuaGFuY2VkIHVucmVhZCBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IW5vdGlmaWNhdGlvbi5pc1JlYWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIHctMi41IGgtMi41IGJnLXByaW1hcnkgcm91bmRlZC1mdWxsIHNoYWRvdy1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGUtcHVsc2UtZ2xvdyBib3JkZXIgYm9yZGVyLXByaW1hcnkvMzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ2xlZnQtMiBib3R0b20tMycgOiAncmlnaHQtMiBib3R0b20tMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVuaGFuY2VkIGRpc21pc3MgYnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIHctNyBoLTcgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOmJnLWRlc3RydWN0aXZlLzIwIGhvdmVyOnRleHQtZGVzdHJ1Y3RpdmUgcm91bmRlZC1sZyBiYWNrZHJvcC1ibHVyLXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwIGFjdGl2ZTpzY2FsZS05NScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnbGVmdC0xIHRvcC0xJyA6ICdyaWdodC0xIHRvcC0xJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbWlzc05vdGlmaWNhdGlvbihub3RpZmljYXRpb24uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGdhcC0zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnZmxleC1yb3ctcmV2ZXJzZScgOiAnZmxleC1yb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuaGFuY2VkIENvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgbWItMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICdmbGV4LXJvdy1yZXZlcnNlJyA6ICdmbGV4LXJvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBsaW5lLWNsYW1wLTEgZm9udC1wcmltYXJ5IGxlYWRpbmctdGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzaHJpbmstMCBmb250LW1lZGl1bSBweC0yIHB5LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmctbXV0ZWQvMzAgcm91bmRlZC1tZCBiYWNrZHJvcC1ibHVyLXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAndGV4dC1sZWZ0JyA6ICd0ZXh0LXJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lc3RhbXAobm90aWZpY2F0aW9uLnRpbWVzdGFtcCwgdCwgaXNSVEwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxpbmUtY2xhbXAtMiBsZWFkaW5nLXJlbGF4ZWQgbWItMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGdyb3VwLWhvdmVyOnRleHQtZm9yZWdyb3VuZC84MCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICd0ZXh0LXJpZ2h0JyA6ICd0ZXh0LWxlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5oYW5jZWQgYmFkZ2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnZmxleC1yb3ctcmV2ZXJzZSBqdXN0aWZ5LWVuZCcgOiAnZmxleC1yb3cganVzdGlmeS1zdGFydCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24ucHJpb3JpdHkgPT09ICdoaWdoJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIHB5LTEgcHgtMi41IGgtNiByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHNoYWRvdy1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZS1wdWxzZS1nbG93IGJvcmRlciBib3JkZXItZGVzdHJ1Y3RpdmUvMzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdwb3B1cC5wcmlvcml0eS5oaWdoJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgcHktMSBweC0yLjUgaC02IHJvdW5kZWQtbGcgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tkcm9wLWJsdXItc20gc2hhZG93LXNtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOnNoYWRvdy1tZCBob3ZlcjpzY2FsZS0xMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmljb25Db2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dChgcG9wdXAudHlwZXMuJHtub3RpZmljYXRpb24udHlwZX1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogRW5oYW5jZWQgRm9vdGVyICovfVxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItYm9yZGVyLzIwIHAtMyBiZy1ncmFkaWVudC10by1yIGZyb20tbXV0ZWQvMjAgdmlhLWJhY2tncm91bmQvNjAgdG8tbXV0ZWQvMjAgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAndy1mdWxsIHRleHQtc20gcm91bmRlZC14bCBoLTkgZm9udC1tZWRpdW0gYmFja2Ryb3AtYmx1ci1zbScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLVsxLjAyXSBhY3RpdmU6c2NhbGUtWzAuOThdJyxcclxuICAgICAgICAgICAgICAgICdob3ZlcjpiZy1wcmltYXJ5LzEwIGhvdmVyOmJvcmRlci1wcmltYXJ5LzQwIGhvdmVyOnRleHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAnc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGUgdG8gZnVsbCBub3RpZmljYXRpb25zIHBhZ2UnKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3QoJ3BvcHVwLnZpZXdBbGwnKX1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcG92ZXJDb250ZW50PlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7OztBQXRCQTs7Ozs7Ozs7O0FBb0NBLE1BQU0sc0JBQXNCLENBQUM7SUFDM0IsTUFBTSxVQUFVO1FBQ2QsWUFBWSxpTkFBQSxDQUFBLFdBQVE7UUFDcEIsT0FBTywyTkFBQSxDQUFBLGdCQUFhO1FBQ3BCLE9BQU8sNk1BQUEsQ0FBQSxXQUFRO1FBQ2YsUUFBUSwyTkFBQSxDQUFBLGdCQUFhO1FBQ3JCLFVBQVUsdU1BQUEsQ0FBQSxRQUFL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OERBQ0Esc0VBQ0Esa0VBQ0E7NEJBRUYsU0FBUztnQ0FDUCxVQUFVO2dDQUNWLFFBQVEsR0FBRyxDQUFDOzRCQUNkO3NDQUVDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBNVhnQjs7UUFDSSw4SEFBQSxDQUFBLGNBQVc7UUFDbkIseU1BQUEsQ0FBQSxrQkFBZTs7O0tBRlgiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDIyNTUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICBEcm9wZG93bk1lbnVJdGVtLFxyXG4gIERyb3Bkb3duTWVudUxhYmVsLFxyXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcclxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IHsgVXNlciwgR3JhZHVhdGlvbkNhcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSAnLi4vYXV0aC9Mb2dvdXRCdG4nO1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJ0AvaG9va3MvdXNlTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcclxuaW1wb3J0IHsgVGhlbWVUb2dnbGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdGhlbWUtdG9nZ2xlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTd2l0Y2hlciB9IGZyb20gJ0AvY29tcG9uZW50cy9tYWRlL2xhbmd1YWdlLXN3aXRjaGVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJztcclxuaW1wb3J0IFVzZXJBdmF0YXIgZnJvbSAnLi4vdXNlci9Vc2VyQXZhdGFyJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvaG9va3MvdXNlQXV0aCc7XHJcbmltcG9ydCB7IFVuaWZpZWROb3RpZmljYXRpb25Qb3B1cCB9IGZyb20gJ0AvY29tcG9uZW50cy9kYXNoYm9hcmQvVW5pZmllZE5vdGlmaWNhdGlvblBvcHVwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHVzZUF1dGgoKS51c2VyO1xyXG4gIGNvbnN0IHsgaXNSVEwgfSA9IHVzZUxhbmd1YWdlKCk7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygnbmF2YmFyJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgJ2ZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgYmctYmFja2dyb3VuZC84MCBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlci1iIGJvcmRlci1ib3JkZXIgc2hhZG93LXhsIHctZnVsbCcsXHJcbiAgICAgICAgaXNSVEwgPyAnZGlyZWN0aW9uLXJ0bCcgOiAnZGlyZWN0aW9uLWx0cidcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICB7LyogTWFpbiBuYXZiYXIgY29udGFpbmVyIC0gUlRMLWF3YXJlIGxheW91dCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtMTYgdy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICB7LyogTG9nbyBTZWN0aW9uIC0gcG9zaXRpb25lZCBhYnNvbHV0ZWx5IGZvciBwcmVjaXNlIGNvbnRyb2wgKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGFic29sdXRlJyxcclxuICAgICAgICAgICAgICBpc1JUTCA/ICdyaWdodC0wJyA6ICdsZWZ0LTAnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgPEdyYWR1YXRpb25DYXAgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgJ3RleHQteGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICBpc1JUTCA/ICd0ZXh0LXJpZ2h0JyA6ICd0ZXh0LWxlZnQnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0KCdicmFuZCcpfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3QoJ3BvcnRhbCcpfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQ29udHJvbHMgU2VjdGlvbiAtIHBvc2l0aW9uZWQgYWJzb2x1dGVseSBmb3IgcHJlY2lzZSBjb250cm9sICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBhYnNvbHV0ZSBmbGV4LXJvdycsXHJcbiAgICAgICAgICAgICAgaXNSVEwgPyAnbGVmdC0wICcgOiAncmlnaHQtMCAnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBUaGVtZSBUb2dnbGUgKi99XHJcbiAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxyXG5cclxuICAgICAgICAgICAgey8qIExhbmd1YWdlIFN3aXRjaGVyICovfVxyXG4gICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciAvPlxyXG5cclxuICAgICAgICAgICAgey8qIE5vdGlmaWNhdGlvbnMgKi99XHJcbiAgICAgICAgICAgIDxVbmlmaWVkTm90aWZpY2F0aW9uUG9wdXAgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBVc2VyIE1lbnUgKi99XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMCB3LTEwIHJvdW5kZWQtMnhsIGhvdmVyOmJnLXByaW1hcnkvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJBdmF0YXIgbmFtZT17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01NiBiZy1jYXJkLzk1IGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci1ib3JkZXIvNTAgcm91bmRlZC0yeGwgc2hhZG93LXhsXCJcclxuICAgICAgICAgICAgICAgIGFsaWduPXtpc1JUTCA/ICdzdGFydCcgOiAnZW5kJ31cclxuICAgICAgICAgICAgICAgIGZvcmNlTW91bnRcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51TGFiZWwgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAnZmxleCBmbGV4LWNvbCBzcGFjZS15LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnaXRlbXMtZW5kJyA6ICdpdGVtcy1zdGFydCdcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSB0ZXh0LWZvcmVncm91bmQgZm9udC1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIGxlYWRpbmctbm9uZSB0ZXh0LW11dGVkLWZvcmVncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICd0ZXh0LXJpZ2h0JyA6ICd0ZXh0LWxlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVTZXBhcmF0b3IgY2xhc3NOYW1lPVwiYmctYm9yZGVyLzUwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOmJnLXByaW1hcnkvMTAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ2ZsZXgtcm93LXJldmVyc2UnIDogJ2ZsZXgtcm93J1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlciBjbGFzc05hbWU9e2NuKCdoLTQgdy00JywgaXNSVEwgPyAnbWwtMicgOiAnbXItMicpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXByaW1hcnlcIj57dCgncHJvZmlsZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVTZXBhcmF0b3IgY2xhc3NOYW1lPVwiYmctYm9yZGVyLzUwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGNsYXNzTmFtZT1cImhvdmVyOmJnLWRlc3RydWN0aXZlLzEwIHRleHQtZGVzdHJ1Y3RpdmUgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXIgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFwQkE7Ozs7Ozs7Ozs7Ozs7QUFzQk8sU0FBUzs7SUFFZCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUEsR0FBQSwwSEFBQSxDQUFBLFVBQU8sQUFBRCxJQUFJLElBQUk7SUFDdEMsTUFBTSxFQUFFLEtBQUss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Ozs7Ozs7Ozs7OztBQVMvQjtHQTNIZ0I7O1FBRVUsMEhBQUEsQ0FBQSxVQUFPO1FBQ2IsOEhBQUEsQ0FBQSxjQUFXO1FBQ25CLHlNQUFBLENBQUEsa0JBQWU7OztLQUpYIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyNTMwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1N0dWRlbnRMYXlvdXQvU3R1ZGVudExheW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuLi9OYXZiYXInO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIFN0dWRlbnRMYXlvdXRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3R1ZGVudExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfTogU3R1ZGVudExheW91dFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtNTAgdmlhLWJsdWUtNTAgdG8taW5kaWdvLTUwIGRhcms6ZnJvbS1ncmF5LTk1MCBkYXJrOnZpYS1ibHVlLTk1MCBkYXJrOnRvLWluZGlnby05NTBcIj5cclxuICAgICAgey8qIEZpeGVkIE5hdmJhciAqL31cclxuICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgey8qIEZpeGVkIFNpZGViYXIgKi99XHJcbiAgICAgIHsvKiA8U2lkZWJhciBuYSAvPiAqL31cclxuXHJcbiAgICAgIHsvKiBNYWluIENvbnRlbnQgQXJlYSAqL31cclxuICAgICAgPG1haW5cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgJ2xnOm1sLTY0IHB0LTE2IG1pbi1oLXNjcmVlbiBvdmVyZmxvdy15LWF1dG8nLFxyXG4gICAgICAgICAgJ3Njcm9sbGJhci10aGluIHNjcm9sbGJhci10aHVtYi1ibHVlLTIwMCBzY3JvbGxiYXItdHJhY2stdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgJ2Rhcms6c2Nyb2xsYmFyLXRodW1iLWJsdWUtODAwJyxcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7LyogQ29udGVudCBDb250YWluZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc206cC02IGxnOnAtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUhBOzs7O0FBVU8sU0FBUyxjQUFjLEtBQTJDO1FBQTNDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBc0IsR0FBM0M7SUFDNUIscUJBQ0UsNkxBQUM7UUFBSSxXQUFVOzswQkFFYiw2TEFBQyx5SUFBQSxDQUFBLFNBQU07Ozs7OzBCQU1QLDZMQUFDO2dCQUNDLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsK0NBQ0EsdUVBQ0EsaUNBQ0E7MEJBSUYsY0FBQSw2TEFBQztvQkFBSSxXQUFVOzhCQUNiLGNBQUEsNkxBQUM7d0JBQUksV0FBVTtrQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0tBM0JnQiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjU5MSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgU2Nyb2xsQXJlYVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNjcm9sbC1hcmVhXCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIFNjcm9sbEFyZWEoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290XHJcbiAgICAgIGRhdGEtc2xvdD1cInNjcm9sbC1hcmVhXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnRcclxuICAgICAgICBkYXRhLXNsb3Q9XCJzY3JvbGwtYXJlYS12aWV3cG9ydFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgc2l6ZS1mdWxsIHJvdW5kZWQtW2luaGVyaXRdIHRyYW5zaXRpb24tW2NvbG9yLGJveC1zaGFkb3ddIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTFcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnQ+XHJcbiAgICAgIDxTY3JvbGxCYXIgLz5cclxuICAgICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuQ29ybmVyIC8+XHJcbiAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuUm9vdD5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNjcm9sbEJhcih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXJcclxuICAgICAgZGF0YS1zbG90PVwic2Nyb2xsLWFyZWEtc2Nyb2xsYmFyXCJcclxuICAgICAgb3JpZW50YXRpb249e29yaWVudGF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZmxleCB0b3VjaC1ub25lIHAtcHggdHJhbnNpdGlvbi1jb2xvcnMgc2VsZWN0LW5vbmVcIixcclxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXHJcbiAgICAgICAgICBcImgtZnVsbCB3LTIuNSBib3JkZXItbCBib3JkZXItbC10cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxyXG4gICAgICAgICAgXCJoLTIuNSBmbGV4LWNvbCBib3JkZXItdCBib3JkZXItdC10cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFUaHVtYlxyXG4gICAgICAgIGRhdGEtc2xvdD1cInNjcm9sbC1hcmVhLXRodW1iXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ib3JkZXIgcmVsYXRpdmUgZmxleC0xIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IFNjcm9sbEFyZWEsIFNjcm9sbEJhciB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0FBRUE7QUFMQTs7OztBQU9BLFNBQVMsV0FBVyxLQUlvQztRQUpwQyxFQUNsQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEdBQUcsT0FDbUQsR0FKcEM7SUFLbEIscUJBQ0UsNkxBQUMsNktBQUEsQ0FBQSxPQUF3QjtRQUN2QixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxZQUFZO1FBQ3pCLEdBQUcsS0FBSzs7MEJBRVQsNkxBQUMsNktBQUEsQ0FBQSxXQUE0QjtnQkFDM0IsYUFBVTtnQkFDVixXQUFVOzBCQUVUOzs7Ozs7MEJBRUgsNkxBQUM7Ozs7OzBCQUNELDZMQUFDLDZLQUFBLENBQUEsU0FBMEI7Ozs7Ozs7Ozs7O0FBR2pDO0tBckJTO0FBdUJULFNBQVMsVUFBVSxLQUlvRDtRQUpwRCxFQUNqQixTQUFTLEVBQ1QsY0FBYyxVQUFVLEVBQ3hCLEdBQUcsT0FDa0UsR0FKcEQ7SUFLakIscUJBQ0UsNkxBQUMsNktBQUEsQ0FBQSxzQkFBdUM7UUFDdEMsYUFBVTtRQUNWLGFBQWE7UUFDYixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLHNEQUNBLGdCQUFnQixjQUNkLDhDQUNGLGdCQUFnQixnQkFDZCxnREFDRjtRQUVELEdBQUcsS0FBSztrQkFFVCxjQUFBLDZMQUFDLDZLQUFBLENBQUEsa0JBQW1DO1lBQ2xDLGFBQVU7WUFDVixXQUFVOzs7Ozs7Ozs7OztBQUlsQjtNQXpCUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjY3MSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2xheW91dC9TaWRlTWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhJztcclxuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYmFkZ2UnO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcclxuaW1wb3J0IHsgTmF2SXRlbSB9IGZyb20gJ0AvY29uc3RhbnRzL3NpZGVNZW51RGF0YSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSwgWEljb24gfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJ0AvaG9va3MvdXNlTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tICduZXh0LWludGwnO1xyXG5cclxuaW50ZXJmYWNlIFNpZGVOYXZDb250ZW50UHJvcHMge1xyXG4gIG5hdkl0ZW1zOiBOYXZJdGVtW107XHJcbiAgb25JdGVtQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZU5hdkNvbnRlbnQoeyBuYXZJdGVtcywgb25JdGVtQ2xpY2sgfTogU2lkZU5hdkNvbnRlbnRQcm9wcykge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCB7IGlzUlRMIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcImZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyLWJvcmRlci81MFwiLFxyXG4gICAgICBpc1JUTCA/IFwiYm9yZGVyLWxcIiA6IFwiYm9yZGVyLXJcIlxyXG4gICAgKX0+XHJcbiAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxyXG4gICAgICA8U2Nyb2xsQXJlYSBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBweS04XCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKHsgbGFiZWxLZXksIGhyZWYsIGljb246IEljb24sIGJhZGdlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZS5lbmRzV2l0aChocmVmKTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlZExhYmVsID0gdChsYWJlbEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGtleT17bGFiZWxLZXl9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAnZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktMy41IHJvdW5kZWQtMnhsIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS1bMC45OF0nLFxyXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LWxnIGJvcmRlciBib3JkZXItcHJpbWFyeS8yMCdcclxuICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvMTAgaG92ZXI6c2hhZG93LW1kIGhvdmVyOmJvcmRlciBob3Zlcjpib3JkZXItcHJpbWFyeS8yMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnZmxleC1yb3ctcmV2ZXJzZScgOiAnZmxleC1yb3cnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiLFxyXG4gICAgICAgICAgICAgICAgICBpc1JUTCA/IFwiZmxleC1yb3ctcmV2ZXJzZVwiIDogXCJmbGV4LXJvd1wiXHJcbiAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAncC0yIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXByaW1hcnktZm9yZWdyb3VuZC8yMCBzaGFkb3ctc20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2dyb3VwLWhvdmVyOmJnLXByaW1hcnkvMjAgZ3JvdXAtaG92ZXI6c2hhZG93LXNtJ1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2gtNSB3LTUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWN1cnJlbnQgZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5IGdyb3VwLWhvdmVyOnNjYWxlLTExMCdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LW1lZGl1bSB0cmFja2luZy13aWRlIGxlYWRpbmctcmVsYXhlZCBmb250LXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBpc1JUTCA/IFwidGV4dC1yaWdodFwiIDogXCJ0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlZExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtiYWRnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2lzQWN0aXZlID8gJ3NlY29uZGFyeScgOiAnb3V0bGluZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIHB4LTMgcHktMSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCByb3VuZGVkLXhsIHNoYWRvdy1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1wcmltYXJ5LWZvcmVncm91bmQvMjAgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgYm9yZGVyLXByaW1hcnktZm9yZWdyb3VuZC8zMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgYm9yZGVyLXByaW1hcnkvMjAgaG92ZXI6YmctcHJpbWFyeS8yMCBncm91cC1ob3ZlcjpzY2FsZS0xMDUnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtiYWRnZX1cclxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvU2Nyb2xsQXJlYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaWRlTWVudVByb3BzIHtcclxuICBuYXZJdGVtczogTmF2SXRlbVtdO1xyXG4gIG9uSXRlbUNsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGVNZW51KHsgbmF2SXRlbXMsIG9uSXRlbUNsaWNrIH06IFNpZGVNZW51UHJvcHMpIHtcclxuICBjb25zdCBbaXNTaWRlYmFyT3Blbiwgc2V0SXNTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBpc1JUTCB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuICBjb25zdCBNZW1vaXplZFNpZGVOYXZDb250ZW50ID0gUmVhY3QubWVtbyhTaWRlTmF2Q29udGVudCk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBEZXNrdG9wIFNpZGViYXIgKi99XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZml4ZWQgdG9wLTE2IGgtW2NhbGMoMTAwdmgtNHJlbSldIHctNzIgei00MCBoaWRkZW4gbGc6ZmxleCBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyLWJvcmRlci81MCBzaGFkb3cteGxcIixcclxuICAgICAgICBpc1JUTCA/IFwicmlnaHQtMCBib3JkZXItbCByb3VuZGVkLWwtMnhsXCIgOiBcImxlZnQtMCBib3JkZXItciByb3VuZGVkLXItMnhsXCJcclxuICAgICAgKX0+XHJcbiAgICAgICAgPE1lbW9pemVkU2lkZU5hdkNvbnRlbnQgbmF2SXRlbXM9e25hdkl0ZW1zfSBvbkl0ZW1DbGljaz17b25JdGVtQ2xpY2t9IC8+XHJcbiAgICAgIDwvYXNpZGU+XHJcblxyXG4gICAgICB7LyogTW9iaWxlIE1lbnUgQnV0dG9uICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJsZzpoaWRkZW4gZml4ZWQgYm90dG9tLTggei01MCBiZy1iYWNrZ3JvdW5kIGJvcmRlciBib3JkZXItYm9yZGVyIHAtMiByb3VuZGVkLXhsIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6YmctcHJpbWFyeS8xMFwiLFxyXG4gICAgICAgICAgaXNSVEwgPyBcInJpZ2h0LTRcIiA6IFwibGVmdC00XCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnUgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWZvcmVncm91bmRcIiAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgU2lkZWJhciAqL31cclxuICAgICAgPGFzaWRlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICdmaXhlZCB0b3AtMCBoLWZ1bGwgdy03MiB6LTUwIGJnLWJhY2tncm91bmQvOTAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItYm9yZGVyLzUwIHNoYWRvdy14bCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgbGc6aGlkZGVuJyxcclxuICAgICAgICAgIGlzUlRMID8gJ3JpZ2h0LTAgYm9yZGVyLWwgcm91bmRlZC1sLTJ4bCcgOiAnbGVmdC0wIGJvcmRlci1yIHJvdW5kZWQtci0yeGwnLFxyXG4gICAgICAgICAgaXNTaWRlYmFyT3BlbiBcclxuICAgICAgICAgICAgPyAndHJhbnNsYXRlLXgtMCcgXHJcbiAgICAgICAgICAgIDogaXNSVEwgPyAndHJhbnNsYXRlLXgtZnVsbCcgOiAnLXRyYW5zbGF0ZS14LWZ1bGwnXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiZmxleCBwLTRcIixcclxuICAgICAgICAgIGlzUlRMID8gXCJqdXN0aWZ5LXN0YXJ0XCIgOiBcImp1c3RpZnktZW5kXCJcclxuICAgICAgICApfT5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzU2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBob3ZlcjpiZy1wcmltYXJ5LzEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZm9yZWdyb3VuZFwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TWVtb2l6ZWRTaWRlTmF2Q29udGVudFxyXG4gICAgICAgICAgbmF2SXRlbXM9e25hdkl0ZW1zfVxyXG4gICAgICAgICAgb25JdGVtQ2xpY2s9eygpID0+IHNldElzU2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYXNpZGU+XHJcblxyXG4gICAgICB7LyogTW9iaWxlIE92ZXJsYXkgKi99XHJcbiAgICAgIHtpc1NpZGViYXJPcGVuICYmIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1iYWNrZ3JvdW5kLzUwIGJhY2tkcm9wLWJsdXItc20gei00MCBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTaWRlYmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQVhBOzs7Ozs7Ozs7O0FBa0JPLFNBQVMsZUFBZSxLQUE4QztRQUE5QyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQXVCLEdBQTlDOztJQUM3QixNQUFNLFdBQVcsQ0FBQSxHQUFBLHFJQUFBLENBQUEsY0FBVyxBQUFEO0lBQzNCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFBLEdBQUEsOEhBQUEsQ0FBQSxjQUFXLEFBQUQ7SUFDNUIsTUFBTSxJQUFJLENBQUEsR0FBQSx5TUFBQSxDQUFBLGtCQUFlLEFBQUQ7SUFFeEIscUJBQ0Us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bU1BQUEsQ0FBQSxRQUFLO2dDQUFDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3JCLDZMQUFDO3dCQUNDLFVBQVU7d0JBQ1YsYUFBYSxJQUFNLGlCQUFpQjs7Ozs7Ozs7Ozs7O1lBS3ZDLCtCQUNDLDZMQUFDO2dCQUNDLFdBQVU7Z0JBQ1YsU0FBUyxJQUFNLGlCQUFpQjs7Ozs7Ozs7QUFLMUM7SUE5RGdCOztRQUVJLDhIQUFBLENBQUEsY0FBVzs7O01BRmYiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI4OTYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgU3R1ZGVudExheW91dCB9IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvU3R1ZGVudExheW91dC9TdHVkZW50TGF5b3V0J1xyXG5leHBvcnQgeyBOYXZiYXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcidcclxuZXhwb3J0IHsgU2lkZU1lbnUgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVNZW51J1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjkyMSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb25zdGFudHMvc2lkZU1lbnVEYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSG9tZSxcclxuICBCb29rLFxyXG4gIENhbGVuZGFyLFxyXG4gIENsaXBib2FyZExpc3QsXHJcbiAgQmFyQ2hhcnQzLFxyXG4gIFNldHRpbmdzLFxyXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtIHtcclxuICBsYWJlbEtleTogc3RyaW5nXHJcbiAgaHJlZjogc3RyaW5nXHJcbiAgaWNvbjogTHVjaWRlSWNvblxyXG4gIGJhZGdlPzogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgUm9sZSA9ICdzdHVkZW50JyB8ICd0ZWFjaGVyJyB8ICdhZG1pbicgfCAnc3VwZXItYWRtaW4nXHJcblxyXG5leHBvcnQgY29uc3QgbmF2SXRlbXNEYXRhOiBSZWNvcmQ8Um9sZSwgKGlkOiBzdHJpbmcpID0+IE5hdkl0ZW1bXT4gPSB7XHJcbiAgc3R1ZGVudDogKGlkOiBzdHJpbmcpID0+IFtcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmRhc2hib2FyZCcsIGhyZWY6IGAvc3R1ZGVudC8ke2lkfWAsIGljb246IEhvbWUsIGJhZGdlOiAnJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuY291cnNlcycsIGhyZWY6IGAvc3R1ZGVudC8ke2lkfS9jb3Vyc2VzYCwgaWNvbjogQm9vaywgYmFkZ2U6ICczJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuYXNzaWdubWVudHMnLCBocmVmOiBgL3N0dWRlbnQvJHtpZH0vYXNzaWdubWVudGAsIGljb246IENsaXBib2FyZExpc3QsIGJhZGdlOiAnNScgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmdyYWRlcycsIGhyZWY6IGAvc3R1ZGVudC8ke2lkfS9ncmFkZXNgLCBpY29uOiBCYXJDaGFydDMsIGJhZGdlOiAnTmV3JyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuY2FsZW5kYXInLCBocmVmOiBgL3N0dWRlbnQvJHtpZH0vY2FsZW5kYXJgLCBpY29uOiBDYWxlbmRhciwgYmFkZ2U6ICcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5zZWN0aW9ucycsIGhyZWY6IGAvc3R1ZGVudC8ke2lkfS9zZWN0aW9uc2AsIGljb246IENsaXBib2FyZExpc3QsIGJhZGdlOiAnJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuc2V0dGluZ3MnLCBocmVmOiBgL3N0dWRlbnQvJHtpZH0vc2V0dGluZ3NgLCBpY29uOiBTZXR0aW5ncywgYmFkZ2U6ICcnIH0sXHJcblxyXG4gIF0sXHJcblxyXG4gIHRlYWNoZXI6IChpZDogc3RyaW5nKSA9PiBbXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5kYXNoYm9hcmQnLCBocmVmOiBgL3RlYWNoZXIvJHtpZH1gLCBpY29uOiBIb21lLCBiYWRnZTogJycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmNvdXJzZXMnLCBocmVmOiBgL3RlYWNoZXIvJHtpZH0vY291cnNlc2AsIGljb246IEJvb2ssIGJhZGdlOiAnMycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmFzc2lnbm1lbnRzJywgaHJlZjogYC90ZWFjaGVyLyR7aWR9L2Fzc2lnbm1lbnRzYCwgaWNvbjogQ2xpcGJvYXJkTGlzdCwgYmFkZ2U6ICc1JyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuc2VjdGlvbnMnLCBocmVmOiBgL3RlYWNoZXIvJHtpZH0vc2VjdGlvbnNgLCBpY29uOiBDbGlwYm9hcmRMaXN0LCBiYWRnZTogJycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnNldHRpbmdzJywgaHJlZjogYC90ZWFjaGVyLyR7aWR9L3NldHRpbmdzYCwgaWNvbjogU2V0dGluZ3MsIGJhZGdlOiAnJyB9LFxyXG4gIF0sXHJcblxyXG4gIGFkbWluOiAoaWQ6IHN0cmluZykgPT4gW1xyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuZGFzaGJvYXJkJywgaHJlZjogYC9hZG1pbi8ke2lkfWAsIGljb246IEhvbWUsIGJhZGdlOiAnJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuY29sbGVnZXMnLCBocmVmOiBgL2FkbWluLyR7aWR9L2NvbGxlZ2VzYCwgaWNvbjogQmFyQ2hhcnQzLCBiYWRnZTogJ05ldycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmRlcGFydG1lbnRzJywgaHJlZjogYC9hZG1pbi8ke2lkfS9kZXBhcnRtZW50c2AsIGljb246IEJhckNoYXJ0MywgYmFkZ2U6ICdOZXcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5jb3Vyc2VzJywgaHJlZjogYC9hZG1pbi8ke2lkfS9jb3Vyc2VzYCwgaWNvbjogQ2xpcGJvYXJkTGlzdCwgYmFkZ2U6ICc1JyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIudGVhY2hlcnMnLCBocmVmOiBgL2FkbWluLyR7aWR9L3RlYWNoZXJzYCwgaWNvbjogQm9vaywgYmFkZ2U6ICczJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuc2V0dGluZ3MnLCBocmVmOiBgL2FkbWluLyR7aWR9L3NldHRpbmdzYCwgaWNvbjogU2V0dGluZ3MsIGJhZGdlOiAnJyB9LFxyXG4gIF0sXHJcblxyXG4gICdzdXBlci1hZG1pbic6IChpZDogc3RyaW5nKSA9PiBbXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5kYXNoYm9hcmQnLCBocmVmOiBgL3N1cGVyLWFkbWluLyR7aWR9YCwgaWNvbjogSG9tZSwgYmFkZ2U6ICcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci51bml2ZXJzaXR5JywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS91bml2ZXJzaXR5YCwgaWNvbjogQm9vaywgYmFkZ2U6ICczJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuY29sbGVnZXMnLCBocmVmOiBgL3N1cGVyLWFkbWluLyR7aWR9L2NvbGxlZ2VzYCwgaWNvbjogQmFyQ2hhcnQzLCBiYWRnZTogJ05ldycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmRlcGFydG1lbnRzJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS9kZXBhcnRtZW50c2AsIGljb246IEJhckNoYXJ0MywgYmFkZ2U6ICdOZXcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5jb3Vyc2VzJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS9jb3Vyc2VzYCwgaWNvbjogQ2xpcGJvYXJkTGlzdCwgYmFkZ2U6ICc1JyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIudGVhY2hlcnMnLCBocmVmOiBgL3N1cGVyLWFkbWluLyR7aWR9L3RlYWNoZXJzYCwgaWNvbjogQm9vaywgYmFkZ2U6ICczJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuc3R1ZGVudHMnLCBocmVmOiBgL3N1cGVyLWFkbWluLyR7aWR9L3N0dWRlbnRzYCwgaWNvbjogQmFyQ2hhcnQzLCBiYWRnZTogJ05ldycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnNldHRpbmdzJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS9zZXR0aW5nc2AsIGljb246IFNldHRpbmdzLCBiYWRnZTogJycgfSxcclxuICBdLFxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUJPLE1BQU0sZUFBd0Q7SUFDbkUsU0FBUyxDQUFDLEtBQWU7WUFDdkI7Z0JBQUUsVUFBVTtnQkFBcUIsTUFBTSxBQUFDLFlBQWMsT0FBSDtnQkFBTSxNQUFNLHNNQUFBLENBQUEsT0FBSTtnQkFBRSxPQUFPO1lBQUc7WUFDL0U7Z0JBQUUsVUFBVTtnQkFBbUIsTUFBTSxBQUFDLFlBQWMsT0FBSCxJQUFHO2dCQUFXLE1BQU0scU1BQUEsQ0FBQSxPQUFJO2dCQUFFLE9BQU87WUFBSTtZQUN0RjtnQkFBRSxVQUFVO2dCQUF1QixNQUFNLEFBQUMsWUFBYyxPQUFILElBQUc7Z0JBQWMsTUFBTSwyTkFBQSxDQUFBLGdCQUFhO2dCQUFFLE9BQU87WUFBSTtZQUN0RztnQkFBRSxV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T0FBTztZQUFNO1lBQ3pHO2dCQUFFLFVBQVU7Z0JBQW1CLE1BQU0sQUFBQyxnQkFBa0IsT0FBSCxJQUFHO2dCQUFXLE1BQU0sMk5BQUEsQ0FBQSxnQkFBYTtnQkFBRSxPQUFPO1lBQUk7WUFDbkc7Z0JBQUUsVUFBVTtnQkFBb0IsTUFBTSxBQUFDLGdCQUFrQixPQUFILElBQUc7Z0JBQVksTUFBTSxxTUFBQSxDQUFBLE9BQUk7Z0JBQUUsT0FBTztZQUFJO1lBQzVGO2dCQUFFLFVBQVU7Z0JBQW9CLE1BQU0sQUFBQyxnQkFBa0IsT0FBSCxJQUFHO2dCQUFZLE1BQU0scU5BQUEsQ0FBQSxZQUFTO2dCQUFFLE9BQU87WUFBTTtZQUNuRztnQkFBRSxVQUFVO2dCQUFvQixNQUFNLEFBQUMsZ0JBQWtCLE9BQUgsSUFBRztnQkFBWSxNQUFNLDZNQUFBLENBQUEsV0FBUTtnQkFBRSxPQUFPO1lBQUc7U0FDaEc7QUFDSCIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzEwNiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2Vycm9yL0Vycm9yQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IEFsZXJ0VHJpYW5nbGUsIFJlZnJlc2hDdywgSG9tZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgZmFsbGJhY2s/OiBSZWFjdE5vZGU7XHJcbiAgb25FcnJvcj86IChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogUmVhY3QuRXJyb3JJbmZvKSA9PiB2b2lkO1xyXG4gIHNob3dIb21lQnV0dG9uPzogYm9vbGVhbjtcclxuICBsZXZlbD86ICdwYWdlJyB8ICdjb21wb25lbnQnIHwgJ2FwcCc7XHJcbiAgb25OYXZpZ2F0ZUhvbWU/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGhhc0Vycm9yOiBib29sZWFuO1xyXG4gIGVycm9yPzogRXJyb3I7XHJcbiAgZXJyb3JJbmZvPzogUmVhY3QuRXJyb3JJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogRXJyb3IpOiBTdGF0ZSB7XHJcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IsIGVycm9ySW5mbzogdW5kZWZpbmVkIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYFske3RoaXMucHJvcHMubGV2ZWwgfHwgJ1Vua25vd24nfSBFcnJvciBCb3VuZGFyeV06YCwgZXJyb3IpO1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgSW5mbzonLCBlcnJvckluZm8pO1xyXG5cclxuICAgIC8vIENhbGwgY3VzdG9tIGVycm9yIGhhbmRsZXIgaWYgcHJvdmlkZWRcclxuICAgIHRoaXMucHJvcHMub25FcnJvcj8uKGVycm9yLCBlcnJvckluZm8pO1xyXG5cclxuICAgIC8vIFN0b3JlIGVycm9yIGluZm8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySW5mbyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUmV0cnkgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IGZhbHNlLCBlcnJvcjogdW5kZWZpbmVkLCBlcnJvckluZm86IHVuZGVmaW5lZCB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZVJlZnJlc2ggPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHb0hvbWUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbk5hdmlnYXRlSG9tZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uTmF2aWdhdGVIb21lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBGYWxsYmFjayB0byB3aW5kb3cubG9jYXRpb24gaWYgbm8gbmF2aWdhdGlvbiBoYW5kbGVyIGlzIHByb3ZpZGVkXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XHJcbiAgICAgIC8vIFVzZSBjdXN0b20gZmFsbGJhY2sgaWYgcHJvdmlkZWRcclxuICAgICAgaWYgKHRoaXMucHJvcHMuZmFsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mYWxsYmFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRGVmYXVsdCBlcnJvciBVSSBiYXNlZCBvbiBsZXZlbFxyXG4gICAgICBjb25zdCB7IGxldmVsID0gJ2NvbXBvbmVudCcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBpZiAobGV2ZWwgPT09ICdhcHAnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtOCBiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJoLTIwIHctMjAgdGV4dC1kZXN0cnVjdGl2ZSBteC1hdXRvIG1iLTZcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPkFwcGxpY2F0aW9uIEVycm9yPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIGFwcGxpY2F0aW9uIGVuY291bnRlcmVkIGEgY3JpdGljYWwgZXJyb3IuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIG9yIGNvbnRhY3Qgc3VwcG9ydCBpZiB0aGUgcHJvYmxlbSBwZXJzaXN0cy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0zIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVmcmVzaH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgUmVmcmVzaCBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUdvSG9tZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEhvbWUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiB0aGlzLnN0YXRlLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yIERldGFpbHMgKERldmVsb3BtZW50KVxyXG4gICAgICAgICAgICAgICAgICA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibXQtMiBwLTQgYmctbXV0ZWQgcm91bmRlZC1sZyB0ZXh0LXhzIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9ySW5mbz8uY29tcG9uZW50U3RhY2t9XHJcbiAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxldmVsID09PSAncGFnZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bNjB2aF0gcC04XCI+XHJcbiAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LWRlc3RydWN0aXZlIG1iLTRcIiAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+UGFnZSBFcnJvcjwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi00IHRleHQtY2VudGVyIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgICAgVGhpcyBwYWdlIGVuY291bnRlcmVkIGFuIGVycm9yLiBZb3UgY2FuIHRyeSByZWZyZXNoaW5nIG9yIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2UuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJldHJ5fSB2YXJpYW50PVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlZnJlc2h9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8UmVmcmVzaEN3IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dIb21lQnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUdvSG9tZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEhvbWUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ29tcG9uZW50IGxldmVsIGVycm9yXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1kZXN0cnVjdGl2ZS8yMCByb3VuZGVkLWxnIGJnLWRlc3RydWN0aXZlLzVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMlwiPlxyXG4gICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZGVzdHJ1Y3RpdmVcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZGVzdHJ1Y3RpdmVcIj5Db21wb25lbnQgRXJyb3I8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTNcIj5cclxuICAgICAgICAgICAgVGhpcyBjb21wb25lbnQgZmFpbGVkIHRvIGxvYWQgcHJvcGVybHkuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXRyeX0+XHJcbiAgICAgICAgICAgIFJldHJ5XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFdyYXBwZXIgY29tcG9uZW50IHRoYXQgcHJvdmlkZXMgTmV4dC5qcyByb3V0ZXIgZnVuY3Rpb25hbGl0eVxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeVdpdGhSb3V0ZXIocHJvcHM6IE9taXQ8UHJvcHMsICdvbk5hdmlnYXRlSG9tZSc+KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlSG9tZSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxFcnJvckJvdW5kYXJ5IHsuLi5wcm9wc30gb25OYXZpZ2F0ZUhvbWU9e2hhbmRsZU5hdmlnYXRlSG9tZX0gLz47XHJcbn1cclxuXHJcbi8vIEV4cG9ydCB0aGUgd3JhcHBlciBhcyBkZWZhdWx0IHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeVdpdGhSb3V0ZXI7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBd0ZlOzs7QUF0RmY7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7O0FBTEE7Ozs7O0FBc0JPLE1BQU0sc0JBQXNCLDZKQUFBLENBQUEsWUFBUztJQU0xQyxPQUFPLHlCQUF5QixLQUFZLEVBQVM7UUFDbkQsT0FBTztZQUFFLFVBQVU7WUFBTTtZQUFPLFdBQVc7UUFBVTtJQUN2RDtJQUNBLGtCQUFrQixLQUFZLEVBQUUsU0FBMEIsRUFBRTtZQUkxRCx3Q0FB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QUFBLFlBQVM7OztLQURWO3VDQVdEIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzNDcwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvZXJyb3IvUGFnZUVycm9yQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vRXJyb3JCb3VuZGFyeSc7XHJcblxyXG5pbnRlcmZhY2UgUGFnZUVycm9yQm91bmRhcnlQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICBzaG93SG9tZUJ1dHRvbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdlRXJyb3JCb3VuZGFyeSh7IGNoaWxkcmVuLCBzaG93SG9tZUJ1dHRvbiA9IHRydWUgfTogUGFnZUVycm9yQm91bmRhcnlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JCb3VuZGFyeVxyXG4gICAgICBsZXZlbD1cInBhZ2VcIlxyXG4gICAgICBzaG93SG9tZUJ1dHRvbj17c2hvd0hvbWVCdXR0b259XHJcbiAgICAgIG9uRXJyb3I9eyhlcnJvciwgZXJyb3JJbmZvKSA9PiB7XHJcbiAgICAgICAgLy8gTG9nIHBhZ2UtbGV2ZWwgZXJyb3JzIGZvciBtb25pdG9yaW5nXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW1BhZ2UgRXJyb3JdOicsIHtcclxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgc3RhY2s6IGVycm9yLnN0YWNrLFxyXG4gICAgICAgICAgY29tcG9uZW50U3RhY2s6IGVycm9ySW5mby5jb21wb25lbnRTdGFjayxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgdXJsOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogJ3Vua25vd24nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhlcmUgeW91IGNvdWxkIHNlbmQgdG8gZXJyb3IgcmVwb3J0aW5nIHNlcnZpY2VcclxuICAgICAgICAvLyBFeGFtcGxlOiBTZW50cnksIExvZ1JvY2tldCwgZXRjLlxyXG4gICAgICAgIC8vIGVycm9yUmVwb3J0aW5nU2VydmljZS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yLCB7IGV4dHJhOiBlcnJvckluZm8gfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUhBOzs7QUFVTyxTQUFTLGtCQUFrQixLQUEyRDtRQUEzRCxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsSUFBSSxFQUEwQixHQUEzRDtJQUNoQyxxQkFDRSw2TEFBQywrSUFBQSxDQUFBLGdCQUFhO1FBQ1osT0FBTTtRQUNOLGdCQUFnQjtRQUNoQixTQUFTLENBQUMsT0FBTztZQUNmLHVDQUF1QztZQUN2QyxRQUFRLEtBQUssQ0FBQyxpQkFBaUI7Z0JBQzdCLE9BQU8sTUFBTSxPQUFPO2dCQUNwQixPQUFPLE1BQU0sS0FBSztnQkFDbEIsZ0JBQWdCLFVBQVUsY0FBYztnQkFDeEMsV0FBVyxJQUFJLE9BQU8sV0FBVztnQkFDakMsS0FBSyx1Q0FBZ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxHQUFHO1lBQzlEO1FBRUEsaURBQWlEO1FBQ2pELG1DQUFtQztRQUNuQyx1RUFBdUU7UUFDekU7a0JBRUM7Ozs7OztBQUdQO0tBdkJnQiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzUxNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2Vycm9yL0NvbXBvbmVudEVycm9yQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vRXJyb3JCb3VuZGFyeSc7XHJcblxyXG5pbnRlcmZhY2UgQ29tcG9uZW50RXJyb3JCb3VuZGFyeVByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIGZhbGxiYWNrPzogUmVhY3ROb2RlO1xyXG4gIGNvbXBvbmVudE5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnRFcnJvckJvdW5kYXJ5KHsgXHJcbiAgY2hpbGRyZW4sIFxyXG4gIGZhbGxiYWNrLFxyXG4gIGNvbXBvbmVudE5hbWUgPSAnVW5rbm93biBDb21wb25lbnQnXHJcbn06IENvbXBvbmVudEVycm9yQm91bmRhcnlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JCb3VuZGFyeVxyXG4gICAgICBsZXZlbD1cImNvbXBvbmVudFwiXHJcbiAgICAgIGZhbGxiYWNrPXtmYWxsYmFja31cclxuICAgICAgb25FcnJvcj17KGVycm9yLCBlcnJvckluZm8pID0+IHtcclxuICAgICAgICAvLyBMb2cgY29tcG9uZW50LWxldmVsIGVycm9yc1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtDb21wb25lbnQgRXJyb3IgLSAke2NvbXBvbmVudE5hbWV9XTpgLCB7XHJcbiAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcclxuICAgICAgICAgIGNvbXBvbmVudFN0YWNrOiBlcnJvckluZm8uY29tcG9uZW50U3RhY2ssXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIGNvbXBvbmVudE5hbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ29tcG9uZW50IGVycm9ycyBhcmUgdXN1YWxseSBsZXNzIGNyaXRpY2FsXHJcbiAgICAgICAgLy8gYnV0IHN0aWxsIHdvcnRoIHRyYWNraW5nIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0FBSEE7OztBQVdPLFNBQVMsdUJBQXVCLEtBSVQ7UUFKUyxFQUNyQyxRQUFRLEVBQ1IsUUFBUSxFQUNSLGdCQUFnQixtQkFBbUIsRUFDUCxHQUpTO0lBS3JDLHFCQUNFLDZMQUFDLCtJQUFBLENBQUEsZ0JBQWE7UUFDWixPQUFNO1FBQ04sVUFBVTtRQUNWLFNBQVMsQ0FBQyxPQUFPO1lBQ2YsNkJBQTZCO1lBQzdCLFFBQVEsS0FBSyxDQUFDLEFBQUMsc0JBQW1DLE9BQWQsZUFBYyxPQUFLO2dCQUNyRCxPQUFPLE1BQU0sT0FBTztnQkFDcEIsT0FBTyxNQUFNLEtBQUs7Z0JBQ2xCLGdCQUFnQixVQUFVLGNBQWM7Z0JBQ3hDLFdBQVcsSUFBSSxPQUFPLFdBQVc7Z0JBQ2pDO1lBQ0Y7UUFFQSw2Q0FBNkM7UUFDN0MseUNBQXlDO1FBQzNDO2tCQUVDOzs7Ozs7QUFHUDtLQTFCZ0IiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDM1NTksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9lcnJvci9BcHBFcnJvckJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xyXG5cclxuaW50ZXJmYWNlIEFwcEVycm9yQm91bmRhcnlQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcEVycm9yQm91bmRhcnkoeyBjaGlsZHJlbiB9OiBBcHBFcnJvckJvdW5kYXJ5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgbGV2ZWw9XCJhcHBcIlxyXG4gICAgICBvbkVycm9yPXsoZXJyb3IsIGVycm9ySW5mbykgPT4ge1xyXG4gICAgICAgIC8vIExvZyBjcml0aWNhbCBhcHAtbGV2ZWwgZXJyb3JzXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW0NyaXRpY2FsIEFwcCBFcnJvcl06Jywge1xyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2ssXHJcbiAgICAgICAgICBjb21wb25lbnRTdGFjazogZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB1c2VyQWdlbnQ6IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICd1bmtub3duJyxcclxuICAgICAgICAgIHVybDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAndW5rbm93bidcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBDcml0aWNhbCBlcnJvcnMgc2hvdWxkIGJlIHJlcG9ydGVkIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgLy8gRXhhbXBsZTogU2VuZCB0byBlcnJvciBtb25pdG9yaW5nIHNlcnZpY2VcclxuICAgICAgICAvLyBlcnJvclJlcG9ydGluZ1NlcnZpY2UuY2FwdHVyZUV4Y2VwdGlvbihlcnJvciwge1xyXG4gICAgICAgIC8vICAgbGV2ZWw6ICdmYXRhbCcsXHJcbiAgICAgICAgLy8gICBleHRyYTogZXJyb3JJbmZvXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUhBOzs7QUFTTyxTQUFTLGlCQUFpQixLQUFtQztRQUFuQyxFQUFFLFFBQVEsRUFBeUIsR0FBbkM7SUFDL0IscUJBQ0UsNkxBQUMsK0lBQUEsQ0FBQSxnQkFBYTtRQUNaLE9BQU07UUFDTixTQUFTLENBQUMsT0FBTztZQUNmLGdDQUFnQztZQUNoQyxRQUFRLEtBQUssQ0FBQyx5QkFBeUI7Z0JBQ3JDLE9BQU8sTUFBTSxPQUFPO2dCQUNwQixPQUFPLE1BQU0sS0FBSztnQkFDbEIsZ0JBQWdCLFVBQVUsY0FBYztnQkFDeEMsV0FBVyxJQUFJLE9BQU8sV0FBVztnQkFDakMsV0FBVyxPQUFPLGNBQWMsY0FBYyxVQUFVLFNBQVMsR0FBRztnQkFDcEUsS0FBSyx1Q0FBZ0MsT0FBTyxRQUFRLENBQUMsUUFBUSxHQUFHO1lBQ2xFO1FBQ0EsaURBQWlEO1FBQ2pELDRDQUE0QztRQUM1QyxrREFBa0Q7UUFDbEQsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixNQUFNO1FBQ1I7a0JBRUM7Ozs7OztBQUdQO0tBekJnQiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzYwNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2Vycm9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xyXG5leHBvcnQgeyBQYWdlRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vUGFnZUVycm9yQm91bmRhcnknO1xyXG5leHBvcnQgeyBDb21wb25lbnRFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi9Db21wb25lbnRFcnJvckJvdW5kYXJ5JztcclxuZXhwb3J0IHsgQXBwRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vQXBwRXJyb3JCb3VuZGFyeSc7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzYzNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9hcHAvJTI4dXNlciUyOS9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBVc2VyQXV0aEd1YXJkIGZyb20gJ0AvY29tcG9uZW50cy9hdXRoL1VzZXJBdXRoR3VhcmQnO1xyXG5pbXBvcnQgeyBTaWRlTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcic7XHJcbmltcG9ydCB7IG5hdkl0ZW1zRGF0YSB9IGZyb20gJ0AvY29uc3RhbnRzL3NpZGVNZW51RGF0YSc7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxhbmd1YWdlJztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IFBhZ2VFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQC9jb21wb25lbnRzL2Vycm9yJztcclxuXHJcbmludGVyZmFjZSBVc2VyTGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMYXlvdXQoeyBjaGlsZHJlbiB9OiBVc2VyTGF5b3V0UHJvcHMpIHtcclxuICBjb25zdCBbLCByb2xlLCBpZF0gPSB1c2VQYXRobmFtZSgpLnNwbGl0KCcvJyk7XHJcbiAgY29uc3QgeyBpc1JUTCB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyTGF5b3V0IHJvbGU6Jywgcm9sZSwgJ2lkOicsIGlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE5hdkl0ZW1zID0gbmF2SXRlbXNEYXRhW3JvbGUgYXMga2V5b2YgdHlwZW9mIG5hdkl0ZW1zRGF0YV07XHJcbiAgY29uc3QgbmF2SXRlbXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBnZXROYXZJdGVtcyA/IGdldE5hdkl0ZW1zKGlkKSA6IFtdO1xyXG4gIH0sIFtnZXROYXZJdGVtcywgaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlRXJyb3JCb3VuZGFyeT5cclxuICAgICAgPFVzZXJBdXRoR3VhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgey8qIEZpeGVkIE5hdmJhciAqL31cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHQtMTZcIj5cclxuICAgICAgICAgICAgey8qIFNpZGViYXIgKi99XHJcbiAgICAgICAgICAgIDxTaWRlTWVudSBuYXZJdGVtcz17bmF2SXRlbXN9IC8+XHJcblxyXG4gICAgICAgICAgICB7LyogQ29udGVudCBBcmVhICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgXCJmbGV4LTFcIixcclxuICAgICAgICAgICAgICBpc1JUTCA/IFwibGc6bXItNzJcIiA6IFwibGc6bWwtNzJcIlxyXG4gICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhHdWFyZD5cclxuICAgIDwvUGFnZUVycm9yQm91bmRhcnk+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBbUJNOztBQWpCTjtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFWQTs7Ozs7Ozs7OztBQWdCZSxTQUFTLFdBQVcsS0FBNkI7UUFBN0IsRUFBRSxRQUFRLEVBQW1CLEdBQTdCOztJQUNqQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQSxHQUFBLHFJQUFBLENBQUEsY0FBVyxBQUFELElBQUksS0FBSyxDQUFDO0lBQ3pDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFBLEdBQUEsOEhBQUEsQ0FBQSxjQUFXLEFBQUQ7SUFDNUIsd0NBQTRDO1FBQzFDLFFBQVEsR0FBRyxDQUFDLG9CQUFvQixNQUFNLE9BQU87SUFDL0M7SUFFQSxNQUFNLGNBQWMsbUlBQUEsQ0FBQSxlQUFZLENBQUMsS0FBa0M7SUFDbkUsTUFBTSxXQUFXLENBQUEsR0FBQSw2SkFBQSxDQUFBLFVBQU8sQUFBRDt3Q0FBRTtZQUN2QixPQUFPLGNBQWMsWUFBWSxNQUFNLEVBQUU7UUFDM0M7dUNBQUc7UUFBQztRQUFhO0tBQUc7SUFFcEIscUJBQ0UsNkxBQUMsbUpBQUEsQ0FBQSxvQkFBaUI7a0JBQ2hCLGNBQUEsNkxBQUMsOElBQUEsQ0FBQSxVQUFhO3NCQUNaLGNBQUEsNkxBQUM7Z0JBQUksV0FBVTs7a0NBRWIsNkxBQUMseUlBQUEsQ0FBQSxTQUFNOzs7OztrQ0FFUCw2TEFBQzt3QkFBSSxXQUFVOzswQ0FFYiw2TEFBQywySUFBQSxDQUFBLFdBQVE7Z0NBQUMsVUFBVTs7Ozs7OzBDQUdwQiw2TEFBQztnQ0FBSSxXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLFVBQ0EsUUFBUSxhQUFhOzBDQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBbkN3Qjs7UUFDRCxxSUFBQSxDQUFBLGNBQVc7UUFDZCw4SEFBQSxDQUFBLGNBQVc7OztLQUZQIiwiZGVidWdJZCI6bnVsbH19XQp9
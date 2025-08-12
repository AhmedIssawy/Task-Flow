module.exports = {

"[project]/src/components/auth/Unauthorized.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Unauthorized
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Unauthorized() {
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCountdown((prev)=>{
                if (prev === 1) {
                    clearInterval(timer);
                    router.replace('/login');
                }
                return prev - 1;
            });
        }, 1000);
        return ()=>clearInterval(timer);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-col items-center justify-center text-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold text-destructive",
                children: "Unauthorized"
            }, void 0, false, {
                fileName: "[project]/src/components/auth/Unauthorized.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-muted-foreground",
                children: "You don’t have access to this page."
            }, void 0, false, {
                fileName: "[project]/src/components/auth/Unauthorized.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm",
                children: [
                    "Redirecting to login in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-ssr] (ecmascript)");
;
const useAuth = ()=>{
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetMeQuery"])();
    return {
        user: data?.data,
        isLoading,
        isError,
        isLoggedIn: !!data,
        role: data?.data?.role,
        id: data?.data?.id,
        mongoId: data?.data?._id
    };
};
}),
"[project]/src/components/auth/UserAuthGuard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>UserAuthGuard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/Unauthorized.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
// Loading spinner component
function AuthLoadingSpinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function UserAuthGuard({ children, requiredRole, fallback }) {
    const { role, isLoggedIn, isLoading, isError, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // Show loading state while checking authentication
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthLoadingSpinner, {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    // Check for authentication errors
    if (isError) {
        console.warn('[UserAuthGuard] Authentication error detected');
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 50,
            columnNumber: 24
        }, this);
    }
    // Check for specific role requirement
    if (requiredRole && role !== requiredRole) {
        console.warn(`[UserAuthGuard] Role mismatch. Required: ${requiredRole}, Current: ${role}`);
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$Unauthorized$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/UserAuthGuard.tsx",
            lineNumber: 56,
            columnNumber: 24
        }, this);
    }
    // All checks passed, render children
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
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
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
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
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/store/hooks.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useAppDispatch": ()=>useAppDispatch,
    "useAppSelector": ()=>useAppSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"];
}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
        const { cookies } = await __turbopack_context__.r("[project]/node_modules/next/headers.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
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
"[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useLanguage() {
    const [currentLocale, setCurrentLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentLocale"])());
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Available locales with enhanced information
    const availableLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupportedLocales"])().map((code)=>({
            code,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeInfo"][code].name,
            dir: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeInfo"][code].direction,
            flag: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeInfo"][code].flag
        }));
    const currentLocaleInfo = availableLocales.find((l)=>l.code === currentLocale);
    // Listen for locale changes from other components or tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleLocaleChange = (event)=>{
            setCurrentLocale(event.detail.locale);
        };
        window.addEventListener('localeChange', handleLocaleChange);
        return ()=>{
            window.removeEventListener('localeChange', handleLocaleChange);
        };
    }, []);
    // 🔥 OPTIMIZED: Replace polling with event-driven cross-tab sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Handle storage events for cross-tab synchronization
        const handleStorageChange = (event)=>{
            if (event.key === 'locale-sync' && event.newValue) {
                const newLocale = event.newValue;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLocale"])(newLocale) && newLocale !== currentLocale) {
                    setCurrentLocale(newLocale);
                }
            }
        };
        // Handle focus events to check for external cookie changes
        const handleFocus = ()=>{
            const cookieLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentLocale"])();
            if (cookieLocale !== currentLocale) {
                setCurrentLocale(cookieLocale);
            }
        };
        // Handle visibility change for better performance
        const handleVisibilityChange = ()=>{
            if (!document.hidden) {
                const cookieLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentLocale"])();
                if (cookieLocale !== currentLocale) {
                    setCurrentLocale(cookieLocale);
                }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('focus', handleFocus);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return ()=>{
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focus', handleFocus);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [
        currentLocale
    ]);
    const switchLanguage = (newLocale)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLocale"])(newLocale) || newLocale === currentLocale) return;
        startTransition(()=>{
            // Use the centralized setLocale function which handles:
            // - Cookie setting
            // - HTML attribute updates
            // - Event dispatching for component updates
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLocale"])(newLocale);
            // 🔥 NEW: Trigger cross-tab sync via localStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
}),
"[project]/src/components/auth/LogoutBtn.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LogoutButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
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
function LogoutButton() {
    const [logout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLogoutMutation"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('auth.logout');
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const handleLogout = async ()=>{
        try {
            await logout().unwrap();
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].util.resetApiState());
        } catch (err) {
            console.error('Logout failed:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t('error'));
        } finally{
            router.push('/login'); // Redirect to login
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t('success'));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full", isRTL ? "flex flex-row-reverse justify-end" : "flex flex-row justify-start"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleLogout,
            variant: "ghost",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-auto p-2 hover:bg-destructive/10 text-destructive", isRTL ? "justify-end" : "justify-start"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 w-full", isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 shrink-0", isRTL ? "ml-2" : "mr-2")
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LogoutBtn.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/ui/theme-toggle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ThemeToggle": ()=>ThemeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ThemeToggle() {
    const { setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "relative hover:bg-accent transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 theme-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/theme-toggle.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 theme-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/theme-toggle.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[140px] dropdown-content-enhanced",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme('light'),
                        className: `flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${theme === 'light' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme('dark'),
                        className: `flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme('system'),
                        className: `flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 ${theme === 'system' ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/theme-toggle.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/made/language-switcher.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LanguageSwitcher": ()=>LanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Flag icons as components with enhanced styling
const FlagIcon = ({ country, className = "w-4 h-4" })=>{
    const flag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocaleFlag"])(country);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${className} flex items-center justify-center text-lg leading-none transition-transform duration-200 hover:scale-110`,
        children: flag
    }, void 0, false, {
        fileName: "[project]/src/components/made/language-switcher.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function LanguageSwitcher() {
    const { switchLanguage, availableLocales, currentLocaleInfo, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const handleLanguageSwitch = (localeCode)=>{
        // Prevent switching to the same language
        if (localeCode === currentLocaleInfo?.code) return;
        // Call the switch function which now handles cookie-based switching
        switchLanguage(localeCode);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    disabled: isPending,
                    className: `h-9 px-3 bg-background hover:bg-accent border-border hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`,
                    "aria-label": `Current language: ${currentLocaleInfo?.name}. Click to change language.`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagIcon, {
                            country: currentLocaleInfo?.code || 'en',
                            className: `w-4 h-4 mr-2 flag-icon ${isPending ? 'animate-pulse' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/made/language-switcher.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: currentLocaleInfo?.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/made/language-switcher.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl min-w-[160px] p-1 dropdown-content-enhanced",
                sideOffset: 4,
                children: availableLocales.map((locale)=>{
                    const isCurrentLocale = currentLocaleInfo?.code === locale.code;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>handleLanguageSwitch(locale.code),
                        disabled: isPending || isCurrentLocale,
                        className: `flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${isCurrentLocale ? 'bg-primary/10 text-primary cursor-default' : isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent hover:text-accent-foreground active:bg-accent/80'}`,
                        "aria-label": `Switch to ${locale.name}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagIcon, {
                                country: locale.code,
                                className: `w-4 h-4 flag-icon ${isPending && !isCurrentLocale ? 'opacity-50' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/made/language-switcher.tsx",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium flex-1",
                                children: locale.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/made/language-switcher.tsx",
                                lineNumber: 86,
                                columnNumber: 29
                            }, this),
                            isCurrentLocale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
}),
"[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Avatar": ()=>Avatar,
    "AvatarFallback": ()=>AvatarFallback,
    "AvatarImage": ()=>AvatarImage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/user/UserAvatar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>UserAvatar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
;
;
function UserAvatar({ name, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
        className: "h-10 w-10 ring-2 ring-primary/20 rounded-2xl cursor-pointer",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
            className: "bg-primary text-primary-foreground font-medium rounded-2xl font-primary",
            children: name?.split(' ').map((name)=>name[0]).join('')
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
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Badge": ()=>Badge,
    "badgeVariants": ()=>badgeVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Popover": ()=>Popover,
    "PopoverAnchor": ()=>PopoverAnchor,
    "PopoverContent": ()=>PopoverContent,
    "PopoverTrigger": ()=>PopoverTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
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
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/src/components/dashboard/UnifiedNotificationPopup.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "UnifiedNotificationPopup": ()=>UnifiedNotificationPopup
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
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
const getNotificationIcon = (type)=>{
    const iconMap = {
        assignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        grade: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        event: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        system: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        reminder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
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
        return isRTL ? `${t('popup.timeAgo.prefix')} ${minutes} ${t('popup.timeAgo.minutes')}` : `${minutes}${t('popup.timeAgo.minutes')}`;
    } else if (diffInHours < 24) {
        const hours = Math.floor(diffInHours);
        return isRTL ? `${t('popup.timeAgo.prefix')} ${hours} ${t('popup.timeAgo.hours')}` : `${hours}${t('popup.timeAgo.hours')}`;
    } else {
        const days = Math.floor(diffInHours / 24);
        return isRTL ? `${t('popup.timeAgo.prefix')} ${days} ${t('popup.timeAgo.days')}` : `${days}${t('popup.timeAgo.days')}`;
    }
};
function UnifiedNotificationPopup() {
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('notifications');
    // TODO: Replace with actual API call - using translations for static data now
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
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
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
        open: isOpen,
        onOpenChange: setIsOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "relative text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 group",
                    title: t('popup.title'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute h-5 w-5 p-0 text-xs bg-destructive hover:bg-destructive/90 rounded-full', 'flex items-center justify-center font-medium animate-pulse shadow-lg', 'border-2 border-background', isRTL ? '-top-1 -left-1' : '-top-1 -right-1'),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-80 max-w-[calc(100vw-1rem)] bg-background/95 backdrop-blur-xl border border-border/40', 'rounded-2xl shadow-2xl p-0 overflow-hidden', 'data-[state=open]:animate-in data-[state=closed]:animate-out', 'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', 'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95', 'data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1', 'transform-gpu'),
                align: isRTL ? 'start' : 'end',
                sideOffset: 12,
                dir: isRTL ? 'rtl' : 'ltr',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden border-b border-border/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-secondary/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-between', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative p-2.5 rounded-xl bg-primary/15 backdrop-blur-sm border border-primary/25 shadow-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-base font-semibold text-foreground font-primary', isRTL ? 'text-right' : 'text-left'),
                                                            children: t('popup.title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground mt-0.5 font-medium', isRTL ? 'text-right' : 'text-left'),
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
                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: markAllAsRead,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs text-primary hover:bg-primary/15 rounded-lg h-7 px-3', 'font-medium transition-all duration-300 hover:scale-105 active:scale-95', 'shadow-sm hover:shadow-md'),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-80 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-br from-muted/20 to-muted/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm font-medium mb-1",
                                        children: t('popup.noNotifications')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 space-y-1 animate-fade-in",
                                children: notifications.map((notification, index)=>{
                                    const Icon = getNotificationIcon(notification.type);
                                    const colors = getNotificationColors(notification.type);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group relative p-3 mx-1 rounded-xl transition-all duration-300 cursor-pointer', 'hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transform-gpu', 'border backdrop-blur-sm scroll-mb-2', !notification.isRead && [
                                            colors.bg,
                                            colors.border,
                                            colors.shadow,
                                            'shadow-md hover:shadow-lg'
                                        ], notification.isRead && [
                                            'bg-muted/20 border-border/30 hover:bg-muted/40 hover:border-border/50',
                                            'hover:shadow-md'
                                        ], 'animate-slide-in-fade opacity-0'),
                                        style: {
                                            animationDelay: `${index * 100}ms`,
                                            animationFillMode: 'forwards'
                                        },
                                        onClick: ()=>{
                                            markAsRead(notification.id);
                                            if (notification.actionUrl) {
                                                console.log('Navigate to:', notification.actionUrl);
                                            }
                                        },
                                        children: [
                                            !notification.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute w-2.5 h-2.5 bg-primary rounded-full shadow-sm', 'animate-pulse-glow border border-primary/30', isRTL ? 'left-2 bottom-3' : 'right-2 bottom-3')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                lineNumber: 365,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-300', 'hover:bg-destructive/20 hover:text-destructive rounded-lg backdrop-blur-sm', 'shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95', isRTL ? 'left-1 top-1' : 'right-1 top-1'),
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    dismissNotification(notification.id);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex gap-3', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-start justify-between gap-2 mb-2', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold text-foreground line-clamp-1 font-primary leading-tight', 'transition-colors duration-200 group-hover:text-primary', isRTL ? 'text-right' : 'text-left'),
                                                                    children: notification.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground shrink-0 font-medium px-2 py-1', 'bg-muted/30 rounded-md backdrop-blur-sm', isRTL ? 'text-left' : 'text-right'),
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3', 'transition-colors duration-200 group-hover:text-foreground/80', isRTL ? 'text-right' : 'text-left'),
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 flex-wrap', isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'),
                                                            children: [
                                                                notification.priority === 'high' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "destructive",
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs py-1 px-2.5 h-6 rounded-lg font-medium shadow-sm', 'animate-pulse-glow border border-destructive/30'),
                                                                    children: t('popup.priority.high')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UnifiedNotificationPopup.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs py-1 px-2.5 h-6 rounded-lg font-medium capitalize', 'backdrop-blur-sm shadow-sm transition-all duration-200', 'hover:shadow-md hover:scale-105', colors.border, colors.iconColor),
                                                                    children: t(`popup.types.${notification.type}`)
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
                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border/20 p-3 bg-gradient-to-r from-muted/20 via-background/60 to-muted/20 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full text-sm rounded-xl h-9 font-medium backdrop-blur-sm', 'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]', 'hover:bg-primary/10 hover:border-primary/40 hover:text-primary', 'shadow-sm hover:shadow-md'),
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
}),
"[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Navbar": ()=>Navbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LogoutBtn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/LogoutBtn.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/theme-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/made/language-switcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$UserAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user/UserAvatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$UnifiedNotificationPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/UnifiedNotificationPopup.tsx [app-ssr] (ecmascript)");
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
function Navbar() {
    const { name, email } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])().user;
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('navbar');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-xl w-full', isRTL ? 'direction-rtl' : 'direction-ltr'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center h-16 w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 absolute', isRTL ? 'right-0' : 'left-0'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-2xl bg-primary shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xl font-bold text-foreground font-primary', isRTL ? 'text-right' : 'text-left'),
                                        children: t('brand')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground', isRTL ? 'text-right' : 'text-left'),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 absolute flex-row', isRTL ? 'left-0 ' : 'right-0 '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$UnifiedNotificationPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnifiedNotificationPopup"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: "relative h-10 w-10 rounded-2xl hover:bg-primary/10 transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$UserAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        className: "w-56 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl",
                                        align: isRTL ? 'start' : 'end',
                                        forceMount: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                className: "font-normal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1', isRTL ? 'items-end' : 'items-start'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium leading-none text-foreground font-primary', isRTL ? 'text-right' : 'text-left'),
                                                            children: name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs leading-none text-muted-foreground', isRTL ? 'text-right' : 'text-left'),
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                className: "bg-border/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:bg-primary/10 rounded-xl transition-all duration-200 cursor-pointer', isRTL ? 'flex-row-reverse' : 'flex-row'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                className: "bg-border/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "hover:bg-destructive/10 text-destructive rounded-xl transition-all duration-200 cursor-pointer p-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LogoutBtn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
"[project]/src/components/layout/StudentLayout/StudentLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "StudentLayout": ()=>StudentLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function StudentLayout({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/StudentLayout/StudentLayout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('lg:ml-64 pt-16 min-h-screen overflow-y-auto', 'scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent', 'dark:scrollbar-thumb-blue-800', className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 sm:p-6 lg:p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScrollArea": ()=>ScrollArea,
    "ScrollBar": ()=>ScrollBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
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
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
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
;
}),
"[project]/src/components/layout/SideMenu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SideMenu": ()=>SideMenu,
    "SideNavContent": ()=>SideNavContent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
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
function SideNavContent({ navItems, onItemClick }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full flex-col bg-background/80 backdrop-blur-md border-border/50", isRTL ? "border-l" : "border-r"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "flex-1 px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-3",
                children: navItems.map(({ labelKey, href, icon: Icon, badge })=>{
                    const isActive = pathname.endsWith(href);
                    const translatedLabel = t(labelKey);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        onClick: onItemClick,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]', isActive ? 'bg-primary text-primary-foreground shadow-lg border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-md hover:border hover:border-primary/20 border border-transparent', isRTL ? 'flex-row-reverse' : 'flex-row'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-4", isRTL ? "flex-row-reverse" : "flex-row"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 rounded-xl transition-all duration-300', isActive ? 'bg-primary-foreground/20 shadow-sm' : 'group-hover:bg-primary/20 group-hover:shadow-sm'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-5 w-5 transition-all duration-300', isActive ? 'text-primary-foreground' : 'text-current group-hover:text-primary group-hover:scale-110')
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium tracking-wide leading-relaxed font-primary", isRTL ? "text-right" : "text-left"),
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
                            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: isActive ? 'secondary' : 'outline',
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs px-3 py-1 font-semibold transition-all duration-300 rounded-xl shadow-sm', isActive ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 group-hover:scale-105'),
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
function SideMenu({ navItems, onItemClick }) {
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const MemoizedSideNavContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(SideNavContent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-16 h-[calc(100vh-4rem)] w-72 z-40 hidden lg:flex bg-background/80 backdrop-blur-md border-border/50 shadow-xl", isRTL ? "right-0 border-l rounded-l-2xl" : "left-0 border-r rounded-r-2xl"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoizedSideNavContent, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsSidebarOpen(true),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("lg:hidden fixed bottom-8 z-50 bg-background border border-border p-2 rounded-xl shadow-lg transition-all duration-200 hover:bg-primary/10", isRTL ? "right-4" : "left-4"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 h-full w-72 z-50 bg-background/90 backdrop-blur-md border-border/50 shadow-xl transition-transform duration-300 lg:hidden', isRTL ? 'right-0 border-l rounded-l-2xl' : 'left-0 border-r rounded-r-2xl', isSidebarOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex p-4", isRTL ? "justify-start" : "justify-end"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsSidebarOpen(false),
                            className: "p-2 rounded-xl hover:bg-primary/10 transition-all duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoizedSideNavContent, {
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
            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/layout/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$StudentLayout$2f$StudentLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/StudentLayout/StudentLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SideMenu.tsx [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/components/layout/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$StudentLayout$2f$StudentLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/StudentLayout/StudentLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SideMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-ssr] (ecmascript) <locals>");
}),
"[project]/src/constants/sideMenuData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "navItemsData": ()=>navItemsData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
;
const navItemsData = {
    student: (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: `/student/${id}`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.courses',
                href: `/student/${id}/courses`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.assignments',
                href: `/student/${id}/assignment`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.grades',
                href: `/student/${id}/grades`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.calendar',
                href: `/student/${id}/calendar`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                badge: ''
            },
            {
                labelKey: 'sidebar.sections',
                href: `/student/${id}/sections`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: ''
            },
            {
                labelKey: 'sidebar.settings',
                href: `/student/${id}/settings`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ],
    teacher: (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: `/teacher/${id}`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.courses',
                href: `/teacher/${id}/courses`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.assignments',
                href: `/teacher/${id}/assignments`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.sections',
                href: `/teacher/${id}/sections`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: ''
            },
            {
                labelKey: 'sidebar.settings',
                href: `/teacher/${id}/settings`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ],
    admin: (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: `/admin/${id}`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.colleges',
                href: `/admin/${id}/colleges`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.departments',
                href: `/admin/${id}/departments`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.courses',
                href: `/admin/${id}/courses`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.teachers',
                href: `/admin/${id}/teachers`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.settings',
                href: `/admin/${id}/settings`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ],
    'super-admin': (id)=>[
            {
                labelKey: 'sidebar.dashboard',
                href: `/super-admin/${id}`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                badge: ''
            },
            {
                labelKey: 'sidebar.university',
                href: `/super-admin/${id}/university`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.colleges',
                href: `/super-admin/${id}/colleges`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.departments',
                href: `/super-admin/${id}/departments`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.courses',
                href: `/super-admin/${id}/courses`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                badge: '5'
            },
            {
                labelKey: 'sidebar.teachers',
                href: `/super-admin/${id}/teachers`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
                badge: '3'
            },
            {
                labelKey: 'sidebar.students',
                href: `/super-admin/${id}/students`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                badge: 'New'
            },
            {
                labelKey: 'sidebar.settings',
                href: `/super-admin/${id}/settings`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                badge: ''
            }
        ]
};
}),
"[project]/src/components/error/ErrorBoundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ErrorBoundary": ()=>ErrorBoundary,
    "ErrorBoundaryWithRouter": ()=>ErrorBoundaryWithRouter,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
'use client';
;
;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorInfo: undefined
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error(`[${this.props.level || 'Unknown'} Error Boundary]:`, error);
        console.error('Error Info:', errorInfo);
        // Call custom error handler if provided
        this.props.onError?.(error, errorInfo);
        // Store error info for debugging
        this.setState({
            errorInfo
        });
    }
    handleRetry = ()=>{
        this.setState({
            hasError: false,
            error: undefined,
            errorInfo: undefined
        });
    };
    handleRefresh = ()=>{
        window.location.reload();
    };
    handleGoHome = ()=>{
        if (this.props.onNavigateHome) {
            this.props.onNavigateHome();
        } else {
            // Fallback to window.location if no navigation handler is provided
            window.location.href = '/';
        }
    };
    render() {
        if (this.state.hasError) {
            // Use custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default error UI based on level
            const { level = 'component' } = this.props;
            if (level === 'app') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-screen flex flex-col items-center justify-center p-8 bg-background",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-20 w-20 text-destructive mx-auto mb-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-4",
                                children: "Application Error"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: "The application encountered a critical error. Please refresh the page or contact support if the problem persists."
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: this.handleRefresh,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: this.handleGoHome,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
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
                            ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "mt-6 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground",
                                        children: "Error Details (Development)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto",
                                        children: [
                                            this.state.error.toString(),
                                            this.state.errorInfo?.componentStack
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center min-h-[60vh] p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-16 w-16 text-destructive mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold mb-2",
                            children: "Page Error"
                        }, void 0, false, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-4 text-center max-w-md",
                            children: "This page encountered an error. You can try refreshing or go back to the previous page."
                        }, void 0, false, {
                            fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: this.handleRetry,
                                    variant: "outline",
                                    children: "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: this.handleRefresh,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
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
                                this.props.showHomeButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: this.handleGoHome,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border border-destructive/20 rounded-lg bg-destructive/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 text-destructive"
                            }, void 0, false, {
                                fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mb-3",
                        children: "This component failed to load properly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
}
function ErrorBoundaryWithRouter(props) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleNavigateHome = ()=>{
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        ...props,
        onNavigateHome: handleNavigateHome
    }, void 0, false, {
        fileName: "[project]/src/components/error/ErrorBoundary.tsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = ErrorBoundaryWithRouter;
}),
"[project]/src/components/error/PageErrorBoundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PageErrorBoundary": ()=>PageErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function PageErrorBoundary({ children, showHomeButton = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        level: "page",
        showHomeButton: showHomeButton,
        onError: (error, errorInfo)=>{
            // Log page-level errors for monitoring
            console.error('[Page Error]:', {
                error: error.message,
                stack: error.stack,
                componentStack: errorInfo.componentStack,
                timestamp: new Date().toISOString(),
                url: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'unknown'
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
}),
"[project]/src/components/error/ComponentErrorBoundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ComponentErrorBoundary": ()=>ComponentErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function ComponentErrorBoundary({ children, fallback, componentName = 'Unknown Component' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        level: "component",
        fallback: fallback,
        onError: (error, errorInfo)=>{
            // Log component-level errors
            console.error(`[Component Error - ${componentName}]:`, {
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
}),
"[project]/src/components/error/AppErrorBoundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AppErrorBoundary": ()=>AppErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function AppErrorBoundary({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        level: "app",
        onError: (error, errorInfo)=>{
            // Log critical app-level errors
            console.error('[Critical App Error]:', {
                error: error.message,
                stack: error.stack,
                componentStack: errorInfo.componentStack,
                timestamp: new Date().toISOString(),
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
                url: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'unknown'
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
}),
"[project]/src/components/error/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/PageErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ComponentErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ComponentErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$AppErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/AppErrorBoundary.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/components/error/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/PageErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ComponentErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ComponentErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$AppErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/AppErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/error/index.ts [app-ssr] (ecmascript) <locals>");
}),
"[project]/src/app/(user)/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>UserLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$UserAuthGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/UserAuthGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SideMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$sideMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/sideMenuData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/error/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/PageErrorBoundary.tsx [app-ssr] (ecmascript)");
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
function UserLayout({ children }) {
    const [, role, id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])().split('/');
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('UserLayout role:', role, 'id:', id);
    }
    const getNavItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$sideMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItemsData"][role];
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return getNavItems ? getNavItems(id) : [];
    }, [
        getNavItems,
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$PageErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$UserAuthGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                        fileName: "[project]/src/app/(user)/layout.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex pt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SideMenu"], {
                                navItems: navItems
                            }, void 0, false, {
                                fileName: "[project]/src/app/(user)/layout.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1", isRTL ? "lg:mr-72" : "lg:ml-72"),
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
}),

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2F1dGgvVW5hdXRob3JpemVkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVW5hdXRob3JpemVkKCkge1xyXG4gIGNvbnN0IFtjb3VudGRvd24sIHNldENvdW50ZG93bl0gPSB1c2VTdGF0ZSg0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRDb3VudGRvd24oKHByZXYpID0+IHtcclxuICAgICAgICBpZiAocHJldiA9PT0gMSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2IC0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBweC00XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtZGVzdHJ1Y3RpdmVcIj5VbmF1dGhvcml6ZWQ8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgIFlvdSBkb27igJl0IGhhdmUgYWNjZXNzIHRvIHRoaXMgcGFnZS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc21cIj5cclxuICAgICAgICBSZWRpcmVjdGluZyB0byBsb2dpbiBpbiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntjb3VudGRvd259PC9zcGFuPiBzZWNvbmRzLi4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBO0FBSEE7Ozs7QUFLZSxTQUFTO0lBQ3RCLE1BQU0sQ0FBQyxXQUFXLGFBQWEsR0FBRyxDQUFBLEdBQUEscU1BQUEsQ0FBQSxXQUFRLEFBQUQsRUFBRTtJQUMzQyxNQUFNLFNBQVMsQ0FBQSxHQUFBLGtJQUFBLENBQUEsWUFBUyxBQUFEO0lBRXZCLENBQUEsR0FBQSxxTUFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO1FBQ1IsTUFBTSxRQUFRLFlBQVk7WUFDeEIsYUFBYSxDQUFDO2dCQUNaLElBQUksU0FBUyxHQUFHO29CQUNkLGNBQWM7b0JBQ2QsT0FBTyxPQUFPLENBQUM7Z0JBQ2pCO2dCQUNBLE9BQU8sT0FBTztZQUNoQjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU0sY0FBYztJQUM3QixHQUFHO1FBQUM7S0FBTztJQUVYLHFCQUNFLDhPQUFDO1FBQUksV0FBVTs7MEJBQ2IsOE9BQUM7Z0JBQUcsV0FBVTswQkFBMEM7Ozs7OzswQkFDeEQsOE9BQUM7Z0JBQUUsV0FBVTswQkFBNkI7Ozs7OzswQkFHMUMsOE9BQUM7Z0JBQUUsV0FBVTs7b0JBQWU7a0NBQ0YsOE9BQUM7d0JBQUssV0FBVTtrQ0FBZTs7Ozs7O29CQUFpQjs7Ozs7Ozs7Ozs7OztBQUloRiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvaG9va3MvdXNlQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHZXRNZVF1ZXJ5IH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9hdXRoQXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VHZXRNZVF1ZXJ5KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBkYXRhPy5kYXRhLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaXNFcnJvcixcclxuICAgIGlzTG9nZ2VkSW46ICEhZGF0YSxcclxuICAgIHJvbGU6IGRhdGE/LmRhdGE/LnJvbGUsXHJcbiAgICBpZDogZGF0YT8uZGF0YT8uaWQsXHJcbiAgICBtb25nb0lkOiBkYXRhPy5kYXRhPy5faWQsXHJcbiAgfTtcclxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRU8sTUFBTSxVQUFVO0lBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUEsR0FBQSxtSUFBQSxDQUFBLGdCQUFhLEFBQUQ7SUFFakQsT0FBTztRQUNMLE1BQU0sTUFBTTtRQUNaO1FBQ0E7UUFDQSxZQUFZLENBQUMsQ0FBQztRQUNkLE1BQU0sTUFBTSxNQUFNO1FBQ2xCLElBQUksTUFBTSxNQUFNO1FBQ2hCLFNBQVMsTUFBTSxNQUFNO0lBQ3ZCO0FBQ0YiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDEwMiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2F1dGgvVXNlckF1dGhHdWFyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVW5hdXRob3JpemVkIGZyb20gJ0AvY29tcG9uZW50cy9hdXRoL1VuYXV0aG9yaXplZCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2hvb2tzL3VzZUF1dGgnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJBdXRoR3VhcmRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICByZXF1aXJlZFJvbGU/OiBzdHJpbmc7XHJcbiAgZmFsbGJhY2s/OiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbi8vIExvYWRpbmcgc3Bpbm5lciBjb21wb25lbnRcclxuZnVuY3Rpb24gQXV0aExvYWRpbmdTcGlubmVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtOCB3LTggYm9yZGVyLWItMiBib3JkZXItcHJpbWFyeVwiPjwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VmVyaWZ5aW5nIGF1dGhlbnRpY2F0aW9uLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdXRoR3VhcmQoeyBcclxuICBjaGlsZHJlbiwgXHJcbiAgcmVxdWlyZWRSb2xlLFxyXG4gIGZhbGxiYWNrIFxyXG59OiBVc2VyQXV0aEd1YXJkUHJvcHMpIHtcclxuICBjb25zdCB7IHJvbGUsIGlzTG9nZ2VkSW4sIGlzTG9hZGluZywgaXNFcnJvciwgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICAvLyBTaG93IGxvYWRpbmcgc3RhdGUgd2hpbGUgY2hlY2tpbmcgYXV0aGVudGljYXRpb25cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPEF1dGhMb2FkaW5nU3Bpbm5lciAvPjtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGZvciBhdXRoZW50aWNhdGlvbiBlcnJvcnNcclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgY29uc29sZS53YXJuKCdbVXNlckF1dGhHdWFyZF0gQXV0aGVudGljYXRpb24gZXJyb3IgZGV0ZWN0ZWQnKTtcclxuICAgIHJldHVybiBmYWxsYmFjayB8fCA8VW5hdXRob3JpemVkIC8+O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW4gYW5kIGhhcyB2YWxpZCBkYXRhXHJcbiAgaWYgKCFpc0xvZ2dlZEluIHx8ICF1c2VyIHx8ICFyb2xlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1tVc2VyQXV0aEd1YXJkXSBBdXRoZW50aWNhdGlvbiBmYWlsZWQ6Jywge1xyXG4gICAgICBpc0xvZ2dlZEluLFxyXG4gICAgICBoYXNVc2VyOiAhIXVzZXIsXHJcbiAgICAgIGhhc1JvbGU6ICEhcm9sZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsbGJhY2sgfHwgPFVuYXV0aG9yaXplZCAvPjtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGZvciBzcGVjaWZpYyByb2xlIHJlcXVpcmVtZW50XHJcbiAgaWYgKHJlcXVpcmVkUm9sZSAmJiByb2xlICE9PSByZXF1aXJlZFJvbGUpIHtcclxuICAgIGNvbnNvbGUud2FybihgW1VzZXJBdXRoR3VhcmRdIFJvbGUgbWlzbWF0Y2guIFJlcXVpcmVkOiAke3JlcXVpcmVkUm9sZX0sIEN1cnJlbnQ6ICR7cm9sZX1gKTtcclxuICAgIHJldHVybiBmYWxsYmFjayB8fCA8VW5hdXRob3JpemVkIC8+O1xyXG4gIH1cclxuXHJcbiAgLy8gQWxsIGNoZWNrcyBwYXNzZWQsIHJlbmRlciBjaGlsZHJlblxyXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0FBQ0E7QUFKQTs7OztBQVlBLDRCQUE0QjtBQUM1QixTQUFTO0lBQ1AscUJBQ0UsOE9BQUM7UUFBSSxXQUFVO2tCQUNiLGNBQUEsOE9BQUM7WUFBSSxXQUFVOzs4QkFDYiw4T0FBQztvQkFBSSxXQUFVOzs7Ozs7OEJBQ2YsOE9BQUM7b0JBQUUsV0FBVTs4QkFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJEO0FBRWUsU0FBUyxjQUFjLEVBQ3BDLFFBQVEsRUFDUixZQUFZLEVBQ1osUUFBUSxFQUNXO0lBQ25CLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQSxHQUFBLHVIQUFBLENBQUEsVUFBTyxBQUFEO0lBRTdELG1EQUFtRDtJQUNuRCxJQUFJLFdBQVc7UUFDYixxQkFBTyw4T0FBQzs7Ozs7SUFDVjtJQUVBLGtDQUFrQztJQUNsQyxJQUFJLFNBQVM7UUFDWCxRQUFRLElBQUksQ0FBQztRQUNiLE9BQU8sMEJBQVksOE9BQUMsMElBQUEsQ0FBQSxVQUFZOzs7OztJQUNsQztJQUVBLGdEQUFnRDtJQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBQ2pDLFFBQVEsSUFBSSxDQUFDLDBDQUEwQztZQUNyRDtZQUNBLFNBQVMsQ0FBQyxDQUFDO1lBQ1gsU0FBUyxDQUFDLENBQUM7UUFDYjtRQUNBLE9BQU8sMEJBQVksOE9BQUMsMElBQUEsQ0FBQSxVQUFZOzs7OztJQUNsQztJQUVBLHNDQUFzQztJQUN0QyxJQUFJLGdCQUFnQixTQUFTLGNBQWM7UUFDekMsUUFBUSxJQUFJLENBQUMsQ0FBQyx5Q0FBeUMsRUFBRSxhQUFhLFdBQVcsRUFBRSxNQUFNO1FBQ3pGLE9BQU8sMEJBQVksOE9BQUMsMElBQUEsQ0FBQSxVQUFZOzs7OztJQUNsQztJQUVBLHFDQUFxQztJQUNyQyxxQkFBTztrQkFBRzs7QUFDWiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTk2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2xpYi91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbHN4LCB0eXBlIENsYXNzVmFsdWUgfSBmcm9tIFwiY2xzeFwiXHJcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XHJcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOzs7QUFFTyxTQUFTLEdBQUcsR0FBRyxNQUFvQjtJQUN4QyxPQUFPLENBQUEsR0FBQSwySkFBQSxDQUFBLFVBQU8sQUFBRCxFQUFFLENBQUEsR0FBQSxxSUFBQSxDQUFBLE9BQUksQUFBRCxFQUFFO0FBQ3RCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyMTAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIlxyXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcclxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgc2hyaW5rLTAgWyZfc3ZnXTpzaHJpbmstMCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlXCIsXHJcbiAge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDoge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LXhzIGhvdmVyOmJnLXByaW1hcnkvOTBcIixcclxuICAgICAgICBkZXN0cnVjdGl2ZTpcclxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC13aGl0ZSBzaGFkb3cteHMgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIGRhcms6YmctZGVzdHJ1Y3RpdmUvNjBcIixcclxuICAgICAgICBvdXRsaW5lOlxyXG4gICAgICAgICAgXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OlxyXG4gICAgICAgICAgXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6Ymctc2Vjb25kYXJ5LzgwXCIsXHJcbiAgICAgICAgZ2hvc3Q6XHJcbiAgICAgICAgICBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhcms6aG92ZXI6YmctYWNjZW50LzUwXCIsXHJcbiAgICAgICAgbGluazogXCJ0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtNCBweS0yIGhhcy1bPnN2Z106cHgtM1wiLFxyXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxyXG4gICAgICAgIGxnOiBcImgtMTAgcm91bmRlZC1tZCBweC02IGhhcy1bPnN2Z106cHgtNFwiLFxyXG4gICAgICAgIGljb246IFwic2l6ZS05XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgIH0sXHJcbiAgfVxyXG4pXHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICB2YXJpYW50LFxyXG4gIHNpemUsXHJcbiAgYXNDaGlsZCA9IGZhbHNlLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICZcclxuICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiAmIHtcclxuICAgIGFzQ2hpbGQ/OiBib29sZWFuXHJcbiAgfSkge1xyXG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wXHJcbiAgICAgIGRhdGEtc2xvdD1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxNQUFNLGlCQUFpQixDQUFBLEdBQUEsZ0tBQUEsQ0FBQSxNQUFHLEFBQUQsRUFDdkIsOGNBQ0E7SUFDRSxVQUFVO1FBQ1IsU0FBUztZQUNQLFNBQ0U7WUFDRixhQUNFO1lBQ0YsU0FDRTtZQUNGLFdBQ0U7WUFDRixPQUNFO1lBQ0YsTUFBTTtRQUNSO1FBQ0EsTUFBTTtZQUNKLFNBQVM7WUFDVCxJQUFJO1lBQ0osSUFBSTtZQUNKLE1BQU07UUFDUjtJQUNGO0lBQ0EsaUJBQWlCO1FBQ2YsU0FBUztRQUNULE1BQU07SUFDUjtBQUNGO0FBR0YsU0FBUyxPQUFPLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osVUFBVSxLQUFLLEVBQ2YsR0FBRyxPQUlGO0lBQ0QsTUFBTSxPQUFPLFVBQVUsZ0tBQUEsQ0FBQSxPQUFJLEdBQUc7SUFFOUIscUJBQ0UsOE9BQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxlQUFlO1lBQUU7WUFBUztZQUFNO1FBQVU7UUFDdkQsR0FBRyxLQUFLOzs7Ozs7QUFHZiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjY1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIERyb3Bkb3duTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIlxyXG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25SaWdodEljb24sIENpcmNsZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudVwiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UG9ydGFsKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWwgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1wb3J0YWxcIiB7Li4ucHJvcHN9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVUcmlnZ2VyKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlRyaWdnZXI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuVHJpZ2dlclxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXRyaWdnZXJcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHNpZGVPZmZzZXQgPSA0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY29udGVudFwiXHJcbiAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiB6LTUwIG1heC1oLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC1hdmFpbGFibGUtaGVpZ2h0KSBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1tZFwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVHcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWdyb3VwXCIgey4uLnByb3BzfSAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51SXRlbSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xyXG4gIGluc2V0PzogYm9vbGVhblxyXG4gIHZhcmlhbnQ/OiBcImRlZmF1bHRcIiB8IFwiZGVzdHJ1Y3RpdmVcIlxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbVxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWl0ZW1cIlxyXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cclxuICAgICAgZGF0YS12YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06dGV4dC1kZXN0cnVjdGl2ZSBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS8xMCBkYXJrOmRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOmJnLWRlc3RydWN0aXZlLzIwIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Kjpbc3ZnXTohdGV4dC1kZXN0cnVjdGl2ZSBbJl9zdmc6bm90KFtjbGFzcyo9J3RleHQtJ10pXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgcmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIGRhdGEtW2luc2V0XTpwbC04IFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2hlY2tlZCxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1jaGVja2JveC1pdGVtXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTIgcGwtOCB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UmFkaW9Hcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvR3JvdXBcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1ncm91cFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVSYWRpb0l0ZW0oe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1pdGVtXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTIgcGwtOCB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENpcmNsZUljb24gY2xhc3NOYW1lPVwic2l6ZS0yIGZpbGwtY3VycmVudFwiIC8+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVMYWJlbCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWw+ICYge1xyXG4gIGluc2V0PzogYm9vbGVhblxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1sYWJlbFwiXHJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LW1lZGl1bSBkYXRhLVtpbnNldF06cGwtOFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U2VwYXJhdG9yKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc2VwYXJhdG9yXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcImJnLWJvcmRlciAtbXgtMSBteS0xIGgtcHhcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVNob3J0Y3V0KHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJzcGFuXCI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc2hvcnRjdXRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3RcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVN1Yih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWI+KSB7XHJcbiAgcmV0dXJuIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViXCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWJUcmlnZ2VyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgaW5zZXQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcclxuICBpbnNldD86IGJvb2xlYW5cclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zdWItdHJpZ2dlclwiXHJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmQgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2luc2V0XTpwbC04XCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC1hdXRvIHNpemUtNFwiIC8+XHJcbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U3ViQ29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50XHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLWNvbnRlbnRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1sZ1wiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxyXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbiAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICBEcm9wZG93bk1lbnVHcm91cCxcclxuICBEcm9wZG93bk1lbnVMYWJlbCxcclxuICBEcm9wZG93bk1lbnVJdGVtLFxyXG4gIERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSxcclxuICBEcm9wZG93bk1lbnVSYWRpb0dyb3VwLFxyXG4gIERyb3Bkb3duTWVudVJhZGlvSXRlbSxcclxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXHJcbiAgRHJvcGRvd25NZW51U2hvcnRjdXQsXHJcbiAgRHJvcGRvd25NZW51U3ViLFxyXG4gIERyb3Bkb3duTWVudVN1YlRyaWdnZXIsXHJcbiAgRHJvcGRvd25NZW51U3ViQ29udGVudCxcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQU5BOzs7OztBQVFBLFNBQVMsYUFBYSxFQUNwQixHQUFHLE9BQ3FEO0lBQ3hELHFCQUFPLDhPQUFDLDRLQUFBLENBQUEsT0FBMEI7UUFBQyxhQUFVO1FBQWlCLEdBQUcsS0FBSzs7Ozs7O0FBQ3hFO0FBRUEsU0FBUyxtQkFBbUIsRUFDMUIsR0FBRyxPQUN1RDtJQUMxRCxxQkFDRSw4T0FBQyw0S0FBQSxDQUFBLFNBQTRCO1FBQUMsYUFBVTtRQUF3QixHQUFHLEtBQUs7Ozs7OztBQUU1RTtBQUVBLFNBQVMsb0JB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VTtRQUNWLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YseURBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmO0FBRUEsU0FBUyxnQkFBZ0IsRUFDdkIsR0FBRyxPQUNvRDtJQUN2RCxxQkFBTyw4T0FBQyw0S0FBQSxDQUFBLE1BQXlCO1FBQUMsYUFBVTtRQUFxQixHQUFHLEtBQUs7Ozs7OztBQUMzRTtBQUVBLFNBQVMsdUJBQXVCLEVBQzlCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsT0FHSjtJQUNDLHFCQUNFLDhPQUFDLDRLQUFBLENBQUEsYUFBZ0M7UUFDL0IsYUFBVTtRQUNWLGNBQVk7UUFDWixXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGtPQUNBO1FBRUQsR0FBRyxLQUFLOztZQUVSOzBCQUNELDhPQUFDLDBOQUFBLENBQUEsbUJBQWdCO2dCQUFDLFdBQVU7Ozs7Ozs7Ozs7OztBQUdsQztBQUVBLFNBQVMsdUJBQXVCLEVBQzlCLFNBQVMsRUFDVCxHQUFHLE9BQzJEO0lBQzlELHFCQUNFLDhPQUFDLDRLQUFBLENBQUEsYUFBZ0M7UUFDL0IsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsaWZBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1MjUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvaG9va3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuLy8gVXNlIHRocm91Z2hvdXQgeW91ciBhcHAgaW5zdGVhZCBvZiBwbGFpbiBgdXNlRGlzcGF0Y2hgIGFuZCBgdXNlU2VsZWN0b3JgXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFJTyxNQUFNLGlCQUFpQixJQUFNLENBQUEsR0FBQSx5SkFBQSxDQUFBLGNBQVcsQUFBRDtBQUN2QyxNQUFNLGlCQUFrRCx5SkFBQSxDQUFBLGNBQVciLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDUzNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZXJ2ZXItc2lkZSBpbXBvcnRzIGFyZSBoYW5kbGVkIGNvbmRpdGlvbmFsbHkgdG8gYXZvaWQgY2xpZW50LXNpZGUgaXNzdWVzXHJcblxyXG4vLyBTdXBwb3J0ZWQgbG9jYWxlcyBjb25maWd1cmF0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2NhbGVzID0gWydlbicsICdhciddIGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBMb2NhbGUgPSB0eXBlb2YgbG9jYWxlc1tudW1iZXJdO1xyXG5cclxuLy8gRGVmYXVsdCBsb2NhbGVcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9DQUxFOiBMb2NhbGUgPSAnZW4nO1xyXG5cclxuLy8gQ29va2llIGNvbmZpZ3VyYXRpb25cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0NPT0tJRSA9IHtcclxuICAgIG5hbWU6ICdsYW5nJyxcclxuICAgIG1heEFnZTogMzY1ICogMjQgKiA2MCAqIDYwLCAvLyAxIHllYXIgaW4gc2Vjb25kc1xyXG4gICAgaHR0cE9ubHk6IGZhbHNlLCAvLyBBY2Nlc3NpYmxlIHRvIGNsaWVudC1zaWRlIEphdmFTY3JpcHRcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgIHNhbWVTaXRlOiAnbGF4JyBhcyBjb25zdCxcclxuICAgIHBhdGg6ICcvJyxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIExvY2FsZSBpbmZvcm1hdGlvblxyXG5leHBvcnQgY29uc3QgbG9jYWxlSW5mbyA9IHtcclxuICAgIGVuOiB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ2x0cicgYXMgY29uc3QsXHJcbiAgICAgICAgZmxhZzogJ/Cfh7rwn4e4JyxcclxuICAgIH0sXHJcbiAgICBhcjoge1xyXG4gICAgICAgIG5hbWU6ICfYp9mE2LnYsdio2YrYqScsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAncnRsJyBhcyBjb25zdCxcclxuICAgICAgICBmbGFnOiAn8J+HuPCfh6YnLFxyXG4gICAgfSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIFZhbGlkYXRlIGlmIGEgbG9jYWxlIGlzIHN1cHBvcnRlZFxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZExvY2FsZShsb2NhbGU6IHN0cmluZyk6IGxvY2FsZSBpcyBMb2NhbGUge1xyXG4gICAgcmV0dXJuIGxvY2FsZXMuaW5jbHVkZXMobG9jYWxlIGFzIExvY2FsZSk7XHJcbn1cclxuXHJcbi8vIEdldCBkZWZhdWx0IGxvY2FsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdExvY2FsZSgpOiBMb2NhbGUge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBHZXQgc3VwcG9ydGVkIGxvY2FsZXMgbGlzdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkTG9jYWxlcygpOiByZWFkb25seSBMb2NhbGVbXSB7XHJcbiAgICByZXR1cm4gbG9jYWxlcztcclxufVxyXG5cclxuLy8gU2VydmVyLXNpZGUgY29va2llIHJlYWRpbmcgKE5leHQuanMpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJMb2NhbGUoKTogUHJvbWlzZTxMb2NhbGU+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBjb29raWVzIH0gPSBhd2FpdCBpbXBvcnQoJ25leHQvaGVhZGVycycpO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gICAgICAgIGNvbnN0IGxhbmdDb29raWUgPSBjb29raWVTdG9yZS5nZXQoTEFOR1VBR0VfQ09PS0lFLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gbGFuZ0Nvb2tpZT8udmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChjb29raWVWYWx1ZSAmJiBpc1ZhbGlkTG9jYWxlKGNvb2tpZVZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byByZWFkIGxhbmd1YWdlIGNvb2tpZSBvbiBzZXJ2ZXI6JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBERUZBVUxUX0xPQ0FMRTtcclxufVxyXG5cclxuLy8gQ2xpZW50LXNpZGUgY29va2llIHJlYWRpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZUZyb21Db29raWUoKTogTG9jYWxlIHwgbnVsbCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgY29uc3QgbGFuZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjb29raWUgPT5cclxuICAgICAgICAgICAgY29va2llLnRyaW0oKS5zdGFydHNXaXRoKGAke0xBTkdVQUdFX0NPT0tJRS5uYW1lfT1gKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChsYW5nQ29va2llKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gbGFuZ0Nvb2tpZS5zcGxpdCgnPScpWzFdPy50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChjb29raWVWYWx1ZSAmJiBpc1ZhbGlkTG9jYWxlKGNvb2tpZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byByZWFkIGxhbmd1YWdlIGNvb2tpZSBvbiBjbGllbnQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBDbGllbnQtc2lkZSBjb29raWUgd3JpdGluZ1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlQ29va2llKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVmFsaWRhdGUgbG9jYWxlIGJlZm9yZSBzZXR0aW5nXHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkTG9jYWxlKGxvY2FsZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIGxvY2FsZTogJHtsb2NhbGV9LiBVc2luZyBkZWZhdWx0IGxvY2FsZS5gKTtcclxuICAgICAgICAgICAgbG9jYWxlID0gREVGQVVMVF9MT0NBTEU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuICAgICAgICBleHBpcmVzLnNldFRpbWUoZXhwaXJlcy5nZXRUaW1lKCkgKyAoTEFOR1VBR0VfQ09PS0lFLm1heEFnZSAqIDEwMDApKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llU3RyaW5nID0gW1xyXG4gICAgICAgICAgICBgJHtMQU5HVUFHRV9DT09LSUUubmFtZX09JHtsb2NhbGV9YCxcclxuICAgICAgICAgICAgYGV4cGlyZXM9JHtleHBpcmVzLnRvVVRDU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgYHBhdGg9JHtMQU5HVUFHRV9DT09LSUUucGF0aH1gLFxyXG4gICAgICAgICAgICBgU2FtZVNpdGU9JHtMQU5HVUFHRV9DT09LSUUuc2FtZVNpdGV9YCxcclxuICAgICAgICAgICAgTEFOR1VBR0VfQ09PS0lFLnNlY3VyZSA/ICdTZWN1cmUnIDogJycsXHJcbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignOyAnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2V0IGxhbmd1YWdlIGNvb2tpZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEdldCBjdXJyZW50IGxvY2FsZSAoY2xpZW50LXNpZGUpXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYWxlKCk6IExvY2FsZSB7XHJcbiAgICBjb25zdCBjb29raWVMb2NhbGUgPSBnZXRMb2NhbGVGcm9tQ29va2llKCk7XHJcbiAgICByZXR1cm4gY29va2llTG9jYWxlIHx8IERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBTZXQgbG9jYWxlIChjbGllbnQtc2lkZSlcclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGU6IExvY2FsZSk6IHZvaWQge1xyXG4gICAgaWYgKCFpc1ZhbGlkTG9jYWxlKGxvY2FsZSkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgbG9jYWxlOiAke2xvY2FsZX0uIFVzaW5nIGRlZmF1bHQgbG9jYWxlLmApO1xyXG4gICAgICAgIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2FsZUNvb2tpZShsb2NhbGUpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXMgaW1tZWRpYXRlbHlcclxuICAgIHVwZGF0ZUhUTUxBdHRyaWJ1dGVzKGxvY2FsZSk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBhIGN1c3RvbSBldmVudCBmb3IgY29tcG9uZW50cyB0byBsaXN0ZW4gdG9cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9jYWxlQ2hhbmdlJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHsgbG9jYWxlIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXMgYmFzZWQgb24gbG9jYWxlXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIVE1MQXR0cmlidXRlcyhsb2NhbGU6IExvY2FsZSk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZURhdGEgPSBsb2NhbGVJbmZvW2xvY2FsZV07XHJcbiAgICAgICAgaWYgKGxvY2FsZURhdGEpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsb2NhbGU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSBsb2NhbGVEYXRhLmRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgSFRNTCBhdHRyaWJ1dGVzOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0IGxvY2FsZSBkaXJlY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZURpcmVjdGlvbihsb2NhbGU6IExvY2FsZSk6ICdsdHInIHwgJ3J0bCcge1xyXG4gICAgcmV0dXJuIGxvY2FsZUluZm9bbG9jYWxlXT8uZGlyZWN0aW9uIHx8ICdsdHInO1xyXG59XHJcblxyXG4vLyBHZXQgbG9jYWxlIGRpc3BsYXkgbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGlzcGxheU5hbWUobG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsZUluZm9bbG9jYWxlXT8ubmFtZSB8fCBsb2NhbGU7XHJcbn1cclxuXHJcbi8vIEdldCBsb2NhbGUgZmxhZ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRmxhZyhsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5mbGFnIHx8ICfwn4yQJztcclxufVxyXG5cclxuLy8gVHlwZVNjcmlwdCB2YWxpZGF0aW9uIGZvciBpMThuIHNldHVwIChsZWdhY3kgZnVuY3Rpb24ga2VwdCBmb3IgY29tcGF0aWJpbGl0eSlcclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSTE4bigpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZXMubGVuZ3RoID4gMCAmJiBERUZBVUxUX0xPQ0FMRSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6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cUJBQXFCO0lBRXJCLHFEQUFxRDtJQUNyRDs7QUFLSjtBQUdPLFNBQVMscUJBQXFCLE1BQWM7SUFDL0MsSUFBSSxPQUFPLGFBQWEsYUFBYTtJQUVyQyxJQUFJO1FBQ0EsTUFBTSxhQUFhLFVBQVUsQ0FBQyxPQUFPO1FBQ3JDLElBQUksWUFBWTtZQUNaLFNBQVMsZUFBZSxDQUFDLElBQUksR0FBRztZQUNoQyxTQUFTLGVBQWUsQ0FBQyxHQUFHLEdBQUcsV0FBVyxTQUFTO1FBQ3ZEO0lBQ0osRUFBRSxPQUFPLE9BQU87UUFDWixRQUFRLEtBQUssQ0FBQyxxQ0FBcUM7SUFDdkQ7QUFDSjtBQUdPLFNBQVMsbUJBQW1CLE1BQWM7SUFDN0MsT0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLGFBQWE7QUFDNUM7QUFHTyxTQUFTLHFCQUFxQixNQUFjO0lBQy9DLE9BQU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRO0FBQ3ZDO0FBR08sU0FBUyxjQUFjLE1BQWM7SUFDeEMsT0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVE7QUFDdkM7QUFHTyxTQUFTO0lBQ1osSUFBSTtRQUNBLE9BQU8sUUFBUSxNQUFNLEdBQUcsS0FBSyxtQkFBbUI7SUFDcEQsRUFBRSxPQUFNO1FBQ0osT0FBTztJQUNYO0FBQ0oiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDY5MiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VMYW5ndWFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VUcmFuc2l0aW9uLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q3VycmVudExvY2FsZSxcclxuICBzZXRMb2NhbGUsXHJcbiAgbG9jYWxlSW5mbyxcclxuICBnZXRTdXBwb3J0ZWRMb2NhbGVzLFxyXG4gIGlzVmFsaWRMb2NhbGUsXHJcbiAgdHlwZSBMb2NhbGVcclxufSBmcm9tICdAL2xpYi9pMThuJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMYW5ndWFnZSgpIHtcclxuICBjb25zdCBbY3VycmVudExvY2FsZSwgc2V0Q3VycmVudExvY2FsZV0gPSB1c2VTdGF0ZTxMb2NhbGU+KCgpID0+IGdldEN1cnJlbnRMb2NhbGUoKSk7XHJcbiAgY29uc3QgW2lzUGVuZGluZywgc3RhcnRUcmFuc2l0aW9uXSA9IHVzZVRyYW5zaXRpb24oKTtcclxuICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIC8vIEF2YWlsYWJsZSBsb2NhbGVzIHdpdGggZW5oYW5jZWQgaW5mb3JtYXRpb25cclxuICBjb25zdCBhdmFpbGFibGVMb2NhbGVzID0gZ2V0U3VwcG9ydGVkTG9jYWxlcygpLm1hcChjb2RlID0+ICh7XHJcbiAgICBjb2RlLFxyXG4gICAgbmFtZTogbG9jYWxlSW5mb1tjb2RlXS5uYW1lLFxyXG4gICAgZGlyOiBsb2NhbGVJbmZvW2NvZGVdLmRpcmVjdGlvbixcclxuICAgIGZsYWc6IGxvY2FsZUluZm9bY29kZV0uZmxhZ1xyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY3VycmVudExvY2FsZUluZm8gPSBhdmFpbGFibGVMb2NhbGVzLmZpbmQoKGwpID0+IGwuY29kZSA9PT0gY3VycmVudExvY2FsZSk7XHJcblxyXG4gIC8vIExpc3RlbiBmb3IgbG9jYWxlIGNoYW5nZXMgZnJvbSBvdGhlciBjb21wb25lbnRzIG9yIHRhYnNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTG9jYWxlQ2hhbmdlID0gKGV2ZW50OiBDdXN0b21FdmVudDx7IGxvY2FsZTogTG9jYWxlIH0+KSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRMb2NhbGUoZXZlbnQuZGV0YWlsLmxvY2FsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGVDaGFuZ2UnLCBoYW5kbGVMb2NhbGVDaGFuZ2UgYXMgRXZlbnRMaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvY2FsZUNoYW5nZScsIGhhbmRsZUxvY2FsZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyDwn5SlIE9QVElNSVpFRDogUmVwbGFjZSBwb2xsaW5nIHdpdGggZXZlbnQtZHJpdmVuIGNyb3NzLXRhYiBzeW5jXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhhbmRsZSBzdG9yYWdlIGV2ZW50cyBmb3IgY3Jvc3MtdGFiIHN5bmNocm9uaXphdGlvblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcmFnZUNoYW5nZSA9IChldmVudDogU3RvcmFnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdsb2NhbGUtc3luYycgJiYgZXZlbnQubmV3VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdMb2NhbGUgPSBldmVudC5uZXdWYWx1ZTtcclxuICAgICAgICBpZiAoaXNWYWxpZExvY2FsZShuZXdMb2NhbGUpICYmIG5ld0xvY2FsZSAhPT0gY3VycmVudExvY2FsZSkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudExvY2FsZShuZXdMb2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBIYW5kbGUgZm9jdXMgZXZlbnRzIHRvIGNoZWNrIGZvciBleHRlcm5hbCBjb29raWUgY2hhbmdlc1xyXG4gICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldEN1cnJlbnRMb2NhbGUoKTtcclxuICAgICAgaWYgKGNvb2tpZUxvY2FsZSAhPT0gY3VycmVudExvY2FsZSkge1xyXG4gICAgICAgIHNldEN1cnJlbnRMb2NhbGUoY29va2llTG9jYWxlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBIYW5kbGUgdmlzaWJpbGl0eSBjaGFuZ2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG4gICAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgICAgICBjb25zdCBjb29raWVMb2NhbGUgPSBnZXRDdXJyZW50TG9jYWxlKCk7XHJcbiAgICAgICAgaWYgKGNvb2tpZUxvY2FsZSAhPT0gY3VycmVudExvY2FsZSkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudExvY2FsZShjb29raWVMb2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG4gICAgICBpZiAodGltZW91dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW2N1cnJlbnRMb2NhbGVdKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPSAobmV3TG9jYWxlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghaXNWYWxpZExvY2FsZShuZXdMb2NhbGUpIHx8IG5ld0xvY2FsZSA9PT0gY3VycmVudExvY2FsZSkgcmV0dXJuO1xyXG5cclxuICAgIHN0YXJ0VHJhbnNpdGlvbigoKSA9PiB7XHJcbiAgICAgIC8vIFVzZSB0aGUgY2VudHJhbGl6ZWQgc2V0TG9jYWxlIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXM6XHJcbiAgICAgIC8vIC0gQ29va2llIHNldHRpbmdcclxuICAgICAgLy8gLSBIVE1MIGF0dHJpYnV0ZSB1cGRhdGVzXHJcbiAgICAgIC8vIC0gRXZlbnQgZGlzcGF0Y2hpbmcgZm9yIGNvbXBvbmVudCB1cGRhdGVzXHJcbiAgICAgIHNldExvY2FsZShuZXdMb2NhbGUpO1xyXG5cclxuICAgICAgLy8g8J+UpSBORVc6IFRyaWdnZXIgY3Jvc3MtdGFiIHN5bmMgdmlhIGxvY2FsU3RvcmFnZVxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dFxyXG4gICAgICAgIGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsZS1zeW5jJywgbmV3TG9jYWxlKTtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHN5bmMgaXRlbSBhZnRlciBhIHNob3J0IGRlbGF5IHRvIGF2b2lkIG1lbW9yeSBidWlsZHVwXHJcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9jYWxlLXN5bmMnKTtcclxuICAgICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSBpbW1lZGlhdGVseSBmb3IgdmlzdWFsIGZlZWRiYWNrXHJcbiAgICAgIHNldEN1cnJlbnRMb2NhbGUobmV3TG9jYWxlKTtcclxuXHJcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyIG9mIHRoZSBlbnRpcmUgYXBwIGJ5IHJlbG9hZGluZ1xyXG4gICAgICAvLyBUaGlzIGVuc3VyZXMgYWxsIHNlcnZlciBjb21wb25lbnRzIGdldCB0aGUgbmV3IGxvY2FsZVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sIDEwMCk7IC8vIFNtYWxsIGRlbGF5IGZvciB2aXN1YWwgZmVlZGJhY2tcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsb2NhbGU6IGN1cnJlbnRMb2NhbGUsXHJcbiAgICBzd2l0Y2hMYW5ndWFnZSxcclxuICAgIGF2YWlsYWJsZUxvY2FsZXMsXHJcbiAgICBjdXJyZW50TG9jYWxlSW5mbyxcclxuICAgIGlzUGVuZGluZyxcclxuICAgIGlzUlRMOiBjdXJyZW50TG9jYWxlID09PSAnYXInXHJcbiAgfTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBSEE7OztBQVlPLFNBQVM7SUFDZCxNQUFNLENBQUMsZUFBZSxpQkFBaUIsR0FBRyxDQUFBLEdBQUEscU1BQUEsQ0FBQSxXQUFRLEFBQUQsRUFBVSxJQUFNLENBQUEsR0FBQSxrSEFBQSxDQUFBLG1CQUFnQixBQUFEO0lBQ2hGLE1BQU0sQ0FBQyxXQUFXLGdCQUFnQixHQUFHLENBQUEsR0FBQSxx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O0FBQ0YiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDc5NiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2F1dGgvTG9nb3V0QnRuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3Nvbm5lcic7XHJcbmltcG9ydCB7IGF1dGhBcGksIHVzZUxvZ291dE11dGF0aW9uIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9hdXRoQXBpJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgTG9nT3V0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL2hvb2tzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJztcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxhbmd1YWdlJztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvdXRCdXR0b24oKSB7XHJcbiAgY29uc3QgW2xvZ291dF0gPSB1c2VMb2dvdXRNdXRhdGlvbigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCdhdXRoLmxvZ291dCcpO1xyXG4gIGNvbnN0IHsgaXNSVEwgfSA9IHVzZUxhbmd1YWdlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGxvZ291dCgpLnVud3JhcCgpO1xyXG4gICAgICBkaXNwYXRjaChhdXRoQXBpLnV0aWwucmVzZXRBcGlTdGF0ZSgpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZmFpbGVkOicsIGVycik7XHJcbiAgICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yJykpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3ModCgnc3VjY2VzcycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcInctZnVsbFwiLFxyXG4gICAgICBpc1JUTCA/IFwiZmxleCBmbGV4LXJvdy1yZXZlcnNlIGp1c3RpZnktZW5kXCIgOiBcImZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydFwiXHJcbiAgICApfT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcInctZnVsbCBoLWF1dG8gcC0yIGhvdmVyOmJnLWRlc3RydWN0aXZlLzEwIHRleHQtZGVzdHJ1Y3RpdmVcIixcclxuICAgICAgICAgIGlzUlRMID8gXCJqdXN0aWZ5LWVuZFwiIDogXCJqdXN0aWZ5LXN0YXJ0XCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB3LWZ1bGxcIixcclxuICAgICAgICAgIGlzUlRMID8gXCJmbGV4LXJvdy1yZXZlcnNlIGp1c3RpZnktZW5kXCIgOiBcImZsZXgtcm93IGp1c3RpZnktc3RhcnRcIlxyXG4gICAgICAgICl9PlxyXG4gICAgICAgICAgPExvZ091dCBjbGFzc05hbWU9e2NuKFwiaC00IHctNCBzaHJpbmstMFwiLCBpc1JUTCA/IFwibWwtMlwiIDogXCJtci0yXCIpfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5XCI+e3QoJ2J1dHRvbicpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7Ozs7Ozs7Ozs7O0FBWWUsU0FBUztJQUN0QixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUEsR0FBQSxtSUFBQSxDQUFBLG9CQUFpQixBQUFEO0lBQ2pDLE1BQU0sV0FBVyxDQUFBLEdBQUEscUhBQUEsQ0FBQSxpQkFBYyxBQUFEO0lBQzlCLE1BQU0sU0FBUyxDQUFBLEdBQUEsa0lBQUEsQ0FBQSxZQUFTLEFBQUQ7SUFDdkIsTUFBTSxJQUFJLENBQUEsR0FBQSxzTUFBQSxDQUFBLGtCQUFlLEFBQUQsRUFBRTtJQUMxQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQSxHQUFBLDJIQUFBLENBQUEsY0FBVyxBQUFEO0lBRTVCLE1BQU0sZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTSxTQUFTLE1BQU07WUFDckIsU0FBUyxtSUFBQSxDQUFBLFVBQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTtRQUNyQyxFQUFFLE9BQU8sS0FBSztZQUNaLFFBQVEsS0FBSyxDQUFDLGtCQUFrQjtZQUNoQyx3SUFBQSxDQUFBLFFBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoQixTQUFVO1lBQ1IsT0FBTyxJQUFJLENBQUMsV0FBYSxvQkFBb0I7WUFDN0Msd0lBQUEsQ0FBQSxRQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhPQUFDO1FBQUksV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDZixVQUNBLFFBQVEsc0NBQXNDO2tCQUU5QyxjQUFBLDhPQUFDLGtJQUFBLENBQUEsU0FBTTtZQUNMLFNBQVM7WUFDVCxTQUFRO1lBQ1IsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViw4REFDQSxRQUFRLGdCQUFnQjtzQkFHMUIsY0FBQSw4T0FBQztnQkFBSSxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLGtDQUNBLFFBQVEsaUNBQWlDOztrQ0FFekMsOE9BQUMsME1BQUEsQ0FBQSxTQUFNO3dCQUFDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsb0JBQW9CLFFBQVEsU0FBUzs7Ozs7O2tDQUMzRCw4T0FBQzt3QkFBSyxXQUFVO2tDQUFnQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4ODMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS90aGVtZS10b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1vb24sIFN1biwgTW9uaXRvciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nXHJcbmltcG9ydCB7XHJcbiAgICBEcm9wZG93bk1lbnUsXHJcbiAgICBEcm9wZG93bk1lbnVDb250ZW50LFxyXG4gICAgRHJvcGRvd25NZW51SXRlbSxcclxuICAgIERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCB7IHNldFRoZW1lLCB0aGVtZSB9ID0gdXNlVGhlbWUoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBob3ZlcjpiZy1hY2NlbnQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1biBjbGFzc05hbWU9XCJoLVsxLjJyZW1dIHctWzEuMnJlbV0gcm90YXRlLTAgc2NhbGUtMTAwIHRyYW5zaXRpb24tYWxsIGRhcms6LXJvdGF0ZS05MCBkYXJrOnNjYWxlLTAgdGhlbWUtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC1bMS4ycmVtXSB3LVsxLjJyZW1dIHJvdGF0ZS05MCBzY2FsZS0wIHRyYW5zaXRpb24tYWxsIGRhcms6cm90YXRlLTAgZGFyazpzY2FsZS0xMDAgdGhlbWUtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSB0aGVtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGFsaWduPVwiZW5kXCIgY2xhc3NOYW1lPVwiYmctY2FyZC85NSBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlciBib3JkZXItYm9yZGVyLzUwIHNoYWRvdy14bCByb3VuZGVkLXhsIG1pbi13LVsxNDBweF0gZHJvcGRvd24tY29udGVudC1lbmhhbmNlZFwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSgnbGlnaHQnKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke3RoZW1lID09PSAnbGlnaHQnID8gJ2JnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5JyA6ICdob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1biBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkxpZ2h0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSgnZGFyaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMi41IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICR7dGhlbWUgPT09ICdkYXJrJyA/ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeScgOiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+RGFyazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ3N5c3RlbScpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMi41IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICR7dGhlbWUgPT09ICdzeXN0ZW0nID8gJ2JnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5JyA6ICdob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vbml0b3IgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5TeXN0ZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQVBBOzs7Ozs7QUFjTyxTQUFTO0lBQ1osTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFBLEdBQUEsZ0pBQUEsQ0FBQSxXQUFRLEFBQUQ7SUFFbkMscUJBQ0ksOE9BQUMsNElBQUEsQ0FBQSxlQUFZOzswQkFDVCw4T0FBQyw0SUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFPOzBCQUN4QixjQUFBLDhPQUFDLGtJQUFBLENBQUEsU0FBTTtvQkFBQyxTQUFRO29CQUFRLE1BQUs7b0JBQU8sV0FBVTs7c0NBQzFDLDhPQUFDLGdNQUFBLENBQUEsTUFBRzs0QkFBQyxXQUFVOzs7Ozs7c0NBQ2YsOE9BQUMsa01BQUEsQ0FBQSxPQUFJOzRCQUFDLFdBQVU7Ozs7OztzQ0FDaEIsOE9BQUM7NEJBQUssV0FBVTtzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xDLDhPQUFDLDRJQUFBLENBQUEsc0JBQW1CO2dCQUFDLE9BQU07Z0JBQU0sV0FBVTs7a0NBQ3ZDLDhPQUFDLDRJQUFBLENBQUEsbUJBQWdCO3dCQUNiLFNBQVMsSUFBTSxTQUFTO3dCQUN4QixXQUFXLENBQUMsMEZBQTBGLEVBQUUsVUFBVSxVQUFVLCtCQUErQixnREFDcko7OzBDQUVOLDhPQUFDLGdNQUFBLENBQUEsTUFBRztnQ0FBQyxXQUFVOzs7Ozs7MENBQ2YsOE9BQUM7Z0NBQUssV0FBVTswQ0FBYzs7Ozs7Ozs7Ozs7O2tDQUVsQyw4T0FBQyw0SUFBQSxDQUFBLG1CQUFnQjt3QkFDYixTQUFTLElBQU0sU0FBUzt3QkFDeEIsV0FBVyxDQUFDLDBGQUEwRixFQUFFLFVBQVUsU0FBUywrQkFBK0IsZ0RBQ3BKOzswQ0FFTiw4T0FBQyxrTUFBQSxDQUFBLE9BQUk7Z0NBQUMsV0FBVTs7Ozs7OzBDQUNoQiw4T0FBQztnQ0FBSyxXQUFVOzBDQUFjOzs7Ozs7Ozs7Ozs7a0NBRWxDLDhPQUFDLDRJQUFBLENBQUEsbUJBQWdCO3dCQUNiLFNBQVMsSUFBTSxTQUFTO3dCQUN4QixXQUFXLENBQUMsMEZBQTBGLEVBQUUsVUFBVSxXQUFXLCtCQUErQixnREFDdEo7OzBDQUVOLDhPQUFDLHdNQUFBLENBQUEsVUFBTztnQ0FBQyxXQUFVOzs7Ozs7MENBQ25CLDhPQUFDO2dDQUFLLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRCIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTAzOSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL21hZGUvbGFuZ3VhZ2Utc3dpdGNoZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7XHJcbiAgICBEcm9wZG93bk1lbnUsXHJcbiAgICBEcm9wZG93bk1lbnVDb250ZW50LFxyXG4gICAgRHJvcGRvd25NZW51SXRlbSxcclxuICAgIERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUnO1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJ0AvaG9va3MvdXNlTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBnZXRMb2NhbGVGbGFnIH0gZnJvbSAnQC9saWIvaTE4bic7XHJcblxyXG4vLyBGbGFnIGljb25zIGFzIGNvbXBvbmVudHMgd2l0aCBlbmhhbmNlZCBzdHlsaW5nXHJcbmNvbnN0IEZsYWdJY29uID0gKHsgY291bnRyeSwgY2xhc3NOYW1lID0gXCJ3LTQgaC00XCIgfTogeyBjb3VudHJ5OiBzdHJpbmc7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zdCBmbGFnID0gZ2V0TG9jYWxlRmxhZyhjb3VudHJ5IGFzICdlbicgfCAnYXInKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIGxlYWRpbmctbm9uZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgaG92ZXI6c2NhbGUtMTEwYH0+XHJcbiAgICAgICAgICAgIHtmbGFnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFuZ3VhZ2VTd2l0Y2hlcigpIHtcclxuICAgIGNvbnN0IHsgc3dpdGNoTGFuZ3VhZ2UsIGF2YWlsYWJsZUxvY2FsZXMsIGN1cnJlbnRMb2NhbGVJbmZvLCBpc1BlbmRpbmcgfSA9IHVzZUxhbmd1YWdlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VTd2l0Y2ggPSAobG9jYWxlQ29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzd2l0Y2hpbmcgdG8gdGhlIHNhbWUgbGFuZ3VhZ2VcclxuICAgICAgICBpZiAobG9jYWxlQ29kZSA9PT0gY3VycmVudExvY2FsZUluZm8/LmNvZGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgc3dpdGNoIGZ1bmN0aW9uIHdoaWNoIG5vdyBoYW5kbGVzIGNvb2tpZS1iYXNlZCBzd2l0Y2hpbmdcclxuICAgICAgICBzd2l0Y2hMYW5ndWFnZShsb2NhbGVDb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1BlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC05IHB4LTMgYmctYmFja2dyb3VuZCBob3ZlcjpiZy1hY2NlbnQgYm9yZGVyLWJvcmRlciBob3Zlcjpib3JkZXItcHJpbWFyeS81MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCAke2lzUGVuZGluZyA/ICdvcGFjaXR5LTcwIGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgQ3VycmVudCBsYW5ndWFnZTogJHtjdXJyZW50TG9jYWxlSW5mbz8ubmFtZX0uIENsaWNrIHRvIGNoYW5nZSBsYW5ndWFnZS5gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGFnSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5PXtjdXJyZW50TG9jYWxlSW5mbz8uY29kZSB8fCAnZW4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQgaC00IG1yLTIgZmxhZy1pY29uICR7aXNQZW5kaW5nID8gJ2FuaW1hdGUtcHVsc2UnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TG9jYWxlSW5mbz8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUGVuZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgdy0zIGgtMyBib3JkZXIgYm9yZGVyLWN1cnJlbnQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2hhbmdpbmcgbGFuZ3VhZ2UuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudFxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctY2FyZC85NSBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlciBib3JkZXItYm9yZGVyLzUwIHNoYWRvdy14bCByb3VuZGVkLXhsIG1pbi13LVsxNjBweF0gcC0xIGRyb3Bkb3duLWNvbnRlbnQtZW5oYW5jZWRcIlxyXG4gICAgICAgICAgICAgICAgc2lkZU9mZnNldD17NH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2F2YWlsYWJsZUxvY2FsZXMubWFwKChsb2NhbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRMb2NhbGUgPSBjdXJyZW50TG9jYWxlSW5mbz8uY29kZSA9PT0gbG9jYWxlLmNvZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xvY2FsZS5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGFuZ3VhZ2VTd2l0Y2gobG9jYWxlLmNvZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUGVuZGluZyB8fCBpc0N1cnJlbnRMb2NhbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeS81MCAke2lzQ3VycmVudExvY2FsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSBjdXJzb3ItZGVmYXVsdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc1BlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ29wYWNpdHktNTAgY3Vyc29yLW5vdC1hbGxvd2VkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgYWN0aXZlOmJnLWFjY2VudC84MCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTd2l0Y2ggdG8gJHtsb2NhbGUubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxhZ0ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5PXtsb2NhbGUuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQgaC00IGZsYWctaWNvbiAke2lzUGVuZGluZyAmJiAhaXNDdXJyZW50TG9jYWxlID8gJ29wYWNpdHktNTAnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ3VycmVudExvY2FsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5IGFuaW1hdGUtaW4gZmFkZS1pbi0wIHpvb20taW4tOTUgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkN1cnJlbnQgbGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTs7Ozs7OztBQUVBLGlEQUFpRDtBQUNqRCxNQUFNLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLFNBQVMsRUFBMkM7SUFDekYsTUFBTSxPQUFPLENBQUEsR0FBQSxrSEFBQSxDQUFBLGdCQUFhLEFBQUQsRUFBRTtJQUUzQixxQkFDSSw4T0FBQztRQUFLLFdBQVcsR0FBRyxVQUFVLHdHQUF3RyxDQUFDO2tCQUNsSTs7Ozs7O0FBR2I7QUFFTyxTQUFTO0lBQ1osTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFBLEdBQUEsMkhBQUEsQ0FBQSxjQUFXLEFBQUQ7SUFFckYsTUFBTSx1QkFBdUIsQ0FBQztRQUMxQix5Q0FBeUM7UUFDekMsSUFBSSxlQUFlLG1CQUFtQixNQUFNO1FBRTVDLG9FQUFvRTtRQUNwRSxlQUFlO0lBQ25CO0lBRUEscUJBQ0ksOE9BQUMsNElBQUEsQ0FBQSxlQUFZOzswQkFDVCw4T0FBQyw0SUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFPOzBCQUN4QixjQUFBLDhPQUFDLGtJQUFBLENBQUEsU0FBTTtvQkFDSCxTQUFRO29CQUNSLE1BQUs7b0JBQ0wsVUFBVTtvQkFDVixXQUFXLENBQUMsbUlBQW1JLEVBQUUsWUFBWSxrQ0FBa0MsSUFDekw7b0JBQ04sY0FBWSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixLQUFLLDJCQUEyQixDQUFDOztzQ0FFckYsOE9BQUM7NEJBQ0csU0FBUyxtQkFBbUIsUUFBUTs0QkFDcEMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLFlBQVksa0JBQWtCLElBQUk7Ozs7OztzQ0FFM0UsOE9BQUM7NEJBQUssV0FBVTtzQ0FDWCxtQkFBbUI7Ozs7Ozt3QkFFdkIsMkJBQ0csOE9BQUM7NEJBQ0csV0FBVTs0QkFDVixjQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLM0IsOE9BQUMsNElBQUEsQ0FBQSxzQkFBbUI7Z0JBQ2hCLE9BQU07Z0JBQ04sV0FBVTtnQkFDVixZQUFZOzBCQUVYLGlCQUFpQixHQUFHLENBQUMsQ0FBQztvQkFDbkIsTUFBTSxrQkFBa0IsbUJBQW1CLFNBQVMsT0FBTyxJQUFJO29CQUUvRCxxQkFDSSw4T0FBQyw0SUFBQSxDQUFBLG1CQUFnQjt3QkFFYixTQUFTLElBQU0scUJBQXFCLE9BQU8sSUFBSTt3QkFDL0MsVUFBVSxhQUFhO3dCQUN2QixXQUFXLENBQUMsZ0pBQWdKLEVBQUUsa0JBQ3BKLDhDQUNBLFlBQ0ksa0NBQ0Esb0VBQ1I7d0JBQ04sY0FBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLElBQUksRUFBRTs7MENBRXRDLDhPQUFDO2dDQUNHLFNBQVMsT0FBTyxJQUFJO2dDQUNwQixXQUFXLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLGtCQUFrQixlQUFlLElBQ3pFOzs7Ozs7MENBRVYsOE9BQUM7Z0NBQUssV0FBVTswQ0FDWCxPQUFPLElBQUk7Ozs7Ozs0QkFFZixpQ0FDRyw4T0FBQyxvTUFBQSxDQUFBLFFBQUs7Z0NBQ0YsV0FBVTtnQ0FDVixjQUFXOzs7Ozs7O3VCQXRCZCxPQUFPLElBQUk7Ozs7O2dCQTJCNUI7Ozs7Ozs7Ozs7OztBQUloQiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTE3OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2F2YXRhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIEF2YXRhclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWF2YXRhclwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5mdW5jdGlvbiBBdmF0YXIoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQXZhdGFyUHJpbWl0aXZlLlJvb3Q+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdmF0YXJQcmltaXRpdmUuUm9vdFxyXG4gICAgICBkYXRhLXNsb3Q9XCJhdmF0YXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwicmVsYXRpdmUgZmxleCBzaXplLTggc2hyaW5rLTAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtZnVsbFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQXZhdGFySW1hZ2Uoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQXZhdGFyUHJpbWl0aXZlLkltYWdlPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXZhdGFyUHJpbWl0aXZlLkltYWdlXHJcbiAgICAgIGRhdGEtc2xvdD1cImF2YXRhci1pbWFnZVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJhc3BlY3Qtc3F1YXJlIHNpemUtZnVsbFwiLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQXZhdGFyRmFsbGJhY2soe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQXZhdGFyUHJpbWl0aXZlLkZhbGxiYWNrPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXZhdGFyUHJpbWl0aXZlLkZhbGxiYWNrXHJcbiAgICAgIGRhdGEtc2xvdD1cImF2YXRhci1mYWxsYmFja1wiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJiZy1tdXRlZCBmbGV4IHNpemUtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBBdmF0YXIsIEF2YXRhckltYWdlLCBBdmF0YXJGYWxsYmFjayB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTtBQUVBO0FBTEE7Ozs7QUFPQSxTQUFTLE9BQU8sRUFDZCxTQUFTLEVBQ1QsR0FBRyxPQUMrQztJQUNsRCxxQkFDRSw4T0FBQyxrS0FBQSxDQUFBLE9BQW9CO1FBQ25CLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDhEQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtBQUVBLFNBQVMsWUFBWSxFQUNuQixTQUFTLEVBQ1QsR0FBRyxPQUNnRDtJQUNuRCxxQkFDRSw4T0FBQyxrS0FBQSxDQUFBLFFBQXFCO1FBQ3BCLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLDJCQUEyQjtRQUN4QyxHQUFHLEtBQUs7Ozs7OztBQUdmO0FBRUEsU0FBUyxlQUFlLEVBQ3RCLFNBQVMsRUFDVCxHQUFHLE9BQ21EO0lBQ3RELHFCQUNFLDhPQUFDLGtLQUFBLENBQUEsV0FBd0I7UUFDdkIsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysb0VBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMjI5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdXNlci9Vc2VyQXZhdGFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEF2YXRhckZhbGxiYWNrIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2F2YXRhcic7XHJcblxyXG5pbnRlcmZhY2UgVXNlckF2YXRhckNvbnRlbnRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckF2YXRhcih7IG5hbWUsIG9uQ2xpY2sgfTogVXNlckF2YXRhckNvbnRlbnRQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByaW5nLTIgcmluZy1wcmltYXJ5LzIwIHJvdW5kZWQtMnhsIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIDxBdmF0YXJGYWxsYmFjayBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtIHJvdW5kZWQtMnhsIGZvbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgIHtuYW1lXHJcbiAgICAgICAgICA/LnNwbGl0KCcgJylcclxuICAgICAgICAgIC5tYXAoKG5hbWUpID0+IG5hbWVbMF0pXHJcbiAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgIDwvQXZhdGFyRmFsbGJhY2s+XHJcbiAgICA8L0F2YXRhcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQU9lLFNBQVMsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQTBCO0lBQzFFLHFCQUNFLDhPQUFDLGtJQUFBLENBQUEsU0FBTTtRQUFDLFdBQVU7UUFBOEQsU0FBUztrQkFDdkYsY0FBQSw4T0FBQyxrSUFBQSxDQUFBLGlCQUFjO1lBQUMsV0FBVTtzQkFDdkIsTUFDRyxNQUFNLEtBQ1AsSUFBSSxDQUFDLE9BQVMsSUFBSSxDQUFDLEVBQUUsRUFDckIsS0FBSzs7Ozs7Ozs7Ozs7QUFJaEIiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDEyNTgsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiXHJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmNvbnN0IGJhZGdlVmFyaWFudHMgPSBjdmEoXHJcbiAgXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgcHgtMiBweS0wLjUgdGV4dC14cyBmb250LW1lZGl1bSB3LWZpdCB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCBbJj5zdmddOnNpemUtMyBnYXAtMSBbJj5zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIHRyYW5zaXRpb24tW2NvbG9yLGJveC1zaGFkb3ddIG92ZXJmbG93LWhpZGRlblwiLFxyXG4gIHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIHZhcmlhbnQ6IHtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBbYSZdOmhvdmVyOmJnLXByaW1hcnkvOTBcIixcclxuICAgICAgICBzZWNvbmRhcnk6XHJcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBbYSZdOmhvdmVyOmJnLXNlY29uZGFyeS85MFwiLFxyXG4gICAgICAgIGRlc3RydWN0aXZlOlxyXG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctZGVzdHJ1Y3RpdmUgdGV4dC13aGl0ZSBbYSZdOmhvdmVyOmJnLWRlc3RydWN0aXZlLzkwIGZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS80MCBkYXJrOmJnLWRlc3RydWN0aXZlLzYwXCIsXHJcbiAgICAgICAgb3V0bGluZTpcclxuICAgICAgICAgIFwidGV4dC1mb3JlZ3JvdW5kIFthJl06aG92ZXI6YmctYWNjZW50IFthJl06aG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRlZmF1bHRWYXJpYW50czoge1xyXG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcclxuICAgIH0sXHJcbiAgfVxyXG4pXHJcblxyXG5mdW5jdGlvbiBCYWRnZSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHZhcmlhbnQsXHJcbiAgYXNDaGlsZCA9IGZhbHNlLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwic3BhblwiPiAmXHJcbiAgVmFyaWFudFByb3BzPHR5cGVvZiBiYWRnZVZhcmlhbnRzPiAmIHsgYXNDaGlsZD86IGJvb2xlYW4gfSkge1xyXG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwic3BhblwiXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29tcFxyXG4gICAgICBkYXRhLXNsb3Q9XCJiYWRnZVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oYmFkZ2VWYXJpYW50cyh7IHZhcmlhbnQgfSksIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBCYWRnZSwgYmFkZ2VWYXJpYW50cyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxNQUFNLGdCQUFnQixDQUFBLEdBQUEsZ0tBQUEsQ0FBQSxNQUFHLEFBQUQsRUFDdEIsa1pBQ0E7SUFDRSxVQUFVO1FBQ1IsU0FBUztZQUNQLFNBQ0U7WUFDRixXQUNFO1lBQ0YsYUFDRTtZQUNGLFNBQ0U7UUFDSjtJQUNGO0lBQ0EsaUJBQWlCO1FBQ2YsU0FBUztJQUNYO0FBQ0Y7QUFHRixTQUFTLE1BQU0sRUFDYixTQUFTLEVBQ1QsT0FBTyxFQUNQLFVBQVUsS0FBSyxFQUNmLEdBQUcsT0FFdUQ7SUFDMUQsTUFBTSxPQUFPLFVBQVUsZ0tBQUEsQ0FBQSxPQUFJLEdBQUc7SUFFOUIscUJBQ0UsOE9BQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxjQUFjO1lBQUU7UUFBUSxJQUFJO1FBQ3pDLEdBQUcsS0FBSzs7Ozs7O0FBR2YiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDEzMDIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9wb3BvdmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgUG9wb3ZlclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXJcIlxyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5cclxuZnVuY3Rpb24gUG9wb3Zlcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuUm9vdD4pIHtcclxuICByZXR1cm4gPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBkYXRhLXNsb3Q9XCJwb3BvdmVyXCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBQb3BvdmVyVHJpZ2dlcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlcj4pIHtcclxuICByZXR1cm4gPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBkYXRhLXNsb3Q9XCJwb3BvdmVyLXRyaWdnZXJcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBvcG92ZXJDb250ZW50KHtcclxuICBjbGFzc05hbWUsXHJcbiAgYWxpZ24gPSBcImNlbnRlclwiLFxyXG4gIHNpZGVPZmZzZXQgPSA0LFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBQb3BvdmVyUHJpbWl0aXZlLkNvbnRlbnQ+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQb3BvdmVyUHJpbWl0aXZlLlBvcnRhbD5cclxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cInBvcG92ZXItY29udGVudFwiXHJcbiAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCB3LTcyIG9yaWdpbi0oLS1yYWRpeC1wb3BvdmVyLWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgcm91bmRlZC1tZCBib3JkZXIgcC00IHNoYWRvdy1tZCBvdXRsaW5lLWhpZGRlblwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BvcG92ZXJQcmltaXRpdmUuUG9ydGFsPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gUG9wb3ZlckFuY2hvcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuQW5jaG9yPikge1xyXG4gIHJldHVybiA8UG9wb3ZlclByaW1pdGl2ZS5BbmNob3IgZGF0YS1zbG90PVwicG9wb3Zlci1hbmNob3JcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJUcmlnZ2VyLCBQb3BvdmVyQ29udGVudCwgUG9wb3ZlckFuY2hvciB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7QUFFQTtBQUxBOzs7O0FBT0EsU0FBUyxRQUFRLEVBQ2YsR0FBRyxPQUNnRDtJQUNuRCxxQkFBTyw4T0FBQyxtS0FBQSxDQUFBLE9BQXFCO1FBQUMsYUFBVTtRQUFXLEdBQUcsS0FBSzs7Ozs7O0FBQzdEO0FBRUEsU0FBUyxlQUFlLEVBQ3RCLEdBQUcsT0FDbUQ7SUFDdEQscUJBQU8sOE9BQUMsbUtBQUEsQ0FBQSxVQUF3QjtRQUFDLGFBQVU7UUFBbUIsR0FBRyxLQUFLOzs7Ozs7QUFDeEU7QUFFQSxTQUFTLGVBQWUsRUFDdEIsU0FBUyxFQUNULFFBQVEsUUFBUSxFQUNoQixhQUFhLENBQUMsRUFDZCxHQUFHLE9BQ21EO0lBQ3RELHFCQUNFLDhPQUFDLG1LQUFBLENBQUEsU0FBdUI7a0JBQ3RCLGNBQUEsOE9BQUMsbUtBQUEsQ0FBQSxVQUF3QjtZQUN2QixhQUFVO1lBQ1YsT0FBTztZQUNQLFlBQVk7WUFDWixXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGtlQUNBO1lBRUQsR0FBRyxLQUFLOzs7Ozs7Ozs7OztBQUlqQjtBQUVBLFNBQVMsY0FBYyxFQUNyQixHQUFHLE9BQ2tEO0lBQ3JELHFCQUFPLDhPQUFDLG1LQUFBLENBQUEsU0FBdUI7UUFBQyxhQUFVO1FBQWtCLEdBQUcsS0FBSzs7Ozs7O0FBQ3RFIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMzY5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL1VuaWZpZWROb3RpZmljYXRpb25Qb3B1cC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWRnZSc7XHJcbmltcG9ydCB7XHJcbiAgUG9wb3ZlcixcclxuICBQb3BvdmVyQ29udGVudCxcclxuICBQb3BvdmVyVHJpZ2dlclxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9wb3BvdmVyJztcclxuaW1wb3J0IHtcclxuICBCZWxsLFxyXG4gIENoZWNrQ2lyY2xlLFxyXG4gIENsb2NrLFxyXG4gIEZpbGVUZXh0LFxyXG4gIEdyYWR1YXRpb25DYXAsXHJcbiAgQ2FsZW5kYXIsXHJcbiAgQWxlcnRUcmlhbmdsZSxcclxuICBYXHJcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9ob29rcy91c2VMYW5ndWFnZSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcblxyXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggQVBJIHR5cGVzIHdoZW4gaW1wbGVtZW50aW5nIGJhY2tlbmQgaW50ZWdyYXRpb25cclxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiAnYXNzaWdubWVudCcgfCAnZ3JhZGUnIHwgJ2V2ZW50JyB8ICdzeXN0ZW0nIHwgJ3JlbWluZGVyJztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBpc1JlYWQ6IGJvb2xlYW47XHJcbiAgcHJpb3JpdHk6ICdsb3cnIHwgJ21lZGl1bScgfCAnaGlnaCc7XHJcbiAgYWN0aW9uVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBnZXROb3RpZmljYXRpb25JY29uID0gKHR5cGU6IE5vdGlmaWNhdGlvblsndHlwZSddKSA9PiB7XHJcbiAgY29uc3QgaWNvbk1hcCA9IHtcclxuICAgIGFzc2lnbm1lbnQ6IEZpbGVUZXh0LFxyXG4gICAgZ3JhZGU6IEdyYWR1YXRpb25DYXAsXHJcbiAgICBldmVudDogQ2FsZW5kYXIsXHJcbiAgICBzeXN0ZW06IEFsZXJ0VHJpYW5nbGUsXHJcbiAgICByZW1pbmRlcjogQ2xvY2tcclxuICB9O1xyXG4gIHJldHVybiBpY29uTWFwW3R5cGVdO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Tm90aWZpY2F0aW9uQ29sb3JzID0gKHR5cGU6IE5vdGlmaWNhdGlvblsndHlwZSddKSA9PiB7XHJcbiAgY29uc3QgY29sb3JNYXAgPSB7XHJcbiAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgIGJnOiAnYmctYmx1ZS01MCBkYXJrOmJnLWJsdWUtNTAwLzEwJyxcclxuICAgICAgYm9yZGVyOiAnYm9yZGVyLWJsdWUtMjAwIGRhcms6Ym9yZGVyLWJsdWUtNTAwLzMwJyxcclxuICAgICAgaWNvbkJnOiAnYmctYmx1ZS0xMDAgZGFyazpiZy1ibHVlLTUwMC8yMCcsXHJcbiAgICAgIGljb25Db2xvcjogJ3RleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNDAwJyxcclxuICAgICAgc2hhZG93OiAnc2hhZG93LWJsdWUtNTAwLzIwJ1xyXG4gICAgfSxcclxuICAgIGdyYWRlOiB7XHJcbiAgICAgIGJnOiAnYmctZW1lcmFsZC01MCBkYXJrOmJnLWVtZXJhbGQtNTAwLzEwJyxcclxuICAgICAgYm9yZGVyOiAnYm9yZGVyLWVtZXJhbGQtMjAwIGRhcms6Ym9yZGVyLWVtZXJhbGQtNTAwLzMwJyxcclxuICAgICAgaWNvbkJnOiAnYmctZW1lcmFsZC0xMDAgZGFyazpiZy1lbWVyYWxkLTUwMC8yMCcsXHJcbiAgICAgIGljb25Db2xvcjogJ3RleHQtZW1lcmFsZC02MDAgZGFyazp0ZXh0LWVtZXJhbGQtNDAwJyxcclxuICAgICAgc2hhZG93OiAnc2hhZG93LWVtZXJhbGQtNTAwLzIwJ1xyXG4gICAgfSxcclxuICAgIGV2ZW50OiB7XHJcbiAgICAgIGJnOiAnYmctcHVycGxlLTUwIGRhcms6YmctcHVycGxlLTUwMC8xMCcsXHJcbiAgICAgIGJvcmRlcjogJ2JvcmRlci1wdXJwbGUtMjAwIGRhcms6Ym9yZGVyLXB1cnBsZS01MDAvMzAnLFxyXG4gICAgICBpY29uQmc6ICdiZy1wdXJwbGUtMTAwIGRhcms6YmctcHVycGxlLTUwMC8yMCcsXHJcbiAgICAgIGljb25Db2xvcjogJ3RleHQtcHVycGxlLTYwMCBkYXJrOnRleHQtcHVycGxlLTQwMCcsXHJcbiAgICAgIHNoYWRvdzogJ3NoYWRvdy1wdXJwbGUtNTAwLzIwJ1xyXG4gICAgfSxcclxuICAgIHN5c3RlbToge1xyXG4gICAgICBiZzogJ2JnLW9yYW5nZS01MCBkYXJrOmJnLW9yYW5nZS01MDAvMTAnLFxyXG4gICAgICBib3JkZXI6ICdib3JkZXItb3JhbmdlLTIwMCBkYXJrOmJvcmRlci1vcmFuZ2UtNTAwLzMwJyxcclxuICAgICAgaWNvbkJnOiAnYmctb3JhbmdlLTEwMCBkYXJrOmJnLW9yYW5nZS01MDAvMjAnLFxyXG4gICAgICBpY29uQ29sb3I6ICd0ZXh0LW9yYW5nZS02MDAgZGFyazp0ZXh0LW9yYW5nZS00MDAnLFxyXG4gICAgICBzaGFkb3c6ICdzaGFkb3ctb3JhbmdlLTUwMC8yMCdcclxuICAgIH0sXHJcbiAgICByZW1pbmRlcjoge1xyXG4gICAgICBiZzogJ2JnLWFtYmVyLTUwIGRhcms6YmctYW1iZXItNTAwLzEwJyxcclxuICAgICAgYm9yZGVyOiAnYm9yZGVyLWFtYmVyLTIwMCBkYXJrOmJvcmRlci1hbWJlci01MDAvMzAnLFxyXG4gICAgICBpY29uQmc6ICdiZy1hbWJlci0xMDAgZGFyazpiZy1hbWJlci01MDAvMjAnLFxyXG4gICAgICBpY29uQ29sb3I6ICd0ZXh0LWFtYmVyLTYwMCBkYXJrOnRleHQtYW1iZXItNDAwJyxcclxuICAgICAgc2hhZG93OiAnc2hhZG93LWFtYmVyLTUwMC8yMCdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29sb3JNYXBbdHlwZV07XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUaW1lc3RhbXAgPSAodGltZXN0YW1wOiBzdHJpbmcsIHQ6IChrZXk6IHN0cmluZykgPT4gc3RyaW5nLCBpc1JUTDogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSBNYXRoLmFicyhub3cuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwKTtcclxuXHJcbiAgaWYgKGRpZmZJbkhvdXJzIDwgMSkge1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZkluSG91cnMgKiA2MCk7XHJcbiAgICByZXR1cm4gaXNSVEwgPyBgJHt0KCdwb3B1cC50aW1lQWdvLnByZWZpeCcpfSAke21pbnV0ZXN9ICR7dCgncG9wdXAudGltZUFnby5taW51dGVzJyl9YCA6IGAke21pbnV0ZXN9JHt0KCdwb3B1cC50aW1lQWdvLm1pbnV0ZXMnKX1gO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGRpZmZJbkhvdXJzKTtcclxuICAgIHJldHVybiBpc1JUTCA/IGAke3QoJ3BvcHVwLnRpbWVBZ28ucHJlZml4Jyl9ICR7aG91cnN9ICR7dCgncG9wdXAudGltZUFnby5ob3VycycpfWAgOiBgJHtob3Vyc30ke3QoJ3BvcHVwLnRpbWVBZ28uaG91cnMnKX1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmSW5Ib3VycyAvIDI0KTtcclxuICAgIHJldHVybiBpc1JUTCA/IGAke3QoJ3BvcHVwLnRpbWVBZ28ucHJlZml4Jyl9ICR7ZGF5c30gJHt0KCdwb3B1cC50aW1lQWdvLmRheXMnKX1gIDogYCR7ZGF5c30ke3QoJ3BvcHVwLnRpbWVBZ28uZGF5cycpfWA7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVuaWZpZWROb3RpZmljYXRpb25Qb3B1cCgpIHtcclxuICBjb25zdCB7IGlzUlRMIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ25vdGlmaWNhdGlvbnMnKTtcclxuXHJcbiAgLy8gVE9ETzogUmVwbGFjZSB3aXRoIGFjdHVhbCBBUEkgY2FsbCAtIHVzaW5nIHRyYW5zbGF0aW9ucyBmb3Igc3RhdGljIGRhdGEgbm93XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbnMsIHNldE5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGU8Tm90aWZpY2F0aW9uW10+KFtcclxuICAgIHtcclxuICAgICAgaWQ6ICcxJyxcclxuICAgICAgdHlwZTogJ2Fzc2lnbm1lbnQnLFxyXG4gICAgICB0aXRsZTogdCgncG9wdXAuc3RhdGljRGF0YS5hc3NpZ25tZW50LnRpdGxlJyksXHJcbiAgICAgIG1lc3NhZ2U6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuYXNzaWdubWVudC5tZXNzYWdlJyksXHJcbiAgICAgIHRpbWVzdGFtcDogJzIwMjUtMDEtMjNUMTA6MzA6MDAnLFxyXG4gICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLFxyXG4gICAgICBhY3Rpb25Vcmw6ICcvYXNzaWdubWVudHMvbWF0aC0zJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICcyJyxcclxuICAgICAgdHlwZTogJ2dyYWRlJyxcclxuICAgICAgdGl0bGU6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuZ3JhZGUudGl0bGUnKSxcclxuICAgICAgbWVzc2FnZTogdCgncG9wdXAuc3RhdGljRGF0YS5ncmFkZS5tZXNzYWdlJyksXHJcbiAgICAgIHRpbWVzdGFtcDogJzIwMjUtMDEtMjNUMDk6MTU6MDAnLFxyXG4gICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsXHJcbiAgICAgIGFjdGlvblVybDogJy9ncmFkZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzMnLFxyXG4gICAgICB0eXBlOiAnZXZlbnQnLFxyXG4gICAgICB0aXRsZTogdCgncG9wdXAuc3RhdGljRGF0YS5ldmVudC50aXRsZScpLFxyXG4gICAgICBtZXNzYWdlOiB0KCdwb3B1cC5zdGF0aWNEYXRhLmV2ZW50Lm1lc3NhZ2UnKSxcclxuICAgICAgdGltZXN0YW1wOiAnMjAyNS0wMS0yM1QwODowMDowMCcsXHJcbiAgICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxyXG4gICAgICBhY3Rpb25Vcmw6ICcvc2NoZWR1bGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzQnLFxyXG4gICAgICB0eXBlOiAnc3lzdGVtJyxcclxuICAgICAgdGl0bGU6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuc3lzdGVtLnRpdGxlJyksXHJcbiAgICAgIG1lc3NhZ2U6IHQoJ3BvcHVwLnN0YXRpY0RhdGEuc3lzdGVtLm1lc3NhZ2UnKSxcclxuICAgICAgdGltZXN0YW1wOiAnMjAyNS0wMS0yMlQxNjo0NTowMCcsXHJcbiAgICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgICAgcHJpb3JpdHk6ICdsb3cnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzUnLFxyXG4gICAgICB0eXBlOiAncmVtaW5kZXInLFxyXG4gICAgICB0aXRsZTogdCgncG9wdXAuc3RhdGljRGF0YS5yZW1pbmRlci50aXRsZScpLFxyXG4gICAgICBtZXNzYWdlOiB0KCdwb3B1cC5zdGF0aWNEYXRhLnJlbWluZGVyLm1lc3NhZ2UnKSxcclxuICAgICAgdGltZXN0YW1wOiAnMjAyNS0wMS0yMlQxNDoyMDowMCcsXHJcbiAgICAgIGlzUmVhZDogZmFsc2UsXHJcbiAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcclxuICAgICAgYWN0aW9uVXJsOiAnL2xpYnJhcnknXHJcbiAgICB9XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdW5yZWFkQ291bnQgPSBub3RpZmljYXRpb25zLmZpbHRlcihuID0+ICFuLmlzUmVhZCkubGVuZ3RoO1xyXG5cclxuICAvLyBUT0RPOiBJbXBsZW1lbnQgQVBJIGNhbGwgdG8gbWFyayBub3RpZmljYXRpb24gYXMgcmVhZFxyXG4gIGNvbnN0IG1hcmtBc1JlYWQgPSAobm90aWZpY2F0aW9uSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Tm90aWZpY2F0aW9ucyhwcmV2ID0+XHJcbiAgICAgIHByZXYubWFwKG5vdGlmaWNhdGlvbiA9PlxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5pZCA9PT0gbm90aWZpY2F0aW9uSWRcclxuICAgICAgICAgID8geyAuLi5ub3RpZmljYXRpb24sIGlzUmVhZDogdHJ1ZSB9XHJcbiAgICAgICAgICA6IG5vdGlmaWNhdGlvblxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIFRPRE86IEltcGxlbWVudCBBUEkgY2FsbCB0byBtYXJrIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICBjb25zdCBtYXJrQWxsQXNSZWFkID0gKCkgPT4ge1xyXG4gICAgc2V0Tm90aWZpY2F0aW9ucyhwcmV2ID0+XHJcbiAgICAgIHByZXYubWFwKG5vdGlmaWNhdGlvbiA9PiAoeyAuLi5ub3RpZmljYXRpb24sIGlzUmVhZDogdHJ1ZSB9KSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVE9ETzogSW1wbGVtZW50IEFQSSBjYWxsIHRvIGRpc21pc3Mgbm90aWZpY2F0aW9uXHJcbiAgY29uc3QgZGlzbWlzc05vdGlmaWNhdGlvbiA9IChub3RpZmljYXRpb25JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXROb3RpZmljYXRpb25zKHByZXYgPT5cclxuICAgICAgcHJldi5maWx0ZXIobm90aWZpY2F0aW9uID0+IG5vdGlmaWNhdGlvbi5pZCAhPT0gbm90aWZpY2F0aW9uSWQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFN1YnRpdGxlVGV4dCA9ICgpID0+IHtcclxuICAgIGlmICh1bnJlYWRDb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdCgncG9wdXAuc3VidGl0bGUuYWxsQ2F1Z2h0VXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0KCdwb3B1cC5zdWJ0aXRsZS5oYXNOZXcnLCB7XHJcbiAgICAgICAgY291bnQ6IHVucmVhZENvdW50XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9wb3ZlciBvcGVuPXtpc09wZW59IG9uT3BlbkNoYW5nZT17c2V0SXNPcGVufT5cclxuICAgICAgPFBvcG92ZXJUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgIHNpemU9XCJpY29uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8xMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBncm91cFwiXHJcbiAgICAgICAgICB0aXRsZT17dCgncG9wdXAudGl0bGUnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QmVsbCBjbGFzc05hbWU9XCJoLTUgdy01IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpzY2FsZS0xMTBcIiAvPlxyXG4gICAgICAgICAge3VucmVhZENvdW50ID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAnYWJzb2x1dGUgaC01IHctNSBwLTAgdGV4dC14cyBiZy1kZXN0cnVjdGl2ZSBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MCByb3VuZGVkLWZ1bGwnLFxyXG4gICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtbWVkaXVtIGFuaW1hdGUtcHVsc2Ugc2hhZG93LWxnJyxcclxuICAgICAgICAgICAgICAgICdib3JkZXItMiBib3JkZXItYmFja2dyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICBpc1JUTCA/ICctdG9wLTEgLWxlZnQtMScgOiAnLXRvcC0xIC1yaWdodC0xJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5yZWFkQ291bnQgPiA5ID8gJzkrJyA6IHVucmVhZENvdW50fVxyXG4gICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cclxuXHJcbiAgICAgIDxQb3BvdmVyQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAndy04MCBtYXgtdy1bY2FsYygxMDB2dy0xcmVtKV0gYmctYmFja2dyb3VuZC85NSBiYWNrZHJvcC1ibHVyLXhsIGJvcmRlciBib3JkZXItYm9yZGVyLzQwJyxcclxuICAgICAgICAgICdyb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIHAtMCBvdmVyZmxvdy1oaWRkZW4nLFxyXG4gICAgICAgICAgJ2RhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCcsXHJcbiAgICAgICAgICAnZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCcsXHJcbiAgICAgICAgICAnZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1JyxcclxuICAgICAgICAgICdkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by10b3AtMSBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLXRvcC0xJyxcclxuICAgICAgICAgICd0cmFuc2Zvcm0tZ3B1J1xyXG4gICAgICAgICl9XHJcbiAgICAgICAgYWxpZ249e2lzUlRMID8gJ3N0YXJ0JyA6ICdlbmQnfVxyXG4gICAgICAgIHNpZGVPZmZzZXQ9ezEyfVxyXG4gICAgICAgIGRpcj17aXNSVEwgPyAncnRsJyA6ICdsdHInfVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEhlYWRlciB3aXRoIGVuaGFuY2VkIGdyYWRpZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1ib3JkZXIvMjBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkvMTAgdmlhLWJhY2tncm91bmQvODAgdG8tc2Vjb25kYXJ5LzEwXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXByaW1hcnkvNSB0by10cmFuc3BhcmVudCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBpc1JUTCA/ICdmbGV4LXJvdy1yZXZlcnNlJyA6ICdmbGV4LXJvdydcclxuICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0zJyxcclxuICAgICAgICAgICAgICAgIGlzUlRMID8gJ2ZsZXgtcm93LXJldmVyc2UnIDogJ2ZsZXgtcm93J1xyXG4gICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTIuNSByb3VuZGVkLXhsIGJnLXByaW1hcnkvMTUgYmFja2Ryb3AtYmx1ci1zbSBib3JkZXIgYm9yZGVyLXByaW1hcnkvMjUgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCZWxsIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5LzIwIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3BvcHVwLnRpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTAuNSBmb250LW1lZGl1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0J1xyXG4gICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0U3VidGl0bGVUZXh0KCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7dW5yZWFkQ291bnQgPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17bWFya0FsbEFzUmVhZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAndGV4dC14cyB0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8xNSByb3VuZGVkLWxnIGgtNyBweC0zJyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dCgncG9wdXAubWFya0FsbFJlYWQnKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBFbmhhbmNlZCBOb3RpZmljYXRpb25zIExpc3Qgd2l0aCBzbW9vdGggc2Nyb2xsaW5nICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtODAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC1oLTgwIG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiBzY3JvbGwtc21vb3RoIHAtMiBzcGFjZS15LTFcIlxyXG4gICAgICAgICAgICBvbldoZWVsPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSdyZSBhdCB0aGUgYm91bmRhcmllc1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF0VG9wID0gc2Nyb2xsVG9wID09PSAwO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF0Qm90dG9tID0gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAtIDE7XHJcblxyXG4gICAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgc2Nyb2xsaW5nIHdpdGhpbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaWYgKChlLmRlbHRhWSA8IDAgJiYgYXRUb3ApIHx8IChlLmRlbHRhWSA+IDAgJiYgYXRCb3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiAndGhpbicsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMykgcmdiYSgwLDAsMCwwLjEpJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXIgYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1ncmFkaWVudC10by1iciBmcm9tLW11dGVkLzIwIHRvLW11dGVkLzQwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTQgc2hhZG93LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtbXV0ZWQtZm9yZWdyb3VuZC83MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAge3QoJ3BvcHVwLm5vTm90aWZpY2F0aW9ucycpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAge3QoJ3BvcHVwLmFsbENhdWdodFVwTWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHNwYWNlLXktMSBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBJY29uID0gZ2V0Tm90aWZpY2F0aW9uSWNvbihub3RpZmljYXRpb24udHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IGdldE5vdGlmaWNhdGlvbkNvbG9ycyhub3RpZmljYXRpb24udHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHJlbGF0aXZlIHAtMyBteC0xIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGN1cnNvci1wb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOnNoYWRvdy1sZyBob3ZlcjpzY2FsZS1bMS4wMl0gYWN0aXZlOnNjYWxlLVswLjk4XSB0cmFuc2Zvcm0tZ3B1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlciBiYWNrZHJvcC1ibHVyLXNtIHNjcm9sbC1tYi0yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW5vdGlmaWNhdGlvbi5pc1JlYWQgJiYgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5iZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5zaGFkb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NoYWRvdy1tZCBob3ZlcjpzaGFkb3ctbGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5pc1JlYWQgJiYgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdiZy1tdXRlZC8yMCBib3JkZXItYm9yZGVyLzMwIGhvdmVyOmJnLW11dGVkLzQwIGhvdmVyOmJvcmRlci1ib3JkZXIvNTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdob3ZlcjpzaGFkb3ctbWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbmltYXRlLXNsaWRlLWluLWZhZGUgb3BhY2l0eS0wJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtpbmRleCAqIDEwMH1tc2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnZm9yd2FyZHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtBc1JlYWQobm90aWZpY2F0aW9uLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5hY3Rpb25VcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGUgdG86Jywgbm90aWZpY2F0aW9uLmFjdGlvblVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVuaGFuY2VkIHVucmVhZCBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IW5vdGlmaWNhdGlvbi5pc1JlYWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIHctMi41IGgtMi41IGJnLXByaW1hcnkgcm91bmRlZC1mdWxsIHNoYWRvdy1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGUtcHVsc2UtZ2xvdyBib3JkZXIgYm9yZGVyLXByaW1hcnkvMzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ2xlZnQtMiBib3R0b20tMycgOiAncmlnaHQtMiBib3R0b20tMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVuaGFuY2VkIGRpc21pc3MgYnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIHctNyBoLTcgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOmJnLWRlc3RydWN0aXZlLzIwIGhvdmVyOnRleHQtZGVzdHJ1Y3RpdmUgcm91bmRlZC1sZyBiYWNrZHJvcC1ibHVyLXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwIGFjdGl2ZTpzY2FsZS05NScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnbGVmdC0xIHRvcC0xJyA6ICdyaWdodC0xIHRvcC0xJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbWlzc05vdGlmaWNhdGlvbihub3RpZmljYXRpb24uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGdhcC0zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnZmxleC1yb3ctcmV2ZXJzZScgOiAnZmxleC1yb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuaGFuY2VkIENvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgbWItMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICdmbGV4LXJvdy1yZXZlcnNlJyA6ICdmbGV4LXJvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBsaW5lLWNsYW1wLTEgZm9udC1wcmltYXJ5IGxlYWRpbmctdGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzaHJpbmstMCBmb250LW1lZGl1bSBweC0yIHB5LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmctbXV0ZWQvMzAgcm91bmRlZC1tZCBiYWNrZHJvcC1ibHVyLXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAndGV4dC1sZWZ0JyA6ICd0ZXh0LXJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lc3RhbXAobm90aWZpY2F0aW9uLnRpbWVzdGFtcCwgdCwgaXNSVEwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxpbmUtY2xhbXAtMiBsZWFkaW5nLXJlbGF4ZWQgbWItMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGdyb3VwLWhvdmVyOnRleHQtZm9yZWdyb3VuZC84MCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICd0ZXh0LXJpZ2h0JyA6ICd0ZXh0LWxlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5oYW5jZWQgYmFkZ2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnZmxleC1yb3ctcmV2ZXJzZSBqdXN0aWZ5LWVuZCcgOiAnZmxleC1yb3cganVzdGlmeS1zdGFydCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24ucHJpb3JpdHkgPT09ICdoaWdoJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzIHB5LTEgcHgtMi41IGgtNiByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHNoYWRvdy1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZS1wdWxzZS1nbG93IGJvcmRlciBib3JkZXItZGVzdHJ1Y3RpdmUvMzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdwb3B1cC5wcmlvcml0eS5oaWdoJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgcHktMSBweC0yLjUgaC02IHJvdW5kZWQtbGcgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tkcm9wLWJsdXItc20gc2hhZG93LXNtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOnNoYWRvdy1tZCBob3ZlcjpzY2FsZS0xMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmljb25Db2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dChgcG9wdXAudHlwZXMuJHtub3RpZmljYXRpb24udHlwZX1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogRW5oYW5jZWQgRm9vdGVyICovfVxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItYm9yZGVyLzIwIHAtMyBiZy1ncmFkaWVudC10by1yIGZyb20tbXV0ZWQvMjAgdmlhLWJhY2tncm91bmQvNjAgdG8tbXV0ZWQvMjAgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAndy1mdWxsIHRleHQtc20gcm91bmRlZC14bCBoLTkgZm9udC1tZWRpdW0gYmFja2Ryb3AtYmx1ci1zbScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLVsxLjAyXSBhY3RpdmU6c2NhbGUtWzAuOThdJyxcclxuICAgICAgICAgICAgICAgICdob3ZlcjpiZy1wcmltYXJ5LzEwIGhvdmVyOmJvcmRlci1wcmltYXJ5LzQwIGhvdmVyOnRleHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAnc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGUgdG8gZnVsbCBub3RpZmljYXRpb25zIHBhZ2UnKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3QoJ3BvcHVwLnZpZXdBbGwnKX1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcG92ZXJDb250ZW50PlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUF0QkE7Ozs7Ozs7Ozs7QUFvQ0EsTUFBTSxzQkFBc0IsQ0FBQztJQUMzQixNQUFNLFVBQVU7UUFDZCxZQUFZLDhNQUFBLENBQUEsV0FBUTtRQUNwQixPQUFPLHdOQUFBLENBQUEsZ0JBQWE7UUFDcEIsT0FBTywwTUFBQSxDQUFBLFdBQVE7UUFDZixRQUFRLHdOQUFBLENBQUEsZ0JB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QVM7Z0NBQ1AsVUFBVTtnQ0FDVixRQUFRLEdBQUcsQ0FBQzs0QkFDZDtzQ0FFQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTk0MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2xheW91dC9OYXZiYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQge1xyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bk1lbnVDb250ZW50LFxyXG4gIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgRHJvcGRvd25NZW51TGFiZWwsXHJcbiAgRHJvcGRvd25NZW51U2VwYXJhdG9yLFxyXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUnO1xyXG5pbXBvcnQgeyBVc2VyLCBHcmFkdWF0aW9uQ2FwIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IExvZ291dEJ1dHRvbiBmcm9tICcuLi9hdXRoL0xvZ291dEJ0bic7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9ob29rcy91c2VMYW5ndWFnZSc7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90aGVtZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVN3aXRjaGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL21hZGUvbGFuZ3VhZ2Utc3dpdGNoZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tICduZXh0LWludGwnO1xyXG5pbXBvcnQgVXNlckF2YXRhciBmcm9tICcuLi91c2VyL1VzZXJBdmF0YXInO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IHsgVW5pZmllZE5vdGlmaWNhdGlvblBvcHVwIH0gZnJvbSAnQC9jb21wb25lbnRzL2Rhc2hib2FyZC9VbmlmaWVkTm90aWZpY2F0aW9uUG9wdXAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gdXNlQXV0aCgpLnVzZXI7XHJcbiAgY29uc3QgeyBpc1JUTCB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCduYXZiYXInKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAnZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyLWIgYm9yZGVyLWJvcmRlciBzaGFkb3cteGwgdy1mdWxsJyxcclxuICAgICAgICBpc1JUTCA/ICdkaXJlY3Rpb24tcnRsJyA6ICdkaXJlY3Rpb24tbHRyJ1xyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgIHsvKiBNYWluIG5hdmJhciBjb250YWluZXIgLSBSVEwtYXdhcmUgbGF5b3V0ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC0xNiB3LWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIHsvKiBMb2dvIFNlY3Rpb24gLSBwb3NpdGlvbmVkIGFic29sdXRlbHkgZm9yIHByZWNpc2UgY29udHJvbCAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgIGlzUlRMID8gJ3JpZ2h0LTAnIDogJ2xlZnQtMCdcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC0yeGwgYmctcHJpbWFyeSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICA8R3JhZHVhdGlvbkNhcCBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAndGV4dC14bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIGZvbnQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3QoJ2JyYW5kJyl9XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgJ3RleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kJyxcclxuICAgICAgICAgICAgICAgICAgaXNSVEwgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0J1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dCgncG9ydGFsJyl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBDb250cm9scyBTZWN0aW9uIC0gcG9zaXRpb25lZCBhYnNvbHV0ZWx5IGZvciBwcmVjaXNlIGNvbnRyb2wgKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGFic29sdXRlIGZsZXgtcm93JyxcclxuICAgICAgICAgICAgICBpc1JUTCA/ICdsZWZ0LTAgJyA6ICdyaWdodC0wICdcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIFRoZW1lIFRvZ2dsZSAqL31cclxuICAgICAgICAgICAgPFRoZW1lVG9nZ2xlIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogTGFuZ3VhZ2UgU3dpdGNoZXIgKi99XHJcbiAgICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogTm90aWZpY2F0aW9ucyAqL31cclxuICAgICAgICAgICAgPFVuaWZpZWROb3RpZmljYXRpb25Qb3B1cCAvPlxyXG5cclxuICAgICAgICAgICAgey8qIFVzZXIgTWVudSAqL31cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTAgcm91bmRlZC0yeGwgaG92ZXI6YmctcHJpbWFyeS8xMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlckF2YXRhciBuYW1lPXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTU2IGJnLWNhcmQvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCByb3VuZGVkLTJ4bCBzaGFkb3cteGxcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249e2lzUlRMID8gJ3N0YXJ0JyA6ICdlbmQnfVxyXG4gICAgICAgICAgICAgICAgZm9yY2VNb3VudFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVMYWJlbCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGZsZXgtY29sIHNwYWNlLXktMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICdpdGVtcy1lbmQnIDogJ2l0ZW1zLXN0YXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JUTCA/ICd0ZXh0LXJpZ2h0JyA6ICd0ZXh0LWxlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgbGVhZGluZy1ub25lIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUlRMID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvciBjbGFzc05hbWU9XCJiZy1ib3JkZXIvNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAnaG92ZXI6YmctcHJpbWFyeS8xMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBjdXJzb3ItcG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSVEwgPyAnZmxleC1yb3ctcmV2ZXJzZScgOiAnZmxleC1yb3cnXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyIGNsYXNzTmFtZT17Y24oJ2gtNCB3LTQnLCBpc1JUTCA/ICdtbC0yJyA6ICdtci0yJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeVwiPnt0KCdwcm9maWxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvciBjbGFzc05hbWU9XCJiZy1ib3JkZXIvNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gY2xhc3NOYW1lPVwiaG92ZXI6YmctZGVzdHJ1Y3RpdmUvMTAgdGV4dC1kZXN0cnVjdGl2ZSByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBjdXJzb3ItcG9pbnRlciBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPExvZ291dEJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7Ozs7O0FBc0JPLFNBQVM7SUFFZCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUEsR0FBQSx1SEFBQSxDQUFBLFVBQU8sQUFBRCxJQUFJLElBQUk7SUFDdEMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUEsR0FBQSwySEFBQSxDQUFBLGNBQVcsQUFBRDtJQUM1QixNQUFNLElBQUksQ0FBQSxHQUFBLHNNQUFBLENBQUEsa0JBQWUsQUFBRCxFQUFFO0lBRTFCLHFCQUNFLDhPQUFDO1FBQ0MsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViw2R0FDQSxRQUFRLGtCQUFrQjtrQkFHNUIsY0FBQSw4T0FBQztZQUFJLFdBQVU7c0JBRWIsY0FBQSw4T0FBQztnQkFBSSxXQUFVOztrQ0FFYiw4T0FBQzt3QkFDQyxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLG9DQUNBLFFBQVEsWUFBWTs7MENBR3RCLDhPQUFDO2dDQUFJLFdBQVU7MENBQ2IsY0FBQSw4T0FBQyx3TkFBQSxDQUFBLGdCQUFhO29DQUFDLFdBQVU7Ozs7Ozs7Ozs7OzBDQUUzQiw4T0FBQztnQ0FBSSxXQUFVOztrREFDYiw4T0FBQzt3Q0FDQyxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGtEQUNBLFFBQVEsZUFBZTtrREFHeEIsRUFBRTs7Ozs7O2tEQUVMLDhPQUFDO3dDQUNDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsaUNBQ0EsUUFBUSxlQUFlO2tEQUd4QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVQsOE9BQUM7d0JBQ0MsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViw2Q0FDQSxRQUFRLFlBQVk7OzBDQUl0Qiw4T0FBQywySUFBQSxDQUFBLGNBQVc7Ozs7OzBDQUdaLDhPQUFDLGtKQUFBLENBQUEsbUJBQWdCOzs7OzswQ0FHakIsOE9BQUMsMkpBQUEsQ0FBQSwyQkFBd0I7Ozs7OzBDQUd6Qiw4T0FBQyw0SUFBQSxDQUFBLGVBQVk7O2tEQUNYLDhPQUFDLDRJQUFBLENBQUEsc0JBQW1CO3dDQUFDLE9BQU87a0RBQzFCLGNBQUEsOE9BQUMsa0lBQUEsQ0FBQSxTQUFNOzRDQUNMLFNBQVE7NENBQ1IsV0FBVTtzREFFVixjQUFBLDhPQUFDLHdJQUFBLENBQUEsVUFBVTtnREFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUd0Qiw4T0FBQyw0SUFBQSxDQUFBLHNCQUFtQjt3Q0FDbEIsV0FBVTt3Q0FDVixPQUFPLFFBQVEsVUFBVTt3Q0FDekIsVUFBVTs7MERBRVYsOE9BQUMsNElBQUEsQ0FBQSxvQkFBaUI7Z0RBQUMsV0FBVTswREFDM0IsY0FBQSw4T0FBQztvREFDQyxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDJCQUNBLFFBQVEsY0FBYzs7c0VBR3hCLDhPQUFDOzREQUNDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsaUVBQ0EsUUFBUSxlQUFlO3NFQUd4Qjs7Ozs7O3NFQUVILDhPQUFDOzREQUNDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsOENBQ0EsUUFBUSxlQUFlO3NFQUd4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBSVAsOE9BQUMsNElBQUEsQ0FBQSx3QkFBcUI7Z0RBQUMsV0FBVTs7Ozs7OzBEQUNqQyw4T0FBQyw0SUFBQSxDQUFBLG1CQUFnQjtnREFDZixXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDZFQUNBLFFBQVEscUJBQXFCOztrRUFHL0IsOE9BQUMsa01BQUEsQ0FBQSxPQUFJO3dEQUFDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsV0FBVyxRQUFRLFNBQVM7Ozs7OztrRUFDaEQsOE9BQUM7d0RBQUssV0FBVTtrRUFBZ0IsRUFBRTs7Ozs7Ozs7Ozs7OzBEQUVwQyw4T0FBQyw0SUFBQSxDQUFBLHdCQUFxQjtnREFBQyxXQUFVOzs7Ozs7MERBQ2pDLDhPQUFDLDRJQUFBLENBQUEsbUJBQWdCO2dEQUFDLFdBQVU7MERBQzFCLGNBQUEsOE9BQUMsdUlBQUEsQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMvQiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjIwMSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2xheW91dC9TdHVkZW50TGF5b3V0L1N0dWRlbnRMYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnLi4vTmF2YmFyJztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscydcclxuXHJcbmludGVyZmFjZSBTdHVkZW50TGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0dWRlbnRMYXlvdXQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH06IFN0dWRlbnRMYXlvdXRQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLXNsYXRlLTUwIHZpYS1ibHVlLTUwIHRvLWluZGlnby01MCBkYXJrOmZyb20tZ3JheS05NTAgZGFyazp2aWEtYmx1ZS05NTAgZGFyazp0by1pbmRpZ28tOTUwXCI+XHJcbiAgICAgIHsvKiBGaXhlZCBOYXZiYXIgKi99XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgIHsvKiBGaXhlZCBTaWRlYmFyICovfVxyXG4gICAgICB7LyogPFNpZGViYXIgbmEgLz4gKi99XHJcblxyXG4gICAgICB7LyogTWFpbiBDb250ZW50IEFyZWEgKi99XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICdsZzptbC02NCBwdC0xNiBtaW4taC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvJyxcclxuICAgICAgICAgICdzY3JvbGxiYXItdGhpbiBzY3JvbGxiYXItdGh1bWItYmx1ZS0yMDAgc2Nyb2xsYmFyLXRyYWNrLXRyYW5zcGFyZW50JyxcclxuICAgICAgICAgICdkYXJrOnNjcm9sbGJhci10aHVtYi1ibHVlLTgwMCcsXHJcbiAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIENvbnRlbnQgQ29udGFpbmVyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNiBsZzpwLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFIQTs7OztBQVVPLFNBQVMsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQXNCO0lBQ3ZFLHFCQUNFLDhPQUFDO1FBQUksV0FBVTs7MEJBRWIsOE9BQUMsc0lBQUEsQ0FBQSxTQUFNOzs7OzswQkFNUCw4T0FBQztnQkFDQyxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLCtDQUNBLHVFQUNBLGlDQUNBOzBCQUlGLGNBQUEsOE9BQUM7b0JBQUksV0FBVTs4QkFDYixjQUFBLDhPQUFDO3dCQUFJLFdBQVU7a0NBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjI1MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgU2Nyb2xsQXJlYVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNjcm9sbC1hcmVhXCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIFNjcm9sbEFyZWEoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290XHJcbiAgICAgIGRhdGEtc2xvdD1cInNjcm9sbC1hcmVhXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnRcclxuICAgICAgICBkYXRhLXNsb3Q9XCJzY3JvbGwtYXJlYS12aWV3cG9ydFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgc2l6ZS1mdWxsIHJvdW5kZWQtW2luaGVyaXRdIHRyYW5zaXRpb24tW2NvbG9yLGJveC1zaGFkb3ddIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTFcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnQ+XHJcbiAgICAgIDxTY3JvbGxCYXIgLz5cclxuICAgICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuQ29ybmVyIC8+XHJcbiAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuUm9vdD5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNjcm9sbEJhcih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXJcclxuICAgICAgZGF0YS1zbG90PVwic2Nyb2xsLWFyZWEtc2Nyb2xsYmFyXCJcclxuICAgICAgb3JpZW50YXRpb249e29yaWVudGF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZmxleCB0b3VjaC1ub25lIHAtcHggdHJhbnNpdGlvbi1jb2xvcnMgc2VsZWN0LW5vbmVcIixcclxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXHJcbiAgICAgICAgICBcImgtZnVsbCB3LTIuNSBib3JkZXItbCBib3JkZXItbC10cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxyXG4gICAgICAgICAgXCJoLTIuNSBmbGV4LWNvbCBib3JkZXItdCBib3JkZXItdC10cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFUaHVtYlxyXG4gICAgICAgIGRhdGEtc2xvdD1cInNjcm9sbC1hcmVhLXRodW1iXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ib3JkZXIgcmVsYXRpdmUgZmxleC0xIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IFNjcm9sbEFyZWEsIFNjcm9sbEJhciB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0FBRUE7QUFMQTs7OztBQU9BLFNBQVMsV0FBVyxFQUNsQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEdBQUcsT0FDbUQ7SUFDdEQscUJBQ0UsOE9BQUMsMEtBQUEsQ0FBQSxPQUF3QjtRQUN2QixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxZQUFZO1FBQ3pCLEdBQUcsS0FBSzs7MEJBRVQsOE9BQUMsMEtBQUEsQ0FBQSxXQUE0QjtnQkFDM0IsYUFBVTtnQkFDVixXQUFVOzBCQUVUOzs7Ozs7MEJBRUgsOE9BQUM7Ozs7OzBCQUNELDhPQUFDLDBLQUFBLENBQUEsU0FBMEI7Ozs7Ozs7Ozs7O0FBR2pDO0FBRUEsU0FBUyxVQUFVLEVBQ2pCLFNBQVMsRUFDVCxjQUFjLFVBQVUsRUFDeEIsR0FBRyxPQUNrRTtJQUNyRSxxQkFDRSw4T0FBQywwS0FBQSxDQUFBLHNCQUF1QztRQUN0QyxhQUFVO1FBQ1YsYUFBYTtRQUNiLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysc0RBQ0EsZ0JBQWdCLGNBQ2QsOENBQ0YsZ0JBQWdCLGdCQUNkLGdEQUNGO1FBRUQsR0FBRyxLQUFLO2tCQUVULGNBQUEsOE9BQUMsMEtBQUEsQ0FBQSxrQkFBbUM7WUFDbEMsYUFBVTtZQUNWLFdBQVU7Ozs7Ozs7Ozs7O0FBSWxCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyMzIxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVNZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFNjcm9sbEFyZWEgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvc2Nyb2xsLWFyZWEnO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWRnZSc7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSAnQC9jb25zdGFudHMvc2lkZU1lbnVEYXRhJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51LCBYSWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9ob29rcy91c2VMYW5ndWFnZSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcblxyXG5pbnRlcmZhY2UgU2lkZU5hdkNvbnRlbnRQcm9wcyB7XHJcbiAgbmF2SXRlbXM6IE5hdkl0ZW1bXTtcclxuICBvbkl0ZW1DbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlTmF2Q29udGVudCh7IG5hdkl0ZW1zLCBvbkl0ZW1DbGljayB9OiBTaWRlTmF2Q29udGVudFByb3BzKSB7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIGNvbnN0IHsgaXNSVEwgfSA9IHVzZUxhbmd1YWdlKCk7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwiZmxleCBoLWZ1bGwgdy1mdWxsIGZsZXgtY29sIGJnLWJhY2tncm91bmQvODAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItYm9yZGVyLzUwXCIsXHJcbiAgICAgIGlzUlRMID8gXCJib3JkZXItbFwiIDogXCJib3JkZXItclwiXHJcbiAgICApfT5cclxuICAgICAgey8qIE5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxTY3JvbGxBcmVhIGNsYXNzTmFtZT1cImZsZXgtMSBweC00IHB5LThcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAge25hdkl0ZW1zLm1hcCgoeyBsYWJlbEtleSwgaHJlZiwgaWNvbjogSWNvbiwgYmFkZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lLmVuZHNXaXRoKGhyZWYpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkTGFiZWwgPSB0KGxhYmVsS2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtsYWJlbEtleX1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICdncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0zLjUgcm91bmRlZC0yeGwgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS1bMS4wMl0gYWN0aXZlOnNjYWxlLVswLjk4XScsXHJcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8xMCBob3ZlcjpzaGFkb3ctbWQgaG92ZXI6Ym9yZGVyIGhvdmVyOmJvcmRlci1wcmltYXJ5LzIwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICBpc1JUTCA/ICdmbGV4LXJvdy1yZXZlcnNlJyA6ICdmbGV4LXJvdydcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCIsXHJcbiAgICAgICAgICAgICAgICAgIGlzUlRMID8gXCJmbGV4LXJvdy1yZXZlcnNlXCIgOiBcImZsZXgtcm93XCJcclxuICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICdwLTIgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcHJpbWFyeS1mb3JlZ3JvdW5kLzIwIHNoYWRvdy1zbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCBncm91cC1ob3ZlcjpzaGFkb3ctc20nXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaC01IHctNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtcHJpbWFyeS1mb3JlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtY3VycmVudCBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnkgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGUgbGVhZGluZy1yZWxheGVkIGZvbnQtcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMID8gXCJ0ZXh0LXJpZ2h0XCIgOiBcInRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVkTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2JhZGdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17aXNBY3RpdmUgPyAnc2Vjb25kYXJ5JyA6ICdvdXRsaW5lJ31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMgcHgtMyBweS0xIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHJvdW5kZWQteGwgc2hhZG93LXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXByaW1hcnktZm9yZWdyb3VuZC8yMCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBib3JkZXItcHJpbWFyeS1mb3JlZ3JvdW5kLzMwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSBib3JkZXItcHJpbWFyeS8yMCBob3ZlcjpiZy1wcmltYXJ5LzIwIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSdcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhZGdlfVxyXG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9TY3JvbGxBcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNpZGVNZW51UHJvcHMge1xyXG4gIG5hdkl0ZW1zOiBOYXZJdGVtW107XHJcbiAgb25JdGVtQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZU1lbnUoeyBuYXZJdGVtcywgb25JdGVtQ2xpY2sgfTogU2lkZU1lbnVQcm9wcykge1xyXG4gIGNvbnN0IFtpc1NpZGViYXJPcGVuLCBzZXRJc1NpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGlzUlRMIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGNvbnN0IE1lbW9pemVkU2lkZU5hdkNvbnRlbnQgPSBSZWFjdC5tZW1vKFNpZGVOYXZDb250ZW50KTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIERlc2t0b3AgU2lkZWJhciAqL31cclxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJmaXhlZCB0b3AtMTYgaC1bY2FsYygxMDB2aC00cmVtKV0gdy03MiB6LTQwIGhpZGRlbiBsZzpmbGV4IGJnLWJhY2tncm91bmQvODAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItYm9yZGVyLzUwIHNoYWRvdy14bFwiLFxyXG4gICAgICAgIGlzUlRMID8gXCJyaWdodC0wIGJvcmRlci1sIHJvdW5kZWQtbC0yeGxcIiA6IFwibGVmdC0wIGJvcmRlci1yIHJvdW5kZWQtci0yeGxcIlxyXG4gICAgICApfT5cclxuICAgICAgICA8TWVtb2l6ZWRTaWRlTmF2Q29udGVudCBuYXZJdGVtcz17bmF2SXRlbXN9IG9uSXRlbUNsaWNrPXtvbkl0ZW1DbGlja30gLz5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgTWVudSBCdXR0b24gKi99XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1NpZGViYXJPcGVuKHRydWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcImxnOmhpZGRlbiBmaXhlZCBib3R0b20tOCB6LTUwIGJnLWJhY2tncm91bmQgYm9yZGVyIGJvcmRlci1ib3JkZXIgcC0yIHJvdW5kZWQteGwgc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1wcmltYXJ5LzEwXCIsXHJcbiAgICAgICAgICBpc1JUTCA/IFwicmlnaHQtNFwiIDogXCJsZWZ0LTRcIlxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZm9yZWdyb3VuZFwiIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIE1vYmlsZSBTaWRlYmFyICovfVxyXG4gICAgICA8YXNpZGVcclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgJ2ZpeGVkIHRvcC0wIGgtZnVsbCB3LTcyIHotNTAgYmctYmFja2dyb3VuZC85MCBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlci1ib3JkZXIvNTAgc2hhZG93LXhsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBsZzpoaWRkZW4nLFxyXG4gICAgICAgICAgaXNSVEwgPyAncmlnaHQtMCBib3JkZXItbCByb3VuZGVkLWwtMnhsJyA6ICdsZWZ0LTAgYm9yZGVyLXIgcm91bmRlZC1yLTJ4bCcsXHJcbiAgICAgICAgICBpc1NpZGViYXJPcGVuIFxyXG4gICAgICAgICAgICA/ICd0cmFuc2xhdGUteC0wJyBcclxuICAgICAgICAgICAgOiBpc1JUTCA/ICd0cmFuc2xhdGUteC1mdWxsJyA6ICctdHJhbnNsYXRlLXgtZnVsbCdcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJmbGV4IHAtNFwiLFxyXG4gICAgICAgICAgaXNSVEwgPyBcImp1c3RpZnktc3RhcnRcIiA6IFwianVzdGlmeS1lbmRcIlxyXG4gICAgICAgICl9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTaWRlYmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLXhsIGhvdmVyOmJnLXByaW1hcnkvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1mb3JlZ3JvdW5kXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZW1vaXplZFNpZGVOYXZDb250ZW50XHJcbiAgICAgICAgICBuYXZJdGVtcz17bmF2SXRlbXN9XHJcbiAgICAgICAgICBvbkl0ZW1DbGljaz17KCkgPT4gc2V0SXNTaWRlYmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgT3ZlcmxheSAqL31cclxuICAgICAge2lzU2lkZWJhck9wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJhY2tncm91bmQvNTAgYmFja2Ryb3AtYmx1ci1zbSB6LTQwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1NpZGViYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7Ozs7OztBQWtCTyxTQUFTLGVBQWUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUF1QjtJQUMzRSxNQUFNLFdBQVcsQ0FBQSxHQUFBLGtJQUFBLENBQUEsY0FBVyxBQUFEO0lBQzNCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFBLEdBQUEsMkhBQUEsQ0FBQSxjQUFXLEFBQUQ7SUFDNUIsTUFBTSxJQUFJLENBQUEsR0FBQSxzTUFBQSxDQUFBLGtCQUFlLEFBQUQ7SUFFeEIscUJBQ0UsOE9BQUM7UUFBSSxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLGtGQUNBLFFBQVEsYUFBYTtrQkFHckIsY0FBQSw4T0FBQywwSUFBQSxDQUFBLGFBQVU7WUFBQyxXQUFVO3NCQUNwQixjQUFBLDhPQUFDO2dCQUFJLFdBQVU7MEJBQ1osU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFO29CQUNsRCxNQUFNLFdBQVcsU0FBUyxRQUFRLENBQUM7b0JBQ25DLE1BQU0sa0JBQWtCLEVBQUU7b0JBQzFCLHFCQUNFLDhPQUFDLDRKQUFBLENBQUEsVUFBSTt3QkFFSCxNQUFNO3dCQUNOLFNBQVM7d0JBQ1QsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixvTEFDQSxXQUNJLDBFQUNBLCtJQUNKLFFBQVEscUJBQXFCOzswQ0FHL0IsOE9BQUM7Z0NBQUksV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDZiwyQkFDQSxRQUFRLHFCQUFxQjs7a0RBRTdCLDhPQUFDO3dDQUNDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsOENBQ0EsV0FDSSx1Q0FDQTtrREFHTixjQUFBLDhPQUFDOzRDQUNDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsdUNBQ0EsV0FDSSw0QkFDQTs7Ozs7Ozs7Ozs7a0RBSVYsOE9BQUM7d0NBQUssV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDaEIsMERBQ0EsUUFBUSxlQUFlO2tEQUV0Qjs7Ozs7Ozs7Ozs7OzRCQUdKLHVCQUNDLDhPQUFDLGlJQUFBLENBQUEsUUFBSztnQ0FDSixTQUFTLFdBQVcsY0FBYztnQ0FDbEMsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixvRkFDQSxXQUNJLGtGQUNBOzBDQUdMOzs7Ozs7O3VCQWpEQTs7Ozs7Z0JBc0RYOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7QUFPTyxTQUFTLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFpQjtJQUMvRCxNQUFNLENBQUMsZUFBZSxpQkFBaUIsR0FBRyxDQUFBLEdBQUEscU1BQUEsQ0FBQSxXQUFRLEFBQUQsRUFBRTtJQUNuRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQSxHQUFBLDJIQUFBLENBQUEsY0FBVyxBQUFEO0lBQzVCLE1BQU0sdUNBQXlCLHFNQUFBLENBQUEsVUFBSyxDQUFDLElBQUksQ0FBQztJQUUxQyxxQkFDRTs7MEJBRUUsOE9BQUM7Z0JBQU0sV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDakIsMkhBQ0EsUUFBUSxtQ0FBbUM7MEJBRTNDLGNBQUEsOE9BQUM7b0JBQXVCLFVBQVU7b0JBQVUsYUFBYTs7Ozs7Ozs7Ozs7MEJBSTNELDhPQUFDO2dCQUNDLFNBQVMsSUFBTSxpQkFBaUI7Z0JBQ2hDLFdBQVcsQ0FBQSxHQUFBLG1IQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsNklBQ0EsUUFBUSxZQUFZOzBCQUd0QixjQUFBLDhPQUFDLGtNQUFBLENBQUEsT0FBSTtvQkFBQyxXQUFVOzs7Ozs7Ozs7OzswQkFJbEIsOE9BQUM7Z0JBQ0MsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVix5SUFDQSxRQUFRLG1DQUFtQyxpQ0FDM0MsZ0JBQ0ksa0JBQ0EsUUFBUSxxQkFBcUI7O2tDQUduQyw4T0FBQzt3QkFBSSxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLFlBQ0EsUUFBUSxrQkFBa0I7a0NBRTFCLGNBQUEsOE9BQUM7NEJBQ0MsU0FBUyxJQUFNLGlCQUFpQjs0QkFDaEMsV0FBVTtzQ0FFVixjQUFBLDhPQUFDLGdNQUFBLENBQUEsUUFBSztnQ0FBQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQiw4T0FBQzt3QkFDQyxVQUFVO3dCQUNWLGFBQWEsSUFBTSxpQkFBaUI7Ozs7Ozs7Ozs7OztZQUt2QywrQkFDQyw4T0FBQztnQkFDQyxXQUFVO2dCQUNWLFNBQVMsSUFBTSxpQkFBaUI7Ozs7Ozs7O0FBSzFDIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyNTE4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFN0dWRlbnRMYXlvdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L1N0dWRlbnRMYXlvdXQvU3R1ZGVudExheW91dCdcclxuZXhwb3J0IHsgTmF2YmFyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9OYXZiYXInXHJcbmV4cG9ydCB7IFNpZGVNZW51IH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9TaWRlTWVudSdcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0EiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI1MzgsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29uc3RhbnRzL3NpZGVNZW51RGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEhvbWUsXHJcbiAgQm9vayxcclxuICBDYWxlbmRhcixcclxuICBDbGlwYm9hcmRMaXN0LFxyXG4gIEJhckNoYXJ0MyxcclxuICBTZXR0aW5ncyxcclxufSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbSB7XHJcbiAgbGFiZWxLZXk6IHN0cmluZ1xyXG4gIGhyZWY6IHN0cmluZ1xyXG4gIGljb246IEx1Y2lkZUljb25cclxuICBiYWRnZT86IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIFJvbGUgPSAnc3R1ZGVudCcgfCAndGVhY2hlcicgfCAnYWRtaW4nIHwgJ3N1cGVyLWFkbWluJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1zRGF0YTogUmVjb3JkPFJvbGUsIChpZDogc3RyaW5nKSA9PiBOYXZJdGVtW10+ID0ge1xyXG4gIHN0dWRlbnQ6IChpZDogc3RyaW5nKSA9PiBbXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5kYXNoYm9hcmQnLCBocmVmOiBgL3N0dWRlbnQvJHtpZH1gLCBpY29uOiBIb21lLCBiYWRnZTogJycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmNvdXJzZXMnLCBocmVmOiBgL3N0dWRlbnQvJHtpZH0vY291cnNlc2AsIGljb246IEJvb2ssIGJhZGdlOiAnMycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmFzc2lnbm1lbnRzJywgaHJlZjogYC9zdHVkZW50LyR7aWR9L2Fzc2lnbm1lbnRgLCBpY29uOiBDbGlwYm9hcmRMaXN0LCBiYWRnZTogJzUnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5ncmFkZXMnLCBocmVmOiBgL3N0dWRlbnQvJHtpZH0vZ3JhZGVzYCwgaWNvbjogQmFyQ2hhcnQzLCBiYWRnZTogJ05ldycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmNhbGVuZGFyJywgaHJlZjogYC9zdHVkZW50LyR7aWR9L2NhbGVuZGFyYCwgaWNvbjogQ2FsZW5kYXIsIGJhZGdlOiAnJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuc2VjdGlvbnMnLCBocmVmOiBgL3N0dWRlbnQvJHtpZH0vc2VjdGlvbnNgLCBpY29uOiBDbGlwYm9hcmRMaXN0LCBiYWRnZTogJycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnNldHRpbmdzJywgaHJlZjogYC9zdHVkZW50LyR7aWR9L3NldHRpbmdzYCwgaWNvbjogU2V0dGluZ3MsIGJhZGdlOiAnJyB9LFxyXG5cclxuICBdLFxyXG5cclxuICB0ZWFjaGVyOiAoaWQ6IHN0cmluZykgPT4gW1xyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuZGFzaGJvYXJkJywgaHJlZjogYC90ZWFjaGVyLyR7aWR9YCwgaWNvbjogSG9tZSwgYmFkZ2U6ICcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5jb3Vyc2VzJywgaHJlZjogYC90ZWFjaGVyLyR7aWR9L2NvdXJzZXNgLCBpY29uOiBCb29rLCBiYWRnZTogJzMnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5hc3NpZ25tZW50cycsIGhyZWY6IGAvdGVhY2hlci8ke2lkfS9hc3NpZ25tZW50c2AsIGljb246IENsaXBib2FyZExpc3QsIGJhZGdlOiAnNScgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnNlY3Rpb25zJywgaHJlZjogYC90ZWFjaGVyLyR7aWR9L3NlY3Rpb25zYCwgaWNvbjogQ2xpcGJvYXJkTGlzdCwgYmFkZ2U6ICcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5zZXR0aW5ncycsIGhyZWY6IGAvdGVhY2hlci8ke2lkfS9zZXR0aW5nc2AsIGljb246IFNldHRpbmdzLCBiYWRnZTogJycgfSxcclxuICBdLFxyXG5cclxuICBhZG1pbjogKGlkOiBzdHJpbmcpID0+IFtcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmRhc2hib2FyZCcsIGhyZWY6IGAvYWRtaW4vJHtpZH1gLCBpY29uOiBIb21lLCBiYWRnZTogJycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmNvbGxlZ2VzJywgaHJlZjogYC9hZG1pbi8ke2lkfS9jb2xsZWdlc2AsIGljb246IEJhckNoYXJ0MywgYmFkZ2U6ICdOZXcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5kZXBhcnRtZW50cycsIGhyZWY6IGAvYWRtaW4vJHtpZH0vZGVwYXJ0bWVudHNgLCBpY29uOiBCYXJDaGFydDMsIGJhZGdlOiAnTmV3JyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuY291cnNlcycsIGhyZWY6IGAvYWRtaW4vJHtpZH0vY291cnNlc2AsIGljb246IENsaXBib2FyZExpc3QsIGJhZGdlOiAnNScgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnRlYWNoZXJzJywgaHJlZjogYC9hZG1pbi8ke2lkfS90ZWFjaGVyc2AsIGljb246IEJvb2ssIGJhZGdlOiAnMycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnNldHRpbmdzJywgaHJlZjogYC9hZG1pbi8ke2lkfS9zZXR0aW5nc2AsIGljb246IFNldHRpbmdzLCBiYWRnZTogJycgfSxcclxuICBdLFxyXG5cclxuICAnc3VwZXItYWRtaW4nOiAoaWQ6IHN0cmluZykgPT4gW1xyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuZGFzaGJvYXJkJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfWAsIGljb246IEhvbWUsIGJhZGdlOiAnJyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIudW5pdmVyc2l0eScsIGhyZWY6IGAvc3VwZXItYWRtaW4vJHtpZH0vdW5pdmVyc2l0eWAsIGljb246IEJvb2ssIGJhZGdlOiAnMycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLmNvbGxlZ2VzJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS9jb2xsZWdlc2AsIGljb246IEJhckNoYXJ0MywgYmFkZ2U6ICdOZXcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5kZXBhcnRtZW50cycsIGhyZWY6IGAvc3VwZXItYWRtaW4vJHtpZH0vZGVwYXJ0bWVudHNgLCBpY29uOiBCYXJDaGFydDMsIGJhZGdlOiAnTmV3JyB9LFxyXG4gICAgeyBsYWJlbEtleTogJ3NpZGViYXIuY291cnNlcycsIGhyZWY6IGAvc3VwZXItYWRtaW4vJHtpZH0vY291cnNlc2AsIGljb246IENsaXBib2FyZExpc3QsIGJhZGdlOiAnNScgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnRlYWNoZXJzJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS90ZWFjaGVyc2AsIGljb246IEJvb2ssIGJhZGdlOiAnMycgfSxcclxuICAgIHsgbGFiZWxLZXk6ICdzaWRlYmFyLnN0dWRlbnRzJywgaHJlZjogYC9zdXBlci1hZG1pbi8ke2lkfS9zdHVkZW50c2AsIGljb246IEJhckNoYXJ0MywgYmFkZ2U6ICdOZXcnIH0sXHJcbiAgICB7IGxhYmVsS2V5OiAnc2lkZWJhci5zZXR0aW5ncycsIGhyZWY6IGAvc3VwZXItYWRtaW4vJHtpZH0vc2V0dGluZ3NgLCBpY29uOiBTZXR0aW5ncywgYmFkZ2U6ICcnIH0sXHJcbiAgXSxcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CTyxNQUFNLGVBQXdEO0lBQ25FLFNBQVMsQ0FBQyxLQUFlO1lBQ3ZCO2dCQUFFLFVBQVU7Z0JBQXFCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSTtnQkFBRSxNQUFNLG1NQUFBLENBQUEsT0FBSTtnQkFBRSxPQUFPO1lBQUc7WUFDL0U7Z0JBQUUsVUFBVTtnQkFBbUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsQ0FBQztnQkFBRSxNQUFNLGtNQUFBLENBQUEsT0FBSTtnQkFBRSxPQUFPO1lBQUk7WUFDdEY7Z0JBQUUsVUFBVTtnQkFBdUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLFdBQVcsQ0FBQztnQkFBRSxNQUFNLHdOQUFBLENBQUEsZ0JBQWE7Z0JBQUUsT0FBTztZQUFJO1lBQ3RHO2dCQUFFLFVBQVU7Z0JBQWtCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxrTkFBQSxDQUFBLFlBQVM7Z0JBQUUsT0FBTztZQUFNO1lBQzNGO2dCQUFFLFVBQVU7Z0JBQW9CLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUM7Z0JBQUUsTUFBTSwwTUFBQSxDQUFBLFdBQVE7Z0JBQUUsT0FBTztZQUFHO1lBQzNGO2dCQUFFLFVBQVU7Z0JBQW9CLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUM7Z0JBQUUsTUFBTSx3TkFBQSxDQUFBLGdCQUFhO2dCQUFFLE9BQU87WUFBRztZQUNoRztnQkFBRSxVQUFVO2dCQUFvQixNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDO2dCQUFFLE1BQU0sME1BQUEsQ0FB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QUFPO1lBQUk7WUFDNUY7Z0JBQUUsVUFBVTtnQkFBb0IsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFBRSxNQUFNLGtOQUFBLENBQUEsWUFBUztnQkFBRSxPQUFPO1lBQU07WUFDbkc7Z0JBQUUsVUFBVTtnQkFBb0IsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFBRSxNQUFNLDBNQUFBLENBQUEsV0FBUTtnQkFBRSxPQUFPO1lBQUc7U0FDaEc7QUFDSCIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjcxOCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2Vycm9yL0Vycm9yQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IEFsZXJ0VHJpYW5nbGUsIFJlZnJlc2hDdywgSG9tZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgZmFsbGJhY2s/OiBSZWFjdE5vZGU7XHJcbiAgb25FcnJvcj86IChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogUmVhY3QuRXJyb3JJbmZvKSA9PiB2b2lkO1xyXG4gIHNob3dIb21lQnV0dG9uPzogYm9vbGVhbjtcclxuICBsZXZlbD86ICdwYWdlJyB8ICdjb21wb25lbnQnIHwgJ2FwcCc7XHJcbiAgb25OYXZpZ2F0ZUhvbWU/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGhhc0Vycm9yOiBib29sZWFuO1xyXG4gIGVycm9yPzogRXJyb3I7XHJcbiAgZXJyb3JJbmZvPzogUmVhY3QuRXJyb3JJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogRXJyb3IpOiBTdGF0ZSB7XHJcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IsIGVycm9ySW5mbzogdW5kZWZpbmVkIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYFske3RoaXMucHJvcHMubGV2ZWwgfHwgJ1Vua25vd24nfSBFcnJvciBCb3VuZGFyeV06YCwgZXJyb3IpO1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgSW5mbzonLCBlcnJvckluZm8pO1xyXG5cclxuICAgIC8vIENhbGwgY3VzdG9tIGVycm9yIGhhbmRsZXIgaWYgcHJvdmlkZWRcclxuICAgIHRoaXMucHJvcHMub25FcnJvcj8uKGVycm9yLCBlcnJvckluZm8pO1xyXG5cclxuICAgIC8vIFN0b3JlIGVycm9yIGluZm8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySW5mbyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUmV0cnkgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IGZhbHNlLCBlcnJvcjogdW5kZWZpbmVkLCBlcnJvckluZm86IHVuZGVmaW5lZCB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZVJlZnJlc2ggPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHb0hvbWUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbk5hdmlnYXRlSG9tZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uTmF2aWdhdGVIb21lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBGYWxsYmFjayB0byB3aW5kb3cubG9jYXRpb24gaWYgbm8gbmF2aWdhdGlvbiBoYW5kbGVyIGlzIHByb3ZpZGVkXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XHJcbiAgICAgIC8vIFVzZSBjdXN0b20gZmFsbGJhY2sgaWYgcHJvdmlkZWRcclxuICAgICAgaWYgKHRoaXMucHJvcHMuZmFsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mYWxsYmFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRGVmYXVsdCBlcnJvciBVSSBiYXNlZCBvbiBsZXZlbFxyXG4gICAgICBjb25zdCB7IGxldmVsID0gJ2NvbXBvbmVudCcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBpZiAobGV2ZWwgPT09ICdhcHAnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtOCBiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJoLTIwIHctMjAgdGV4dC1kZXN0cnVjdGl2ZSBteC1hdXRvIG1iLTZcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPkFwcGxpY2F0aW9uIEVycm9yPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIGFwcGxpY2F0aW9uIGVuY291bnRlcmVkIGEgY3JpdGljYWwgZXJyb3IuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIG9yIGNvbnRhY3Qgc3VwcG9ydCBpZiB0aGUgcHJvYmxlbSBwZXJzaXN0cy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0zIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVmcmVzaH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgUmVmcmVzaCBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUdvSG9tZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEhvbWUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiB0aGlzLnN0YXRlLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yIERldGFpbHMgKERldmVsb3BtZW50KVxyXG4gICAgICAgICAgICAgICAgICA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibXQtMiBwLTQgYmctbXV0ZWQgcm91bmRlZC1sZyB0ZXh0LXhzIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9ySW5mbz8uY29tcG9uZW50U3RhY2t9XHJcbiAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxldmVsID09PSAncGFnZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bNjB2aF0gcC04XCI+XHJcbiAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LWRlc3RydWN0aXZlIG1iLTRcIiAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+UGFnZSBFcnJvcjwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi00IHRleHQtY2VudGVyIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgICAgVGhpcyBwYWdlIGVuY291bnRlcmVkIGFuIGVycm9yLiBZb3UgY2FuIHRyeSByZWZyZXNoaW5nIG9yIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2UuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJldHJ5fSB2YXJpYW50PVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlZnJlc2h9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8UmVmcmVzaEN3IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dIb21lQnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUdvSG9tZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEhvbWUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ29tcG9uZW50IGxldmVsIGVycm9yXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1kZXN0cnVjdGl2ZS8yMCByb3VuZGVkLWxnIGJnLWRlc3RydWN0aXZlLzVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMlwiPlxyXG4gICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZGVzdHJ1Y3RpdmVcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZGVzdHJ1Y3RpdmVcIj5Db21wb25lbnQgRXJyb3I8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTNcIj5cclxuICAgICAgICAgICAgVGhpcyBjb21wb25lbnQgZmFpbGVkIHRvIGxvYWQgcHJvcGVybHkuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXRyeX0+XHJcbiAgICAgICAgICAgIFJldHJ5XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFdyYXBwZXIgY29tcG9uZW50IHRoYXQgcHJvdmlkZXMgTmV4dC5qcyByb3V0ZXIgZnVuY3Rpb25hbGl0eVxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeVdpdGhSb3V0ZXIocHJvcHM6IE9taXQ8UHJvcHMsICdvbk5hdmlnYXRlSG9tZSc+KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlSG9tZSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxFcnJvckJvdW5kYXJ5IHsuLi5wcm9wc30gb25OYXZpZ2F0ZUhvbWU9e2hhbmRsZU5hdmlnYXRlSG9tZX0gLz47XHJcbn1cclxuXHJcbi8vIEV4cG9ydCB0aGUgd3JhcHBlciBhcyBkZWZhdWx0IHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeVdpdGhSb3V0ZXI7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBOzs7Ozs7QUFzQk8sTUFBTSxzQkFBc0IscU1BQUEsQ0FBQSxZQUFTO0lBQzFDLFlBQVksS0FBWSxDQUFFO1FBQ3hCLEtBQUssQ0FBQztRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFBRSxVQUFVO1FBQU07SUFDakM7SUFFQSxPQUFPLHlCQUF5QixLQUFZLEVBQVM7UUFDbkQsT0FBTztZQUFFLFVBQVU7WUFBTTtZQUFPLFdBQVc7UUFBVTtJQUN2RDtJQUNBLGtCQUFrQixLQUFZLEVBQUUsU0FBMEIsRUFBRTtRQUMxRCxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxVQUFVLGlCQUFpQixDQUFDLEVBQUU7UUFDcEUsUUFBUSxLQUFLLENBQUMsZUFB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U0FBUyxJQUFJLENBQUMsWUFBWTtvQ0FBRSxXQUFVOztzREFDOUQsOE9BQUMsbU1BQUEsQ0FBQSxPQUFJOzRDQUFDLFdBQVU7Ozs7Ozt3Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU94QztZQUVBLHdCQUF3QjtZQUN4QixxQkFDRSw4T0FBQztnQkFBSSxXQUFVOztrQ0FDYiw4T0FBQzt3QkFBSSxXQUFVOzswQ0FDYiw4T0FBQyx3TkFBQSxDQUFBLGdCQUFhO2dDQUFDLFdBQVU7Ozs7OzswQ0FDekIsOE9BQUM7Z0NBQUssV0FBVTswQ0FBdUM7Ozs7Ozs7Ozs7OztrQ0FFekQsOE9BQUM7d0JBQUUsV0FBVTtrQ0FBcUM7Ozs7OztrQ0FHbEQsOE9BQUMsa0lBQUEsQ0FBQSxTQUFNO3dCQUFDLE1BQUs7d0JBQUssU0FBUTt3QkFBVSxTQUFTLElBQUksQ0FBQyxXQUFXO2tDQUFFOzs7Ozs7Ozs7Ozs7UUFLckU7UUFFQSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtJQUM1QjtBQUNGO0FBR08sU0FBUyx3QkFBd0IsS0FBb0M7SUFDMUUsTUFBTSxTQUFTLENBQUEsR0FBQSxrSUFBQSxDQUFBLFlBQVMsQUFBRDtJQUV2QixNQUFNLHFCQUFxQjtRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQU8sOE9BQUM7UUFBZSxHQUFHLEtBQUs7UUFBRSxnQkFBZ0I7Ozs7OztBQUNuRDt1Q0FHZSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzA2NSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2Vycm9yL1BhZ2VFcnJvckJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2VFcnJvckJvdW5kYXJ5UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgc2hvd0hvbWVCdXR0b24/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZUVycm9yQm91bmRhcnkoeyBjaGlsZHJlbiwgc2hvd0hvbWVCdXR0b24gPSB0cnVlIH06IFBhZ2VFcnJvckJvdW5kYXJ5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgbGV2ZWw9XCJwYWdlXCJcclxuICAgICAgc2hvd0hvbWVCdXR0b249e3Nob3dIb21lQnV0dG9ufVxyXG4gICAgICBvbkVycm9yPXsoZXJyb3IsIGVycm9ySW5mbykgPT4ge1xyXG4gICAgICAgIC8vIExvZyBwYWdlLWxldmVsIGVycm9ycyBmb3IgbW9uaXRvcmluZ1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tQYWdlIEVycm9yXTonLCB7XHJcbiAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcclxuICAgICAgICAgIGNvbXBvbmVudFN0YWNrOiBlcnJvckluZm8uY29tcG9uZW50U3RhY2ssXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHVybDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6ICd1bmtub3duJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIZXJlIHlvdSBjb3VsZCBzZW5kIHRvIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXHJcbiAgICAgICAgLy8gRXhhbXBsZTogU2VudHJ5LCBMb2dSb2NrZXQsIGV0Yy5cclxuICAgICAgICAvLyBlcnJvclJlcG9ydGluZ1NlcnZpY2UuY2FwdHVyZUV4Y2VwdGlvbihlcnJvciwgeyBleHRyYTogZXJyb3JJbmZvIH0pO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0E7QUFIQTs7O0FBVU8sU0FBUyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLElBQUksRUFBMEI7SUFDM0YscUJBQ0UsOE9BQUMsNElBQUEsQ0FBQSxnQkFBYTtRQUNaLE9BQU07UUFDTixnQkFBZ0I7UUFDaEIsU0FBUyxDQUFDLE9BQU87WUFDZix1Q0FBdUM7WUFDdkMsUUFBUSxLQUFLLENBQUMsaUJBQWlCO2dCQUM3QixPQUFPLE1BQU0sT0FBTztnQkFDcEIsT0FBTyxNQUFNLEtBQUs7Z0JBQ2xCLGdCQUFnQixVQUFVLGNBQWM7Z0JBQ3hDLFdBQVcsSUFBSSxPQUFPLFdBQVc7Z0JBQ2pDLEtBQUssc0NBQWdDLDBCQUF1QjtZQUM5RDtRQUVBLGlEQUFpRDtRQUNqRCxtQ0FBbUM7UUFDbkMsdUVBQXVFO1FBQ3pFO2tCQUVDOzs7Ozs7QUFHUCIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzEwMSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2Vycm9yL0NvbXBvbmVudEVycm9yQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vRXJyb3JCb3VuZGFyeSc7XHJcblxyXG5pbnRlcmZhY2UgQ29tcG9uZW50RXJyb3JCb3VuZGFyeVByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIGZhbGxiYWNrPzogUmVhY3ROb2RlO1xyXG4gIGNvbXBvbmVudE5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnRFcnJvckJvdW5kYXJ5KHsgXHJcbiAgY2hpbGRyZW4sIFxyXG4gIGZhbGxiYWNrLFxyXG4gIGNvbXBvbmVudE5hbWUgPSAnVW5rbm93biBDb21wb25lbnQnXHJcbn06IENvbXBvbmVudEVycm9yQm91bmRhcnlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JCb3VuZGFyeVxyXG4gICAgICBsZXZlbD1cImNvbXBvbmVudFwiXHJcbiAgICAgIGZhbGxiYWNrPXtmYWxsYmFja31cclxuICAgICAgb25FcnJvcj17KGVycm9yLCBlcnJvckluZm8pID0+IHtcclxuICAgICAgICAvLyBMb2cgY29tcG9uZW50LWxldmVsIGVycm9yc1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtDb21wb25lbnQgRXJyb3IgLSAke2NvbXBvbmVudE5hbWV9XTpgLCB7XHJcbiAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcclxuICAgICAgICAgIGNvbXBvbmVudFN0YWNrOiBlcnJvckluZm8uY29tcG9uZW50U3RhY2ssXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIGNvbXBvbmVudE5hbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ29tcG9uZW50IGVycm9ycyBhcmUgdXN1YWxseSBsZXNzIGNyaXRpY2FsXHJcbiAgICAgICAgLy8gYnV0IHN0aWxsIHdvcnRoIHRyYWNraW5nIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0FBSEE7OztBQVdPLFNBQVMsdUJBQXVCLEVBQ3JDLFFBQVEsRUFDUixRQUFRLEVBQ1IsZ0JBQWdCLG1CQUFtQixFQUNQO0lBQzVCLHFCQUNFLDhPQUFDLDRJQUFBLENBQUEsZ0JBQWE7UUFDWixPQUFNO1FBQ04sVUFBVTtRQUNWLFNBQVMsQ0FBQyxPQUFPO1lBQ2YsNkJBQTZCO1lBQzdCLFFBQVEsS0FBSyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRTtnQkFDckQsT0FBTyxNQUFNLE9BQU87Z0JBQ3BCLE9BQU8sTUFBTSxLQUFLO2dCQUNsQixnQkFBZ0IsVUFBVSxjQUFjO2dCQUN4QyxXQUFXLElBQUksT0FBTyxXQUFXO2dCQUNqQztZQUNGO1FBRUEsNkNBQTZDO1FBQzdDLHlDQUF5QztRQUMzQztrQkFFQzs7Ozs7O0FBR1AiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDMxMzYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9lcnJvci9BcHBFcnJvckJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xyXG5cclxuaW50ZXJmYWNlIEFwcEVycm9yQm91bmRhcnlQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcEVycm9yQm91bmRhcnkoeyBjaGlsZHJlbiB9OiBBcHBFcnJvckJvdW5kYXJ5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgbGV2ZWw9XCJhcHBcIlxyXG4gICAgICBvbkVycm9yPXsoZXJyb3IsIGVycm9ySW5mbykgPT4ge1xyXG4gICAgICAgIC8vIExvZyBjcml0aWNhbCBhcHAtbGV2ZWwgZXJyb3JzXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW0NyaXRpY2FsIEFwcCBFcnJvcl06Jywge1xyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2ssXHJcbiAgICAgICAgICBjb21wb25lbnRTdGFjazogZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB1c2VyQWdlbnQ6IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICd1bmtub3duJyxcclxuICAgICAgICAgIHVybDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAndW5rbm93bidcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBDcml0aWNhbCBlcnJvcnMgc2hvdWxkIGJlIHJlcG9ydGVkIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgLy8gRXhhbXBsZTogU2VuZCB0byBlcnJvciBtb25pdG9yaW5nIHNlcnZpY2VcclxuICAgICAgICAvLyBlcnJvclJlcG9ydGluZ1NlcnZpY2UuY2FwdHVyZUV4Y2VwdGlvbihlcnJvciwge1xyXG4gICAgICAgIC8vICAgbGV2ZWw6ICdmYXRhbCcsXHJcbiAgICAgICAgLy8gICBleHRyYTogZXJyb3JJbmZvXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUhBOzs7QUFTTyxTQUFTLGlCQUFpQixFQUFFLFFBQVEsRUFBeUI7SUFDbEUscUJBQ0UsOE9BQUMsNElBQUEsQ0FBQSxnQkFBYTtRQUNaLE9BQU07UUFDTixTQUFTLENBQUMsT0FBTztZQUNmLGdDQUFnQztZQUNoQyxRQUFRLEtBQUssQ0FBQyx5QkFBeUI7Z0JBQ3JDLE9BQU8sTUFBTSxPQUFPO2dCQUNwQixPQUFPLE1BQU0sS0FBSztnQkFDbEIsZ0JBQWdCLFVBQVUsY0FBYztnQkFDeEMsV0FBVyxJQUFJLE9BQU8sV0FBVztnQkFDakMsV0FBVyxPQUFPLGNBQWMsY0FBYyxVQUFVLFNBQVMsR0FBRztnQkFDcEUsS0FBSyxzQ0FBZ0MsMEJBQTJCO1lBQ2xFO1FBQ0EsaURBQWlEO1FBQ2pELDRDQUE0QztRQUM1QyxrREFBa0Q7UUFDbEQsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixNQUFNO1FBQ1I7a0JBRUM7Ozs7OztBQUdQIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzMTc1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvZXJyb3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vRXJyb3JCb3VuZGFyeSc7XHJcbmV4cG9ydCB7IFBhZ2VFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi9QYWdlRXJyb3JCb3VuZGFyeSc7XHJcbmV4cG9ydCB7IENvbXBvbmVudEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0NvbXBvbmVudEVycm9yQm91bmRhcnknO1xyXG5leHBvcnQgeyBBcHBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi9BcHBFcnJvckJvdW5kYXJ5JzsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzMTk4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2FwcC8lMjh1c2VyJTI5L2xheW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFVzZXJBdXRoR3VhcmQgZnJvbSAnQC9jb21wb25lbnRzL2F1dGgvVXNlckF1dGhHdWFyZCc7XHJcbmltcG9ydCB7IFNpZGVNZW51IH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyJztcclxuaW1wb3J0IHsgbmF2SXRlbXNEYXRhIH0gZnJvbSAnQC9jb25zdGFudHMvc2lkZU1lbnVEYXRhJztcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJ0AvaG9va3MvdXNlTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcclxuaW1wb3J0IHsgUGFnZUVycm9yQm91bmRhcnkgfSBmcm9tICdAL2NvbXBvbmVudHMvZXJyb3InO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJMYXlvdXRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckxheW91dCh7IGNoaWxkcmVuIH06IFVzZXJMYXlvdXRQcm9wcykge1xyXG4gIGNvbnN0IFssIHJvbGUsIGlkXSA9IHVzZVBhdGhuYW1lKCkuc3BsaXQoJy8nKTtcclxuICBjb25zdCB7IGlzUlRMIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgY29uc29sZS5sb2coJ1VzZXJMYXlvdXQgcm9sZTonLCByb2xlLCAnaWQ6JywgaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TmF2SXRlbXMgPSBuYXZJdGVtc0RhdGFbcm9sZSBhcyBrZXlvZiB0eXBlb2YgbmF2SXRlbXNEYXRhXTtcclxuICBjb25zdCBuYXZJdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldE5hdkl0ZW1zID8gZ2V0TmF2SXRlbXMoaWQpIDogW107XHJcbiAgfSwgW2dldE5hdkl0ZW1zLCBpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VFcnJvckJvdW5kYXJ5PlxyXG4gICAgICA8VXNlckF1dGhHdWFyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICB7LyogRml4ZWQgTmF2YmFyICovfVxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwdC0xNlwiPlxyXG4gICAgICAgICAgICB7LyogU2lkZWJhciAqL31cclxuICAgICAgICAgICAgPFNpZGVNZW51IG5hdkl0ZW1zPXtuYXZJdGVtc30gLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDb250ZW50IEFyZWEgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICBcImZsZXgtMVwiLFxyXG4gICAgICAgICAgICAgIGlzUlRMID8gXCJsZzptci03MlwiIDogXCJsZzptbC03MlwiXHJcbiAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Vc2VyQXV0aEd1YXJkPlxyXG4gICAgPC9QYWdlRXJyb3JCb3VuZGFyeT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVZBOzs7Ozs7Ozs7OztBQWdCZSxTQUFTLFdBQVcsRUFBRSxRQUFRLEVBQW1CO0lBQzlELE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFBLEdBQUEsa0lBQUEsQ0FBQSxjQUFXLEFBQUQsSUFBSSxLQUFLLENBQUM7SUFDekMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUEsR0FBQSwySEFBQSxDQUFBLGNBQVcsQUFBRDtJQUM1Qix3Q0FBNEM7UUFDMUMsUUFBUSxHQUFHLENBQUMsb0JBQW9CLE1BQU0sT0FBTztJQUMvQztJQUVBLE1BQU0sY0FBYyxnSUFBQSxDQUFBLGVBQVksQ0FBQyxLQUFrQztJQUNuRSxNQUFNLFdBQVcsQ0FBQSxHQUFBLHFNQUFBLENBQUEsVUFBTyxBQUFELEVBQUU7UUFDdkIsT0FBTyxjQUFjLFlBQVksTUFBTSxFQUFFO0lBQzNDLEdBQUc7UUFBQztRQUFhO0tBQUc7SUFFcEIscUJBQ0UsOE9BQUMsZ0pBQUEsQ0FBQSxvQkFBaUI7a0JBQ2hCLGNBQUEsOE9BQUMsMklBQUEsQ0FBQSxVQUFhO3NCQUNaLGNBQUEsOE9BQUM7Z0JBQUksV0FBVTs7a0NBRWIsOE9BQUMsc0lBQUEsQ0FBQSxTQUFNOzs7OztrQ0FFUCw4T0FBQzt3QkFBSSxXQUFVOzswQ0FFYiw4T0FBQyx3SUFBQSxDQUFBLFdBQVE7Z0NBQUMsVUFBVTs7Ozs7OzBDQUdwQiw4T0FBQztnQ0FBSSxXQUFXLENBQUEsR0FBQSxtSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLFVBQ0EsUUFBUSxhQUFhOzBDQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mIiwiZGVidWdJZCI6bnVsbH19XQp9
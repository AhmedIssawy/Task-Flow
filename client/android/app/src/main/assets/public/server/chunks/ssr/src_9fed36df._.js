module.exports = {

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
"[project]/src/utils/roleRedirect.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getPathByRole": ()=>getPathByRole
});
const getPathByRole = (role, id)=>{
    if (!role || !id) {
        return '/';
    }
    const cleanId = id.split('-')[1];
    const normalizedRole = role.toLowerCase().replace(/_/g, '-');
    switch(normalizedRole){
        case 'student':
            return `/student/${cleanId}`;
        case 'admin':
            return `/admin/${cleanId}`;
        case 'teacher':
            return `/teacher/${cleanId}`;
        case 'super-admin':
            return `/super-admin/${cleanId}`;
        default:
            return '/';
    }
};
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
"[project]/src/app/not-found.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>NotFound
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ghost.js [app-ssr] (ecmascript) <export default as Ghost>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/roleRedirect.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function NotFound() {
    const { id, role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // Determine the appropriate home path based on authentication status
    const homePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (id && role) {
            // User is logged in, redirect to their dashboard
            const normalizedRole = role.toLowerCase();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPathByRole"])(normalizedRole, id);
        }
        // User is not logged in, redirect to landing page
        return '/';
    }, [
        id,
        role
    ]);
    const isLoggedIn = Boolean(id && role);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid-pattern opacity-5"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 ltr:right-10 rtl:left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-effect p-8 rounded-3xl shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__["Ghost"], {
                            className: "w-24 h-24 text-muted-foreground mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/not-found.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/not-found.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-effect bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-gradient",
                                        children: "404 - Page Not Found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/not-found.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-lg max-w-md mx-auto",
                                        children: [
                                            "Oops! The page you're looking for doesn't exist or has been moved.",
                                            isLoggedIn ? " Don&apos;t worry, you can return to your dashboard." : " Don&apos;t worry, you can return to the homepage."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/not-found.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/not-found.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                className: "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg rounded-xl transition-colors px-8 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: homePath,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/not-found.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        isLoggedIn ? 'Go to Dashboard' : 'Go to Homepage'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/not-found.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                variant: "outline",
                                className: "border-border/50 hover:bg-primary/10 rounded-xl transition-colors px-8 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        window.history.back();
                                    },
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/not-found.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        "Go Back"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/not-found.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/not-found.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-effect p-4 rounded-2xl border border-border/50 max-w-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Welcome back, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-medium",
                                        children: role?.toLowerCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/not-found.tsx",
                                        lineNumber: 87,
                                        columnNumber: 31
                                    }, this),
                                    "! 👋"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Need help? Visit our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/help",
                                        className: "text-primary hover:underline",
                                        children: "help center"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/not-found.tsx",
                                        lineNumber: 89,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/not-found.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/not-found.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/not-found.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSBcImNsc3hcIlxyXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xyXG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7O0FBRU8sU0FBUyxHQUFHLEdBQUcsTUFBb0I7SUFDeEMsT0FBTyxDQUFBLEdBQUEsMkpBQUEsQ0FBQSxVQUFPLEFBQUQsRUFBRSxDQUFBLEdBQUEscUlBQUEsQ0FBQSxPQUFJLEFBQUQsRUFBRTtBQUN0QiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIlxyXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcclxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgc2hyaW5rLTAgWyZfc3ZnXTpzaHJpbmstMCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlXCIsXHJcbiAge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDoge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LXhzIGhvdmVyOmJnLXByaW1hcnkvOTBcIixcclxuICAgICAgICBkZXN0cnVjdGl2ZTpcclxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC13aGl0ZSBzaGFkb3cteHMgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIGRhcms6YmctZGVzdHJ1Y3RpdmUvNjBcIixcclxuICAgICAgICBvdXRsaW5lOlxyXG4gICAgICAgICAgXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OlxyXG4gICAgICAgICAgXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6Ymctc2Vjb25kYXJ5LzgwXCIsXHJcbiAgICAgICAgZ2hvc3Q6XHJcbiAgICAgICAgICBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhcms6aG92ZXI6YmctYWNjZW50LzUwXCIsXHJcbiAgICAgICAgbGluazogXCJ0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtNCBweS0yIGhhcy1bPnN2Z106cHgtM1wiLFxyXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxyXG4gICAgICAgIGxnOiBcImgtMTAgcm91bmRlZC1tZCBweC02IGhhcy1bPnN2Z106cHgtNFwiLFxyXG4gICAgICAgIGljb246IFwic2l6ZS05XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgIH0sXHJcbiAgfVxyXG4pXHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICB2YXJpYW50LFxyXG4gIHNpemUsXHJcbiAgYXNDaGlsZCA9IGZhbHNlLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICZcclxuICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiAmIHtcclxuICAgIGFzQ2hpbGQ/OiBib29sZWFuXHJcbiAgfSkge1xyXG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wXHJcbiAgICAgIGRhdGEtc2xvdD1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxNQUFNLGlCQUFpQixDQUFBLEdBQUEsZ0tBQUEsQ0FBQSxNQUFHLEFBQUQsRUFDdkIsOGNBQ0E7SUFDRSxVQUFVO1FBQ1IsU0FBUztZQUNQLFNBQ0U7WUFDRixhQUNFO1lBQ0YsU0FDRTtZQUNGLFdBQ0U7WUFDRixPQUNFO1lBQ0YsTUFBTTtRQUNSO1FBQ0EsTUFBTTtZQUNKLFNBQVM7WUFDVCxJQUFJO1lBQ0osSUFBSTtZQUNKLE1BQU07UUFDUjtJQUNGO0lBQ0EsaUJBQWlCO1FBQ2YsU0FBUztRQUNULE1BQU07SUFDUjtBQUNGO0FBR0YsU0FBUyxPQUFPLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osVUFBVSxLQUFLLEVBQ2YsR0FBRyxPQUlGO0lBQ0QsTUFBTSxPQUFPLFVBQVUsZ0tBQUEsQ0FBQSxPQUFJLEdBQUc7SUFFOUIscUJBQ0UsOE9BQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsbUhBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxlQUFlO1lBQUU7WUFBUztZQUFNO1FBQVU7UUFDdkQsR0FBRyxLQUFLOzs7Ozs7QUFHZiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvdXRpbHMvcm9sZVJlZGlyZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRQYXRoQnlSb2xlID0gKHJvbGU6IHN0cmluZywgaWQ6IHN0cmluZykgPT4ge1xyXG4gIGlmICghcm9sZSB8fCAhaWQpIHtcclxuICAgIHJldHVybiAnLyc7XHJcbiAgfVxyXG4gIGNvbnN0IGNsZWFuSWQgPSBpZC5zcGxpdCgnLScpWzFdO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRSb2xlID0gcm9sZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJy0nKVxyXG4gIHN3aXRjaCAobm9ybWFsaXplZFJvbGUpIHtcclxuICAgIGNhc2UgJ3N0dWRlbnQnOlxyXG4gICAgICByZXR1cm4gYC9zdHVkZW50LyR7Y2xlYW5JZH1gO1xyXG4gICAgY2FzZSAnYWRtaW4nOlxyXG4gICAgICByZXR1cm4gYC9hZG1pbi8ke2NsZWFuSWR9YDtcclxuICAgIGNhc2UgJ3RlYWNoZXInOlxyXG4gICAgICByZXR1cm4gYC90ZWFjaGVyLyR7Y2xlYW5JZH1gO1xyXG4gICAgY2FzZSAnc3VwZXItYWRtaW4nOlxyXG4gICAgICByZXR1cm4gYC9zdXBlci1hZG1pbi8ke2NsZWFuSWR9YDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAnLyc7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxnQkFBZ0IsQ0FBQyxNQUFjO0lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNoQixPQUFPO0lBQ1Q7SUFDQSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDaEMsTUFBTSxpQkFBaUIsS0FBSyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU07SUFDeEQsT0FBUTtRQUNOLEtBQUs7WUFDSCxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVM7UUFDOUIsS0FBSztZQUNILE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUztRQUM1QixLQUFLO1lBQ0gsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTO1FBQzlCLEtBQUs7WUFDSCxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVM7UUFDbEM7WUFDRSxPQUFPO0lBQ1g7QUFDRiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTAwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2hvb2tzL3VzZUF1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2V0TWVRdWVyeSB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvYXV0aEFwaSc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gdXNlR2V0TWVRdWVyeSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdXNlcjogZGF0YT8uZGF0YSxcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGlzRXJyb3IsXHJcbiAgICBpc0xvZ2dlZEluOiAhIWRhdGEsXHJcbiAgICByb2xlOiBkYXRhPy5kYXRhPy5yb2xlLFxyXG4gICAgaWQ6IGRhdGE/LmRhdGE/LmlkLFxyXG4gICAgbW9uZ29JZDogZGF0YT8uZGF0YT8uX2lkLFxyXG4gIH07XHJcbn07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOztBQUVPLE1BQU0sVUFBVTtJQUNyQixNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFBLEdBQUEsbUlBQUEsQ0FBQSxnQkFBYSxBQUFEO0lBRWpELE9BQU87UUFDTCxNQUFNLE1BQU07UUFDWjtRQUNBO1FBQ0EsWUFBWSxDQUFDLENBQUM7UUFDZCxNQUFNLE1BQU0sTUFBTTtRQUNsQixJQUFJLE1BQU0sTUFBTTtRQUNoQixTQUFTLE1BQU0sTUFBTTtJQUN2QjtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMjEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvYXBwL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IEdob3N0LCBIb21lLCBBcnJvd0xlZnQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRQYXRoQnlSb2xlIH0gZnJvbSAnQC91dGlscy9yb2xlUmVkaXJlY3QnO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9ob29rcy91c2VBdXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xyXG4gIGNvbnN0IHsgaWQsIHJvbGUgfSA9IHVzZUF1dGgoKTtcclxuICBcclxuICAvLyBEZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIGhvbWUgcGF0aCBiYXNlZCBvbiBhdXRoZW50aWNhdGlvbiBzdGF0dXNcclxuICBjb25zdCBob21lUGF0aCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGlkICYmIHJvbGUpIHtcclxuICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW4sIHJlZGlyZWN0IHRvIHRoZWlyIGRhc2hib2FyZFxyXG4gICAgICBjb25zdCBub3JtYWxpemVkUm9sZSA9IHJvbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGdldFBhdGhCeVJvbGUobm9ybWFsaXplZFJvbGUsIGlkKTtcclxuICAgIH1cclxuICAgIC8vIFVzZXIgaXMgbm90IGxvZ2dlZCBpbiwgcmVkaXJlY3QgdG8gbGFuZGluZyBwYWdlXHJcbiAgICByZXR1cm4gJy8nO1xyXG4gIH0sIFtpZCwgcm9sZV0pO1xyXG5cclxuICBjb25zdCBpc0xvZ2dlZEluID0gQm9vbGVhbihpZCAmJiByb2xlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmFja2dyb3VuZCB2aWEtYmFja2dyb3VuZCB0by1hY2NlbnQvMjAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIHsvKiBCYWNrZ3JvdW5kIEVsZW1lbnRzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JpZC1wYXR0ZXJuIG9wYWNpdHktNVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yMCBsdHI6bGVmdC0xMCBydGw6cmlnaHQtMTAgdy03MiBoLTcyIGJnLXByaW1hcnkvMTAgcm91bmRlZC1mdWxsIGJsdXItM3hsXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIwIGx0cjpyaWdodC0xMCBydGw6bGVmdC0xMCB3LTk2IGgtOTYgYmctc2Vjb25kYXJ5LzEwIHJvdW5kZWQtZnVsbCBibHVyLTN4bFwiPjwvZGl2PlxyXG4gICAgICBcclxuICAgICAgey8qIEZsb2F0aW5nIGdlb21ldHJpYyBzaGFwZXMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvNCBsdHI6cmlnaHQtMS80IHJ0bDpsZWZ0LTEvNCB3LTYgaC02IGJnLXByaW1hcnkvMzAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEvMyBsdHI6bGVmdC0xLzMgcnRsOnJpZ2h0LTEvMyB3LTQgaC00IGJnLXNlY29uZGFyeS8zMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMi8zIGx0cjpyaWdodC0xLzMgcnRsOmxlZnQtMS8zIHctNSBoLTUgYmctYWNjZW50LzMwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHRleHQtY2VudGVyIHNwYWNlLXktOFwiPlxyXG4gICAgICAgIHsvKiBFcnJvciBJY29uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtZWZmZWN0IHAtOCByb3VuZGVkLTN4bCBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICA8R2hvc3QgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBteC1hdXRvXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEVycm9yIENvbnRlbnQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1lZmZlY3QgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkvMTAgdmlhLXByaW1hcnkvNSB0by1zZWNvbmRhcnkvMTAgcm91bmRlZC0zeGwgcC04IHRleHQtZm9yZWdyb3VuZCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBtYXgtdy0yeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LTMyIGgtMzIgYmctcHJpbWFyeS8xMCByb3VuZGVkLWZ1bGwgLXRyYW5zbGF0ZS15LTE2IHRyYW5zbGF0ZS14LTE2XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgIDQwNCAtIFBhZ2UgTm90IEZvdW5kXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LWxnIG1heC13LW1kIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL31cclxuICAgICAgICAgICAgICBPb3BzISBUaGUgcGFnZSB5b3UncmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdCBvciBoYXMgYmVlbiBtb3ZlZC4gXHJcbiAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyBcIiBEb24mYXBvczt0IHdvcnJ5LCB5b3UgY2FuIHJldHVybiB0byB5b3VyIGRhc2hib2FyZC5cIiA6IFwiIERvbiZhcG9zO3Qgd29ycnksIHlvdSBjYW4gcmV0dXJuIHRvIHRoZSBob21lcGFnZS5cIn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBBY3Rpb24gQnV0dG9ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTRcIj5cclxuICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGFzQ2hpbGQgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSBob3Zlcjpmcm9tLXByaW1hcnkvOTAgaG92ZXI6dG8tc2Vjb25kYXJ5LzkwIHNoYWRvdy1sZyByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHB4LTggcHktM1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hvbWVQYXRofSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgIDxIb21lIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gJ0dvIHRvIERhc2hib2FyZCcgOiAnR28gdG8gSG9tZXBhZ2UnfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgYXNDaGlsZCBcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJvcmRlci81MCBob3ZlcjpiZy1wcmltYXJ5LzEwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgcHgtOCBweS0zXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHdpbmRvdy5oaXN0b3J5LmJhY2soKTsgfX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8QXJyb3dMZWZ0IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBBZGRpdGlvbmFsIEluZm8gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1lZmZlY3QgcC00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYm9yZGVyLzUwIG1heC13LW1kXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgICA8PldlbGNvbWUgYmFjaywgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+e3JvbGU/LnRvTG93ZXJDYXNlKCl9PC9zcGFuPiEg8J+RizwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+TmVlZCBoZWxwPyBWaXNpdCBvdXIgPExpbmsgaHJlZj1cIi9oZWxwXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZVwiPmhlbHAgY2VudGVyPC9MaW5rPjwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7Ozs7Ozs7QUFTZSxTQUFTO0lBQ3RCLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQSxHQUFBLHVIQUFBLENBQUEsVUFBTyxBQUFEO0lBRTNCLHFFQUFxRTtJQUNyRSxNQUFNLFdBQVcsQ0FBQSxHQUFBLHFNQUFBLENBQUEsVUFBTyxBQUFELEVBQUU7UUFDdkIsSUFBSSxNQUFNLE1BQU07WUFDZCxpREFBaUQ7WUFDakQsTUFBTSxpQkFBaUIsS0FBSyxXQUFXO1lBQ3ZDLE9BQU8sQ0FBQSxHQUFBLDRIQUFBLENBQUEsZ0JBQWEsQUFBRCxFQUFFLGdCQUFnQjtRQUN2QztRQUNBLGtEQUFrRDtRQUNsRCxPQUFPO0lBQ1QsR0FBRztRQUFDO1FBQUk7S0FBSztJQUViLE1BQU0sYUFBYSxRQUFRLE1BQU07SUFFakMscUJBQ0UsOE9BQUM7UUFBSSxXQUFVOzswQkFFYiw4T0FBQztnQkFBSSxXQUFVOzs7Ozs7MEJBQ2YsOE9BQUM7Z0JBQUksV0FBVTs7Ozs7OzBCQUNmLDhPQUFDO2dCQUFJLFdBQVU7Ozs7OzswQkFHZiw4T0FBQztnQkFBSSxXQUFVOzs7Ozs7MEJBQ2YsOE9BQUM7Z0JBQUksV0FBVTs7Ozs7OzBCQUNmLDhPQUFDO2dCQUFJLFdBQVU7Ozs7OzswQkFFZiw4T0FBQztnQkFBSSxXQUFVOztrQ0FFYiw4T0FBQzt3QkFBSSxXQUFVO2tDQUNiLGNBQUEsOE9BQUMsb01BQUEsQ0FBQSxRQUFLOzRCQUFDLFdBQVU7Ozs7Ozs7Ozs7O2tDQUluQiw4T0FBQzt3QkFBSSxXQUFVOzswQ0FDYiw4T0FBQztnQ0FBSSxXQUFVOzs7Ozs7MENBQ2YsOE9BQUM7Z0NBQUksV0FBVTs7a0RBQ2IsOE9BQUM7d0NBQUcsV0FBVTtrREFBK0M7Ozs7OztrREFHN0QsOE9BQUM7d0NBQUUsV0FBVTs7NENBQ2lEOzRDQUUzRCxhQUFhLHlEQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNN0UsOE9BQUM7d0JBQUksV0FBVTs7MENBQ2IsOE9BQUMsa0lBQUEsQ0FBQSxTQUFNO2dDQUNMLE9BQU87Z0NBQ1AsV0FBVTswQ0FFVixjQUFBLDhPQUFDLDRKQUFBLENBQUEsVUFBSTtvQ0FBQyxNQUFNO29DQUFVLFdBQVU7O3NEQUM5Qiw4T0FBQyxtTUFBQSxDQUFBLE9BQUk7NENBQUMsV0FBVTs7Ozs7O3dDQUNmLGFBQWEsb0JBQW9COzs7Ozs7Ozs7Ozs7MENBSXRDLDhPQUFDLGtJQUFBLENBQUEsU0FBTTtnQ0FDTCxPQUFPO2dDQUNQLFNBQVE7Z0NBQ1IsV0FBVTswQ0FFVixjQUFBLDhPQUFDLDRKQUFBLENBQUEsVUFBSTtvQ0FBQyxNQUFLO29DQUFJLFNBQVMsQ0FBQzt3Q0FBUSxFQUFFLGNBQWM7d0NBQUksT0FBTyxPQUFPLENBQUMsSUFBSTtvQ0FBSTtvQ0FBRyxXQUFVOztzREFDdkYsOE9BQUMsZ05BQUEsQ0FBQSxZQUFTOzRDQUFDLFdBQVU7Ozs7Ozt3Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU92Qyw4T0FBQzt3QkFBSSxXQUFVO2tDQUNiLGNBQUEsOE9BQUM7NEJBQUUsV0FBVTtzQ0FDViwyQkFDQzs7b0NBQUU7a0RBQWMsOE9BQUM7d0NBQUssV0FBVTtrREFBNEIsTUFBTTs7Ozs7O29DQUFxQjs7NkRBRXZGOztvQ0FBRTtrREFBcUIsOE9BQUMsNEpBQUEsQ0FBQSxVQUFJO3dDQUFDLE1BQUs7d0NBQVEsV0FBVTtrREFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRyIsImRlYnVnSWQiOm51bGx9fV0KfQ==
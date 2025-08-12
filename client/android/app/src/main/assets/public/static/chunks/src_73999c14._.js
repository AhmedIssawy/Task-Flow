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
"[project]/src/utils/roleRedirect.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
            return "/student/".concat(cleanId);
        case 'admin':
            return "/admin/".concat(cleanId);
        case 'teacher':
            return "/teacher/".concat(cleanId);
        case 'super-admin':
            return "/super-admin/".concat(cleanId);
        default:
            return '/';
    }
};
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
"[project]/src/app/not-found.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>NotFound
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ghost.js [app-client] (ecmascript) <export default as Ghost>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/roleRedirect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function NotFound() {
    _s();
    const { id, role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Determine the appropriate home path based on authentication status
    const homePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotFound.useMemo[homePath]": ()=>{
            if (id && role) {
                // User is logged in, redirect to their dashboard
                const normalizedRole = role.toLowerCase();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathByRole"])(normalizedRole, id);
            }
            // User is not logged in, redirect to landing page
            return '/';
        }
    }["NotFound.useMemo[homePath]"], [
        id,
        role
    ]);
    const isLoggedIn = Boolean(id && role);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid-pattern opacity-5"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 ltr:right-10 rtl:left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-effect p-8 rounded-3xl shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__["Ghost"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-effect bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-gradient",
                                        children: "404 - Page Not Found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/not-found.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                className: "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg rounded-xl transition-colors px-8 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: homePath,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                variant: "outline",
                                className: "border-border/50 hover:bg-primary/10 rounded-xl transition-colors px-8 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        window.history.back();
                                    },
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-effect p-4 rounded-2xl border border-border/50 max-w-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Welcome back, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-medium",
                                        children: role === null || role === void 0 ? void 0 : role.toLowerCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/not-found.tsx",
                                        lineNumber: 87,
                                        columnNumber: 31
                                    }, this),
                                    "! 👋"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Need help? Visit our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(NotFound, "4jYddDDbF/MsNszgyEGMe+oNGiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = NotFound;
var _c;
__turbopack_context__.k.register(_c, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSBcImNsc3hcIlxyXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xyXG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7O0FBRU8sU0FBUztJQUFHLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHLFNBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBRyxPQUFILFFBQUEsU0FBQSxDQUFBLEtBQXVCOztJQUN4QyxPQUFPLENBQUEsR0FBQSw4SkFBQSxDQUFBLFVBQU8sQUFBRCxFQUFFLENBQUEsR0FBQSx3SUFBQSxDQUFBLE9BQUksQUFBRCxFQUFFO0FBQ3RCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyOSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiXHJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmNvbnN0IGJ1dHRvblZhcmlhbnRzID0gY3ZhKFxyXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNCBzaHJpbmstMCBbJl9zdmddOnNocmluay0wIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmVcIixcclxuICB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICB2YXJpYW50OiB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctcHJpbWFyeS85MFwiLFxyXG4gICAgICAgIGRlc3RydWN0aXZlOlxyXG4gICAgICAgICAgXCJiZy1kZXN0cnVjdGl2ZSB0ZXh0LXdoaXRlIHNoYWRvdy14cyBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MCBmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazpmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvNDAgZGFyazpiZy1kZXN0cnVjdGl2ZS82MFwiLFxyXG4gICAgICAgIG91dGxpbmU6XHJcbiAgICAgICAgICBcImJvcmRlciBiZy1iYWNrZ3JvdW5kIHNoYWRvdy14cyBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXJrOmJnLWlucHV0LzMwIGRhcms6Ym9yZGVyLWlucHV0IGRhcms6aG92ZXI6YmctaW5wdXQvNTBcIixcclxuICAgICAgICBzZWNvbmRhcnk6XHJcbiAgICAgICAgICBcImJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIHNoYWRvdy14cyBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcclxuICAgICAgICBnaG9zdDpcclxuICAgICAgICAgIFwiaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpob3ZlcjpiZy1hY2NlbnQvNTBcIixcclxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImgtOSBweC00IHB5LTIgaGFzLVs+c3ZnXTpweC0zXCIsXHJcbiAgICAgICAgc206IFwiaC04IHJvdW5kZWQtbWQgZ2FwLTEuNSBweC0zIGhhcy1bPnN2Z106cHgtMi41XCIsXHJcbiAgICAgICAgbGc6IFwiaC0xMCByb3VuZGVkLW1kIHB4LTYgaGFzLVs+c3ZnXTpweC00XCIsXHJcbiAgICAgICAgaWNvbjogXCJzaXplLTlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXHJcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgfSxcclxuICB9XHJcbilcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHZhcmlhbnQsXHJcbiAgc2l6ZSxcclxuICBhc0NoaWxkID0gZmFsc2UsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJidXR0b25cIj4gJlxyXG4gIFZhcmlhbnRQcm9wczx0eXBlb2YgYnV0dG9uVmFyaWFudHM+ICYge1xyXG4gICAgYXNDaGlsZD86IGJvb2xlYW5cclxuICB9KSB7XHJcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBcclxuICAgICAgZGF0YS1zbG90PVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihidXR0b25WYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvblZhcmlhbnRzIH1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUVBOzs7OztBQUVBLE1BQU0saUJBQWlCLENBQUEsR0FBQSxtS0FBQSxDQUFBLE1BQUcsQUFBRCxFQUN2Qiw4Y0FDQTtJQUNFLFVBQVU7UUFDUixTQUFTO1lBQ1AsU0FDRTtZQUNGLGFBQ0U7WUFDRixTQUNFO1lBQ0YsV0FDRTtZQUNGLE9BQ0U7WUFDRixNQUFNO1FBQ1I7UUFDQSxNQUFNO1lBQ0osU0FBUztZQUNULElBQUk7WUFDSixJQUFJO1lBQ0osTUFBTTtRQUNSO0lBQ0Y7SUFDQSxpQkFBaUI7UUFDZixTQUFTO1FBQ1QsTUFBTTtJQUNSO0FBQ0Y7QUFHRixTQUFTLE9BQU8sS0FTYjtRQVRhLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osVUFBVSxLQUFLLEVBQ2YsR0FBRyxPQUlGLEdBVGE7SUFVZCxNQUFNLE9BQU8sVUFBVSxtS0FBQSxDQUFBLE9BQUksR0FBRztJQUU5QixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLGVBQWU7WUFBRTtZQUFTO1lBQU07UUFBVTtRQUN2RCxHQUFHLEtBQUs7Ozs7OztBQUdmO0tBbkJTIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy91dGlscy9yb2xlUmVkaXJlY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFBhdGhCeVJvbGUgPSAocm9sZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFyb2xlIHx8ICFpZCkge1xyXG4gICAgcmV0dXJuICcvJztcclxuICB9XHJcbiAgY29uc3QgY2xlYW5JZCA9IGlkLnNwbGl0KCctJylbMV07XHJcbiAgY29uc3Qgbm9ybWFsaXplZFJvbGUgPSByb2xlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnLScpXHJcbiAgc3dpdGNoIChub3JtYWxpemVkUm9sZSkge1xyXG4gICAgY2FzZSAnc3R1ZGVudCc6XHJcbiAgICAgIHJldHVybiBgL3N0dWRlbnQvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdhZG1pbic6XHJcbiAgICAgIHJldHVybiBgL2FkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgY2FzZSAndGVhY2hlcic6XHJcbiAgICAgIHJldHVybiBgL3RlYWNoZXIvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdzdXBlci1hZG1pbic6XHJcbiAgICAgIHJldHVybiBgL3N1cGVyLWFkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICcvJztcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLGdCQUFnQixDQUFDLE1BQWM7SUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQ2hCLE9BQU87SUFDVDtJQUNBLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoQyxNQUFNLGlCQUFpQixLQUFLLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTtJQUN4RCxPQUFRO1FBQ04sS0FBSztZQUNILE9BQU8sQUFBQyxZQUFtQixPQUFSO1FBQ3JCLEtBQUs7WUFDSCxPQUFPLEFBQUMsVUFBaUIsT0FBUjtRQUNuQixLQUFLO1lBQ0gsT0FBTyxBQUFDLFlBQW1CLE9BQVI7UUFDckIsS0FBSztZQUNILE9BQU8sQUFBQyxnQkFBdUIsT0FBUjtRQUN6QjtZQUNFLE9BQU87SUFDWDtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMjQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvaG9va3MvdXNlQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHZXRNZVF1ZXJ5IH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9hdXRoQXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VHZXRNZVF1ZXJ5KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBkYXRhPy5kYXRhLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaXNFcnJvcixcclxuICAgIGlzTG9nZ2VkSW46ICEhZGF0YSxcclxuICAgIHJvbGU6IGRhdGE/LmRhdGE/LnJvbGUsXHJcbiAgICBpZDogZGF0YT8uZGF0YT8uaWQsXHJcbiAgICBtb25nb0lkOiBkYXRhPy5kYXRhPy5faWQsXHJcbiAgfTtcclxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztBQUVPLE1BQU0sVUFBVTtRQVFiLFlBQ0YsYUFDSzs7SUFUWCxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFBLEdBQUEsc0lBQUEsQ0FBQSxnQkFBYSxBQUFEO0lBRWpELE9BQU87UUFDTCxJQUFJLEVBQUUsaUJBQUEsMkJBQUEsS0FBTSxJQUFJO1FBQ2hCO1FBQ0E7UUFDQSxZQUFZLENBQUMsQ0FBQztRQUNkLElBQUksRUFBRSxpQkFBQSw0QkFBQSxhQUFBLEtBQU0sSUFBSSxjQUFWLGlDQUFBLFdBQVksSUFBSTtRQUN0QixFQUFFLEVBQUUsaUJBQUEsNEJBQUEsY0FBQSxLQUFNLElBQUksY0FBVixrQ0FBQSxZQUFZLEVBQUU7UUFDbEIsT0FBTyxFQUFFLGlCQUFBLDRCQUFBLGNBQUEsS0FBTSxJQUFJLGNBQVYsa0NBQUEsWUFBWSxHQUFHO0lBQzFCO0FBQ0Y7R0FaYTs7UUFDMEIsc0lBQUEsQ0FBQSxnQkFBYSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTU4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2FwcC9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBHaG9zdCwgSG9tZSwgQXJyb3dMZWZ0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgZ2V0UGF0aEJ5Um9sZSB9IGZyb20gJ0AvdXRpbHMvcm9sZVJlZGlyZWN0JztcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvaG9va3MvdXNlQXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcclxuICBjb25zdCB7IGlkLCByb2xlIH0gPSB1c2VBdXRoKCk7XHJcbiAgXHJcbiAgLy8gRGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSBob21lIHBhdGggYmFzZWQgb24gYXV0aGVudGljYXRpb24gc3RhdHVzXHJcbiAgY29uc3QgaG9tZVBhdGggPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChpZCAmJiByb2xlKSB7XHJcbiAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCByZWRpcmVjdCB0byB0aGVpciBkYXNoYm9hcmRcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFJvbGUgPSByb2xlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBnZXRQYXRoQnlSb2xlKG5vcm1hbGl6ZWRSb2xlLCBpZCk7XHJcbiAgICB9XHJcbiAgICAvLyBVc2VyIGlzIG5vdCBsb2dnZWQgaW4sIHJlZGlyZWN0IHRvIGxhbmRpbmcgcGFnZVxyXG4gICAgcmV0dXJuICcvJztcclxuICB9LCBbaWQsIHJvbGVdKTtcclxuXHJcbiAgY29uc3QgaXNMb2dnZWRJbiA9IEJvb2xlYW4oaWQgJiYgcm9sZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLWJhY2tncm91bmQgdmlhLWJhY2tncm91bmQgdG8tYWNjZW50LzIwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICB7LyogQmFja2dyb3VuZCBFbGVtZW50cyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyaWQtcGF0dGVybiBvcGFjaXR5LTVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgbHRyOmxlZnQtMTAgcnRsOnJpZ2h0LTEwIHctNzIgaC03MiBiZy1wcmltYXJ5LzEwIHJvdW5kZWQtZnVsbCBibHVyLTN4bFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yMCBsdHI6cmlnaHQtMTAgcnRsOmxlZnQtMTAgdy05NiBoLTk2IGJnLXNlY29uZGFyeS8xMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGxcIj48L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIHsvKiBGbG9hdGluZyBnZW9tZXRyaWMgc2hhcGVzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgbHRyOnJpZ2h0LTEvNCBydGw6bGVmdC0xLzQgdy02IGgtNiBiZy1wcmltYXJ5LzMwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xLzMgbHRyOmxlZnQtMS8zIHJ0bDpyaWdodC0xLzMgdy00IGgtNCBiZy1zZWNvbmRhcnkvMzAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIvMyBsdHI6cmlnaHQtMS8zIHJ0bDpsZWZ0LTEvMyB3LTUgaC01IGJnLWFjY2VudC8zMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCB0ZXh0LWNlbnRlciBzcGFjZS15LThcIj5cclxuICAgICAgICB7LyogRXJyb3IgSWNvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLWVmZmVjdCBwLTggcm91bmRlZC0zeGwgc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAgPEdob3N0IGNsYXNzTmFtZT1cInctMjQgaC0yNCB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXgtYXV0b1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBFcnJvciBDb250ZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtZWZmZWN0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5LzEwIHZpYS1wcmltYXJ5LzUgdG8tc2Vjb25kYXJ5LzEwIHJvdW5kZWQtM3hsIHAtOCB0ZXh0LWZvcmVncm91bmQgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgbWF4LXctMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0zMiBoLTMyIGJnLXByaW1hcnkvMTAgcm91bmRlZC1mdWxsIC10cmFuc2xhdGUteS0xNiB0cmFuc2xhdGUteC0xNlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICA0MDQgLSBQYWdlIE5vdCBGb3VuZFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1sZyBtYXgtdy1tZCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi99XHJcbiAgICAgICAgICAgICAgT29wcyEgVGhlIHBhZ2UgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3Qgb3IgaGFzIGJlZW4gbW92ZWQuIFxyXG4gICAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gXCIgRG9uJmFwb3M7dCB3b3JyeSwgeW91IGNhbiByZXR1cm4gdG8geW91ciBkYXNoYm9hcmQuXCIgOiBcIiBEb24mYXBvczt0IHdvcnJ5LCB5b3UgY2FuIHJldHVybiB0byB0aGUgaG9tZXBhZ2UuXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQWN0aW9uIEJ1dHRvbnMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBhc0NoaWxkIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgaG92ZXI6ZnJvbS1wcmltYXJ5LzkwIGhvdmVyOnRvLXNlY29uZGFyeS85MCBzaGFkb3ctbGcgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9ycyBweC04IHB5LTNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtob21lUGF0aH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8SG9tZSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cclxuICAgICAgICAgICAgICB7aXNMb2dnZWRJbiA/ICdHbyB0byBEYXNoYm9hcmQnIDogJ0dvIHRvIEhvbWVwYWdlJ31cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGFzQ2hpbGQgXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ib3JkZXIvNTAgaG92ZXI6YmctcHJpbWFyeS8xMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHB4LTggcHktM1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7IH19IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cclxuICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQWRkaXRpb25hbCBJbmZvICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtZWZmZWN0IHAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cclxuICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgPD5XZWxjb21lIGJhY2ssIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LW1lZGl1bVwiPntyb2xlPy50b0xvd2VyQ2FzZSgpfTwvc3Bhbj4hIPCfkYs8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8Pk5lZWQgaGVscD8gVmlzaXQgb3VyIDxMaW5rIGhyZWY9XCIvaGVscFwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBob3Zlcjp1bmRlcmxpbmVcIj5oZWxwIGNlbnRlcjwvTGluaz48Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbXSwi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
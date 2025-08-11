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
"[project]/src/components/landing/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/made/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/roleRedirect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user/UserAvatar.tsx [app-client] (ecmascript)");
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
;
;
;
const Header = ()=>{
    var _userData_user;
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Landing.Header');
    const handleLoginClick = ()=>{
        router.push('/login');
    };
    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isLoggedIn, role, id } = userData;
    const name = (_userData_user = userData.user) === null || _userData_user === void 0 ? void 0 : _userData_user.name;
    const userPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathByRole"])(role, id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold text-foreground font-primary",
                                children: t('logo.taskflow')
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/Header.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 rtl:space-x-reverse",
                        children: [
                            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: name,
                                onClick: ()=>router.push(userPath)
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/Header.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                                fileName: "[project]/src/components/landing/Header.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$made$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                                fileName: "[project]/src/components/landing/Header.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/Header.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLoginClick,
                                        className: "hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('cta.login')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Header.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/Header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "md:hidden p-2 text-muted-foreground hover:text-primary transition-colors",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 47
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/Header.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/landing/Header.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "rd2L6M4dg7UboSDdN1sxmT/nFNM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/landing/Header.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/landing/Header.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSBcImNsc3hcIlxyXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xyXG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7O0FBRU8sU0FBUztJQUFHLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHLFNBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBRyxPQUFILFFBQUEsU0FBQSxDQUFBLEtBQXVCOztJQUN4QyxPQUFPLENBQUEsR0FBQSw4SkFBQSxDQUFBLFVBQU8sQUFBRCxFQUFFLENBQUEsR0FBQSx3SUFBQSxDQUFBLE9BQUksQUFBRCxFQUFFO0FBQ3RCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyOSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiXHJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmNvbnN0IGJ1dHRvblZhcmlhbnRzID0gY3ZhKFxyXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNCBzaHJpbmstMCBbJl9zdmddOnNocmluay0wIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmVcIixcclxuICB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICB2YXJpYW50OiB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctcHJpbWFyeS85MFwiLFxyXG4gICAgICAgIGRlc3RydWN0aXZlOlxyXG4gICAgICAgICAgXCJiZy1kZXN0cnVjdGl2ZSB0ZXh0LXdoaXRlIHNoYWRvdy14cyBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MCBmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazpmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvNDAgZGFyazpiZy1kZXN0cnVjdGl2ZS82MFwiLFxyXG4gICAgICAgIG91dGxpbmU6XHJcbiAgICAgICAgICBcImJvcmRlciBiZy1iYWNrZ3JvdW5kIHNoYWRvdy14cyBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXJrOmJnLWlucHV0LzMwIGRhcms6Ym9yZGVyLWlucHV0IGRhcms6aG92ZXI6YmctaW5wdXQvNTBcIixcclxuICAgICAgICBzZWNvbmRhcnk6XHJcbiAgICAgICAgICBcImJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIHNoYWRvdy14cyBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcclxuICAgICAgICBnaG9zdDpcclxuICAgICAgICAgIFwiaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpob3ZlcjpiZy1hY2NlbnQvNTBcIixcclxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImgtOSBweC00IHB5LTIgaGFzLVs+c3ZnXTpweC0zXCIsXHJcbiAgICAgICAgc206IFwiaC04IHJvdW5kZWQtbWQgZ2FwLTEuNSBweC0zIGhhcy1bPnN2Z106cHgtMi41XCIsXHJcbiAgICAgICAgbGc6IFwiaC0xMCByb3VuZGVkLW1kIHB4LTYgaGFzLVs+c3ZnXTpweC00XCIsXHJcbiAgICAgICAgaWNvbjogXCJzaXplLTlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXHJcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgfSxcclxuICB9XHJcbilcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHZhcmlhbnQsXHJcbiAgc2l6ZSxcclxuICBhc0NoaWxkID0gZmFsc2UsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJidXR0b25cIj4gJlxyXG4gIFZhcmlhbnRQcm9wczx0eXBlb2YgYnV0dG9uVmFyaWFudHM+ICYge1xyXG4gICAgYXNDaGlsZD86IGJvb2xlYW5cclxuICB9KSB7XHJcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBcclxuICAgICAgZGF0YS1zbG90PVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihidXR0b25WYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvblZhcmlhbnRzIH1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUVBOzs7OztBQUVBLE1BQU0saUJBQWlCLENBQUEsR0FBQSxtS0FBQSxDQUFBLE1BQUcsQUFBRCxFQUN2Qiw4Y0FDQTtJQUNFLFVBQVU7UUFDUixTQUFTO1lBQ1AsU0FDRTtZQUNGLGFBQ0U7WUFDRixTQUNFO1lBQ0YsV0FDRTtZQUNGLE9BQ0U7WUFDRixNQUFNO1FBQ1I7UUFDQSxNQUFNO1lBQ0osU0FBUztZQUNULElBQUk7WUFDSixJQUFJO1lBQ0osTUFBTTtRQUNSO0lBQ0Y7SUFDQSxpQkFBaUI7UUFDZixTQUFTO1FBQ1QsTUFBTTtJQUNSO0FBQ0Y7QUFHRixTQUFTLE9BQU8sS0FTYjtRQVRhLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osVUFBVSxLQUFLLEVBQ2YsR0FBRyxPQUlGLEdBVGE7SUFVZCxNQUFNLE9BQU8sVUFBVSxtS0FBQSxDQUFBLE9BQUksR0FBRztJQUU5QixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLGVBQWU7WUFBRTtZQUFTO1lBQU07UUFBVTtRQUN2RCxHQUFHLEtBQUs7Ozs7OztBQUdmO0tBbkJTIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBEcm9wZG93bk1lbnVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCJcclxuaW1wb3J0IHsgQ2hlY2tJY29uLCBDaGV2cm9uUmlnaHRJY29uLCBDaXJjbGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoe1xyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUm9vdD4pIHtcclxuICByZXR1cm4gPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290IGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnVcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVBvcnRhbCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtcG9ydGFsXCIgey4uLnByb3BzfSAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51VHJpZ2dlcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5UcmlnZ2VyPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlRyaWdnZXJcclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS10cmlnZ2VyXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUNvbnRlbnQoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBzaWRlT2Zmc2V0ID0gNCxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsPlxyXG4gICAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnRcclxuICAgICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWNvbnRlbnRcIlxyXG4gICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCBtYXgtaC0oLS1yYWRpeC1kcm9wZG93bi1tZW51LWNvbnRlbnQtYXZhaWxhYmxlLWhlaWdodCkgbWluLXctWzhyZW1dIG9yaWdpbi0oLS1yYWRpeC1kcm9wZG93bi1tZW51LWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIHJvdW5kZWQtbWQgYm9yZGVyIHAtMSBzaGFkb3ctbWRcIixcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51R3JvdXAoe1xyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuR3JvdXA+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuR3JvdXAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1ncm91cFwiIHsuLi5wcm9wc30gLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUl0ZW0oe1xyXG4gIGNsYXNzTmFtZSxcclxuICBpbnNldCxcclxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtPiAmIHtcclxuICBpbnNldD86IGJvb2xlYW5cclxuICB2YXJpYW50PzogXCJkZWZhdWx0XCIgfCBcImRlc3RydWN0aXZlXCJcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1cclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1pdGVtXCJcclxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XHJcbiAgICAgIGRhdGEtdmFyaWFudD17dmFyaWFudH1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Zm9jdXM6YmctZGVzdHJ1Y3RpdmUvMTAgZGFyazpkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS8yMCBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czp0ZXh0LWRlc3RydWN0aXZlIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOio6W3N2Z106IXRleHQtZGVzdHJ1Y3RpdmUgWyZfc3ZnOm5vdChbY2xhc3MqPSd0ZXh0LSddKV06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBkYXRhLVtpbnNldF06cGwtOCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNoZWNrZWQsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY2hlY2tib3gtaXRlbVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci0yIHBsLTggdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMiBmbGV4IHNpemUtMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz5cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVJhZGlvR3JvdXAoe1xyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9Hcm91cD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtcmFkaW8tZ3JvdXBcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51UmFkaW9JdGVtKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtcmFkaW8taXRlbVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci0yIHBsLTggdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMiBmbGV4IHNpemUtMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgICAgICAgIDxDaXJjbGVJY29uIGNsYXNzTmFtZT1cInNpemUtMiBmaWxsLWN1cnJlbnRcIiAvPlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51TGFiZWwoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBpbnNldCxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPiAmIHtcclxuICBpbnNldD86IGJvb2xlYW5cclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtbGFiZWxcIlxyXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInB4LTIgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gZGF0YS1baW5zZXRdOnBsLThcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVNlcGFyYXRvcih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvclxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXNlcGFyYXRvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJiZy1ib3JkZXIgLW14LTEgbXktMSBoLXB4XCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTaG9ydGN1dCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwic3BhblwiPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhblxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXNob3J0Y3V0XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtbC1hdXRvIHRleHQteHMgdHJhY2tpbmctd2lkZXN0XCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWIoe1xyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViPikge1xyXG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YiBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXN1YlwiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51U3ViVHJpZ2dlcih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGluc2V0LFxyXG4gIGNoaWxkcmVuLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XHJcbiAgaW5zZXQ/OiBib29sZWFuXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyXHJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLXRyaWdnZXJcIlxyXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmJnLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtpbnNldF06cGwtOFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPVwibWwtYXV0byBzaXplLTRcIiAvPlxyXG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVN1YkNvbnRlbnQoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudFxyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXN1Yi1jb250ZW50XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yIHotNTAgbWluLXctWzhyZW1dIG9yaWdpbi0oLS1yYWRpeC1kcm9wZG93bi1tZW51LWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIHAtMSBzaGFkb3ctbGdcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duTWVudVBvcnRhbCxcclxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgRHJvcGRvd25NZW51R3JvdXAsXHJcbiAgRHJvcGRvd25NZW51TGFiZWwsXHJcbiAgRHJvcGRvd25NZW51SXRlbSxcclxuICBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0sXHJcbiAgRHJvcGRvd25NZW51UmFkaW9Hcm91cCxcclxuICBEcm9wZG93bk1lbnVSYWRpb0l0ZW0sXHJcbiAgRHJvcGRvd25NZW51U2VwYXJhdG9yLFxyXG4gIERyb3Bkb3duTWVudVNob3J0Y3V0LFxyXG4gIERyb3Bkb3duTWVudVN1YixcclxuICBEcm9wZG93bk1lbnVTdWJUcmlnZ2VyLFxyXG4gIERyb3Bkb3duTWVudVN1YkNvbnRlbnQsXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFOQTs7Ozs7QUFRQSxTQUFTLGFBQWEsS0FFb0M7UUFGcEMsRUFDcEIsR0FBRyxPQUNxRCxHQUZwQztJQUdwQixxQkFBTyw2TEFBQywrS0FBQSxDQUFBLE9BQTBCO1FBQUMsYUFBVTtRQUFpQixHQUFHLEtBQUs7Ozs7OztBQUN4RTtLQUpTO0FBTVQsU0FBUyxtQkFBbUIsS0FFZ0M7UUFGaEMsRUFDMUIsR0FBRyxPQUN1RCxHQUZoQztJQUcxQixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLFNBQTRCO1FBQUMsYUFBVTtRQUF3QixHQUFHLEtBQUs7Ozs7OztBQUU1RTtNQU5TO0FBUVQsU0FBUyxvQkFBb0IsS0FFZ0M7UUFGaEMsRUFDM0IsR0FBRyxPQUN3RCxHQUZoQztJQUczQixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLFVBQTZCO1FBQzVCLGFBQVU7UUFDVCxHQUFHLEtBQUs7Ozs7OztBQUdmO01BVFM7QUFXVCxTQUFTLG9CQUFvQixLQUlnQztRQUpoQyxFQUMzQixTQUFTLEVBQ1QsYUFBYSxDQUFDLEVBQ2QsR0FBRyxPQUN3RCxHQUpoQztJQUszQixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLFNBQTRCO2tCQUMzQixjQUFBLDZMQUFDLCtLQUFBLENBQUEsVUFBNkI7WUFDNUIsYUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDBqQkFDQTtZQUVELEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7QUFJakI7TUFsQlM7QUFvQlQsU0FBUyxrQkFBa0IsS0FFZ0M7UUFGaEMsRUFDekIsR0FBRyxPQUNzRCxHQUZoQztJQUd6QixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLFFBQTJCO1FBQUMsYUFBVTtRQUF1QixHQUFHLEtBQUs7Ozs7OztBQUUxRTtNQU5TO0FBUVQsU0FBUyxpQkFBaUIsS0FRekI7UUFSeUIsRUFDeEIsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLFNBQVMsRUFDbkIsR0FBRyxPQUlKLEdBUnlCO0lBU3hCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsT0FBMEI7UUFDekIsYUFBVTtRQUNWLGNBQVk7UUFDWixnQkFBYztRQUNkLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsK21CQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQXJCUztBQXVCVCxTQUFTLHlCQUF5QixLQUtnQztRQUxoQyxFQUNoQyxTQUFTLEVBQ1QsUUFBUSxFQUNSLE9BQU8sRUFDUCxHQUFHLE9BQzZELEdBTGhDO0lBTWhDLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsZUFBa0M7UUFDakMsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsZ1RBQ0E7UUFFRixTQUFTO1FBQ1IsR0FBRyxLQUFLOzswQkFFVCw2TEFBQztnQkFBSyxXQUFVOzBCQUNkLGNBQUEsNkxBQUMsK0tBQUEsQ0FBQSxnQkFBbUM7OEJBQ2xDLGNBQUEsNkxBQUMsMk1BQUEsQ0FBQSxZQUFTO3dCQUFDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHeEI7Ozs7Ozs7QUFHUDtNQXhCUztBQTBCVCxTQUFTLHVCQUF1QixLQUVnQztRQUZoQyxFQUM5QixHQUFHLE9BQzJELEdBRmhDO0lBRzlCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsYUFBZ0M7UUFDL0IsYUFBVTtRQUNULEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFUUztBQVdULFNBQVMsc0JBQXNCLEtBSWdDO1FBSmhDLEVBQzdCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsR0FBRyxPQUMwRCxHQUpoQztJQUs3QixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLFlBQStCO1FBQzlCLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGdUQUNBO1FBRUQsR0FBRyxLQUFLOzswQkFFVCw2TEFBQztnQkFBSyxXQUFVOzBCQUNkLGNBQUEsNkxBQUMsK0tBQUEsQ0FBQSxnQkFBbUM7OEJBQ2xDLGNBQUEsNkxBQUMsNk1BQUEsQ0FBQSxhQUFVO3dCQUFDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHekI7Ozs7Ozs7QUFHUDtNQXRCUztBQXdCVCxTQUFTLGtCQUFrQixLQU0xQjtRQU4wQixFQUN6QixTQUFTLEVBQ1QsS0FBSyxFQUNMLEdBQUcsT0FHSixHQU4wQjtJQU96QixxQkFDRSw2TEFBQywrS0FBQSxDQUFBLFFBQTJCO1FBQzFCLGFBQVU7UUFDVixjQUFZO1FBQ1osV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixxREFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFsQlM7QUFvQlQsU0FBUyxzQkFBc0IsS0FHZ0M7UUFIaEMsRUFDN0IsU0FBUyxFQUNULEdBQUcsT0FDMEQsR0FIaEM7SUFJN0IscUJBQ0UsNkxBQUMsK0tBQUEsQ0FBQSxZQUErQjtRQUM5QixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSw2QkFBNkI7UUFDMUMsR0FBRyxLQUFLOzs7Ozs7QUFHZjtPQVhTO0FBYVQsU0FBUyxxQkFBcUIsS0FHQztRQUhELEVBQzVCLFNBQVMsRUFDVCxHQUFHLE9BQzBCLEdBSEQ7SUFJNUIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVix5REFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7T0FkUztBQWdCVCxTQUFTLGdCQUFnQixLQUVnQztRQUZoQyxFQUN2QixHQUFHLE9BQ29ELEdBRmhDO0lBR3ZCLHFCQUFPLDZMQUFDLCtLQUFBLENBQUEsTUFBeUI7UUFBQyxhQUFVO1FBQXFCLEdBQUcsS0FBSzs7Ozs7O0FBQzNFO09BSlM7QUFNVCxTQUFTLHVCQUF1QixLQU8vQjtRQVArQixFQUM5QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLE9BR0osR0FQK0I7SUFROUIscUJBQ0UsNkxBQUMsK0tBQUEsQ0FBQSxhQUFnQztRQUMvQixhQUFVO1FBQ1YsY0FBWTtRQUNaLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysa09BQ0E7UUFFRCxHQUFHLEtBQUs7O1lBRVI7MEJBQ0QsNkxBQUMsNk5BQUEsQ0FBQSxtQkFBZ0I7Z0JBQUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBR2xDO09BdEJTO0FBd0JULFNBQVMsdUJBQXVCLEtBR2dDO1FBSGhDLEVBQzlCLFNBQVMsRUFDVCxHQUFHLE9BQzJELEdBSGhDO0lBSTlCLHFCQUNFLDZMQUFDLCtLQUFBLENBQUEsYUFBZ0M7UUFDL0IsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsaWZBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmO09BZFMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDQwNCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL3RoZW1lLXRvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9vbiwgU3VuLCBNb25pdG9yIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbidcclxuaW1wb3J0IHtcclxuICAgIERyb3Bkb3duTWVudSxcclxuICAgIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgICBEcm9wZG93bk1lbnVJdGVtLFxyXG4gICAgRHJvcGRvd25NZW51VHJpZ2dlcixcclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IHsgc2V0VGhlbWUsIHRoZW1lIH0gPSB1c2VUaGVtZSgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiaWNvblwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGhvdmVyOmJnLWFjY2VudCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3VuIGNsYXNzTmFtZT1cImgtWzEuMnJlbV0gdy1bMS4ycmVtXSByb3RhdGUtMCBzY2FsZS0xMDAgdHJhbnNpdGlvbi1hbGwgZGFyazotcm90YXRlLTkwIGRhcms6c2NhbGUtMCB0aGVtZS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TW9vbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLVsxLjJyZW1dIHctWzEuMnJlbV0gcm90YXRlLTkwIHNjYWxlLTAgdHJhbnNpdGlvbi1hbGwgZGFyazpyb3RhdGUtMCBkYXJrOnNjYWxlLTEwMCB0aGVtZS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIHRoZW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgYWxpZ249XCJlbmRcIiBjbGFzc05hbWU9XCJiZy1jYXJkLzk1IGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci1ib3JkZXIvNTAgc2hhZG93LXhsIHJvdW5kZWQteGwgbWluLXctWzE0MHB4XSBkcm9wZG93bi1jb250ZW50LWVuaGFuY2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKCdsaWdodCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMi41IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICR7dGhlbWUgPT09ICdsaWdodCcgPyAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnknIDogJ2hvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3VuIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+TGlnaHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKCdkYXJrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2JnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5JyA6ICdob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5EYXJrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSgnc3lzdGVtJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHt0aGVtZSA9PT0gJ3N5c3RlbScgPyAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnknIDogJ2hvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TW9uaXRvciBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlN5c3RlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFQQTs7Ozs7QUFjTyxTQUFTOztJQUNaLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQSxHQUFBLG1KQUFBLENBQUEsV0FBUSxBQUFEO0lBRW5DLHFCQUNJLDZMQUFDLCtJQUFBLENBQUEsZUFBWTs7MEJBQ1QsNkxBQUMsK0lBQUEsQ0FBQSxzQkFBbUI7Z0JBQUMsT0FBTzswQkFDeEIsY0FBQSw2TEFBQyxxSUFBQSxDQUFBLFNBQU07b0JBQUMsU0FBUTtvQkFBUSxNQUFLO29CQUFPLFdBQVU7O3NDQUMxQyw2TEFBQyxtTUFBQSxDQUFBLE1BQUc7NEJBQUMsV0FBVTs7Ozs7O3NDQUNmLDZMQUFDLHFNQUFBLENBQUEsT0FBSTs0QkFBQyxXQUFVOzs7Ozs7c0NBQ2hCLDZMQUFDOzRCQUFLLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsQyw2TEFBQywrSUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFNO2dCQUFNLFdBQVU7O2tDQUN2Qyw2TEFBQywrSUFBQSxDQUFBLG1CQUFnQjt3QkFDYixTQUFTLElBQU0sU0FBUzt3QkFDeEIsV0FBVyxBQUFDLDZGQUNQLE9BRG1HLFVBQVUsVUFBVSwrQkFBK0I7OzBDQUczSiw2TEFBQyxtTUFBQSxDQUFBLE1BQUc7Z0NBQUMsV0FBVTs7Ozs7OzBDQUNmLDZMQUFDO2dDQUFLLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7OztrQ0FFbEMsNkxBQUMsK0lBQUEsQ0FBQSxtQkFBZ0I7d0JBQ2IsU0FBUyxJQUFNLFNBQVM7d0JBQ3hCLFdBQVcsQUFBQyw2RkFDUCxPQURtRyxVQUFVLFNBQVMsK0JBQStCOzswQ0FHMUosNkxBQUMscU1BQUEsQ0FBQSxPQUFJO2dDQUFDLFdBQVU7Ozs7OzswQ0FDaEIsNkxBQUM7Z0NBQUssV0FBVTswQ0FBYzs7Ozs7Ozs7Ozs7O2tDQUVsQyw2TEFBQywrSUFBQSxDQUFBLG1CQUFnQjt3QkFDYixTQUFTLElBQU0sU0FBUzt3QkFDeEIsV0FBVyxBQUFDLDZGQUNQLE9BRG1HLFVBQVUsV0FBVywrQkFBK0I7OzBDQUc1Siw2TEFBQywyTUFBQSxDQUFBLFVBQU87Z0NBQUMsV0FBVTs7Ozs7OzBDQUNuQiw2TEFBQztnQ0FBSyxXQUFVOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQ7R0F4Q2dCOztRQUNnQixtSkFBQSxDQUFBLFdBQVE7OztLQUR4QiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNTc1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2xpYi9pMThuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNlcnZlci1zaWRlIGltcG9ydHMgYXJlIGhhbmRsZWQgY29uZGl0aW9uYWxseSB0byBhdm9pZCBjbGllbnQtc2lkZSBpc3N1ZXNcclxuXHJcbi8vIFN1cHBvcnRlZCBsb2NhbGVzIGNvbmZpZ3VyYXRpb25cclxuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ2FyJ10gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIExvY2FsZSA9IHR5cGVvZiBsb2NhbGVzW251bWJlcl07XHJcblxyXG4vLyBEZWZhdWx0IGxvY2FsZVxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTEU6IExvY2FsZSA9ICdlbic7XHJcblxyXG4vLyBDb29raWUgY29uZmlndXJhdGlvblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfQ09PS0lFID0ge1xyXG4gICAgbmFtZTogJ2xhbmcnLFxyXG4gICAgbWF4QWdlOiAzNjUgKiAyNCAqIDYwICogNjAsIC8vIDEgeWVhciBpbiBzZWNvbmRzXHJcbiAgICBodHRwT25seTogZmFsc2UsIC8vIEFjY2Vzc2libGUgdG8gY2xpZW50LXNpZGUgSmF2YVNjcmlwdFxyXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgc2FtZVNpdGU6ICdsYXgnIGFzIGNvbnN0LFxyXG4gICAgcGF0aDogJy8nLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gTG9jYWxlIGluZm9ybWF0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2NhbGVJbmZvID0ge1xyXG4gICAgZW46IHtcclxuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnbHRyJyBhcyBjb25zdCxcclxuICAgICAgICBmbGFnOiAn8J+HuvCfh7gnLFxyXG4gICAgfSxcclxuICAgIGFyOiB7XHJcbiAgICAgICAgbmFtZTogJ9in2YTYudix2KjZitipJyxcclxuICAgICAgICBkaXJlY3Rpb246ICdydGwnIGFzIGNvbnN0LFxyXG4gICAgICAgIGZsYWc6ICfwn4e48J+HpicsXHJcbiAgICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gVmFsaWRhdGUgaWYgYSBsb2NhbGUgaXMgc3VwcG9ydGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTG9jYWxlKGxvY2FsZTogc3RyaW5nKTogbG9jYWxlIGlzIExvY2FsZSB7XHJcbiAgICByZXR1cm4gbG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUgYXMgTG9jYWxlKTtcclxufVxyXG5cclxuLy8gR2V0IGRlZmF1bHQgbG9jYWxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TG9jYWxlKCk6IExvY2FsZSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9MT0NBTEU7XHJcbn1cclxuXHJcbi8vIEdldCBzdXBwb3J0ZWQgbG9jYWxlcyBsaXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRMb2NhbGVzKCk6IHJlYWRvbmx5IExvY2FsZVtdIHtcclxuICAgIHJldHVybiBsb2NhbGVzO1xyXG59XHJcblxyXG4vLyBTZXJ2ZXItc2lkZSBjb29raWUgcmVhZGluZyAoTmV4dC5qcylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlckxvY2FsZSgpOiBQcm9taXNlPExvY2FsZT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGNvb2tpZXMgfSA9IGF3YWl0IGltcG9ydCgnbmV4dC9oZWFkZXJzJyk7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ0Nvb2tpZSA9IGNvb2tpZVN0b3JlLmdldChMQU5HVUFHRV9DT09LSUUubmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBsYW5nQ29va2llPy52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvb2tpZVZhbHVlICYmIGlzVmFsaWRMb2NhbGUoY29va2llVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWVWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYWQgbGFuZ3VhZ2UgY29va2llIG9uIHNlcnZlcjonLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERFRkFVTFRfTE9DQUxFO1xyXG59XHJcblxyXG4vLyBDbGllbnQtc2lkZSBjb29raWUgcmVhZGluZ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRnJvbUNvb2tpZSgpOiBMb2NhbGUgfCBudWxsIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICBjb25zdCBsYW5nQ29va2llID0gY29va2llcy5maW5kKGNvb2tpZSA9PlxyXG4gICAgICAgICAgICBjb29raWUudHJpbSgpLnN0YXJ0c1dpdGgoYCR7TEFOR1VBR0VfQ09PS0lFLm5hbWV9PWApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGxhbmdDb29raWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBsYW5nQ29va2llLnNwbGl0KCc9JylbMV0/LnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKGNvb2tpZVZhbHVlICYmIGlzVmFsaWRMb2NhbGUoY29va2llVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYWQgbGFuZ3VhZ2UgY29va2llIG9uIGNsaWVudDonLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8vIENsaWVudC1zaWRlIGNvb2tpZSB3cml0aW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGVDb29raWUobG9jYWxlOiBMb2NhbGUpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBsb2NhbGUgYmVmb3JlIHNldHRpbmdcclxuICAgICAgICBpZiAoIWlzVmFsaWRMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgbG9jYWxlOiAke2xvY2FsZX0uIFVzaW5nIGRlZmF1bHQgbG9jYWxlLmApO1xyXG4gICAgICAgICAgICBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArIChMQU5HVUFHRV9DT09LSUUubWF4QWdlICogMTAwMCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBbXHJcbiAgICAgICAgICAgIGAke0xBTkdVQUdFX0NPT0tJRS5uYW1lfT0ke2xvY2FsZX1gLFxyXG4gICAgICAgICAgICBgZXhwaXJlcz0ke2V4cGlyZXMudG9VVENTdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICBgcGF0aD0ke0xBTkdVQUdFX0NPT0tJRS5wYXRofWAsXHJcbiAgICAgICAgICAgIGBTYW1lU2l0ZT0ke0xBTkdVQUdFX0NPT0tJRS5zYW1lU2l0ZX1gLFxyXG4gICAgICAgICAgICBMQU5HVUFHRV9DT09LSUUuc2VjdXJlID8gJ1NlY3VyZScgOiAnJyxcclxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCc7ICcpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZXQgbGFuZ3VhZ2UgY29va2llOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0IGN1cnJlbnQgbG9jYWxlIChjbGllbnQtc2lkZSlcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhbGUoKTogTG9jYWxlIHtcclxuICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldExvY2FsZUZyb21Db29raWUoKTtcclxuICAgIHJldHVybiBjb29raWVMb2NhbGUgfHwgREVGQVVMVF9MT0NBTEU7XHJcbn1cclxuXHJcbi8vIFNldCBsb2NhbGUgKGNsaWVudC1zaWRlKVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzVmFsaWRMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBsb2NhbGU6ICR7bG9jYWxlfS4gVXNpbmcgZGVmYXVsdCBsb2NhbGUuYCk7XHJcbiAgICAgICAgbG9jYWxlID0gREVGQVVMVF9MT0NBTEU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYWxlQ29va2llKGxvY2FsZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIEhUTUwgYXR0cmlidXRlcyBpbW1lZGlhdGVseVxyXG4gICAgdXBkYXRlSFRNTEF0dHJpYnV0ZXMobG9jYWxlKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGEgY3VzdG9tIGV2ZW50IGZvciBjb21wb25lbnRzIHRvIGxpc3RlbiB0b1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsb2NhbGVDaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDogeyBsb2NhbGUgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXBkYXRlIEhUTUwgYXR0cmlidXRlcyBiYXNlZCBvbiBsb2NhbGVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhUTUxBdHRyaWJ1dGVzKGxvY2FsZTogTG9jYWxlKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlRGF0YSA9IGxvY2FsZUluZm9bbG9jYWxlXTtcclxuICAgICAgICBpZiAobG9jYWxlRGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxvY2FsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9IGxvY2FsZURhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBIVE1MIGF0dHJpYnV0ZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBHZXQgbG9jYWxlIGRpcmVjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGlyZWN0aW9uKGxvY2FsZTogTG9jYWxlKTogJ2x0cicgfCAncnRsJyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5kaXJlY3Rpb24gfHwgJ2x0cic7XHJcbn1cclxuXHJcbi8vIEdldCBsb2NhbGUgZGlzcGxheSBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEaXNwbGF5TmFtZShsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxlSW5mb1tsb2NhbGVdPy5uYW1lIHx8IGxvY2FsZTtcclxufVxyXG5cclxuLy8gR2V0IGxvY2FsZSBmbGFnXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVGbGFnKGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbGVJbmZvW2xvY2FsZV0/LmZsYWcgfHwgJ/CfjJAnO1xyXG59XHJcblxyXG4vLyBUeXBlU2NyaXB0IHZhbGlkYXRpb24gZm9yIGkxOG4gc2V0dXAgKGxlZ2FjeSBmdW5jdGlvbiBrZXB0IGZvciBjb21wYXRpYmlsaXR5KVxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJMThuKCk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlcy5sZW5ndGggPiAwICYmIERFRkFVTFRfTE9DQUxFICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUU1RSxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRCO0FBWEwsTUFBTSxVQUFVO0lBQUM7SUFBTTtDQUFLO0FBSTVCLE1BQU0saUJBQXlCO0FBRy9CLE1BQU0sa0JBQWtCO0lBQzNCLE1BQU07SUFDTixRQUFRLE1BQU0sS0FBSyxLQUFLO0lBQ3hCLFVBQVU7SUFDVixRQUFRLG9EQUF5QjtJQUNqQyxVQUFVO0lBQ1YsTUFBTTtBQUNWO0FBR08sTUFBTSxhQUFhO0lBQ3RCLElBQUk7UUFDQSxNQUFNO1FBQ04sV0FBVztRQUNYLE1BQU07SUFDVjtJQUNBLElBQUk7UUFDQSxNQUFNO1FBQ04sV0FBVztRQUNYLE1BQU07SUFDVjtBQUNKO0FBR08sU0FBUyxjQUFjLE1BQWM7SUFDeEMsT0FBTyxRQUFRLFFBQVEsQ0FBQztBQUM1QjtBQUdPLFNBQVM7SUFDWixPQUFPO0FBQ1g7QUFHTyxTQUFTO0lBQ1osT0FBTztBQUNYO0FBR08sZUFBZTtJQUNsQixJQUFJO1FBQ0EsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHO1FBQ3BCLE1BQU0sY0FBYyxNQUFNO1FBQzFCLE1BQU0sYUFBYSxZQUFZLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSTtRQUN2RCxNQUFNLGNBQWMsdUJBQUEsaUNBQUEsV0FBWSxLQUFLO1FBRXJDLElBQUksZUFBZSxjQUFjLGNBQWM7WUFDM0MsT0FBTztRQUNYO0lBQ0osRUFBRSxPQUFPLE9BQU87UUFDWixRQUFRLElBQUksQ0FBQyw2Q0FBNkM7SUFDOUQ7SUFFQSxPQUFPO0FBQ1g7QUFHTyxTQUFTO0lBQ1osSUFBSSxPQUFPLGFBQWEsYUFBYSxPQUFPO0lBRTVDLElBQUk7UUFDQSxNQUFNLFVBQVUsU0FBUyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLE1BQU0sYUFBYSxRQUFRLElBQUksQ0FBQyxDQUFBLFNBQzVCLE9BQU8sSUFBSSxHQUFHLFVBQVUsQ0FBQyxBQUFDLEdBQXVCLE9BQXJCLGdCQUFnQixJQUFJLEVBQUM7UUFHckQsSUFBSSxZQUFZO2dCQUNRO1lBQXBCLE1BQU0sZUFBYyxxQkFBQSxXQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUF4Qix5Q0FBQSxtQkFBMEIsSUFBSTtZQUNsRCxJQUFJLGVBQWUsY0FBYyxjQUFjO2dCQUMzQyxPQUFPO1lBQ1g7UUFDSjtJQUNKLEVBQUUsT0FBTyxPQUFPO1FBQ1osUUFBUSxJQUFJLENBQUMsNkNBQTZDO0lBQzlEO0lBRUEsT0FBTztBQUNYO0FBR08sU0FBUyxnQkFBZ0IsTUFBYztJQUMxQyxJQUFJLE9BQU8sYUFBYSxhQUFhO0lBRXJDLElBQUk7UUFDQSxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsU0FBUztZQUN4QixRQUFRLElBQUksQ0FBQyxBQUFDLG1CQUF5QixPQUFQLFFBQU87WUFDdkMsU0FBUztRQUNiO1FBRUEsTUFBTSxVQUFVLElBQUk7UUFDcEIsUUFBUSxPQUFPLENBQUMsUUFBUSxPQUFPLEtBQU0sZ0JBQWdCLE1BQU0sR0FBRztRQUU5RCxNQUFNLGVBQWU7WUFDaEIsR0FBMEIsT0FBeEIsZ0JBQWdCLElBQUksRUFBQyxLQUFVLE9BQVA7WUFDMUIsV0FBZ0MsT0FBdEIsUUFBUSxXQUFXO1lBQzdCLFFBQTRCLE9BQXJCLGdCQUFnQixJQUFJO1lBQzNCLFlBQW9DLE9BQXpCLGdCQUFnQixRQUFRO1lBQ3BDLGdCQUFnQixNQUFNLEdBQUcsV0FBVztTQUN2QyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQztRQUV2QixTQUFTLE1BQU0sR0FBRztJQUN0QixFQUFFLE9BQU8sT0FBTztRQUNaLFFBQVEsS0FBSyxDQUFDLGtDQUFrQztJQUNwRDtBQUNKO0FBR08sU0FBUztJQUNaLE1BQU0sZUFBZTtJQUNyQixPQUFPLGdCQUFnQjtBQUMzQjtBQUdPLFNBQVMsVUFBVSxNQUFjO0lBQ3BDLElBQUksQ0FBQyxjQUFjLFNBQVM7UUFDeEIsUUFBUSxJQUFJLENBQUMsQUFBQyxtQkFBeUIsT0FBUCxRQUFPO1FBQ3ZDLFNBQVM7SUFDYjtJQUVBLGdCQUFnQjtJQUVoQixxQ0FBcUM7SUFDckMscUJBQXFCO0lBRXJCLHFEQUFxRDtJQUNyRCx3Q0FBbUM7UUFDL0IsT0FBTyxhQUFhLENBQUMsSUFBSSxZQUFZLGdCQUFnQjtZQUNqRCxRQUFRO2dCQUFFO1lBQU87UUFDckI7SUFDSjtBQUNKO0FBR08sU0FBUyxxQkFBcUIsTUFBYztJQUMvQyxJQUFJLE9BQU8sYUFBYSxhQUFhO0lBRXJDLElBQUk7UUFDQSxNQUFNLGFBQWEsVUFBVSxDQUFDLE9BQU87UUFDckMsSUFBSSxZQUFZO1lBQ1osU0FBUyxlQUFlLENBQUMsSUFBSSxHQUFHO1lBQ2hDLFNBQVMsZUFBZSxDQUFDLEdBQUcsR0FBRyxXQUFXLFNBQVM7UUFDdkQ7SUFDSixFQUFFLE9BQU8sT0FBTztRQUNaLFFBQVEsS0FBSyxDQUFDLHFDQUFxQztJQUN2RDtBQUNKO0FBR08sU0FBUyxtQkFBbUIsTUFBYztRQUN0QztJQUFQLE9BQU8sRUFBQSxxQkFBQSxVQUFVLENBQUMsT0FBTyxjQUFsQix5Q0FBQSxtQkFBb0IsU0FBUyxLQUFJO0FBQzVDO0FBR08sU0FBUyxxQkFBcUIsTUFBYztRQUN4QztJQUFQLE9BQU8sRUFBQSxxQkFBQSxVQUFVLENBQUMsT0FBTyxjQUFsQix5Q0FBQSxtQkFBb0IsSUFBSSxLQUFJO0FBQ3ZDO0FBR08sU0FBUyxjQUFjLE1BQWM7UUFDakM7SUFBUCxPQUFPLEVBQUEscUJBQUEsVUFBVSxDQUFDLE9BQU8sY0FBbEIseUNBQUEsbUJBQW9CLElBQUksS0FBSTtBQUN2QztBQUdPLFNBQVM7SUFDWixJQUFJO1FBQ0EsT0FBTyxRQUFRLE1BQU0sR0FBRyxLQUFLLG1CQUFtQjtJQUNwRCxFQUFFLFVBQU07UUFDSixPQUFPO0lBQ1g7QUFDSiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzQ1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2hvb2tzL3VzZUxhbmd1YWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVRyYW5zaXRpb24sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBnZXRDdXJyZW50TG9jYWxlLFxyXG4gIHNldExvY2FsZSxcclxuICBsb2NhbGVJbmZvLFxyXG4gIGdldFN1cHBvcnRlZExvY2FsZXMsXHJcbiAgaXNWYWxpZExvY2FsZSxcclxuICB0eXBlIExvY2FsZVxyXG59IGZyb20gJ0AvbGliL2kxOG4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50TG9jYWxlLCBzZXRDdXJyZW50TG9jYWxlXSA9IHVzZVN0YXRlPExvY2FsZT4oKCkgPT4gZ2V0Q3VycmVudExvY2FsZSgpKTtcclxuICBjb25zdCBbaXNQZW5kaW5nLCBzdGFydFRyYW5zaXRpb25dID0gdXNlVHJhbnNpdGlvbigpO1xyXG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLy8gQXZhaWxhYmxlIGxvY2FsZXMgd2l0aCBlbmhhbmNlZCBpbmZvcm1hdGlvblxyXG4gIGNvbnN0IGF2YWlsYWJsZUxvY2FsZXMgPSBnZXRTdXBwb3J0ZWRMb2NhbGVzKCkubWFwKGNvZGUgPT4gKHtcclxuICAgIGNvZGUsXHJcbiAgICBuYW1lOiBsb2NhbGVJbmZvW2NvZGVdLm5hbWUsXHJcbiAgICBkaXI6IGxvY2FsZUluZm9bY29kZV0uZGlyZWN0aW9uLFxyXG4gICAgZmxhZzogbG9jYWxlSW5mb1tjb2RlXS5mbGFnXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50TG9jYWxlSW5mbyA9IGF2YWlsYWJsZUxvY2FsZXMuZmluZCgobCkgPT4gbC5jb2RlID09PSBjdXJyZW50TG9jYWxlKTtcclxuXHJcbiAgLy8gTGlzdGVuIGZvciBsb2NhbGUgY2hhbmdlcyBmcm9tIG90aGVyIGNvbXBvbmVudHMgb3IgdGFic1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVMb2NhbGVDaGFuZ2UgPSAoZXZlbnQ6IEN1c3RvbUV2ZW50PHsgbG9jYWxlOiBMb2NhbGUgfT4pID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvY2FsZShldmVudC5kZXRhaWwubG9jYWxlKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2FsZUNoYW5nZScsIGhhbmRsZUxvY2FsZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxlQ2hhbmdlJywgaGFuZGxlTG9jYWxlQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIPCflKUgT1BUSU1JWkVEOiBSZXBsYWNlIHBvbGxpbmcgd2l0aCBldmVudC1kcml2ZW4gY3Jvc3MtdGFiIHN5bmNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHN0b3JhZ2UgZXZlbnRzIGZvciBjcm9zcy10YWIgc3luY2hyb25pemF0aW9uXHJcbiAgICBjb25zdCBoYW5kbGVTdG9yYWdlQ2hhbmdlID0gKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2xvY2FsZS1zeW5jJyAmJiBldmVudC5uZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xvY2FsZSA9IGV2ZW50Lm5ld1ZhbHVlO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkTG9jYWxlKG5ld0xvY2FsZSkgJiYgbmV3TG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb2N1cyBldmVudHMgdG8gY2hlY2sgZm9yIGV4dGVybmFsIGNvb2tpZSBjaGFuZ2VzXHJcbiAgICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY29va2llTG9jYWxlID0gZ2V0Q3VycmVudExvY2FsZSgpO1xyXG4gICAgICBpZiAoY29va2llTG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudExvY2FsZShjb29raWVMb2NhbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSB2aXNpYmlsaXR5IGNoYW5nZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICBjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUxvY2FsZSA9IGdldEN1cnJlbnRMb2NhbGUoKTtcclxuICAgICAgICBpZiAoY29va2llTG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TG9jYWxlKGNvb2tpZUxvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICAgIGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbY3VycmVudExvY2FsZV0pO1xyXG5cclxuICBjb25zdCBzd2l0Y2hMYW5ndWFnZSA9IChuZXdMb2NhbGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFpc1ZhbGlkTG9jYWxlKG5ld0xvY2FsZSkgfHwgbmV3TG9jYWxlID09PSBjdXJyZW50TG9jYWxlKSByZXR1cm47XHJcblxyXG4gICAgc3RhcnRUcmFuc2l0aW9uKCgpID0+IHtcclxuICAgICAgLy8gVXNlIHRoZSBjZW50cmFsaXplZCBzZXRMb2NhbGUgZnVuY3Rpb24gd2hpY2ggaGFuZGxlczpcclxuICAgICAgLy8gLSBDb29raWUgc2V0dGluZ1xyXG4gICAgICAvLyAtIEhUTUwgYXR0cmlidXRlIHVwZGF0ZXNcclxuICAgICAgLy8gLSBFdmVudCBkaXNwYXRjaGluZyBmb3IgY29tcG9uZW50IHVwZGF0ZXNcclxuICAgICAgc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcblxyXG4gICAgICAvLyDwn5SlIE5FVzogVHJpZ2dlciBjcm9zcy10YWIgc3luYyB2aWEgbG9jYWxTdG9yYWdlXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0XHJcbiAgICAgICAgaWYgKHRpbWVvdXRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlLXN5bmMnLCBuZXdMb2NhbGUpO1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc3luYyBpdGVtIGFmdGVyIGEgc2hvcnQgZGVsYXkgdG8gYXZvaWQgbWVtb3J5IGJ1aWxkdXBcclxuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2NhbGUtc3luYycpO1xyXG4gICAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIGltbWVkaWF0ZWx5IGZvciB2aXN1YWwgZmVlZGJhY2tcclxuICAgICAgc2V0Q3VycmVudExvY2FsZShuZXdMb2NhbGUpO1xyXG5cclxuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIgb2YgdGhlIGVudGlyZSBhcHAgYnkgcmVsb2FkaW5nXHJcbiAgICAgIC8vIFRoaXMgZW5zdXJlcyBhbGwgc2VydmVyIGNvbXBvbmVudHMgZ2V0IHRoZSBuZXcgbG9jYWxlXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSwgMTAwKTsgLy8gU21hbGwgZGVsYXkgZm9yIHZpc3VhbCBmZWVkYmFja1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogY3VycmVudExvY2FsZSxcclxuICAgIHN3aXRjaExhbmd1YWdlLFxyXG4gICAgYXZhaWxhYmxlTG9jYWxlcyxcclxuICAgIGN1cnJlbnRMb2NhbGVJbmZvLFxyXG4gICAgaXNQZW5kaW5nLFxyXG4gICAgaXNSVEw6IGN1cnJlbnRMb2NhbGUgPT09ICdhcidcclxuICB9O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0FBQ0E7O0FBSEE7OztBQVlPLFNBQVM7O0lBQ2QsTUFBTSxDQUFDLGVBQWUsaUJBQWlCLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFEO2dDQUFVLElBQU0sQ0FBQSxHQUFBLHFIQUFBLENBQUEsbUJBQWdCLEFBQUQ7O0lBQ2hGLE1BQU0sQ0FBQyxXQUFXLGdCQUFnQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLGdCQUFhLEFBQUQ7SUFDakQsTUFBTSxhQUFhLENBQUEsR0FBQSw2SkFBQSxDQUFBLFNBQU0sQUFBRCxFQUF5QjtJQUVqRCw4Q0FBOEM7SUFDOUMsTUFBTSxtQkFBbUIsQ0FBQSxHQUFBLHFIQUFBLENBQUEsc0JBQW1CLEFBQUQsSUFBSSxHQUFHLENBQUMsQ0FBQSxPQUFRLENBQUM7WUFDMUQ7WUFDQSxNQUFNLHFIQUFBLENBQUEsYUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzNCLEtBQUsscUhBQUEsQ0FBQSxhQUFVLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDL0IsTUFBTSxxSEFBQSxDQUFBLGFBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUM3QixDQUFDO0lBRUQsTUFBTSxvQkFBb0IsaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQU0sRUFBRSxJQUFJLEtBQUs7SUFFbEUsMERBQTBEO0lBQzFELENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDtpQ0FBRTtZQUNSLE1BQU07NERBQXFCLENBQUM7b0JBQzFCLGlCQUFpQixNQUFNLE1BQU0sQ0FBQyxNQUFNO2dCQUN0Qzs7WUFFQSxPQUFPLGdCQUFnQixDQUFDLGdCQUFnQjtZQUV4Qzt5Q0FBTztvQkFDTCxPQUFPLG1CQUFtQixDQUFDLGdCQUFnQjtnQkFDN0M7O1FBQ0Y7Z0NBQUcsRUFBRTtJQUVMLGlFQUFpRTtJQUNqRSxDQUFBLEdBQUEsNkpBQUEsQ0FBQSxZQUFTLEFBQUQ7aUNBQUU7WUFDUixzREFBc0Q7WUFDdEQsTUFBTTs2REFBc0IsQ0FBQztvQkFDM0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxpQkFBaUIsTUFBTSxRQUFRLEVBQUU7d0JBQ2pELE1BQU0sWUFBWSxNQUFNLFFBQVE7d0JBQ2hDLElBQUksQ0FBQSxHQUFBLHFIQUFBLENBQUEsZ0JBQWEsQUFBRCxFQUFFLGNBQWMsY0FBYyxlQUFlOzRCQUMzRCxpQkFBaUI7d0JBQ25CO29CQUNGO2dCQUNGOztZQUVBLDJEQUEyRDtZQUMzRCxNQUFNO3FEQUFjO29CQUNsQixNQUFNLGVBQWUsQ0FBQSxHQUFBLHFIQUFBLENBQUEsbUJBQWdCLEFBQUQ7b0JBQ3BDLElBQUksaUJBQWlCLGVBQWU7d0JBQ2xDLGlCQUFpQjtvQkFDbkI7Z0JBQ0Y7O1lBRUEsa0RBQWtEO1lBQ2xELE1BQU07Z0VBQXlCO29CQUM3QixJQUFJLENBQUMsU0FBUyxNQUFNLEVBQUU7d0JBQ3BCLE1BQU0sZUFBZSxDQUFBLEdBQUEscUhBQUEsQ0FBQSxtQkFBZ0IsQUFBRDt3QkFDcEMsSUFBSSxpQkFBaUIsZUFBZTs0QkFDbEMsaUJBQWlCO3dCQUNuQjtvQkFDRjtnQkFDRjs7WUFFQSxPQUFPLGdCQUFnQixDQUFDLFdBQVc7WUFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ2pDLFNBQVMsZ0JBQWdCLENBQUMsb0JBQW9CO1lBRTlDO3lDQUFPO29CQUNMLE9BQU8sbUJBQW1CLENBQUMsV0FBVztvQkFDdEMsT0FBTyxtQkFBbUIsQ0FBQyxTQUFTO29CQUNwQyxTQUFTLG1CQUFtQixDQUFDLG9CQUFvQjtvQkFDakQsSUFBSSxXQUFXLE9BQU8sRUFBRTt3QkFDdEIsYUFBYSxXQUFXLE9BQU87b0JBQ2pDO2dCQUNGOztRQUNGO2dDQUFHO1FBQUM7S0FBYztJQUVsQixNQUFNLGlCQUFpQixDQUFDO1FBQ3RCLElBQUksQ0FBQyxDQUFBLEdBQUEscUhBQUEsQ0FBQSxnQkFBYSxBQUFELEVBQUUsY0FBYyxjQUFjLGVBQWU7UUFFOUQsZ0JBQWdCO1lBQ2Qsd0RBQXdEO1lBQ3hELG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0IsNENBQTRDO1lBQzVDLENBQUEsR0FBQSxxSEFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO1lBRVYsa0RBQWtEO1lBQ2xELHdDQUFtQztnQkFDakMsNkJBQTZCO2dCQUM3QixJQUFJLFdBQVcsT0FBTyxFQUFFO29CQUN0QixhQUFhLFdBQVcsT0FBTztnQkFDakM7Z0JBRUEsYUFBYSxPQUFPLENBQUMsZUFBZTtnQkFDcEMsbUVBQW1FO2dCQUNuRSxXQUFXLE9BQU8sR0FBRyxXQUFXO29CQUM5QixhQUFhLFVBQVUsQ0FBQztvQkFDeEIsV0FBVyxPQUFPLEdBQUc7Z0JBQ3ZCLEdBQUc7WUFDTDtZQUVBLHFEQUFxRDtZQUNyRCxpQkFBaUI7WUFFakIsbURBQW1EO1lBQ25ELHdEQUF3RDtZQUN4RCxXQUFXO2dCQUNULE9BQU8sUUFBUSxDQUFDLE1BQU07WUFDeEIsR0FBRyxNQUFNLGtDQUFrQztRQUM3QztJQUNGO0lBRUEsT0FBTztRQUNMLFFBQVE7UUFDUjtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU8sa0JBQWtCO0lBQzNCO0FBQ0Y7R0FwSGdCOztRQUV1Qiw2SkFBQSxDQUFBLGdCQUFhIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4ODksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9tYWRlL2xhbmd1YWdlLXN3aXRjaGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVjayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgRHJvcGRvd25NZW51LFxyXG4gICAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxhbmd1YWdlJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlRmxhZyB9IGZyb20gJ0AvbGliL2kxOG4nO1xyXG5cclxuLy8gRmxhZyBpY29ucyBhcyBjb21wb25lbnRzIHdpdGggZW5oYW5jZWQgc3R5bGluZ1xyXG5jb25zdCBGbGFnSWNvbiA9ICh7IGNvdW50cnksIGNsYXNzTmFtZSA9IFwidy00IGgtNFwiIH06IHsgY291bnRyeTogc3RyaW5nOyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgY29uc3QgZmxhZyA9IGdldExvY2FsZUZsYWcoY291bnRyeSBhcyAnZW4nIHwgJ2FyJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1sZyBsZWFkaW5nLW5vbmUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTExMGB9PlxyXG4gICAgICAgICAgICB7ZmxhZ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlU3dpdGNoZXIoKSB7XHJcbiAgICBjb25zdCB7IHN3aXRjaExhbmd1YWdlLCBhdmFpbGFibGVMb2NhbGVzLCBjdXJyZW50TG9jYWxlSW5mbywgaXNQZW5kaW5nIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxhbmd1YWdlU3dpdGNoID0gKGxvY2FsZUNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc3dpdGNoaW5nIHRvIHRoZSBzYW1lIGxhbmd1YWdlXHJcbiAgICAgICAgaWYgKGxvY2FsZUNvZGUgPT09IGN1cnJlbnRMb2NhbGVJbmZvPy5jb2RlKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIENhbGwgdGhlIHN3aXRjaCBmdW5jdGlvbiB3aGljaCBub3cgaGFuZGxlcyBjb29raWUtYmFzZWQgc3dpdGNoaW5nXHJcbiAgICAgICAgc3dpdGNoTGFuZ3VhZ2UobG9jYWxlQ29kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtOSBweC0zIGJnLWJhY2tncm91bmQgaG92ZXI6YmctYWNjZW50IGJvcmRlci1ib3JkZXIgaG92ZXI6Ym9yZGVyLXByaW1hcnkvNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgJHtpc1BlbmRpbmcgPyAnb3BhY2l0eS03MCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEN1cnJlbnQgbGFuZ3VhZ2U6ICR7Y3VycmVudExvY2FsZUluZm8/Lm5hbWV9LiBDbGljayB0byBjaGFuZ2UgbGFuZ3VhZ2UuYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RmxhZ0ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT17Y3VycmVudExvY2FsZUluZm8/LmNvZGUgfHwgJ2VuJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00IGgtNCBtci0yIGZsYWctaWNvbiAke2lzUGVuZGluZyA/ICdhbmltYXRlLXB1bHNlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExvY2FsZUluZm8/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1BlbmRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHctMyBoLTMgYm9yZGVyIGJvcmRlci1jdXJyZW50IGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoYW5naW5nIGxhbmd1YWdlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWNhcmQvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBzaGFkb3cteGwgcm91bmRlZC14bCBtaW4tdy1bMTYwcHhdIHAtMSBkcm9wZG93bi1jb250ZW50LWVuaGFuY2VkXCJcclxuICAgICAgICAgICAgICAgIHNpZGVPZmZzZXQ9ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthdmFpbGFibGVMb2NhbGVzLm1hcCgobG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50TG9jYWxlID0gY3VycmVudExvY2FsZUluZm8/LmNvZGUgPT09IGxvY2FsZS5jb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsb2NhbGUuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxhbmd1YWdlU3dpdGNoKGxvY2FsZS5jb2RlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1BlbmRpbmcgfHwgaXNDdXJyZW50TG9jYWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgJHtpc0N1cnJlbnRMb2NhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgY3Vyc29yLWRlZmF1bHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNQZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGFjdGl2ZTpiZy1hY2NlbnQvODAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7bG9jYWxlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYWdJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT17bG9jYWxlLmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00IGgtNCBmbGFnLWljb24gJHtpc1BlbmRpbmcgJiYgIWlzQ3VycmVudExvY2FsZSA/ICdvcGFjaXR5LTUwJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0N1cnJlbnRMb2NhbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeSBhbmltYXRlLWluIGZhZGUtaW4tMCB6b29tLWluLTk1IGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDdXJyZW50IGxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FBRUEsaURBQWlEO0FBQ2pELE1BQU0sV0FBVztRQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksU0FBUyxFQUEyQztJQUN6RixNQUFNLE9BQU8sQ0FBQSxHQUFBLHFIQUFBLENBQUEsZ0JBQWEsQUFBRCxFQUFFO0lBRTNCLHFCQUNJLDZMQUFDO1FBQUssV0FBVyxBQUFDLEdBQVksT0FBVixXQUFVO2tCQUN6Qjs7Ozs7O0FBR2I7S0FSTTtBQVVDLFNBQVM7O0lBQ1osTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFBLEdBQUEsOEhBQUEsQ0FBQSxjQUFXLEFBQUQ7SUFFckYsTUFBTSx1QkFBdUIsQ0FBQztRQUMxQix5Q0FBeUM7UUFDekMsSUFBSSxnQkFBZSw4QkFBQSx3Q0FBQSxrQkFBbUIsSUFBSSxHQUFFO1FBRTVDLG9FQUFvRTtRQUNwRSxlQUFlO0lBQ25CO0lBRUEscUJBQ0ksNkxBQUMsK0lBQUEsQ0FBQSxlQUFZOzswQkFDVCw2TEFBQywrSUFBQSxDQUFBLHNCQUFtQjtnQkFBQyxPQUFPOzBCQUN4QixjQUFBLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtvQkFDSCxTQUFRO29CQUNSLE1BQUs7b0JBQ0wsVUFBVTtvQkFDVixXQUFXLEFBQUMsc0lBQ1AsT0FENEksWUFBWSxrQ0FBa0M7b0JBRS9MLGNBQVksQUFBQyxxQkFBNEMsT0FBeEIsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUksRUFBQzs7c0NBRXpELDZMQUFDOzRCQUNHLFNBQVMsQ0FBQSw4QkFBQSx3Q0FBQSxrQkFBbUIsSUFBSSxLQUFJOzRCQUNwQyxXQUFXLEFBQUMsMEJBQTBELE9BQWpDLFlBQVksa0JBQWtCOzs7Ozs7c0NBRXZFLDZMQUFDOzRCQUFLLFdBQVU7c0NBQ1gsOEJBQUEsd0NBQUEsa0JBQW1CLElBQUk7Ozs7Ozt3QkFFM0IsMkJBQ0csNkxBQUM7NEJBQ0csV0FBVTs0QkFDVixjQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLM0IsNkxBQUMsK0lBQUEsQ0FBQSxzQkFBbUI7Z0JBQ2hCLE9BQU07Z0JBQ04sV0FBVTtnQkFDVixZQUFZOzBCQUVYLGlCQUFpQixHQUFHLENBQUMsQ0FBQztvQkFDbkIsTUFBTSxrQkFBa0IsQ0FBQSw4QkFBQSx3Q0FBQSxrQkFBbUIsSUFBSSxNQUFLLE9BQU8sSUFBSTtvQkFFL0QscUJBQ0ksNkxBQUMsK0lBQUEsQ0FBQSxtQkFBZ0I7d0JBRWIsU0FBUyxJQUFNLHFCQUFxQixPQUFPLElBQUk7d0JBQy9DLFVBQVUsYUFBYTt3QkFDdkIsV0FBVyxBQUFDLG1KQUtQLE9BTHlKLGtCQUNwSiw4Q0FDQSxZQUNJLGtDQUNBO3dCQUVkLGNBQVksQUFBQyxhQUF3QixPQUFaLE9BQU8sSUFBSTs7MENBRXBDLDZMQUFDO2dDQUNHLFNBQVMsT0FBTyxJQUFJO2dDQUNwQixXQUFXLEFBQUMscUJBQ1AsT0FEMkIsYUFBYSxDQUFDLGtCQUFrQixlQUFlOzs7Ozs7MENBR25GLDZMQUFDO2dDQUFLLFdBQVU7MENBQ1gsT0FBTyxJQUFJOzs7Ozs7NEJBRWYsaUNBQ0csNkxBQUMsdU1BQUEsQ0FBQSxRQUFLO2dDQUNGLFdBQVU7Z0NBQ1YsY0FBVzs7Ozs7Ozt1QkF0QmQsT0FBTyxJQUFJOzs7OztnQkEyQjVCOzs7Ozs7Ozs7Ozs7QUFJaEI7R0E5RWdCOztRQUMrRCw4SEFBQSxDQUFBLGNBQVc7OztNQUQxRSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTA0NywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy91dGlscy9yb2xlUmVkaXJlY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFBhdGhCeVJvbGUgPSAocm9sZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFyb2xlIHx8ICFpZCkge1xyXG4gICAgcmV0dXJuICcvJztcclxuICB9XHJcbiAgY29uc3QgY2xlYW5JZCA9IGlkLnNwbGl0KCctJylbMV07XHJcbiAgY29uc3Qgbm9ybWFsaXplZFJvbGUgPSByb2xlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnLScpXHJcbiAgc3dpdGNoIChub3JtYWxpemVkUm9sZSkge1xyXG4gICAgY2FzZSAnc3R1ZGVudCc6XHJcbiAgICAgIHJldHVybiBgL3N0dWRlbnQvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdhZG1pbic6XHJcbiAgICAgIHJldHVybiBgL2FkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgY2FzZSAndGVhY2hlcic6XHJcbiAgICAgIHJldHVybiBgL3RlYWNoZXIvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdzdXBlci1hZG1pbic6XHJcbiAgICAgIHJldHVybiBgL3N1cGVyLWFkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICcvJztcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLGdCQUFnQixDQUFDLE1BQWM7SUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQ2hCLE9BQU87SUFDVDtJQUNBLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoQyxNQUFNLGlCQUFpQixLQUFLLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTtJQUN4RCxPQUFRO1FBQ04sS0FBSztZQUNILE9BQU8sQUFBQyxZQUFtQixPQUFSO1FBQ3JCLEtBQUs7WUFDSCxPQUFPLEFBQUMsVUFBaUIsT0FBUjtRQUNuQixLQUFLO1lBQ0gsT0FBTyxBQUFDLFlBQW1CLE9BQVI7UUFDckIsS0FBSztZQUNILE9BQU8sQUFBQyxnQkFBdUIsT0FBUjtRQUN6QjtZQUNFLE9BQU87SUFDWDtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMDc4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvYXZhdGFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgQXZhdGFyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtYXZhdGFyXCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIEF2YXRhcih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuUm9vdD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhclByaW1pdGl2ZS5Sb290XHJcbiAgICAgIGRhdGEtc2xvdD1cImF2YXRhclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJyZWxhdGl2ZSBmbGV4IHNpemUtOCBzaHJpbmstMCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBdmF0YXJJbWFnZSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuSW1hZ2U+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdmF0YXJQcmltaXRpdmUuSW1hZ2VcclxuICAgICAgZGF0YS1zbG90PVwiYXZhdGFyLWltYWdlXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcImFzcGVjdC1zcXVhcmUgc2l6ZS1mdWxsXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBdmF0YXJGYWxsYmFjayh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuRmFsbGJhY2s+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdmF0YXJQcmltaXRpdmUuRmFsbGJhY2tcclxuICAgICAgZGF0YS1zbG90PVwiYXZhdGFyLWZhbGxiYWNrXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImJnLW11dGVkIGZsZXggc2l6ZS1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IEF2YXRhciwgQXZhdGFySW1hZ2UsIEF2YXRhckZhbGxiYWNrIH1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBO0FBRUE7QUFMQTs7OztBQU9BLFNBQVMsT0FBTyxLQUdvQztRQUhwQyxFQUNkLFNBQVMsRUFDVCxHQUFHLE9BQytDLEdBSHBDO0lBSWQscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxPQUFvQjtRQUNuQixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViw4REFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7S0FkUztBQWdCVCxTQUFTLFlBQVksS0FHZ0M7UUFIaEMsRUFDbkIsU0FBUyxFQUNULEdBQUcsT0FDZ0QsR0FIaEM7SUFJbkIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxRQUFxQjtRQUNwQixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSwyQkFBMkI7UUFDeEMsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQVhTO0FBYVQsU0FBUyxlQUFlLEtBR2dDO1FBSGhDLEVBQ3RCLFNBQVMsRUFDVCxHQUFHLE9BQ21ELEdBSGhDO0lBSXRCLHFCQUNFLDZMQUFDLHFLQUFBLENBQUEsV0FBd0I7UUFDdkIsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysb0VBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmO01BZFMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDExNDMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy91c2VyL1VzZXJBdmF0YXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2sgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYXZhdGFyJztcclxuXHJcbmludGVyZmFjZSBVc2VyQXZhdGFyQ29udGVudFByb3BzIHtcclxuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQXZhdGFyKHsgbmFtZSwgb25DbGljayB9OiBVc2VyQXZhdGFyQ29udGVudFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJpbmctMiByaW5nLXByaW1hcnkvMjAgcm91bmRlZC0yeGwgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPEF2YXRhckZhbGxiYWNrIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZm9udC1tZWRpdW0gcm91bmRlZC0yeGwgZm9udC1wcmltYXJ5XCI+XHJcbiAgICAgICAge25hbWVcclxuICAgICAgICAgID8uc3BsaXQoJyAnKVxyXG4gICAgICAgICAgLm1hcCgobmFtZSkgPT4gbmFtZVswXSlcclxuICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgPC9BdmF0YXJGYWxsYmFjaz5cclxuICAgIDwvQXZhdGFyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7O0FBT2UsU0FBUyxXQUFXLEtBQXlDO1FBQXpDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBMEIsR0FBekM7SUFDakMscUJBQ0UsNkxBQUMscUlBQUEsQ0FBQSxTQUFNO1FBQUMsV0FBVTtRQUE4RCxTQUFTO2tCQUN2RixjQUFBLDZMQUFDLHFJQUFBLENBQUEsaUJBQWM7WUFBQyxXQUFVO3NCQUN2QixpQkFBQSwyQkFBQSxLQUNHLEtBQUssQ0FBQyxLQUNQLEdBQUcsQ0FBQyxDQUFDLE9BQVMsSUFBSSxDQUFDLEVBQUUsRUFDckIsSUFBSSxDQUFDOzs7Ozs7Ozs7OztBQUloQjtLQVh3QiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTE4MSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VBdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldE1lUXVlcnkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2F1dGhBcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZUdldE1lUXVlcnkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IGRhdGE/LmRhdGEsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0Vycm9yLFxyXG4gICAgaXNMb2dnZWRJbjogISFkYXRhLFxyXG4gICAgcm9sZTogZGF0YT8uZGF0YT8ucm9sZSxcclxuICAgIGlkOiBkYXRhPy5kYXRhPy5pZCxcclxuICAgIG1vbmdvSWQ6IGRhdGE/LmRhdGE/Ll9pZCxcclxuICB9O1xyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBRU8sTUFBTSxVQUFVO1FBUWIsWUFDRixhQUNLOztJQVRYLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUEsR0FBQSxzSUFBQSxDQUFBLGdCQUFhLEFBQUQ7SUFFakQsT0FBTztRQUNMLElBQUksRUFBRSxpQkFBQSwyQkFBQSxLQUFNLElBQUk7UUFDaEI7UUFDQTtRQUNBLFlBQVksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLGlCQUFBLDRCQUFBLGFBQUEsS0FBTSxJQUFJLGNBQVYsaUNBQUEsV0FBWSxJQUFJO1FBQ3RCLEVBQUUsRUFBRSxpQkFBQSw0QkFBQSxjQUFBLEtBQU0sSUFBSSxjQUFWLGtDQUFBLFlBQVksRUFBRTtRQUNsQixPQUFPLEVBQUUsaUJBQUEsNEJBQUEsY0FBQSxLQUFNLElBQUksY0FBVixrQ0FBQSxZQUFZLEdBQUc7SUFDMUI7QUFDRjtHQVphOztRQUMwQixzSUFBQSxDQUFBLGdCQUFhIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMjE1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9IZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51LCBYLCBTcGFya2xlcyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IFRoZW1lVG9nZ2xlIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RoZW1lLXRvZ2dsZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU3dpdGNoZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbWFkZS9sYW5ndWFnZS1zd2l0Y2hlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCc7XHJcbmltcG9ydCB7IGdldFBhdGhCeVJvbGUgfSBmcm9tICdAL3V0aWxzL3JvbGVSZWRpcmVjdCc7XHJcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gJy4uL3VzZXIvVXNlckF2YXRhcic7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2hvb2tzL3VzZUF1dGgnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCdMYW5kaW5nLkhlYWRlcicpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB7IGlzTG9nZ2VkSW4sIHJvbGUsIGlkIH0gPSB1c2VyRGF0YTtcclxuXHJcbiAgY29uc3QgbmFtZSA9IHVzZXJEYXRhLnVzZXI/Lm5hbWU7XHJcbiAgY29uc3QgdXNlclBhdGggPSBnZXRQYXRoQnlSb2xlKHJvbGUsIGlkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBnbGFzcy1lZmZlY3QgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXIteGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtMjBcIj5cclxuICAgICAgICAgIHsvKiBMb2dvICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBydGw6c3BhY2UteC1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeSB0by1hY2NlbnQgcm91bmRlZC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgPFNwYXJrbGVzIHNpemU9ezIwfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgZm9udC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAge3QoJ2xvZ28udGFza2Zsb3cnKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogUmlnaHQgU2lkZSBBY3Rpb25zICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBydGw6c3BhY2UteC1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIDxVc2VyQXZhdGFyIG5hbWU9e25hbWV9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHVzZXJQYXRoKX0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPFRoZW1lVG9nZ2xlIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2luQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHB4LTYgcHktMyByb3VuZGVkLXhsIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1hbGwgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2N0YS5sb2dpbicpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIE1vYmlsZSBNZW51IEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBwLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNNZW51T3BlbiA/IDxYIHNpemU9ezI0fSAvPiA6IDxNZW51IHNpemU9ezI0fSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVEE7Ozs7Ozs7Ozs7QUFXQSxNQUFNLFNBQVM7UUFhQTs7SUFaYixNQUFNLENBQUMsWUFBWSxjQUFjLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDN0MsTUFBTSxTQUFTLENBQUEsR0FBQSxxSUFBQSxDQUFBLFlBQVMsQUFBRDtJQUN2QixNQUFNLElBQUksQ0FBQSxHQUFBLHlNQUFBLENBQUEsa0JBQWUsQUFBRCxFQUFFO0lBRTFCLE1BQU0sbUJBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNLFdBQVcsQ0FBQSxHQUFBLDBIQUFBLENBQUEsVUFBTyxBQUFEO0lBRXZCLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHO0lBRWpDLE1BQU0sUUFBTyxpQkFBQSxTQUFTLElBQUksY0FBYixxQ0FBQSxlQUFlLElBQUk7SUFDaEMsTUFBTSxXQUFXLENBQUEsR0FBQSwrSEFBQSxDQUFBLGdCQUFhLEFBQUQsRUFBRSxNQUFNO0lBRXJDLHFCQUNFLDZMQUFDO1FBQU8sV0FBVTtrQkFDaEIsY0FBQSw2TEFBQztZQUFJLFdBQVU7c0JBQ2IsY0FBQSw2TEFBQztnQkFBSSxXQUFVOztrQ0FFYiw2TEFBQzt3QkFBSSxXQUFVOzswQ0FDYiw2TEFBQztnQ0FBSSxXQUFVOzBDQUNiLGNBQUEsNkxBQUMsNk1BQUEsQ0FBQSxXQUFRO29DQUFDLE1BQU07b0NBQUksV0FBVTs7Ozs7Ozs7Ozs7MENBRWhDLDZMQUFDO2dDQUFLLFdBQVU7MENBQ2IsRUFBRTs7Ozs7Ozs7Ozs7O2tDQUlQLDZMQUFDO3dCQUFJLFdBQVU7OzRCQUNaLDJCQUNDLDZMQUFDLDJJQUFBLENBQUEsVUFBVTtnQ0FBQyxNQUFNO2dDQUFNLFNBQVMsSUFBTSxPQUFPLElBQUksQ0FBQzs7Ozs7eUZBRW5EOztrREFDRSw2TEFBQzt3Q0FBSSxXQUFVOzswREFDYiw2TEFBQyw4SUFBQSxDQUFBLGNBQVc7Ozs7OzBEQUNaLDZMQUFDLHFKQUFBLENBQUEsbUJBQWdCOzs7Ozs7Ozs7OztrREFHbkIsNkxBQUM7d0NBQ0MsU0FBUzt3Q0FDVCxXQUFVO2tEQUVWLGNBQUEsNkxBQUM7c0RBQU0sRUFBRTs7Ozs7Ozs7Ozs7OzswQ0FNZiw2TEFBQztnQ0FDQyxTQUFTLElBQU0sY0FBYyxDQUFDO2dDQUM5QixXQUFVOzBDQUVULDJCQUFhLDZMQUFDLCtMQUFBLENBQUEsSUFBQztvQ0FBQyxNQUFNOzs7Ozs2RkFBUyw2TEFBQyxxTUFBQSxDQUFBLE9BQUk7b0NBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBN0RNOztRQUVXLHFJQUFBLENBQUEsWUFBUztRQUNkLHlNQUFBLENBQUEsa0JBQWU7UUFNUiwwSEFBQSxDQUFBLFVBQU87OztLQVRwQjt1Q0ErRFMiLCJkZWJ1Z0lkIjpudWxsfX1dCn0=
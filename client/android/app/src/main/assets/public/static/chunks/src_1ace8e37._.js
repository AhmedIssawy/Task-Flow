(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": ()=>Table,
    "TableBody": ()=>TableBody,
    "TableCaption": ()=>TableCaption,
    "TableCell": ()=>TableCell,
    "TableFooter": ()=>TableFooter,
    "TableHead": ()=>TableHead,
    "TableHeader": ()=>TableHeader,
    "TableRow": ()=>TableRow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Table(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full table-fixed caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 truncate align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertDialog": ()=>AlertDialog,
    "AlertDialogAction": ()=>AlertDialogAction,
    "AlertDialogCancel": ()=>AlertDialogCancel,
    "AlertDialogContent": ()=>AlertDialogContent,
    "AlertDialogDescription": ()=>AlertDialogDescription,
    "AlertDialogFooter": ()=>AlertDialogFooter,
    "AlertDialogHeader": ()=>AlertDialogHeader,
    "AlertDialogOverlay": ()=>AlertDialogOverlay,
    "AlertDialogPortal": ()=>AlertDialogPortal,
    "AlertDialogTitle": ()=>AlertDialogTitle,
    "AlertDialogTrigger": ()=>AlertDialogTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function AlertDialog(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "alert-dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = AlertDialog;
function AlertDialogTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "alert-dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = AlertDialogTrigger;
function AlertDialogPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "alert-dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = AlertDialogPortal;
function AlertDialogOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "alert-dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = AlertDialogOverlay;
function AlertDialogContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "alert-dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c4 = AlertDialogContent;
function AlertDialogHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c5 = AlertDialogHeader;
function AlertDialogFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c6 = AlertDialogFooter;
function AlertDialogTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "alert-dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c7 = AlertDialogTitle;
function AlertDialogDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "alert-dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c8 = AlertDialogDescription;
function AlertDialogAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c9 = AlertDialogAction;
function AlertDialogCancel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c10 = AlertDialogCancel;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "AlertDialog");
__turbopack_context__.k.register(_c1, "AlertDialogTrigger");
__turbopack_context__.k.register(_c2, "AlertDialogPortal");
__turbopack_context__.k.register(_c3, "AlertDialogOverlay");
__turbopack_context__.k.register(_c4, "AlertDialogContent");
__turbopack_context__.k.register(_c5, "AlertDialogHeader");
__turbopack_context__.k.register(_c6, "AlertDialogFooter");
__turbopack_context__.k.register(_c7, "AlertDialogTitle");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction");
__turbopack_context__.k.register(_c10, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/tables/DeleteModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DeleteModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
;
;
function DeleteModal(param) {
    let { item, onClose, onConfirm, isLoading } = param;
    var _item_name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: !!item,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            className: "backdrop-blur-xl bg-background/95 border border-border/30 text-foreground shadow-2xl shadow-destructive/10 sm:max-w-md rounded-2xl p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-orange-500/5 rounded-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/DeleteModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    className: "relative space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 text-destructive",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                        className: "text-lg font-semibold",
                                        children: "Confirm Deletion"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            className: "text-sm text-muted-foreground leading-relaxed",
                            children: [
                                "This will permanently delete",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-md",
                                    children: (_item_name = item === null || item === void 0 ? void 0 : item.name) !== null && _item_name !== void 0 ? _item_name : 'this item'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                "and cannot be undone. This action is irreversible."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tables/DeleteModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    className: "relative flex space-x-3 pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            className: "flex-1 bg-muted/50 hover:bg-muted/80 border-border/30 rounded-xl py-3 transition-all duration-200",
                            disabled: isLoading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            className: "flex-1 bg-gradient-to-r from-destructive to-red-600 hover:from-destructive/90 hover:to-red-700 text-white shadow-lg hover:shadow-xl rounded-xl py-3 transition-all duration-200",
                            onClick: onConfirm,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 animate-spin",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Deleting..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/DeleteModal.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tables/DeleteModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tables/DeleteModal.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tables/DeleteModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/tables/DeleteModal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = DeleteModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/admin/PopupActions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PopupActions": ()=>PopupActions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
'use client';
;
;
;
;
function PopupActions(param) {
    let { item, enableEdit = false, enableDelete = false, onEdit, onDelete } = param;
    const handleEdit = ()=>{
        if (onEdit) {
            onEdit(item);
        }
    };
    const handleDelete = ()=>{
        if (onDelete) {
            onDelete(item);
        }
    };
    // Don't render if no actions are available
    if (!enableEdit && !enableDelete) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 w-8 p-0 hover:bg-muted/50 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/PopupActions.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Open actions menu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/PopupActions.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/PopupActions.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/PopupActions.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "w-40 backdrop-blur-xl bg-background/95 border border-border/30 shadow-2xl rounded-xl",
                children: [
                    enableEdit && onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleEdit,
                        className: "flex items-center space-x-2 px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-lg cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PopupActions.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PopupActions.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/PopupActions.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    enableDelete && onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleDelete,
                        className: "flex items-center space-x-2 px-3 py-2 hover:bg-destructive/10 hover:text-destructive rounded-lg cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PopupActions.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PopupActions.tsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/PopupActions.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/PopupActions.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/PopupActions.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = PopupActions;
var _c;
__turbopack_context__.k.register(_c, "PopupActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/tables/TableBodyRenderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$PopupActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/PopupActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function TableBodyRenderer(param) {
    let { isLoading, error, refetch, rows, columns, enableActions, editHook, deleteHook, onEdit, onDelete } = param;
    _s();
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                    colSpan: columns.length,
                    className: "text-center py-12 border border-border/70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-8 w-8 animate-spin text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 h-8 w-8 rounded-full border-2 border-primary/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-foreground",
                                        children: "Loading data..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Please wait while we fetch your information"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                    colSpan: columns.length,
                    className: "text-center py-12 border border-border/70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-destructive",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-foreground",
                                        children: "Failed to load data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "There was an error loading your information"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>refetch === null || refetch === void 0 ? void 0 : refetch(),
                                        className: "mt-3 bg-background/50 hover:bg-background/80 border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 me-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            "Try Again"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    if (rows.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                    colSpan: columns.length,
                    className: "text-center py-12 border border-border/70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-muted-foreground",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-foreground",
                                        children: "No data found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "There are no items to display at the moment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
        children: rows.map((row, i)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                className: "relative group hover:bg-gradient-to-r hover:from-muted/30 hover:to-transparent transition-all duration-200 border-b border-border/70",
                children: columns.map((col, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                        className: "py-4 px-6 first:ps-8 last:pe-12 text-sm text-foreground/90 border-r border-border/100 last:border-r-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor]
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this),
                            enableActions && (editHook || deleteHook) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10", isRTL ? "left-4" : "right-4"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$PopupActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupActions"], {
                                    item: row,
                                    enableEdit: !!editHook,
                                    enableDelete: !!deleteHook,
                                    onEdit: onEdit,
                                    onDelete: onDelete
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                    lineNumber: 145,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                                lineNumber: 141,
                                columnNumber: 19
                            }, this)
                        ]
                    }, j, true, {
                        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                        lineNumber: 131,
                        columnNumber: 15
                    }, this))
            }, i, false, {
                fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
                lineNumber: 126,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/tables/TableBodyRenderer.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(TableBodyRenderer, "WDG5anQEHd7WA2Pm9L+CM42XsLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TableBodyRenderer;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(TableBodyRenderer);
var _c, _c1;
__turbopack_context__.k.register(_c, "TableBodyRenderer");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": ()=>Dialog,
    "DialogClose": ()=>DialogClose,
    "DialogContent": ()=>DialogContent,
    "DialogDescription": ()=>DialogDescription,
    "DialogFooter": ()=>DialogFooter,
    "DialogHeader": ()=>DialogHeader,
    "DialogOverlay": ()=>DialogOverlay,
    "DialogPortal": ()=>DialogPortal,
    "DialogTitle": ()=>DialogTitle,
    "DialogTrigger": ()=>DialogTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent(param) {
    let { className, children, showCloseButton = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
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
"[project]/src/components/tables/FormModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FormModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function FormModal(param) {
    let { isOpen, onClose, title = 'Submit Form', description = 'Fill in the fields and submit.', submitLabel = 'Submit', submitFn, fields, initialData = {} } = param;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormModal.useEffect": ()=>{
            if (isOpen) {
                setFormData(initialData);
            }
        }
    }["FormModal.useEffect"], [
        isOpen
    ]);
    const handleChange = (key, value)=>{
        setFormData((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const handleSubmit = async ()=>{
        try {
            setIsSubmitting(true);
            await submitFn(formData);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Submitted successfully');
            onClose();
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Submission failed');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "backdrop-blur-xl bg-background/95 border border-border/30 text-foreground shadow-2xl shadow-primary/10 sm:max-w-md rounded-2xl space-y-6 p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/FormModal.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "relative space-y-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-primary",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/FormModal.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/FormModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/FormModal.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-lg font-semibold",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/FormModal.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/FormModal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/FormModal.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tables/FormModal.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/FormModal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative space-y-4",
                    children: fields.map((field)=>{
                        var _field_options;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground/90 flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: field.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/FormModal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        field.type === 'email' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 text-muted-foreground",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tables/FormModal.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/FormModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        field.type === 'password' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 text-muted-foreground",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tables/FormModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/FormModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tables/FormModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                field.inputType === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full p-3 border border-border/50 rounded-xl bg-background/50 text-foreground backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200",
                                    value: formData[field.key] || '',
                                    onChange: (e)=>handleChange(field.key, e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tables/FormModal.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        (_field_options = field.options) === null || _field_options === void 0 ? void 0 : _field_options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: opt.value,
                                                children: opt.label
                                            }, opt.value, false, {
                                                fileName: "[project]/src/components/tables/FormModal.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tables/FormModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: field.type || 'text',
                                    value: formData[field.key] || '',
                                    onChange: (e)=>handleChange(field.key, e.target.value),
                                    className: "w-full p-3 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/FormModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, field.key, true, {
                            fileName: "[project]/src/components/tables/FormModal.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/tables/FormModal.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "relative flex space-x-3 pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "flex-1 bg-muted/50 hover:bg-muted/80 border-border/30 rounded-xl py-3 transition-all duration-200",
                            disabled: isSubmitting,
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tables/FormModal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl rounded-xl py-3 transition-all duration-200",
                            onClick: handleSubmit,
                            disabled: isSubmitting,
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/FormModal.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Processing..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tables/FormModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tables/FormModal.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this) : submitLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/tables/FormModal.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tables/FormModal.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tables/FormModal.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/tables/FormModal.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(FormModal, "1lK/9BWUVfcaPaulvX+Y8fsaC7s=");
_c = FormModal;
var _c;
__turbopack_context__.k.register(_c, "FormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/admin/PaginatedTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PaginatedTable": ()=>PaginatedTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$DeleteModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tables/DeleteModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$TableBodyRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tables/TableBodyRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$FormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tables/FormModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/error/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ComponentErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error/ComponentErrorBoundary.tsx [app-client] (ecmascript)");
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
function PaginatedTable(param) {
    let { queryResult, dataKey, columns, className, enableActions, deleteHook, editHook, createHook, editableFields = [], createFields = [] } = param;
    _s();
    const { data, isLoading, error, refetch } = queryResult;
    console.log("this is the table data" + data);
    const rows = Array.isArray(data) ? data : (data === null || data === void 0 ? void 0 : data[dataKey]) || [];
    console.log(data, rows, dataKey);
    const [itemToDelete, setItemToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemToEdit, setItemToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editFormData, setEditFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [deleteFn, { isLoading: isDeleting } = {
        isLoading: false
    }] = (deleteHook === null || deleteHook === void 0 ? void 0 : deleteHook()) || [];
    const [editFn, { isLoading: isEditing } = {
        isLoading: false
    }] = (editHook === null || editHook === void 0 ? void 0 : editHook()) || [];
    const [createFn, { isLoading: isCreatingLoading } = {
        isLoading: false
    }] = (createHook === null || createHook === void 0 ? void 0 : createHook()) || [];
    const openEditModal = (item)=>{
        const initialValues = {};
        editableFields.forEach((field)=>{
            initialValues[field.key] = item[field.key];
        });
        setItemToEdit(item);
        setEditFormData(initialValues);
    };
    const openCreateModal = ()=>{
        setEditFormData({});
        setIsCreating(true);
    };
    const closeFormModal = ()=>{
        setItemToEdit(null);
        setIsCreating(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2f$ComponentErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentErrorBoundary"], {
        componentName: "PaginatedTable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-6", className),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "Data Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Manage and organize your data with advanced filtering and actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            createHook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: openCreateModal,
                                className: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl px-6 py-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 me-2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 4v16m8-8H4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    "Create New"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative backdrop-blur-xl bg-background/95 border border-border/90 rounded-2xl lg:rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative border-b border-border/70 bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: "hover:bg-transparent border-border/70",
                                            children: columns.map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "text-foreground/90 font-semibold text-sm py-4 px-6 first:ps-8 last:pe-8",
                                                    children: col.label
                                                }, i, false, {
                                                    fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$TableBodyRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        isLoading: isLoading,
                                        error: error,
                                        refetch: refetch,
                                        rows: rows,
                                        columns: columns,
                                        enableActions: enableActions,
                                        editHook: editHook,
                                        deleteHook: deleteHook,
                                        onEdit: openEditModal,
                                        onDelete: setItemToDelete
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$DeleteModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                item: itemToDelete,
                onClose: ()=>setItemToDelete(null),
                onConfirm: async ()=>{
                    if (!itemToDelete || !deleteFn) return;
                    try {
                        var _deleteFn_unwrap, _deleteFn;
                        await ((_deleteFn_unwrap = (_deleteFn = deleteFn(itemToDelete._id)).unwrap) === null || _deleteFn_unwrap === void 0 ? void 0 : _deleteFn_unwrap.call(_deleteFn));
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Deleted successfully');
                        setItemToDelete(null);
                    } catch (e) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete');
                    }
                },
                isLoading: isDeleting
            }, void 0, false, {
                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$FormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreating,
                onClose: closeFormModal,
                title: "Create Item",
                description: "Fill in the fields to create an item",
                submitLabel: "Create",
                fields: createFields,
                submitFn: (data)=>{
                    var _createFn_unwrap, _createFn;
                    return (_createFn_unwrap = (_createFn = createFn({
                        ...data,
                        universityId: '6823509b467cae38bbf7d69f'
                    })).unwrap) === null || _createFn_unwrap === void 0 ? void 0 : _createFn_unwrap.call(_createFn);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$FormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!itemToEdit,
                onClose: closeFormModal,
                title: "Edit Item",
                description: "Update the fields and click save to apply changes.",
                submitLabel: "Save",
                initialData: editFormData,
                fields: editableFields,
                submitFn: (data)=>{
                    var _editFn_unwrap, _editFn;
                    return (_editFn_unwrap = (_editFn = editFn({
                        _id: itemToEdit._id,
                        ...data
                    })).unwrap) === null || _editFn_unwrap === void 0 ? void 0 : _editFn_unwrap.call(_editFn);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/admin/PaginatedTable.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/PaginatedTable.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(PaginatedTable, "w4tpqpzZeHoS8TIoSRnwDS8pVoU=");
_c = PaginatedTable;
var _c;
__turbopack_context__.k.register(_c, "PaginatedTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": ()=>Select,
    "SelectContent": ()=>SelectContent,
    "SelectGroup": ()=>SelectGroup,
    "SelectItem": ()=>SelectItem,
    "SelectLabel": ()=>SelectLabel,
    "SelectScrollDownButton": ()=>SelectScrollDownButton,
    "SelectScrollUpButton": ()=>SelectScrollUpButton,
    "SelectSeparator": ()=>SelectSeparator,
    "SelectTrigger": ()=>SelectTrigger,
    "SelectValue": ()=>SelectValue
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger(param) {
    let { className, size = "default", children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent(param) {
    let { className, children, position = "popper", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/dashboard/CustomSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CustomSelect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
;
;
function CustomSelect(param) {
    let { options, placeholder, valueChangeAction, value } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        onValueChange: valueChangeAction,
        value: String(value),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "w-[65px] inline-flex mx-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: String(placeholder)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/CustomSelect.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/CustomSelect.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: options.map((option)=>{
                    var _option_label;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: String(option.value),
                        children: (_option_label = option.label) !== null && _option_label !== void 0 ? _option_label : option.value
                    }, option.value, false, {
                        fileName: "[project]/src/components/dashboard/CustomSelect.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/CustomSelect.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/CustomSelect.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = CustomSelect;
var _c;
__turbopack_context__.k.register(_c, "CustomSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/tables/PaginatedControls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PaginationControls
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$CustomSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/CustomSelect.tsx [app-client] (ecmascript)");
;
;
;
;
function PaginationControls(param) {
    let { page, totalPages, setPage, className, limit, setLimit, limitOptions = [
        5,
        10,
        15,
        20,
        30,
        50,
        100
    ], showLimitControls = false, showMoreLessControls = false, limitStep = 5 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-center space-y-6 flex justify-between items-center flex-wrap", className),
        children: [
            showLimitControls && limit !== undefined && setLimit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "",
                children: [
                    "Show",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$CustomSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        options: limitOptions.map((value)=>({
                                value
                            })),
                        valueChangeAction: (value)=>setLimit(Number(value)),
                        value: limit.toString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    "Items"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            showMoreLessControls && limit !== undefined && setLimit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "default",
                        size: "sm",
                        onClick: ()=>setLimit(limit + limitStep),
                        children: "Show more"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    limit > limitStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "default",
                        size: "sm",
                        onClick: ()=>setLimit(limit - limitStep),
                        children: "Show less"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            totalPages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        disabled: page <= 1,
                        onClick: ()=>setPage(page - 1),
                        className: "h-9 px-3 bg-background/50 hover:bg-background/80 border-border/50 rounded-lg transition-all duration-200 disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 me-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-1",
                        children: Array.from({
                            length: Math.min(5, totalPages)
                        }, (_, i)=>{
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (page <= 3) {
                                pageNum = i + 1;
                            } else if (page >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = page - 2 + i;
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: page === pageNum ? "default" : "ghost",
                                size: "sm",
                                onClick: ()=>setPage(pageNum),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-9 p-0 rounded-lg transition-all duration-200", page === pageNum ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted/50"),
                                children: pageNum
                            }, pageNum, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        disabled: page >= totalPages,
                        onClick: ()=>setPage(page + 1),
                        className: "h-9 px-3 bg-background/50 hover:bg-background/80 border-border/50 rounded-lg transition-all duration-200 disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 ms-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tables/PaginatedControls.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tables/PaginatedControls.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = PaginationControls;
var _c;
__turbopack_context__.k.register(_c, "PaginationControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/superAdminTableData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "adminAdminCreateFields": ()=>adminAdminCreateFields,
    "adminAdminEditFields": ()=>adminAdminEditFields,
    "adminAdminsTableData": ()=>adminAdminsTableData
});
const adminAdminsTableData = [
    {
        label: 'Name',
        accessor: 'name'
    },
    {
        label: 'Role',
        accessor: 'role'
    },
    {
        label: 'Admin ID',
        accessor: 'id'
    },
    {
        label: 'Created At',
        accessor: (row)=>new Date(row.createdAt).toLocaleString()
    }
];
const adminAdminCreateFields = [
    {
        label: 'Name',
        key: 'name'
    },
    {
        label: 'Password',
        key: 'password'
    },
    {
        label: 'University ID',
        key: 'universityId'
    },
    {
        label: 'College ID',
        key: 'collegeId'
    }
];
const adminAdminEditFields = [
    {
        label: 'Name',
        key: 'name'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(user)/super-admin/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AdminDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/studentApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$PaginatedTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/PaginatedTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$PaginatedControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tables/PaginatedControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/adminApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$superAdminTableData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/superAdminTableData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AdminDashboard() {
    var _adminsQueryResult_data_pagination, _adminsQueryResult_data;
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const adminsQueryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPageOfAdminsQuery"])({
        page,
        limit
    });
    const totalPages = (adminsQueryResult === null || adminsQueryResult === void 0 ? void 0 : (_adminsQueryResult_data = adminsQueryResult.data) === null || _adminsQueryResult_data === void 0 ? void 0 : (_adminsQueryResult_data_pagination = _adminsQueryResult_data.pagination) === null || _adminsQueryResult_data_pagination === void 0 ? void 0 : _adminsQueryResult_data_pagination.totalPages) || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-4 mt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$PaginatedTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginatedTable"], {
                    queryResult: adminsQueryResult,
                    dataKey: "admins",
                    columns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$superAdminTableData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminAdminsTableData"],
                    className: "mx-4",
                    enableActions: true,
                    deleteHook: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteAdminMutation"],
                    editHook: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateAdminMutation"],
                    editableFields: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$superAdminTableData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminAdminEditFields"],
                    createHook: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdminMutation"],
                    createFields: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$superAdminTableData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminAdminCreateFields"]
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/super-admin/[id]/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tables$2f$PaginatedControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    page: page,
                    totalPages: totalPages,
                    setPage: setPage,
                    limit: limit,
                    setLimit: setLimit,
                    showLimitControls: true,
                    showMoreLessControls: true,
                    className: "mx-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/super-admin/[id]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user)/super-admin/[id]/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(AdminDashboard, "FqIV5UH48Xq1izPmenSx7T2VcgM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPageOfAdminsQuery"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL3RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInRhYmxlXCI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgZGF0YS1zbG90PVwidGFibGUtY29udGFpbmVyXCJcclxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCJcclxuICAgID5cclxuICAgICAgPHRhYmxlXHJcbiAgICAgICAgZGF0YS1zbG90PVwidGFibGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXCJ3LWZ1bGwgdGFibGUtZml4ZWQgY2FwdGlvbi1ib3R0b20gdGV4dC1zbVwiLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGFibGVIZWFkZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidGhlYWRcIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHRoZWFkXHJcbiAgICAgIGRhdGEtc2xvdD1cInRhYmxlLWhlYWRlclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJbJl90cl06Ym9yZGVyLWJcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhYmxlQm9keSh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJ0Ym9keVwiPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dGJvZHlcclxuICAgICAgZGF0YS1zbG90PVwidGFibGUtYm9keVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJbJl90cjpsYXN0LWNoaWxkXTpib3JkZXItMFwiLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGFibGVGb290ZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidGZvb3RcIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHRmb290XHJcbiAgICAgIGRhdGEtc2xvdD1cInRhYmxlLWZvb3RlclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJiZy1tdXRlZC81MCBib3JkZXItdCBmb250LW1lZGl1bSBbJj50cl06bGFzdDpib3JkZXItYi0wXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUYWJsZVJvdyh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJ0clwiPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHJcclxuICAgICAgZGF0YS1zbG90PVwidGFibGUtcm93XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImhvdmVyOmJnLW11dGVkLzUwIGRhdGEtW3N0YXRlPXNlbGVjdGVkXTpiZy1tdXRlZCBib3JkZXItYiB0cmFuc2l0aW9uLWNvbG9yc1wiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGFibGVIZWFkKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInRoXCI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0aFxyXG4gICAgICBkYXRhLXNsb3Q9XCJ0YWJsZS1oZWFkXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInRleHQtZm9yZWdyb3VuZCBoLTEwIHB4LTIgdGV4dC1sZWZ0IGFsaWduLW1pZGRsZSBmb250LW1lZGl1bSBbJjpoYXMoW3JvbGU9Y2hlY2tib3hdKV06cHItMCBbJj5bcm9sZT1jaGVja2JveF1dOnRyYW5zbGF0ZS15LVsycHhdXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUYWJsZUNlbGwoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidGRcIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHRkXHJcbiAgICAgIGRhdGEtc2xvdD1cInRhYmxlLWNlbGxcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwicC0yIHRydW5jYXRlIGFsaWduLW1pZGRsZSBbJjpoYXMoW3JvbGU9Y2hlY2tib3hdKV06cHItMCBbJj5bcm9sZT1jaGVja2JveF1dOnRyYW5zbGF0ZS15LVsycHhdXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUYWJsZUNhcHRpb24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImNhcHRpb25cIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGNhcHRpb25cclxuICAgICAgZGF0YS1zbG90PVwidGFibGUtY2FwdGlvblwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtNCB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFRhYmxlLFxyXG4gIFRhYmxlSGVhZGVyLFxyXG4gIFRhYmxlQm9keSxcclxuICBUYWJsZUZvb3RlcixcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlQ2FwdGlvbixcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTtBQUpBOzs7QUFNQSxTQUFTLE1BQU0sS0FBc0Q7UUFBdEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFzQyxHQUF0RDtJQUNiLHFCQUNFLDZMQUFDO1FBQ0MsYUFBVTtRQUNWLFdBQVU7a0JBRVYsY0FBQSw2TEFBQztZQUNDLGFBQVU7WUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLDZDQUE2QztZQUMxRCxHQUFHLEtBQUs7Ozs7Ozs7Ozs7O0FBSWpCO0tBYlM7QUFlVCxTQUFTLFlBQVksS0FBc0Q7UUFBdEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFzQyxHQUF0RDtJQUNuQixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLG1CQUFtQjtRQUNoQyxHQUFHLEtBQUs7Ozs7OztBQUdmO01BUlM7QUFVVCxTQUFTLFVBQVUsS0FBc0Q7UUFBdEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFzQyxHQUF0RDtJQUNqQixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLDhCQUE4QjtRQUMzQyxHQUFHLEtBQUs7Ozs7OztBQUdmO01BUlM7QUFVVCxTQUFTLFlBQVksS0FBc0Q7UUFBdEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFzQyxHQUF0RDtJQUNuQixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDJEQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQVhTO0FBYVQsU0FBUyxTQUFTLEtBQW1EO1FBQW5ELEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBbUMsR0FBbkQ7SUFDaEIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViwrRUFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFYUztBQWFULFNBQVMsVUFBVSxLQUFtRDtRQUFuRCxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQW1DLEdBQW5EO0lBQ2pCLHFCQUNFLDZMQUFDO1FBQ0MsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysb0lBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmO01BWFM7QUFhVCxTQUFTLFVBQVUsS0FBbUQ7UUFBbkQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFtQyxHQUFuRDtJQUNqQixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGlHQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQVhTO0FBYVQsU0FBUyxhQUFhLEtBR1k7UUFIWixFQUNwQixTQUFTLEVBQ1QsR0FBRyxPQUM2QixHQUhaO0lBSXBCLHFCQUNFLDZMQUFDO1FBQ0MsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsc0NBQXNDO1FBQ25ELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFYUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTUzLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgQWxlcnREaWFsb2dQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2dcIlxyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5pbXBvcnQgeyBidXR0b25WYXJpYW50cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0RGlhbG9nKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuUm9vdD4pIHtcclxuICByZXR1cm4gPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwiYWxlcnQtZGlhbG9nXCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBBbGVydERpYWxvZ1RyaWdnZXIoe1xyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5UcmlnZ2VyPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnREaWFsb2dQcmltaXRpdmUuVHJpZ2dlciBkYXRhLXNsb3Q9XCJhbGVydC1kaWFsb2ctdHJpZ2dlclwiIHsuLi5wcm9wc30gLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFsZXJ0RGlhbG9nUG9ydGFsKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuUG9ydGFsPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnREaWFsb2dQcmltaXRpdmUuUG9ydGFsIGRhdGEtc2xvdD1cImFsZXJ0LWRpYWxvZy1wb3J0YWxcIiB7Li4ucHJvcHN9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBbGVydERpYWxvZ092ZXJsYXkoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuT3ZlcmxheT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXlcclxuICAgICAgZGF0YS1zbG90PVwiYWxlcnQtZGlhbG9nLW92ZXJsYXlcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZml4ZWQgaW5zZXQtMCB6LTUwIGJnLWJsYWNrLzUwXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBbGVydERpYWxvZ0NvbnRlbnQoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0RGlhbG9nUG9ydGFsPlxyXG4gICAgICA8QWxlcnREaWFsb2dPdmVybGF5IC8+XHJcbiAgICAgIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50XHJcbiAgICAgICAgZGF0YS1zbG90PVwiYWxlcnQtZGlhbG9nLWNvbnRlbnRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcImJnLWJhY2tncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGZpeGVkIHRvcC1bNTAlXSBsZWZ0LVs1MCVdIHotNTAgZ3JpZCB3LWZ1bGwgbWF4LXctW2NhbGMoMTAwJS0ycmVtKV0gdHJhbnNsYXRlLXgtWy01MCVdIHRyYW5zbGF0ZS15LVstNTAlXSBnYXAtNCByb3VuZGVkLWxnIGJvcmRlciBwLTYgc2hhZG93LWxnIGR1cmF0aW9uLTIwMCBzbTptYXgtdy1sZ1wiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0FsZXJ0RGlhbG9nUG9ydGFsPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQWxlcnREaWFsb2dIZWFkZXIoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGRhdGEtc2xvdD1cImFsZXJ0LWRpYWxvZy1oZWFkZXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBnYXAtMiB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFsZXJ0RGlhbG9nRm9vdGVyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBkYXRhLXNsb3Q9XCJhbGVydC1kaWFsb2ctZm9vdGVyXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZsZXggZmxleC1jb2wtcmV2ZXJzZSBnYXAtMiBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWVuZFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQWxlcnREaWFsb2dUaXRsZSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5UaXRsZT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLlRpdGxlXHJcbiAgICAgIGRhdGEtc2xvdD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb24+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvblxyXG4gICAgICBkYXRhLXNsb3Q9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc21cIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFsZXJ0RGlhbG9nQWN0aW9uKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkFjdGlvbj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkFjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKCksIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBbGVydERpYWxvZ0NhbmNlbCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWw+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWxcclxuICAgICAgY2xhc3NOYW1lPXtjbihidXR0b25WYXJpYW50cyh7IHZhcmlhbnQ6IFwib3V0bGluZVwiIH0pLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBBbGVydERpYWxvZyxcclxuICBBbGVydERpYWxvZ1BvcnRhbCxcclxuICBBbGVydERpYWxvZ092ZXJsYXksXHJcbiAgQWxlcnREaWFsb2dUcmlnZ2VyLFxyXG4gIEFsZXJ0RGlhbG9nQ29udGVudCxcclxuICBBbGVydERpYWxvZ0hlYWRlcixcclxuICBBbGVydERpYWxvZ0Zvb3RlcixcclxuICBBbGVydERpYWxvZ1RpdGxlLFxyXG4gIEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24sXHJcbiAgQWxlcnREaWFsb2dBY3Rpb24sXHJcbiAgQWxlcnREaWFsb2dDYW5jZWwsXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBTkE7Ozs7O0FBUUEsU0FBUyxZQUFZLEtBRW9DO1FBRnBDLEVBQ25CLEdBQUcsT0FDb0QsR0FGcEM7SUFHbkIscUJBQU8sNkxBQUMsOEtBQUEsQ0FBQSxPQUF5QjtRQUFDLGFBQVU7UUFBZ0IsR0FBRyxLQUFLOzs7Ozs7QUFDdEU7S0FKUztBQU1ULFNBQVMsbUJBQW1CLEtBRWdDO1FBRmhDLEVBQzFCLEdBQUcsT0FDdUQsR0FGaEM7SUFHMUIscUJBQ0UsNkxBQUMsOEtBQUEsQ0FBQSxVQUE0QjtRQUFDLGFBQVU7UUFBd0IsR0FBRyxLQUFLOzs7Ozs7QUFFNUU7TUFOUztBQVFULFNBQVMsa0JBQWtCLEtBRWdDO1FBRmhDLEVBQ3pCLEdBQUcsT0FDc0QsR0FGaEM7SUFHekIscUJBQ0UsNkxBQUMsOEtBQUEsQ0FBQSxTQUEyQjtRQUFDLGFBQVU7UUFBdUIsR0FBRyxLQUFLOzs7Ozs7QUFFMUU7TUFOUztBQVFULFNBQVMsbUJBQW1CLEtBR2dDO1FBSGhDLEVBQzFCLFNBQVMsRUFDVCxHQUFHLE9BQ3VELEdBSGhDO0lBSTFCLHFCQUNFLDZMQUFDLDhLQUFBLENBQUEsVUFBNEI7UUFDM0IsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsMEpBQ0E7UUFFRCxHQUFHLEtBQUs7Ozs7OztBQUdmO01BZFM7QUFnQlQsU0FBUyxtQkFBbUIsS0FHZ0M7UUFIaEMsRUFDMUIsU0FBUyxFQUNULEdBQUcsT0FDdUQsR0FIaEM7SUFJMUIscUJBQ0UsNkxBQUM7OzBCQUNDLDZMQUFDOzs7OzswQkFDRCw2TEFBQyw4S0FBQSxDQUFBLFVBQTRCO2dCQUMzQixhQUFVO2dCQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1YsK1dBQ0E7Z0JBRUQsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7QUFJakI7TUFqQlM7QUFtQlQsU0FBUyxrQkFBa0IsS0FHRztRQUhILEVBQ3pCLFNBQVMsRUFDVCxHQUFHLE9BQ3lCLEdBSEg7SUFJekIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxnREFBZ0Q7UUFDN0QsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQVhTO0FBYVQsU0FBUyxrQkFBa0IsS0FHRztRQUhILEVBQ3pCLFNBQVMsRUFDVCxHQUFHLE9BQ3lCLEdBSEg7SUFJekIscUJBQ0UsNkxBQUM7UUFDQyxhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViwwREFDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFkUztBQWdCVCxTQUFTLGlCQUFpQixLQUdnQztRQUhoQyxFQUN4QixTQUFTLEVBQ1QsR0FBRyxPQUNxRCxHQUhoQztJQUl4QixxQkFDRSw2TEFBQyw4S0FBQSxDQUFBLFFBQTBCO1FBQ3pCLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLHlCQUF5QjtRQUN0QyxHQUFHLEtBQUs7Ozs7OztBQUdmO01BWFM7QUFhVCxTQUFTLHVCQUF1QixLQUdnQztRQUhoQyxFQUM5QixTQUFTLEVBQ1QsR0FBRyxPQUMyRCxHQUhoQztJQUk5QixxQkFDRSw2TEFBQyw4S0FBQSxDQUFBLGNBQWdDO1FBQy9CLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLGlDQUFpQztRQUM5QyxHQUFHLEtBQUs7Ozs7OztBQUdmO01BWFM7QUFhVCxTQUFTLGtCQUFrQixLQUdnQztRQUhoQyxFQUN6QixTQUFTLEVBQ1QsR0FBRyxPQUNzRCxHQUhoQztJQUl6QixxQkFDRSw2TEFBQyw4S0FBQSxDQUFBLFNBQTJCO1FBQzFCLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsQ0FBQSxHQUFBLHFJQUFBLENBQUEsaUJBQWMsQUFBRCxLQUFLO1FBQy9CLEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFWUztBQVlULFNBQVMsa0JBQWtCLEtBR2dDO1FBSGhDLEVBQ3pCLFNBQVMsRUFDVCxHQUFHLE9BQ3NELEdBSGhDO0lBSXpCLHFCQUNFLDZMQUFDLDhLQUFBLENBQUEsU0FBMkI7UUFDMUIsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxDQUFBLEdBQUEscUlBQUEsQ0FBQSxpQkFBYyxBQUFELEVBQUU7WUFBRSxTQUFTO1FBQVUsSUFBSTtRQUNyRCxHQUFHLEtBQUs7Ozs7OztBQUdmO09BVlMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDM1MCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3RhYmxlcy9EZWxldGVNb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBbGVydERpYWxvZyxcclxuICBBbGVydERpYWxvZ0FjdGlvbixcclxuICBBbGVydERpYWxvZ0NhbmNlbCxcclxuICBBbGVydERpYWxvZ0NvbnRlbnQsXHJcbiAgQWxlcnREaWFsb2dEZXNjcmlwdGlvbixcclxuICBBbGVydERpYWxvZ0Zvb3RlcixcclxuICBBbGVydERpYWxvZ0hlYWRlcixcclxuICBBbGVydERpYWxvZ1RpdGxlLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9hbGVydC1kaWFsb2cnO1xyXG5cclxuaW50ZXJmYWNlIERlbGV0ZU1vZGFsUHJvcHMge1xyXG4gIGl0ZW06IGFueTtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZU1vZGFsKHtcclxuICBpdGVtLFxyXG4gIG9uQ2xvc2UsXHJcbiAgb25Db25maXJtLFxyXG4gIGlzTG9hZGluZyxcclxufTogRGVsZXRlTW9kYWxQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnREaWFsb2cgb3Blbj17ISFpdGVtfSBvbk9wZW5DaGFuZ2U9e29uQ2xvc2V9PlxyXG4gICAgICA8QWxlcnREaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cImJhY2tkcm9wLWJsdXIteGwgYmctYmFja2dyb3VuZC85NSBib3JkZXIgYm9yZGVyLWJvcmRlci8zMCB0ZXh0LWZvcmVncm91bmQgc2hhZG93LTJ4bCBzaGFkb3ctZGVzdHJ1Y3RpdmUvMTAgc206bWF4LXctbWQgcm91bmRlZC0yeGwgcC02XCI+XHJcbiAgICAgICAgey8qIERlY29yYXRpdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1kZXN0cnVjdGl2ZS81IHZpYS10cmFuc3BhcmVudCB0by1vcmFuZ2UtNTAwLzUgcm91bmRlZC0yeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEFsZXJ0RGlhbG9nSGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLWRlc3RydWN0aXZlLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZGVzdHJ1Y3RpdmVcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTIuNUwxMy43MzIgNGMtLjc3LS44MzMtMS45NjQtLjgzMy0yLjczMiAwTDMuNzMyIDE2LjVjLS43Ny44MzMuMTkyIDIuNSAxLjczMiAyLjV6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+Q29uZmlybSBEZWxldGlvbjwvQWxlcnREaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxBbGVydERpYWxvZ0Rlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICBUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRleycgJ31cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1kZXN0cnVjdGl2ZSBiZy1kZXN0cnVjdGl2ZS8xMCBweC0yIHB5LTEgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtPy5uYW1lID8/ICd0aGlzIGl0ZW0nfVxyXG4gICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgYW5kIGNhbm5vdCBiZSB1bmRvbmUuIFRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZS5cclxuICAgICAgICAgIDwvQWxlcnREaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L0FsZXJ0RGlhbG9nSGVhZGVyPlxyXG4gICAgICAgIDxBbGVydERpYWxvZ0Zvb3RlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHNwYWNlLXgtMyBwdC02XCI+XHJcbiAgICAgICAgICA8QWxlcnREaWFsb2dDYW5jZWxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLW11dGVkLzUwIGhvdmVyOmJnLW11dGVkLzgwIGJvcmRlci1ib3JkZXIvMzAgcm91bmRlZC14bCBweS0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9BbGVydERpYWxvZ0NhbmNlbD5cclxuICAgICAgICAgIDxBbGVydERpYWxvZ0FjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmctZ3JhZGllbnQtdG8tciBmcm9tLWRlc3RydWN0aXZlIHRvLXJlZC02MDAgaG92ZXI6ZnJvbS1kZXN0cnVjdGl2ZS85MCBob3Zlcjp0by1yZWQtNzAwIHRleHQtd2hpdGUgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCByb3VuZGVkLXhsIHB5LTMgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgYW5pbWF0ZS1zcGluXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk00IDR2NWguNTgybTE1LjM1NiAyQTguMDAxIDguMDAxIDAgMDA0LjU4MiA5bTAgMEg5bTExIDExdi01aC0uNTgxbTAgMGE4LjAwMyA4LjAwMyAwIDAxLTE1LjM1Ny0ybTE1LjM1NyAySDE1XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTkgN2wtLjg2NyAxMi4xNDJBMiAyIDAgMDExNi4xMzggMjFINy44NjJhMiAyIDAgMDEtMS45OTUtMS44NThMNSA3bTUgNHY2bTQtNnY2bTEtMTBWNGExIDEgMCAwMC0xLTFoLTRhMSAxIDAgMDAtMSAxdjNNNCA3aDE2XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9BbGVydERpYWxvZ0FjdGlvbj5cclxuICAgICAgICA8L0FsZXJ0RGlhbG9nRm9vdGVyPlxyXG4gICAgICA8L0FsZXJ0RGlhbG9nQ29udGVudD5cclxuICAgIDwvQWxlcnREaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUFrQmUsU0FBUyxZQUFZLEtBS2pCO1FBTGlCLEVBQ2xDLElBQUksRUFDSixPQUFPLEVBQ1AsU0FBUyxFQUNULFNBQVMsRUFDUSxHQUxpQjtRQTBCckI7SUFwQmIscUJBQ0UsNkxBQUMsOElBQUEsQ0FBQSxjQUFXO1FBQUMsTUFBTSxDQUFDLENBQUM7UUFBTSxjQUFjO2tCQUN2QyxjQUFBLDZMQUFDLDhJQUFBLENBQUEscUJBQWtCO1lBQUMsV0FBVTs7OEJBRTVCLDZMQUFDO29CQUFJLFdBQVU7Ozs7Ozs4QkFFZiw2TEFBQyw4SUFBQSxDQUFBLG9CQUFpQjtvQkFBQyxXQUFVOztzQ0FDM0IsNkxBQUM7NEJBQUksV0FBVTs7OENBQ2IsNkxBQUM7b0NBQUksV0FBVTs4Q0FDYixjQUFBLDZMQUFDO3dDQUFJLFdBQVU7d0NBQTJCLE1BQUs7d0NBQU8sUUFBTzt3Q0FBZSxTQUFRO2tEQUNsRixjQUFBLDZMQUFDOzRDQUFLLGVBQWM7NENBQVEsZ0JBQWU7NENBQVEsYUFBYTs0Q0FBRyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUd6RSw2TEFBQzs4Q0FDQyxjQUFBLDZMQUFDLDhJQUFBLENBQUEsbUJBQWdCO3dDQUFDLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHeEQsNkxBQUMsOElBQUEsQ0FBQSx5QkFBc0I7NEJBQUMsV0FBVTs7Z0NBQWdEO2dDQUNuRDs4Q0FDN0IsNkxBQUM7b0NBQUssV0FBVTs4Q0FDYixDQUFBLGFBQUEsaUJBQUEsMkJBQUEsS0FBTSxJQUFJLGNBQVYsd0JBQUEsYUFBYzs7Ozs7O2dDQUNUO2dDQUFJOzs7Ozs7Ozs7Ozs7OzhCQUloQiw2TEFBQyw4SUFBQSxDQUFBLG9CQUFpQjtvQkFBQyxXQUFVOztzQ0FDM0IsNkxBQUMsOElBQUEsQ0FBQSxvQkFBaUI7NEJBQ2hCLFdBQVU7NEJBQ1YsVUFBVTtzQ0FDWDs7Ozs7O3NDQUdELDZMQUFDLDhJQUFBLENBQUEsb0JBQWlCOzRCQUNoQixXQUFVOzRCQUNWLFNBQVM7NEJBQ1QsVUFBVTtzQ0FFVCwwQkFDQyw2TEFBQztnQ0FBSSxXQUFVOztrREFDYiw2TEFBQzt3Q0FBSSxXQUFVO3dDQUF1QixNQUFLO3dDQUFPLFFBQU87d0NBQWUsU0FBUTtrREFDOUUsY0FBQSw2TEFBQzs0Q0FBSyxlQUFjOzRDQUFRLGdCQUFlOzRDQUFRLGFBQWE7NENBQUcsR0FBRTs7Ozs7Ozs7Ozs7a0RBRXZFLDZMQUFDO2tEQUFLOzs7Ozs7Ozs7OztxREFHUiw2TEFBQztnQ0FBSSxXQUFVOztrREFDYiw2TEFBQzt3Q0FBSSxXQUFVO3dDQUFVLE1BQUs7d0NBQU8sUUFBTzt3Q0FBZSxTQUFRO2tEQUNqRSxjQUFBLDZMQUFDOzRDQUFLLGVBQWM7NENBQVEsZ0JBQWU7NENBQVEsYUFBYTs0Q0FBRyxHQUFFOzs7Ozs7Ozs7OztrREFFdkUsNkxBQUM7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEI7S0EvRHdCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1NzUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9Qb3B1cEFjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgRHJvcGRvd25NZW51LFxyXG4gICAgRHJvcGRvd25NZW51Q29udGVudCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IHsgTW9yZUhvcml6b250YWwsIEVkaXQsIFRyYXNoMiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUG9wdXBBY3Rpb25zUHJvcHM8VD4ge1xyXG4gICAgaXRlbTogVDtcclxuICAgIGVuYWJsZUVkaXQ/OiBib29sZWFuO1xyXG4gICAgZW5hYmxlRGVsZXRlPzogYm9vbGVhbjtcclxuICAgIG9uRWRpdD86IChpdGVtOiBUKSA9PiB2b2lkO1xyXG4gICAgb25EZWxldGU/OiAoaXRlbTogVCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvcHVwQWN0aW9uczxUPih7XHJcbiAgICBpdGVtLFxyXG4gICAgZW5hYmxlRWRpdCA9IGZhbHNlLFxyXG4gICAgZW5hYmxlRGVsZXRlID0gZmFsc2UsXHJcbiAgICBvbkVkaXQsXHJcbiAgICBvbkRlbGV0ZSxcclxufTogUG9wdXBBY3Rpb25zUHJvcHM8VD4pIHtcclxuICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG9uRWRpdCkge1xyXG4gICAgICAgICAgICBvbkVkaXQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG9uRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIG9uRGVsZXRlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRG9uJ3QgcmVuZGVyIGlmIG5vIGFjdGlvbnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgaWYgKCFlbmFibGVFZGl0ICYmICFlbmFibGVEZWxldGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggcC0wIGhvdmVyOmJnLW11dGVkLzUwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3JlSG9yaXpvbnRhbCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBhY3Rpb25zIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudFxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00MCBiYWNrZHJvcC1ibHVyLXhsIGJnLWJhY2tncm91bmQvOTUgYm9yZGVyIGJvcmRlci1ib3JkZXIvMzAgc2hhZG93LTJ4bCByb3VuZGVkLXhsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2VuYWJsZUVkaXQgJiYgb25FZGl0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgcHgtMyBweS0yIGhvdmVyOmJnLXByaW1hcnkvMTAgaG92ZXI6dGV4dC1wcmltYXJ5IHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtlbmFibGVEZWxldGUgJiYgb25EZWxldGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHB4LTMgcHktMiBob3ZlcjpiZy1kZXN0cnVjdGl2ZS8xMCBob3Zlcjp0ZXh0LWRlc3RydWN0aXZlIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFUQTs7Ozs7QUFtQk8sU0FBUyxhQUFnQixLQU1UO1FBTlMsRUFDNUIsSUFBSSxFQUNKLGFBQWEsS0FBSyxFQUNsQixlQUFlLEtBQUssRUFDcEIsTUFBTSxFQUNOLFFBQVEsRUFDVyxHQU5TO0lBTzVCLE1BQU0sYUFBYTtRQUNmLElBQUksUUFBUTtZQUNSLE9BQU87UUFDWDtJQUNKO0lBRUEsTUFBTSxlQUFlO1FBQ2pCLElBQUksVUFBVTtZQUNWLFNBQVM7UUFDYjtJQUNKO0lBRUEsMkNBQTJDO0lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYztRQUM5QixPQUFPO0lBQ1g7SUFFQSxxQkFDSSw2TEFBQywrSUFBQSxDQUFBLGVBQVk7OzBCQUNULDZMQUFDLCtJQUFBLENBQUEsc0JBQW1CO2dCQUFDLE9BQU87MEJBQ3hCLGNBQUEsNkxBQUMscUlBQUEsQ0FBQSxTQUFNO29CQUNILFNBQVE7b0JBQ1IsTUFBSztvQkFDTCxXQUFVOztzQ0FFViw2TEFBQyxtTkFBQSxDQUFBLGlCQUFjOzRCQUFDLFdBQVU7Ozs7OztzQ0FDMUIsNkxBQUM7NEJBQUssV0FBVTtzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xDLDZMQUFDLCtJQUFBLENBQUEsc0JBQW1CO2dCQUNoQixPQUFNO2dCQUNOLFdBQVU7O29CQUVULGNBQWMsd0JBQ1gsNkxBQUMsK0lBQUEsQ0FBQSxtQkFBZ0I7d0JBQ2IsU0FBUzt3QkFDVCxXQUFVOzswQ0FFViw2TEFBQyw4TUFBQSxDQUFBLE9BQUk7Z0NBQUMsV0FBVTs7Ozs7OzBDQUNoQiw2TEFBQzswQ0FBSzs7Ozs7Ozs7Ozs7O29CQUdiLGdCQUFnQiwwQkFDYiw2TEFBQywrSUFBQSxDQUFBLG1CQUFnQjt3QkFDYixTQUFTO3dCQUNULFdBQVU7OzBDQUVWLDZMQUFDLDZNQUFBLENBQUEsU0FBTTtnQ0FBQyxXQUFVOzs7Ozs7MENBQ2xCLDZMQUFDOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUI7S0E3RGdCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3MTcsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy90YWJsZXMvVGFibGVCb2R5UmVuZGVyZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdyB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90YWJsZSc7XHJcbmltcG9ydCB7IExvYWRlcjIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBQb3B1cEFjdGlvbnMgfSBmcm9tICcuLi9hZG1pbi9Qb3B1cEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJ0AvaG9va3MvdXNlTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBDb2x1bW48VD4ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYWNjZXNzb3I6IGtleW9mIFQgfCAoKHJvdzogVCkgPT4gUmVhY3QuUmVhY3ROb2RlKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRhYmxlQm9keVJlbmRlcmVyUHJvcHM8VD4ge1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBlcnJvcjogYW55O1xyXG4gIHJlZmV0Y2g/OiAoKSA9PiB2b2lkO1xyXG4gIHJvd3M6IFRbXTtcclxuICBjb2x1bW5zOiBDb2x1bW48VD5bXTtcclxuICBlbmFibGVBY3Rpb25zPzogYm9vbGVhbjtcclxuICBlZGl0SG9vaz86IGFueTtcclxuICBkZWxldGVIb29rPzogYW55O1xyXG4gIG9uRWRpdDogKHJvdzogVCkgPT4gdm9pZDtcclxuICBvbkRlbGV0ZTogKHJvdzogVCkgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFibGVCb2R5UmVuZGVyZXI8VD4oe1xyXG4gIGlzTG9hZGluZyxcclxuICBlcnJvcixcclxuICByZWZldGNoLFxyXG4gIHJvd3MsXHJcbiAgY29sdW1ucyxcclxuICBlbmFibGVBY3Rpb25zLFxyXG4gIGVkaXRIb29rLFxyXG4gIGRlbGV0ZUhvb2ssXHJcbiAgb25FZGl0LFxyXG4gIG9uRGVsZXRlLFxyXG59OiBUYWJsZUJvZHlSZW5kZXJlclByb3BzPFQ+KSB7XHJcbiAgY29uc3QgeyBpc1JUTCB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIGJvcmRlciBib3JkZXItYm9yZGVyLzcwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwiaC04IHctOCBhbmltYXRlLXNwaW4gdGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBoLTggdy04IHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItcHJpbWFyeS8yMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kXCI+TG9hZGluZyBkYXRhLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5QbGVhc2Ugd2FpdCB3aGlsZSB3ZSBmZXRjaCB5b3VyIGluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMiBib3JkZXIgYm9yZGVyLWJvcmRlci83MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLWRlc3RydWN0aXZlLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1kZXN0cnVjdGl2ZVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTIgOXYybTAgNGguMDFtLTYuOTM4IDRoMTMuODU2YzEuNTQgMCAyLjUwMi0xLjY2NyAxLjczMi0yLjVMMTMuNzMyIDRjLS43Ny0uODMzLTEuOTY0LS44MzMtMi43MzIgMEwzLjczMiAxNi41Yy0uNzcuODMzLjE5MiAyLjUgMS43MzIgMi41elwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIj5GYWlsZWQgdG8gbG9hZCBkYXRhPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5UaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB5b3VyIGluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlZmV0Y2g/LigpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIGJnLWJhY2tncm91bmQvNTAgaG92ZXI6YmctYmFja2dyb3VuZC84MCBib3JkZXItYm9yZGVyLzUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IG1lLTJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNCA0djVoLjU4Mm0xNS4zNTYgMkE4LjAwMSA4LjAwMSAwIDAwNC41ODIgOW0wIDBIOW0xMSAxMXYtNWgtLjU4MW0wIDBhOC4wMDMgOC4wMDMgMCAwMS0xNS4zNTctMm0xNS4zNTcgMkgxNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMiBib3JkZXIgYm9yZGVyLWJvcmRlci83MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGJnLW11dGVkLzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk0yMCAxM1Y2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnY3bTE2IDB2NWEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTVtMTYgMGgtMi41ODZhMSAxIDAgMDAtLjcwNy4yOTNsLTIuNDE0IDIuNDE0YTEgMSAwIDAxLS43MDcuMjkzaC0zLjE3MmExIDEgMCAwMS0uNzA3LS4yOTNsLTIuNDE0LTIuNDE0QTEgMSAwIDAwNi41ODYgMTNINFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIj5ObyBkYXRhIGZvdW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5UaGVyZSBhcmUgbm8gaXRlbXMgdG8gZGlzcGxheSBhdCB0aGUgbW9tZW50PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVCb2R5PlxyXG4gICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFibGVSb3dcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cCBob3ZlcjpiZy1ncmFkaWVudC10by1yIGhvdmVyOmZyb20tbXV0ZWQvMzAgaG92ZXI6dG8tdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGJvcmRlci1iIGJvcmRlci1ib3JkZXIvNzBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgIGtleT17an1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTQgcHgtNiBmaXJzdDpwcy04IGxhc3Q6cGUtMTIgdGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvOTAgYm9yZGVyLXIgYm9yZGVyLWJvcmRlci8xMDAgbGFzdDpib3JkZXItci0wXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7dHlwZW9mIGNvbC5hY2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gY29sLmFjY2Vzc29yKHJvdylcclxuICAgICAgICAgICAgICAgICAgICA6IChyb3cgYXMgYW55KVtjb2wuYWNjZXNzb3JdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZW5hYmxlQWN0aW9ucyAmJiAoZWRpdEhvb2sgfHwgZGVsZXRlSG9vaykgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0yMDAgei0xMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMID8gXCJsZWZ0LTRcIiA6IFwicmlnaHQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3B1cEFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e3Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUVkaXQ9eyEhZWRpdEhvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmFibGVEZWxldGU9eyEhZGVsZXRlSG9va31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17b25FZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvVGFibGVCb2R5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVGFibGVCb2R5UmVuZGVyZXIpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFvQkEsU0FBUyxrQkFBcUIsS0FXRjtRQVhFLEVBQzVCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixPQUFPLEVBQ1AsYUFBYSxFQUNiLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDa0IsR0FYRTs7SUFZNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUEsR0FBQSw4SEFBQSxDQUFBLGNBQVcsQUFBRDtJQUM1QixJQUFJLFdBQVc7UUFDYixxQkFDRSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7c0JBQ1IsY0FBQSw2TEFBQyxvSUFBQSxDQUFBLFdBQVE7MEJBQ1AsY0FBQSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7b0JBQUMsU0FBUyxRQUFRLE1BQU07b0JBQUUsV0FBVTs4QkFDNUMsY0FBQSw2TEFBQzt3QkFBSSxXQUFVOzswQ0FDYiw2TEFBQztnQ0FBSSxXQUFVOztrREFDYiw2TEFBQyxvTkFBQSxDQUFBLFVBQU87d0NBQUMsV0FBVTs7Ozs7O2tEQUNuQiw2TEFBQzt3Q0FBSSxXQUFVOzs7Ozs7Ozs7Ozs7MENBRWpCLDZMQUFDO2dDQUFJLFdBQVU7O2tEQUNiLDZMQUFDO3dDQUFFLFdBQVU7a0RBQXNDOzs7Ozs7a0RBQ25ELDZMQUFDO3dDQUFFLFdBQVU7a0RBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPM0Q7SUFFQSxJQUFJLE9BQU87UUFDVCxxQkFDRSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7c0JBQ1IsY0FBQSw2TEFBQyxvSUFBQSxDQUFBLFdBQVE7MEJBQ1AsY0FBQSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7b0JBQ1IsU0FBUyxRQUFRLE1BQU07b0JBQ3ZCLFdBQVU7OEJBRVYsY0FBQSw2TEFBQzt3QkFBSSxXQUFVOzswQ0FDYiw2TEFBQztnQ0FBSSxXQUFVOzBDQUNiLGNBQUEsNkxBQUM7b0NBQUksV0FBVTtvQ0FBMkIsTUFBSztvQ0FBTyxRQUFPO29DQUFlLFNBQVE7OENBQ2xGLGNBQUEsNkxBQUM7d0NBQUssZUFBYzt3Q0FBUSxnQkFBZTt3Q0FBUSxhQUFhO3dDQUFHLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3pFLDZMQUFDO2dDQUFJLFdBQVU7O2tEQUNiLDZMQUFDO3dDQUFFLFdBQVU7a0RBQXNDOzs7Ozs7a0RBQ25ELDZMQUFDO3dDQUFFLFdBQVU7a0RBQWdDOzs7Ozs7a0RBQzdDLDZMQUFDLHFJQUFBLENBQUEsU0FBTTt3Q0FDTCxTQUFRO3dDQUNSLE1BQUs7d0NBQ0wsU0FBUyxJQUFNLG9CQUFBLDhCQUFBO3dDQUNmLFdBQVU7OzBEQUVWLDZMQUFDO2dEQUFJLFdBQVU7Z0RBQWUsTUFBSztnREFBTyxRQUFPO2dEQUFlLFNBQVE7MERBQ3RFLGNBQUEsNkxBQUM7b0RBQUssZUFBYztvREFBUSxnQkFBZTtvREFBUSxhQUFhO29EQUFHLEdBQUU7Ozs7Ozs7Ozs7OzRDQUNqRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVN0QjtJQUVBLElBQUksS0FBSyxNQUFNLEtBQUssR0FBRztRQUNyQixxQkFDRSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7c0JBQ1IsY0FBQSw2TEFBQyxvSUFBQSxDQUFBLFdBQVE7MEJBQ1AsY0FBQSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7b0JBQ1IsU0FBUyxRQUFRLE1BQU07b0JBQ3ZCLFdBQVU7OEJBRVYsY0FBQSw2TEFBQzt3QkFBSSxXQUFVOzswQ0FDYiw2TEFBQztnQ0FBSSxXQUFVOzBDQUNiLGNBQUEsNkxBQUM7b0NBQUksV0FBVTtvQ0FBZ0MsTUFBSztvQ0FBTyxRQUFPO29DQUFlLFNBQVE7OENBQ3ZGLGNBQUEsNkxBQUM7d0NBQUssZUFBYzt3Q0FBUSxnQkFBZTt3Q0FBUSxhQUFhO3dDQUFHLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3pFLDZMQUFDO2dDQUFJLFdBQVU7O2tEQUNiLDZMQUFDO3dDQUFFLFdBQVU7a0RBQXNDOzs7Ozs7a0RBQ25ELDZMQUFDO3dDQUFFLFdBQVU7a0RBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPM0Q7SUFFQSxxQkFDRSw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7a0JBQ1AsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLO1lBQ2QscUJBQ0UsNkxBQUMsb0lBQUEsQ0FBQSxXQUFRO2dCQUVQLFdBQVU7MEJBRVQsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLGtCQUNqQiw2TEFBQyxvSUFBQSxDQUFBLFlBQVM7d0JBRVIsV0FBVTs7MENBRVYsNkxBQUM7Z0NBQUksV0FBVTswQ0FDWixPQUFPLElBQUksUUFBUSxLQUFLLGFBQ3JCLElBQUksUUFBUSxDQUFDLE9BQ2IsQUFBQyxHQUFXLENBQUMsSUFBSSxRQUFRLENBQUM7Ozs7Ozs0QkFFL0IsaUJBQWlCLENBQUMsWUFBWSxVQUFVLG1CQUN2Qyw2TEFBQztnQ0FBSSxXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNmLDRHQUNBLFFBQVEsV0FBVzswQ0FFbkIsY0FBQSw2TEFBQyw4SUFBQSxDQUFBLGVBQVk7b0NBQ1gsTUFBTTtvQ0FDTixZQUFZLENBQUMsQ0FBQztvQ0FDZCxjQUFjLENBQUMsQ0FBQztvQ0FDaEIsUUFBUTtvQ0FDUixVQUFVOzs7Ozs7Ozs7Ozs7dUJBbEJYOzs7OztlQUxKOzs7OztRQWdDWDs7Ozs7O0FBR047R0F2SVM7O1FBWVcsOEhBQUEsQ0FBQSxjQUFXOzs7S0FadEI7MkRBeUlNLDZKQUFBLENBQUEsVUFBSyxDQUFDLElBQUksQ0FBQyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTA4OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2RpYWxvZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIERpYWxvZ1ByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiXHJcbmltcG9ydCB7IFhJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5mdW5jdGlvbiBEaWFsb2coe1xyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuUm9vdD4pIHtcclxuICByZXR1cm4gPERpYWxvZ1ByaW1pdGl2ZS5Sb290IGRhdGEtc2xvdD1cImRpYWxvZ1wiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gRGlhbG9nVHJpZ2dlcih7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5UcmlnZ2VyPikge1xyXG4gIHJldHVybiA8RGlhbG9nUHJpbWl0aXZlLlRyaWdnZXIgZGF0YS1zbG90PVwiZGlhbG9nLXRyaWdnZXJcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpYWxvZ1BvcnRhbCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5Qb3J0YWw+KSB7XHJcbiAgcmV0dXJuIDxEaWFsb2dQcmltaXRpdmUuUG9ydGFsIGRhdGEtc2xvdD1cImRpYWxvZy1wb3J0YWxcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpYWxvZ0Nsb3NlKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLkNsb3NlPikge1xyXG4gIHJldHVybiA8RGlhbG9nUHJpbWl0aXZlLkNsb3NlIGRhdGEtc2xvdD1cImRpYWxvZy1jbG9zZVwiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gRGlhbG9nT3ZlcmxheSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuT3ZlcmxheT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZ1ByaW1pdGl2ZS5PdmVybGF5XHJcbiAgICAgIGRhdGEtc2xvdD1cImRpYWxvZy1vdmVybGF5XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGZpeGVkIGluc2V0LTAgei01MCBiZy1ibGFjay81MFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRGlhbG9nQ29udGVudCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNoaWxkcmVuLFxyXG4gIHNob3dDbG9zZUJ1dHRvbiA9IHRydWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PiAmIHtcclxuICBzaG93Q2xvc2VCdXR0b24/OiBib29sZWFuXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZ1BvcnRhbCBkYXRhLXNsb3Q9XCJkaWFsb2ctcG9ydGFsXCI+XHJcbiAgICAgIDxEaWFsb2dPdmVybGF5IC8+XHJcbiAgICAgIDxEaWFsb2dQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cImRpYWxvZy1jb250ZW50XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJiZy1iYWNrZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBmaXhlZCB0b3AtWzUwJV0gbGVmdC1bNTAlXSB6LTUwIGdyaWQgdy1mdWxsIG1heC13LVtjYWxjKDEwMCUtMnJlbSldIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gZ2FwLTQgcm91bmRlZC1sZyBib3JkZXIgcC02IHNoYWRvdy1sZyBkdXJhdGlvbi0yMDAgc206bWF4LXctbGdcIixcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIHtzaG93Q2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPERpYWxvZ1ByaW1pdGl2ZS5DbG9zZVxyXG4gICAgICAgICAgICBkYXRhLXNsb3Q9XCJkaWFsb2ctY2xvc2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyaW5nLW9mZnNldC1iYWNrZ3JvdW5kIGZvY3VzOnJpbmctcmluZyBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQgZGF0YS1bc3RhdGU9b3Blbl06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGFic29sdXRlIHRvcC00IHJpZ2h0LTQgcm91bmRlZC14cyBvcGFjaXR5LTcwIHRyYW5zaXRpb24tb3BhY2l0eSBob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpvdXRsaW5lLWhpZGRlbiBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxYSWNvbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICA8L0RpYWxvZ1ByaW1pdGl2ZS5DbG9zZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0RpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PlxyXG4gICAgPC9EaWFsb2dQb3J0YWw+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEaWFsb2dIZWFkZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgZGF0YS1zbG90PVwiZGlhbG9nLWhlYWRlclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGZsZXgtY29sIGdhcC0yIHRleHQtY2VudGVyIHNtOnRleHQtbGVmdFwiLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRGlhbG9nRm9vdGVyKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGRhdGEtc2xvdD1cImRpYWxvZy1mb290ZXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGdhcC0yIHNtOmZsZXgtcm93IHNtOmp1c3RpZnktZW5kXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEaWFsb2dUaXRsZSh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuVGl0bGU+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dQcmltaXRpdmUuVGl0bGVcclxuICAgICAgZGF0YS1zbG90PVwiZGlhbG9nLXRpdGxlXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtbGcgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpYWxvZ0Rlc2NyaXB0aW9uKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvblxyXG4gICAgICBkYXRhLXNsb3Q9XCJkaWFsb2ctZGVzY3JpcHRpb25cIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc21cIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0Nsb3NlLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nRGVzY3JpcHRpb24sXHJcbiAgRGlhbG9nRm9vdGVyLFxyXG4gIERpYWxvZ0hlYWRlcixcclxuICBEaWFsb2dPdmVybGF5LFxyXG4gIERpYWxvZ1BvcnRhbCxcclxuICBEaWFsb2dUaXRsZSxcclxuICBEaWFsb2dUcmlnZ2VyLFxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBTkE7Ozs7O0FBUUEsU0FBUyxPQUFPLEtBRW9DO1FBRnBDLEVBQ2QsR0FBRyxPQUMrQyxHQUZwQztJQUdkLHFCQUFPLDZMQUFDLHFLQUFBLENBQUEsT0FBb0I7UUFBQyxhQUFVO1FBQVUsR0FBRyxLQUFLOzs7Ozs7QUFDM0Q7S0FKUztBQU1ULFNBQVMsY0FBYyxLQUVnQztRQUZoQyxFQUNyQixHQUFHLE9BQ2tELEdBRmhDO0lBR3JCLHFCQUFPLDZMQUFDLHFLQUFBLENBQUEsVUFBdUI7UUFBQyxhQUFVO1FBQWtCLEdBQUcsS0FBSzs7Ozs7O0FBQ3RFO01BSlM7QUFNVCxTQUFTLGFBQWEsS0FFZ0M7UUFGaEMsRUFDcEIsR0FBRyxPQUNpRCxHQUZoQztJQUdwQixxQkFBTyw2TEFBQyxxS0FBQSxDQUFBLFNBQXNCO1FBQUMsYUFBVTtRQUFpQixHQUFHLEtBQUs7Ozs7OztBQUNwRTtNQUpTO0FBTVQsU0FBUyxZQUFZLEtBRWdDO1FBRmhDLEVBQ25CLEdBQUcsT0FDZ0QsR0FGaEM7SUFHbkIscUJBQU8sNkxBQUMscUtBQUEsQ0FBQSxRQUFxQjtRQUFDLGFBQVU7UUFBZ0IsR0FBRyxLQUFLOzs7Ozs7QUFDbEU7TUFKUztBQU1ULFNBQVMsY0FBYyxLQUdnQztRQUhoQyxFQUNyQixTQUFTLEVBQ1QsR0FBRyxPQUNrRCxHQUhoQztJQUlyQixxQkFDRSw2TEFBQyxxS0FBQSxDQUFBLFVBQXVCO1FBQ3RCLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDBKQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQWRTO0FBZ0JULFNBQVMsY0FBYyxLQU90QjtRQVBzQixFQUNyQixTQUFTLEVBQ1QsUUFBUSxFQUNSLGtCQUFrQixJQUFJLEVBQ3RCLEdBQUcsT0FHSixHQVBzQjtJQVFyQixxQkFDRSw2TEFBQztRQUFhLGFBQVU7OzBCQUN0Qiw2TEFBQzs7Ozs7MEJBQ0QsNkxBQUMscUtBQUEsQ0FBQSxVQUF1QjtnQkFDdEIsYUFBVTtnQkFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLCtXQUNBO2dCQUVELEdBQUcsS0FBSzs7b0JBRVI7b0JBQ0EsaUNBQ0MsNkxBQUMscUtBQUEsQ0FBQSxRQUFxQjt3QkFDcEIsYUFBVTt3QkFDVixXQUFVOzswQ0FFViw2TEFBQyxtTUFBQSxDQUFBLFFBQUs7Ozs7OzBDQUNOLDZMQUFDO2dDQUFLLFdBQVU7MENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QztNQWhDUztBQWtDVCxTQUFTLGFBQWEsS0FBb0Q7UUFBcEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFvQyxHQUFwRDtJQUNwQixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUFFLGdEQUFnRDtRQUM3RCxHQUFHLEtBQUs7Ozs7OztBQUdmO01BUlM7QUFVVCxTQUFTLGFBQWEsS0FBb0Q7UUFBcEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFvQyxHQUFwRDtJQUNwQixxQkFDRSw2TEFBQztRQUNDLGFBQVU7UUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLDBEQUNBO1FBRUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQVhTO0FBYVQsU0FBUyxZQUFZLEtBR2dDO1FBSGhDLEVBQ25CLFNBQVMsRUFDVCxHQUFHLE9BQ2dELEdBSGhDO0lBSW5CLHFCQUNFLDZMQUFDLHFLQUFBLENBQUEsUUFBcUI7UUFDcEIsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsc0NBQXNDO1FBQ25ELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFYUztBQWFULFNBQVMsa0JBQWtCLEtBR2dDO1FBSGhDLEVBQ3pCLFNBQVMsRUFDVCxHQUFHLE9BQ3NELEdBSGhDO0lBSXpCLHFCQUNFLDZMQUFDLHFLQUFBLENBQUEsY0FBMkI7UUFDMUIsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsaUNBQWlDO1FBQzlDLEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFYUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTI5NywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5cclxuZnVuY3Rpb24gSW5wdXQoeyBjbGFzc05hbWUsIHR5cGUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiaW5wdXRcIj4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIGRhdGEtc2xvdD1cImlucHV0XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZpbGU6dGV4dC1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzZWxlY3Rpb246YmctcHJpbWFyeSBzZWxlY3Rpb246dGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBib3JkZXItaW5wdXQgZmxleCBoLTkgdy1mdWxsIG1pbi13LTAgcm91bmRlZC1tZCBib3JkZXIgYmctdHJhbnNwYXJlbnQgcHgtMyBweS0xIHRleHQtYmFzZSBzaGFkb3cteHMgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gb3V0bGluZS1ub25lIGZpbGU6aW5saW5lLWZsZXggZmlsZTpoLTcgZmlsZTpib3JkZXItMCBmaWxlOmJnLXRyYW5zcGFyZW50IGZpbGU6dGV4dC1zbSBmaWxlOmZvbnQtbWVkaXVtIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgbWQ6dGV4dC1zbVwiLFxyXG4gICAgICAgIFwiZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF1cIixcclxuICAgICAgICBcImFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZVwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgSW5wdXQgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOzs7QUFFQSxTQUFTLE1BQU0sS0FBNEQ7UUFBNUQsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBc0MsR0FBNUQ7SUFDYixxQkFDRSw2TEFBQztRQUNDLE1BQU07UUFDTixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixtY0FDQSxpRkFDQSwwR0FDQTtRQUVELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7S0FkUyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTMzMCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL3RhYmxlcy9Gb3JtTW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nRGVzY3JpcHRpb24sXHJcbiAgRGlhbG9nRm9vdGVyLFxyXG4gIERpYWxvZ0hlYWRlcixcclxuICBEaWFsb2dUaXRsZSxcclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvZGlhbG9nJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdzb25uZXInO1xyXG5pbXBvcnQgeyBMb2FkZXIyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuXHJcbmludGVyZmFjZSBGaWVsZCB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIGlucHV0VHlwZT86ICdpbnB1dCcgfCAnc2VsZWN0JztcclxuICBvcHRpb25zPzogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEZvcm1Nb2RhbFByb3BzIHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBzdWJtaXRMYWJlbD86IHN0cmluZztcclxuICBzdWJtaXRGbjogKGRhdGE6IGFueSkgPT4gUHJvbWlzZTxhbnk+IHwgdW5kZWZpbmVkO1xyXG4gIGZpZWxkczogRmllbGRbXTtcclxuICBpbml0aWFsRGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Nb2RhbCh7XHJcbiAgaXNPcGVuLFxyXG4gIG9uQ2xvc2UsXHJcbiAgdGl0bGUgPSAnU3VibWl0IEZvcm0nLFxyXG4gIGRlc2NyaXB0aW9uID0gJ0ZpbGwgaW4gdGhlIGZpZWxkcyBhbmQgc3VibWl0LicsXHJcbiAgc3VibWl0TGFiZWwgPSAnU3VibWl0JyxcclxuICBzdWJtaXRGbixcclxuICBmaWVsZHMsXHJcbiAgaW5pdGlhbERhdGEgPSB7fSxcclxufTogRm9ybU1vZGFsUHJvcHMpIHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIGFueT4+KGluaXRpYWxEYXRhKTtcclxuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgaWYgKGlzT3Blbikge1xyXG4gICAgc2V0Rm9ybURhdGEoaW5pdGlhbERhdGEpO1xyXG4gIH1cclxufSwgW2lzT3Blbl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBba2V5XTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgYXdhaXQgc3VibWl0Rm4oZm9ybURhdGEpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKCdTdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIG9uQ2xvc2UoKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB0b2FzdC5lcnJvcignU3VibWlzc2lvbiBmYWlsZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb3Blbj17aXNPcGVufSBvbk9wZW5DaGFuZ2U9eyhvcGVuOiBib29sZWFuKSA9PiAhb3BlbiAmJiBvbkNsb3NlKCl9PlxyXG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJiYWNrZHJvcC1ibHVyLXhsIGJnLWJhY2tncm91bmQvOTUgYm9yZGVyIGJvcmRlci1ib3JkZXIvMzAgdGV4dC1mb3JlZ3JvdW5kIHNoYWRvdy0yeGwgc2hhZG93LXByaW1hcnkvMTAgc206bWF4LXctbWQgcm91bmRlZC0yeGwgc3BhY2UteS02IHAtNlwiPlxyXG4gICAgICAgIHsvKiBEZWNvcmF0aXZlIGdyYWRpZW50IGJhY2tncm91bmQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeS81IHZpYS10cmFuc3BhcmVudCB0by1hY2NlbnQvNSByb3VuZGVkLTJ4bCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cclxuXHJcbiAgICAgICAgPERpYWxvZ0hlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzcGFjZS15LTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcHJpbWFyeVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTExIDVINmEyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoMTFhMiAyIDAgMDAyLTJ2LTVtLTEuNDE0LTkuNDE0YTIgMiAwIDExMi44MjggMi44MjhMMTEuODI4IDE1SDl2LTIuODI4bDguNTg2LTguNTg2elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57dGl0bGV9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICA8RGlhbG9nRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMVwiPntkZXNjcmlwdGlvbn08L0RpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZC85MCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntmaWVsZC5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ2VtYWlsJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTYgMTJhNCA0IDAgMTAtOCAwIDQgNCAwIDAwOCAwem0wIDB2MS41YTIuNSAyLjUgMCAwMDUgMFYxMmE5IDkgMCAxMC05IDltNC41LTEuMjA2YTguOTU5IDguOTU5IDAgMDEtNC41IDEuMjA3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdwYXNzd29yZCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTEyIDE1djJtLTYgNGgxMmEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptMTAtMTBWN2E0IDQgMCAwMC04IDB2NGg4elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIHtmaWVsZC5pbnB1dFR5cGUgPT09ICdzZWxlY3QnID8gKFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJvcmRlciBib3JkZXItYm9yZGVyLzUwIHJvdW5kZWQteGwgYmctYmFja2dyb3VuZC81MCB0ZXh0LWZvcmVncm91bmQgYmFja2Ryb3AtYmx1ci1zbSBmb2N1czpib3JkZXItcHJpbWFyeS81MCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzIwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YVtmaWVsZC5rZXldIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShmaWVsZC5rZXksIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7ZmllbGQub3B0aW9ucz8ubWFwKChvcHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0LnZhbHVlfSB2YWx1ZT17b3B0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtmaWVsZC50eXBlIHx8ICd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhW2ZpZWxkLmtleV0gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGZpZWxkLmtleSwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJvcmRlciBib3JkZXItYm9yZGVyLzUwIHJvdW5kZWQteGwgYmctYmFja2dyb3VuZC81MCBiYWNrZHJvcC1ibHVyLXNtIGZvY3VzOmJvcmRlci1wcmltYXJ5LzUwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvMjAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPERpYWxvZ0Zvb3RlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHNwYWNlLXgtMyBwdC02XCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLW11dGVkLzUwIGhvdmVyOmJnLW11dGVkLzgwIGJvcmRlci1ib3JkZXIvMzAgcm91bmRlZC14bCBweS0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1wcmltYXJ5LzgwIGhvdmVyOmZyb20tcHJpbWFyeS85MCBob3Zlcjp0by1wcmltYXJ5LzcwIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3cteGwgcm91bmRlZC14bCBweS0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJvY2Vzc2luZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IHN1Ym1pdExhYmVsfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQWRBOzs7Ozs7O0FBbUNlLFNBQVMsVUFBVSxLQVNqQjtRQVRpQixFQUNoQyxNQUFNLEVBQ04sT0FBTyxFQUNQLFFBQVEsYUFBYSxFQUNyQixjQUFjLGdDQUFnQyxFQUM5QyxjQUFjLFFBQVEsRUFDdEIsUUFBUSxFQUNSLE1BQU0sRUFDTixjQUFjLENBQUMsQ0FBQyxFQUNELEdBVGlCOztJQVVoQyxNQUFNLENBQUMsVUFBVSxZQUFZLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQXVCO0lBQzlELE1BQU0sQ0FBQyxjQUFjLGdCQUFnQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBRWxELENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDsrQkFBRTtZQUNULElBQUksUUFBUTtnQkFDVixZQUFZO1lBQ2Q7UUFDRjs4QkFBRztRQUFDO0tBQU87SUFFVCxNQUFNLGVBQWUsQ0FBQyxLQUFhO1FBQ2pDLFlBQVksQ0FBQyxPQUFTLENBQUM7Z0JBQUUsR0FBRyxJQUFJO2dCQUFFLENBQUMsSUFBSSxFQUFFO1lBQU0sQ0FBQztJQUNsRDtJQUVBLE1BQU0sZUFBZTtRQUNuQixJQUFJO1lBQ0YsZ0JBQWdCO1lBQ2hCLE1BQU0sU0FBUztZQUNmLDJJQUFBLENBQUEsUUFBSyxDQUFDLE9BQU8sQ0FBQztZQUNkO1FBQ0YsRUFBRSxVQUFNO1lBQ04sMklBQUEsQ0FBQSxRQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2QsU0FBVTtZQUNSLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsNkxBQUMscUlBQUEsQ0FBQSxTQUFNO1FBQUMsTUFBTTtRQUFRLGNBQWMsQ0FBQyxPQUFrQixDQUFDLFFBQVE7a0JBQzlELGNBQUEsNkxBQUMscUlBQUEsQ0FBQSxnQkFBYTtZQUFDLFdBQVU7OzhCQUV2Qiw2TEFBQztvQkFBSSxXQUFVOzs7Ozs7OEJBRWYsNkxBQUMscUlBQUEsQ0FBQSxlQUFZO29CQUFDLFdBQVU7OEJBQ3RCLGNBQUEsNkxBQUM7d0JBQUksV0FBVTs7MENBQ2IsNkxBQUM7Z0NBQUksV0FBVTswQ0FDYixjQUFBLDZMQUFDO29DQUFJLFdBQVU7b0NBQXVCLE1BQUs7b0NBQU8sUUFBTztvQ0FBZSxTQUFROzhDQUM5RSxjQUFBLDZMQUFDO3dDQUFLLGVBQWM7d0NBQVEsZ0JBQWU7d0NBQVEsYUFBYTt3Q0FBRyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUd6RSw2TEFBQzs7a0RBQ0MsNkxBQUMscUlBQUEsQ0FBQSxjQUFXO3dDQUFDLFdBQVU7a0RBQXlCOzs7Ozs7a0RBQ2hELDZMQUFDLHFJQUFBLENBQUEsb0JBQWlCO3dDQUFDLFdBQVU7a0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLekUsNkxBQUM7b0JBQUksV0FBVTs4QkFDWixPQUFPLEdBQUcsQ0FBQyxDQUFDOzRCQXNCSjs2Q0FyQlAsNkxBQUM7NEJBQW9CLFdBQVU7OzhDQUM3Qiw2TEFBQztvQ0FBTSxXQUFVOztzREFDZiw2TEFBQztzREFBTSxNQUFNLEtBQUs7Ozs7Ozt3Q0FDakIsTUFBTSxJQUFJLEtBQUsseUJBQ2QsNkxBQUM7NENBQUksV0FBVTs0Q0FBZ0MsTUFBSzs0Q0FBTyxRQUFPOzRDQUFlLFNBQVE7c0RBQ3ZGLGNBQUEsNkxBQUM7Z0RBQUssZUFBYztnREFBUSxnQkFBZTtnREFBUSxhQUFhO2dEQUFHLEdBQUU7Ozs7Ozs7Ozs7O3dDQUd4RSxNQUFNLElBQUksS0FBSyw0QkFDZCw2TEFBQzs0Q0FBSSxXQUFVOzRDQUFnQyxNQUFLOzRDQUFPLFFBQU87NENBQWUsU0FBUTtzREFDdkYsY0FBQSw2TEFBQztnREFBSyxlQUFjO2dEQUFRLGdCQUFlO2dEQUFRLGFBQWE7Z0RBQUcsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBSTFFLE1BQU0sU0FBUyxLQUFLLHlCQUNuQiw2TEFBQztvQ0FDQyxXQUFVO29DQUNWLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUk7b0NBQzlCLFVBQVUsQ0FBQyxJQUFNLGFBQWEsTUFBTSxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSzs7c0RBRXZELDZMQUFDOzRDQUFPLE9BQU07c0RBQUc7Ozs7Ozt5Q0FDaEIsaUJBQUEsTUFBTSxPQUFPLGNBQWIscUNBQUEsZUFBZSxHQUFHLENBQUMsQ0FBQyxvQkFDbkIsNkxBQUM7Z0RBQXVCLE9BQU8sSUFBSSxLQUFLOzBEQUNyQyxJQUFJLEtBQUs7K0NBREMsSUFBSSxLQUFLOzs7Ozs7Ozs7O3lEQU0xQiw2TEFBQyxvSUFBQSxDQUFBLFFBQUs7b0NBQ0osTUFBTSxNQUFNLElBQUksSUFBSTtvQ0FDcEIsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSTtvQ0FDOUIsVUFBVSxDQUFDLElBQU0sYUFBYSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLO29DQUN2RCxXQUFVOzs7Ozs7OzJCQWhDTixNQUFNLEdBQUc7Ozs7Ozs7Ozs7OzhCQXVDdkIsNkxBQUMscUlBQUEsQ0FBQSxlQUFZO29CQUFDLFdBQVU7O3NDQUN0Qiw2TEFBQyxxSUFBQSxDQUFBLFNBQU07NEJBQ0wsU0FBUTs0QkFDUixXQUFVOzRCQUNWLFVBQVU7NEJBQ1YsU0FBUztzQ0FDVjs7Ozs7O3NDQUdELDZMQUFDLHFJQUFBLENBQUEsU0FBTTs0QkFDTCxXQUFVOzRCQUNWLFNBQVM7NEJBQ1QsVUFBVTtzQ0FFVCw2QkFDQyw2TEFBQztnQ0FBSSxXQUFVOztrREFDYiw2TEFBQyxvTkFBQSxDQUFBLFVBQU87d0NBQUMsV0FBVTs7Ozs7O2tEQUNuQiw2TEFBQztrREFBSzs7Ozs7Ozs7Ozs7dUNBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO0dBMUh3QjtLQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNjQ5LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvYWRtaW4vUGFnaW5hdGVkVGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGFibGUsIFRhYmxlSGVhZGVyLCBUYWJsZVJvdywgVGFibGVIZWFkIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RhYmxlJztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcclxuXHJcbmltcG9ydCBEZWxldGVNb2RhbCBmcm9tICcuLi90YWJsZXMvRGVsZXRlTW9kYWwnO1xyXG5pbXBvcnQgVGFibGVCb2R5UmVuZGVyZXIgZnJvbSAnLi4vdGFibGVzL1RhYmxlQm9keVJlbmRlcmVyJztcclxuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWRUYWJsZVByb3BzIH0gZnJvbSAnQC9jb25zdGFudHMvdGFibGVUeXBlcyc7XHJcbmltcG9ydCBGb3JtTW9kYWwgZnJvbSAnLi4vdGFibGVzL0Zvcm1Nb2RhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEVycm9yQm91bmRhcnkgfSBmcm9tICdAL2NvbXBvbmVudHMvZXJyb3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRlZFRhYmxlPFQ+KHtcclxuICBxdWVyeVJlc3VsdCxcclxuICBkYXRhS2V5LFxyXG4gIGNvbHVtbnMsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGVuYWJsZUFjdGlvbnMsXHJcbiAgZGVsZXRlSG9vayxcclxuICBlZGl0SG9vayxcclxuICBjcmVhdGVIb29rLFxyXG4gIGVkaXRhYmxlRmllbGRzID0gW10sXHJcbiAgY3JlYXRlRmllbGRzID0gW10sXHJcbn06IFBhZ2luYXRlZFRhYmxlUHJvcHM8VD4pIHtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSBxdWVyeVJlc3VsdDtcclxuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHRhYmxlIGRhdGFcIiArIGRhdGEpO1xyXG4gIFxyXG4gIGNvbnN0IHJvd3M6IFRbXSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogZGF0YT8uW2RhdGFLZXldIHx8IFtdO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsIHJvd3MsIGRhdGFLZXkpO1xyXG5cclxuXHJcbiAgY29uc3QgW2l0ZW1Ub0RlbGV0ZSwgc2V0SXRlbVRvRGVsZXRlXSA9IHVzZVN0YXRlPFQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaXRlbVRvRWRpdCwgc2V0SXRlbVRvRWRpdF0gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2lzQ3JlYXRpbmcsIHNldElzQ3JlYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0Rm9ybURhdGEsIHNldEVkaXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBhbnk+Pih7fSk7XHJcblxyXG4gIGNvbnN0IFtkZWxldGVGbiwgeyBpc0xvYWRpbmc6IGlzRGVsZXRpbmcgfSA9IHsgaXNMb2FkaW5nOiBmYWxzZSB9XSA9XHJcbiAgICBkZWxldGVIb29rPy4oKSB8fCBbXTtcclxuICBjb25zdCBbZWRpdEZuLCB7IGlzTG9hZGluZzogaXNFZGl0aW5nIH0gPSB7IGlzTG9hZGluZzogZmFsc2UgfV0gPVxyXG4gICAgZWRpdEhvb2s/LigpIHx8IFtdO1xyXG4gIGNvbnN0IFtjcmVhdGVGbiwgeyBpc0xvYWRpbmc6IGlzQ3JlYXRpbmdMb2FkaW5nIH0gPSB7IGlzTG9hZGluZzogZmFsc2UgfV0gPVxyXG4gICAgY3JlYXRlSG9vaz8uKCkgfHwgW107XHJcblxyXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAoaXRlbTogVCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgZWRpdGFibGVGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgaW5pdGlhbFZhbHVlc1tmaWVsZC5rZXkgYXMgc3RyaW5nXSA9IChpdGVtIGFzIGFueSlbZmllbGQua2V5XTtcclxuICAgIH0pO1xyXG4gICAgc2V0SXRlbVRvRWRpdChpdGVtKTtcclxuICAgIHNldEVkaXRGb3JtRGF0YShpbml0aWFsVmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuQ3JlYXRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRFZGl0Rm9ybURhdGEoe30pO1xyXG4gICAgc2V0SXNDcmVhdGluZyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUZvcm1Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldEl0ZW1Ub0VkaXQobnVsbCk7XHJcbiAgICBzZXRJc0NyZWF0aW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBvbmVudEVycm9yQm91bmRhcnkgY29tcG9uZW50TmFtZT1cIlBhZ2luYXRlZFRhYmxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcInNwYWNlLXktNlwiLCBjbGFzc05hbWUpfT5cclxuICAgICAgICB7LyogSGVhZGVyIHdpdGggQ3JlYXRlIEJ1dHRvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5EYXRhIE1hbmFnZW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIE1hbmFnZSBhbmQgb3JnYW5pemUgeW91ciBkYXRhIHdpdGggYWR2YW5jZWQgZmlsdGVyaW5nIGFuZCBhY3Rpb25zXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2NyZWF0ZUhvb2sgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNyZWF0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXByaW1hcnkvODAgaG92ZXI6ZnJvbS1wcmltYXJ5LzkwIGhvdmVyOnRvLXByaW1hcnkvNzAgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgcm91bmRlZC14bCBweC02IHB5LTIuNVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgbWUtMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTEyIDR2MTZtOC04SDRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogTW9kZXJuIFRhYmxlIENvbnRhaW5lciB3aXRoIEdsYXNzIEVmZmVjdCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJhY2tkcm9wLWJsdXIteGwgYmctYmFja2dyb3VuZC85NSBib3JkZXIgYm9yZGVyLWJvcmRlci85MCByb3VuZGVkLTJ4bCBsZzpyb3VuZGVkLTN4bCBzaGFkb3ctMnhsIHNoYWRvdy1wcmltYXJ5LzEwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgey8qIFN1YnRsZSBiYWNrZ3JvdW5kIHBhdHRlcm4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5LzUgdmlhLXRyYW5zcGFyZW50IHRvLWFjY2VudC81IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxyXG5cclxuICAgICAgICAgIHsvKiBUYWJsZSBIZWFkZXIgd2l0aCBFbmhhbmNlZCBTdHlsaW5nICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXItYiBib3JkZXItYm9yZGVyLzcwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1tdXRlZC81MCB0by1tdXRlZC8zMCBiYWNrZHJvcC1ibHVyLXNtXCI+XHJcbiAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cgY2xhc3NOYW1lPVwiaG92ZXI6YmctdHJhbnNwYXJlbnQgYm9yZGVyLWJvcmRlci83MFwiPlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZC85MCBmb250LXNlbWlib2xkIHRleHQtc20gcHktNCBweC02IGZpcnN0OnBzLTggbGFzdDpwZS04XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBUYWJsZSBCb2R5IHdpdGggRW5oYW5jZWQgUmVuZGVyZXIgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICA8VGFibGVCb2R5UmVuZGVyZXJcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgcmVmZXRjaD17cmVmZXRjaH1cclxuICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgZW5hYmxlQWN0aW9ucz17ZW5hYmxlQWN0aW9uc31cclxuICAgICAgICAgICAgICAgIGVkaXRIb29rPXtlZGl0SG9va31cclxuICAgICAgICAgICAgICAgIGRlbGV0ZUhvb2s9e2RlbGV0ZUhvb2t9XHJcbiAgICAgICAgICAgICAgICBvbkVkaXQ9e29wZW5FZGl0TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17c2V0SXRlbVRvRGVsZXRlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRGVjb3JhdGl2ZSBFbGVtZW50cyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LTMyIGgtMzIgYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1wcmltYXJ5LzEwIHRvLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCAtdHJhbnNsYXRlLXktMTYgdHJhbnNsYXRlLXgtMTYgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCB3LTI0IGgtMjQgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1hY2NlbnQvMTAgdG8tdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIHRyYW5zbGF0ZS15LTEyIC10cmFuc2xhdGUteC0xMiBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8RGVsZXRlTW9kYWxcclxuICAgICAgICBpdGVtPXtpdGVtVG9EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXRlbVRvRGVsZXRlKG51bGwpfVxyXG4gICAgICAgIG9uQ29uZmlybT17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFpdGVtVG9EZWxldGUgfHwgIWRlbGV0ZUZuKSByZXR1cm47XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkZWxldGVGbigoaXRlbVRvRGVsZXRlIGFzIGFueSkuX2lkKS51bndyYXA/LigpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICBzZXRJdGVtVG9EZWxldGUobnVsbCk7XHJcbiAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIGlzTG9hZGluZz17aXNEZWxldGluZ31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBDcmVhdGlvbiBNb2RhbCAqL31cclxuICAgICAgPEZvcm1Nb2RhbFxyXG4gICAgICAgIGlzT3Blbj17aXNDcmVhdGluZ31cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZUZvcm1Nb2RhbH1cclxuICAgICAgICB0aXRsZT1cIkNyZWF0ZSBJdGVtXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkZpbGwgaW4gdGhlIGZpZWxkcyB0byBjcmVhdGUgYW4gaXRlbVwiXHJcbiAgICAgICAgc3VibWl0TGFiZWw9XCJDcmVhdGVcIlxyXG4gICAgICAgIGZpZWxkcz17Y3JlYXRlRmllbGRzfVxyXG4gICAgICAgIHN1Ym1pdEZuPXsoZGF0YSkgPT5cclxuICAgICAgICAgIGNyZWF0ZUZuISh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIHVuaXZlcnNpdHlJZDogJzY4MjM1MDliNDY3Y2FlMzhiYmY3ZDY5ZicsIC8vIFRPRE86IE1ha2UgZHluYW1pY1xyXG4gICAgICAgICAgfSkudW53cmFwPy4oKVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBFZGl0IE1vZGFsICovfVxyXG4gICAgICA8Rm9ybU1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXshIWl0ZW1Ub0VkaXR9XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VGb3JtTW9kYWx9XHJcbiAgICAgICAgdGl0bGU9XCJFZGl0IEl0ZW1cIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVXBkYXRlIHRoZSBmaWVsZHMgYW5kIGNsaWNrIHNhdmUgdG8gYXBwbHkgY2hhbmdlcy5cIlxyXG4gICAgICAgIHN1Ym1pdExhYmVsPVwiU2F2ZVwiXHJcbiAgICAgICAgaW5pdGlhbERhdGE9e2VkaXRGb3JtRGF0YX1cclxuICAgICAgICBmaWVsZHM9e2VkaXRhYmxlRmllbGRzfVxyXG4gICAgICAgIHN1Ym1pdEZuPXsoZGF0YSkgPT5cclxuICAgICAgICAgIGVkaXRGbiEoeyBfaWQ6IChpdGVtVG9FZGl0IGFzIGFueSkuX2lkLCAuLi5kYXRhIH0pLnVud3JhcD8uKClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NvbXBvbmVudEVycm9yQm91bmRhcnk+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7OztBQVpBOzs7Ozs7Ozs7O0FBY08sU0FBUyxlQUFrQixLQVdUO1FBWFMsRUFDaEMsV0FBVyxFQUNYLE9BQU8sRUFDUCxPQUFPLEVBQ1AsU0FBUyxFQUNULGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxFQUNSLFVBQVUsRUFDVixpQkFBaUIsRUFBRSxFQUNuQixlQUFlLEVBQUUsRUFDTSxHQVhTOztJQWFoQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUc7SUFDNUMsUUFBUSxHQUFHLENBQUMsMkJBQTJCO0lBRXZDLE1BQU0sT0FBWSxNQUFNLE9BQU8sQ0FBQyxRQUFRLE9BQU8sQ0FBQSxpQkFBQSwyQkFBQSxJQUFNLENBQUMsUUFBUSxLQUFJLEVBQUU7SUFDcEUsUUFBUSxHQUFHLENBQUMsTUFBTSxNQUFNO0lBR3hCLE1BQU0sQ0FBQyxjQUFjLGdCQUFnQixHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFZO0lBQzNELE1BQU0sQ0FBQyxZQUFZLGNBQWMsR0FBRyxDQUFBLEdBQUEsNkpBQUEsQ0FBQSxXQUFRLEFBQUQsRUFBWTtJQUN2RCxNQUFNLENBQUMsWUFBWSxjQUFjLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDN0MsTUFBTSxDQUFDLGNBQWMsZ0JBQWdCLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQXVCLENBQUM7SUFFdkUsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLFVBQVUsRUFBRSxHQUFHO1FBQUUsV0FBVztJQUFNLENBQUMsQ0FBQyxHQUNoRSxDQUFBLHVCQUFBLGlDQUFBLGlCQUFrQixFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxTQUFTLEVBQUUsR0FBRztRQUFFLFdBQVc7SUFBTSxDQUFDLENBQUMsR0FDN0QsQ0FBQSxxQkFBQSwrQkFBQSxlQUFnQixFQUFFO0lBQ3BCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxpQkFBaUIsRUFBRSxHQUFHO1FBQUUsV0FBVztJQUFNLENBQUMsQ0FBQyxHQUN2RSxDQUFBLHVCQUFBLGlDQUFBLGlCQUFrQixFQUFFO0lBRXRCLE1BQU0sZ0JBQWdCLENBQUM7UUFDckIsTUFBTSxnQkFBcUMsQ0FBQztRQUM1QyxlQUFlLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBVyxHQUFHLEFBQUMsSUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQy9EO1FBQ0EsY0FBYztRQUNkLGdCQUFnQjtJQUNsQjtJQUVBLE1BQU0sa0JBQWtCO1FBQ3RCLGdCQUFnQixDQUFDO1FBQ2pCLGNBQWM7SUFDaEI7SUFFQSxNQUFNLGlCQUFpQjtRQUNyQixjQUFjO1FBQ2QsY0FBYztJQUNoQjtJQUVBLHFCQUNFLDZMQUFDLHdKQUFBLENBQUEseUJBQXNCO1FBQUMsZUFBYzs7MEJBQ3BDLDZMQUFDO2dCQUFJLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsYUFBYTs7a0NBRTlCLDZMQUFDO3dCQUFJLFdBQVU7OzBDQUNiLDZMQUFDO2dDQUFJLFdBQVU7O2tEQUNiLDZMQUFDO3dDQUFHLFdBQVU7a0RBQXdDOzs7Ozs7a0RBQ3RELDZMQUFDO3dDQUFFLFdBQVU7a0RBQWdDOzs7Ozs7Ozs7Ozs7NEJBSTlDLDRCQUNDLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtnQ0FDTCxTQUFTO2dDQUNULFdBQVU7O2tEQUVWLDZMQUFDO3dDQUFJLFdBQVU7d0NBQWUsTUFBSzt3Q0FBTyxRQUFPO3dDQUFlLFNBQVE7a0RBQ3RFLGNBQUEsNkxBQUM7NENBQUssZUFBYzs0Q0FBUSxnQkFBZTs0Q0FBUSxhQUFhOzRDQUFHLEdBQUU7Ozs7Ozs7Ozs7O29DQUNqRTs7Ozs7Ozs7Ozs7OztrQ0FPWiw2TEFBQzt3QkFBSSxXQUFVOzswQ0FFYiw2TEFBQztnQ0FBSSxXQUFVOzs7Ozs7MENBR2YsNkxBQUM7Z0NBQUksV0FBVTswQ0FDYixjQUFBLDZMQUFDLG9JQUFBLENBQUEsUUFBSzs4Q0FDSixjQUFBLDZMQUFDLG9JQUFBLENBQUEsY0FBVztrREFDVixjQUFBLDZMQUFDLG9JQUFBLENBQUEsV0FBUTs0Q0FBQyxXQUFVO3NEQUNqQixRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssa0JBQ2pCLDZMQUFDLG9JQUFBLENBQUEsWUFBUztvREFFUixXQUFVOzhEQUVULElBQUksS0FBSzttREFITDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FZakIsNkxBQUM7Z0NBQUksV0FBVTswQ0FDYixjQUFBLDZMQUFDLG9JQUFBLENBQUEsUUFBSzs4Q0FDSixjQUFBLDZMQUFDLG9KQUFBLENBQUEsVUFBaUI7d0NBQ2hCLFdBQVc7d0NBQ1gsT0FBTzt3Q0FDUCxTQUFTO3dDQUNULE1BQU07d0NBQ04sU0FBUzt3Q0FDVCxlQUFlO3dDQUNmLFVBQVU7d0NBQ1YsWUFBWTt3Q0FDWixRQUFRO3dDQUNSLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTWhCLDZMQUFDO2dDQUFJLFdBQVU7Ozs7OzswQ0FDZiw2TEFBQztnQ0FBSSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5CLDZMQUFDLDhJQUFBLENBQUEsVUFBVztnQkFDVixNQUFNO2dCQUNOLFNBQVMsSUFBTSxnQkFBZ0I7Z0JBQy9CLFdBQVc7b0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVU7b0JBQ2hDLElBQUk7NEJBQ0ksa0JBQUE7d0JBQU4sUUFBTSxtQkFBQSxDQUFBLFlBQUEsU0FBUyxBQUFDLGFBQXFCLEdBQUcsR0FBRSxNQUFNLGNBQTFDLHVDQUFBLHNCQUFBO3dCQUNOLDJJQUFBLENBQUEsUUFBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDZCxnQkFBZ0I7b0JBQ2xCLEVBQUUsVUFBTTt3QkFDTiwySUFBQSxDQUFBLFFBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ2Q7Z0JBQ0Y7Z0JBQ0EsV0FBVzs7Ozs7OzBCQUliLDZMQUFDLDRJQUFBLENBQUEsVUFBUztnQkFDUixRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsT0FBTTtnQkFDTixhQUFZO2dCQUNaLGFBQVk7Z0JBQ1osUUFBUTtnQkFDUixVQUFVLENBQUM7d0JBQ1Qsa0JBQUE7NEJBQUEsbUJBQUEsQ0FBQSxZQUFBLFNBQVU7d0JBQ1IsR0FBRyxJQUFJO3dCQUNQLGNBQWM7b0JBQ2hCLElBQUcsTUFBTSxjQUhULHVDQUFBLHNCQUFBOzs7Ozs7OzBCQVFKLDZMQUFDLDRJQUFBLENBQUEsVUFBUztnQkFDUixRQUFRLENBQUMsQ0FBQztnQkFDVixTQUFTO2dCQUNULE9BQU07Z0JBQ04sYUFBWTtnQkFDWixhQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsUUFBUTtnQkFDUixVQUFVLENBQUM7d0JBQ1QsZ0JBQUE7NEJBQUEsaUJBQUEsQ0FBQSxVQUFBLE9BQVE7d0JBQUUsS0FBSyxBQUFDLFdBQW1CLEdBQUc7d0JBQUUsR0FBRyxJQUFJO29CQUFDLElBQUcsTUFBTSxjQUF6RCxxQ0FBQSxvQkFBQTs7Ozs7Ozs7Ozs7OztBQUtWO0dBektnQjtLQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxOTYwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvc2VsZWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgU2VsZWN0UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCJcclxuaW1wb3J0IHsgQ2hlY2tJY29uLCBDaGV2cm9uRG93bkljb24sIENoZXZyb25VcEljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmZ1bmN0aW9uIFNlbGVjdCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5Sb290Pikge1xyXG4gIHJldHVybiA8U2VsZWN0UHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwic2VsZWN0XCIgey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RHcm91cCh7XHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5Hcm91cD4pIHtcclxuICByZXR1cm4gPFNlbGVjdFByaW1pdGl2ZS5Hcm91cCBkYXRhLXNsb3Q9XCJzZWxlY3QtZ3JvdXBcIiB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFZhbHVlKHtcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlZhbHVlPikge1xyXG4gIHJldHVybiA8U2VsZWN0UHJpbWl0aXZlLlZhbHVlIGRhdGEtc2xvdD1cInNlbGVjdC12YWx1ZVwiIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZnVuY3Rpb24gU2VsZWN0VHJpZ2dlcih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHNpemUgPSBcImRlZmF1bHRcIixcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXI+ICYge1xyXG4gIHNpemU/OiBcInNtXCIgfCBcImRlZmF1bHRcIlxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RQcmltaXRpdmUuVHJpZ2dlclxyXG4gICAgICBkYXRhLXNsb3Q9XCJzZWxlY3QtdHJpZ2dlclwiXHJcbiAgICAgIGRhdGEtc2l6ZT17c2l6ZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImJvcmRlci1pbnB1dCBkYXRhLVtwbGFjZWhvbGRlcl06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIFsmX3N2Zzpub3QoW2NsYXNzKj0ndGV4dC0nXSldOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZSBkYXJrOmJnLWlucHV0LzMwIGRhcms6aG92ZXI6YmctaW5wdXQvNTAgZmxleCB3LWZpdCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXRyYW5zcGFyZW50IHB4LTMgcHktMiB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIHNoYWRvdy14cyB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRhdGEtW3NpemU9ZGVmYXVsdF06aC05IGRhdGEtW3NpemU9c21dOmgtOCAqOmRhdGEtW3Nsb3Q9c2VsZWN0LXZhbHVlXTpsaW5lLWNsYW1wLTEgKjpkYXRhLVtzbG90PXNlbGVjdC12YWx1ZV06ZmxleCAqOmRhdGEtW3Nsb3Q9c2VsZWN0LXZhbHVlXTppdGVtcy1jZW50ZXIgKjpkYXRhLVtzbG90PXNlbGVjdC12YWx1ZV06Z2FwLTIgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2hyaW5rLTAgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00XCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8U2VsZWN0UHJpbWl0aXZlLkljb24gYXNDaGlsZD5cclxuICAgICAgICA8Q2hldnJvbkRvd25JY29uIGNsYXNzTmFtZT1cInNpemUtNCBvcGFjaXR5LTUwXCIgLz5cclxuICAgICAgPC9TZWxlY3RQcmltaXRpdmUuSWNvbj5cclxuICAgIDwvU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RDb250ZW50KHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgcG9zaXRpb24gPSBcInBvcHBlclwiLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuQ29udGVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlbGVjdFByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgICAgIDxTZWxlY3RQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICAgIGRhdGEtc2xvdD1cInNlbGVjdC1jb250ZW50XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiByZWxhdGl2ZSB6LTUwIG1heC1oLSgtLXJhZGl4LXNlbGVjdC1jb250ZW50LWF2YWlsYWJsZS1oZWlnaHQpIG1pbi13LVs4cmVtXSBvcmlnaW4tKC0tcmFkaXgtc2VsZWN0LWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIHJvdW5kZWQtbWQgYm9yZGVyIHNoYWRvdy1tZFwiLFxyXG4gICAgICAgICAgcG9zaXRpb24gPT09IFwicG9wcGVyXCIgJiZcclxuICAgICAgICAgICAgXCJkYXRhLVtzaWRlPWJvdHRvbV06dHJhbnNsYXRlLXktMSBkYXRhLVtzaWRlPWxlZnRdOi10cmFuc2xhdGUteC0xIGRhdGEtW3NpZGU9cmlnaHRdOnRyYW5zbGF0ZS14LTEgZGF0YS1bc2lkZT10b3BdOi10cmFuc2xhdGUteS0xXCIsXHJcbiAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICApfVxyXG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8U2VsZWN0U2Nyb2xsVXBCdXR0b24gLz5cclxuICAgICAgICA8U2VsZWN0UHJpbWl0aXZlLlZpZXdwb3J0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICBcInAtMVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9PT0gXCJwb3BwZXJcIiAmJlxyXG4gICAgICAgICAgICAgIFwiaC1bdmFyKC0tcmFkaXgtc2VsZWN0LXRyaWdnZXItaGVpZ2h0KV0gdy1mdWxsIG1pbi13LVt2YXIoLS1yYWRpeC1zZWxlY3QtdHJpZ2dlci13aWR0aCldIHNjcm9sbC1teS0xXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLlZpZXdwb3J0PlxyXG4gICAgICAgIDxTZWxlY3RTY3JvbGxEb3duQnV0dG9uIC8+XHJcbiAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLkNvbnRlbnQ+XHJcbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RMYWJlbCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuTGFiZWw+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RQcmltaXRpdmUuTGFiZWxcclxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LWxhYmVsXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBweC0yIHB5LTEuNSB0ZXh0LXhzXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RJdGVtKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5JdGVtPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VsZWN0UHJpbWl0aXZlLkl0ZW1cclxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LWl0ZW1cIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgWyZfc3ZnOm5vdChbY2xhc3MqPSd0ZXh0LSddKV06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggdy1mdWxsIGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci04IHBsLTIgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgKjpbc3Bhbl06bGFzdDpmbGV4ICo6W3NwYW5dOmxhc3Q6aXRlbXMtY2VudGVyICo6W3NwYW5dOmxhc3Q6Z2FwLTJcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIGZsZXggc2l6ZS0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxyXG4gICAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtVGV4dD57Y2hpbGRyZW59PC9TZWxlY3RQcmltaXRpdmUuSXRlbVRleHQ+XHJcbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5JdGVtPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gU2VsZWN0U2VwYXJhdG9yKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TZXBhcmF0b3I+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yXHJcbiAgICAgIGRhdGEtc2xvdD1cInNlbGVjdC1zZXBhcmF0b3JcIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwiYmctYm9yZGVyIHBvaW50ZXItZXZlbnRzLW5vbmUgLW14LTEgbXktMSBoLXB4XCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RTY3JvbGxVcEJ1dHRvbih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b24+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b25cclxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LXNjcm9sbC11cC1idXR0b25cIlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMVwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxDaGV2cm9uVXBJY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+XHJcbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5TY3JvbGxVcEJ1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFNjcm9sbERvd25CdXR0b24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvblxyXG4gICAgICBkYXRhLXNsb3Q9XCJzZWxlY3Qtc2Nyb2xsLWRvd24tYnV0dG9uXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTFcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q2hldnJvbkRvd25JY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+XHJcbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5TY3JvbGxEb3duQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBTZWxlY3QsXHJcbiAgU2VsZWN0Q29udGVudCxcclxuICBTZWxlY3RHcm91cCxcclxuICBTZWxlY3RJdGVtLFxyXG4gIFNlbGVjdExhYmVsLFxyXG4gIFNlbGVjdFNjcm9sbERvd25CdXR0b24sXHJcbiAgU2VsZWN0U2Nyb2xsVXBCdXR0b24sXHJcbiAgU2VsZWN0U2VwYXJhdG9yLFxyXG4gIFNlbGVjdFRyaWdnZXIsXHJcbiAgU2VsZWN0VmFsdWUsXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBTkE7Ozs7O0FBUUEsU0FBUyxPQUFPLEtBRW9DO1FBRnBDLEVBQ2QsR0FBRyxPQUMrQyxHQUZwQztJQUdkLHFCQUFPLDZMQUFDLHFLQUFBLENBQUEsT0FBb0I7UUFBQyxhQUFVO1FBQVUsR0FBRyxLQUFLOzs7Ozs7QUFDM0Q7S0FKUztBQU1ULFNBQVMsWUFBWSxLQUVnQztRQUZoQyxFQUNuQixHQUFHLE9BQ2dELEdBRmhDO0lBR25CLHFCQUFPLDZMQUFDLHFLQUFBLENBQUEsUUFBcUI7UUFBQyxhQUFVO1FBQWdCLEdBQUcsS0FBSzs7Ozs7O0FBQ2xFO01BSlM7QUFNVCxTQUFTLFlBQVksS0FFZ0M7UUFGaEMsRUFDbkIsR0FBRyxPQUNnRCxHQUZoQztJQUduQixxQkFBTyw2TEFBQyxxS0FBQSxDQUFBLFFBQXFCO1FBQUMsYUFBVTtRQUFnQixHQUFHLEtBQUs7Ozs7OztBQUNsRTtNQUpTO0FBTVQsU0FBUyxjQUFjLEtBT3RCO1FBUHNCLEVBQ3JCLFNBQVMsRUFDVCxPQUFPLFNBQVMsRUFDaEIsUUFBUSxFQUNSLEdBQUcsT0FHSixHQVBzQjtJQVFyQixxQkFDRSw2TEFBQyxxS0FBQSxDQUFBLFVBQXVCO1FBQ3RCLGFBQVU7UUFDVixhQUFXO1FBQ1gsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixnekJBQ0E7UUFFRCxHQUFHLEtBQUs7O1lBRVI7MEJBQ0QsNkxBQUMscUtBQUEsQ0FBQSxPQUFvQjtnQkFBQyxPQUFPOzBCQUMzQixjQUFBLDZMQUFDLDJOQUFBLENBQUEsa0JBQWU7b0JBQUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7TUF4QlM7QUEwQlQsU0FBUyxjQUFjLEtBS2dDO1FBTGhDLEVBQ3JCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxRQUFRLEVBQ25CLEdBQUcsT0FDa0QsR0FMaEM7SUFNckIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxTQUFzQjtrQkFDckIsY0FBQSw2TEFBQyxxS0FBQSxDQUFBLFVBQXVCO1lBQ3RCLGFBQVU7WUFDVixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLGlqQkFDQSxhQUFhLFlBQ1gsbUlBQ0Y7WUFFRixVQUFVO1lBQ1QsR0FBRyxLQUFLOzs4QkFFVCw2TEFBQzs7Ozs7OEJBQ0QsNkxBQUMscUtBQUEsQ0FBQSxXQUF3QjtvQkFDdkIsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDVixPQUNBLGFBQWEsWUFDWDs4QkFHSDs7Ozs7OzhCQUVILDZMQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7TUFqQ1M7QUFtQ1QsU0FBUyxZQUFZLEtBR2dDO1FBSGhDLEVBQ25CLFNBQVMsRUFDVCxHQUFHLE9BQ2dELEdBSGhDO0lBSW5CLHFCQUNFLDZMQUFDLHFLQUFBLENBQUEsUUFBcUI7UUFDcEIsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQUUsNkNBQTZDO1FBQzFELEdBQUcsS0FBSzs7Ozs7O0FBR2Y7TUFYUztBQWFULFNBQVMsV0FBVyxLQUlnQztRQUpoQyxFQUNsQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEdBQUcsT0FDK0MsR0FKaEM7SUFLbEIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxPQUFvQjtRQUNuQixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFDViw2YUFDQTtRQUVELEdBQUcsS0FBSzs7MEJBRVQsNkxBQUM7Z0JBQUssV0FBVTswQkFDZCxjQUFBLDZMQUFDLHFLQUFBLENBQUEsZ0JBQTZCOzhCQUM1QixjQUFBLDZMQUFDLDJNQUFBLENBQUEsWUFBUzt3QkFBQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qiw2TEFBQyxxS0FBQSxDQUFBLFdBQXdCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHakM7TUF0QlM7QUF3QlQsU0FBUyxnQkFBZ0IsS0FHZ0M7UUFIaEMsRUFDdkIsU0FBUyxFQUNULEdBQUcsT0FDb0QsR0FIaEM7SUFJdkIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxZQUF5QjtRQUN4QixhQUFVO1FBQ1YsV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSxpREFBaUQ7UUFDOUQsR0FBRyxLQUFLOzs7Ozs7QUFHZjtNQVhTO0FBYVQsU0FBUyxxQkFBcUIsS0FHZ0M7UUFIaEMsRUFDNUIsU0FBUyxFQUNULEdBQUcsT0FDeUQsR0FIaEM7SUFJNUIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxpQkFBOEI7UUFDN0IsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysd0RBQ0E7UUFFRCxHQUFHLEtBQUs7a0JBRVQsY0FBQSw2TEFBQyx1TkFBQSxDQUFBLGdCQUFhO1lBQUMsV0FBVTs7Ozs7Ozs7Ozs7QUFHL0I7TUFoQlM7QUFrQlQsU0FBUyx1QkFBdUIsS0FHZ0M7UUFIaEMsRUFDOUIsU0FBUyxFQUNULEdBQUcsT0FDMkQsR0FIaEM7SUFJOUIscUJBQ0UsNkxBQUMscUtBQUEsQ0FBQSxtQkFBZ0M7UUFDL0IsYUFBVTtRQUNWLFdBQVcsQ0FBQSxHQUFBLHNIQUFBLENBQUEsS0FBRSxBQUFELEVBQ1Ysd0RBQ0E7UUFFRCxHQUFHLEtBQUs7a0JBRVQsY0FBQSw2TEFBQywyTkFBQSxDQUFBLGtCQUFlO1lBQUMsV0FBVTs7Ozs7Ozs7Ozs7QUFHakM7TUFoQlMiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDIyMTksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tU2VsZWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFNlbGVjdCxcclxuICBTZWxlY3RDb250ZW50LFxyXG4gIFNlbGVjdEl0ZW0sXHJcbiAgU2VsZWN0VHJpZ2dlcixcclxuICBTZWxlY3RWYWx1ZSxcclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvc2VsZWN0JztcclxuXHJcbmludGVyZmFjZSBDdXN0b21TZWxlY3RQcm9wcyB7XHJcbiAgb3B0aW9uczogeyBsYWJlbD86IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bWJlciB9W107XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgdmFsdWVDaGFuZ2VBY3Rpb24/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tU2VsZWN0KHsgb3B0aW9ucywgcGxhY2Vob2xkZXIsIHZhbHVlQ2hhbmdlQWN0aW9uLCB2YWx1ZSB9OiBDdXN0b21TZWxlY3RQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VsZWN0IG9uVmFsdWVDaGFuZ2U9e3ZhbHVlQ2hhbmdlQWN0aW9ufSB2YWx1ZT17U3RyaW5nKHZhbHVlKX0+XHJcbiAgICAgIDxTZWxlY3RUcmlnZ2VyIGNsYXNzTmFtZT1cInctWzY1cHhdIGlubGluZS1mbGV4IG14LTNcIj5cclxuICAgICAgICA8U2VsZWN0VmFsdWUgcGxhY2Vob2xkZXI9e1N0cmluZyhwbGFjZWhvbGRlcil9IC8+XHJcbiAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cclxuICAgICAgPFNlbGVjdENvbnRlbnQ+XHJcbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgIDxTZWxlY3RJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17U3RyaW5nKG9wdGlvbi52YWx1ZSl9PlxyXG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsID8/IG9wdGlvbi52YWx1ZX1cclxuICAgICAgICAgIDwvU2VsZWN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TZWxlY3RDb250ZW50PlxyXG4gICAgPC9TZWxlY3Q+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUFlZSxTQUFTLGFBQWEsS0FBcUU7UUFBckUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBcUIsR0FBckU7SUFDbkMscUJBQ0UsNkxBQUMscUlBQUEsQ0FBQSxTQUFNO1FBQUMsZUFBZTtRQUFtQixPQUFPLE9BQU87OzBCQUN0RCw2TEFBQyxxSUFBQSxDQUFBLGdCQUFhO2dCQUFDLFdBQVU7MEJBQ3ZCLGNBQUEsNkxBQUMscUlBQUEsQ0FBQSxjQUFXO29CQUFDLGFBQWEsT0FBTzs7Ozs7Ozs7Ozs7MEJBRW5DLDZMQUFDLHFJQUFBLENBQUEsZ0JBQWE7MEJBQ1gsUUFBUSxHQUFHLENBQUMsQ0FBQzt3QkFFVDt5Q0FESCw2TEFBQyxxSUFBQSxDQUFBLGFBQVU7d0JBQW9CLE9BQU8sT0FBTyxPQUFPLEtBQUs7a0NBQ3RELENBQUEsZ0JBQUEsT0FBTyxLQUFLLGNBQVosMkJBQUEsZ0JBQWdCLE9BQU8sS0FBSzt1QkFEZCxPQUFPLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZDO0tBZndCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyMjgyLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdGFibGVzL1BhZ2luYXRlZENvbnRyb2xzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XHJcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21TZWxlY3QnO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2luYXRpb25Db250cm9sc1Byb3BzIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgdG90YWxQYWdlczogbnVtYmVyO1xyXG4gIHNldFBhZ2U6IChwYWdlOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIC8vIEVuaGFuY2VkIGNvbnRyb2xzXHJcbiAgbGltaXQ/OiBudW1iZXI7XHJcbiAgc2V0TGltaXQ/OiAobGltaXQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBsaW1pdE9wdGlvbnM/OiBudW1iZXJbXTtcclxuICBzaG93TGltaXRDb250cm9scz86IGJvb2xlYW47XHJcbiAgc2hvd01vcmVMZXNzQ29udHJvbHM/OiBib29sZWFuO1xyXG4gIGxpbWl0U3RlcD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbkNvbnRyb2xzKHtcclxuICBwYWdlLFxyXG4gIHRvdGFsUGFnZXMsXHJcbiAgc2V0UGFnZSxcclxuICBjbGFzc05hbWUsXHJcbiAgbGltaXQsXHJcbiAgc2V0TGltaXQsXHJcbiAgbGltaXRPcHRpb25zID0gWzUsIDEwLCAxNSwgMjAsIDMwLCA1MCwgMTAwXSxcclxuICBzaG93TGltaXRDb250cm9scyA9IGZhbHNlLFxyXG4gIHNob3dNb3JlTGVzc0NvbnRyb2xzID0gZmFsc2UsXHJcbiAgbGltaXRTdGVwID0gNVxyXG59OiBQYWdpbmF0aW9uQ29udHJvbHNQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJtdC00IHRleHQtY2VudGVyIHNwYWNlLXktNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZmxleC13cmFwXCIsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7LyogTGltaXQgU2VsZWN0b3IgU2VjdGlvbiAqL31cclxuICAgICAge3Nob3dMaW1pdENvbnRyb2xzICYmIGxpbWl0ICE9PSB1bmRlZmluZWQgJiYgc2V0TGltaXQgJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgU2hvd1xyXG4gICAgICAgICAgPEN1c3RvbVNlbGVjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXtsaW1pdE9wdGlvbnMubWFwKHZhbHVlID0+ICh7IHZhbHVlIH0pKX1cclxuICAgICAgICAgICAgdmFsdWVDaGFuZ2VBY3Rpb249eyh2YWx1ZSkgPT4gc2V0TGltaXQoTnVtYmVyKHZhbHVlKSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtsaW1pdC50b1N0cmluZygpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIEl0ZW1zXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIFNob3cgTW9yZS9MZXNzIEJ1dHRvbnMgU2VjdGlvbiAqL31cclxuICAgICAge3Nob3dNb3JlTGVzc0NvbnRyb2xzICYmIGxpbWl0ICE9PSB1bmRlZmluZWQgJiYgc2V0TGltaXQgJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGltaXQobGltaXQgKyBsaW1pdFN0ZXApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaG93IG1vcmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAge2xpbWl0ID4gbGltaXRTdGVwICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExpbWl0KGxpbWl0IC0gbGltaXRTdGVwKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNob3cgbGVzc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIFBhZ2luYXRpb24gQ29udHJvbHMgU2VjdGlvbiAqL31cclxuICAgICAge3RvdGFsUGFnZXMgPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlIDw9IDF9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSAtIDEpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgcHgtMyBiZy1iYWNrZ3JvdW5kLzUwIGhvdmVyOmJnLWJhY2tncm91bmQvODAgYm9yZGVyLWJvcmRlci81MCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IG1lLTJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTUgMTlsLTctNyA3LTdcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPlByZXZpb3VzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj5QcmV2PC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgey8qIFBhZ2UgTnVtYmVycyBmb3IgbGFyZ2VyIHNjcmVlbnMgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cclxuICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IE1hdGgubWluKDUsIHRvdGFsUGFnZXMpIH0sIChfLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHBhZ2VOdW07XHJcbiAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPD0gNSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFnZSA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYWdlID49IHRvdGFsUGFnZXMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtID0gdG90YWxQYWdlcyAtIDQgKyBpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtID0gcGFnZSAtIDIgKyBpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlTnVtfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtwYWdlID09PSBwYWdlTnVtID8gXCJkZWZhdWx0XCIgOiBcImdob3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZU51bSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoLTkgdy05IHAtMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UgPT09IHBhZ2VOdW1cclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiaG92ZXI6YmctbXV0ZWQvNTBcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cGFnZU51bX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgcHgtMyBiZy1iYWNrZ3JvdW5kLzUwIGhvdmVyOmJnLWJhY2tncm91bmQvODAgYm9yZGVyLWJvcmRlci81MCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCBtcy0yXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTkgNWw3IDctNyA3XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBZ0JlLFNBQVMsbUJBQW1CLEtBV2pCO1FBWGlCLEVBQ3pDLElBQUksRUFDSixVQUFVLEVBQ1YsT0FBTyxFQUNQLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLGVBQWU7UUFBQztRQUFHO1FBQUk7UUFBSTtRQUFJO1FBQUk7UUFBSTtLQUFJLEVBQzNDLG9CQUFvQixLQUFLLEVBQ3pCLHVCQUF1QixLQUFLLEVBQzVCLFlBQVksQ0FBQyxFQUNXLEdBWGlCO0lBWXpDLHFCQUNFLDZMQUFDO1FBQUksV0FBVyxDQUFBLEdBQUEsc0hBQUEsQ0FBQSxLQUFFLEFBQUQsRUFBRSwwRUFBMEU7O1lBRTFGLHFCQUFxQixVQUFVLGFBQWEsMEJBQzNDLDZMQUFDO2dCQUFLLFdBQVU7O29CQUFHO2tDQUVqQiw2TEFBQyxrSkFBQSxDQUFBLFVBQVk7d0JBQ1gsU0FBUyxhQUFhLEdBQUcsQ0FBQyxDQUFBLFFBQVMsQ0FBQztnQ0FBRTs0QkFBTSxDQUFDO3dCQUM3QyxtQkFBbUIsQ0FBQyxRQUFVLFNBQVMsT0FBTzt3QkFDOUMsT0FBTyxNQUFNLFFBQVE7Ozs7OztvQkFDckI7Ozs7Ozs7WUFNTCx3QkFBd0IsVUFBVSxhQUFhLDBCQUM5Qyw2TEFBQztnQkFBSyxXQUFVOztrQ0FDZCw2TEFBQyxxSUFBQSxDQUFBLFNBQU07d0JBQ0wsU0FBUTt3QkFDUixNQUFLO3dCQUNMLFNBQVMsSUFBTSxTQUFTLFFBQVE7a0NBQ2pDOzs7Ozs7b0JBR0EsUUFBUSwyQkFDUCw2TEFBQyxxSUFBQSxDQUFBLFNBQU07d0JBQ0wsU0FBUTt3QkFDUixNQUFLO3dCQUNMLFNBQVMsSUFBTSxTQUFTLFFBQVE7a0NBQ2pDOzs7Ozs7Ozs7Ozs7WUFRTixhQUFhLG1CQUNaLDZMQUFDO2dCQUFJLFdBQVU7O2tDQUNiLDZMQUFDLHFJQUFBLENBQUEsU0FBTTt3QkFDTCxTQUFRO3dCQUNSLE1BQUs7d0JBQ0wsVUFBVSxRQUFRO3dCQUNsQixTQUFTLElBQU0sUUFBUSxPQUFPO3dCQUM5QixXQUFVOzswQ0FFViw2TEFBQztnQ0FBSSxXQUFVO2dDQUFlLE1BQUs7Z0NBQU8sUUFBTztnQ0FBZSxTQUFROzBDQUN0RSxjQUFBLDZMQUFDO29DQUFLLGVBQWM7b0NBQVEsZ0JBQWU7b0NBQVEsYUFBYTtvQ0FBRyxHQUFFOzs7Ozs7Ozs7OzswQ0FFdkUsNkxBQUM7Z0NBQUssV0FBVTswQ0FBbUI7Ozs7OzswQ0FDbkMsNkxBQUM7Z0NBQUssV0FBVTswQ0FBWTs7Ozs7Ozs7Ozs7O2tDQUk5Qiw2TEFBQzt3QkFBSSxXQUFVO2tDQUNaLE1BQU0sSUFBSSxDQUFDOzRCQUFFLFFBQVEsS0FBSyxHQUFHLENBQUMsR0FBRzt3QkFBWSxHQUFHLENBQUMsR0FBRzs0QkFDbkQsSUFBSTs0QkFDSixJQUFJLGNBQWMsR0FBRztnQ0FDbkIsVUFBVSxJQUFJOzRCQUNoQixPQUFPLElBQUksUUFBUSxHQUFHO2dDQUNwQixVQUFVLElBQUk7NEJBQ2hCLE9BQU8sSUFBSSxRQUFRLGFBQWEsR0FBRztnQ0FDakMsVUFBVSxhQUFhLElBQUk7NEJBQzdCLE9BQU87Z0NBQ0wsVUFBVSxPQUFPLElBQUk7NEJBQ3ZCOzRCQUVBLHFCQUNFLDZMQUFDLHFJQUFBLENBQUEsU0FBTTtnQ0FFTCxTQUFTLFNBQVMsVUFBVSxZQUFZO2dDQUN4QyxNQUFLO2dDQUNMLFNBQVMsSUFBTSxRQUFRO2dDQUN2QixXQUFXLENBQUEsR0FBQSxzSEFBQSxDQUFBLEtBQUUsQUFBRCxFQUNWLHNEQUNBLFNBQVMsVUFDTCxpREFDQTswQ0FHTDsrQkFYSTs7Ozs7d0JBY1g7Ozs7OztrQ0FHRiw2TEFBQyxxSUFBQSxDQUFBLFNBQU07d0JBQ0wsU0FBUTt3QkFDUixNQUFLO3dCQUNMLFVBQVUsUUFBUTt3QkFDbEIsU0FBUyxJQUFNLFFBQVEsT0FBTzt3QkFDOUIsV0FBVTs7MENBRVYsNkxBQUM7Z0NBQUssV0FBVTswQ0FBbUI7Ozs7OzswQ0FDbkMsNkxBQUM7Z0NBQUssV0FBVTswQ0FBWTs7Ozs7OzBDQUM1Qiw2TEFBQztnQ0FBSSxXQUFVO2dDQUFlLE1BQUs7Z0NBQU8sUUFBTztnQ0FBZSxTQUFROzBDQUN0RSxjQUFBLDZMQUFDO29DQUFLLGVBQWM7b0NBQVEsZ0JBQWU7b0NBQVEsYUFBYTtvQ0FBRyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uRjtLQXBId0IiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI1MTUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvY29uc3RhbnRzL3N1cGVyQWRtaW5UYWJsZURhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFkbWluQWRtaW5zVGFibGVEYXRhID0gW1xyXG4gIHsgbGFiZWw6ICdOYW1lJywgYWNjZXNzb3I6ICduYW1lJyB9LFxyXG4gIHsgbGFiZWw6ICdSb2xlJywgYWNjZXNzb3I6ICdyb2xlJyB9LFxyXG4gIHsgbGFiZWw6ICdBZG1pbiBJRCcsIGFjY2Vzc29yOiAnaWQnIH0sXHJcbiAgeyBsYWJlbDogJ0NyZWF0ZWQgQXQnLCBhY2Nlc3NvcjogKHJvdzogYW55KSA9PiBuZXcgRGF0ZShyb3cuY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYWRtaW5BZG1pbkNyZWF0ZUZpZWxkcyA9IFtcclxuICB7IGxhYmVsOiAnTmFtZScsIGtleTogJ25hbWUnIH0sXHJcbiAgeyBsYWJlbDogJ1Bhc3N3b3JkJywga2V5OiAncGFzc3dvcmQnIH0sXHJcbiAgeyBsYWJlbDogJ1VuaXZlcnNpdHkgSUQnLCBrZXk6ICd1bml2ZXJzaXR5SWQnIH0sXHJcbiAgeyBsYWJlbDogJ0NvbGxlZ2UgSUQnLCBrZXk6ICdjb2xsZWdlSWQnIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYWRtaW5BZG1pbkVkaXRGaWVsZHMgPSBbXHJcbiAgeyBsYWJlbDogJ05hbWUnLCBrZXk6ICduYW1lJyB9LFxyXG5dOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU0sdUJBQXVCO0lBQ2xDO1FBQUUsT0FBTztRQUFRLFVBQVU7SUFBTztJQUNsQztRQUFFLE9BQU87UUFBUSxVQUFVO0lBQU87SUFDbEM7UUFBRSxPQUFPO1FBQVksVUFBVTtJQUFLO0lBQ3BDO1FBQUUsT0FBTztRQUFjLFVBQVUsQ0FBQyxNQUFhLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRSxjQUFjO0lBQUc7Q0FDekY7QUFFTSxNQUFNLHlCQUF5QjtJQUNwQztRQUFFLE9BQU87UUFBUSxLQUFLO0lBQU87SUFDN0I7UUFBRSxPQUFPO1FBQVksS0FBSztJQUFXO0lBQ3JDO1FBQUUsT0FBTztRQUFpQixLQUFLO0lBQWU7SUFDOUM7UUFBRSxPQUFPO1FBQWMsS0FBSztJQUFZO0NBQ3pDO0FBRU0sTUFBTSx1QkFBdUI7SUFDbEM7UUFBRSxPQUFPO1FBQVEsS0FBSztJQUFPO0NBQzlCIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyNTcxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2FwcC8lMjh1c2VyJTI5L3N1cGVyLWFkbWluLyU1QmlkJTVEL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7XHJcblxyXG59IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvc3R1ZGVudEFwaSc7XHJcbmltcG9ydCB7IFBhZ2luYXRlZFRhYmxlIH0gZnJvbSAnQC9jb21wb25lbnRzL2FkbWluL1BhZ2luYXRlZFRhYmxlJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbkNvbnRyb2xzIGZyb20gJ0AvY29tcG9uZW50cy90YWJsZXMvUGFnaW5hdGVkQ29udHJvbHMnO1xyXG5pbXBvcnQgeyB1c2VDcmVhdGVBZG1pbk11dGF0aW9uLCB1c2VEZWxldGVBZG1pbk11dGF0aW9uLCB1c2VHZXRQYWdlT2ZBZG1pbnNRdWVyeSwgdXNlVXBkYXRlQWRtaW5NdXRhdGlvbiB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvYWRtaW5BcGknO1xyXG5pbXBvcnQgeyBhZG1pbkFkbWluQ3JlYXRlRmllbGRzLCBhZG1pbkFkbWluRWRpdEZpZWxkcywgYWRtaW5BZG1pbnNUYWJsZURhdGEgfSBmcm9tICdAL2NvbnN0YW50cy9zdXBlckFkbWluVGFibGVEYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgYWRtaW5zUXVlcnlSZXN1bHQgPSB1c2VHZXRQYWdlT2ZBZG1pbnNRdWVyeSh7IHBhZ2UsIGxpbWl0IH0pO1xyXG4gIGNvbnN0IHRvdGFsUGFnZXM6IG51bWJlciA9IGFkbWluc1F1ZXJ5UmVzdWx0Py5kYXRhPy5wYWdpbmF0aW9uPy50b3RhbFBhZ2VzIHx8IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzcGFjZS15LTQgbXQtNFwiPlxyXG4gICAgICAgIDxQYWdpbmF0ZWRUYWJsZVxyXG4gICAgICAgICAgcXVlcnlSZXN1bHQ9e2FkbWluc1F1ZXJ5UmVzdWx0fVxyXG4gICAgICAgICAgZGF0YUtleT1cImFkbWluc1wiXHJcbiAgICAgICAgICBjb2x1bW5zPXthZG1pbkFkbWluc1RhYmxlRGF0YX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTRcIlxyXG4gICAgICAgICAgZW5hYmxlQWN0aW9uc1xyXG4gICAgICAgICAgZGVsZXRlSG9vaz17dXNlRGVsZXRlQWRtaW5NdXRhdGlvbn1cclxuICAgICAgICAgIGVkaXRIb29rPXt1c2VVcGRhdGVBZG1pbk11dGF0aW9ufVxyXG4gICAgICAgICAgZWRpdGFibGVGaWVsZHM9e2FkbWluQWRtaW5FZGl0RmllbGRzfVxyXG4gICAgICAgICAgY3JlYXRlSG9vaz17dXNlQ3JlYXRlQWRtaW5NdXRhdGlvbn1cclxuICAgICAgICAgIGNyZWF0ZUZpZWxkcz17YWRtaW5BZG1pbkNyZWF0ZUZpZWxkc31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8UGFnaW5hdGlvbkNvbnRyb2xzXHJcbiAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgdG90YWxQYWdlcz17dG90YWxQYWdlc31cclxuICAgICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XHJcbiAgICAgICAgICBsaW1pdD17bGltaXR9XHJcbiAgICAgICAgICBzZXRMaW1pdD17c2V0TGltaXR9XHJcbiAgICAgICAgICBzaG93TGltaXRDb250cm9scz17dHJ1ZX1cclxuICAgICAgICAgIHNob3dNb3JlTGVzc0NvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtNFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQVZBOzs7Ozs7O0FBWWUsU0FBUztRQUlLLG9DQUFBOztJQUgzQixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQSxHQUFBLDZKQUFBLENBQUEsV0FBUSxBQUFELEVBQUU7SUFDakMsTUFBTSxDQUFDLE9BQU8sU0FBUyxHQUFHLENBQUEsR0FBQSw2SkFBQSxDQUFBLFdBQVEsQUFBRCxFQUFFO0lBQ25DLE1BQU0sb0JBQW9CLENBQUEsR0FBQSx1SUFBQSxDQUFBLDBCQUF1QixBQUFELEVBQUU7UUFBRTtRQUFNO0lBQU07SUFDaEUsTUFBTSxhQUFxQixDQUFBLDhCQUFBLHlDQUFBLDBCQUFBLGtCQUFtQixJQUFJLGNBQXZCLCtDQUFBLHFDQUFBLHdCQUF5QixVQUFVLGNBQW5DLHlEQUFBLG1DQUFxQyxVQUFVLEtBQUk7SUFFOUUscUJBQ0U7a0JBQ0UsY0FBQSw2TEFBQztZQUFJLFdBQVU7OzhCQUNiLDZMQUFDLGdKQUFBLENBQUEsaUJBQWM7b0JBQ2IsYUFBYTtvQkFDYixTQUFRO29CQUNSLFNBQVMsMElBQUEsQ0FBQSx1QkFBb0I7b0JBQzdCLFdBQVU7b0JBQ1YsYUFBYTtvQkFDYixZQUFZLHVJQUFBLENBQUEseUJBQXNCO29CQUNsQyxVQUFVLHVJQUFBLENBQUEseUJBQXNCO29CQUNoQyxnQkFBZ0IsMElBQUEsQ0FBQSx1QkFBb0I7b0JBQ3BDLFlBQVksdUlBQUEsQ0FBQSx5QkFBc0I7b0JBQ2xDLGNBQWMsMElBQUEsQ0FBQSx5QkFBc0I7Ozs7Ozs4QkFHdEMsNkxBQUMsb0pBQUEsQ0FBQSxVQUFrQjtvQkFDakIsTUFBTTtvQkFDTixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsT0FBTztvQkFDUCxVQUFVO29CQUNWLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixXQUFVOzs7Ozs7Ozs7Ozs7O0FBS3BCO0dBbkN3Qjs7UUFHSSx1SUFBQSxDQUFBLDBCQUF1Qjs7O0tBSDNCIiwiZGVidWdJZCI6bnVsbH19XQp9
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/landing/Ourwork.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const OurWork = ()=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Landing.OurWork');
    const projects = [
        {
            title: t('projects.enterprise.title'),
            description: t('projects.enterprise.description'),
            image: "/api/placeholder/600/400",
            tags: [
                "React",
                "TypeScript",
                "Analytics"
            ],
            metrics: {
                users: "10K+",
                tasks: "50K+",
                efficiency: "45%"
            },
            cta: t('projects.enterprise.cta')
        },
        {
            title: t('projects.startup.title'),
            description: t('projects.startup.description'),
            image: "/api/placeholder/600/400",
            tags: [
                "Vue.js",
                "Node.js",
                "Real-time"
            ],
            metrics: {
                users: "2K+",
                tasks: "15K+",
                efficiency: "60%"
            },
            cta: t('projects.startup.cta')
        },
        {
            title: t('projects.education.title'),
            description: t('projects.education.description'),
            image: "/api/placeholder/600/400",
            tags: [
                "Next.js",
                "Collaboration",
                "Education"
            ],
            metrics: {
                users: "5K+",
                tasks: "25K+",
                efficiency: "35%"
            },
            cta: t('projects.education.cta')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ourwork",
        className: "py-24 bg-muted/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-primary mb-6",
                            children: [
                                t('title'),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary block",
                                    children: t('subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground leading-relaxed",
                            children: t('description')
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "                ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 48,
                                            className: "text-primary opacity-60 group-hover:scale-110 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                size: 20,
                                                className: "text-muted-foreground hover:text-primary transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                lineNumber: 70,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-foreground font-primary mb-3",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed mb-4",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 79,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-6",
                                            children: project.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",
                                                    children: tag
                                                }, tagIndex, false, {
                                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-primary",
                                                            children: project.metrics.users
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: t('metrics.users')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-primary",
                                                            children: project.metrics.tasks
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: t('metrics.tasks')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-primary",
                                                            children: [
                                                                "+",
                                                                project.metrics.efficiency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: t('metrics.efficiency')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 96,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition-opacity font-medium",
                                            children: project.cta
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-border rounded-2xl p-8 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-foreground font-primary mb-4",
                                    children: t('process.title')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: t('process.description')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "                    ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 24,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                lineNumber: 132,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 131,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-foreground mb-2",
                                            children: t('process.steps.discovery.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: t('process.steps.discovery.description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 24,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-foreground mb-2",
                                            children: t('process.steps.planning.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: t('process.steps.planning.description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                size: 24,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                lineNumber: 148,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-foreground mb-2",
                                            children: t('process.steps.development.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: t('process.steps.development.description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 151,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                size: 24,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/Ourwork.tsx",
                                                lineNumber: 156,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-foreground mb-2",
                                            children: t('process.steps.delivery.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: t('process.steps.delivery.description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/Ourwork.tsx",
                            lineNumber: 129,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/Ourwork.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/Ourwork.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing/Ourwork.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OurWork, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = OurWork;
const __TURBOPACK__default__export__ = OurWork;
var _c;
__turbopack_context__.k.register(_c, "OurWork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/landing/Ourwork.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/landing/Ourwork.tsx [app-client] (ecmascript)"));
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
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ExternalLink
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ExternalLink": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Github
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
];
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("github", __iconNode);
;
 //# sourceMappingURL=github.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Github": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Users
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Users": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Calendar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Calendar": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>CircleCheckBig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CheckCircle": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9jb21wb25lbnRzL2xhbmRpbmcvT3Vyd29yay50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV4dGVybmFsTGluaywgR2l0aHViLCBQbGF5LCBVc2VycywgQ2FsZW5kYXIsIENoZWNrQ2lyY2xlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJztcclxuXHJcbmNvbnN0IE91cldvcmsgPSAoKSA9PiB7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygnTGFuZGluZy5PdXJXb3JrJyk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogdCgncHJvamVjdHMuZW50ZXJwcmlzZS50aXRsZScpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdCgncHJvamVjdHMuZW50ZXJwcmlzZS5kZXNjcmlwdGlvbicpLFxyXG4gICAgICBpbWFnZTogXCIvYXBpL3BsYWNlaG9sZGVyLzYwMC80MDBcIixcclxuICAgICAgdGFnczogW1wiUmVhY3RcIiwgXCJUeXBlU2NyaXB0XCIsIFwiQW5hbHl0aWNzXCJdLFxyXG4gICAgICBtZXRyaWNzOiB7XHJcbiAgICAgICAgdXNlcnM6IFwiMTBLK1wiLFxyXG4gICAgICAgIHRhc2tzOiBcIjUwSytcIixcclxuICAgICAgICBlZmZpY2llbmN5OiBcIjQ1JVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGN0YTogdCgncHJvamVjdHMuZW50ZXJwcmlzZS5jdGEnKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoJ3Byb2plY3RzLnN0YXJ0dXAudGl0bGUnKSxcclxuICAgICAgZGVzY3JpcHRpb246IHQoJ3Byb2plY3RzLnN0YXJ0dXAuZGVzY3JpcHRpb24nKSxcclxuICAgICAgaW1hZ2U6IFwiL2FwaS9wbGFjZWhvbGRlci82MDAvNDAwXCIsXHJcbiAgICAgIHRhZ3M6IFtcIlZ1ZS5qc1wiLCBcIk5vZGUuanNcIiwgXCJSZWFsLXRpbWVcIl0sXHJcbiAgICAgIG1ldHJpY3M6IHtcclxuICAgICAgICB1c2VyczogXCIySytcIixcclxuICAgICAgICB0YXNrczogXCIxNUsrXCIsXHJcbiAgICAgICAgZWZmaWNpZW5jeTogXCI2MCVcIlxyXG4gICAgICB9LFxyXG4gICAgICBjdGE6IHQoJ3Byb2plY3RzLnN0YXJ0dXAuY3RhJylcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KCdwcm9qZWN0cy5lZHVjYXRpb24udGl0bGUnKSxcclxuICAgICAgZGVzY3JpcHRpb246IHQoJ3Byb2plY3RzLmVkdWNhdGlvbi5kZXNjcmlwdGlvbicpLFxyXG4gICAgICBpbWFnZTogXCIvYXBpL3BsYWNlaG9sZGVyLzYwMC80MDBcIixcclxuICAgICAgdGFnczogW1wiTmV4dC5qc1wiLCBcIkNvbGxhYm9yYXRpb25cIiwgXCJFZHVjYXRpb25cIl0sXHJcbiAgICAgIG1ldHJpY3M6IHtcclxuICAgICAgICB1c2VyczogXCI1SytcIixcclxuICAgICAgICB0YXNrczogXCIyNUsrXCIsXHJcbiAgICAgICAgZWZmaWNpZW5jeTogXCIzNSVcIlxyXG4gICAgICB9LFxyXG4gICAgICBjdGE6IHQoJ3Byb2plY3RzLmVkdWNhdGlvbi5jdGEnKVxyXG4gICAgfVxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cIm91cndvcmtcIiBjbGFzc05hbWU9XCJweS0yNCBiZy1tdXRlZC8zMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG8gbWItMTZcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIGZvbnQtcHJpbWFyeSBtYi02XCI+XHJcbiAgICAgICAgICAgIHt0KCd0aXRsZScpfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgYmxvY2tcIj57dCgnc3VidGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbicpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICB7LyogUHJvamVjdHMgR3JpZCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtOCBtYi0xNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBiZy1jYXJkIGJvcmRlciBib3JkZXItYm9yZGVyIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjotdHJhbnNsYXRlLXktMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9qZWN0IEltYWdlIFBsYWNlaG9sZGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQ4IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeS8yMCB0by1hY2NlbnQvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheSBzaXplPXs0OH0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IG9wYWNpdHktNjAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBzaXplPXsyMH0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvamVjdCBDb250ZW50ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIGZvbnQtcHJpbWFyeSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gbGVhZGluZy1yZWxheGVkIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZywgdGFnSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWdJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTWV0cmljcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtcHJpbWFyeVwiPntwcm9qZWN0Lm1ldHJpY3MudXNlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3QoJ21ldHJpY3MudXNlcnMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1wcmltYXJ5XCI+e3Byb2plY3QubWV0cmljcy50YXNrc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57dCgnbWV0cmljcy50YXNrcycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnlcIj4re3Byb2plY3QubWV0cmljcy5lZmZpY2llbmN5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdtZXRyaWNzLmVmZmljaWVuY3knKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDVEEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBweS0zIHJvdW5kZWQteGwgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLW9wYWNpdHkgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuY3RhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFByb2Nlc3MgU2VjdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNhcmQgYm9yZGVyIGJvcmRlci1ib3JkZXIgcm91bmRlZC0yeGwgcC04IHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBmb250LXByaW1hcnkgbWItNFwiPlxyXG4gICAgICAgICAgICAgIHt0KCdwcm9jZXNzLnRpdGxlJyl9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIHt0KCdwcm9jZXNzLmRlc2NyaXB0aW9uJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy00IGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLXByaW1hcnkvMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyBzaXplPXsyNH0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMlwiPnt0KCdwcm9jZXNzLnN0ZXBzLmRpc2NvdmVyeS50aXRsZScpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdwcm9jZXNzLnN0ZXBzLmRpc2NvdmVyeS5kZXNjcmlwdGlvbicpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1wcmltYXJ5LzEwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgc2l6ZT17MjR9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTJcIj57dCgncHJvY2Vzcy5zdGVwcy5wbGFubmluZy50aXRsZScpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdwcm9jZXNzLnN0ZXBzLnBsYW5uaW5nLmRlc2NyaXB0aW9uJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLXByaW1hcnkvMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHaXRodWIgc2l6ZT17MjR9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTJcIj57dCgncHJvY2Vzcy5zdGVwcy5kZXZlbG9wbWVudC50aXRsZScpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdwcm9jZXNzLnN0ZXBzLmRldmVsb3BtZW50LmRlc2NyaXB0aW9uJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLXByaW1hcnkvMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBzaXplPXsyNH0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMlwiPnt0KCdwcm9jZXNzLnN0ZXBzLmRlbGl2ZXJ5LnRpdGxlJyl9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3QoJ3Byb2Nlc3Muc3RlcHMuZGVsaXZlcnkuZGVzY3JpcHRpb24nKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJXb3JrOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUhBOzs7QUFLQSxNQUFNLFVBQVU7O0lBQ2QsTUFBTSxJQUFJLENBQUEsR0FBQSx5TUFBQSxDQUFBLGtCQUFlLEFBQUQsRUFBRTtJQUUxQixNQUFNLFdBQVc7UUFDZjtZQUNFLE9BQU8sRUFBRTtZQUNULGFBQWEsRUFBRTtZQUNmLE9BQU87WUFDUCxNQUFNO2dCQUFDO2dCQUFTO2dCQUFjO2FBQVk7WUFDMUMsU0FBUztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsWUFBWTtZQUNkO1lBQ0EsS0FBSyxFQUFFO1FBQ1Q7UUFDQTtZQUNFLE9BQU8sRUFBRTtZQUNULGFBQWEsRUFBRTtZQUNmLE9BQU87WUFDUCxNQUFNO2dCQUFDO2dCQUFVO2dCQUFXO2FBQVk7WUFDeEMsU0FBUztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsWUFBWTtZQUNkO1lBQ0EsS0FBSyxFQUFFO1FBQ1Q7UUFDQTtZQUNFLE9BQU8sRUFBRTtZQUNULGFBQWEsRUFBRTtZQUNmLE9BQU87WUFDUCxNQUFNO2dCQUFDO2dCQUFXO2dCQUFpQjthQUFZO1lBQy9DLFNBQVM7Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLFlBQVk7WUFDZDtZQUNBLEtBQUssRUFBRTtRQUNUO0tBQ0Q7SUFDRCxxQkFDTSw2TEFBQztRQUFRLElBQUc7UUFBVSxXQUFVO2tCQUM1QixjQUFBLDZMQUFDO1lBQUksV0FBVTs7OEJBRW5CLDZMQUFDO29CQUFJLFdBQVU7O3NDQUNiLDZMQUFDOzRCQUFHLFdBQVU7O2dDQUNYLEVBQUU7OENBQ0gsNkxBQUM7b0NBQUssV0FBVTs4Q0FBc0IsRUFBRTs7Ozs7Ozs7Ozs7O3NDQUUxQyw2TEFBQzs0QkFBRSxXQUFVO3NDQUNWLEVBQUU7Ozs7Ozs7Ozs7OztnQkFFRDs4QkFDRSw2TEFBQztvQkFBSSxXQUFVOzhCQUNWLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxzQkFDcEIsNkxBQUM7NEJBRUcsV0FBVTs7OENBR1YsNkxBQUM7b0NBQUksV0FBVTs7c0RBQ1gsNkxBQUMscU1BQUEsQ0FBQSxPQUFJOzRDQUFDLE1BQU07NENBQUksV0FBVTs7Ozs7O3NEQUMxQiw2TEFBQzs0Q0FBSSxXQUFVO3NEQUNYLGNBQUEsNkxBQUMseU5BQUEsQ0FBQSxlQUFZO2dEQUFDLE1BQU07Z0RBQUksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSzFDLDZMQUFDO29DQUFJLFdBQVU7O3NEQUNYLDZMQUFDOzRDQUFHLFdBQVU7c0RBQ1QsUUFBUSxLQUFLOzs7Ozs7c0RBRWxCLDZMQUFDOzRDQUFFLFdBQVU7c0RBQ1IsUUFBUSxXQUFXOzs7Ozs7c0RBSXhCLDZMQUFDOzRDQUFJLFdBQVU7c0RBQ1YsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyx5QkFDcEIsNkxBQUM7b0RBRUcsV0FBVTs4REFFVDttREFISTs7Ozs7Ozs7OztzREFTakIsNkxBQUM7NENBQUksV0FBVTs7OERBQ1gsNkxBQUM7b0RBQUksV0FBVTs7c0VBQ1gsNkxBQUM7NERBQUksV0FBVTtzRUFBa0MsUUFBUSxPQUFPLENBQUMsS0FBSzs7Ozs7O3NFQUN0RSw2TEFBQzs0REFBSSxXQUFVO3NFQUFpQyxFQUFFOzs7Ozs7Ozs7Ozs7OERBRXRELDZMQUFDO29EQUFJLFdBQVU7O3NFQUNYLDZMQUFDOzREQUFJLFdBQVU7c0VBQWtDLFFBQVEsT0FBTyxDQUFDLEtBQUs7Ozs7OztzRUFDdEUsNkxBQUM7NERBQUksV0FBVTtzRUFBaUMsRUFBRTs7Ozs7Ozs7Ozs7OzhEQUV0RCw2TEFBQztvREFBSSxXQUFVOztzRUFDWCw2TEFBQzs0REFBSSxXQUFVOztnRUFBaUM7Z0VBQUUsUUFBUSxPQUFPLENBQUMsVUFBVTs7Ozs7OztzRUFDNUUsNkxBQUM7NERBQUksV0FBVTtzRUFBaUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUsxRCw2TEFBQzs0Q0FBTyxXQUFVO3NEQUNiLFFBQVEsR0FBRzs7Ozs7Ozs7Ozs7OzsyQkFsRGY7Ozs7Ozs7Ozs7OEJBMER6Qiw2TEFBQztvQkFBSSxXQUFVOztzQ0FDYiw2TEFBQzs0QkFBSSxXQUFVOzs4Q0FDYiw2TEFBQztvQ0FBRyxXQUFVOzhDQUNYLEVBQUU7Ozs7Ozs4Q0FFTCw2TEFBQztvQ0FBRSxXQUFVOzhDQUNWLEVBQUU7Ozs7Ozs7Ozs7Ozt3QkFFRDtzQ0FBb0IsNkxBQUM7NEJBQUksV0FBVTs7OENBQzNCLDZMQUFDO29DQUFJLFdBQVU7O3NEQUNYLDZMQUFDOzRDQUFJLFdBQVU7c0RBQ1gsY0FBQSw2TEFBQyx1TUFBQSxDQUFBLFFBQUs7Z0RBQUMsTUFBTTtnREFBSSxXQUFVOzs7Ozs7Ozs7OztzREFFL0IsNkxBQUM7NENBQUcsV0FBVTtzREFBa0MsRUFBRTs7Ozs7O3NEQUNsRCw2TEFBQzs0Q0FBRSxXQUFVO3NEQUFpQyxFQUFFOzs7Ozs7Ozs7Ozs7OENBR3BELDZMQUFDO29DQUFJLFdBQVU7O3NEQUNYLDZMQUFDOzRDQUFJLFdBQVU7c0RBQ1gsY0FBQSw2TEFBQyw2TUFBQSxDQUFBLFdBQVE7Z0RBQUMsTUFBTTtnREFBSSxXQUFVOzs7Ozs7Ozs7OztzREFFbEMsNkxBQUM7NENBQUcsV0FBVTtzREFBa0MsRUFBRTs7Ozs7O3NEQUNsRCw2TEFBQzs0Q0FBRSxXQUFVO3NEQUFpQyxFQUFFOzs7Ozs7Ozs7Ozs7OENBR3BELDZMQUFDO29DQUFJLFdBQVU7O3NEQUNYLDZMQUFDOzRDQUFJLFdBQVU7c0RBQ1gsY0FBQSw2TEFBQyx5TUFBQSxDQUFBLFNBQU07Z0RBQUMsTUFBTTtnREFBSSxXQUFVOzs7Ozs7Ozs7OztzREFFaEMsNkxBQUM7NENBQUcsV0FBVTtzREFBa0MsRUFBRTs7Ozs7O3NEQUNsRCw2TEFBQzs0Q0FBRSxXQUFVO3NEQUFpQyxFQUFFOzs7Ozs7Ozs7Ozs7OENBR3BELDZMQUFDO29DQUFJLFdBQVU7O3NEQUNYLDZMQUFDOzRDQUFJLFdBQVU7c0RBQ1gsY0FBQSw2TEFBQyw4TkFBQSxDQUFBLGNBQVc7Z0RBQUMsTUFBTTtnREFBSSxXQUFVOzs7Ozs7Ozs7OztzREFFckMsNkxBQUM7NENBQUcsV0FBVTtzREFBa0MsRUFBRTs7Ozs7O3NEQUNsRCw2TEFBQzs0Q0FBRSxXQUFVO3NEQUFpQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RTtHQWhLTTs7UUFDTSx5TUFBQSxDQUFBLGtCQUFlOzs7S0FEckI7dUNBa0tTIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1MzcsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9zaGFyZWQvc3JjL3V0aWxzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvc2hhcmVkL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lbFRvUGFzY2FsIH0gZnJvbSAnLi91dGlsaXR5LXR5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmcgdG8ga2ViYWIgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEga2ViYWJpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9LZWJhYkNhc2UgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG4gIHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyB0byBjYW1lbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gQSBjYW1lbGl6ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCB0b0NhbWVsQ2FzZSA9IDxUIGV4dGVuZHMgc3RyaW5nPihzdHJpbmc6IFQpID0+XG4gIHN0cmluZy5yZXBsYWNlKC9eKFtBLVpdKXxbXFxzLV9dKyhcXHcpL2csIChtYXRjaCwgcDEsIHAyKSA9PlxuICAgIHAyID8gcDIudG9VcHBlckNhc2UoKSA6IHAxLnRvTG93ZXJDYXNlKCksXG4gICk7XG5cbi8qKlxuICogQ29udmVydHMgc3RyaW5nIHRvIHBhc2NhbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gQSBwYXNjYWxpemVkIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgdG9QYXNjYWxDYXNlID0gPFQgZXh0ZW5kcyBzdHJpbmc+KHN0cmluZzogVCk6IENhbWVsVG9QYXNjYWw8VD4gPT4ge1xuICBjb25zdCBjYW1lbENhc2UgPSB0b0NhbWVsQ2FzZShzdHJpbmcpO1xuXG4gIHJldHVybiAoY2FtZWxDYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxDYXNlLnNsaWNlKDEpKSBhcyBDYW1lbFRvUGFzY2FsPFQ+O1xufTtcblxuLyoqXG4gKiBNZXJnZXMgY2xhc3NlcyBpbnRvIGEgc2luZ2xlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNsYXNzZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIG9mIGNsYXNzZXNcbiAqL1xuZXhwb3J0IGNvbnN0IG1lcmdlQ2xhc3NlcyA9IDxDbGFzc1R5cGUgPSBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPiguLi5jbGFzc2VzOiBDbGFzc1R5cGVbXSkgPT5cbiAgY2xhc3Nlc1xuICAgIC5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBCb29sZWFuKGNsYXNzTmFtZSkgJiZcbiAgICAgICAgKGNsYXNzTmFtZSBhcyBzdHJpbmcpLnRyaW0oKSAhPT0gJycgJiZcbiAgICAgICAgYXJyYXkuaW5kZXhPZihjbGFzc05hbWUpID09PSBpbmRleFxuICAgICAgKTtcbiAgICB9KVxuICAgIC5qb2luKCcgJylcbiAgICAudHJpbSgpO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29tcG9uZW50IGhhcyBhbiBhY2Nlc3NpYmlsaXR5IHByb3BcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIGFuIGFjY2Vzc2liaWxpdHkgcHJvcFxuICovXG5leHBvcnQgY29uc3QgaGFzQTExeVByb3AgPSAocHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnYXJpYS0nKSB8fCBwcm9wID09PSAncm9sZScgfHwgcHJvcCA9PT0gJ3RpdGxlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBYyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUMxQixHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sT0FBQSxDQUFRLENBQXNCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBRSxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBUS9DLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBYyxDQUFBLENBQUEsQ0FBbUIsTUFBQSxDQUM1QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQXlCLENBQUMsT0FBTyxDQUFJLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FDbEQsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZ0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFTOUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWUsQ0FBbUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWdDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUN2RSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLFlBQVksTUFBTSxDQUFBO0lBRTVCLE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBVSxNQUFBLENBQU8sQ0FBQyxDQUFBLENBQUUsV0FBQSxFQUFnQixHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsS0FBQSxDQUFNLENBQUMsQ0FBQTtBQUMvRCxDQUFBO0FBUWEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsWUFBQSxDQUFlLENBQUEsQ0FBQSxFQUEyQyxDQUFBOztRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQ3JFOztXQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDRyxNQUFBLENBQU8sQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVcsT0FBTyxLQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUVqQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUyxDQUFBLENBQ2hCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFxQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFXLENBQ2pDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBLENBQVMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFFakMsQ0FBQyxDQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FDUixDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFRRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQStCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUN6RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLFFBQVEsS0FBTyxDQUFBO1FBQ3hCLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLENBQUEsQ0FBTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFVLFNBQVMsT0FBUyxDQUFBLENBQUE7WUFDNUQsT0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7SUFDVDtBQUVKLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDU3NiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2RlZmF1bHRBdHRyaWJ1dGVzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9kZWZhdWx0QXR0cmlidXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuICBmaWxsOiAnbm9uZScsXG4gIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gIHN0cm9rZVdpZHRoOiAyLFxuICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxDQUFlLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNiLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sRUFBQSxDQUFBLENBQUE7SUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQTtJQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVMsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDVCxDQUFBLENBQUEsQ0FBQSxDQUFNLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7SUFDTixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBYSxFQUFBLENBQUE7SUFDYixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFlLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNmLGNBQWdCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNsQixDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA2MDEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9JY29uLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9JY29uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJY29uTm9kZSwgTHVjaWRlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgaGFzQTExeVByb3AgfSBmcm9tICdAbHVjaWRlL3NoYXJlZCc7XG5cbmludGVyZmFjZSBJY29uQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBMdWNpZGVQcm9wcyB7XG4gIGljb25Ob2RlOiBJY29uTm9kZTtcbn1cblxuLyoqXG4gKiBMdWNpZGUgaWNvbiBjb21wb25lbnRcbiAqXG4gKiBAY29tcG9uZW50IEljb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuc3Ryb2tlV2lkdGggLSBUaGUgc3Ryb2tlIHdpZHRoIG9mIHRoZSBpY29uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByb3BzLmFic29sdXRlU3Ryb2tlV2lkdGggLSBXaGV0aGVyIHRvIHVzZSBhYnNvbHV0ZSBzdHJva2Ugd2lkdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaWNvblxuICogQHBhcmFtIHtJY29uTm9kZX0gcHJvcHMuY2hpbGRyZW4gLSBUaGUgY2hpbGRyZW4gb2YgdGhlIGljb25cbiAqIEBwYXJhbSB7SWNvbk5vZGV9IHByb3BzLmljb25Ob2RlIC0gVGhlIGljb24gbm9kZSBvZiB0aGUgaWNvblxuICpcbiAqIEByZXR1cm5zIHtGb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50fSBMdWNpZGVJY29uXG4gKi9cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmPFNWR1NWR0VsZW1lbnQsIEljb25Db21wb25lbnRQcm9wcz4oXG4gIChcbiAgICB7XG4gICAgICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICAgICAgc2l6ZSA9IDI0LFxuICAgICAgc3Ryb2tlV2lkdGggPSAyLFxuICAgICAgYWJzb2x1dGVTdHJva2VXaWR0aCxcbiAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uTm9kZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZixcbiAgKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3ZnJyxcbiAgICAgIHtcbiAgICAgICAgcmVmLFxuICAgICAgICAuLi5kZWZhdWx0QXR0cmlidXRlcyxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IGFic29sdXRlU3Ryb2tlV2lkdGggPyAoTnVtYmVyKHN0cm9rZVdpZHRoKSAqIDI0KSAvIE51bWJlcihzaXplKSA6IHN0cm9rZVdpZHRoLFxuICAgICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcygnbHVjaWRlJywgY2xhc3NOYW1lKSxcbiAgICAgICAgLi4uKCFjaGlsZHJlbiAmJiAhaGFzQTExeVByb3AocmVzdCkgJiYgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICAuLi5pY29uTm9kZS5tYXAoKFt0YWcsIGF0dHJzXSkgPT4gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzKSksXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSksXG4gICAgICBdLFxuICAgICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLENBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8scUtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFDWCxRQVdFLENBRUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFaQSxFQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNSLENBQUEsQ0FBQSxDQUFBLENBQU8sR0FBQSxDQUFBLENBQUEsRUFDUCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWMsR0FBQSxDQUFBLEVBQ2QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLEdBQUEsQ0FBQSxDQUFBLEVBQ1osQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0EsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTs2S0FJTCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUNFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBO1FBQ0UsQ0FBQSxDQUFBLENBQUE7UUFDQSwwS0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ0gsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNQLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNSLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQ1IsV0FBQSxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBdUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQUEsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxDQUFBLENBQUEsQ0FBTSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU8sQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQy9FLFNBQUEsQ0FBVyxpTEFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQUFBYSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVUsU0FBUyxDQUFBO1FBQzNDLENBQUksQ0FBQSxDQUFBLENBQUMsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsaUxBQUMsY0FBQSxFQUFZLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBZSxNQUFPO1FBQUEsQ0FBQTtRQUMvRCxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0lBQ0wsQ0FBQSxFQUNBO1dBQ0ssQ0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFJO2dCQUFDLENBQUMsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNO3FMQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQWMsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUMsQ0FBQTs7V0FDdkQsQ0FBTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFXLENBQUEsQ0FBQTtZQUFDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtTQUFBO0tBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDY0NSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2NyZWF0ZUx1Y2lkZUljb24uanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2NyZWF0ZUx1Y2lkZUljb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgdG9LZWJhYkNhc2UsIHRvUGFzY2FsQ2FzZSB9IGZyb20gJ0BsdWNpZGUvc2hhcmVkJztcbmltcG9ydCB7IEljb25Ob2RlLCBMdWNpZGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBMdWNpZGUgaWNvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uTmFtZVxuICogQHBhcmFtIHthcnJheX0gaWNvbk5vZGVcbiAqIEByZXR1cm5zIHtGb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50fSBMdWNpZGVJY29uXG4gKi9cbmNvbnN0IGNyZWF0ZUx1Y2lkZUljb24gPSAoaWNvbk5hbWU6IHN0cmluZywgaWNvbk5vZGU6IEljb25Ob2RlKSA9PiB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGZvcndhcmRSZWY8U1ZHU1ZHRWxlbWVudCwgTHVjaWRlUHJvcHM+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgcmVmLFxuICAgICAgaWNvbk5vZGUsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcyhcbiAgICAgICAgYGx1Y2lkZS0ke3RvS2ViYWJDYXNlKHRvUGFzY2FsQ2FzZShpY29uTmFtZSkpfWAsXG4gICAgICAgIGBsdWNpZGUtJHtpY29uTmFtZX1gLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApLFxuICAgICAgLi4ucHJvcHMsXG4gICAgfSksXG4gICk7XG5cbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gdG9QYXNjYWxDYXNlKGljb25OYW1lKTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTHVjaWRlSWNvbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVdNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQW1CLENBQUEsQ0FBQSxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWtCLFFBQXVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNqRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsbUtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBdUMsUUFBMEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUF6QixDQUFBLENBQUUsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUyxDQUFBLENBQUE7aUxBQ2pGLGdCQUFBLDRKQUFjLFVBQU0sQ0FBQSxDQUFBO1lBQ2xCLENBQUEsQ0FBQSxDQUFBO1lBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVcsa0xBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEVBQ1QsQUFBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBbUMsQ0FBQSxzTEFBbkMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxrTEFBWSxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxDQUFDLEdBQzdDLFFBQVUsRUFBUSxDQUFBLE1BQVIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQ2xCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUVGLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNKLENBQUE7O0lBR08sU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxtTEFBYyxlQUFBLEVBQWEsUUFBUSxDQUFBO0lBRXRDLE9BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDVCxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA2NzgsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9leHRlcm5hbC1saW5rLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy9leHRlcm5hbC1saW5rLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgWydwYXRoJywgeyBkOiAnTTE1IDNoNnY2Jywga2V5OiAnMXE5Znd0JyB9XSxcbiAgWydwYXRoJywgeyBkOiAnTTEwIDE0IDIxIDMnLCBrZXk6ICdncGxoNnInIH1dLFxuICBbJ3BhdGgnLCB7IGQ6ICdNMTggMTN2NmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoNicsIGtleTogJ2E2eHFxcCcgfV0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgRXh0ZXJuYWxMaW5rXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSk5NVFVnTTJnMmRqWWlJQzgrQ2lBZ1BIQmhkR2dnWkQwaVRURXdJREUwSURJeElETWlJQzgrQ2lBZ1BIQmhkR2dnWkQwaVRURTRJREV6ZGpaaE1pQXlJREFnTUNBeExUSWdNa2cxWVRJZ01pQXdJREFnTVMweUxUSldPR0V5SURJZ01DQXdJREVnTWkweWFEWWlJQzgrQ2p3dmMzWm5QZ289KSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9leHRlcm5hbC1saW5rXG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgRXh0ZXJuYWxMaW5rID0gY3JlYXRlTHVjaWRlSWNvbignZXh0ZXJuYWwtbGluaycsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbExpbms7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFhLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUMxQztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFlLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7UUFBQSxDQUFVO0tBQUE7SUFDNUM7UUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUEsQ0FBRTtZQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUE0RCxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBVSxDQUFBO0tBQUE7Q0FDM0Y7QUFhTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxZQUFBLENBQWUsQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFpQixDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDcyNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2dpdGh1Yi5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9zcmMvaWNvbnMvZ2l0aHViLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgW1xuICAgICdwYXRoJyxcbiAgICB7XG4gICAgICBkOiAnTTE1IDIydi00YTQuOCA0LjggMCAwIDAtMS0zLjVjMyAwIDYtMiA2LTUuNS4wOC0xLjI1LS4yNy0yLjQ4LTEtMy41LjI4LTEuMTUuMjgtMi4zNSAwLTMuNSAwIDAtMSAwLTMgMS41LTIuNjQtLjUtNS4zNi0uNS04IDBDNiAyIDUgMiA1IDJjLS4zIDEuMTUtLjMgMi4zNSAwIDMuNUE1LjQwMyA1LjQwMyAwIDAgMCA0IDljMCAzLjUgMyA1LjUgNiA1LjUtLjM5LjQ5LS42OCAxLjA1LS44NSAxLjY1LS4xNy42LS4yMiAxLjIzLS4xNSAxLjg1djQnLFxuICAgICAga2V5OiAndG9uZWYnLFxuICAgIH0sXG4gIF0sXG4gIFsncGF0aCcsIHsgZDogJ005IDE4Yy00LjUxIDItNS0yLTctMicsIGtleTogJzljb21zbicgfV0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgR2l0aHViXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSk5NVFVnTWpKMkxUUmhOQzQ0SURRdU9DQXdJREFnTUMweExUTXVOV016SURBZ05pMHlJRFl0TlM0MUxqQTRMVEV1TWpVdExqSTNMVEl1TkRndE1TMHpMalV1TWpndE1TNHhOUzR5T0MweUxqTTFJREF0TXk0MUlEQWdNQzB4SURBdE15QXhMalV0TWk0Mk5DMHVOUzAxTGpNMkxTNDFMVGdnTUVNMklESWdOU0F5SURVZ01tTXRMak1nTVM0eE5TMHVNeUF5TGpNMUlEQWdNeTQxUVRVdU5EQXpJRFV1TkRBeklEQWdNQ0F3SURRZ09XTXdJRE11TlNBeklEVXVOU0EySURVdU5TMHVNemt1TkRrdExqWTRJREV1TURVdExqZzFJREV1TmpVdExqRTNMall0TGpJeUlERXVNak10TGpFMUlERXVPRFYyTkNJZ0x6NEtJQ0E4Y0dGMGFDQmtQU0pOT1NBeE9HTXROQzQxTVNBeUxUVXRNaTAzTFRJaUlDOCtDand2YzNablBnbz0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL2dpdGh1YlxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqIEBkZXByZWNhdGVkIEJyYW5kIGljb25zIGhhdmUgYmVlbiBkZXByZWNhdGVkIGFuZCBhcmUgZHVlIHRvIGJlIHJlbW92ZWQsIHBsZWFzZSByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vbHVjaWRlLWljb25zL2x1Y2lkZS9pc3N1ZXMvNjcwLiBXZSByZWNvbW1lbmQgdXNpbmcgaHR0cHM6Ly9zaW1wbGVpY29ucy5vcmcvP3E9Z2l0aHViIGluc3RlYWQuIFRoaXMgaWNvbiB3aWxsIGJlIHJlbW92ZWQgaW4gdjEuMFxuICovXG5jb25zdCBHaXRodWIgPSBjcmVhdGVMdWNpZGVJY29uKCdnaXRodWInLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFDRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUNBO1lBQ0UsQ0FBRyxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFDSCxHQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFBO0tBRVQ7SUFDQTtRQUFDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQSxDQUFFO1lBQUEsRUFBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBeUIsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQVUsQ0FBQTtLQUFBO0NBQ3hEO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFTLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFpQixBQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVUsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3NjksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6MywiZmlsZSI6InR1cmJvcGFjazovLy9bcHJvamVjdF0vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9wbGF5LmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy9wbGF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtbJ3BvbHlnb24nLCB7IHBvaW50czogJzYgMyAyMCAxMiA2IDIxIDYgMycsIGtleTogJzFvYThoYicgfV1dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgUGxheVxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0c5c2VXZHZiaUJ3YjJsdWRITTlJallnTXlBeU1DQXhNaUEySURJeElEWWdNeUlnTHo0S1BDOXpkbWMrQ2c9PSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvcGxheVxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IFBsYXkgPSBjcmVhdGVMdWNpZGVJY29uKCdwbGF5JywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUF1QjtJQUFDO1FBQUMsU0FBVyxDQUFBO1FBQUEsQ0FBQTtZQUFFLFFBQVEsb0JBQXNCLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTO1FBQUEsQ0FBQztLQUFDO0NBQUE7QUFhM0YsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFPLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBUSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDgwNCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3VzZXJzLmpzIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L3NyYy9pY29ucy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFsncGF0aCcsIHsgZDogJ00xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDZhNCA0IDAgMCAwLTQgNHYyJywga2V5OiAnMXl5aXRxJyB9XSxcbiAgWydwYXRoJywgeyBkOiAnTTE2IDMuMTI4YTQgNCAwIDAgMSAwIDcuNzQ0Jywga2V5OiAnMTZncjhqJyB9XSxcbiAgWydwYXRoJywgeyBkOiAnTTIyIDIxdi0yYTQgNCAwIDAgMC0zLTMuODcnLCBrZXk6ICdrc2hlZ2QnIH1dLFxuICBbJ2NpcmNsZScsIHsgY3g6ICc5JywgY3k6ICc3JywgcjogJzQnLCBrZXk6ICdudWZrOCcgfV0sXG5dO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQG5hbWUgVXNlcnNcbiAqIEBkZXNjcmlwdGlvbiBMdWNpZGUgU1ZHIGljb24gY29tcG9uZW50LCByZW5kZXJzIFNWRyBFbGVtZW50IHdpdGggY2hpbGRyZW4uXG4gKlxuICogQHByZXZpZXcgIVtpbWddKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGRwWkhSb1BTSXlOQ0lLSUNCb1pXbG5hSFE5SWpJMElnb2dJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lLSUNCbWFXeHNQU0p1YjI1bElnb2dJSE4wY205clpUMGlJekF3TUNJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObVptWTdJR0p2Y21SbGNpMXlZV1JwZFhNNklESndlQ0lLSUNCemRISnZhMlV0ZDJsa2RHZzlJaklpQ2lBZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJZ29nSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlDajRLSUNBOGNHRjBhQ0JrUFNKTk1UWWdNakYyTFRKaE5DQTBJREFnTUNBd0xUUXRORWcyWVRRZ05DQXdJREFnTUMwMElEUjJNaUlnTHo0S0lDQThjR0YwYUNCa1BTSk5NVFlnTXk0eE1qaGhOQ0EwSURBZ01DQXhJREFnTnk0M05EUWlJQzgrQ2lBZ1BIQmhkR2dnWkQwaVRUSXlJREl4ZGkweVlUUWdOQ0F3SURBZ01DMHpMVE11T0RjaUlDOCtDaUFnUEdOcGNtTnNaU0JqZUQwaU9TSWdZM2s5SWpjaUlISTlJalFpSUM4K0Nqd3ZjM1puUGdvPSkgLSBodHRwczovL2x1Y2lkZS5kZXYvaWNvbnMvdXNlcnNcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKlxuICovXG5jb25zdCBVc2VycyA9IGNyZWF0ZUx1Y2lkZUljb24oJ3VzZXJzJywgX19pY29uTm9kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR08sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sVUFBdUIsQ0FBQSxDQUFBLENBQUE7SUFDbEM7UUFBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBO1FBQUEsQ0FBQTtZQUFFLEdBQUcsQ0FBNkMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUMxRTtRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUErQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7UUFBQSxDQUFVO0tBQUE7SUFDNUQ7UUFBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFBO1FBQUEsQ0FBQTtZQUFFLEdBQUcsQ0FBOEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUMzRDtRQUFDLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUE7WUFBRSxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBSztZQUFBLENBQUEsQ0FBSSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBSyxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFLLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBO1FBQVMsQ0FBQTtLQUFBO0NBQ3ZEO0FBYU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFRLENBQUEsMktBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxBQUFpQixDQUFqQixDQUFBLEFBQWlCLENBQWpCLEFBQWlCLENBQWpCLEFBQWlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFTLENBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODYyLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsImZpbGUiOiJ0dXJib3BhY2s6Ly8vW3Byb2plY3RdL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvY2FsZW5kYXIuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL2NhbGVuZGFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24nO1xuaW1wb3J0IHsgSWNvbk5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBfX2ljb25Ob2RlOiBJY29uTm9kZSA9IFtcbiAgWydwYXRoJywgeyBkOiAnTTggMnY0Jywga2V5OiAnMWNtcHltJyB9XSxcbiAgWydwYXRoJywgeyBkOiAnTTE2IDJ2NCcsIGtleTogJzRtODF2aycgfV0sXG4gIFsncmVjdCcsIHsgd2lkdGg6ICcxOCcsIGhlaWdodDogJzE4JywgeDogJzMnLCB5OiAnNCcsIHJ4OiAnMicsIGtleTogJzFob3BjeScgfV0sXG4gIFsncGF0aCcsIHsgZDogJ00zIDEwaDE4Jywga2V5OiAnOHRvZW44JyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBDYWxlbmRhclxuICogQGRlc2NyaXB0aW9uIEx1Y2lkZSBTVkcgaWNvbiBjb21wb25lbnQsIHJlbmRlcnMgU1ZHIEVsZW1lbnQgd2l0aCBjaGlsZHJlbi5cbiAqXG4gKiBAcHJldmlldyAhW2ltZ10oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lIZHBaSFJvUFNJeU5DSUtJQ0JvWldsbmFIUTlJakkwSWdvZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSUtJQ0JtYVd4c1BTSnViMjVsSWdvZ0lITjBjbTlyWlQwaUl6QXdNQ0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1ZN0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VDSUtJQ0J6ZEhKdmEyVXRkMmxrZEdnOUlqSWlDaUFnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lnb2dJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUNqNEtJQ0E4Y0dGMGFDQmtQU0pOT0NBeWRqUWlJQzgrQ2lBZ1BIQmhkR2dnWkQwaVRURTJJREoyTkNJZ0x6NEtJQ0E4Y21WamRDQjNhV1IwYUQwaU1UZ2lJR2hsYVdkb2REMGlNVGdpSUhnOUlqTWlJSGs5SWpRaUlISjRQU0l5SWlBdlBnb2dJRHh3WVhSb0lHUTlJazB6SURFd2FERTRJaUF2UGdvOEwzTjJaejRLKSAtIGh0dHBzOi8vbHVjaWRlLmRldi9pY29ucy9jYWxlbmRhclxuICogQHNlZSBodHRwczovL2x1Y2lkZS5kZXYvZ3VpZGUvcGFja2FnZXMvbHVjaWRlLXJlYWN0IC0gRG9jdW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEx1Y2lkZSBpY29ucyBwcm9wcyBhbmQgYW55IHZhbGlkIFNWRyBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gSlNYIEVsZW1lbnRcbiAqXG4gKi9cbmNvbnN0IENhbGVuZGFyID0gY3JlYXRlTHVjaWRlSWNvbignY2FsZW5kYXInLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUN2QztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFXLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1lBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLO1FBQUEsQ0FBVTtLQUFBO0lBQ3hDO1FBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUTtRQUFBLENBQUE7WUFBRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPO1lBQU0sQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFNLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7WUFBSyxHQUFHLENBQUssQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUssQ0FBQSxDQUFBLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUs7UUFBQSxDQUFVO0tBQUE7SUFDOUU7UUFBQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1FBQUEsQ0FBRTtZQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFVLENBQUE7S0FBQTtDQUMzQztBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBVyxDQUFBLDJLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQUFBaUIsQ0FBakIsQ0FBQSxBQUFpQixDQUFqQixBQUFpQixDQUFqQixBQUFpQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBWSxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDkyMiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYm9wYWNrOi8vL1twcm9qZWN0XS9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2NpcmNsZS1jaGVjay1iaWcuanMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3Qvc3JjL2ljb25zL2NpcmNsZS1jaGVjay1iaWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbic7XG5pbXBvcnQgeyBJY29uTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IF9faWNvbk5vZGU6IEljb25Ob2RlID0gW1xuICBbJ3BhdGgnLCB7IGQ6ICdNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1Jywga2V5OiAneXBzM2N0JyB9XSxcbiAgWydwYXRoJywgeyBkOiAnbTkgMTEgMyAzTDIyIDQnLCBrZXk6ICcxcGZsemwnIH1dLFxuXTtcblxuLyoqXG4gKiBAY29tcG9uZW50IEBuYW1lIENpcmNsZUNoZWNrQmlnXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThjR0YwYUNCa1BTSk5NakV1T0RBeElERXdRVEV3SURFd0lEQWdNU0F4SURFM0lETXVNek0xSWlBdlBnb2dJRHh3WVhSb0lHUTlJbTA1SURFeElETWdNMHd5TWlBMElpQXZQZ284TDNOMlp6NEspIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL2NpcmNsZS1jaGVjay1iaWdcbiAqIEBzZWUgaHR0cHM6Ly9sdWNpZGUuZGV2L2d1aWRlL3BhY2thZ2VzL2x1Y2lkZS1yZWFjdCAtIERvY3VtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBMdWNpZGUgaWNvbnMgcHJvcHMgYW5kIGFueSB2YWxpZCBTVkcgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IEpTWCBFbGVtZW50XG4gKlxuICovXG5jb25zdCBDaXJjbGVDaGVja0JpZyA9IGNyZWF0ZUx1Y2lkZUljb24oJ2NpcmNsZS1jaGVjay1iaWcnLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlQ2hlY2tCaWc7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxVQUF1QixDQUFBLENBQUEsQ0FBQTtJQUNsQztRQUFDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUE7UUFBQSxDQUFBO1lBQUUsR0FBRyxDQUFtQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSztRQUFBLENBQVU7S0FBQTtJQUNoRTtRQUFDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7UUFBQSxDQUFFO1lBQUEsRUFBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQWtCLENBQUE7WUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtRQUFVLENBQUE7S0FBQTtDQUNqRDtBQWFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGNBQUEsQ0FBaUIsQ0FBQSwyS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEFBQWlCLENBQWpCLENBQUEsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBakIsQUFBaUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFvQixDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDk2NCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0LWludGwvZGlzdC9lc20vZGV2ZWxvcG1lbnQvcmVhY3QtY2xpZW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1hdHRlciBhcyB1c2VGb3JtYXR0ZXIkMSwgdXNlVHJhbnNsYXRpb25zIGFzIHVzZVRyYW5zbGF0aW9ucyQxIH0gZnJvbSAndXNlLWludGwnO1xuZXhwb3J0ICogZnJvbSAndXNlLWludGwnO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gZW50cnkgZmlsZSB3aGVuIG5vbi0ncmVhY3Qtc2VydmVyJ1xuICogZW52aXJvbm1lbnRzIGltcG9ydCBmcm9tICduZXh0LWludGwnLlxuICpcbiAqIE1haW50YWluZXIgbm90ZXM6XG4gKiAtIE1ha2Ugc3VyZSB0aGlzIG1pcnJvcnMgdGhlIEFQSSBmcm9tICdyZWFjdC1zZXJ2ZXInLlxuICogLSBNYWtlIHN1cmUgZXZlcnl0aGluZyBleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlIGlzXG4gKiAgIHN1cHBvcnRlZCBpbiBhbGwgTmV4dC5qcyB2ZXJzaW9ucyB0aGF0IGFyZSBzdXBwb3J0ZWQuXG4gKi9cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1mdW5jdGlvbi10eXBlXG5mdW5jdGlvbiBjYWxsSG9vayhuYW1lLCBob29rKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaG9vayguLi5hcmdzKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNhbGwgXFxgJHtuYW1lfVxcYCBiZWNhdXNlIHRoZSBjb250ZXh0IGZyb20gXFxgTmV4dEludGxDbGllbnRQcm92aWRlclxcYCB3YXMgbm90IGZvdW5kLlxuXG5UaGlzIGNhbiBoYXBwZW4gYmVjYXVzZTpcbjEpIFlvdSBpbnRlbmRlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQgYXMgYSBTZXJ2ZXIgQ29tcG9uZW50LCB0aGUgcmVuZGVyXG4gICBmYWlsZWQsIGFuZCB0aGVyZWZvcmUgUmVhY3QgYXR0ZW1wdGVkIHRvIHJlbmRlciB0aGUgY29tcG9uZW50IG9uIHRoZSBjbGllbnRcbiAgIGluc3RlYWQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIGNoZWNrIHRoZSBjb25zb2xlIGZvciBzZXJ2ZXIgZXJyb3JzLlxuMikgWW91IGludGVuZGVkIHRvIHJlbmRlciB0aGlzIGNvbXBvbmVudCBvbiB0aGUgY2xpZW50IHNpZGUsIGJ1dCBubyBjb250ZXh0IHdhcyBmb3VuZC5cbiAgIExlYXJuIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBoZXJlOiBodHRwczovL25leHQtaW50bC5kZXYvZG9jcy9lbnZpcm9ubWVudHMvc2VydmVyLWNsaWVudC1jb21wb25lbnRzI21pc3NpbmctY29udGV4dGAgKTtcbiAgICB9XG4gIH07XG59XG5jb25zdCB1c2VUcmFuc2xhdGlvbnMgPSBjYWxsSG9vaygndXNlVHJhbnNsYXRpb25zJywgdXNlVHJhbnNsYXRpb25zJDEpO1xuY29uc3QgdXNlRm9ybWF0dGVyID0gY2FsbEhvb2soJ3VzZUZvcm1hdHRlcicsIHVzZUZvcm1hdHRlciQxKTtcblxuZXhwb3J0IHsgdXNlRm9ybWF0dGVyLCB1c2VUcmFuc2xhdGlvbnMgfTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQUdBOzs7Ozs7OztDQVFDLEdBR0Qsc0VBQXNFO0FBQ3RFLFNBQVMsU0FBUyxJQUFJLEVBQUUsSUFBSTtJQUMxQixPQUFPO3lDQUFJO1lBQUE7O1FBQ1QsSUFBSTtZQUNGLE9BQU8sUUFBUTtRQUNqQixFQUFFLFVBQU07WUFDTixNQUFNLElBQUksTUFBTSxBQUFDLG1CQUF3QixPQUFMLE1BQUs7UUFRM0M7SUFDRjtBQUNGO0FBQ0EsTUFBTSxrQkFBa0IsU0FBUyxtQkFBbUIscUtBQUEsQ0FBQSxrQkFBaUI7QUFDckUsTUFBTSxlQUFlLFNBQVMsZ0JBQWdCLHFLQUFBLENBQUEsZUFBYyIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19XQp9
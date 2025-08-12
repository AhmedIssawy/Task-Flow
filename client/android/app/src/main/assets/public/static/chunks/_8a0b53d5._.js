(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/mobile.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPlatformClasses": ()=>getPlatformClasses,
    "isMobilePlatform": ()=>isMobilePlatform,
    "useMobilePlatform": ()=>useMobilePlatform
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
const isMobilePlatform = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
};
const getPlatformClasses = function(mobileClasses) {
    let webClasses = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return isMobilePlatform() ? mobileClasses : webClasses;
};
const useMobilePlatform = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return isMobilePlatform();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/landing.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mobile.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
"use client";
;
;
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Header.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Header.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Header;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/HeroSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/HeroSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = HeroSection;
const Features = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Features.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Features.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Features;
const Benefits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Benefits.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Benefits.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = Benefits;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Analytics.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Analytics.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = Analytics;
const OurWork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Ourwork.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Ourwork.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c5 = OurWork;
const Testimonials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c6 = Testimonials;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/landing/Footer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Footer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c7 = Footer;
const LandingPage = ()=>{
    // Platform-specific spacing for main content
    const mainClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformClasses"])('flex-grow mobile-safe-content', 'flex-grow mt-20' // Web: uses fixed margin-top
    );
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/src/app/landing.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: mainClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Features, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Benefits, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Analytics, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OurWork, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/landing.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/src/app/landing.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/landing.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = LandingPage;
const __TURBOPACK__default__export__ = LandingPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "HeroSection");
__turbopack_context__.k.register(_c2, "Features");
__turbopack_context__.k.register(_c3, "Benefits");
__turbopack_context__.k.register(_c4, "Analytics");
__turbopack_context__.k.register(_c5, "OurWork");
__turbopack_context__.k.register(_c6, "Testimonials");
__turbopack_context__.k.register(_c7, "Footer");
__turbopack_context__.k.register(_c8, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvbW9iaWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcGFjaXRvciB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGFwcCBpcyBydW5uaW5nIG9uIGEgbmF0aXZlIG1vYmlsZSBwbGF0Zm9ybVxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIHJ1bm5pbmcgb24gQW5kcm9pZC9pT1MsIGZhbHNlIGlmIHJ1bm5pbmcgb24gd2ViXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNNb2JpbGVQbGF0Zm9ybSA9ICgpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgcGxhdGZvcm0tc3BlY2lmaWMgY2xhc3MgbmFtZXMgZm9yIG1vYmlsZSBvcHRpbWl6YXRpb25cclxuICogQHBhcmFtIG1vYmlsZUNsYXNzZXMgLSBDbGFzc2VzIHRvIGFwcGx5IG9uIG1vYmlsZVxyXG4gKiBAcGFyYW0gd2ViQ2xhc3NlcyAtIENsYXNzZXMgdG8gYXBwbHkgb24gd2ViIChvcHRpb25hbClcclxuICogQHJldHVybnMgQ29tYmluZWQgY2xhc3Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UGxhdGZvcm1DbGFzc2VzID0gKFxyXG4gIG1vYmlsZUNsYXNzZXM6IHN0cmluZyxcclxuICB3ZWJDbGFzc2VzOiBzdHJpbmcgPSAnJ1xyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyaW5nIC0gcmV0dXJuIGJvdGggY2xhc3Nlc1xyXG4gICAgcmV0dXJuIGAke3dlYkNsYXNzZXN9ICR7bW9iaWxlQ2xhc3Nlc31gO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNNb2JpbGVQbGF0Zm9ybSgpID8gbW9iaWxlQ2xhc3NlcyA6IHdlYkNsYXNzZXM7XHJcbn07XHJcblxyXG4vKipcclxuICogSG9vayB0byBnZXQgbW9iaWxlIHBsYXRmb3JtIHN0YXR1cyAoY2xpZW50LXNpZGUgb25seSlcclxuICogQHJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHJ1bm5pbmcgb24gbW9iaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlUGxhdGZvcm0gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7IC8vIERlZmF1bHQgdG8gZmFsc2UgZHVyaW5nIFNTUlxyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNNb2JpbGVQbGF0Zm9ybSgpO1xyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU1PLE1BQU0sbUJBQW1CO0lBQzlCLE9BQU8sdUpBQUEsQ0FBQSxZQUFTLENBQUMsZ0JBQWdCO0FBQ25DO0FBUU8sTUFBTSxxQkFBcUIsU0FDaEM7UUFDQSw4RUFBcUI7SUFFckI7O0lBS0EsT0FBTyxxQkFBcUIsZ0JBQWdCO0FBQzlDO0FBTU8sTUFBTSxvQkFBb0I7SUFDL0I7O0lBSUEsT0FBTztBQUNUIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9hcHAvbGFuZGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgZ2V0UGxhdGZvcm1DbGFzc2VzIH0gZnJvbSBcIkAvbGliL21vYmlsZVwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvbGFuZGluZy9IZWFkZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgSGVyb1NlY3Rpb24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uXCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IEZlYXR1cmVzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBCZW5lZml0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL2xhbmRpbmcvQmVuZWZpdHNcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgQW5hbHl0aWNzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvbGFuZGluZy9BbmFseXRpY3NcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgT3VyV29yayA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL2xhbmRpbmcvT3Vyd29ya1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBUZXN0aW1vbmlhbHMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBGb290ZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlclwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XHJcbiAgLy8gUGxhdGZvcm0tc3BlY2lmaWMgc3BhY2luZyBmb3IgbWFpbiBjb250ZW50XHJcbiAgY29uc3QgbWFpbkNsYXNzZXMgPSBnZXRQbGF0Zm9ybUNsYXNzZXMoXHJcbiAgICAnZmxleC1ncm93IG1vYmlsZS1zYWZlLWNvbnRlbnQnLCAvLyBNb2JpbGU6IHVzZXMgc2FmZSBhcmVhIHNwYWNpbmdcclxuICAgICdmbGV4LWdyb3cgbXQtMjAnIC8vIFdlYjogdXNlcyBmaXhlZCBtYXJnaW4tdG9wXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e21haW5DbGFzc2VzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPEhlcm9TZWN0aW9uIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZXMgLz5cclxuICAgICAgICAgIDxCZW5lZml0cyAvPlxyXG4gICAgICAgICAgPEFuYWx5dGljcyAvPlxyXG4gICAgICAgICAgPE91cldvcmsgLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbHMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRkE7Ozs7QUFJQSxNQUFNLFNBQVMsQ0FBQSxHQUFBLGtLQUFBLENBQUEsVUFBTyxBQUFELEVBQUU7Ozs7OztJQUErQyxLQUFLOztLQUFyRTtBQUNOLE1BQU0sY0FBYyxDQUFBLEdBQUEsa0tBQUEsQ0FBQSxVQUFPLEFBQUQsRUFBRTs7Ozs7O0lBQW9ELEtBQUs7O01BQS9FO0FBQ04sTUFBTSxXQUFXLENBQUEsR0FBQSxrS0FBQSxDQUFBLFVBQU8sQUFBRCxFQUFFOzs7Ozs7SUFBaUQsS0FBSzs7TUFBekU7QUFDTixNQUFNLFdBQVcsQ0FBQSxHQUFBLGtLQUFBLENBQUEsVUFBTyxBQUFELEVBQUU7Ozs7OztJQUFpRCxLQUFLOztNQUF6RTtBQUNOLE1BQU0sWUFBWSxDQUFBLEdBQUEsa0tBQUEsQ0FBQSxVQUFPLEFBQUQsRUFBRTs7Ozs7O0lBQWtELEtBQUs7O01BQTNFO0FBQ04sTUFBTSxVQUFVLENBQUEsR0FBQSxrS0FBQSxDQUFBLFVBQU8sQUFBRCxFQUFFOzs7Ozs7SUFBZ0QsS0FBSzs7TUFBdkU7QUFDTixNQUFNLGVBQWUsQ0FBQSxHQUFBLGtLQUFBLENBQUEsVUFBTyxBQUFELEVBQUU7Ozs7OztJQUFxRCxLQUFLOztNQUFqRjtBQUNOLE1BQU0sU0FBUyxDQUFBLEdBQUEsa0tBQUEsQ0FBQSxVQUFPLEFBQUQsRUFBRTs7Ozs7O0lBQStDLEtBQUs7O01BQXJFO0FBRU4sTUFBTSxjQUFjO0lBQ2xCLDZDQUE2QztJQUM3QyxNQUFNLGNBQWMsQ0FBQSxHQUFBLHVIQUFBLENBQUEscUJBQWtCLEFBQUQsRUFDbkMsaUNBQ0Esa0JBQWtCLDZCQUE2Qjs7SUFHakQscUJBQ0UsNkxBQUM7UUFBSSxXQUFVOzswQkFDYiw2TEFBQzs7Ozs7MEJBQ0QsNkxBQUM7Z0JBQUssV0FBVzswQkFDZixjQUFBLDZMQUFDO29CQUFJLFdBQVU7O3NDQUNiLDZMQUFDOzs7OztzQ0FDRCw2TEFBQzs7Ozs7c0NBQ0QsNkxBQUM7Ozs7O3NDQUNELDZMQUFDOzs7OztzQ0FDRCw2TEFBQzs7Ozs7c0NBQ0QsNkxBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR0wsNkxBQUM7Ozs7Ozs7Ozs7O0FBR1A7TUF2Qk07dUNBeUJTIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyMTgsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9sYXp5LWR5bmFtaWMvZHluYW1pYy1iYWlsb3V0LXRvLWNzci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYWlsb3V0VG9DU1JFcnJvciB9IGZyb20gJy4vYmFpbG91dC10by1jc3InXG5cbmludGVyZmFjZSBCYWlsb3V0VG9DU1JQcm9wcyB7XG4gIHJlYXNvbjogc3RyaW5nXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRcbn1cblxuLyoqXG4gKiBJZiByZW5kZXJlZCBvbiB0aGUgc2VydmVyLCB0aGlzIGNvbXBvbmVudCB0aHJvd3MgYW4gZXJyb3JcbiAqIHRvIHNpZ25hbCBOZXh0LmpzIHRoYXQgaXQgc2hvdWxkIGJhaWwgb3V0IHRvIGNsaWVudC1zaWRlIHJlbmRlcmluZyBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmFpbG91dFRvQ1NSKHsgcmVhc29uLCBjaGlsZHJlbiB9OiBCYWlsb3V0VG9DU1JQcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgQmFpbG91dFRvQ1NSRXJyb3IocmVhc29uKVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuXG59XG4iXSwibmFtZXMiOlsiQmFpbG91dFRvQ1NSIiwicmVhc29uIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJCYWlsb3V0VG9DU1JFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OytCQWNnQkEsZ0JBQUFBOzs7ZUFBQUE7Ozs4QkFYa0I7QUFXM0IsU0FBU0EsYUFBYSxLQUF1QztJQUF2QyxJQUFBLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFxQixHQUF2QztJQUMzQixJQUFJLE9BQU9DLFdBQVcsYUFBYTtRQUNqQyxNQUFNLE9BQUEsY0FBNkIsQ0FBN0IsSUFBSUMsY0FBQUEsaUJBQWlCLENBQUNILFNBQXRCLHFCQUFBO21CQUFBO3dCQUFBOzBCQUFBO1FBQTRCO0lBQ3BDO0lBRUEsT0FBT0M7QUFDVCIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyNDUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9lbmNvZGUtdXJpLXBhdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVVSSVBhdGgoZmlsZTogc3RyaW5nKSB7XG4gIHJldHVybiBmaWxlXG4gICAgLnNwbGl0KCcvJylcbiAgICAubWFwKChwKSA9PiBlbmNvZGVVUklDb21wb25lbnQocCkpXG4gICAgLmpvaW4oJy8nKVxufVxuIl0sIm5hbWVzIjpbImVuY29kZVVSSVBhdGgiLCJmaWxlIiwic3BsaXQiLCJtYXAiLCJwIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7OytCQUFnQkEsaUJBQUFBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGNBQWNDLElBQVk7SUFDeEMsT0FBT0EsS0FDSkMsS0FBSyxDQUFDLEtBQ05DLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQyxtQkFBbUJELElBQzlCRSxJQUFJLENBQUM7QUFDViIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAyNjMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9sYXp5LWR5bmFtaWMvcHJlbG9hZC1jaHVua3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBwcmVsb2FkIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgeyB3b3JrQXN5bmNTdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2FwcC1yZW5kZXIvd29yay1hc3luYy1zdG9yYWdlLmV4dGVybmFsJ1xuaW1wb3J0IHsgZW5jb2RlVVJJUGF0aCB9IGZyb20gJy4uL2VuY29kZS11cmktcGF0aCdcblxuZXhwb3J0IGZ1bmN0aW9uIFByZWxvYWRDaHVua3Moe1xuICBtb2R1bGVJZHMsXG59OiB7XG4gIG1vZHVsZUlkczogc3RyaW5nW10gfCB1bmRlZmluZWRcbn0pIHtcbiAgLy8gRWFybHkgcmV0dXJuIGluIGNsaWVudCBjb21waWxhdGlvbiBhbmQgb25seSBsb2FkIHJlcXVlc3RTdG9yZSBvbiBzZXJ2ZXIgc2lkZVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgd29ya1N0b3JlID0gd29ya0FzeW5jU3RvcmFnZS5nZXRTdG9yZSgpXG4gIGlmICh3b3JrU3RvcmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBhbGxGaWxlcyA9IFtdXG5cbiAgLy8gU2VhcmNoIHRoZSBjdXJyZW50IGR5bmFtaWMgY2FsbCB1bmlxdWUga2V5IGlkIGluIHJlYWN0IGxvYWRhYmxlIG1hbmlmZXN0LFxuICAvLyBhbmQgZmluZCB0aGUgY29ycmVzcG9uZGluZyBDU1MgZmlsZXMgdG8gcHJlbG9hZFxuICBpZiAod29ya1N0b3JlLnJlYWN0TG9hZGFibGVNYW5pZmVzdCAmJiBtb2R1bGVJZHMpIHtcbiAgICBjb25zdCBtYW5pZmVzdCA9IHdvcmtTdG9yZS5yZWFjdExvYWRhYmxlTWFuaWZlc3RcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBtb2R1bGVJZHMpIHtcbiAgICAgIGlmICghbWFuaWZlc3Rba2V5XSkgY29udGludWVcbiAgICAgIGNvbnN0IGNodW5rcyA9IG1hbmlmZXN0W2tleV0uZmlsZXNcbiAgICAgIGFsbEZpbGVzLnB1c2goLi4uY2h1bmtzKVxuICAgIH1cbiAgfVxuXG4gIGlmIChhbGxGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZHBsSWQgPSBwcm9jZXNzLmVudi5ORVhUX0RFUExPWU1FTlRfSURcbiAgICA/IGA/ZHBsPSR7cHJvY2Vzcy5lbnYuTkVYVF9ERVBMT1lNRU5UX0lEfWBcbiAgICA6ICcnXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2FsbEZpbGVzLm1hcCgoY2h1bmspID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGAke3dvcmtTdG9yZS5hc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUklQYXRoKGNodW5rKX0ke2RwbElkfWBcbiAgICAgICAgY29uc3QgaXNDc3MgPSBjaHVuay5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgIC8vIElmIGl0J3Mgc3R5bGVzaGVldCB3ZSB1c2UgYHByZWNlZGVuY2VgIG8gaGVscCBob2lzdCB3aXRoIFJlYWN0IEZsb2F0LlxuICAgICAgICAvLyBGb3Igc3R5bGVzaGVldHMgd2UgYWN0dWFsbHkgbmVlZCB0byByZW5kZXIgdGhlIENTUyBiZWNhdXNlIG5vdGhpbmcgZWxzZSBpcyBnb2luZyB0byBkbyBpdCBzbyBpdCBuZWVkcyB0byBiZSBwYXJ0IG9mIHRoZSBjb21wb25lbnQgdHJlZS5cbiAgICAgICAgLy8gVGhlIGBwcmVsb2FkYCBmb3Igc3R5bGVzaGVldCBpcyBub3Qgb3B0aW9uYWwuXG4gICAgICAgIGlmIChpc0Nzcykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBrZXk9e2NodW5rfVxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHByZWNlZGVuY2U9XCJkeW5hbWljXCJcbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgaXQncyBzY3JpcHQgd2UgdXNlIFJlYWN0RE9NLnByZWxvYWQgdG8gcHJlbG9hZCB0aGUgcmVzb3VyY2VzXG4gICAgICAgICAgcHJlbG9hZChocmVmLCB7XG4gICAgICAgICAgICBhczogJ3NjcmlwdCcsXG4gICAgICAgICAgICBmZXRjaFByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUHJlbG9hZENodW5rcyIsIm1vZHVsZUlkcyIsIndpbmRvdyIsIndvcmtTdG9yZSIsIndvcmtBc3luY1N0b3JhZ2UiLCJnZXRTdG9yZSIsInVuZGVmaW5lZCIsImFsbEZpbGVzIiwicmVhY3RMb2FkYWJsZU1hbmlmZXN0IiwibWFuaWZlc3QiLCJrZXkiLCJjaHVua3MiLCJmaWxlcyIsInB1c2giLCJsZW5ndGgiLCJkcGxJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0RFUExPWU1FTlRfSUQiLCJtYXAiLCJjaHVuayIsImhyZWYiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSVBhdGgiLCJpc0NzcyIsImVuZHNXaXRoIiwibGluayIsInByZWNlZGVuY2UiLCJyZWwiLCJhcyIsInByZWxvYWQiLCJmZXRjaFByaW9yaXR5Il0sIm1hcHBpbmdzIjoiQUF1Q2dCZ0IsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7QUF2QzlDOzs7OzsrQkFPZ0JsQixpQkFBQUE7OztlQUFBQTs7OzswQkFMUTswQ0FFUzsrQkFDSDtBQUV2QixTQUFTQSxjQUFjLEtBSTdCO0lBSjZCLElBQUEsRUFDNUJDLFNBQVMsRUFHVixHQUo2QjtJQUs1QiwrRUFBK0U7SUFDL0UsSUFBSSxPQUFPQyxXQUFXLGFBQWE7UUFDakMsT0FBTztJQUNUO0lBRUEsTUFBTUMsWUFBWUMsMEJBQUFBLGdCQUFnQixDQUFDQyxRQUFRO0lBQzNDLElBQUlGLGNBQWNHLFdBQVc7UUFDM0IsT0FBTztJQUNUO0lBRUEsTUFBTUMsV0FBVyxFQUFFO0lBRW5CLDRFQUE0RTtJQUM1RSxrREFBa0Q7SUFDbEQsSUFBSUosVUFBVUsscUJBQXFCLElBQUlQLFdBQVc7UUFDaEQsTUFBTVEsV0FBV04sVUFBVUsscUJBQXFCO1FBQ2hELEtBQUssTUFBTUUsT0FBT1QsVUFBVztZQUMzQixJQUFJLENBQUNRLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1lBQ3BCLE1BQU1DLFNBQVNGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLO1lBQ2xDTCxTQUFTTSxJQUFJLElBQUlGO1FBQ25CO0lBQ0Y7SUFFQSxJQUFJSixTQUFTTyxNQUFNLEtBQUssR0FBRztRQUN6QixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyw4Q0FDRCxVQUFPQyxRQUFRQyxHQUFHLENBQUNDLElBQ3BCLGNBRHNDO0lBRzFDLE9BQUEsV0FBQSxHQUNFLENBQUEsR0FBQSxZQUFBLEdBQUEsRUFBQSxZQUFBLFFBQUEsRUFBQTtrQkFDR1gsU0FBU1ksR0FBRyxDQUFDLENBQUNDO1lBQ2IsTUFBTUMsT0FBVWxCLFVBQVVtQixXQUFXLEdBQUMsWUFBU0MsQ0FBQUEsR0FBQUEsZUFBQUEsYUFBYSxFQUFDSCxTQUFTTDtZQUN0RSxNQUFNUyxRQUFRSixNQUFNSyxRQUFRLENBQUM7WUFDN0Isd0VBQXdFO1lBQ3hFLDBJQUEwSTtZQUMxSSxnREFBZ0Q7WUFDaEQsSUFBSUQsT0FBTztnQkFDVCxPQUFBLFdBQUEsR0FDRSxDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNFLFFBQUFBO29CQUVDLGFBQWE7b0JBQ2JDLFlBQVc7b0JBQ1hOLE1BQU1BO29CQUNOTyxLQUFJO29CQUNKQyxJQUFHO21CQUxFVDtZQVFYLE9BQU87Z0JBQ0wsa0VBQWtFO2dCQUNsRVUsQ0FBQUEsR0FBQUEsVUFBQUEsT0FBTyxFQUFDVCxNQUFNO29CQUNaUSxJQUFJO29CQUNKRSxlQUFlO2dCQUNqQjtnQkFDQSxPQUFPO1lBQ1Q7UUFDRjs7QUFHTiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzMzYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9sYXp5LWR5bmFtaWMvbG9hZGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1c3BlbnNlLCBGcmFnbWVudCwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFpbG91dFRvQ1NSIH0gZnJvbSAnLi9keW5hbWljLWJhaWxvdXQtdG8tY3NyJ1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgUHJlbG9hZENodW5rcyB9IGZyb20gJy4vcHJlbG9hZC1jaHVua3MnXG5cbi8vIE5vcm1hbGl6ZSBsb2FkZXIgdG8gcmV0dXJuIHRoZSBtb2R1bGUgYXMgZm9ybSB7IGRlZmF1bHQ6IENvbXBvbmVudCB9IGZvciBgUmVhY3QubGF6eWAuXG4vLyBBbHNvIGZvciBiYWNrd2FyZCBjb21wYXRpYmxlIHNpbmNlIG5leHQvZHluYW1pYyBhbGxvd3MgdG8gcmVzb2x2ZSBhIGNvbXBvbmVudCBkaXJlY3RseSB3aXRoIGxvYWRlclxuLy8gQ2xpZW50IGNvbXBvbmVudCByZWZlcmVuY2UgcHJveHkgbmVlZCB0byBiZSBjb252ZXJ0ZWQgdG8gYSBtb2R1bGUuXG5mdW5jdGlvbiBjb252ZXJ0TW9kdWxlPFA+KFxuICBtb2Q6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCBDb21wb25lbnRNb2R1bGU8UD4gfCB1bmRlZmluZWRcbik6IHtcbiAgZGVmYXVsdDogUmVhY3QuQ29tcG9uZW50VHlwZTxQPlxufSB7XG4gIC8vIENoZWNrIFwiZGVmYXVsdFwiIHByb3AgYmVmb3JlIGFjY2Vzc2luZyBpdCwgYXMgaXQgY291bGQgYmUgY2xpZW50IHJlZmVyZW5jZSBwcm94eSB0aGF0IGNvdWxkIGJyZWFrIGl0IHJlZmVyZW5jZS5cbiAgLy8gQ2FzZXM6XG4gIC8vIG1vZDogeyBkZWZhdWx0OiBDb21wb25lbnQgfVxuICAvLyBtb2Q6IENvbXBvbmVudFxuICAvLyBtb2Q6IHsgZGVmYXVsdDogcHJveHkoQ29tcG9uZW50KSB9XG4gIC8vIG1vZDogcHJveHkoQ29tcG9uZW50KVxuICBjb25zdCBoYXNEZWZhdWx0ID0gbW9kICYmICdkZWZhdWx0JyBpbiBtb2RcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0OiBoYXNEZWZhdWx0XG4gICAgICA/IChtb2QgYXMgQ29tcG9uZW50TW9kdWxlPFA+KS5kZWZhdWx0XG4gICAgICA6IChtb2QgYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxQPiksXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGxvYWRlcjogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNvbnZlcnRNb2R1bGUoKCkgPT4gbnVsbCkpLFxuICBsb2FkaW5nOiBudWxsLFxuICBzc3I6IHRydWUsXG59XG5cbmludGVyZmFjZSBMb2FkYWJsZU9wdGlvbnMge1xuICBsb2FkZXI/OiAoKSA9PiBQcm9taXNlPFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PiB8IENvbXBvbmVudE1vZHVsZTxhbnk+PlxuICBsb2FkaW5nPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+IHwgbnVsbFxuICBzc3I/OiBib29sZWFuXG4gIG1vZHVsZXM/OiBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZShvcHRpb25zOiBMb2FkYWJsZU9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICBjb25zdCBMYXp5ID0gbGF6eSgoKSA9PiBvcHRzLmxvYWRlcigpLnRoZW4oY29udmVydE1vZHVsZSkpXG4gIGNvbnN0IExvYWRpbmcgPSBvcHRzLmxvYWRpbmdcblxuICBmdW5jdGlvbiBMb2FkYWJsZUNvbXBvbmVudChwcm9wczogYW55KSB7XG4gICAgY29uc3QgZmFsbGJhY2tFbGVtZW50ID0gTG9hZGluZyA/IChcbiAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17dHJ1ZX0gcGFzdERlbGF5PXt0cnVlfSBlcnJvcj17bnVsbH0gLz5cbiAgICApIDogbnVsbFxuXG4gICAgLy8gSWYgaXQncyBub24tU1NSIG9yIHByb3ZpZGVkIGEgbG9hZGluZyBjb21wb25lbnQsIHdyYXAgaXQgaW4gYSBzdXNwZW5zZSBib3VuZGFyeVxuICAgIGNvbnN0IGhhc1N1c3BlbnNlQm91bmRhcnkgPSAhb3B0cy5zc3IgfHwgISFvcHRzLmxvYWRpbmdcbiAgICBjb25zdCBXcmFwID0gaGFzU3VzcGVuc2VCb3VuZGFyeSA/IFN1c3BlbnNlIDogRnJhZ21lbnRcbiAgICBjb25zdCB3cmFwUHJvcHMgPSBoYXNTdXNwZW5zZUJvdW5kYXJ5ID8geyBmYWxsYmFjazogZmFsbGJhY2tFbGVtZW50IH0gOiB7fVxuICAgIGNvbnN0IGNoaWxkcmVuID0gb3B0cy5zc3IgPyAoXG4gICAgICA8PlxuICAgICAgICB7LyogRHVyaW5nIFNTUiwgd2UgbmVlZCB0byBwcmVsb2FkIHRoZSBDU1MgZnJvbSB0aGUgZHluYW1pYyBjb21wb25lbnQgdG8gYXZvaWQgZmxhc2ggb2YgdW5zdHlsZWQgY29udGVudCAqL31cbiAgICAgICAge3R5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gKFxuICAgICAgICAgIDxQcmVsb2FkQ2h1bmtzIG1vZHVsZUlkcz17b3B0cy5tb2R1bGVzfSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPExhenkgey4uLnByb3BzfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDxCYWlsb3V0VG9DU1IgcmVhc29uPVwibmV4dC9keW5hbWljXCI+XG4gICAgICAgIDxMYXp5IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvQmFpbG91dFRvQ1NSPlxuICAgIClcblxuICAgIHJldHVybiA8V3JhcCB7Li4ud3JhcFByb3BzfT57Y2hpbGRyZW59PC9XcmFwPlxuICB9XG5cbiAgTG9hZGFibGVDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb21wb25lbnQnXG5cbiAgcmV0dXJuIExvYWRhYmxlQ29tcG9uZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRhYmxlXG4iXSwibmFtZXMiOlsiY29udmVydE1vZHVsZSIsIm1vZCIsImhhc0RlZmF1bHQiLCJkZWZhdWx0IiwiZGVmYXVsdE9wdGlvbnMiLCJsb2FkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxvYWRpbmciLCJzc3IiLCJMb2FkYWJsZSIsIm9wdGlvbnMiLCJvcHRzIiwiTGF6eSIsImxhenkiLCJ0aGVuIiwiTG9hZGluZyIsIkxvYWRhYmxlQ29tcG9uZW50IiwicHJvcHMiLCJmYWxsYmFja0VsZW1lbnQiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJlcnJvciIsImhhc1N1c3BlbnNlQm91bmRhcnkiLCJXcmFwIiwiU3VzcGVuc2UiLCJGcmFnbWVudCIsIndyYXBQcm9wcyIsImZhbGxiYWNrIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJQcmVsb2FkQ2h1bmtzIiwibW9kdWxlSWRzIiwibW9kdWxlcyIsIkJhaWxvdXRUb0NTUiIsInJlYXNvbiIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7K0JBNEVBLFdBQUE7OztlQUFBOzs7O3VCQTVFeUM7cUNBQ1o7K0JBRUM7QUFFOUIseUZBQXlGO0FBQ3pGLHFHQUFxRztBQUNyRyxxRUFBcUU7QUFDckUsU0FBU0EsY0FDUEMsR0FBNEQ7SUFJNUQsaUhBQWlIO0lBQ2pILFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsTUFBTUMsYUFBYUQsT0FBTyxhQUFhQTtJQUN2QyxPQUFPO1FBQ0xFLFNBQVNELGFBQ0pELElBQTJCRSxPQUFPLEdBQ2xDRjtJQUNQO0FBQ0Y7QUFFQSxNQUFNRyxpQkFBaUI7SUFDckJDLFFBQVEsSUFBTUMsUUFBUUMsT0FBTyxDQUFDUCxjQUFjLElBQU07SUFDbERRLFNBQVM7SUFDVEMsS0FBSztBQUNQO0FBU0EsU0FBU0MsU0FBU0MsT0FBd0I7SUFDeEMsTUFBTUMsT0FBTztRQUFFLEdBQUdSLGNBQWM7UUFBRSxHQUFHTyxPQUFPO0lBQUM7SUFDN0MsTUFBTUUsT0FBQUEsV0FBQUEsR0FBT0MsQ0FBQUEsR0FBQUEsT0FBQUEsSUFBSSxFQUFDLElBQU1GLEtBQUtQLE1BQU0sR0FBR1UsSUFBSSxDQUFDZjtJQUMzQyxNQUFNZ0IsVUFBVUosS0FBS0osT0FBTztJQUU1QixTQUFTUyxrQkFBa0JDLEtBQVU7UUFDbkMsTUFBTUMsa0JBQWtCSCxVQUFBQSxXQUFBQSxHQUN0QixDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNBLFNBQUFBO1lBQVFJLFdBQVc7WUFBTUMsV0FBVztZQUFNQyxPQUFPO2FBQ2hEO1FBRUosa0ZBQWtGO1FBQ2xGLE1BQU1DLHNCQUFzQixDQUFDWCxLQUFLSCxHQUFHLElBQUksQ0FBQyxDQUFDRyxLQUFLSixPQUFPO1FBQ3ZELE1BQU1nQixPQUFPRCxzQkFBc0JFLE9BQUFBLFFBQVEsR0FBR0MsT0FBQUEsUUFBUTtRQUN0RCxNQUFNQyxZQUFZSixzQkFBc0I7WUFBRUssVUFBVVQ7UUFBZ0IsSUFBSSxDQUFDO1FBQ3pFLE1BQU1VLFdBQVdqQixLQUFLSCxHQUFHLEdBQUEsV0FBQSxHQUN2QixDQUFBLEdBQUEsWUFBQSxJQUFBLEVBQUEsWUFBQSxRQUFBLEVBQUE7O2dCQUVHLE9BQU9xQixXQUFXLGNBQUEsV0FBQSxHQUNqQixDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNDLGVBQUFBLGFBQWEsRUFBQTtvQkFBQ0MsV0FBV3BCLEtBQUtxQixPQUFPO3FCQUNwQzs4QkFDSixDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNwQixNQUFBQTtvQkFBTSxHQUFHSyxLQUFLOzs7MkJBR2pCLENBQUEsR0FBQSxZQUFBLEdBQUEsRUFBQ2dCLHFCQUFBQSxZQUFZLEVBQUE7WUFBQ0MsUUFBTztzQkFDbkIsV0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsRUFBQ3RCLE1BQUFBO2dCQUFNLEdBQUdLLEtBQUs7OztRQUluQixPQUFBLFdBQUEsR0FBTyxDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNNLE1BQUFBO1lBQU0sR0FBR0csU0FBUztzQkFBR0U7O0lBQy9CO0lBRUFaLGtCQUFrQm1CLFdBQVcsR0FBRztJQUVoQyxPQUFPbkI7QUFDVDtNQUVBLFdBQWVQIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDQxOCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9zaGFyZWQvbGliL2FwcC1keW5hbWljLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgSlNYIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi9sYXp5LWR5bmFtaWMvbG9hZGFibGUnXG5cbmltcG9ydCB0eXBlIHtcbiAgTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zLFxuICBEeW5hbWljT3B0aW9uc0xvYWRpbmdQcm9wcyxcbiAgTG9hZGVyLFxuICBMb2FkZXJDb21wb25lbnQsXG59IGZyb20gJy4vbGF6eS1keW5hbWljL3R5cGVzJ1xuXG5leHBvcnQge1xuICB0eXBlIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyxcbiAgdHlwZSBEeW5hbWljT3B0aW9uc0xvYWRpbmdQcm9wcyxcbiAgdHlwZSBMb2FkZXIsXG4gIHR5cGUgTG9hZGVyQ29tcG9uZW50LFxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zICYge1xuICBsb2FkaW5nPzogKCkgPT4gSlNYLkVsZW1lbnQgfCBudWxsXG4gIGxvYWRlcj86IExvYWRlcjxQPlxuICBsb2FkYWJsZUdlbmVyYXRlZD86IExvYWRhYmxlR2VuZXJhdGVkT3B0aW9uc1xuICBtb2R1bGVzPzogc3RyaW5nW11cbiAgc3NyPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZU9wdGlvbnM8UCA9IHt9PiA9IER5bmFtaWNPcHRpb25zPFA+XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlRm48UCA9IHt9PiA9IChcbiAgb3B0czogTG9hZGFibGVPcHRpb25zPFA+XG4pID0+IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVDb21wb25lbnQ8UCA9IHt9PiA9IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYzxQID0ge30+KFxuICBkeW5hbWljT3B0aW9uczogRHluYW1pY09wdGlvbnM8UD4gfCBMb2FkZXI8UD4sXG4gIG9wdGlvbnM/OiBEeW5hbWljT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIGNvbnN0IGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+ID0ge31cblxuICBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zXG4gIH1cblxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAuLi5vcHRpb25zLFxuICB9XG5cbiAgcmV0dXJuIExvYWRhYmxlKHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLFxuICAgIG1vZHVsZXM6IG1lcmdlZE9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ/Lm1vZHVsZXMsXG4gIH0pXG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJsb2FkYWJsZU9wdGlvbnMiLCJsb2FkZXIiLCJMb2FkYWJsZSIsIm1vZHVsZXMiLCJsb2FkYWJsZUdlbmVyYXRlZCJdLCJtYXBwaW5ncyI6Ijs7OytCQWtDQSxXQUFBOzs7ZUFBd0JBOzs7O21FQWhDSDtBQWdDTixTQUFTQSxRQUN0QkMsY0FBNkMsRUFDN0NDLE9BQTJCO1FBZWhCQztJQWJYLE1BQU1DLGtCQUFzQyxDQUFDO0lBRTdDLElBQUksT0FBT0gsbUJBQW1CLFlBQVk7UUFDeENHLGdCQUFnQkMsTUFBTSxHQUFHSjtJQUMzQjtJQUVBLE1BQU1FLGdCQUFnQjtRQUNwQixHQUFHQyxlQUFlO1FBQ2xCLEdBQUdGLE9BQU87SUFDWjtJQUVBLE9BQU9JLENBQUFBLEdBQUFBLFVBQUFBLE9BQVEsRUFBQztRQUNkLEdBQUdILGFBQWE7UUFDaEJJLE9BQU8sRUFBQSxDQUFFSixtQ0FBQUEsY0FBY0ssaUJBQWlCLEtBQUEsT0FBQSxLQUFBLElBQS9CTCxpQ0FBaUNJLE9BQU87SUFDbkQ7QUFDRiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19XQp9
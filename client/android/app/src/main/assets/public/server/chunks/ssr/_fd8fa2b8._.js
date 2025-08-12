module.exports = {

"[project]/src/lib/mobile.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getPlatformClasses": ()=>getPlatformClasses,
    "isMobilePlatform": ()=>isMobilePlatform,
    "useMobilePlatform": ()=>useMobilePlatform
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
;
const isMobilePlatform = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
};
const getPlatformClasses = (mobileClasses, webClasses = '')=>{
    if ("TURBOPACK compile-time truthy", 1) {
        // Server-side rendering - return both classes
        return `${webClasses} ${mobileClasses}`;
    }
    //TURBOPACK unreachable
    ;
};
const useMobilePlatform = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return false; // Default to false during SSR
    }
    //TURBOPACK unreachable
    ;
};
}),
"[project]/src/app/landing.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mobile.ts [app-ssr] (ecmascript)");
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
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Header.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/HeroSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Features = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Features.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Benefits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Benefits.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Analytics.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const OurWork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Ourwork.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Testimonials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/landing/Footer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const LandingPage = ()=>{
    // Platform-specific spacing for main content
    const mainClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformClasses"])('flex-grow mobile-safe-content', 'flex-grow mt-20' // Web: uses fixed margin-top
    );
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/src/app/landing.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: mainClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Features, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Benefits, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Analytics, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OurWork, {}, void 0, false, {
                            fileName: "[project]/src/app/landing.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
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
const __TURBOPACK__default__export__ = LandingPage;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
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
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
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
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
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

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvbW9iaWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcGFjaXRvciB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGFwcCBpcyBydW5uaW5nIG9uIGEgbmF0aXZlIG1vYmlsZSBwbGF0Zm9ybVxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIHJ1bm5pbmcgb24gQW5kcm9pZC9pT1MsIGZhbHNlIGlmIHJ1bm5pbmcgb24gd2ViXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNNb2JpbGVQbGF0Zm9ybSA9ICgpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgcGxhdGZvcm0tc3BlY2lmaWMgY2xhc3MgbmFtZXMgZm9yIG1vYmlsZSBvcHRpbWl6YXRpb25cclxuICogQHBhcmFtIG1vYmlsZUNsYXNzZXMgLSBDbGFzc2VzIHRvIGFwcGx5IG9uIG1vYmlsZVxyXG4gKiBAcGFyYW0gd2ViQ2xhc3NlcyAtIENsYXNzZXMgdG8gYXBwbHkgb24gd2ViIChvcHRpb25hbClcclxuICogQHJldHVybnMgQ29tYmluZWQgY2xhc3Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UGxhdGZvcm1DbGFzc2VzID0gKFxyXG4gIG1vYmlsZUNsYXNzZXM6IHN0cmluZyxcclxuICB3ZWJDbGFzc2VzOiBzdHJpbmcgPSAnJ1xyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyaW5nIC0gcmV0dXJuIGJvdGggY2xhc3Nlc1xyXG4gICAgcmV0dXJuIGAke3dlYkNsYXNzZXN9ICR7bW9iaWxlQ2xhc3Nlc31gO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNNb2JpbGVQbGF0Zm9ybSgpID8gbW9iaWxlQ2xhc3NlcyA6IHdlYkNsYXNzZXM7XHJcbn07XHJcblxyXG4vKipcclxuICogSG9vayB0byBnZXQgbW9iaWxlIHBsYXRmb3JtIHN0YXR1cyAoY2xpZW50LXNpZGUgb25seSlcclxuICogQHJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHJ1bm5pbmcgb24gbW9iaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlUGxhdGZvcm0gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7IC8vIERlZmF1bHQgdG8gZmFsc2UgZHVyaW5nIFNTUlxyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNNb2JpbGVQbGF0Zm9ybSgpO1xyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU1PLE1BQU0sbUJBQW1CO0lBQzlCLE9BQU8sb0pBQUEsQ0FBQSxZQUFTLENBQUMsZ0JBQWdCO0FBQ25DO0FBUU8sTUFBTSxxQkFBcUIsQ0FDaEMsZUFDQSxhQUFxQixFQUFFO0lBRXZCLHdDQUFtQztRQUNqQyw4Q0FBOEM7UUFDOUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxFQUFFLGVBQWU7SUFDekM7OztBQUdGO0FBTU8sTUFBTSxvQkFBb0I7SUFDL0Isd0NBQW1DO1FBQ2pDLE9BQU8sT0FBTyw4QkFBOEI7SUFDOUM7OztBQUdGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzNCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9hcHAvbGFuZGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgZ2V0UGxhdGZvcm1DbGFzc2VzIH0gZnJvbSBcIkAvbGliL21vYmlsZVwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvbGFuZGluZy9IZWFkZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgSGVyb1NlY3Rpb24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uXCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IEZlYXR1cmVzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBCZW5lZml0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL2xhbmRpbmcvQmVuZWZpdHNcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgQW5hbHl0aWNzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvbGFuZGluZy9BbmFseXRpY3NcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgT3VyV29yayA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL2xhbmRpbmcvT3Vyd29ya1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBUZXN0aW1vbmlhbHMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBGb290ZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlclwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XHJcbiAgLy8gUGxhdGZvcm0tc3BlY2lmaWMgc3BhY2luZyBmb3IgbWFpbiBjb250ZW50XHJcbiAgY29uc3QgbWFpbkNsYXNzZXMgPSBnZXRQbGF0Zm9ybUNsYXNzZXMoXHJcbiAgICAnZmxleC1ncm93IG1vYmlsZS1zYWZlLWNvbnRlbnQnLCAvLyBNb2JpbGU6IHVzZXMgc2FmZSBhcmVhIHNwYWNpbmdcclxuICAgICdmbGV4LWdyb3cgbXQtMjAnIC8vIFdlYjogdXNlcyBmaXhlZCBtYXJnaW4tdG9wXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e21haW5DbGFzc2VzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPEhlcm9TZWN0aW9uIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZXMgLz5cclxuICAgICAgICAgIDxCZW5lZml0cyAvPlxyXG4gICAgICAgICAgPEFuYWx5dGljcyAvPlxyXG4gICAgICAgICAgPE91cldvcmsgLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbHMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRkE7Ozs7QUFJQSxNQUFNLFNBQVMsQ0FBQSxHQUFBLCtKQUFBLENBQUEsVUFBTyxBQUFEOzs7Ozs7SUFBaUQsS0FBSzs7QUFDM0UsTUFBTSxjQUFjLENBQUEsR0FBQSwrSkFBQSxDQUFBLFVBQU8sQUFBRDs7Ozs7O0lBQXNELEtBQUs7O0FBQ3JGLE1BQU0sV0FBVyxDQUFBLEdBQUEsK0pBQUEsQ0FBQSxVQUFPLEFBQUQ7Ozs7OztJQUFtRCxLQUFLOztBQUMvRSxNQUFNLFdBQVcsQ0FBQSxHQUFBLCtKQUFBLENBQUEsVUFBTyxBQUFEOzs7Ozs7SUFBbUQsS0FBSzs7QUFDL0UsTUFBTSxZQUFZLENBQUEsR0FBQSwrSkFBQSxDQUFBLFVBQU8sQUFBRDs7Ozs7O0lBQW9ELEtBQUs7O0FBQ2pGLE1BQU0sVUFBVSxDQUFBLEdBQUEsK0pBQUEsQ0FBQSxVQUFPLEFBQUQ7Ozs7OztJQUFrRCxLQUFLOztBQUM3RSxNQUFNLGVBQWUsQ0FBQSxHQUFBLCtKQUFBLENBQUEsVUFBTyxBQUFEOzs7Ozs7SUFBdUQsS0FBSzs7QUFDdkYsTUFBTSxTQUFTLENBQUEsR0FBQSwrSkFBQSxDQUFBLFVBQU8sQUFBRDs7Ozs7O0lBQWlELEtBQUs7O0FBRTNFLE1BQU0sY0FBYztJQUNsQiw2Q0FBNkM7SUFDN0MsTUFBTSxjQUFjLENBQUEsR0FBQSxvSEFBQSxDQUFBLHFCQUFrQixBQUFELEVBQ25DLGlDQUNBLGtCQUFrQiw2QkFBNkI7O0lBR2pELHFCQUNFLDhPQUFDO1FBQUksV0FBVTs7MEJBQ2IsOE9BQUM7Ozs7OzBCQUNELDhPQUFDO2dCQUFLLFdBQVc7MEJBQ2YsY0FBQSw4T0FBQztvQkFBSSxXQUFVOztzQ0FDYiw4T0FBQzs7Ozs7c0NBQ0QsOE9BQUM7Ozs7O3NDQUNELDhPQUFDOzs7OztzQ0FDRCw4T0FBQzs7Ozs7c0NBQ0QsOE9BQUM7Ozs7O3NDQUNELDhPQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdMLDhPQUFDOzs7Ozs7Ozs7OztBQUdQO3VDQUVlIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxOTMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvJTQwc3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTtcbn1cbmV4cG9ydHMuXyA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLHlCQUF5QixHQUFHO0lBQ2pDLE9BQU8sT0FBTyxJQUFJLFVBQVUsR0FBRyxNQUFNO1FBQUUsU0FBUztJQUFJO0FBQ3hEO0FBQ0EsUUFBUSxDQUFDLEdBQUciLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjA1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL3NoYXJlZC9saWIvbGF6eS1keW5hbWljL2JhaWxvdXQtdG8tY3NyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaGFzIHRvIGJlIGEgc2hhcmVkIG1vZHVsZSB3aGljaCBpcyBzaGFyZWQgYmV0d2VlbiBjbGllbnQgY29tcG9uZW50IGVycm9yIGJvdW5kYXJ5IGFuZCBkeW5hbWljIGNvbXBvbmVudFxuY29uc3QgQkFJTE9VVF9UT19DU1IgPSAnQkFJTE9VVF9UT19DTElFTlRfU0lERV9SRU5ERVJJTkcnXG5cbi8qKiBBbiBlcnJvciB0aGF0IHNob3VsZCBiZSB0aHJvd24gd2hlbiB3ZSB3YW50IHRvIGJhaWwgb3V0IHRvIGNsaWVudC1zaWRlIHJlbmRlcmluZy4gKi9cbmV4cG9ydCBjbGFzcyBCYWlsb3V0VG9DU1JFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IGRpZ2VzdCA9IEJBSUxPVVRfVE9fQ1NSXG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJlYXNvbjogc3RyaW5nKSB7XG4gICAgc3VwZXIoYEJhaWwgb3V0IHRvIGNsaWVudC1zaWRlIHJlbmRlcmluZzogJHtyZWFzb259YClcbiAgfVxufVxuXG4vKiogQ2hlY2tzIGlmIGEgcGFzc2VkIGFyZ3VtZW50IGlzIGFuIGVycm9yIHRoYXQgaXMgdGhyb3duIGlmIHdlIHdhbnQgdG8gYmFpbCBvdXQgdG8gY2xpZW50LXNpZGUgcmVuZGVyaW5nLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmFpbG91dFRvQ1NSRXJyb3IoZXJyOiB1bmtub3duKTogZXJyIGlzIEJhaWxvdXRUb0NTUkVycm9yIHtcbiAgaWYgKHR5cGVvZiBlcnIgIT09ICdvYmplY3QnIHx8IGVyciA9PT0gbnVsbCB8fCAhKCdkaWdlc3QnIGluIGVycikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBlcnIuZGlnZXN0ID09PSBCQUlMT1VUX1RPX0NTUlxufVxuIl0sIm5hbWVzIjpbIkJhaWxvdXRUb0NTUkVycm9yIiwiaXNCYWlsb3V0VG9DU1JFcnJvciIsIkJBSUxPVVRfVE9fQ1NSIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRpZ2VzdCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUEsK0dBQStHOzs7Ozs7Ozs7Ozs7Ozs7SUFJbEdBLGlCQUFpQixFQUFBO2VBQWpCQTs7SUFTR0MsbUJBQW1CLEVBQUE7ZUFBbkJBOzs7QUFaaEIsTUFBTUMsaUJBQWlCO0FBR2hCLE1BQU1GLDBCQUEwQkc7SUFHckNDLFlBQTRCQyxNQUFjLENBQUU7UUFDMUMsS0FBSyxDQUFFLHdDQUFxQ0EsU0FBQUEsSUFBQUEsQ0FEbEJBLE1BQUFBLEdBQUFBLFFBQUFBLElBQUFBLENBRlpDLE1BQUFBLEdBQVNKO0lBSXpCO0FBQ0Y7QUFHTyxTQUFTRCxvQkFBb0JNLEdBQVk7SUFDOUMsSUFBSSxPQUFPQSxRQUFRLFlBQVlBLFFBQVEsUUFBUSxDQUFFLENBQUEsWUFBWUEsR0FBRSxHQUFJO1FBQ2pFLE9BQU87SUFDVDtJQUVBLE9BQU9BLElBQUlELE1BQU0sS0FBS0o7QUFDeEIiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjQ1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL3NoYXJlZC9saWIvbGF6eS1keW5hbWljL2R5bmFtaWMtYmFpbG91dC10by1jc3IudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFpbG91dFRvQ1NSRXJyb3IgfSBmcm9tICcuL2JhaWxvdXQtdG8tY3NyJ1xuXG5pbnRlcmZhY2UgQmFpbG91dFRvQ1NSUHJvcHMge1xuICByZWFzb246IHN0cmluZ1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50XG59XG5cbi8qKlxuICogSWYgcmVuZGVyZWQgb24gdGhlIHNlcnZlciwgdGhpcyBjb21wb25lbnQgdGhyb3dzIGFuIGVycm9yXG4gKiB0byBzaWduYWwgTmV4dC5qcyB0aGF0IGl0IHNob3VsZCBiYWlsIG91dCB0byBjbGllbnQtc2lkZSByZW5kZXJpbmcgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhaWxvdXRUb0NTUih7IHJlYXNvbiwgY2hpbGRyZW4gfTogQmFpbG91dFRvQ1NSUHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEJhaWxvdXRUb0NTUkVycm9yKHJlYXNvbilcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlblxufVxuIl0sIm5hbWVzIjpbIkJhaWxvdXRUb0NTUiIsInJlYXNvbiIsImNoaWxkcmVuIiwid2luZG93IiwiQmFpbG91dFRvQ1NSRXJyb3IiXSwibWFwcGluZ3MiOiI7OzsrQkFjZ0JBLGdCQUFBQTs7O2VBQUFBOzs7OEJBWGtCO0FBVzNCLFNBQVNBLGFBQWEsS0FBdUM7SUFBdkMsSUFBQSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBcUIsR0FBdkM7SUFDM0IsSUFBSSxPQUFPQyxXQUFXLGtCQUFhO1FBQ2pDLE1BQU0sT0FBQSxjQUE2QixDQUE3QixJQUFJQyxjQUFBQSxpQkFBaUIsQ0FBQ0gsU0FBdEIscUJBQUE7bUJBQUE7d0JBQUE7MEJBQUE7UUFBNEI7SUFDcEM7SUFFQSxPQUFPQztBQUNUIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI3MiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9zaGFyZWQvbGliL2VuY29kZS11cmktcGF0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZW5jb2RlVVJJUGF0aChmaWxlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZpbGVcbiAgICAuc3BsaXQoJy8nKVxuICAgIC5tYXAoKHApID0+IGVuY29kZVVSSUNvbXBvbmVudChwKSlcbiAgICAuam9pbignLycpXG59XG4iXSwibmFtZXMiOlsiZW5jb2RlVVJJUGF0aCIsImZpbGUiLCJzcGxpdCIsIm1hcCIsInAiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7K0JBQWdCQSxpQkFBQUE7OztlQUFBQTs7O0FBQVQsU0FBU0EsY0FBY0MsSUFBWTtJQUN4QyxPQUFPQSxLQUNKQyxLQUFLLENBQUMsS0FDTkMsR0FBRyxDQUFDLENBQUNDLElBQU1DLG1CQUFtQkQsSUFDOUJFLElBQUksQ0FBQztBQUNWIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI5MCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9zaGFyZWQvbGliL2xhenktZHluYW1pYy9wcmVsb2FkLWNodW5rcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHByZWxvYWQgfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCB7IHdvcmtBc3luY1N0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvYXBwLXJlbmRlci93b3JrLWFzeW5jLXN0b3JhZ2UuZXh0ZXJuYWwnXG5pbXBvcnQgeyBlbmNvZGVVUklQYXRoIH0gZnJvbSAnLi4vZW5jb2RlLXVyaS1wYXRoJ1xuXG5leHBvcnQgZnVuY3Rpb24gUHJlbG9hZENodW5rcyh7XG4gIG1vZHVsZUlkcyxcbn06IHtcbiAgbW9kdWxlSWRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZFxufSkge1xuICAvLyBFYXJseSByZXR1cm4gaW4gY2xpZW50IGNvbXBpbGF0aW9uIGFuZCBvbmx5IGxvYWQgcmVxdWVzdFN0b3JlIG9uIHNlcnZlciBzaWRlXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB3b3JrU3RvcmUgPSB3b3JrQXN5bmNTdG9yYWdlLmdldFN0b3JlKClcbiAgaWYgKHdvcmtTdG9yZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGFsbEZpbGVzID0gW11cblxuICAvLyBTZWFyY2ggdGhlIGN1cnJlbnQgZHluYW1pYyBjYWxsIHVuaXF1ZSBrZXkgaWQgaW4gcmVhY3QgbG9hZGFibGUgbWFuaWZlc3QsXG4gIC8vIGFuZCBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIENTUyBmaWxlcyB0byBwcmVsb2FkXG4gIGlmICh3b3JrU3RvcmUucmVhY3RMb2FkYWJsZU1hbmlmZXN0ICYmIG1vZHVsZUlkcykge1xuICAgIGNvbnN0IG1hbmlmZXN0ID0gd29ya1N0b3JlLnJlYWN0TG9hZGFibGVNYW5pZmVzdFxuICAgIGZvciAoY29uc3Qga2V5IG9mIG1vZHVsZUlkcykge1xuICAgICAgaWYgKCFtYW5pZmVzdFtrZXldKSBjb250aW51ZVxuICAgICAgY29uc3QgY2h1bmtzID0gbWFuaWZlc3Rba2V5XS5maWxlc1xuICAgICAgYWxsRmlsZXMucHVzaCguLi5jaHVua3MpXG4gICAgfVxuICB9XG5cbiAgaWYgKGFsbEZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBkcGxJZCA9IHByb2Nlc3MuZW52Lk5FWFRfREVQTE9ZTUVOVF9JRFxuICAgID8gYD9kcGw9JHtwcm9jZXNzLmVudi5ORVhUX0RFUExPWU1FTlRfSUR9YFxuICAgIDogJydcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YWxsRmlsZXMubWFwKChjaHVuaykgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gYCR7d29ya1N0b3JlLmFzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSVBhdGgoY2h1bmspfSR7ZHBsSWR9YFxuICAgICAgICBjb25zdCBpc0NzcyA9IGNodW5rLmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgLy8gSWYgaXQncyBzdHlsZXNoZWV0IHdlIHVzZSBgcHJlY2VkZW5jZWAgbyBoZWxwIGhvaXN0IHdpdGggUmVhY3QgRmxvYXQuXG4gICAgICAgIC8vIEZvciBzdHlsZXNoZWV0cyB3ZSBhY3R1YWxseSBuZWVkIHRvIHJlbmRlciB0aGUgQ1NTIGJlY2F1c2Ugbm90aGluZyBlbHNlIGlzIGdvaW5nIHRvIGRvIGl0IHNvIGl0IG5lZWRzIHRvIGJlIHBhcnQgb2YgdGhlIGNvbXBvbmVudCB0cmVlLlxuICAgICAgICAvLyBUaGUgYHByZWxvYWRgIGZvciBzdHlsZXNoZWV0IGlzIG5vdCBvcHRpb25hbC5cbiAgICAgICAgaWYgKGlzQ3NzKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIGtleT17Y2h1bmt9XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgcHJlY2VkZW5jZT1cImR5bmFtaWNcIlxuICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBpdCdzIHNjcmlwdCB3ZSB1c2UgUmVhY3RET00ucHJlbG9hZCB0byBwcmVsb2FkIHRoZSByZXNvdXJjZXNcbiAgICAgICAgICBwcmVsb2FkKGhyZWYsIHtcbiAgICAgICAgICAgIGFzOiAnc2NyaXB0JyxcbiAgICAgICAgICAgIGZldGNoUHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJQcmVsb2FkQ2h1bmtzIiwibW9kdWxlSWRzIiwid2luZG93Iiwid29ya1N0b3JlIiwid29ya0FzeW5jU3RvcmFnZSIsImdldFN0b3JlIiwidW5kZWZpbmVkIiwiYWxsRmlsZXMiLCJyZWFjdExvYWRhYmxlTWFuaWZlc3QiLCJtYW5pZmVzdCIsImtleSIsImNodW5rcyIsImZpbGVzIiwicHVzaCIsImxlbmd0aCIsImRwbElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfREVQTE9ZTUVOVF9JRCIsIm1hcCIsImNodW5rIiwiaHJlZiIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJUGF0aCIsImlzQ3NzIiwiZW5kc1dpdGgiLCJsaW5rIiwicHJlY2VkZW5jZSIsInJlbCIsImFzIiwicHJlbG9hZCIsImZldGNoUHJpb3JpdHkiXSwibWFwcGluZ3MiOiI7OzsrQkFPZ0JBLGlCQUFBQTs7O2VBQUFBOzs7OzBCQUxROzBDQUVTOytCQUNIO0FBRXZCLFNBQVNBLGNBQWMsS0FJN0I7SUFKNkIsSUFBQSxFQUM1QkMsU0FBUyxFQUdWLEdBSjZCO0lBSzVCLCtFQUErRTtJQUMvRSxJQUFJLE9BQU9DLFdBQVcsYUFBYTs7SUFJbkMsTUFBTUMsWUFBWUMsMEJBQUFBLGdCQUFnQixDQUFDQyxRQUFRO0lBQzNDLElBQUlGLGNBQWNHLFdBQVc7UUFDM0IsT0FBTztJQUNUO0lBRUEsTUFBTUMsV0FBVyxFQUFFO0lBRW5CLDRFQUE0RTtJQUM1RSxrREFBa0Q7SUFDbEQsSUFBSUosVUFBVUsscUJBQXFCLElBQUlQLFdBQVc7UUFDaEQsTUFBTVEsV0FBV04sVUFBVUsscUJBQXFCO1FBQ2hELEtBQUssTUFBTUUsT0FBT1QsVUFBVztZQUMzQixJQUFJLENBQUNRLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1lBQ3BCLE1BQU1DLFNBQVNGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLO1lBQ2xDTCxTQUFTTSxJQUFJLElBQUlGO1FBQ25CO0lBQ0Y7SUFFQSxJQUFJSixTQUFTTyxNQUFNLEtBQUssR0FBRztRQUN6QixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGtCQUFrQixRQUN2QyxVQUFPRixRQUFRQyxHQUFHLENBQUNDLElBQ3BCLGNBRHNDO0lBRzFDLE9BQUEsV0FBQSxHQUNFLENBQUEsR0FBQSxZQUFBLEdBQUEsRUFBQSxZQUFBLFFBQUEsRUFBQTtrQkFDR1gsU0FBU1ksR0FBRyxDQUFDLENBQUNDO1lBQ2IsTUFBTUMsT0FBVWxCLFVBQVVtQixXQUFXLEdBQUMsWUFBU0MsQ0FBQUEsR0FBQUEsZUFBQUEsYUFBYSxFQUFDSCxTQUFTTDtZQUN0RSxNQUFNUyxRQUFRSixNQUFNSyxRQUFRLENBQUM7WUFDN0Isd0VBQXdFO1lBQ3hFLDBJQUEwSTtZQUMxSSxnREFBZ0Q7WUFDaEQsSUFBSUQsT0FBTztnQkFDVCxPQUFBLFdBQUEsR0FDRSxDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNFLFFBQUFBO29CQUVDLGFBQWE7b0JBQ2JDLFlBQVc7b0JBQ1hOLE1BQU1BO29CQUNOTyxLQUFJO29CQUNKQyxJQUFHO21CQUxFVDtZQVFYLE9BQU87Z0JBQ0wsa0VBQWtFO2dCQUNsRVUsQ0FBQUEsR0FBQUEsVUFBQUEsT0FBTyxFQUFDVCxNQUFNO29CQUNaUSxJQUFJO29CQUNKRSxlQUFlO2dCQUNqQjtnQkFDQSxPQUFPO1lBQ1Q7UUFDRjs7QUFHTiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzNTksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9sYXp5LWR5bmFtaWMvbG9hZGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1c3BlbnNlLCBGcmFnbWVudCwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFpbG91dFRvQ1NSIH0gZnJvbSAnLi9keW5hbWljLWJhaWxvdXQtdG8tY3NyJ1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgUHJlbG9hZENodW5rcyB9IGZyb20gJy4vcHJlbG9hZC1jaHVua3MnXG5cbi8vIE5vcm1hbGl6ZSBsb2FkZXIgdG8gcmV0dXJuIHRoZSBtb2R1bGUgYXMgZm9ybSB7IGRlZmF1bHQ6IENvbXBvbmVudCB9IGZvciBgUmVhY3QubGF6eWAuXG4vLyBBbHNvIGZvciBiYWNrd2FyZCBjb21wYXRpYmxlIHNpbmNlIG5leHQvZHluYW1pYyBhbGxvd3MgdG8gcmVzb2x2ZSBhIGNvbXBvbmVudCBkaXJlY3RseSB3aXRoIGxvYWRlclxuLy8gQ2xpZW50IGNvbXBvbmVudCByZWZlcmVuY2UgcHJveHkgbmVlZCB0byBiZSBjb252ZXJ0ZWQgdG8gYSBtb2R1bGUuXG5mdW5jdGlvbiBjb252ZXJ0TW9kdWxlPFA+KFxuICBtb2Q6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCBDb21wb25lbnRNb2R1bGU8UD4gfCB1bmRlZmluZWRcbik6IHtcbiAgZGVmYXVsdDogUmVhY3QuQ29tcG9uZW50VHlwZTxQPlxufSB7XG4gIC8vIENoZWNrIFwiZGVmYXVsdFwiIHByb3AgYmVmb3JlIGFjY2Vzc2luZyBpdCwgYXMgaXQgY291bGQgYmUgY2xpZW50IHJlZmVyZW5jZSBwcm94eSB0aGF0IGNvdWxkIGJyZWFrIGl0IHJlZmVyZW5jZS5cbiAgLy8gQ2FzZXM6XG4gIC8vIG1vZDogeyBkZWZhdWx0OiBDb21wb25lbnQgfVxuICAvLyBtb2Q6IENvbXBvbmVudFxuICAvLyBtb2Q6IHsgZGVmYXVsdDogcHJveHkoQ29tcG9uZW50KSB9XG4gIC8vIG1vZDogcHJveHkoQ29tcG9uZW50KVxuICBjb25zdCBoYXNEZWZhdWx0ID0gbW9kICYmICdkZWZhdWx0JyBpbiBtb2RcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0OiBoYXNEZWZhdWx0XG4gICAgICA/IChtb2QgYXMgQ29tcG9uZW50TW9kdWxlPFA+KS5kZWZhdWx0XG4gICAgICA6IChtb2QgYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxQPiksXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGxvYWRlcjogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNvbnZlcnRNb2R1bGUoKCkgPT4gbnVsbCkpLFxuICBsb2FkaW5nOiBudWxsLFxuICBzc3I6IHRydWUsXG59XG5cbmludGVyZmFjZSBMb2FkYWJsZU9wdGlvbnMge1xuICBsb2FkZXI/OiAoKSA9PiBQcm9taXNlPFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PiB8IENvbXBvbmVudE1vZHVsZTxhbnk+PlxuICBsb2FkaW5nPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+IHwgbnVsbFxuICBzc3I/OiBib29sZWFuXG4gIG1vZHVsZXM/OiBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZShvcHRpb25zOiBMb2FkYWJsZU9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICBjb25zdCBMYXp5ID0gbGF6eSgoKSA9PiBvcHRzLmxvYWRlcigpLnRoZW4oY29udmVydE1vZHVsZSkpXG4gIGNvbnN0IExvYWRpbmcgPSBvcHRzLmxvYWRpbmdcblxuICBmdW5jdGlvbiBMb2FkYWJsZUNvbXBvbmVudChwcm9wczogYW55KSB7XG4gICAgY29uc3QgZmFsbGJhY2tFbGVtZW50ID0gTG9hZGluZyA/IChcbiAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17dHJ1ZX0gcGFzdERlbGF5PXt0cnVlfSBlcnJvcj17bnVsbH0gLz5cbiAgICApIDogbnVsbFxuXG4gICAgLy8gSWYgaXQncyBub24tU1NSIG9yIHByb3ZpZGVkIGEgbG9hZGluZyBjb21wb25lbnQsIHdyYXAgaXQgaW4gYSBzdXNwZW5zZSBib3VuZGFyeVxuICAgIGNvbnN0IGhhc1N1c3BlbnNlQm91bmRhcnkgPSAhb3B0cy5zc3IgfHwgISFvcHRzLmxvYWRpbmdcbiAgICBjb25zdCBXcmFwID0gaGFzU3VzcGVuc2VCb3VuZGFyeSA/IFN1c3BlbnNlIDogRnJhZ21lbnRcbiAgICBjb25zdCB3cmFwUHJvcHMgPSBoYXNTdXNwZW5zZUJvdW5kYXJ5ID8geyBmYWxsYmFjazogZmFsbGJhY2tFbGVtZW50IH0gOiB7fVxuICAgIGNvbnN0IGNoaWxkcmVuID0gb3B0cy5zc3IgPyAoXG4gICAgICA8PlxuICAgICAgICB7LyogRHVyaW5nIFNTUiwgd2UgbmVlZCB0byBwcmVsb2FkIHRoZSBDU1MgZnJvbSB0aGUgZHluYW1pYyBjb21wb25lbnQgdG8gYXZvaWQgZmxhc2ggb2YgdW5zdHlsZWQgY29udGVudCAqL31cbiAgICAgICAge3R5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gKFxuICAgICAgICAgIDxQcmVsb2FkQ2h1bmtzIG1vZHVsZUlkcz17b3B0cy5tb2R1bGVzfSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPExhenkgey4uLnByb3BzfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDxCYWlsb3V0VG9DU1IgcmVhc29uPVwibmV4dC9keW5hbWljXCI+XG4gICAgICAgIDxMYXp5IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvQmFpbG91dFRvQ1NSPlxuICAgIClcblxuICAgIHJldHVybiA8V3JhcCB7Li4ud3JhcFByb3BzfT57Y2hpbGRyZW59PC9XcmFwPlxuICB9XG5cbiAgTG9hZGFibGVDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb21wb25lbnQnXG5cbiAgcmV0dXJuIExvYWRhYmxlQ29tcG9uZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRhYmxlXG4iXSwibmFtZXMiOlsiY29udmVydE1vZHVsZSIsIm1vZCIsImhhc0RlZmF1bHQiLCJkZWZhdWx0IiwiZGVmYXVsdE9wdGlvbnMiLCJsb2FkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxvYWRpbmciLCJzc3IiLCJMb2FkYWJsZSIsIm9wdGlvbnMiLCJvcHRzIiwiTGF6eSIsImxhenkiLCJ0aGVuIiwiTG9hZGluZyIsIkxvYWRhYmxlQ29tcG9uZW50IiwicHJvcHMiLCJmYWxsYmFja0VsZW1lbnQiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJlcnJvciIsImhhc1N1c3BlbnNlQm91bmRhcnkiLCJXcmFwIiwiU3VzcGVuc2UiLCJGcmFnbWVudCIsIndyYXBQcm9wcyIsImZhbGxiYWNrIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJQcmVsb2FkQ2h1bmtzIiwibW9kdWxlSWRzIiwibW9kdWxlcyIsIkJhaWxvdXRUb0NTUiIsInJlYXNvbiIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7K0JBNEVBLFdBQUE7OztlQUFBOzs7O3VCQTVFeUM7cUNBQ1o7K0JBRUM7QUFFOUIseUZBQXlGO0FBQ3pGLHFHQUFxRztBQUNyRyxxRUFBcUU7QUFDckUsU0FBU0EsY0FDUEMsR0FBNEQ7SUFJNUQsaUhBQWlIO0lBQ2pILFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsTUFBTUMsYUFBYUQsT0FBTyxhQUFhQTtJQUN2QyxPQUFPO1FBQ0xFLFNBQVNELGFBQ0pELElBQTJCRSxPQUFPLEdBQ2xDRjtJQUNQO0FBQ0Y7QUFFQSxNQUFNRyxpQkFBaUI7SUFDckJDLFFBQVEsSUFBTUMsUUFBUUMsT0FBTyxDQUFDUCxjQUFjLElBQU07SUFDbERRLFNBQVM7SUFDVEMsS0FBSztBQUNQO0FBU0EsU0FBU0MsU0FBU0MsT0FBd0I7SUFDeEMsTUFBTUMsT0FBTztRQUFFLEdBQUdSLGNBQWM7UUFBRSxHQUFHTyxPQUFPO0lBQUM7SUFDN0MsTUFBTUUsT0FBQUEsV0FBQUEsR0FBT0MsQ0FBQUEsR0FBQUEsT0FBQUEsSUFBSSxFQUFDLElBQU1GLEtBQUtQLE1BQU0sR0FBR1UsSUFBSSxDQUFDZjtJQUMzQyxNQUFNZ0IsVUFBVUosS0FBS0osT0FBTztJQUU1QixTQUFTUyxrQkFBa0JDLEtBQVU7UUFDbkMsTUFBTUMsa0JBQWtCSCxVQUFBQSxXQUFBQSxHQUN0QixDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNBLFNBQUFBO1lBQVFJLFdBQVc7WUFBTUMsV0FBVztZQUFNQyxPQUFPO2FBQ2hEO1FBRUosa0ZBQWtGO1FBQ2xGLE1BQU1DLHNCQUFzQixDQUFDWCxLQUFLSCxHQUFHLElBQUksQ0FBQyxDQUFDRyxLQUFLSixPQUFPO1FBQ3ZELE1BQU1nQixPQUFPRCxzQkFBc0JFLE9BQUFBLFFBQVEsR0FBR0MsT0FBQUEsUUFBUTtRQUN0RCxNQUFNQyxZQUFZSixzQkFBc0I7WUFBRUssVUFBVVQ7UUFBZ0IsSUFBSSxDQUFDO1FBQ3pFLE1BQU1VLFdBQVdqQixLQUFLSCxHQUFHLEdBQUEsV0FBQSxHQUN2QixDQUFBLEdBQUEsWUFBQSxJQUFBLEVBQUEsWUFBQSxRQUFBLEVBQUE7O2dCQUVHLE9BQU9xQixXQUFXLHFCQUFBLFdBQUEsR0FDakIsQ0FBQSxHQUFBLFlBQUEsR0FBQSxFQUFDQyxlQUFBQSxhQUFhLEVBQUE7b0JBQUNDLFdBQVdwQixLQUFLcUIsT0FBTztxQkFDcEM7OEJBQ0osQ0FBQSxHQUFBLFlBQUEsR0FBQSxFQUFDcEIsTUFBQUE7b0JBQU0sR0FBR0ssS0FBSzs7OzJCQUdqQixDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUNnQixxQkFBQUEsWUFBWSxFQUFBO1lBQUNDLFFBQU87c0JBQ25CLFdBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLEVBQUN0QixNQUFBQTtnQkFBTSxHQUFHSyxLQUFLOzs7UUFJbkIsT0FBQSxXQUFBLEdBQU8sQ0FBQSxHQUFBLFlBQUEsR0FBQSxFQUFDTSxNQUFBQTtZQUFNLEdBQUdHLFNBQVM7c0JBQUdFOztJQUMvQjtJQUVBWixrQkFBa0JtQixXQUFXLEdBQUc7SUFFaEMsT0FBT25CO0FBQ1Q7TUFFQSxXQUFlUCIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA0NDEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9hcHAtZHluYW1pYy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEpTWCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4vbGF6eS1keW5hbWljL2xvYWRhYmxlJ1xuXG5pbXBvcnQgdHlwZSB7XG4gIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyxcbiAgRHluYW1pY09wdGlvbnNMb2FkaW5nUHJvcHMsXG4gIExvYWRlcixcbiAgTG9hZGVyQ29tcG9uZW50LFxufSBmcm9tICcuL2xhenktZHluYW1pYy90eXBlcydcblxuZXhwb3J0IHtcbiAgdHlwZSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMsXG4gIHR5cGUgRHluYW1pY09wdGlvbnNMb2FkaW5nUHJvcHMsXG4gIHR5cGUgTG9hZGVyLFxuICB0eXBlIExvYWRlckNvbXBvbmVudCxcbn1cblxuZXhwb3J0IHR5cGUgRHluYW1pY09wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyAmIHtcbiAgbG9hZGluZz86ICgpID0+IEpTWC5FbGVtZW50IHwgbnVsbFxuICBsb2FkZXI/OiBMb2FkZXI8UD5cbiAgbG9hZGFibGVHZW5lcmF0ZWQ/OiBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnNcbiAgbW9kdWxlcz86IHN0cmluZ1tdXG4gIHNzcj86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVPcHRpb25zPFAgPSB7fT4gPSBEeW5hbWljT3B0aW9uczxQPlxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUZuPFAgPSB7fT4gPSAoXG4gIG9wdHM6IExvYWRhYmxlT3B0aW9uczxQPlxuKSA9PiBSZWFjdC5Db21wb25lbnRUeXBlPFA+XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlQ29tcG9uZW50PFAgPSB7fT4gPSBSZWFjdC5Db21wb25lbnRUeXBlPFA+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWM8UCA9IHt9PihcbiAgZHluYW1pY09wdGlvbnM6IER5bmFtaWNPcHRpb25zPFA+IHwgTG9hZGVyPFA+LFxuICBvcHRpb25zPzogRHluYW1pY09wdGlvbnM8UD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4ge1xuICBjb25zdCBsb2FkYWJsZU9wdGlvbnM6IExvYWRhYmxlT3B0aW9uczxQPiA9IHt9XG5cbiAgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9uc1xuICB9XG5cbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgLi4ub3B0aW9ucyxcbiAgfVxuXG4gIHJldHVybiBMb2FkYWJsZSh7XG4gICAgLi4ubWVyZ2VkT3B0aW9ucyxcbiAgICBtb2R1bGVzOiBtZXJnZWRPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkPy5tb2R1bGVzLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwibG9hZGFibGVPcHRpb25zIiwibG9hZGVyIiwiTG9hZGFibGUiLCJtb2R1bGVzIiwibG9hZGFibGVHZW5lcmF0ZWQiXSwibWFwcGluZ3MiOiI7OzsrQkFrQ0EsV0FBQTs7O2VBQXdCQTs7OzttRUFoQ0g7QUFnQ04sU0FBU0EsUUFDdEJDLGNBQTZDLEVBQzdDQyxPQUEyQjtRQWVoQkM7SUFiWCxNQUFNQyxrQkFBc0MsQ0FBQztJQUU3QyxJQUFJLE9BQU9ILG1CQUFtQixZQUFZO1FBQ3hDRyxnQkFBZ0JDLE1BQU0sR0FBR0o7SUFDM0I7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDcEIsR0FBR0MsZUFBZTtRQUNsQixHQUFHRixPQUFPO0lBQ1o7SUFFQSxPQUFPSSxDQUFBQSxHQUFBQSxVQUFBQSxPQUFRLEVBQUM7UUFDZCxHQUFHSCxhQUFhO1FBQ2hCSSxPQUFPLEVBQUEsQ0FBRUosbUNBQUFBLGNBQWNLLGlCQUFpQixLQUFBLE9BQUEsS0FBQSxJQUEvQkwsaUNBQWlDSSxPQUFPO0lBQ25EO0FBQ0YiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fV0KfQ==
module.exports = {

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
"[project]/src/app/auth/login/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LoginLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/roleRedirect.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function LoginLayout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id, role, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && id && role) {
            const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPathByRole"])(role, id);
            router.replace(path);
        }
    }, [
        id,
        role,
        isLoading,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}}),
"[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}}),
"[project]/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}}),
"[project]/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}}),
"[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
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
"[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/next/dist/lib/metadata/metadata-constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createPostponedAbortSignal: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackFallbackParamAccessed: null,
    trackSynchronousPlatformIOAccessInDev: null,
    trackSynchronousRequestDataAccessInDev: null,
    useDynamicRouteParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackFallbackParamAccessed: function() {
        return trackFallbackParamAccessed;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _metadataconstants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/metadata/metadata-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E550",
                enumerable: false,
                configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        // TODO: it makes no sense to have these work unit store types during a dev render.
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-client' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    const controller = new AbortController();
    if (workUnitStore.cacheSignal) {
        // If we have a cacheSignal it means we're in a prospective render. If the input
        // we're waiting on is coming from another cache, we do want to wait for it so that
        // we can resolve this cache entry too.
        workUnitStore.cacheSignal.inputReady().then(()=>{
            controller.abort();
        });
    } else {
        // Otherwise we're in the final render and we should already have all our caches
        // filled. We might still be waiting on some microtasks so we wait one tick before
        // giving up. When we give up, we still want to render the content of this cache
        // as deeply as we can so that we can suspend as deeply as possible in the tree
        // or not at all if we don't end up waiting for the input.
        (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
        // There are fallback route params, we should track these as dynamic
        // accesses.
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        if (workUnitStore) {
            // We're prerendering with dynamicIO or PPR or both
            if (workUnitStore.type === 'prerender-client') {
                // We are in a prerender with dynamicIO semantics
                // We are going to hang here and never resolve. This will cause the currently
                // rendering component to effectively be a dynamic hole
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
            } else if (workUnitStore.type === 'prerender-ppr') {
                // We're prerendering with PPR
                postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasSuspenseAfterBodyOrHtmlRegex = /\n\s+at (?:body|html) \(<anonymous>\)[\s\S]*?\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseAfterBodyOrHtmlRegex.test(componentStack)) {
        // This prerender has a Suspense boundary above the body which
        // effectively opts the page into allowing 100% dynamic rendering
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (workStore.invalidDynamicUsageError) {
        logDisallowedDynamicError(workStore, workStore.invalidDynamicUsageError);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
            // There is no shell and the server did something sync dynamic likely
            // leading to an early termination of the prerender before the shell
            // could be completed. We terminate the build/validating render.
            logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}}),
"[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}}),
"[project]/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            default:
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map
}}),
"[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _getsegmentvalue = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-ssr] (ecmascript)");
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy91dGlscy9yb2xlUmVkaXJlY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFBhdGhCeVJvbGUgPSAocm9sZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFyb2xlIHx8ICFpZCkge1xyXG4gICAgcmV0dXJuICcvJztcclxuICB9XHJcbiAgY29uc3QgY2xlYW5JZCA9IGlkLnNwbGl0KCctJylbMV07XHJcbiAgY29uc3Qgbm9ybWFsaXplZFJvbGUgPSByb2xlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnLScpXHJcbiAgc3dpdGNoIChub3JtYWxpemVkUm9sZSkge1xyXG4gICAgY2FzZSAnc3R1ZGVudCc6XHJcbiAgICAgIHJldHVybiBgL3N0dWRlbnQvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdhZG1pbic6XHJcbiAgICAgIHJldHVybiBgL2FkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgY2FzZSAndGVhY2hlcic6XHJcbiAgICAgIHJldHVybiBgL3RlYWNoZXIvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdzdXBlci1hZG1pbic6XHJcbiAgICAgIHJldHVybiBgL3N1cGVyLWFkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICcvJztcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLGdCQUFnQixDQUFDLE1BQWM7SUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQ2hCLE9BQU87SUFDVDtJQUNBLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoQyxNQUFNLGlCQUFpQixLQUFLLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTtJQUN4RCxPQUFRO1FBQ04sS0FBSztZQUNILE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUztRQUM5QixLQUFLO1lBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTO1FBQzVCLEtBQUs7WUFDSCxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVM7UUFDOUIsS0FBSztZQUNILE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUztRQUNsQztZQUNFLE9BQU87SUFDWDtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzMSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VBdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldE1lUXVlcnkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2F1dGhBcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZUdldE1lUXVlcnkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IGRhdGE/LmRhdGEsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0Vycm9yLFxyXG4gICAgaXNMb2dnZWRJbjogISFkYXRhLFxyXG4gICAgcm9sZTogZGF0YT8uZGF0YT8ucm9sZSxcclxuICAgIGlkOiBkYXRhPy5kYXRhPy5pZCxcclxuICAgIG1vbmdvSWQ6IGRhdGE/LmRhdGE/Ll9pZCxcclxuICB9O1xyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFTyxNQUFNLFVBQVU7SUFDckIsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQSxHQUFBLG1JQUFBLENBQUEsZ0JBQWEsQUFBRDtJQUVqRCxPQUFPO1FBQ0wsTUFBTSxNQUFNO1FBQ1o7UUFDQTtRQUNBLFlBQVksQ0FBQyxDQUFDO1FBQ2QsTUFBTSxNQUFNLE1BQU07UUFDbEIsSUFBSSxNQUFNLE1BQU07UUFDaEIsU0FBUyxNQUFNLE1BQU07SUFDdkI7QUFDRiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNTIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvYXBwL2F1dGgvbG9naW4vbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IGdldFBhdGhCeVJvbGUgfSBmcm9tICdAL3V0aWxzL3JvbGVSZWRpcmVjdCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2hvb2tzL3VzZUF1dGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5MYXlvdXQoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQsIHJvbGUsIGlzTG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0xvYWRpbmcgJiYgaWQgJiYgcm9sZSkge1xyXG4gICAgICBjb25zdCBwYXRoID0gZ2V0UGF0aEJ5Um9sZShyb2xlLCBpZCk7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKHBhdGgpO1xyXG4gICAgfVxyXG4gIH0sIFtpZCwgcm9sZSwgaXNMb2FkaW5nLCByb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Ozs7OztBQU9lLFNBQVMsWUFBWSxFQUNsQyxRQUFRLEVBR1Q7SUFDQyxNQUFNLFNBQVMsQ0FBQSxHQUFBLGtJQUFBLENBQUEsWUFBUyxBQUFEO0lBQ3ZCLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUEsR0FBQSx1SEFBQSxDQUFBLFVBQU8sQUFBRDtJQUV0QyxDQUFBLEdBQUEscU1BQUEsQ0FBQSxZQUFTLEFBQUQsRUFBRTtRQUNSLElBQUksQ0FBQyxhQUFhLE1BQU0sTUFBTTtZQUM1QixNQUFNLE9BQU8sQ0FBQSxHQUFBLDRIQUFBLENBQUEsZ0JBQWEsQUFBRCxFQUFFLE1BQU07WUFDakMsT0FBTyxPQUFPLENBQUM7UUFDakI7SUFDRixHQUFHO1FBQUM7UUFBSTtRQUFNO1FBQVc7S0FBTztJQUVoQyxxQkFBTztrQkFBRzs7QUFDWiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogOTAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvcm91dGVyLXJlZHVjZXIvcmVkdWNlcnMvZ2V0LXNlZ21lbnQtdmFsdWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTZWdtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmVyL2FwcC1yZW5kZXIvdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWdtZW50VmFsdWUoc2VnbWVudDogU2VnbWVudCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShzZWdtZW50KSA/IHNlZ21lbnRbMV0gOiBzZWdtZW50XG59XG4iXSwibmFtZXMiOlsiZ2V0U2VnbWVudFZhbHVlIiwic2VnbWVudCIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7OytCQUVnQkEsbUJBQUFBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGdCQUFnQkMsT0FBZ0I7SUFDOUMsT0FBT0MsTUFBTUMsT0FBTyxDQUFDRixXQUFXQSxPQUFPLENBQUMsRUFBRSxHQUFHQTtBQUMvQyIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxMTUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9zZWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2VnbWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9hcHAtcmVuZGVyL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNHcm91cFNlZ21lbnQoc2VnbWVudDogc3RyaW5nKSB7XG4gIC8vIFVzZSBhcnJheVswXSBmb3IgcGVyZm9ybWFudCBwdXJwb3NlXG4gIHJldHVybiBzZWdtZW50WzBdID09PSAnKCcgJiYgc2VnbWVudC5lbmRzV2l0aCgnKScpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcmFsbGVsUm91dGVTZWdtZW50KHNlZ21lbnQ6IHN0cmluZykge1xuICByZXR1cm4gc2VnbWVudC5zdGFydHNXaXRoKCdAJykgJiYgc2VnbWVudCAhPT0gJ0BjaGlsZHJlbidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNlYXJjaFBhcmFtc0lmUGFnZVNlZ21lbnQoXG4gIHNlZ21lbnQ6IFNlZ21lbnQsXG4gIHNlYXJjaFBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+XG4pIHtcbiAgY29uc3QgaXNQYWdlU2VnbWVudCA9IHNlZ21lbnQuaW5jbHVkZXMoUEFHRV9TRUdNRU5UX0tFWSlcblxuICBpZiAoaXNQYWdlU2VnbWVudCkge1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkUXVlcnkgPSBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXJhbXMpXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkUXVlcnkgIT09ICd7fSdcbiAgICAgID8gUEFHRV9TRUdNRU5UX0tFWSArICc/JyArIHN0cmluZ2lmaWVkUXVlcnlcbiAgICAgIDogUEFHRV9TRUdNRU5UX0tFWVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRcbn1cblxuZXhwb3J0IGNvbnN0IFBBR0VfU0VHTUVOVF9LRVkgPSAnX19QQUdFX18nXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRUdNRU5UX0tFWSA9ICdfX0RFRkFVTFRfXydcbiJdLCJuYW1lcyI6WyJERUZBVUxUX1NFR01FTlRfS0VZIiwiUEFHRV9TRUdNRU5UX0tFWSIsImFkZFNlYXJjaFBhcmFtc0lmUGFnZVNlZ21lbnQiLCJpc0dyb3VwU2VnbWVudCIsImlzUGFyYWxsZWxSb3V0ZVNlZ21lbnQiLCJzZWdtZW50IiwiZW5kc1dpdGgiLCJzdGFydHNXaXRoIiwic2VhcmNoUGFyYW1zIiwiaXNQYWdlU2VnbWVudCIsImluY2x1ZGVzIiwic3RyaW5naWZpZWRRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNEJhQSxtQkFBbUIsRUFBQTtlQUFuQkE7O0lBREFDLGdCQUFnQixFQUFBO2VBQWhCQTs7SUFoQkdDLDRCQUE0QixFQUFBO2VBQTVCQTs7SUFUQUMsY0FBYyxFQUFBO2VBQWRBOztJQUtBQyxzQkFBc0IsRUFBQTtlQUF0QkE7OztBQUxULFNBQVNELGVBQWVFLE9BQWU7SUFDNUMsc0NBQXNDO0lBQ3RDLE9BQU9BLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBT0EsUUFBUUMsUUFBUSxDQUFDO0FBQ2hEO0FBRU8sU0FBU0YsdUJBQXVCQyxPQUFlO0lBQ3BELE9BQU9BLFFBQVFFLFVBQVUsQ0FBQyxRQUFRRixZQUFZO0FBQ2hEO0FBRU8sU0FBU0gsNkJBQ2RHLE9BQWdCLEVBQ2hCRyxZQUEyRDtJQUUzRCxNQUFNQyxnQkFBZ0JKLFFBQVFLLFFBQVEsQ0FBQ1Q7SUFFdkMsSUFBSVEsZUFBZTtRQUNqQixNQUFNRSxtQkFBbUJDLEtBQUtDLFNBQVMsQ0FBQ0w7UUFDeEMsT0FBT0cscUJBQXFCLE9BQ3hCVixtQkFBbUIsTUFBTVUsbUJBQ3pCVjtJQUNOO0lBRUEsT0FBT0k7QUFDVDtBQUVPLE1BQU1KLG1CQUFtQjtBQUN6QixNQUFNRCxzQkFBc0IiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTcxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2NsaWVudC9jb21wb25lbnRzL3JlZGlyZWN0LXN0YXR1cy1jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJlZGlyZWN0U3RhdHVzQ29kZSB7XG4gIFNlZU90aGVyID0gMzAzLFxuICBUZW1wb3JhcnlSZWRpcmVjdCA9IDMwNyxcbiAgUGVybWFuZW50UmVkaXJlY3QgPSAzMDgsXG59XG4iXSwibmFtZXMiOlsiUmVkaXJlY3RTdGF0dXNDb2RlIl0sIm1hcHBpbmdzIjoiOzs7K0JBQVlBLHNCQUFBQTs7O2VBQUFBOzs7QUFBTCxJQUFLQSxxQkFBQUEsV0FBQUEsR0FBQUEsU0FBQUEsa0JBQUFBOzs7O1dBQUFBIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE5OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9jbGllbnQvY29tcG9uZW50cy9yZWRpcmVjdC1lcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcmVjdFN0YXR1c0NvZGUgfSBmcm9tICcuL3JlZGlyZWN0LXN0YXR1cy1jb2RlJ1xuXG5leHBvcnQgY29uc3QgUkVESVJFQ1RfRVJST1JfQ09ERSA9ICdORVhUX1JFRElSRUNUJ1xuXG5leHBvcnQgZW51bSBSZWRpcmVjdFR5cGUge1xuICBwdXNoID0gJ3B1c2gnLFxuICByZXBsYWNlID0gJ3JlcGxhY2UnLFxufVxuXG5leHBvcnQgdHlwZSBSZWRpcmVjdEVycm9yID0gRXJyb3IgJiB7XG4gIGRpZ2VzdDogYCR7dHlwZW9mIFJFRElSRUNUX0VSUk9SX0NPREV9OyR7UmVkaXJlY3RUeXBlfTske3N0cmluZ307JHtSZWRpcmVjdFN0YXR1c0NvZGV9O2Bcbn1cblxuLyoqXG4gKiBDaGVja3MgYW4gZXJyb3IgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gZXJyb3IgZ2VuZXJhdGVkIGJ5IHRoZVxuICogYHJlZGlyZWN0KHVybClgIGhlbHBlci5cbiAqXG4gKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIHRoYXQgbWF5IHJlZmVyZW5jZSBhIHJlZGlyZWN0IGVycm9yXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBlcnJvciBpcyBhIHJlZGlyZWN0IGVycm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZGlyZWN0RXJyb3IoZXJyb3I6IHVua25vd24pOiBlcnJvciBpcyBSZWRpcmVjdEVycm9yIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBlcnJvciAhPT0gJ29iamVjdCcgfHxcbiAgICBlcnJvciA9PT0gbnVsbCB8fFxuICAgICEoJ2RpZ2VzdCcgaW4gZXJyb3IpIHx8XG4gICAgdHlwZW9mIGVycm9yLmRpZ2VzdCAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBkaWdlc3QgPSBlcnJvci5kaWdlc3Quc3BsaXQoJzsnKVxuICBjb25zdCBbZXJyb3JDb2RlLCB0eXBlXSA9IGRpZ2VzdFxuICBjb25zdCBkZXN0aW5hdGlvbiA9IGRpZ2VzdC5zbGljZSgyLCAtMikuam9pbignOycpXG4gIGNvbnN0IHN0YXR1cyA9IGRpZ2VzdC5hdCgtMilcblxuICBjb25zdCBzdGF0dXNDb2RlID0gTnVtYmVyKHN0YXR1cylcblxuICByZXR1cm4gKFxuICAgIGVycm9yQ29kZSA9PT0gUkVESVJFQ1RfRVJST1JfQ09ERSAmJlxuICAgICh0eXBlID09PSAncmVwbGFjZScgfHwgdHlwZSA9PT0gJ3B1c2gnKSAmJlxuICAgIHR5cGVvZiBkZXN0aW5hdGlvbiA9PT0gJ3N0cmluZycgJiZcbiAgICAhaXNOYU4oc3RhdHVzQ29kZSkgJiZcbiAgICBzdGF0dXNDb2RlIGluIFJlZGlyZWN0U3RhdHVzQ29kZVxuICApXG59XG4iXSwibmFtZXMiOlsiUkVESVJFQ1RfRVJST1JfQ09ERSIsIlJlZGlyZWN0VHlwZSIsImlzUmVkaXJlY3RFcnJvciIsImVycm9yIiwiZGlnZXN0Iiwic3BsaXQiLCJlcnJvckNvZGUiLCJ0eXBlIiwiZGVzdGluYXRpb24iLCJzbGljZSIsImpvaW4iLCJzdGF0dXMiLCJhdCIsInN0YXR1c0NvZGUiLCJOdW1iZXIiLCJpc05hTiIsIlJlZGlyZWN0U3RhdHVzQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLG1CQUFtQixFQUFBO2VBQW5CQTs7SUFFREMsWUFBWSxFQUFBO2VBQVpBOztJQWdCSUMsZUFBZSxFQUFBO2VBQWZBOzs7b0NBcEJtQjtBQUU1QixNQUFNRixzQkFBc0I7QUFFNUIsSUFBS0MsZUFBQUEsV0FBQUEsR0FBQUEsU0FBQUEsWUFBQUE7OztXQUFBQTs7QUFnQkwsU0FBU0MsZ0JBQWdCQyxLQUFjO0lBQzVDLElBQ0UsT0FBT0EsVUFBVSxZQUNqQkEsVUFBVSxRQUNWLENBQUUsQ0FBQSxZQUFZQSxLQUFJLEtBQ2xCLE9BQU9BLE1BQU1DLE1BQU0sS0FBSyxVQUN4QjtRQUNBLE9BQU87SUFDVDtJQUVBLE1BQU1BLFNBQVNELE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0MsV0FBV0MsS0FBSyxHQUFHSDtJQUMxQixNQUFNSSxjQUFjSixPQUFPSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdDLElBQUksQ0FBQztJQUM3QyxNQUFNQyxTQUFTUCxPQUFPUSxFQUFFLENBQUMsQ0FBQztJQUUxQixNQUFNQyxhQUFhQyxPQUFPSDtJQUUxQixPQUNFTCxjQUFjTix1QkFDYk8sQ0FBQUEsU0FBUyxhQUFhQSxTQUFTLE1BQUssS0FDckMsT0FBT0MsZ0JBQWdCLFlBQ3ZCLENBQUNPLE1BQU1GLGVBQ1BBLGNBQWNHLG9CQUFBQSxrQkFBa0I7QUFFcEMiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMjU1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2NsaWVudC9jb21wb25lbnRzL3JlZGlyZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlyZWN0U3RhdHVzQ29kZSB9IGZyb20gJy4vcmVkaXJlY3Qtc3RhdHVzLWNvZGUnXG5pbXBvcnQge1xuICBSZWRpcmVjdFR5cGUsXG4gIHR5cGUgUmVkaXJlY3RFcnJvcixcbiAgaXNSZWRpcmVjdEVycm9yLFxuICBSRURJUkVDVF9FUlJPUl9DT0RFLFxufSBmcm9tICcuL3JlZGlyZWN0LWVycm9yJ1xuXG5jb25zdCBhY3Rpb25Bc3luY1N0b3JhZ2UgPVxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICAgID8gKFxuICAgICAgICByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvYXBwLXJlbmRlci9hY3Rpb24tYXN5bmMtc3RvcmFnZS5leHRlcm5hbCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3NlcnZlci9hcHAtcmVuZGVyL2FjdGlvbi1hc3luYy1zdG9yYWdlLmV4dGVybmFsJylcbiAgICAgICkuYWN0aW9uQXN5bmNTdG9yYWdlXG4gICAgOiB1bmRlZmluZWRcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZGlyZWN0RXJyb3IoXG4gIHVybDogc3RyaW5nLFxuICB0eXBlOiBSZWRpcmVjdFR5cGUsXG4gIHN0YXR1c0NvZGU6IFJlZGlyZWN0U3RhdHVzQ29kZSA9IFJlZGlyZWN0U3RhdHVzQ29kZS5UZW1wb3JhcnlSZWRpcmVjdFxuKTogUmVkaXJlY3RFcnJvciB7XG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFJFRElSRUNUX0VSUk9SX0NPREUpIGFzIFJlZGlyZWN0RXJyb3JcbiAgZXJyb3IuZGlnZXN0ID0gYCR7UkVESVJFQ1RfRVJST1JfQ09ERX07JHt0eXBlfTske3VybH07JHtzdGF0dXNDb2RlfTtgXG4gIHJldHVybiBlcnJvclxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byByZWRpcmVjdCB0aGUgdXNlciB0byBhbm90aGVyIFVSTC4gSXQgY2FuIGJlIHVzZWQgaW5cbiAqIFtTZXJ2ZXIgQ29tcG9uZW50c10oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2J1aWxkaW5nLXlvdXItYXBwbGljYXRpb24vcmVuZGVyaW5nL3NlcnZlci1jb21wb25lbnRzKSxcbiAqIFtSb3V0ZSBIYW5kbGVyc10oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2J1aWxkaW5nLXlvdXItYXBwbGljYXRpb24vcm91dGluZy9yb3V0ZS1oYW5kbGVycyksIGFuZFxuICogW1NlcnZlciBBY3Rpb25zXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9kYXRhLWZldGNoaW5nL3NlcnZlci1hY3Rpb25zLWFuZC1tdXRhdGlvbnMpLlxuICpcbiAqIC0gSW4gYSBTZXJ2ZXIgQ29tcG9uZW50LCB0aGlzIHdpbGwgaW5zZXJ0IGEgbWV0YSB0YWcgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHRhcmdldCBwYWdlLlxuICogLSBJbiBhIFJvdXRlIEhhbmRsZXIgb3IgU2VydmVyIEFjdGlvbiwgaXQgd2lsbCBzZXJ2ZSBhIDMwNy8zMDMgdG8gdGhlIGNhbGxlci5cbiAqIC0gSW4gYSBTZXJ2ZXIgQWN0aW9uLCB0eXBlIGRlZmF1bHRzIHRvICdwdXNoJyBhbmQgJ3JlcGxhY2UnIGVsc2V3aGVyZS5cbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGByZWRpcmVjdGBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy9yZWRpcmVjdClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KFxuICAvKiogVGhlIFVSTCB0byByZWRpcmVjdCB0byAqL1xuICB1cmw6IHN0cmluZyxcbiAgdHlwZT86IFJlZGlyZWN0VHlwZVxuKTogbmV2ZXIge1xuICB0eXBlID8/PSBhY3Rpb25Bc3luY1N0b3JhZ2U/LmdldFN0b3JlKCk/LmlzQWN0aW9uXG4gICAgPyBSZWRpcmVjdFR5cGUucHVzaFxuICAgIDogUmVkaXJlY3RUeXBlLnJlcGxhY2VcblxuICB0aHJvdyBnZXRSZWRpcmVjdEVycm9yKHVybCwgdHlwZSwgUmVkaXJlY3RTdGF0dXNDb2RlLlRlbXBvcmFyeVJlZGlyZWN0KVxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byByZWRpcmVjdCB0aGUgdXNlciB0byBhbm90aGVyIFVSTC4gSXQgY2FuIGJlIHVzZWQgaW5cbiAqIFtTZXJ2ZXIgQ29tcG9uZW50c10oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2J1aWxkaW5nLXlvdXItYXBwbGljYXRpb24vcmVuZGVyaW5nL3NlcnZlci1jb21wb25lbnRzKSxcbiAqIFtSb3V0ZSBIYW5kbGVyc10oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2J1aWxkaW5nLXlvdXItYXBwbGljYXRpb24vcm91dGluZy9yb3V0ZS1oYW5kbGVycyksIGFuZFxuICogW1NlcnZlciBBY3Rpb25zXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9kYXRhLWZldGNoaW5nL3NlcnZlci1hY3Rpb25zLWFuZC1tdXRhdGlvbnMpLlxuICpcbiAqIC0gSW4gYSBTZXJ2ZXIgQ29tcG9uZW50LCB0aGlzIHdpbGwgaW5zZXJ0IGEgbWV0YSB0YWcgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHRhcmdldCBwYWdlLlxuICogLSBJbiBhIFJvdXRlIEhhbmRsZXIgb3IgU2VydmVyIEFjdGlvbiwgaXQgd2lsbCBzZXJ2ZSBhIDMwOC8zMDMgdG8gdGhlIGNhbGxlci5cbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGByZWRpcmVjdGBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy9yZWRpcmVjdClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcm1hbmVudFJlZGlyZWN0KFxuICAvKiogVGhlIFVSTCB0byByZWRpcmVjdCB0byAqL1xuICB1cmw6IHN0cmluZyxcbiAgdHlwZTogUmVkaXJlY3RUeXBlID0gUmVkaXJlY3RUeXBlLnJlcGxhY2Vcbik6IG5ldmVyIHtcbiAgdGhyb3cgZ2V0UmVkaXJlY3RFcnJvcih1cmwsIHR5cGUsIFJlZGlyZWN0U3RhdHVzQ29kZS5QZXJtYW5lbnRSZWRpcmVjdClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbmNvZGVkIFVSTCBmcm9tIHRoZSBlcnJvciBpZiBpdCdzIGEgUmVkaXJlY3RFcnJvciwgbnVsbFxuICogb3RoZXJ3aXNlLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB2YWxpZGF0ZSB0aGUgVVJMIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgdGhhdCBtYXkgYmUgYSByZWRpcmVjdCBlcnJvclxuICogQHJldHVybiB0aGUgdXJsIGlmIHRoZSBlcnJvciB3YXMgYSByZWRpcmVjdCBlcnJvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMRnJvbVJlZGlyZWN0RXJyb3IoZXJyb3I6IFJlZGlyZWN0RXJyb3IpOiBzdHJpbmdcbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkxGcm9tUmVkaXJlY3RFcnJvcihlcnJvcjogdW5rbm93bik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIWlzUmVkaXJlY3RFcnJvcihlcnJvcikpIHJldHVybiBudWxsXG5cbiAgLy8gU2xpY2VzIG9mZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBkaWdlc3QgdGhhdCBjb250YWlucyB0aGUgY29kZSBhbmQgdGhlXG4gIC8vIHNlcGFyYXRpbmcgJzsnLlxuICByZXR1cm4gZXJyb3IuZGlnZXN0LnNwbGl0KCc7Jykuc2xpY2UoMiwgLTIpLmpvaW4oJzsnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkaXJlY3RUeXBlRnJvbUVycm9yKGVycm9yOiBSZWRpcmVjdEVycm9yKTogUmVkaXJlY3RUeXBlIHtcbiAgaWYgKCFpc1JlZGlyZWN0RXJyb3IoZXJyb3IpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSByZWRpcmVjdCBlcnJvcicpXG4gIH1cblxuICByZXR1cm4gZXJyb3IuZGlnZXN0LnNwbGl0KCc7JywgMilbMV0gYXMgUmVkaXJlY3RUeXBlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWRpcmVjdFN0YXR1c0NvZGVGcm9tRXJyb3IoZXJyb3I6IFJlZGlyZWN0RXJyb3IpOiBudW1iZXIge1xuICBpZiAoIWlzUmVkaXJlY3RFcnJvcihlcnJvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHJlZGlyZWN0IGVycm9yJylcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIoZXJyb3IuZGlnZXN0LnNwbGl0KCc7JykuYXQoLTIpKVxufVxuIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0RXJyb3IiLCJnZXRSZWRpcmVjdFN0YXR1c0NvZGVGcm9tRXJyb3IiLCJnZXRSZWRpcmVjdFR5cGVGcm9tRXJyb3IiLCJnZXRVUkxGcm9tUmVkaXJlY3RFcnJvciIsInBlcm1hbmVudFJlZGlyZWN0IiwicmVkaXJlY3QiLCJhY3Rpb25Bc3luY1N0b3JhZ2UiLCJ3aW5kb3ciLCJyZXF1aXJlIiwidW5kZWZpbmVkIiwidXJsIiwidHlwZSIsInN0YXR1c0NvZGUiLCJSZWRpcmVjdFN0YXR1c0NvZGUiLCJUZW1wb3JhcnlSZWRpcmVjdCIsImVycm9yIiwiRXJyb3IiLCJSRURJUkVDVF9FUlJPUl9DT0RFIiwiZGlnZXN0IiwiZ2V0U3RvcmUiLCJpc0FjdGlvbiIsIlJlZGlyZWN0VHlwZSIsInB1c2giLCJyZXBsYWNlIiwiUGVybWFuZW50UmVkaXJlY3QiLCJpc1JlZGlyZWN0RXJyb3IiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsIk51bWJlciIsImF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlZ0JBLGdCQUFnQixFQUFBO2VBQWhCQTs7SUE2RUFDLDhCQUE4QixFQUFBO2VBQTlCQTs7SUFSQUMsd0JBQXdCLEVBQUE7ZUFBeEJBOztJQVJBQyx1QkFBdUIsRUFBQTtlQUF2QkE7O0lBaEJBQyxpQkFBaUIsRUFBQTtlQUFqQkE7O0lBdkJBQyxRQUFRLEVBQUE7ZUFBUkE7OztvQ0FyQ21COytCQU01QjtBQUVQLE1BQU1DLHFCQUNKLE9BQU9DLFdBQVcscUJBRVpDLFFBQVEsMktBQ1JGLGtCQUFrQixHQUNwQkc7QUFFQyxTQUFTVCxpQkFDZFUsR0FBVyxFQUNYQyxJQUFrQixFQUNsQkMsVUFBcUU7SUFBckVBLElBQUFBLGVBQUFBLEtBQUFBLEdBQUFBLGFBQWlDQyxvQkFBQUEsa0JBQWtCLENBQUNDLGlCQUFpQjtJQUVyRSxNQUFNQyxRQUFRLE9BQUEsY0FBOEIsQ0FBOUIsSUFBSUMsTUFBTUMsZUFBQUEsbUJBQW1CLEdBQTdCLHFCQUFBO2VBQUE7b0JBQUE7c0JBQUE7SUFBNkI7SUFDM0NGLE1BQU1HLE1BQU0sR0FBTUQsZUFBQUEsbUJBQW1CLEdBQUMsTUFBR04sT0FBSyxNQUFHRCxNQUFJLE1BQUdFLGFBQVc7SUFDbkUsT0FBT0c7QUFDVDtBQWNPLFNBQVNWLFNBQ2QsMkJBQTJCLEdBQzNCSyxHQUFXLEVBQ1hDLElBQW1CO1FBRVZMO0lBQVRLLFFBQUFBLE9BQUFBLE9BQUFBLE9BQVNMLENBQUFBLHNCQUFBQSxPQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSwrQkFBQUEsbUJBQW9CYSxRQUFRLEVBQUEsS0FBQSxPQUFBLEtBQUEsSUFBNUJiLDZCQUFnQ2MsUUFBUSxJQUM3Q0MsZUFBQUEsWUFBWSxDQUFDQyxJQUFJLEdBQ2pCRCxlQUFBQSxZQUFZLENBQUNFLE9BQU87SUFFeEIsTUFBTXZCLGlCQUFpQlUsS0FBS0MsTUFBTUUsb0JBQUFBLGtCQUFrQixDQUFDQyxpQkFBaUI7QUFDeEU7QUFhTyxTQUFTVixrQkFDZCwyQkFBMkIsR0FDM0JNLEdBQVcsRUFDWEMsSUFBeUM7SUFBekNBLElBQUFBLFNBQUFBLEtBQUFBLEdBQUFBLE9BQXFCVSxlQUFBQSxZQUFZLENBQUNFLE9BQU87SUFFekMsTUFBTXZCLGlCQUFpQlUsS0FBS0MsTUFBTUUsb0JBQUFBLGtCQUFrQixDQUFDVyxpQkFBaUI7QUFDeEU7QUFVTyxTQUFTckIsd0JBQXdCWSxLQUFjO0lBQ3BELElBQUksQ0FBQ1UsQ0FBQUEsR0FBQUEsZUFBQUEsZUFBZSxFQUFDVixRQUFRLE9BQU87SUFFcEMsd0VBQXdFO0lBQ3hFLGtCQUFrQjtJQUNsQixPQUFPQSxNQUFNRyxNQUFNLENBQUNRLEtBQUssQ0FBQyxLQUFLQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdDLElBQUksQ0FBQztBQUNuRDtBQUVPLFNBQVMxQix5QkFBeUJhLEtBQW9CO0lBQzNELElBQUksQ0FBQ1UsQ0FBQUEsR0FBQUEsZUFBQUEsZUFBZSxFQUFDVixRQUFRO1FBQzNCLE1BQU0sT0FBQSxjQUFpQyxDQUFqQyxJQUFJQyxNQUFNLHlCQUFWLHFCQUFBO21CQUFBO3dCQUFBOzBCQUFBO1FBQWdDO0lBQ3hDO0lBRUEsT0FBT0QsTUFBTUcsTUFBTSxDQUFDUSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtBQUN0QztBQUVPLFNBQVN6QiwrQkFBK0JjLEtBQW9CO0lBQ2pFLElBQUksQ0FBQ1UsQ0FBQUEsR0FBQUEsZUFBQUEsZUFBZSxFQUFDVixRQUFRO1FBQzNCLE1BQU0sT0FBQSxjQUFpQyxDQUFqQyxJQUFJQyxNQUFNLHlCQUFWLHFCQUFBO21CQUFBO3dCQUFBOzBCQUFBO1FBQWdDO0lBQ3hDO0lBRUEsT0FBT2EsT0FBT2QsTUFBTUcsTUFBTSxDQUFDUSxLQUFLLENBQUMsS0FBS0ksRUFBRSxDQUFDLENBQUM7QUFDNUMiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzUzLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2NsaWVudC9jb21wb25lbnRzL2h0dHAtYWNjZXNzLWZhbGxiYWNrL2h0dHAtYWNjZXNzLWZhbGxiYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBIVFRQQWNjZXNzRXJyb3JTdGF0dXMgPSB7XG4gIE5PVF9GT1VORDogNDA0LFxuICBGT1JCSURERU46IDQwMyxcbiAgVU5BVVRIT1JJWkVEOiA0MDEsXG59XG5cbmNvbnN0IEFMTE9XRURfQ09ERVMgPSBuZXcgU2V0KE9iamVjdC52YWx1ZXMoSFRUUEFjY2Vzc0Vycm9yU3RhdHVzKSlcblxuZXhwb3J0IGNvbnN0IEhUVFBfRVJST1JfRkFMTEJBQ0tfRVJST1JfQ09ERSA9ICdORVhUX0hUVFBfRVJST1JfRkFMTEJBQ0snXG5cbmV4cG9ydCB0eXBlIEhUVFBBY2Nlc3NGYWxsYmFja0Vycm9yID0gRXJyb3IgJiB7XG4gIGRpZ2VzdDogYCR7dHlwZW9mIEhUVFBfRVJST1JfRkFMTEJBQ0tfRVJST1JfQ09ERX07JHtzdHJpbmd9YFxufVxuXG4vKipcbiAqIENoZWNrcyBhbiBlcnJvciB0byBkZXRlcm1pbmUgaWYgaXQncyBhbiBlcnJvciBnZW5lcmF0ZWQgYnlcbiAqIHRoZSBIVFRQIG5hdmlnYXRpb24gQVBJcyBgbm90Rm91bmQoKWAsIGBmb3JiaWRkZW4oKWAgb3IgYHVuYXV0aG9yaXplZCgpYC5cbiAqXG4gKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIHRoYXQgbWF5IHJlZmVyZW5jZSBhIEhUVFAgYWNjZXNzIGVycm9yXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBlcnJvciBpcyBhIEhUVFAgYWNjZXNzIGVycm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0hUVFBBY2Nlc3NGYWxsYmFja0Vycm9yKFxuICBlcnJvcjogdW5rbm93blxuKTogZXJyb3IgaXMgSFRUUEFjY2Vzc0ZhbGxiYWNrRXJyb3Ige1xuICBpZiAoXG4gICAgdHlwZW9mIGVycm9yICE9PSAnb2JqZWN0JyB8fFxuICAgIGVycm9yID09PSBudWxsIHx8XG4gICAgISgnZGlnZXN0JyBpbiBlcnJvcikgfHxcbiAgICB0eXBlb2YgZXJyb3IuZGlnZXN0ICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCBbcHJlZml4LCBodHRwU3RhdHVzXSA9IGVycm9yLmRpZ2VzdC5zcGxpdCgnOycpXG5cbiAgcmV0dXJuIChcbiAgICBwcmVmaXggPT09IEhUVFBfRVJST1JfRkFMTEJBQ0tfRVJST1JfQ09ERSAmJlxuICAgIEFMTE9XRURfQ09ERVMuaGFzKE51bWJlcihodHRwU3RhdHVzKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjZXNzRmFsbGJhY2tIVFRQU3RhdHVzKFxuICBlcnJvcjogSFRUUEFjY2Vzc0ZhbGxiYWNrRXJyb3Jcbik6IG51bWJlciB7XG4gIGNvbnN0IGh0dHBTdGF0dXMgPSBlcnJvci5kaWdlc3Quc3BsaXQoJzsnKVsxXVxuICByZXR1cm4gTnVtYmVyKGh0dHBTdGF0dXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2Nlc3NGYWxsYmFja0Vycm9yVHlwZUJ5U3RhdHVzKFxuICBzdGF0dXM6IG51bWJlclxuKTogJ25vdC1mb3VuZCcgfCAnZm9yYmlkZGVuJyB8ICd1bmF1dGhvcml6ZWQnIHwgdW5kZWZpbmVkIHtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIHJldHVybiAndW5hdXRob3JpemVkJ1xuICAgIGNhc2UgNDAzOlxuICAgICAgcmV0dXJuICdmb3JiaWRkZW4nXG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4gJ25vdC1mb3VuZCdcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVFRQQWNjZXNzRXJyb3JTdGF0dXMiLCJIVFRQX0VSUk9SX0ZBTExCQUNLX0VSUk9SX0NPREUiLCJnZXRBY2Nlc3NGYWxsYmFja0Vycm9yVHlwZUJ5U3RhdHVzIiwiZ2V0QWNjZXNzRmFsbGJhY2tIVFRQU3RhdHVzIiwiaXNIVFRQQWNjZXNzRmFsbGJhY2tFcnJvciIsIk5PVF9GT1VORCIsIkZPUkJJRERFTiIsIlVOQVVUSE9SSVpFRCIsIkFMTE9XRURfQ09ERVMiLCJTZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlcnJvciIsImRpZ2VzdCIsInByZWZpeCIsImh0dHBTdGF0dXMiLCJzcGxpdCIsImhhcyIsIk51bWJlciIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBYUEscUJBQXFCLEVBQUE7ZUFBckJBOztJQVFBQyw4QkFBOEIsRUFBQTtlQUE5QkE7O0lBdUNHQyxrQ0FBa0MsRUFBQTtlQUFsQ0E7O0lBUEFDLDJCQUEyQixFQUFBO2VBQTNCQTs7SUFuQkFDLHlCQUF5QixFQUFBO2VBQXpCQTs7O0FBckJULE1BQU1KLHdCQUF3QjtJQUNuQ0ssV0FBVztJQUNYQyxXQUFXO0lBQ1hDLGNBQWM7QUFDaEI7QUFFQSxNQUFNQyxnQkFBZ0IsSUFBSUMsSUFBSUMsT0FBT0MsTUFBTSxDQUFDWDtBQUVyQyxNQUFNQyxpQ0FBaUM7QUFhdkMsU0FBU0csMEJBQ2RRLEtBQWM7SUFFZCxJQUNFLE9BQU9BLFVBQVUsWUFDakJBLFVBQVUsUUFDVixDQUFFLENBQUEsWUFBWUEsS0FBSSxLQUNsQixPQUFPQSxNQUFNQyxNQUFNLEtBQUssVUFDeEI7UUFDQSxPQUFPO0lBQ1Q7SUFDQSxNQUFNLENBQUNDLFFBQVFDLFdBQVcsR0FBR0gsTUFBTUMsTUFBTSxDQUFDRyxLQUFLLENBQUM7SUFFaEQsT0FDRUYsV0FBV2Isa0NBQ1hPLGNBQWNTLEdBQUcsQ0FBQ0MsT0FBT0g7QUFFN0I7QUFFTyxTQUFTWiw0QkFDZFMsS0FBOEI7SUFFOUIsTUFBTUcsYUFBYUgsTUFBTUMsTUFBTSxDQUFDRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDN0MsT0FBT0UsT0FBT0g7QUFDaEI7QUFFTyxTQUFTYixtQ0FDZGlCLE1BQWM7SUFFZCxPQUFRQTtRQUNOLEtBQUs7WUFDSCxPQUFPO1FBQ1QsS0FBSztZQUNILE9BQU87UUFDVCxLQUFLO1lBQ0gsT0FBTztRQUNUO1lBQ0U7SUFDSjtBQUNGIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDQyOSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9jbGllbnQvY29tcG9uZW50cy9ub3QtZm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSFRUUF9FUlJPUl9GQUxMQkFDS19FUlJPUl9DT0RFLFxuICB0eXBlIEhUVFBBY2Nlc3NGYWxsYmFja0Vycm9yLFxufSBmcm9tICcuL2h0dHAtYWNjZXNzLWZhbGxiYWNrL2h0dHAtYWNjZXNzLWZhbGxiYWNrJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byByZW5kZXIgdGhlIFtub3QtZm91bmQuanMgZmlsZV0oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2FwaS1yZWZlcmVuY2UvZmlsZS1jb252ZW50aW9ucy9ub3QtZm91bmQpXG4gKiB3aXRoaW4gYSByb3V0ZSBzZWdtZW50IGFzIHdlbGwgYXMgaW5qZWN0IGEgdGFnLlxuICpcbiAqIGBub3RGb3VuZCgpYCBjYW4gYmUgdXNlZCBpblxuICogW1NlcnZlciBDb21wb25lbnRzXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9yZW5kZXJpbmcvc2VydmVyLWNvbXBvbmVudHMpLFxuICogW1JvdXRlIEhhbmRsZXJzXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9yb3V0aW5nL3JvdXRlLWhhbmRsZXJzKSwgYW5kXG4gKiBbU2VydmVyIEFjdGlvbnNdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL2RhdGEtZmV0Y2hpbmcvc2VydmVyLWFjdGlvbnMtYW5kLW11dGF0aW9ucykuXG4gKlxuICogLSBJbiBhIFNlcnZlciBDb21wb25lbnQsIHRoaXMgd2lsbCBpbnNlcnQgYSBgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5gIG1ldGEgdGFnIGFuZCBzZXQgdGhlIHN0YXR1cyBjb2RlIHRvIDQwNC5cbiAqIC0gSW4gYSBSb3V0ZSBIYW5kbGVyIG9yIFNlcnZlciBBY3Rpb24sIGl0IHdpbGwgc2VydmUgYSA0MDQgdG8gdGhlIGNhbGxlci5cbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGBub3RGb3VuZGBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy9ub3QtZm91bmQpXG4gKi9cblxuY29uc3QgRElHRVNUID0gYCR7SFRUUF9FUlJPUl9GQUxMQkFDS19FUlJPUl9DT0RFfTs0MDRgXG5cbmV4cG9ydCBmdW5jdGlvbiBub3RGb3VuZCgpOiBuZXZlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKERJR0VTVCkgYXMgSFRUUEFjY2Vzc0ZhbGxiYWNrRXJyb3JcbiAgOyhlcnJvciBhcyBIVFRQQWNjZXNzRmFsbGJhY2tFcnJvcikuZGlnZXN0ID0gRElHRVNUXG5cbiAgdGhyb3cgZXJyb3Jcbn1cbiJdLCJuYW1lcyI6WyJub3RGb3VuZCIsIkRJR0VTVCIsIkhUVFBfRVJST1JfRkFMTEJBQ0tfRVJST1JfQ09ERSIsImVycm9yIiwiRXJyb3IiLCJkaWdlc3QiXSwibWFwcGluZ3MiOiI7OzsrQkFzQmdCQSxZQUFBQTs7O2VBQUFBOzs7b0NBbkJUO0FBRVA7Ozs7Ozs7Ozs7Ozs7Q0FhQyxHQUVELE1BQU1DLFNBQVUsS0FBRUMsb0JBQUFBLDhCQUE4QixHQUFDO0FBRTFDLFNBQVNGO0lBQ2QsNENBQTRDO0lBQzVDLE1BQU1HLFFBQVEsT0FBQSxjQUFpQixDQUFqQixJQUFJQyxNQUFNSCxTQUFWLHFCQUFBO2VBQUE7b0JBQUE7c0JBQUE7SUFBZ0I7SUFDNUJFLE1BQWtDRSxNQUFNLEdBQUdKO0lBRTdDLE1BQU1FO0FBQ1IiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNDc2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2NsaWVudC9jb21wb25lbnRzL2ZvcmJpZGRlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIVFRQX0VSUk9SX0ZBTExCQUNLX0VSUk9SX0NPREUsXG4gIHR5cGUgSFRUUEFjY2Vzc0ZhbGxiYWNrRXJyb3IsXG59IGZyb20gJy4vaHR0cC1hY2Nlc3MtZmFsbGJhY2svaHR0cC1hY2Nlc3MtZmFsbGJhY2snXG5cbi8vIFRPRE86IEFkZCBgZm9yYmlkZGVuYCBkb2NzXG4vKipcbiAqIEBleHBlcmltZW50YWxcbiAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byByZW5kZXIgdGhlIFtmb3JiaWRkZW4uanMgZmlsZV0oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2FwaS1yZWZlcmVuY2UvZmlsZS1jb252ZW50aW9ucy9mb3JiaWRkZW4pXG4gKiB3aXRoaW4gYSByb3V0ZSBzZWdtZW50IGFzIHdlbGwgYXMgaW5qZWN0IGEgdGFnLlxuICpcbiAqIGBmb3JiaWRkZW4oKWAgY2FuIGJlIHVzZWQgaW5cbiAqIFtTZXJ2ZXIgQ29tcG9uZW50c10oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2J1aWxkaW5nLXlvdXItYXBwbGljYXRpb24vcmVuZGVyaW5nL3NlcnZlci1jb21wb25lbnRzKSxcbiAqIFtSb3V0ZSBIYW5kbGVyc10oaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2J1aWxkaW5nLXlvdXItYXBwbGljYXRpb24vcm91dGluZy9yb3V0ZS1oYW5kbGVycyksIGFuZFxuICogW1NlcnZlciBBY3Rpb25zXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9kYXRhLWZldGNoaW5nL3NlcnZlci1hY3Rpb25zLWFuZC1tdXRhdGlvbnMpLlxuICpcbiAqIFJlYWQgbW9yZTogW05leHQuanMgRG9jczogYGZvcmJpZGRlbmBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy9mb3JiaWRkZW4pXG4gKi9cblxuY29uc3QgRElHRVNUID0gYCR7SFRUUF9FUlJPUl9GQUxMQkFDS19FUlJPUl9DT0RFfTs0MDNgXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JiaWRkZW4oKTogbmV2ZXIge1xuICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9FWFBFUklNRU5UQUxfQVVUSF9JTlRFUlJVUFRTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFxcYGZvcmJpZGRlbigpXFxgIGlzIGV4cGVyaW1lbnRhbCBhbmQgb25seSBhbGxvd2VkIHRvIGJlIGVuYWJsZWQgd2hlbiBcXGBleHBlcmltZW50YWwuYXV0aEludGVycnVwdHNcXGAgaXMgZW5hYmxlZC5gXG4gICAgKVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoRElHRVNUKSBhcyBIVFRQQWNjZXNzRmFsbGJhY2tFcnJvclxuICA7KGVycm9yIGFzIEhUVFBBY2Nlc3NGYWxsYmFja0Vycm9yKS5kaWdlc3QgPSBESUdFU1RcbiAgdGhyb3cgZXJyb3Jcbn1cbiJdLCJuYW1lcyI6WyJmb3JiaWRkZW4iLCJESUdFU1QiLCJIVFRQX0VSUk9SX0ZBTExCQUNLX0VSUk9SX0NPREUiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0VYUEVSSU1FTlRBTF9BVVRIX0lOVEVSUlVQVFMiLCJFcnJvciIsImVycm9yIiwiZGlnZXN0Il0sIm1hcHBpbmdzIjoiOzs7K0JBcUJnQkEsYUFBQUE7OztlQUFBQTs7O29DQWxCVDtBQUVQLDZCQUE2QjtBQUM3Qjs7Ozs7Ozs7Ozs7Q0FXQyxHQUVELE1BQU1DLFNBQVUsS0FBRUMsb0JBQUFBLDhCQUE4QixHQUFDO0FBRTFDLFNBQVNGO0lBQ2QsSUFBSSxDQUFDRyxRQUFRQyxHQUFHLENBQUNDLHVCQUFxQyxZQUFGO1FBQ2xELE1BQU0sT0FBQSxjQUVMLENBRkssSUFBSUMsTUFDUCxnSEFERyxxQkFBQTttQkFBQTt3QkFBQTswQkFBQTtRQUVOO0lBQ0Y7SUFFQSw0Q0FBNEM7SUFDNUMsTUFBTUMsUUFBUSxPQUFBLGNBQWlCLENBQWpCLElBQUlELE1BQU1MLFNBQVYscUJBQUE7ZUFBQTtvQkFBQTtzQkFBQTtJQUFnQjtJQUM1Qk0sTUFBa0NDLE1BQU0sR0FBR1A7SUFDN0MsTUFBTU07QUFDUiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1MjksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvdW5hdXRob3JpemVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhUVFBfRVJST1JfRkFMTEJBQ0tfRVJST1JfQ09ERSxcbiAgdHlwZSBIVFRQQWNjZXNzRmFsbGJhY2tFcnJvcixcbn0gZnJvbSAnLi9odHRwLWFjY2Vzcy1mYWxsYmFjay9odHRwLWFjY2Vzcy1mYWxsYmFjaydcblxuLy8gVE9ETzogQWRkIGB1bmF1dGhvcml6ZWRgIGRvY3Ncbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHJlbmRlciB0aGUgW3VuYXV0aG9yaXplZC5qcyBmaWxlXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYXBpLXJlZmVyZW5jZS9maWxlLWNvbnZlbnRpb25zL3VuYXV0aG9yaXplZClcbiAqIHdpdGhpbiBhIHJvdXRlIHNlZ21lbnQgYXMgd2VsbCBhcyBpbmplY3QgYSB0YWcuXG4gKlxuICogYHVuYXV0aG9yaXplZCgpYCBjYW4gYmUgdXNlZCBpblxuICogW1NlcnZlciBDb21wb25lbnRzXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9yZW5kZXJpbmcvc2VydmVyLWNvbXBvbmVudHMpLFxuICogW1JvdXRlIEhhbmRsZXJzXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9yb3V0aW5nL3JvdXRlLWhhbmRsZXJzKSwgYW5kXG4gKiBbU2VydmVyIEFjdGlvbnNdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL2RhdGEtZmV0Y2hpbmcvc2VydmVyLWFjdGlvbnMtYW5kLW11dGF0aW9ucykuXG4gKlxuICpcbiAqIFJlYWQgbW9yZTogW05leHQuanMgRG9jczogYHVuYXV0aG9yaXplZGBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91bmF1dGhvcml6ZWQpXG4gKi9cblxuY29uc3QgRElHRVNUID0gYCR7SFRUUF9FUlJPUl9GQUxMQkFDS19FUlJPUl9DT0RFfTs0MDFgXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmF1dGhvcml6ZWQoKTogbmV2ZXIge1xuICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9FWFBFUklNRU5UQUxfQVVUSF9JTlRFUlJVUFRTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFxcYHVuYXV0aG9yaXplZCgpXFxgIGlzIGV4cGVyaW1lbnRhbCBhbmQgb25seSBhbGxvd2VkIHRvIGJlIHVzZWQgd2hlbiBcXGBleHBlcmltZW50YWwuYXV0aEludGVycnVwdHNcXGAgaXMgZW5hYmxlZC5gXG4gICAgKVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoRElHRVNUKSBhcyBIVFRQQWNjZXNzRmFsbGJhY2tFcnJvclxuICA7KGVycm9yIGFzIEhUVFBBY2Nlc3NGYWxsYmFja0Vycm9yKS5kaWdlc3QgPSBESUdFU1RcbiAgdGhyb3cgZXJyb3Jcbn1cbiJdLCJuYW1lcyI6WyJ1bmF1dGhvcml6ZWQiLCJESUdFU1QiLCJIVFRQX0VSUk9SX0ZBTExCQUNLX0VSUk9SX0NPREUiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0VYUEVSSU1FTlRBTF9BVVRIX0lOVEVSUlVQVFMiLCJFcnJvciIsImVycm9yIiwiZGlnZXN0Il0sIm1hcHBpbmdzIjoiOzs7K0JBc0JnQkEsZ0JBQUFBOzs7ZUFBQUE7OztvQ0FuQlQ7QUFFUCxnQ0FBZ0M7QUFDaEM7Ozs7Ozs7Ozs7OztDQVlDLEdBRUQsTUFBTUMsU0FBVSxLQUFFQyxvQkFBQUEsOEJBQThCLEdBQUM7QUFFMUMsU0FBU0Y7SUFDZCxJQUFJLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsdUJBQXFDLFlBQUY7UUFDbEQsTUFBTSxPQUFBLGNBRUwsQ0FGSyxJQUFJQyxNQUNQLGdIQURHLHFCQUFBO21CQUFBO3dCQUFBOzBCQUFBO1FBRU47SUFDRjtJQUVBLDRDQUE0QztJQUM1QyxNQUFNQyxRQUFRLE9BQUEsY0FBaUIsQ0FBakIsSUFBSUQsTUFBTUwsU0FBVixxQkFBQTtlQUFBO29CQUFBO3NCQUFBO0lBQWdCO0lBQzVCTSxNQUFrQ0MsTUFBTSxHQUFHUDtJQUM3QyxNQUFNTTtBQUNSIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDU4MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9zZXJ2ZXIvZHluYW1pYy1yZW5kZXJpbmctdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzSGFuZ2luZ1Byb21pc2VSZWplY3Rpb25FcnJvcihcbiAgZXJyOiB1bmtub3duXG4pOiBlcnIgaXMgSGFuZ2luZ1Byb21pc2VSZWplY3Rpb25FcnJvciB7XG4gIGlmICh0eXBlb2YgZXJyICE9PSAnb2JqZWN0JyB8fCBlcnIgPT09IG51bGwgfHwgISgnZGlnZXN0JyBpbiBlcnIpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZXJyLmRpZ2VzdCA9PT0gSEFOR0lOR19QUk9NSVNFX1JFSkVDVElPTlxufVxuXG5jb25zdCBIQU5HSU5HX1BST01JU0VfUkVKRUNUSU9OID0gJ0hBTkdJTkdfUFJPTUlTRV9SRUpFQ1RJT04nXG5cbmNsYXNzIEhhbmdpbmdQcm9taXNlUmVqZWN0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyByZWFkb25seSBkaWdlc3QgPSBIQU5HSU5HX1BST01JU0VfUkVKRUNUSU9OXG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGV4cHJlc3Npb246IHN0cmluZykge1xuICAgIHN1cGVyKFxuICAgICAgYER1cmluZyBwcmVyZW5kZXJpbmcsICR7ZXhwcmVzc2lvbn0gcmVqZWN0cyB3aGVuIHRoZSBwcmVyZW5kZXIgaXMgY29tcGxldGUuIFR5cGljYWxseSB0aGVzZSBlcnJvcnMgYXJlIGhhbmRsZWQgYnkgUmVhY3QgYnV0IGlmIHlvdSBtb3ZlICR7ZXhwcmVzc2lvbn0gdG8gYSBkaWZmZXJlbnQgY29udGV4dCBieSB1c2luZyBcXGBzZXRUaW1lb3V0XFxgLCBcXGBhZnRlclxcYCwgb3Igc2ltaWxhciBmdW5jdGlvbnMgeW91IG1heSBvYnNlcnZlIHRoaXMgZXJyb3IgYW5kIHlvdSBzaG91bGQgaGFuZGxlIGl0IGluIHRoYXQgY29udGV4dC5gXG4gICAgKVxuICB9XG59XG5cbnR5cGUgQWJvcnRMaXN0ZW5lcnMgPSBBcnJheTwoZXJyOiB1bmtub3duKSA9PiB2b2lkPlxuY29uc3QgYWJvcnRMaXN0ZW5lcnNCeVNpZ25hbCA9IG5ldyBXZWFrTWFwPEFib3J0U2lnbmFsLCBBYm9ydExpc3RlbmVycz4oKVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29uc3RydWN0cyBhIHByb21pc2UgdGhhdCB3aWxsIG5ldmVyIHJlc29sdmUuIFRoaXMgaXMgcHJpbWFyaWx5XG4gKiB1c2VmdWwgZm9yIGR5bmFtaWNJTyB3aGVyZSB3ZSB1c2UgcHJvbWlzZSByZXNvbHV0aW9uIHRpbWluZyB0byBkZXRlcm1pbmUgd2hpY2hcbiAqIHBhcnRzIG9mIGEgcmVuZGVyIGNhbiBiZSBpbmNsdWRlZCBpbiBhIHByZXJlbmRlci5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VIYW5naW5nUHJvbWlzZTxUPihcbiAgc2lnbmFsOiBBYm9ydFNpZ25hbCxcbiAgZXhwcmVzc2lvbjogc3RyaW5nXG4pOiBQcm9taXNlPFQ+IHtcbiAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIYW5naW5nUHJvbWlzZVJlamVjdGlvbkVycm9yKGV4cHJlc3Npb24pKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhhbmdpbmdQcm9taXNlID0gbmV3IFByb21pc2U8VD4oKF8sIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgYm91bmRSZWplY3Rpb24gPSByZWplY3QuYmluZChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbmV3IEhhbmdpbmdQcm9taXNlUmVqZWN0aW9uRXJyb3IoZXhwcmVzc2lvbilcbiAgICAgIClcbiAgICAgIGxldCBjdXJyZW50TGlzdGVuZXJzID0gYWJvcnRMaXN0ZW5lcnNCeVNpZ25hbC5nZXQoc2lnbmFsKVxuICAgICAgaWYgKGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgY3VycmVudExpc3RlbmVycy5wdXNoKGJvdW5kUmVqZWN0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gW2JvdW5kUmVqZWN0aW9uXVxuICAgICAgICBhYm9ydExpc3RlbmVyc0J5U2lnbmFsLnNldChzaWduYWwsIGxpc3RlbmVycylcbiAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2Fib3J0JyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gV2UgYXJlIGZpbmUgaWYgbm8gb25lIGFjdHVhbGx5IGF3YWl0cyB0aGlzIHByb21pc2UuIFdlIHNob3VsZG4ndCBjb25zaWRlciB0aGlzIGFuIHVuaGFuZGxlZCByZWplY3Rpb24gc29cbiAgICAvLyB3ZSBhdHRhY2ggYSBub29wIGNhdGNoIGhhbmRsZXIgaGVyZSB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcuIElmIHlvdSBhY3R1YWxseSBhd2FpdCBzb21ld2hlcmUgb3IgY29uc3RydWN0XG4gICAgLy8geW91ciBvd24gcHJvbWlzZSBvdXQgb2YgaXQgeW91J2xsIG5lZWQgdG8gZW5zdXJlIHlvdSBoYW5kbGUgdGhlIGVycm9yIHdoZW4gaXQgcmVqZWN0cy5cbiAgICBoYW5naW5nUHJvbWlzZS5jYXRjaChpZ25vcmVSZWplY3QpXG4gICAgcmV0dXJuIGhhbmdpbmdQcm9taXNlXG4gIH1cbn1cblxuZnVuY3Rpb24gaWdub3JlUmVqZWN0KCkge31cbiJdLCJuYW1lcyI6WyJpc0hhbmdpbmdQcm9taXNlUmVqZWN0aW9uRXJyb3IiLCJtYWtlSGFuZ2luZ1Byb21pc2UiLCJlcnIiLCJkaWdlc3QiLCJIQU5HSU5HX1BST01JU0VfUkVKRUNUSU9OIiwiSGFuZ2luZ1Byb21pc2VSZWplY3Rpb25FcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJleHByZXNzaW9uIiwiYWJvcnRMaXN0ZW5lcnNCeVNpZ25hbCIsIldlYWtNYXAiLCJzaWduYWwiLCJhYm9ydGVkIiwiUHJvbWlzZSIsInJlamVjdCIsImhhbmdpbmdQcm9taXNlIiwiXyIsImJvdW5kUmVqZWN0aW9uIiwiYmluZCIsImN1cnJlbnRMaXN0ZW5lcnMiLCJnZXQiLCJwdXNoIiwibGlzdGVuZXJzIiwic2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImkiLCJsZW5ndGgiLCJvbmNlIiwiY2F0Y2giLCJpZ25vcmVSZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQWdCQSw4QkFBOEIsRUFBQTtlQUE5QkE7O0lBZ0NBQyxrQkFBa0IsRUFBQTtlQUFsQkE7OztBQWhDVCxTQUFTRCwrQkFDZEUsR0FBWTtJQUVaLElBQUksT0FBT0EsUUFBUSxZQUFZQSxRQUFRLFFBQVEsQ0FBRSxDQUFBLFlBQVlBLEdBQUUsR0FBSTtRQUNqRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPQSxJQUFJQyxNQUFNLEtBQUtDO0FBQ3hCO0FBRUEsTUFBTUEsNEJBQTRCO0FBRWxDLE1BQU1DLHFDQUFxQ0M7SUFHekNDLFlBQTRCQyxVQUFrQixDQUFFO1FBQzlDLEtBQUssQ0FDSCxDQUFDLHFCQUFxQixFQUFFQSxXQUFXLHFHQUFxRyxFQUFFQSxXQUFXLHFKQUFxSixDQUFDLEdBQUEsSUFBQSxDQUZuUkEsVUFBQUEsR0FBQUEsWUFBQUEsSUFBQUEsQ0FGWkwsTUFBQUEsR0FBU0M7SUFNekI7QUFDRjtBQUdBLE1BQU1LLHlCQUF5QixJQUFJQztBQVM1QixTQUFTVCxtQkFDZFUsTUFBbUIsRUFDbkJILFVBQWtCO0lBRWxCLElBQUlHLE9BQU9DLE9BQU8sRUFBRTtRQUNsQixPQUFPQyxRQUFRQyxNQUFNLENBQUMsSUFBSVQsNkJBQTZCRztJQUN6RCxPQUFPO1FBQ0wsTUFBTU8saUJBQWlCLElBQUlGLFFBQVcsQ0FBQ0csR0FBR0Y7WUFDeEMsTUFBTUcsaUJBQWlCSCxPQUFPSSxJQUFJLENBQ2hDLE1BQ0EsSUFBSWIsNkJBQTZCRztZQUVuQyxJQUFJVyxtQkFBbUJWLHVCQUF1QlcsR0FBRyxDQUFDVDtZQUNsRCxJQUFJUSxrQkFBa0I7Z0JBQ3BCQSxpQkFBaUJFLElBQUksQ0FBQ0o7WUFDeEIsT0FBTztnQkFDTCxNQUFNSyxZQUFZO29CQUFDTDtpQkFBZTtnQkFDbENSLHVCQUF1QmMsR0FBRyxDQUFDWixRQUFRVztnQkFDbkNYLE9BQU9hLGdCQUFnQixDQUNyQixTQUNBO29CQUNFLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxVQUFVSSxNQUFNLEVBQUVELElBQUs7d0JBQ3pDSCxTQUFTLENBQUNHLEVBQUU7b0JBQ2Q7Z0JBQ0YsR0FDQTtvQkFBRUUsTUFBTTtnQkFBSztZQUVqQjtRQUNGO1FBQ0EsMkdBQTJHO1FBQzNHLDZHQUE2RztRQUM3Ryx5RkFBeUY7UUFDekZaLGVBQWVhLEtBQUssQ0FBQ0M7UUFDckIsT0FBT2Q7SUFDVDtBQUNGO0FBRUEsU0FBU2MsZ0JBQWdCIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDY1NCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9zZXJ2ZXIvbGliL3JvdXRlci11dGlscy9pcy1wb3N0cG9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRUFDVF9QT1NUUE9ORV9UWVBFOiBzeW1ib2wgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3N0cG9uZScpXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Bvc3Rwb25lKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmXG4gICAgZXJyb3IgIT09IG51bGwgJiZcbiAgICBlcnJvci4kJHR5cGVvZiA9PT0gUkVBQ1RfUE9TVFBPTkVfVFlQRVxuICApXG59XG4iXSwibmFtZXMiOlsiaXNQb3N0cG9uZSIsIlJFQUNUX1BPU1RQT05FX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJlcnJvciIsIiQkdHlwZW9mIl0sIm1hcHBpbmdzIjoiOzs7K0JBRWdCQSxjQUFBQTs7O2VBQUFBOzs7QUFGaEIsTUFBTUMsc0JBQThCQyxPQUFPQyxHQUFHLENBQUM7QUFFeEMsU0FBU0gsV0FBV0ksS0FBVTtJQUNuQyxPQUNFLE9BQU9BLFVBQVUsWUFDakJBLFVBQVUsUUFDVkEsTUFBTUMsUUFBUSxLQUFLSjtBQUV2QiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA2NzMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvc2hhcmVkL2xpYi9sYXp5LWR5bmFtaWMvYmFpbG91dC10by1jc3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBoYXMgdG8gYmUgYSBzaGFyZWQgbW9kdWxlIHdoaWNoIGlzIHNoYXJlZCBiZXR3ZWVuIGNsaWVudCBjb21wb25lbnQgZXJyb3IgYm91bmRhcnkgYW5kIGR5bmFtaWMgY29tcG9uZW50XG5jb25zdCBCQUlMT1VUX1RPX0NTUiA9ICdCQUlMT1VUX1RPX0NMSUVOVF9TSURFX1JFTkRFUklORydcblxuLyoqIEFuIGVycm9yIHRoYXQgc2hvdWxkIGJlIHRocm93biB3aGVuIHdlIHdhbnQgdG8gYmFpbCBvdXQgdG8gY2xpZW50LXNpZGUgcmVuZGVyaW5nLiAqL1xuZXhwb3J0IGNsYXNzIEJhaWxvdXRUb0NTUkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgZGlnZXN0ID0gQkFJTE9VVF9UT19DU1JcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmVhc29uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgQmFpbCBvdXQgdG8gY2xpZW50LXNpZGUgcmVuZGVyaW5nOiAke3JlYXNvbn1gKVxuICB9XG59XG5cbi8qKiBDaGVja3MgaWYgYSBwYXNzZWQgYXJndW1lbnQgaXMgYW4gZXJyb3IgdGhhdCBpcyB0aHJvd24gaWYgd2Ugd2FudCB0byBiYWlsIG91dCB0byBjbGllbnQtc2lkZSByZW5kZXJpbmcuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCYWlsb3V0VG9DU1JFcnJvcihlcnI6IHVua25vd24pOiBlcnIgaXMgQmFpbG91dFRvQ1NSRXJyb3Ige1xuICBpZiAodHlwZW9mIGVyciAhPT0gJ29iamVjdCcgfHwgZXJyID09PSBudWxsIHx8ICEoJ2RpZ2VzdCcgaW4gZXJyKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGVyci5kaWdlc3QgPT09IEJBSUxPVVRfVE9fQ1NSXG59XG4iXSwibmFtZXMiOlsiQmFpbG91dFRvQ1NSRXJyb3IiLCJpc0JhaWxvdXRUb0NTUkVycm9yIiwiQkFJTE9VVF9UT19DU1IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGlnZXN0IiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQSwrR0FBK0c7Ozs7Ozs7Ozs7Ozs7OztJQUlsR0EsaUJBQWlCLEVBQUE7ZUFBakJBOztJQVNHQyxtQkFBbUIsRUFBQTtlQUFuQkE7OztBQVpoQixNQUFNQyxpQkFBaUI7QUFHaEIsTUFBTUYsMEJBQTBCRztJQUdyQ0MsWUFBNEJDLE1BQWMsQ0FBRTtRQUMxQyxLQUFLLENBQUUsd0NBQXFDQSxTQUFBQSxJQUFBQSxDQURsQkEsTUFBQUEsR0FBQUEsUUFBQUEsSUFBQUEsQ0FGWkMsTUFBQUEsR0FBU0o7SUFJekI7QUFDRjtBQUdPLFNBQVNELG9CQUFvQk0sR0FBWTtJQUM5QyxJQUFJLE9BQU9BLFFBQVEsWUFBWUEsUUFBUSxRQUFRLENBQUUsQ0FBQSxZQUFZQSxHQUFFLEdBQUk7UUFDakUsT0FBTztJQUNUO0lBRUEsT0FBT0EsSUFBSUQsTUFBTSxLQUFLSjtBQUN4QiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3MTMsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvaXMtbmV4dC1yb3V0ZXItZXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaXNIVFRQQWNjZXNzRmFsbGJhY2tFcnJvcixcbiAgdHlwZSBIVFRQQWNjZXNzRmFsbGJhY2tFcnJvcixcbn0gZnJvbSAnLi9odHRwLWFjY2Vzcy1mYWxsYmFjay9odHRwLWFjY2Vzcy1mYWxsYmFjaydcbmltcG9ydCB7IGlzUmVkaXJlY3RFcnJvciwgdHlwZSBSZWRpcmVjdEVycm9yIH0gZnJvbSAnLi9yZWRpcmVjdC1lcnJvcidcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVycm9yIGlzIGEgbmF2aWdhdGlvbiBzaWduYWwgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmVcbiAqIHRocm93biBieSB1c2VyIGNvZGUgdG8gcGVyZm9ybSBuYXZpZ2F0aW9uIG9wZXJhdGlvbnMgYW5kIGludGVycnVwdCB0aGUgUmVhY3RcbiAqIHJlbmRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmV4dFJvdXRlckVycm9yKFxuICBlcnJvcjogdW5rbm93blxuKTogZXJyb3IgaXMgUmVkaXJlY3RFcnJvciB8IEhUVFBBY2Nlc3NGYWxsYmFja0Vycm9yIHtcbiAgcmV0dXJuIGlzUmVkaXJlY3RFcnJvcihlcnJvcikgfHwgaXNIVFRQQWNjZXNzRmFsbGJhY2tFcnJvcihlcnJvcilcbn1cbiJdLCJuYW1lcyI6WyJpc05leHRSb3V0ZXJFcnJvciIsImVycm9yIiwiaXNSZWRpcmVjdEVycm9yIiwiaXNIVFRQQWNjZXNzRmFsbGJhY2tFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OytCQVdnQkEscUJBQUFBOzs7ZUFBQUE7OztvQ0FSVDsrQkFDNkM7QUFPN0MsU0FBU0Esa0JBQ2RDLEtBQWM7SUFFZCxPQUFPQyxDQUFBQSxHQUFBQSxlQUFBQSxlQUFlLEVBQUNELFVBQVVFLENBQUFBLEdBQUFBLG9CQUFBQSx5QkFBeUIsRUFBQ0Y7QUFDN0QiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNzQwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2NsaWVudC9jb21wb25lbnRzL2hvb2tzLXNlcnZlci1jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERZTkFNSUNfRVJST1JfQ09ERSA9ICdEWU5BTUlDX1NFUlZFUl9VU0FHRSdcblxuZXhwb3J0IGNsYXNzIER5bmFtaWNTZXJ2ZXJFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgZGlnZXN0OiB0eXBlb2YgRFlOQU1JQ19FUlJPUl9DT0RFID0gRFlOQU1JQ19FUlJPUl9DT0RFXG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgRHluYW1pYyBzZXJ2ZXIgdXNhZ2U6ICR7ZGVzY3JpcHRpb259YClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljU2VydmVyRXJyb3IoZXJyOiB1bmtub3duKTogZXJyIGlzIER5bmFtaWNTZXJ2ZXJFcnJvciB7XG4gIGlmIChcbiAgICB0eXBlb2YgZXJyICE9PSAnb2JqZWN0JyB8fFxuICAgIGVyciA9PT0gbnVsbCB8fFxuICAgICEoJ2RpZ2VzdCcgaW4gZXJyKSB8fFxuICAgIHR5cGVvZiBlcnIuZGlnZXN0ICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBlcnIuZGlnZXN0ID09PSBEWU5BTUlDX0VSUk9SX0NPREVcbn1cbiJdLCJuYW1lcyI6WyJEeW5hbWljU2VydmVyRXJyb3IiLCJpc0R5bmFtaWNTZXJ2ZXJFcnJvciIsIkRZTkFNSUNfRVJST1JfQ09ERSIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJkZXNjcmlwdGlvbiIsImRpZ2VzdCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsa0JBQWtCLEVBQUE7ZUFBbEJBOztJQVFHQyxvQkFBb0IsRUFBQTtlQUFwQkE7OztBQVZoQixNQUFNQyxxQkFBcUI7QUFFcEIsTUFBTUYsMkJBQTJCRztJQUd0Q0MsWUFBNEJDLFdBQW1CLENBQUU7UUFDL0MsS0FBSyxDQUFFLDJCQUF3QkEsY0FBQUEsSUFBQUEsQ0FETEEsV0FBQUEsR0FBQUEsYUFBQUEsSUFBQUEsQ0FGNUJDLE1BQUFBLEdBQW9DSjtJQUlwQztBQUNGO0FBRU8sU0FBU0QscUJBQXFCTSxHQUFZO0lBQy9DLElBQ0UsT0FBT0EsUUFBUSxZQUNmQSxRQUFRLFFBQ1IsQ0FBRSxDQUFBLFlBQVlBLEdBQUUsS0FDaEIsT0FBT0EsSUFBSUQsTUFBTSxLQUFLLFVBQ3RCO1FBQ0EsT0FBTztJQUNUO0lBRUEsT0FBT0MsSUFBSUQsTUFBTSxLQUFLSjtBQUN4QiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3ODYsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvc3RhdGljLWdlbmVyYXRpb24tYmFpbG91dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBORVhUX1NUQVRJQ19HRU5fQkFJTE9VVCA9ICdORVhUX1NUQVRJQ19HRU5fQkFJTE9VVCdcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0dlbkJhaWxvdXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IGNvZGUgPSBORVhUX1NUQVRJQ19HRU5fQkFJTE9VVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdGF0aWNHZW5CYWlsb3V0RXJyb3IoXG4gIGVycm9yOiB1bmtub3duXG4pOiBlcnJvciBpcyBTdGF0aWNHZW5CYWlsb3V0RXJyb3Ige1xuICBpZiAodHlwZW9mIGVycm9yICE9PSAnb2JqZWN0JyB8fCBlcnJvciA9PT0gbnVsbCB8fCAhKCdjb2RlJyBpbiBlcnJvcikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBlcnJvci5jb2RlID09PSBORVhUX1NUQVRJQ19HRU5fQkFJTE9VVFxufVxuIl0sIm5hbWVzIjpbIlN0YXRpY0dlbkJhaWxvdXRFcnJvciIsImlzU3RhdGljR2VuQmFpbG91dEVycm9yIiwiTkVYVF9TVEFUSUNfR0VOX0JBSUxPVVQiLCJFcnJvciIsImNvZGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFYUEscUJBQXFCLEVBQUE7ZUFBckJBOztJQUlHQyx1QkFBdUIsRUFBQTtlQUF2QkE7OztBQU5oQixNQUFNQywwQkFBMEI7QUFFekIsTUFBTUYsOEJBQThCRzs7UUFBcEMsS0FBQSxJQUFBLE9BQUEsSUFBQSxDQUNXQyxJQUFBQSxHQUFPRjs7QUFDekI7QUFFTyxTQUFTRCx3QkFDZEksS0FBYztJQUVkLElBQUksT0FBT0EsVUFBVSxZQUFZQSxVQUFVLFFBQVEsQ0FBRSxDQUFBLFVBQVVBLEtBQUksR0FBSTtRQUNyRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPQSxNQUFNRCxJQUFJLEtBQUtGO0FBQ3hCIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDgzMiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9saWIvbWV0YWRhdGEvbWV0YWRhdGEtY29uc3RhbnRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTUVUQURBVEFfQk9VTkRBUllfTkFNRSA9ICdfX25leHRfbWV0YWRhdGFfYm91bmRhcnlfXydcbmV4cG9ydCBjb25zdCBWSUVXUE9SVF9CT1VOREFSWV9OQU1FID0gJ19fbmV4dF92aWV3cG9ydF9ib3VuZGFyeV9fJ1xuZXhwb3J0IGNvbnN0IE9VVExFVF9CT1VOREFSWV9OQU1FID0gJ19fbmV4dF9vdXRsZXRfYm91bmRhcnlfXydcbiJdLCJuYW1lcyI6WyJNRVRBREFUQV9CT1VOREFSWV9OQU1FIiwiT1VUTEVUX0JPVU5EQVJZX05BTUUiLCJWSUVXUE9SVF9CT1VOREFSWV9OQU1FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsc0JBQXNCLEVBQUE7ZUFBdEJBOztJQUVBQyxvQkFBb0IsRUFBQTtlQUFwQkE7O0lBREFDLHNCQUFzQixFQUFBO2VBQXRCQTs7O0FBRE4sTUFBTUYseUJBQXlCO0FBQy9CLE1BQU1FLHlCQUF5QjtBQUMvQixNQUFNRCx1QkFBdUIiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODY2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2xpYi9zY2hlZHVsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgU2NoZWR1bGVkRm48VCA9IHZvaWQ+ID0gKCkgPT4gVCB8IFByb21pc2VMaWtlPFQ+XG5leHBvcnQgdHlwZSBTY2hlZHVsZXJGbjxUID0gdm9pZD4gPSAoY2I6IFNjaGVkdWxlZEZuPFQ+KSA9PiB2b2lkXG5cbi8qKlxuICogU2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHRoZSBuZXh0IHRpY2sgYWZ0ZXIgdGhlIG90aGVyIHByb21pc2VzXG4gKiBoYXZlIGJlZW4gcmVzb2x2ZWQuXG4gKlxuICogQHBhcmFtIGNiIHRoZSBmdW5jdGlvbiB0byBzY2hlZHVsZVxuICovXG5leHBvcnQgY29uc3Qgc2NoZWR1bGVPbk5leHRUaWNrID0gKGNiOiBTY2hlZHVsZWRGbjx2b2lkPikgPT4ge1xuICAvLyBXZSB1c2UgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGhlcmUgc28gdGhhdCB0aGUgb3BlcmF0aW9uIGlzIHNjaGVkdWxlZCBhdFxuICAvLyB0aGUgZW5kIG9mIHRoZSBwcm9taXNlIGpvYiBxdWV1ZSwgd2UgdGhlbiBhZGQgaXQgdG8gdGhlIG5leHQgcHJvY2VzcyB0aWNrXG4gIC8vIHRvIGVuc3VyZSBpdCdzIGV2YWx1YXRlZCBhZnRlcndhcmRzLlxuICAvL1xuICAvLyBUaGlzIHdhcyBpbnNwaXJlZCBieSB0aGUgaW1wbGVtZW50YXRpb24gb2YgdGhlIERhdGFMb2FkZXIgaW50ZXJmYWNlOiBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9kYXRhbG9hZGVyL2Jsb2IvZDMzNmJkMTUyODI2NjRlMGJlNGI0YTY1N2NiNzk2ZjA5YmFmYmM2Yi9zcmMvaW5kZXguanMjTDIxMy1MMjU1XG4gIC8vXG4gIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09ICdlZGdlJykge1xuICAgICAgc2V0VGltZW91dChjYiwgMClcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjYilcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHVzaW5nIGBzZXRJbW1lZGlhdGVgIG9yIGBzZXRUaW1lb3V0YCBpZlxuICogYHNldEltbWVkaWF0ZWAgaXMgbm90IGF2YWlsYWJsZSAobGlrZSBpbiB0aGUgRWRnZSBydW50aW1lKS5cbiAqXG4gKiBAcGFyYW0gY2IgdGhlIGZ1bmN0aW9uIHRvIHNjaGVkdWxlXG4gKi9cbmV4cG9ydCBjb25zdCBzY2hlZHVsZUltbWVkaWF0ZSA9IChjYjogU2NoZWR1bGVkRm48dm9pZD4pOiB2b2lkID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ2VkZ2UnKSB7XG4gICAgc2V0VGltZW91dChjYiwgMClcbiAgfSBlbHNlIHtcbiAgICBzZXRJbW1lZGlhdGUoY2IpXG4gIH1cbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgcHJvbWlzZSB0aGFuIHJlc29sdmVzIGluIGEgZnV0dXJlIHRhc2suIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSB0YXNrIGl0IHJlc29sdmVzIGluXG4gKiB3aWxsIGJlIHRoZSBuZXh0IHRhc2sgYnV0IGlmIHlvdSBhd2FpdCBpdCB5b3UgY2FuIGF0IGxlYXN0IGJlIHN1cmUgdGhhdCB0aGUgY3VycmVudCB0YXNrIGlzIG92ZXIgYW5kXG4gKiBtb3N0IHVzZWZ1bGx5IHRoYXQgdGhlIGVudGlyZSBtaWNyb3Rhc2sgcXVldWUgb2YgdGhlIGN1cnJlbnQgdGFzayBoYXMgYmVlbiBlbXB0aWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXRMZWFzdE9uZVRhc2soKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gc2NoZWR1bGVJbW1lZGlhdGUocmVzb2x2ZSkpXG59XG5cbi8qKlxuICogVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIGV4dHJhY3RlZCB0byBtYWtlIGl0IGVhc2llciB0byBmaW5kIHBsYWNlcyB3aGVyZSB3ZSBhcmUgZG9pbmdcbiAqIHNwZWNpZmljIHRpbWluZyB0cmlja3MgdG8gdHJ5IHRvIHNjaGVkdWxlIHdvcmsgYWZ0ZXIgUmVhY3QgaGFzIHJlbmRlcmVkLiBUaGlzIGlzIGVzcGVjaWFsbHlcbiAqIGltcG9ydGFudCBhdCB0aGUgbW9tZW50IGJlY2F1c2UgTmV4dC5qcyB1c2VzIHRoZSBlZGdlIGJ1aWxkcyBvZiBSZWFjdCB3aGljaCB1c2Ugc2V0VGltZW91dCB0b1xuICogc2NoZWR1bGUgd29yayB3aGVuIHlvdSBtaWdodCBleHBlY3QgdGhhdCBzb21ldGhpbmcgbGlrZSBzZXRJbW1lZGlhdGUgd291bGQgZG8gdGhlIHRyaWNrLlxuICpcbiAqIExvbmcgdGVybSB3ZSBzaG91bGQgc3dpdGNoIHRvIHRoZSBub2RlIHZlcnNpb25zIG9mIFJlYWN0IHJlbmRlcmluZyB3aGVuIHBvc3NpYmxlIGFuZCB0aGVuXG4gKiB1cGRhdGUgdGhpcyB0byB1c2Ugc2V0SW1tZWRpYXRlIHJhdGhlciB0aGFuIHNldFRpbWVvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRBdExlYXN0T25lUmVhY3RSZW5kZXJUYXNrKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FID09PSAnZWRnZScpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgMCkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyKSA9PiBzZXRJbW1lZGlhdGUocikpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhdExlYXN0T25lVGFzayIsInNjaGVkdWxlSW1tZWRpYXRlIiwic2NoZWR1bGVPbk5leHRUaWNrIiwid2FpdEF0TGVhc3RPbmVSZWFjdFJlbmRlclRhc2siLCJjYiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1JVTlRJTUUiLCJzZXRUaW1lb3V0IiwibmV4dFRpY2siLCJzZXRJbW1lZGlhdGUiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBNENnQkEsY0FBYyxFQUFBO2VBQWRBOztJQWJIQyxpQkFBaUIsRUFBQTtlQUFqQkE7O0lBdEJBQyxrQkFBa0IsRUFBQTtlQUFsQkE7O0lBZ0RHQyw2QkFBNkIsRUFBQTtlQUE3QkE7OztBQWhEVCxNQUFNRCxxQkFBcUIsQ0FBQ0U7SUFDakMsNkVBQTZFO0lBQzdFLDRFQUE0RTtJQUM1RSx1Q0FBdUM7SUFDdkMsRUFBRTtJQUNGLGtMQUFrTDtJQUNsTCxFQUFFO0lBQ0ZDLFFBQVFDLE9BQU8sR0FBR0MsSUFBSSxDQUFDO1FBQ3JCLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxLQUFLLFFBQVE7O2FBRWxDO1lBQ0xGLFFBQVFJLFFBQVEsQ0FBQ1I7UUFDbkI7SUFDRjtBQUNGO0FBUU8sTUFBTUgsb0JBQW9CLENBQUNHO0lBQ2hDLElBQUlJLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxLQUFLLFFBQVE7O1NBRWxDO1FBQ0xHLGFBQWFUO0lBQ2Y7QUFDRjtBQU9PLFNBQVNKO0lBQ2QsT0FBTyxJQUFJSyxRQUFjLENBQUNDLFVBQVlMLGtCQUFrQks7QUFDMUQ7QUFXTyxTQUFTSDtJQUNkLElBQUlLLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxLQUFLLFFBQVE7O1NBRWxDO1FBQ0wsT0FBTyxJQUFJTCxRQUFRLENBQUNTLElBQU1ELGFBQWFDO0lBQ3pDO0FBQ0YiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogOTMzLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL3NlcnZlci9hcHAtcmVuZGVyL2R5bmFtaWMtcmVuZGVyaW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGZ1bmN0aW9ucyBwcm92aWRlZCBieSB0aGlzIG1vZHVsZSBhcmUgdXNlZCB0byBjb21tdW5pY2F0ZSBjZXJ0YWluIHByb3BlcnRpZXNcbiAqIGFib3V0IHRoZSBjdXJyZW50bHkgcnVubmluZyBjb2RlIHNvIHRoYXQgTmV4dC5qcyBjYW4gbWFrZSBkZWNpc2lvbnMgb24gaG93IHRvIGhhbmRsZVxuICogdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGluIGRpZmZlcmVudCByZW5kZXJpbmcgbW9kZXMgc3VjaCBhcyBwcmUtcmVuZGVyaW5nLCByZXN1bWluZywgYW5kIFNTUi5cbiAqXG4gKiBUb2RheSBOZXh0LmpzIHRyZWF0cyBhbGwgY29kZSBhcyBwb3RlbnRpYWxseSBzdGF0aWMuIENlcnRhaW4gQVBJcyBtYXkgb25seSBtYWtlIHNlbnNlIHdoZW4gZHluYW1pY2FsbHkgcmVuZGVyaW5nLlxuICogVHJhZGl0aW9uYWxseSB0aGlzIG1lYW50IGRlb3B0aW5nIHRoZSBlbnRpcmUgcmVuZGVyIHRvIGR5bmFtaWMgaG93ZXZlciB3aXRoIFBQUiB3ZSBjYW4gbm93IGRlb3B0IHBhcnRzXG4gKiBvZiBhIFJlYWN0IHRyZWUgYXMgZHluYW1pYyB3aGlsZSBzdGlsbCBrZWVwaW5nIG90aGVyIHBhcnRzIHN0YXRpYy4gVGhlcmUgYXJlIHJlYWxseSB0d28gZGlmZmVyZW50IGtpbmRzIG9mXG4gKiBEeW5hbWljIGluZGljYXRpb25zLlxuICpcbiAqIFRoZSBmaXJzdCBpcyBzaW1wbHkgYW4gaW50ZW50aW9uIHRvIGJlIGR5bmFtaWMuIHVuc3RhYmxlX25vU3RvcmUgaXMgYW4gZXhhbXBsZSBvZiB0aGlzIHdoZXJlXG4gKiB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyBjb2RlIHNpbXBseSBkZWNsYXJlcyB0aGF0IHRoZSBjdXJyZW50IHNjb3BlIGlzIGR5bmFtaWMgYnV0IGlmIHlvdSB1c2UgaXRcbiAqIGluc2lkZSB1bnN0YWJsZV9jYWNoZSBpdCBjYW4gc3RpbGwgYmUgY2FjaGVkLiBUaGlzIHR5cGUgb2YgaW5kaWNhdGlvbiBjYW4gYmUgcmVtb3ZlZCBpZiB3ZSBldmVyXG4gKiBtYWtlIHRoZSBkZWZhdWx0IGR5bmFtaWMgdG8gYmVnaW4gd2l0aCBiZWNhdXNlIHRoZSBvbmx5IHdheSB5b3Ugd291bGQgZXZlciBiZSBzdGF0aWMgaXMgaW5zaWRlXG4gKiBhIGNhY2hlIHNjb3BlIHdoaWNoIHRoaXMgaW5kaWNhdGlvbiBkb2VzIG5vdCBhZmZlY3QuXG4gKlxuICogVGhlIHNlY29uZCBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgYSBkeW5hbWljIGRhdGEgc291cmNlIHdhcyByZWFkLiBUaGlzIGlzIGEgc3Ryb25nZXIgZm9ybSBvZiBkeW5hbWljXG4gKiBiZWNhdXNlIGl0IG1lYW5zIHRoYXQgaXQgaXMgaW5hcHByb3ByaWF0ZSB0byBjYWNoZSB0aGlzIGF0IGFsbC4gdXNpbmcgYSBkeW5hbWljIGRhdGEgc291cmNlIGluc2lkZVxuICogdW5zdGFibGVfY2FjaGUgc2hvdWxkIGVycm9yLiBJZiB5b3Ugd2FudCB0byB1c2Ugc29tZSBkeW5hbWljIGRhdGEgaW5zaWRlIHVuc3RhYmxlX2NhY2hlIHlvdSBzaG91bGRcbiAqIHJlYWQgdGhhdCBkYXRhIG91dHNpZGUgdGhlIGNhY2hlIGFuZCBwYXNzIGl0IGluIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBjYWNoZWQgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBXb3JrU3RvcmUgfSBmcm9tICcuLi9hcHAtcmVuZGVyL3dvcmstYXN5bmMtc3RvcmFnZS5leHRlcm5hbCdcbmltcG9ydCB0eXBlIHtcbiAgV29ya1VuaXRTdG9yZSxcbiAgUmVxdWVzdFN0b3JlLFxuICBQcmVyZW5kZXJTdG9yZUxlZ2FjeSxcbiAgUHJlcmVuZGVyU3RvcmVNb2Rlcm4sXG59IGZyb20gJy4uL2FwcC1yZW5kZXIvd29yay11bml0LWFzeW5jLXN0b3JhZ2UuZXh0ZXJuYWwnXG5cbi8vIE9uY2UgcG9zdHBvbmUgaXMgaW4gc3RhYmxlIHdlIHNob3VsZCBzd2l0Y2ggdG8gaW1wb3J0aW5nIHRoZSBwb3N0cG9uZSBleHBvcnQgZGlyZWN0bHlcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRHluYW1pY1NlcnZlckVycm9yIH0gZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvaG9va3Mtc2VydmVyLWNvbnRleHQnXG5pbXBvcnQgeyBTdGF0aWNHZW5CYWlsb3V0RXJyb3IgfSBmcm9tICcuLi8uLi9jbGllbnQvY29tcG9uZW50cy9zdGF0aWMtZ2VuZXJhdGlvbi1iYWlsb3V0J1xuaW1wb3J0IHsgd29ya1VuaXRBc3luY1N0b3JhZ2UgfSBmcm9tICcuL3dvcmstdW5pdC1hc3luYy1zdG9yYWdlLmV4dGVybmFsJ1xuaW1wb3J0IHsgd29ya0FzeW5jU3RvcmFnZSB9IGZyb20gJy4uL2FwcC1yZW5kZXIvd29yay1hc3luYy1zdG9yYWdlLmV4dGVybmFsJ1xuaW1wb3J0IHsgbWFrZUhhbmdpbmdQcm9taXNlIH0gZnJvbSAnLi4vZHluYW1pYy1yZW5kZXJpbmctdXRpbHMnXG5pbXBvcnQge1xuICBNRVRBREFUQV9CT1VOREFSWV9OQU1FLFxuICBWSUVXUE9SVF9CT1VOREFSWV9OQU1FLFxuICBPVVRMRVRfQk9VTkRBUllfTkFNRSxcbn0gZnJvbSAnLi4vLi4vbGliL21ldGFkYXRhL21ldGFkYXRhLWNvbnN0YW50cydcbmltcG9ydCB7IHNjaGVkdWxlT25OZXh0VGljayB9IGZyb20gJy4uLy4uL2xpYi9zY2hlZHVsZXInXG5cbmNvbnN0IGhhc1Bvc3Rwb25lID0gdHlwZW9mIFJlYWN0LnVuc3RhYmxlX3Bvc3Rwb25lID09PSAnZnVuY3Rpb24nXG5cbmV4cG9ydCB0eXBlIER5bmFtaWNBY2Nlc3MgPSB7XG4gIC8qKlxuICAgKiBJZiBkZWJ1Z2dpbmcsIHRoaXMgd2lsbCBjb250YWluIHRoZSBzdGFjayB0cmFjZSBvZiB3aGVyZSB0aGUgZHluYW1pYyBhY2Nlc3NcbiAgICogb2NjdXJyZWQuIFRoaXMgaXMgdXNlZCB0byBwcm92aWRlIG1vcmUgaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIgYWJvdXQgd2h5XG4gICAqIHRoZWlyIHBhZ2UgaXMgYmVpbmcgcmVuZGVyZWQgZHluYW1pY2FsbHkuXG4gICAqL1xuICBzdGFjaz86IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBUaGUgZXhwcmVzc2lvbiB0aGF0IHdhcyBhY2Nlc3NlZCBkeW5hbWljYWxseS5cbiAgICovXG4gIGV4cHJlc3Npb246IHN0cmluZ1xufVxuXG4vLyBTdG9yZXMgZHluYW1pYyByZWFzb25zIHVzZWQgZHVyaW5nIGFuIFJTQyByZW5kZXIuXG5leHBvcnQgdHlwZSBEeW5hbWljVHJhY2tpbmdTdGF0ZSA9IHtcbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc3RhY2sgaW5mb3JtYXRpb24gd2lsbCBhbHNvIGJlIHRyYWNrZWQgZHVyaW5nIGR5bmFtaWMgYWNjZXNzLlxuICAgKi9cbiAgcmVhZG9ubHkgaXNEZWJ1Z0R5bmFtaWNBY2Nlc3NlczogYm9vbGVhbiB8IHVuZGVmaW5lZFxuXG4gIC8qKlxuICAgKiBUaGUgZHluYW1pYyBhY2Nlc3NlcyB0aGF0IG9jY3VycmVkIGR1cmluZyB0aGUgcmVuZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgZHluYW1pY0FjY2Vzc2VzOiBBcnJheTxEeW5hbWljQWNjZXNzPlxuXG4gIHN5bmNEeW5hbWljRXJyb3JXaXRoU3RhY2s6IG51bGwgfCBFcnJvclxufVxuXG4vLyBTdG9yZXMgZHluYW1pYyByZWFzb25zIHVzZWQgZHVyaW5nIGFuIFNTUiByZW5kZXIuXG5leHBvcnQgdHlwZSBEeW5hbWljVmFsaWRhdGlvblN0YXRlID0ge1xuICBoYXNTdXNwZW5zZUFib3ZlQm9keTogYm9vbGVhblxuICBoYXNEeW5hbWljTWV0YWRhdGE6IGJvb2xlYW5cbiAgaGFzRHluYW1pY1ZpZXdwb3J0OiBib29sZWFuXG4gIGhhc0FsbG93ZWREeW5hbWljOiBib29sZWFuXG4gIGR5bmFtaWNFcnJvcnM6IEFycmF5PEVycm9yPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHluYW1pY1RyYWNraW5nU3RhdGUoXG4gIGlzRGVidWdEeW5hbWljQWNjZXNzZXM6IGJvb2xlYW4gfCB1bmRlZmluZWRcbik6IER5bmFtaWNUcmFja2luZ1N0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICBpc0RlYnVnRHluYW1pY0FjY2Vzc2VzLFxuICAgIGR5bmFtaWNBY2Nlc3NlczogW10sXG4gICAgc3luY0R5bmFtaWNFcnJvcldpdGhTdGFjazogbnVsbCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHluYW1pY1ZhbGlkYXRpb25TdGF0ZSgpOiBEeW5hbWljVmFsaWRhdGlvblN0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICBoYXNTdXNwZW5zZUFib3ZlQm9keTogZmFsc2UsXG4gICAgaGFzRHluYW1pY01ldGFkYXRhOiBmYWxzZSxcbiAgICBoYXNEeW5hbWljVmlld3BvcnQ6IGZhbHNlLFxuICAgIGhhc0FsbG93ZWREeW5hbWljOiBmYWxzZSxcbiAgICBkeW5hbWljRXJyb3JzOiBbXSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REeW5hbWljUmVhc29uKFxuICB0cmFja2luZ1N0YXRlOiBEeW5hbWljVHJhY2tpbmdTdGF0ZVxuKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcbiAgcmV0dXJuIHRyYWNraW5nU3RhdGUuZHluYW1pY0FjY2Vzc2VzWzBdPy5leHByZXNzaW9uXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb21tdW5pY2F0ZXMgdGhhdCB0aGUgY3VycmVudCBzY29wZSBzaG91bGQgYmUgdHJlYXRlZCBhcyBkeW5hbWljLlxuICpcbiAqIEluIG1vc3QgY2FzZXMgdGhpcyBmdW5jdGlvbiBpcyBhIG5vLW9wIGJ1dCBpZiBjYWxsZWQgZHVyaW5nXG4gKiBhIFBQUiBwcmVyZW5kZXIgaXQgd2lsbCBwb3N0cG9uZSB0aGUgY3VycmVudCBzdWItdHJlZSBhbmQgY2FsbGluZ1xuICogaXQgZHVyaW5nIGEgbm9ybWFsIHByZXJlbmRlciB3aWxsIGNhdXNlIHRoZSBlbnRpcmUgcHJlcmVuZGVyIHRvIGFib3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ3VycmVudFNjb3BlQXNEeW5hbWljKFxuICBzdG9yZTogV29ya1N0b3JlLFxuICB3b3JrVW5pdFN0b3JlOiB1bmRlZmluZWQgfCBFeGNsdWRlPFdvcmtVbml0U3RvcmUsIFByZXJlbmRlclN0b3JlTW9kZXJuPixcbiAgZXhwcmVzc2lvbjogc3RyaW5nXG4pOiB2b2lkIHtcbiAgaWYgKHdvcmtVbml0U3RvcmUpIHtcbiAgICBpZiAoXG4gICAgICB3b3JrVW5pdFN0b3JlLnR5cGUgPT09ICdjYWNoZScgfHxcbiAgICAgIHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ3Vuc3RhYmxlLWNhY2hlJ1xuICAgICkge1xuICAgICAgLy8gaW5zaWRlIGNhY2hlIHNjb3BlcyBtYXJraW5nIGEgc2NvcGUgYXMgZHluYW1pYyBoYXMgbm8gZWZmZWN0IGJlY2F1c2UgdGhlIG91dGVyIGNhY2hlIHNjb3BlXG4gICAgICAvLyBjcmVhdGVzIGEgY2FjaGUgYm91bmRhcnkuIFRoaXMgaXMgc3VidGx5IGRpZmZlcmVudCBmcm9tIHJlYWRpbmcgYSBkeW5hbWljIGRhdGEgc291cmNlIHdoaWNoIGlzXG4gICAgICAvLyBmb3JiaWRkZW4gaW5zaWRlIGEgY2FjaGUgc2NvcGUuXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSdyZSBmb3JjaW5nIGR5bmFtaWMgcmVuZGVyaW5nIG9yIHdlJ3JlIGZvcmNpbmcgc3RhdGljIHJlbmRlcmluZywgd2VcbiAgLy8gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZyBoZXJlIGJlY2F1c2UgdGhlIGVudGlyZSBwYWdlIGlzIGFscmVhZHkgZHluYW1pY1xuICAvLyBvciBpdCdzIHN0YXRpYyBhbmQgaXQgc2hvdWxkIG5vdCB0aHJvdyBvciBwb3N0cG9uZSBoZXJlLlxuICBpZiAoc3RvcmUuZm9yY2VEeW5hbWljIHx8IHN0b3JlLmZvcmNlU3RhdGljKSByZXR1cm5cblxuICBpZiAoc3RvcmUuZHluYW1pY1Nob3VsZEVycm9yKSB7XG4gICAgdGhyb3cgbmV3IFN0YXRpY0dlbkJhaWxvdXRFcnJvcihcbiAgICAgIGBSb3V0ZSAke3N0b3JlLnJvdXRlfSB3aXRoIFxcYGR5bmFtaWMgPSBcImVycm9yXCJcXGAgY291bGRuJ3QgYmUgcmVuZGVyZWQgc3RhdGljYWxseSBiZWNhdXNlIGl0IHVzZWQgXFxgJHtleHByZXNzaW9ufVxcYC4gU2VlIG1vcmUgaW5mbyBoZXJlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9yZW5kZXJpbmcvc3RhdGljLWFuZC1keW5hbWljI2R5bmFtaWMtcmVuZGVyaW5nYFxuICAgIClcbiAgfVxuXG4gIGlmICh3b3JrVW5pdFN0b3JlKSB7XG4gICAgaWYgKHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ3ByZXJlbmRlci1wcHInKSB7XG4gICAgICBwb3N0cG9uZVdpdGhUcmFja2luZyhcbiAgICAgICAgc3RvcmUucm91dGUsXG4gICAgICAgIGV4cHJlc3Npb24sXG4gICAgICAgIHdvcmtVbml0U3RvcmUuZHluYW1pY1RyYWNraW5nXG4gICAgICApXG4gICAgfSBlbHNlIGlmICh3b3JrVW5pdFN0b3JlLnR5cGUgPT09ICdwcmVyZW5kZXItbGVnYWN5Jykge1xuICAgICAgd29ya1VuaXRTdG9yZS5yZXZhbGlkYXRlID0gMFxuXG4gICAgICAvLyBXZSBhcmVuJ3QgcHJlcmVuZGVyaW5nIGJ1dCB3ZSBhcmUgZ2VuZXJhdGluZyBhIHN0YXRpYyBwYWdlLiBXZSBuZWVkIHRvIGJhaWwgb3V0IG9mIHN0YXRpYyBnZW5lcmF0aW9uXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRHluYW1pY1NlcnZlckVycm9yKFxuICAgICAgICBgUm91dGUgJHtzdG9yZS5yb3V0ZX0gY291bGRuJ3QgYmUgcmVuZGVyZWQgc3RhdGljYWxseSBiZWNhdXNlIGl0IHVzZWQgJHtleHByZXNzaW9ufS4gU2VlIG1vcmUgaW5mbyBoZXJlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9keW5hbWljLXNlcnZlci1lcnJvcmBcbiAgICAgIClcbiAgICAgIHN0b3JlLmR5bmFtaWNVc2FnZURlc2NyaXB0aW9uID0gZXhwcmVzc2lvblxuICAgICAgc3RvcmUuZHluYW1pY1VzYWdlU3RhY2sgPSBlcnIuc3RhY2tcblxuICAgICAgdGhyb3cgZXJyXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICB3b3JrVW5pdFN0b3JlICYmXG4gICAgICB3b3JrVW5pdFN0b3JlLnR5cGUgPT09ICdyZXF1ZXN0J1xuICAgICkge1xuICAgICAgd29ya1VuaXRTdG9yZS51c2VkRHluYW1pYyA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbW11bmljYXRlcyB0aGF0IHNvbWUgZHluYW1pYyBwYXRoIHBhcmFtZXRlciB3YXMgcmVhZC4gVGhpc1xuICogZGlmZmVycyBmcm9tIHRoZSBtb3JlIGdlbmVyYWwgYHRyYWNrRHluYW1pY0RhdGFBY2Nlc3NlZGAgaW4gdGhhdCBpdCBpcyB3aWxsXG4gKiBub3QgZXJyb3Igd2hlbiBgZHluYW1pYyA9IFwiZXJyb3JcImAgaXMgc2V0LlxuICpcbiAqIEBwYXJhbSBzdG9yZSBUaGUgc3RhdGljIGdlbmVyYXRpb24gc3RvcmVcbiAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIHRoYXQgd2FzIGFjY2Vzc2VkIGR5bmFtaWNhbGx5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0ZhbGxiYWNrUGFyYW1BY2Nlc3NlZChcbiAgc3RvcmU6IFdvcmtTdG9yZSxcbiAgZXhwcmVzc2lvbjogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3QgcHJlcmVuZGVyU3RvcmUgPSB3b3JrVW5pdEFzeW5jU3RvcmFnZS5nZXRTdG9yZSgpXG4gIGlmICghcHJlcmVuZGVyU3RvcmUgfHwgcHJlcmVuZGVyU3RvcmUudHlwZSAhPT0gJ3ByZXJlbmRlci1wcHInKSByZXR1cm5cblxuICBwb3N0cG9uZVdpdGhUcmFja2luZyhzdG9yZS5yb3V0ZSwgZXhwcmVzc2lvbiwgcHJlcmVuZGVyU3RvcmUuZHluYW1pY1RyYWNraW5nKVxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbWVhbnQgdG8gYmUgdXNlZCB3aGVuIHByZXJlbmRlcmluZyB3aXRob3V0IGR5bmFtaWNJTyBvciBQUFIuXG4gKiBXaGVuIGNhbGxlZCBkdXJpbmcgYSBidWlsZCBpdCB3aWxsIGNhdXNlIE5leHQuanMgdG8gY29uc2lkZXIgdGhlIHJvdXRlIGFzIGR5bmFtaWMuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1RvSW50ZXJydXB0U3RhdGljR2VuZXJhdGlvbihcbiAgZXhwcmVzc2lvbjogc3RyaW5nLFxuICBzdG9yZTogV29ya1N0b3JlLFxuICBwcmVyZW5kZXJTdG9yZTogUHJlcmVuZGVyU3RvcmVMZWdhY3lcbik6IG5ldmVyIHtcbiAgLy8gV2UgYXJlbid0IHByZXJlbmRlcmluZyBidXQgd2UgYXJlIGdlbmVyYXRpbmcgYSBzdGF0aWMgcGFnZS4gV2UgbmVlZCB0byBiYWlsIG91dCBvZiBzdGF0aWMgZ2VuZXJhdGlvblxuICBjb25zdCBlcnIgPSBuZXcgRHluYW1pY1NlcnZlckVycm9yKFxuICAgIGBSb3V0ZSAke3N0b3JlLnJvdXRlfSBjb3VsZG4ndCBiZSByZW5kZXJlZCBzdGF0aWNhbGx5IGJlY2F1c2UgaXQgdXNlZCBcXGAke2V4cHJlc3Npb259XFxgLiBTZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2R5bmFtaWMtc2VydmVyLWVycm9yYFxuICApXG5cbiAgcHJlcmVuZGVyU3RvcmUucmV2YWxpZGF0ZSA9IDBcblxuICBzdG9yZS5keW5hbWljVXNhZ2VEZXNjcmlwdGlvbiA9IGV4cHJlc3Npb25cbiAgc3RvcmUuZHluYW1pY1VzYWdlU3RhY2sgPSBlcnIuc3RhY2tcblxuICB0aHJvdyBlcnJcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSB1c2VkIHRvIHRyYWNrIHdoZXRoZXIgc29tZXRoaW5nIGR5bmFtaWMgaGFwcGVuZWQgZXZlbiB3aGVuXG4gKiB3ZSBhcmUgaW4gYSBkeW5hbWljIHJlbmRlci4gVGhpcyBpcyB1c2VmdWwgZm9yIERldiB3aGVyZSBhbGwgcmVuZGVycyBhcmUgZHluYW1pYyBidXRcbiAqIHdlIHN0aWxsIHRyYWNrIHdoZXRoZXIgZHluYW1pYyBBUElzIHdlcmUgYWNjZXNzZWQgZm9yIGhlbHBmdWwgbWVzc2FnaW5nXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0R5bmFtaWNEYXRhSW5EeW5hbWljUmVuZGVyKFxuICBfc3RvcmU6IFdvcmtTdG9yZSxcbiAgd29ya1VuaXRTdG9yZTogdm9pZCB8IFdvcmtVbml0U3RvcmVcbikge1xuICBpZiAod29ya1VuaXRTdG9yZSkge1xuICAgIGlmIChcbiAgICAgIHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ2NhY2hlJyB8fFxuICAgICAgd29ya1VuaXRTdG9yZS50eXBlID09PSAndW5zdGFibGUtY2FjaGUnXG4gICAgKSB7XG4gICAgICAvLyBpbnNpZGUgY2FjaGUgc2NvcGVzIG1hcmtpbmcgYSBzY29wZSBhcyBkeW5hbWljIGhhcyBubyBlZmZlY3QgYmVjYXVzZSB0aGUgb3V0ZXIgY2FjaGUgc2NvcGVcbiAgICAgIC8vIGNyZWF0ZXMgYSBjYWNoZSBib3VuZGFyeS4gVGhpcyBpcyBzdWJ0bHkgZGlmZmVyZW50IGZyb20gcmVhZGluZyBhIGR5bmFtaWMgZGF0YSBzb3VyY2Ugd2hpY2ggaXNcbiAgICAgIC8vIGZvcmJpZGRlbiBpbnNpZGUgYSBjYWNoZSBzY29wZS5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBUT0RPOiBpdCBtYWtlcyBubyBzZW5zZSB0byBoYXZlIHRoZXNlIHdvcmsgdW5pdCBzdG9yZSB0eXBlcyBkdXJpbmcgYSBkZXYgcmVuZGVyLlxuICAgIGlmIChcbiAgICAgIHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ3ByZXJlbmRlcicgfHxcbiAgICAgIHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ3ByZXJlbmRlci1jbGllbnQnIHx8XG4gICAgICB3b3JrVW5pdFN0b3JlLnR5cGUgPT09ICdwcmVyZW5kZXItbGVnYWN5J1xuICAgICkge1xuICAgICAgd29ya1VuaXRTdG9yZS5yZXZhbGlkYXRlID0gMFxuICAgIH1cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgd29ya1VuaXRTdG9yZS50eXBlID09PSAncmVxdWVzdCdcbiAgICApIHtcbiAgICAgIHdvcmtVbml0U3RvcmUudXNlZER5bmFtaWMgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFib3J0T25TeW5jaHJvbm91c0R5bmFtaWNEYXRhQWNjZXNzKFxuICByb3V0ZTogc3RyaW5nLFxuICBleHByZXNzaW9uOiBzdHJpbmcsXG4gIHByZXJlbmRlclN0b3JlOiBQcmVyZW5kZXJTdG9yZU1vZGVyblxuKTogdm9pZCB7XG4gIGNvbnN0IHJlYXNvbiA9IGBSb3V0ZSAke3JvdXRlfSBuZWVkcyB0byBiYWlsIG91dCBvZiBwcmVyZW5kZXJpbmcgYXQgdGhpcyBwb2ludCBiZWNhdXNlIGl0IHVzZWQgJHtleHByZXNzaW9ufS5gXG5cbiAgY29uc3QgZXJyb3IgPSBjcmVhdGVQcmVyZW5kZXJJbnRlcnJ1cHRlZEVycm9yKHJlYXNvbilcblxuICBwcmVyZW5kZXJTdG9yZS5jb250cm9sbGVyLmFib3J0KGVycm9yKVxuXG4gIGNvbnN0IGR5bmFtaWNUcmFja2luZyA9IHByZXJlbmRlclN0b3JlLmR5bmFtaWNUcmFja2luZ1xuICBpZiAoZHluYW1pY1RyYWNraW5nKSB7XG4gICAgZHluYW1pY1RyYWNraW5nLmR5bmFtaWNBY2Nlc3Nlcy5wdXNoKHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlbid0IGRlYnVnZ2luZywgd2UgZG9uJ3QgbmVlZCB0byBjcmVhdGUgYW5vdGhlciBlcnJvciBmb3IgdGhlXG4gICAgICAvLyBzdGFjayB0cmFjZS5cbiAgICAgIHN0YWNrOiBkeW5hbWljVHJhY2tpbmcuaXNEZWJ1Z0R5bmFtaWNBY2Nlc3Nlc1xuICAgICAgICA/IG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZXhwcmVzc2lvbixcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYm9ydE9uU3luY2hyb25vdXNQbGF0Zm9ybUlPQWNjZXNzKFxuICByb3V0ZTogc3RyaW5nLFxuICBleHByZXNzaW9uOiBzdHJpbmcsXG4gIGVycm9yV2l0aFN0YWNrOiBFcnJvcixcbiAgcHJlcmVuZGVyU3RvcmU6IFByZXJlbmRlclN0b3JlTW9kZXJuXG4pOiB2b2lkIHtcbiAgY29uc3QgZHluYW1pY1RyYWNraW5nID0gcHJlcmVuZGVyU3RvcmUuZHluYW1pY1RyYWNraW5nXG4gIGFib3J0T25TeW5jaHJvbm91c0R5bmFtaWNEYXRhQWNjZXNzKHJvdXRlLCBleHByZXNzaW9uLCBwcmVyZW5kZXJTdG9yZSlcbiAgLy8gSXQgaXMgaW1wb3J0YW50IHRoYXQgd2Ugc2V0IHRoaXMgdHJhY2tpbmcgdmFsdWUgYWZ0ZXIgYWJvcnRpbmcuIEFib3J0cyBhcmUgZXhlY3V0ZWRcbiAgLy8gc3luY2hyb25vdXNseSBleGNlcHQgZm9yIHRoZSBjYXNlIHdoZXJlIHlvdSBhYm9ydCBkdXJpbmcgcmVuZGVyIGl0c2VsZi4gQnkgc2V0dGluZyB0aGlzXG4gIC8vIHZhbHVlIGxhdGUgd2UgY2FuIHVzZSBpdCB0byBkZXRlcm1pbmUgaWYgYW55IG9mIHRoZSBhYm9ydGVkIHRhc2tzIGFyZSB0aGUgdGFzayB0aGF0XG4gIC8vIGNhbGxlZCB0aGUgc3luYyBJTyBleHByZXNzaW9uIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgaWYgKGR5bmFtaWNUcmFja2luZykge1xuICAgIGlmIChkeW5hbWljVHJhY2tpbmcuc3luY0R5bmFtaWNFcnJvcldpdGhTdGFjayA9PT0gbnVsbCkge1xuICAgICAgZHluYW1pY1RyYWNraW5nLnN5bmNEeW5hbWljRXJyb3JXaXRoU3RhY2sgPSBlcnJvcldpdGhTdGFja1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tTeW5jaHJvbm91c1BsYXRmb3JtSU9BY2Nlc3NJbkRldihcbiAgcmVxdWVzdFN0b3JlOiBSZXF1ZXN0U3RvcmVcbik6IHZvaWQge1xuICAvLyBXZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgY29udHJvbGxlciB0byBhYm9ydCBidXQgd2UgZG8gdGhlIHNlbWFudGljIGVxdWl2YWxlbnQgYnlcbiAgLy8gYWR2YW5jaW5nIHRoZSByZXF1ZXN0IHN0b3JlIG91dCBvZiBwcmVyZW5kZXIgbW9kZVxuICByZXF1ZXN0U3RvcmUucHJlcmVuZGVyUGhhc2UgPSBmYWxzZVxufVxuXG4vKipcbiAqIHVzZSB0aGlzIGZ1bmN0aW9uIHdoZW4gcHJlcmVuZGVyaW5nIHdpdGggZHluYW1pY0lPLiBJZiB3ZSBhcmUgZG9pbmcgYVxuICogcHJvc3BlY3RpdmUgcHJlcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IGFib3J0IGJlY2F1c2Ugd2Ugd2FudCB0byBkaXNjb3ZlclxuICogYWxsIGNhY2hlcyBmb3IgdGhlIHNoZWxsLiBJZiB0aGlzIGlzIHRoZSBhY3R1YWwgcHJlcmVuZGVyIHdlIGRvIGFib3J0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhIHByZXJlbmRlclN0b3JlIGJ1dCB0aGUgY2FsbGVyIHNob3VsZCBlbnN1cmUgd2UncmVcbiAqIGFjdHVhbGx5IHJ1bm5pbmcgaW4gZHluYW1pY0lPIG1vZGUuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhYm9ydEFuZFRocm93T25TeW5jaHJvbm91c1JlcXVlc3REYXRhQWNjZXNzKFxuICByb3V0ZTogc3RyaW5nLFxuICBleHByZXNzaW9uOiBzdHJpbmcsXG4gIGVycm9yV2l0aFN0YWNrOiBFcnJvcixcbiAgcHJlcmVuZGVyU3RvcmU6IFByZXJlbmRlclN0b3JlTW9kZXJuXG4pOiBuZXZlciB7XG4gIGNvbnN0IHByZXJlbmRlclNpZ25hbCA9IHByZXJlbmRlclN0b3JlLmNvbnRyb2xsZXIuc2lnbmFsXG4gIGlmIChwcmVyZW5kZXJTaWduYWwuYWJvcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBUT0RPIGl0IHdvdWxkIGJlIGJldHRlciB0byBtb3ZlIHRoaXMgYWJvcnRlZCBjaGVjayBpbnRvIHRoZSBjYWxsc2l0ZSBzbyB3ZSBjYW4gYXZvaWQgbWFraW5nXG4gICAgLy8gdGhlIGVycm9yIG9iamVjdCB3aGVuIGl0IGlzbid0IHJlbGV2YW50IHRvIHRoZSBhYm9ydGluZyBvZiB0aGUgcHJlcmVuZGVyIGhvd2V2ZXJcbiAgICAvLyBzaW5jZSB3ZSBuZWVkIHRoZSB0aHJvdyBzZW1hbnRpY3MgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHdlIGFib3J0IGl0IGlzIGVhc2llciB0byBsYW5kXG4gICAgLy8gdGhpcyB3YXkuIFNlZSBob3cgdGhpcyB3YXMgaGFuZGxlZCB3aXRoIGBhYm9ydE9uU3luY2hyb25vdXNQbGF0Zm9ybUlPQWNjZXNzYCBmb3IgYSBjbG9zZXJcbiAgICAvLyB0byBpZGVhbCBpbXBsZW1lbnRhdGlvblxuICAgIGFib3J0T25TeW5jaHJvbm91c0R5bmFtaWNEYXRhQWNjZXNzKHJvdXRlLCBleHByZXNzaW9uLCBwcmVyZW5kZXJTdG9yZSlcbiAgICAvLyBJdCBpcyBpbXBvcnRhbnQgdGhhdCB3ZSBzZXQgdGhpcyB0cmFja2luZyB2YWx1ZSBhZnRlciBhYm9ydGluZy4gQWJvcnRzIGFyZSBleGVjdXRlZFxuICAgIC8vIHN5bmNocm9ub3VzbHkgZXhjZXB0IGZvciB0aGUgY2FzZSB3aGVyZSB5b3UgYWJvcnQgZHVyaW5nIHJlbmRlciBpdHNlbGYuIEJ5IHNldHRpbmcgdGhpc1xuICAgIC8vIHZhbHVlIGxhdGUgd2UgY2FuIHVzZSBpdCB0byBkZXRlcm1pbmUgaWYgYW55IG9mIHRoZSBhYm9ydGVkIHRhc2tzIGFyZSB0aGUgdGFzayB0aGF0XG4gICAgLy8gY2FsbGVkIHRoZSBzeW5jIElPIGV4cHJlc3Npb24gaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIGNvbnN0IGR5bmFtaWNUcmFja2luZyA9IHByZXJlbmRlclN0b3JlLmR5bmFtaWNUcmFja2luZ1xuICAgIGlmIChkeW5hbWljVHJhY2tpbmcpIHtcbiAgICAgIGlmIChkeW5hbWljVHJhY2tpbmcuc3luY0R5bmFtaWNFcnJvcldpdGhTdGFjayA9PT0gbnVsbCkge1xuICAgICAgICBkeW5hbWljVHJhY2tpbmcuc3luY0R5bmFtaWNFcnJvcldpdGhTdGFjayA9IGVycm9yV2l0aFN0YWNrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IGNyZWF0ZVByZXJlbmRlckludGVycnVwdGVkRXJyb3IoXG4gICAgYFJvdXRlICR7cm91dGV9IG5lZWRzIHRvIGJhaWwgb3V0IG9mIHByZXJlbmRlcmluZyBhdCB0aGlzIHBvaW50IGJlY2F1c2UgaXQgdXNlZCAke2V4cHJlc3Npb259LmBcbiAgKVxufVxuXG4vLyBGb3Igbm93IHRoZXNlIGltcGxlbWVudGF0aW9ucyBhcmUgdGhlIHNhbWUgc28gd2UganVzdCByZWV4cG9ydFxuZXhwb3J0IGNvbnN0IHRyYWNrU3luY2hyb25vdXNSZXF1ZXN0RGF0YUFjY2Vzc0luRGV2ID1cbiAgdHJhY2tTeW5jaHJvbm91c1BsYXRmb3JtSU9BY2Nlc3NJbkRldlxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHdpbGwgY2FsbCBgUmVhY3QucG9zdHBvbmVgIHRoYXQgdGhyb3dzIHRoZSBwb3N0cG9uZWQgZXJyb3IuXG4gKi9cbnR5cGUgUG9zdHBvbmVQcm9wcyA9IHtcbiAgcmVhc29uOiBzdHJpbmdcbiAgcm91dGU6IHN0cmluZ1xufVxuZXhwb3J0IGZ1bmN0aW9uIFBvc3Rwb25lKHsgcmVhc29uLCByb3V0ZSB9OiBQb3N0cG9uZVByb3BzKTogbmV2ZXIge1xuICBjb25zdCBwcmVyZW5kZXJTdG9yZSA9IHdvcmtVbml0QXN5bmNTdG9yYWdlLmdldFN0b3JlKClcbiAgY29uc3QgZHluYW1pY1RyYWNraW5nID1cbiAgICBwcmVyZW5kZXJTdG9yZSAmJiBwcmVyZW5kZXJTdG9yZS50eXBlID09PSAncHJlcmVuZGVyLXBwcidcbiAgICAgID8gcHJlcmVuZGVyU3RvcmUuZHluYW1pY1RyYWNraW5nXG4gICAgICA6IG51bGxcbiAgcG9zdHBvbmVXaXRoVHJhY2tpbmcocm91dGUsIHJlYXNvbiwgZHluYW1pY1RyYWNraW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdHBvbmVXaXRoVHJhY2tpbmcoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGV4cHJlc3Npb246IHN0cmluZyxcbiAgZHluYW1pY1RyYWNraW5nOiBudWxsIHwgRHluYW1pY1RyYWNraW5nU3RhdGVcbik6IG5ldmVyIHtcbiAgYXNzZXJ0UG9zdHBvbmUoKVxuICBpZiAoZHluYW1pY1RyYWNraW5nKSB7XG4gICAgZHluYW1pY1RyYWNraW5nLmR5bmFtaWNBY2Nlc3Nlcy5wdXNoKHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlbid0IGRlYnVnZ2luZywgd2UgZG9uJ3QgbmVlZCB0byBjcmVhdGUgYW5vdGhlciBlcnJvciBmb3IgdGhlXG4gICAgICAvLyBzdGFjayB0cmFjZS5cbiAgICAgIHN0YWNrOiBkeW5hbWljVHJhY2tpbmcuaXNEZWJ1Z0R5bmFtaWNBY2Nlc3Nlc1xuICAgICAgICA/IG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZXhwcmVzc2lvbixcbiAgICB9KVxuICB9XG5cbiAgUmVhY3QudW5zdGFibGVfcG9zdHBvbmUoY3JlYXRlUG9zdHBvbmVSZWFzb24ocm91dGUsIGV4cHJlc3Npb24pKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3N0cG9uZVJlYXNvbihyb3V0ZTogc3RyaW5nLCBleHByZXNzaW9uOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBgUm91dGUgJHtyb3V0ZX0gbmVlZHMgdG8gYmFpbCBvdXQgb2YgcHJlcmVuZGVyaW5nIGF0IHRoaXMgcG9pbnQgYmVjYXVzZSBpdCB1c2VkICR7ZXhwcmVzc2lvbn0uIGAgK1xuICAgIGBSZWFjdCB0aHJvd3MgdGhpcyBzcGVjaWFsIG9iamVjdCB0byBpbmRpY2F0ZSB3aGVyZS4gSXQgc2hvdWxkIG5vdCBiZSBjYXVnaHQgYnkgYCArXG4gICAgYHlvdXIgb3duIHRyeS9jYXRjaC4gTGVhcm4gbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHByLWNhdWdodC1lcnJvcmBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUG9zdHBvbmUoZXJyOiB1bmtub3duKSB7XG4gIGlmIChcbiAgICB0eXBlb2YgZXJyID09PSAnb2JqZWN0JyAmJlxuICAgIGVyciAhPT0gbnVsbCAmJlxuICAgIHR5cGVvZiAoZXJyIGFzIGFueSkubWVzc2FnZSA9PT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGlzRHluYW1pY1Bvc3Rwb25lUmVhc29uKChlcnIgYXMgYW55KS5tZXNzYWdlKVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBpc0R5bmFtaWNQb3N0cG9uZVJlYXNvbihyZWFzb246IHN0cmluZykge1xuICByZXR1cm4gKFxuICAgIHJlYXNvbi5pbmNsdWRlcyhcbiAgICAgICduZWVkcyB0byBiYWlsIG91dCBvZiBwcmVyZW5kZXJpbmcgYXQgdGhpcyBwb2ludCBiZWNhdXNlIGl0IHVzZWQnXG4gICAgKSAmJlxuICAgIHJlYXNvbi5pbmNsdWRlcyhcbiAgICAgICdMZWFybiBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcHItY2F1Z2h0LWVycm9yJ1xuICAgIClcbiAgKVxufVxuXG5pZiAoaXNEeW5hbWljUG9zdHBvbmVSZWFzb24oY3JlYXRlUG9zdHBvbmVSZWFzb24oJyUlJScsICdeXl4nKSkgPT09IGZhbHNlKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnSW52YXJpYW50OiBpc0R5bmFtaWNQb3N0cG9uZSBtaXNpZGVudGlmaWVkIGEgcG9zdHBvbmUgcmVhc29uLiBUaGlzIGlzIGEgYnVnIGluIE5leHQuanMnXG4gIClcbn1cblxuY29uc3QgTkVYVF9QUkVSRU5ERVJfSU5URVJSVVBURUQgPSAnTkVYVF9QUkVSRU5ERVJfSU5URVJSVVBURUQnXG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXJlbmRlckludGVycnVwdGVkRXJyb3IobWVzc2FnZTogc3RyaW5nKTogRXJyb3Ige1xuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKVxuICA7KGVycm9yIGFzIGFueSkuZGlnZXN0ID0gTkVYVF9QUkVSRU5ERVJfSU5URVJSVVBURURcbiAgcmV0dXJuIGVycm9yXG59XG5cbnR5cGUgRGlnZXN0RXJyb3IgPSBFcnJvciAmIHtcbiAgZGlnZXN0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlcmVuZGVySW50ZXJydXB0ZWRFcnJvcihcbiAgZXJyb3I6IHVua25vd25cbik6IGVycm9yIGlzIERpZ2VzdEVycm9yIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmXG4gICAgZXJyb3IgIT09IG51bGwgJiZcbiAgICAoZXJyb3IgYXMgYW55KS5kaWdlc3QgPT09IE5FWFRfUFJFUkVOREVSX0lOVEVSUlVQVEVEICYmXG4gICAgJ25hbWUnIGluIGVycm9yICYmXG4gICAgJ21lc3NhZ2UnIGluIGVycm9yICYmXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2Nlc3NlZER5bmFtaWNEYXRhKFxuICBkeW5hbWljQWNjZXNzZXM6IEFycmF5PER5bmFtaWNBY2Nlc3M+XG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGR5bmFtaWNBY2Nlc3Nlcy5sZW5ndGggPiAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lRHluYW1pY0FjY2VzcyhcbiAgc2VydmVyRHluYW1pYzogRHluYW1pY1RyYWNraW5nU3RhdGUsXG4gIGNsaWVudER5bmFtaWM6IER5bmFtaWNUcmFja2luZ1N0YXRlXG4pOiBEeW5hbWljVHJhY2tpbmdTdGF0ZVsnZHluYW1pY0FjY2Vzc2VzJ10ge1xuICAvLyBXZSBtdXRhdGUgYmVjYXVzZSB3ZSBvbmx5IGNhbGwgdGhpcyBvbmNlIHdlIGFyZSBubyBsb25nZXIgd3JpdGluZ1xuICAvLyB0byB0aGUgZHluYW1pY1RyYWNraW5nU3RhdGUgYW5kIGl0J3MgbW9yZSBlZmZpY2llbnQgdGhhbiBjcmVhdGluZyBhIG5ld1xuICAvLyBhcnJheS5cbiAgc2VydmVyRHluYW1pYy5keW5hbWljQWNjZXNzZXMucHVzaCguLi5jbGllbnREeW5hbWljLmR5bmFtaWNBY2Nlc3NlcylcbiAgcmV0dXJuIHNlcnZlckR5bmFtaWMuZHluYW1pY0FjY2Vzc2VzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREeW5hbWljQVBJQWNjZXNzZXMoXG4gIGR5bmFtaWNBY2Nlc3NlczogQXJyYXk8RHluYW1pY0FjY2Vzcz5cbik6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGR5bmFtaWNBY2Nlc3Nlc1xuICAgIC5maWx0ZXIoXG4gICAgICAoYWNjZXNzKTogYWNjZXNzIGlzIFJlcXVpcmVkPER5bmFtaWNBY2Nlc3M+ID0+XG4gICAgICAgIHR5cGVvZiBhY2Nlc3Muc3RhY2sgPT09ICdzdHJpbmcnICYmIGFjY2Vzcy5zdGFjay5sZW5ndGggPiAwXG4gICAgKVxuICAgIC5tYXAoKHsgZXhwcmVzc2lvbiwgc3RhY2sgfSkgPT4ge1xuICAgICAgc3RhY2sgPSBzdGFja1xuICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgXCJFcnJvcjogXCIgcHJlZml4IGZyb20gdGhlIGZpcnN0IGxpbmUgb2YgdGhlIHN0YWNrIHRyYWNlIGFzXG4gICAgICAgIC8vIHdlbGwgYXMgdGhlIGZpcnN0IDQgbGluZXMgb2YgdGhlIHN0YWNrIHRyYWNlIHdoaWNoIGlzIHRoZSBkaXN0YW5jZVxuICAgICAgICAvLyBmcm9tIHRoZSB1c2VyIGNvZGUgYW5kIHRoZSBgbmV3IEVycm9yKCkuc3RhY2tgIGNhbGwuXG4gICAgICAgIC5zbGljZSg0KVxuICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiB7XG4gICAgICAgICAgLy8gRXhjbHVkZSBOZXh0LmpzIGludGVybmFscyBmcm9tIHRoZSBzdGFjayB0cmFjZS5cbiAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL25leHQvJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEV4Y2x1ZGUgYW5vbnltb3VzIGZ1bmN0aW9ucyBmcm9tIHRoZSBzdGFjayB0cmFjZS5cbiAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnICg8YW5vbnltb3VzPiknKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXhjbHVkZSBOb2RlLmpzIGludGVybmFscyBmcm9tIHRoZSBzdGFjayB0cmFjZS5cbiAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnIChub2RlOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICAgIHJldHVybiBgRHluYW1pYyBBUEkgVXNhZ2UgRGVidWcgLSAke2V4cHJlc3Npb259OlxcbiR7c3RhY2t9YFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFzc2VydFBvc3Rwb25lKCkge1xuICBpZiAoIWhhc1Bvc3Rwb25lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFyaWFudDogUmVhY3QudW5zdGFibGVfcG9zdHBvbmUgaXMgbm90IGRlZmluZWQuIFRoaXMgc3VnZ2VzdHMgdGhlIHdyb25nIHZlcnNpb24gb2YgUmVhY3Qgd2FzIGxvYWRlZC4gVGhpcyBpcyBhIGJ1ZyBpbiBOZXh0LmpzYFxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrIHRvIGFsbG93IHVzIHRvIGFib3J0IGEgcmVuZGVyIHVzaW5nIGEgUG9zdHBvbmUgaW5zdGFuY2UgaW5zdGVhZCBvZiBhbiBFcnJvciB3aGljaCBjaGFuZ2VzIFJlYWN0J3NcbiAqIGFib3J0IHNlbWFudGljcyBzbGlnaHRseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3Rwb25lZEFib3J0U2lnbmFsKHJlYXNvbjogc3RyaW5nKTogQWJvcnRTaWduYWwge1xuICBhc3NlcnRQb3N0cG9uZSgpXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgLy8gV2UgZ2V0IG91ciBoYW5kcyBvbiBhIHBvc3Rwb25lIGluc3RhbmNlIGJ5IGNhbGxpbmcgcG9zdHBvbmUgYW5kIGNhdGNoaW5nIHRoZSB0aHJvd1xuICB0cnkge1xuICAgIFJlYWN0LnVuc3RhYmxlX3Bvc3Rwb25lKHJlYXNvbilcbiAgfSBjYXRjaCAoeDogdW5rbm93bikge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoeClcbiAgfVxuICByZXR1cm4gY29udHJvbGxlci5zaWduYWxcbn1cblxuLyoqXG4gKiBJbiBhIHByZXJlbmRlciwgd2UgbWF5IGVuZCB1cCB3aXRoIGhhbmdpbmcgUHJvbWlzZXMgYXMgaW5wdXRzIGR1ZSB0aGVtXG4gKiBzdGFsbGluZyBvbiBjb25uZWN0aW9uKCkgb3IgYmVjYXVzZSB0aGV5J3JlIGxvYWRpbmcgZHluYW1pYyBkYXRhLiBJbiB0aGF0XG4gKiBjYXNlIHdlIG5lZWQgdG8gYWJvcnQgdGhlIGVuY29kaW5nIG9mIGFyZ3VtZW50cyBzaW5jZSB0aGV5J2xsIG5ldmVyIGNvbXBsZXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGFuZ2luZ0lucHV0QWJvcnRTaWduYWwoXG4gIHdvcmtVbml0U3RvcmU6IFByZXJlbmRlclN0b3JlTW9kZXJuXG4pOiBBYm9ydFNpZ25hbCB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICBpZiAod29ya1VuaXRTdG9yZS5jYWNoZVNpZ25hbCkge1xuICAgIC8vIElmIHdlIGhhdmUgYSBjYWNoZVNpZ25hbCBpdCBtZWFucyB3ZSdyZSBpbiBhIHByb3NwZWN0aXZlIHJlbmRlci4gSWYgdGhlIGlucHV0XG4gICAgLy8gd2UncmUgd2FpdGluZyBvbiBpcyBjb21pbmcgZnJvbSBhbm90aGVyIGNhY2hlLCB3ZSBkbyB3YW50IHRvIHdhaXQgZm9yIGl0IHNvIHRoYXRcbiAgICAvLyB3ZSBjYW4gcmVzb2x2ZSB0aGlzIGNhY2hlIGVudHJ5IHRvby5cbiAgICB3b3JrVW5pdFN0b3JlLmNhY2hlU2lnbmFsLmlucHV0UmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHdlJ3JlIGluIHRoZSBmaW5hbCByZW5kZXIgYW5kIHdlIHNob3VsZCBhbHJlYWR5IGhhdmUgYWxsIG91ciBjYWNoZXNcbiAgICAvLyBmaWxsZWQuIFdlIG1pZ2h0IHN0aWxsIGJlIHdhaXRpbmcgb24gc29tZSBtaWNyb3Rhc2tzIHNvIHdlIHdhaXQgb25lIHRpY2sgYmVmb3JlXG4gICAgLy8gZ2l2aW5nIHVwLiBXaGVuIHdlIGdpdmUgdXAsIHdlIHN0aWxsIHdhbnQgdG8gcmVuZGVyIHRoZSBjb250ZW50IG9mIHRoaXMgY2FjaGVcbiAgICAvLyBhcyBkZWVwbHkgYXMgd2UgY2FuIHNvIHRoYXQgd2UgY2FuIHN1c3BlbmQgYXMgZGVlcGx5IGFzIHBvc3NpYmxlIGluIHRoZSB0cmVlXG4gICAgLy8gb3Igbm90IGF0IGFsbCBpZiB3ZSBkb24ndCBlbmQgdXAgd2FpdGluZyBmb3IgdGhlIGlucHV0LlxuICAgIHNjaGVkdWxlT25OZXh0VGljaygoKSA9PiBjb250cm9sbGVyLmFib3J0KCkpXG4gIH1cblxuICByZXR1cm4gY29udHJvbGxlci5zaWduYWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFubm90YXRlRHluYW1pY0FjY2VzcyhcbiAgZXhwcmVzc2lvbjogc3RyaW5nLFxuICBwcmVyZW5kZXJTdG9yZTogUHJlcmVuZGVyU3RvcmVNb2Rlcm5cbikge1xuICBjb25zdCBkeW5hbWljVHJhY2tpbmcgPSBwcmVyZW5kZXJTdG9yZS5keW5hbWljVHJhY2tpbmdcbiAgaWYgKGR5bmFtaWNUcmFja2luZykge1xuICAgIGR5bmFtaWNUcmFja2luZy5keW5hbWljQWNjZXNzZXMucHVzaCh7XG4gICAgICBzdGFjazogZHluYW1pY1RyYWNraW5nLmlzRGVidWdEeW5hbWljQWNjZXNzZXNcbiAgICAgICAgPyBuZXcgRXJyb3IoKS5zdGFja1xuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGV4cHJlc3Npb24sXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRHluYW1pY1JvdXRlUGFyYW1zKGV4cHJlc3Npb246IHN0cmluZykge1xuICBjb25zdCB3b3JrU3RvcmUgPSB3b3JrQXN5bmNTdG9yYWdlLmdldFN0b3JlKClcblxuICBpZiAoXG4gICAgd29ya1N0b3JlICYmXG4gICAgd29ya1N0b3JlLmlzU3RhdGljR2VuZXJhdGlvbiAmJlxuICAgIHdvcmtTdG9yZS5mYWxsYmFja1JvdXRlUGFyYW1zICYmXG4gICAgd29ya1N0b3JlLmZhbGxiYWNrUm91dGVQYXJhbXMuc2l6ZSA+IDBcbiAgKSB7XG4gICAgLy8gVGhlcmUgYXJlIGZhbGxiYWNrIHJvdXRlIHBhcmFtcywgd2Ugc2hvdWxkIHRyYWNrIHRoZXNlIGFzIGR5bmFtaWNcbiAgICAvLyBhY2Nlc3Nlcy5cbiAgICBjb25zdCB3b3JrVW5pdFN0b3JlID0gd29ya1VuaXRBc3luY1N0b3JhZ2UuZ2V0U3RvcmUoKVxuICAgIGlmICh3b3JrVW5pdFN0b3JlKSB7XG4gICAgICAvLyBXZSdyZSBwcmVyZW5kZXJpbmcgd2l0aCBkeW5hbWljSU8gb3IgUFBSIG9yIGJvdGhcbiAgICAgIGlmICh3b3JrVW5pdFN0b3JlLnR5cGUgPT09ICdwcmVyZW5kZXItY2xpZW50Jykge1xuICAgICAgICAvLyBXZSBhcmUgaW4gYSBwcmVyZW5kZXIgd2l0aCBkeW5hbWljSU8gc2VtYW50aWNzXG4gICAgICAgIC8vIFdlIGFyZSBnb2luZyB0byBoYW5nIGhlcmUgYW5kIG5ldmVyIHJlc29sdmUuIFRoaXMgd2lsbCBjYXVzZSB0aGUgY3VycmVudGx5XG4gICAgICAgIC8vIHJlbmRlcmluZyBjb21wb25lbnQgdG8gZWZmZWN0aXZlbHkgYmUgYSBkeW5hbWljIGhvbGVcbiAgICAgICAgUmVhY3QudXNlKG1ha2VIYW5naW5nUHJvbWlzZSh3b3JrVW5pdFN0b3JlLnJlbmRlclNpZ25hbCwgZXhwcmVzc2lvbikpXG4gICAgICB9IGVsc2UgaWYgKHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ3ByZXJlbmRlci1wcHInKSB7XG4gICAgICAgIC8vIFdlJ3JlIHByZXJlbmRlcmluZyB3aXRoIFBQUlxuICAgICAgICBwb3N0cG9uZVdpdGhUcmFja2luZyhcbiAgICAgICAgICB3b3JrU3RvcmUucm91dGUsXG4gICAgICAgICAgZXhwcmVzc2lvbixcbiAgICAgICAgICB3b3JrVW5pdFN0b3JlLmR5bmFtaWNUcmFja2luZ1xuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHdvcmtVbml0U3RvcmUudHlwZSA9PT0gJ3ByZXJlbmRlci1sZWdhY3knKSB7XG4gICAgICAgIHRocm93VG9JbnRlcnJ1cHRTdGF0aWNHZW5lcmF0aW9uKGV4cHJlc3Npb24sIHdvcmtTdG9yZSwgd29ya1VuaXRTdG9yZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGFzU3VzcGVuc2VSZWdleCA9IC9cXG5cXHMrYXQgU3VzcGVuc2UgXFwoPGFub255bW91cz5cXCkvXG5jb25zdCBoYXNTdXNwZW5zZUFmdGVyQm9keU9ySHRtbFJlZ2V4ID1cbiAgL1xcblxccythdCAoPzpib2R5fGh0bWwpIFxcKDxhbm9ueW1vdXM+XFwpW1xcc1xcU10qP1xcblxccythdCBTdXNwZW5zZSBcXCg8YW5vbnltb3VzPlxcKS9cbmNvbnN0IGhhc01ldGFkYXRhUmVnZXggPSBuZXcgUmVnRXhwKFxuICBgXFxcXG5cXFxccythdCAke01FVEFEQVRBX0JPVU5EQVJZX05BTUV9W1xcXFxuXFxcXHNdYFxuKVxuY29uc3QgaGFzVmlld3BvcnRSZWdleCA9IG5ldyBSZWdFeHAoXG4gIGBcXFxcblxcXFxzK2F0ICR7VklFV1BPUlRfQk9VTkRBUllfTkFNRX1bXFxcXG5cXFxcc11gXG4pXG5jb25zdCBoYXNPdXRsZXRSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxuXFxcXHMrYXQgJHtPVVRMRVRfQk9VTkRBUllfTkFNRX1bXFxcXG5cXFxcc11gKVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tBbGxvd2VkRHluYW1pY0FjY2VzcyhcbiAgd29ya1N0b3JlOiBXb3JrU3RvcmUsXG4gIGNvbXBvbmVudFN0YWNrOiBzdHJpbmcsXG4gIGR5bmFtaWNWYWxpZGF0aW9uOiBEeW5hbWljVmFsaWRhdGlvblN0YXRlLFxuICBjbGllbnREeW5hbWljOiBEeW5hbWljVHJhY2tpbmdTdGF0ZVxuKSB7XG4gIGlmIChoYXNPdXRsZXRSZWdleC50ZXN0KGNvbXBvbmVudFN0YWNrKSkge1xuICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gdHJhY2sgdGhhdCB0aGlzIGlzIGR5bmFtaWMuIEl0IGlzIG9ubHkgc28gd2hlbiBzb21ldGhpbmcgZWxzZSBpcyBhbHNvIGR5bmFtaWMuXG4gICAgcmV0dXJuXG4gIH0gZWxzZSBpZiAoaGFzTWV0YWRhdGFSZWdleC50ZXN0KGNvbXBvbmVudFN0YWNrKSkge1xuICAgIGR5bmFtaWNWYWxpZGF0aW9uLmhhc0R5bmFtaWNNZXRhZGF0YSA9IHRydWVcbiAgICByZXR1cm5cbiAgfSBlbHNlIGlmIChoYXNWaWV3cG9ydFJlZ2V4LnRlc3QoY29tcG9uZW50U3RhY2spKSB7XG4gICAgZHluYW1pY1ZhbGlkYXRpb24uaGFzRHluYW1pY1ZpZXdwb3J0ID0gdHJ1ZVxuICAgIHJldHVyblxuICB9IGVsc2UgaWYgKGhhc1N1c3BlbnNlQWZ0ZXJCb2R5T3JIdG1sUmVnZXgudGVzdChjb21wb25lbnRTdGFjaykpIHtcbiAgICAvLyBUaGlzIHByZXJlbmRlciBoYXMgYSBTdXNwZW5zZSBib3VuZGFyeSBhYm92ZSB0aGUgYm9keSB3aGljaFxuICAgIC8vIGVmZmVjdGl2ZWx5IG9wdHMgdGhlIHBhZ2UgaW50byBhbGxvd2luZyAxMDAlIGR5bmFtaWMgcmVuZGVyaW5nXG4gICAgZHluYW1pY1ZhbGlkYXRpb24uaGFzQWxsb3dlZER5bmFtaWMgPSB0cnVlXG4gICAgZHluYW1pY1ZhbGlkYXRpb24uaGFzU3VzcGVuc2VBYm92ZUJvZHkgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH0gZWxzZSBpZiAoaGFzU3VzcGVuc2VSZWdleC50ZXN0KGNvbXBvbmVudFN0YWNrKSkge1xuICAgIC8vIHRoaXMgZXJyb3IgaGFkIGEgU3VzcGVuc2UgYm91bmRhcnkgYWJvdmUgaXQgc28gd2UgZG9uJ3QgbmVlZCB0byByZXBvcnQgaXQgYXMgYSBzb3VyY2VcbiAgICAvLyBvZiBkaXNhbGxvd2VkXG4gICAgZHluYW1pY1ZhbGlkYXRpb24uaGFzQWxsb3dlZER5bmFtaWMgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH0gZWxzZSBpZiAoY2xpZW50RHluYW1pYy5zeW5jRHluYW1pY0Vycm9yV2l0aFN0YWNrKSB7XG4gICAgLy8gVGhpcyB0YXNrIHdhcyB0aGUgdGFzayB0aGF0IGNhbGxlZCB0aGUgc3luYyBlcnJvci5cbiAgICBkeW5hbWljVmFsaWRhdGlvbi5keW5hbWljRXJyb3JzLnB1c2goXG4gICAgICBjbGllbnREeW5hbWljLnN5bmNEeW5hbWljRXJyb3JXaXRoU3RhY2tcbiAgICApXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBSb3V0ZSBcIiR7d29ya1N0b3JlLnJvdXRlfVwiOiBBIGNvbXBvbmVudCBhY2Nlc3NlZCBkYXRhLCBoZWFkZXJzLCBwYXJhbXMsIHNlYXJjaFBhcmFtcywgb3IgYSBzaG9ydC1saXZlZCBjYWNoZSB3aXRob3V0IGEgU3VzcGVuc2UgYm91bmRhcnkgbm9yIGEgXCJ1c2UgY2FjaGVcIiBhYm92ZSBpdC4gU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1wcmVyZW5kZXItbWlzc2luZy1zdXNwZW5zZWBcbiAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yV2l0aENvbXBvbmVudE9yT3duZXJTdGFjayhtZXNzYWdlLCBjb21wb25lbnRTdGFjaylcbiAgICBkeW5hbWljVmFsaWRhdGlvbi5keW5hbWljRXJyb3JzLnB1c2goZXJyb3IpXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBJbiBkZXYgbW9kZSwgd2UgcHJlZmVyIHVzaW5nIHRoZSBvd25lciBzdGFjaywgb3RoZXJ3aXNlIHRoZSBwcm92aWRlZFxuICogY29tcG9uZW50IHN0YWNrIGlzIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yV2l0aENvbXBvbmVudE9yT3duZXJTdGFjayhcbiAgbWVzc2FnZTogc3RyaW5nLFxuICBjb21wb25lbnRTdGFjazogc3RyaW5nXG4pIHtcbiAgY29uc3Qgb3duZXJTdGFjayA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBSZWFjdC5jYXB0dXJlT3duZXJTdGFja1xuICAgICAgPyBSZWFjdC5jYXB0dXJlT3duZXJTdGFjaygpXG4gICAgICA6IG51bGxcblxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKVxuICBlcnJvci5zdGFjayA9IGVycm9yLm5hbWUgKyAnOiAnICsgbWVzc2FnZSArIChvd25lclN0YWNrID8/IGNvbXBvbmVudFN0YWNrKVxuICByZXR1cm4gZXJyb3Jcbn1cblxuZXhwb3J0IGVudW0gUHJlbHVkZVN0YXRlIHtcbiAgRnVsbCA9IDAsXG4gIEVtcHR5ID0gMSxcbiAgRXJyb3JlZCA9IDIsXG59XG5cbmZ1bmN0aW9uIGxvZ0Rpc2FsbG93ZWREeW5hbWljRXJyb3Iod29ya1N0b3JlOiBXb3JrU3RvcmUsIGVycm9yOiBFcnJvcik6IHZvaWQge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gIGlmICghd29ya1N0b3JlLmRldikge1xuICAgIGlmICh3b3JrU3RvcmUuaGFzUmVhZGFibGVFcnJvclN0YWNrcykge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRvIGdldCBhIG1vcmUgZGV0YWlsZWQgc3RhY2sgdHJhY2UgYW5kIHBpbnBvaW50IHRoZSBpc3N1ZSwgc3RhcnQgdGhlIGFwcCBpbiBkZXZlbG9wbWVudCBtb2RlIGJ5IHJ1bm5pbmcgXFxgbmV4dCBkZXZcXGAsIHRoZW4gb3BlbiBcIiR7d29ya1N0b3JlLnJvdXRlfVwiIGluIHlvdXIgYnJvd3NlciB0byBpbnZlc3RpZ2F0ZSB0aGUgZXJyb3IuYFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUbyBnZXQgYSBtb3JlIGRldGFpbGVkIHN0YWNrIHRyYWNlIGFuZCBwaW5wb2ludCB0aGUgaXNzdWUsIHRyeSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAgLSBTdGFydCB0aGUgYXBwIGluIGRldmVsb3BtZW50IG1vZGUgYnkgcnVubmluZyBcXGBuZXh0IGRldlxcYCwgdGhlbiBvcGVuIFwiJHt3b3JrU3RvcmUucm91dGV9XCIgaW4geW91ciBicm93c2VyIHRvIGludmVzdGlnYXRlIHRoZSBlcnJvci5cbiAgLSBSZXJ1biB0aGUgcHJvZHVjdGlvbiBidWlsZCB3aXRoIFxcYG5leHQgYnVpbGQgLS1kZWJ1Zy1wcmVyZW5kZXJcXGAgdG8gZ2VuZXJhdGUgYmV0dGVyIHN0YWNrIHRyYWNlcy5gKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dJZkRpc2FsbG93ZWREeW5hbWljKFxuICB3b3JrU3RvcmU6IFdvcmtTdG9yZSxcbiAgcHJlbHVkZTogUHJlbHVkZVN0YXRlLFxuICBkeW5hbWljVmFsaWRhdGlvbjogRHluYW1pY1ZhbGlkYXRpb25TdGF0ZSxcbiAgc2VydmVyRHluYW1pYzogRHluYW1pY1RyYWNraW5nU3RhdGVcbik6IHZvaWQge1xuICBpZiAod29ya1N0b3JlLmludmFsaWREeW5hbWljVXNhZ2VFcnJvcikge1xuICAgIGxvZ0Rpc2FsbG93ZWREeW5hbWljRXJyb3Iod29ya1N0b3JlLCB3b3JrU3RvcmUuaW52YWxpZER5bmFtaWNVc2FnZUVycm9yKVxuICAgIHRocm93IG5ldyBTdGF0aWNHZW5CYWlsb3V0RXJyb3IoKVxuICB9XG5cbiAgaWYgKHByZWx1ZGUgIT09IFByZWx1ZGVTdGF0ZS5GdWxsKSB7XG4gICAgaWYgKGR5bmFtaWNWYWxpZGF0aW9uLmhhc1N1c3BlbnNlQWJvdmVCb2R5KSB7XG4gICAgICAvLyBUaGlzIHJvdXRlIGhhcyBvcHRlZCBpbnRvIGFsbG93aW5nIGZ1bGx5IGR5bmFtaWMgcmVuZGVyaW5nXG4gICAgICAvLyBieSBpbmNsdWRpbmcgYSBTdXNwZW5zZSBib3VuZGFyeSBhYm92ZSB0aGUgYm9keS4gSW4gdGhpcyBjYXNlXG4gICAgICAvLyBhIGxhY2sgb2YgYSBzaGVsbCBpcyBub3QgY29uc2lkZXJlZCBkaXNhbGxvd2VkIHNvIHdlIHNpbXBseSByZXR1cm5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZXJ2ZXJEeW5hbWljLnN5bmNEeW5hbWljRXJyb3JXaXRoU3RhY2spIHtcbiAgICAgIC8vIFRoZXJlIGlzIG5vIHNoZWxsIGFuZCB0aGUgc2VydmVyIGRpZCBzb21ldGhpbmcgc3luYyBkeW5hbWljIGxpa2VseVxuICAgICAgLy8gbGVhZGluZyB0byBhbiBlYXJseSB0ZXJtaW5hdGlvbiBvZiB0aGUgcHJlcmVuZGVyIGJlZm9yZSB0aGUgc2hlbGxcbiAgICAgIC8vIGNvdWxkIGJlIGNvbXBsZXRlZC4gV2UgdGVybWluYXRlIHRoZSBidWlsZC92YWxpZGF0aW5nIHJlbmRlci5cbiAgICAgIGxvZ0Rpc2FsbG93ZWREeW5hbWljRXJyb3IoXG4gICAgICAgIHdvcmtTdG9yZSxcbiAgICAgICAgc2VydmVyRHluYW1pYy5zeW5jRHluYW1pY0Vycm9yV2l0aFN0YWNrXG4gICAgICApXG4gICAgICB0aHJvdyBuZXcgU3RhdGljR2VuQmFpbG91dEVycm9yKClcbiAgICB9XG5cbiAgICAvLyBXZSBkaWRuJ3QgaGF2ZSBhbnkgc3luYyBiYWlsb3V0cyBidXQgdGhlcmUgbWF5IGJlIHVzZXIgY29kZSB3aGljaFxuICAgIC8vIGJsb2NrZWQgdGhlIHJvb3QuIFdlIHdvdWxkIGhhdmUgY2FwdHVyZWQgdGhlc2UgZHVyaW5nIHRoZSBwcmVyZW5kZXJcbiAgICAvLyBhbmQgY2FuIGxvZyB0aGVtIGhlcmUgYW5kIHRoZW4gdGVybWluYXRlIHRoZSBidWlsZC92YWxpZGF0aW5nIHJlbmRlclxuICAgIGNvbnN0IGR5bmFtaWNFcnJvcnMgPSBkeW5hbWljVmFsaWRhdGlvbi5keW5hbWljRXJyb3JzXG4gICAgaWYgKGR5bmFtaWNFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkeW5hbWljRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxvZ0Rpc2FsbG93ZWREeW5hbWljRXJyb3Iod29ya1N0b3JlLCBkeW5hbWljRXJyb3JzW2ldKVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgU3RhdGljR2VuQmFpbG91dEVycm9yKClcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB0aGUgb25seSBvdGhlciB0aGluZyB0aGF0IGNvdWxkIGJlIGJsb2NraW5nXG4gICAgLy8gdGhlIHJvb3QgaXMgZHluYW1pYyBWaWV3cG9ydC4gSWYgdGhpcyBpcyBkeW5hbWljIHRoZW5cbiAgICAvLyB5b3UgbmVlZCB0byBvcHQgaW50byB0aGF0IGJ5IGFkZGluZyBhIFN1c3BlbnNlIGJvdW5kYXJ5IGFib3ZlIHRoZSBib2R5XG4gICAgLy8gdG8gaW5kaWNhdGUgeW91ciBhcmUgb2sgd2l0aCBmdWxseSBkeW5hbWljIHJlbmRlcmluZy5cbiAgICBpZiAoZHluYW1pY1ZhbGlkYXRpb24uaGFzRHluYW1pY1ZpZXdwb3J0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgUm91dGUgXCIke3dvcmtTdG9yZS5yb3V0ZX1cIiBoYXMgYSBcXGBnZW5lcmF0ZVZpZXdwb3J0XFxgIHRoYXQgZGVwZW5kcyBvbiBSZXF1ZXN0IGRhdGEgKFxcYGNvb2tpZXMoKVxcYCwgZXRjLi4uKSBvciB1bmNhY2hlZCBleHRlcm5hbCBkYXRhIChcXGBmZXRjaCguLi4pXFxgLCBldGMuLi4pIHdpdGhvdXQgZXhwbGljaXRseSBhbGxvd2luZyBmdWxseSBkeW5hbWljIHJlbmRlcmluZy4gU2VlIG1vcmUgaW5mbyBoZXJlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LXByZXJlbmRlci1keW5hbWljLXZpZXdwb3J0YFxuICAgICAgKVxuICAgICAgdGhyb3cgbmV3IFN0YXRpY0dlbkJhaWxvdXRFcnJvcigpXG4gICAgfVxuXG4gICAgaWYgKHByZWx1ZGUgPT09IFByZWx1ZGVTdGF0ZS5FbXB0eSkge1xuICAgICAgLy8gSWYgd2UgZXZlciBnZXQgdGhpcyBmYXIgdGhlbiB3ZSBtZXNzZWQgdXAgdGhlIHRyYWNraW5nIG9mIGludmFsaWQgZHluYW1pYy5cbiAgICAgIC8vIFdlIHN0aWxsIGFkaGVyZSB0byB0aGUgY29uc3RyYWludCB0aGF0IHlvdSBtdXN0IHByb2R1Y2UgYSBzaGVsbCBidXQgaW52aXRlIHRoZVxuICAgICAgLy8gdXNlciB0byByZXBvcnQgdGhpcyBhcyBhIGJ1ZyBpbiBOZXh0LmpzLlxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFJvdXRlIFwiJHt3b3JrU3RvcmUucm91dGV9XCIgZGlkIG5vdCBwcm9kdWNlIGEgc3RhdGljIHNoZWxsIGFuZCBOZXh0LmpzIHdhcyB1bmFibGUgdG8gZGV0ZXJtaW5lIGEgcmVhc29uLiBUaGlzIGlzIGEgYnVnIGluIE5leHQuanMuYFxuICAgICAgKVxuICAgICAgdGhyb3cgbmV3IFN0YXRpY0dlbkJhaWxvdXRFcnJvcigpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChcbiAgICAgIGR5bmFtaWNWYWxpZGF0aW9uLmhhc0FsbG93ZWREeW5hbWljID09PSBmYWxzZSAmJlxuICAgICAgZHluYW1pY1ZhbGlkYXRpb24uaGFzRHluYW1pY01ldGFkYXRhXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgUm91dGUgXCIke3dvcmtTdG9yZS5yb3V0ZX1cIiBoYXMgYSBcXGBnZW5lcmF0ZU1ldGFkYXRhXFxgIHRoYXQgZGVwZW5kcyBvbiBSZXF1ZXN0IGRhdGEgKFxcYGNvb2tpZXMoKVxcYCwgZXRjLi4uKSBvciB1bmNhY2hlZCBleHRlcm5hbCBkYXRhIChcXGBmZXRjaCguLi4pXFxgLCBldGMuLi4pIHdoZW4gdGhlIHJlc3Qgb2YgdGhlIHJvdXRlIGRvZXMgbm90LiBTZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtcHJlcmVuZGVyLWR5bmFtaWMtbWV0YWRhdGFgXG4gICAgICApXG4gICAgICB0aHJvdyBuZXcgU3RhdGljR2VuQmFpbG91dEVycm9yKClcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb3N0cG9uZSIsIlByZWx1ZGVTdGF0ZSIsImFib3J0QW5kVGhyb3dPblN5bmNocm9ub3VzUmVxdWVzdERhdGFBY2Nlc3MiLCJhYm9ydE9uU3luY2hyb25vdXNQbGF0Zm9ybUlPQWNjZXNzIiwiYWNjZXNzZWREeW5hbWljRGF0YSIsImFubm90YXRlRHluYW1pY0FjY2VzcyIsImNvbnN1bWVEeW5hbWljQWNjZXNzIiwiY3JlYXRlRHluYW1pY1RyYWNraW5nU3RhdGUiLCJjcmVhdGVEeW5hbWljVmFsaWRhdGlvblN0YXRlIiwiY3JlYXRlSGFuZ2luZ0lucHV0QWJvcnRTaWduYWwiLCJjcmVhdGVQb3N0cG9uZWRBYm9ydFNpZ25hbCIsImZvcm1hdER5bmFtaWNBUElBY2Nlc3NlcyIsImdldEZpcnN0RHluYW1pY1JlYXNvbiIsImlzRHluYW1pY1Bvc3Rwb25lIiwiaXNQcmVyZW5kZXJJbnRlcnJ1cHRlZEVycm9yIiwibWFya0N1cnJlbnRTY29wZUFzRHluYW1pYyIsInBvc3Rwb25lV2l0aFRyYWNraW5nIiwidGhyb3dJZkRpc2FsbG93ZWREeW5hbWljIiwidGhyb3dUb0ludGVycnVwdFN0YXRpY0dlbmVyYXRpb24iLCJ0cmFja0FsbG93ZWREeW5hbWljQWNjZXNzIiwidHJhY2tEeW5hbWljRGF0YUluRHluYW1pY1JlbmRlciIsInRyYWNrRmFsbGJhY2tQYXJhbUFjY2Vzc2VkIiwidHJhY2tTeW5jaHJvbm91c1BsYXRmb3JtSU9BY2Nlc3NJbkRldiIsInRyYWNrU3luY2hyb25vdXNSZXF1ZXN0RGF0YUFjY2Vzc0luRGV2IiwidXNlRHluYW1pY1JvdXRlUGFyYW1zIiwiaGFzUG9zdHBvbmUiLCJSZWFjdCIsInVuc3RhYmxlX3Bvc3Rwb25lIiwiaXNEZWJ1Z0R5bmFtaWNBY2Nlc3NlcyIsImR5bmFtaWNBY2Nlc3NlcyIsInN5bmNEeW5hbWljRXJyb3JXaXRoU3RhY2siLCJoYXNTdXNwZW5zZUFib3ZlQm9keSIsImhhc0R5bmFtaWNNZXRhZGF0YSIsImhhc0R5bmFtaWNWaWV3cG9ydCIsImhhc0FsbG93ZWREeW5hbWljIiwiZHluYW1pY0Vycm9ycyIsInRyYWNraW5nU3RhdGUiLCJleHByZXNzaW9uIiwic3RvcmUiLCJ3b3JrVW5pdFN0b3JlIiwidHlwZSIsImZvcmNlRHluYW1pYyIsImZvcmNlU3RhdGljIiwiZHluYW1pY1Nob3VsZEVycm9yIiwiU3RhdGljR2VuQmFpbG91dEVycm9yIiwicm91dGUiLCJkeW5hbWljVHJhY2tpbmciLCJyZXZhbGlkYXRlIiwiZXJyIiwiRHluYW1pY1NlcnZlckVycm9yIiwiZHluYW1pY1VzYWdlRGVzY3JpcHRpb24iLCJkeW5hbWljVXNhZ2VTdGFjayIsInN0YWNrIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidXNlZER5bmFtaWMiLCJwcmVyZW5kZXJTdG9yZSIsIndvcmtVbml0QXN5bmNTdG9yYWdlIiwiZ2V0U3RvcmUiLCJfc3RvcmUiLCJhYm9ydE9uU3luY2hyb25vdXNEeW5hbWljRGF0YUFjY2VzcyIsInJlYXNvbiIsImVycm9yIiwiY3JlYXRlUHJlcmVuZGVySW50ZXJydXB0ZWRFcnJvciIsImNvbnRyb2xsZXIiLCJhYm9ydCIsInB1c2giLCJFcnJvciIsInVuZGVmaW5lZCIsImVycm9yV2l0aFN0YWNrIiwicmVxdWVzdFN0b3JlIiwicHJlcmVuZGVyUGhhc2UiLCJwcmVyZW5kZXJTaWduYWwiLCJzaWduYWwiLCJhYm9ydGVkIiwiYXNzZXJ0UG9zdHBvbmUiLCJjcmVhdGVQb3N0cG9uZVJlYXNvbiIsIm1lc3NhZ2UiLCJpc0R5bmFtaWNQb3N0cG9uZVJlYXNvbiIsImluY2x1ZGVzIiwiTkVYVF9QUkVSRU5ERVJfSU5URVJSVVBURUQiLCJkaWdlc3QiLCJsZW5ndGgiLCJzZXJ2ZXJEeW5hbWljIiwiY2xpZW50RHluYW1pYyIsImZpbHRlciIsImFjY2VzcyIsIm1hcCIsInNwbGl0Iiwic2xpY2UiLCJsaW5lIiwiam9pbiIsIkFib3J0Q29udHJvbGxlciIsIngiLCJjYWNoZVNpZ25hbCIsImlucHV0UmVhZHkiLCJ0aGVuIiwic2NoZWR1bGVPbk5leHRUaWNrIiwid29ya1N0b3JlIiwid29ya0FzeW5jU3RvcmFnZSIsImlzU3RhdGljR2VuZXJhdGlvbiIsImZhbGxiYWNrUm91dGVQYXJhbXMiLCJzaXplIiwidXNlIiwibWFrZUhhbmdpbmdQcm9taXNlIiwicmVuZGVyU2lnbmFsIiwiaGFzU3VzcGVuc2VSZWdleCIsImhhc1N1c3BlbnNlQWZ0ZXJCb2R5T3JIdG1sUmVnZXgiLCJoYXNNZXRhZGF0YVJlZ2V4IiwiUmVnRXhwIiwiTUVUQURBVEFfQk9VTkRBUllfTkFNRSIsImhhc1ZpZXdwb3J0UmVnZXgiLCJWSUVXUE9SVF9CT1VOREFSWV9OQU1FIiwiaGFzT3V0bGV0UmVnZXgiLCJPVVRMRVRfQk9VTkRBUllfTkFNRSIsImNvbXBvbmVudFN0YWNrIiwiZHluYW1pY1ZhbGlkYXRpb24iLCJ0ZXN0IiwiY3JlYXRlRXJyb3JXaXRoQ29tcG9uZW50T3JPd25lclN0YWNrIiwib3duZXJTdGFjayIsImNhcHR1cmVPd25lclN0YWNrIiwibmFtZSIsImxvZ0Rpc2FsbG93ZWREeW5hbWljRXJyb3IiLCJjb25zb2xlIiwiZGV2IiwiaGFzUmVhZGFibGVFcnJvclN0YWNrcyIsInByZWx1ZGUiLCJpbnZhbGlkRHluYW1pY1VzYWdlRXJyb3IiLCJpIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnVmVBLFFBQVEsRUFBQTtlQUFSQTs7SUEyVEpDLFlBQVksRUFBQTtlQUFaQTs7SUFwV0lDLDJDQUEyQyxFQUFBO2VBQTNDQTs7SUFyQ0FDLGtDQUFrQyxFQUFBO2VBQWxDQTs7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UUFDdEUsdUVBQXVFO1FBQ3ZFLE1BQU1ULGdCQUFnQmtGLGtCQUFrQmxGLGFBQWE7UUFDckQsSUFBSUEsY0FBY2dELE1BQU0sR0FBRyxHQUFHO1lBQzVCLElBQUssSUFBSThDLElBQUksR0FBR0EsSUFBSTlGLGNBQWNnRCxNQUFNLEVBQUU4QyxJQUFLO2dCQUM3Q04sMEJBQTBCeEIsV0FBV2hFLGFBQWEsQ0FBQzhGLEVBQUU7WUFDdkQ7WUFFQSxNQUFNLElBQUlyRix5QkFBQUEscUJBQXFCO1FBQ2pDO1FBRUEsc0VBQXNFO1FBQ3RFLHdEQUF3RDtRQUN4RCx5RUFBeUU7UUFDekUsd0RBQXdEO1FBQ3hELElBQUl5RSxrQkFBa0JwRixrQkFBa0IsRUFBRTtZQUN4QzJGLFFBQVE3RCxLQUFLLENBQ1gsQ0FBQyxPQUFPLEVBQUVvQyxVQUFVdEQsS0FBSyxDQUFDLDhRQUE4USxDQUFDO1lBRTNTLE1BQU0sSUFBSUQseUJBQUFBLHFCQUFxQjtRQUNqQztRQUVBLElBQUltRixZQUFBQSxHQUFnQztZQUNsQyw2RUFBNkU7WUFDN0UsaUZBQWlGO1lBQ2pGLDJDQUEyQztZQUMzQ0gsUUFBUTdELEtBQUssQ0FDWCxDQUFDLE9BQU8sRUFBRW9DLFVBQVV0RCxLQUFLLENBQUMsd0dBQXdHLENBQUM7WUFFckksTUFBTSxJQUFJRCx5QkFBQUEscUJBQXFCO1FBQ2pDO0lBQ0YsT0FBTztRQUNMLElBQ0V5RSxrQkFBa0JuRixpQkFBaUIsS0FBSyxTQUN4Q21GLGtCQUFrQnJGLGtCQUFrQixFQUNwQztZQUNBNEYsUUFBUTdELEtBQUssQ0FDWCxDQUFDLE9BQU8sRUFBRW9DLFVBQVV0RCxLQUFLLENBQUMsOFBBQThQLENBQUM7WUFFM1IsTUFBTSxJQUFJRCx5QkFBQUEscUJBQXFCO1FBQ2pDO0lBQ0Y7QUFDRiIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNTA1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvc3JjL2NsaWVudC9jb21wb25lbnRzL3Vuc3RhYmxlLXJldGhyb3cuc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzSGFuZ2luZ1Byb21pc2VSZWplY3Rpb25FcnJvciB9IGZyb20gJy4uLy4uL3NlcnZlci9keW5hbWljLXJlbmRlcmluZy11dGlscydcbmltcG9ydCB7IGlzUG9zdHBvbmUgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvbGliL3JvdXRlci11dGlscy9pcy1wb3N0cG9uZSdcbmltcG9ydCB7IGlzQmFpbG91dFRvQ1NSRXJyb3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2xhenktZHluYW1pYy9iYWlsb3V0LXRvLWNzcidcbmltcG9ydCB7IGlzTmV4dFJvdXRlckVycm9yIH0gZnJvbSAnLi9pcy1uZXh0LXJvdXRlci1lcnJvcidcbmltcG9ydCB7IGlzRHluYW1pY1Bvc3Rwb25lIH0gZnJvbSAnLi4vLi4vc2VydmVyL2FwcC1yZW5kZXIvZHluYW1pYy1yZW5kZXJpbmcnXG5pbXBvcnQgeyBpc0R5bmFtaWNTZXJ2ZXJFcnJvciB9IGZyb20gJy4vaG9va3Mtc2VydmVyLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1bnN0YWJsZV9yZXRocm93KGVycm9yOiB1bmtub3duKTogdm9pZCB7XG4gIGlmIChcbiAgICBpc05leHRSb3V0ZXJFcnJvcihlcnJvcikgfHxcbiAgICBpc0JhaWxvdXRUb0NTUkVycm9yKGVycm9yKSB8fFxuICAgIGlzRHluYW1pY1NlcnZlckVycm9yKGVycm9yKSB8fFxuICAgIGlzRHluYW1pY1Bvc3Rwb25lKGVycm9yKSB8fFxuICAgIGlzUG9zdHBvbmUoZXJyb3IpIHx8XG4gICAgaXNIYW5naW5nUHJvbWlzZVJlamVjdGlvbkVycm9yKGVycm9yKVxuICApIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgJ2NhdXNlJyBpbiBlcnJvcikge1xuICAgIHVuc3RhYmxlX3JldGhyb3coZXJyb3IuY2F1c2UpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1bnN0YWJsZV9yZXRocm93IiwiZXJyb3IiLCJpc05leHRSb3V0ZXJFcnJvciIsImlzQmFpbG91dFRvQ1NSRXJyb3IiLCJpc0R5bmFtaWNTZXJ2ZXJFcnJvciIsImlzRHluYW1pY1Bvc3Rwb25lIiwiaXNQb3N0cG9uZSIsImlzSGFuZ2luZ1Byb21pc2VSZWplY3Rpb25FcnJvciIsIkVycm9yIiwiY2F1c2UiXSwibWFwcGluZ3MiOiI7OzsrQkFPZ0JBLG9CQUFBQTs7O2VBQUFBOzs7dUNBUCtCOzRCQUNwQjs4QkFDUzttQ0FDRjtrQ0FDQTtvQ0FDRztBQUU5QixTQUFTQSxpQkFBaUJDLEtBQWM7SUFDN0MsSUFDRUMsQ0FBQUEsR0FBQUEsbUJBQUFBLGlCQUFpQixFQUFDRCxVQUNsQkUsQ0FBQUEsR0FBQUEsY0FBQUEsbUJBQW1CLEVBQUNGLFVBQ3BCRyxDQUFBQSxHQUFBQSxvQkFBQUEsb0JBQW9CLEVBQUNILFVBQ3JCSSxDQUFBQSxHQUFBQSxrQkFBQUEsaUJBQWlCLEVBQUNKLFVBQ2xCSyxDQUFBQSxHQUFBQSxZQUFBQSxVQUFVLEVBQUNMLFVBQ1hNLENBQUFBLEdBQUFBLHVCQUFBQSw4QkFBOEIsRUFBQ04sUUFDL0I7UUFDQSxNQUFNQTtJQUNSO0lBRUEsSUFBSUEsaUJBQWlCTyxTQUFTLFdBQVdQLE9BQU87UUFDOUNELGlCQUFpQkMsTUFBTVEsS0FBSztJQUM5QjtBQUNGIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE1NDEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvdW5zdGFibGUtcmV0aHJvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIHVzZWQgdG8gcmV0aHJvdyBpbnRlcm5hbCBOZXh0LmpzIGVycm9ycyBzbyB0aGF0IHRoZXkgY2FuIGJlIGhhbmRsZWQgYnkgdGhlIGZyYW1ld29yay5cbiAqIFdoZW4gd3JhcHBpbmcgYW4gQVBJIHRoYXQgdXNlcyBlcnJvcnMgdG8gaW50ZXJydXB0IGNvbnRyb2wgZmxvdywgeW91IHNob3VsZCB1c2UgdGhpcyBmdW5jdGlvbiBiZWZvcmUgeW91IGRvIGFueSBlcnJvciBoYW5kbGluZy5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXRocm93IHRoZSBlcnJvciBpZiBpdCBpcyBhIE5leHQuanMgZXJyb3Igc28gaXQgY2FuIGJlIGhhbmRsZWQsIG90aGVyd2lzZSBpdCB3aWxsIGRvIG5vdGhpbmcuXG4gKlxuICogUmVhZCBtb3JlOiBbTmV4dC5qcyBEb2NzOiBgdW5zdGFibGVfcmV0aHJvd2BdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91bnN0YWJsZV9yZXRocm93KVxuICovXG5leHBvcnQgY29uc3QgdW5zdGFibGVfcmV0aHJvdyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gICAgPyAoXG4gICAgICAgIHJlcXVpcmUoJy4vdW5zdGFibGUtcmV0aHJvdy5zZXJ2ZXInKSBhcyB0eXBlb2YgaW1wb3J0KCcuL3Vuc3RhYmxlLXJldGhyb3cuc2VydmVyJylcbiAgICAgICkudW5zdGFibGVfcmV0aHJvd1xuICAgIDogKFxuICAgICAgICByZXF1aXJlKCcuL3Vuc3RhYmxlLXJldGhyb3cuYnJvd3NlcicpIGFzIHR5cGVvZiBpbXBvcnQoJy4vdW5zdGFibGUtcmV0aHJvdy5icm93c2VyJylcbiAgICAgICkudW5zdGFibGVfcmV0aHJvd1xuIl0sIm5hbWVzIjpbInVuc3RhYmxlX3JldGhyb3ciLCJ3aW5kb3ciLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7OzsrQkFDWUEsb0JBQUFBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLG1CQUNYLE9BQU9DLFdBQVcscUJBRVpDLFFBQVEsd0hBQ1JGLGdCQUFnQixHQUVoQkUsUUFBUSw4QkFDUkYsZ0JBQWdCIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE1NzAsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2aWdhdGlvbi5yZWFjdC1zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBpbnRlcm5hbCAqL1xuY2xhc3MgUmVhZG9ubHlVUkxTZWFyY2hQYXJhbXNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXG4gICAgICAnTWV0aG9kIHVuYXZhaWxhYmxlIG9uIGBSZWFkb25seVVSTFNlYXJjaFBhcmFtc2AuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2FwaS1yZWZlcmVuY2UvZnVuY3Rpb25zL3VzZS1zZWFyY2gtcGFyYW1zI3VwZGF0aW5nLXNlYXJjaHBhcmFtcydcbiAgICApXG4gIH1cbn1cblxuY2xhc3MgUmVhZG9ubHlVUkxTZWFyY2hQYXJhbXMgZXh0ZW5kcyBVUkxTZWFyY2hQYXJhbXMge1xuICAvKiogQGRlcHJlY2F0ZWQgTWV0aG9kIHVuYXZhaWxhYmxlIG9uIGBSZWFkb25seVVSTFNlYXJjaFBhcmFtc2AuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2FwaS1yZWZlcmVuY2UvZnVuY3Rpb25zL3VzZS1zZWFyY2gtcGFyYW1zI3VwZGF0aW5nLXNlYXJjaHBhcmFtcyAqL1xuICBhcHBlbmQoKSB7XG4gICAgdGhyb3cgbmV3IFJlYWRvbmx5VVJMU2VhcmNoUGFyYW1zRXJyb3IoKVxuICB9XG4gIC8qKiBAZGVwcmVjYXRlZCBNZXRob2QgdW5hdmFpbGFibGUgb24gYFJlYWRvbmx5VVJMU2VhcmNoUGFyYW1zYC4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYXBpLXJlZmVyZW5jZS9mdW5jdGlvbnMvdXNlLXNlYXJjaC1wYXJhbXMjdXBkYXRpbmctc2VhcmNocGFyYW1zICovXG4gIGRlbGV0ZSgpIHtcbiAgICB0aHJvdyBuZXcgUmVhZG9ubHlVUkxTZWFyY2hQYXJhbXNFcnJvcigpXG4gIH1cbiAgLyoqIEBkZXByZWNhdGVkIE1ldGhvZCB1bmF2YWlsYWJsZSBvbiBgUmVhZG9ubHlVUkxTZWFyY2hQYXJhbXNgLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91c2Utc2VhcmNoLXBhcmFtcyN1cGRhdGluZy1zZWFyY2hwYXJhbXMgKi9cbiAgc2V0KCkge1xuICAgIHRocm93IG5ldyBSZWFkb25seVVSTFNlYXJjaFBhcmFtc0Vycm9yKClcbiAgfVxuICAvKiogQGRlcHJlY2F0ZWQgTWV0aG9kIHVuYXZhaWxhYmxlIG9uIGBSZWFkb25seVVSTFNlYXJjaFBhcmFtc2AuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBwL2FwaS1yZWZlcmVuY2UvZnVuY3Rpb25zL3VzZS1zZWFyY2gtcGFyYW1zI3VwZGF0aW5nLXNlYXJjaHBhcmFtcyAqL1xuICBzb3J0KCkge1xuICAgIHRocm93IG5ldyBSZWFkb25seVVSTFNlYXJjaFBhcmFtc0Vycm9yKClcbiAgfVxufVxuXG5leHBvcnQgeyByZWRpcmVjdCwgcGVybWFuZW50UmVkaXJlY3QgfSBmcm9tICcuL3JlZGlyZWN0J1xuZXhwb3J0IHsgUmVkaXJlY3RUeXBlIH0gZnJvbSAnLi9yZWRpcmVjdC1lcnJvcidcbmV4cG9ydCB7IG5vdEZvdW5kIH0gZnJvbSAnLi9ub3QtZm91bmQnXG5leHBvcnQgeyBmb3JiaWRkZW4gfSBmcm9tICcuL2ZvcmJpZGRlbidcbmV4cG9ydCB7IHVuYXV0aG9yaXplZCB9IGZyb20gJy4vdW5hdXRob3JpemVkJ1xuZXhwb3J0IHsgdW5zdGFibGVfcmV0aHJvdyB9IGZyb20gJy4vdW5zdGFibGUtcmV0aHJvdydcbmV4cG9ydCB7IFJlYWRvbmx5VVJMU2VhcmNoUGFyYW1zIH1cbiJdLCJuYW1lcyI6WyJSZWFkb25seVVSTFNlYXJjaFBhcmFtcyIsIlJlZGlyZWN0VHlwZSIsImZvcmJpZGRlbiIsIm5vdEZvdW5kIiwicGVybWFuZW50UmVkaXJlY3QiLCJyZWRpcmVjdCIsInVuYXV0aG9yaXplZCIsInVuc3RhYmxlX3JldGhyb3ciLCJSZWFkb25seVVSTFNlYXJjaFBhcmFtc0Vycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImRlbGV0ZSIsInNldCIsInNvcnQiXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0NMQSx1QkFBdUIsRUFBQTtlQUF2QkE7O0lBTEFDLFlBQVksRUFBQTtlQUFaQSxlQUFBQSxZQUFZOztJQUVaQyxTQUFTLEVBQUE7ZUFBVEEsV0FBQUEsU0FBUzs7SUFEVEMsUUFBUSxFQUFBO2VBQVJBLFVBQUFBLFFBQVE7O0lBRkVDLGlCQUFpQixFQUFBO2VBQWpCQSxVQUFBQSxpQkFBaUI7O0lBQTNCQyxRQUFRLEVBQUE7ZUFBUkEsVUFBQUEsUUFBUTs7SUFJUkMsWUFBWSxFQUFBO2VBQVpBLGNBQUFBLFlBQVk7O0lBQ1pDLGdCQUFnQixFQUFBO2VBQWhCQSxpQkFBQUEsZ0JBQWdCOzs7MEJBTG1COytCQUNmOzBCQUNKOzJCQUNDOzhCQUNHO2lDQUNJO0FBaENqQyxNQUFNQyxxQ0FBcUNDO0lBQ3pDQyxhQUFjO1FBQ1osS0FBSyxDQUNIO0lBRUo7QUFDRjtBQUVBLE1BQU1WLGdDQUFnQ1c7SUFDcEMsd0tBQXdLLEdBQ3hLQyxTQUFTO1FBQ1AsTUFBTSxJQUFJSjtJQUNaO0lBQ0Esd0tBQXdLLEdBQ3hLSyxTQUFTO1FBQ1AsTUFBTSxJQUFJTDtJQUNaO0lBQ0Esd0tBQXdLLEdBQ3hLTSxNQUFNO1FBQ0osTUFBTSxJQUFJTjtJQUNaO0lBQ0Esd0tBQXdLLEdBQ3hLTyxPQUFPO1FBQ0wsTUFBTSxJQUFJUDtJQUNaO0FBQ0YiLCJpZ25vcmVMaXN0IjpbMF0sImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTY1MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L3NyYy9jbGllbnQvY29tcG9uZW50cy9iYWlsb3V0LXRvLWNsaWVudC1yZW5kZXJpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFpbG91dFRvQ1NSRXJyb3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2xhenktZHluYW1pYy9iYWlsb3V0LXRvLWNzcidcbmltcG9ydCB7IHdvcmtBc3luY1N0b3JhZ2UgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvYXBwLXJlbmRlci93b3JrLWFzeW5jLXN0b3JhZ2UuZXh0ZXJuYWwnXG5pbXBvcnQgeyB3b3JrVW5pdEFzeW5jU3RvcmFnZSB9IGZyb20gJy4uLy4uL3NlcnZlci9hcHAtcmVuZGVyL3dvcmstdW5pdC1hc3luYy1zdG9yYWdlLmV4dGVybmFsJ1xuXG5leHBvcnQgZnVuY3Rpb24gYmFpbG91dFRvQ2xpZW50UmVuZGVyaW5nKHJlYXNvbjogc3RyaW5nKTogdm9pZCB8IG5ldmVyIHtcbiAgY29uc3Qgd29ya1N0b3JlID0gd29ya0FzeW5jU3RvcmFnZS5nZXRTdG9yZSgpXG5cbiAgaWYgKHdvcmtTdG9yZT8uZm9yY2VTdGF0aWMpIHJldHVyblxuXG4gIGNvbnN0IHdvcmtVbml0U3RvcmUgPSB3b3JrVW5pdEFzeW5jU3RvcmFnZS5nZXRTdG9yZSgpXG5cbiAgaWYgKHdvcmtVbml0U3RvcmUpIHtcbiAgICBzd2l0Y2ggKHdvcmtVbml0U3RvcmUudHlwZSkge1xuICAgICAgY2FzZSAncHJlcmVuZGVyJzpcbiAgICAgIGNhc2UgJ3ByZXJlbmRlci1jbGllbnQnOlxuICAgICAgY2FzZSAncHJlcmVuZGVyLXBwcic6XG4gICAgICBjYXNlICdwcmVyZW5kZXItbGVnYWN5JzpcbiAgICAgICAgdGhyb3cgbmV3IEJhaWxvdXRUb0NTUkVycm9yKHJlYXNvbilcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYmFpbG91dFRvQ2xpZW50UmVuZGVyaW5nIiwicmVhc29uIiwid29ya1N0b3JlIiwid29ya0FzeW5jU3RvcmFnZSIsImdldFN0b3JlIiwiZm9yY2VTdGF0aWMiLCJ3b3JrVW5pdFN0b3JlIiwid29ya1VuaXRBc3luY1N0b3JhZ2UiLCJ0eXBlIiwiQmFpbG91dFRvQ1NSRXJyb3IiXSwibWFwcGluZ3MiOiI7OzsrQkFJZ0JBLDRCQUFBQTs7O2VBQUFBOzs7OEJBSmtCOzBDQUNEOzhDQUNJO0FBRTlCLFNBQVNBLHlCQUF5QkMsTUFBYztJQUNyRCxNQUFNQyxZQUFZQywwQkFBQUEsZ0JBQWdCLENBQUNDLFFBQVE7SUFFM0MsSUFBSUYsYUFBQUEsT0FBQUEsS0FBQUEsSUFBQUEsVUFBV0csV0FBVyxFQUFFO0lBRTVCLE1BQU1DLGdCQUFnQkMsOEJBQUFBLG9CQUFvQixDQUFDSCxRQUFRO0lBRW5ELElBQUlFLGVBQWU7UUFDakIsT0FBUUEsY0FBY0UsSUFBSTtZQUN4QixLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO2dCQUNILE1BQU0sT0FBQSxjQUE2QixDQUE3QixJQUFJQyxjQUFBQSxpQkFBaUIsQ0FBQ1IsU0FBdEIscUJBQUE7MkJBQUE7Z0NBQUE7a0NBQUE7Z0JBQTRCO1lBQ3BDO1FBQ0Y7SUFDRjtBQUNGIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE2OTcsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2aWdhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsaWdodFJvdXRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmVyL2FwcC1yZW5kZXIvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBhcmFtcyB9IGZyb20gJy4uLy4uL3NlcnZlci9yZXF1ZXN0L3BhcmFtcydcblxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQXBwUm91dGVyQ29udGV4dCxcbiAgTGF5b3V0Um91dGVyQ29udGV4dCxcbiAgdHlwZSBBcHBSb3V0ZXJJbnN0YW5jZSxcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2xpYi9hcHAtcm91dGVyLWNvbnRleHQuc2hhcmVkLXJ1bnRpbWUnXG5pbXBvcnQge1xuICBTZWFyY2hQYXJhbXNDb250ZXh0LFxuICBQYXRobmFtZUNvbnRleHQsXG4gIFBhdGhQYXJhbXNDb250ZXh0LFxufSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2hvb2tzLWNsaWVudC1jb250ZXh0LnNoYXJlZC1ydW50aW1lJ1xuaW1wb3J0IHsgZ2V0U2VnbWVudFZhbHVlIH0gZnJvbSAnLi9yb3V0ZXItcmVkdWNlci9yZWR1Y2Vycy9nZXQtc2VnbWVudC12YWx1ZSdcbmltcG9ydCB7IFBBR0VfU0VHTUVOVF9LRVksIERFRkFVTFRfU0VHTUVOVF9LRVkgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL3NlZ21lbnQnXG5pbXBvcnQgeyBSZWFkb25seVVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vbmF2aWdhdGlvbi5yZWFjdC1zZXJ2ZXInXG5cbmNvbnN0IHVzZUR5bmFtaWNSb3V0ZVBhcmFtcyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gICAgPyAoXG4gICAgICAgIHJlcXVpcmUoJy4uLy4uL3NlcnZlci9hcHAtcmVuZGVyL2R5bmFtaWMtcmVuZGVyaW5nJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vLi4vc2VydmVyL2FwcC1yZW5kZXIvZHluYW1pYy1yZW5kZXJpbmcnKVxuICAgICAgKS51c2VEeW5hbWljUm91dGVQYXJhbXNcbiAgICA6IHVuZGVmaW5lZFxuXG4vKipcbiAqIEEgW0NsaWVudCBDb21wb25lbnRdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL3JlbmRlcmluZy9jbGllbnQtY29tcG9uZW50cykgaG9va1xuICogdGhhdCBsZXRzIHlvdSAqcmVhZCogdGhlIGN1cnJlbnQgVVJMJ3Mgc2VhcmNoIHBhcmFtZXRlcnMuXG4gKlxuICogTGVhcm4gbW9yZSBhYm91dCBbYFVSTFNlYXJjaFBhcmFtc2Agb24gTUROXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvVVJMU2VhcmNoUGFyYW1zKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogXCJ1c2UgY2xpZW50XCJcbiAqIGltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICogICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuICogICBzZWFyY2hQYXJhbXMuZ2V0KCdmb28nKSAvLyByZXR1cm5zICdiYXInIHdoZW4gP2Zvbz1iYXJcbiAqICAgLy8gLi4uXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGB1c2VTZWFyY2hQYXJhbXNgXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYXBpLXJlZmVyZW5jZS9mdW5jdGlvbnMvdXNlLXNlYXJjaC1wYXJhbXMpXG4gKi9cbi8vIENsaWVudCBjb21wb25lbnRzIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcygpOiBSZWFkb25seVVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZUNvbnRleHQoU2VhcmNoUGFyYW1zQ29udGV4dClcblxuICAvLyBJbiB0aGUgY2FzZSB3aGVyZSB0aGlzIGlzIGBudWxsYCwgdGhlIGNvbXBhdCB0eXBlcyBhZGRlZCBpblxuICAvLyBgbmV4dC1lbnYuZC50c2Agd2lsbCBhZGQgYSBuZXcgb3ZlcmxvYWQgdGhhdCBjaGFuZ2VzIHRoZSByZXR1cm4gdHlwZSB0b1xuICAvLyBpbmNsdWRlIGBudWxsYC5cbiAgY29uc3QgcmVhZG9ubHlTZWFyY2hQYXJhbXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXNlYXJjaFBhcmFtcykge1xuICAgICAgLy8gV2hlbiB0aGUgcm91dGVyIGlzIG5vdCByZWFkeSBpbiBwYWdlcywgd2Ugd29uJ3QgaGF2ZSB0aGUgc2VhcmNoIHBhcmFtc1xuICAgICAgLy8gYXZhaWxhYmxlLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlYWRvbmx5VVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcylcbiAgfSwgW3NlYXJjaFBhcmFtc10pIGFzIFJlYWRvbmx5VVJMU2VhcmNoUGFyYW1zXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQXN5bmNMb2NhbFN0b3JhZ2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgY2xpZW50IGJ1bmRsZS5cbiAgICBjb25zdCB7IGJhaWxvdXRUb0NsaWVudFJlbmRlcmluZyB9ID1cbiAgICAgIHJlcXVpcmUoJy4vYmFpbG91dC10by1jbGllbnQtcmVuZGVyaW5nJykgYXMgdHlwZW9mIGltcG9ydCgnLi9iYWlsb3V0LXRvLWNsaWVudC1yZW5kZXJpbmcnKVxuICAgIC8vIFRPRE8tQVBQOiBoYW5kbGUgZHluYW1pYyA9ICdmb3JjZS1zdGF0aWMnIGhlcmUgYW5kIG9uIHRoZSBjbGllbnRcbiAgICBiYWlsb3V0VG9DbGllbnRSZW5kZXJpbmcoJ3VzZVNlYXJjaFBhcmFtcygpJylcbiAgfVxuXG4gIHJldHVybiByZWFkb25seVNlYXJjaFBhcmFtc1xufVxuXG4vKipcbiAqIEEgW0NsaWVudCBDb21wb25lbnRdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL3JlbmRlcmluZy9jbGllbnQtY29tcG9uZW50cykgaG9va1xuICogdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBjdXJyZW50IFVSTCdzIHBhdGhuYW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogXCJ1c2UgY2xpZW50XCJcbiAqIGltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gKiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpIC8vIHJldHVybnMgXCIvZGFzaGJvYXJkXCIgb24gL2Rhc2hib2FyZD9mb289YmFyXG4gKiAgLy8gLi4uXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGB1c2VQYXRobmFtZWBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91c2UtcGF0aG5hbWUpXG4gKi9cbi8vIENsaWVudCBjb21wb25lbnRzIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhdGhuYW1lKCk6IHN0cmluZyB7XG4gIHVzZUR5bmFtaWNSb3V0ZVBhcmFtcz8uKCd1c2VQYXRobmFtZSgpJylcblxuICAvLyBJbiB0aGUgY2FzZSB3aGVyZSB0aGlzIGlzIGBudWxsYCwgdGhlIGNvbXBhdCB0eXBlcyBhZGRlZCBpbiBgbmV4dC1lbnYuZC50c2BcbiAgLy8gd2lsbCBhZGQgYSBuZXcgb3ZlcmxvYWQgdGhhdCBjaGFuZ2VzIHRoZSByZXR1cm4gdHlwZSB0byBpbmNsdWRlIGBudWxsYC5cbiAgcmV0dXJuIHVzZUNvbnRleHQoUGF0aG5hbWVDb250ZXh0KSBhcyBzdHJpbmdcbn1cblxuLy8gQ2xpZW50IGNvbXBvbmVudHMgQVBJXG5leHBvcnQge1xuICBTZXJ2ZXJJbnNlcnRlZEhUTUxDb250ZXh0LFxuICB1c2VTZXJ2ZXJJbnNlcnRlZEhUTUwsXG59IGZyb20gJy4uLy4uL3NoYXJlZC9saWIvc2VydmVyLWluc2VydGVkLWh0bWwuc2hhcmVkLXJ1bnRpbWUnXG5cbi8qKlxuICpcbiAqIFRoaXMgaG9vayBhbGxvd3MgeW91IHRvIHByb2dyYW1tYXRpY2FsbHkgY2hhbmdlIHJvdXRlcyBpbnNpZGUgW0NsaWVudCBDb21wb25lbnRdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL3JlbmRlcmluZy9jbGllbnQtY29tcG9uZW50cykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBcInVzZSBjbGllbnRcIlxuICogaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gKiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAqICAvLyAuLi5cbiAqICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpIC8vIE5hdmlnYXRlIHRvIC9kYXNoYm9hcmRcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFJlYWQgbW9yZTogW05leHQuanMgRG9jczogYHVzZVJvdXRlcmBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91c2Utcm91dGVyKVxuICovXG4vLyBDbGllbnQgY29tcG9uZW50cyBBUElcbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogQXBwUm91dGVySW5zdGFuY2Uge1xuICBjb25zdCByb3V0ZXIgPSB1c2VDb250ZXh0KEFwcFJvdXRlckNvbnRleHQpXG4gIGlmIChyb3V0ZXIgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCBleHBlY3RlZCBhcHAgcm91dGVyIHRvIGJlIG1vdW50ZWQnKVxuICB9XG5cbiAgcmV0dXJuIHJvdXRlclxufVxuXG4vKipcbiAqIEEgW0NsaWVudCBDb21wb25lbnRdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL3JlbmRlcmluZy9jbGllbnQtY29tcG9uZW50cykgaG9va1xuICogdGhhdCBsZXRzIHlvdSByZWFkIGEgcm91dGUncyBkeW5hbWljIHBhcmFtcyBmaWxsZWQgaW4gYnkgdGhlIGN1cnJlbnQgVVJMLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogXCJ1c2UgY2xpZW50XCJcbiAqIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICogICAvLyBvbiAvZGFzaGJvYXJkL1t0ZWFtXSB3aGVyZSBwYXRobmFtZSBpcyAvZGFzaGJvYXJkL25leHRqc1xuICogICBjb25zdCB7IHRlYW0gfSA9IHVzZVBhcmFtcygpIC8vIHRlYW0gPT09IFwibmV4dGpzXCJcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFJlYWQgbW9yZTogW05leHQuanMgRG9jczogYHVzZVBhcmFtc2BdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91c2UtcGFyYW1zKVxuICovXG4vLyBDbGllbnQgY29tcG9uZW50cyBBUElcbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXJhbXM8VCBleHRlbmRzIFBhcmFtcyA9IFBhcmFtcz4oKTogVCB7XG4gIHVzZUR5bmFtaWNSb3V0ZVBhcmFtcz8uKCd1c2VQYXJhbXMoKScpXG5cbiAgcmV0dXJuIHVzZUNvbnRleHQoUGF0aFBhcmFtc0NvbnRleHQpIGFzIFRcbn1cblxuLyoqIEdldCB0aGUgY2Fub25pY2FsIHBhcmFtZXRlcnMgZnJvbSB0aGUgY3VycmVudCBsZXZlbCB0byB0aGUgbGVhZiBub2RlLiAqL1xuLy8gQ2xpZW50IGNvbXBvbmVudHMgQVBJXG5mdW5jdGlvbiBnZXRTZWxlY3RlZExheW91dFNlZ21lbnRQYXRoKFxuICB0cmVlOiBGbGlnaHRSb3V0ZXJTdGF0ZSxcbiAgcGFyYWxsZWxSb3V0ZUtleTogc3RyaW5nLFxuICBmaXJzdCA9IHRydWUsXG4gIHNlZ21lbnRQYXRoOiBzdHJpbmdbXSA9IFtdXG4pOiBzdHJpbmdbXSB7XG4gIGxldCBub2RlOiBGbGlnaHRSb3V0ZXJTdGF0ZVxuICBpZiAoZmlyc3QpIHtcbiAgICAvLyBVc2UgdGhlIHByb3ZpZGVkIHBhcmFsbGVsIHJvdXRlIGtleSBvbiB0aGUgZmlyc3QgcGFyYWxsZWwgcm91dGVcbiAgICBub2RlID0gdHJlZVsxXVtwYXJhbGxlbFJvdXRlS2V5XVxuICB9IGVsc2Uge1xuICAgIC8vIEFmdGVyIGZpcnN0IHBhcmFsbGVsIHJvdXRlIHByZWZlciBjaGlsZHJlbiwgaWYgdGhlcmUncyBubyBjaGlsZHJlbiBwaWNrIHRoZSBmaXJzdCBwYXJhbGxlbCByb3V0ZS5cbiAgICBjb25zdCBwYXJhbGxlbFJvdXRlcyA9IHRyZWVbMV1cbiAgICBub2RlID0gcGFyYWxsZWxSb3V0ZXMuY2hpbGRyZW4gPz8gT2JqZWN0LnZhbHVlcyhwYXJhbGxlbFJvdXRlcylbMF1cbiAgfVxuXG4gIGlmICghbm9kZSkgcmV0dXJuIHNlZ21lbnRQYXRoXG4gIGNvbnN0IHNlZ21lbnQgPSBub2RlWzBdXG5cbiAgbGV0IHNlZ21lbnRWYWx1ZSA9IGdldFNlZ21lbnRWYWx1ZShzZWdtZW50KVxuXG4gIGlmICghc2VnbWVudFZhbHVlIHx8IHNlZ21lbnRWYWx1ZS5zdGFydHNXaXRoKFBBR0VfU0VHTUVOVF9LRVkpKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRQYXRoXG4gIH1cblxuICBzZWdtZW50UGF0aC5wdXNoKHNlZ21lbnRWYWx1ZSlcblxuICByZXR1cm4gZ2V0U2VsZWN0ZWRMYXlvdXRTZWdtZW50UGF0aChcbiAgICBub2RlLFxuICAgIHBhcmFsbGVsUm91dGVLZXksXG4gICAgZmFsc2UsXG4gICAgc2VnbWVudFBhdGhcbiAgKVxufVxuXG4vKipcbiAqIEEgW0NsaWVudCBDb21wb25lbnRdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL3JlbmRlcmluZy9jbGllbnQtY29tcG9uZW50cykgaG9va1xuICogdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBhY3RpdmUgcm91dGUgc2VnbWVudHMgKipiZWxvdyoqIHRoZSBMYXlvdXQgaXQgaXMgY2FsbGVkIGZyb20uXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiAndXNlIGNsaWVudCdcbiAqXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RlZExheW91dFNlZ21lbnRzIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGVDbGllbnRDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IHNlZ21lbnRzID0gdXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50cygpXG4gKlxuICogICByZXR1cm4gKFxuICogICAgIDx1bD5cbiAqICAgICAgIHtzZWdtZW50cy5tYXAoKHNlZ21lbnQsIGluZGV4KSA9PiAoXG4gKiAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57c2VnbWVudH08L2xpPlxuICogICAgICAgKSl9XG4gKiAgICAgPC91bD5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogUmVhZCBtb3JlOiBbTmV4dC5qcyBEb2NzOiBgdXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50c2BdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91c2Utc2VsZWN0ZWQtbGF5b3V0LXNlZ21lbnRzKVxuICovXG4vLyBDbGllbnQgY29tcG9uZW50cyBBUElcbmV4cG9ydCBmdW5jdGlvbiB1c2VTZWxlY3RlZExheW91dFNlZ21lbnRzKFxuICBwYXJhbGxlbFJvdXRlS2V5OiBzdHJpbmcgPSAnY2hpbGRyZW4nXG4pOiBzdHJpbmdbXSB7XG4gIHVzZUR5bmFtaWNSb3V0ZVBhcmFtcz8uKCd1c2VTZWxlY3RlZExheW91dFNlZ21lbnRzKCknKVxuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KExheW91dFJvdXRlckNvbnRleHQpXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgVGhpcyBvbmx5IGhhcHBlbnMgaW4gYHBhZ2VzYC4gVHlwZSBpcyBvdmVyd3JpdHRlbiBpbiBuYXZpZ2F0aW9uLmQudHNcbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBnZXRTZWxlY3RlZExheW91dFNlZ21lbnRQYXRoKGNvbnRleHQucGFyZW50VHJlZSwgcGFyYWxsZWxSb3V0ZUtleSlcbn1cblxuLyoqXG4gKiBBIFtDbGllbnQgQ29tcG9uZW50XShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9yZW5kZXJpbmcvY2xpZW50LWNvbXBvbmVudHMpIGhvb2tcbiAqIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgYWN0aXZlIHJvdXRlIHNlZ21lbnQgKipvbmUgbGV2ZWwgYmVsb3cqKiB0aGUgTGF5b3V0IGl0IGlzIGNhbGxlZCBmcm9tLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogJ3VzZSBjbGllbnQnXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RlZExheW91dFNlZ21lbnQgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG4gKlxuICogZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZUNsaWVudENvbXBvbmVudCgpIHtcbiAqICAgY29uc3Qgc2VnbWVudCA9IHVzZVNlbGVjdGVkTGF5b3V0U2VnbWVudCgpXG4gKlxuICogICByZXR1cm4gPHA+QWN0aXZlIHNlZ21lbnQ6IHtzZWdtZW50fTwvcD5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIFJlYWQgbW9yZTogW05leHQuanMgRG9jczogYHVzZVNlbGVjdGVkTGF5b3V0U2VnbWVudGBdKGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2Z1bmN0aW9ucy91c2Utc2VsZWN0ZWQtbGF5b3V0LXNlZ21lbnQpXG4gKi9cbi8vIENsaWVudCBjb21wb25lbnRzIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlbGVjdGVkTGF5b3V0U2VnbWVudChcbiAgcGFyYWxsZWxSb3V0ZUtleTogc3RyaW5nID0gJ2NoaWxkcmVuJ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIHVzZUR5bmFtaWNSb3V0ZVBhcmFtcz8uKCd1c2VTZWxlY3RlZExheW91dFNlZ21lbnQoKScpXG5cbiAgY29uc3Qgc2VsZWN0ZWRMYXlvdXRTZWdtZW50cyA9IHVzZVNlbGVjdGVkTGF5b3V0U2VnbWVudHMocGFyYWxsZWxSb3V0ZUtleSlcblxuICBpZiAoIXNlbGVjdGVkTGF5b3V0U2VnbWVudHMgfHwgc2VsZWN0ZWRMYXlvdXRTZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRMYXlvdXRTZWdtZW50ID1cbiAgICBwYXJhbGxlbFJvdXRlS2V5ID09PSAnY2hpbGRyZW4nXG4gICAgICA/IHNlbGVjdGVkTGF5b3V0U2VnbWVudHNbMF1cbiAgICAgIDogc2VsZWN0ZWRMYXlvdXRTZWdtZW50c1tzZWxlY3RlZExheW91dFNlZ21lbnRzLmxlbmd0aCAtIDFdXG5cbiAgLy8gaWYgdGhlIGRlZmF1bHQgc2xvdCBpcyBzaG93aW5nLCB3ZSByZXR1cm4gbnVsbCBzaW5jZSBpdCdzIG5vdCB0ZWNobmljYWxseSBcInNlbGVjdGVkXCIgKGl0J3MgYSBmYWxsYmFjaylcbiAgLy8gYW5kIHJldHVybmluZyBhbiBpbnRlcm5hbCB2YWx1ZSBsaWtlIGBfX0RFRkFVTFRfX2Agd291bGQgYmUgY29uZnVzaW5nLlxuICByZXR1cm4gc2VsZWN0ZWRMYXlvdXRTZWdtZW50ID09PSBERUZBVUxUX1NFR01FTlRfS0VZXG4gICAgPyBudWxsXG4gICAgOiBzZWxlY3RlZExheW91dFNlZ21lbnRcbn1cblxuLy8gU2hhcmVkIGNvbXBvbmVudHMgQVBJc1xuZXhwb3J0IHtcbiAgbm90Rm91bmQsXG4gIGZvcmJpZGRlbixcbiAgdW5hdXRob3JpemVkLFxuICByZWRpcmVjdCxcbiAgcGVybWFuZW50UmVkaXJlY3QsXG4gIFJlZGlyZWN0VHlwZSxcbiAgUmVhZG9ubHlVUkxTZWFyY2hQYXJhbXMsXG4gIHVuc3RhYmxlX3JldGhyb3csXG59IGZyb20gJy4vbmF2aWdhdGlvbi5yZWFjdC1zZXJ2ZXInXG4iXSwibmFtZXMiOlsiUmVhZG9ubHlVUkxTZWFyY2hQYXJhbXMiLCJSZWRpcmVjdFR5cGUiLCJTZXJ2ZXJJbnNlcnRlZEhUTUxDb250ZXh0IiwiZm9yYmlkZGVuIiwibm90Rm91bmQiLCJwZXJtYW5lbnRSZWRpcmVjdCIsInJlZGlyZWN0IiwidW5hdXRob3JpemVkIiwidW5zdGFibGVfcmV0aHJvdyIsInVzZVBhcmFtcyIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50IiwidXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50cyIsInVzZVNlcnZlckluc2VydGVkSFRNTCIsInVzZUR5bmFtaWNSb3V0ZVBhcmFtcyIsIndpbmRvdyIsInJlcXVpcmUiLCJ1bmRlZmluZWQiLCJzZWFyY2hQYXJhbXMiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUGFyYW1zQ29udGV4dCIsInJlYWRvbmx5U2VhcmNoUGFyYW1zIiwidXNlTWVtbyIsImJhaWxvdXRUb0NsaWVudFJlbmRlcmluZyIsIlBhdGhuYW1lQ29udGV4dCIsInJvdXRlciIsIkFwcFJvdXRlckNvbnRleHQiLCJFcnJvciIsIlBhdGhQYXJhbXNDb250ZXh0IiwiZ2V0U2VsZWN0ZWRMYXlvdXRTZWdtZW50UGF0aCIsInRyZWUiLCJwYXJhbGxlbFJvdXRlS2V5IiwiZmlyc3QiLCJzZWdtZW50UGF0aCIsIm5vZGUiLCJwYXJhbGxlbFJvdXRlcyIsImNoaWxkcmVuIiwiT2JqZWN0IiwidmFsdWVzIiwic2VnbWVudCIsInNlZ21lbnRWYWx1ZSIsImdldFNlZ21lbnRWYWx1ZSIsInN0YXJ0c1dpdGgiLCJQQUdFX1NFR01FTlRfS0VZIiwicHVzaCIsImNvbnRleHQiLCJMYXlvdXRSb3V0ZXJDb250ZXh0IiwicGFyZW50VHJlZSIsInNlbGVjdGVkTGF5b3V0U2VnbWVudHMiLCJsZW5ndGgiLCJzZWxlY3RlZExheW91dFNlZ21lbnQiLCJERUZBVUxUX1NFR01FTlRfS0VZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMFJFQSx1QkFBdUIsRUFBQTtlQUF2QkEsdUJBQUFBLHVCQUF1Qjs7SUFEdkJDLFlBQVksRUFBQTtlQUFaQSx1QkFBQUEsWUFBWTs7SUFwTFpDLHlCQUF5QixFQUFBO2VBQXpCQSxpQ0FBQUEseUJBQXlCOztJQWdMekJDLFNBQVMsRUFBQTtlQUFUQSx1QkFBQUEsU0FBUzs7SUFEVEMsUUFBUSxFQUFBO2VBQVJBLHVCQUFBQSxRQUFROztJQUlSQyxpQkFBaUIsRUFBQTtlQUFqQkEsdUJBQUFBLGlCQUFpQjs7SUFEakJDLFFBQVEsRUFBQTtlQUFSQSx1QkFBQUEsUUFBUTs7SUFEUkMsWUFBWSxFQUFBO2VBQVpBLHVCQUFBQSxZQUFZOztJQUtaQyxnQkFBZ0IsRUFBQTtlQUFoQkEsdUJBQUFBLGdCQUFnQjs7SUFwSUZDLFNBQVMsRUFBQTtlQUFUQTs7SUE1REFDLFdBQVcsRUFBQTtlQUFYQTs7SUFpQ0FDLFNBQVMsRUFBQTtlQUFUQTs7SUE5RUFDLGVBQWUsRUFBQTtlQUFmQTs7SUE2TUFDLHdCQUF3QixFQUFBO2VBQXhCQTs7SUEvQkFDLHlCQUF5QixFQUFBO2VBQXpCQTs7SUF0SGRDLHFCQUFxQixFQUFBO2VBQXJCQSxpQ0FBQUEscUJBQXFCOzs7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QUN4RixJQUFJLENBQUNELFNBQVMsT0FBTztJQUVyQixPQUFPaEIsNkJBQTZCZ0IsUUFBUUUsVUFBVSxFQUFFaEI7QUFDMUQ7QUFxQk8sU0FBU3BCLHlCQUNkb0IsZ0JBQXFDO0lBQXJDQSxJQUFBQSxxQkFBQUEsS0FBQUEsR0FBQUEsbUJBQTJCO0lBRTNCakIseUJBQUFBLE9BQUFBLEtBQUFBLElBQUFBLHNCQUF3QjtJQUV4QixNQUFNa0MseUJBQXlCcEMsMEJBQTBCbUI7SUFFekQsSUFBSSxDQUFDaUIsMEJBQTBCQSx1QkFBdUJDLE1BQU0sS0FBSyxHQUFHO1FBQ2xFLE9BQU87SUFDVDtJQUVBLE1BQU1DLHdCQUNKbkIscUJBQXFCLGFBQ2pCaUIsc0JBQXNCLENBQUMsRUFBRSxHQUN6QkEsc0JBQXNCLENBQUNBLHVCQUF1QkMsTUFBTSxHQUFHLEVBQUU7SUFFL0QseUdBQXlHO0lBQ3pHLHlFQUF5RTtJQUN6RSxPQUFPQywwQkFBMEJDLFNBQUFBLG1CQUFtQixHQUNoRCxPQUNBRDtBQUNOIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDE4ODEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9uYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb24nKVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyIsImlnbm9yZUxpc3QiOlswXSwiZGVidWdJZCI6bnVsbH19XQp9
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/auth/login/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LoginLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/roleRedirect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LoginLayout(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id, role, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginLayout.useEffect": ()=>{
            if (!isLoading && id && role) {
                const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$roleRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathByRole"])(role, id);
                router.replace(path);
            }
        }
    }["LoginLayout.useEffect"], [
        id,
        role,
        isLoading,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(LoginLayout, "pc4Lgcfj43RDcDF7zzc4ldWKGGY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LoginLayout;
var _c;
__turbopack_context__.k.register(_c, "LoginLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy91dGlscy9yb2xlUmVkaXJlY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFBhdGhCeVJvbGUgPSAocm9sZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFyb2xlIHx8ICFpZCkge1xyXG4gICAgcmV0dXJuICcvJztcclxuICB9XHJcbiAgY29uc3QgY2xlYW5JZCA9IGlkLnNwbGl0KCctJylbMV07XHJcbiAgY29uc3Qgbm9ybWFsaXplZFJvbGUgPSByb2xlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnLScpXHJcbiAgc3dpdGNoIChub3JtYWxpemVkUm9sZSkge1xyXG4gICAgY2FzZSAnc3R1ZGVudCc6XHJcbiAgICAgIHJldHVybiBgL3N0dWRlbnQvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdhZG1pbic6XHJcbiAgICAgIHJldHVybiBgL2FkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgY2FzZSAndGVhY2hlcic6XHJcbiAgICAgIHJldHVybiBgL3RlYWNoZXIvJHtjbGVhbklkfWA7XHJcbiAgICBjYXNlICdzdXBlci1hZG1pbic6XHJcbiAgICAgIHJldHVybiBgL3N1cGVyLWFkbWluLyR7Y2xlYW5JZH1gO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICcvJztcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLGdCQUFnQixDQUFDLE1BQWM7SUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQ2hCLE9BQU87SUFDVDtJQUNBLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoQyxNQUFNLGlCQUFpQixLQUFLLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTtJQUN4RCxPQUFRO1FBQ04sS0FBSztZQUNILE9BQU8sQUFBQyxZQUFtQixPQUFSO1FBQ3JCLEtBQUs7WUFDSCxPQUFPLEFBQUMsVUFBaUIsT0FBUjtRQUNuQixLQUFLO1lBQ0gsT0FBTyxBQUFDLFlBQW1CLE9BQVI7UUFDckIsS0FBSztZQUNILE9BQU8sQUFBQyxnQkFBdUIsT0FBUjtRQUN6QjtZQUNFLE9BQU87SUFDWDtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzOCwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9ob29rcy91c2VBdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldE1lUXVlcnkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2F1dGhBcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZUdldE1lUXVlcnkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IGRhdGE/LmRhdGEsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0Vycm9yLFxyXG4gICAgaXNMb2dnZWRJbjogISFkYXRhLFxyXG4gICAgcm9sZTogZGF0YT8uZGF0YT8ucm9sZSxcclxuICAgIGlkOiBkYXRhPy5kYXRhPy5pZCxcclxuICAgIG1vbmdvSWQ6IGRhdGE/LmRhdGE/Ll9pZCxcclxuICB9O1xyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBRU8sTUFBTSxVQUFVO1FBUWIsWUFDRixhQUNLOztJQVRYLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUEsR0FBQSxzSUFBQSxDQUFBLGdCQUFhLEFBQUQ7SUFFakQsT0FBTztRQUNMLElBQUksRUFBRSxpQkFBQSwyQkFBQSxLQUFNLElBQUk7UUFDaEI7UUFDQTtRQUNBLFlBQVksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLGlCQUFBLDRCQUFBLGFBQUEsS0FBTSxJQUFJLGNBQVYsaUNBQUEsV0FBWSxJQUFJO1FBQ3RCLEVBQUUsRUFBRSxpQkFBQSw0QkFBQSxjQUFBLEtBQU0sSUFBSSxjQUFWLGtDQUFBLFlBQVksRUFBRTtRQUNsQixPQUFPLEVBQUUsaUJBQUEsNEJBQUEsY0FBQSxLQUFNLElBQUksY0FBVixrQ0FBQSxZQUFZLEdBQUc7SUFDMUI7QUFDRjtHQVphOztRQUMwQixzSUFBQSxDQUFBLGdCQUFhIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3MiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9hcHAvYXV0aC9sb2dpbi9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgZ2V0UGF0aEJ5Um9sZSB9IGZyb20gJ0AvdXRpbHMvcm9sZVJlZGlyZWN0JztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvaG9va3MvdXNlQXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkxheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCwgcm9sZSwgaXNMb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTG9hZGluZyAmJiBpZCAmJiByb2xlKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBnZXRQYXRoQnlSb2xlKHJvbGUsIGlkKTtcclxuICAgICAgcm91dGVyLnJlcGxhY2UocGF0aCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkLCByb2xlLCBpc0xvYWRpbmcsIHJvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBOzs7OztBQU9lLFNBQVMsWUFBWSxLQUluQztRQUptQyxFQUNsQyxRQUFRLEVBR1QsR0FKbUM7O0lBS2xDLE1BQU0sU0FBUyxDQUFBLEdBQUEscUlBQUEsQ0FBQSxZQUFTLEFBQUQ7SUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQSxHQUFBLDBIQUFBLENBQUEsVUFBTyxBQUFEO0lBRXRDLENBQUEsR0FBQSw2SkFBQSxDQUFBLFlBQVMsQUFBRDtpQ0FBRTtZQUNSLElBQUksQ0FBQyxhQUFhLE1BQU0sTUFBTTtnQkFDNUIsTUFBTSxPQUFPLENBQUEsR0FBQSwrSEFBQSxDQUFBLGdCQUFhLEFBQUQsRUFBRSxNQUFNO2dCQUNqQyxPQUFPLE9BQU8sQ0FBQztZQUNqQjtRQUNGO2dDQUFHO1FBQUM7UUFBSTtRQUFNO1FBQVc7S0FBTztJQUVoQyxxQkFBTztrQkFBRzs7QUFDWjtHQWhCd0I7O1FBS1AscUlBQUEsQ0FBQSxZQUFTO1FBQ1EsMEhBQUEsQ0FBQSxVQUFPOzs7S0FOakIiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDEyNiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbmF2aWdhdGlvbicpXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPIiwiaWdub3JlTGlzdCI6WzBdLCJkZWJ1Z0lkIjpudWxsfX1dCn0=
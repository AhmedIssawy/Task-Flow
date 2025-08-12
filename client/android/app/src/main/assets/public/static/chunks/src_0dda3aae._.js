(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RoleEnum": ()=>RoleEnum,
    "clearAuth": ()=>clearAuth,
    "default": ()=>__TURBOPACK__default__export__,
    "setAuth": ()=>setAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
var RoleEnum = /*#__PURE__*/ function(RoleEnum) {
    RoleEnum["STUDENT"] = "STUDENT";
    RoleEnum["TEACHER"] = "TEACHER";
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["SUPER_ADMIN"] = "SUPER-ADMIN";
    return RoleEnum;
}({});
const initialState = {
    id: null,
    mongoId: null,
    role: null
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action)=>{
            state.id = action.payload.id;
            state.mongoId = action.payload.mongoId;
            state.role = action.payload.role;
            console.log('✅ Reducer triggered with:', action.payload);
        },
        clearAuth: (state)=>{
            state.id = null;
            state.role = null;
            state.mongoId = null;
        }
    }
});
const { setAuth, clearAuth } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getApiUrl": ()=>getApiUrl,
    "getAuthApiUrl": ()=>getAuthApiUrl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
const getApiUrl = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        // Running on mobile (Android/iOS)
        return ("TURBOPACK compile-time value", "http://192.168.56.1:5000/api") || 'http://192.168.56.1:5000/api';
    } else {
        // Running on web browser
        return ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000/api';
    }
};
const getAuthApiUrl = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        // Running on mobile (Android/iOS)
        return ("TURBOPACK compile-time value", "http://192.168.56.1:5000") || 'http://192.168.56.1:5000';
    } else {
        // Running on web browser
        return ("TURBOPACK compile-time value", "http://localhost:5000") || 'http://localhost:5000';
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "baseQueryWithErrorHandling": ()=>baseQueryWithErrorHandling
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
;
;
;
const baseQueryWithErrorHandling = function() {
    let baseUrl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])();
    const rawBaseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl,
        credentials: 'include'
    });
    return async (args, api, extraOptions)=>{
        const result = await rawBaseQuery(args, api, extraOptions);
        const suppress401 = typeof args === 'object' && 'suppress401' in args && args.suppress401;
        if (result.error) {
            var _this;
            const status = result.error.status;
            const message = ((_this = result.error.data) === null || _this === void 0 ? void 0 : _this.message) || (typeof result.error.error === 'string' ? result.error.error : 'Something went wrong');
            if ("TURBOPACK compile-time truthy", 1) {
                if (status === 401 && !suppress401) {
                    api.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuth"])());
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Session expired. Please log in again.');
                    setTimeout(()=>{
                        window.location.href = '/protected-redirect';
                    }, 500);
                } else if (result.error.status === 'PARSING_ERROR') {
                    console.error('Received invalid JSON (likely HTML):', result.error);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Unexpected server response (invalid JSON).');
                } else if (!suppress401) {
                    console.error("[API Error ".concat(status, "]"), message);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
                }
            }
        }
        return result;
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/authApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "authApi": ()=>authApi,
    "useGetMeQuery": ()=>useGetMeQuery,
    "useLoginMutation": ()=>useLoginMutation,
    "useLogoutMutation": ()=>useLogoutMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
;
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'authApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthApiUrl"])()),
    endpoints: (builder)=>({
            getMe: builder.query({
                query: ()=>({
                        url: '/auth',
                        suppress401: true
                    })
            }),
            login: builder.mutation({
                query: (credentials)=>({
                        url: '/auth/login',
                        method: 'POST',
                        body: credentials
                    })
            }),
            logout: builder.mutation({
                query: ()=>({
                        url: '/auth/logout',
                        method: 'POST'
                    })
            })
        })
});
const { useGetMeQuery, useLoginMutation, useLogoutMutation } = authApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/studentApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "studentApi": ()=>studentApi,
    "useCreateStudentMutation": ()=>useCreateStudentMutation,
    "useDeleteStudentMutation": ()=>useDeleteStudentMutation,
    "useGetAllStudentsOfUniversityQuery": ()=>useGetAllStudentsOfUniversityQuery,
    "useGetStudentAssignmentsQuery": ()=>useGetStudentAssignmentsQuery,
    "useGetStudentByIdQuery": ()=>useGetStudentByIdQuery,
    "useGetStudentCalendarQuery": ()=>useGetStudentCalendarQuery,
    "useGetStudentCourseByIdQuery": ()=>useGetStudentCourseByIdQuery,
    "useGetStudentCoursesQuery": ()=>useGetStudentCoursesQuery,
    "useGetStudentGradesQuery": ()=>useGetStudentGradesQuery,
    "useGetStudentsPageOfUniversityQuery": ()=>useGetStudentsPageOfUniversityQuery,
    "useGetStudentsPageQuery": ()=>useGetStudentsPageQuery,
    "useUpdateStudentMutation": ()=>useUpdateStudentMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const studentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'studentApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Student'
    ],
    endpoints: (builder)=>({
            // Create
            createStudent: builder.mutation({
                query: (newStudentData)=>({
                        url: 'admin/student',
                        method: 'POST',
                        body: newStudentData
                    }),
                invalidatesTags: [
                    'Student'
                ]
            }),
            // Get All (paginated)
            getStudentsPage: builder.query({
                query: (param)=>{
                    let { page = 1, limit = 20 } = param;
                    return "/students?page=".concat(page, "&limit=").concat(limit);
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Student'
                ]
            }),
            // Get University Students (paginated)
            getStudentsPageOfUniversity: builder.query({
                query: (param)=>{
                    let { universityId, page = 1, limit = 40 } = param;
                    return "/students/university/".concat(universityId, "?page=").concat(page, "&limit=").concat(limit);
                },
                providesTags: [
                    'Student'
                ]
            }),
            // Get University Students (all)
            getAllStudentsOfUniversity: builder.query({
                query: (universityId)=>"/students/university/".concat(universityId),
                providesTags: [
                    'Student'
                ]
            }),
            // Get One
            getStudentById: builder.query({
                query: (id)=>"/students/".concat(id),
                providesTags: [
                    'Student'
                ]
            }),
            // Update
            updateStudent: builder.mutation({
                query: (param)=>{
                    let { _id, ...updates } = param;
                    return {
                        url: "admin/student/".concat(_id),
                        method: 'PATCH',
                        body: updates
                    };
                },
                invalidatesTags: [
                    'Student'
                ]
            }),
            // Delete
            deleteStudent: builder.mutation({
                query: (id)=>({
                        url: "/students/".concat(id),
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Student'
                ]
            }),
            // Get student courses
            getStudentCourses: builder.query({
                query: (id)=>"/students/".concat(id, "/courses")
            }),
            // Get specific course with teachers populated
            getStudentCourseById: builder.query({
                query: (param)=>{
                    let { id, courseId } = param;
                    return "/students/".concat(id, "/courses/").concat(courseId);
                }
            }),
            // Get student grades
            getStudentGrades: builder.query({
                query: (id)=>"/students/".concat(id, "/grades")
            }),
            // Get student assignments
            getStudentAssignments: builder.query({
                query: (id)=>"/students/".concat(id, "/assignments")
            }),
            // Get student calendar
            getStudentCalendar: builder.query({
                query: (id)=>"/students/".concat(id, "/calendar")
            })
        })
});
const { useCreateStudentMutation, useGetStudentsPageQuery, useGetStudentsPageOfUniversityQuery, useGetAllStudentsOfUniversityQuery, useGetStudentByIdQuery, useUpdateStudentMutation, useDeleteStudentMutation, useGetStudentCoursesQuery, useGetStudentCourseByIdQuery, useGetStudentGradesQuery, useGetStudentAssignmentsQuery, useGetStudentCalendarQuery } = studentApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/adminApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "adminApi": ()=>adminApi,
    "useCreateAdminMutation": ()=>useCreateAdminMutation,
    "useDeleteAdminMutation": ()=>useDeleteAdminMutation,
    "useGetAdminByIdQuery": ()=>useGetAdminByIdQuery,
    "useGetPageOfAdminsQuery": ()=>useGetPageOfAdminsQuery,
    "useUpdateAdminMutation": ()=>useUpdateAdminMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const adminApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'adminApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Admin'
    ],
    endpoints: (builder)=>({
            getAdminById: builder.query({
                query: (id)=>"/admin/".concat(id),
                providesTags: (result, error, id)=>[
                        {
                            type: 'Admin',
                            id
                        }
                    ]
            }),
            getPageOfAdmins: builder.query({
                query: (param)=>{
                    let { page = 1, limit = 40 } = param;
                    return "/admin?page=".concat(page, "&limit=").concat(limit);
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Admin'
                ]
            }),
            createAdmin: builder.mutation({
                query: (admin)=>({
                        url: '/admin',
                        method: 'POST',
                        body: admin
                    }),
                invalidatesTags: [
                    'Admin'
                ]
            }),
            updateAdmin: builder.mutation({
                query: (updateData)=>({
                        url: '/admin',
                        method: 'PUT',
                        body: updateData
                    }),
                invalidatesTags: (result, error, param)=>{
                    let { id } = param;
                    return [
                        {
                            type: 'Admin',
                            id
                        }
                    ];
                }
            }),
            deleteAdmin: builder.mutation({
                query: (id)=>({
                        url: "/admin/admin/".concat(id),
                        method: 'DELETE'
                    }),
                invalidatesTags: (result, error, id)=>[
                        {
                            type: 'Admin',
                            id
                        }
                    ]
            })
        })
});
const { useGetAdminByIdQuery, useGetPageOfAdminsQuery, useCreateAdminMutation, useUpdateAdminMutation, useDeleteAdminMutation } = adminApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/collegeApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "collegeApi": ()=>collegeApi,
    "useCreateCollegeMutation": ()=>useCreateCollegeMutation,
    "useGetCollegeByIdQuery": ()=>useGetCollegeByIdQuery,
    "useGetCollegesPageQuery": ()=>useGetCollegesPageQuery,
    "useUpdateCollegeMutation": ()=>useUpdateCollegeMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const collegeApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'collegeApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'College'
    ],
    endpoints: (builder)=>({
            // GET /colleges/universityId?page=1&limit=40
            getCollegesPage: builder.query({
                query: (param)=>{
                    let { universityId, page = 1, limit = 40 } = param;
                    return "/universities/".concat(universityId, "/colleges?page=").concat(page, "&limit=").concat(limit);
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'College'
                ]
            }),
            // GET /colleges/universityId/collegeId
            getCollegeById: builder.query({
                query: (param)=>{
                    let { universityId, collegeId } = param;
                    return "/colleges/".concat(universityId, "/").concat(collegeId);
                }
            }),
            // POST /colleges
            createCollege: builder.mutation({
                query: (body)=>({
                        url: '/colleges',
                        method: 'POST',
                        body
                    })
            }),
            // PATCH /colleges
            updateCollege: builder.mutation({
                query: (param)=>{
                    let { id, ...updateData } = param;
                    return {
                        url: '/colleges',
                        method: 'PATCH',
                        body: {
                            id,
                            ...updateData
                        }
                    };
                }
            })
        })
});
const { useGetCollegesPageQuery, useGetCollegeByIdQuery, useCreateCollegeMutation, useUpdateCollegeMutation } = collegeApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/departmentApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "departmentApi": ()=>departmentApi,
    "useCreateDepartmentMutation": ()=>useCreateDepartmentMutation,
    "useDeleteDepartmentMutation": ()=>useDeleteDepartmentMutation,
    "useGetDepartmentByIdQuery": ()=>useGetDepartmentByIdQuery,
    "useGetDepartmentsPageQuery": ()=>useGetDepartmentsPageQuery,
    "useUpdateDepartmentMutation": ()=>useUpdateDepartmentMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const departmentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'departmentApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Department'
    ],
    endpoints: (builder)=>({
            // GET /departments/:collegeId?page=1&limit=40
            getDepartmentsPage: builder.query({
                query: (param)=>{
                    let { universityId, collegeId, page = 1, limit = 40 } = param;
                    return "/universities/".concat(universityId, "/colleges/").concat(collegeId, "/departments?page=").concat(page, "&limit=").concat(limit);
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Department'
                ]
            }),
            // GET /departments/:id
            getDepartmentById: builder.query({
                query: (id)=>"/departments/".concat(id)
            }),
            // POST /departments/:universityId/:collegeId
            createDepartment: builder.mutation({
                query: (param)=>{
                    let { universityId, collegeId, body } = param;
                    return {
                        url: "/departments/".concat(universityId, "/").concat(collegeId),
                        method: 'POST',
                        body
                    };
                }
            }),
            // PATCH /departments
            updateDepartment: builder.mutation({
                query: (param)=>{
                    let { id, ...rest } = param;
                    return {
                        url: "/departments",
                        method: 'PATCH',
                        body: {
                            id,
                            ...rest
                        }
                    };
                }
            }),
            // DELETE /departments/:id
            deleteDepartment: builder.mutation({
                query: (id)=>({
                        url: "/departments/".concat(id),
                        method: 'DELETE'
                    })
            })
        })
});
const { useGetDepartmentsPageQuery, useGetDepartmentByIdQuery, useCreateDepartmentMutation, useUpdateDepartmentMutation, useDeleteDepartmentMutation } = departmentApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/teacherApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "teacherApi": ()=>teacherApi,
    "useCreateTeacherMutation": ()=>useCreateTeacherMutation,
    "useDeleteTeacherMutation": ()=>useDeleteTeacherMutation,
    "useGetTeacherByIdQuery": ()=>useGetTeacherByIdQuery,
    "useGetTeachersPageQuery": ()=>useGetTeachersPageQuery,
    "useUpdateTeacherMutation": ()=>useUpdateTeacherMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const teacherApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'teacherApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Teacher'
    ],
    endpoints: (builder)=>({
            // GET /teachers?page=1
            getTeachersPage: builder.query({
                query: (param)=>{
                    let { page = 1, limit = 40 } = param;
                    return "/teachers?page=".concat(page, "&limit=").concat(limit);
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Teacher'
                ]
            }),
            // GET /teachers/:teacherId
            getTeacherById: builder.query({
                query: (teacherId)=>"/teachers/".concat(teacherId)
            }),
            // POST /teachers
            createTeacher: builder.mutation({
                query: (body)=>({
                        url: "/teachers",
                        method: 'POST',
                        body
                    })
            }),
            // PATCH /teachers/:id (or _id)
            updateTeacher: builder.mutation({
                query: (body)=>({
                        url: body.id ? "/teachers/".concat(body.id) : "/teachers",
                        method: 'PATCH',
                        body
                    })
            }),
            // DELETE /teachers/:id or {_id} in body
            deleteTeacher: builder.mutation({
                query: (param)=>{
                    let { id, _id } = param;
                    return {
                        url: id ? "/teachers/".concat(id) : "/teachers",
                        method: 'DELETE',
                        body: id ? undefined : {
                            _id
                        }
                    };
                }
            })
        })
});
const { useGetTeachersPageQuery, useGetTeacherByIdQuery, useCreateTeacherMutation, useUpdateTeacherMutation, useDeleteTeacherMutation } = teacherApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/courseApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "courseApi": ()=>courseApi,
    "useCreateCourseMutation": ()=>useCreateCourseMutation,
    "useDeleteCourseMutation": ()=>useDeleteCourseMutation,
    "useGetCourseByIdQuery": ()=>useGetCourseByIdQuery,
    "useGetCoursesPageQuery": ()=>useGetCoursesPageQuery,
    "useUpdateCourseMutation": ()=>useUpdateCourseMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const courseApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'courseApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Course'
    ],
    endpoints: (builder)=>({
            getCoursesPage: builder.query({
                query: (param)=>{
                    let { departmentId, collegeId, universityId, page = 1, limit = 40 } = param;
                    return "/courses?departmentId=".concat(departmentId, "&collegeId=").concat(collegeId, "&universityId=").concat(universityId, "&page=").concat(page, "&limit=").concat(limit);
                },
                transformResponse: (res)=>res.data,
                providesTags: [
                    'Course'
                ]
            }),
            getCourseById: builder.query({
                query: (courseId)=>"/courses/".concat(courseId),
                transformResponse: (res)=>res.data,
                providesTags: [
                    'Course'
                ]
            }),
            // Create
            createCourse: builder.mutation({
                query: (newCourse)=>({
                        url: '/admin/course',
                        method: 'POST',
                        body: newCourse
                    }),
                invalidatesTags: [
                    'Course'
                ]
            }),
            updateCourse: builder.mutation({
                query: (param)=>{
                    let { courseId, updates } = param;
                    return {
                        url: "/admin/course/".concat(courseId),
                        method: 'PATCH',
                        body: updates
                    };
                },
                invalidatesTags: [
                    'Course'
                ]
            }),
            deleteCourse: builder.mutation({
                query: (courseId)=>({
                        url: "/courses/".concat(courseId),
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Course'
                ]
            })
        })
});
const { useGetCoursesPageQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } = courseApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/services/sectionApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sectionApi": ()=>sectionApi,
    "useCreateSectionMutation": ()=>useCreateSectionMutation,
    "useDeleteSectionMutation": ()=>useDeleteSectionMutation,
    "useGetSectionByIdQuery": ()=>useGetSectionByIdQuery,
    "useGetSectionsPageQuery": ()=>useGetSectionsPageQuery,
    "useUpdateSectionMutation": ()=>useUpdateSectionMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const sectionApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'sectionApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Section'
    ],
    endpoints: (builder)=>({
            // GET /api/universities/:universityId/colleges/:collegeId/departments/:departmentId/sections?page=1&limit=40&course=xxx
            getSectionsPage: builder.query({
                query: (param)=>{
                    let { universityId, collegeId, departmentId, page = 1, limit = 40, course } = param;
                    let base = "/admin/university/".concat(universityId, "/college/").concat(collegeId, "/department/").concat(departmentId, "/section?page=").concat(page, "&limit=").concat(limit);
                    if (course) base += "&course=".concat(course);
                    return base;
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Section'
                ]
            }),
            // GET /api/sections/:sectionId
            getSectionById: builder.query({
                query: (param)=>{
                    let { sectionId } = param;
                    return "/sections/".concat(sectionId);
                },
                transformResponse: (response)=>response.data
            }),
            // POST /api/universities/:universityId/colleges/:collegeId/departments/:departmentId/sections
            createSection: builder.mutation({
                query: (param)=>{
                    let { universityId, collegeId, departmentId, payload } = param;
                    return {
                        url: "/admin/university/".concat(universityId, "/college/").concat(collegeId, "/department/").concat(departmentId, "/section"),
                        method: 'POST',
                        body: payload
                    };
                },
                invalidatesTags: [
                    'Section'
                ]
            }),
            // PATCH /api/sections/:sectionId
            updateSection: builder.mutation({
                query: (param)=>{
                    let { sectionId, updates } = param;
                    return {
                        url: "/admin/section/".concat(sectionId),
                        method: 'PATCH',
                        body: updates
                    };
                },
                invalidatesTags: [
                    'Section'
                ]
            }),
            // DELETE /api/sections/:sectionId
            deleteSection: builder.mutation({
                query: (sectionId)=>({
                        url: "admin/section/".concat(sectionId),
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Section'
                ]
            })
        })
});
const { useGetSectionsPageQuery, useGetSectionByIdQuery, useCreateSectionMutation, useUpdateSectionMutation, useDeleteSectionMutation } = sectionApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/slices/userSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearUser": ()=>clearUser,
    "default": ()=>__TURBOPACK__default__export__,
    "setUser": ()=>setUser
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    name: null,
    email: null
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'user',
    initialState,
    reducers: {
        setUser (state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        clearUser (state) {
            state.name = null;
            state.email = null;
        }
    }
});
const { setUser, clearUser } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "persistor": ()=>persistor,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-client] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-client] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/studentApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/adminApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/collegeApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/departmentApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/teacherApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/courseApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/sectionApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/userSlice.ts [app-client] (ecmascript)");
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
// redux state persistence
const authPersistConfig = {
    key: 'auth',
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        'id',
        'mongoId',
        'role'
    ]
};
const userPersistConfig = {
    key: 'user',
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        'name',
        'email'
    ]
};
const persistedAuthReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(authPersistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const persistedUserReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(userPersistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collegeApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collegeApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departmentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departmentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teacherApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teacherApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courseApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courseApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionApi"].reducer,
        auth: persistedAuthReducer,
        user: persistedUserReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLUSH"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REHYDRATE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAUSE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PERSIST"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PURGE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REGISTER"]
                ]
            }
        }).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collegeApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departmentApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teacherApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courseApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionApi"].middleware),
    devTools: ("TURBOPACK compile-time value", "development") !== 'production'
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/providers/ReduxProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ReduxProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function ReduxProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: [
            ' ',
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistGate"], {
                loading: null,
                persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistor"],
                children: children
            }, void 0, false, {
                fileName: "[project]/src/providers/ReduxProvider.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/providers/ReduxProvider.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9zdG9yZS9zbGljZXMvYXV0aFNsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5leHBvcnQgZW51bSBSb2xlRW51bSB7XHJcbiAgU1RVREVOVCA9ICdTVFVERU5UJyxcclxuICBURUFDSEVSID0gJ1RFQUNIRVInLFxyXG4gIEFETUlOID0gJ0FETUlOJyxcclxuICBTVVBFUl9BRE1JTiA9ICdTVVBFUi1BRE1JTicsXHJcbn1cclxuXHJcbnR5cGUgUm9sZSA9IGtleW9mIHR5cGVvZiBSb2xlRW51bTtcclxuXHJcbmludGVyZmFjZSBBdXRoU3RhdGUge1xyXG4gIGlkOiBzdHJpbmcgfCBudWxsO1xyXG4gIG1vbmdvSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgcm9sZTogUm9sZSB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQXV0aFN0YXRlID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIG1vbmdvSWQ6IG51bGwsXHJcbiAgcm9sZTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYXV0aCcsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRBdXRoOiAoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBpZDogc3RyaW5nOyBtb25nb0lkOiBzdHJpbmc7IHJvbGU6IFJvbGUgfT5cclxuICAgICkgPT4ge1xyXG4gICAgICBzdGF0ZS5pZCA9IGFjdGlvbi5wYXlsb2FkLmlkO1xyXG4gICAgICBzdGF0ZS5tb25nb0lkID0gYWN0aW9uLnBheWxvYWQubW9uZ29JZDtcclxuICAgICAgc3RhdGUucm9sZSA9IGFjdGlvbi5wYXlsb2FkLnJvbGU7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgUmVkdWNlciB0cmlnZ2VyZWQgd2l0aDonLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJBdXRoOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuaWQgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5yb2xlID0gbnVsbDtcclxuICAgICAgc3RhdGUubW9uZ29JZCA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0QXV0aCwgY2xlYXJBdXRoIH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFTyxJQUFBLEFBQUssa0NBQUE7Ozs7O1dBQUE7O0FBZVosTUFBTSxlQUEwQjtJQUM5QixJQUFJO0lBQ0osU0FBUztJQUNULE1BQU07QUFDUjtBQUVBLE1BQU0sWUFBWSxDQUFBLEdBQUEsOExBQUEsQ0FBQSxjQUFXLEFBQUQsRUFBRTtJQUM1QixNQUFNO0lBQ047SUFDQSxVQUFVO1FBQ1IsU0FBUyxDQUNQLE9BQ0E7WUFFQSxNQUFNLEVBQUUsR0FBRyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLE1BQU0sT0FBTyxHQUFHLE9BQU8sT0FBTyxDQUFDLE9BQU87WUFDdEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxPQUFPLENBQUMsSUFBSTtZQUNoQyxRQUFRLEdBQUcsQ0FBQyw2QkFBNkIsT0FBTyxPQUFPO1FBQ3pEO1FBQ0EsV0FBVyxDQUFDO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLElBQUksR0FBRztZQUNiLE1BQU0sT0FBTyxHQUFHO1FBQ2xCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsVUFBVSxPQUFPO3VDQUN4QyxVQUFVLE9BQU8iLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDU1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2xpYi9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FwYWNpdG9yIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGFwcHJvcHJpYXRlIEFQSSBVUkwgYmFzZWQgb24gdGhlIGN1cnJlbnQgcGxhdGZvcm1cclxuICogQHJldHVybnMgQVBJIFVSTCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IHBsYXRmb3JtXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0QXBpVXJsID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcclxuICAgIC8vIFJ1bm5pbmcgb24gbW9iaWxlIChBbmRyb2lkL2lPUylcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMX01PQklMRSB8fCAnaHR0cDovLzE5Mi4xNjguNTYuMTo1MDAwL2FwaSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFJ1bm5pbmcgb24gd2ViIGJyb3dzZXJcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMX1dFQiB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaSc7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgYXBwcm9wcmlhdGUgQXV0aCBBUEkgVVJMIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBsYXRmb3JtXHJcbiAqIEByZXR1cm5zIEF1dGggQVBJIFVSTCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IHBsYXRmb3JtXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0aEFwaVVybCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIGlmIChDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKSB7XHJcbiAgICAvLyBSdW5uaW5nIG9uIG1vYmlsZSAoQW5kcm9pZC9pT1MpXHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTF9BVVRIX01PQklMRSB8fCAnaHR0cDovLzE5Mi4xNjguNTYuMTo1MDAwJztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gUnVubmluZyBvbiB3ZWIgYnJvd3NlclxyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkxfQVVUSF9XRUIgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBWVc7QUFaWDs7QUFNTyxNQUFNLFlBQVk7SUFDdkIsSUFBSSx1SkFBQSxDQUFBLFlBQVMsQ0FBQyxnQkFBZ0IsSUFBSTtRQUNoQyxrQ0FBa0M7UUFDbEMsT0FBTyxvRUFBMEM7SUFDbkQsT0FBTztRQUNMLHlCQUF5QjtRQUN6QixPQUFPLGlFQUF1QztJQUNoRDtBQUNGO0FBTU8sTUFBTSxnQkFBZ0I7SUFDM0IsSUFBSSx1SkFBQSxDQUFBLFlBQVMsQ0FBQyxnQkFBZ0IsSUFBSTtRQUNoQyxrQ0FBa0M7UUFDbEMsT0FBTyxnRUFBK0M7SUFDeEQsT0FBTztRQUNMLHlCQUF5QjtRQUN6QixPQUFPLDZEQUE0QztJQUNyRDtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9saWIvYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHR5cGUge1xyXG4gIEJhc2VRdWVyeUZuLFxyXG4gIEZldGNoQXJncyxcclxuICBGZXRjaEJhc2VRdWVyeUVycm9yLFxyXG59IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnknO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3Nvbm5lcic7XHJcbmltcG9ydCB7IGNsZWFyQXV0aCB9IGZyb20gJ0Avc3RvcmUvc2xpY2VzL2F1dGhTbGljZSc7XHJcbmltcG9ydCB7IGdldEFwaVVybCB9IGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyA9IChcclxuICBiYXNlVXJsOiBzdHJpbmcgPSBnZXRBcGlVcmwoKVxyXG4pOiBCYXNlUXVlcnlGbjxzdHJpbmcgfCBGZXRjaEFyZ3MsIHVua25vd24sIEZldGNoQmFzZVF1ZXJ5RXJyb3I+ID0+IHtcclxuICBjb25zdCByYXdCYXNlUXVlcnkgPSBmZXRjaEJhc2VRdWVyeSh7XHJcbiAgICBiYXNlVXJsLFxyXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFzeW5jIChhcmdzLCBhcGksIGV4dHJhT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmF3QmFzZVF1ZXJ5KGFyZ3MsIGFwaSwgZXh0cmFPcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCBzdXBwcmVzczQwMSA9IHR5cGVvZiBhcmdzID09PSAnb2JqZWN0JyAmJiAnc3VwcHJlc3M0MDEnIGluIGFyZ3MgJiYgYXJncy5zdXBwcmVzczQwMTtcclxuXHJcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3VsdC5lcnJvci5zdGF0dXM7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICAgIChyZXN1bHQuZXJyb3IuZGF0YSBhcyBhbnkpPy5tZXNzYWdlIHx8XHJcbiAgICAgICAgKHR5cGVvZiByZXN1bHQuZXJyb3IuZXJyb3IgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IHJlc3VsdC5lcnJvci5lcnJvclxyXG4gICAgICAgICAgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDQwMSAmJiAhc3VwcHJlc3M0MDEpIHtcclxuICAgICAgICAgIGFwaS5kaXNwYXRjaChjbGVhckF1dGgoKSk7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignU2Vzc2lvbiBleHBpcmVkLiBQbGVhc2UgbG9nIGluIGFnYWluLicpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm90ZWN0ZWQtcmVkaXJlY3QnO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvci5zdGF0dXMgPT09ICdQQVJTSU5HX0VSUk9SJykge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgaW52YWxpZCBKU09OIChsaWtlbHkgSFRNTCk6JywgcmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKCdVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZSAoaW52YWxpZCBKU09OKS4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFzdXBwcmVzczQwMSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FQSSBFcnJvciAke3N0YXR1c31dYCwgbWVzc2FnZSk7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7QUFFTyxNQUFNLDZCQUE2QjtRQUN4QywyRUFBa0IsQ0FBQSxHQUFBLG9IQUFBLENBQUEsWUFBUyxBQUFEO0lBRTFCLE1BQU0sZUFBZSxDQUFBLEdBQUEsbUxBQUEsQ0FBQSxpQkFBYyxBQUFELEVBQUU7UUFDbEM7UUFDQSxhQUFhO0lBQ2Y7SUFFQSxPQUFPLE9BQU8sTUFBTSxLQUFLO1FBQ3ZCLE1BQU0sU0FBUyxNQUFNLGFBQWEsTUFBTSxLQUFLO1FBRTdDLE1BQU0sY0FBYyxPQUFPLFNBQVMsWUFBWSxpQkFBaUIsUUFBUSxLQUFLLFdBQVc7UUFFekYsSUFBSSxPQUFPLEtBQUssRUFBRTtnQkFHZDtZQUZGLE1BQU0sU0FBUyxPQUFPLEtBQUssQ0FBQyxNQUFNO1lBQ2xDLE1BQU0sVUFDSixFQUFBLFFBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxjQUFsQiw0QkFBQSxNQUE0QixPQUFPLEtBQ25DLENBQUMsT0FBTyxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FDM0IsT0FBTyxLQUFLLENBQUMsS0FBSyxHQUNsQixzQkFBc0I7WUFFNUIsd0NBQW1DO2dCQUNqQyxJQUFJLFdBQVcsT0FBTyxDQUFDLGFBQWE7b0JBQ2xDLElBQUksUUFBUSxDQUFDLENBQUEsR0FBQSxzSUFBQSxDQUFBLFlBQVMsQUFBRDtvQkFDckIsMklBQUEsQ0FBQSxRQUFLLENBQUMsS0FBSyxDQUFDO29CQUNaLFdBQVc7d0JBQ1QsT0FBTyxRQUFRLENBQUMsSUFBSSxHQUFHO29CQUN6QixHQUFHO2dCQUNMLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssaUJBQWlCO29CQUNsRCxRQUFRLEtBQUssQ0FBQyx3Q0FBd0MsT0FBTyxLQUFLO29CQUNsRSwySUFBQSxDQUFBLFFBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYTtvQkFDdkIsUUFBUSxLQUFLLENBQUMsQUFBQyxjQUFvQixPQUFQLFFBQU8sTUFBSTtvQkFDdkMsMklBQUEsQ0FBQSxRQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNkO1lBQ0Y7UUFDRjtRQUVBLE9BQU87SUFDVDtBQUNGIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNDEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvYXV0aEFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcgfSBmcm9tICdAL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCB7IGdldEF1dGhBcGlVcmwgfSBmcm9tICdAL2xpYi9hcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnYXV0aEFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyhcclxuICAgIGdldEF1dGhBcGlVcmwoKVxyXG4gICksXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGdldE1lOiBidWlsZGVyLnF1ZXJ5PHsgcm9sZTogc3RyaW5nOyBpZDogc3RyaW5nIH0sIHZvaWQ+KHtcclxuICAgICAgcXVlcnk6ICgpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2F1dGgnLFxyXG4gICAgICAgIHN1cHByZXNzNDAxOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIGxvZ2luOiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICB7XHJcbiAgICAgICAgcm9sZTogc3RyaW5nO1xyXG4gICAgICAgIGRhdGE6IHsgaWQ6IHN0cmluZzsgX2lkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9O1xyXG4gICAgICB9LFxyXG4gICAgICB7IGlkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoY3JlZGVudGlhbHMpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGNyZWRlbnRpYWxzLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIGxvZ291dDogYnVpbGRlci5tdXRhdGlvbjx2b2lkLCB2b2lkPih7XHJcbiAgICAgIHF1ZXJ5OiAoKSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9hdXRoL2xvZ291dCcsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0TWVRdWVyeSwgdXNlTG9naW5NdXRhdGlvbiwgdXNlTG9nb3V0TXV0YXRpb24gfSA9IGF1dGhBcGk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFTyxNQUFNLFVBQVUsQ0FBQSxHQUFBLHFOQUFBLENBQUEsWUFBUyxBQUFELEVBQUU7SUFDL0IsYUFBYTtJQUNiLFdBQVcsQ0FBQSxHQUFBLDJJQUFBLENBQUEsNkJBQTBCLEFBQUQsRUFDbEMsQ0FBQSxHQUFBLG9IQUFBLENBQUEsZ0JBQWEsQUFBRDtJQUVkLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFDdkIsT0FBTyxRQUFRLEtBQUssQ0FBcUM7Z0JBQ3ZELE9BQU8sSUFBTSxDQUFDO3dCQUNaLEtBQUs7d0JBQ0wsYUFBYTtvQkFDZixDQUFDO1lBQ0g7WUFFQSxPQUFPLFFBQVEsUUFBUSxDQU1yQjtnQkFDQSxPQUFPLENBQUMsY0FBZ0IsQ0FBQzt3QkFDdkIsS0FBSzt3QkFDTCxRQUFRO3dCQUNSLE1BQU07b0JBQ1IsQ0FBQztZQUNIO1lBRUEsUUFBUSxRQUFRLFFBQVEsQ0FBYTtnQkFDbkMsT0FBTyxJQUFNLENBQUM7d0JBQ1osS0FBSzt3QkFDTCxRQUFRO29CQUNWLENBQUM7WUFDSDtRQUNGLENBQUM7QUFDSDtBQUVPLE1BQU0sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTg4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NlcnZpY2VzL3N0dWRlbnRBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBTdHVkZW50LCBQYWdpbmF0ZWRTdHVkZW50c1Jlc3BvbnNlLCBHcmFkZSwgQXNzaWdubWVudCwgQ2FsZW5kYXIgYXMgY2FsZW5kYXIsIFN0dWRlbnRBcGlSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL3N0dWRlbnQnXHJcbmltcG9ydCB7IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nIH0gZnJvbSAnQC9saWIvYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcnO1xyXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi90eXBlcy9jb3Vyc2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50QXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ3N0dWRlbnRBcGknLFxyXG4gIGJhc2VRdWVyeTogYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcoKSxcclxuICB0YWdUeXBlczogWydTdHVkZW50J10sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIC8vIENyZWF0ZVxyXG4gICAgY3JlYXRlU3R1ZGVudDogYnVpbGRlci5tdXRhdGlvbjxTdHVkZW50LCBQYXJ0aWFsPFN0dWRlbnQ+Pih7XHJcbiAgICAgIHF1ZXJ5OiAobmV3U3R1ZGVudERhdGEpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnYWRtaW4vc3R1ZGVudCcsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogbmV3U3R1ZGVudERhdGEsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnU3R1ZGVudCddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IEFsbCAocGFnaW5hdGVkKVxyXG4gICAgZ2V0U3R1ZGVudHNQYWdlOiBidWlsZGVyLnF1ZXJ5PFBhZ2luYXRlZFN0dWRlbnRzUmVzcG9uc2UsIHsgcGFnZT86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgcGFnZSA9IDEsIGxpbWl0ID0gMjAgfSkgPT5cclxuICAgICAgICBgL3N0dWRlbnRzP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWAsXHJcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IFN0dWRlbnRBcGlSZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbJ1N0dWRlbnQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdldCBVbml2ZXJzaXR5IFN0dWRlbnRzIChwYWdpbmF0ZWQpXHJcbiAgICBnZXRTdHVkZW50c1BhZ2VPZlVuaXZlcnNpdHk6IGJ1aWxkZXIucXVlcnk8U3R1ZGVudFtdLCB7IHVuaXZlcnNpdHlJZDogc3RyaW5nOyBwYWdlPzogbnVtYmVyOyBsaW1pdD86IG51bWJlciB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyB1bml2ZXJzaXR5SWQsIHBhZ2UgPSAxLCBsaW1pdCA9IDQwIH0pID0+XHJcbiAgICAgICAgYC9zdHVkZW50cy91bml2ZXJzaXR5LyR7dW5pdmVyc2l0eUlkfT9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnU3R1ZGVudCddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IFVuaXZlcnNpdHkgU3R1ZGVudHMgKGFsbClcclxuICAgIGdldEFsbFN0dWRlbnRzT2ZVbml2ZXJzaXR5OiBidWlsZGVyLnF1ZXJ5PFN0dWRlbnRbXSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAodW5pdmVyc2l0eUlkKSA9PiBgL3N0dWRlbnRzL3VuaXZlcnNpdHkvJHt1bml2ZXJzaXR5SWR9YCxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbJ1N0dWRlbnQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdldCBPbmVcclxuICAgIGdldFN0dWRlbnRCeUlkOiBidWlsZGVyLnF1ZXJ5PFN0dWRlbnQsIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiBgL3N0dWRlbnRzLyR7aWR9YCxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbJ1N0dWRlbnQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIFVwZGF0ZVxyXG4gICAgdXBkYXRlU3R1ZGVudDogYnVpbGRlci5tdXRhdGlvbjxTdHVkZW50LCBQYXJ0aWFsPFN0dWRlbnQ+ICYgeyBfaWQ6IHN0cmluZyB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyBfaWQsIC4uLnVwZGF0ZXMgfSkgPT4gKHtcclxuICAgICAgICB1cmw6IGBhZG1pbi9zdHVkZW50LyR7X2lkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGJvZHk6IHVwZGF0ZXMsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnU3R1ZGVudCddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gRGVsZXRlXHJcbiAgICBkZWxldGVTdHVkZW50OiBidWlsZGVyLm11dGF0aW9uPHsgbWVzc2FnZTogc3RyaW5nIH0sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiAoe1xyXG4gICAgICAgIHVybDogYC9zdHVkZW50cy8ke2lkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydTdHVkZW50J10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHZXQgc3R1ZGVudCBjb3Vyc2VzXHJcbiAgICBnZXRTdHVkZW50Q291cnNlczogYnVpbGRlci5xdWVyeTx7IGNvdXJzZXM6IENvdXJzZVtdIH0sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiBgL3N0dWRlbnRzLyR7aWR9L2NvdXJzZXNgLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IHNwZWNpZmljIGNvdXJzZSB3aXRoIHRlYWNoZXJzIHBvcHVsYXRlZFxyXG4gICAgZ2V0U3R1ZGVudENvdXJzZUJ5SWQ6IGJ1aWxkZXIucXVlcnk8eyBjb3Vyc2U6IFBhcnRpYWw8Q291cnNlPiB9LCB7IGlkOiBzdHJpbmc7IGNvdXJzZUlkOiBzdHJpbmcgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgaWQsIGNvdXJzZUlkIH0pID0+IGAvc3R1ZGVudHMvJHtpZH0vY291cnNlcy8ke2NvdXJzZUlkfWAsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHZXQgc3R1ZGVudCBncmFkZXNcclxuICAgIGdldFN0dWRlbnRHcmFkZXM6IGJ1aWxkZXIucXVlcnk8eyBncmFkZXM6IEdyYWRlW10gfSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvc3R1ZGVudHMvJHtpZH0vZ3JhZGVzYCxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdldCBzdHVkZW50IGFzc2lnbm1lbnRzXHJcbiAgICBnZXRTdHVkZW50QXNzaWdubWVudHM6IGJ1aWxkZXIucXVlcnk8eyBhc3NpZ25tZW50czogQXNzaWdubWVudFtdIH0sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiBgL3N0dWRlbnRzLyR7aWR9L2Fzc2lnbm1lbnRzYCxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdldCBzdHVkZW50IGNhbGVuZGFyXHJcbiAgICBnZXRTdHVkZW50Q2FsZW5kYXI6IGJ1aWxkZXIucXVlcnk8eyBjYWxlbmRhcjogY2FsZW5kYXJbXSB9LCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChpZCkgPT4gYC9zdHVkZW50cy8ke2lkfS9jYWxlbmRhcmAsXHJcbiAgICB9KSxcclxuICB9KSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlQ3JlYXRlU3R1ZGVudE11dGF0aW9uLFxyXG4gIHVzZUdldFN0dWRlbnRzUGFnZVF1ZXJ5LFxyXG4gIHVzZUdldFN0dWRlbnRzUGFnZU9mVW5pdmVyc2l0eVF1ZXJ5LFxyXG4gIHVzZUdldEFsbFN0dWRlbnRzT2ZVbml2ZXJzaXR5UXVlcnksXHJcbiAgdXNlR2V0U3R1ZGVudEJ5SWRRdWVyeSxcclxuICB1c2VVcGRhdGVTdHVkZW50TXV0YXRpb24sXHJcbiAgdXNlRGVsZXRlU3R1ZGVudE11dGF0aW9uLFxyXG4gIHVzZUdldFN0dWRlbnRDb3Vyc2VzUXVlcnksXHJcbiAgdXNlR2V0U3R1ZGVudENvdXJzZUJ5SWRRdWVyeSxcclxuICB1c2VHZXRTdHVkZW50R3JhZGVzUXVlcnksXHJcbiAgdXNlR2V0U3R1ZGVudEFzc2lnbm1lbnRzUXVlcnksXHJcbiAgdXNlR2V0U3R1ZGVudENhbGVuZGFyUXVlcnksXHJcbn0gPSBzdHVkZW50QXBpXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFHTyxNQUFNLGFBQWEsQ0FBQSxHQUFBLHFOQUFBLENBQUEsWUFBUyxBQUFELEVBQUU7SUFDbEMsYUFBYTtJQUNiLFdBQVcsQ0FBQSxHQUFBLDJJQUFBLENBQUEsNkJBQTBCLEFBQUQ7SUFDcEMsVUFBVTtRQUFDO0tBQVU7SUFDckIsV0FBVyxDQUFDLFVBQVksQ0FBQztZQUN2QixTQUFTO1lBQ1QsZUFBZSxRQUFRLFFBQVEsQ0FBNEI7Z0JBQ3pELE9BQU8sQ0FBQyxpQkFBbUIsQ0FBQzt3QkFDMUIsS0FBSzt3QkFDTCxRQUFRO3dCQUNSLE1BQU07b0JBQ1IsQ0FBQztnQkFDRCxpQkFBaUI7b0JBQUM7aUJBQVU7WUFDOUI7WUFFQSxzQkFBc0I7WUFDdEIsaUJBQWlCLFFBQVEsS0FBSyxDQUErRDtnQkFDM0YsT0FBTzt3QkFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFOzJCQUM5QixBQUFDLGtCQUErQixPQUFkLE1BQUssV0FBZSxPQUFOOztnQkFDbEMsbUJBQW1CLENBQUMsV0FBaUMsU0FBUyxJQUFJO2dCQUNsRSxjQUFjO29CQUFDO2lCQUFVO1lBQzNCO1lBRUEsc0NBQXNDO1lBQ3RDLDZCQUE2QixRQUFRLEtBQUssQ0FBcUU7Z0JBQzdHLE9BQU87d0JBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQzVDLEFBQUMsd0JBQTRDLE9BQXJCLGNBQWEsVUFBc0IsT0FBZCxNQUFLLFdBQWUsT0FBTjs7Z0JBQzdELGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFQSxnQ0FBZ0M7WUFDaEMsNEJBQTRCLFFBQVEsS0FBSyxDQUFvQjtnQkFDM0QsT0FBTyxDQUFDLGVBQWlCLEFBQUMsd0JBQW9DLE9BQWI7Z0JBQ2pELGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFQSxVQUFVO1lBQ1YsZ0JBQWdCLFFBQVEsS0FBSyxDQUFrQjtnQkFDN0MsT0FBTyxDQUFDLEtBQU8sQUFBQyxhQUFlLE9BQUg7Z0JBQzVCLGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFQSxTQUFTO1lBQ1QsZUFBZSxRQUFRLFFBQVEsQ0FBOEM7Z0JBQzNFLE9BQU87d0JBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxTQUFTOzJCQUFNO3dCQUMvQixLQUFLLEFBQUMsaUJBQW9CLE9BQUo7d0JBQ3RCLFFBQVE7d0JBQ1IsTUFBTTtvQkFDUjs7Z0JBQ0EsaUJBQWlCO29CQUFDO2lCQUFVO1lBQzlCO1lBRUEsU0FBUztZQUNULGVBQWUsUUFBUSxRQUFRLENBQThCO2dCQUMzRCxPQUFPLENBQUMsS0FBTyxDQUFDO3dCQUNkLEtBQUssQUFBQyxhQUFlLE9BQUg7d0JBQ2xCLFFBQVE7b0JBQ1YsQ0FBQztnQkFDRCxpQkFBaUI7b0JBQUM7aUJBQVU7WUFDOUI7WUFFQSxzQkFBc0I7WUFDdEIsbUJBQW1CLFFBQVEsS0FBSyxDQUFnQztnQkFDOUQsT0FBTyxDQUFDLEtBQU8sQUFBQyxhQUFlLE9BQUgsSUFBRztZQUNqQztZQUVBLDhDQUE4QztZQUM5QyxzQkFBc0IsUUFBUSxLQUFLLENBQWdFO2dCQUNqRyxPQUFPO3dCQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTsyQkFBSyxBQUFDLGFBQTBCLE9BQWQsSUFBRyxhQUFvQixPQUFUOztZQUMxRDtZQUVBLHFCQUFxQjtZQUNyQixrQkFBa0IsUUFBUSxLQUFLLENBQThCO2dCQUMzRCxPQUFPLENBQUMsS0FBTyxBQUFDLGFBQWUsT0FBSCxJQUFHO1lBQ2pDO1lBRUEsMEJBQTBCO1lBQzFCLHVCQUF1QixRQUFRLEtBQUssQ0FBd0M7Z0JBQzFFLE9BQU8sQ0FBQyxLQUFPLEFBQUMsYUFBZSxPQUFILElBQUc7WUFDakM7WUFFQSx1QkFBdUI7WUFDdkIsb0JBQW9CLFFBQVEsS0FBSyxDQUFtQztnQkFDbEUsT0FBTyxDQUFDLEtBQU8sQUFBQyxhQUFlLE9BQUgsSUFBRztZQUNqQztRQUNGLENBQUM7QUFDSDtBQUVPLE1BQU0sRUFDWCx3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLG1DQUFtQyxFQUNuQyxrQ0FBa0MsRUFDbEMsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIseUJBQXlCLEVBQ3pCLDRCQUE0QixFQUM1Qix3QkFBd0IsRUFDeEIsNkJBQTZCLEVBQzdCLDBCQUEwQixFQUMzQixHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAzMTksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvYWRtaW5BcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcbmltcG9ydCB7IEFkbWluLCBBZG1pbkFwaVJlc3BvbnNlLCBQYWdpbmF0ZWRBZG1pbnNSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2FkbWluJztcclxuaW1wb3J0IHsgYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcgfSBmcm9tICdAL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRtaW5BcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnYWRtaW5BcGknLFxyXG4gIGJhc2VRdWVyeTogYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcoKSxcclxuICB0YWdUeXBlczogWydBZG1pbiddLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBnZXRBZG1pbkJ5SWQ6IGJ1aWxkZXIucXVlcnk8QWRtaW4sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiBgL2FkbWluLyR7aWR9YCxcclxuICAgICAgcHJvdmlkZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgaWQpID0+IFt7IHR5cGU6ICdBZG1pbicsIGlkIH1dLFxyXG4gICAgfSksXHJcblxyXG4gICAgZ2V0UGFnZU9mQWRtaW5zOiBidWlsZGVyLnF1ZXJ5PFBhZ2luYXRlZEFkbWluc1Jlc3BvbnNlLCB7IHBhZ2U/OiBudW1iZXI7IGxpbWl0PzogbnVtYmVyIH0+KHtcclxuICAgICAgcXVlcnk6ICh7IHBhZ2UgPSAxLCBsaW1pdCA9IDQwIH0pID0+IGAvYWRtaW4/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZTogQWRtaW5BcGlSZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbJ0FkbWluJ10sXHJcbiAgICB9KSxcclxuXHJcblxyXG4gICAgY3JlYXRlQWRtaW46IGJ1aWxkZXIubXV0YXRpb248QWRtaW4sIHsgbmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0+KHtcclxuICAgICAgcXVlcnk6IChhZG1pbikgPT4gKHtcclxuICAgICAgICB1cmw6ICcvYWRtaW4nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGFkbWluLFxyXG4gICAgICB9KSxcclxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbJ0FkbWluJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICB1cGRhdGVBZG1pbjogYnVpbGRlci5tdXRhdGlvbjxcclxuICAgICAgQWRtaW4sXHJcbiAgICAgIHsgaWQ6IHN0cmluZzsgbmFtZT86IHN0cmluZzsgcGFzc3dvcmQ/OiBzdHJpbmcgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAodXBkYXRlRGF0YSkgPT4gKHtcclxuICAgICAgICB1cmw6ICcvYWRtaW4nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgYm9keTogdXBkYXRlRGF0YSxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogKHJlc3VsdCwgZXJyb3IsIHsgaWQgfSkgPT4gW3sgdHlwZTogJ0FkbWluJywgaWQgfV0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBkZWxldGVBZG1pbjogYnVpbGRlci5tdXRhdGlvbjx7IG1lc3NhZ2U6IHN0cmluZyB9LCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChpZCkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvYWRtaW4vYWRtaW4vJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBpZCkgPT4gW3sgdHlwZTogJ0FkbWluJywgaWQgfV0sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHVzZUdldEFkbWluQnlJZFF1ZXJ5LFxyXG4gIHVzZUdldFBhZ2VPZkFkbWluc1F1ZXJ5LFxyXG4gIHVzZUNyZWF0ZUFkbWluTXV0YXRpb24sXHJcbiAgdXNlVXBkYXRlQWRtaW5NdXRhdGlvbixcclxuICB1c2VEZWxldGVBZG1pbk11dGF0aW9uLFxyXG59ID0gYWRtaW5BcGk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7OztBQUVPLE1BQU0sV0FBVyxDQUFBLEdBQUEscU5BQUEsQ0FBQSxZQUFTLEFBQUQsRUFBRTtJQUNoQyxhQUFhO0lBQ2IsV0FBVyxDQUFBLEdBQUEsMklBQUEsQ0FBQSw2QkFBMEIsQUFBRDtJQUNwQyxVQUFVO1FBQUM7S0FBUTtJQUNuQixXQUFXLENBQUMsVUFBWSxDQUFDO1lBQ3ZCLGNBQWMsUUFBUSxLQUFLLENBQWdCO2dCQUN6QyxPQUFPLENBQUMsS0FBTyxBQUFDLFVBQVksT0FBSDtnQkFDekIsY0FBYyxDQUFDLFFBQVEsT0FBTyxLQUFPO3dCQUFDOzRCQUFFLE1BQU07NEJBQVM7d0JBQUc7cUJBQUU7WUFDOUQ7WUFFQSxpQkFBaUIsUUFBUSxLQUFLLENBQTZEO2dCQUN6RixPQUFPO3dCQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQUssQUFBQyxlQUE0QixPQUFkLE1BQUssV0FBZSxPQUFOOztnQkFDbEUsbUJBQW1CLENBQUMsV0FBK0IsU0FBUyxJQUFJO2dCQUNoRSxjQUFjO29CQUFDO2lCQUFRO1lBQ3pCO1lBR0EsYUFBYSxRQUFRLFFBQVEsQ0FBNEM7Z0JBQ3ZFLE9BQU8sQ0FBQyxRQUFVLENBQUM7d0JBQ2pCLEtBQUs7d0JBQ0wsUUFBUTt3QkFDUixNQUFNO29CQUNSLENBQUM7Z0JBQ0QsaUJBQWlCO29CQUFDO2lCQUFRO1lBQzVCO1lBRUEsYUFBYSxRQUFRLFFBQVEsQ0FHM0I7Z0JBQ0EsT0FBTyxDQUFDLGFBQWUsQ0FBQzt3QkFDdEIsS0FBSzt3QkFDTCxRQUFRO3dCQUNSLE1BQU07b0JBQ1IsQ0FBQztnQkFDRCxpQkFBaUIsQ0FBQyxRQUFRO3dCQUFPLEVBQUUsRUFBRSxFQUFFOzJCQUFLO3dCQUFDOzRCQUFFLE1BQU07NEJBQVM7d0JBQUc7cUJBQUU7O1lBQ3JFO1lBRUEsYUFBYSxRQUFRLFFBQVEsQ0FBOEI7Z0JBQ3pELE9BQU8sQ0FBQyxLQUFPLENBQUM7d0JBQ2QsS0FBSyxBQUFDLGdCQUFrQixPQUFIO3dCQUNyQixRQUFRO29CQUNWLENBQUM7Z0JBQ0QsaUJBQWlCLENBQUMsUUFBUSxPQUFPLEtBQU87d0JBQUM7NEJBQUUsTUFBTTs0QkFBUzt3QkFBRztxQkFBRTtZQUNqRTtRQUNGLENBQUM7QUFDSDtBQUVPLE1BQU0sRUFDWCxvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3ZCLEdBQUciLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDQwNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9zdG9yZS9zZXJ2aWNlcy9jb2xsZWdlQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBDb2xsZWdlLCBDb2xsZWdlQXBpUmVzcG9uc2UsIFBhZ2luYXRlZENvbGxlZ2VzUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9jb2xsZWdlJztcclxuaW1wb3J0IHsgYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcgfSBmcm9tICdAL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbGxlZ2VBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnY29sbGVnZUFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ0NvbGxlZ2UnXSxcclxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xyXG4gICAgLy8gR0VUIC9jb2xsZWdlcy91bml2ZXJzaXR5SWQ/cGFnZT0xJmxpbWl0PTQwXHJcbiAgICBnZXRDb2xsZWdlc1BhZ2U6IGJ1aWxkZXIucXVlcnk8UGFnaW5hdGVkQ29sbGVnZXNSZXNwb25zZSwgeyB1bml2ZXJzaXR5SWQ6IHN0cmluZzsgcGFnZT86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgdW5pdmVyc2l0eUlkLCBwYWdlID0gMSwgbGltaXQgPSA0MCB9KSA9PlxyXG4gICAgICBgL3VuaXZlcnNpdGllcy8ke3VuaXZlcnNpdHlJZH0vY29sbGVnZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZTogQ29sbGVnZUFwaVJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnQ29sbGVnZSddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR0VUIC9jb2xsZWdlcy91bml2ZXJzaXR5SWQvY29sbGVnZUlkXHJcbiAgICBnZXRDb2xsZWdlQnlJZDogYnVpbGRlci5xdWVyeTxDb2xsZWdlLCB7IHVuaXZlcnNpdHlJZDogc3RyaW5nOyBjb2xsZWdlSWQ6IHN0cmluZyB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyB1bml2ZXJzaXR5SWQsIGNvbGxlZ2VJZCB9KSA9PlxyXG4gICAgICAgIGAvY29sbGVnZXMvJHt1bml2ZXJzaXR5SWR9LyR7Y29sbGVnZUlkfWAsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBQT1NUIC9jb2xsZWdlc1xyXG4gICAgY3JlYXRlQ29sbGVnZTogYnVpbGRlci5tdXRhdGlvbjxDb2xsZWdlLCBQYXJ0aWFsPENvbGxlZ2U+Pih7XHJcbiAgICAgIHF1ZXJ5OiAoYm9keSkgPT4gKHtcclxuICAgICAgICB1cmw6ICcvY29sbGVnZXMnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUEFUQ0ggL2NvbGxlZ2VzXHJcbiAgICB1cGRhdGVDb2xsZWdlOiBidWlsZGVyLm11dGF0aW9uPENvbGxlZ2UsIFBhcnRpYWw8Q29sbGVnZT4gJiB7IGlkOiBzdHJpbmcgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgaWQsIC4uLnVwZGF0ZURhdGEgfSkgPT4gKHtcclxuICAgICAgICB1cmw6ICcvY29sbGVnZXMnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBib2R5OiB7IGlkLCAuLi51cGRhdGVEYXRhIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICB1c2VHZXRDb2xsZWdlc1BhZ2VRdWVyeSxcclxuICB1c2VHZXRDb2xsZWdlQnlJZFF1ZXJ5LFxyXG4gIHVzZUNyZWF0ZUNvbGxlZ2VNdXRhdGlvbixcclxuICB1c2VVcGRhdGVDb2xsZWdlTXV0YXRpb24sXHJcbn0gPSBjb2xsZWdlQXBpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTs7O0FBR08sTUFBTSxhQUFhLENBQUEsR0FBQSxxTkFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO0lBQ2xDLGFBQWE7SUFDYixXQUFXLENBQUEsR0FBQSwySUFBQSxDQUFBLDZCQUEwQixBQUFEO0lBQ3BDLFVBQVU7UUFBQztLQUFVO0lBQ3JCLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFDdkIsNkNBQTZDO1lBQzdDLGlCQUFpQixRQUFRLEtBQUssQ0FBcUY7Z0JBQ2pILE9BQU87d0JBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQzlDLEFBQUMsaUJBQThDLE9BQTlCLGNBQWEsbUJBQStCLE9BQWQsTUFBSyxXQUFlLE9BQU47O2dCQUM3RCxtQkFBbUIsQ0FBQyxXQUFpQyxTQUFTLElBQUk7Z0JBQ2xFLGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFQSx1Q0FBdUM7WUFDdkMsZ0JBQWdCLFFBQVEsS0FBSyxDQUF1RDtnQkFDbEYsT0FBTzt3QkFBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7MkJBQ2pDLEFBQUMsYUFBNEIsT0FBaEIsY0FBYSxLQUFhLE9BQVY7O1lBQ2pDO1lBRUEsaUJBQWlCO1lBQ2pCLGVBQWUsUUFBUSxRQUFRLENBQTRCO2dCQUN6RCxPQUFPLENBQUMsT0FBUyxDQUFDO3dCQUNoQixLQUFLO3dCQUNMLFFBQVE7d0JBQ1I7b0JBQ0YsQ0FBQztZQUNIO1lBRUEsa0JBQWtCO1lBQ2xCLGVBQWUsUUFBUSxRQUFRLENBQTZDO2dCQUMxRSxPQUFPO3dCQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsWUFBWTsyQkFBTTt3QkFDakMsS0FBSzt3QkFDTCxRQUFRO3dCQUNSLE1BQU07NEJBQUU7NEJBQUksR0FBRyxVQUFVO3dCQUFDO29CQUM1Qjs7WUFDRjtRQUNGLENBQUM7QUFDSDtBQUVPLE1BQU0sRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDekIsR0FBRyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNDc3LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NlcnZpY2VzL2RlcGFydG1lbnRBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcbmltcG9ydCB7IERlcGFydG1lbnQsIERlcGFydG1lbnRBcGlSZXNwb25zZSwgUGFnaW5hdGVkRGVwYXJ0bWVudHNSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2RlcGFydG1lbnQnO1xyXG5pbXBvcnQgeyBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyB9IGZyb20gJ0AvbGliL2Jhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZXBhcnRtZW50QXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ2RlcGFydG1lbnRBcGknLFxyXG4gIGJhc2VRdWVyeTogYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcoKSxcclxuICB0YWdUeXBlczogWydEZXBhcnRtZW50J10sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIC8vIEdFVCAvZGVwYXJ0bWVudHMvOmNvbGxlZ2VJZD9wYWdlPTEmbGltaXQ9NDBcclxuICAgIGdldERlcGFydG1lbnRzUGFnZTogYnVpbGRlci5xdWVyeTxcclxuICAgICAgUGFnaW5hdGVkRGVwYXJ0bWVudHNSZXNwb25zZSxcclxuICAgICAgeyB1bml2ZXJzaXR5SWQ6IHN0cmluZzsgY29sbGVnZUlkOiBzdHJpbmc7IHBhZ2U/OiBudW1iZXI7IGxpbWl0PzogbnVtYmVyIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHsgdW5pdmVyc2l0eUlkLCBjb2xsZWdlSWQsIHBhZ2UgPSAxLCBsaW1pdCA9IDQwIH0pID0+XHJcbiAgICAgICAgYC91bml2ZXJzaXRpZXMvJHt1bml2ZXJzaXR5SWR9L2NvbGxlZ2VzLyR7Y29sbGVnZUlkfS9kZXBhcnRtZW50cz9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBEZXBhcnRtZW50QXBpUmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogWydEZXBhcnRtZW50J10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHRVQgL2RlcGFydG1lbnRzLzppZFxyXG4gICAgZ2V0RGVwYXJ0bWVudEJ5SWQ6IGJ1aWxkZXIucXVlcnk8RGVwYXJ0bWVudCwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvZGVwYXJ0bWVudHMvJHtpZH1gLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUE9TVCAvZGVwYXJ0bWVudHMvOnVuaXZlcnNpdHlJZC86Y29sbGVnZUlkXHJcbiAgICBjcmVhdGVEZXBhcnRtZW50OiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICBEZXBhcnRtZW50LFxyXG4gICAgICB7XHJcbiAgICAgICAgdW5pdmVyc2l0eUlkOiBzdHJpbmc7XHJcbiAgICAgICAgY29sbGVnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgYm9keTogT21pdDxEZXBhcnRtZW50LCAnX2lkJyB8ICdjb2xsZWdlSWQnIHwgJ3VuaXZlcnNpdHlJZCc+O1xyXG4gICAgICB9XHJcbiAgICA+KHtcclxuICAgICAgcXVlcnk6ICh7IHVuaXZlcnNpdHlJZCwgY29sbGVnZUlkLCBib2R5IH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL2RlcGFydG1lbnRzLyR7dW5pdmVyc2l0eUlkfS8ke2NvbGxlZ2VJZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUEFUQ0ggL2RlcGFydG1lbnRzXHJcbiAgICB1cGRhdGVEZXBhcnRtZW50OiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICBEZXBhcnRtZW50LFxyXG4gICAgICBQYXJ0aWFsPERlcGFydG1lbnQ+ICYgeyBpZDogc3RyaW5nIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHsgaWQsIC4uLnJlc3QgfSkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvZGVwYXJ0bWVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBib2R5OiB7IGlkLCAuLi5yZXN0IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gREVMRVRFIC9kZXBhcnRtZW50cy86aWRcclxuICAgIGRlbGV0ZURlcGFydG1lbnQ6IGJ1aWxkZXIubXV0YXRpb248eyBtZXNzYWdlOiBzdHJpbmcgfSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL2RlcGFydG1lbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlR2V0RGVwYXJ0bWVudHNQYWdlUXVlcnksXHJcbiAgdXNlR2V0RGVwYXJ0bWVudEJ5SWRRdWVyeSxcclxuICB1c2VDcmVhdGVEZXBhcnRtZW50TXV0YXRpb24sXHJcbiAgdXNlVXBkYXRlRGVwYXJ0bWVudE11dGF0aW9uLFxyXG4gIHVzZURlbGV0ZURlcGFydG1lbnRNdXRhdGlvbixcclxufSA9IGRlcGFydG1lbnRBcGk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7OztBQUVPLE1BQU0sZ0JBQWdCLENBQUEsR0FBQSxxTkFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO0lBQ3JDLGFBQWE7SUFDYixXQUFXLENBQUEsR0FBQSwySUFBQSxDQUFBLDZCQUEwQixBQUFEO0lBQ3BDLFVBQVU7UUFBQztLQUFhO0lBQ3hCLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFDdkIsOENBQThDO1lBQzlDLG9CQUFvQixRQUFRLEtBQUssQ0FHL0I7Z0JBQ0EsT0FBTzt3QkFBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQ3ZELEFBQUMsaUJBQXlDLE9BQXpCLGNBQWEsY0FBMEMsT0FBOUIsV0FBVSxzQkFBa0MsT0FBZCxNQUFLLFdBQWUsT0FBTjs7Z0JBQ3hGLG1CQUFtQixDQUFDLFdBQW9DLFNBQVMsSUFBSTtnQkFDckUsY0FBYztvQkFBQztpQkFBYTtZQUM5QjtZQUVBLHVCQUF1QjtZQUN2QixtQkFBbUIsUUFBUSxLQUFLLENBQXFCO2dCQUNuRCxPQUFPLENBQUMsS0FBTyxBQUFDLGdCQUFrQixPQUFIO1lBQ2pDO1lBRUEsNkNBQTZDO1lBQzdDLGtCQUFrQixRQUFRLFFBQVEsQ0FPaEM7Z0JBQ0EsT0FBTzt3QkFBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFOzJCQUFNO3dCQUM3QyxLQUFLLEFBQUMsZ0JBQStCLE9BQWhCLGNBQWEsS0FBYSxPQUFWO3dCQUNyQyxRQUFRO3dCQUNSO29CQUNGOztZQUNGO1lBRUEscUJBQXFCO1lBQ3JCLGtCQUFrQixRQUFRLFFBQVEsQ0FHaEM7Z0JBQ0EsT0FBTzt3QkFBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU07MkJBQU07d0JBQzNCLEtBQU07d0JBQ04sUUFBUTt3QkFDUixNQUFNOzRCQUFFOzRCQUFJLEdBQUcsSUFBSTt3QkFBQztvQkFDdEI7O1lBQ0Y7WUFFQSwwQkFBMEI7WUFDMUIsa0JBQWtCLFFBQVEsUUFBUSxDQUE4QjtnQkFDOUQsT0FBTyxDQUFDLEtBQU8sQ0FBQzt3QkFDZCxLQUFLLEFBQUMsZ0JBQWtCLE9BQUg7d0JBQ3JCLFFBQVE7b0JBQ1YsQ0FBQztZQUNIO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUNYLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFDNUIsR0FBRyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNTU1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NlcnZpY2VzL3RlYWNoZXJBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcbmltcG9ydCB7IFRlYWNoZXIsIFBhZ2luYXRlZFRlYWNoZXJzUmVzcG9uc2UsIFRlYWNoZXJzQXBpUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy90ZWFjaGVyJztcclxuaW1wb3J0IHsgYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcgfSBmcm9tICdAL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRlYWNoZXJBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAndGVhY2hlckFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ1RlYWNoZXInXSxcclxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xyXG4gICAgLy8gR0VUIC90ZWFjaGVycz9wYWdlPTFcclxuICAgIGdldFRlYWNoZXJzUGFnZTogYnVpbGRlci5xdWVyeTxQYWdpbmF0ZWRUZWFjaGVyc1Jlc3BvbnNlLCB7IHBhZ2U/OiBudW1iZXI7IGxpbWl0PzogbnVtYmVyIH0+KHtcclxuICAgICAgICAgIHF1ZXJ5OiAoeyBwYWdlID0gMSwgbGltaXQgPSA0MCB9KSA9PlxyXG4gICAgICAgICAgICBgL3RlYWNoZXJzP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBUZWFjaGVyc0FwaVJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgcHJvdmlkZXNUYWdzOiBbJ1RlYWNoZXInXSxcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAvLyBHRVQgL3RlYWNoZXJzLzp0ZWFjaGVySWRcclxuICAgIGdldFRlYWNoZXJCeUlkOiBidWlsZGVyLnF1ZXJ5PFRlYWNoZXIsIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKHRlYWNoZXJJZCkgPT4gYC90ZWFjaGVycy8ke3RlYWNoZXJJZH1gLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUE9TVCAvdGVhY2hlcnNcclxuICAgIGNyZWF0ZVRlYWNoZXI6IGJ1aWxkZXIubXV0YXRpb248XHJcbiAgICAgIHsgdGVhY2hlcjogVGVhY2hlcjsgbWVzc2FnZTogc3RyaW5nIH0sXHJcbiAgICAgIE9taXQ8VGVhY2hlciwgJ19pZCcgfCAnaWQnIHwgJ2NvdXJzZXMnPiAmIHsgcGFzc3dvcmQ6IHN0cmluZzsgY291cnNlcz86IHN0cmluZ1tdIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKGJvZHkpID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL3RlYWNoZXJzYCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIFBBVENIIC90ZWFjaGVycy86aWQgKG9yIF9pZClcclxuICAgIHVwZGF0ZVRlYWNoZXI6IGJ1aWxkZXIubXV0YXRpb248XHJcbiAgICAgIHsgdGVhY2hlcjogVGVhY2hlcjsgbWVzc2FnZTogc3RyaW5nIH0sXHJcbiAgICAgIFBhcnRpYWw8VGVhY2hlcj4gJiB7IHBhc3N3b3JkPzogc3RyaW5nOyBpZD86IHN0cmluZzsgX2lkPzogc3RyaW5nIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKGJvZHkpID0+ICh7XHJcbiAgICAgICAgdXJsOiBib2R5LmlkID8gYC90ZWFjaGVycy8ke2JvZHkuaWR9YCA6IGAvdGVhY2hlcnNgLFxyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIERFTEVURSAvdGVhY2hlcnMvOmlkIG9yIHtfaWR9IGluIGJvZHlcclxuICAgIGRlbGV0ZVRlYWNoZXI6IGJ1aWxkZXIubXV0YXRpb248eyBtZXNzYWdlOiBzdHJpbmcgfSwgeyBpZD86IHN0cmluZzsgX2lkPzogc3RyaW5nIH0+KHtcclxuICAgICAgcXVlcnk6ICh7IGlkLCBfaWQgfSkgPT4gKHtcclxuICAgICAgICB1cmw6IGlkID8gYC90ZWFjaGVycy8ke2lkfWAgOiBgL3RlYWNoZXJzYCxcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGJvZHk6IGlkID8gdW5kZWZpbmVkIDogeyBfaWQgfSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHVzZUdldFRlYWNoZXJzUGFnZVF1ZXJ5LFxyXG4gIHVzZUdldFRlYWNoZXJCeUlkUXVlcnksXHJcbiAgdXNlQ3JlYXRlVGVhY2hlck11dGF0aW9uLFxyXG4gIHVzZVVwZGF0ZVRlYWNoZXJNdXRhdGlvbixcclxuICB1c2VEZWxldGVUZWFjaGVyTXV0YXRpb24sXHJcbn0gPSB0ZWFjaGVyQXBpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7OztBQUdPLE1BQU0sYUFBYSxDQUFBLEdBQUEscU5BQUEsQ0FBQSxZQUFTLEFBQUQsRUFBRTtJQUNsQyxhQUFhO0lBQ2IsV0FBVyxDQUFBLEdBQUEsMklBQUEsQ0FBQSw2QkFBMEIsQUFBRDtJQUNwQyxVQUFVO1FBQUM7S0FBVTtJQUNyQixXQUFXLENBQUMsVUFBWSxDQUFDO1lBQ3ZCLHVCQUF1QjtZQUN2QixpQkFBaUIsUUFBUSxLQUFLLENBQStEO2dCQUN2RixPQUFPO3dCQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQzlCLEFBQUMsa0JBQStCLE9BQWQsTUFBSyxXQUFlLE9BQU47O2dCQUNsQyxtQkFBbUIsQ0FBQyxXQUFrQyxTQUFTLElBQUk7Z0JBQ25FLGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFSiwyQkFBMkI7WUFDM0IsZ0JBQWdCLFFBQVEsS0FBSyxDQUFrQjtnQkFDN0MsT0FBTyxDQUFDLFlBQWMsQUFBQyxhQUFzQixPQUFWO1lBQ3JDO1lBRUEsaUJBQWlCO1lBQ2pCLGVBQWUsUUFBUSxRQUFRLENBRzdCO2dCQUNBLE9BQU8sQ0FBQyxPQUFTLENBQUM7d0JBQ2hCLEtBQU07d0JBQ04sUUFBUTt3QkFDUjtvQkFDRixDQUFDO1lBQ0g7WUFFQSwrQkFBK0I7WUFDL0IsZUFBZSxRQUFRLFFBQVEsQ0FHN0I7Z0JBQ0EsT0FBTyxDQUFDLE9BQVMsQ0FBQzt3QkFDaEIsS0FBSyxLQUFLLEVBQUUsR0FBRyxBQUFDLGFBQW9CLE9BQVIsS0FBSyxFQUFFLElBQU07d0JBQ3pDLFFBQVE7d0JBQ1I7b0JBQ0YsQ0FBQztZQUNIO1lBRUEsd0NBQXdDO1lBQ3hDLGVBQWUsUUFBUSxRQUFRLENBQXFEO2dCQUNsRixPQUFPO3dCQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRTsyQkFBTTt3QkFDdkIsS0FBSyxLQUFLLEFBQUMsYUFBZSxPQUFILE1BQVE7d0JBQy9CLFFBQVE7d0JBQ1IsTUFBTSxLQUFLLFlBQVk7NEJBQUU7d0JBQUk7b0JBQy9COztZQUNGO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDekIsR0FBRyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNjMwLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NlcnZpY2VzL2NvdXJzZUFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0J1xyXG5pbXBvcnQgeyBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyB9IGZyb20gJ0AvbGliL2Jhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nJ1xyXG5pbXBvcnQgdHlwZSB7IENvdXJzZSwgUGFnaW5hdGVkQ291cnNlc1Jlc3BvbnNlLCBBcGlSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2NvdXJzZXMnXHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlQXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ2NvdXJzZUFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ0NvdXJzZSddLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBcclxuICAgIGdldENvdXJzZXNQYWdlOiBidWlsZGVyLnF1ZXJ5PFBhZ2luYXRlZENvdXJzZXNSZXNwb25zZSwgeyBkZXBhcnRtZW50SWQ6IHN0cmluZzsgY29sbGVnZUlkOiBzdHJpbmc7IHVuaXZlcnNpdHlJZDpzdHJpbmc7IHBhZ2U/OiBudW1iZXI7IGxpbWl0PzogbnVtYmVyIH0+KHtcclxuICAgICAgcXVlcnk6ICh7ZGVwYXJ0bWVudElkLCBjb2xsZWdlSWQsIHVuaXZlcnNpdHlJZCwgcGFnZSA9IDEsIGxpbWl0ID0gNDAgfSkgPT5cclxuICAgICAgICBgL2NvdXJzZXM/ZGVwYXJ0bWVudElkPSR7ZGVwYXJ0bWVudElkfSZjb2xsZWdlSWQ9JHtjb2xsZWdlSWR9JnVuaXZlcnNpdHlJZD0ke3VuaXZlcnNpdHlJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXM6IEFwaVJlc3BvbnNlPFBhZ2luYXRlZENvdXJzZXNSZXNwb25zZT4pID0+IHJlcy5kYXRhLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnQ291cnNlJ10sXHJcbiAgICB9KSxcclxuXHJcblxyXG4gICAgZ2V0Q291cnNlQnlJZDogYnVpbGRlci5xdWVyeTxDb3Vyc2UsIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGNvdXJzZUlkKSA9PiBgL2NvdXJzZXMvJHtjb3Vyc2VJZH1gLFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlczogQXBpUmVzcG9uc2U8Q291cnNlPikgPT4gcmVzLmRhdGEsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogWydDb3Vyc2UnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIENyZWF0ZVxyXG4gICAgY3JlYXRlQ291cnNlOiBidWlsZGVyLm11dGF0aW9uPENvdXJzZSwgUGFydGlhbDxDb3Vyc2U+Pih7XHJcbiAgICAgIHF1ZXJ5OiAobmV3Q291cnNlKSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9hZG1pbi9jb3Vyc2UnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IG5ld0NvdXJzZSxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydDb3Vyc2UnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIHVwZGF0ZUNvdXJzZTogYnVpbGRlci5tdXRhdGlvbjxDb3Vyc2UsIHsgY291cnNlSWQ6IHN0cmluZzsgdXBkYXRlczogUGFydGlhbDxDb3Vyc2U+IH0+KHtcclxuICAgICAgcXVlcnk6ICh7IGNvdXJzZUlkLCB1cGRhdGVzIH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL2FkbWluL2NvdXJzZS8ke2NvdXJzZUlkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGJvZHk6IHVwZGF0ZXMsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnQ291cnNlJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICBkZWxldGVDb3Vyc2U6IGJ1aWxkZXIubXV0YXRpb248eyBtZXNzYWdlOiBzdHJpbmcgfSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoY291cnNlSWQpID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL2NvdXJzZXMvJHtjb3Vyc2VJZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnQ291cnNlJ10sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlR2V0Q291cnNlc1BhZ2VRdWVyeSxcclxuICB1c2VHZXRDb3Vyc2VCeUlkUXVlcnksXHJcbiAgdXNlQ3JlYXRlQ291cnNlTXV0YXRpb24sXHJcbiAgdXNlVXBkYXRlQ291cnNlTXV0YXRpb24sXHJcbiAgdXNlRGVsZXRlQ291cnNlTXV0YXRpb24sXHJcbn0gPSBjb3Vyc2VBcGlcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR08sTUFBTSxZQUFZLENBQUEsR0FBQSxxTkFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO0lBQ2pDLGFBQWE7SUFDYixXQUFXLENBQUEsR0FBQSwySUFBQSxDQUFBLDZCQUEwQixBQUFEO0lBQ3BDLFVBQVU7UUFBQztLQUFTO0lBQ3BCLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFFdkIsZ0JBQWdCLFFBQVEsS0FBSyxDQUE0SDtnQkFDdkosT0FBTzt3QkFBQyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFOzJCQUNwRSxBQUFDLHlCQUFrRCxPQUExQixjQUFhLGVBQXVDLE9BQTFCLFdBQVUsa0JBQXFDLE9BQXJCLGNBQWEsVUFBc0IsT0FBZCxNQUFLLFdBQWUsT0FBTjs7Z0JBQ2xILG1CQUFtQixDQUFDLE1BQStDLElBQUksSUFBSTtnQkFDM0UsY0FBYztvQkFBQztpQkFBUztZQUMxQjtZQUdBLGVBQWUsUUFBUSxLQUFLLENBQWlCO2dCQUMzQyxPQUFPLENBQUMsV0FBYSxBQUFDLFlBQW9CLE9BQVQ7Z0JBQ2pDLG1CQUFtQixDQUFDLE1BQTZCLElBQUksSUFBSTtnQkFDekQsY0FBYztvQkFBQztpQkFBUztZQUMxQjtZQUVBLFNBQVM7WUFDVCxjQUFjLFFBQVEsUUFBUSxDQUEwQjtnQkFDdEQsT0FBTyxDQUFDLFlBQWMsQ0FBQzt3QkFDckIsS0FBSzt3QkFDTCxRQUFRO3dCQUNSLE1BQU07b0JBQ1IsQ0FBQztnQkFDRCxpQkFBaUI7b0JBQUM7aUJBQVM7WUFDN0I7WUFFQSxjQUFjLFFBQVEsUUFBUSxDQUF5RDtnQkFDckYsT0FBTzt3QkFBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7MkJBQU07d0JBQ2pDLEtBQUssQUFBQyxpQkFBeUIsT0FBVDt3QkFDdEIsUUFBUTt3QkFDUixNQUFNO29CQUNSOztnQkFDQSxpQkFBaUI7b0JBQUM7aUJBQVM7WUFDN0I7WUFFQSxjQUFjLFFBQVEsUUFBUSxDQUE4QjtnQkFDMUQsT0FBTyxDQUFDLFdBQWEsQ0FBQzt3QkFDcEIsS0FBSyxBQUFDLFlBQW9CLE9BQVQ7d0JBQ2pCLFFBQVE7b0JBQ1YsQ0FBQztnQkFDRCxpQkFBaUI7b0JBQUM7aUJBQVM7WUFDN0I7UUFDRixDQUFDO0FBQ0g7QUFFTyxNQUFNLEVBQ1gsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN4QixHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3MTEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvc2VjdGlvbkFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcgfSBmcm9tICdAL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCB7XHJcbiAgU2VjdGlvbixcclxuICBQYWdpbmF0ZWRTZWN0aW9uc1Jlc3BvbnNlLFxyXG4gIFNlY3Rpb25BcGlSZXNwb25zZSxcclxufSBmcm9tICcuLi90eXBlcy9zZWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uQXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ3NlY3Rpb25BcGknLFxyXG4gIGJhc2VRdWVyeTogYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcoKSxcclxuICB0YWdUeXBlczogWydTZWN0aW9uJ10sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIC8vIEdFVCAvYXBpL3VuaXZlcnNpdGllcy86dW5pdmVyc2l0eUlkL2NvbGxlZ2VzLzpjb2xsZWdlSWQvZGVwYXJ0bWVudHMvOmRlcGFydG1lbnRJZC9zZWN0aW9ucz9wYWdlPTEmbGltaXQ9NDAmY291cnNlPXh4eFxyXG4gICAgZ2V0U2VjdGlvbnNQYWdlOiBidWlsZGVyLnF1ZXJ5PFxyXG4gICAgICBQYWdpbmF0ZWRTZWN0aW9uc1Jlc3BvbnNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgdW5pdmVyc2l0eUlkOiBzdHJpbmc7XHJcbiAgICAgICAgY29sbGVnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgcGFnZT86IG51bWJlcjtcclxuICAgICAgICBsaW1pdD86IG51bWJlcjtcclxuICAgICAgICBjb3Vyc2U/OiBzdHJpbmc7XHJcbiAgICAgIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHtcclxuICAgICAgICB1bml2ZXJzaXR5SWQsXHJcbiAgICAgICAgY29sbGVnZUlkLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZCxcclxuICAgICAgICBwYWdlID0gMSxcclxuICAgICAgICBsaW1pdCA9IDQwLFxyXG4gICAgICAgIGNvdXJzZSxcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGxldCBiYXNlID0gYC9hZG1pbi91bml2ZXJzaXR5LyR7dW5pdmVyc2l0eUlkfS9jb2xsZWdlLyR7Y29sbGVnZUlkfS9kZXBhcnRtZW50LyR7ZGVwYXJ0bWVudElkfS9zZWN0aW9uP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWA7XHJcbiAgICAgICAgaWYgKGNvdXJzZSkgYmFzZSArPSBgJmNvdXJzZT0ke2NvdXJzZX1gO1xyXG4gICAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgICB9LFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBTZWN0aW9uQXBpUmVzcG9uc2UpID0+XHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YSBhcyBQYWdpbmF0ZWRTZWN0aW9uc1Jlc3BvbnNlLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnU2VjdGlvbiddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR0VUIC9hcGkvc2VjdGlvbnMvOnNlY3Rpb25JZFxyXG4gICAgZ2V0U2VjdGlvbkJ5SWQ6IGJ1aWxkZXIucXVlcnk8U2VjdGlvbiwgeyBzZWN0aW9uSWQ6IHN0cmluZyB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyBzZWN0aW9uSWQgfSkgPT4gYC9zZWN0aW9ucy8ke3NlY3Rpb25JZH1gLFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBTZWN0aW9uQXBpUmVzcG9uc2UpID0+XHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YSBhcyBTZWN0aW9uLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUE9TVCAvYXBpL3VuaXZlcnNpdGllcy86dW5pdmVyc2l0eUlkL2NvbGxlZ2VzLzpjb2xsZWdlSWQvZGVwYXJ0bWVudHMvOmRlcGFydG1lbnRJZC9zZWN0aW9uc1xyXG4gICAgY3JlYXRlU2VjdGlvbjogYnVpbGRlci5tdXRhdGlvbjxcclxuICAgICAgU2VjdGlvbixcclxuICAgICAge1xyXG4gICAgICAgIHVuaXZlcnNpdHlJZDogc3RyaW5nO1xyXG4gICAgICAgIGNvbGxlZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgIGRlcGFydG1lbnRJZDogc3RyaW5nO1xyXG4gICAgICAgIHBheWxvYWQ6IFBhcnRpYWw8U2VjdGlvbj47XHJcbiAgICAgIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHsgdW5pdmVyc2l0eUlkLCBjb2xsZWdlSWQsIGRlcGFydG1lbnRJZCwgcGF5bG9hZCB9KSA9PiAoe1xyXG4gICAgICAgIHVybDogYC9hZG1pbi91bml2ZXJzaXR5LyR7dW5pdmVyc2l0eUlkfS9jb2xsZWdlLyR7Y29sbGVnZUlkfS9kZXBhcnRtZW50LyR7ZGVwYXJ0bWVudElkfS9zZWN0aW9uYCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBwYXlsb2FkLFxyXG4gICAgICAgIFxyXG4gICAgICB9KSxcclxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbJ1NlY3Rpb24nXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIFBBVENIIC9hcGkvc2VjdGlvbnMvOnNlY3Rpb25JZFxyXG4gICAgdXBkYXRlU2VjdGlvbjogYnVpbGRlci5tdXRhdGlvbjxcclxuICAgICAgU2VjdGlvbixcclxuICAgICAgeyBzZWN0aW9uSWQ6IHN0cmluZzsgdXBkYXRlczogUGFydGlhbDxTZWN0aW9uPiB9XHJcbiAgICA+KHtcclxuICAgICAgcXVlcnk6ICh7IHNlY3Rpb25JZCwgdXBkYXRlcyB9KSA9PiAoe1xyXG4gICAgICAgIHVybDogYC9hZG1pbi9zZWN0aW9uLyR7c2VjdGlvbklkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGJvZHk6IHVwZGF0ZXMsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnU2VjdGlvbiddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gREVMRVRFIC9hcGkvc2VjdGlvbnMvOnNlY3Rpb25JZFxyXG4gICAgZGVsZXRlU2VjdGlvbjogYnVpbGRlci5tdXRhdGlvbjxcclxuICAgICAgeyBzdWNjZXNzOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfSxcclxuICAgICAgc3RyaW5nXHJcbiAgICA+KHtcclxuICAgICAgcXVlcnk6IChzZWN0aW9uSWQpID0+ICh7XHJcbiAgICAgICAgdXJsOiBgYWRtaW4vc2VjdGlvbi8ke3NlY3Rpb25JZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnU2VjdGlvbiddLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICB1c2VHZXRTZWN0aW9uc1BhZ2VRdWVyeSxcclxuICB1c2VHZXRTZWN0aW9uQnlJZFF1ZXJ5LFxyXG4gIHVzZUNyZWF0ZVNlY3Rpb25NdXRhdGlvbixcclxuICB1c2VVcGRhdGVTZWN0aW9uTXV0YXRpb24sXHJcbiAgdXNlRGVsZXRlU2VjdGlvbk11dGF0aW9uLFxyXG59ID0gc2VjdGlvbkFwaTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBT08sTUFBTSxhQUFhLENBQUEsR0FBQSxxTkFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO0lBQ2xDLGFBQWE7SUFDYixXQUFXLENBQUEsR0FBQSwySUFBQSxDQUFBLDZCQUEwQixBQUFEO0lBQ3BDLFVBQVU7UUFBQztLQUFVO0lBQ3JCLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFDdkIsd0hBQXdIO1lBQ3hILGlCQUFpQixRQUFRLEtBQUssQ0FVNUI7Z0JBQ0EsT0FBTzt3QkFBQyxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sQ0FBQyxFQUNSLFFBQVEsRUFBRSxFQUNWLE1BQU0sRUFDUDtvQkFDQyxJQUFJLE9BQU8sQUFBQyxxQkFBNEMsT0FBeEIsY0FBYSxhQUFtQyxPQUF4QixXQUFVLGdCQUEyQyxPQUE3QixjQUFhLGtCQUE4QixPQUFkLE1BQUssV0FBZSxPQUFOO29CQUMzSCxJQUFJLFFBQVEsUUFBUSxBQUFDLFdBQWlCLE9BQVA7b0JBQy9CLE9BQU87Z0JBQ1Q7Z0JBQ0EsbUJBQW1CLENBQUMsV0FDbEIsU0FBUyxJQUFJO2dCQUNmLGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFQSwrQkFBK0I7WUFDL0IsZ0JBQWdCLFFBQVEsS0FBSyxDQUFpQztnQkFDNUQsT0FBTzt3QkFBQyxFQUFFLFNBQVMsRUFBRTsyQkFBSyxBQUFDLGFBQXNCLE9BQVY7O2dCQUN2QyxtQkFBbUIsQ0FBQyxXQUNsQixTQUFTLElBQUk7WUFDakI7WUFFQSw4RkFBOEY7WUFDOUYsZUFBZSxRQUFRLFFBQVEsQ0FRN0I7Z0JBQ0EsT0FBTzt3QkFBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRTsyQkFBTTt3QkFDOUQsS0FBSyxBQUFDLHFCQUE0QyxPQUF4QixjQUFhLGFBQW1DLE9BQXhCLFdBQVUsZ0JBQTJCLE9BQWIsY0FBYTt3QkFDdkYsUUFBUTt3QkFDUixNQUFNO29CQUVSOztnQkFDQSxpQkFBaUI7b0JBQUM7aUJBQVU7WUFDOUI7WUFFQSxpQ0FBaUM7WUFDakMsZUFBZSxRQUFRLFFBQVEsQ0FHN0I7Z0JBQ0EsT0FBTzt3QkFBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7MkJBQU07d0JBQ2xDLEtBQUssQUFBQyxrQkFBMkIsT0FBVjt3QkFDdkIsUUFBUTt3QkFDUixNQUFNO29CQUNSOztnQkFDQSxpQkFBaUI7b0JBQUM7aUJBQVU7WUFDOUI7WUFFQSxrQ0FBa0M7WUFDbEMsZUFBZSxRQUFRLFFBQVEsQ0FHN0I7Z0JBQ0EsT0FBTyxDQUFDLFlBQWMsQ0FBQzt3QkFDckIsS0FBSyxBQUFDLGlCQUEwQixPQUFWO3dCQUN0QixRQUFRO29CQUNWLENBQUM7Z0JBQ0QsaUJBQWlCO29CQUFDO2lCQUFVO1lBQzlCO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDekIsR0FBRyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODAxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NsaWNlcy91c2VyU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmludGVyZmFjZSBVc2VyU3RhdGUge1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgZW1haWw6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0ge1xyXG4gIG5hbWU6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3VzZXInLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXNlcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH0+KSB7XHJcbiAgICAgIHN0YXRlLm5hbWUgPSBhY3Rpb24ucGF5bG9hZC5uYW1lO1xyXG4gICAgICBzdGF0ZS5lbWFpbCA9IGFjdGlvbi5wYXlsb2FkLmVtYWlsO1xyXG4gICAgfSxcclxuICAgIGNsZWFyVXNlcihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5uYW1lID0gbnVsbDtcclxuICAgICAgc3RhdGUuZW1haWwgPSBudWxsO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVzZXIsIGNsZWFyVXNlciB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFPQSxNQUFNLGVBQTBCO0lBQzlCLE1BQU07SUFDTixPQUFPO0FBQ1Q7QUFFQSxNQUFNLFlBQVksQ0FBQSxHQUFBLDhMQUFBLENBQUEsY0FBVyxBQUFELEVBQUU7SUFDNUIsTUFBTTtJQUNOO0lBQ0EsVUFBVTtRQUNSLFNBQVEsS0FBSyxFQUFFLE1BQXNEO1lBQ25FLE1BQU0sSUFBSSxHQUFHLE9BQU8sT0FBTyxDQUFDLElBQUk7WUFDaEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxPQUFPLENBQUMsS0FBSztRQUNwQztRQUNBLFdBQVUsS0FBSztZQUNiLE1BQU0sSUFBSSxHQUFHO1lBQ2IsTUFBTSxLQUFLLEdBQUc7UUFDaEI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLE9BQU87dUNBQ3hDLFVBQVUsT0FBTyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogODM3LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciwgRkxVU0gsIFJFSFlEUkFURSwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUiB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2F1dGhBcGknXHJcbmltcG9ydCB7IHN0dWRlbnRBcGkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL3N0dWRlbnRBcGknXHJcbmltcG9ydCB7IGFkbWluQXBpIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9hZG1pbkFwaSdcclxuaW1wb3J0IHsgY29sbGVnZUFwaSB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvY29sbGVnZUFwaSdcclxuaW1wb3J0IHsgZGVwYXJ0bWVudEFwaSB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvZGVwYXJ0bWVudEFwaSdcclxuaW1wb3J0IHsgdGVhY2hlckFwaSB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvdGVhY2hlckFwaSdcclxuaW1wb3J0IHsgY291cnNlQXBpIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9jb3Vyc2VBcGknXHJcbmltcG9ydCB7IHNlY3Rpb25BcGl9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvc2VjdGlvbkFwaSdcclxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJ0Avc3RvcmUvc2xpY2VzL2F1dGhTbGljZSdcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJ0Avc3RvcmUvc2xpY2VzL3VzZXJTbGljZSdcclxuXHJcblxyXG4vLyByZWR1eCBzdGF0ZSBwZXJzaXN0ZW5jZVxyXG5cclxuXHJcbmNvbnN0IGF1dGhQZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogJ2F1dGgnLFxyXG4gIHN0b3JhZ2UsXHJcbiAgd2hpdGVsaXN0OiBbJ2lkJywgJ21vbmdvSWQnLCAncm9sZSddLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAndXNlcicsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnbmFtZScsICdlbWFpbCddXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZEF1dGhSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIoYXV0aFBlcnNpc3RDb25maWcsIGF1dGhSZWR1Y2VyKTtcclxuY29uc3QgcGVyc2lzdGVkVXNlclJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcih1c2VyUGVyc2lzdENvbmZpZywgdXNlclJlZHVjZXIpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBbYXV0aEFwaS5yZWR1Y2VyUGF0aF06IGF1dGhBcGkucmVkdWNlcixcclxuICAgIFtzdHVkZW50QXBpLnJlZHVjZXJQYXRoXTogc3R1ZGVudEFwaS5yZWR1Y2VyLFxyXG4gICAgW2FkbWluQXBpLnJlZHVjZXJQYXRoXTogYWRtaW5BcGkucmVkdWNlcixcclxuICAgIFtjb2xsZWdlQXBpLnJlZHVjZXJQYXRoXTogY29sbGVnZUFwaS5yZWR1Y2VyLFxyXG4gICAgW2RlcGFydG1lbnRBcGkucmVkdWNlclBhdGhdOiBkZXBhcnRtZW50QXBpLnJlZHVjZXIsXHJcbiAgICBbdGVhY2hlckFwaS5yZWR1Y2VyUGF0aF06IHRlYWNoZXJBcGkucmVkdWNlcixcclxuICAgIFtjb3Vyc2VBcGkucmVkdWNlclBhdGhdOiBjb3Vyc2VBcGkucmVkdWNlcixcclxuICAgIFtzZWN0aW9uQXBpLnJlZHVjZXJQYXRoXTogc2VjdGlvbkFwaS5yZWR1Y2VyLFxyXG4gICAgYXV0aDogcGVyc2lzdGVkQXV0aFJlZHVjZXIsXHJcbiAgICB1c2VyOiBwZXJzaXN0ZWRVc2VyUmVkdWNlcixcclxuICB9LFxyXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcclxuICAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IHtcclxuICAgICAgICBpZ25vcmVkQWN0aW9uczogW0ZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVJdLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLmNvbmNhdChhdXRoQXBpLm1pZGRsZXdhcmUpXHJcbiAgICAgIC5jb25jYXQoc3R1ZGVudEFwaS5taWRkbGV3YXJlKVxyXG4gICAgICAuY29uY2F0KGFkbWluQXBpLm1pZGRsZXdhcmUpXHJcbiAgICAgIC5jb25jYXQoY29sbGVnZUFwaS5taWRkbGV3YXJlKVxyXG4gICAgICAuY29uY2F0KGRlcGFydG1lbnRBcGkubWlkZGxld2FyZSlcclxuICAgICAgLmNvbmNhdCh0ZWFjaGVyQXBpLm1pZGRsZXdhcmUpXHJcbiAgICAgIC5jb25jYXQoY291cnNlQXBpLm1pZGRsZXdhcmUpXHJcbiAgICAgIC5jb25jYXQoc2VjdGlvbkFwaS5taWRkbGV3YXJlKSxcclxuICBkZXZUb29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcclxufSlcclxuXHJcbi8vIHR5cGVkIGhvb2tzXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPlxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQTZEWTtBQTdEWjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFHQSwwQkFBMEI7QUFHMUIsTUFBTSxvQkFBb0I7SUFDeEIsS0FBSztJQUNMLFNBQUEsOEpBQUEsQ0FBQSxVQUFPO0lBQ1AsV0FBVztRQUFDO1FBQU07UUFBVztLQUFPO0FBQ3RDO0FBRUEsTUFBTSxvQkFBb0I7SUFDeEIsS0FBSztJQUNMLFNBQUEsOEpBQUEsQ0FBQSxVQUFPO0lBQ1AsV0FBVztRQUFDO1FBQVE7S0FBUTtBQUM5QjtBQUVBLE1BQU0sdUJBQXVCLENBQUEsR0FBQSx3TUFBQSxDQUFBLGlCQUFjLEFBQUQsRUFBRSxtQkFBbUIsc0lBQUEsQ0FBQSxVQUFXO0FBQzFFLE1BQU0sdUJBQXVCLENBQUEsR0FBQSx3TUFBQSxDQUFBLGlCQUFjLEFBQUQsRUFBRSxtQkFBbUIsc0lBQUEsQ0FBQSxVQUFXO0FBR25FLE1BQU0sUUFBUSxDQUFBLEdBQUEsOExBQUEsQ0FBQSxpQkFBYyxBQUFELEVBQUU7SUFDbEMsU0FBUztRQUNQLENBQUMsc0lBQUEsQ0FBQSxVQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsc0lBQUEsQ0FBQSxVQUFPLENBQUMsT0FBTztRQUN0QyxDQUFDLHlJQUFBLENBQUEsYUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLHlJQUFBLENBQUEsYUFBVSxDQUFDLE9BQU87UUFDNUMsQ0FBQyx1SUFBQSxDQUFBLFdBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSx1SUFBQSxDQUFBLFdBQVEsQ0FBQyxPQUFPO1FBQ3hDLENBQUMseUlBQUEsQ0FBQSxhQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUseUlBQUEsQ0FBQSxhQUFVLENBQUMsT0FBTztRQUM1QyxDQUFDLDRJQUFBLENBQUEsZ0JBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSw0SUFBQSxDQUFBLGdCQUFhLENBQUMsT0FBTztRQUNsRCxDQUFDLHlJQUFBLENBQUEsYUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLHlJQUFBLENBQUEsYUFBVSxDQUFDLE9BQU87UUFDNUMsQ0FBQyx3SUFBQSxDQUFBLFlBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSx3SUFBQSxDQUFBLFlBQVMsQ0FBQyxPQUFPO1FBQzFDLENBQUMseUlBQUEsQ0FBQSxhQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUseUlBQUEsQ0FBQSxhQUFVLENBQUMsT0FBTztRQUM1QyxNQUFNO1FBQ04sTUFBTTtJQUNSO0lBQ0EsWUFBWSxDQUFDLHVCQUNYLHFCQUFxQjtZQUNuQixtQkFBbUI7Z0JBQ2pCLGdCQUFnQjtvQkFBQyxzSkFBQSxDQUFBLFFBQUs7b0JBQUUsc0pBQUEsQ0FBQSxZQUFTO29CQUFFLHNKQUFBLENBQUEsUUFBSztvQkFBRSxzSkFBQSxDQUFBLFVBQU87b0JBQUUsc0pBQUEsQ0FBQSxRQUFLO29CQUFFLHNKQUFBLENBQUEsV0FBUTtpQkFBQztZQUNyRTtRQUNGLEdBQ0csTUFBTSxDQUFDLHNJQUFBLENBQUEsVUFBTyxDQUFDLFVBQVUsRUFDekIsTUFBTSxDQUFDLHlJQUFBLENBQUEsYUFBVSxDQUFDLFVBQVUsRUFDNUIsTUFBTSxDQUFDLHVJQUFBLENBQUEsV0FBUSxDQUFDLFVBQVUsRUFDMUIsTUFBTSxDQUFDLHlJQUFBLENBQUEsYUFBVSxDQUFDLFVBQVUsRUFDNUIsTUFBTSxDQUFDLDRJQUFBLENBQUEsZ0JBQWEsQ0FBQyxVQUFVLEVBQy9CLE1BQU0sQ0FBQyx5SUFBQSxDQUFBLGFBQVUsQ0FBQyxVQUFVLEVBQzVCLE1BQU0sQ0FBQyx3SUFBQSxDQUFBLFlBQVMsQ0FBQyxVQUFVLEVBQzNCLE1BQU0sQ0FBQyx5SUFBQSxDQUFBLGFBQVUsQ0FBQyxVQUFVO0lBQ2pDLFVBQVUsb0RBQXlCO0FBQ3JDO0FBR08sTUFBTSxZQUFZLENBQUEsR0FBQSxvTUFBQSxDQUFBLGVBQVksQUFBRCxFQUFFIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA5MjgsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvcHJvdmlkZXJzL1JlZHV4UHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzdG9yZSwgcGVyc2lzdG9yIH0gZnJvbSAnQC9zdG9yZSc7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVkdXhQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICB7JyAnfVxyXG4gICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17bnVsbH0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUpBOzs7OztBQVNlLFNBQVMsY0FBYyxLQUlyQztRQUpxQyxFQUNwQyxRQUFRLEVBR1QsR0FKcUM7SUFLcEMscUJBQ0UsNkxBQUMsNEpBQUEsQ0FBQSxXQUFRO1FBQUMsT0FBTyx3SEFBQSxDQUFBLFFBQUs7O1lBQ25COzBCQUNELDZMQUFDLGlLQUFBLENBQUEsY0FBVztnQkFBQyxTQUFTO2dCQUFNLFdBQVcsd0hBQUEsQ0FBQSxZQUFTOzBCQUM3Qzs7Ozs7Ozs7Ozs7O0FBSVQ7S0Fid0IiLCJkZWJ1Z0lkIjpudWxsfX1dCn0=
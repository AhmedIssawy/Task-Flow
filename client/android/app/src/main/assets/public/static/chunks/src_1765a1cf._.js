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
"[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "baseQueryWithErrorHandling": ()=>baseQueryWithErrorHandling
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)");
;
;
;
const baseQueryWithErrorHandling = function() {
    let baseUrl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000/api';
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-client] (ecmascript)");
;
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'authApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL_AUTH || 'http://localhost:5000'),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9zdG9yZS9zbGljZXMvYXV0aFNsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5leHBvcnQgZW51bSBSb2xlRW51bSB7XHJcbiAgU1RVREVOVCA9ICdTVFVERU5UJyxcclxuICBURUFDSEVSID0gJ1RFQUNIRVInLFxyXG4gIEFETUlOID0gJ0FETUlOJyxcclxuICBTVVBFUl9BRE1JTiA9ICdTVVBFUi1BRE1JTicsXHJcbn1cclxuXHJcbnR5cGUgUm9sZSA9IGtleW9mIHR5cGVvZiBSb2xlRW51bTtcclxuXHJcbmludGVyZmFjZSBBdXRoU3RhdGUge1xyXG4gIGlkOiBzdHJpbmcgfCBudWxsO1xyXG4gIG1vbmdvSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgcm9sZTogUm9sZSB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQXV0aFN0YXRlID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIG1vbmdvSWQ6IG51bGwsXHJcbiAgcm9sZTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYXV0aCcsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRBdXRoOiAoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBpZDogc3RyaW5nOyBtb25nb0lkOiBzdHJpbmc7IHJvbGU6IFJvbGUgfT5cclxuICAgICkgPT4ge1xyXG4gICAgICBzdGF0ZS5pZCA9IGFjdGlvbi5wYXlsb2FkLmlkO1xyXG4gICAgICBzdGF0ZS5tb25nb0lkID0gYWN0aW9uLnBheWxvYWQubW9uZ29JZDtcclxuICAgICAgc3RhdGUucm9sZSA9IGFjdGlvbi5wYXlsb2FkLnJvbGU7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgUmVkdWNlciB0cmlnZ2VyZWQgd2l0aDonLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJBdXRoOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuaWQgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5yb2xlID0gbnVsbDtcclxuICAgICAgc3RhdGUubW9uZ29JZCA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0QXV0aCwgY2xlYXJBdXRoIH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFTyxJQUFBLEFBQUssa0NBQUE7Ozs7O1dBQUE7O0FBZVosTUFBTSxlQUEwQjtJQUM5QixJQUFJO0lBQ0osU0FBUztJQUNULE1BQU07QUFDUjtBQUVBLE1BQU0sWUFBWSxDQUFBLEdBQUEsOExBQUEsQ0FBQSxjQUFXLEFBQUQsRUFBRTtJQUM1QixNQUFNO0lBQ047SUFDQSxVQUFVO1FBQ1IsU0FBUyxDQUNQLE9BQ0E7WUFFQSxNQUFNLEVBQUUsR0FBRyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLE1BQU0sT0FBTyxHQUFHLE9BQU8sT0FBTyxDQUFDLE9BQU87WUFDdEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxPQUFPLENBQUMsSUFBSTtZQUNoQyxRQUFRLEdBQUcsQ0FBQyw2QkFBNkIsT0FBTyxPQUFPO1FBQ3pEO1FBQ0EsV0FBVyxDQUFDO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLElBQUksR0FBRztZQUNiLE1BQU0sT0FBTyxHQUFHO1FBQ2xCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsVUFBVSxPQUFPO3VDQUN4QyxVQUFVLE9BQU8iLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDU1LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7XHJcbiAgQmFzZVF1ZXJ5Rm4sXHJcbiAgRmV0Y2hBcmdzLFxyXG4gIEZldGNoQmFzZVF1ZXJ5RXJyb3IsXHJcbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeSc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcclxuaW1wb3J0IHsgY2xlYXJBdXRoIH0gZnJvbSAnQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyA9IChcclxuICBiYXNlVXJsOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpJ1xyXG4pOiBCYXNlUXVlcnlGbjxzdHJpbmcgfCBGZXRjaEFyZ3MsIHVua25vd24sIEZldGNoQmFzZVF1ZXJ5RXJyb3I+ID0+IHtcclxuICBjb25zdCByYXdCYXNlUXVlcnkgPSBmZXRjaEJhc2VRdWVyeSh7XHJcbiAgICBiYXNlVXJsLFxyXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFzeW5jIChhcmdzLCBhcGksIGV4dHJhT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmF3QmFzZVF1ZXJ5KGFyZ3MsIGFwaSwgZXh0cmFPcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCBzdXBwcmVzczQwMSA9IHR5cGVvZiBhcmdzID09PSAnb2JqZWN0JyAmJiAnc3VwcHJlc3M0MDEnIGluIGFyZ3MgJiYgYXJncy5zdXBwcmVzczQwMTtcclxuXHJcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3VsdC5lcnJvci5zdGF0dXM7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICAgIChyZXN1bHQuZXJyb3IuZGF0YSBhcyBhbnkpPy5tZXNzYWdlIHx8XHJcbiAgICAgICAgKHR5cGVvZiByZXN1bHQuZXJyb3IuZXJyb3IgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IHJlc3VsdC5lcnJvci5lcnJvclxyXG4gICAgICAgICAgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDQwMSAmJiAhc3VwcHJlc3M0MDEpIHtcclxuICAgICAgICAgIGFwaS5kaXNwYXRjaChjbGVhckF1dGgoKSk7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignU2Vzc2lvbiBleHBpcmVkLiBQbGVhc2UgbG9nIGluIGFnYWluLicpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm90ZWN0ZWQtcmVkaXJlY3QnO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvci5zdGF0dXMgPT09ICdQQVJTSU5HX0VSUk9SJykge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgaW52YWxpZCBKU09OIChsaWtlbHkgSFRNTCk6JywgcmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKCdVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZSAoaW52YWxpZCBKU09OKS4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFzdXBwcmVzczQwMSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FQSSBFcnJvciAke3N0YXR1c31dYCwgbWVzc2FnZSk7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFVb0I7QUFWcEI7QUFNQTtBQUNBOzs7O0FBRU8sTUFBTSw2QkFBNkI7UUFDeEMsMkVBQWtCLGlFQUFtQztJQUVyRCxNQUFNLGVBQWUsQ0FBQSxHQUFBLG1MQUFBLENBQUEsaUJBQWMsQUFBRCxFQUFFO1FBQ2xDO1FBQ0EsYUFBYTtJQUNmO0lBRUEsT0FBTyxPQUFPLE1BQU0sS0FBSztRQUN2QixNQUFNLFNBQVMsTUFBTSxhQUFhLE1BQU0sS0FBSztRQUU3QyxNQUFNLGNBQWMsT0FBTyxTQUFTLFlBQVksaUJBQWlCLFFBQVEsS0FBSyxXQUFXO1FBRXpGLElBQUksT0FBTyxLQUFLLEVBQUU7Z0JBR2Q7WUFGRixNQUFNLFNBQVMsT0FBTyxLQUFLLENBQUMsTUFBTTtZQUNsQyxNQUFNLFVBQ0osRUFBQSxRQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksY0FBbEIsNEJBQUEsTUFBNEIsT0FBTyxLQUNuQyxDQUFDLE9BQU8sT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFdBQzNCLE9BQU8sS0FBSyxDQUFDLEtBQUssR0FDbEIsc0JBQXNCO1lBRTVCLHdDQUFtQztnQkFDakMsSUFBSSxXQUFXLE9BQU8sQ0FBQyxhQUFhO29CQUNsQyxJQUFJLFFBQVEsQ0FBQyxDQUFBLEdBQUEsc0lBQUEsQ0FBQSxZQUFTLEFBQUQ7b0JBQ3JCLDJJQUFBLENBQUEsUUFBSyxDQUFDLEtBQUssQ0FBQztvQkFDWixXQUFXO3dCQUNULE9BQU8sUUFBUSxDQUFDLElBQUksR0FBRztvQkFDekIsR0FBRztnQkFDTCxPQUFPLElBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLGlCQUFpQjtvQkFDbEQsUUFBUSxLQUFLLENBQUMsd0NBQXdDLE9BQU8sS0FBSztvQkFDbEUsMklBQUEsQ0FBQSxRQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWE7b0JBQ3ZCLFFBQVEsS0FBSyxDQUFDLEFBQUMsY0FBb0IsT0FBUCxRQUFPLE1BQUk7b0JBQ3ZDLDJJQUFBLENBQUEsUUFBSyxDQUFDLEtBQUssQ0FBQztnQkFDZDtZQUNGO1FBQ0Y7UUFFQSxPQUFPO0lBQ1Q7QUFDRiIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTA2LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NlcnZpY2VzL2F1dGhBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcbmltcG9ydCB7IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nIH0gZnJvbSAnQC9saWIvYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnYXV0aEFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyhcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkxfQVVUSCB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xyXG4gICksXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGdldE1lOiBidWlsZGVyLnF1ZXJ5PHsgcm9sZTogc3RyaW5nOyBpZDogc3RyaW5nIH0sIHZvaWQ+KHtcclxuICAgICAgcXVlcnk6ICgpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2F1dGgnLFxyXG4gICAgICAgIHN1cHByZXNzNDAxOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIGxvZ2luOiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICB7XHJcbiAgICAgICAgcm9sZTogc3RyaW5nO1xyXG4gICAgICAgIGRhdGE6IHsgaWQ6IHN0cmluZzsgX2lkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9O1xyXG4gICAgICB9LFxyXG4gICAgICB7IGlkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoY3JlZGVudGlhbHMpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGNyZWRlbnRpYWxzLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIGxvZ291dDogYnVpbGRlci5tdXRhdGlvbjx2b2lkLCB2b2lkPih7XHJcbiAgICAgIHF1ZXJ5OiAoKSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9hdXRoL2xvZ291dCcsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0TWVRdWVyeSwgdXNlTG9naW5NdXRhdGlvbiwgdXNlTG9nb3V0TXV0YXRpb24gfSA9IGF1dGhBcGk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNSTtBQU5KO0FBQ0E7OztBQUVPLE1BQU0sVUFBVSxDQUFBLEdBQUEscU5BQUEsQ0FBQSxZQUFTLEFBQUQsRUFBRTtJQUMvQixhQUFhO0lBQ2IsV0FBVyxDQUFBLEdBQUEsMklBQUEsQ0FBQSw2QkFBMEIsQUFBRCxFQUNsQyxnS0FBQSxDQUFBLFVBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLElBQUk7SUFFMUMsV0FBVyxDQUFDLFVBQVksQ0FBQztZQUN2QixPQUFPLFFBQVEsS0FBSyxDQUFxQztnQkFDdkQsT0FBTyxJQUFNLENBQUM7d0JBQ1osS0FBSzt3QkFDTCxhQUFhO29CQUNmLENBQUM7WUFDSDtZQUVBLE9BQU8sUUFBUSxRQUFRLENBTXJCO2dCQUNBLE9BQU8sQ0FBQyxjQUFnQixDQUFDO3dCQUN2QixLQUFLO3dCQUNMLFFBQVE7d0JBQ1IsTUFBTTtvQkFDUixDQUFDO1lBQ0g7WUFFQSxRQUFRLFFBQVEsUUFBUSxDQUFhO2dCQUNuQyxPQUFPLElBQU0sQ0FBQzt3QkFDWixLQUFLO3dCQUNMLFFBQVE7b0JBQ1YsQ0FBQztZQUNIO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNTIsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvc3R1ZGVudEFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0J1xyXG5pbXBvcnQgdHlwZSB7IFN0dWRlbnQsIFBhZ2luYXRlZFN0dWRlbnRzUmVzcG9uc2UsIEdyYWRlLCBBc3NpZ25tZW50LCBDYWxlbmRhciBhcyBjYWxlbmRhciwgU3R1ZGVudEFwaVJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvc3R1ZGVudCdcclxuaW1wb3J0IHsgYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcgfSBmcm9tICdAL2xpYi9iYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uL3R5cGVzL2NvdXJzZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnc3R1ZGVudEFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ1N0dWRlbnQnXSxcclxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xyXG4gICAgLy8gQ3JlYXRlXHJcbiAgICBjcmVhdGVTdHVkZW50OiBidWlsZGVyLm11dGF0aW9uPFN0dWRlbnQsIFBhcnRpYWw8U3R1ZGVudD4+KHtcclxuICAgICAgcXVlcnk6IChuZXdTdHVkZW50RGF0YSkgPT4gKHtcclxuICAgICAgICB1cmw6ICdhZG1pbi9zdHVkZW50JyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBuZXdTdHVkZW50RGF0YSxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydTdHVkZW50J10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHZXQgQWxsIChwYWdpbmF0ZWQpXHJcbiAgICBnZXRTdHVkZW50c1BhZ2U6IGJ1aWxkZXIucXVlcnk8UGFnaW5hdGVkU3R1ZGVudHNSZXNwb25zZSwgeyBwYWdlPzogbnVtYmVyOyBsaW1pdD86IG51bWJlciB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyBwYWdlID0gMSwgbGltaXQgPSAyMCB9KSA9PlxyXG4gICAgICAgIGAvc3R1ZGVudHM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZTogU3R1ZGVudEFwaVJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnU3R1ZGVudCddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IFVuaXZlcnNpdHkgU3R1ZGVudHMgKHBhZ2luYXRlZClcclxuICAgIGdldFN0dWRlbnRzUGFnZU9mVW5pdmVyc2l0eTogYnVpbGRlci5xdWVyeTxTdHVkZW50W10sIHsgdW5pdmVyc2l0eUlkOiBzdHJpbmc7IHBhZ2U/OiBudW1iZXI7IGxpbWl0PzogbnVtYmVyIH0+KHtcclxuICAgICAgcXVlcnk6ICh7IHVuaXZlcnNpdHlJZCwgcGFnZSA9IDEsIGxpbWl0ID0gNDAgfSkgPT5cclxuICAgICAgICBgL3N0dWRlbnRzL3VuaXZlcnNpdHkvJHt1bml2ZXJzaXR5SWR9P3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWAsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogWydTdHVkZW50J10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHZXQgVW5pdmVyc2l0eSBTdHVkZW50cyAoYWxsKVxyXG4gICAgZ2V0QWxsU3R1ZGVudHNPZlVuaXZlcnNpdHk6IGJ1aWxkZXIucXVlcnk8U3R1ZGVudFtdLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6ICh1bml2ZXJzaXR5SWQpID0+IGAvc3R1ZGVudHMvdW5pdmVyc2l0eS8ke3VuaXZlcnNpdHlJZH1gLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnU3R1ZGVudCddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IE9uZVxyXG4gICAgZ2V0U3R1ZGVudEJ5SWQ6IGJ1aWxkZXIucXVlcnk8U3R1ZGVudCwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvc3R1ZGVudHMvJHtpZH1gLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnU3R1ZGVudCddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gVXBkYXRlXHJcbiAgICB1cGRhdGVTdHVkZW50OiBidWlsZGVyLm11dGF0aW9uPFN0dWRlbnQsIFBhcnRpYWw8U3R1ZGVudD4gJiB7IF9pZDogc3RyaW5nIH0+KHtcclxuICAgICAgcXVlcnk6ICh7IF9pZCwgLi4udXBkYXRlcyB9KSA9PiAoe1xyXG4gICAgICAgIHVybDogYGFkbWluL3N0dWRlbnQvJHtfaWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgYm9keTogdXBkYXRlcyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydTdHVkZW50J10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBEZWxldGVcclxuICAgIGRlbGV0ZVN0dWRlbnQ6IGJ1aWxkZXIubXV0YXRpb248eyBtZXNzYWdlOiBzdHJpbmcgfSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL3N0dWRlbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB9KSxcclxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbJ1N0dWRlbnQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdldCBzdHVkZW50IGNvdXJzZXNcclxuICAgIGdldFN0dWRlbnRDb3Vyc2VzOiBidWlsZGVyLnF1ZXJ5PHsgY291cnNlczogQ291cnNlW10gfSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvc3R1ZGVudHMvJHtpZH0vY291cnNlc2AsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHZXQgc3BlY2lmaWMgY291cnNlIHdpdGggdGVhY2hlcnMgcG9wdWxhdGVkXHJcbiAgICBnZXRTdHVkZW50Q291cnNlQnlJZDogYnVpbGRlci5xdWVyeTx7IGNvdXJzZTogUGFydGlhbDxDb3Vyc2U+IH0sIHsgaWQ6IHN0cmluZzsgY291cnNlSWQ6IHN0cmluZyB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyBpZCwgY291cnNlSWQgfSkgPT4gYC9zdHVkZW50cy8ke2lkfS9jb3Vyc2VzLyR7Y291cnNlSWR9YCxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdldCBzdHVkZW50IGdyYWRlc1xyXG4gICAgZ2V0U3R1ZGVudEdyYWRlczogYnVpbGRlci5xdWVyeTx7IGdyYWRlczogR3JhZGVbXSB9LCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChpZCkgPT4gYC9zdHVkZW50cy8ke2lkfS9ncmFkZXNgLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IHN0dWRlbnQgYXNzaWdubWVudHNcclxuICAgIGdldFN0dWRlbnRBc3NpZ25tZW50czogYnVpbGRlci5xdWVyeTx7IGFzc2lnbm1lbnRzOiBBc3NpZ25tZW50W10gfSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvc3R1ZGVudHMvJHtpZH0vYXNzaWdubWVudHNgLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gR2V0IHN0dWRlbnQgY2FsZW5kYXJcclxuICAgIGdldFN0dWRlbnRDYWxlbmRhcjogYnVpbGRlci5xdWVyeTx7IGNhbGVuZGFyOiBjYWxlbmRhcltdIH0sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiBgL3N0dWRlbnRzLyR7aWR9L2NhbGVuZGFyYCxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICB1c2VDcmVhdGVTdHVkZW50TXV0YXRpb24sXHJcbiAgdXNlR2V0U3R1ZGVudHNQYWdlUXVlcnksXHJcbiAgdXNlR2V0U3R1ZGVudHNQYWdlT2ZVbml2ZXJzaXR5UXVlcnksXHJcbiAgdXNlR2V0QWxsU3R1ZGVudHNPZlVuaXZlcnNpdHlRdWVyeSxcclxuICB1c2VHZXRTdHVkZW50QnlJZFF1ZXJ5LFxyXG4gIHVzZVVwZGF0ZVN0dWRlbnRNdXRhdGlvbixcclxuICB1c2VEZWxldGVTdHVkZW50TXV0YXRpb24sXHJcbiAgdXNlR2V0U3R1ZGVudENvdXJzZXNRdWVyeSxcclxuICB1c2VHZXRTdHVkZW50Q291cnNlQnlJZFF1ZXJ5LFxyXG4gIHVzZUdldFN0dWRlbnRHcmFkZXNRdWVyeSxcclxuICB1c2VHZXRTdHVkZW50QXNzaWdubWVudHNRdWVyeSxcclxuICB1c2VHZXRTdHVkZW50Q2FsZW5kYXJRdWVyeSxcclxufSA9IHN0dWRlbnRBcGlcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUdPLE1BQU0sYUFBYSxDQUFBLEdBQUEscU5BQUEsQ0FBQSxZQUFTLEFBQUQsRUFBRTtJQUNsQyxhQUFhO0lBQ2IsV0FBVyxDQUFBLEdBQUEsMklBQUEsQ0FBQSw2QkFBMEIsQUFBRDtJQUNwQyxVQUFVO1FBQUM7S0FBVTtJQUNyQixXQUFXLENBQUMsVUFBWSxDQUFDO1lBQ3ZCLFNBQVM7WUFDVCxlQUFlLFFBQVEsUUFBUSxDQUE0QjtnQkFDekQsT0FBTyxDQUFDLGlCQUFtQixDQUFDO3dCQUMxQixLQUFLO3dCQUNMLFFBQVE7d0JBQ1IsTUFBTTtvQkFDUixDQUFDO2dCQUNELGlCQUFpQjtvQkFBQztpQkFBVTtZQUM5QjtZQUVBLHNCQUFzQjtZQUN0QixpQkFBaUIsUUFBUSxLQUFLLENBQStEO2dCQUMzRixPQUFPO3dCQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQzlCLEFBQUMsa0JBQStCLE9BQWQsTUFBSyxXQUFlLE9BQU47O2dCQUNsQyxtQkFBbUIsQ0FBQyxXQUFpQyxTQUFTLElBQUk7Z0JBQ2xFLGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7WUFFQSxzQ0FBc0M7WUFDdEMsNkJBQTZCLFFBQVEsS0FBSyxDQUFxRTtnQkFDN0csT0FBTzt3QkFBQyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTsyQkFDNUMsQUFBQyx3QkFBNEMsT0FBckIsY0FBYSxVQUFzQixPQUFkLE1BQUssV0FBZSxPQUFOOztnQkFDN0QsY0FBYztvQkFBQztpQkFBVTtZQUMzQjtZQUVBLGdDQUFnQztZQUNoQyw0QkFBNEIsUUFBUSxLQUFLLENBQW9CO2dCQUMzRCxPQUFPLENBQUMsZUFBaUIsQUFBQyx3QkFBb0MsT0FBYjtnQkFDakQsY0FBYztvQkFBQztpQkFBVTtZQUMzQjtZQUVBLFVBQVU7WUFDVixnQkFBZ0IsUUFBUSxLQUFLLENBQWtCO2dCQUM3QyxPQUFPLENBQUMsS0FBTyxBQUFDLGFBQWUsT0FBSDtnQkFDNUIsY0FBYztvQkFBQztpQkFBVTtZQUMzQjtZQUVBLFNBQVM7WUFDVCxlQUFlLFFBQVEsUUFBUSxDQUE4QztnQkFDM0UsT0FBTzt3QkFBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVM7MkJBQU07d0JBQy9CLEtBQUssQUFBQyxpQkFBb0IsT0FBSjt3QkFDdEIsUUFBUTt3QkFDUixNQUFNO29CQUNSOztnQkFDQSxpQkFBaUI7b0JBQUM7aUJBQVU7WUFDOUI7WUFFQSxTQUFTO1lBQ1QsZUFBZSxRQUFRLFFBQVEsQ0FBOEI7Z0JBQzNELE9BQU8sQ0FBQyxLQUFPLENBQUM7d0JBQ2QsS0FBSyxBQUFDLGFBQWUsT0FBSDt3QkFDbEIsUUFBUTtvQkFDVixDQUFDO2dCQUNELGlCQUFpQjtvQkFBQztpQkFBVTtZQUM5QjtZQUVBLHNCQUFzQjtZQUN0QixtQkFBbUIsUUFBUSxLQUFLLENBQWdDO2dCQUM5RCxPQUFPLENBQUMsS0FBTyxBQUFDLGFBQWUsT0FBSCxJQUFHO1lBQ2pDO1lBRUEsOENBQThDO1lBQzlDLHNCQUFzQixRQUFRLEtBQUssQ0FBZ0U7Z0JBQ2pHLE9BQU87d0JBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFOzJCQUFLLEFBQUMsYUFBMEIsT0FBZCxJQUFHLGFBQW9CLE9BQVQ7O1lBQzFEO1lBRUEscUJBQXFCO1lBQ3JCLGtCQUFrQixRQUFRLEtBQUssQ0FBOEI7Z0JBQzNELE9BQU8sQ0FBQyxLQUFPLEFBQUMsYUFBZSxPQUFILElBQUc7WUFDakM7WUFFQSwwQkFBMEI7WUFDMUIsdUJBQXVCLFFBQVEsS0FBSyxDQUF3QztnQkFDMUUsT0FBTyxDQUFDLEtBQU8sQUFBQyxhQUFlLE9BQUgsSUFBRztZQUNqQztZQUVBLHVCQUF1QjtZQUN2QixvQkFBb0IsUUFBUSxLQUFLLENBQW1DO2dCQUNsRSxPQUFPLENBQUMsS0FBTyxBQUFDLGFBQWUsT0FBSCxJQUFHO1lBQ2pDO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUNYLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsbUNBQW1DLEVBQ25DLGtDQUFrQyxFQUNsQyxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDekIsNEJBQTRCLEVBQzVCLHdCQUF3QixFQUN4Qiw2QkFBNkIsRUFDN0IsMEJBQTBCLEVBQzNCLEdBQUciLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDI4MywgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9zdG9yZS9zZXJ2aWNlcy9hZG1pbkFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgQWRtaW4sIEFkbWluQXBpUmVzcG9uc2UsIFBhZ2luYXRlZEFkbWluc1Jlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvYWRtaW4nO1xyXG5pbXBvcnQgeyBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyB9IGZyb20gJ0AvbGliL2Jhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZG1pbkFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6ICdhZG1pbkFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ0FkbWluJ10sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGdldEFkbWluQnlJZDogYnVpbGRlci5xdWVyeTxBZG1pbiwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvYWRtaW4vJHtpZH1gLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBpZCkgPT4gW3sgdHlwZTogJ0FkbWluJywgaWQgfV0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBnZXRQYWdlT2ZBZG1pbnM6IGJ1aWxkZXIucXVlcnk8UGFnaW5hdGVkQWRtaW5zUmVzcG9uc2UsIHsgcGFnZT86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgcGFnZSA9IDEsIGxpbWl0ID0gNDAgfSkgPT4gYC9hZG1pbj9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBBZG1pbkFwaVJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnQWRtaW4nXSxcclxuICAgIH0pLFxyXG5cclxuXHJcbiAgICBjcmVhdGVBZG1pbjogYnVpbGRlci5tdXRhdGlvbjxBZG1pbiwgeyBuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfT4oe1xyXG4gICAgICBxdWVyeTogKGFkbWluKSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9hZG1pbicsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogYWRtaW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnQWRtaW4nXSxcclxuICAgIH0pLFxyXG5cclxuICAgIHVwZGF0ZUFkbWluOiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICBBZG1pbixcclxuICAgICAgeyBpZDogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyBwYXNzd29yZD86IHN0cmluZyB9XHJcbiAgICA+KHtcclxuICAgICAgcXVlcnk6ICh1cGRhdGVEYXRhKSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9hZG1pbicsXHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBib2R5OiB1cGRhdGVEYXRhLFxyXG4gICAgICB9KSxcclxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgeyBpZCB9KSA9PiBbeyB0eXBlOiAnQWRtaW4nLCBpZCB9XSxcclxuICAgIH0pLFxyXG5cclxuICAgIGRlbGV0ZUFkbWluOiBidWlsZGVyLm11dGF0aW9uPHsgbWVzc2FnZTogc3RyaW5nIH0sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKGlkKSA9PiAoe1xyXG4gICAgICAgIHVybDogYC9hZG1pbi9hZG1pbi8ke2lkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogKHJlc3VsdCwgZXJyb3IsIGlkKSA9PiBbeyB0eXBlOiAnQWRtaW4nLCBpZCB9XSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlR2V0QWRtaW5CeUlkUXVlcnksXHJcbiAgdXNlR2V0UGFnZU9mQWRtaW5zUXVlcnksXHJcbiAgdXNlQ3JlYXRlQWRtaW5NdXRhdGlvbixcclxuICB1c2VVcGRhdGVBZG1pbk11dGF0aW9uLFxyXG4gIHVzZURlbGV0ZUFkbWluTXV0YXRpb24sXHJcbn0gPSBhZG1pbkFwaTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7O0FBRU8sTUFBTSxXQUFXLENBQUEsR0FBQSxxTkFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO0lBQ2hDLGFBQWE7SUFDYixXQUFXLENBQUEsR0FBQSwySUFBQSxDQUFBLDZCQUEwQixBQUFEO0lBQ3BDLFVBQVU7UUFBQztLQUFRO0lBQ25CLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFDdkIsY0FBYyxRQUFRLEtBQUssQ0FBZ0I7Z0JBQ3pDLE9BQU8sQ0FBQyxLQUFPLEFBQUMsVUFBWSxPQUFIO2dCQUN6QixjQUFjLENBQUMsUUFBUSxPQUFPLEtBQU87d0JBQUM7NEJBQUUsTUFBTTs0QkFBUzt3QkFBRztxQkFBRTtZQUM5RDtZQUVBLGlCQUFpQixRQUFRLEtBQUssQ0FBNkQ7Z0JBQ3pGLE9BQU87d0JBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTsyQkFBSyxBQUFDLGVBQTRCLE9BQWQsTUFBSyxXQUFlLE9BQU47O2dCQUNsRSxtQkFBbUIsQ0FBQyxXQUErQixTQUFTLElBQUk7Z0JBQ2hFLGNBQWM7b0JBQUM7aUJBQVE7WUFDekI7WUFHQSxhQUFhLFFBQVEsUUFBUSxDQUE0QztnQkFDdkUsT0FBTyxDQUFDLFFBQVUsQ0FBQzt3QkFDakIsS0FBSzt3QkFDTCxRQUFRO3dCQUNSLE1BQU07b0JBQ1IsQ0FBQztnQkFDRCxpQkFBaUI7b0JBQUM7aUJBQVE7WUFDNUI7WUFFQSxhQUFhLFFBQVEsUUFBUSxDQUczQjtnQkFDQSxPQUFPLENBQUMsYUFBZSxDQUFDO3dCQUN0QixLQUFLO3dCQUNMLFFBQVE7d0JBQ1IsTUFBTTtvQkFDUixDQUFDO2dCQUNELGlCQUFpQixDQUFDLFFBQVE7d0JBQU8sRUFBRSxFQUFFLEVBQUU7MkJBQUs7d0JBQUM7NEJBQUUsTUFBTTs0QkFBUzt3QkFBRztxQkFBRTs7WUFDckU7WUFFQSxhQUFhLFFBQVEsUUFBUSxDQUE4QjtnQkFDekQsT0FBTyxDQUFDLEtBQU8sQ0FBQzt3QkFDZCxLQUFLLEFBQUMsZ0JBQWtCLE9BQUg7d0JBQ3JCLFFBQVE7b0JBQ1YsQ0FBQztnQkFDRCxpQkFBaUIsQ0FBQyxRQUFRLE9BQU8sS0FBTzt3QkFBQzs0QkFBRSxNQUFNOzRCQUFTO3dCQUFHO3FCQUFFO1lBQ2pFO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUNYLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdkIsR0FBRyIsImRlYnVnSWQiOm51bGx9fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzcxLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsiZmlsZTovLy9EOi9Eb2N1bWVudHMvTmV3JTIwZm9sZGVyL1Rhc2stRmxvdy9jbGllbnQvc3JjL3N0b3JlL3NlcnZpY2VzL2NvbGxlZ2VBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcbmltcG9ydCB7IENvbGxlZ2UsIENvbGxlZ2VBcGlSZXNwb25zZSwgUGFnaW5hdGVkQ29sbGVnZXNSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2NvbGxlZ2UnO1xyXG5pbXBvcnQgeyBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyB9IGZyb20gJ0AvbGliL2Jhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29sbGVnZUFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6ICdjb2xsZWdlQXBpJyxcclxuICBiYXNlUXVlcnk6IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nKCksXHJcbiAgdGFnVHlwZXM6IFsnQ29sbGVnZSddLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICAvLyBHRVQgL2NvbGxlZ2VzL3VuaXZlcnNpdHlJZD9wYWdlPTEmbGltaXQ9NDBcclxuICAgIGdldENvbGxlZ2VzUGFnZTogYnVpbGRlci5xdWVyeTxQYWdpbmF0ZWRDb2xsZWdlc1Jlc3BvbnNlLCB7IHVuaXZlcnNpdHlJZDogc3RyaW5nOyBwYWdlPzogbnVtYmVyOyBsaW1pdD86IG51bWJlciB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyB1bml2ZXJzaXR5SWQsIHBhZ2UgPSAxLCBsaW1pdCA9IDQwIH0pID0+XHJcbiAgICAgIGAvdW5pdmVyc2l0aWVzLyR7dW5pdmVyc2l0eUlkfS9jb2xsZWdlcz9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBDb2xsZWdlQXBpUmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogWydDb2xsZWdlJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHRVQgL2NvbGxlZ2VzL3VuaXZlcnNpdHlJZC9jb2xsZWdlSWRcclxuICAgIGdldENvbGxlZ2VCeUlkOiBidWlsZGVyLnF1ZXJ5PENvbGxlZ2UsIHsgdW5pdmVyc2l0eUlkOiBzdHJpbmc7IGNvbGxlZ2VJZDogc3RyaW5nIH0+KHtcclxuICAgICAgcXVlcnk6ICh7IHVuaXZlcnNpdHlJZCwgY29sbGVnZUlkIH0pID0+XHJcbiAgICAgICAgYC9jb2xsZWdlcy8ke3VuaXZlcnNpdHlJZH0vJHtjb2xsZWdlSWR9YCxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIFBPU1QgL2NvbGxlZ2VzXHJcbiAgICBjcmVhdGVDb2xsZWdlOiBidWlsZGVyLm11dGF0aW9uPENvbGxlZ2UsIFBhcnRpYWw8Q29sbGVnZT4+KHtcclxuICAgICAgcXVlcnk6IChib2R5KSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9jb2xsZWdlcycsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBQQVRDSCAvY29sbGVnZXNcclxuICAgIHVwZGF0ZUNvbGxlZ2U6IGJ1aWxkZXIubXV0YXRpb248Q29sbGVnZSwgUGFydGlhbDxDb2xsZWdlPiAmIHsgaWQ6IHN0cmluZyB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAoeyBpZCwgLi4udXBkYXRlRGF0YSB9KSA9PiAoe1xyXG4gICAgICAgIHVybDogJy9jb2xsZWdlcycsXHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGJvZHk6IHsgaWQsIC4uLnVwZGF0ZURhdGEgfSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHVzZUdldENvbGxlZ2VzUGFnZVF1ZXJ5LFxyXG4gIHVzZUdldENvbGxlZ2VCeUlkUXVlcnksXHJcbiAgdXNlQ3JlYXRlQ29sbGVnZU11dGF0aW9uLFxyXG4gIHVzZVVwZGF0ZUNvbGxlZ2VNdXRhdGlvbixcclxufSA9IGNvbGxlZ2VBcGk7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFHTyxNQUFNLGFBQWEsQ0FBQSxHQUFBLHFOQUFBLENBQUEsWUFBUyxBQUFELEVBQUU7SUFDbEMsYUFBYTtJQUNiLFdBQVcsQ0FBQSxHQUFBLDJJQUFBLENBQUEsNkJBQTBCLEFBQUQ7SUFDcEMsVUFBVTtRQUFDO0tBQVU7SUFDckIsV0FBVyxDQUFDLFVBQVksQ0FBQztZQUN2Qiw2Q0FBNkM7WUFDN0MsaUJBQWlCLFFBQVEsS0FBSyxDQUFxRjtnQkFDakgsT0FBTzt3QkFBQyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTsyQkFDOUMsQUFBQyxpQkFBOEMsT0FBOUIsY0FBYSxtQkFBK0IsT0FBZCxNQUFLLFdBQWUsT0FBTjs7Z0JBQzdELG1CQUFtQixDQUFDLFdBQWlDLFNBQVMsSUFBSTtnQkFDbEUsY0FBYztvQkFBQztpQkFBVTtZQUMzQjtZQUVBLHVDQUF1QztZQUN2QyxnQkFBZ0IsUUFBUSxLQUFLLENBQXVEO2dCQUNsRixPQUFPO3dCQUFDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRTsyQkFDakMsQUFBQyxhQUE0QixPQUFoQixjQUFhLEtBQWEsT0FBVjs7WUFDakM7WUFFQSxpQkFBaUI7WUFDakIsZUFBZSxRQUFRLFFBQVEsQ0FBNEI7Z0JBQ3pELE9BQU8sQ0FBQyxPQUFTLENBQUM7d0JBQ2hCLEtBQUs7d0JBQ0wsUUFBUTt3QkFDUjtvQkFDRixDQUFDO1lBQ0g7WUFFQSxrQkFBa0I7WUFDbEIsZUFBZSxRQUFRLFFBQVEsQ0FBNkM7Z0JBQzFFLE9BQU87d0JBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxZQUFZOzJCQUFNO3dCQUNqQyxLQUFLO3dCQUNMLFFBQVE7d0JBQ1IsTUFBTTs0QkFBRTs0QkFBSSxHQUFHLFVBQVU7d0JBQUM7b0JBQzVCOztZQUNGO1FBQ0YsQ0FBQztBQUNIO0FBRU8sTUFBTSxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN6QixHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA0NDEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvZGVwYXJ0bWVudEFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgRGVwYXJ0bWVudCwgRGVwYXJ0bWVudEFwaVJlc3BvbnNlLCBQYWdpbmF0ZWREZXBhcnRtZW50c1Jlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvZGVwYXJ0bWVudCc7XHJcbmltcG9ydCB7IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nIH0gZnJvbSAnQC9saWIvYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlcGFydG1lbnRBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnZGVwYXJ0bWVudEFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ0RlcGFydG1lbnQnXSxcclxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xyXG4gICAgLy8gR0VUIC9kZXBhcnRtZW50cy86Y29sbGVnZUlkP3BhZ2U9MSZsaW1pdD00MFxyXG4gICAgZ2V0RGVwYXJ0bWVudHNQYWdlOiBidWlsZGVyLnF1ZXJ5PFxyXG4gICAgICBQYWdpbmF0ZWREZXBhcnRtZW50c1Jlc3BvbnNlLFxyXG4gICAgICB7IHVuaXZlcnNpdHlJZDogc3RyaW5nOyBjb2xsZWdlSWQ6IHN0cmluZzsgcGFnZT86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoeyB1bml2ZXJzaXR5SWQsIGNvbGxlZ2VJZCwgcGFnZSA9IDEsIGxpbWl0ID0gNDAgfSkgPT5cclxuICAgICAgICBgL3VuaXZlcnNpdGllcy8ke3VuaXZlcnNpdHlJZH0vY29sbGVnZXMvJHtjb2xsZWdlSWR9L2RlcGFydG1lbnRzP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWAsXHJcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IERlcGFydG1lbnRBcGlSZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbJ0RlcGFydG1lbnQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIEdFVCAvZGVwYXJ0bWVudHMvOmlkXHJcbiAgICBnZXREZXBhcnRtZW50QnlJZDogYnVpbGRlci5xdWVyeTxEZXBhcnRtZW50LCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChpZCkgPT4gYC9kZXBhcnRtZW50cy8ke2lkfWAsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBQT1NUIC9kZXBhcnRtZW50cy86dW5pdmVyc2l0eUlkLzpjb2xsZWdlSWRcclxuICAgIGNyZWF0ZURlcGFydG1lbnQ6IGJ1aWxkZXIubXV0YXRpb248XHJcbiAgICAgIERlcGFydG1lbnQsXHJcbiAgICAgIHtcclxuICAgICAgICB1bml2ZXJzaXR5SWQ6IHN0cmluZztcclxuICAgICAgICBjb2xsZWdlSWQ6IHN0cmluZztcclxuICAgICAgICBib2R5OiBPbWl0PERlcGFydG1lbnQsICdfaWQnIHwgJ2NvbGxlZ2VJZCcgfCAndW5pdmVyc2l0eUlkJz47XHJcbiAgICAgIH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHsgdW5pdmVyc2l0eUlkLCBjb2xsZWdlSWQsIGJvZHkgfSkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvZGVwYXJ0bWVudHMvJHt1bml2ZXJzaXR5SWR9LyR7Y29sbGVnZUlkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBQQVRDSCAvZGVwYXJ0bWVudHNcclxuICAgIHVwZGF0ZURlcGFydG1lbnQ6IGJ1aWxkZXIubXV0YXRpb248XHJcbiAgICAgIERlcGFydG1lbnQsXHJcbiAgICAgIFBhcnRpYWw8RGVwYXJ0bWVudD4gJiB7IGlkOiBzdHJpbmcgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoeyBpZCwgLi4ucmVzdCB9KSA9PiAoe1xyXG4gICAgICAgIHVybDogYC9kZXBhcnRtZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGJvZHk6IHsgaWQsIC4uLnJlc3QgfSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBERUxFVEUgL2RlcGFydG1lbnRzLzppZFxyXG4gICAgZGVsZXRlRGVwYXJ0bWVudDogYnVpbGRlci5tdXRhdGlvbjx7IG1lc3NhZ2U6IHN0cmluZyB9LCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChpZCkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvZGVwYXJ0bWVudHMvJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICB1c2VHZXREZXBhcnRtZW50c1BhZ2VRdWVyeSxcclxuICB1c2VHZXREZXBhcnRtZW50QnlJZFF1ZXJ5LFxyXG4gIHVzZUNyZWF0ZURlcGFydG1lbnRNdXRhdGlvbixcclxuICB1c2VVcGRhdGVEZXBhcnRtZW50TXV0YXRpb24sXHJcbiAgdXNlRGVsZXRlRGVwYXJ0bWVudE11dGF0aW9uLFxyXG59ID0gZGVwYXJ0bWVudEFwaTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7O0FBRU8sTUFBTSxnQkFBZ0IsQ0FBQSxHQUFBLHFOQUFBLENBQUEsWUFBUyxBQUFELEVBQUU7SUFDckMsYUFBYTtJQUNiLFdBQVcsQ0FBQSxHQUFBLDJJQUFBLENBQUEsNkJBQTBCLEFBQUQ7SUFDcEMsVUFBVTtRQUFDO0tBQWE7SUFDeEIsV0FBVyxDQUFDLFVBQVksQ0FBQztZQUN2Qiw4Q0FBOEM7WUFDOUMsb0JBQW9CLFFBQVEsS0FBSyxDQUcvQjtnQkFDQSxPQUFPO3dCQUFDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTsyQkFDdkQsQUFBQyxpQkFBeUMsT0FBekIsY0FBYSxjQUEwQyxPQUE5QixXQUFVLHNCQUFrQyxPQUFkLE1BQUssV0FBZSxPQUFOOztnQkFDeEYsbUJBQW1CLENBQUMsV0FBb0MsU0FBUyxJQUFJO2dCQUNyRSxjQUFjO29CQUFDO2lCQUFhO1lBQzlCO1lBRUEsdUJBQXVCO1lBQ3ZCLG1CQUFtQixRQUFRLEtBQUssQ0FBcUI7Z0JBQ25ELE9BQU8sQ0FBQyxLQUFPLEFBQUMsZ0JBQWtCLE9BQUg7WUFDakM7WUFFQSw2Q0FBNkM7WUFDN0Msa0JBQWtCLFFBQVEsUUFBUSxDQU9oQztnQkFDQSxPQUFPO3dCQUFDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7MkJBQU07d0JBQzdDLEtBQUssQUFBQyxnQkFBK0IsT0FBaEIsY0FBYSxLQUFhLE9BQVY7d0JBQ3JDLFFBQVE7d0JBQ1I7b0JBQ0Y7O1lBQ0Y7WUFFQSxxQkFBcUI7WUFDckIsa0JBQWtCLFFBQVEsUUFBUSxDQUdoQztnQkFDQSxPQUFPO3dCQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsTUFBTTsyQkFBTTt3QkFDM0IsS0FBTTt3QkFDTixRQUFRO3dCQUNSLE1BQU07NEJBQUU7NEJBQUksR0FBRyxJQUFJO3dCQUFDO29CQUN0Qjs7WUFDRjtZQUVBLDBCQUEwQjtZQUMxQixrQkFBa0IsUUFBUSxRQUFRLENBQThCO2dCQUM5RCxPQUFPLENBQUMsS0FBTyxDQUFDO3dCQUNkLEtBQUssQUFBQyxnQkFBa0IsT0FBSDt3QkFDckIsUUFBUTtvQkFDVixDQUFDO1lBQ0g7UUFDRixDQUFDO0FBQ0g7QUFFTyxNQUFNLEVBQ1gsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6QiwyQkFBMkIsRUFDM0IsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUM1QixHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1MTksICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvdGVhY2hlckFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgVGVhY2hlciwgUGFnaW5hdGVkVGVhY2hlcnNSZXNwb25zZSwgVGVhY2hlcnNBcGlSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL3RlYWNoZXInO1xyXG5pbXBvcnQgeyBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyB9IGZyb20gJ0AvbGliL2Jhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdGVhY2hlckFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6ICd0ZWFjaGVyQXBpJyxcclxuICBiYXNlUXVlcnk6IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nKCksXHJcbiAgdGFnVHlwZXM6IFsnVGVhY2hlciddLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICAvLyBHRVQgL3RlYWNoZXJzP3BhZ2U9MVxyXG4gICAgZ2V0VGVhY2hlcnNQYWdlOiBidWlsZGVyLnF1ZXJ5PFBhZ2luYXRlZFRlYWNoZXJzUmVzcG9uc2UsIHsgcGFnZT86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfT4oe1xyXG4gICAgICAgICAgcXVlcnk6ICh7IHBhZ2UgPSAxLCBsaW1pdCA9IDQwIH0pID0+XHJcbiAgICAgICAgICAgIGAvdGVhY2hlcnM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IFRlYWNoZXJzQXBpUmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICBwcm92aWRlc1RhZ3M6IFsnVGVhY2hlciddLFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgIC8vIEdFVCAvdGVhY2hlcnMvOnRlYWNoZXJJZFxyXG4gICAgZ2V0VGVhY2hlckJ5SWQ6IGJ1aWxkZXIucXVlcnk8VGVhY2hlciwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAodGVhY2hlcklkKSA9PiBgL3RlYWNoZXJzLyR7dGVhY2hlcklkfWAsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBQT1NUIC90ZWFjaGVyc1xyXG4gICAgY3JlYXRlVGVhY2hlcjogYnVpbGRlci5tdXRhdGlvbjxcclxuICAgICAgeyB0ZWFjaGVyOiBUZWFjaGVyOyBtZXNzYWdlOiBzdHJpbmcgfSxcclxuICAgICAgT21pdDxUZWFjaGVyLCAnX2lkJyB8ICdpZCcgfCAnY291cnNlcyc+ICYgeyBwYXNzd29yZDogc3RyaW5nOyBjb3Vyc2VzPzogc3RyaW5nW10gfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoYm9keSkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvdGVhY2hlcnNgLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUEFUQ0ggL3RlYWNoZXJzLzppZCAob3IgX2lkKVxyXG4gICAgdXBkYXRlVGVhY2hlcjogYnVpbGRlci5tdXRhdGlvbjxcclxuICAgICAgeyB0ZWFjaGVyOiBUZWFjaGVyOyBtZXNzYWdlOiBzdHJpbmcgfSxcclxuICAgICAgUGFydGlhbDxUZWFjaGVyPiAmIHsgcGFzc3dvcmQ/OiBzdHJpbmc7IGlkPzogc3RyaW5nOyBfaWQ/OiBzdHJpbmcgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoYm9keSkgPT4gKHtcclxuICAgICAgICB1cmw6IGJvZHkuaWQgPyBgL3RlYWNoZXJzLyR7Ym9keS5pZH1gIDogYC90ZWFjaGVyc2AsXHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gREVMRVRFIC90ZWFjaGVycy86aWQgb3Ige19pZH0gaW4gYm9keVxyXG4gICAgZGVsZXRlVGVhY2hlcjogYnVpbGRlci5tdXRhdGlvbjx7IG1lc3NhZ2U6IHN0cmluZyB9LCB7IGlkPzogc3RyaW5nOyBfaWQ/OiBzdHJpbmcgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgaWQsIF9pZCB9KSA9PiAoe1xyXG4gICAgICAgIHVybDogaWQgPyBgL3RlYWNoZXJzLyR7aWR9YCA6IGAvdGVhY2hlcnNgLFxyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgYm9keTogaWQgPyB1bmRlZmluZWQgOiB7IF9pZCB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlR2V0VGVhY2hlcnNQYWdlUXVlcnksXHJcbiAgdXNlR2V0VGVhY2hlckJ5SWRRdWVyeSxcclxuICB1c2VDcmVhdGVUZWFjaGVyTXV0YXRpb24sXHJcbiAgdXNlVXBkYXRlVGVhY2hlck11dGF0aW9uLFxyXG4gIHVzZURlbGV0ZVRlYWNoZXJNdXRhdGlvbixcclxufSA9IHRlYWNoZXJBcGk7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7O0FBR08sTUFBTSxhQUFhLENBQUEsR0FBQSxxTkFBQSxDQUFBLFlBQVMsQUFBRCxFQUFFO0lBQ2xDLGFBQWE7SUFDYixXQUFXLENBQUEsR0FBQSwySUFBQSxDQUFBLDZCQUEwQixBQUFEO0lBQ3BDLFVBQVU7UUFBQztLQUFVO0lBQ3JCLFdBQVcsQ0FBQyxVQUFZLENBQUM7WUFDdkIsdUJBQXVCO1lBQ3ZCLGlCQUFpQixRQUFRLEtBQUssQ0FBK0Q7Z0JBQ3ZGLE9BQU87d0JBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTsyQkFDOUIsQUFBQyxrQkFBK0IsT0FBZCxNQUFLLFdBQWUsT0FBTjs7Z0JBQ2xDLG1CQUFtQixDQUFDLFdBQWtDLFNBQVMsSUFBSTtnQkFDbkUsY0FBYztvQkFBQztpQkFBVTtZQUMzQjtZQUVKLDJCQUEyQjtZQUMzQixnQkFBZ0IsUUFBUSxLQUFLLENBQWtCO2dCQUM3QyxPQUFPLENBQUMsWUFBYyxBQUFDLGFBQXNCLE9BQVY7WUFDckM7WUFFQSxpQkFBaUI7WUFDakIsZUFBZSxRQUFRLFFBQVEsQ0FHN0I7Z0JBQ0EsT0FBTyxDQUFDLE9BQVMsQ0FBQzt3QkFDaEIsS0FBTTt3QkFDTixRQUFRO3dCQUNSO29CQUNGLENBQUM7WUFDSDtZQUVBLCtCQUErQjtZQUMvQixlQUFlLFFBQVEsUUFBUSxDQUc3QjtnQkFDQSxPQUFPLENBQUMsT0FBUyxDQUFDO3dCQUNoQixLQUFLLEtBQUssRUFBRSxHQUFHLEFBQUMsYUFBb0IsT0FBUixLQUFLLEVBQUUsSUFBTTt3QkFDekMsUUFBUTt3QkFDUjtvQkFDRixDQUFDO1lBQ0g7WUFFQSx3Q0FBd0M7WUFDeEMsZUFBZSxRQUFRLFFBQVEsQ0FBcUQ7Z0JBQ2xGLE9BQU87d0JBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFOzJCQUFNO3dCQUN2QixLQUFLLEtBQUssQUFBQyxhQUFlLE9BQUgsTUFBUTt3QkFDL0IsUUFBUTt3QkFDUixNQUFNLEtBQUssWUFBWTs0QkFBRTt3QkFBSTtvQkFDL0I7O1lBQ0Y7UUFDRixDQUFDO0FBQ0g7QUFFTyxNQUFNLEVBQ1gsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN6QixHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA1OTQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2VydmljZXMvY291cnNlQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnXHJcbmltcG9ydCB7IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nIH0gZnJvbSAnQC9saWIvYmFzZVF1ZXJ5V2l0aEVycm9ySGFuZGxpbmcnXHJcbmltcG9ydCB0eXBlIHsgQ291cnNlLCBQYWdpbmF0ZWRDb3Vyc2VzUmVzcG9uc2UsIEFwaVJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvY291cnNlcydcclxuXHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnY291cnNlQXBpJyxcclxuICBiYXNlUXVlcnk6IGJhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nKCksXHJcbiAgdGFnVHlwZXM6IFsnQ291cnNlJ10sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIFxyXG4gICAgZ2V0Q291cnNlc1BhZ2U6IGJ1aWxkZXIucXVlcnk8UGFnaW5hdGVkQ291cnNlc1Jlc3BvbnNlLCB7IGRlcGFydG1lbnRJZDogc3RyaW5nOyBjb2xsZWdlSWQ6IHN0cmluZzsgdW5pdmVyc2l0eUlkOnN0cmluZzsgcGFnZT86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfT4oe1xyXG4gICAgICBxdWVyeTogKHtkZXBhcnRtZW50SWQsIGNvbGxlZ2VJZCwgdW5pdmVyc2l0eUlkLCBwYWdlID0gMSwgbGltaXQgPSA0MCB9KSA9PlxyXG4gICAgICAgIGAvY291cnNlcz9kZXBhcnRtZW50SWQ9JHtkZXBhcnRtZW50SWR9JmNvbGxlZ2VJZD0ke2NvbGxlZ2VJZH0mdW5pdmVyc2l0eUlkPSR7dW5pdmVyc2l0eUlkfSZwYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlczogQXBpUmVzcG9uc2U8UGFnaW5hdGVkQ291cnNlc1Jlc3BvbnNlPikgPT4gcmVzLmRhdGEsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogWydDb3Vyc2UnXSxcclxuICAgIH0pLFxyXG5cclxuXHJcbiAgICBnZXRDb3Vyc2VCeUlkOiBidWlsZGVyLnF1ZXJ5PENvdXJzZSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoY291cnNlSWQpID0+IGAvY291cnNlcy8ke2NvdXJzZUlkfWAsXHJcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzOiBBcGlSZXNwb25zZTxDb3Vyc2U+KSA9PiByZXMuZGF0YSxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbJ0NvdXJzZSddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gQ3JlYXRlXHJcbiAgICBjcmVhdGVDb3Vyc2U6IGJ1aWxkZXIubXV0YXRpb248Q291cnNlLCBQYXJ0aWFsPENvdXJzZT4+KHtcclxuICAgICAgcXVlcnk6IChuZXdDb3Vyc2UpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2FkbWluL2NvdXJzZScsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogbmV3Q291cnNlLFxyXG4gICAgICB9KSxcclxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbJ0NvdXJzZSddLFxyXG4gICAgfSksXHJcblxyXG4gICAgdXBkYXRlQ291cnNlOiBidWlsZGVyLm11dGF0aW9uPENvdXJzZSwgeyBjb3Vyc2VJZDogc3RyaW5nOyB1cGRhdGVzOiBQYXJ0aWFsPENvdXJzZT4gfT4oe1xyXG4gICAgICBxdWVyeTogKHsgY291cnNlSWQsIHVwZGF0ZXMgfSkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvYWRtaW4vY291cnNlLyR7Y291cnNlSWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgYm9keTogdXBkYXRlcyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydDb3Vyc2UnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIGRlbGV0ZUNvdXJzZTogYnVpbGRlci5tdXRhdGlvbjx7IG1lc3NhZ2U6IHN0cmluZyB9LCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChjb3Vyc2VJZCkgPT4gKHtcclxuICAgICAgICB1cmw6IGAvY291cnNlcy8ke2NvdXJzZUlkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydDb3Vyc2UnXSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICB1c2VHZXRDb3Vyc2VzUGFnZVF1ZXJ5LFxyXG4gIHVzZUdldENvdXJzZUJ5SWRRdWVyeSxcclxuICB1c2VDcmVhdGVDb3Vyc2VNdXRhdGlvbixcclxuICB1c2VVcGRhdGVDb3Vyc2VNdXRhdGlvbixcclxuICB1c2VEZWxldGVDb3Vyc2VNdXRhdGlvbixcclxufSA9IGNvdXJzZUFwaVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHTyxNQUFNLFlBQVksQ0FBQSxHQUFBLHFOQUFBLENBQUEsWUFBUyxBQUFELEVBQUU7SUFDakMsYUFBYTtJQUNiLFdBQVcsQ0FBQSxHQUFBLDJJQUFBLENBQUEsNkJBQTBCLEFBQUQ7SUFDcEMsVUFBVTtRQUFDO0tBQVM7SUFDcEIsV0FBVyxDQUFDLFVBQVksQ0FBQztZQUV2QixnQkFBZ0IsUUFBUSxLQUFLLENBQTRIO2dCQUN2SixPQUFPO3dCQUFDLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7MkJBQ3BFLEFBQUMseUJBQWtELE9BQTFCLGNBQWEsZUFBdUMsT0FBMUIsV0FBVSxrQkFBcUMsT0FBckIsY0FBYSxVQUFzQixPQUFkLE1BQUssV0FBZSxPQUFOOztnQkFDbEgsbUJBQW1CLENBQUMsTUFBK0MsSUFBSSxJQUFJO2dCQUMzRSxjQUFjO29CQUFDO2lCQUFTO1lBQzFCO1lBR0EsZUFBZSxRQUFRLEtBQUssQ0FBaUI7Z0JBQzNDLE9BQU8sQ0FBQyxXQUFhLEFBQUMsWUFBb0IsT0FBVDtnQkFDakMsbUJBQW1CLENBQUMsTUFBNkIsSUFBSSxJQUFJO2dCQUN6RCxjQUFjO29CQUFDO2lCQUFTO1lBQzFCO1lBRUEsU0FBUztZQUNULGNBQWMsUUFBUSxRQUFRLENBQTBCO2dCQUN0RCxPQUFPLENBQUMsWUFBYyxDQUFDO3dCQUNyQixLQUFLO3dCQUNMLFFBQVE7d0JBQ1IsTUFBTTtvQkFDUixDQUFDO2dCQUNELGlCQUFpQjtvQkFBQztpQkFBUztZQUM3QjtZQUVBLGNBQWMsUUFBUSxRQUFRLENBQXlEO2dCQUNyRixPQUFPO3dCQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTsyQkFBTTt3QkFDakMsS0FBSyxBQUFDLGlCQUF5QixPQUFUO3dCQUN0QixRQUFRO3dCQUNSLE1BQU07b0JBQ1I7O2dCQUNBLGlCQUFpQjtvQkFBQztpQkFBUztZQUM3QjtZQUVBLGNBQWMsUUFBUSxRQUFRLENBQThCO2dCQUMxRCxPQUFPLENBQUMsV0FBYSxDQUFDO3dCQUNwQixLQUFLLEFBQUMsWUFBb0IsT0FBVDt3QkFDakIsUUFBUTtvQkFDVixDQUFDO2dCQUNELGlCQUFpQjtvQkFBQztpQkFBUztZQUM3QjtRQUNGLENBQUM7QUFDSDtBQUVPLE1BQU0sRUFDWCxzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3hCLEdBQUciLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDY3NSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9zdG9yZS9zZXJ2aWNlcy9zZWN0aW9uQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZyB9IGZyb20gJ0AvbGliL2Jhc2VRdWVyeVdpdGhFcnJvckhhbmRsaW5nJztcclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFBhZ2luYXRlZFNlY3Rpb25zUmVzcG9uc2UsXHJcbiAgU2VjdGlvbkFwaVJlc3BvbnNlLFxyXG59IGZyb20gJy4uL3R5cGVzL3NlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25BcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnc2VjdGlvbkFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoRXJyb3JIYW5kbGluZygpLFxyXG4gIHRhZ1R5cGVzOiBbJ1NlY3Rpb24nXSxcclxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xyXG4gICAgLy8gR0VUIC9hcGkvdW5pdmVyc2l0aWVzLzp1bml2ZXJzaXR5SWQvY29sbGVnZXMvOmNvbGxlZ2VJZC9kZXBhcnRtZW50cy86ZGVwYXJ0bWVudElkL3NlY3Rpb25zP3BhZ2U9MSZsaW1pdD00MCZjb3Vyc2U9eHh4XHJcbiAgICBnZXRTZWN0aW9uc1BhZ2U6IGJ1aWxkZXIucXVlcnk8XHJcbiAgICAgIFBhZ2luYXRlZFNlY3Rpb25zUmVzcG9uc2UsXHJcbiAgICAgIHtcclxuICAgICAgICB1bml2ZXJzaXR5SWQ6IHN0cmluZztcclxuICAgICAgICBjb2xsZWdlSWQ6IHN0cmluZztcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHN0cmluZztcclxuICAgICAgICBwYWdlPzogbnVtYmVyO1xyXG4gICAgICAgIGxpbWl0PzogbnVtYmVyO1xyXG4gICAgICAgIGNvdXJzZT86IHN0cmluZztcclxuICAgICAgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoe1xyXG4gICAgICAgIHVuaXZlcnNpdHlJZCxcclxuICAgICAgICBjb2xsZWdlSWQsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkLFxyXG4gICAgICAgIHBhZ2UgPSAxLFxyXG4gICAgICAgIGxpbWl0ID0gNDAsXHJcbiAgICAgICAgY291cnNlLFxyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgbGV0IGJhc2UgPSBgL2FkbWluL3VuaXZlcnNpdHkvJHt1bml2ZXJzaXR5SWR9L2NvbGxlZ2UvJHtjb2xsZWdlSWR9L2RlcGFydG1lbnQvJHtkZXBhcnRtZW50SWR9L3NlY3Rpb24/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcclxuICAgICAgICBpZiAoY291cnNlKSBiYXNlICs9IGAmY291cnNlPSR7Y291cnNlfWA7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IFNlY3Rpb25BcGlSZXNwb25zZSkgPT5cclxuICAgICAgICByZXNwb25zZS5kYXRhIGFzIFBhZ2luYXRlZFNlY3Rpb25zUmVzcG9uc2UsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogWydTZWN0aW9uJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBHRVQgL2FwaS9zZWN0aW9ucy86c2VjdGlvbklkXHJcbiAgICBnZXRTZWN0aW9uQnlJZDogYnVpbGRlci5xdWVyeTxTZWN0aW9uLCB7IHNlY3Rpb25JZDogc3RyaW5nIH0+KHtcclxuICAgICAgcXVlcnk6ICh7IHNlY3Rpb25JZCB9KSA9PiBgL3NlY3Rpb25zLyR7c2VjdGlvbklkfWAsXHJcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IFNlY3Rpb25BcGlSZXNwb25zZSkgPT5cclxuICAgICAgICByZXNwb25zZS5kYXRhIGFzIFNlY3Rpb24sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBQT1NUIC9hcGkvdW5pdmVyc2l0aWVzLzp1bml2ZXJzaXR5SWQvY29sbGVnZXMvOmNvbGxlZ2VJZC9kZXBhcnRtZW50cy86ZGVwYXJ0bWVudElkL3NlY3Rpb25zXHJcbiAgICBjcmVhdGVTZWN0aW9uOiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICBTZWN0aW9uLFxyXG4gICAgICB7XHJcbiAgICAgICAgdW5pdmVyc2l0eUlkOiBzdHJpbmc7XHJcbiAgICAgICAgY29sbGVnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgcGF5bG9hZDogUGFydGlhbDxTZWN0aW9uPjtcclxuICAgICAgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoeyB1bml2ZXJzaXR5SWQsIGNvbGxlZ2VJZCwgZGVwYXJ0bWVudElkLCBwYXlsb2FkIH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL2FkbWluL3VuaXZlcnNpdHkvJHt1bml2ZXJzaXR5SWR9L2NvbGxlZ2UvJHtjb2xsZWdlSWR9L2RlcGFydG1lbnQvJHtkZXBhcnRtZW50SWR9L3NlY3Rpb25gLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IHBheWxvYWQsXHJcbiAgICAgICAgXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFsnU2VjdGlvbiddLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gUEFUQ0ggL2FwaS9zZWN0aW9ucy86c2VjdGlvbklkXHJcbiAgICB1cGRhdGVTZWN0aW9uOiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICBTZWN0aW9uLFxyXG4gICAgICB7IHNlY3Rpb25JZDogc3RyaW5nOyB1cGRhdGVzOiBQYXJ0aWFsPFNlY3Rpb24+IH1cclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHsgc2VjdGlvbklkLCB1cGRhdGVzIH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiBgL2FkbWluL3NlY3Rpb24vJHtzZWN0aW9uSWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgYm9keTogdXBkYXRlcyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydTZWN0aW9uJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBERUxFVEUgL2FwaS9zZWN0aW9ucy86c2VjdGlvbklkXHJcbiAgICBkZWxldGVTZWN0aW9uOiBidWlsZGVyLm11dGF0aW9uPFxyXG4gICAgICB7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9LFxyXG4gICAgICBzdHJpbmdcclxuICAgID4oe1xyXG4gICAgICBxdWVyeTogKHNlY3Rpb25JZCkgPT4gKHtcclxuICAgICAgICB1cmw6IGBhZG1pbi9zZWN0aW9uLyR7c2VjdGlvbklkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydTZWN0aW9uJ10sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHVzZUdldFNlY3Rpb25zUGFnZVF1ZXJ5LFxyXG4gIHVzZUdldFNlY3Rpb25CeUlkUXVlcnksXHJcbiAgdXNlQ3JlYXRlU2VjdGlvbk11dGF0aW9uLFxyXG4gIHVzZVVwZGF0ZVNlY3Rpb25NdXRhdGlvbixcclxuICB1c2VEZWxldGVTZWN0aW9uTXV0YXRpb24sXHJcbn0gPSBzZWN0aW9uQXBpO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFPTyxNQUFNLGFBQWEsQ0FBQSxHQUFBLHFOQUFBLENBQUEsWUFBUyxBQUFELEVBQUU7SUFDbEMsYUFBYTtJQUNiLFdBQVcsQ0FBQSxHQUFBLDJJQUFBLENBQUEsNkJBQTBCLEFBQUQ7SUFDcEMsVUFBVTtRQUFDO0tBQVU7SUFDckIsV0FBVyxDQUFDLFVBQVksQ0FBQztZQUN2Qix3SEFBd0g7WUFDeEgsaUJBQWlCLFFBQVEsS0FBSyxDQVU1QjtnQkFDQSxPQUFPO3dCQUFDLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxDQUFDLEVBQ1IsUUFBUSxFQUFFLEVBQ1YsTUFBTSxFQUNQO29CQUNDLElBQUksT0FBTyxBQUFDLHFCQUE0QyxPQUF4QixjQUFhLGFBQW1DLE9BQXhCLFdBQVUsZ0JBQTJDLE9BQTdCLGNBQWEsa0JBQThCLE9BQWQsTUFBSyxXQUFlLE9BQU47b0JBQzNILElBQUksUUFBUSxRQUFRLEFBQUMsV0FBaUIsT0FBUDtvQkFDL0IsT0FBTztnQkFDVDtnQkFDQSxtQkFBbUIsQ0FBQyxXQUNsQixTQUFTLElBQUk7Z0JBQ2YsY0FBYztvQkFBQztpQkFBVTtZQUMzQjtZQUVBLCtCQUErQjtZQUMvQixnQkFBZ0IsUUFBUSxLQUFLLENBQWlDO2dCQUM1RCxPQUFPO3dCQUFDLEVBQUUsU0FBUyxFQUFFOzJCQUFLLEFBQUMsYUFBc0IsT0FBVjs7Z0JBQ3ZDLG1CQUFtQixDQUFDLFdBQ2xCLFNBQVMsSUFBSTtZQUNqQjtZQUVBLDhGQUE4RjtZQUM5RixlQUFlLFFBQVEsUUFBUSxDQVE3QjtnQkFDQSxPQUFPO3dCQUFDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFOzJCQUFNO3dCQUM5RCxLQUFLLEFBQUMscUJBQTRDLE9BQXhCLGNBQWEsYUFBbUMsT0FBeEIsV0FBVSxnQkFBMkIsT0FBYixjQUFhO3dCQUN2RixRQUFRO3dCQUNSLE1BQU07b0JBRVI7O2dCQUNBLGlCQUFpQjtvQkFBQztpQkFBVTtZQUM5QjtZQUVBLGlDQUFpQztZQUNqQyxlQUFlLFFBQVEsUUFBUSxDQUc3QjtnQkFDQSxPQUFPO3dCQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRTsyQkFBTTt3QkFDbEMsS0FBSyxBQUFDLGtCQUEyQixPQUFWO3dCQUN2QixRQUFRO3dCQUNSLE1BQU07b0JBQ1I7O2dCQUNBLGlCQUFpQjtvQkFBQztpQkFBVTtZQUM5QjtZQUVBLGtDQUFrQztZQUNsQyxlQUFlLFFBQVEsUUFBUSxDQUc3QjtnQkFDQSxPQUFPLENBQUMsWUFBYyxDQUFDO3dCQUNyQixLQUFLLEFBQUMsaUJBQTBCLE9BQVY7d0JBQ3RCLFFBQVE7b0JBQ1YsQ0FBQztnQkFDRCxpQkFBaUI7b0JBQUM7aUJBQVU7WUFDOUI7UUFDRixDQUFDO0FBQ0g7QUFFTyxNQUFNLEVBQ1gsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN6QixHQUFHIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA3NjUsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvc2xpY2VzL3VzZXJTbGljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICBlbWFpbDogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XHJcbiAgbmFtZTogbnVsbCxcclxuICBlbWFpbDogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndXNlcicsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVc2VyKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfT4pIHtcclxuICAgICAgc3RhdGUubmFtZSA9IGFjdGlvbi5wYXlsb2FkLm5hbWU7XHJcbiAgICAgIHN0YXRlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQuZW1haWw7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJVc2VyKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLm5hbWUgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5lbWFpbCA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlciwgY2xlYXJVc2VyIH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU9BLE1BQU0sZUFBMEI7SUFDOUIsTUFBTTtJQUNOLE9BQU87QUFDVDtBQUVBLE1BQU0sWUFBWSxDQUFBLEdBQUEsOExBQUEsQ0FBQSxjQUFXLEFBQUQsRUFBRTtJQUM1QixNQUFNO0lBQ047SUFDQSxVQUFVO1FBQ1IsU0FBUSxLQUFLLEVBQUUsTUFBc0Q7WUFDbkUsTUFBTSxJQUFJLEdBQUcsT0FBTyxPQUFPLENBQUMsSUFBSTtZQUNoQyxNQUFNLEtBQUssR0FBRyxPQUFPLE9BQU8sQ0FBQyxLQUFLO1FBQ3BDO1FBQ0EsV0FBVSxLQUFLO1lBQ2IsTUFBTSxJQUFJLEdBQUc7WUFDYixNQUFNLEtBQUssR0FBRztRQUNoQjtJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLFVBQVUsT0FBTzt1Q0FDeEMsVUFBVSxPQUFPIiwiZGVidWdJZCI6bnVsbH19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiA4MDEsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJmaWxlOi8vL0Q6L0RvY3VtZW50cy9OZXclMjBmb2xkZXIvVGFzay1GbG93L2NsaWVudC9zcmMvc3RvcmUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyLCBGTFVTSCwgUkVIWURSQVRFLCBQQVVTRSwgUEVSU0lTVCwgUFVSR0UsIFJFR0lTVEVSIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvYXV0aEFwaSdcclxuaW1wb3J0IHsgc3R1ZGVudEFwaSB9IGZyb20gJ0Avc3RvcmUvc2VydmljZXMvc3R1ZGVudEFwaSdcclxuaW1wb3J0IHsgYWRtaW5BcGkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2FkbWluQXBpJ1xyXG5pbXBvcnQgeyBjb2xsZWdlQXBpIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9jb2xsZWdlQXBpJ1xyXG5pbXBvcnQgeyBkZXBhcnRtZW50QXBpIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9kZXBhcnRtZW50QXBpJ1xyXG5pbXBvcnQgeyB0ZWFjaGVyQXBpIH0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy90ZWFjaGVyQXBpJ1xyXG5pbXBvcnQgeyBjb3Vyc2VBcGkgfSBmcm9tICdAL3N0b3JlL3NlcnZpY2VzL2NvdXJzZUFwaSdcclxuaW1wb3J0IHsgc2VjdGlvbkFwaX0gZnJvbSAnQC9zdG9yZS9zZXJ2aWNlcy9zZWN0aW9uQXBpJ1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlJ1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnQC9zdG9yZS9zbGljZXMvdXNlclNsaWNlJ1xyXG5cclxuXHJcbi8vIHJlZHV4IHN0YXRlIHBlcnNpc3RlbmNlXHJcblxyXG5cclxuY29uc3QgYXV0aFBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAnYXV0aCcsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnaWQnLCAnbW9uZ29JZCcsICdyb2xlJ10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6ICd1c2VyJyxcclxuICBzdG9yYWdlLFxyXG4gIHdoaXRlbGlzdDogWyduYW1lJywgJ2VtYWlsJ11cclxufVxyXG5cclxuY29uc3QgcGVyc2lzdGVkQXV0aFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihhdXRoUGVyc2lzdENvbmZpZywgYXV0aFJlZHVjZXIpO1xyXG5jb25zdCBwZXJzaXN0ZWRVc2VyUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHVzZXJQZXJzaXN0Q29uZmlnLCB1c2VyUmVkdWNlcik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIFthdXRoQXBpLnJlZHVjZXJQYXRoXTogYXV0aEFwaS5yZWR1Y2VyLFxyXG4gICAgW3N0dWRlbnRBcGkucmVkdWNlclBhdGhdOiBzdHVkZW50QXBpLnJlZHVjZXIsXHJcbiAgICBbYWRtaW5BcGkucmVkdWNlclBhdGhdOiBhZG1pbkFwaS5yZWR1Y2VyLFxyXG4gICAgW2NvbGxlZ2VBcGkucmVkdWNlclBhdGhdOiBjb2xsZWdlQXBpLnJlZHVjZXIsXHJcbiAgICBbZGVwYXJ0bWVudEFwaS5yZWR1Y2VyUGF0aF06IGRlcGFydG1lbnRBcGkucmVkdWNlcixcclxuICAgIFt0ZWFjaGVyQXBpLnJlZHVjZXJQYXRoXTogdGVhY2hlckFwaS5yZWR1Y2VyLFxyXG4gICAgW2NvdXJzZUFwaS5yZWR1Y2VyUGF0aF06IGNvdXJzZUFwaS5yZWR1Y2VyLFxyXG4gICAgW3NlY3Rpb25BcGkucmVkdWNlclBhdGhdOiBzZWN0aW9uQXBpLnJlZHVjZXIsXHJcbiAgICBhdXRoOiBwZXJzaXN0ZWRBdXRoUmVkdWNlcixcclxuICAgIHVzZXI6IHBlcnNpc3RlZFVzZXJSZWR1Y2VyLFxyXG4gIH0sXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgIGlnbm9yZWRBY3Rpb25zOiBbRkxVU0gsIFJFSFlEUkFURSwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUl0sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAuY29uY2F0KGF1dGhBcGkubWlkZGxld2FyZSlcclxuICAgICAgLmNvbmNhdChzdHVkZW50QXBpLm1pZGRsZXdhcmUpXHJcbiAgICAgIC5jb25jYXQoYWRtaW5BcGkubWlkZGxld2FyZSlcclxuICAgICAgLmNvbmNhdChjb2xsZWdlQXBpLm1pZGRsZXdhcmUpXHJcbiAgICAgIC5jb25jYXQoZGVwYXJ0bWVudEFwaS5taWRkbGV3YXJlKVxyXG4gICAgICAuY29uY2F0KHRlYWNoZXJBcGkubWlkZGxld2FyZSlcclxuICAgICAgLmNvbmNhdChjb3Vyc2VBcGkubWlkZGxld2FyZSlcclxuICAgICAgLmNvbmNhdChzZWN0aW9uQXBpLm1pZGRsZXdhcmUpLFxyXG4gIGRldlRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxyXG59KVxyXG5cclxuLy8gdHlwZWQgaG9va3NcclxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSlcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBNkRZO0FBN0RaO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUdBLDBCQUEwQjtBQUcxQixNQUFNLG9CQUFvQjtJQUN4QixLQUFLO0lBQ0wsU0FBQSw4SkFBQSxDQUFBLFVBQU87SUFDUCxXQUFXO1FBQUM7UUFBTTtRQUFXO0tBQU87QUFDdEM7QUFFQSxNQUFNLG9CQUFvQjtJQUN4QixLQUFLO0lBQ0wsU0FBQSw4SkFBQSxDQUFBLFVBQU87SUFDUCxXQUFXO1FBQUM7UUFBUTtLQUFRO0FBQzlCO0FBRUEsTUFBTSx1QkFBdUIsQ0FBQSxHQUFBLHdNQUFBLENBQUEsaUJBQWMsQUFBRCxFQUFFLG1CQUFtQixzSUFBQSxDQUFBLFVBQVc7QUFDMUUsTUFBTSx1QkFBdUIsQ0FBQSxHQUFBLHdNQUFBLENBQUEsaUJBQWMsQUFBRCxFQUFFLG1CQUFtQixzSUFBQSxDQUFBLFVBQVc7QUFHbkUsTUFBTSxRQUFRLENBQUEsR0FBQSw4TEFBQSxDQUFBLGlCQUFjLEFBQUQsRUFBRTtJQUNsQyxTQUFTO1FBQ1AsQ0FBQyxzSUFBQSxDQUFBLFVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxzSUFBQSxDQUFBLFVBQU8sQ0FBQyxPQUFPO1FBQ3RDLENBQUMseUlBQUEsQ0FBQSxhQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUseUlBQUEsQ0FBQSxhQUFVLENBQUMsT0FBTztRQUM1QyxDQUFDLHVJQUFBLENBQUEsV0FBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLHVJQUFBLENBQUEsV0FBUSxDQUFDLE9BQU87UUFDeEMsQ0FBQyx5SUFBQSxDQUFBLGFBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSx5SUFBQSxDQUFBLGFBQVUsQ0FBQyxPQUFPO1FBQzVDLENBQUMsNElBQUEsQ0FBQSxnQkFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLDRJQUFBLENBQUEsZ0JBQWEsQ0FBQyxPQUFPO1FBQ2xELENBQUMseUlBQUEsQ0FBQSxhQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUseUlBQUEsQ0FBQSxhQUFVLENBQUMsT0FBTztRQUM1QyxDQUFDLHdJQUFBLENBQUEsWUFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLHdJQUFBLENBQUEsWUFBUyxDQUFDLE9BQU87UUFDMUMsQ0FBQyx5SUFBQSxDQUFBLGFBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSx5SUFBQSxDQUFBLGFBQVUsQ0FBQyxPQUFPO1FBQzVDLE1BQU07UUFDTixNQUFNO0lBQ1I7SUFDQSxZQUFZLENBQUMsdUJBQ1gscUJBQXFCO1lBQ25CLG1CQUFtQjtnQkFDakIsZ0JBQWdCO29CQUFDLHNKQUFBLENBQUEsUUFBSztvQkFBRSxzSkFBQSxDQUFBLFlBQVM7b0JBQUUsc0pBQUEsQ0FBQSxRQUFLO29CQUFFLHNKQUFBLENBQUEsVUFBTztvQkFBRSxzSkFBQSxDQUFBLFFBQUs7b0JBQUUsc0pBQUEsQ0FBQSxXQUFRO2lCQUFDO1lBQ3JFO1FBQ0YsR0FDRyxNQUFNLENBQUMsc0lBQUEsQ0FBQSxVQUFPLENBQUMsVUFBVSxFQUN6QixNQUFNLENBQUMseUlBQUEsQ0FBQSxhQUFVLENBQUMsVUFBVSxFQUM1QixNQUFNLENBQUMsdUlBQUEsQ0FBQSxXQUFRLENBQUMsVUFBVSxFQUMxQixNQUFNLENBQUMseUlBQUEsQ0FBQSxhQUFVLENBQUMsVUFBVSxFQUM1QixNQUFNLENBQUMsNElBQUEsQ0FBQSxnQkFBYSxDQUFDLFVBQVUsRUFDL0IsTUFBTSxDQUFDLHlJQUFBLENBQUEsYUFBVSxDQUFDLFVBQVUsRUFDNUIsTUFBTSxDQUFDLHdJQUFBLENBQUEsWUFBUyxDQUFDLFVBQVUsRUFDM0IsTUFBTSxDQUFDLHlJQUFBLENBQUEsYUFBVSxDQUFDLFVBQVU7SUFDakMsVUFBVSxvREFBeUI7QUFDckM7QUFHTyxNQUFNLFlBQVksQ0FBQSxHQUFBLG9NQUFBLENBQUEsZUFBWSxBQUFELEVBQUUiLCJkZWJ1Z0lkIjpudWxsfX0sCiAgICB7Im9mZnNldCI6IHsibGluZSI6IDg5MiwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovRG9jdW1lbnRzL05ldyUyMGZvbGRlci9UYXNrLUZsb3cvY2xpZW50L3NyYy9wcm92aWRlcnMvUmVkdXhQcm92aWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHN0b3JlLCBwZXJzaXN0b3IgfSBmcm9tICdAL3N0b3JlJztcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWR1eFByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIHsnICd9XHJcbiAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUNBO0FBSkE7Ozs7O0FBU2UsU0FBUyxjQUFjLEtBSXJDO1FBSnFDLEVBQ3BDLFFBQVEsRUFHVCxHQUpxQztJQUtwQyxxQkFDRSw2TEFBQyw0SkFBQSxDQUFBLFdBQVE7UUFBQyxPQUFPLHdIQUFBLENBQUEsUUFBSzs7WUFDbkI7MEJBQ0QsNkxBQUMsaUtBQUEsQ0FBQSxjQUFXO2dCQUFDLFNBQVM7Z0JBQU0sV0FBVyx3SEFBQSxDQUFBLFlBQVM7MEJBQzdDOzs7Ozs7Ozs7Ozs7QUFJVDtLQWJ3QiIsImRlYnVnSWQiOm51bGx9fV0KfQ==
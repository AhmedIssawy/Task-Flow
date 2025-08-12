module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/store/slices/authSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RoleEnum": ()=>RoleEnum,
    "clearAuth": ()=>clearAuth,
    "default": ()=>__TURBOPACK__default__export__,
    "setAuth": ()=>setAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "baseQueryWithErrorHandling": ()=>baseQueryWithErrorHandling
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-ssr] (ecmascript)");
;
;
;
const baseQueryWithErrorHandling = (baseUrl = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000/api')=>{
    const rawBaseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl,
        credentials: 'include'
    });
    return async (args, api, extraOptions)=>{
        const result = await rawBaseQuery(args, api, extraOptions);
        const suppress401 = typeof args === 'object' && 'suppress401' in args && args.suppress401;
        if (result.error) {
            const status = result.error.status;
            const message = result.error.data?.message || (typeof result.error.error === 'string' ? result.error.error : 'Something went wrong');
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
        return result;
    };
};
}),
"[project]/src/store/services/authApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "authApi": ()=>authApi,
    "useGetMeQuery": ()=>useGetMeQuery,
    "useLoginMutation": ()=>useLoginMutation,
    "useLogoutMutation": ()=>useLogoutMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'authApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(process.env.NEXT_PUBLIC_API_URL_AUTH || 'http://localhost:5000'),
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
}),
"[project]/src/store/services/studentApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const studentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'studentApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
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
                query: ({ page = 1, limit = 20 })=>`/students?page=${page}&limit=${limit}`,
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Student'
                ]
            }),
            // Get University Students (paginated)
            getStudentsPageOfUniversity: builder.query({
                query: ({ universityId, page = 1, limit = 40 })=>`/students/university/${universityId}?page=${page}&limit=${limit}`,
                providesTags: [
                    'Student'
                ]
            }),
            // Get University Students (all)
            getAllStudentsOfUniversity: builder.query({
                query: (universityId)=>`/students/university/${universityId}`,
                providesTags: [
                    'Student'
                ]
            }),
            // Get One
            getStudentById: builder.query({
                query: (id)=>`/students/${id}`,
                providesTags: [
                    'Student'
                ]
            }),
            // Update
            updateStudent: builder.mutation({
                query: ({ _id, ...updates })=>({
                        url: `admin/student/${_id}`,
                        method: 'PATCH',
                        body: updates
                    }),
                invalidatesTags: [
                    'Student'
                ]
            }),
            // Delete
            deleteStudent: builder.mutation({
                query: (id)=>({
                        url: `/students/${id}`,
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Student'
                ]
            }),
            // Get student courses
            getStudentCourses: builder.query({
                query: (id)=>`/students/${id}/courses`
            }),
            // Get specific course with teachers populated
            getStudentCourseById: builder.query({
                query: ({ id, courseId })=>`/students/${id}/courses/${courseId}`
            }),
            // Get student grades
            getStudentGrades: builder.query({
                query: (id)=>`/students/${id}/grades`
            }),
            // Get student assignments
            getStudentAssignments: builder.query({
                query: (id)=>`/students/${id}/assignments`
            }),
            // Get student calendar
            getStudentCalendar: builder.query({
                query: (id)=>`/students/${id}/calendar`
            })
        })
});
const { useCreateStudentMutation, useGetStudentsPageQuery, useGetStudentsPageOfUniversityQuery, useGetAllStudentsOfUniversityQuery, useGetStudentByIdQuery, useUpdateStudentMutation, useDeleteStudentMutation, useGetStudentCoursesQuery, useGetStudentCourseByIdQuery, useGetStudentGradesQuery, useGetStudentAssignmentsQuery, useGetStudentCalendarQuery } = studentApi;
}),
"[project]/src/store/services/adminApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "adminApi": ()=>adminApi,
    "useCreateAdminMutation": ()=>useCreateAdminMutation,
    "useDeleteAdminMutation": ()=>useDeleteAdminMutation,
    "useGetAdminByIdQuery": ()=>useGetAdminByIdQuery,
    "useGetPageOfAdminsQuery": ()=>useGetPageOfAdminsQuery,
    "useUpdateAdminMutation": ()=>useUpdateAdminMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const adminApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'adminApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Admin'
    ],
    endpoints: (builder)=>({
            getAdminById: builder.query({
                query: (id)=>`/admin/${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: 'Admin',
                            id
                        }
                    ]
            }),
            getPageOfAdmins: builder.query({
                query: ({ page = 1, limit = 40 })=>`/admin?page=${page}&limit=${limit}`,
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
                invalidatesTags: (result, error, { id })=>[
                        {
                            type: 'Admin',
                            id
                        }
                    ]
            }),
            deleteAdmin: builder.mutation({
                query: (id)=>({
                        url: `/admin/admin/${id}`,
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
}),
"[project]/src/store/services/collegeApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "collegeApi": ()=>collegeApi,
    "useCreateCollegeMutation": ()=>useCreateCollegeMutation,
    "useGetCollegeByIdQuery": ()=>useGetCollegeByIdQuery,
    "useGetCollegesPageQuery": ()=>useGetCollegesPageQuery,
    "useUpdateCollegeMutation": ()=>useUpdateCollegeMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const collegeApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'collegeApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'College'
    ],
    endpoints: (builder)=>({
            // GET /colleges/universityId?page=1&limit=40
            getCollegesPage: builder.query({
                query: ({ universityId, page = 1, limit = 40 })=>`/universities/${universityId}/colleges?page=${page}&limit=${limit}`,
                transformResponse: (response)=>response.data,
                providesTags: [
                    'College'
                ]
            }),
            // GET /colleges/universityId/collegeId
            getCollegeById: builder.query({
                query: ({ universityId, collegeId })=>`/colleges/${universityId}/${collegeId}`
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
                query: ({ id, ...updateData })=>({
                        url: '/colleges',
                        method: 'PATCH',
                        body: {
                            id,
                            ...updateData
                        }
                    })
            })
        })
});
const { useGetCollegesPageQuery, useGetCollegeByIdQuery, useCreateCollegeMutation, useUpdateCollegeMutation } = collegeApi;
}),
"[project]/src/store/services/departmentApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "departmentApi": ()=>departmentApi,
    "useCreateDepartmentMutation": ()=>useCreateDepartmentMutation,
    "useDeleteDepartmentMutation": ()=>useDeleteDepartmentMutation,
    "useGetDepartmentByIdQuery": ()=>useGetDepartmentByIdQuery,
    "useGetDepartmentsPageQuery": ()=>useGetDepartmentsPageQuery,
    "useUpdateDepartmentMutation": ()=>useUpdateDepartmentMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const departmentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'departmentApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Department'
    ],
    endpoints: (builder)=>({
            // GET /departments/:collegeId?page=1&limit=40
            getDepartmentsPage: builder.query({
                query: ({ universityId, collegeId, page = 1, limit = 40 })=>`/universities/${universityId}/colleges/${collegeId}/departments?page=${page}&limit=${limit}`,
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Department'
                ]
            }),
            // GET /departments/:id
            getDepartmentById: builder.query({
                query: (id)=>`/departments/${id}`
            }),
            // POST /departments/:universityId/:collegeId
            createDepartment: builder.mutation({
                query: ({ universityId, collegeId, body })=>({
                        url: `/departments/${universityId}/${collegeId}`,
                        method: 'POST',
                        body
                    })
            }),
            // PATCH /departments
            updateDepartment: builder.mutation({
                query: ({ id, ...rest })=>({
                        url: `/departments`,
                        method: 'PATCH',
                        body: {
                            id,
                            ...rest
                        }
                    })
            }),
            // DELETE /departments/:id
            deleteDepartment: builder.mutation({
                query: (id)=>({
                        url: `/departments/${id}`,
                        method: 'DELETE'
                    })
            })
        })
});
const { useGetDepartmentsPageQuery, useGetDepartmentByIdQuery, useCreateDepartmentMutation, useUpdateDepartmentMutation, useDeleteDepartmentMutation } = departmentApi;
}),
"[project]/src/store/services/teacherApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "teacherApi": ()=>teacherApi,
    "useCreateTeacherMutation": ()=>useCreateTeacherMutation,
    "useDeleteTeacherMutation": ()=>useDeleteTeacherMutation,
    "useGetTeacherByIdQuery": ()=>useGetTeacherByIdQuery,
    "useGetTeachersPageQuery": ()=>useGetTeachersPageQuery,
    "useUpdateTeacherMutation": ()=>useUpdateTeacherMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const teacherApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'teacherApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Teacher'
    ],
    endpoints: (builder)=>({
            // GET /teachers?page=1
            getTeachersPage: builder.query({
                query: ({ page = 1, limit = 40 })=>`/teachers?page=${page}&limit=${limit}`,
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Teacher'
                ]
            }),
            // GET /teachers/:teacherId
            getTeacherById: builder.query({
                query: (teacherId)=>`/teachers/${teacherId}`
            }),
            // POST /teachers
            createTeacher: builder.mutation({
                query: (body)=>({
                        url: `/teachers`,
                        method: 'POST',
                        body
                    })
            }),
            // PATCH /teachers/:id (or _id)
            updateTeacher: builder.mutation({
                query: (body)=>({
                        url: body.id ? `/teachers/${body.id}` : `/teachers`,
                        method: 'PATCH',
                        body
                    })
            }),
            // DELETE /teachers/:id or {_id} in body
            deleteTeacher: builder.mutation({
                query: ({ id, _id })=>({
                        url: id ? `/teachers/${id}` : `/teachers`,
                        method: 'DELETE',
                        body: id ? undefined : {
                            _id
                        }
                    })
            })
        })
});
const { useGetTeachersPageQuery, useGetTeacherByIdQuery, useCreateTeacherMutation, useUpdateTeacherMutation, useDeleteTeacherMutation } = teacherApi;
}),
"[project]/src/store/services/courseApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "courseApi": ()=>courseApi,
    "useCreateCourseMutation": ()=>useCreateCourseMutation,
    "useDeleteCourseMutation": ()=>useDeleteCourseMutation,
    "useGetCourseByIdQuery": ()=>useGetCourseByIdQuery,
    "useGetCoursesPageQuery": ()=>useGetCoursesPageQuery,
    "useUpdateCourseMutation": ()=>useUpdateCourseMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const courseApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'courseApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Course'
    ],
    endpoints: (builder)=>({
            getCoursesPage: builder.query({
                query: ({ departmentId, collegeId, universityId, page = 1, limit = 40 })=>`/courses?departmentId=${departmentId}&collegeId=${collegeId}&universityId=${universityId}&page=${page}&limit=${limit}`,
                transformResponse: (res)=>res.data,
                providesTags: [
                    'Course'
                ]
            }),
            getCourseById: builder.query({
                query: (courseId)=>`/courses/${courseId}`,
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
                query: ({ courseId, updates })=>({
                        url: `/admin/course/${courseId}`,
                        method: 'PATCH',
                        body: updates
                    }),
                invalidatesTags: [
                    'Course'
                ]
            }),
            deleteCourse: builder.mutation({
                query: (courseId)=>({
                        url: `/courses/${courseId}`,
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Course'
                ]
            })
        })
});
const { useGetCoursesPageQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } = courseApi;
}),
"[project]/src/store/services/sectionApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "sectionApi": ()=>sectionApi,
    "useCreateSectionMutation": ()=>useCreateSectionMutation,
    "useDeleteSectionMutation": ()=>useDeleteSectionMutation,
    "useGetSectionByIdQuery": ()=>useGetSectionByIdQuery,
    "useGetSectionsPageQuery": ()=>useGetSectionsPageQuery,
    "useUpdateSectionMutation": ()=>useUpdateSectionMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/baseQueryWithErrorHandling.ts [app-ssr] (ecmascript)");
;
;
const sectionApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'sectionApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$baseQueryWithErrorHandling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseQueryWithErrorHandling"])(),
    tagTypes: [
        'Section'
    ],
    endpoints: (builder)=>({
            // GET /api/universities/:universityId/colleges/:collegeId/departments/:departmentId/sections?page=1&limit=40&course=xxx
            getSectionsPage: builder.query({
                query: ({ universityId, collegeId, departmentId, page = 1, limit = 40, course })=>{
                    let base = `/admin/university/${universityId}/college/${collegeId}/department/${departmentId}/section?page=${page}&limit=${limit}`;
                    if (course) base += `&course=${course}`;
                    return base;
                },
                transformResponse: (response)=>response.data,
                providesTags: [
                    'Section'
                ]
            }),
            // GET /api/sections/:sectionId
            getSectionById: builder.query({
                query: ({ sectionId })=>`/sections/${sectionId}`,
                transformResponse: (response)=>response.data
            }),
            // POST /api/universities/:universityId/colleges/:collegeId/departments/:departmentId/sections
            createSection: builder.mutation({
                query: ({ universityId, collegeId, departmentId, payload })=>({
                        url: `/admin/university/${universityId}/college/${collegeId}/department/${departmentId}/section`,
                        method: 'POST',
                        body: payload
                    }),
                invalidatesTags: [
                    'Section'
                ]
            }),
            // PATCH /api/sections/:sectionId
            updateSection: builder.mutation({
                query: ({ sectionId, updates })=>({
                        url: `/admin/section/${sectionId}`,
                        method: 'PATCH',
                        body: updates
                    }),
                invalidatesTags: [
                    'Section'
                ]
            }),
            // DELETE /api/sections/:sectionId
            deleteSection: builder.mutation({
                query: (sectionId)=>({
                        url: `admin/section/${sectionId}`,
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Section'
                ]
            })
        })
});
const { useGetSectionsPageQuery, useGetSectionByIdQuery, useCreateSectionMutation, useUpdateSectionMutation, useDeleteSectionMutation } = sectionApi;
}),
"[project]/src/store/slices/userSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clearUser": ()=>clearUser,
    "default": ()=>__TURBOPACK__default__export__,
    "setUser": ()=>setUser
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    name: null,
    email: null
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "persistor": ()=>persistor,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-ssr] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-ssr] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/authApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/studentApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/adminApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/collegeApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/departmentApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/teacherApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/courseApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/services/sectionApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/userSlice.ts [app-ssr] (ecmascript)");
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
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        'id',
        'mongoId',
        'role'
    ]
};
const userPersistConfig = {
    key: 'user',
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        'name',
        'email'
    ]
};
const persistedAuthReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(authPersistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const persistedUserReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(userPersistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collegeApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collegeApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["departmentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["departmentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courseApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courseApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionApi"].reducer,
        auth: persistedAuthReducer,
        user: persistedUserReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLUSH"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REHYDRATE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAUSE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PERSIST"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PURGE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGISTER"]
                ]
            }
        }).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$adminApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$collegeApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collegeApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$departmentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["departmentApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$teacherApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$courseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courseApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$services$2f$sectionApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionApi"].middleware),
    devTools: ("TURBOPACK compile-time value", "development") !== 'production'
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
}),
"[project]/src/providers/ReduxProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ReduxProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: [
            ' ',
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PersistGate"], {
                loading: null,
                persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistor"],
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
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4f03fba3._.js.map
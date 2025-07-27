# API Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Base Configuration](#base-configuration)
- [Authentication System](#authentication-system)
- [RTK Query Services](#rtk-query-services)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Type Definitions](#type-definitions)
- [Usage Examples](#usage-examples)

## 🎯 Overview

TaskFlow uses RTK Query for efficient API state management, providing automatic caching, background refetching, and optimistic updates. The API layer is built with TypeScript for full type safety and includes comprehensive error handling.

### Key Features
- **RTK Query Integration**: Automatic caching and state management
- **Type Safety**: Full TypeScript support for all API calls
- **Error Handling**: Centralized error handling with user feedback
- **Authentication**: Cookie-based authentication with automatic token management
- **Optimistic Updates**: Immediate UI updates with rollback on failure
- **Background Refetching**: Automatic data synchronization

## 🔧 Base Configuration

### Environment Variables

```env
# Authentication API Base URL
NEXT_PUBLIC_API_URL_AUTH=http://localhost:5000

# Main API Base URL (for other services)
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Environment Mode
NODE_ENV=development
```

### Base URLs
- **Authentication API**: `http://localhost:5000` (Development) / `https://your-auth-domain.com` (Production)
- **Main API**: `http://localhost:5000/api` (Development) / `https://your-api-domain.com/api` (Production)

### Base Query Configuration

**Location**: `src/lib/baseQueryWithErrorHandling.ts`

```typescript
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'sonner';

export const baseQueryWithErrorHandling = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    credentials: 'include', // Include cookies for authentication
    prepareHeaders: (headers, { getState }) => {
      // Add any additional headers if needed
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  });

// Enhanced base query with error handling
export const baseQueryWithErrorHandlingEnhanced = (baseUrl: string) => {
  const baseQuery = baseQueryWithErrorHandling(baseUrl);
  
  return async (args: any, api: any, extraOptions: any) => {
    const result = await baseQuery(args, api, extraOptions);
    
    // Handle errors globally
    if (result.error) {
      const { status, data } = result.error as any;
      
      // Don't show error for 401 if suppress401 is true
      if (status === 401 && args.suppress401) {
        return result;
      }
      
      // Show error toast for other errors
      if (status !== 401) {
        toast.error(data?.message || 'An error occurred');
      }
    }
    
    return result;
  };
};
```

## 🔐 Authentication System

### Authentication API Service

**Location**: `src/store/services/authApi.ts`

```typescript
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL_AUTH || 'http://localhost:5000'
  ),
  endpoints: (builder) => ({
    // Get current user information
    getMe: builder.query<AuthResponse, void>({
      query: () => ({
        url: '/auth',
        suppress401: true, // Don't show error toast for 401
      }),
    }),

    // User login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // User logout
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useLogoutMutation } = authApi;
```

### Authentication Types

```typescript
interface LoginRequest {
  id: string;        // User ID
  password: string;  // User password
}

interface LoginResponse {
  role: string;      // User role: 'student' | 'teacher' | 'admin' | 'super-admin'
  data: {
    id: string;      // User ID
    _id: string;     // Database ID
    name: string;    // User full name
    email: string;   // User email
  }
}

interface AuthResponse {
  role: string;
  id: string;
  data: {
    id: string;
    _id: string;
    name: string;
    email: string;
    role: string;
  }
}
```

## 🏗️ RTK Query Services

### Student API Service

**Location**: `src/store/services/studentApi.ts`

```typescript
export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
  ),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    // Get all students with pagination
    getStudents: builder.query<StudentsResponse, StudentsRequest>({
      query: ({ page = 1, limit = 10, search, collegeId, departmentId }) => ({
        url: '/students',
        params: { page, limit, search, collegeId, departmentId },
      }),
      providesTags: ['Student'],
    }),

    // Get student by ID
    getStudentById: builder.query<StudentResponse, string>({
      query: (id) => `/students/${id}`,
      providesTags: (result, error, id) => [{ type: 'Student', id }],
    }),

    // Create new student
    createStudent: builder.mutation<StudentResponse, CreateStudentRequest>({
      query: (student) => ({
        url: '/students',
        method: 'POST',
        body: student,
      }),
      invalidatesTags: ['Student'],
    }),

    // Update student
    updateStudent: builder.mutation<StudentResponse, UpdateStudentRequest>({
      query: ({ id, ...student }) => ({
        url: `/students/${id}`,
        method: 'PUT',
        body: student,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Student', id }],
    }),

    // Delete student
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Student'],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
```

### Admin API Service

**Location**: `src/store/services/adminApi.ts`

```typescript
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
  ),
  tagTypes: ['Admin', 'AdminStats'],
  endpoints: (builder) => ({
    // Get admin dashboard statistics
    getAdminStats: builder.query<AdminStatsResponse, string>({
      query: (adminId) => `/admin/${adminId}/stats`,
      providesTags: ['AdminStats'],
    }),

    // Get admin profile
    getAdminProfile: builder.query<AdminResponse, string>({
      query: (adminId) => `/admin/${adminId}`,
      providesTags: (result, error, id) => [{ type: 'Admin', id }],
    }),

    // Update admin profile
    updateAdminProfile: builder.mutation<AdminResponse, UpdateAdminRequest>({
      query: ({ id, ...admin }) => ({
        url: `/admin/${id}`,
        method: 'PUT',
        body: admin,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Admin', id }],
    }),
  }),
});

export const {
  useGetAdminStatsQuery,
  useGetAdminProfileQuery,
  useUpdateAdminProfileMutation,
} = adminApi;
```

### College API Service

**Location**: `src/store/services/collegeApi.ts`

```typescript
export const collegeApi = createApi({
  reducerPath: 'collegeApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
  ),
  tagTypes: ['College'],
  endpoints: (builder) => ({
    // Get all colleges
    getColleges: builder.query<CollegesResponse, CollegesRequest>({
      query: ({ page = 1, limit = 10, search }) => ({
        url: '/colleges',
        params: { page, limit, search },
      }),
      providesTags: ['College'],
    }),

    // Get college by ID
    getCollegeById: builder.query<CollegeResponse, string>({
      query: (id) => `/colleges/${id}`,
      providesTags: (result, error, id) => [{ type: 'College', id }],
    }),

    // Create college
    createCollege: builder.mutation<CollegeResponse, CreateCollegeRequest>({
      query: (college) => ({
        url: '/colleges',
        method: 'POST',
        body: college,
      }),
      invalidatesTags: ['College'],
    }),

    // Update college
    updateCollege: builder.mutation<CollegeResponse, UpdateCollegeRequest>({
      query: ({ id, ...college }) => ({
        url: `/colleges/${id}`,
        method: 'PUT',
        body: college,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'College', id }],
    }),

    // Delete college
    deleteCollege: builder.mutation<void, string>({
      query: (id) => ({
        url: `/colleges/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['College'],
    }),
  }),
});

export const {
  useGetCollegesQuery,
  useGetCollegeByIdQuery,
  useCreateCollegeMutation,
  useUpdateCollegeMutation,
  useDeleteCollegeMutation,
} = collegeApi;
```

### Department API Service

**Location**: `src/store/services/departmentApi.ts`

```typescript
export const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
  ),
  tagTypes: ['Department'],
  endpoints: (builder) => ({
    // Get departments by college
    getDepartmentsByCollege: builder.query<DepartmentsResponse, string>({
      query: (collegeId) => `/colleges/${collegeId}/departments`,
      providesTags: ['Department'],
    }),

    // Get all departments with pagination
    getDepartments: builder.query<DepartmentsResponse, DepartmentsRequest>({
      query: ({ page = 1, limit = 10, search, collegeId }) => ({
        url: '/departments',
        params: { page, limit, search, collegeId },
      }),
      providesTags: ['Department'],
    }),

    // Create department
    createDepartment: builder.mutation<DepartmentResponse, CreateDepartmentRequest>({
      query: (department) => ({
        url: '/departments',
        method: 'POST',
        body: department,
      }),
      invalidatesTags: ['Department'],
    }),

    // Update department
    updateDepartment: builder.mutation<DepartmentResponse, UpdateDepartmentRequest>({
      query: ({ id, ...department }) => ({
        url: `/departments/${id}`,
        method: 'PUT',
        body: department,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Department', id }],
    }),

    // Delete department
    deleteDepartment: builder.mutation<void, string>({
      query: (id) => ({
        url: `/departments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Department'],
    }),
  }),
});

export const {
  useGetDepartmentsByCollegeQuery,
  useGetDepartmentsQuery,
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
```

### Teacher API Service

**Location**: `src/store/services/teacherApi.ts`

```typescript
export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
  ),
  tagTypes: ['Teacher'],
  endpoints: (builder) => ({
    // Get all teachers
    getTeachers: builder.query<TeachersResponse, TeachersRequest>({
      query: ({ page = 1, limit = 10, search, departmentId }) => ({
        url: '/teachers',
        params: { page, limit, search, departmentId },
      }),
      providesTags: ['Teacher'],
    }),

    // Get teacher by ID
    getTeacherById: builder.query<TeacherResponse, string>({
      query: (id) => `/teachers/${id}`,
      providesTags: (result, error, id) => [{ type: 'Teacher', id }],
    }),

    // Create teacher
    createTeacher: builder.mutation<TeacherResponse, CreateTeacherRequest>({
      query: (teacher) => ({
        url: '/teachers',
        method: 'POST',
        body: teacher,
      }),
      invalidatesTags: ['Teacher'],
    }),

    // Update teacher
    updateTeacher: builder.mutation<TeacherResponse, UpdateTeacherRequest>({
      query: ({ id, ...teacher }) => ({
        url: `/teachers/${id}`,
        method: 'PUT',
        body: teacher,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Teacher', id }],
    }),

    // Delete teacher
    deleteTeacher: builder.mutation<void, string>({
      query: (id) => ({
        url: `/teachers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Teacher'],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetTeacherByIdQuery,
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} = teacherApi;
```

## 🔗 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/auth` | Get current user | None | `AuthResponse` |
| POST | `/auth/login` | User login | `LoginRequest` | `LoginResponse` |
| POST | `/auth/logout` | User logout | None | `void` |

### Student Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/students` | Get all students | Query params | `StudentsResponse` |
| GET | `/students/:id` | Get student by ID | None | `StudentResponse` |
| POST | `/students` | Create student | `CreateStudentRequest` | `StudentResponse` |
| PUT | `/students/:id` | Update student | `UpdateStudentRequest` | `StudentResponse` |
| DELETE | `/students/:id` | Delete student | None | `void` |

### Admin Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/admin/:id/stats` | Get admin statistics | None | `AdminStatsResponse` |
| GET | `/admin/:id` | Get admin profile | None | `AdminResponse` |
| PUT | `/admin/:id` | Update admin profile | `UpdateAdminRequest` | `AdminResponse` |

### College Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/colleges` | Get all colleges | Query params | `CollegesResponse` |
| GET | `/colleges/:id` | Get college by ID | None | `CollegeResponse` |
| POST | `/colleges` | Create college | `CreateCollegeRequest` | `CollegeResponse` |
| PUT | `/colleges/:id` | Update college | `UpdateCollegeRequest` | `CollegeResponse` |
| DELETE | `/colleges/:id` | Delete college | None | `void` |

### Department Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/departments` | Get all departments | Query params | `DepartmentsResponse` |
| GET | `/colleges/:id/departments` | Get departments by college | None | `DepartmentsResponse` |
| POST | `/departments` | Create department | `CreateDepartmentRequest` | `DepartmentResponse` |
| PUT | `/departments/:id` | Update department | `UpdateDepartmentRequest` | `DepartmentResponse` |
| DELETE | `/departments/:id` | Delete department | None | `void` |

### Teacher Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/teachers` | Get all teachers | Query params | `TeachersResponse` |
| GET | `/teachers/:id` | Get teacher by ID | None | `TeacherResponse` |
| POST | `/teachers` | Create teacher | `CreateTeacherRequest` | `TeacherResponse` |
| PUT | `/teachers/:id` | Update teacher | `UpdateTeacherRequest` | `TeacherResponse` |
| DELETE | `/teachers/:id` | Delete teacher | None | `void` |

## ⚠️ Error Handling

### Error Response Format

```typescript
interface ApiError {
  status: number;
  message: string;
  details?: any;
  timestamp: string;
}
```

### Common HTTP Status Codes

- **200**: Success
- **201**: Created
- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **422**: Validation Error
- **500**: Internal Server Error

### Error Handling in Components

```typescript
function StudentList() {
  const { data, error, isLoading } = useGetStudentsQuery({ page: 1, limit: 10 });

  if (isLoading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <ErrorMessage 
        title="Failed to load students"
        message={error.message || 'An unexpected error occurred'}
        onRetry={() => refetch()}
      />
    );
  }

  return <StudentTable data={data.students} />;
}
```

## 📝 Type Definitions

### Student Types

**Location**: `src/store/types/student.ts`

```typescript
export interface Student {
  _id: string;
  id: string;
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  address?: Address;
  college: College;
  department: Department;
  enrollmentDate: string;
  status: 'active' | 'inactive' | 'graduated';
  gpa?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStudentRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  address?: Address;
  collegeId: string;
  departmentId: string;
  password: string;
}

export interface UpdateStudentRequest {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  address?: Address;
  collegeId?: string;
  departmentId?: string;
  status?: 'active' | 'inactive' | 'graduated';
}

export interface StudentsRequest {
  page?: number;
  limit?: number;
  search?: string;
  collegeId?: string;
  departmentId?: string;
  status?: string;
}

export interface StudentsResponse {
  students: Student[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface StudentResponse {
  student: Student;
}
```

### College Types

**Location**: `src/store/types/college.ts`

```typescript
export interface College {
  _id: string;
  name: string;
  description?: string;
  establishedYear?: number;
  location?: Address;
  dean?: string;
  contactInfo?: ContactInfo;
  departments: Department[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateCollegeRequest {
  name: string;
  description?: string;
  establishedYear?: number;
  location?: Address;
  dean?: string;
  contactInfo?: ContactInfo;
}

export interface UpdateCollegeRequest {
  id: string;
  name?: string;
  description?: string;
  establishedYear?: number;
  location?: Address;
  dean?: string;
  contactInfo?: ContactInfo;
}

export interface CollegesRequest {
  page?: number;
  limit?: number;
  search?: string;
}

export interface CollegesResponse {
  colleges: College[];
  pagination: PaginationInfo;
}

export interface CollegeResponse {
  college: College;
}
```

### Common Types

```typescript
export interface Address {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  website?: string;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
```

## 💡 Usage Examples

### Basic Query Usage

```typescript
function StudentProfile({ studentId }: { studentId: string }) {
  const { data: student, isLoading, error } = useGetStudentByIdQuery(studentId);

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  if (!student) return <NotFound />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{student.name}</CardTitle>
        <CardDescription>{student.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>College: {student.college.name}</p>
        <p>Department: {student.department.name}</p>
        <p>GPA: {student.gpa}</p>
      </CardContent>
    </Card>
  );
}
```

### Mutation Usage with Optimistic Updates

```typescript
function CreateStudentForm() {
  const [createStudent, { isLoading }] = useCreateStudentMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<CreateStudentRequest>();

  const onSubmit = async (data: CreateStudentRequest) => {
    try {
      await createStudent(data).unwrap();
      toast.success('Student created successfully');
      router.push('/admin/students');
    } catch (error) {
      toast.error('Failed to create student');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name', { required: 'Name is required' })}
        placeholder="Student Name"
        error={!!errors.name}
      />
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      
      <Input
        {...register('email', { required: 'Email is required' })}
        type="email"
        placeholder="Email"
        error={!!errors.email}
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      
      <Button type="submit" loading={isLoading}>
        Create Student
      </Button>
    </form>
  );
}
```

### Pagination with RTK Query

```typescript
function StudentsList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  
  const { data, isLoading, isFetching } = useGetStudentsQuery({
    page,
    limit: 10,
    search,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    setPage(1); // Reset to first page
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          <StudentsTable students={data?.students || []} />
          <PaginationControls
            currentPage={page}
            totalPages={data?.pagination.totalPages || 0}
            onPageChange={handlePageChange}
            loading={isFetching}
          />
        </>
      )}
    </div>
  );
}
```

### Real-time Updates with Polling

```typescript
function DashboardStats() {
  const { data: stats } = useGetAdminStatsQuery('admin-id', {
    pollingInterval: 30000, // Poll every 30 seconds
    refetchOnFocus: true,   // Refetch when window gains focus
    refetchOnReconnect: true, // Refetch when network reconnects
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Students"
        value={stats?.totalStudents || 0}
        trend={stats?.studentsTrend}
      />
      <StatCard
        title="Total Teachers"
        value={stats?.totalTeachers || 0}
        trend={stats?.teachersTrend}
      />
      <StatCard
        title="Total Courses"
        value={stats?.totalCourses || 0}
        trend={stats?.coursesTrend}
      />
      <StatCard
        title="Active Sessions"
        value={stats?.activeSessions || 0}
        trend={stats?.sessionsTrend}
      />
    </div>
  );
}
```

This API documentation provides comprehensive coverage of the TaskFlow frontend API integration, including all services, types, and usage patterns. The RTK Query implementation ensures efficient data management with automatic caching, background updates, and optimistic UI updates.
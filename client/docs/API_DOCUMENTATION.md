# API Documentation

This document provides comprehensive information about the Task Flow API endpoints, data structures, and integration patterns.

## 🔗 Base Configuration

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

### Authentication
All API requests require authentication via HTTP-only cookies. The authentication state is managed through Redux Toolkit with RTK Query for efficient caching and state management.

## 🔐 Authentication Endpoints

### Login
```typescript
POST /auth/login
```

**Request Body:**
```typescript
{
  id: string;        // User ID
  password: string;  // User password
}
```

**Response:**
```typescript
{
  role: string;      // User role: 'student' | 'teacher' | 'admin' | 'super-admin'
  data: {
    id: string;      // User ID
    _id: string;     // Database ID
  }
}
```

### Get Current User
```typescript
GET /auth/me
```

**Response:**
```typescript
{
  role: string;      // User role
  id: string;        // User ID
}
```

### Logout
```typescript
POST /auth/logout
```

**Response:**
```typescript
void // No response body, clears authentication cookies
```

## 👨‍🎓 Student API Endpoints

### Get Student by ID
```typescript
GET /students/{id}
```

**Response:**
```typescript
{
  _id: string;
  name: string;
  email: string;
  universityId: {
    _id: string;
    name: string;
  };
  courses?: Course[];
}
```

### Get Student Courses
```typescript
GET /students/{id}/courses
```

**Response:**
```typescript
{
  courses: Array<{
    _id: string;
    name: string;
  }>;
}
```

### Get Student Course Details
```typescript
GET /students/{id}/courses/{courseId}
```

**Response:**
```typescript
{
  course: {
    _id: string;
    name: string;
    teachers: Array<{
      _id: string;
      name: string;
      email: string;
    }>;
  };
}
```

### Get Student Grades
```typescript
GET /students/{id}/grades
```

**Response:**
```typescript
{
  grades: Array<{
    _id: string;
    courseId: string;
    courseName: string;
    grade: string;
    studentId: string;
    createdAt: string;
    updatedAt: string;
  }>;
}
```

### Get Student Assignments
```typescript
GET /students/{id}/assignments
```

**Response:**
```typescript
{
  assignments: Array<{
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    courseId: string;
    courseName: string;
    studentId: string;
    createdAt: string;
    updatedAt: string;
  }>;
}
```

### Get Student Calendar
```typescript
GET /students/{id}/calendar
```

**Response:**
```typescript
{
  calendar: Array<{
    _id: string;
    title: string;
    description: string;
    date: string;
    studentId: string;
    createdAt: string;
    updatedAt: string;
    type: 'assignment' | 'event' | 'exam';
  }>;
}
```

## 👨‍🏫 Admin API Endpoints

### Get Admin by ID
```typescript
GET /admin/{id}
```

**Response:**
```typescript
{
  _id: string;
  name: string;
  email: string;
  role: string;
  universityId: string;
}
```

### Get Paginated Admins
```typescript
GET /admin?page={page}
```

**Query Parameters:**
- `page`: Page number (default: 1)

**Response:**
```typescript
{
  admins: Admin[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}
```

### Create Admin
```typescript
POST /admin
```

**Request Body:**
```typescript
{
  name: string;
  password: string;
}
```

### Update Admin
```typescript
PUT /admin
```

**Request Body:**
```typescript
{
  id: string;
  name?: string;
  password?: string;
}
```

### Delete Admin
```typescript
DELETE /admin/admin/{id}
```

## 🏫 University Management APIs

### College API
```typescript
// Get colleges
GET /colleges

// Create college
POST /colleges
{
  name: string;
  universityId: string;
}

// Update college
PUT /colleges/{id}
{
  name?: string;
}

// Delete college
DELETE /colleges/{id}
```

### Department API
```typescript
// Get departments
GET /departments

// Create department
POST /departments
{
  name: string;
  collegeId: string;
}

// Update department
PUT /departments/{id}
{
  name?: string;
}

// Delete department
DELETE /departments/{id}
```

### Teacher API
```typescript
// Get teachers
GET /teachers

// Create teacher
POST /teachers
{
  name: string;
  email: string;
  departmentId: string;
}

// Update teacher
PUT /teachers/{id}
{
  name?: string;
  email?: string;
}

// Delete teacher
DELETE /teachers/{id}
```

## 🔄 RTK Query Integration

### API Services Structure

The application uses RTK Query for efficient API state management with the following services:

```typescript
// Authentication API
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL_AUTH,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getMe: builder.query<{ role: string; id: string }, void>(),
    login: builder.mutation<LoginResponse, LoginRequest>(),
    logout: builder.mutation<void, void>(),
  }),
});

// Student API
export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    createStudent: builder.mutation<Student, Partial<Student>>(),
    getStudentsPage: builder.query<PaginatedStudentsResponse, PaginationParams>(),
    getStudentById: builder.query<Student, string>(),
    updateStudent: builder.mutation<Student, UpdateStudentRequest>(),
    deleteStudent: builder.mutation<{ message: string }, string>(),
    // ... more endpoints
  }),
});
```

### Usage in Components

```typescript
import { useGetStudentByIdQuery, useUpdateStudentMutation } from '@/store/services/studentApi';

function StudentProfile({ studentId }: { studentId: string }) {
  const { data: student, isLoading, error } = useGetStudentByIdQuery(studentId);
  const [updateStudent, { isLoading: isUpdating }] = useUpdateStudentMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading student</div>;

  return (
    <div>
      <h1>{student?.name}</h1>
      {/* Component content */}
    </div>
  );
}
```

## 📊 Data Types and Interfaces

### Core Types

```typescript
// Student Types
export interface Student {
  _id: string;
  name: string;
  email: string;
  universityId: { _id: string; name: string };
  courses?: Course[];
}

export interface Course {
  _id: string;
  name: string;
}

export interface CourseDetails extends Course {
  teachers: {
    _id: string;
    name: string;
    email: string;
  }[];
}

// Admin Types
export interface Admin {
  _id: string;
  name: string;
  email: string;
  role: string;
  universityId: string;
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

// Assignment Types
export interface Assignment {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  courseId: string;
  courseName: string;
  studentId: string;
  createdAt: string;
  updatedAt: string;
}

// Grade Types
export interface Grade {
  _id: string;
  courseId: string;
  courseName: string;
  grade: string;
  studentId: string;
  createdAt: string;
  updatedAt: string;
}

// Calendar Types
export interface Calendar {
  _id: string;
  title: string;
  description: string;
  date: string;
  studentId: string;
  createdAt: string;
  updatedAt: string;
  type: 'assignment' | 'event' | 'exam';
}
```

## 🔒 Error Handling

### Standard Error Response
```typescript
{
  error: {
    status: number;
    data: {
      message: string;
      code?: string;
      details?: any;
    };
  };
}
```

### Common Error Codes
- `401`: Unauthorized - Invalid or expired authentication
- `403`: Forbidden - Insufficient permissions
- `404`: Not Found - Resource doesn't exist
- `422`: Validation Error - Invalid request data
- `500`: Internal Server Error - Server-side error

### Error Handling in Components
```typescript
const { data, error, isLoading } = useGetStudentByIdQuery(studentId);

if (error) {
  if ('status' in error) {
    // RTK Query error
    const status = error.status;
    const message = error.data?.message || 'An error occurred';
    
    if (status === 401) {
      // Redirect to login
      router.push('/auth/login');
    } else if (status === 403) {
      // Show unauthorized message
      return <Unauthorized />;
    }
  }
}
```

## 🚀 Performance Optimizations

### Caching Strategy
- **Automatic Caching**: RTK Query automatically caches responses
- **Tag-based Invalidation**: Use tags to invalidate related data
- **Selective Refetching**: Only refetch when necessary

### Pagination
```typescript
// Efficient pagination with RTK Query
const { data, isLoading, isFetching } = useGetStudentsPageQuery({
  page: currentPage,
  limit: 40
});
```

### Background Refetching
```typescript
// Enable background refetching for real-time data
const { data } = useGetStudentByIdQuery(studentId, {
  pollingInterval: 30000, // Refetch every 30 seconds
  refetchOnFocus: true,   // Refetch when window gains focus
});
```

## 📝 Best Practices

1. **Use TypeScript**: All API calls are fully typed
2. **Error Boundaries**: Implement proper error handling
3. **Loading States**: Show loading indicators for better UX
4. **Optimistic Updates**: Use optimistic updates for better perceived performance
5. **Cache Management**: Leverage RTK Query's caching capabilities
6. **Authentication**: Always handle authentication states properly

## 🔗 Related Documentation

- [Architecture Documentation](./ARCHITECTURE.md)
- [Component Documentation](./COMPONENTS.md)
- [Security Documentation](./SECURITY.md)
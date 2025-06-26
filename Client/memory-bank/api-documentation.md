# API Documentation - Unified Router Architecture

## Overview

The Task-Flow LMS frontend integrates with backend APIs using RTK Query for efficient data fetching and caching. The system supports both real API integration and mock data for development.

## Authentication Integration

### Redux-Based Authentication

```typescript
// Store Integration
import { useAppSelector } from "@/store/hooks";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "@/store/slices/authSlice";

// Component Usage
const MyComponent = () => {
  const user = useAppSelector(selectCurrentUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <div>
      {isAuthenticated ? <p>Welcome, {user?.name}!</p> : <p>Please log in</p>}
    </div>
  );
};
```

### Authentication State Structure

```typescript
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: "STUDENT" | "TEACHER" | "ADMIN" | "SUPER_ADMIN";
  avatar?: string;
  profileData: Record<string, unknown>;
}
```

## API Integration Patterns

### RTK Query Setup

```typescript
// Base API Slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Task", "Course", "Assignment"],
  endpoints: () => ({}),
});
```

### Authentication API Endpoints

```typescript
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      queryFn: async (credentials) => {
        // Supports both mock and real API
        if (USE_MOCK_API) {
          const data = await mockLogin(credentials);
          return { data };
        } else {
          const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });
          const data = await response.json();
          return { data };
        }
      },
    }),
    logout: builder.mutation<void, void>({
      queryFn: async () => {
        // Handle logout logic
        return { data: undefined };
      },
    }),
    refreshToken: builder.mutation<TokenResponse, void>({
      queryFn: async () => {
        // Handle token refresh
        return { data: { token: "new-token", expiresIn: 3600 } };
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenMutation } =
  authApiSlice;
```

## Role-Based API Access

### Permission-Based Endpoints

```typescript
// User Management API (Admin/SuperAdmin only)
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], { role?: string }>({
      query: ({ role }) => ({
        url: "/users",
        params: role ? { role } : {},
      }),
      providesTags: ["User"],
    }),
    createUser: builder.mutation<User, CreateUserRequest>({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<User, UpdateUserRequest>({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
```

### Role-Based Hook Usage

```typescript
// Component with role-based API access
const UserManagement = () => {
  const user = useAppSelector(selectCurrentUser);

  // Only fetch users if user has permission
  const {
    data: users,
    isLoading,
    error,
  } = useGetUsersQuery(
    {},
    {
      skip: !user || !["ADMIN", "SUPER_ADMIN"].includes(user.role),
    }
  );

  const [createUser] = useCreateUserMutation();

  const handleCreateUser = async (userData: CreateUserRequest) => {
    if (user && ["ADMIN", "SUPER_ADMIN"].includes(user.role)) {
      try {
        await createUser(userData).unwrap();
      } catch (error) {
        console.error("Failed to create user:", error);
      }
    }
  };

  if (!user || !["ADMIN", "SUPER_ADMIN"].includes(user.role)) {
    return <div>Access denied</div>;
  }

  return <div>{/* User management interface */}</div>;
};
```

## Mock API Integration

### Development Mock System

```typescript
// Mock Authentication
export const mockLogin = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const mockUsers = {
    "student@example.com": {
      id: "1",
      email: "student@example.com",
      name: "Student User",
      role: "STUDENT" as const,
    },
    "teacher@example.com": {
      id: "2",
      email: "teacher@example.com",
      name: "Teacher User",
      role: "TEACHER" as const,
    },
    "admin@example.com": {
      id: "3",
      email: "admin@example.com",
      name: "Admin User",
      role: "ADMIN" as const,
    },
    "superadmin@example.com": {
      id: "4",
      email: "superadmin@example.com",
      name: "Super Admin User",
      role: "SUPER_ADMIN" as const,
    },
  };

  const user = mockUsers[credentials.email as keyof typeof mockUsers];

  if (user && credentials.password === "password") {
    return {
      user,
      token: `mock-token-${user.id}`,
      refreshToken: `mock-refresh-${user.id}`,
    };
  }

  throw new Error("Invalid credentials");
};
```

## Error Handling

### API Error Patterns

```typescript
// Error Boundary for API calls
const ApiErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary
      fallback={({ error, reset }) => (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <p>{error.message}</p>
          <button onClick={reset}>Try again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

// Hook with error handling
const useApiWithErrorHandling = () => {
  const [error, setError] = useState<string | null>(null);

  const handleApiCall = async (apiCall: () => Promise<any>) => {
    try {
      setError(null);
      const result = await apiCall();
      return result;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
      throw err;
    }
  };

  return { handleApiCall, error, clearError: () => setError(null) };
};
```

## Future API Integration

### Real-Time API Support

```typescript
// Future Socket.io integration
interface SocketEvents {
  "user:status": (status: UserStatus) => void;
  "task:updated": (task: Task) => void;
  "notification:new": (notification: Notification) => void;
  "grade:posted": (grade: Grade) => void;
}

// Socket API slice (planned)
export const socketApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribeToUpdates: builder.query<void, string>({
      queryFn: () => ({ data: undefined }),
      async onCacheEntryAdded(
        userId,
        { dispatch, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = io(SOCKET_URL, {
          auth: { userId },
        });

        try {
          await cacheDataLoaded;

          socket.on("task:updated", (task) => {
            dispatch(
              apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                const index = draft.findIndex((t) => t.id === task.id);
                if (index !== -1) {
                  draft[index] = task;
                }
              })
            );
          });
        } catch {
          // Handle errors
        }

        await cacheEntryRemoved;
        socket.close();
      },
    }),
  }),
});
```

## Performance Optimization

### API Caching Strategy

```typescript
// Cache configuration
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["User", "Task", "Course"],
  endpoints: () => ({}),
  keepUnusedDataFor: 300, // 5 minutes
});

// Selective cache invalidation
const invalidateUserCache = (userId: string) => {
  dispatch(apiSlice.util.invalidateTags([{ type: "User", id: userId }]));
};

// Prefetching for better UX
const prefetchUserData = (userId: string) => {
  dispatch(apiSlice.util.prefetch("getUser", userId, { force: true }));
};
```

### Optimistic Updates

```typescript
// Optimistic update pattern
const useOptimisticUpdate = () => {
  const [updateUser] = useUpdateUserMutation();

  const optimisticUpdateUser = async (
    userId: string,
    updates: Partial<User>
  ) => {
    // Optimistically update the cache
    const originalUser = dispatch(
      apiSlice.util.updateQueryData("getUser", userId, (draft) => {
        Object.assign(draft, updates);
      })
    );

    try {
      await updateUser({ id: userId, ...updates }).unwrap();
    } catch {
      // Revert on error
      originalUser.undo();
    }
  };

  return { optimisticUpdateUser };
};
```

This API documentation reflects the unified router architecture where all API calls are role-aware and support both development mock data and production API integration. - Task-Flow LMS Frontend

## API Base Configuration

### Base URL Configuration

```typescript
// lib/api.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000";

// API Client Configuration
class APIClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new APIError(response.status, await response.text());
    }

    return response.json();
  }

  get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

export const apiClient = new APIClient(API_BASE_URL);
```

## Authentication API

### Authentication Endpoints

```typescript
// Authentication API Interface
interface AuthAPI {
  login(credentials: LoginCredentials): Promise<LoginResponse>;
  logout(): Promise<void>;
  refreshToken(): Promise<TokenResponse>;
  verifyToken(): Promise<UserProfile>;
}

// Types
interface LoginCredentials {
  email: string; // University email or student ID
  password: string; // User password
}

interface LoginResponse {
  success: boolean;
  token: string; // JWT access token
  refreshToken: string; // Refresh token for token renewal
  user: {
    id: string;
    email: string;
    role: "STUDENT" | "TEACHER" | "ADMIN" | "SUPER_ADMIN";
    profile: UserProfile;
  };
  expiresIn: number; // Token expiration time in seconds
}

interface TokenResponse {
  token: string;
  expiresIn: number;
}

// Authentication API Implementation
export const authAPI: AuthAPI = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>("/auth/login", credentials);
  },

  async logout(): Promise<void> {
    return apiClient.post<void>("/auth/logout");
  },

  async refreshToken(): Promise<TokenResponse> {
    return apiClient.post<TokenResponse>("/auth/refresh");
  },

  async verifyToken(): Promise<UserProfile> {
    return apiClient.get<UserProfile>("/auth/verify");
  },
};

// Usage Example
const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authAPI.login({ email, password });

    // Store token and user data
    localStorage.setItem("token", response.token);
    localStorage.setItem("refreshToken", response.refreshToken);

    // Set token for subsequent API calls
    apiClient.setToken(response.token);

    // Redirect based on role
    const redirectPath = getRoleBasedRedirect(
      response.user.role,
      response.user.id
    );
    router.push(redirectPath);
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
```

## Student API

### Student Profile & Dashboard

```typescript
interface StudentAPI {
  getProfile(studentId: string): Promise<StudentProfile>;
  getCourses(studentId: string): Promise<Course[]>;
  getAssignments(
    studentId: string,
    filters?: AssignmentFilters
  ): Promise<Assignment[]>;
  getGrades(studentId: string, filters?: GradeFilters): Promise<Grade[]>;
  getCalendar(studentId: string): Promise<CalendarEvent[]>;
}

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  studentId: string;
  college: string;
  department: string;
  enrollmentDate: Date;
  avatar?: string;
  phone?: string;
  address?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

interface Course {
  id: string;
  name: string;
  code: string;
  description?: string;
  credits: number;
  semester: string;
  teacher: {
    id: string;
    name: string;
    title: string;
    email: string;
  };
  schedule: {
    day: string;
    startTime: string;
    endTime: string;
    location: string;
  }[];
  enrollmentStatus: "ACTIVE" | "COMPLETED" | "DROPPED" | "PENDING";
  enrollmentDate: Date;
  currentGrade?: number;
  attendancePercentage?: number;
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  maxGrade: number;
  courseId: string;
  courseName: string;
  teacherId: string;
  teacherName: string;
  status: "PENDING" | "SUBMITTED" | "GRADED" | "OVERDUE";
  submission?: {
    id: string;
    submittedAt: Date;
    files: FileInfo[];
    notes?: string;
    grade?: number;
    feedback?: string;
    gradedAt?: Date;
  };
  attachments: FileInfo[];
  instructions?: string;
  allowedFileTypes: string[];
  maxFileSize: number;
  allowLateSubmission: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Grade {
  id: string;
  assignmentId: string;
  assignmentTitle: string;
  courseId: string;
  courseName: string;
  grade: number;
  maxGrade: number;
  percentage: number;
  gradedAt: Date;
  feedback?: string;
  submissionId: string;
}

interface CalendarEvent {
  id: string;
  title: string;
  type: "ASSIGNMENT_DUE" | "EXAM" | "LECTURE" | "HOLIDAY" | "DEADLINE";
  date: Date;
  time?: string;
  description?: string;
  courseId?: string;
  courseName?: string;
  location?: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
}

// Student API Implementation
export const studentAPI: StudentAPI = {
  async getProfile(studentId: string): Promise<StudentProfile> {
    return apiClient.get<StudentProfile>(`/students/${studentId}/profile`);
  },

  async getCourses(studentId: string): Promise<Course[]> {
    return apiClient.get<Course[]>(`/students/${studentId}/courses`);
  },

  async getAssignments(
    studentId: string,
    filters?: AssignmentFilters
  ): Promise<Assignment[]> {
    const queryParams = new URLSearchParams();
    if (filters?.status) queryParams.append("status", filters.status);
    if (filters?.courseId) queryParams.append("courseId", filters.courseId);
    if (filters?.fromDate)
      queryParams.append("fromDate", filters.fromDate.toISOString());

    const endpoint = `/students/${studentId}/assignments${
      queryParams.toString() ? "?" + queryParams.toString() : ""
    }`;
    return apiClient.get<Assignment[]>(endpoint);
  },

  async getGrades(studentId: string, filters?: GradeFilters): Promise<Grade[]> {
    const queryParams = new URLSearchParams();
    if (filters?.courseId) queryParams.append("courseId", filters.courseId);
    if (filters?.semester) queryParams.append("semester", filters.semester);

    const endpoint = `/students/${studentId}/grades${
      queryParams.toString() ? "?" + queryParams.toString() : ""
    }`;
    return apiClient.get<Grade[]>(endpoint);
  },

  async getCalendar(studentId: string): Promise<CalendarEvent[]> {
    return apiClient.get<CalendarEvent[]>(`/students/${studentId}/calendar`);
  },
};
```

### Assignment Submission API

```typescript
interface SubmissionAPI {
  create(
    assignmentId: string,
    data: CreateSubmissionRequest
  ): Promise<Submission>;
  update(
    submissionId: string,
    data: UpdateSubmissionRequest
  ): Promise<Submission>;
  get(submissionId: string): Promise<Submission>;
  delete(submissionId: string): Promise<void>;
}

interface CreateSubmissionRequest {
  files: File[];
  notes?: string;
}

interface UpdateSubmissionRequest {
  files?: File[];
  notes?: string;
}

interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  files: FileInfo[];
  notes?: string;
  submittedAt: Date;
  updatedAt?: Date;
  grade?: number;
  feedback?: string;
  gradedAt?: Date;
  status: "SUBMITTED" | "GRADED";
}

export const submissionAPI: SubmissionAPI = {
  async create(
    assignmentId: string,
    data: CreateSubmissionRequest
  ): Promise<Submission> {
    const formData = new FormData();
    data.files.forEach((file) => formData.append("files", file));
    if (data.notes) formData.append("notes", data.notes);

    return fetch(`${API_BASE_URL}/assignments/${assignmentId}/submit`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: formData,
    }).then((response) => response.json());
  },

  async update(
    submissionId: string,
    data: UpdateSubmissionRequest
  ): Promise<Submission> {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => formData.append("files", file));
    }
    if (data.notes) formData.append("notes", data.notes);

    return fetch(`${API_BASE_URL}/submissions/${submissionId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: formData,
    }).then((response) => response.json());
  },

  async get(submissionId: string): Promise<Submission> {
    return apiClient.get<Submission>(`/submissions/${submissionId}`);
  },

  async delete(submissionId: string): Promise<void> {
    return apiClient.delete<void>(`/submissions/${submissionId}`);
  },
};
```

## Teacher API

### Teacher Dashboard & Management

```typescript
interface TeacherAPI {
  getProfile(teacherId: string): Promise<TeacherProfile>;
  getLectures(teacherId: string, filters?: LectureFilters): Promise<Lecture[]>;
  getStudents(teacherId: string, filters?: StudentFilters): Promise<Student[]>;
  getCourses(teacherId: string): Promise<TeacherCourse[]>;
  getAssignments(teacherId: string): Promise<TeacherAssignment[]>;
}

interface TeacherProfile {
  id: string;
  name: string;
  email: string;
  title: string; // Doctor, Assistant, Teacher
  department: string;
  college: string;
  officeHours: string;
  officeLocation?: string;
  phone?: string;
  avatar?: string;
  specialization?: string[];
  experience?: number;
  biography?: string;
}

interface Lecture {
  id: string;
  courseId: string;
  courseName: string;
  title?: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  topic?: string;
  description?: string;
  attendanceRequired: boolean;
  materials?: FileInfo[];
  status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
}

interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  avatar?: string;
  courses: {
    id: string;
    name: string;
    enrollmentDate: Date;
    currentGrade?: number;
    attendance?: number;
  }[];
  recentActivity: {
    type:
      | "ASSIGNMENT_SUBMITTED"
      | "LATE_SUBMISSION"
      | "MISSING_ASSIGNMENT"
      | "GRADE_IMPROVED";
    date: Date;
    description: string;
    assignmentId?: string;
  }[];
  totalAssignments: number;
  submittedAssignments: number;
  averageGrade: number;
}

interface TeacherCourse {
  id: string;
  name: string;
  code: string;
  semester: string;
  description?: string;
  enrolledStudents: number;
  assignments: {
    id: string;
    title: string;
    dueDate: Date;
    submissions: number;
    totalStudents: number;
    averageGrade?: number;
  }[];
  schedule: {
    day: string;
    startTime: string;
    endTime: string;
    location: string;
  }[];
}

export const teacherAPI: TeacherAPI = {
  async getProfile(teacherId: string): Promise<TeacherProfile> {
    return apiClient.get<TeacherProfile>(`/teachers/${teacherId}/profile`);
  },

  async getLectures(
    teacherId: string,
    filters?: LectureFilters
  ): Promise<Lecture[]> {
    const queryParams = new URLSearchParams();
    if (filters?.fromDate)
      queryParams.append("from", filters.fromDate.toISOString());
    if (filters?.toDate) queryParams.append("to", filters.toDate.toISOString());
    if (filters?.courseId) queryParams.append("courseId", filters.courseId);

    const endpoint = `/teachers/${teacherId}/lectures${
      queryParams.toString() ? "?" + queryParams.toString() : ""
    }`;
    return apiClient.get<Lecture[]>(endpoint);
  },

  async getStudents(
    teacherId: string,
    filters?: StudentFilters
  ): Promise<Student[]> {
    const queryParams = new URLSearchParams();
    if (filters?.courseId) queryParams.append("courseId", filters.courseId);
    if (filters?.search) queryParams.append("search", filters.search);

    const endpoint = `/teachers/${teacherId}/students${
      queryParams.toString() ? "?" + queryParams.toString() : ""
    }`;
    return apiClient.get<Student[]>(endpoint);
  },

  async getCourses(teacherId: string): Promise<TeacherCourse[]> {
    return apiClient.get<TeacherCourse[]>(`/teachers/${teacherId}/courses`);
  },

  async getAssignments(teacherId: string): Promise<TeacherAssignment[]> {
    return apiClient.get<TeacherAssignment[]>(
      `/teachers/${teacherId}/assignments`
    );
  },
};
```

### Assignment Creation & Management API

```typescript
interface AssignmentAPI {
  create(data: CreateAssignmentRequest): Promise<Assignment>;
  update(
    assignmentId: string,
    data: UpdateAssignmentRequest
  ): Promise<Assignment>;
  delete(assignmentId: string): Promise<void>;
  getSubmissions(assignmentId: string): Promise<SubmissionWithStudent[]>;
  gradeSubmission(
    submissionId: string,
    data: GradeSubmissionRequest
  ): Promise<Grade>;
}

interface CreateAssignmentRequest {
  title: string;
  description: string;
  dueDate: string; // ISO date string
  maxGrade: number;
  courseId: string;
  instructions?: string;
  attachments?: File[];
  allowedFileTypes: string[];
  maxFileSize: number;
  allowLateSubmission: boolean;
  latePenalty?: number; // Percentage penalty per day
}

interface UpdateAssignmentRequest {
  title?: string;
  description?: string;
  dueDate?: string;
  maxGrade?: number;
  instructions?: string;
  allowLateSubmission?: boolean;
  latePenalty?: number;
}

interface SubmissionWithStudent {
  id: string;
  assignmentId: string;
  student: {
    id: string;
    name: string;
    email: string;
    studentId: string;
    avatar?: string;
  };
  files: FileInfo[];
  notes?: string;
  submittedAt: Date;
  isLate: boolean;
  daysLate?: number;
  grade?: number;
  feedback?: string;
  gradedAt?: Date;
  status: "SUBMITTED" | "GRADED";
}

interface GradeSubmissionRequest {
  grade: number;
  feedback?: string;
}

export const assignmentAPI: AssignmentAPI = {
  async create(data: CreateAssignmentRequest): Promise<Assignment> {
    const formData = new FormData();

    // Add text fields
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "attachments" && value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    // Add files
    if (data.attachments) {
      data.attachments.forEach((file) => formData.append("attachments", file));
    }

    return fetch(`${API_BASE_URL}/assignments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: formData,
    }).then((response) => response.json());
  },

  async update(
    assignmentId: string,
    data: UpdateAssignmentRequest
  ): Promise<Assignment> {
    return apiClient.put<Assignment>(`/assignments/${assignmentId}`, data);
  },

  async delete(assignmentId: string): Promise<void> {
    return apiClient.delete<void>(`/assignments/${assignmentId}`);
  },

  async getSubmissions(assignmentId: string): Promise<SubmissionWithStudent[]> {
    return apiClient.get<SubmissionWithStudent[]>(
      `/assignments/${assignmentId}/submissions`
    );
  },

  async gradeSubmission(
    submissionId: string,
    data: GradeSubmissionRequest
  ): Promise<Grade> {
    return apiClient.put<Grade>(`/submissions/${submissionId}/grade`, data);
  },
};
```

## Admin API

### Admin Dashboard & User Management

```typescript
interface AdminAPI {
  getProfile(adminId: string): Promise<AdminProfile>;
  getTeachers(adminId: string, filters?: UserFilters): Promise<Teacher[]>;
  getStudents(adminId: string, filters?: UserFilters): Promise<Student[]>;
  createTeacher(data: CreateTeacherRequest): Promise<Teacher>;
  updateTeacher(
    teacherId: string,
    data: UpdateTeacherRequest
  ): Promise<Teacher>;
  deleteTeacher(teacherId: string): Promise<void>;
  createStudent(data: CreateStudentRequest): Promise<Student>;
  updateStudent(
    studentId: string,
    data: UpdateStudentRequest
  ): Promise<Student>;
  deleteStudent(studentId: string): Promise<void>;
}

interface AdminProfile {
  id: string;
  name: string;
  email: string;
  college: string;
  department?: string;
  permissions: string[];
  managedTeachers: number;
  managedStudents: number;
  createdAt: Date;
  lastActive: Date;
}

interface Teacher {
  id: string;
  name: string;
  email: string;
  title: string;
  department: string;
  onlineStatus: "ONLINE" | "OFFLINE";
  lastActive: Date;
  studentsCount: number;
  coursesCount: number;
  assignmentsCount: number;
  createdAt: Date;
  avatar?: string;
}

interface CreateTeacherRequest {
  name: string;
  email: string;
  password: string;
  title: string;
  department: string;
  officeHours?: string;
  officeLocation?: string;
  phone?: string;
}

interface UpdateTeacherRequest {
  name?: string;
  email?: string;
  title?: string;
  department?: string;
  officeHours?: string;
  officeLocation?: string;
  phone?: string;
  isActive?: boolean;
}

interface CreateStudentRequest {
  name: string;
  email: string;
  password: string;
  studentId: string;
  department: string;
  enrollmentDate: string;
  phone?: string;
}

interface UpdateStudentRequest {
  name?: string;
  email?: string;
  department?: string;
  phone?: string;
  isActive?: boolean;
}

export const adminAPI: AdminAPI = {
  async getProfile(adminId: string): Promise<AdminProfile> {
    return apiClient.get<AdminProfile>(`/admins/${adminId}/profile`);
  },

  async getTeachers(
    adminId: string,
    filters?: UserFilters
  ): Promise<Teacher[]> {
    const queryParams = new URLSearchParams();
    if (filters?.college) queryParams.append("college", filters.college);
    if (filters?.department)
      queryParams.append("department", filters.department);
    if (filters?.status) queryParams.append("status", filters.status);
    if (filters?.search) queryParams.append("search", filters.search);

    const endpoint = `/admins/${adminId}/teachers${
      queryParams.toString() ? "?" + queryParams.toString() : ""
    }`;
    return apiClient.get<Teacher[]>(endpoint);
  },

  async getStudents(
    adminId: string,
    filters?: UserFilters
  ): Promise<Student[]> {
    const queryParams = new URLSearchParams();
    if (filters?.college) queryParams.append("college", filters.college);
    if (filters?.department)
      queryParams.append("department", filters.department);
    if (filters?.status) queryParams.append("status", filters.status);
    if (filters?.search) queryParams.append("search", filters.search);

    const endpoint = `/admins/${adminId}/students${
      queryParams.toString() ? "?" + queryParams.toString() : ""
    }`;
    return apiClient.get<Student[]>(endpoint);
  },

  async createTeacher(data: CreateTeacherRequest): Promise<Teacher> {
    return apiClient.post<Teacher>("/teachers", data);
  },

  async updateTeacher(
    teacherId: string,
    data: UpdateTeacherRequest
  ): Promise<Teacher> {
    return apiClient.put<Teacher>(`/teachers/${teacherId}`, data);
  },

  async deleteTeacher(teacherId: string): Promise<void> {
    return apiClient.delete<void>(`/teachers/${teacherId}`);
  },

  async createStudent(data: CreateStudentRequest): Promise<Student> {
    return apiClient.post<Student>("/students", data);
  },

  async updateStudent(
    studentId: string,
    data: UpdateStudentRequest
  ): Promise<Student> {
    return apiClient.put<Student>(`/students/${studentId}`, data);
  },

  async deleteStudent(studentId: string): Promise<void> {
    return apiClient.delete<void>(`/students/${studentId}`);
  },
};
```

## Super Admin API

### System Administration

```typescript
interface SuperAdminAPI {
  getProfile(superAdminId: string): Promise<SuperAdminProfile>;
  getAdmins(): Promise<Admin[]>;
  createAdmin(data: CreateAdminRequest): Promise<Admin>;
  updateAdmin(adminId: string, data: UpdateAdminRequest): Promise<Admin>;
  deleteAdmin(adminId: string): Promise<void>;
  getSystemSettings(): Promise<SystemSettings>;
  updateSystemSettings(
    data: UpdateSystemSettingsRequest
  ): Promise<SystemSettings>;
  getSystemStats(): Promise<SystemStats>;
}

interface SuperAdminProfile {
  id: string;
  name: string;
  email: string;
  permissions: string[];
  createdAt: Date;
  lastActive: Date;
}

interface Admin {
  id: string;
  name: string;
  email: string;
  college: string;
  permissions: string[];
  createdAt: Date;
  lastActive: Date;
  managedTeachers: number;
  managedStudents: number;
  isActive: boolean;
}

interface CreateAdminRequest {
  name: string;
  email: string;
  password: string;
  college: string;
  permissions: string[];
}

interface UpdateAdminRequest {
  name?: string;
  email?: string;
  college?: string;
  permissions?: string[];
  isActive?: boolean;
}

interface SystemSettings {
  universityName: string;
  maxFileUploadSize: number;
  allowedFileTypes: string[];
  sessionTimeout: number;
  maintenanceMode: boolean;
  emailNotifications: boolean;
  defaultLanguage: "en" | "ar";
  supportedLanguages: string[];
  academicYear: string;
  gradePassingThreshold: number;
}

interface UpdateSystemSettingsRequest {
  universityName?: string;
  maxFileUploadSize?: number;
  allowedFileTypes?: string[];
  sessionTimeout?: number;
  maintenanceMode?: boolean;
  emailNotifications?: boolean;
  defaultLanguage?: "en" | "ar";
  academicYear?: string;
  gradePassingThreshold?: number;
}

interface SystemStats {
  totalUsers: {
    students: number;
    teachers: number;
    admins: number;
  };
  activeUsers: {
    students: number;
    teachers: number;
    admins: number;
  };
  totalCourses: number;
  totalAssignments: number;
  totalSubmissions: number;
  systemUptime: number;
  storageUsed: number;
  storageLimit: number;
}

export const superAdminAPI: SuperAdminAPI = {
  async getProfile(superAdminId: string): Promise<SuperAdminProfile> {
    return apiClient.get<SuperAdminProfile>(
      `/superadmin/${superAdminId}/profile`
    );
  },

  async getAdmins(): Promise<Admin[]> {
    return apiClient.get<Admin[]>("/superadmin/admins");
  },

  async createAdmin(data: CreateAdminRequest): Promise<Admin> {
    return apiClient.post<Admin>("/superadmin/admins", data);
  },

  async updateAdmin(adminId: string, data: UpdateAdminRequest): Promise<Admin> {
    return apiClient.put<Admin>(`/superadmin/admins/${adminId}`, data);
  },

  async deleteAdmin(adminId: string): Promise<void> {
    return apiClient.delete<void>(`/superadmin/admins/${adminId}`);
  },

  async getSystemSettings(): Promise<SystemSettings> {
    return apiClient.get<SystemSettings>("/superadmin/settings");
  },

  async updateSystemSettings(
    data: UpdateSystemSettingsRequest
  ): Promise<SystemSettings> {
    return apiClient.put<SystemSettings>("/superadmin/settings", data);
  },

  async getSystemStats(): Promise<SystemStats> {
    return apiClient.get<SystemStats>("/superadmin/stats");
  },
};
```

## File Management API

### File Upload & Management

```typescript
interface FileAPI {
  upload(files: File[], context?: FileContext): Promise<FileInfo[]>;
  download(fileId: string): Promise<Blob>;
  delete(fileId: string): Promise<void>;
  getFileInfo(fileId: string): Promise<FileInfo>;
}

interface FileContext {
  type:
    | "ASSIGNMENT_ATTACHMENT"
    | "SUBMISSION_FILE"
    | "PROFILE_AVATAR"
    | "LECTURE_MATERIAL";
  entityId: string; // Assignment ID, Submission ID, etc.
}

interface FileInfo {
  id: string;
  filename: string;
  originalName: string;
  size: number;
  mimeType: string;
  url: string;
  uploadedAt: Date;
  uploadedBy: string;
  context?: FileContext;
}

export const fileAPI: FileAPI = {
  async upload(files: File[], context?: FileContext): Promise<FileInfo[]> {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    if (context) {
      formData.append("context", JSON.stringify(context));
    }

    return fetch(`${API_BASE_URL}/files/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: formData,
    }).then((response) => response.json());
  },

  async download(fileId: string): Promise<Blob> {
    return fetch(`${API_BASE_URL}/files/${fileId}/download`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }).then((response) => response.blob());
  },

  async delete(fileId: string): Promise<void> {
    return apiClient.delete<void>(`/files/${fileId}`);
  },

  async getFileInfo(fileId: string): Promise<FileInfo> {
    return apiClient.get<FileInfo>(`/files/${fileId}`);
  },
};
```

## Real-time Socket API

### Socket Events & Connection

```typescript
// Socket Event Types
interface SocketEvents {
  // Connection events
  connect: () => void;
  disconnect: (reason: string) => void;
  error: (error: Error) => void;

  // Notification events
  "notification:new": (notification: Notification) => void;
  "notification:read": (notificationId: string) => void;

  // Assignment events
  "assignment:created": (data: {
    assignmentId: string;
    title: string;
    courseId: string;
    courseName: string;
    dueDate: Date;
    teacherName: string;
  }) => void;

  "assignment:updated": (data: {
    assignmentId: string;
    changes: string[];
  }) => void;

  "assignment:due_soon": (data: {
    assignmentId: string;
    title: string;
    dueDate: Date;
    hoursRemaining: number;
  }) => void;

  // Submission events
  "submission:received": (data: {
    submissionId: string;
    assignmentId: string;
    assignmentTitle: string;
    studentId: string;
    studentName: string;
    submittedAt: Date;
  }) => void;

  // Grade events
  "grade:posted": (data: {
    assignmentId: string;
    assignmentTitle: string;
    grade: number;
    maxGrade: number;
    feedback?: string;
    courseName: string;
  }) => void;

  // User status events
  "user:status_change": (data: {
    userId: string;
    status: "ONLINE" | "OFFLINE";
    timestamp: Date;
  }) => void;

  // System events
  "system:maintenance": (data: {
    message: string;
    startTime: Date;
    estimatedDuration: number;
  }) => void;
}

// Socket Client Implementation
class SocketClient {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  connect(token: string): void {
    this.socket = io(SOCKET_URL, {
      auth: { token },
      transports: ["websocket", "polling"],
    });

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    if (!this.socket) return;

    this.socket.on("connect", () => {
      console.log("Socket connected");
      this.reconnectAttempts = 0;
    });

    this.socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
      if (reason === "io server disconnect") {
        // Reconnection required
        this.reconnect();
      }
    });

    this.socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      this.reconnect();
    });
  }

  private reconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.socket?.connect();
      }, Math.pow(2, this.reconnectAttempts) * 1000); // Exponential backoff
    }
  }

  on<K extends keyof SocketEvents>(event: K, handler: SocketEvents[K]): void {
    this.socket?.on(event, handler);
  }

  off<K extends keyof SocketEvents>(event: K, handler?: SocketEvents[K]): void {
    this.socket?.off(event, handler);
  }

  emit(event: string, data?: any): void {
    this.socket?.emit(event, data);
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }
}

export const socketClient = new SocketClient();

// React Hook for Socket Integration
export const useSocket = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.token) {
      socketClient.connect(user.token);
    }

    return () => {
      socketClient.disconnect();
    };
  }, [user?.token]);

  return {
    socket: socketClient,
    on: socketClient.on.bind(socketClient),
    off: socketClient.off.bind(socketClient),
    emit: socketClient.emit.bind(socketClient),
  };
};
```

## Error Handling

### API Error Types & Handling

```typescript
// Error Types
class APIError extends Error {
  constructor(
    public status: number,
    public message: string,
    public code?: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = "APIError";
  }
}

// Error Handler
export const handleAPIError = (error: APIError): string => {
  switch (error.status) {
    case 400:
      return (
        error.details?.message || "Invalid request. Please check your input."
      );
    case 401:
      // Redirect to login
      window.location.href = "/login";
      return "Session expired. Please login again.";
    case 403:
      return "You do not have permission to perform this action.";
    case 404:
      return "The requested resource was not found.";
    case 422:
      return "Validation failed. Please check your input.";
    case 429:
      return "Too many requests. Please try again later.";
    case 500:
      return "Server error. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};

// Global Error Handler Hook
export const useAPIErrorHandler = () => {
  const showError = (error: APIError | Error) => {
    if (error instanceof APIError) {
      toast.error(handleAPIError(error));
    } else {
      toast.error("An unexpected error occurred");
    }
  };

  return { showError };
};
```

## API Usage Examples

### Complete Integration Example

```typescript
// Student Dashboard Data Fetching
const StudentDashboard: React.FC<{ studentId: string }> = ({ studentId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const { showError } = useAPIErrorHandler();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [profileData, assignmentsData] = await Promise.all([
          studentAPI.getProfile(studentId),
          studentAPI.getAssignments(studentId, { status: "PENDING" }),
        ]);

        setProfile(profileData);
        setAssignments(assignmentsData);
      } catch (error) {
        showError(error as APIError);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId, showError]);

  if (loading) return <DashboardSkeleton />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <div>No data available</div>;

  return (
    <div className="student-dashboard">
      <ProfileCard profile={profile} />
      <AssignmentsList assignments={assignments} />
    </div>
  );
};
```

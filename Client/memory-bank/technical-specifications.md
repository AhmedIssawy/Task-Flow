# Technical Specifications - Task-Flow LMS Frontend

## Current Implementation Status

**Last Updated**: June 25, 2025
**Implementation Phase**: Core Development
**Architecture Status**: Foundation Complete

## ✅ Implemented Technology Stack

### Framework & Runtime ✅

- **Framework**: Next.js 15.3.4 ✅ IMPLEMENTED
- **Runtime**: Node.js 18+ / Browser ✅ VERIFIED
- **Language**: TypeScript 5.x ✅ IMPLEMENTED
- **Package Manager**: npm ✅ CONFIGURED
- **Build Tool**: Next.js built-in build system ✅ WORKING

### ✅ Current Frontend Dependencies (IMPLEMENTED)

```json
{
  "dependencies": {
    "next": "15.3.4", // ✅ IMPLEMENTED
    "react": "^19.0.0", // ✅ IMPLEMENTED
    "react-dom": "^19.0.0", // ✅ IMPLEMENTED
    "typescript": "^5", // ✅ IMPLEMENTED
    "@reduxjs/toolkit": "^2.8.2", // ✅ IMPLEMENTED
    "@tanstack/react-query": "^5.81.2", // ✅ IMPLEMENTED
    "react-i18next": "^15.5.3", // ✅ IMPLEMENTED
    "socket.io-client": "^4.8.1", // ✅ IMPLEMENTED
    "tailwindcss": "^4.1.10", // ✅ IMPLEMENTED
    "react-hook-form": "^7.58.1", // ✅ AVAILABLE
    "zod": "^3.25.67", // ✅ AVAILABLE
    "@radix-ui/react-*": "^1.x - ^2.x", // ✅ IMPLEMENTED
    "lucide-react": "^0.522.0", // ✅ IMPLEMENTED
    "axios": "^1.10.0", // ✅ IMPLEMENTED
    "js-cookie": "^3.0.5", // ✅ IMPLEMENTED
    "class-variance-authority": "^0.7.1", // ✅ IMPLEMENTED
    "clsx": "^2.1.1", // ✅ IMPLEMENTED
    "tailwind-merge": "^3.3.1", // ✅ IMPLEMENTED
    "react-hot-toast": "^2.5.2", // ✅ IMPLEMENTED
    "date-fns": "^4.1.0" // ✅ IMPLEMENTED
  },
  "devDependencies": {
    "eslint": "^9", // ✅ IMPLEMENTED
    "eslint-config-next": "15.3.4", // ✅ IMPLEMENTED
    "@types/node": "^20", // ✅ IMPLEMENTED
    "@types/react": "^19", // ✅ IMPLEMENTED
    "@types/react-dom": "^19", // ✅ IMPLEMENTED
    "@types/js-cookie": "^3.0.6" // ✅ IMPLEMENTED
  }
}
```

## Authentication System Specifications

### Authentication Flow

```typescript
interface AuthenticationAPI {
  // Login endpoint
  POST /api/auth/login: {
    body: {
      email: string;           // University email or ID
      password: string;        // User password
    };
    response: {
      token: string;           // JWT token
      user: {
        id: string;
        email: string;
        role: 'STUDENT' | 'TEACHER' | 'ADMIN' | 'SUPER_ADMIN';
        profile: UserProfile;
      };
      refreshToken: string;    // For token renewal
    };
  };

  // Token validation
  GET /api/auth/verify: {
    headers: {
      Authorization: `Bearer ${token}`;
    };
    response: {
      valid: boolean;
      user: UserProfile;
    };
  };

  // Logout
  POST /api/auth/logout: {
    headers: {
      Authorization: `Bearer ${token}`;
    };
    response: {
      success: boolean;
    };
  };
}
```

### Role-based Redirection Logic

```typescript
const roleRedirectMap: Record<UserRole, string> = {
  STUDENT: "/student",
  TEACHER: "/teacher",
  ADMIN: "/admin",
  SUPER_ADMIN: "/superadmin",
};

// Post-login redirection
const redirectAfterLogin = (user: User): string => {
  return `${roleRedirectMap[user.role]}/${user.id}`;
};
```

## Dashboard System Specifications

### Student Dashboard API

```typescript
interface StudentDashboardAPI {
  // Personal information
  GET /api/students/:id/profile: {
    response: {
      id: string;
      name: string;
      email: string;
      studentId: string;
      college: string;
      department: string;
      enrollmentDate: Date;
      avatar?: string;
    };
  };

  // Enrolled courses
  GET /api/students/:id/courses: {
    response: Course[] = {
      id: string;
      name: string;
      code: string;
      teacher: {
        id: string;
        name: string;
        title: string;
      };
      schedule: {
        day: string;
        time: string;
        location: string;
      }[];
      enrollmentStatus: 'ACTIVE' | 'COMPLETED' | 'DROPPED';
    }[];
  };

  // Student assignments
  GET /api/students/:id/assignments: {
    query: {
      status?: 'PENDING' | 'SUBMITTED' | 'GRADED';
      courseId?: string;
    };
    response: Assignment[] = {
      id: string;
      title: string;
      description: string;
      dueDate: Date;
      maxGrade: number;
      courseId: string;
      courseName: string;
      teacherName: string;
      status: 'PENDING' | 'SUBMITTED' | 'GRADED';
      submission?: {
        id: string;
        submittedAt: Date;
        files: File[];
        grade?: number;
        feedback?: string;
      };
      attachments: File[];
    }[];
  };

  // Student grades
  GET /api/students/:id/grades: {
    query: {
      courseId?: string;
      semester?: string;
    };
    response: Grade[] = {
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
    }[];
  };

  // Academic calendar
  GET /api/students/:id/calendar: {
    response: CalendarEvent[] = {
      id: string;
      title: string;
      type: 'ASSIGNMENT_DUE' | 'EXAM' | 'LECTURE' | 'HOLIDAY';
      date: Date;
      description?: string;
      courseId?: string;
      location?: string;
    }[];
  };
}
```

### Teacher Dashboard API

```typescript
interface TeacherDashboardAPI {
  // Teacher profile
  GET /api/teachers/:id/profile: {
    response: {
      id: string;
      name: string;
      email: string;
      title: string; // Doctor, Assistant, Teacher
      department: string;
      college: string;
      officeHours: string;
      avatar?: string;
    };
  };

  // Upcoming lectures
  GET /api/teachers/:id/lectures: {
    query: {
      from?: Date;
      to?: Date;
    };
    response: Lecture[] = {
      id: string;
      courseId: string;
      courseName: string;
      date: Date;
      startTime: string;
      endTime: string;
      location: string;
      topic?: string;
      attendanceRequired: boolean;
    }[];
  };

  // Teacher's students across all courses
  GET /api/teachers/:id/students: {
    query: {
      courseId?: string;
      search?: string;
    };
    response: Student[] = {
      id: string;
      name: string;
      email: string;
      studentId: string;
      courses: {
        id: string;
        name: string;
        enrollmentDate: Date;
      }[];
      recentActivity: {
        type: 'ASSIGNMENT_SUBMITTED' | 'LATE_SUBMISSION' | 'MISSING_ASSIGNMENT';
        date: Date;
        description: string;
      }[];
    }[];
  };

  // Course management
  GET /api/teachers/:id/courses: {
    response: Course[] = {
      id: string;
      name: string;
      code: string;
      semester: string;
      enrolledStudents: number;
      assignments: {
        id: string;
        title: string;
        dueDate: Date;
        submissions: number;
        totalStudents: number;
      }[];
    }[];
  };
}
```

### Admin Dashboard API

```typescript
interface AdminDashboardAPI {
  // Admin profile
  GET /api/admins/:id/profile: {
    response: {
      id: string;
      name: string;
      email: string;
      college: string;
      department?: string;
      permissions: string[];
    };
  };

  // Teachers under admin's scope
  GET /api/admins/:id/teachers: {
    query: {
      college?: string;
      department?: string;
      status?: 'ONLINE' | 'OFFLINE';
    };
    response: Teacher[] = {
      id: string;
      name: string;
      email: string;
      title: string;
      department: string;
      onlineStatus: 'ONLINE' | 'OFFLINE';
      lastActive: Date;
      studentsCount: number;
      coursesCount: number;
    }[];
  };

  // Students under admin's scope
  GET /api/admins/:id/students: {
    query: {
      college?: string;
      department?: string;
      status?: 'ACTIVE' | 'INACTIVE';
    };
    response: Student[] = {
      id: string;
      name: string;
      email: string;
      studentId: string;
      department: string;
      enrollmentDate: Date;
      status: 'ACTIVE' | 'INACTIVE';
      coursesCount: number;
      lastLogin: Date;
    }[];
  };

  // User management operations
  POST /api/admins/:id/teachers: {
    body: CreateTeacherRequest;
    response: Teacher;
  };

  PUT /api/admins/:id/teachers/:teacherId: {
    body: UpdateTeacherRequest;
    response: Teacher;
  };

  DELETE /api/admins/:id/teachers/:teacherId: {
    response: { success: boolean; };
  };
}
```

### Super Admin Dashboard API

```typescript
interface SuperAdminDashboardAPI {
  // All admin capabilities plus:

  // Admin management
  GET /api/superadmin/:id/admins: {
    response: Admin[] = {
      id: string;
      name: string;
      email: string;
      college: string;
      permissions: string[];
      createdAt: Date;
      lastActive: Date;
      managedTeachers: number;
      managedStudents: number;
    }[];
  };

  POST /api/superadmin/:id/admins: {
    body: CreateAdminRequest;
    response: Admin;
  };

  PUT /api/superadmin/:id/admins/:adminId: {
    body: UpdateAdminRequest;
    response: Admin;
  };

  DELETE /api/superadmin/:id/admins/:adminId: {
    response: { success: boolean; };
  };

  // System settings
  GET /api/superadmin/:id/settings: {
    response: SystemSettings;
  };

  PUT /api/superadmin/:id/settings: {
    body: UpdateSystemSettingsRequest;
    response: SystemSettings;
  };
}
```

## Task & Assignment Management Specifications

### Task Creation (Teacher)

```typescript
interface TaskCreationAPI {
  POST /api/teachers/:id/assignments: {
    body: {
      title: string;
      description: string;
      dueDate: Date;
      maxGrade: number;
      courseId: string;
      attachments?: File[];
      instructions?: string;
      allowLateSubmission: boolean;
      submissionFormats: string[]; // ['pdf', 'doc', 'txt']
    };
    response: {
      id: string;
      title: string;
      description: string;
      dueDate: Date;
      maxGrade: number;
      createdAt: Date;
      attachments: File[];
    };
  };
}
```

### Task Submission (Student)

```typescript
interface TaskSubmissionAPI {
  POST /api/students/:id/assignments/:assignmentId/submit: {
    body: {
      files: File[];
      notes?: string;
    };
    response: {
      id: string;
      assignmentId: string;
      submittedAt: Date;
      files: File[];
      status: 'SUBMITTED';
    };
  };

  PUT /api/students/:id/submissions/:submissionId: {
    body: {
      files: File[];
      notes?: string;
    };
    response: Submission;
  };
}
```

### Task Review (Teacher)

```typescript
interface TaskReviewAPI {
  GET /api/teachers/:id/assignments/:assignmentId/submissions: {
    response: Submission[] = {
      id: string;
      studentId: string;
      studentName: string;
      submittedAt: Date;
      files: File[];
      grade?: number;
      feedback?: string;
      status: 'SUBMITTED' | 'GRADED';
    }[];
  };

  PUT /api/teachers/:id/submissions/:submissionId/grade: {
    body: {
      grade: number;
      feedback?: string;
    };
    response: {
      id: string;
      grade: number;
      feedback: string;
      gradedAt: Date;
    };
  };
}
```

## Real-time Notification Specifications

### Socket Connection

```typescript
interface SocketConnection {
  endpoint: string; // Provided by backend team
  authentication: {
    token: string; // JWT token from login
  };

  // Connection events
  events: {
    connect: () => void;
    disconnect: () => void;
    error: (error: Error) => void;
  };
}
```

### Notification Events

```typescript
interface NotificationEvents {
  // Assignment notifications
  "assignment:created": {
    assignmentId: string;
    title: string;
    courseId: string;
    courseName: string;
    dueDate: Date;
    teacherName: string;
  };

  "assignment:due_soon": {
    assignmentId: string;
    title: string;
    dueDate: Date;
    hoursRemaining: number;
  };

  // Grade notifications
  "grade:posted": {
    assignmentId: string;
    assignmentTitle: string;
    grade: number;
    maxGrade: number;
    feedback?: string;
    courseName: string;
  };

  // Submission notifications (for teachers)
  "submission:received": {
    submissionId: string;
    assignmentId: string;
    assignmentTitle: string;
    studentId: string;
    studentName: string;
    submittedAt: Date;
  };

  // System notifications
  "user:status_change": {
    userId: string;
    status: "ONLINE" | "OFFLINE";
    timestamp: Date;
  };

  // Administrative notifications
  "user:created": {
    userId: string;
    userType: "STUDENT" | "TEACHER" | "ADMIN";
    createdBy: string;
  };
}
```

## Internationalization Specifications

### Language Configuration

```typescript
interface I18nConfig {
  defaultLanguage: "en";
  supportedLanguages: ["en", "ar"];

  translations: {
    en: {
      // Common
      "common.login": "Login";
      "common.logout": "Logout";
      "common.dashboard": "Dashboard";
      "common.settings": "Settings";

      // Student specific
      "student.my_courses": "My Courses";
      "student.assignments": "Assignments";
      "student.grades": "Grades";
      "student.calendar": "Calendar";

      // Teacher specific
      "teacher.create_assignment": "Create Assignment";
      "teacher.my_students": "My Students";
      "teacher.upcoming_lectures": "Upcoming Lectures";

      // Admin specific
      "admin.manage_teachers": "Manage Teachers";
      "admin.manage_students": "Manage Students";
      "admin.user_status": "User Status";

      // Assignment workflow
      "assignment.create": "Create Assignment";
      "assignment.submit": "Submit Assignment";
      "assignment.review": "Review Submissions";
      "assignment.grade": "Grade Assignment";
    };

    ar: {
      // Arabic translations with RTL considerations
      "common.login": "تسجيل الدخول";
      "common.logout": "تسجيل الخروج";
      "common.dashboard": "لوحة التحكم";
      "common.settings": "الإعدادات";
      // ... complete Arabic translations
    };
  };

  // RTL/LTR handling
  direction: {
    en: "ltr";
    ar: "rtl";
  };

  // Date/time formatting
  dateFormats: {
    en: "MM/DD/YYYY";
    ar: "DD/MM/YYYY";
  };
}
```

### Responsive Layout Specifications

```css
/* RTL/LTR Layout Handling */
.layout-container {
  direction: var(--text-direction); /* 'ltr' or 'rtl' */
}

/* Language-specific spacing */
.text-spacing {
  letter-spacing: var(--letter-spacing);
  word-spacing: var(--word-spacing);
}

/* Arabic-specific adjustments */
[dir="rtl"] .sidebar {
  left: auto;
  right: 0;
}

[dir="rtl"] .content {
  margin-left: 0;
  margin-right: 250px;
}

/* Theme integration */
.theme-light {
  --primary-color: #3b82f6;
  --background-color: #ffffff;
  --text-color: #1f2937;
}

.theme-dark {
  --primary-color: #60a5fa;
  --background-color: #1f2937;
  --text-color: #f9fafb;
}
```

## File Management Specifications

### File Upload System

```typescript
interface FileUploadAPI {
  POST /api/files/upload: {
    body: FormData; // multipart/form-data
    response: {
      id: string;
      filename: string;
      originalName: string;
      size: number;
      mimeType: string;
      url: string;
      uploadedAt: Date;
    };
  };

  GET /api/files/:id: {
    response: File; // File download
  };

  DELETE /api/files/:id: {
    response: { success: boolean; };
  };
}

// File validation
interface FileValidation {
  maxSize: 10 * 1024 * 1024; // 10MB
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'image/jpeg',
    'image/png'
  ];

  // Assignment-specific limits
  assignmentFiles: {
    maxFiles: 5;
    maxTotalSize: 50 * 1024 * 1024; // 50MB total
  };
}
```

## Performance Requirements

### Loading Time Targets

- **Initial Page Load**: < 3 seconds
- **Route Navigation**: < 1 second
- **API Response Display**: < 2 seconds
- **File Upload Progress**: Real-time progress indication
- **Real-time Notifications**: < 500ms delivery

### Caching Strategy

```typescript
interface CachingConfig {
  // API response caching
  apiCache: {
    student_profile: "5 minutes";
    courses: "10 minutes";
    assignments: "2 minutes";
    grades: "1 minute";
  };

  // Static asset caching
  staticAssets: {
    images: "1 hour";
    fonts: "1 day";
    styles: "1 hour";
    scripts: "1 hour";
  };

  // Browser storage
  localStorage: {
    theme: "persistent";
    language: "persistent";
    user_preferences: "persistent";
  };

  sessionStorage: {
    navigation_state: "session";
    form_drafts: "session";
  };
}
```

## Security Requirements

### Data Protection

- **HTTPS Only**: All communication encrypted
- **Token Security**: JWT tokens with expiration
- **File Security**: Virus scanning for uploads
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Token-based protection

### Access Control

```typescript
interface SecurityConfig {
  // Token management
  jwt: {
    expiration: "24 hours";
    refreshThreshold: "2 hours";
    algorithm: "HS256";
  };

  // File access control
  fileAccess: {
    studentFiles: "own_files_only";
    teacherFiles: "course_students_only";
    adminFiles: "college_scope_only";
    superAdminFiles: "all_access";
  };

  // Rate limiting
  rateLimits: {
    login_attempts: "5 per 15 minutes";
    api_requests: "100 per minute";
    file_uploads: "10 per hour";
  };
}
```

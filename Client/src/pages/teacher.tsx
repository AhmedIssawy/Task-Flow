import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectCurrentUser } from '@/store/slices/authSlice'
import { selectCurrentTheme } from '@/store/slices/themeSlice'
import { selectCurrentLanguage } from '@/store/slices/languageSlice'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock data for Teacher Dashboard
const mockData = {
    courses: [
        { id: 1, name: 'Advanced Mathematics', students: 28, assignments: 5, avgGrade: 'B+' },
        { id: 2, name: 'Calculus I', students: 35, assignments: 3, avgGrade: 'A-' },
        { id: 3, name: 'Statistics', students: 22, assignments: 4, avgGrade: 'B' },
    ],
    students: [
        { id: 1, name: 'Alice Johnson', course: 'Advanced Mathematics', grade: 'A', attendance: '95%' },
        { id: 2, name: 'Bob Smith', course: 'Calculus I', grade: 'B+', attendance: '88%' },
        { id: 3, name: 'Carol Davis', course: 'Statistics', grade: 'A-', attendance: '92%' },
    ],
    pendingGrades: [
        { id: 1, assignment: 'Midterm Exam', course: 'Advanced Mathematics', submissions: 28 },
        { id: 2, assignment: 'Project 2', course: 'Calculus I', submissions: 32 },
        { id: 3, assignment: 'Quiz 3', course: 'Statistics', submissions: 20 },
    ]
}

export default function TeacherPage() {
    const currentUser = useAppSelector(selectCurrentUser)
    const currentTheme = useAppSelector(selectCurrentTheme)
    const currentLanguage = useAppSelector(selectCurrentLanguage)

    const userRole = currentUser?.role

    return (
        <div className="min-h-screen bg-theme text-theme p-8">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Page Header */}
                <header className="space-y-2">
                    <h1 className="text-4xl font-logo text-primary">Teaching Hub</h1>
                    <p className="text-lg font-body text-theme/80">
                        {currentLanguage === 'ar' ? 'مركز التدريس' : 'Your Teaching Dashboard'}
                    </p>
                </header>

                {/* Role-Based Content - Same page, different content based on role */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Teacher-Specific View */}
                    {userRole === 'TEACHER' && (
                        <>                            <Card>
                            <CardHeader>
                                <CardTitle className="font-body">My Courses</CardTitle>
                                <CardDescription>Manage your teaching courses</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-4">
                                    {mockData.courses.map(course => (
                                        <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                                            <div>
                                                <h4 className="font-semibold text-sm">{course.name}</h4>
                                                <p className="text-xs text-theme/70">{course.students} students • {course.assignments} assignments</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-semibold">Avg: {course.avgGrade}</p>
                                                <Button variant="outline" size="sm">Manage</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button size="sm">Create New Course</Button>
                            </CardContent>
                        </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Students</CardTitle>
                                    <CardDescription>View and manage your students</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 mb-4">
                                        {mockData.students.map(student => (
                                            <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <h4 className="font-semibold text-sm">{student.name}</h4>
                                                    <p className="text-xs text-theme/70">{student.course}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-semibold">{student.grade}</p>
                                                    <p className="text-xs text-theme/70">{student.attendance}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" size="sm">View All Students</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Assignments</CardTitle>
                                    <CardDescription>Create and grade assignments</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 mb-4">
                                        {mockData.pendingGrades.map(grade => (
                                            <div key={grade.id} className="p-3 border rounded-lg">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-semibold text-sm">{grade.assignment}</h4>
                                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded text-xs">
                                                        Pending
                                                    </span>
                                                </div>
                                                <p className="text-xs text-theme/70 mt-1">{grade.course}</p>
                                                <p className="text-xs text-theme/50">{grade.submissions} submissions to grade</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" size="sm">Grade Assignments</Button>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    {/* Admin accessing teacher page - shows oversight view */}
                    {(userRole === 'ADMIN' || userRole === 'SUPER_ADMIN') && (
                        <>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Teacher Management</CardTitle>
                                    <CardDescription>Oversee teaching staff</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Monitor teacher performance and course management.
                                    </p>
                                    <Button variant="outline" size="sm">View Teachers</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Course Oversight</CardTitle>
                                    <CardDescription>Monitor all courses and curricula</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Review course content, standards, and quality metrics.
                                    </p>
                                    <Button variant="outline" size="sm">Course Analytics</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Institutional Reports</CardTitle>
                                    <CardDescription>Generate teaching reports</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Access comprehensive reports on teaching effectiveness.
                                    </p>
                                    <Button variant="outline" size="sm">View Reports</Button>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    {/* Student accessing teacher page - limited view */}
                    {userRole === 'STUDENT' && (
                        <Card className="md:col-span-2 lg:col-span-3">
                            <CardHeader>
                                <CardTitle className="font-body text-center">Access Restricted</CardTitle>
                                <CardDescription className="text-center">
                                    This page has limited access for students
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="font-body text-sm text-theme/70 mb-4">
                                    Students can view teacher contact information and office hours.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => window.location.href = '/student'}
                                >
                                    Return to Student Hub
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* User Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-body">User Information</CardTitle>
                        <CardDescription>Current user and system status</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 font-body">
                        <p><strong>Name:</strong> {currentUser?.name}</p>
                        <p><strong>Role:</strong> {currentUser?.role}</p>
                        <p><strong>Email:</strong> {currentUser?.email}</p>
                        <p><strong>Theme:</strong> {String(currentTheme)}</p>
                        <p><strong>Language:</strong> {currentLanguage.toUpperCase()}</p>
                        <p><strong>Page:</strong> Teacher Hub (Unified Page with Role-Based Content)</p>
                    </CardContent>
                </Card>

                {/* Navigation Example */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-body">Quick Navigation</CardTitle>
                        <CardDescription>Test unified routing system</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/student'}
                            >
                                Student Page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/admin'}
                            >
                                Admin Page
                            </Button>                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/admins'}
                            >
                                Super Admin
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    localStorage.removeItem('token')
                                    window.location.href = '/login'
                                }}
                            >
                                Logout
                            </Button>
                        </div>
                        <p className="text-xs text-theme/60 font-body">
                            Note: Global Router controls access and content based on your role.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectCurrentUser } from '@/store/slices/authSlice'
import { selectCurrentTheme } from '@/store/slices/themeSlice'
import { selectCurrentLanguage } from '@/store/slices/languageSlice'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/Navbar'
import { useStudentDashboard } from '@/hooks/useStudent'

// Mock data for Student Dashboard
const mockData = {
    courses: [
        { id: 1, name: 'Advanced Mathematics', instructor: 'Dr. Smith', progress: 85, grade: 'A-' },
        { id: 2, name: 'Computer Science 101', instructor: 'Prof. Johnson', progress: 72, grade: 'B+' },
        { id: 3, name: 'Physics Laboratory', instructor: 'Dr. Brown', progress: 90, grade: 'A' },
    ],
    assignments: [
        { id: 1, title: 'Calculus Problem Set 3', course: 'Advanced Mathematics', dueDate: '2025-06-30', status: 'pending' },
        { id: 2, title: 'Programming Project', course: 'Computer Science 101', dueDate: '2025-07-05', status: 'submitted' },
        { id: 3, title: 'Lab Report 2', course: 'Physics Laboratory', dueDate: '2025-06-28', status: 'overdue' },
    ],
    grades: {
        overall: 'B+',
        gpa: 3.5,
        totalCredits: 18
    }
}

export default function StudentPage() {
    const currentUser = useAppSelector(selectCurrentUser)
    const currentTheme = useAppSelector(selectCurrentTheme)
    const currentLanguage = useAppSelector(selectCurrentLanguage)
    
    const studentData = {
        name: currentUser?.name,
        studentId: currentUser?.id,
        year: 'Sophomore',
        major: 'Computer Science',
        gpa: 3.8,
        enrolledCourses: 5,
        assignmentsCompleted: '95%',
        attendance: '92%',
        courses: [
            { name: 'Introduction to Programming', instructor: 'Dr. Emily Carter', credits: 3, status: 'In Progress' },
            { name: 'Data Structures and Algorithms', instructor: 'Dr. David Lee', credits: 4, status: 'Completed' },
            { name: 'Discrete Mathematics', instructor: 'Dr. Sarah Jones', credits: 3, status: 'In Progress' },
        ],
        assignments: [
            { title: 'Lab 3', course: 'Introduction to Programming', status: 'Submitted', grade: 'A' },
            { title: 'Midterm Exam', course: 'Data Structures and Algorithms', status: 'Graded', grade: 'B+' },
            { title: 'Homework 2', course: 'Discrete Mathematics', status: 'Submitted', grade: 'A-' },
        ]
    }

const userRole = currentUser?.role

    const [selectedTab, setSelectedTab] = useState('Overview')

    const OverviewContent = () => (
        <>
            {/* Academic Performance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
                <div className="h-20 md:h-24 p-3 md:p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 flex flex-col justify-center items-start">
                    <h3 className="text-xs md:text-sm font-medium text-muted mb-1">GPA</h3>
                    <p className="text-xl md:text-2xl text-theme font-bold">{studentData.gpa}</p>
                </div>
                <div className="h-20 md:h-24 p-3 md:p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 flex flex-col justify-center items-start">
                    <h3 className="text-xs md:text-sm font-medium text-muted mb-1">Enrolled Courses</h3>
                    <p className="text-xl md:text-2xl text-theme font-bold">{studentData.enrolledCourses}</p>
                </div>
                <div className="h-20 md:h-24 p-3 md:p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 flex flex-col justify-center items-start">
                    <h3 className="text-xs md:text-sm font-medium text-muted mb-1">Assignments</h3>
                    <p className="text-xl md:text-2xl text-theme font-bold">{studentData.assignmentsCompleted}</p>
                </div>
                <div className="h-20 md:h-24 p-3 md:p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 flex flex-col justify-center items-start">
                    <h3 className="text-xs md:text-sm font-medium text-muted mb-1">Attendance</h3>
                    <p className="text-xl md:text-2xl text-theme font-bold">{studentData.attendance}</p>
                </div>
            </div>

            {/* Course Details */}
            <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-theme">Course Details</h3>
                {/* Mobile-friendly cards for small screens */}
                <div className="md:hidden space-y-3">
                    {studentData.courses.map((course, index) => (
                        <div key={index} className="p-4  rounded-lg border border-neutral-200 dark:border-neutral-700">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-theme text-sm">{course.name}</h4>
                                <span className="px-2 py-1 rounded text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-theme">
                                    {course.status}
                                </span>
                            </div>
                            <div className="space-y-1 text-sm">
                                <p className="text-muted">Instructor: <span className="text-theme">{course.instructor}</span></p>
                                <p className="text-muted">Credits: <span className="text-theme">{course.credits}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Table for larger screens */}
                <div className="hidden md:block overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-theme border-b-2">
                                <th className="p-4 text-left font-semibold">Course</th>
                                <th className="p-4 text-left font-semibold">Instructor</th>
                                <th className="p-4 text-left font-semibold">Credits</th>
                                <th className="p-4 text-left font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.courses.map((course, index) => (
                                <tr key={index} className="border-b border-neutral-200 dark:border-neutral-700 transition-colors">
                                    <td className="p-4 text-theme font-medium">{course.name}</td>
                                    <td className="p-4 text-muted">{course.instructor}</td>
                                    <td className="p-4 text-theme">{course.credits}</td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-200 dark:bg-neutral-700 text-theme">
                                            {course.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Assignments */}
            <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4 text-theme">Recent Assignments</h3>
                <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-theme">
                                <th className="p-4 text-left font-semibold">Assignment</th>
                                <th className="p-4 text-left font-semibold">Course</th>
                                <th className="p-4 text-left font-semibold">Status</th>
                                <th className="p-4 text-left font-semibold">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.assignments.map((assignment, index) => (
                                <tr key={index} className="border-b border-neutral-200 dark:border-neutral-700 transition-colors">
                                    <td className="p-4 text-theme font-medium">{assignment.title}</td>
                                    <td className="p-4 text-muted">{assignment.course}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-muted text-theme`}>
                                            {assignment.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`font-bold text-lg ${
                                            assignment.grade.startsWith('A') 
                                                ? 'text-success' 
                                                : assignment.grade.startsWith('B')
                                                ? 'text-primary'
                                                : 'text-warning'
                                        }`}>
                                            {assignment.grade}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <OverviewContent />
            case 'Courses':
                return (
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-theme">
                            Courses
                        </h3>
                        {/* Mobile-friendly cards for small screens */}
                        <div className="md:hidden space-y-4">
                            {studentData.courses.map((course, index) => (
                                <div key={index} className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-theme text-sm">{course.name}</h4>
                                        <span
                                            className={`px-2 py-1 rounded text-xs font-medium ${
                                                course.status === 'In Progress'
                                                    ? 'bg-yellow-200 text-yellow-800'
                                                    : 'bg-green-200 text-green-800'
                                            }`}
                                        >
                                            {course.status}
                                        </span>
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <p className="text-muted">Instructor: <span className="text-theme">{course.instructor}</span></p>
                                        <p className="text-muted">Credits: <span className="text-theme">{course.credits}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Table for larger screens */}
                        <div className="hidden md:block overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="text-theme border-b-2">
                                        <th className="p-4 text-left font-semibold">Course Name</th>
                                        <th className="p-4 text-left font-semibold">Instructor</th>
                                        <th className="p-4 text-left font-semibold">Credits</th>
                                        <th className="p-4 text-left font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.courses.map((course, index) => (
                                        <tr key={index} className="border-b border-neutral-200 dark:border-neutral-700 transition-colors">
                                            <td className="p-4 text-theme font-medium">{course.name}</td>
                                            <td className="p-4 text-muted">{course.instructor}</td>
                                            <td className="p-4 text-theme">{course.credits}</td>
                                            <td className="p-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        course.status === 'In Progress'
                                                            ? 'bg-yellow-200 text-yellow-800'
                                                            : 'bg-green-200 text-green-800'
                                                    }`}
                                                >
                                                    {course.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            case 'Assignments':
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-theme">
                            Assignments
                        </h3>
                        <div className="grid gap-4">
                            {studentData.assignments.map((assignment, index) => (
                                <div key={index} className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                    <h4 className="text-xl font-semibold text-theme mb-2">
                                        {assignment.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <span className="text-muted">
                                            Course: <span className="text-theme font-medium">{assignment.course}</span>
                                        </span>
                                        <span className="text-muted">
                                            Status: <span className="text-primary font-medium">{assignment.status}</span>
                                        </span>
                                        <span className="text-muted">
                                            Grade: <span className="text-theme font-bold">{assignment.grade}</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'Messages':
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-theme">Messages</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-theme">Dr. Emily Carter</h4>
                                    <span className="text-sm text-muted">2 hours ago</span>
                                </div>
                                <p className="text-muted mb-2">Assignment Feedback</p>
                                <p className="text-theme">Great work on your latest programming assignment! Your code structure shows significant improvement.</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-theme">Academic Advisor</h4>
                                    <span className="text-sm text-muted">1 day ago</span>
                                </div>
                                <p className="text-muted mb-2">Course Registration Reminder</p>
                                <p className="text-theme">Don't forget to register for next semester's courses. Registration closes on July 15th.</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-theme">Dr. David Lee</h4>
                                    <span className="text-sm text-muted">3 days ago</span>
                                </div>
                                <p className="text-muted mb-2">Midterm Results</p>
                                <p className="text-theme">Your midterm exam results are now available. Please check the gradebook for details.</p>
                            </div>
                        </div>
                    </div>
                )
            case 'Notes':
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-theme">Personal Notes</h3>
                        <div className="grid gap-4">
                            <div className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                <h4 className="font-semibold text-theme mb-2">Study Plan - Data Structures</h4>
                                <p className="text-muted text-sm mb-2">Created: June 20, 2025</p>
                                <p className="text-theme">Focus on tree traversal algorithms and binary search trees. Review Chapter 8-10 before the final exam.</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                <h4 className="font-semibold text-theme mb-2">Math Formulas</h4>
                                <p className="text-muted text-sm mb-2">Created: June 18, 2025</p>
                                <p className="text-theme">Important calculus formulas for integration by parts and substitution methods.</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg border border-neutral-200 dark:border-neutral-700">
                                <h4 className="font-semibold text-theme mb-2">Project Ideas</h4>
                                <p className="text-muted text-sm mb-2">Created: June 15, 2025</p>
                                <p className="text-theme">Potential topics for the final programming project: Weather app, Task manager, or Social media dashboard.</p>
                            </div>
                        </div>
                    </div>
                )
            default:
                return <div className="text-center text-muted py-8">Select a tab to view content.</div>
        }
    }

    return (
        <div className="min-h-screen bg-theme text-theme ">
                <Navbar />
            <div className="max-w-6xl mx-auto space-y-6 py-8 px-4 md:px-6 lg:px-8">
                {/* Page Header */}


                {/* User Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-6">
                    <img src="/avatar.png" alt="Profile" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary" />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-theme">{studentData.name}</h2>
                        <p className="text-sm md:text-base text-muted font-medium">Student ID: {studentData.studentId}</p>
                        <p className="text-sm md:text-base text-primary font-semibold">{studentData.year} | {studentData.major}</p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="mt-6 px-2 md:px-0">
                    <ul className="flex flex-wrap  overflow-x-auto scrollbar-hide">
                        {['Overview', 'Courses', 'Assignments', 'Messages', 'Notes'].map((tab) => (
                            <li key={tab} className={`mr-1 mb-1 border-b-4 rounded-t-lg transition-colors flex-shrink-0 ${
                                selectedTab === tab 
                                    ? 'border-primary' 
                                    : 'border-neutral hover:border-primary'
                            }`}>
                                <button 
                                    onClick={() => setSelectedTab(tab)}
                                    className={`inline-block py-2 px-3 md:px-4 text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                                        selectedTab === tab 
                                            ? 'text-primary font-semibold' 
                                            : 'text-muted hover:text-theme'
                                    }`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {renderContent()}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Role-Based Content */}
                    {/* Teacher View (for demonstration) */}
                    {userRole === 'TEACHER' && (
                        <>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Course Management</CardTitle>
                                    <CardDescription>Manage your courses and curriculum</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Create and manage courses, assignments, and student progress.
                                    </p>
                                    <Button variant="outline" size="sm">Manage Courses</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Students</CardTitle>
                                    <CardDescription>View and manage your students</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Monitor student progress and provide feedback.
                                    </p>
                                    <Button variant="outline" size="sm">View Students</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Grading</CardTitle>
                                    <CardDescription>Grade assignments and provide feedback</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Review and grade student submissions.
                                    </p>
                                    <Button variant="outline" size="sm">Grade Assignments</Button>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    {/* Admin View (for demonstration) */}
                    {(userRole === 'ADMIN' || userRole === 'SUPER_ADMIN') && (
                        <>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">User Management</CardTitle>
                                    <CardDescription>Manage users and permissions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Add, edit, and manage user accounts and roles.
                                    </p>
                                    <Button variant="outline" size="sm">Manage Users</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">System Overview</CardTitle>
                                    <CardDescription>Monitor system performance and usage</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        View analytics and system health metrics.
                                    </p>
                                    <Button variant="outline" size="sm">View Analytics</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Settings</CardTitle>
                                    <CardDescription>Configure system settings</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Manage institutional settings and configuration.
                                    </p>
                                    <Button variant="outline" size="sm">System Settings</Button>
                                </CardContent>
                            </Card>
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}

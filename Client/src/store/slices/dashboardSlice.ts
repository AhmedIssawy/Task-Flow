import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
    [key: string]: unknown
}

interface SortState {
    field: string
    order: 'asc' | 'desc'
}

interface DashboardState {
    // Common dashboard state
    activeTab: string
    filters: FilterState
    sort: SortState
    selectedItems: string[]
    bulkActionsEnabled: boolean

    // Role-specific dashboard states
    student: {
        activeSection: 'overview' | 'courses' | 'assignments' | 'grades' | 'calendar'
        coursesView: 'grid' | 'list'
        assignmentsFilter: 'all' | 'pending' | 'submitted' | 'graded'
        calendarView: 'month' | 'week' | 'day'
    }

    teacher: {
        activeSection: 'overview' | 'courses' | 'students' | 'assignments' | 'grading'
        studentsView: 'grid' | 'list'
        assignmentsView: 'active' | 'draft' | 'completed'
        gradingQueue: string[]
    }

    admin: {
        activeSection: 'overview' | 'users' | 'courses' | 'analytics' | 'settings'
        usersView: 'all' | 'students' | 'teachers'
        userStatus: 'all' | 'online' | 'offline'
        managementMode: 'view' | 'edit' | 'create'
    }

    superAdmin: {
        activeSection: 'overview' | 'universities' | 'admins' | 'system' | 'analytics'
        systemView: 'dashboard' | 'logs' | 'performance' | 'security'
        adminManagement: 'active' | 'pending' | 'suspended'
    }
}

const initialState: DashboardState = {
    activeTab: 'overview',
    filters: {},
    sort: { field: 'createdAt', order: 'desc' },
    selectedItems: [],
    bulkActionsEnabled: false,

    student: {
        activeSection: 'overview',
        coursesView: 'grid',
        assignmentsFilter: 'all',
        calendarView: 'month',
    },

    teacher: {
        activeSection: 'overview',
        studentsView: 'grid',
        assignmentsView: 'active',
        gradingQueue: [],
    },

    admin: {
        activeSection: 'overview',
        usersView: 'all',
        userStatus: 'all',
        managementMode: 'view',
    },

    superAdmin: {
        activeSection: 'overview',
        systemView: 'dashboard',
        adminManagement: 'active',
    },
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // Common actions
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload
            state.selectedItems = []
        },
        updateFilters: (state, action: PayloadAction<FilterState>) => {
            state.filters = { ...state.filters, ...action.payload }
        },
        setSort: (state, action: PayloadAction<SortState>) => {
            state.sort = action.payload
        },
        selectItem: (state, action: PayloadAction<string>) => {
            const id = action.payload
            const index = state.selectedItems.indexOf(id)
            if (index > -1) {
                state.selectedItems.splice(index, 1)
            } else {
                state.selectedItems.push(id)
            }
        },
        selectAllItems: (state, action: PayloadAction<string[]>) => {
            state.selectedItems = action.payload
        },
        clearSelection: (state) => {
            state.selectedItems = []
            state.bulkActionsEnabled = false
        },
        toggleBulkActions: (state) => {
            state.bulkActionsEnabled = !state.bulkActionsEnabled
            if (!state.bulkActionsEnabled) {
                state.selectedItems = []
            }
        },

        // Role-specific actions
        setStudentSection: (state, action: PayloadAction<DashboardState['student']['activeSection']>) => {
            state.student.activeSection = action.payload
        },
        setStudentCoursesView: (state, action: PayloadAction<'grid' | 'list'>) => {
            state.student.coursesView = action.payload
        },
        setStudentAssignmentsFilter: (state, action: PayloadAction<DashboardState['student']['assignmentsFilter']>) => {
            state.student.assignmentsFilter = action.payload
        },

        setTeacherSection: (state, action: PayloadAction<DashboardState['teacher']['activeSection']>) => {
            state.teacher.activeSection = action.payload
        },
        addToGradingQueue: (state, action: PayloadAction<string>) => {
            if (!state.teacher.gradingQueue.includes(action.payload)) {
                state.teacher.gradingQueue.push(action.payload)
            }
        },
        removeFromGradingQueue: (state, action: PayloadAction<string>) => {
            const index = state.teacher.gradingQueue.indexOf(action.payload)
            if (index > -1) {
                state.teacher.gradingQueue.splice(index, 1)
            }
        },

        setAdminSection: (state, action: PayloadAction<DashboardState['admin']['activeSection']>) => {
            state.admin.activeSection = action.payload
        },
        setAdminUsersView: (state, action: PayloadAction<DashboardState['admin']['usersView']>) => {
            state.admin.usersView = action.payload
        },
        setAdminManagementMode: (state, action: PayloadAction<DashboardState['admin']['managementMode']>) => {
            state.admin.managementMode = action.payload
        },

        setSuperAdminSection: (state, action: PayloadAction<DashboardState['superAdmin']['activeSection']>) => {
            state.superAdmin.activeSection = action.payload
        },
        setSuperAdminSystemView: (state, action: PayloadAction<DashboardState['superAdmin']['systemView']>) => {
            state.superAdmin.systemView = action.payload
        },
    },
})

export const {
    setActiveTab,
    updateFilters,
    setSort,
    selectItem,
    selectAllItems,
    clearSelection,
    toggleBulkActions,
    setStudentSection,
    setStudentCoursesView,
    setStudentAssignmentsFilter,
    setTeacherSection,
    addToGradingQueue,
    removeFromGradingQueue,
    setAdminSection,
    setAdminUsersView,
    setAdminManagementMode,
    setSuperAdminSection,
    setSuperAdminSystemView,
} = dashboardSlice.actions

// Selectors
export const selectDashboard = (state: { dashboard: DashboardState }) => state.dashboard
export const selectSelectedItems = (state: { dashboard: DashboardState }) => state.dashboard.selectedItems
export const selectStudentDashboard = (state: { dashboard: DashboardState }) => state.dashboard.student
export const selectTeacherDashboard = (state: { dashboard: DashboardState }) => state.dashboard.teacher
export const selectAdminDashboard = (state: { dashboard: DashboardState }) => state.dashboard.admin
export const selectSuperAdminDashboard = (state: { dashboard: DashboardState }) => state.dashboard.superAdmin

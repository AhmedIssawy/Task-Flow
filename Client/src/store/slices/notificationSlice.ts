import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Notification {
    id: string
    title: string
    message: string
    type: 'success' | 'error' | 'warning' | 'info'
    timestamp: number
    read: boolean
    actionUrl?: string
    data?: Record<string, unknown>
}

interface NotificationState {
    notifications: Notification[]
    unreadCount: number
    isVisible: boolean
    socketConnected: boolean
}

const initialState: NotificationState = {
    notifications: [],
    unreadCount: 0,
    isVisible: false,
    socketConnected: false,
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'timestamp' | 'read'>>) => {
            const notification: Notification = {
                ...action.payload,
                id: `notification_${Date.now()}_${Math.random()}`,
                timestamp: Date.now(),
                read: false,
            }
            state.notifications.unshift(notification)
            state.unreadCount += 1
        },
        markAsRead: (state, action: PayloadAction<string>) => {
            const notification = state.notifications.find(n => n.id === action.payload)
            if (notification && !notification.read) {
                notification.read = true
                state.unreadCount = Math.max(0, state.unreadCount - 1)
            }
        },
        markAllAsRead: (state) => {
            state.notifications.forEach(notification => {
                notification.read = true
            })
            state.unreadCount = 0
        },
        removeNotification: (state, action: PayloadAction<string>) => {
            const index = state.notifications.findIndex(n => n.id === action.payload)
            if (index !== -1) {
                const notification = state.notifications[index]
                if (!notification.read) {
                    state.unreadCount = Math.max(0, state.unreadCount - 1)
                }
                state.notifications.splice(index, 1)
            }
        },
        clearAllNotifications: (state) => {
            state.notifications = []
            state.unreadCount = 0
        },
        setVisibility: (state, action: PayloadAction<boolean>) => {
            state.isVisible = action.payload
        },
        setSocketStatus: (state, action: PayloadAction<boolean>) => {
            state.socketConnected = action.payload
        },
    },
})

export const {
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAllNotifications,
    setVisibility,
    setSocketStatus,
} = notificationSlice.actions

// Selectors
export const selectNotifications = (state: { notification: NotificationState }) => state.notification.notifications
export const selectUnreadCount = (state: { notification: NotificationState }) => state.notification.unreadCount
export const selectNotificationVisibility = (state: { notification: NotificationState }) => state.notification.isVisible

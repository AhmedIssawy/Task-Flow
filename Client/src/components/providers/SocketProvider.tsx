'use client'

import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { addNotification, setSocketStatus } from '@/store/slices/notificationSlice'
import { selectUser } from '@/store/slices/authSlice'
import { io, Socket } from 'socket.io-client'

interface SocketProviderProps {
    children: React.ReactNode
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    useEffect(() => {
        let socket: Socket | null = null

        if (user?.id) {
            // Connect to socket server
            socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000', {
                auth: {
                    userId: user.id,
                    role: user.role
                }
            })

            socket.on('connect', () => {
                console.log('Socket connected')
                dispatch(setSocketStatus(true))
            })

            socket.on('disconnect', () => {
                console.log('Socket disconnected')
                dispatch(setSocketStatus(false))
            })

            // Listen for real-time notifications
            socket.on('notification', (notification) => {
                dispatch(addNotification(notification))
            })

            // Listen for assignment notifications
            socket.on('assignment:new', (data) => {
                dispatch(addNotification({
                    title: 'New Assignment',
                    message: `New assignment: ${data.title}`,
                    type: 'info',
                    actionUrl: `/assignments/${data.id}`
                }))
            })

            // Listen for grade notifications
            socket.on('grade:released', (data) => {
                dispatch(addNotification({
                    title: 'Grade Released',
                    message: `Your assignment "${data.assignmentTitle}" has been graded`,
                    type: 'success',
                    actionUrl: `/grades/${data.id}`
                }))
            })

            // Listen for due date reminders
            socket.on('assignment:due', (data) => {
                dispatch(addNotification({
                    title: 'Assignment Due Soon',
                    message: `"${data.title}" is due in ${data.timeRemaining}`,
                    type: 'warning',
                    actionUrl: `/assignments/${data.id}`
                }))
            })
        }

        return () => {
            if (socket) {
                socket.disconnect()
                dispatch(setSocketStatus(false))
            }
        }
    }, [user?.id, user?.role, dispatch])

    return <>{children}</>
}

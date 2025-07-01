'use client'

import { useGetStudentCalendarQuery } from '@/store/services/studentApi'
import { Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentCalendarPage() {
    const { data, isLoading, error } = useGetStudentCalendarQuery("68272391943893d5e5a21e9a")

    return (
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-semibold mb-6">My Calendar</h1>

            {isLoading && (
                <div className="flex justify-center py-10">
                    <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
                </div>
            )}

            {error && (
                <div className="text-center text-red-500">Failed to load calendar.</div>
            )}

            {!isLoading && data?.calendar?.length === 0 && (
                <div className="text-center text-muted-foreground">
                    You do not have any events in your calendar.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.calendar?.map((event) => (
                    <Card key={event._id} className="hover:shadow-amber-50 hover:shadow-sm transition-shadow cursor-pointer border">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-medium">{event.title}</h2>
                                <Badge variant="outline">{event.type}</Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Date: {new Date(event.date).toLocaleDateString()}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

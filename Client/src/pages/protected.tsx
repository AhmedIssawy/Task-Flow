import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectIsAuthenticated, selectCurrentUser } from '@/store/slices/authSlice'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ProtectedPage: React.FC = () => {
    const { t } = useTranslation()
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const currentUser = useAppSelector(selectCurrentUser)

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-theme flex items-center justify-center p-4">
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle className="font-body text-center">Access Denied</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="font-body mb-4">You need to be logged in to view this page.</p>
                        <Button onClick={() => window.location.href = '/login'}>
                            {t('auth.login')}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-theme text-theme p-8">
            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-body">Protected Page</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="font-body">
                            This is a protected route. Only authenticated users can see this content.
                        </p>
                        {currentUser && (
                            <div className="bg-primary/5 p-4 rounded-lg">
                                <h3 className="font-body font-semibold mb-2">User Information:</h3>
                                <p><strong>Name:</strong> {currentUser.name}</p>
                                <p><strong>Email:</strong> {currentUser.email}</p>
                                <p><strong>Role:</strong> {currentUser.role}</p>
                            </div>
                        )}
                        <Button onClick={() => window.location.href = '/'}>
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ProtectedPage

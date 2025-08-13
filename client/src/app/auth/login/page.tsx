import LoginForm from '@/components/login/LoginForm'

// Force dynamic rendering for login page
export const dynamic = 'force-dynamic';

export default function LoginPage() {
    return (
        <LoginForm />
    )
}

import LoginForm from '@/components/login/LoginForm'

// Enable ISR with revalidation every hour
export const revalidate = 3600;

export default function LoginPage() {
    return (
        <LoginForm />
    )
}

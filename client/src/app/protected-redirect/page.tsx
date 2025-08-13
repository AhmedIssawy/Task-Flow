import Unauthorized from "@/components/auth/Unauthorized";

// Force dynamic rendering for this page since it handles redirects
export const dynamic = 'force-dynamic';

export default function ProtectedRedirect() {
    return <Unauthorized />;
}
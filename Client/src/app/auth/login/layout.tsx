'use client'

import { useEffect } from 'react'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { getPathByRole } from '@/utils/roleRedirect'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const id = useAppSelector((state) => state.auth.id)
  const role = useAppSelector((state) => state.auth.role)

  useEffect(() => {
    if (id && role) {
      const path = getPathByRole(role, id)
      router.replace(path)
    }
  }, [id, role, router])

  return <>{children}</>
}
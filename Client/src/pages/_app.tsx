import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ReduxProvider } from '@/components/providers/ReduxProvider'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ClientHydration } from '@/components/providers/ClientHydration'
import { ProtectedRoute } from '@/components/routing/ProtectedRoute'
import { GlobalRouter } from '@/components/routing/GlobalRouter'
import { Toaster } from 'react-hot-toast'
import AuthInitializer from "@/components/auth/AuthInitializer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <AuthInitializer />
        <ClientHydration>
          <ThemeProvider>
            <LanguageProvider>
              <ProtectedRoute>
                <GlobalRouter>
                  <Component {...pageProps} />
                </GlobalRouter>
              </ProtectedRoute>
            </LanguageProvider>
          </ThemeProvider>
        </ClientHydration>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </QueryProvider>
    </ReduxProvider>
  )
}

'use client'

export default function StudentLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/* Main Content with proper offset and full width */}
      <main className="min-h-screen w-full">
        {children}
      </main>
    </>
  )
}
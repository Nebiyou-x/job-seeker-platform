import type React from "react"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/admin/sidebar"

// Mock authentication check - in a real app, this would check session/cookies
const isAuthenticated = () => {
  // This is a placeholder - implement real auth check
  return true
}

const isAdmin = () => {
  // This is a placeholder - implement real admin check
  return true
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated and is an admin
  if (!isAuthenticated()) {
    redirect("/login")
  }

  if (!isAdmin()) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container p-6 md:p-8">{children}</div>
      </div>
    </div>
  )
}

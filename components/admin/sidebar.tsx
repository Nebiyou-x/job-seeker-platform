"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Users, Briefcase, Settings, LogOut, Star, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const routes = [
  {
    label: "Dashboard",
    icon: BarChart3,
    href: "/admin",
    color: "text-sky-500",
  },
  {
    label: "Job Seekers",
    icon: User,
    href: "/admin/job-seekers",
    color: "text-violet-500",
  },
  {
    label: "Employers",
    icon: Briefcase,
    href: "/admin/employers",
    color: "text-pink-700",
  },
  {
    label: "Testimonials",
    icon: Star,
    href: "/admin/testimonials",
    color: "text-orange-500",
  },
  {
    label: "Users",
    icon: Users,
    href: "/admin/users",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col border-r bg-muted/40 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Admin Panel</h2>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <route.icon className={cn("h-5 w-5", route.color)} />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-2">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Exit Admin
          </Link>
        </Button>
      </div>
    </div>
  )
}

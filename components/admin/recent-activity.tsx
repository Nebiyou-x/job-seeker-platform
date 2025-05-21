import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "created a new profile",
    timestamp: "2 minutes ago",
  },
  {
    user: {
      name: "Michael Chen",
      email: "m.chen@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "updated company information",
    timestamp: "34 minutes ago",
  },
  {
    user: {
      name: "Emma Wilson",
      email: "emma.w@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "left a testimonial",
    timestamp: "1 hour ago",
  },
  {
    user: {
      name: "James Rodriguez",
      email: "j.rodriguez@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "applied to 3 jobs",
    timestamp: "2 hours ago",
  },
  {
    user: {
      name: "Admin",
      email: "admin@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "approved 12 profiles",
    timestamp: "3 hours ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center gap-4 rounded-lg border p-3">
          <Avatar>
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>
              {activity.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.timestamp}</div>
        </div>
      ))}
    </div>
  )
}

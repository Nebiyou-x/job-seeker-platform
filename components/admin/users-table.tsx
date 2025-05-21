"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, Shield, User, Briefcase } from "lucide-react"

// Mock data - in a real app, this would come from your database
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    status: "active",
    lastActive: "2023-10-15T14:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "job-seeker",
    status: "active",
    lastActive: "2023-10-14T09:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "employer",
    status: "active",
    lastActive: "2023-10-15T11:20:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Michael Chen",
    email: "m.chen@example.com",
    role: "job-seeker",
    status: "inactive",
    lastActive: "2023-09-28T16:15:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    email: "lisa.r@example.com",
    role: "employer",
    status: "active",
    lastActive: "2023-10-14T13:50:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

interface UsersTableProps {
  filter?: string
}

export function UsersTable({ filter }: UsersTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter users based on the filter prop and search query
  const filteredUsers = users.filter((user) => {
    // Apply role filter
    if (filter === "admin" && user.role !== "admin") return false
    if (filter === "job-seeker" && user.role !== "job-seeker") return false
    if (filter === "employer" && user.role !== "employer") return false

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
      )
    }

    return true
  })

  // Function to get the appropriate icon for each role
  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="h-4 w-4 text-primary" />
      case "job-seeker":
        return <User className="h-4 w-4 text-blue-500" />
      case "employer":
        return <Briefcase className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 w-[300px]"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getRoleIcon(user.role)}
                      <span className="capitalize">{user.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>{new Date(user.lastActive).toLocaleString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit user</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Change role</DropdownMenuItem>
                        <DropdownMenuItem>{user.status === "active" ? "Deactivate" : "Activate"}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Reset password</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete user</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

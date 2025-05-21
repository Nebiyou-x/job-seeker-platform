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
import { MoreHorizontal, Search, Star, StarOff } from "lucide-react"

// Mock data - in a real app, this would come from your database
const jobSeekers = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    location: "New York, NY",
    skills: ["React", "TypeScript", "Node.js"],
    experience: "5 years",
    status: "active",
    featured: true,
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    location: "San Francisco, CA",
    skills: ["Python", "Django", "AWS"],
    experience: "3 years",
    status: "active",
    featured: false,
  },
  {
    id: "3",
    name: "James Wilson",
    email: "james.w@example.com",
    location: "Chicago, IL",
    skills: ["JavaScript", "React", "CSS"],
    experience: "2 years",
    status: "pending",
    featured: false,
  },
  {
    id: "4",
    name: "Sarah Lee",
    email: "sarah.l@example.com",
    location: "Austin, TX",
    skills: ["Java", "Spring", "Hibernate"],
    experience: "7 years",
    status: "active",
    featured: true,
  },
  {
    id: "5",
    name: "David Kim",
    email: "david.k@example.com",
    location: "Seattle, WA",
    skills: ["C#", ".NET", "Azure"],
    experience: "4 years",
    status: "inactive",
    featured: false,
  },
]

interface JobSeekersTableProps {
  filter?: string
}

export function JobSeekersTable({ filter }: JobSeekersTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter job seekers based on the filter prop and search query
  const filteredJobSeekers = jobSeekers.filter((jobSeeker) => {
    // Apply status/featured filter
    if (filter === "featured" && !jobSeeker.featured) return false
    if (filter === "pending" && jobSeeker.status !== "pending") return false
    if (filter === "inactive" && jobSeeker.status !== "inactive") return false

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        jobSeeker.name.toLowerCase().includes(query) ||
        jobSeeker.email.toLowerCase().includes(query) ||
        jobSeeker.location.toLowerCase().includes(query) ||
        jobSeeker.skills.some((skill) => skill.toLowerCase().includes(query))
      )
    }

    return true
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search job seekers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 w-[300px]"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobSeekers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No job seekers found.
                </TableCell>
              </TableRow>
            ) : (
              filteredJobSeekers.map((jobSeeker) => (
                <TableRow key={jobSeeker.id}>
                  <TableCell className="font-medium">
                    <div>
                      {jobSeeker.name}
                      <div className="text-xs text-muted-foreground">{jobSeeker.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{jobSeeker.location}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {jobSeeker.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{jobSeeker.experience}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        jobSeeker.status === "active"
                          ? "default"
                          : jobSeeker.status === "pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {jobSeeker.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {jobSeeker.featured ? (
                      <Star className="h-4 w-4 text-yellow-500" />
                    ) : (
                      <StarOff className="h-4 w-4 text-muted-foreground" />
                    )}
                  </TableCell>
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
                        <DropdownMenuItem>Edit details</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          {jobSeeker.featured ? "Remove from featured" : "Add to featured"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>{jobSeeker.status === "active" ? "Deactivate" : "Activate"}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete profile</DropdownMenuItem>
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

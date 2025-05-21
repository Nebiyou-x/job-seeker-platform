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
import { MoreHorizontal, Search } from "lucide-react"

// Mock data - in a real app, this would come from your database
const employers = [
  {
    id: "1",
    name: "Tech Innovations Inc.",
    contactName: "John Smith",
    email: "john@techinnovations.com",
    location: "San Francisco, CA",
    industry: "Technology",
    jobsPosted: 12,
    status: "active",
  },
  {
    id: "2",
    name: "Global Finance Group",
    contactName: "Lisa Johnson",
    email: "lisa@globalfinance.com",
    location: "New York, NY",
    industry: "Finance",
    jobsPosted: 8,
    status: "active",
  },
  {
    id: "3",
    name: "Healthcare Solutions",
    contactName: "Robert Chen",
    email: "robert@healthcaresolutions.com",
    location: "Boston, MA",
    industry: "Healthcare",
    jobsPosted: 5,
    status: "pending",
  },
  {
    id: "4",
    name: "Creative Design Studio",
    contactName: "Emma Wilson",
    email: "emma@creativedesign.com",
    location: "Los Angeles, CA",
    industry: "Design",
    jobsPosted: 3,
    status: "active",
  },
  {
    id: "5",
    name: "Eco Friendly Products",
    contactName: "Michael Green",
    email: "michael@ecofriendly.com",
    location: "Portland, OR",
    industry: "Retail",
    jobsPosted: 2,
    status: "inactive",
  },
]

interface EmployersTableProps {
  filter?: string
}

export function EmployersTable({ filter }: EmployersTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter employers based on the filter prop and search query
  const filteredEmployers = employers.filter((employer) => {
    // Apply status filter
    if (filter === "active" && employer.status !== "active") return false
    if (filter === "pending" && employer.status !== "pending") return false
    if (filter === "inactive" && employer.status !== "inactive") return false

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        employer.name.toLowerCase().includes(query) ||
        employer.contactName.toLowerCase().includes(query) ||
        employer.email.toLowerCase().includes(query) ||
        employer.location.toLowerCase().includes(query) ||
        employer.industry.toLowerCase().includes(query)
      )
    }

    return true
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search employers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 w-[300px]"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Jobs Posted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No employers found.
                </TableCell>
              </TableRow>
            ) : (
              filteredEmployers.map((employer) => (
                <TableRow key={employer.id}>
                  <TableCell className="font-medium">{employer.name}</TableCell>
                  <TableCell>
                    <div>
                      {employer.contactName}
                      <div className="text-xs text-muted-foreground">{employer.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{employer.location}</TableCell>
                  <TableCell>{employer.industry}</TableCell>
                  <TableCell>{employer.jobsPosted}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        employer.status === "active"
                          ? "default"
                          : employer.status === "pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {employer.status}
                    </Badge>
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
                        <DropdownMenuItem>View job postings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>{employer.status === "active" ? "Deactivate" : "Activate"}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete employer</DropdownMenuItem>
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

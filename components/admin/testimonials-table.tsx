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
const testimonials = [
  {
    id: "1",
    author: "John Doe",
    email: "john.doe@example.com",
    content:
      "Found my dream job within a week of signing up! The platform is intuitive and the job matching algorithm is spot on.",
    rating: 5,
    date: "2023-05-15",
    status: "approved",
  },
  {
    id: "2",
    author: "Sarah Miller",
    email: "sarah.m@example.com",
    content:
      "As an employer, I've been able to find qualified candidates much faster than with other platforms. Highly recommend!",
    rating: 4,
    date: "2023-06-22",
    status: "approved",
  },
  {
    id: "3",
    author: "Michael Chang",
    email: "m.chang@example.com",
    content:
      "The skills assessment feature really helped me stand out to employers. Got three interviews in my first week!",
    rating: 5,
    date: "2023-07-10",
    status: "pending",
  },
  {
    id: "4",
    author: "Emily Johnson",
    email: "emily.j@example.com",
    content: "Great platform overall, but could use more filters for job searches.",
    rating: 3,
    date: "2023-08-05",
    status: "approved",
  },
  {
    id: "5",
    author: "David Wilson",
    email: "d.wilson@example.com",
    content: "Not enough jobs in my area. Would be better with more local listings.",
    rating: 2,
    date: "2023-09-18",
    status: "rejected",
  },
]

interface TestimonialsTableProps {
  filter?: string
}

export function TestimonialsTable({ filter }: TestimonialsTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter testimonials based on the filter prop and search query
  const filteredTestimonials = testimonials.filter((testimonial) => {
    // Apply status filter
    if (filter === "approved" && testimonial.status !== "approved") return false
    if (filter === "pending" && testimonial.status !== "pending") return false
    if (filter === "rejected" && testimonial.status !== "rejected") return false

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        testimonial.author.toLowerCase().includes(query) ||
        testimonial.email.toLowerCase().includes(query) ||
        testimonial.content.toLowerCase().includes(query)
      )
    }

    return true
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search testimonials..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 w-[300px]"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author</TableHead>
              <TableHead>Testimonial</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTestimonials.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No testimonials found.
                </TableCell>
              </TableRow>
            ) : (
              filteredTestimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell>
                    <div>
                      {testimonial.author}
                      <div className="text-xs text-muted-foreground">{testimonial.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[300px]">
                    <div className="line-clamp-2">{testimonial.content}</div>
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>{new Date(testimonial.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        testimonial.status === "approved"
                          ? "default"
                          : testimonial.status === "pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {testimonial.status}
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
                        <DropdownMenuItem>View full testimonial</DropdownMenuItem>
                        <DropdownMenuItem>Edit testimonial</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {testimonial.status !== "approved" && <DropdownMenuItem>Approve</DropdownMenuItem>}
                        {testimonial.status !== "rejected" && <DropdownMenuItem>Reject</DropdownMenuItem>}
                        {testimonial.status !== "pending" && <DropdownMenuItem>Mark as pending</DropdownMenuItem>}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete testimonial</DropdownMenuItem>
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

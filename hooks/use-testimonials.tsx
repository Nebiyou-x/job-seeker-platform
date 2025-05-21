"use client"

import { useState } from "react"

// Sample testimonials
const sampleTestimonials = [
  {
    id: 1,
    profileId: 1,
    author: {
      name: "John Smith",
      image: "/placeholder.svg?height=50&width=50",
      role: "HR Manager at TechCorp",
      type: "employer" as const,
    },
    rating: 5,
    content:
      "Sarah was an exceptional employee. Her customer service skills are outstanding, and she always went above and beyond for our clients. Highly recommend!",
    date: new Date(2023, 5, 15),
  },
  {
    id: 2,
    profileId: 1,
    author: {
      name: "Emily Wong",
      image: "/placeholder.svg?height=50&width=50",
      role: "Team Lead at ServiceFirst",
      type: "employer" as const,
    },
    rating: 4,
    content:
      "Great work ethic and excellent communication skills. Sarah is reliable and professional. Would hire again for future projects.",
    date: new Date(2023, 8, 22),
  },
  {
    id: 3,
    profileId: 1,
    author: {
      name: "Miguel Santos",
      image: "/placeholder.svg?height=50&width=50",
      role: "Customer Service Representative",
      type: "jobseeker" as const,
    },
    rating: 5,
    content:
      "I had the pleasure of working with Sarah on several projects. She's a great team player and always willing to help others. Learned a lot from her!",
    date: new Date(2023, 7, 10),
  },
  {
    id: 4,
    profileId: 2,
    author: {
      name: "Jessica Lee",
      image: "/placeholder.svg?height=50&width=50",
      role: "Project Manager at WebSolutions",
      type: "employer" as const,
    },
    rating: 5,
    content:
      "Michael is an exceptional developer. His attention to detail and problem-solving skills are impressive. Delivered the project ahead of schedule!",
    date: new Date(2023, 9, 5),
  },
  {
    id: 5,
    profileId: 3,
    author: {
      name: "Dr. Robert Chen",
      image: "/placeholder.svg?height=50&width=50",
      role: "Medical Director at City Hospital",
      type: "employer" as const,
    },
    rating: 5,
    content:
      "Elena is one of the most dedicated nurses I've worked with. Her patient care is exceptional, and she's always willing to take on additional responsibilities.",
    date: new Date(2023, 6, 18),
  },
]

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState(sampleTestimonials)

  const addTestimonial = (profileId: number, newTestimonial: any) => {
    const testimonial = {
      id: testimonials.length + 1,
      profileId,
      author: {
        name: "You", // In a real app, this would be the logged-in user
        image: "/placeholder.svg?height=50&width=50",
        role: newTestimonial.type === "employer" ? "Employer" : "Job Seeker",
        type: newTestimonial.type,
      },
      rating: newTestimonial.rating,
      content: newTestimonial.content,
      date: new Date(),
    }

    setTestimonials([...testimonials, testimonial])
  }

  return {
    testimonials,
    addTestimonial,
  }
}

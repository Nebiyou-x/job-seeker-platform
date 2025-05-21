"use client"

import { useState } from "react"

// Sample data for job seekers
const jobSeekersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Manila, Philippines",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Customer Service", level: 90 },
      { name: "English Proficiency", level: 85 },
      { name: "MS Office", level: 75 },
    ],
    height: 168, // cm
    weight: 59, // kg
    heightDisplay: "5'6\"",
    weightDisplay: "130 lbs",
    featured: true,
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Bangkok, Thailand",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Web Development", level: 95 },
      { name: "UI/UX Design", level: 80 },
      { name: "Project Management", level: 70 },
    ],
    height: 178, // cm
    weight: 75, // kg
    heightDisplay: "5'10\"",
    weightDisplay: "165 lbs",
    featured: false,
    rating: 4.5,
    reviewCount: 18,
  },
  {
    id: 3,
    name: "Elena Santos",
    location: "Cebu, Philippines",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Nursing", level: 95 },
      { name: "Patient Care", level: 90 },
      { name: "Medical Records", level: 85 },
    ],
    height: 162, // cm
    weight: 57, // kg
    heightDisplay: "5'4\"",
    weightDisplay: "125 lbs",
    featured: true,
    rating: 4.9,
    reviewCount: 32,
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Teaching", level: 90 },
      { name: "Curriculum Development", level: 85 },
      { name: "Classroom Management", level: 80 },
    ],
    height: 175, // cm
    weight: 70, // kg
    heightDisplay: "5'9\"",
    weightDisplay: "155 lbs",
    featured: false,
    rating: 4.6,
    reviewCount: 15,
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    location: "Manila, Philippines",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Accounting", level: 92 },
      { name: "Financial Analysis", level: 88 },
      { name: "Excel", level: 95 },
    ],
    height: 165, // cm
    weight: 58, // kg
    heightDisplay: "5'5\"",
    weightDisplay: "128 lbs",
    featured: true,
    rating: 4.7,
    reviewCount: 21,
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Singapore",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Sales", level: 95 },
      { name: "Negotiation", level: 90 },
      { name: "CRM Software", level: 85 },
    ],
    height: 183, // cm
    weight: 82, // kg
    heightDisplay: "6'0\"",
    weightDisplay: "180 lbs",
    featured: false,
    rating: 4.4,
    reviewCount: 19,
  },
  {
    id: 7,
    name: "Akira Tanaka",
    location: "Tokyo, Japan",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Software Engineering", level: 95 },
      { name: "Data Analysis", level: 90 },
      { name: "Problem Solving", level: 92 },
    ],
    height: 173, // cm
    weight: 68, // kg
    heightDisplay: "5'8\"",
    weightDisplay: "150 lbs",
    featured: true,
    rating: 4.9,
    reviewCount: 27,
  },
  {
    id: 8,
    name: "Li Wei",
    location: "Hong Kong",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Marketing", level: 88 },
      { name: "Social Media", level: 92 },
      { name: "Content Creation", level: 85 },
    ],
    height: 170, // cm
    weight: 66, // kg
    heightDisplay: "5'7\"",
    weightDisplay: "145 lbs",
    featured: false,
    rating: 4.3,
    reviewCount: 14,
  },
  {
    id: 9,
    name: "Sophia Nguyen",
    location: "Ho Chi Minh City, Vietnam",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Hospitality", level: 90 },
      { name: "Customer Relations", level: 92 },
      { name: "Event Planning", level: 85 },
    ],
    height: 160, // cm
    weight: 52, // kg
    heightDisplay: "5'3\"",
    weightDisplay: "115 lbs",
    featured: true,
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: 10,
    name: "Ahmed Khan",
    location: "Kuala Lumpur, Malaysia",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Engineering", level: 95 },
      { name: "Project Management", level: 88 },
      { name: "Technical Writing", level: 82 },
    ],
    height: 180, // cm
    weight: 79, // kg
    heightDisplay: "5'11\"",
    weightDisplay: "175 lbs",
    featured: false,
    rating: 4.5,
    reviewCount: 16,
  },
  {
    id: 11,
    name: "Isabella Garcia",
    location: "Jakarta, Indonesia",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Human Resources", level: 90 },
      { name: "Recruitment", level: 92 },
      { name: "Employee Relations", level: 85 },
    ],
    height: 165, // cm
    weight: 59, // kg
    heightDisplay: "5'5\"",
    weightDisplay: "130 lbs",
    featured: true,
    rating: 4.7,
    reviewCount: 20,
  },
  {
    id: 12,
    name: "Raj Patel",
    location: "Bangkok, Thailand",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "IT Support", level: 88 },
      { name: "Network Administration", level: 85 },
      { name: "Troubleshooting", level: 90 },
    ],
    height: 175, // cm
    weight: 73, // kg
    heightDisplay: "5'9\"",
    weightDisplay: "160 lbs",
    featured: false,
    rating: 4.4,
    reviewCount: 17,
  },
]

export function useJobSeekers() {
  const [jobSeekers, setJobSeekers] = useState(jobSeekersData)

  return {
    jobSeekers,
    setJobSeekers,
  }
}

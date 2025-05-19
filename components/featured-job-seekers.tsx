"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, Heart, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Sample data for job seekers
const jobSeekers = [
  {
    id: 1,
    name: "Alemnesh Kassahun",
    location: "Addis Ababa, Ethiopia",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Child Care", level: 90 },
      { name: "Arabic Language", level: 85 },
      { name: "Housekeeping", level: 75 },
    ],
    height: "5'6\"",
    weight: "130 lbs",
    featured: true,
  },
  {
    id: 2,
    name: "Tewodros Abebe",
    location: "Bahir Dar, Ethiopia",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Driving", level: 95 },
      { name: "Auto Mechanics", level: 80 },
      { name: "Arabic Language", level: 70 },
    ],
    height: "5'10\"",
    weight: "165 lbs",
    featured: false,
  },
  {
    id: 3,
    name: "Selamawit Girma",
    location: "Hawassa, Ethiopia",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Child Care", level: 95 },
      { name: "First Aid", level: 90 },
      { name: "Cooking", level: 85 },
    ],
    height: "5'4\"",
    weight: "125 lbs",
    featured: true,
  },
  {
    id: 4,
    name: "Yonas Mekonnen",
    location: "Mekele, Ethiopia",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      { name: "Driving", level: 90 },
      { name: "Arabic Language", level: 85 },
      { name: "Customer Service", level: 80 },
    ],
    height: "5'9\"",
    weight: "155 lbs",
    featured: false,
  },
];

export function FeaturedJobSeekers() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {jobSeekers.map((jobSeeker) => (
          <motion.div key={jobSeeker.id} variants={item}>
            <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 relative">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={jobSeeker.image || "/placeholder.svg"}
                    alt={jobSeeker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-2 right-2 z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
                      onClick={() => toggleFavorite(jobSeeker.id)}
                    >
                      <Heart
                        className={`h-5 w-5 ${favorites.includes(jobSeeker.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                    </Button>
                  </div>
                  {jobSeeker.featured && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-xl font-bold text-white">{jobSeeker.name}</h3>
                    <div className="flex items-center mt-1 text-white/80">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{jobSeeker.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <div>Height: {jobSeeker.height}</div>
                    <div>Weight: {jobSeeker.weight}</div>
                  </div>
                  <h4 className="font-medium text-sm">Top Skills</h4>
                  {jobSeeker.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/profiles/${jobSeeker.id}`} className="w-full">
                  <Button variant="outline" className="w-full group">
                    View Profile
                    <Eye className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center">
        <Link href="/profiles">
          <Button size="lg" variant="outline">
            View All Profiles
          </Button>
        </Link>
      </div>
    </div>
  )
}

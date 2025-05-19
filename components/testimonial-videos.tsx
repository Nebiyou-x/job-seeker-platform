"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ato Yohannes Lemma",
    role: "Owner, Star Cleaning Services",
    thumbnail: "/placeholder.svg?height=200&width=350",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "We found reliable cleaners and drivers for our business quickly and easily!",
    type: "employer",
  },
  {
    id: 2,
    name: "Weyzerit Almaz Abebe",
    role: "Domestic Worker in Saudi Arabia",
    thumbnail: "/placeholder.svg?height=200&width=350",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "I got a good housekeeping job in Riyadh within 3 weeks of registering.",
    type: "jobseeker",
  },
  {
    id: 3,
    name: "Ato Mohammed Hussein",
    role: "Manager, Gulf Employment Agency",
    thumbnail: "/placeholder.svg?height=200&width=350",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "This platform helps us connect with skilled workers for Middle East jobs.",
    type: "employer",
  },
  {
    id: 4,
    name: "Weyzerit Tigist Worku",
    role: "Nanny in Dubai",
    thumbnail: "/placeholder.svg?height=200&width=350",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "I found a kind family to work for with better salary than I expected.",
    type: "jobseeker",
  },
];

export function TestimonialVideos() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof testimonials)[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState<"all" | "employer" | "jobseeker">("all")

  const filteredTestimonials =
    activeFilter === "all" ? testimonials : testimonials.filter((t) => t.type === activeFilter)

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
    <>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className="rounded-l-md rounded-r-none"
            onClick={() => setActiveFilter("all")}
          >
            All Testimonials
          </Button>
          <Button
            variant={activeFilter === "employer" ? "default" : "outline"}
            className="rounded-none border-x-0"
            onClick={() => setActiveFilter("employer")}
          >
            From Employers
          </Button>
          <Button
            variant={activeFilter === "jobseeker" ? "default" : "outline"}
            className="rounded-r-md rounded-l-none"
            onClick={() => setActiveFilter("jobseeker")}
          >
            From Job Seekers
          </Button>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {filteredTestimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={item}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={testimonial.thumbnail || "/placeholder.svg"}
                      alt={`${testimonial.name} testimonial`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity hover:bg-black/50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 h-12 w-12"
                        onClick={() => setSelectedVideo(testimonial)}
                      >
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <blockquote className="text-sm italic mb-3">"{testimonial.quote}"</blockquote>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
          <DialogHeader className="p-4">
            <DialogTitle>{selectedVideo?.name}</DialogTitle>
            <DialogDescription>{selectedVideo?.role}</DialogDescription>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={`${selectedVideo.name} testimonial`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

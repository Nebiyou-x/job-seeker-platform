"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Download, Heart, Mail, MapPin, MessageSquare, Phone, Share2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

// Sample job seeker data
const jobSeeker = {
  id: 1,
  name: "Alemnesh Bekele",
  title: "Domestic Worker",
  location: "Addis Ababa, Ethiopia",
  image: "/placeholder.svg?height=400&width=400",
  coverImage: "/placeholder.svg?height=400&width=1200",
  bio: "Experienced domestic helper with 3+ years of experience in housekeeping, child care, and cooking. Hardworking, honest, and able to follow instructions well. Seeking employment in the Middle East.",
  skills: [
    { name: "Housekeeping", level: 90 },
    { name: "Child Care", level: 85 },
    { name: "Cooking", level: 80 },
    { name: "Laundry", level: 75 },
    { name: "Arabic Language", level: 70 },
    { name: "Elderly Care", level: 65 },
  ],
  experience: [
    {
      title: "Housekeeper",
      company: "Private Family",
      location: "Addis Ababa, Ethiopia",
      period: "Jan 2021 - Present",
      description:
        "Cleaned entire house, did laundry and ironing, prepared meals for family of 5, and helped with child care when needed.",
    },
    {
      title: "Nanny",
      company: "Private Family",
      location: "Dire Dawa, Ethiopia",
      period: "Mar 2019 - Dec 2020",
      description:
        "Took care of two children (ages 3 and 5), prepared their meals, helped with homework, and maintained their daily routine.",
    },
  ],
  education: [
    {
      degree: "High School Diploma",
      institution: "Addis Ketema Secondary School",
      location: "Addis Ababa, Ethiopia",
      period: "2015 - 2019",
    },
  ],
  certifications: [
    "Basic Housekeeping Certificate (2020)",
    "Child Care Training (2019)",
  ],
  languages: [
    { name: "Amharic", level: "Native" },
    { name: "Arabic", level: "Intermediate" },
    { name: "English", level: "Basic" },
  ],
  height: "5'4\"",
  weight: "121 lbs",
  availability: "Immediate",
  preferredLocation: "Middle East",
  gallery: [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ],
  videoUrl: "https://youtube.com/3kRB2TXewus?si=IgmBOCTFy0im_ZxQ",
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
          <Image src={jobSeeker.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="container relative h-full flex items-end pb-4">
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
        </div>

        <div className="container">
          <div className="relative -mt-20 mb-8 flex flex-col md:flex-row gap-6">
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background">
              <Image src={jobSeeker.image || "/placeholder.svg"} alt={jobSeeker.name} fill className="object-cover" />
            </div>

            <div className="flex-1 pt-4 md:pt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{jobSeeker.name}</h1>
                  <p className="text-xl text-muted-foreground">{jobSeeker.title}</p>
                  <div className="flex items-center mt-1 text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{jobSeeker.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={toggleFavorite}>
                    <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    {isFavorite ? "Saved" : "Save Profile"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Available Now</Badge>
                <Badge variant="outline">5+ Years Experience</Badge>
                <Badge variant="outline">English Fluent</Badge>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about" className="mb-12">
            <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
              <TabsTrigger
                value="about"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Gallery
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">About Me</h2>
                    <p className="text-muted-foreground">{jobSeeker.bio}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Introduction Video</h2>
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={jobSeeker.videoUrl}
                        title={`${jobSeeker.name} introduction`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    {jobSeeker.education.map((edu, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-medium">{edu.degree}</h3>
                        <p className="text-muted-foreground">
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {jobSeeker.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold">Personal Details</h3>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Height</span>
                          <span>{jobSeeker.height}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Weight</span>
                          <span>{jobSeeker.weight}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Availability</span>
                          <span>{jobSeeker.availability}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Preferred Location</span>
                          <span>{jobSeeker.preferredLocation}</span>
                        </div>
                      </div>

                      <h3 className="font-semibold pt-2">Languages</h3>
                      <div className="space-y-2">
                        {jobSeeker.languages.map((lang, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{lang.name}</span>
                            <span>{lang.level}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Resume
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Contact via platform</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Available after connection</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Schedule an interview</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" className="w-full">
                          Request Contact Info
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <div className="space-y-8">
                <h2 className="text-xl font-semibold">Work Experience</h2>

                {jobSeeker.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-8 border-l border-muted-foreground/20 last:border-0 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                    <div>
                      <h3 className="font-medium text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-6">Professional Skills</h2>
                  <div className="space-y-6">
                    {jobSeeker.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-6">Soft Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 text-sm">Communication</Badge>
                    <Badge className="px-3 py-1 text-sm">Teamwork</Badge>
                    <Badge className="px-3 py-1 text-sm">Problem Solving</Badge>
                    <Badge className="px-3 py-1 text-sm">Time Management</Badge>
                    <Badge className="px-3 py-1 text-sm">Adaptability</Badge>
                    <Badge className="px-3 py-1 text-sm">Creativity</Badge>
                    <Badge className="px-3 py-1 text-sm">Leadership</Badge>
                    <Badge className="px-3 py-1 text-sm">Critical Thinking</Badge>
                    <Badge className="px-3 py-1 text-sm">Emotional Intelligence</Badge>
                    <Badge className="px-3 py-1 text-sm">Attention to Detail</Badge>
                  </div>

                  <div className="pt-8">
                    <h2 className="text-xl font-semibold mb-6">Interests</h2>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        Reading
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        Traveling
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        Photography
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        Cooking
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        Hiking
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        Music
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-0">
              <h2 className="text-xl font-semibold mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {jobSeeker.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            <DialogHeader className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            {selectedImage && (
              <div className="relative aspect-square w-full">
                <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ezak Private Employment Agency. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

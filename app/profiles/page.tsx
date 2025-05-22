"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, Heart, MapPin, Building2, Star, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { SearchFilters } from "@/components/search-filters"
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestimonialCard } from "@/components/testimonial-card"
import { AddTestimonialDialog } from "@/components/add-testimonial-dialog"
import { useJobSeekers } from "@/hooks/use-job-seekers"
import { useTestimonials } from "@/hooks/use-testimonials"
import { useFavorites } from "@/hooks/use-favorites"

export default function ProfilesPage() {
  const { jobSeekers } = useJobSeekers()
  const { testimonials, addTestimonial } = useTestimonials()
  const { favorites, toggleFavorite } = useFavorites()

  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProfiles, setFilteredProfiles] = useState(jobSeekers)
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null)
  const [filters, setFilters] = useState({
    searchTerm: "",
    location: "",
    skills: [] as string[],
    heightRange: [140, 210] as number[],
    weightRange: [40, 120] as number[],
  })
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  const profilesPerPage = 8

  // Apply filters to profiles
  const applyFilters = useCallback(() => {
    let result = jobSeekers

    // Filter by search term (name, skills, location)
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase()
      result = result.filter(
        (profile) =>
          profile.name.toLowerCase().includes(searchLower) ||
          profile.location.toLowerCase().includes(searchLower) ||
          profile.skills.some((skill) => skill.name.toLowerCase().includes(searchLower)),
      )
    }

    // Filter by location
    if (filters.location) {
      result = result.filter((profile) => profile.location === filters.location)
    }

    // Filter by skills
    if (filters.skills.length > 0) {
      result = result.filter((profile) =>
        filters.skills.some((skill) =>
          profile.skills.some((profileSkill) => profileSkill.name.toLowerCase().includes(skill.toLowerCase())),
        ),
      )
    }

    // Filter by height range
    result = result.filter(
      (profile) => profile.height >= filters.heightRange[0] && profile.height <= filters.heightRange[1],
    )

    // Filter by weight range
    result = result.filter(
      (profile) => profile.weight >= filters.weightRange[0] && profile.weight <= filters.weightRange[1],
    )

    setFilteredProfiles(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [filters, jobSeekers])

  useEffect(() => {
    applyFilters()
  }, [applyFilters])

  // Calculate pagination
  const indexOfLastProfile = currentPage * profilesPerPage
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile)
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage)

  const handleFilterChange = useCallback((newFilters: any) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const handleAddTestimonial = (profileId: number, newTestimonial: any) => {
    addTestimonial(profileId, newTestimonial)
  }

  const getProfileTestimonials = (profileId: number) => {
    return testimonials.filter((t) => t.profileId === profileId)
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
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <SiteHeader />

      <main className="flex-1 container py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Browse Profiles</h1>
            <p className="text-muted-foreground mt-2">Find the perfect candidate for your job openings</p>
          </div>
          <div className="flex gap-2">
            <Link href="/favorites">
              <Button variant="outline">
                <Heart className="mr-2 h-4 w-4" />
                Favorites ({favorites.length})
              </Button>
            </Link>
            <Button onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}>Advanced Search</Button>
          </div>
        </div>
       <SearchFilters />
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProfiles.length === 0 ? 0 : indexOfFirstProfile + 1}-
            {Math.min(indexOfLastProfile, filteredProfiles.length)} of {filteredProfiles.length} profiles
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option value="relevance">Relevance</option>
              <option value="recent">Recently Added</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12 border rounded-lg bg-background">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No profiles found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any profiles matching your search criteria. Try adjusting your filters or search terms.
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {currentProfiles.map((jobSeeker) => (
              <motion.div key={jobSeeker.id} variants={item}>
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="p-0 relative">
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
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      
                      <span className="ml-2 text-sm text-muted-foreground">({jobSeeker.reviewCount} reviews)</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <div>Height: {jobSeeker.heightDisplay}</div>
                        <div>Weight: {jobSeeker.weightDisplay}</div>
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
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Link href={`/profiles/${jobSeeker.id}`} className="flex-1">
                      <Button variant="outline" className="w-full group">
                        View Profile
                        <Eye className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProfile(selectedProfile === jobSeeker.id ? null : jobSeeker.id)}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {filteredProfiles.length > 0 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === index + 1}
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(index + 1)
                    }}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {selectedProfile && (
          <div className="mt-12 border rounded-lg p-6 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  Reviews & Testimonials for {jobSeekers.find((p) => p.id === selectedProfile)?.name}
                </h2>
                <p className="text-muted-foreground">See what others are saying about working with this candidate</p>
              </div>
              <AddTestimonialDialog
                onSubmit={(testimonial) => handleAddTestimonial(selectedProfile, testimonial)}
                profileName={jobSeekers.find((p) => p.id === selectedProfile)?.name || ""}
              />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="employer">From Employers</TabsTrigger>
                <TabsTrigger value="jobseeker">From Job Seekers</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProfileTestimonials(selectedProfile).length > 0 ? (
                    getProfileTestimonials(selectedProfile).map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.id}
                        author={testimonial.author}
                        rating={testimonial.rating}
                        content={testimonial.content}
                        date={testimonial.date}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">No reviews yet. Be the first to leave a review!</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="employer" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProfileTestimonials(selectedProfile).filter((t) => t.author.type === "employer").length > 0 ? (
                    getProfileTestimonials(selectedProfile)
                      .filter((t) => t.author.type === "employer")
                      .map((testimonial) => (
                        <TestimonialCard
                          key={testimonial.id}
                          author={testimonial.author}
                          rating={testimonial.rating}
                          content={testimonial.content}
                          date={testimonial.date}
                        />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">No employer reviews yet.</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="jobseeker" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProfileTestimonials(selectedProfile).filter((t) => t.author.type === "jobseeker").length > 0 ? (
                    getProfileTestimonials(selectedProfile)
                      .filter((t) => t.author.type === "jobseeker")
                      .map((testimonial) => (
                        <TestimonialCard
                          key={testimonial.id}
                          author={testimonial.author}
                          rating={testimonial.rating}
                          content={testimonial.content}
                          date={testimonial.date}
                        />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">No job seeker reviews yet.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-24">
          <div className="flex items-center gap-2 font-semibold">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <Building2 className="h-3 w-3 text-primary-foreground" />
            </div>
            <span>Ezak Private Employment Agency</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/about" className="hover:underline underline-offset-4">
              About
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Ezak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

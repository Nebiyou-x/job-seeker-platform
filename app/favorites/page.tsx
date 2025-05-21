"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, Heart, MapPin, Building2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SiteHeader } from "@/components/site-header"
import { useJobSeekers } from "@/hooks/use-job-seekers"
import { useFavorites } from "@/hooks/use-favorites"

export default function FavoritesPage() {
  const { jobSeekers } = useJobSeekers()
  const { favorites, toggleFavorite } = useFavorites()

  // Get only favorited profiles
  const favoriteProfiles = jobSeekers.filter((profile) => favorites.includes(profile.id))

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
            <h1 className="text-3xl font-bold tracking-tight">Favorite Profiles</h1>
            <p className="text-muted-foreground mt-2">Your saved candidates for future reference</p>
          </div>
          <div className="flex gap-2">
            <Link href="/profiles">
              <Button variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Browse All Profiles
              </Button>
            </Link>
          </div>
        </div>

        {favoriteProfiles.length === 0 ? (
          <div className="text-center py-16 border rounded-lg bg-background">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              You haven't added any profiles to your favorites yet. Browse profiles and click the heart icon to add them
              here.
            </p>
            <Link href="/profiles">
              <Button>Browse Profiles</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                You have {favoriteProfiles.length} favorite {favoriteProfiles.length === 1 ? "profile" : "profiles"}
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {favoriteProfiles.map((jobSeeker) => (
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
                            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
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
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
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

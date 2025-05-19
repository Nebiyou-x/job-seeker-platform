import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedJobSeekers } from "@/components/featured-job-seekers"
import { TestimonialVideos } from "@/components/testimonial-videos"
import { SearchFilters } from "@/components/search-filters"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
            <h1 className="animate-fade-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Connect with the <span className="text-primary">Perfect Talent</span>
            </h1>
            <p className="mt-4 animate-fade-up text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-0 animation-delay-200 max-w-2xl">
              Ezak Private Employment Agency connects foreign employers with skilled local job seekers. Find the right
              talent or your dream job opportunity today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-300">
              <Link href="/register?type=employer">
                <Button size="lg" className="h-12 px-8 group">
                  I'm an Employer
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/register?type=jobseeker">
                <Button size="lg" variant="outline" className="h-12 px-8 group">
                  I'm a Job Seeker
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Match</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                Search through our database of qualified job seekers with the skills you need
              </p>
            </div>

            <SearchFilters />

            <div className="mt-12">
              <FeaturedJobSeekers />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                Hear from employers and job seekers who found their perfect match on our platform
              </p>
            </div>

            <TestimonialVideos />
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mt-4 text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-md">
                  Join thousands of employers and job seekers who have found their perfect match on our platform.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/register">
                    <Button size="lg" variant="secondary" className="h-12 px-8">
                      Create an Account
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 px-8 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="People working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
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

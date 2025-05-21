"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, CheckCircle2, Globe, MapPin, Phone, Mail, Clock, Users, Award, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"

// Sample team members data
const teamMembers = [
  {
    name: "Maria Santos",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years of experience in international recruitment, Maria founded Ezak to bridge the gap between talented job seekers and global employers.",
  },
  {
    name: "David Chen",
    role: "Operations Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David oversees all operational aspects of Ezak, ensuring smooth processes for both employers and job seekers.",
  },
  {
    name: "Sophia Kim",
    role: "Recruitment Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sophia leads our recruitment team, specializing in matching the right candidates with the perfect employment opportunities.",
  },
  {
    name: "James Rodriguez",
    role: "International Relations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "James maintains our relationships with employers across Asia, Europe, and the Americas, expanding our global network.",
  },
]

// Sample testimonials
const testimonials = [
  {
    quote:
      "Ezak helped us find the perfect team members for our expansion into Southeast Asia. Their candidates were well-vetted and matched our requirements perfectly.",
    name: "Robert Johnson",
    company: "Global Tech Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The support from Ezak was exceptional throughout the entire hiring process. They understood our needs and provided candidates who exceeded our expectations.",
    name: "Sarah Williams",
    company: "Healthcare International",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As a job seeker, Ezak opened doors to opportunities I never thought possible. Their team guided me through every step of the process.",
    name: "Michael Lee",
    company: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Sample statistics
const stats = [
  { value: "5,000+", label: "Successful Placements", icon: CheckCircle2 },
  { value: "500+", label: "Partner Companies", icon: Building2 },
  { value: "15+", label: "Years of Experience", icon: Clock },
  { value: "20+", label: "Countries Served", icon: Globe },
]

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Office team working together"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
          </div>

          <div className="container relative z-10">
            <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Connecting <span className="text-primary">Talent</span> with{" "}
                <span className="text-primary">Opportunity</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Ezak Private Employment Agency bridges the gap between skilled job seekers and international employers
                seeking quality talent.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/profiles">Browse Candidates</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} className="text-center" variants={fadeIn}>
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2008, Ezak Private Employment Agency began with a simple mission: to connect talented
                    individuals with meaningful employment opportunities across borders.
                  </p>
                  <p>
                    What started as a small operation in Manila has grown into a respected international employment
                    agency with connections to employers across Asia, Europe, and North America.
                  </p>
                  <p>
                    Our founder, Maria Santos, recognized the abundance of skilled workers in the Philippines and other
                    Southeast Asian countries who were seeking opportunities abroad. At the same time, she saw
                    international companies struggling to find qualified employees.
                  </p>
                  <p>
                    Today, Ezak has helped thousands of job seekers find rewarding careers abroad while assisting
                    hundreds of companies in building diverse and talented teams.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="/contact">Learn More About Our Services</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Ezak office and team"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="mt-4 text-muted-foreground">
                At Ezak, we're guided by a set of core principles that define how we operate and serve our clients and
                candidates.
              </p>
            </div>

            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="vision">Our Vision</TabsTrigger>
                <TabsTrigger value="values">Our Values</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-6 p-6 bg-card rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To bridge the gap between talented job seekers and quality employers across borders, creating
                  meaningful employment opportunities that improve lives and strengthen businesses.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Quality Placements</h4>
                      <p className="text-sm text-muted-foreground">
                        We focus on making the right match, not just any match.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Global Opportunities</h4>
                      <p className="text-sm text-muted-foreground">We connect talent with opportunities worldwide.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="vision" className="mt-6 p-6 bg-card rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading international employment agency in Southeast Asia, known for our integrity, quality
                  of service, and the success of our placements.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Industry Leadership</h4>
                      <p className="text-sm text-muted-foreground">
                        Setting the standard for ethical recruitment practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Global Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Creating positive change through meaningful employment.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="values" className="mt-6 p-6 bg-card rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Integrity</h4>
                      <p className="text-sm text-muted-foreground">
                        We operate with honesty and transparency in all our dealings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        We strive for the highest quality in our services and placements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Respect</h4>
                      <p className="text-sm text-muted-foreground">
                        We treat all candidates and clients with dignity and respect.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Empowerment</h4>
                      <p className="text-sm text-muted-foreground">
                        We believe in empowering individuals through meaningful employment.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground">
                We provide comprehensive recruitment and placement services for both job seekers and employers.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Recruitment & Placement</h3>
                    <p className="text-muted-foreground">
                      We match qualified candidates with employers seeking their specific skills and experience.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Comprehensive candidate screening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Skills and background verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Personalized matching process</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Employment Documentation</h3>
                    <p className="text-muted-foreground">
                      We assist with all necessary documentation for international employment.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Work permit assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Visa application support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Contract preparation and review</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Training & Preparation</h3>
                    <p className="text-muted-foreground">
                      We prepare candidates for success in their new roles and environments.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Cultural orientation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Job-specific training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Language proficiency enhancement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="mt-4 text-muted-foreground">
                Meet the dedicated professionals who make Ezak's mission possible.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-64 w-full">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-muted-foreground">
                Hear from employers and job seekers who have worked with Ezak.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 text-4xl text-primary">"</div>
                      <p className="italic text-muted-foreground mb-6">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Get in Touch</h2>
                <p className="text-primary-foreground/80 mb-8">
                  Whether you're an employer looking for talent or a job seeker looking for opportunities, we're here to
                  help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Our Office</h4>
                      <p className="text-primary-foreground/80">123 Recruitment Plaza, Makati City, Philippines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-primary-foreground/80">+63 2 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-primary-foreground/80">info@ezakagency.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Business Hours</h4>
                      <p className="text-primary-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background text-foreground rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[120px]"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
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

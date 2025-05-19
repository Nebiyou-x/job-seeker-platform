"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, ChevronRight, Upload, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { SiteHeader } from "@/components/site-header"

// Sample skills for the form
const skillOptions = [
  "Driving",
  "Babysitting",
  "Housekeeping",
  "Cleaning",
  "Cooking",
  "Laundry",
  "Elderly Care",
  "First Aid",
  "Arabic Language",
  "English Language",
  "Gardening",
  "Security Guard",
  "Handyman",
  "Plumbing",
  "Electrician",
  "Painting",
  "Construction Helper",
  "Farm Work",
  "Car Washing",
  "Pet Care",
];

// Sample locations
const countries = [
  "Philippines",
  "Thailand",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "South Korea",
  "Japan",
  "Hong Kong",
  "China",
  "Vietnam",
]

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") === "employer" ? "employer" : "jobseeker"

  const [userType, setUserType] = useState<"jobseeker" | "employer">(defaultType as "jobseeker" | "employer")
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const nextStep = () => {
    const newStep = step + 1
    setStep(newStep)
    setProgress(newStep * 25)
  }

  const prevStep = () => {
    const newStep = step - 1
    setStep(newStep)
    setProgress(newStep * 25)
  }

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <SiteHeader showAuthButtons={false} />

      <main className="flex-1 container max-w-4xl py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
          <p className="text-muted-foreground mt-2">Join our platform to connect with opportunities worldwide.</p>
        </div>

        <div className="mb-8">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Registration Progress</span>
              <span>{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <Tabs defaultValue={userType} onValueChange={(value) => setUserType(value as "jobseeker" | "employer")}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="jobseeker"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <User className="mr-2 h-4 w-4" />
              I'm a Job Seeker
            </TabsTrigger>
            <TabsTrigger
              value="employer"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              I'm an Employer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobseeker">
            <Card className="border-none shadow-md">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Let's start with your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Enter your city" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={() => window.history.back()}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Home
                    </Button>
                    <Button onClick={nextStep}>
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <CardTitle>Physical Information</CardTitle>
                    <CardDescription>Add your physical details to help employers find you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input id="height" type="number" placeholder="Enter your height in cm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input id="weight" type="number" placeholder="Enter your weight in kg" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Skills (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {skillOptions.map((skill) => (
                          <Button
                            key={skill}
                            type="button"
                            variant={selectedSkills.includes(skill) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleSkill(skill)}
                            className="justify-start"
                          >
                            {skill}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Summary</Label>
                      <Textarea
                        id="bio"
                        placeholder="Write a brief summary about your professional background, skills, and career goals..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button onClick={nextStep}>
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <CardTitle>Media Upload</CardTitle>
                    <CardDescription>Upload your profile picture and introduction video</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Profile Picture</Label>
                      <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6 border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Drag and drop your profile picture or click to browse
                          </p>
                          <Button variant="outline" size="sm">
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Introduction Video (Optional)</Label>
                      <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6 border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Upload a short video introducing yourself (max 2 minutes)
                          </p>
                          <Button variant="outline" size="sm">
                            Select Video
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button onClick={nextStep}>
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <CardTitle>Review & Submit</CardTitle>
                    <CardDescription>Please review your information before submitting</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <p className="text-sm text-muted-foreground">
                        By creating an account, you agree to our Terms of Service and Privacy Policy. Your profile
                        information will be visible to employers on our platform.
                      </p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms of service and privacy policy
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          You can review our{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="marketing" />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="marketing"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I want to receive emails about job opportunities and platform updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          We'll send you relevant job matches and important updates. You can unsubscribe at any time.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button>Create Account</Button>
                  </CardFooter>
                </motion.div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="employer">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Employer Registration</CardTitle>
                <CardDescription>Create an account to find and hire qualified candidates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <Input id="companyWebsite" placeholder="https://www.example.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person Name</Label>
                    <Input id="contactName" placeholder="Enter full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPosition">Position/Title</Label>
                    <Input id="contactPosition" placeholder="e.g. HR Manager" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Business Email</Label>
                  <Input id="contactEmail" type="email" placeholder="Enter your business email" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employerPassword">Password</Label>
                    <Input id="employerPassword" type="password" placeholder="Create a password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employerConfirmPassword">Confirm Password</Label>
                    <Input id="employerConfirmPassword" type="password" placeholder="Confirm your password" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyDescription">Company Description</Label>
                  <Textarea
                    id="companyDescription"
                    placeholder="Tell potential candidates about your company..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="employerTerms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="employerTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms of service and privacy policy
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      You can review our{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
                <Button>Create Employer Account</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
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

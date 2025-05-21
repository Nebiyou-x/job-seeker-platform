"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const generalFormSchema = z.object({
  siteName: z.string().min(2, {
    message: "Site name must be at least 2 characters.",
  }),
  siteDescription: z.string().min(10, {
    message: "Site description must be at least 10 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  maxJobPostings: z.string().min(1, {
    message: "Please enter a valid number.",
  }),
  maxProfilesPerPage: z.string().min(1, {
    message: "Please enter a valid number.",
  }),
})

const emailFormSchema = z.object({
  smtpServer: z.string().min(1, {
    message: "SMTP server is required.",
  }),
  smtpPort: z.string().min(1, {
    message: "SMTP port is required.",
  }),
  smtpUsername: z.string().min(1, {
    message: "SMTP username is required.",
  }),
  smtpPassword: z.string().min(1, {
    message: "SMTP password is required.",
  }),
  senderEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  senderName: z.string().min(1, {
    message: "Sender name is required.",
  }),
})

const featuresFormSchema = z.object({
  enableJobApplications: z.boolean(),
  enableMessaging: z.boolean(),
  enableVideoInterviews: z.boolean(),
  enableSkillsAssessment: z.boolean(),
  enableEmployerVerification: z.boolean(),
  enableJobSeekerVerification: z.boolean(),
  defaultJobExpiryDays: z.string().min(1, {
    message: "Please enter a valid number.",
  }),
})

export function SettingsForm() {
  // General settings form
  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      siteName: "Job Seeker Platform",
      siteDescription: "A platform connecting job seekers with employers",
      contactEmail: "contact@jobseekerplatform.com",
      maxJobPostings: "50",
      maxProfilesPerPage: "12",
    },
  })

  // Email settings form
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      smtpServer: "smtp.example.com",
      smtpPort: "587",
      smtpUsername: "username",
      smtpPassword: "password",
      senderEmail: "noreply@jobseekerplatform.com",
      senderName: "Job Seeker Platform",
    },
  })

  // Features settings form
  const featuresForm = useForm<z.infer<typeof featuresFormSchema>>({
    resolver: zodResolver(featuresFormSchema),
    defaultValues: {
      enableJobApplications: true,
      enableMessaging: true,
      enableVideoInterviews: false,
      enableSkillsAssessment: false,
      enableEmployerVerification: true,
      enableJobSeekerVerification: true,
      defaultJobExpiryDays: "30",
    },
  })

  // Form submission handlers
  function onGeneralSubmit(values: z.infer<typeof generalFormSchema>) {
    console.log(values)
    // In a real app, you would save these values to your database
  }

  function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    console.log(values)
    // In a real app, you would save these values to your database
  }

  function onFeaturesSubmit(values: z.infer<typeof featuresFormSchema>) {
    console.log(values)
    // In a real app, you would save these values to your database
  }

  return (
    <Tabs defaultValue="general" className="space-y-4">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Configure the general settings for your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...generalForm}>
              <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)} className="space-y-4">
                <FormField
                  control={generalForm.control}
                  name="siteName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>The name of your job platform</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={generalForm.control}
                  name="siteDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormDescription>A brief description of your platform</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={generalForm.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormDescription>The email address users can contact for support</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={generalForm.control}
                    name="maxJobPostings"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Max Job Postings</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" />
                        </FormControl>
                        <FormDescription>Maximum job postings per employer</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={generalForm.control}
                    name="maxProfilesPerPage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profiles Per Page</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" />
                        </FormControl>
                        <FormDescription>Number of profiles to display per page</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="mt-4">
                  Save General Settings
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="email">
        <Card>
          <CardHeader>
            <CardTitle>Email Settings</CardTitle>
            <CardDescription>Configure email settings for notifications and communications</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...emailForm}>
              <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={emailForm.control}
                    name="smtpServer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Server</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={emailForm.control}
                    name="smtpPort"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Port</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={emailForm.control}
                    name="smtpUsername"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Username</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={emailForm.control}
                    name="smtpPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={emailForm.control}
                    name="senderEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sender Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={emailForm.control}
                    name="senderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sender Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="mt-4">
                  Save Email Settings
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="features">
        <Card>
          <CardHeader>
            <CardTitle>Features Settings</CardTitle>
            <CardDescription>Enable or disable platform features</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...featuresForm}>
              <form onSubmit={featuresForm.handleSubmit(onFeaturesSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={featuresForm.control}
                    name="enableJobApplications"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Job Applications</FormLabel>
                          <FormDescription>Allow job seekers to apply for jobs</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={featuresForm.control}
                    name="enableMessaging"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Messaging</FormLabel>
                          <FormDescription>Enable messaging between users</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={featuresForm.control}
                    name="enableVideoInterviews"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Video Interviews</FormLabel>
                          <FormDescription>Enable video interview functionality</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={featuresForm.control}
                    name="enableSkillsAssessment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Skills Assessment</FormLabel>
                          <FormDescription>Enable skills assessment tests</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={featuresForm.control}
                    name="enableEmployerVerification"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Employer Verification</FormLabel>
                          <FormDescription>Require employers to be verified</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={featuresForm.control}
                    name="enableJobSeekerVerification"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Job Seeker Verification</FormLabel>
                          <FormDescription>Require job seekers to be verified</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={featuresForm.control}
                  name="defaultJobExpiryDays"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Job Expiry (Days)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormDescription>Number of days before job postings expire</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-4">
                  Save Features Settings
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

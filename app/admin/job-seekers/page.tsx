import { JobSeekersTable } from "@/components/admin/job-seekers-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JobSeekersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Seekers</h1>
          <p className="text-muted-foreground">Manage job seeker profiles and applications</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Job Seeker
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Profiles</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <JobSeekersTable />
        </TabsContent>
        <TabsContent value="featured" className="mt-4">
          <JobSeekersTable filter="featured" />
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <JobSeekersTable filter="pending" />
        </TabsContent>
        <TabsContent value="inactive" className="mt-4">
          <JobSeekersTable filter="inactive" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

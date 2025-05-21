import { TestimonialsTable } from "@/components/admin/testimonials-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
          <p className="text-muted-foreground">Manage user testimonials and reviews</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Testimonials</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <TestimonialsTable />
        </TabsContent>
        <TabsContent value="approved" className="mt-4">
          <TestimonialsTable filter="approved" />
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <TestimonialsTable filter="pending" />
        </TabsContent>
        <TabsContent value="rejected" className="mt-4">
          <TestimonialsTable filter="rejected" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

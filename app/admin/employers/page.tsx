import { EmployersTable } from "@/components/admin/employers-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmployersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employers</h1>
          <p className="text-muted-foreground">Manage employer accounts and job postings</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Employer
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Employers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <EmployersTable />
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <EmployersTable filter="active" />
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <EmployersTable filter="pending" />
        </TabsContent>
        <TabsContent value="inactive" className="mt-4">
          <EmployersTable filter="inactive" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

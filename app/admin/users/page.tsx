import { UsersTable } from "@/components/admin/users-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage user accounts and permissions</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="admins">Admins</TabsTrigger>
          <TabsTrigger value="job-seekers">Job Seekers</TabsTrigger>
          <TabsTrigger value="employers">Employers</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <UsersTable />
        </TabsContent>
        <TabsContent value="admins" className="mt-4">
          <UsersTable filter="admin" />
        </TabsContent>
        <TabsContent value="job-seekers" className="mt-4">
          <UsersTable filter="job-seeker" />
        </TabsContent>
        <TabsContent value="employers" className="mt-4">
          <UsersTable filter="employer" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

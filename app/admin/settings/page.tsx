import { Separator } from "@/components/ui/separator"
import { SettingsForm } from "@/components/admin/settings-form"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your platform settings and configurations</p>
      </div>
      <Separator />
      <SettingsForm />
    </div>
  )
}

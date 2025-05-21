import { Skeleton } from "@/components/ui/skeleton"
import { SiteHeader } from "@/components/site-header"

export default function Loading() {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <SiteHeader />

      <main className="flex-1 container py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-8">
          <div>
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-5 w-96" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
          </div>
        </div>

        <Skeleton className="h-64 w-full mb-8" />

        <div className="mb-4 flex items-center justify-between">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-8 w-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-full">
                <Skeleton className="h-64 w-full mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-8">
          <Skeleton className="h-10 w-96" />
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Skeleton className="h-6 w-64" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </footer>
    </div>
  )
}

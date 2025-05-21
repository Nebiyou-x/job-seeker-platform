import { formatDistanceToNow } from "date-fns"


interface TestimonialCardProps {
  author: {
    name: string
    image: string
    role: string
    type: "employer" | "jobseeker"
  }
  rating: number
  content: string
  date: Date
}

export function TestimonialCard({ author, rating, content, date, ...props }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <img src={author.image || "/placeholder.svg"} alt={author.name} className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm">{author.name}</h4>
            <p className="text-xs text-muted-foreground">{author.role}</p>
            <div className="flex items-center mt-1">
              
              <span className="ml-2 text-xs text-muted-foreground">
                {formatDistanceToNow(date, { addSuffix: true })}
              </span>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {author.type === "employer" ? "Employer" : "Job Seeker"}
            </span>
          </div>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}

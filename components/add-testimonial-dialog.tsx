"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquarePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"


interface AddTestimonialDialogProps {
  onSubmit: (testimonial: {
    type: "employer" | "jobseeker"
    rating: number
    content: string
  }) => void
  profileName: string
}

export function AddTestimonialDialog({ onSubmit, profileName }: AddTestimonialDialogProps) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<"employer" | "jobseeker">("employer")
  const [rating, setRating] = useState(5)
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      type,
      rating,
      content,
    })
    setOpen(false)
    resetForm()
  }

  const resetForm = () => {
    setType("employer")
    setRating(5)
    setContent("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Add Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a Review for {profileName}</DialogTitle>
            <DialogDescription>
              Share your experience working with this candidate. Your review will help others make informed decisions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">I am a:</h4>
              <RadioGroup
                defaultValue="employer"
                value={type}
                onValueChange={(value) => setType(value as "employer" | "jobseeker")}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="employer" id="employer" />
                  <Label htmlFor="employer">Employer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jobseeker" id="jobseeker" />
                  <Label htmlFor="jobseeker">Job Seeker</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Rating:</h4>
             
            </div>
            <div className="space-y-2">
              <Label htmlFor="review">Your Review</Label>
              <Textarea
                id="review"
                placeholder="Share your experience working with this candidate..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px]"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!content.trim()}>
              Submit Review
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

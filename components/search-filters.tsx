"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Filter, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

// Sample skills for the filter
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
const locations = [
  "Manila, Philippines",
  "Cebu, Philippines",
  "Bangkok, Thailand",
  "Jakarta, Indonesia",
  "Kuala Lumpur, Malaysia",
  "Singapore",
  "Seoul, South Korea",
  "Tokyo, Japan",
  "Hong Kong",
  "Shanghai, China",
]

export function SearchFilters() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [heightRange, setHeightRange] = useState([150, 190]) // cm
  const [weightRange, setWeightRange] = useState([45, 100]) // kg

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  const clearFilters = () => {
    setSelectedSkills([])
    setHeightRange([150, 190])
    setWeightRange([45, 100])
  }

  return (
    <div className="rounded-lg border shadow-sm">
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by name, skills, or location..." className="pl-9" />
          </div>
          <div className="w-full md:w-64">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="md:w-auto">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen} className="mt-4">
          <div className="flex items-center justify-between">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${isAdvancedOpen ? "rotate-180" : ""}`}
                />
              </Button>
            </CollapsibleTrigger>
            {(selectedSkills.length > 0 ||
              heightRange[0] !== 150 ||
              heightRange[1] !== 190 ||
              weightRange[0] !== 45 ||
              weightRange[1] !== 100) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="mr-2 h-3 w-3" />
                Clear filters
              </Button>
            )}
          </div>

          <AnimatePresence>
            {selectedSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="group">
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {skill}</span>
                      </button>
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <CollapsibleContent className="mt-4 space-y-6">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="space-y-4">
                <div>
                  <Label>Skills</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {skillOptions.slice(0, 8).map((skill) => (
                      <Button
                        key={skill}
                        variant={selectedSkills.includes(skill) ? "default" : "outline"}
                        size="sm"
                        onClick={() => (selectedSkills.includes(skill) ? removeSkill(skill) : addSkill(skill))}
                        className="justify-start h-8"
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                  <Select onValueChange={addSkill}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Add more skills..." />
                    </SelectTrigger>
                    <SelectContent>
                      {skillOptions
                        .filter((skill) => !selectedSkills.includes(skill))
                        .map((skill) => (
                          <SelectItem key={skill} value={skill}>
                            {skill}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Height Range</Label>
                      <span className="text-sm text-muted-foreground">
                        {heightRange[0]} - {heightRange[1]} cm
                      </span>
                    </div>
                    <Slider
                      defaultValue={heightRange}
                      min={140}
                      max={210}
                      step={1}
                      onValueChange={setHeightRange}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Weight Range</Label>
                      <span className="text-sm text-muted-foreground">
                        {weightRange[0]} - {weightRange[1]} kg
                      </span>
                    </div>
                    <Slider
                      defaultValue={weightRange}
                      min={40}
                      max={120}
                      step={1}
                      onValueChange={setWeightRange}
                      className="py-4"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

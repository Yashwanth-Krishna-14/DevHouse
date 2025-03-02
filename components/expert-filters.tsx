"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function ExpertFilters() {
  const [priceRange, setPriceRange] = useState([50, 300])

  const categories = [
    { id: "tech", label: "Tech & AI" },
    { id: "business", label: "Business" },
    { id: "career", label: "Career" },
  ]

  const specialties = [
    { id: "ml", label: "Machine Learning" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Development" },
    { id: "data", label: "Data Science" },
    { id: "cloud", label: "Cloud Computing" },
    { id: "startup", label: "Startup" },
    { id: "marketing", label: "Marketing" },
    { id: "finance", label: "Finance" },
    { id: "product", label: "Product Management" },
    { id: "ux", label: "UX/UI Design" },
    { id: "interview", label: "Interview Prep" },
    { id: "resume", label: "Resume Building" },
  ]

  const availability = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "this-week", label: "This Week" },
    { id: "next-week", label: "Next Week" },
    { id: "weekends", label: "Weekends Only" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["price", "specialties", "availability"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider defaultValue={[50, 300]} max={500} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="specialties">
          <AccordionTrigger>Specialties</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {specialties.map((specialty) => (
                <div key={specialty.id} className="flex items-center space-x-2">
                  <Checkbox id={`specialty-${specialty.id}`} />
                  <Label htmlFor={`specialty-${specialty.id}`}>{specialty.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {availability.map((time) => (
                <div key={time.id} className="flex items-center space-x-2">
                  <Checkbox id={`availability-${time.id}`} />
                  <Label htmlFor={`availability-${time.id}`}>{time.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
    </div>
  )
}


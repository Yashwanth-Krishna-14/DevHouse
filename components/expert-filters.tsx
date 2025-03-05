"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import "./expert-filters.css"

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    category: "Tech & AI",
    rating: 4.9,
    reviews: 124,
    hourlyRate: 150,
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Machine Learning", "NLP", "AI Ethics"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Startup Advisor & VC",
    category: "Business",
    rating: 4.8,
    reviews: 98,
    hourlyRate: 200,
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Fundraising", "Growth Strategy", "Product-Market Fit"],
  },
  {
    id: 3,
    name: "Jessica Taylor",
    title: "Senior Career Coach",
    category: "Career",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 120,
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Interview Prep", "Resume Building", "Career Transitions"],
  },
  {
    id: 4,
    name: "David Park",
    title: "Full-Stack Developer",
    category: "Tech & AI",
    rating: 4.7,
    reviews: 87,
    hourlyRate: 130,
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["React", "Node.js", "System Architecture"],
  },
  {
    id: 5,
    name: "Emma Wilson",
    title: "Marketing Strategist",
    category: "Business",
    rating: 4.8,
    reviews: 112,
    hourlyRate: 140,
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
  },
  {
    id: 6,
    name: "Robert Johnson",
    title: "Leadership Coach",
    category: "Career",
    rating: 4.9,
    reviews: 143,
    hourlyRate: 160,
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Executive Coaching", "Team Building", "Public Speaking"],
  },
]

export default function ExpertFilters({ onApplyFilters }) {
  const [priceRange, setPriceRange] = useState([50, 300])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

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

  const ratings = [4, 3, 2, 1]

  // Function to toggle selected items
  const handleCheckboxChange = (id: string, selectedList: string[], setSelectedList: Function) => {
    setSelectedList((prev: string[]) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Function to toggle ratings
  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    )
  }

  // Function to apply filters
  const applyFilters = () => {
    const filters = {
      priceRange,
      categories: selectedCategories,
      specialties: selectedSpecialties,
      availability: selectedAvailability,
      ratings: selectedRatings,
    }
  
    const categoryMap = {
      tech: "Tech & AI",
      business: "Business",
      career: "Career",
    }
  
    const specialtyMap = {
      ml: "Machine Learning",
      web: "Web Development",
      mobile: "Mobile Development",
      data: "Data Science",
      cloud: "Cloud Computing",
      startup: "Startup",
      marketing: "Marketing",
      finance: "Finance",
      product: "Product Management",
      ux: "UX/UI Design",
      interview: "Interview Prep",
      resume: "Resume Building",
    }
  
    const availabilityMap = {
      today: "Available Today",
      tomorrow: "Available Tomorrow",
      "this-week": "Available This Week",
      "next-week": "Available Next Week",
      weekends: "Weekends Only",
    }
  
    const filtered = experts.filter((expert) => {
      const matchesPrice = expert.hourlyRate >= filters.priceRange[0] && expert.hourlyRate <= filters.priceRange[1]
      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.some((id) => categoryMap[id] === expert.category)
      const matchesSpecialty =
        filters.specialties.length === 0 ||
        filters.specialties.some((id) => expert.specialties.includes(specialtyMap[id]))
      const matchesAvailability =
        filters.availability.length === 0 ||
        filters.availability.some((id) => expert.availability?.includes(availabilityMap[id])) // Only if availability exists
      const matchesRating =
        filters.ratings.length === 0 || filters.ratings.includes(Math.floor(expert.rating))
  
      return matchesPrice && matchesCategory && matchesSpecialty && matchesAvailability && matchesRating
    })
  
    console.log("Filtered Experts:", filtered) // Debugging
    onApplyFilters(filtered)
  }
    

  // Function to reset all filters
  const resetFilters = () => {
    setPriceRange([50, 300])
    setSelectedCategories([])
    setSelectedSpecialties([])
    setSelectedAvailability([])
    setSelectedRatings([])
    onApplyFilters(experts) // Reset to show all experts
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCheckboxChange(category.id, selectedCategories, setSelectedCategories)}
              />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion for Filters */}
      <Accordion type="multiple" defaultValue={["price", "specialties", "availability"]}>
        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider max={500} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Specialties */}
        <AccordionItem value="specialties">
          <AccordionTrigger>Specialties</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {specialties.map((specialty) => (
                <div key={specialty.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`specialty-${specialty.id}`}
                    checked={selectedSpecialties.includes(specialty.id)}
                    onCheckedChange={() => handleCheckboxChange(specialty.id, selectedSpecialties, setSelectedSpecialties)}
                  />
                  <Label htmlFor={`specialty-${specialty.id}`}>{specialty.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability */}
        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {availability.map((time) => (
                <div key={time.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`availability-${time.id}`}
                    checked={selectedAvailability.includes(time.id)}
                    onCheckedChange={() => handleCheckboxChange(time.id, selectedAvailability, setSelectedAvailability)}
                  />
                  <Label htmlFor={`availability-${time.id}`}>{time.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Ratings */}
        <AccordionItem value="ratings">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={selectedRatings.includes(rating)}
                    onCheckedChange={() => handleRatingChange(rating)}
                  />
                  <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Apply & Reset Buttons */}
      <Button className="w-full" onClick={applyFilters}>Apply Filters</Button>
      <Button variant="outline" className="w-full" onClick={resetFilters}>Reset</Button>
    </div>
  )
}
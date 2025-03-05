"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon, Search, Filter, Sliders } from "lucide-react"
import Link from "next/link"
import ExpertFilters from "@/components/expert-filters"

// Sample expert data
export const experts = [
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

export default function ExpertsPage() {
  const [filteredExperts, setFilteredExperts] = useState(experts)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [sortOption, setSortOption] = useState("")

  const handleApplyFilters = (filtered) => {
    setFilteredExperts(filtered)
  }

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)
    const filtered = experts.filter((expert) =>
      expert.name.toLowerCase().includes(query) ||
      expert.title.toLowerCase().includes(query) ||
      expert.specialties.some((specialty) => specialty.toLowerCase().includes(query))
    )
    setFilteredExperts(filtered)
  }

  const handleSort = (option) => {
    setSortOption(option)
    const sorted = [...filteredExperts].sort((a, b) => {
      if (option === "rating") {
        return b.rating - a.rating
      } else if (option === "reviews") {
        return b.reviews - a.reviews
      } else if (option === "hourlyRate") {
        return b.hourlyRate - a.hourlyRate
      }
      return 0
    })
    setFilteredExperts(sorted)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Find an Expert</h1>
          <p className="text-muted-foreground">
            Browse our curated list of industry experts ready to help you achieve your goals
          </p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, expertise, or keywords..."
              className="pl-8"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => handleSort("rating")}>
            <Sliders className="h-4 w-4" />
            <span>Sort by Rating</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => handleSort("reviews")}>
            <Sliders className="h-4 w-4" />
            <span>Sort by Reviews</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => handleSort("hourlyRate")}>
            <Sliders className="h-4 w-4" />
            <span>Sort by Hourly Rate</span>
          </Button>
        </div>

        {showFilters && (
          <div className="lg:block">
            <ExpertFilters onApplyFilters={handleApplyFilters} />
          </div>
        )}

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredExperts.map((expert) => (
              <Card key={expert.id} className="expert-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={expert.image} alt={expert.name} />
                        <AvatarFallback>
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{expert.name}</h3>
                        <p className="text-sm text-muted-foreground">{expert.title}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{expert.category}</Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{expert.rating}</span>
                      <span className="text-muted-foreground text-sm">({expert.reviews} reviews)</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {expert.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-sm">
                    <span className="font-semibold">${expert.hourlyRate}</span>
                    <span className="text-muted-foreground"> / hour</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button className="w-full" asChild>
                    <Link href={`/experts/${expert.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
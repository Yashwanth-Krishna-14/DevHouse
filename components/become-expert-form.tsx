"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function BecomeExpertForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    linkedin: "",
    website: "",
    bio: "",
    hourlyRate: "",
    availability: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Application Submitted",
      description: "We've received your application and will be in touch soon.",
    })

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      expertise: "",
      experience: "",
      linkedin: "",
      website: "",
      bio: "",
      hourlyRate: "",
      availability: "",
      agreeTerms: false,
    })
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expertise">Primary Area of Expertise *</Label>
            <Select
              onValueChange={(value) => handleSelectChange("expertise", value)}
              value={formData.expertise}
              required
            >
              <SelectTrigger id="expertise">
                <SelectValue placeholder="Select your primary expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Tech & AI</SelectItem>
                <SelectItem value="business">Business & Startups</SelectItem>
                <SelectItem value="career">Career Coaching</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="product">Product Management</SelectItem>
                <SelectItem value="design">UX/UI Design</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience *</Label>
            <Select
              onValueChange={(value) => handleSelectChange("experience", value)}
              value={formData.experience}
              required
            >
              <SelectTrigger id="experience">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10-15">10-15 years</SelectItem>
                <SelectItem value="15+">15+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile URL *</Label>
              <Input
                id="linkedin"
                name="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Personal Website/Portfolio</Label>
              <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Professional Bio *</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about your professional background, achievements, and why you want to join our platform."
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Expected Hourly Rate (USD) *</Label>
              <Input
                id="hourlyRate"
                name="hourlyRate"
                type="number"
                min="0"
                value={formData.hourlyRate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="availability">Weekly Availability (hours) *</Label>
              <Select
                onValueChange={(value) => handleSelectChange("availability", value)}
                value={formData.availability}
                required
              >
                <SelectTrigger id="availability">
                  <SelectValue placeholder="Select your availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 hours</SelectItem>
                  <SelectItem value="5-10">5-10 hours</SelectItem>
                  <SelectItem value="10-20">10-20 hours</SelectItem>
                  <SelectItem value="20+">20+ hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeTerms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
              required
            />
            <Label htmlFor="agreeTerms" className="text-sm">
              I agree to the Terms of Service and Privacy Policy. I understand that my application will be reviewed and
              I may be contacted for additional information or an interview.
            </Label>
          </div>

          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


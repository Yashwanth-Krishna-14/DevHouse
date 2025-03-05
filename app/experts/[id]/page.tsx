import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Star, MessageSquare, Video, CheckCircle, CalendarIcon } from "lucide-react"
import ExpertAvailability from "@/components/expert-availability"
import ExpertReviews from "@/components/expert-reviews"

// Sample expert data
 const experts = {
  1: {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    category: "Tech & AI",
    rating: 4.9,
    reviews: 124,
    hourlyRate: 150,
    image: "/placeholder.svg?height=200&width=200",
    specialties: ["Machine Learning", "NLP", "AI Ethics", "Computer Vision", "Data Science"],
    bio: "Dr. Sarah Chen is an AI Research Scientist with over 10 years of experience in machine learning and natural language processing. She has worked at leading tech companies and research institutions, contributing to cutting-edge AI projects and publishing numerous papers in top-tier conferences. Sarah is passionate about mentoring the next generation of AI practitioners and helping companies implement ethical AI solutions.",
    experience: [
      {
        company: "TechGiant AI",
        role: "Senior Research Scientist",
        period: "2018 - Present",
      },
      {
        company: "AI Research Institute",
        role: "Research Fellow",
        period: "2015 - 2018",
      },
      {
        company: "University of Technology",
        role: "Assistant Professor",
        period: "2012 - 2015",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "Ph.D. in Computer Science, AI Specialization",
        year: "2012",
      },
      {
        institution: "MIT",
        degree: "M.S. in Computer Science",
        year: "2008",
      },
    ],
    sessionTypes: [
      {
        type: "1:1 Consultation",
        duration: "60 min",
        price: 150,
        description: "Personalized guidance on AI implementation, career advice, or specific technical challenges.",
      },
      {
        type: "Code Review",
        duration: "45 min",
        price: 120,
        description: "Detailed review of your ML/AI code with optimization suggestions and best practices.",
      },
      {
        type: "Project Planning",
        duration: "90 min",
        price: 220,
        description:
          "Strategic planning for AI projects, including architecture, data requirements, and implementation roadmap.",
      },
    ],
  },
  2: {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    category: "Tech & AI",
    rating: 4.9,
    reviews: 124,
    hourlyRate: 150,
    image: "/placeholder.svg?height=200&width=200",
    specialties: ["Machine Learning", "NLP", "AI Ethics", "Computer Vision", "Data Science"],
    bio: "Dr. Sarah Chen is an AI Research Scientist with over 10 years of experience in machine learning and natural language processing. She has worked at leading tech companies and research institutions, contributing to cutting-edge AI projects and publishing numerous papers in top-tier conferences. Sarah is passionate about mentoring the next generation of AI practitioners and helping companies implement ethical AI solutions.",
    experience: [
      {
        company: "TechGiant AI",
        role: "Senior Research Scientist",
        period: "2018 - Present",
      },
      {
        company: "AI Research Institute",
        role: "Research Fellow",
        period: "2015 - 2018",
      },
      {
        company: "University of Technology",
        role: "Assistant Professor",
        period: "2012 - 2015",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "Ph.D. in Computer Science, AI Specialization",
        year: "2012",
      },
      {
        institution: "MIT",
        degree: "M.S. in Computer Science",
        year: "2008",
      },
    ],
    sessionTypes: [
      {
        type: "1:1 Consultation",
        duration: "60 min",
        price: 150,
        description: "Personalized guidance on AI implementation, career advice, or specific technical challenges.",
      },
      {
        type: "Code Review",
        duration: "45 min",
        price: 120,
        description: "Detailed review of your ML/AI code with optimization suggestions and best practices.",
      },
      {
        type: "Project Planning",
        duration: "90 min",
        price: 220,
        description:
          "Strategic planning for AI projects, including architecture, data requirements, and implementation roadmap.",
      },
    ],
  }
}

export default function ExpertProfilePage({ params }: { params: { id: string } }) {
  const expert = experts[params.id as unknown as keyof typeof experts]

  if (!expert) {
    return <div className="container py-10">Expert not found</div>
  }

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage src={expert.image} alt={expert.name} />
              <AvatarFallback>
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{expert.name}</h1>
                  <p className="text-muted-foreground">{expert.title}</p>
                </div>
                <Badge variant="outline" className="w-fit">
                  {expert.category}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 font-medium">{expert.rating}</span>
                </div>
                <span className="text-muted-foreground">({expert.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {expert.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4 mt-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Bio</h2>
                <p className="text-muted-foreground">{expert.bio}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <div className="space-y-3">
                  {expert.education.map((edu, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="text-muted-foreground">
                        {edu.degree}, {edu.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="space-y-4 mt-6">
              <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
              <div className="space-y-4">
                {expert.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sessions" className="space-y-4 mt-6">
              <h2 className="text-xl font-semibold mb-2">Session Types</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {expert.sessionTypes.map((session, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{session.type}</h3>
                          <div className="flex items-center text-muted-foreground mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{session.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-lg">${session.price}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{session.description}</p>
                      <Button className="w-full mt-4">Book Session</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <ExpertReviews expertId={expert.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Book a Session</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Hourly Rate</span>
                  <span className="font-bold">${expert.hourlyRate}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Video className="h-4 w-4" />
                    <span>Book Video Call</span>
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Message</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Availability</h3>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>March 2024</span>
                </Button>
              </div>
              <ExpertAvailability />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">Why Choose {expert.name.split(" ")[0]}</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Verified industry expert with proven experience</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Personalized guidance tailored to your needs</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Actionable insights and practical advice</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Flexible scheduling to fit your availability</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, Award, TrendingUp, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="mb-2">About Us</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Connecting Expertise with Opportunity
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              ExpertConnect was founded with a simple mission: to democratize access to world-class expertise across
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                ExpertConnect began in 2020 when our founders, all former tech executives, recognized a critical gap in
                the market: while expertise was abundant, access to it was limited by geography, networks, and
                prohibitive consulting fees.
              </p>
              <p className="text-muted-foreground">
                We set out to build a platform that would connect individuals and businesses with top-tier experts
                across industries, making personalized guidance accessible to anyone with an internet connection.
              </p>
              <p className="text-muted-foreground">
                Today, ExpertConnect hosts thousands of verified experts from over 40 countries, facilitating knowledge
                transfer that helps professionals advance their careers, entrepreneurs grow their businesses, and
                organizations solve complex challenges.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ExpertConnect team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">4,000+</h3>
              <p className="text-primary-foreground/80">Consultations Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">1,200+</h3>
              <p className="text-primary-foreground/80">Verified Experts</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">40+</h3>
              <p className="text-primary-foreground/80">Countries Represented</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="text-primary-foreground/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain rigorous standards for our experts, ensuring clients receive world-class guidance and
                  insights.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe expertise should be available to everyone, regardless of location, background, or
                  resources.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Impact</h3>
                <p className="text-muted-foreground">
                  We measure our success by the tangible outcomes our platform enables for clients and experts alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Leadership Team</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Meet the people driving our mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Former VP of Product at TechGiant, MBA from Harvard Business School.",
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-Founder",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Ex-Engineering Lead at CloudScale, Computer Science PhD from MIT.",
              },
              {
                name: "Aisha Patel",
                role: "COO",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Previously Operations Director at ConsultCo, MBA from Wharton.",
              },
              {
                name: "David Rodriguez",
                role: "Chief Community Officer",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Former Head of Community at ExpertNetwork, 10+ years in talent management.",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Featured In</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              ExpertConnect has been recognized by leading publications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/placeholder-logo.svg?text=PRESS${i}`}
                  alt={`Press logo ${i}`}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Community</h2>
              <p className="text-primary-foreground/80 md:text-xl/relaxed">
                Whether you're seeking expertise or looking to share yours, ExpertConnect is where knowledge meets
                opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/experts">Find an Expert</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/become-expert">Become an Expert</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-primary-foreground/10">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Join a Global Network</h3>
                  <p className="text-primary-foreground/80">Connect with professionals from around the world</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-primary-foreground/10">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Flexible Scheduling</h3>
                  <p className="text-primary-foreground/80">Book sessions that fit your calendar</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-primary-foreground/10">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Verified Expertise</h3>
                  <p className="text-primary-foreground/80">All experts undergo a thorough vetting process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


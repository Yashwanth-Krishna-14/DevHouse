import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, DollarSign, Calendar, Users } from "lucide-react"
import Image from "next/image"
import BecomeExpertForm from "@/components/become-expert-form"

export default function BecomeExpertPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Share Your Expertise, Grow Your Impact
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our community of industry leaders providing valuable guidance to professionals worldwide.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Apply Now</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Expert providing consultation"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Why Become an Expert</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Join our platform and unlock new opportunities to share your knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Monetize Your Knowledge</h3>
                <p className="text-muted-foreground">
                  Set your own rates and earn income by sharing your expertise through one-on-one consultations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Flexible Schedule</h3>
                <p className="text-muted-foreground">
                  Choose when you're available for sessions and maintain complete control over your calendar.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Expand Your Network</h3>
                <p className="text-muted-foreground">
                  Connect with professionals from diverse industries and build your personal brand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our simple process to become an expert on ExpertConnect
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Complete our application form with your professional background and areas of expertise.",
              },
              {
                step: "2",
                title: "Verification",
                description: "Our team reviews your application and verifies your credentials and experience.",
              },
              {
                step: "3",
                title: "Profile Setup",
                description: "Create your expert profile, set your rates, and define your availability.",
              },
              {
                step: "4",
                title: "Start Consulting",
                description: "Begin accepting booking requests and providing valuable consultations.",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">What Our Experts Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Hear from professionals who are already part of our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Wilson",
                role: "AI Research Scientist",
                image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "Joining ExpertConnect has allowed me to share my knowledge with professionals who truly value expertise. The platform makes it easy to manage bookings and focus on delivering quality consultations.",
              },
              {
                name: "Elena Rodriguez",
                role: "Marketing Strategist",
                image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "As a consultant, ExpertConnect has opened doors to clients I wouldn't have reached otherwise. The flexible scheduling means I can balance my consulting work with my full-time job.",
              },
              {
                name: "Marcus Johnson",
                role: "Career Coach",
                image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "The quality of clients on ExpertConnect is exceptional. They come prepared with specific questions, making our sessions productive and impactful. It's been rewarding to see their progress.",
              },
            ].map((expert, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={expert.image} alt={expert.name} />
                      <AvatarFallback>
                        {expert.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{expert.name}</h3>
                      <p className="text-sm text-muted-foreground">{expert.role}</p>
                    </div>
                    <p className="text-muted-foreground italic">"{expert.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Expert Requirements</h2>
              <p className="text-muted-foreground">
                We maintain high standards to ensure our clients receive exceptional guidance. To qualify as an expert
                on our platform, you should have:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Minimum 5+ years of professional experience in your field</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Demonstrated expertise through work history, education, or achievements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Strong communication skills and ability to explain complex concepts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Professional references or testimonials from clients/colleagues</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Commitment to providing high-quality consultations</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Expert providing consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Common questions about becoming an expert on our platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How much can I earn as an expert?",
                  answer:
                    "Earnings vary based on your expertise, rates, and availability. Experts on our platform set their own hourly rates, typically ranging from $50 to $500 per hour depending on their field and experience level. You receive 80% of the booking fee, with 20% going to platform fees.",
                },
                {
                  question: "How long does the application process take?",
                  answer:
                    "The verification process typically takes 1-2 weeks. Our team reviews your professional background, verifies credentials, and may conduct a brief interview to ensure you meet our quality standards.",
                },
                {
                  question: "Can I offer different types of sessions?",
                  answer:
                    "Yes! You can create multiple session types with different durations and focuses. For example, you might offer 30-minute introductory calls, 60-minute deep dives, and 90-minute strategy sessions.",
                },
                {
                  question: "How do I get paid?",
                  answer:
                    "Payments are processed through our secure platform. After completing a session, funds are held for 24 hours to ensure client satisfaction, then released to your account. You can withdraw funds to your bank account or PayPal at any time.",
                },
                {
                  question: "What if I need to cancel a session?",
                  answer:
                    "We understand that emergencies happen. You can reschedule or cancel sessions up to 24 hours before the scheduled time without penalty. For last-minute cancellations, we ask that you help reschedule the client at their convenience.",
                },
                {
                  question: "Can I be an expert while having a full-time job?",
                  answer:
                    "Many of our experts balance consulting with full-time positions. You have complete control over your availability and can adjust it as needed to fit your schedule.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Apply to Become an Expert</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Fill out the form below to start your application process
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <BecomeExpertForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Share Your Expertise?</h2>
            <p className="max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
              Join our community of experts today and start making an impact while growing your professional network.
            </p>
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


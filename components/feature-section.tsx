import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Search, CreditCard, Users, MessageSquare, BarChart3 } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "AI-Powered Expert Matching",
      description:
        "Our intelligent algorithm connects you with the perfect expert based on your specific needs and goals.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Seamless Scheduling",
      description:
        "Book sessions that fit your schedule with our integrated calendar system and automatic time zone detection.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Secure Payments",
      description: "Pay for consultations with confidence using our secure payment gateway powered by Stripe.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "AI Chat Assistance",
      description: "Get instant answers to common questions with our AI assistant before and after your consultation.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Verified Experts",
      description: "All experts undergo a thorough vetting process to ensure you receive high-quality guidance.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Session Summaries",
      description: "Receive AI-generated summaries of your consultations with actionable insights and next steps.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes it easy to find, book, and learn from industry experts
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


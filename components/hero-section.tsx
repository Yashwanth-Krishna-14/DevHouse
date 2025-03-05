import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connect with Industry Experts for Personalized Consultations
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Book 1-on-1 sessions with top professionals in Tech & AI, Business, and Career Coaching to accelerate
                your growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/experts">Find a Mentor</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/become-expert">Become a Mentor</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block rounded-full overflow-hidden border-2 border-background h-8 w-8">
                    <Image src={`/placeholder.svg?height=32&width=32`} alt={`User ${i}`} width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium">4,000+</span> consultations completed
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Expert consultation"
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
  )
}


import HeroSection from "@/components/hero-section"
import ExpertHighlights from "@/components/expert-highlights"
import Testimonials from "@/components/testimonials"
import FeatureSection from "@/components/feature-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ExpertHighlights />
      <FeatureSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}


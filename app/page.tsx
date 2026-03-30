import { HeroSection } from "@/components/hero-section"
import { ProductHighlight } from "@/components/product-highlight"
import { ServicesHighlight } from "@/components/services-highlight"
import { ReviewsSection } from "@/components/reviews-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="h-64 bg-gradient-to-b from-background via-primary/5 to-background" />
      <ProductHighlight />
      <ServicesHighlight />
      <ReviewsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  )
}

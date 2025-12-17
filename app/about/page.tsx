import type React from "react"
import type { Metadata } from "next"
import { Clock, Award, Users, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Rider's Haven",
  description: "Learn about our motorcycle shop, our team, and our commitment to the riding community.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Rider's Haven</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your trusted partner in all things motorcycles. We're passionate riders serving riders.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Founded in [YEAR], Rider's Haven has been serving the local motorcycle community with dedication and
              expertise. What started as a small garage operation has grown into a full-service motorcycle shop, but
              we've never lost sight of what matters most: our passion for motorcycles and the riders who love them.
            </p>
            <p>
              Every day, we work with riders of all experience levels—from those just starting their journey to seasoned
              veterans who've been on two wheels for decades. Our team brings together years of combined experience in
              motorcycle maintenance, customization, and performance upgrades.
            </p>
            <p>
              We believe in building lasting relationships with our customers, treating every bike as if it were our
              own, and contributing to the vibrant riding community that makes this such a special place to live and
              ride.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Clock className="w-8 h-8" />}
              title="Years of Experience"
              description="Decades of combined expertise in motorcycle service, repair, and customization."
            />
            <ValueCard
              icon={<Award className="w-8 h-8" />}
              title="Certified Technicians"
              description="Our team is trained and certified to work on all major motorcycle brands."
            />
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Community Focused"
              description="We're active members of the local riding community and support rider events."
            />
            <ValueCard
              icon={<Wrench className="w-8 h-8" />}
              title="Quality Work"
              description="We stand behind our work with comprehensive warranties and guarantees."
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Our mission is simple: to provide exceptional service, quality parts, and expert advice to every rider who
            walks through our doors. We're committed to:
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Delivering honest, transparent service with no surprises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Using only quality parts from trusted manufacturers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Educating riders about proper maintenance and safety</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Supporting and growing the local riding community</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Continuously improving our skills and staying current with new technologies</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet the Owner</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Passionate about motorcycles and dedicated to providing exceptional service to the riding community.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="border rounded-lg p-8 space-y-4 bg-card hover:border-primary/50 transition-colors">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-center">[Owner Name]</h3>
              <p className="text-primary text-center font-medium text-lg">Owner / Lead Technician</p>
              <p className="text-muted-foreground leading-relaxed text-center">
                [Brief bio about your experience with motorcycles, how you got started, your specialties,
                certifications, and what drives your passion for serving the riding community. Include years of
                experience and any notable achievements or training.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

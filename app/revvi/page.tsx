import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Zap, Shield, Heart, Phone } from "lucide-react"

export default function RevviPage() {
  const models = [
    {
      name: "Revvi Twelve",
      age: "3-6 years",
      features: ['12" wheels', "Adjustable speed settings", "Up to 60 mins ride time"],
      image: "/revvi-twelve.jpg",
    },
    {
      name: "Revvi Sixteen",
      age: "5-9 years",
      features: ['16" wheels', "3 speed modes", "Up to 90 mins ride time"],
      image: "/revvi-sixteen.jpg",
    },
    {
      name: "Revvi Twenty",
      age: "7-12 years",
      features: ['20" wheels', "Advanced controls", "Up to 120 mins ride time"],
      image: "/revvi-twenty.jpg",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Electric Powered",
      description: "Silent, emission-free riding perfect for young riders learning the basics",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Adjustable speed settings and responsive brakes designed for children",
    },
    {
      icon: Heart,
      title: "Build Confidence",
      description: "Progressive learning system helps kids develop riding skills at their own pace",
    },
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Featured Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Revvi Electric Bikes</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
            We're proud to be an authorized dealer for Revvi, the UK's leading electric balance bike brand. Give your
            child the perfect introduction to motorcycling with these innovative, safe, and fun electric bikes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" render={<Link href="/contact" />} nativeButton={false}>Enquire Now</Button>
            <Button size="lg" variant="outline" render={<Link href="#models" />} nativeButton={false}>View Models</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
          <Image src="/revvi-hero.jpg" alt="Child riding Revvi electric bike" fill className="object-cover" priority />
        </div>
      </section>

      {/* Why Revvi Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Revvi?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Available Models</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the perfect size for your child's age and skill level
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {models.map((model) => (
              <div
                key={model.name}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <div className="relative h-64">
                  <Image src={model.image || "/placeholder.svg"} alt={model.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-primary font-medium mb-4">Ages {model.age}</p>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" render={<Link href="/contact" />} nativeButton={false}>Get Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Child Started?</h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Visit our shop to see the Revvi range in person, or get in touch to discuss which model is right for your
            child. We offer expert advice, test rides, and full after-sales support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" render={<Link href="/contact" />} nativeButton={false}>Contact Us</Button>
            <Button size="lg" variant="outline" render={<Link href="/" />} nativeButton={false}>Back to Home</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

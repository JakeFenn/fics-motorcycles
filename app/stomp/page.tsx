import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Zap, Shield, Heart, Phone } from "lucide-react"
import { content } from "@/lib/content"

const c = content.stomp

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

const benefitIcons = [Zap, Shield, Heart]

export default function StompPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {c.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{c.heading}</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
            {c.subheading}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">{c.enquireButton}</Button>
            </Link>
            <Link href="#models">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-border hover:border-primary/50">{c.viewModelsButton}</Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
          <Image src="/stomp-hero.jpg" alt={c.heroImageAlt} fill className="object-cover" priority />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{c.benefitsHeading}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {c.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index]
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{c.modelsHeading}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {c.modelsSubheading}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.models.map((model) => (
              <div
                key={model.name}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <div className="relative h-64">
                  <Image src={model.image} alt={model.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  {model.age && <p className="text-primary font-medium mb-4">{c.agesPrefix} {model.age}</p>}
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full rounded-full">{c.getDetailsButton}</Button>
                  </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaHeading}</h2>
          <p className="text-muted-foreground mb-8 text-pretty">{c.ctaText}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">{c.ctaContactButton}</Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-border hover:border-primary/50">{c.ctaHomeButton}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

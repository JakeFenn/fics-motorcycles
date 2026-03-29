import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { shop } from "@/lib/shop"
import { content } from "@/lib/content"

const c = content.hero

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col px-6 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 flex-1">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
            {c.headingLine1}
            <br />
            <span className="text-primary">{c.headingLine2}</span>
            <br />
            <span className="text-muted-foreground/70">{c.headingLine3}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty leading-relaxed">
            {c.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              >
                {c.ctaPrimary}
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-base font-semibold border-border hover:border-primary/50 hover:bg-primary/5 bg-transparent gap-2"
              >
                {c.ctaSecondary}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Store Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <StoreInfoCard icon={MapPin} label={c.locationLabel} value={shop.address.street} />
            <StoreInfoCard icon={Clock} label={c.hoursLabel} value={shop.hours.short} />
            <StoreInfoCard icon={Phone} label={c.contactLabel} value={shop.phone} />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] lg:h-[680px]">
          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-60" />
          <div className="relative h-full rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-black/50">
            <Image
              src="/motorcycle-in-workshop-with-tools-and-parts.jpg"
              alt="Motorcycle in workshop"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Authorized Dealers */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-10">
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-8">
          {c.authorisedDealerBadge}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {c.brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center px-6 py-5 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-base font-black text-foreground tracking-tight">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blurs */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

interface StoreInfoCardProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}

function StoreInfoCard({ icon: Icon, label, value }: StoreInfoCardProps) {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded-xl bg-card/40 border border-border/60 backdrop-blur hover:border-primary/30 transition-colors">
      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
      <div className="text-left">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  )
}

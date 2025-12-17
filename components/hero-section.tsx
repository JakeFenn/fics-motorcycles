import type React from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 flex-1">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Your local
            <br />
            <span className="text-primary">motorcycle</span>
            <br />
            <span className="text-muted-foreground">community</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
            Expert service, premium parts, and a passionate community of riders. Your trusted partner on every ride.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 h-12 text-base bg-primary hover:bg-primary/90">
              Get Directions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base border-primary/20 hover:border-primary/40 bg-transparent"
            >
              Book a Visit
            </Button>
          </div>

          {/* Store Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <StoreInfoCard icon={MapPin} label="Location" value="Main Street" />
            <StoreInfoCard icon={Clock} label="Hours" value="Tue-Sat 9-6" />
            <StoreInfoCard icon={Phone} label="Contact" value="(555) 123-4567" />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden border border-primary/20">
          <Image
            src="/motorcycle-in-workshop-with-tools-and-parts.jpg"
            alt="Motorcycle in workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </div>

      {/* Authorized Dealers */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
        <p className="text-sm font-medium text-center text-muted-foreground mb-6 uppercase tracking-wide">
          Authorized Dealer For
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {["Harley-Davidson", "Yamaha", "Honda", "Kawasaki"].map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center px-6 py-3 rounded-full bg-card/50 border border-primary/20 backdrop-blur"
            >
              <span className="text-lg font-bold text-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl -z-10" />
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
    <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-2xl bg-card/50 border border-border backdrop-blur">
      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
      <div className="text-left">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}

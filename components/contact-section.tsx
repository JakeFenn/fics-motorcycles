import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react"
import { shop } from "@/lib/shop"
import { content } from "@/lib/content"

const c = content.contactSection

const contactInfo = [
  { icon: MapPin, label: c.locationLabel, value: shop.address.full },
  { icon: Phone,  label: c.phoneLabel,    value: shop.phone },
  { icon: Mail,   label: c.emailLabel,    value: shop.email },
  { icon: Clock,  label: c.hoursLabel,    value: shop.hours.weekday },
]

export function ContactSection() {
  return (
    <section className="pt-12 pb-24 px-4 bg-gradient-to-b from-primary/15 to-transparent border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — heading, contact details + CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {c.heading}
              </h2>
              <p className="text-muted-foreground text-pretty">
                {c.subheading}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <info.icon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-primary/20">
                {c.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right — map */}
          <div className="rounded-2xl overflow-hidden border border-border h-[380px]">
            <iframe
              src={shop.address.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${shop.name}`}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { shop } from "@/lib/shop"
import { content } from "@/lib/content"

const c = content.contactPage

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">{c.heading}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {c.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">{c.infoHeading}</h2>
            <div className="space-y-6">
              <ContactItem icon={MapPin} label={c.addressLabel} value={shop.address.street} value2={`${shop.address.city}, ${shop.address.postcode}`} />
              <ContactItem icon={Phone} label={c.phoneLabel} value={shop.phone} />
              <ContactItem icon={Mail} label={c.emailLabel} value={shop.email} />
              <ContactItem
                icon={Clock}
                label={c.hoursLabel}
                value={shop.hours.weekday}
                value2={`Sunday: ${shop.hours.sunday}`}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">{c.formHeading}</h2>
            <ContactForm />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border h-[450px]">
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
    </main>
  )
}

function ContactItem({
  icon: Icon,
  label,
  value,
  value2,
  value3,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  value2?: string
  value3?: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="font-semibold mb-1">{label}</p>
        <p className="text-muted-foreground">{value}</p>
        {value2 && <p className="text-muted-foreground">{value2}</p>}
        {value3 && <p className="text-muted-foreground">{value3}</p>}
      </div>
    </div>
  )
}

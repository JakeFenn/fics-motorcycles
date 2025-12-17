import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "123 Main Street, Anytown, ST 12345",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@yourshop.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
  },
]

export function ContactSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Our Shop</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop by and see why we're the community's favorite motorcycle shop
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">{info.label}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <Button size="lg" className="rounded-full w-full sm:w-auto">
                Get Directions
              </Button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
            <img src="/motorcycle-shop-storefront.jpg" alt="Shop Location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

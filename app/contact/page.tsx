import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're here to help with all your motorcycle needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <ContactItem icon={MapPin} label="Address" value="[Your Street Address]" value2="[City, State ZIP]" />
              <ContactItem icon={Phone} label="Phone" value="[Your Phone Number]" />
              <ContactItem icon={Mail} label="Email" value="[Your Email Address]" />
              <ContactItem
                icon={Clock}
                label="Business Hours"
                value="Monday - Friday: [XX]AM - [XX]PM"
                value2="Saturday: [XX]AM - [XX]PM"
                value3="Sunday: Closed"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
          <div className="w-full h-full bg-muted/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">[Add your Google Maps embed or map image here]</p>
            </div>
          </div>
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
  icon: any
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

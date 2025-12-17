import { Wrench, Gauge, Sparkles, Cog } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Regular maintenance and expert repairs to keep your bike running at peak performance.",
  },
  {
    icon: Gauge,
    title: "Performance Tuning",
    description: "Unlock your bike's full potential with professional dyno tuning and performance upgrades.",
  },
  {
    icon: Sparkles,
    title: "Detailing & Cleaning",
    description: "Make your ride shine with our comprehensive detailing and ceramic coating services.",
  },
  {
    icon: Cog,
    title: "Custom Fabrication",
    description: "One-of-a-kind custom parts and modifications tailored to your vision.",
  },
]

export function ServicesHighlight() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Expert Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified technicians with decades of combined experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

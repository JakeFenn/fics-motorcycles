export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From routine maintenance to custom builds, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            title="Routine Maintenance"
            description="Keep your bike running smoothly with regular maintenance services including oil changes, tire changes, brake service, chain adjustments, and fluid checks."
            price="Starting at $[XX]"
          />
          <ServiceCard
            title="Engine Repair & Rebuild"
            description="Expert diagnostics and repair for all engine issues. From minor fixes to complete engine rebuilds, our certified technicians have you covered."
            price="Custom Quote"
          />
          <ServiceCard
            title="Performance Upgrades"
            description="Unlock your bike's potential with exhaust systems, air filters, ECU tuning, suspension upgrades, and dyno tuning services."
            price="Starting at $[XX]"
          />
          <ServiceCard
            title="Custom Fabrication"
            description="Bring your vision to life with custom exhaust work, seat modifications, handlebar fabrication, and unique parts manufacturing."
            price="Custom Quote"
          />
          <ServiceCard
            title="Electrical Services"
            description="Complete electrical diagnostics and repair, lighting upgrades, battery service, and custom wiring for accessories."
            price="Starting at $[XX]"
          />
          <ServiceCard
            title="Detailing & Ceramic Coating"
            description="Full wash and detail, paint correction, ceramic coating application, chrome polishing, and leather conditioning."
            price="Starting at $[XX]"
          />
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Give us a call or stop by the shop. We'll diagnose the issue and provide you with an honest assessment and
            fair pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:[YOUR-PHONE]"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Call Us: [YOUR-PHONE]
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border font-semibold hover:bg-muted transition-colors"
            >
              Visit the Shop
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

function ServiceCard({
  title,
  description,
  price,
}: {
  title: string
  description: string
  price: string
}) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <p className="text-primary font-semibold">{price}</p>
    </div>
  )
}

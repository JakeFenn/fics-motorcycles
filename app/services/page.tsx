import { content } from "@/lib/content"
import { shop } from "@/lib/shop"

const c = content.servicesPage

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">{c.heading}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {c.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {c.items.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{c.ctaHeading}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {c.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${shop.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Call Us: {shop.phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border font-semibold hover:bg-muted transition-colors"
            >
              {c.ctaVisitButton}
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

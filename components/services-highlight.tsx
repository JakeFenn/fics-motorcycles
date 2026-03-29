import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, Sparkles, Cog, ArrowRight, HandCoins } from "lucide-react"
import { content } from "@/lib/content"

const c = content.servicesHighlight

const serviceIcons = [HandCoins, Wrench, Cog, Sparkles]

export function ServicesHighlight() {
  return (
    <section className="py-28 px-4 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-0 inset-x-0 h-px bg-border" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">{c.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {c.heading}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm lg:text-right text-pretty">
            {c.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <div
                key={service.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-base font-bold mb-2 pr-6">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services">
            <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-primary/20">
              {c.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, Wrench, ShieldCheck, ArrowRight } from "lucide-react"
import { content } from "@/lib/content"

const c = content.products

const productImages = [
  "/custom-motorcycle-build.jpg",
  "/motorcycle-parts-and-accessories.jpg",
  "/motorcycle-riding-gear-and-helmets.jpg",
]

const productIcons = [ClipboardCheck, Wrench, ShieldCheck]

export function ProductHighlight() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">{c.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            {c.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {c.items.map((product, index) => {
            const Icon = productIcons[index]
            return (
              <Link
                key={product.title}
                href="/services"
                className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={productImages[index] || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-card/80 backdrop-blur-sm border border-border/60">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-border hover:border-primary/50">
              {c.viewAllButton}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

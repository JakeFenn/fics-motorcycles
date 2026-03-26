import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, Wrench, ShieldCheck, ArrowRight } from "lucide-react"

const products = [
  {
    icon: ClipboardCheck,
    title: "Certified Pre-Builds",
    description: "As certified partners, we pre-build and inspect bikes straight from our suppliers so yours arrives fully assembled and checked off — ready to ride from day one.",
    image: "/custom-motorcycle-build.jpg",
    cta: "Find Out More",
  },
  {
    icon: Wrench,
    title: "Premium Parts",
    description: "OEM and aftermarket parts from leading brands — whether you need a routine service part or a performance upgrade, we stock or can source exactly what your bike needs.",
    image: "/motorcycle-parts-and-accessories.jpg",
    cta: "Shop Parts",
  },
  {
    icon: ShieldCheck,
    title: "Riding Gear",
    description: "From helmets and jackets to gloves, boots, and body armour — we carry gear for every rider and every budget, with advice from people who actually ride.",
    image: "/motorcycle-riding-gear-and-helmets.jpg",
    cta: "Browse Gear",
  },
]

export function ProductHighlight() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything for your ride</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            From custom builds to the gear that keeps you safe — all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href="/services"
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                {/* Icon badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-card/80 backdrop-blur-sm border border-border/60">
                  <product.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                {/* <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  {product.cta}
                  <ArrowRight className="w-4 h-4" />
                </span> */}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-border hover:border-primary/50" render={<Link href="/services" />} nativeButton={false}>
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

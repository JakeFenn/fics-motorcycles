import { Button } from "@/components/ui/button"
import { Bike, Wrench, ShieldCheck } from "lucide-react"

const products = [
  {
    icon: Bike,
    title: "Custom Builds",
    description: "Transform your dream bike into reality with our expert custom build services.",
    image: "/custom-motorcycle-build.jpg",
  },
  {
    icon: Wrench,
    title: "Premium Parts",
    description: "Top-quality OEM and aftermarket parts from the brands you trust.",
    image: "/motorcycle-parts-and-accessories.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Riding Gear",
    description: "Stay safe and stylish with our curated selection of helmets, jackets, and gear.",
    image: "/motorcycle-riding-gear-and-helmets.jpg",
  },
]

export function ProductHighlight() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to keep your ride running strong and looking sharp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full">
            Browse Full Catalog
          </Button>
        </div>
      </div>
    </section>
  )
}

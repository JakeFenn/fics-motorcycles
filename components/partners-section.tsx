const partners = ["Alpinestars", "Bell Helmets", "Michelin", "Akrapovič", "Öhlins", "Brembo", "K&N Filters", "Shoei"]

export function PartnersSection() {
  return (
    <section className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Premium Parts & Gear Partners</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Beyond our authorized dealerships, we stock the best gear, parts, and accessories from industry leaders.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center p-8 rounded-2xl bg-card/30 border border-border backdrop-blur hover:bg-card/50 hover:border-primary/20 transition-colors"
            >
              <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

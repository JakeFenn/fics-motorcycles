import { content } from "@/lib/content"

const c = content.partners

export function PartnersSection() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px bg-border" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] whitespace-nowrap">
            {c.label}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {c.items.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center py-5 px-4 rounded-2xl bg-card/30 border border-border hover:bg-card/60 hover:border-primary/20 transition-all duration-300 group"
            >
              <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

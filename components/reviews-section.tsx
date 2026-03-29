import { Star, Quote } from "lucide-react"
import { content } from "@/lib/content"

const c = content.reviews

export function ReviewsSection() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">{c.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.heading}</h2>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">{c.aggregateRating}</span>
            <span className="text-sm text-muted-foreground">· {c.reviewCount}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {c.items.map((review) => (
            <div
              key={review.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                review.featured
                  ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {/* Decorative quote mark */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/15 fill-primary/15" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/80 leading-relaxed mb-6 flex-1 text-[0.95rem]">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{review.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.bike}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

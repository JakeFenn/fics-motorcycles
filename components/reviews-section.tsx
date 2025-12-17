import { Star } from "lucide-react"

const reviews = [
  {
    name: "Mike Johnson",
    rating: 5,
    text: "Best motorcycle shop in town! The team really knows their stuff and always goes above and beyond. Had my Harley serviced here and it runs better than ever.",
    bike: "Harley-Davidson Road King",
  },
  {
    name: "Sarah Chen",
    rating: 5,
    text: "Incredible customer service and fair pricing. They helped me find the perfect gear for my first bike and made me feel welcome as a new rider.",
    bike: "Yamaha MT-07",
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "These guys are honest and trustworthy. They could have charged me for a bunch of unnecessary work but instead saved me money with smart recommendations.",
    bike: "Honda CB650R",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Riders Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{review.text}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.bike}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

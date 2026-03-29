import type React from "react"
import type { Metadata } from "next"
import { Clock, Award, Users, Wrench } from "lucide-react"
import { content } from "@/lib/content"

const c = content.about

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

const valueIcons = [Clock, Award, Users, Wrench]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{c.heading}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {c.subheading}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{c.storyHeading}</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            {c.storyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{c.valuesHeading}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.values.map((value, i) => {
              const Icon = valueIcons[i]
              return (
                <ValueCard
                  key={value.title}
                  icon={<Icon className="w-8 h-8" />}
                  title={value.title}
                  description={value.description}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{c.missionHeading}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            {c.missionIntro}
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground">
            {c.missionPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">{c.ownerHeading}</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            {c.ownerSubheading}
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="border rounded-lg p-8 space-y-4 bg-card hover:border-primary/50 transition-colors">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-center">{c.ownerName}</h3>
              <p className="text-primary text-center font-medium text-lg">{c.ownerTitle}</p>
              <p className="text-muted-foreground leading-relaxed text-center">
                {c.ownerBio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

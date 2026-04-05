export interface Color {
  name: string
  hex: string
  image?: string
}

export interface Benefit {
  title: string
  description: string
}

export interface Model {
  name: string
  image: string
  age?: string
  features: string[]
  colors?: Color[]
}

export interface BrandContent {
  badge: string
  heading: string
  subheading: string
  enquireButton: string
  viewModelsButton: string
  heroImageAlt: string
  benefitsHeading: string
  benefits: Benefit[]
  modelsHeading: string
  modelsSubheading: string
  models: Model[]
  getDetailsButton: string
  agesPrefix?: string
  ctaHeading: string
  ctaText: string
  ctaContactButton: string
  ctaHomeButton: string
}

import type { Metadata } from "next"
import { BrandPage } from "@/components/brand-page"
import { content } from "@/lib/content"

const c = content.thumpstar

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

export default function ThumpstarPage() {
  return <BrandPage content={c} heroImage="/thumpstar-hero.jpg" />
}

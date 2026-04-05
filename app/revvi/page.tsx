import type { Metadata } from "next"
import { BrandPage } from "@/components/brand-page"
import { content } from "@/lib/content"

const c = content.revvi

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

export default function RevviPage() {
  return <BrandPage content={c} heroImage="/revvi-hero.jpg" />
}

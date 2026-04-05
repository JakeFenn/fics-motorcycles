import type { Metadata } from "next"
import { BrandPage } from "@/components/brand-page"
import { content } from "@/lib/content"

const c = content.stomp

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

export default function StompPage() {
  return <BrandPage content={c} heroImage="/stomp-hero.jpg" />
}

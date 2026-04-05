import type { Metadata } from "next"
import { BrandPage } from "@/components/brand-page"
import { content } from "@/lib/content"

const c = content.mucOff

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
}

export default function MucOffPage() {
  return <BrandPage content={c} heroImage="/muc-off-hero.jpg" />
}

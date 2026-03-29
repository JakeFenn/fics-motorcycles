import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { BubbleNavbar } from "@/components/bubble-navbar"
import { Toaster } from "sonner"
import { content } from "@/lib/content"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const fontSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${fontSans.variable}`}>
      <body className="antialiased">
        <BubbleNavbar />
        {children}
        <Toaster theme="dark" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

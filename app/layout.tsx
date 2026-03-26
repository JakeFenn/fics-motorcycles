import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { BubbleNavbar } from "@/components/bubble-navbar"
import { Toaster } from "sonner"

const fontSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "FICS Motorcycles",
  description: "Expert motorcycle service, premium parts, and a passionate community of riders. Your trusted local motorcycle shop.",
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
      </body>
    </html>
  )
}

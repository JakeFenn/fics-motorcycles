"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { shop } from "@/lib/shop"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
}

export function BubbleNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "revvi", label: "Revvi", href: "/revvi" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <>
      <Link href="/" className="hidden md:flex fixed top-6 left-6 z-50 items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-base">FM</span>
        </div>
        <span className="font-bold text-foreground text-lg whitespace-nowrap">FICS Motorcycles</span>
      </Link>

      <div className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-2">
        <a
          href={shop.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-4 h-4 text-primary" />
        </a>
        <a
          href={shop.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-4 h-4 text-primary" />
        </a>
        <a
          href={shop.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="YouTube"
        >
          <YoutubeIcon className="w-4 h-4 text-primary" />
        </a>
      </div>

      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`
                relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-3 shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FM</span>
            </div>
            <span className="font-bold text-foreground text-base">FICS Motorcycles</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl p-2 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  ${
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

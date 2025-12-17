"use client"

import Link from "next/link"
import { useState } from "react"
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react"

export function BubbleNavbar() {
  const [activeLink, setActiveLink] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "revvi", label: "Revvi", href: "/revvi" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <Link href="/" className="hidden md:flex fixed top-6 left-6 z-50 items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-base">MC</span>
        </div>
        <span className="font-bold text-foreground text-lg whitespace-nowrap">Rider's Haven</span>
      </Link>

      <div className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4 text-primary" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4 text-primary" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="w-4 h-4 text-primary" />
        </a>
      </div>

      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`
                relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeLink === link.id
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
              <span className="text-primary-foreground font-bold text-sm">MC</span>
            </div>
            <span className="font-bold text-foreground text-base">Rider's Haven</span>
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
                onClick={() => {
                  setActiveLink(link.id)
                  setMobileMenuOpen(false)
                }}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  ${
                    activeLink === link.id
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

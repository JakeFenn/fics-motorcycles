"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { shop } from "@/lib/shop"
import { content } from "@/lib/content"

const c = content.nav

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

type NavLink = { id: string; label: string; href: string; dropdown?: never }
type NavDropdown = { id: string; label: string; dropdown: { id: string; label: string; href: string }[]; href?: never }
type NavItem = NavLink | NavDropdown

export function BubbleNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))
  const isDropdownActive = (item: NavDropdown) => item.dropdown.some((d) => isActive(d.href))

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const links = c.links as NavItem[]

  return (
    <>
      <Link href="/" className="hidden md:flex fixed top-6 left-6 z-50 items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-base">{c.logoInitials}</span>
        </div>
        <span className="font-bold text-foreground text-lg whitespace-nowrap">{c.logoText}</span>
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
      </div>

      <nav ref={navRef} className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
          {links.map((item) =>
            item.dropdown ? (
              <div key={item.id} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                  className={`flex items-center gap-1 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isDropdownActive(item)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : ""}`} />
                </button>

                {openDropdown === item.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[140px] bg-card/95 backdrop-blur-md border border-border rounded-2xl p-1.5 shadow-lg">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.id}
                        href={d.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(d.href)
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>

      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-3 shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">{c.logoInitials}</span>
            </div>
            <span className="font-bold text-foreground text-base">{c.logoText}</span>
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
            {links.map((item) =>
              item.dropdown ? (
                <div key={item.id}>
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.id ? null : item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isDropdownActive(item)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileOpenDropdown === item.id ? "rotate-180" : ""}`} />
                  </button>
                  {mobileOpenDropdown === item.id && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.id}
                          href={d.href}
                          onClick={() => { setMobileMenuOpen(false); setMobileOpenDropdown(null) }}
                          className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isActive(d.href)
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`}
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </>
  )
}

"use client"

import Link from "next/link"
import { useState } from "react"

export function Navbar() {
    const [activeLink, setActiveLink] = useState("home")

    const links = [
        { id: "home", label: "Home", href: "/" },
        { id: "about", label: "About", href: "/about" },
        { id: "services", label: "Services", href: "/services" },
        { id: "contact", label: "Contact", href: "/contact" },
    ]

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-3 py-3 shadow-lg">
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => setActiveLink(link.id)}
                        className={`
              relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeLink === link.id
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
    )
}

"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { content } from "@/lib/content"

const c = content.contactForm

export function ContactForm() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    // TODO: wire up to a real submission endpoint (e.g. email service or API route)
    await new Promise((r) => setTimeout(r, 800))
    setPending(false)
    toast.success(c.successMessage)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {c.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
          placeholder={c.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {c.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
          placeholder={c.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {c.phoneLabel}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
          placeholder={c.phonePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {c.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder={c.messagePlaceholder}
        />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full" disabled={pending}>
        {pending ? c.submittingButton : c.submitButton}
      </Button>
    </form>
  )
}

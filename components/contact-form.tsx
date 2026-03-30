"use client"

import { useActionState } from "react"
import { useEffect, useRef } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { content } from "@/lib/content"
import { submitContactForm } from "@/app/contact/contact"

const c = content.contactForm

const initialState = { status: "idle" as const }

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      toast.success(c.successMessage)
      formRef.current?.reset()
    } else if (state.status === "error") {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form ref={formRef} action={action} className="space-y-4">
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

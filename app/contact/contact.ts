"use server"

import nodemailer from "nodemailer"
import { shop } from "@/lib/shop"

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string }

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name    = (formData.get("name")    as string)?.trim()
  const email   = (formData.get("email")   as string)?.trim()
  const phone   = (formData.get("phone")   as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." }
  }

  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT ?? "587", 10)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    // SMTP not configured — log to console in dev, fail gracefully in prod
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission (SMTP not configured):", { name, email, phone, message })
      return { status: "success" }
    }
    return { status: "error", message: "Message could not be sent. Please call or email us directly." }
  }

  try {
    const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })

    await transporter.sendMail({
      from: `"${shop.name} Website" <${user}>`,
      to: shop.email,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        ``,
        `Message:`,
        message,
      ].filter(Boolean).join("\n"),
    })

    return { status: "success" }
  } catch (err) {
    console.error("Contact form error:", err)
    return { status: "error", message: "Message could not be sent. Please call or email us directly." }
  }
}

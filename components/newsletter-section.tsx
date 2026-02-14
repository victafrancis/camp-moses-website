"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)
    setErrorMessage(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setErrorMessage(data?.error || "We couldn’t subscribe you right now. Please try again.")
        return
      }

      setStatusMessage("Thanks for joining the Camp Moses community! Watch your inbox for updates.")
      setEmail("")
    } catch (error) {
      console.error("Subscribe error:", error)
      setErrorMessage("We couldn’t subscribe you right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 camp-text-green font-serif">Be Part of the Story</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Camp Moses exists to create life-changing moments for youth and families. Subscribe to receive updates,
            upcoming events, and ways you can help make an impact.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Get Camp Updates"}
            </Button>
          </form>

          {statusMessage ? (
            <p className="text-base text-green-700 mt-4 border border-green-200 bg-green-50 px-3 py-2 rounded-md">
              {statusMessage}
            </p>
          ) : null}
          {errorMessage ? (
            <p className="text-sm text-destructive mt-4 border border-destructive/30 bg-destructive/10 px-3 py-2 rounded-md">
              {errorMessage}
            </p>
          ) : null}

          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

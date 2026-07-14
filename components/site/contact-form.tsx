'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="dark-section flex flex-col items-start justify-center gap-4 rounded-3xl p-10">
        <h2 className="font-serif text-4xl uppercase leading-[0.95] tracking-tight">
          Message sent
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Thanks for reaching out. Our team will get back to you within a few hours.
        </p>
        <Button
          variant="outline"
          className="rounded-full border-2 font-semibold bg-transparent"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      className="dark-section flex flex-col gap-5 rounded-3xl p-8 md:p-10"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <h2 className="font-serif text-3xl uppercase leading-[0.95] tracking-tight">
        Send us a message
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-topic" className="text-sm font-semibold">
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          defaultValue="accounts"
        >
          <option value="accounts">Accounts and verification</option>
          <option value="deposits">Deposits and withdrawals</option>
          <option value="platforms">Platforms and tools</option>
          <option value="partners">Partnerships and IB</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          placeholder="How can we help?"
        />
      </div>

      <Button type="submit" size="lg" className="mt-1 rounded-full text-base font-bold">
        Send message
      </Button>
    </form>
  )
}

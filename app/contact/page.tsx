import type { Metadata } from 'next'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { ContactForm } from '@/components/site/contact-form'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | NovaFX Markets',
  description:
    'Get in touch with NovaFX Markets — 24/7 live chat, email and phone support in 20+ languages.',
}

const channels = [
  {
    icon: MessageCircle,
    title: 'Live chat',
    text: '24/7 in 20+ languages. Average first response under 60 seconds.',
  },
  {
    icon: Mail,
    title: 'Email',
    text: 'support@novafxmarkets.com — replies within a few hours, every day.',
  },
  {
    icon: Phone,
    title: 'Phone',
    text: '+44 20 0000 0000 — Monday to Friday, 8:00 to 20:00 GMT.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="flex flex-col items-start gap-8">
            <h1 className="font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-7xl">
              Talk to a human
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Questions about accounts, deposits or platforms? Our support team answers around the
              clock — no bots pretending to be people.
            </p>
            <div className="flex w-full flex-col">
              {channels.map((channel) => (
                <div key={channel.title} className="flex items-start gap-5 border-t border-border py-6 last:border-b">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary">
                    <channel.icon className="size-5 text-primary-foreground" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">{channel.title}</h2>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{channel.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}

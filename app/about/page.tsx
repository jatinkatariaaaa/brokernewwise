import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { CtaBand } from '@/components/site/cta-band'
import { Landmark, Lock, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About us | NovaFX Markets',
  description:
    'NovaFX Markets is a global multi-asset broker serving traders in 190+ countries with transparent pricing and regulated safety.',
}

const stats = [
  { value: '190+', label: 'Countries served' },
  { value: '1.2M', label: 'Active traders' },
  { value: '$68B', label: 'Monthly volume' },
  { value: '2014', label: 'Founded' },
]

const values = [
  {
    icon: Lock,
    title: 'Your money stays yours',
    text: 'Client funds are held in segregated accounts at tier-1 banks, completely separate from company capital.',
  },
  {
    icon: Landmark,
    title: 'Regulated where it matters',
    text: 'Licensed and supervised across multiple jurisdictions, with regular independent audits.',
  },
  {
    icon: Users,
    title: 'Humans, not ticket queues',
    text: 'Real multilingual support around the clock — average first response under 60 seconds.',
  },
  {
    icon: Award,
    title: 'Pricing you can verify',
    text: 'Every spread, swap and commission is published. No hidden markups, no surprise fees.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h1 className="max-w-4xl font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-8xl">
            Built by traders, for traders
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            NovaFX Markets started in 2014 with a simple frustration: brokers made trading
            expensive and opaque. We set out to fix both — transparent pricing, instant
            withdrawals, and honest risk warnings.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/team-office.png"
              alt="The NovaFX team collaborating in a bright modern office"
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="dark-section">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6 md:py-20">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 border-t border-border pt-5">
                <span className="font-serif text-5xl uppercase tracking-tight text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="mb-12 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            What we stand for
          </h2>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-5 border-t border-border pt-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBand
          title="Join 1.2 million traders"
          subtitle="See why traders in 190+ countries choose NovaFX Markets."
        />
      </main>
      <Footer />
    </>
  )
}

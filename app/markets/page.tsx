import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { Markets } from '@/components/site/markets'
import { CtaBand } from '@/components/site/cta-band'
import { Zap, BarChart3, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Markets | NovaFX Markets',
  description:
    'Trade 200+ instruments across forex, metals, indices, energies and crypto CFDs with raw spreads from 0.0 pips.',
}

const highlights = [
  {
    icon: Zap,
    title: 'Raw spreads from 0.0 pips',
    text: 'Institutional-grade pricing streamed from 25+ liquidity providers with no requotes.',
  },
  {
    icon: BarChart3,
    title: 'Deep liquidity, tight fills',
    text: 'Average execution under 40ms so your orders fill at the price you clicked.',
  },
  {
    icon: Clock,
    title: 'Trade around the clock',
    text: 'Forex 24/5, crypto CFDs 24/7 — the market never has to wait for you.',
  },
  {
    icon: ShieldCheck,
    title: 'Negative balance protection',
    text: 'You can never lose more than the funds in your account. Ever.',
  },
]

const classes = [
  { name: 'Forex', count: '60+ pairs', detail: 'Majors, minors and exotics with leverage up to 1:2000' },
  { name: 'Metals', count: '8 instruments', detail: 'Gold, silver, platinum and palladium vs USD, EUR and AUD' },
  { name: 'Indices', count: '20+ indices', detail: 'S&P 500, Nasdaq, DAX, FTSE and more with zero commission' },
  { name: 'Energies', count: '5 instruments', detail: 'WTI, Brent and natural gas with tight, transparent pricing' },
  { name: 'Crypto CFDs', count: '30+ coins', detail: 'Bitcoin, Ethereum and top altcoins — trade long or short 24/7' },
]

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-7xl">
              Every market. One login
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              200+ instruments across five asset classes, all from a single account with a single
              wallet. No juggling platforms, no extra paperwork.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/coins-chart.png"
              alt="Illustration of painted 3D coins with a rising arrow"
              width={640}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="dark-section">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <h2 className="mb-12 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
              Five asset classes
            </h2>
            <div className="flex flex-col">
              {classes.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-2 border-t border-border py-6 last:border-b md:grid-cols-[1fr_auto_2fr] md:items-center md:gap-8"
                >
                  <h3 className="font-serif text-2xl uppercase tracking-tight">{item.name}</h3>
                  <span className="text-sm font-bold text-primary">{item.count}</span>
                  <p className="leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Markets />

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-5 border-t border-border pt-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBand
          title="Pick your market. We'll handle the rest"
          subtitle="Open an account in minutes and get instant access to all 200+ instruments."
        />
      </main>
      <Footer />
    </>
  )
}

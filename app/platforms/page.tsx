import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { CtaBand } from '@/components/site/cta-band'
import { Button } from '@/components/ui/button'
import { Monitor, Globe, Smartphone, ArrowRight, Bell, LineChart, Bot, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Platforms | NovaFX Markets',
  description:
    'Trade on MetaTrader 5, NovaFX WebTrader or the NovaFX mobile app — one account, every device.',
}

const platforms = [
  {
    icon: Monitor,
    name: 'MetaTrader 5',
    tagline: 'The professional standard',
    points: [
      'Algorithmic trading with Expert Advisors',
      'Depth of market and 21 timeframes',
      '80+ built-in indicators and analytical tools',
    ],
  },
  {
    icon: Globe,
    name: 'NovaFX WebTrader',
    tagline: 'Nothing to install',
    points: [
      'Full trading from any modern browser',
      'One-click trading and instant order tickets',
      'Complete account management built in',
    ],
  },
  {
    icon: Smartphone,
    name: 'NovaFX Mobile App',
    tagline: 'Your pocket trading desk',
    points: [
      'Real-time price alerts and push notifications',
      'Deposit, trade and withdraw on the move',
      'Biometric login and instant account switching',
    ],
  },
]

const tools = [
  { icon: LineChart, title: 'Advanced charting', text: 'Multi-chart layouts, drawing tools and custom indicators.' },
  { icon: Bell, title: 'Smart alerts', text: 'Price, margin and news alerts across every device.' },
  { icon: Bot, title: 'Automated trading', text: 'Run EAs 24/7 with free VPS hosting for active traders.' },
  { icon: Layers, title: 'One wallet', text: 'A single balance powers every platform simultaneously.' },
]

export default function PlatformsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="dark-section">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
            <div className="flex flex-col items-start gap-6">
              <h1 className="font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-7xl">
                Trade on any screen
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                Desktop, browser or pocket — your account, watchlists and open positions follow you
                across every device in real time.
              </p>
              <Button size="lg" className="rounded-full px-8 text-base font-bold">
                Get started
                <ArrowRight className="ml-1 size-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/platform-devices.png"
                alt="Laptop and smartphone showing the NovaFX trading platform"
                width={640}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="mb-12 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            Three ways to trade
          </h2>
          <div className="flex flex-col">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="grid gap-6 border-t border-border py-10 last:border-b md:grid-cols-[auto_1fr_1.4fr] md:items-start md:gap-10"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-primary">
                  <platform.icon className="size-6 text-primary-foreground" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-3xl uppercase tracking-tight">{platform.name}</h3>
                  <p className="mt-1 font-semibold text-muted-foreground">{platform.tagline}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {platform.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool.title} className="flex items-start gap-5 border-t border-border pt-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border">
                  <tool.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{tool.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{tool.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBand
          title="Download once. Trade everywhere"
          subtitle="Your watchlists, positions and balance sync instantly across all three platforms."
        />
      </main>
      <Footer />
    </>
  )
}

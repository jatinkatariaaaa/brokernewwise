import Image from 'next/image'
import { Zap, ShieldCheck, Wallet, Headphones, BadgePercent, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'

const safetyPoints = [
  {
    icon: ShieldCheck,
    text: 'Negative balance protection on every account — you can never lose more than you deposit.',
  },
  {
    icon: Landmark,
    text: 'Client money is held in segregated accounts with tier-1 banks, fully separate from company funds.',
  },
  {
    icon: Headphones,
    text: 'Real humans around the clock — 24/7 support in 15+ languages including Hindi.',
  },
]

const edgePoints = [
  {
    icon: Zap,
    text: 'Average execution under 25ms with 99.9% of trades filled at the requested price — no requotes.',
  },
  {
    icon: BadgePercent,
    text: 'Raw spreads from 0.0 pips with institutional liquidity from top-tier providers.',
  },
  {
    icon: Wallet,
    text: '95% of withdrawals processed automatically within minutes — cards, crypto and e-wallets.',
  },
]

const stats = [
  { value: '800K+', label: 'Active traders' },
  { value: '$12B+', label: 'Monthly trading volume' },
  { value: '<25MS', label: 'Average execution' },
  { value: '190+', label: 'Countries served' },
]

export function Features() {
  return (
    <section id="why-us">
      {/* Safe at every step — Wise-style split section */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            Safe at every step
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            800,000+ traders trust NovaFX with their money. Here&apos;s how we keep it secure.
          </p>

          <ul className="flex w-full flex-col">
            {safetyPoints.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-5 border-t border-border py-5 first:border-t-0"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="leading-relaxed">{point.text}</p>
              </li>
            ))}
          </ul>

          <Button size="lg" className="rounded-full px-8 text-base font-bold">
            How we keep your money safe
          </Button>
        </div>

        <Image
          src="/images/safety-lock.png"
          alt="3D illustration of a padlock painted in green and blue watercolor textures"
          width={640}
          height={640}
          className="mx-auto w-full max-w-md"
        />
      </div>

      {/* Built for serious traders — mirrored split section */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 md:grid-cols-2 md:px-6 md:pb-24">
        <Image
          src="/images/globe-coins.png"
          alt="3D illustration of a globe painted in green watercolor textures with coins orbiting it"
          width={640}
          height={640}
          className="order-2 mx-auto w-full max-w-md md:order-1"
        />

        <div className="order-1 flex flex-col items-start gap-6 md:order-2">
          <h2 className="font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            Built for serious traders
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Everything we do is engineered for better pricing, faster fills, and total peace of
            mind.
          </p>

          <ul className="flex w-full flex-col">
            {edgePoints.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-5 border-t border-border py-5 first:border-t-0"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="leading-relaxed">{point.text}</p>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-foreground px-8 text-base font-semibold bg-transparent"
          >
            See our pricing
          </Button>
        </div>
      </div>

      {/* Stats band — dark forest green contrast block */}
      <div className="dark-section">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 py-16 md:grid-cols-4 md:px-6 md:py-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 text-center md:text-left">
              <dt className="order-2 text-sm font-medium text-muted-foreground">{stat.label}</dt>
              <dd className="order-1 font-serif text-5xl uppercase tracking-tight md:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { CtaBand } from '@/components/site/cta-band'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accounts | NovaFX Markets',
  description:
    'Standard, Raw Spread and Pro trading accounts. Compare specs and pick the account that fits your style.',
}

const rows = [
  { label: 'Minimum deposit', standard: '$10', raw: '$200', pro: '$10,000' },
  { label: 'Spreads from', standard: '1.0 pips', raw: '0.0 pips', pro: '0.0 pips' },
  { label: 'Commission', standard: 'None', raw: '$3.5 / lot / side', pro: '$2 / lot / side' },
  { label: 'Max leverage', standard: '1:2000', raw: '1:1000', pro: '1:500' },
  { label: 'Instruments', standard: '200+', raw: '200+', pro: '200+' },
  { label: 'Swap-free option', standard: 'Yes', raw: 'Yes', pro: 'Yes' },
  { label: 'Dedicated manager', standard: '—', raw: '—', pro: 'Yes' },
]

const perks = [
  'Free demo account with $100,000 virtual funds',
  'Instant deposits, withdrawals processed in minutes',
  'No account maintenance or inactivity fees',
  'Negative balance protection on every tier',
  'Segregated client funds at tier-1 banks',
  'Swap-free (Islamic) option on all accounts',
]

export default function AccountsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-7xl">
              An account for every trader
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Just starting or trading size daily — pick the account built for your style. Switch
              or run multiple accounts any time, free.
            </p>
            <Button size="lg" className="rounded-full px-8 text-base font-bold">
              Compare accounts
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/card-stack.png"
              alt="Illustration of three painted trading account cards fanned out"
              width={640}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
          <h2 className="mb-10 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            Side by side
          </h2>
          <div className="overflow-hidden rounded-3xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="dark-section">
                    <th scope="col" className="px-6 py-5 font-serif text-base uppercase tracking-tight">
                      <span className="sr-only">Feature</span>
                    </th>
                    <th scope="col" className="px-6 py-5 font-serif text-base uppercase tracking-tight">Standard</th>
                    <th scope="col" className="px-6 py-5 font-serif text-base uppercase tracking-tight">
                      Raw Spread
                      <span className="ml-2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-sans font-bold normal-case text-primary-foreground">
                        Popular
                      </span>
                    </th>
                    <th scope="col" className="px-6 py-5 font-serif text-base uppercase tracking-tight">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <th scope="row" className="px-6 py-4 font-semibold">{row.label}</th>
                      <td className="px-6 py-4 text-muted-foreground">{row.standard}</td>
                      <td className="px-6 py-4 font-semibold">{row.raw}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.pro}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-6 py-5" />
                    <td className="px-6 py-5">
                      <Button variant="outline" className="rounded-full font-semibold bg-transparent">
                        Open Standard
                      </Button>
                    </td>
                    <td className="px-6 py-5">
                      <Button className="rounded-full font-semibold">Open Raw Spread</Button>
                    </td>
                    <td className="px-6 py-5">
                      <Button variant="outline" className="rounded-full font-semibold bg-transparent">
                        Open Pro
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <h2 className="mb-12 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
              Included with every account
            </h2>
            <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-4 border-t border-border pt-5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="size-4 text-primary-foreground" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand
          title="Not sure? Start with a demo"
          subtitle="Practice with $100,000 in virtual funds — real prices, zero risk."
        />
      </main>
      <Footer />
    </>
  )
}

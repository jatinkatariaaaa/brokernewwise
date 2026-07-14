import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const accounts = [
  {
    name: 'Standard',
    tagline: 'Best for new traders',
    minDeposit: '$10',
    features: ['Spreads from 1.0 pips', 'Zero commission', 'Leverage up to 1:2000', 'Micro lots from 0.01'],
    highlighted: false,
  },
  {
    name: 'Raw Spread',
    tagline: 'Most popular choice',
    minDeposit: '$200',
    features: ['Spreads from 0.0 pips', '$3.50 commission per lot side', 'Ultra-fast ECN execution', 'Ideal for scalpers & EAs'],
    highlighted: true,
  },
  {
    name: 'Pro',
    tagline: 'For high-volume traders',
    minDeposit: '$1,000',
    features: ['Spreads from 0.1 pips', 'Zero commission', 'Dedicated account manager', 'Priority withdrawals'],
    highlighted: false,
  },
]

export function Accounts() {
  return (
    <section id="accounts" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-14 flex max-w-2xl flex-col gap-4">
        <h2 className="font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
          An account for every trading style
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          Start with as little as $10. Upgrade, downgrade, or run multiple accounts side by side —
          no lock-ins.
        </p>
      </div>

      <div className="flex flex-col">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="grid items-center gap-6 border-t border-border py-10 last:border-b md:grid-cols-[1fr_auto_1fr_auto] md:gap-10"
          >
            <div>
              {account.highlighted && (
                <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-3xl uppercase tracking-tight md:text-4xl">
                {account.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{account.tagline}</p>
            </div>

            <div className="md:text-center">
              <p className="font-serif text-4xl tracking-tight md:text-5xl">{account.minDeposit}</p>
              <p className="mt-1 text-sm text-muted-foreground">min. deposit</p>
            </div>

            <ul className="flex flex-col gap-2">
              {account.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className={`rounded-full px-8 font-bold ${
                account.highlighted
                  ? ''
                  : 'border-2 border-foreground bg-transparent text-foreground hover:bg-secondary'
              }`}
              variant={account.highlighted ? 'default' : 'outline'}
            >
              Open account
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

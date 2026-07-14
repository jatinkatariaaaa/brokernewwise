import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    title: 'Register in 3 minutes',
    description: 'Sign up with your email and verify your identity — fully digital, no paperwork.',
  },
  {
    number: '02',
    title: 'Fund your account',
    description: 'Deposit from just $10 via UPI, bank card, crypto, or e-wallets with zero deposit fees.',
  },
  {
    number: '03',
    title: 'Start trading',
    description: 'Access 200+ instruments on MT5, WebTrader or the mobile app — and withdraw profits in minutes.',
  },
]

export function Steps() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mb-14 max-w-2xl font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
          Get started in three steps
        </h2>

        <div className="flex flex-col">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid items-center gap-4 border-t border-border py-8 last:border-b md:grid-cols-[8rem_1fr_2fr] md:gap-10"
            >
              <span className="font-serif text-6xl tracking-tight text-primary md:text-7xl" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl uppercase tracking-tight md:text-3xl">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Big Wise-style CTA block */}
      <div className="dark-section">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 md:px-6 md:py-28">
          <h2 className="font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Ready to trade with an edge?
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Join 800,000+ traders who trust NovaFX Markets. Open your account today — it&apos;s
            free.
          </p>
          <Button size="lg" className="rounded-full px-10 py-6 text-base font-bold">
            Open account now
            <ArrowRight className="ml-1 size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBand({
  title = 'Ready to trade smarter?',
  subtitle = 'Open your account in minutes. No monthly fees, no hidden costs.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="dark-section">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 md:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-4xl uppercase leading-[0.95] tracking-tight text-balance md:text-5xl">
            {title}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {subtitle}
          </p>
        </div>
        <Button
          size="lg"
          className="shrink-0 rounded-full px-8 text-base font-bold"
        >
          Open live account
          <ArrowRight className="ml-1 size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}

'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pairs = [
  { symbol: 'EUR/USD', price: 1.0842, spread: 0.0 },
  { symbol: 'GBP/USD', price: 1.2718, spread: 0.1 },
  { symbol: 'USD/JPY', price: 157.32, spread: 0.1 },
  { symbol: 'XAU/USD', price: 2384.5, spread: 0.5 },
  { symbol: 'BTC/USD', price: 64280.0, spread: 12.0 },
]

const lotSizes = [0.01, 0.1, 0.5, 1, 5, 10]

export function Hero() {
  const [pairIndex, setPairIndex] = useState(0)
  const [lots, setLots] = useState(1)
  const pair = pairs[pairIndex]

  const pipValue = useMemo(() => {
    // Simplified pip value estimate: $10 per pip per standard lot for FX majors
    const perLot = pair.symbol === 'XAU/USD' ? 10 : pair.symbol === 'BTC/USD' ? 1 : 10
    return (perLot * lots).toFixed(2)
  }, [pair, lots])

  const margin = useMemo(() => {
    // Margin at 1:2000 leverage
    const contract = pair.symbol === 'BTC/USD' ? pair.price : pair.price * 100000
    const value = pair.symbol === 'XAU/USD' ? pair.price * 100 : contract
    return ((value * lots) / 2000).toFixed(2)
  }, [pair, lots])

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-serif text-6xl uppercase leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Trade the world&apos;s markets
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            200+ instruments across forex, metals, indices, energies and crypto CFDs. Raw spreads
            from 0.0 pips, ultra-fast execution, and withdrawals processed in minutes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full px-8 text-base font-bold">
              Open live account
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-foreground px-8 text-base font-semibold bg-transparent"
            >
              Try free demo
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {'CFDs are leveraged products and carry a high level of risk.'}
          </p>
        </div>

        {/* Margin calculator card — Wise-style hero widget */}
        <div className="w-full rounded-3xl border border-border bg-card p-6 shadow-2xl md:p-8">
          <h2 className="font-serif text-xl font-bold">Margin calculator</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Estimate margin and pip value before you trade.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="pair" className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Instrument
              </label>
              <select
                id="pair"
                value={pairIndex}
                onChange={(e) => setPairIndex(Number(e.target.value))}
                className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-ring"
              >
                {pairs.map((p, i) => (
                  <option key={p.symbol} value={i}>
                    {p.symbol}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="lots" className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Volume (lots)
              </label>
              <select
                id="lots"
                value={lots}
                onChange={(e) => setLots(Number(e.target.value))}
                className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-ring"
              >
                {lotSizes.map((l) => (
                  <option key={l} value={l}>
                    {l.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs text-muted-foreground">Required margin</p>
                <p className="mt-1 font-serif text-2xl font-bold text-primary">${margin}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">at 1:2000 leverage</p>
              </div>
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs text-muted-foreground">Pip value</p>
                <p className="mt-1 font-serif text-2xl font-bold">${pipValue}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">per pip movement</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{pair.symbol}</span>
                <span className="text-sm text-muted-foreground">{pair.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                {pairIndex % 2 === 0 ? (
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                ) : (
                  <ArrowDownRight className="size-4 text-destructive" aria-hidden="true" />
                )}
                <span>{pair.spread.toFixed(1)} pips spread</span>
              </div>
            </div>

            <Button className="w-full rounded-full py-6 text-base font-bold">
              Start trading now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

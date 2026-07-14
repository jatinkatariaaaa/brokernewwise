'use client'

import { useState } from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Instrument = {
  symbol: string
  name: string
  bid: number
  ask: number
  change: number
}

const markets: Record<string, Instrument[]> = {
  Forex: [
    { symbol: 'EUR/USD', name: 'Euro vs US Dollar', bid: 1.0841, ask: 1.0842, change: 0.24 },
    { symbol: 'GBP/USD', name: 'Pound vs US Dollar', bid: 1.2717, ask: 1.2718, change: -0.11 },
    { symbol: 'USD/JPY', name: 'US Dollar vs Yen', bid: 157.31, ask: 157.33, change: 0.38 },
    { symbol: 'AUD/USD', name: 'Aussie vs US Dollar', bid: 0.6642, ask: 0.6643, change: 0.09 },
    { symbol: 'USD/CAD', name: 'US Dollar vs Loonie', bid: 1.3721, ask: 1.3723, change: -0.05 },
  ],
  Metals: [
    { symbol: 'XAU/USD', name: 'Gold vs US Dollar', bid: 2384.2, ask: 2384.7, change: 0.82 },
    { symbol: 'XAG/USD', name: 'Silver vs US Dollar', bid: 30.42, ask: 30.45, change: 1.34 },
    { symbol: 'XPT/USD', name: 'Platinum vs US Dollar', bid: 1012.4, ask: 1013.9, change: -0.42 },
  ],
  Indices: [
    { symbol: 'US500', name: 'S&P 500 Index', bid: 5432.1, ask: 5432.6, change: 0.56 },
    { symbol: 'US30', name: 'Dow Jones 30', bid: 39120.4, ask: 39123.4, change: 0.31 },
    { symbol: 'NAS100', name: 'Nasdaq 100', bid: 19412.7, ask: 19413.9, change: 0.94 },
    { symbol: 'GER40', name: 'DAX 40', bid: 18320.2, ask: 18321.7, change: -0.22 },
  ],
  Crypto: [
    { symbol: 'BTC/USD', name: 'Bitcoin', bid: 64268.0, ask: 64280.0, change: 2.14 },
    { symbol: 'ETH/USD', name: 'Ethereum', bid: 3418.2, ask: 3420.1, change: 1.62 },
    { symbol: 'SOL/USD', name: 'Solana', bid: 148.31, ask: 148.52, change: -0.87 },
  ],
  Energies: [
    { symbol: 'USOIL', name: 'WTI Crude Oil', bid: 78.42, ask: 78.46, change: 0.67 },
    { symbol: 'UKOIL', name: 'Brent Crude Oil', bid: 82.15, ask: 82.2, change: 0.54 },
    { symbol: 'NGAS', name: 'Natural Gas', bid: 2.84, ask: 2.85, change: -1.21 },
  ],
}

const tabs = Object.keys(markets)

export function Markets() {
  const [active, setActive] = useState(tabs[0])

  return (
    <section id="markets" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <h2 className="font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
          200+ markets. One account.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Trade forex majors, gold, global indices, energies and crypto CFDs with institutional-grade
          pricing and no requotes.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Market categories">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === tab
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th scope="col" className="px-6 py-4 font-semibold">Instrument</th>
                <th scope="col" className="px-6 py-4 font-semibold">Bid</th>
                <th scope="col" className="px-6 py-4 font-semibold">Ask</th>
                <th scope="col" className="px-6 py-4 font-semibold">Change (24h)</th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {markets[active].map((row) => (
                <tr key={row.symbol} className="border-b border-border last:border-0">
                  <td className="px-6 py-4">
                    <div className="font-bold">{row.symbol}</div>
                    <div className="text-xs text-muted-foreground">{row.name}</div>
                  </td>
                  <td className="px-6 py-4 font-mono">{row.bid.toLocaleString()}</td>
                  <td className="px-6 py-4 font-mono">{row.ask.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 font-semibold ${
                        row.change >= 0 ? 'text-primary' : 'text-destructive'
                      }`}
                    >
                      {row.change >= 0 ? (
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      ) : (
                        <ArrowDownRight className="size-4" aria-hidden="true" />
                      )}
                      {row.change >= 0 ? '+' : ''}
                      {row.change.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm" variant="outline" className="rounded-full font-semibold bg-transparent">
                      Trade
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Indicative prices for illustration only. Live pricing is available on the trading platform.
      </p>
    </section>
  )
}

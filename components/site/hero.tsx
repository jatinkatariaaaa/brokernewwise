'use client'

import { useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const pairs = [
  {
    symbol: 'EUR/USD',
    label: 'Euro / US Dollar',
    price: 1.0842,
    displayPrice: '1.08420',
    change: 0.18,
    spread: 0,
    path: 'M0 142 C26 136 36 148 62 130 S94 108 118 116 S154 138 180 110 S212 88 238 96 S276 116 300 84 S334 44 358 66 S392 92 420 58 S460 20 500 30',
  },
  {
    symbol: 'GBP/USD',
    label: 'British Pound / US Dollar',
    price: 1.2718,
    displayPrice: '1.27180',
    change: -0.07,
    spread: 0.1,
    path: 'M0 122 C30 114 52 92 78 104 S116 146 148 126 S184 76 218 86 S250 114 278 100 S314 58 346 72 S386 104 418 76 S460 50 500 58',
  },
  {
    symbol: 'USD/JPY',
    label: 'US Dollar / Japanese Yen',
    price: 157.32,
    displayPrice: '157.320',
    change: 0.24,
    spread: 0.1,
    path: 'M0 148 C30 130 46 136 70 116 S108 102 138 110 S176 88 204 96 S244 72 272 78 S312 42 340 58 S378 74 404 52 S452 24 500 38',
  },
  {
    symbol: 'XAU/USD',
    label: 'Gold / US Dollar',
    price: 2384.5,
    displayPrice: '2,384.50',
    change: 0.41,
    spread: 0.5,
    path: 'M0 132 C24 120 46 142 74 126 S108 84 138 96 S170 126 202 102 S240 62 270 76 S310 112 338 82 S370 36 404 54 S452 30 500 18',
  },
  {
    symbol: 'BTC/USD',
    label: 'Bitcoin / US Dollar',
    price: 64280,
    displayPrice: '64,280.00',
    change: -0.32,
    spread: 12,
    path: 'M0 88 C30 112 48 78 76 96 S112 154 146 128 S178 62 214 84 S250 132 284 108 S318 50 348 72 S388 130 420 92 S460 42 500 66',
  },
]

const lotSizes = [0.01, 0.1, 0.5, 1, 5, 10]

const marketQuotes = [
  { symbol: 'EUR/USD', value: '1.08420', change: '+0.18%' },
  { symbol: 'XAU/USD', value: '2,384.50', change: '+0.41%' },
  { symbol: 'NASDAQ', value: '19,812.4', change: '+0.26%' },
]

const proofPoints = [
  { value: '< 20ms', label: 'Avg. execution', icon: Zap },
  { value: '200+', label: 'Global markets', icon: Radio },
  { value: '100K+', label: 'Active traders', icon: ShieldCheck },
  { value: '24/5', label: 'Expert support', icon: LockKeyhole },
]

export function Hero() {
  const [pairIndex, setPairIndex] = useState(0)
  const [lots, setLots] = useState(1)
  const pair = pairs[pairIndex]
  const isPositive = pair.change >= 0

  const pipValue = useMemo(() => {
    const perLot = pair.symbol === 'XAU/USD' ? 10 : pair.symbol === 'BTC/USD' ? 1 : 10
    return (perLot * lots).toFixed(2)
  }, [pair, lots])

  const margin = useMemo(() => {
    const contract = pair.symbol === 'BTC/USD' ? pair.price : pair.price * 100000
    const value = pair.symbol === 'XAU/USD' ? pair.price * 100 : contract
    return ((value * lots) / 2000).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }, [pair, lots])

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="market-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col px-4 pb-8 pt-10 md:px-6 md:pb-10 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-card/80 px-3 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Global markets are open
              <span className="h-4 w-px bg-border" aria-hidden="true" />
              <span className="text-muted-foreground">London session</span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Built for decisive traders
            </p>
            <h1 className="max-w-3xl font-serif text-6xl uppercase leading-[0.88] tracking-tight text-balance sm:text-7xl lg:text-[5.75rem] xl:text-[6.7rem]">
              Markets move.
              <span className="mt-2 block text-primary">Move smarter.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              One high-performance account for forex, metals, indices, energies and crypto CFDs.
              Institutional-grade execution, transparent pricing and control at every trade.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" className="h-12 rounded-full px-7 text-sm font-bold sm:text-base">
                Open live account
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-border bg-card/40 px-7 text-sm font-semibold sm:text-base"
              >
                Explore the platform
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              {['No deposit fees', 'Instant demo access', 'Secure withdrawals'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-primary" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-lg text-[11px] leading-relaxed text-muted-foreground/80">
              CFDs are leveraged products and carry a high level of risk. Pricing shown is for
              presentation purposes and is not live market data.
            </p>
          </div>

          <div className="relative min-w-0">
            <div
              className="absolute -inset-3 rounded-[2rem] border border-primary/10 bg-primary/[0.03]"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-background/60">
              <div className="flex flex-col gap-4 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary font-serif text-sm text-primary-foreground">
                    N
                  </div>
                  <div>
                    <p className="text-sm font-bold">Nova Terminal</p>
                    <p className="text-[11px] text-muted-foreground">Demo market workspace</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  Secure connection
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_13rem]">
                <div className="min-w-0 border-b border-border p-5 sm:p-6 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold">{pair.symbol}</h2>
                        <span className="rounded-md bg-secondary px-2 py-1 text-[10px] font-bold text-muted-foreground">
                          CFD
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{pair.label}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-3xl tracking-tight">{pair.displayPrice}</p>
                      <p
                        className={`mt-1 flex items-center justify-end gap-1 text-xs font-bold ${
                          isPositive ? 'text-primary' : 'text-destructive'
                        }`}
                      >
                        {isPositive ? (
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        ) : (
                          <ArrowDownRight className="size-3.5" aria-hidden="true" />
                        )}
                        {isPositive ? '+' : ''}
                        {pair.change.toFixed(2)}% today
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-y border-border py-3">
                    <div className="flex gap-1" aria-label="Chart timeframe">
                      {['1H', '1D', '1W', '1M'].map((time, index) => (
                        <span
                          key={time}
                          className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                            index === 1
                              ? 'bg-primary text-primary-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Indicative price
                    </p>
                  </div>

                  <div className="relative mt-3 h-48 overflow-hidden sm:h-56">
                    <div className="chart-grid absolute inset-0" aria-hidden="true" />
                    <svg
                      className="absolute inset-0 size-full"
                      viewBox="0 0 500 170"
                      preserveAspectRatio="none"
                      role="img"
                      aria-label={`${pair.symbol} indicative one-day price chart`}
                    >
                      <path
                        d={pair.path}
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <circle cx="500" cy={isPositive ? '30' : '66'} r="4" fill="var(--primary)" />
                    </svg>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between text-[9px] font-medium text-muted-foreground">
                      <span>08:00</span>
                      <span>12:00</span>
                      <span>16:00</span>
                      <span>Now</span>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {marketQuotes.map((quote) => (
                      <div key={quote.symbol} className="rounded-xl bg-secondary p-3">
                        <p className="text-[10px] font-bold text-muted-foreground">{quote.symbol}</p>
                        <p className="mt-1 text-xs font-bold sm:text-sm">{quote.value}</p>
                        <p className="mt-1 text-[10px] font-semibold text-primary">{quote.change}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col bg-background/25 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">Order ticket</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">Margin estimate</p>
                    </div>
                    <Zap className="size-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-5 flex flex-col gap-4">
                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Instrument
                      <span className="relative">
                        <select
                          id="hero-pair"
                          value={pairIndex}
                          onChange={(event) => setPairIndex(Number(event.target.value))}
                          className="h-11 w-full appearance-none rounded-xl border border-input bg-secondary px-3 pr-9 text-xs font-bold normal-case tracking-normal text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                        >
                          {pairs.map((item, index) => (
                            <option key={item.symbol} value={index}>
                              {item.symbol}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                      </span>
                    </label>

                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Volume
                      <span className="relative">
                        <select
                          id="hero-lots"
                          value={lots}
                          onChange={(event) => setLots(Number(event.target.value))}
                          className="h-11 w-full appearance-none rounded-xl border border-input bg-secondary px-3 pr-9 text-xs font-bold normal-case tracking-normal text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                        >
                          {lotSizes.map((lot) => (
                            <option key={lot} value={lot}>
                              {lot.toFixed(2)} lots
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                      </span>
                    </label>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-y border-border py-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] text-muted-foreground">Margin</span>
                      <span className="text-sm font-bold text-primary">${margin}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] text-muted-foreground">Pip value</span>
                      <span className="text-sm font-bold">${pipValue}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] text-muted-foreground">Spread</span>
                      <span className="text-sm font-bold">{pair.spread.toFixed(1)} pips</span>
                    </div>
                  </div>

                  <Button className="mt-5 h-11 w-full rounded-full font-bold">
                    Create account
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Button>
                  <p className="mt-3 text-center text-[9px] leading-relaxed text-muted-foreground">
                    Leverage displayed at 1:2000. Terms apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card/55 backdrop-blur-sm md:grid-cols-4 lg:mt-16">
          {proofPoints.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 p-4 sm:p-5 ${
                  index % 2 !== 0 ? 'border-l border-border' : ''
                } ${index >= 2 ? 'border-t border-border md:border-t-0' : ''} ${
                  index > 0 ? 'md:border-l md:border-border' : ''
                }`}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-serif text-xl leading-none sm:text-2xl">{item.value}</span>
                  <span className="mt-1 block text-[10px] font-semibold text-muted-foreground sm:text-xs">
                    {item.label}
                  </span>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

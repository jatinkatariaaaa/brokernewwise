'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const instruments = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.08426, display: '1.08426', change: '+0.18%', spread: '0.0', trend: 'up' },
  { symbol: 'XAU/USD', name: 'Gold / US Dollar', price: 2384.5, display: '2,384.50', change: '+0.41%', spread: '0.5', trend: 'up' },
  { symbol: 'BTC/USD', name: 'Bitcoin / US Dollar', price: 64280, display: '64,280.00', change: '-0.32%', spread: '12.0', trend: 'down' },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 157.32, display: '157.320', change: '+0.24%', spread: '0.1', trend: 'up' },
]

const ticker = [
  ['EUR/USD', '1.08426', '+0.18%'],
  ['GBP/USD', '1.27184', '+0.09%'],
  ['XAU/USD', '2,384.50', '+0.41%'],
  ['US 100', '19,812.4', '+0.26%'],
  ['BTC/USD', '64,280', '-0.32%'],
  ['USD/JPY', '157.320', '+0.24%'],
]

const chartPath = 'M0 184 C35 176 48 194 82 167 S130 146 160 155 S205 187 240 150 S278 106 314 120 S358 151 390 109 S432 54 470 77 S514 124 548 82 S600 30 650 49 S708 81 754 36 S825 24 900 10'
const areaPath = `${chartPath} L900 220 L0 220 Z`

const candles = [
  { left: '8%', top: 54, height: 44, up: true },
  { left: '15%', top: 70, height: 58, up: false },
  { left: '23%', top: 44, height: 62, up: true },
  { left: '31%', top: 88, height: 48, up: false },
  { left: '40%', top: 52, height: 72, up: true },
  { left: '49%', top: 36, height: 56, up: true },
  { left: '58%', top: 68, height: 66, up: false },
  { left: '67%', top: 30, height: 76, up: true },
  { left: '76%', top: 48, height: 54, up: false },
  { left: '85%', top: 16, height: 68, up: true },
]

export function Hero() {
  const [instrumentIndex, setInstrumentIndex] = useState(0)
  const [lots, setLots] = useState(1)
  const instrument = instruments[instrumentIndex]

  const margin = useMemo(() => {
    const contract = instrument.symbol === 'BTC/USD' ? instrument.price : instrument.price * 100000
    const value = instrument.symbol === 'XAU/USD' ? instrument.price * 100 : contract
    return ((value * lots) / 2000).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }, [instrument, lots])

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <div className="market-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one absolute rounded-full border border-primary/20" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two absolute rounded-full border border-border" aria-hidden="true" />

      <div className="relative border-b border-border bg-card/60 backdrop-blur-md">
        <div className="mx-auto flex h-11 max-w-7xl items-center overflow-hidden px-4 md:px-6">
          <div className="mr-7 flex shrink-0 items-center gap-2 border-r border-border pr-6 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            <span className="relative flex size-2">
              <span className="absolute size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            Live markets
          </div>
          <div className="ticker-track flex min-w-max items-center gap-9">
            {[...ticker, ...ticker].map(([symbol, value, change], index) => (
              <div key={`${symbol}-${index}`} className="flex items-center gap-3 text-[11px]">
                <span className="font-bold text-foreground">{symbol}</span>
                <span className="font-mono text-muted-foreground">{value}</span>
                <span className={change.startsWith('+') ? 'font-bold text-primary' : 'font-bold text-destructive'}>{change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14 lg:py-20">
        <div className="grid min-h-[610px] items-center gap-12 min-[700px]:grid-cols-[0.82fr_1.18fr] min-[700px]:gap-5 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
          <div className="relative z-10 flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/85 px-3 py-2 text-[11px] font-bold shadow-lg backdrop-blur-md">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              The edge serious traders deserve
            </div>

            <h1 className="max-w-3xl font-serif text-5xl uppercase leading-[0.88] tracking-[-0.045em] text-balance min-[700px]:text-[3.35rem] lg:text-[5.65rem] xl:text-[6.4rem]">
              Trade the
              <span className="mt-1 block text-primary">next move.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty lg:text-lg">
              Institutional execution meets an experience built for speed. Access 200+ global markets from one powerful, transparent platform.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" className="h-13 rounded-full px-7 text-sm font-bold shadow-xl shadow-primary/10">
                Start trading
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" className="h-13 rounded-full bg-card/65 px-7 text-sm font-bold backdrop-blur-md">
                Try free demo
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-semibold text-muted-foreground">
              {['0% deposit fees', 'Demo in 30 seconds', 'Funds protected'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="flex size-4 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-2.5" aria-hidden="true" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 min-[700px]:-mr-32 lg:-mr-10">
            <div className="absolute -inset-8 border border-primary/10 bg-card/20 hero-panel-shadow" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card/90 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary font-serif text-xs text-primary-foreground">N</div>
                  <div>
                    <p className="text-xs font-bold">Nova One</p>
                    <p className="text-[9px] text-muted-foreground">Professional workspace</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[9px] font-bold text-muted-foreground">
                  <span className="hidden items-center gap-1.5 sm:flex"><Clock3 className="size-3" /> London 14:32</span>
                  <span className="flex items-center gap-1.5 text-primary"><Radio className="size-3" /> Streaming</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-[1fr_11.5rem]">
                <div className="min-w-0 border-b border-border p-4 sm:border-b-0 sm:border-r sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-base font-bold sm:text-lg">{instrument.symbol}</p>
                        <span className="rounded-md bg-secondary px-1.5 py-1 text-[8px] font-bold text-muted-foreground">CFD</span>
                      </div>
                      <p className="mt-1 text-[10px] text-muted-foreground">{instrument.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xl font-bold sm:text-2xl">{instrument.display}</p>
                      <p className={instrument.trend === 'up' ? 'mt-1 text-[10px] font-bold text-primary' : 'mt-1 text-[10px] font-bold text-destructive'}>{instrument.change} today</p>
                    </div>
                  </div>

                  <div className="relative mt-4 h-56 overflow-hidden rounded-xl border border-border bg-background/30 chart-grid sm:h-64">
                    <div className="absolute left-3 top-3 flex gap-1.5">
                      {['1H', '1D', '1W', '1M'].map((time, index) => (
                        <span key={time} className={index === 1 ? 'rounded-md bg-primary px-2 py-1 text-[8px] font-bold text-primary-foreground' : 'rounded-md bg-card/80 px-2 py-1 text-[8px] font-bold text-muted-foreground'}>{time}</span>
                      ))}
                    </div>
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md bg-card/80 px-2 py-1 text-[8px] font-bold text-primary">
                      <Activity className="size-3" /> LIVE
                    </div>
                    {candles.map((candle, index) => (
                      <span key={index} className="absolute bottom-7 w-px bg-muted-foreground/35" style={{ left: candle.left, height: candle.height }} aria-hidden="true">
                        <span className={candle.up ? 'absolute left-[-3px] top-2 h-5 w-[7px] rounded-sm bg-primary/45' : 'absolute left-[-3px] top-2 h-5 w-[7px] rounded-sm bg-destructive/45'} />
                      </span>
                    ))}
                    <svg className="absolute inset-x-0 bottom-5 h-[78%] w-full" viewBox="0 0 900 220" preserveAspectRatio="none" role="img" aria-label={`${instrument.symbol} live-style indicative chart`}>
                      <path d={areaPath} fill="var(--primary)" opacity="0.06" />
                      <path className="live-chart-line" d={chartPath} fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <span className="live-price-dot absolute right-2 top-[29%] size-2 rounded-full bg-primary shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary),transparent_80%)]" aria-hidden="true" />
                    <div className="absolute inset-x-3 bottom-2 flex justify-between font-mono text-[8px] text-muted-foreground"><span>09:00</span><span>12:00</span><span>15:00</span><span>NOW</span></div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <Metric label="Execution" value="18ms" icon={Zap} />
                    <Metric label="Spread" value={`${instrument.spread} pip`} icon={Activity} />
                    <Metric label="Uptime" value="99.99%" icon={ShieldCheck} />
                  </div>
                </div>

                <div className="flex flex-col bg-background/20 p-4">
                  <div className="flex items-center justify-between">
                    <div><p className="text-xs font-bold">Quick trade</p><p className="mt-0.5 text-[9px] text-muted-foreground">Margin calculator</p></div>
                    <LockKeyhole className="size-3.5 text-primary" aria-hidden="true" />
                  </div>

                  <label className="mt-4 flex flex-col gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    Market
                    <span className="relative">
                      <select value={instrumentIndex} onChange={(event) => setInstrumentIndex(Number(event.target.value))} className="h-10 w-full appearance-none rounded-lg border border-input bg-secondary px-3 pr-8 text-[11px] font-bold normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring/30">
                        {instruments.map((item, index) => <option key={item.symbol} value={index}>{item.symbol}</option>)}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3 -translate-y-1/2" />
                    </span>
                  </label>
                  <label className="mt-3 flex flex-col gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    Volume
                    <span className="relative">
                      <select value={lots} onChange={(event) => setLots(Number(event.target.value))} className="h-10 w-full appearance-none rounded-lg border border-input bg-secondary px-3 pr-8 text-[11px] font-bold normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring/30">
                        {[0.01, 0.1, 0.5, 1, 5].map((lot) => <option key={lot} value={lot}>{lot.toFixed(2)} lots</option>)}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3 -translate-y-1/2" />
                    </span>
                  </label>

                  <div className="my-4 flex flex-col gap-2 border-y border-border py-3 text-[10px]">
                    <div className="flex justify-between gap-2 text-muted-foreground"><span>Required margin</span><strong className="font-mono text-foreground">${margin}</strong></div>
                    <div className="flex justify-between gap-2 text-muted-foreground"><span>Leverage</span><strong className="text-foreground">1:2000</strong></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" className="rounded-lg border border-primary/30 bg-primary/10 px-2 py-2.5 text-left transition hover:bg-primary/20"><span className="block text-[8px] font-bold text-muted-foreground">SELL</span><strong className="mt-1 block font-mono text-[11px]">{instrument.display}</strong></button>
                    <button type="button" className="rounded-lg bg-primary px-2 py-2.5 text-left text-primary-foreground transition hover:opacity-90"><span className="block text-[8px] font-bold opacity-70">BUY</span><strong className="mt-1 block font-mono text-[11px]">{instrument.display}</strong></button>
                  </div>
                  <p className="mt-3 text-center text-[8px] leading-relaxed text-muted-foreground">Indicative demo pricing. No order will be placed.</p>
                </div>
              </div>
            </div>

            <div className="hero-float-card absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-xl lg:flex">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><CircleDollarSign className="size-4" /></span>
              <span><span className="block text-[9px] text-muted-foreground">Today&apos;s volume</span><strong className="font-mono text-sm">$1.84B</strong></span>
              <span className="ml-3 text-[9px] font-bold text-primary">+12.8%</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-[10px] leading-relaxed text-muted-foreground">CFDs are leveraged products and carry a high level of risk. Pricing shown is illustrative and is not live market data.</p>
          <div className="flex flex-wrap items-center gap-5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-2"><Zap className="size-3.5 text-primary" /> &lt;20ms execution</span>
            <span className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-primary" /> Segregated funds</span>
            <span className="flex items-center gap-2"><LockKeyhole className="size-3.5 text-primary" /> SSL secured</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Zap }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/55 p-2.5">
      <Icon className="size-3 text-primary" aria-hidden="true" />
      <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-mono text-[10px] font-bold sm:text-xs">{value}</p>
    </div>
  )
}

import Image from 'next/image'
import { Monitor, Smartphone, Globe } from 'lucide-react'

const platforms = [
  {
    icon: Monitor,
    name: 'MetaTrader 5',
    description: 'The industry-standard desktop platform with algorithmic trading and depth of market.',
  },
  {
    icon: Globe,
    name: 'NovaFX WebTrader',
    description: 'Trade from any browser — no downloads, one-click trading, full account management.',
  },
  {
    icon: Smartphone,
    name: 'NovaFX Mobile App',
    description: 'Full trading power in your pocket with real-time alerts on iOS and Android.',
  },
]

export function Platforms() {
  return (
    <section id="platforms" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Image
          src="/images/hero-lifestyle.png"
          alt="A hand holding a phone showing the NovaFX trading app in green, next to a lime debit card and a cup of coffee on a table"
          width={720}
          height={720}
          className="mx-auto w-full max-w-lg rounded-4xl object-cover"
        />

        <div className="flex flex-col items-start gap-8">
          <h2 className="font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
            Take NovaFX everywhere you go
          </h2>

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-background p-5 shadow-sm">
            <p className="max-w-[9rem] text-sm font-semibold leading-snug">
              Scan to get the NovaFX app
            </p>
            <Image
              src="/images/qr-code.png"
              alt="QR code to download the NovaFX trading app"
              width={112}
              height={112}
              className="size-28 shrink-0"
            />
          </div>

          <ul className="flex w-full flex-col">
            {platforms.map((platform) => (
              <li
                key={platform.name}
                className="flex items-center gap-5 border-t border-border py-5 first:border-t-0"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border">
                  <platform.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">{platform.name}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

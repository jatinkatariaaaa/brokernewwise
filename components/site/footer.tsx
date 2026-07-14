import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

const columns = [
  {
    title: 'Markets',
    links: [
      { label: 'Forex', href: '/markets' },
      { label: 'Metals', href: '/markets' },
      { label: 'Indices', href: '/markets' },
      { label: 'Energies', href: '/markets' },
      { label: 'Crypto CFDs', href: '/markets' },
    ],
  },
  {
    title: 'Accounts',
    links: [
      { label: 'Standard', href: '/accounts' },
      { label: 'Raw Spread', href: '/accounts' },
      { label: 'Pro', href: '/accounts' },
      { label: 'Demo account', href: '/accounts' },
      { label: 'Swap-free', href: '/accounts' },
    ],
  },
  {
    title: 'Platforms',
    links: [
      { label: 'MetaTrader 5', href: '/platforms' },
      { label: 'WebTrader', href: '/platforms' },
      { label: 'Mobile app', href: '/platforms' },
      { label: 'Trading tools', href: '/platforms' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Why NovaFX', href: '/#why-us' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="dark-section border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary">
                <TrendingUp className="size-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-bold tracking-tight">NovaFX Markets</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A global multi-asset broker offering forex, metals, indices, energies and crypto CFDs
              to traders in 190+ countries.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 text-sm font-bold">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Risk warning
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Trading CFDs and leveraged forex products carries a high level of risk and may not be
            suitable for all investors. You could lose some or all of your invested capital;
            therefore, you should not speculate with capital you cannot afford to lose. Before
            trading, please consider your level of experience and investment objectives, and seek
            independent financial advice if necessary. Past performance is not an indicator of
            future results. NovaFX Markets does not offer services to residents of certain
            jurisdictions where such distribution would be contrary to local laws or regulations.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {'© '}
            {new Date().getFullYear()}
            {' NovaFX Markets Ltd. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

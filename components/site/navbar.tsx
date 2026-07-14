'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Markets', href: '/markets' },
  { label: 'Accounts', href: '/accounts' },
  { label: 'Platforms', href: '/platforms' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary">
            <TrendingUp className="size-4 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight">NovaFX Markets</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="rounded-full font-semibold">
            Log in
          </Button>
          <Button className="rounded-full font-semibold">Open account</Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full rounded-full font-semibold bg-transparent">
              Log in
            </Button>
            <Button className="w-full rounded-full font-semibold">Open account</Button>
          </div>
        </div>
      )}
    </header>
  )
}

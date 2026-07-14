'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the minimum deposit to start trading?',
    answer:
      'You can open a Standard account with as little as $10. The Raw Spread account requires a minimum of $200, and the Pro account requires $1,000. There are no deposit fees on any funding method.',
  },
  {
    question: 'How fast are withdrawals processed?',
    answer:
      '95% of withdrawal requests are processed automatically within minutes. Bank transfers may take 1–3 business days depending on your bank. We never charge withdrawal fees on our side.',
  },
  {
    question: 'What leverage do you offer?',
    answer:
      'We offer flexible leverage up to 1:2000 depending on your account equity and the instrument traded. You can adjust your leverage at any time from your personal area. Higher leverage increases both potential profits and potential losses.',
  },
  {
    question: 'Can I trade with Expert Advisors (EAs) and scalping strategies?',
    answer:
      'Yes. All trading strategies are welcome, including scalping, hedging, and fully automated trading with EAs. Our Raw Spread account with ECN execution is specifically optimized for high-frequency strategies.',
  },
  {
    question: 'Is my money safe with NovaFX Markets?',
    answer:
      'Client funds are held in segregated accounts with tier-1 banks, completely separate from company operating funds. All accounts include negative balance protection, so you can never lose more than your deposit.',
  },
  {
    question: 'Do you offer a demo account?',
    answer:
      'Yes — you can open an unlimited free demo account with virtual funds to practice trading in real market conditions before going live. Demo accounts never expire.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mb-12 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
          Questions? Answered
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="border-t border-border last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

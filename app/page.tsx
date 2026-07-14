import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Markets } from '@/components/site/markets'
import { Accounts } from '@/components/site/accounts'
import { Platforms } from '@/components/site/platforms'
import { Features } from '@/components/site/features'
import { Steps } from '@/components/site/steps'
import { Faq } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Markets />
        <Accounts />
        <Platforms />
        <Features />
        <Steps />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

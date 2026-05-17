import { SkipToContent } from '@/components/layout/SkipToContent'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCta } from '@/components/layout/StickyMobileCta'
import { Hero } from '@/components/sections/Hero'
import { Trust } from '@/components/sections/Trust'
import { Stats } from '@/components/sections/Stats'
import { Problems } from '@/components/sections/Problems'
import { PartnersDuo } from '@/components/sections/PartnersDuo'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { LeadFormSection } from '@/components/sections/LeadFormSection'
import { Faq } from '@/components/sections/Faq'

export default function Home() {
  return (
    <>
      <SkipToContent />
      <Nav />
      <main id="main">
        <Hero />
        <Trust />
        <Stats />
        <Problems />
        <PartnersDuo />
        <HowItWorks />
        <LeadFormSection />
        <Faq />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}

import { Download } from '../components/Download'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { TrackConditions } from '../components/TrackConditions'
import { WhyPawdex } from '../components/WhyPawdex'

export function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <TrackConditions />
      <Features />
      <WhyPawdex />
      <Download />
    </main>
  )
}

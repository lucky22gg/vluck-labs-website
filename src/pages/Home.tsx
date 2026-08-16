import Hero from '../components/Hero'
import CapabilityStrip from '../components/CapabilityStrip'
import Problem from '../components/Problem'
import ProductSection from '../components/ProductSection'
import Architecture from '../components/Architecture'
import Roadmap from '../components/Roadmap'
import About from '../components/About'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilityStrip />
      <Problem />
      <ProductSection />
      <Architecture />
      <Roadmap />
      <About />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

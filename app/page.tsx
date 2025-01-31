import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import FinancialServices from "./components/FinancialServices"
import Solutions from "./components/Solutions"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1B5E20]">
      <Navbar />
      <Hero />
      <Features />
      <FinancialServices />
      <Solutions />
      <Footer />
    </div>
  )
}


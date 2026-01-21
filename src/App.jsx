import './App.css'
import Benefits from './components/Benefits'
import ContactInformation from './components/ContactInformation'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import FooterBar from './components/FooterBar'
import HeroSection from './components/HeroSection'
import NationalParks from './components/NationalParks'
import PlanningDays from './components/PlanningDays'
import PlanningSafari from './components/PlanningSafari'
import SafariStyle from './components/SafariStyle'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <HeroSection />
      <NationalParks />
      <PlanningDays />
      <SafariStyle />
      <PlanningSafari />
      <ContactInformation />
      <Benefits />
      <Testimonial />
      <Experiences />
      <FooterBar />
      <Footer />
    </>
  )
}

export default App

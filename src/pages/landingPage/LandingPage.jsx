import { useRef } from "react";
import HeroSection from './HeroSection';
import NationalParks from './NationalParks';
import PlanningDays from './PlanningDays';
import SafariStyle from './SafariStyle';
import PlanningSafari from './PlanningSafari';
import ContactInformation from './ContactInformation';
import Benefits from './Benefits';
import Testimonial from './Testimonial';
import Experiences from './Experiences';
import FooterBar from './FooterBar';
import Footer from './Footer';

function LandingPage() {
  const parksRef = useRef(null);
  const safariStyleRef = useRef(null);

  const scrollToSafariStyle = () => {
    safariStyleRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <HeroSection />
      <NationalParks /> */}
      <HeroSection scrollToParks={() => {
        parksRef.current?.scrollIntoView({ behavior: "smooth" });
      }} />

      <NationalParks ref={parksRef} />
      {/* <PlanningDays />
      <SafariStyle /> */}
      <PlanningDays scrollToSafariStyle={scrollToSafariStyle} />
      <SafariStyle ref={safariStyleRef} />
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

export default LandingPage

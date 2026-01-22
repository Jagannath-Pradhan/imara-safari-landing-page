// import { useRef } from "react";
// import HeroSection from './HeroSection';
// import NationalParks from './NationalParks';
// import PlanningDays from './PlanningDays';
// import SafariStyle from './SafariStyle';
// import PlanningSafari from './PlanningSafari';
// import ContactInformation from './ContactInformation';
import Benefits from './Benefits';
import Testimonial from './Testimonial';
import Experiences from './Experiences';
import FooterBar from './FooterBar';
import Footer from './Footer';
import LandingForm from './LandingForm';

// function LandingPage() {
//   const parksRef = useRef(null);
//   const safariStyleRef = useRef(null);

//   const scrollToSafariStyle = () => {
//     safariStyleRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {/* <HeroSection />
//       <NationalParks /> */}
//       <HeroSection scrollToParks={() => {
//         parksRef.current?.scrollIntoView({ behavior: "smooth" });
//       }} />

//       <NationalParks ref={parksRef} />
//       {/* <PlanningDays />
//       <SafariStyle /> */}
//       <PlanningDays scrollToSafariStyle={scrollToSafariStyle} />
//       <SafariStyle ref={safariStyleRef} />
//       <PlanningSafari />
//       <ContactInformation />
//       <Benefits />
//       <Testimonial />
//       <Experiences />
//       <FooterBar />
//       <Footer />
//     </>
//   )
// }

// function LandingPage() {
//   const parksRef = useRef(null);
//   const safariStyleRef = useRef(null);
//   const planningSafariRef = useRef(null);

//   const scrollToSafariStyle = () => {
//     safariStyleRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const scrollToPlanningSafari = () => {
//     planningSafariRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <HeroSection
//         scrollToParks={() => {
//           parksRef.current?.scrollIntoView({ behavior: "smooth" });
//         }}
//       />

//       <NationalParks ref={parksRef} />

//       <PlanningDays scrollToSafariStyle={scrollToSafariStyle} />

//       {/* PASS FUNCTION */}
//       <SafariStyle
//         ref={safariStyleRef}
//         scrollToPlanningSafari={scrollToPlanningSafari}
//       />

//       {/* ATTACH REF */}
//       <div ref={planningSafariRef}>
//         <PlanningSafari />
//       </div>

//       <ContactInformation />
//       <Benefits />
//       <Testimonial />
//       <Experiences />
//       <FooterBar />
//       <Footer />
//     </>
//   );
// }

function LandingPage() {
    //   const parksRef = useRef(null);
    //   const safariStyleRef = useRef(null);
    //   const planningSafariRef = useRef(null);
    //   const contactInfoRef = useRef(null); 

    //   const scrollToSafariStyle = () => {
    //     safariStyleRef.current?.scrollIntoView({ behavior: "smooth" });
    //   };

    //   const scrollToPlanningSafari = () => {
    //     planningSafariRef.current?.scrollIntoView({ behavior: "smooth" });
    //   };

    //   const scrollToContactInformation = () => {
    //     contactInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    //   };

    return (
        <>
            {/* <HeroSection
        scrollToParks={() => {
          parksRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <NationalParks ref={parksRef} />

      <PlanningDays scrollToSafariStyle={scrollToSafariStyle} />

      <SafariStyle
        ref={safariStyleRef}
        scrollToPlanningSafari={scrollToPlanningSafari}
      />

      <div ref={planningSafariRef}>
        <PlanningSafari
          scrollToContactInformation={scrollToContactInformation}
        />
      </div>

      <div ref={contactInfoRef}>
        <ContactInformation />
      </div> */}

            <LandingForm />
            <Benefits />
            <Testimonial />
            <Experiences />
            <FooterBar />
            <Footer />
        </>
    );
}

export default LandingPage

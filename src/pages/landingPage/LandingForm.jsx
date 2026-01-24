import { useRef, useState } from "react";
import HeroSection from './HeroSection';
import NationalParks from './NationalParks';
import PlanningDays from './PlanningDays';
import SafariStyle from './SafariStyle';
import PlanningSafari from './PlanningSafari';
import ContactInformation from './ContactInformation';

const LandingForm = () => {
  const parksRef = useRef(null);
  const safariStyleRef = useRef(null);
  const planningSafariRef = useRef(null);
  const contactInfoRef = useRef(null);

  // CENTRAL FORM STATE
  const [formData, setFormData] = useState({
    parks: [],
    planningDays: "",
    safariStyle: "",
    travelDate: null,
    contact: {}
  });

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleFinalSubmit = (contactData) => {
    const finalData = {
      ...formData,
      contact: contactData
    };
    console.log("FINAL FORM DATA", finalData);
  };

  return (
    <>
      <HeroSection scrollToParks={() => parksRef.current?.scrollIntoView({ behavior: "smooth" })} />

      <NationalParks
        ref={parksRef}
        onChange={(parks) => updateFormData("parks", parks)}
      />

      <PlanningDays
        onChange={(day) => updateFormData("planningDays", day)}
        scrollToSafariStyle={() => safariStyleRef.current?.scrollIntoView({ behavior: "smooth" })}
      />

      <SafariStyle
        ref={safariStyleRef}
        onChange={(style) => updateFormData("safariStyle", style)}
        scrollToPlanningSafari={() => planningSafariRef.current?.scrollIntoView({ behavior: "smooth" })}
      />

      <div ref={planningSafariRef}>
        <PlanningSafari
          onChange={(date) => updateFormData("travelDate", date)}
          scrollToContactInformation={() => contactInfoRef.current?.scrollIntoView({ behavior: "smooth" })}
        />
      </div>

      <div ref={contactInfoRef}>
        <ContactInformation onSubmit={handleFinalSubmit} />
      </div>
    </>
  );
};

export default LandingForm;

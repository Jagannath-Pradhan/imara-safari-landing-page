import { useRef } from "react";
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

    const scrollToSafariStyle = () => {
        safariStyleRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToPlanningSafari = () => {
        planningSafariRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContactInformation = () => {
        contactInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <HeroSection
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
                    scrollToContactInformation={scrollToContactInformation} // PASS
                />
            </div>

            {/* ATTACH REF */}
            <div ref={contactInfoRef}>
                <ContactInformation />
            </div>
        </>
    )
}

export default LandingForm
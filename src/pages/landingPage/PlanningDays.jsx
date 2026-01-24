import { useState } from "react";
import { Check } from "lucide-react";

const PlanningDays = ({ scrollToSafariStyle, onChange }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    const days = [
        {
            id: 1,
            name: "4 to 6 Days",
            image: "/images/planning-days/4-6-days.webp"
        },
        {
            id: 2,
            name: "6 to 8 Days",
            image: "/images/planning-days/6-8-days.webp"
        },
        {
            id: 3,
            name: "8 to 10 Days",
            image: "/images/planning-days/8-10-days.webp"
        },
        {
            id: 4,
            name: "12+ Days",
            image: "/images/planning-days/12-plus-days.webp"
        }
    ];

    // const handleDayClick = (dayId) => {
    //     setSelectedDay(dayId);
    //     scrollToSafariStyle(); //  keep existing behavior
    // };

    // const isDaySelected = (dayId) => selectedDay === dayId;


    const handleDayClick = (day) => {
        setSelectedDay(day.id);   // UI state
        onChange(day.name);       // ✅ SEND TO PARENT
        console.log(day.name)
        scrollToSafariStyle();    // keep existing behavior
    };

    const isDaySelected = (dayId) => selectedDay === dayId;

    return (
        <section className="planning-days-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h3 className="text-capitalize">
                            2. How many days are you planning for your Tanzania safari?
                        </h3>
                        <p>
                            Select the duration that best fits your schedule and interests.
                        </p>
                    </div>

                    {days.map((day) => (
                        <div
                            key={day.id}
                            className="col-sm-6 col-lg-3 mb-4 d-flex"
                        >
                            <div
                                className="card shadow park-card h-100 d-flex flex-column"
                                onClick={() => handleDayClick(day)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="park-img-wrapper position-relative">
                                    <img
                                        src={day.image}
                                        className="card-img-top park-img"
                                        alt={`${day.name} image`}
                                    />

                                    {/* Tick overlay when selected */}
                                    {isDaySelected(day.id) && (
                                        <div
                                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "70px",
                                                    height: "70px",
                                                    backgroundColor: "#f8f9faa8",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                                                }}
                                            >
                                                <Check
                                                    size={50}
                                                    strokeWidth={4}
                                                    style={{ color: "#d87028" }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center text-uppercase">
                                        {day.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlanningDays;

import { forwardRef, useState, useEffect } from "react";
import { Check } from "lucide-react";

const NationalParks = forwardRef(({ onChange }, ref) => {
    const [selectedParks, setSelectedParks] = useState([]);

    const parks = [
        {
            id: 1,
            name: "Serengeti",
            image: "/images/national-parks/serengeti.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 2,
            name: "Ngorongoro Crater",
            image: "/images/national-parks/ngorongoro-crater.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 3,
            name: "Tarangire",
            image: "/images/national-parks/tarangire.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 4,
            name: "Lake Manyara",
            image: "/images/national-parks/lake-manyara.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 5,
            name: "Arusha",
            image: "/images/national-parks/arusha.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 6,
            name: "Kilimanjaro",
            image: "/images/national-parks/kilimanjaro.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 7,
            name: "Zanzibar",
            image: "/images/national-parks/zanzibar.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat",
        },
        {
            id: 8,
            name: "Not Sure / Other",
            image: "/images/national-parks/not-sure.webp",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaeratn you.",
        }
    ];

    const handleParkClick = (parkName) => {
        setSelectedParks(prev =>
            prev.includes(parkName)
                ? prev.filter(p => p !== parkName)
                : [...prev, parkName]
        );
    };

    // SYNC TO PARENT SAFELY
    useEffect(() => {
        onChange(selectedParks);
        console.log(selectedParks)
    }, [selectedParks, onChange]);

    return (
        <>
            <section className="national-parks-section py-lg-5 py-4 bg-theme-light" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h3 className="text-capitalize">
                                1. Which national parks would you like to visit?
                            </h3>
                            <p>
                                Please select the national parks in Tanzania that you would like to visit.
                                If you would like advice, please choose the last option.
                            </p>
                        </div>
                        {parks.map((park) => (
                            <div
                                key={park.id}
                                className="col-6 col-lg-3 mb-4 d-flex"
                            >
                                <div
                                    className={`card shadow h-100 d-flex flex-column park-card ${selectedParks.includes(park.name) ? 'selected' : ''}`}
                                    onClick={() => handleParkClick(park.name)}
                                >
                                    <div className="park-img-wrapper position-relative">
                                        <img
                                            src={park.image}
                                            className="w-100 h-100 park-img"
                                            alt={`${park.name} image`}
                                            style={{ objectFit: "cover" }}
                                        />

                                        {/* Overlay layer when selected - ONLY ON IMAGE */}
                                        {selectedParks.includes(park.name) && (
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
                                                        strokeWidth={5}
                                                        style={{
                                                            color: "#d87028",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Body with Sliding Layer Effect */}
                                    <div className="park-card-body-wrapper">
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-center text-uppercase mb-3" style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "600",
                                                letterSpacing: "0.5px"
                                            }}>
                                                {park.name}
                                            </h5>
                                            <p className="card-text text-center" style={{
                                                fontSize: "0.9rem",
                                                lineHeight: "1.5",
                                                margin: 0
                                            }}>
                                                {park.description}
                                            </p>
                                        </div>

                                        {/* Sliding overlay on card-body */}
                                        <div className="card-body-overlay">
                                            <div className="overlay-text-content">
                                                <h5 className="text-uppercase mb-2" style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: "600",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {park.name}
                                                </h5>
                                                <p style={{
                                                    fontSize: "0.9rem",
                                                    lineHeight: "1.5",
                                                    margin: 0
                                                }}>
                                                    {park.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
});

export default NationalParks;
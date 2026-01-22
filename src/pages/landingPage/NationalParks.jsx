import { forwardRef } from "react";

const NationalParks = forwardRef((props, ref) => {

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
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaeratn for you.",
        }
    ];

    return (
        <section className="national-parks-section py-5 bg-theme-light" ref={ref}>
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
                            className="col-sm-6 col-lg-3 mb-4 d-flex"
                        >
                            <div className="card shadow park-card h-100 d-flex flex-column">
                                <div className="park-img-wrapper">
                                    <img
                                        src={park.image}
                                        className="card-img-top park-img"
                                        alt={`${park.name} image`}
                                    />
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center text-uppercase">
                                        {park.name}
                                    </h5>
                                    <p className="card-text">
                                        {park.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default NationalParks;

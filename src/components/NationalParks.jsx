const NationalParks = () => {
    const parks = [
        {
            id: 1,
            name: "Serengeti",
            image: "/images/national-parks/serengeti.webp",
            description:
                "The Serengeti is synonymous with incredible safaris and is perfect for exciting game drives.",
        },
        {
            id: 2,
            name: "Ngorongoro Crater",
            image: "/images/national-parks/ngorongoro-crater.webp",
            description:
                "A unique safari destination that offers excellent opportunities for wildlife viewing.",
        },
        {
            id: 3,
            name: "Tarangire",
            image: "/images/national-parks/tarangire.webp",
            description:
                "A diverse wilderness of riverine forests, swamps, and mixed woodlands featuring the famous baobab trees.",
        },
        {
            id: 4,
            name: "Lake Manyara",
            image: "/images/national-parks/lake-manyara.webp",
            description:
                "Part of the famous Northern Safari Circuit and offers excellent opportunities to spot wildlife in a diverse landscape.",
        },
        {
            id: 5,
            name: "Arusha",
            image: "/images/national-parks/arusha.webp",
            description:
                "A popular excursion destination near the city of Arusha, featuring diverse landscapes.",
        },
        {
            id: 6,
            name: "Kilimanjaro",
            image: "/images/national-parks/kilimanjaro.webp",
            description:
                "Whether you admire its impressive height or long to climb its icy summit, Mount Kilimanjaro will fascinate you from every perspective.",
        },
        {
            id: 7,
            name: "Zanzibar",
            image: "/images/national-parks/zanzibar.webp",
            description:
                "A stunning beach destination for relaxation and exploration.",
        },
        {
            id: 8,
            name: "Not Sure / Other",
            image: "/images/national-parks/not-sure.webp",
            description:
                "If you’re interested in other national parks or are not yet certain about your destinations, our experts will be happy to create a tailor-made travel plan for you.",
        },
    ];

    return (
        <section className="national-parks-section py-5 bg-theme-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="text-capitalize">
                            1. Which national parks would you like to visit?
                        </h1>
                        <p className="text-secondary fs-5">
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
                                    <p className="card-text text-secondary">
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
};

export default NationalParks;

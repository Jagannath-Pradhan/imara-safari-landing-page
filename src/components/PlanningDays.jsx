const PlanningDays = ({scrollToSafariStyle }) => {
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

    return (
        <section className="planning-days-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2 className="text-capitalize">
                            2. How many days are you planning for your Tanzania safari?
                        </h2>
                        <p>
                            Select the duration that best fits your schedule and interests.
                        </p>
                    </div>

                    {days.map((day) => (
                        <div
                            key={day.id}
                            className="col-sm-6 col-lg-3 mb-4 d-flex"
                        >
                            <div className="card shadow park-card h-100 d-flex flex-column" onClick={scrollToSafariStyle}>
                                <div className="park-img-wrapper">
                                    <img
                                        src={day.image}
                                        className="card-img-top park-img"
                                        alt={`${day.name} image`}
                                    />
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

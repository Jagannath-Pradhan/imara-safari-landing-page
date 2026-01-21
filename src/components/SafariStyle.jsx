const SafariStyle = () => {
    const safariStyles = [
        {
            id: 1,
            name: "Budget",
            image: "/images/safari-style/budget.webp"
        },
        {
            id: 2,
            name: "Economy",
            image: "/images/safari-style/economy.webp"
        },
        {
            id: 3,
            name: "Luxury",
            image: "/images/safari-style/luxury.webp"
        },
        {
            id: 4,
            name: "Not decided yet",
            image: "/images/safari-style/not-decided.webp"
        }
    ];

    return (
        <section className="safari-style-section py-5 bg-theme-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="text-capitalize">
                            3. Which safari style do you prefer?
                        </h1>
                        <p className="text-secondary fs-5">
                            Tell us your preferences, and we’ll create your dream safari.
                        </p>
                    </div>

                    {safariStyles.map((safariStyle) => (
                        <div
                            key={safariStyle.id}
                            className="col-sm-6 col-lg-3 mb-4 d-flex"
                        >
                            <div className="card shadow park-card h-100 d-flex flex-column">
                                <div className="park-img-wrapper">
                                    <img
                                        src={safariStyle.image}
                                        className="card-img-top park-img"
                                        alt={`${safariStyle.name} image`}
                                    />
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center text-uppercase">
                                        {safariStyle.name}
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

export default SafariStyle;
const Benefits = () => {
    const benefitsData = [
        {
            id: 1,
            title: "Transparent Prices",
            image: "/images/benefits/transparent-prices.png",
            description:
                "We provide price information on our website so you can get a complete overview. Our team is also happy to assist you in explaining all aspects of your travel costs. This way, you can prepare well for your vacation and make informed decisions.",
        },
        {
            id: 2,
            title: "You Save Time",
            image: "/images/benefits/save-time.png",
            description:
                "Planning a trip can be very time-consuming. We take care of the entire process for you and create a customized travel plan based on your preferences. This way, you'll get your dream trip without having to spend hours researching and planning.",
        },
        {
            id: 3,
            title: "We Love What We Do!",
            image: "/images/benefits/we-love-what-we-do.png",
            description:
                "Every member of the Fahamu Safaris team is dedicated to making your dream of a Tanzania trip come true. Our passion for what we do is reflected in every detail of our carefully planned tours, ensuring you an unforgettable experience.",
        },
        {
            id: 4,
            title: "Our Experience",
            image: "/images/benefits/our-experience.png",
            description:
                "Experience and expertise are essential for a first-class and authentic vacation. As experts, we provide you with personalized travel planning and access to unique experiences. Our team shares stories and valuable advice to make your journey truly special.",
        },
    ];

    return (
        <section className="benefits-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5 text-center">
                        <h3 className="text-capitalize text-theme" style={{ letterSpacing: "1px", lineHeight: "1" }}>
                            Your Benefits
                        </h3>
                        <h1
                            className="text-uppercase fw-bold"
                        >
                            Relax and Enjoy Your Vacation
                        </h1>
                    </div>
                </div>

                <div className="row g-4">
                    {benefitsData.map((benefit) => (
                        <div key={benefit.id} className="col-lg-6 col-md-6">
                            <div className="benefit-card d-flex align-items-start">
                                <div className="benefit-icon-wrapper">
                                    <div className="benefit-icon">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <div className="benefit-content">
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                    <p className="benefit-description">
                                        {benefit.description}
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

export default Benefits;

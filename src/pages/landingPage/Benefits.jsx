const Benefits = () => {
    const benefitsData = [
        {
            id: 1,
            title: "Transparent Prices",
            image: "/images/benefits/transparent-prices.png",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda blanditiis accusantium doloribus minus temporibus sint vero saepe, laborum iusto, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat, aliquid perferendis provident dicta.",
        },
        {
            id: 2,
            title: "You Save Time",
            image: "/images/benefits/save-time.png",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda blanditiis accusantium doloribus minus temporibus sint vero saepe, laborum iusto, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat, aliquid perferendis provident dicta.",
        },
        {
            id: 3,
            title: "We Love What We Do!",
            image: "/images/benefits/we-love-what-we-do.png",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda blanditiis accusantium doloribus minus temporibus sint vero saepe, laborum iusto, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat, aliquid perferendis provident dicta.",
        },
        {
            id: 4,
            title: "Our Experience",
            image: "/images/benefits/our-experience.png",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda blanditiis accusantium doloribus minus temporibus sint vero saepe, laborum iusto, in eaque. Pariatur expedita quod, recusandae quae, numquam voluptatem modi quaerat, aliquid perferendis provident dicta.",
        },
    ];

    return (
        <section className="benefits-section py-lg-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-lg-5 mb-1 text-center">
                        <h3 className="text-capitalize text-theme" style={{ letterSpacing: "1px", lineHeight: "1" }}>
                            Your Benefits
                        </h3>
                        <h2 className="text-uppercase">
                            Relax and Enjoy Your Vacation
                        </h2>
                    </div>
                </div>

                <div className="row g-lg-4 g-2">
                    {benefitsData.map((benefit) => (
                        <div key={benefit.id} className="col-lg-6 col-md-6">
                            <div className="benefit-card d-flex align-items-lg-start">
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
                                    <h4 className="benefit-title">{benefit.title}</h4>
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

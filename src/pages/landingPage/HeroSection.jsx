const HeroSection = ({ scrollToParks }) => {
    return (
        <header className="hero-section-container position-relative text-white" >
            <div className="makklo_jsd">
                <div className="imara-landing-logo">
                    <img src="./images/imaralogo.png" alt="imara-logo" />
                </div>
            </div>
            <img
                src="/images/banner-img-12.jpg"
                className="img-fluid w-100"
                alt="hero-img"
            />

            {/* Dark overlay */}
            {/* <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            ></div> */}

            {/* Text Content */}
            <div className="hero-text position-absolute top-50 start-50 translate-middle text-center">
                {/* <h1 className="fw-bold text-uppercase d-none d-lg-block text-nowrap">
                    Your Tanzania Safari Begins Here
                </h1>

                <h1 className="fw-bold text-uppercase d-lg-none">
                    Your Tanzania Safari Begins Here
                </h1>

                <p className="fw-bold mt-4 d-none d-md-block text-white">
                    From stunning national parks to majestic mountains and pristine white sand beaches
                </p> */}

                {/* Heading */}
                {/* <h1 className="fw-bold text-uppercase text-nowrap">
                    Your Tanzania Safari Begins Here
                </h1> */}


                <h1 className="fw-bold text-uppercase text-center">
                    <span className="d-none d-sm-inline text-nowrap">
                        Plan Your Tanzania Safari Here
                    </span>

                    <span className="d-inline d-sm-none">
                        Plan Your Tanzania <br />
                        Safari Here
                    </span>
                </h1>

                {/* Description */}
                <p className="fw-bold text-white mt-3">
                    Tailor-made safari journeys across Tanzania guided by timing landscapes and expertise.
                </p>

                <button
                    id="scrollDownButton"
                    // className="scroll-button d-none d-md-block"
                    className="scroll-button mt-3"
                    onClick={scrollToParks}
                >
                    ▼
                </button>
            </div>
        </header>
    );
};

export default HeroSection;
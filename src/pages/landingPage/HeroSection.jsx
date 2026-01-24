const HeroSection = ({scrollToParks }) => {
    return (
        <header className="hero-section-container position-relative text-white" >
            <img
                src="/images/imara_banner_img.webp"
                className="img-fluid w-100"
                alt="hero-img"
            />

            {/* Dark overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            ></div>

            {/* Text Content */}
            <div className="hero-text position-absolute top-50 start-50 translate-middle text-center px-3">
                <h1 className="fw-bold text-uppercase d-none d-lg-block text-nowrap">
                    Your Tanzania Safari Begins Here
                </h1>

                {/* Mobile heading (allows wrap) */}
                <h1 className="fw-bold text-uppercase d-lg-none">
                    Your Tanzania Safari Begins Here
                </h1>

                <p className="fw-bold mt-4 d-none d-md-block text-white">
                    From stunning national parks to majestic mountains and pristine white sand beaches
                </p>

                <button
                    id="scrollDownButton"
                    className="scroll-button d-none d-md-block"
                    onClick={scrollToParks}
                >
                    ▼
                </button>
            </div>
        </header>
    );
};

export default HeroSection;
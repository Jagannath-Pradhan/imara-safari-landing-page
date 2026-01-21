const HeroSection = () => {
    return (
        <header className="hero-section-container position-relative text-white">
            {/* Background image */}
            <img
                src="/images/hero-img.jpg"
                className="img-fluid w-100"
                alt="hero-img"
            />

            {/* Dark overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            ></div>

            {/* Text */}
            <div className="position-absolute top-50 start-50 translate-middle text-center px-3">
                <h1 className="fw-bold text-uppercase">
                    Your Tanzania Safari Begins Here
                </h1>
                <p className="lead fw-bold mt-5 d-none d-md-block">
                    From stunning national parks to majestic mountains and pristine white sand beaches
                </p>
            <button id="scrollDownButton" className="scroll-button d-none d-md-block">▼</button>
            </div>
        </header>
    );
};

export default HeroSection;

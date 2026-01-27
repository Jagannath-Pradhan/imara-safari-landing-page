import { MdWhatsapp } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="sticky-top">
      {/* Top Info Bar */}
      <div className="top-info-bar bg-light py-2">
        <div className="container-fluid pe-5">
          <div className="d-flex justify-content-end">
            <a href="#contact" className="text-decoration-none text-dark me-4 small">Contact us</a>
            <a href="#tanzania-guide" className="text-decoration-none text-dark me-4 small">Tanzania Travel Guide</a>
            <a href="#kilimanjaro-guide" className="text-decoration-none text-dark small">Kilimanjaro Guide</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
        <div className="container-fluid pe-5">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img 
              src="/images/imaralogo.png" 
              alt="Imara Kileleni Safaris Logo" 
              height="50"
              className="d-inline-block align-top"
            />
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent" 
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-uppercase" href="#destinations">
                  DESTINATIONS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark text-uppercase" href="#safari">
                  SAFARI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark text-uppercase" href="#kilimanjaro">
                  KILIMANJARO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark text-uppercase" href="#zanzibar">
                  ZANZIBAR
                </a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle fw-semibold text-dark text-uppercase" 
                  href="#travel-styles" 
                  id="travelStylesDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  TRAVEL STYLES
                </a>
                <ul className="dropdown-menu" aria-labelledby="travelStylesDropdown">
                  <li><a className="dropdown-item" href="#luxury">Luxury Tours</a></li>
                  <li><a className="dropdown-item" href="#budget">Budget Tours</a></li>
                  <li><a className="dropdown-item" href="#family">Family Tours</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle fw-semibold text-dark text-uppercase" 
                  href="#about" 
                  id="aboutDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  ABOUT IMARA
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item" href="#our-story">Our Story</a></li>
                  <li><a className="dropdown-item" href="#team">Our Team</a></li>
                  <li><a className="dropdown-item" href="#reviews">Reviews</a></li>
                </ul>
              </li>
              <li className="nav-item ms-3">
                <a 
                  href="#whatsapp" 
                  className="btn btn-outline-success rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  {/* <i className="bi bi-whatsapp fs-5"></i> */}
                  <MdWhatsapp />
                </a>
              </li>
              <li className="nav-item ms-2">
                <a 
                  href="#view-trips" 
                  className="btn btn-warning text-white fw-bold px-4 py-2"
                  style={{ backgroundColor: '#FF8C42', border: 'none' }}
                >
                  VIEW TRIPS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
function ThankYouPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #d87028 0%, #8b6f47 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card shadow-lg" style={{
              borderRadius: '20px',
              border: 'none'
            }}>
              <div className="card-body p-4 p-md-5 text-center">
                {/* Logo Section */}
                <div className="mb-4">
                  <svg viewBox="0 0 400 150" style={{ maxWidth: '100%', height: 'auto' }}>
                    {/* Green Circle Background */}
                    <circle cx="320" cy="75" r="60" fill="#6ec89b" opacity="0.8"/>
                    
                    {/* Acacia Tree */}
                    <g>
                      {/* Tree Trunk */}
                      <rect x="100" y="80" width="8" height="40" fill="#2c2c2c"/>
                      
                      {/* Tree Canopy */}
                      <ellipse cx="104" cy="65" rx="60" ry="25" fill="#2c2c2c"/>
                      <ellipse cx="90" cy="55" rx="45" ry="20" fill="#2c2c2c"/>
                      <ellipse cx="120" cy="50" rx="40" ry="18" fill="#2c2c2c"/>
                      
                      {/* Bird */}
                      <path d="M 340 60 Q 345 58 350 60" stroke="#2c2c2c" strokeWidth="2" fill="none"/>
                      <path d="M 345 60 Q 340 62 335 60" stroke="#2c2c2c" strokeWidth="2" fill="none"/>
                    </g>
                    
                    {/* Text */}
                    <text x="200" y="130" fontFamily="Arial, sans-serif" fontSize="24" fill="#2c2c2c" textAnchor="middle" letterSpacing="2">
                      IMARA SAFARIS
                    </text>
                  </svg>
                </div>

                {/* Thank You Heading */}
                <h1 className="mb-4" style={{
                  color: '#d87028',
                  fontWeight: 'bold',
                  fontSize: 'clamp(2rem, 5vw, 3rem)'
                }}>
                  Thank you!
                </h1>

                {/* Message */}
                <p className="mb-4 px-md-3" style={{
                  color: '#2c2c2c',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  lineHeight: '1.6'
                }}>
                  Thank you for your request! Our team is excited to turn your dream vacation into reality. We'll be in touch shortly to start creating your unforgettable Tanzania adventure!
                </p>

                {/* Button */}
                <button 
                  className="btn btn-lg mt-3"
                  style={{
                    backgroundColor: '#d87028',
                    color: 'white',
                    border: 'none',
                    padding: '12px 40px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#d36517'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#d87028'}
                  onClick={() => window.location.href = '/'}
                >
                  BACK TO HOMEPAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
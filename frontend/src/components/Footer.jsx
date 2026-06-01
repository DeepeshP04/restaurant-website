import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        paddingTop: "60px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        {/* Footer Content */}
        <div className="row g-4 mb-5">
          {/* About Section */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5
              className="fw-bold mb-4"
              style={{ color: "#ff6b35", fontSize: "1.1rem" }}
            >
              About Us
            </h5>
            <p style={{ lineHeight: "1.8", fontSize: "0.9rem", color: "#fff" }}>
              Welcome to our restaurant. We serve the finest food with
              exceptional service and a warm atmosphere that makes every visit
              memorable.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5
              className="fw-bold mb-4"
              style={{ color: "#ff6b35", fontSize: "1.1rem" }}
            >
              Opening Hours
            </h5>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "0.9rem",
                color: "#fff",
                lineHeight: "1.8",
              }}
            >
              <li>
                <strong>Monday - Friday:</strong> 11:00 AM - 11:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 12:00 PM - 12:00 AM
              </li>
              <li>
                <strong>Sunday:</strong> 12:00 PM - 10:00 PM
              </li>
              <li style={{ marginTop: "10px" }}>
                <span style={{ color: "#ff6b35", fontWeight: "bold" }}>
                  Closed on Holidays
                </span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5
              className="fw-bold mb-4"
              style={{ color: "#ff6b35", fontSize: "1.1rem" }}
            >
              Address
            </h5>
            <p style={{ lineHeight: "1.8", fontSize: "0.9rem", color: "#fff" }}>
              <strong>Restaurant Name</strong>
              <br />
              123 Main Street
              <br />
              Downtown District
              <br />
              City, State 12345
              <br />
              Country
            </p>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5
              className="fw-bold mb-4"
              style={{ color: "#ff6b35", fontSize: "1.1rem" }}
            >
              Contact Us
            </h5>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "0.9rem",
                color: "#fff",
                lineHeight: "2",
              }}
            >
              <li>
                <strong>Phone:</strong>
                <br />
                <a
                  href="tel:+1234567890"
                  style={{ color: "#ff6b35", textDecoration: "none" }}
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:info@restaurant.com"
                  style={{ color: "#ff6b35", textDecoration: "none" }}
                >
                  info@restaurant.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#444", margin: "40px 0" }} />

        {/* Social Media and Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 text-center text-md-start mb-3 mb-md-0">
            <p style={{ fontSize: "0.85rem", color: "#fff", margin: 0 }}>
              © {currentYear} Restaurant. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center text-md-end">
            {/* <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', justifyContent: 'flex-end' }}>
              <a href="#" style={{ color: '#ff6b35', textDecoration: 'none', fontSize: '0.85rem' }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: '#ff6b35', textDecoration: 'none', fontSize: '0.85rem' }}>
                Terms of Service
              </a>
              <a href="#" style={{ color: '#ff6b35', textDecoration: 'none', fontSize: '0.85rem' }}>
                Sitemap
              </a>
            </div> */}
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

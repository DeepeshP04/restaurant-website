import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch for reservations, inquiries, and special requests</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Left - Form */}
            <div className="contact-form-block">
              <h5 className="section-title">Get in Touch</h5>
              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>

            {/* Right - Information */}
            <div className="contact-info-container">
              {/* Contact Information */}
              <div className="info-block">
                <h5 className="section-title">Contact Information</h5>
                <div className="info-content">
                  <p><strong>📞 Phone:</strong> +1 (234) 567-890</p>
                  <p><strong>📧 Email:</strong> info@restaurant.com</p>
                  <p><strong>📍 Address:</strong> 123 Main Street, City, State 12345</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="info-block">
                <h5 className="section-title">Working Hours</h5>
                <div className="info-content">
                  <p><strong>Mon-Fri:</strong> 11:00 AM - 11:00 PM</p>
                  <p><strong>Saturday:</strong> 12:00 PM - 12:00 AM</p>
                  <p><strong>Sunday:</strong> 12:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

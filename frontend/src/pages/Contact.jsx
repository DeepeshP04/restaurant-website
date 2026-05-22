function Contact() {
  return (
    <div className="main-content" style={{ minHeight: '70vh', paddingTop: '40px' }}>
      <div className="container">
        <h1 className="mb-4">Contact Us</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: '#ff6b35' }}>Get in Touch</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: '#ff6b35', color: 'white' }}>
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold mb-3" style={{ color: '#ff6b35' }}>Contact Information</h5>
            <p>
              <strong>Phone:</strong> +1 (234) 567-890<br />
              <strong>Email:</strong> info@restaurant.com<br />
              <strong>Address:</strong> 123 Main Street, City, State 12345<br />
              <strong>Hours:</strong> Mon-Fri 11am-11pm, Sat 12pm-12am, Sun 12pm-10pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

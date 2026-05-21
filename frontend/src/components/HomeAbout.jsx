function HomeAbout() {
  return (
    <section className="home-about py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-3">About Us</h2>
            
            <p className="lead mb-3">
              Welcome to our restaurant, where culinary excellence meets warm hospitality. We pride ourselves on serving the finest dishes prepared with fresh, locally-sourced ingredients.
            </p>

            <p className="mb-3">
              Our passionate team of chefs brings years of experience and creativity to every plate we serve. From traditional recipes to innovative creations, we offer a diverse menu that caters to all tastes and preferences.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-column gap-2" style={{ height: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop"
                alt="Delicious Food"
                className="img-fluid rounded flex-grow-1"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;

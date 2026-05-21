function HomeAbout() {
  return (
    <section className="home-about py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Image */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://via.placeholder.com/500x400?text=Restaurant+Image"
              alt="Restaurant"
              className="img-fluid rounded"
            />
          </div>

          {/* Right side - Text */}
          <div className="col-lg-6 col-md-12">
            <h2 className="display-5 fw-bold mb-3">Restaurant</h2>
            <h4 className="text-muted mb-4">About Us</h4>
            
            <p className="lead mb-3">
              Welcome to our restaurant, where culinary excellence meets warm hospitality. We pride ourselves on serving the finest dishes prepared with fresh, locally-sourced ingredients.
            </p>

            <p className="mb-3">
              Our passionate team of chefs brings years of experience and creativity to every plate we serve. From traditional recipes to innovative creations, we offer a diverse menu that caters to all tastes and preferences.
            </p>

            <p className="mb-4">
              Whether you're celebrating a special occasion or simply enjoying a meal with loved ones, our restaurant provides the perfect ambiance and service to make your dining experience unforgettable.
            </p>

            <button className="btn btn-primary btn-lg">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;

import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  const services = [
    {
      id: 1,
      icon: "🍽️",
      title: "Fine Dining",
      description: "Experience exquisite culinary delights in our elegant dining space",
    },
    {
      id: 2,
      icon: "🎉",
      title: "Private Events",
      description: "Host your special occasions in our beautifully decorated venues",
    },
    {
      id: 3,
      icon: "🚚",
      title: "Catering Services",
      description: "Professional catering for corporate events and celebrations",
    },
    {
      id: 4,
      icon: "👨‍🍳",
      title: "Chef's Table",
      description: "Exclusive dining experience with our award-winning chefs",
    },
    {
      id: 5,
      icon: "📅",
      title: "Reservations",
      description: "Easy online booking for seamless dining reservations",
    },
    {
      id: 6,
      icon: "🎓",
      title: "Culinary Classes",
      description: "Learn cooking techniques from our experienced culinary team",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover the story behind our passion for exceptional cuisine and hospitality</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2015, our restaurant has been a beacon of culinary excellence in the heart of the city. 
                What started as a small family venture has grown into a renowned establishment known for its 
                commitment to quality, innovation, and exceptional service.
              </p>
              <p>
                Our journey began with a simple vision: to create a space where people could gather, celebrate, 
                and enjoy authentic flavors prepared with love and expertise. Every dish that leaves our kitchen 
                tells a story of dedication, passion, and a deep respect for culinary traditions.
              </p>
              <p>
                Today, we pride ourselves on sourcing the finest ingredients, employing talented chefs, and 
                maintaining the highest standards of hospitality. Our restaurant has become more than just a 
                place to eat – it's a destination for unforgettable experiences and lasting memories.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1504674900967-6e5ad14a7a0a?q=80&w=800&auto=format&fit=crop" 
                alt="Restaurant Interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive dining and hospitality experiences tailored to your needs</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Excellence?</h2>
          <p>Book your table or contact us for special events and catering inquiries</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Book a Table</button>
            <Link className="btn btn-secondary" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

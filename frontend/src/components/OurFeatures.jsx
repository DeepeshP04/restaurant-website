function OurFeatures() {
  const features = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
      heading: 'Fresh Ingredients',
      description: 'We use only the finest and freshest ingredients sourced locally to ensure quality and taste in every dish we serve.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
      heading: 'Expert Chefs',
      description: 'Our team of experienced chefs brings culinary expertise and passion to create unforgettable dining experiences for our guests.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop',
      heading: 'Premium Service',
      description: 'We pride ourselves on delivering exceptional customer service with attention to detail and a commitment to your satisfaction.'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Heading and Subheading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>
            Our Features
          </h2>
          <p className="lead text-muted" style={{ fontSize: '1.2rem' }}>
            Discover what makes us special and unique in the culinary world
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map(feature => (
            <div key={feature.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center p-4">
                  {/* Image/Icon */}
                  <div className="mb-3" style={{ overflow: 'hidden', borderRadius: '8px', height: '250px' }}>
                    <img 
                      src={feature.image} 
                      alt={feature.heading}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Heading */}
                  <h5 className="card-title fw-bold mb-3" style={{ color: '#ff6b35', fontSize: '1.3rem' }}>
                    {feature.heading}
                  </h5>

                  {/* Description */}
                  <p className="card-text text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;

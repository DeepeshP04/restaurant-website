function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      review: 'Amazing experience! The food was absolutely delicious and the service was impeccable. I highly recommend this restaurant to everyone.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      review: 'Fantastic place with wonderful ambiance. The chef really knows how to create magic with flavors. Will definitely come back!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Wilson',
      review: 'Best dining experience I have had in a long time. The staff was friendly and attentive. Highly satisfied!',
      rating: 4
    },
    {
      id: 4,
      name: 'James Anderson',
      review: 'Exceptional quality food and excellent service. The presentation was beautiful and everything tasted fresh. Worth every penny!',
      rating: 5
    },
    // {
    //   id: 5,
    //   name: 'Lisa Martinez',
    //   review: 'A gem of a restaurant! Every dish was prepared with care and attention. The flavors were outstanding!',
    //   rating: 5
    // },
    // {
    //   id: 6,
    //   name: 'David Brown',
    //   review: 'Great atmosphere and delicious food. The prices are reasonable for the quality. Definitely coming back soon.',
    //   rating: 4
    // }
  ];

  const renderStars = (rating) => {
    return (
      <div style={{ color: '#ffc107', fontSize: '1.1rem' }}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
    );
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        {/* Heading and Subheading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>
            What Our Guests Say
          </h2>
          <p className="lead text-muted" style={{ fontSize: '1.2rem' }}>
            Read reviews from our satisfied customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="row g-4">
          {reviews.map(review => (
            <div key={review.id} className="col-lg-6 col-md-12">
              <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#fff8f3', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body p-4">
                  {/* Stars Rating */}
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="card-text" style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
                    "{review.review}"
                  </p>

                  {/* Customer Name */}
                  <h6 className="card-title fw-bold" style={{ color: '#ff6b35', fontSize: '1.05rem' }}>
                    — {review.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;

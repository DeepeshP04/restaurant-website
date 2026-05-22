import { useState } from 'react';
import './HomeReservation.css';

function HomeReservation() {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    time: '',
    email: '',
    phone: '',
    guests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - send data to email or backend
    console.log('Reservation Data:', formData);
    // Reset form
    setFormData({
      date: '',
      name: '',
      time: '',
      email: '',
      phone: '',
      guests: ''
    });
    alert('Thank you for your reservation request! We will reach out soon.');
  };

  return (
    <section className="reservation-section">
      <div className="reservation-container">
        <h2 className="reservation-heading">Reservations</h2>
        <p className="reservation-subheading">
          Book a table online. Leads will reach in your email.
        </p>

        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="20"
                placeholder="2"
                required
              />
            </div>
          </div>

          <button type="submit" className="reservation-btn">
            Reserve Now
          </button>
        </form>

        <p className="reservation-call">
          You can also call: <strong>+1 (555) 123-4567</strong> to make a reservation.
        </p>
      </div>
    </section>
  );
}

export default HomeReservation;

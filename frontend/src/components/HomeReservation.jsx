import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './HomeReservation.css';

// Initialize EmailJS with your public key
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

function HomeReservation() {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    time: '',
    email: '',
    phone: '',
    guests: '',
    occasion: '',
    dietaryRestrictions: '',
    specialRequests: ''
  });

  const [notification, setNotification] = useState({
    show: false,
    type: '', // 'success' or 'error'
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      if (!formData.date || !formData.name || !formData.time || !formData.email || !formData.phone || !formData.guests || !formData.occasion) {
        setNotification({
          show: true,
          type: 'error',
          message: 'Please fill in all required fields'
        });
        setIsLoading(false);
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        to_email: formData.email,
        customer_name: formData.name,
        reservation_date: formData.date,
        reservation_time: formData.time,
        phone_number: formData.phone,
        number_of_guests: formData.guests,
        occasion: formData.occasion,
        dietary_restrictions: formData.dietaryRestrictions || 'None',
        special_requests: formData.specialRequests || 'None',
        message: `Thank you for your reservation! We look forward to serving you.`
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      // Show success message
      setNotification({
        show: true,
        type: 'success',
        message: 'Your reservation has been booked successfully! A confirmation email has been sent.'
      });

      // Reset form
      setFormData({
        date: '',
        name: '',
        time: '',
        email: '',
        phone: '',
        guests: '',
        occasion: '',
        dietaryRestrictions: '',
        specialRequests: ''
      });

      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send confirmation email. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="reservation-section">
      <div className="reservation-container">
        <h2 className="reservation-heading">Reservations</h2>
        <p className="reservation-subheading">
          Book a table online. Leads will reach in your email.
        </p>

        {notification.show && (
          <div className={`notification notification-${notification.type}`}>
            <p>{notification.message}</p>
          </div>
        )}

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

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="occasion">Special Occasion *</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
              >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Family Gathering">Family Gathering</option>
                <option value="Casual Dining">Casual Dining</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
              <input
                type="text"
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="e.g., Vegetarian, Gluten-free, Vegan"
              />
            </div>
          </div>

          <div className="form-row full-width">
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requests or preferences? (e.g., window seating, high chair needed, etc.)"
                rows="4"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="reservation-btn" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Reserve Now'}
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

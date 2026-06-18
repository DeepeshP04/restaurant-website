import "./Privacy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="privacy-policy-title mb-4">Privacy Policy</h1>
            <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="policy-section">
              <h2 className="section-heading">1. Introduction</h2>
              <p>
                Welcome to our Restaurant. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and dining preferences when you make a reservation or contact us.</li>
                <li><strong>Payment Information:</strong> Credit card or other payment details when you make a purchase through our platform.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and pages visited.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site usage.</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">3. How We Use Your Information</h2>
              <p>We use the information we collect in the following ways:</p>
              <ul>
                <li>To process your reservations and orders</li>
                <li>To communicate with you regarding your bookings and inquiries</li>
                <li>To send promotional emails and updates (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">4. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
              </p>
              <ul>
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw your consent at any time</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">7. Cookies and Tracking</h2>
              <p>
                Our website uses cookies to enhance your experience. You can control cookie settings in your browser. Some features of the website may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">9. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 13, we will delete such information promptly.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to the website. Your continued use of our website following the posting of revised Privacy Policy means you accept and agree to the changes.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="section-heading">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><strong>Email:</strong> privacy@restaurant.com</li>
                <li><strong>Phone:</strong> +1 (234) 567-890</li>
                <li><strong>Address:</strong> 123 Main Street, Downtown District, City, State 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

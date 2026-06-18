import "./Agreement.css";

export default function TermsOfService() {
  return (
    <div className="terms-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="terms-title mb-4">Terms of Service</h1>
            <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="terms-section">
              <h2 className="section-heading">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">3. Disclaimer</h2>
              <p>
                The materials on our website are provided on an 'as is' basis. Our website makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">4. Limitations</h2>
              <p>
                In no event shall our website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">6. Links</h2>
              <p>
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">7. Modifications</h2>
              <p>
                We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which our restaurant is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">9. Reservations</h2>
              <p>
                When making a reservation through our website:
              </p>
              <ul>
                <li>You must provide accurate and complete information</li>
                <li>You agree to arrive within 15 minutes of your reservation time</li>
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>We reserve the right to cancel reservations due to operational reasons</li>
                <li>No-shows may result in charges as per our cancellation policy</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">10. Payment Terms</h2>
              <p>
                Payment must be made in full at the time of ordering or as agreed upon. We accept all major credit cards and other specified payment methods. All prices are subject to applicable taxes and service charges.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">11. User Conduct</h2>
              <p>
                When using our website, you agree not to:
              </p>
              <ul>
                <li>Harass, abuse, or threaten staff or other users</li>
                <li>Post offensive, obscene, or defamatory content</li>
                <li>Attempt to access unauthorized areas of our website</li>
                <li>Transmit viruses or malicious code</li>
                <li>Engage in any illegal activities</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">12. Intellectual Property Rights</h2>
              <p>
                All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of our restaurant or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">13. Limitation of Liability</h2>
              <p>
                Our liability to you for any reason and upon any cause of action related to your use of this website shall be limited to the amount paid by you, if any, for services or products purchased through our website.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">14. Severability</h2>
              <p>
                If any provision of these terms of service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-heading">15. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><strong>Email:</strong> legal@restaurant.com</li>
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

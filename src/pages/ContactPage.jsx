import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      
      <section className="contact-info">
        <div className="contact-map">
          <h3>Visit Us</h3>
          <div className="map-placeholder">
            {/* Map integration will go here */}
          </div>
        </div>
        
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <ul className="contact-list">
            <li><a href="tel:+1234567890">Call us: +1 (234) 567-890</a></li>
            <li><a href="mailto:info@gemgrocery.com">Email us: info@gemgrocery.com</a></li>
          </ul>
          
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;

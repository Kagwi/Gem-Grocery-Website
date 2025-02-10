import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTikTok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Gem Grocery Logo" />
          </div>
          
          <div className="footer-sections">
            <div className="about-us">
              <h3>About Us</h3>
              <p>Upgrade your health and wellness with fresh, natural products</p>
            </div>
            
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/gemgrocery" target="_blank">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.instagram.com/gemgrocery" target="_blank">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.tiktok.com/@gemgrocery" target="_blank">
                  <FaTikTok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Gem Grocery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

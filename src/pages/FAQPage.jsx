import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      
      <div className="faq-content">
        <div className="faq-item">
          <h3>What forms of payment do you accept?</h3>
          <p>We accept PayPal for all orders.</p>
        </div>
        
        <div className="faq-item">
          <h3>How do I track my order?</h3>
          <p>You can track your order using our Order Tracking page.</p>
        </div>
        
        <div className="faq-item">
          <h3>What is your return policy?</h3>
          <p>Please see our Terms of Service for return policy details.</p>
        </div>
      </div>
      
      <Link to="/contact" className="btn-primary">
        Contact Us for More Information
      </Link>
    </div>
  );
};

export default FAQPage;

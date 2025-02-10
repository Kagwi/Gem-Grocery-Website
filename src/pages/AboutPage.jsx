import { Link } from 'react-router-dom';
import { mockTestimonials } from '../data/mockTestimonials';

const AboutPage = () => {
  return (
    <div className="container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We are committed to providing fresh, natural products for your health and wellness</p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fresh & Natural</h3>
            <p>Guaranteed fresh products delivered daily</p>
          </div>
          <div className="feature-card">
            <h3>Quality Assured</h3>
            <p>Rigorous quality control process</p>
          </div>
          <div className="feature-card">
            <h3>Sustainable</h3>
            <p>Eco-friendly packaging and practices</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          {mockTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

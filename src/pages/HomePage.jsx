import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Gem Grocery</h1>
          <p>Discover fresh, natural products for your health and wellness</p>
          <Link to="/products" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="new-arrivals">
        <h2>Newly Added Products</h2>
        <div className="products-grid">
          {/* Mock products - will be replaced with real data later */}
          <ProductCard 
            image="/product1.jpg"
            name="Organic Apple"
            price="$2.99"
          />
          <ProductCard 
            image="/product2.jpg"
            name="Whole Wheat Bread"
            price="$5.99"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;

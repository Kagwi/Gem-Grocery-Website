import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Gem Grocery Logo" className="nav-logo" />
          <h1>Gem Grocery</h1>
          <p>Upgrade your health and wellness</p>
        </Link>
        
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-widgets">
          <Link to="/wishlist">
            <FaHeart size={20} />
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={20} />
          </Link>
          <Link to="/account">
            <FaUser size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

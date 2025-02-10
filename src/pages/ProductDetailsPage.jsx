import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const ProductDetailsPage = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = {
    id: 1,
    name: 'Organic Apple',
    price: 2.99,
    description: 'Fresh organic apple, perfect for healthy snacks',
    image: '/product1.jpg'
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product.id);
  };

  return (
    <div className="container">
      <div className="product-details">
        <div className="product-images">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          
          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>

          <div className="action-buttons">
            <button onClick={handleAddToCart} className="btn-primary">
              Add to Cart
            </button>
            <button onClick={handleAddToWishlist} className="btn-secondary">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

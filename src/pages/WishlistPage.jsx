import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, moveToCart } = useContext(WishlistContext);

  return (
    <div className="container">
      <h1>My Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-content">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => moveToCart(item.id)}>
                  Add to Cart
                </button>
                <button onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

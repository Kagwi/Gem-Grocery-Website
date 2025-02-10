import { createContext, useState } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (productId) => {
    setWishlistItems(prevItems => {
      if (!prevItems.includes(productId)) {
        return [...prevItems, productId];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prevItems => 
      prevItems.filter(item => item !== productId)
    );
  };

  const moveToCart = (productId) => {
    removeFromWishlist(productId);
    // Add to cart logic
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      moveToCart
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };

import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { id: productId, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ 
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { PayPalButton } from '@paypal/react-paypal-js';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handlePaymentSuccess = () => {
    // Handle successful payment
    alert('Payment successful!');
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-section">
            <h3>Total: ${paymentAmount}</h3>
            <PayPalButton
              amount={paymentAmount}
              onSuccess={handlePaymentSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

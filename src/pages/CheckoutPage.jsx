import { useState } from 'react';
import { PayPalButton } from '@paypal/react-paypal-js';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePaymentSuccess = (paymentResult) => {
    // Process payment and create order
    const orderID = Math.floor(Math.random() * 1000000);
    navigate(`/thankyou/${orderID}`);
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      
      <div className="checkout-form">
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" required />
            </div>
          </form>
        </div>

        <div className="payment-section">
          <h2>Payment</h2>
          <PayPalButton
            amount={paymentAmount}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

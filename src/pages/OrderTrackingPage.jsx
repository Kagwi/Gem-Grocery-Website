import { useState } from 'react';

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');

  const handleTrackOrder = () => {
    // Implement order tracking logic
    alert('Order tracking feature coming soon!');
  };

  return (
    <div className="container">
      <h1>Track Your Order</h1>
      <div className="tracking-form">
        <div className="form-group">
          <label>Order ID</label>
          <input 
            type="text" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <button onClick={handleTrackOrder} className="btn-primary">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default OrderTrackingPage;

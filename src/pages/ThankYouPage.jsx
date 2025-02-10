import { useParams } from 'react-router-dom';

const ThankYouPage = () => {
  const { orderId } = useParams();

  return (
    <div className="container">
      <h1>Thank You for Your Order!</h1>
      <p>Your order number is: {orderId}</p>
      <p>We'll send you a confirmation email with order details.</p>
      <Link to="/" className="btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYouPage;

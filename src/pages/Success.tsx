import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { Link } from 'react-router-dom';
import './Success.css';
import usePagesTitle from '../hooks/usePagesTitle';

const Success = () => {
  const { clearCart } = useShoppingCart();
  usePagesTitle('Order Successful');
  
  useEffect(() => {
    // Clear the cart when the success page loads
    clearCart();
  }, [clearCart]);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been successfully processed.</p>
        <p>
          We appreciate your support for Noetica.
        </p>
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Success; 

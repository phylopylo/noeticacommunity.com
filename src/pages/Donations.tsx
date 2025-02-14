import DonationProduct from '../components/Donation/DonationProduct';
import ShoppingCart from '../components/Cart/ShoppingCart';
import { products } from '../data/donations';
import './Donations.css';
import usePagesTitle from '../hooks/usePagesTitle';

const Donations = () => {
  usePagesTitle('Donations');

  return (
    <div className="donations-container">
      <h1>Support Our Mission</h1>
      <p className="donations-intro">
        Your support helps us continue creating valuable content and maintaining this platform.
        Choose from the products below to support Noetica.
      </p>
      
      <div className="donations-layout">
        <section className="products-section">
          <h2>Noetica Products</h2>
          <div className="products-grid">
            {products.map(product => (
              <DonationProduct key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <aside className="shopping-cart-section">
        <h3>Shopping Cart</h3>

          <ShoppingCart />
        </aside>
      </div>
    </div>
  );
};

export default Donations; 

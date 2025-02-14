import DonationProduct from '../components/Donation/DonationProduct';
import ShoppingCart from '../components/Cart/ShoppingCart';
import { products } from '../data/donations';
import './Merchandise.css';
import usePagesTitle from '../hooks/usePagesTitle';

const Merchandise = () => {
  usePagesTitle('Merchandise');

  return (
    <div className="merchandise-container">
      <h1>Noetica Merchandise</h1>
      <p className="merchandise-intro">
        Browse and purchase our exclusive merchandise to support Noetica.
        Each purchase helps us continue creating valuable content and maintaining this platform.
      </p>
      
      <div className="merchandise-layout">
        <section className="products-section">
          <h2>Available Products</h2>
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

export default Merchandise; 
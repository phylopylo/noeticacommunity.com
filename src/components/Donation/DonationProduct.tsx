import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Product } from "../../data/donations";
import "./DonationProduct.css";

interface ProductProps {
  product: Product;
}

export default function DonationProduct({ product }: ProductProps) {
  const { addItem } = useShoppingCart();
  const { name, price } = product;

  const addToCart = () => {
    addItem(product);
  };

  return (
    <article className="donation-product">
      <div className="donation-product-content">
        <div className="donation-image">
          <img 
            src={product.image} 
            alt={product.name}
            className="donation-image-border"
          />
        </div>
        <h3 className="donation-title">{name}</h3>
        <div className="donation-price">
          {formatCurrencyString({ value: price, currency: "USD" })}
        </div>
        
        <button
          onClick={addToCart}
          className="donation-button"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
} 
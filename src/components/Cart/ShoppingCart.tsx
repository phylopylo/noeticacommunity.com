import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import "./Cart.css";

export default function ShoppingCart() {
  const { cartCount, cartDetails } = useShoppingCart();
  
  return (
    <div className="shopping-cart">

      {cartCount && cartCount > 0 ? (
        <>
          <div className="cart-items">
            {Object.values(cartDetails ?? {}).map((entry) => (
              <CartItem key={entry.id} item={entry} />
            ))}
          </div>
          <CheckoutButton />
        </>
      ) : (
        <div className="cart-empty">You have no items in your cart</div>
      )}
    </div>
  );
} 
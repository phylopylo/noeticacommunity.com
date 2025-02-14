import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    image?: string;
    quantity: number;
    price: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { name, image, quantity, price } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-name">
          {name} {quantity > 1 && <span className="cart-item-quantity">({quantity})</span>}
        </div>
        <div className="cart-item-price">
          {formatCurrencyString({ value: price, currency: "USD" })}
        </div>
      </div>
      <button
        onClick={removeItemFromCart}
        className="cart-item-remove"
        aria-label="Remove item"
      >
        ✕
      </button>
    </div>
  );
} 

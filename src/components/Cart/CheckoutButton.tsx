import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

type Status = "idle" | "loading" | "redirect-error" | "no-items";

export default function CheckoutButton() {
  const [status, setStatus] = useState<Status>("idle");
  const { redirectToCheckout, cartCount } = useShoppingCart();

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (cartCount && cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return (
    <div className="checkout-container">
      {status === "redirect-error" && (
        <div className="checkout-error">
          Unable to redirect to checkout. Please try again.
        </div>
      )}
      {status === "no-items" && (
        <div className="checkout-error">
          Please add some items to your cart.
        </div>
      )}
      <button
        onClick={handleClick}
        className="checkout-button"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Processing..." : "Checkout"}
      </button>
    </div>
  );
} 
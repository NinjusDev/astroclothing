import { useEffect, useState } from "react";
import "./Checkout.css";

export function CheckoutPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          throw new Error("Saved cart is not an array.");
        }
      } catch (error) {
        console.error("Error parsing saved cart:", error);
        // Optionally, you can clear the invalid cart data from localStorage here
      }
    }
  }, []);

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="checkout">
      <div className="checkout-info">
        <section className="shipping-info">
          <h2>Shipping Address</h2>
          <select>
            <option>Argentina</option>
            <option>Chile</option>
            <option>Brasil</option>
            <option>Uruguay</option>
          </select>
        </section>

        <section className="id-info">
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
        </section>

        <section className="address-info">
          <input placeholder="Address"></input>
        </section>

        <section className="apartment-info">
          <input placeholder="Apartment, suite, etc. (optional)"></input>
        </section>

        <section className="city-province-pcode">
          <input placeholder="City"></input>
          <input placeholder="Province"></input>
          <input placeholder="Postal Code"></input>
        </section>

        <section className="btn-to-checkout">
          <button>Proceed to Checkout</button>
        </section>
      </div>

      <div className="product-checkout">
        <h2>Products in Cart</h2>
        {cart.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.nameProduct}</h3>
            <img src={product.img} alt={product.nameProduct} />
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

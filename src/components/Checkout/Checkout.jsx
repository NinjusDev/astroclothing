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

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        // Update the quantity of the product
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCart(updatedCart);
    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addProduct = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        // Increment the quantity of the product
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setCart(updatedCart);
    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="checkout">
      <div className="checkout-info">
        <form className="checkout-form">
          <section className="shipping-info">
            <h2>Shipping Address</h2>
            <select name="country">
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Brasil">Brasil</option>
              <option value="Uruguay">Uruguay</option>
            </select>
          </section>

          <section className="name-info">
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last_name" placeholder="Last Name" />
          </section>

          <section className="address-info">
            <input type="text" name="address" placeholder="Address" />
          </section>

          <section className="apartment-info">
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </section>

          <section className="city-province">
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="province" placeholder="Province" />
          </section>

          <section className="postal-code">
            <input type="text" name="postal_code" placeholder="Postal Code" />
          </section>

          <section className="btn-to-checkout">
            <button type="submit">Proceed to Checkout</button>
          </section>
        </form>
      </div>

      <div className="product-checkout">
        <h2>Products in Cart</h2>
        {cart.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.nameProduct}</h3>
            <img src={product.img} alt={product.nameProduct} />
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
              className="plus-button"
            >
              +
            </button>
          </div>
        ))}
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

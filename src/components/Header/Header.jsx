import { useState } from "react";
import "./Header.css";

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
    localStorage.clear();
  };

  return (
    <header className="header">
      <div className="container-icon">
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className={`navigation ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/products">PRODUCTS</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
            <li>
              <a href="/login">LOGIN</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-cart-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-cart"
          onClick={() => setCartOpen(!cartOpen)}
        >
          {/* Aquí iría el contenido del icono del carrito */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className="count-products">
          <span id="contador-productos">{countProducts}</span>
        </div>
      </div>

      <div className={`container-cart-products ${cartOpen ? "open" : ""}`}>
        {allProducts.length ? (
          <>
            <div className="cart-items">
              {allProducts.map((product) => (
                <div className="cart-item" key={product.id}>
                  <span className="item-quantity">{product.quantity}</span>
                  <span className="item-name">{product.nameProduct}</span>
                  <span className="item-price">${product.price}</span>
                  <button
                    className="remove-item"
                    onClick={() => onDeleteProduct(product)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">${total}</span>
            </div>
            <button className="btn-clear-cart" onClick={onCleanCart}>
              Clear Cart
            </button>
            <a className="to-checkout" href="/checkout">
              Go to Checkout
            </a>
          </>
        ) : (
          <p className="empty-cart-message">Your cart is empty</p>
        )}
      </div>
    </header>
  );
};

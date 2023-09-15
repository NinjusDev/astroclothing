import { useEffect, useState } from "react";
import './Checkout.css';

export function CheckoutPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const totalPrice = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    return (
        <>
        <div className="checkout">
            <div className="checkout-info">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <input placeholder="Email or mobile phone number"></input>
                </div>

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
                    <button>
                        Proceed to Checkout
                    </button>
                </section>
            </div>
        
            <div className="product-checkout">
                <h2>Products in Cart</h2>
                {cart.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.img} alt={product.nameProduct} />
                        <h3>{product.nameProduct}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                ))}
                <p>Total Price: ${totalPrice}</p>
            </div>
        </div>
        </>
    );
}

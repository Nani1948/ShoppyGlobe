import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import {
  selectCartItems,
  selectCartTotal,
} from "../redux/selectors";

import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart data from Redux
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // Store customer details
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  // Handle order submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear the cart after placing the order
    dispatch(clearCart());

    // Redirect to Home
    navigate("/");
  };

  // Do not allow checkout with an empty cart
  if (cartItems.length === 0) {
    return (
      <section className="checkout-page">
        <header>
            <h1>Checkout</h1>
        </header>     
        <p>Your cart is empty.</p>
        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="checkout-page">
    <header>
          <h1>Checkout</h1>
    </header>

      {/* Customer details form */}
      <form onSubmit={handleSubmit}>
        {/*Customer information*/}
        <fieldset>
          <legend>Customer Information</legend>
        <p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </p>
        <p>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
            required
          />
          </p>
        </fieldset>

        {/* Order summary */}
        <section className="checkout-summary">
          <header>
              <h2>Order Summary</h2>
          </header>        
          {cartItems.map((item) => (
            <article key={item.id}>
            <p>
              {item.title} × {item.quantity}
            </p>
            </article>
          ))}
          <footer>
              <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </footer>
          
        </section>

        {/* Place order button */}
        <button type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}

export default Checkout;
  
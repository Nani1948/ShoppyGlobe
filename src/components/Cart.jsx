import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems, selectCartTotal, } from "../redux/selectors";

import CartItem from "./CartItem";

function Cart() {
    // Get cart data from Redux
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    //Display message when cart is empty
    if (cartItems.length === 0) {
        return (
            <section className="cart-page">
                <h1>Your Cart</h1>
                <p>Your cart is empty.</p>
                <Link to="/"> Continue Shopping</Link>
            </section>
        );
    }
    return (
        <section className="cart-page">
            <h1>Your Cart</h1>
            {/* Cart items */}
            <div className="cart-items">
                {cartItems.map((item) => (< CartItem 
                key={item.id} 
                item={item} 
                />
            ))}
            </div>
            {/* Cart total */}
            <div className="cart-summary">
                <h2> Total: ${cartTotal.toFixed(2)}</h2>
                <Link to="/checkout">Proceed to Checkout</Link>
            </div>
        </section>
    );
}

export default Cart;
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../redux/cartSlice";


function CartItem({ item }) {
    const dispatch = useDispatch();
    return (
        <article className="cart-item">
            {/* Product image */}
            <img src={item.thumbnail}
                alt={item.title}
                loading="lazy"
            />
            <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p> Price:${item.price}</p>
                {/* Quantity controls */}
                <div className="quantity-controls">
                    <button
                        onClick={() =>
                            dispatch(decreaseQuantity(item.id))}
                            disabled={item.quantity ===1}
                            aria-label={`Decrease quantity of ${item.title}`}                                         
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() =>
                            dispatch(increaseQuantity(item.id))}
                        aria-label={`Increase quantity of ${item.title}`}
                        
                    >
                        +
                    </button>
                </div>

                {/* Product subtotal */}
                <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                </p>
                {/* Remove product */}
                <button
                    onClick={() =>
                        dispatch(removeFromCart(item.id))}>
                    Remove
                </button>
            </div>
        </article>
    );
    }
// Prop validation
CartItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CartItem;
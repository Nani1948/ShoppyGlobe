import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function ProductItem({product}){
    const dispatch =useDispatch();

    //Add product to Redux cart
    const handleAddToCart = () =>{
        dispatch(addToCart(product));
    };

    return(
        <article className="product-card">
            {/*Product image*/}
            <img 
              src={product.thumbnail}
              alt={product.title}
              loading="lazy"
            />
            {/*Product title*/}
            <h2>{product.title}</h2>

            {/*Product description*/}
            <p>{product.description}</p>

            {/*Product price*/}
            <p className="price">${product.price}</p>
                {/* Navigate to product details */}
            <Link to={`/product/${product.id}`}>View Details </Link>

            {/* Add product to cart */}
            <button onClick={handleAddToCart}>Add to Cart </button>
        </article>
    );
}
// Validate product prop
ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItem;



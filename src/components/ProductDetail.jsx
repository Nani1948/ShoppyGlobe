import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function ProductDetail() {
    // Get product ID from the URL
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Store product details
    const [product, setProduct] = useState(null);

    // Store loading and error status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

     useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError("");

                // Fetch selected product
                const response = await fetch(
                    `https://dummyjson.com/products/${id}`
                );

                if (!response.ok) {
                    throw new Error("Product not found");
                }

                const data = await response.json();

                // Store product
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // Loading message
    if (loading) {
        return (
        
              <p>Loading product details...</p>
            
        );
    }

    // Error message
    if (error) {
        return (
            <section className="error-page">
                <h2>Unable to Load Product</h2>
                <p>{error}</p>
                <button onClick={() => navigate("/")}> Back to Home</button>
            </section>
        );
    }
    return (
        <section className="product-detail">

            {/* Product image */}
            <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
            />

            <div className="product-detail-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p><strong>Category:</strong>{" "}{product.category}</p>
                <p> <strong>Brand:</strong>{" "}{product.brand}</p>
                <p className="price">${product.price} </p>
                <p><strong>Rating:</strong>{" "}{product.rating}</p>
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart </button>
                <button onClick={() => navigate("/cart")}>Go to Cart  </button>

            </div>
        </section>
    );
}

export default ProductDetail;
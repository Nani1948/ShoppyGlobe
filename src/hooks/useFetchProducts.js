import { useEffect, useState } from "react";

function useFetchProducts(){
     // Store products
    const [products, setProducts] = useState([]);
    
    // Store loading status
    const [loading, setLoading] = useState(true);
    
    // Store error message
    const [error, setError] = useState("");

     useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError("");

                // Fetch products from API
                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                // Check if API request failed
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                // Store products in state
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,
    };
}

export default useFetchProducts;


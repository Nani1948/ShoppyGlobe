import { useDispatch, useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import {
    selectSearchTerm,
    selectFilteredProducts,
} from "../redux/selectors";
import { setSearchTerm } from "../redux/cartSlice";
import ProductItem from "./ProductItem";
function ProductList() {
    const dispatch = useDispatch();

    //Get search term from Redux
    const searchTerm = useSelector(selectSearchTerm);

    //Fetch product using custom hook
    const {
        products,
        loading,
        error,
    } = useFetchProducts();

    // Filter products based on search term
    const filteredProducts = selectFilteredProducts(
        products,
        searchTerm
    );

    //Handle search input
    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    // Display loading message
    if (loading) {
        return <p>Loading products...</p>;
    }

    //Display error message
    if (error) {
        return <p className="error-message">{error}</p>;

    }
    return (
        <section className="product-section">
            {/* Search input */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            {/* Product list */}
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </section>
    );

}

export default ProductList;
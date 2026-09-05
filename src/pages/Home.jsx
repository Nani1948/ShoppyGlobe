import ProductList from "../components/ProductList";

function Home() {
    return (
        <section className="home-page">
            {/* Page heading */}
            <h1>Welcome to ShoppyGlobe</h1>
            
            {/* Page description */}
            <p> Browse our products and add your favorites to the cart.</p>

            {/* Display product list */}
            <ProductList />
        </section>
    );
}

export default Home;
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../redux/selectors";

function Header() {
    //Get total cart quantity from Redux
    const cartItemCount = useSelector(selectCartItemCount);
    return (<header className="header">
        <div className="header-container">
           
            {/* Application logo */}
            <Link to="/" className="logo"> ShoppyGlobe</Link>

            {/* Navigation links */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart"> 🛒 Cart ({cartItemCount}) </Link>
            </nav>

        </div>
    </header>);
}

export default Header;

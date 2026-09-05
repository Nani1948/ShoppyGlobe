import { Link } from "react-router-dom";

//Page Not Found

function NotFound(){
    return(
     <section className="not-found">
        {/* Error status */}
        <h1>404</h1>
         
        {/* Error message */}
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist</p>
        
         {/* Return to Home */}
        <Link to="/" >Back to Home</Link>
     </section>
    );

}


export default NotFound;
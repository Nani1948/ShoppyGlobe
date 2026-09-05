import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App(){
  return (
  <>
  {
   /* Header is displayed on every page */
  }
  <Header/>
   {/* Display the current route */}
  <main>
    <Outlet/>
  </main>
  
  </>
 );
}
export default App;
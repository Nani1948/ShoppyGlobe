import { StrictMode,lazy,Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import store from "./redux/store";
import "./index.css";
// Lazy load application components
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const NotFound = lazy(() => import("./components/NotFound"));

//Create application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Home page
      {
        index: true,
        element: <Home />,
      },
      // Product detail page
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      // Cart page
      {
        path: "cart",
        element: <Cart />,
      },
      // Checkout page
      {
        path: "checkout",
        element: <Checkout />,
      },
      // 404 page
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       {/* Suspense displays a loading message while components load */}
      <Suspense fallback={<p>Loading page...</p>}>
      <RouterProvider router={router} />
      </Suspense> 
    </Provider>
  </StrictMode>
);

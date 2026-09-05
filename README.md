ShoppyGlobe E-commerce Application
Project Description:
ShoppyGlobe is a basic e-commerce web application built using React.js and Vite

The application allow users to browse products, search for products, view product details ,add products to a shopping cart, modify cart quanttites, remove products, and complete a dummy checkout process

Features:
1.Display products from the DummyJSON API
2.Search products
3.Add products to cart
4.Remove products from cart
5.View product details
6.Increase and decrease product quantity
7.Display cart item count
8.Calculate cart total
9.Checkout form
10.Place order functionality
11.Automatically clear cart after placing an order
12Automatically redirect to the Home page after placing an order
13.Dynamic product routes
14.404 Not Found page
15.Loading and error handling
16.Responsive design


Project Structure:
ShoppyGlobe/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   └── NotFound.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Checkout.jsx
│   │   └── ProductDetailsPage.jsx
│   │
│   ├── hooks/
│   │   └── useFetchProducts.js
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   └── selectors.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

Workflow:
User 
↓ 
Home Page 
↓ 
Fetch Products 
↓
 ProductList 
 ↓
Search / Select Product 
↓ 
Product Detail 
↓ 
Add to Cart 
↓ 
Redux Cart State 
↓ 
Cart 
↓
 Update Quantity / Remove Item 
 ↓ 
 Checkout 
 ↓ 
 Place Order 
 ↓ 
 Order Placed 
 ↓ 
 Clear Cart 
 ↓ 
 Redirect to Home


Github:
Author: Nandhini


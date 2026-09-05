import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Create the Redux store
const store=configureStore({
    //Connect the cart reducer to Redux store
    reducer:{
        cart:cartReducer,
    }
});

//Export the store to other files.
export default store;
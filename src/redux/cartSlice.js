import { createSlice } from "@reduxjs/toolkit";

//Initial cart state
const initialState = {
    items: [],
    searchTerm: "",
};

//Create the cart slice
const cartSlice = createSlice({
    name: "cart", //Name of slice
    initialState,//set the starting data

    //Function that update the redux state
    reducers:
    {
        //Add a product to the cart
        addToCart: (state, action) => {
            const product = action.payload;

            const existingItem = state.items.find(
                (item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.items.push({
                    ...product,
                    quantity: 1,

                });
            }
        },

        //Remove a product from the cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
       
        //Increase the product quantity 
        increaseQuantity:(state,action)=>{
        const item = state.items.find((item) => item.id === action.payload);
        if(item){
            item.quantity+=1;

        }

        },

        //Decrease product quantity
        decreaseQuantity:(state,action) =>{
          const item  =state.items.find((item) => item.id === action.payload);
          if(item && item.quantity>1){
            item.quantity-=1;
          }
        },
        
        //Clear all cart items
        clearCart:(state)=>{
            state.items=[];
        },
        //Store the search text
        setSearchTerm: (state,action) =>{
            state.searchTerm=action.payload;
        },
    },
});
  //Export the actions
   export const{
     addToCart,
     removeFromCart,
     increaseQuantity,
     decreaseQuantity,
     clearCart,
     setSearchTerm
   }=cartSlice.actions;

export default cartSlice.reducer;
//Get all cart items
export const selectCartItems = (state) => state.cart.items;
//Get search term
export const selectSearchTerm = (state) => state.cart.searchTerm;
//Get total no.of.items in the cart
export const selectCartItemCount = (state) => state.cart.items.reduce( (total, item) => total + item.quantity, 0);
//Get total price of all cart items
export const selectCartTotal = (state) =>
    state.cart.items.reduce( (total, item) => total + item.price * item.quantity,0);
//Filter product based on Search term
export const selectFilteredProducts = (products, searchTerm) => {  return products.filter((product) =>    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()));
};


import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.cartItemId)
        },

        addToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push(
                {
                id: timeId,
                quantity: action.payload.quantity,
                totalPrice: action.payload.price*action.payload.quantity,
                itemId:  action.payload.id,
                }
            );
            }
        }
    })

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}
export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};
export const getCartItems = state => state.cart.cartItems;
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
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

export const getDiscountRate = state => {
    const total = getTotalPrice(state);
    if (total >= 500) return 0.15;
    if (total >= 300) return 0.10;
    if (total >= 200) return 0.05;
    return 0;
}

export const getDiscountAmount = state => {
    const total = getTotalPrice(state);
    const rate = getDiscountRate(state);
    return total * rate;
}

export const getFinalPrice = state => {
    const total = getTotalPrice(state);
    const discount = getDiscountAmount(state);
    return total - discount;
}

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};
export const getCartItems = state => state.cart.cartItems;
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
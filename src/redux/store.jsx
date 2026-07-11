import { configureStore } from '@reduxjs/toolkit'
import products from './productSlice'
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
      products,
      cart 
    },
  })

// Warenkorb bei jeder Änderung in localStorage sichern,
// damit er einen Seiten-Reload (z.B. nach Auth0-/Stripe-Redirect) übersteht.
store.subscribe(() => {
    try {
        localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
    } catch (e) {
        console.error('Warenkorb konnte nicht gespeichert werden:', e);
    }
});
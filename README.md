<h1 align="center">Nerd's ComputerShop 💻</h1>  
<p align="center">
    A complex online computer store app created with <a href="https://reactjs.org/">React</a> and <a href="https://redux.js.org/">Redux</a>.
</p>

![computershop](https://github.com/VampireNoob/Nerd-s-ComputerShop/assets/128150500/f62400ad-5765-4b6f-92bd-1bb471f8c594)



## Here I made my final project with React.js, Redux, UI and a few plugins.

You can view a live demo of the project here: https://nerd-s-computershop.netlify.app

## 🛠️ Features:

- ✔️ Primarily we're working with Redux here to add and remove items from the shopping cart.
- ✔️ In this project I used hooks like useEffect, useState, useForm, useSelector, useRef, useDispatch and useNavigate.
- ✔️ We also used methods map, filter, push and toFixed.
- ✔️ We can also vary the number of products.

## Here is part of the code using React and Redux.
````
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
````

## I had a problem after uploading to the Netlify portal. The page always showed the error code "404 Page not found" when I reloaded the page not on the homepage but on the shop page, for example.
Here is a snippet that I added to make it work smoothly again.
````
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
````

## Built With

In this section you will find the programming languages ​​/ frameworcs / libraries that I used in this project.

* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d1885e0d-bc56-480b-b104-b181b8c82cbf" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/c43e4d15-62e4-4254-a673-c4021fd4cf25" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/e8f0b5ca-935a-45d1-b5c0-419f02ee83d4" width="30">
* <img src="https://github.com/VampireNoob/Online-Food/assets/128150500/89651946-9ca7-49d0-833d-2733e9d295eb" width="30">

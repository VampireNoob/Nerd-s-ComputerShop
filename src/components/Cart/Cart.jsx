import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem";
import './cart.css';
import ContinueShopping from "../Buttons/ContinueShopping";


const Cart = () => {
    const cartItem = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div className="container-cart">
{/* immer dran denken einen "key" zu verwenden bei der methode "map" in diesem fall ist es "id" */}
            {cartItem.map((cartItem, id) => <CartItem cartItem={cartItem} key={id} />)}
            <hr className="horz" />
                <h3 className="totalPrice">{totalPrice === 0 ? 'Dein Warenkorb ist leer!' : `Gesamt: ${totalPrice.toFixed(2)} €`}</h3>

            <div>
                {totalPrice === 0 && <ContinueShopping /> }
            </div>
        </div>
    )
}

export default Cart;
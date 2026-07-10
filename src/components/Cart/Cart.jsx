import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice, getDiscountRate, getDiscountAmount, getFinalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem";
import './cart.css';
import ContinueShopping from "../Buttons/ContinueShopping";


const Cart = () => {
    const cartItem = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    const discountRate = useSelector(getDiscountRate)
    const discountAmount = useSelector(getDiscountAmount)
    const finalPrice = useSelector(getFinalPrice)

    return (
        <div className="container-cart">
{/* immer dran denken einen "key" zu verwenden bei der methode "map" in diesem fall ist es "id" */}
            {cartItem.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id} />)}
            <hr className="horz" />

            {totalPrice === 0 ? (
                <h3 className="totalPrice">Dein Warenkorb ist leer!</h3>
            ) : (
                <div className="priceSummary">
                    <p className="subTotal">Zwischensumme: {totalPrice.toFixed(2)} €</p>
                    {discountRate > 0 && (
                        <p className="discountLine">Rabatt ({(discountRate * 100).toFixed(0)}%): -{discountAmount.toFixed(2)} €</p>
                    )}
                    <h3 className="totalPrice">Gesamt: {finalPrice.toFixed(2)} €</h3>
                </div>
            )}

            <div>
                {totalPrice === 0 && <ContinueShopping /> }
            </div>
        </div>
    )
}

export default Cart;
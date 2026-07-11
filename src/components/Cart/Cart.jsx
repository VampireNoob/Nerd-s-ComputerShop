import { useState } from 'react';
import { useSelector } from "react-redux"
import { useAuth0 } from '@auth0/auth0-react';
import { getCartItems, getTotalPrice, getDiscountRate, getDiscountAmount, getFinalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem";
import './cart.css';
import ContinueShopping from "../Buttons/ContinueShopping";
import { createCheckoutSession } from '../../services/stripeCheckout';


const Cart = () => {
    const cartItem = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    const discountRate = useSelector(getDiscountRate)
    const discountAmount = useSelector(getDiscountAmount)
    const finalPrice = useSelector(getFinalPrice)
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutError, setCheckoutError] = useState(null);

    const handleCheckout = async () => {
        setCheckoutError(null);

        if (!isAuthenticated) {
            loginWithRedirect({ appState: { returnTo: '/' } });
            return;
        }

        setIsCheckingOut(true);
        try {
            const { url } = await createCheckoutSession(cartItem);
            window.location.href = url;
        } catch (error) {
            setCheckoutError(error.message);
            setIsCheckingOut(false);
        }
    }

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

                    {checkoutError && <p className="checkoutError">{checkoutError}</p>}

                    <button className="checkout-btn" onClick={handleCheckout} disabled={isCheckingOut}>
                        {isCheckingOut ? 'Wird geladen...' : 'ZUR KASSE'}
                    </button>
                </div>
            )}

            <div>
                {totalPrice === 0 && <ContinueShopping /> }
            </div>
        </div>
    )
}

export default Cart;
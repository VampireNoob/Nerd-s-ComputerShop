import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import './checkout.css';

const CheckoutSuccess = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="checkout-result">
            <h1 className="checkout-title checkout-success">Zahlung erfolgreich!</h1>
            <p className="checkout-text">Vielen Dank für deinen Einkauf bei Nerd's ComputerShop.</p>
            <p className="checkout-text">Dies ist eine Testzahlung im Stripe-Test-Modus - es wurde kein echtes Geld abgebucht.</p>
            <Link className="checkout-link" to="/shop">Weiter einkaufen</Link>
        </div>
    );
};

export default CheckoutSuccess;
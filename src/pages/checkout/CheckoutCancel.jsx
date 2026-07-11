import { Link } from 'react-router-dom';
import './checkout.css';

const CheckoutCancel = () => {
    return (
        <div className="checkout-result">
            <h1 className="checkout-title checkout-cancel">Zahlung abgebrochen</h1>
            <p className="checkout-text">Dein Bestellvorgang wurde abgebrochen. Dein Warenkorb bleibt erhalten.</p>
            <Link className="checkout-link" to="/shop">Zurück zum Shop</Link>
        </div>
    );
};

export default CheckoutCancel;
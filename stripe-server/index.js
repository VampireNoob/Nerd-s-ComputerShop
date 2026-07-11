require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const products = require('./data/dataProducts');
const calculateDiscount = require('./utils/calculateDiscount');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());

// Nimmt cartItems (nur id + quantity) entgegen, berechnet den Preis
// serverseitig neu und erstellt eine Stripe-Checkout-Session.
app.post('/create-checkout-session', async (req, res) => {
    try {
        const { cartItems } = req.body;

        if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return res.status(400).json({ error: 'Warenkorb ist leer oder ungültig.' });
        }

        // Preis für jedes Item serverseitig nachschlagen -
        // niemals dem vom Client gesendeten Preis vertrauen.
        let total = 0;
        const lineItems = [];

        for (const item of cartItems) {
        const product = products.find((p) => p.id === item.itemId);

        if (!product) {
            return res.status(400).json({ error: `Produkt mit ID ${item.itemId} nicht gefunden.` });
        }

        const quantity = Number(item.quantity);
        if (!Number.isInteger(quantity) || quantity <= 0) {
            return res.status(400).json({ error: `Ungültige Menge für Produkt ${item.itemId}.` });
        }

        total += product.price * quantity;

        lineItems.push({
            price_data: {
            currency: 'eur',
            product_data: { name: product.name },
            unit_amount: Math.round(product.price * 100),
            },
            quantity,
        });
        }

        const { rate, discountAmount, finalPrice } = calculateDiscount(total);

        // Rabatt als Stripe-Coupon abbilden, damit die Checkout-Seite
        // dem Kunden den Rabatt transparent anzeigt.
        let discounts = [];
        if (rate > 0) {
        const coupon = await stripe.coupons.create({
            percent_off: rate * 100,
            duration: 'once',
            name: `Rabatt ${(rate * 100).toFixed(0)}%`,
        });
        discounts = [{ coupon: coupon.id }];
        }

        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: lineItems,
        discounts,
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
        });

        res.json({
        url: session.url,
        total: total.toFixed(2),
        discountAmount: discountAmount.toFixed(2),
        finalPrice: finalPrice.toFixed(2),
        });
    } catch (error) {
        console.error('Fehler beim Erstellen der Checkout-Session:', error);
        res.status(500).json({ error: 'Interner Serverfehler bei der Zahlungsabwicklung.' });
    }
    });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
    console.log(`Stripe-Server läuft auf Port ${PORT}`);
});
// Ruft das Backend auf, um eine Stripe-Checkout-Session zu erstellen.
// Sendet nur Produkt-IDs und Mengen - niemals berechnete Preise,
// damit der Server die Preisberechnung eigenständig validieren kann.

const API_URL = process.env.REACT_APP_STRIPE_API_URL || 'http://localhost:4000';

export async function createCheckoutSession(cartItems) {
    const response = await fetch(`${API_URL}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        cartItems: cartItems.map((item) => ({
            itemId: item.itemId,
            quantity: item.quantity,
        })),
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Checkout konnte nicht gestartet werden.');
    }

    return response.json();
}
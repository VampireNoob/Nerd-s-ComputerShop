// Spiegelt die Rabatt-Staffel aus src/redux/cartSlice.jsx (getDiscountRate).
// Bewusst dupliziert – Frontend zeigt den Rabatt nur an, der Server berechnet ihn verbindlich.

function getDiscountRate(total) {
    if (total >= 500) return 0.15;
    if (total >= 300) return 0.10;
    if (total >= 200) return 0.05;
    return 0;
}

function calculateDiscount(total) {
    const rate = getDiscountRate(total);
    const discountAmount = total * rate;
    const finalPrice = total - discountAmount;

    return {
        rate,
        discountAmount: Math.round(discountAmount * 100) / 100,
        finalPrice: Math.round(finalPrice * 100) / 100,
    };
}

module.exports = calculateDiscount;
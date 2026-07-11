import { popularProducts } from './dataProducts';

// Zentrale Stelle, um ein Produkt anhand seiner ID zu finden.
// Vermeidet wiederholtes popularProducts.find(...) in mehreren Komponenten.
export function getProductById(id) {
    return popularProducts.find((product) => product.id === id);
}
// Serverseitige Kopie der Produktdaten – Quelle der Wahrheit für Preisvalidierung.
// Bewusst dupliziert (nicht aus src/data/dataProducts.jsx importiert),
// damit der Server niemals Preisen vertraut, die vom Client kommen.

const products = [
    { id: "1", name: "Office Notebook i5-1340P", price: 899.69 },
    { id: "2", name: "Notebook V15 G2 ALB - FHD 15,6 Zoll", price: 699.99 },
    { id: "3", name: "PC - SL Sprint G8839", price: 387.89 },
    { id: "4", name: "27 Zoll PC Monitor", price: 245.79 },
    { id: "5", name: "Rechenstarker Allrounder", price: 499.99 },
    { id: "6", name: "15,6 Zoll - Notebook für Business", price: 428.59 },
    { id: "7", name: "28 Zoll PC Monitor", price: 209.87 },
    { id: "8", name: "Intel Gaming PC", price: 699.99 },
    { id: "9", name: "RGB Tastatur White", price: 139.99 },
    { id: "10", name: "Wireless Maus", price: 15.79 },
    { id: "11", name: "Gaming PC", price: 859.59 },
    { id: "12", name: "Wireless Keyboard", price: 69.59 },
    { id: "13", name: "Vertikal Maus", price: 19.99 },
    { id: "14", name: "FHD 15,6 Zoll Notebook", price: 575.79 },
    { id: "15", name: "24 Zoll PC Monitor", price: 149.99 },
    { id: "16", name: "Gaming PC", price: 1109.89 },
    { id: "17", name: "Standard Maus", price: 11.99 },
    { id: "18", name: "Gaming Tastatur", price: 169.98 },
    { id: "19", name: "Business Maus", price: 9.99 },
    { id: "20", name: "Der kleine Allrounder", price: 740.49 },
    { id: "21", name: "Mini PC Kompakt", price: 339.49 },
    { id: "22", name: "Ergonomische Tastatur", price: 29.99 },
    { id: "23", name: "Convertible Notebook für Business", price: 428.59 },
    { id: "24", name: "Gaming Notebook mit 2TB SSD", price: 998.79 },
    { id: "25", name: "27 Zoll PC / Gaming Monitor", price: 169.99 },
    { id: "26", name: "34 Zoll Gaming Monitor", price: 349.79 },
    { id: "27", name: "16 Zoll - Notebook", price: 679.89 },
    { id: "28", name: "Notebook mit 1TB SSD", price: 598.99 },
    { id: "29", name: "Mini Tastatur", price: 59.49 },
    { id: "30", name: "Gaming Maus", price: 49.99 },
];

module.exports = products;
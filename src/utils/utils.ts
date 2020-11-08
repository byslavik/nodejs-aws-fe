import { Product } from "models/Product";

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);
export const getTitle = (product: Product) => `${product.year} ${product.brand} ${product.model}`
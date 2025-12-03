// src/api/adapters/productAdapter.ts
import type { ApiProduct, Product } from "../types/products";

export function productAdapter(api: ApiProduct): Product {
  return {
    id: api.id,
    title: api.name,
    price: Number(api.price),
    image: api.image,
    inStock: api.stock > 0,
    owner: api.owner,
    owner_name: api.owner_name,
    description: api.description,
  };
}

import type { ApiCart, ApiCartItem, Cart, CartItem } from "../types/cart";

// Convierte cada item del carrito
function cartItemAdapter(apiItem: ApiCartItem): CartItem {
  return {
    id: apiItem.id,
    productId: apiItem.product.id,
    name: apiItem.product.name,
    image: apiItem.product.image ?? "",
    unitPrice: Number(apiItem.unit_price),
    quantity: apiItem.quantity,
    subtotal: Number(apiItem.unit_price) * apiItem.quantity,
  };
}

// Convierte el carrito completo
export function cartAdapter(apiCart: ApiCart): Cart {
  const adaptedItems = apiCart.items.map(cartItemAdapter);

  return {
    id: apiCart.id,
    userId: apiCart.user,
    items: adaptedItems,
    total: adaptedItems.reduce((acc, item) => acc + item.subtotal, 0),
  };
}

import type { ApiCart } from "../types/cart";

const BASE_URL = "/api/cart/";

export const cartService = {
  getCart: async (): Promise<ApiCart> => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error fetching cart");
    return res.json();
  },

  addToCart: async (productId: number, quantity = 1): Promise<ApiCart> => {
    const res = await fetch(`${BASE_URL}add/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    if (!res.ok) throw new Error("Error adding to cart");
    return res.json();
  },

  removeFromCart: async (productId: number): Promise<ApiCart> => {
    const res = await fetch(`${BASE_URL}remove/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    if (!res.ok) throw new Error("Error removing from cart");
    return res.json();
  },

  updateCartItem: async (
    productId: number,
    quantity: number
  ): Promise<ApiCart> => {
    const res = await fetch(`${BASE_URL}update/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    if (!res.ok) throw new Error("Error updating cart item");
    return res.json();
  },

  clearCart: async (): Promise<void> => {
    const res = await fetch(`${BASE_URL}clear/`, { method: "POST" });
    if (!res.ok) throw new Error("Error clearing cart");
  },
};

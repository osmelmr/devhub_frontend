// ------------------------------
// Tipos que vienen de la API
// ------------------------------
export interface ApiCartItem {
  id: number;
  product: {
    id: number;
    name: string;
    image: string;
    price: string; // DRF manda números como strings
  };
  quantity: number;
  unit_price: string; // precio guardado en el carrito
}

export interface ApiCart {
  id: number;
  user: number; // id del usuario
  items: ApiCartItem[];
  total: string; // string por DRF
}

// ------------------------------
// Tipos del FRONTEND (UI)
// ------------------------------
export interface CartItem {
  id: number;
  productId: number;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
}

export interface Cart {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
}

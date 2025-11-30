// Tipos
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  owner: "admin" | "viewer" | "guest";
  description: string;
  inStock: boolean;
}

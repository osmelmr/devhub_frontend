export interface ApiProduct {
  id: string;
  name: string;
  price: string;
  stock: number;
  image: string | null;
  created_at: string;
  updated_at: string;
  owner: string;
  owner_name: string;
  description: string | null;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string | null;
  inStock: boolean;
  owner: string;
  owner_name: string;
  description: string | null;
}

import type { ApiProduct } from "../types/products";
const BASE_URL = import.meta.env.VITE_API_URL + "pocket-store/products/";

// --- FETCH CENTRALIZADO ---
async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  console.log(url);

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error(
        "❌ Error del servidor:",
        response.status,
        response.statusText
      );
      const errorText = await response.text().catch(() => "");
      console.error("📦 Respuesta del servidor:", errorText);
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("⚠️ Error en request():", error);
    throw error;
  }
}

// --- SERVICIO ---
export const productService = {
  getProducts: async (): Promise<ApiProduct[]> => {
    const token = localStorage.getItem("access");
    const options: any = {};
    if (token) {
      options.headers = {};
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res: any = await request<ApiProduct[]>(BASE_URL, { ...options });
    console.log(res);
    return res;
  },

  getProduct: async (id: string): Promise<ApiProduct> => {
    const token = localStorage.getItem("access");
    const options: any = {};
    if (token) {
      options.headers = {};
      options.headers.Authorization = `Bearer ${token}`;
    }
    return request<ApiProduct>(`${BASE_URL}${id}`, { ...options });
  },

  createProduct: async (data: any): Promise<ApiProduct> => {
    const token = localStorage.getItem("access");
    return request<ApiProduct>(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  },

  updateProduct: async (id: string, data: any): Promise<ApiProduct> => {
    const token = localStorage.getItem("access");
    return request<ApiProduct>(`${BASE_URL}${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  },

  deleteProduct: async (id: string): Promise<void> => {
    const token = localStorage.getItem("access");
    return request<void>(`${BASE_URL}${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

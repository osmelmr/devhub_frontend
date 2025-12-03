import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "../api/services/productsServices";
import { productAdapter } from "../api/adapters/products";
import type { Product, ApiProduct } from "../api/types/products";

// 🔹 Obtener todos los productos
export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const apiProducts: ApiProduct[] = await productService.getProducts();
      return apiProducts.map(productAdapter);
    },
    staleTime: 1000 * 60, // 1 minuto
  });
}

// 🔹 Obtener un solo producto
export function useProduct(id: string) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const apiProduct = await productService.getProduct(id);
      return productAdapter(apiProduct);
    },
    enabled: !!id,
  });
}

// 🔹 Crear producto
export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<ApiProduct>) =>
      productService.createProduct(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

// 🔹 Actualizar producto
export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ApiProduct> }) =>
      productService.updateProduct(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

// 🔹 Eliminar producto
export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => productService.deleteProduct(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

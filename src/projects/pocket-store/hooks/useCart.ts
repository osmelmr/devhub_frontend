import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cartService } from "../api/services/cartServices";
import { cartAdapter } from "../api/adapters/cart";

// 🔹 Obtener el carrito
export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const apiCart = await cartService.getCart();
      return cartAdapter(apiCart); // transformación API → UI
    },
    staleTime: 1000 * 60, // 1 minuto
  });
}

// 🔹 Agregar producto
export function useAddToCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      productId,
      quantity,
    }: {
      productId: number;
      quantity?: number;
    }) => cartService.addToCart(productId, quantity),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

// 🔹 Eliminar producto
export function useRemoveFromCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) => cartService.removeFromCart(productId),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

// 🔹 Actualizar cantidad
export function useUpdateCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      productId,
      quantity,
    }: {
      productId: number;
      quantity: number;
    }) => cartService.updateCartItem(productId, quantity),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

// 🔹 Vaciar carrito
export function useClearCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => cartService.clearCart(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

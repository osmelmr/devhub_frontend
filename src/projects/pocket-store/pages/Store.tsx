import { useState } from "react";
// import { mockProducts } from "../mocks";
import { ProjectHeader } from "../components/layout/ProjectHeader";
import { CartSidebar } from "../components/store/CartSidebar";
import { ProductCard } from "../components/store/ProductCard";
import { useProducts } from "../hooks/useProducts";

export const StorePage = () => {
  const [openCart, setOpenCart] = useState(false);
  const { data: mockProducts, isLoading, error } = useProducts();
  if (error) {
    return <p>no carga</p>;
  }
  if (isLoading) {
    return <p>...cargando</p>;
  }
  return (
    <>
      <ProjectHeader title="Mini Store" />

      {/* Botón flotante SOLO en mobile */}
      <button
        onClick={() => setOpenCart(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 
        bg-indigo-600 text-white w-14 h-14 rounded-full shadow-lg
        flex items-center justify-center text-2xl"
      >
        🛒
      </button>

      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Columna principal */}
        <div className="lg:col-span-3 mx-auto w-full">
          {/* Filtros */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 w-full md:w-1/2">
              <input
                className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900"
                placeholder="Buscar productos..."
              />
            </div>

            <div className="flex items-center gap-2">
              <select className="rounded-md border px-3 py-2 bg-white dark:bg-gray-900">
                <option>Categoría: Todas</option>
                <option>UI</option>
                <option>Templates</option>
                <option>Components</option>
              </select>
              <button className="px-3 py-2 border rounded-md">Limpiar</button>
            </div>
          </div>

          {/* Grilla */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts &&
              mockProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>

        {/* Sidebar: responsive + controlado por estado */}
        <CartSidebar open={openCart} onClose={() => setOpenCart(false)} />
      </div>
    </>
  );
};

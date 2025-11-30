// portfolio-store-admin-components.tsx
// Plantilla TSX para Vite + React + Tailwind
// Incluye: Layout compartido, StorePage (grilla con filtros + carrito mock) y AdminPage (lista/tabla con acciones mock)
// TODO: reemplazar datos mock con llamadas al backend y conectar autenticación y lógica de carrito.

import { Outlet } from "react-router";

/* Layout compartido del portafolio (header principal + footer) */
export const StoreLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header global del portafolio: aquí van logo, navegación principal y botones globales (login, perfil) */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-4 items-center">
              <a
                className="hover:underline font-semibold"
                href="/projects/pocket-store"
              >
                Store
              </a>
              <a
                className="hover:underline"
                href="/projects/pocket-store/admin"
              >
                admin
              </a>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
                PF
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl  px-4 py-8 self-center mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="border-t dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <span className="text-sm">
            © {new Date().getFullYear()} - Pocket store
          </span>
        </div>
      </footer>
    </div>
  );
};

import { mockProducts } from "../mocks";
import { ProjectHeader } from "../components/layout/ProjectHeader";
import { AdminRow } from "../components/admin/AdminRow";

export const AdminPage = () => {
  return (
    <div className="mx-auto">
      <ProjectHeader title="Admin - Mini Store" />

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
        {/* Controles superiores: crear, eliminar varios, búsqueda */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 bg-green-600 text-white rounded-md">
              Crear Producto
            </button>
            <button className="px-3 py-2 border rounded-md">
              Eliminar seleccionados
            </button>
          </div>

          <div>
            <input
              className="rounded-md border px-3 py-2 bg-white dark:bg-gray-900"
              placeholder="Buscar..."
            />
          </div>
        </div>

        {/* Tabla editable (estética) */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Producto</th>
                <th className="px-4 py-2">Precio</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((p) => (
                <AdminRow key={p.id} product={p} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Panel derecho con detalles rápidos - opcional */}
        <div className="mt-6">
          <details className="bg-gray-50 dark:bg-gray-900 rounded p-3">
            <summary className="font-medium">
              Información adicional / atajos
            </summary>
            <div className="mt-3 text-sm text-gray-500">
              Aquí puedes mostrar logs, estado de sincronización con backend o
              acciones en lote.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

// Exporta los componentes para que puedas importarlos en tus rutas
/*
INSTRUCCIONES DE USO:
- Copia este archivo dentro de tu carpeta src/projects/store/portfolio-store-admin-components.tsx
- Importa { StorePage, AdminPage } y conéctalos a tu router (React Router V6 o similar):
    <Route path="/projects/store" element={<StorePage />} />
    <Route path="/projects/store/admin" element={<AdminPage />} />
- Conectar autenticación: usa la info de 'owner' para filtrar lo que ve cada usuario (admin, viewer, guest).
- Reemplaza mockProducts por datos reales (fetch/axios/swr/react-query) y conecta eventos onClick de botones.
- Todo el CSS está hecho con Tailwind; ajusta clases según tu paleta.
*/

import { ProjectHeader } from "../components/layout/ProjectHeader";

export const AddProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header del proyecto */}
      <ProjectHeader title="Agregar Producto" />

      {/* Contenedor principal */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Formulario de nuevo producto
        </h2>

        <form className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 transition-colors duration-300">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Nombre del producto
            </label>
            <input
              type="text"
              id="title"
              placeholder="Ej: Auriculares Bluetooth"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Descripción */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              id="description"
              placeholder="Descripción detallada del producto..."
              rows={4}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Precio */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="price">
              Precio ($)
            </label>
            <input
              type="number"
              id="price"
              placeholder="0.00"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              URL de la imagen
            </label>
            <input
              type="text"
              id="image"
              placeholder="https://..."
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categoría */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="category"
            >
              Categoría
            </label>
            <select
              id="category"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Electrónica</option>
              <option>Ropa</option>
              <option>Hogar</option>
              <option>Deportes</option>
              <option>Juguetes</option>
            </select>
          </div>

          {/* En stock */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="inStock"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="inStock" className="text-sm">
              Disponible en stock
            </label>
          </div>

          {/* Botón de enviar */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
            >
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

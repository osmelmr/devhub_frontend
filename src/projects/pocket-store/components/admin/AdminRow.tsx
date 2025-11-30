import type { Product } from "../../types/products";

/* Admin view: tabla/listado con acciones (editar, eliminar, crear, ver detalles) */
export const AdminRow = ({ product }: { product: Product }) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <td className="px-4 py-3">{product.id}</td>
      <td className="px-4 py-3 flex items-center gap-3">
        <img
          src={product.image}
          alt="thumb"
          className="w-12 h-8 object-cover rounded"
        />
        <div>
          <div className="font-medium">{product.title}</div>
          <div className="text-xs text-gray-500">{product.owner}</div>
        </div>
      </td>
      <td className="px-4 py-3">${product.price.toFixed(2)}</td>
      <td className="px-4 py-3">
        {product.inStock ? "Disponible" : "Agotado"}
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded text-sm">Editar</button>
          <button className="px-2 py-1 border rounded text-sm">Eliminar</button>
          <button className="px-2 py-1 border rounded text-sm">Ver</button>
        </div>
      </td>
    </tr>
  );
};

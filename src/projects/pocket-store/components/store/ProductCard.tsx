import type { Product } from "../../api/types/products";

/* Componente tarjeta individual para la Store (grilla visual y atractiva) */
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-44 md:h-56 w-full overflow-hidden">
        <img
          src={product.image ? product.image : ""}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <span className="absolute left-2 top-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            Agotado
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            <div className="text-xs text-gray-400">by {product.owner_name}</div>
          </div>

          <div className="flex items-center gap-2">
            {/* Botón 'Agregar al carrito' - conectar con la lógica que uses (zustand/redux/context) */}
            <button className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">
              Añadir
            </button>

            {/* Ver detalles */}
            <button className="px-3 py-2 rounded-md border text-sm">
              Detalles
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

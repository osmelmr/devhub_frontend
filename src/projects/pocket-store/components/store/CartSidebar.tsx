export function CartSidebar({ open, onClose }: any) {
  const items = [
    {
      id: 1,
      title: "Aurora Lamp",
      price: 45,
      img: "https://picsum.photos/seed/cart1/120",
      quantity: 2,
    },
    {
      id: 2,
      title: "Nebula Hoodie",
      price: 60,
      img: "https://picsum.photos/seed/cart2/120",
      quantity: 1,
    },
  ];

  return (
    <>
      {/* Fondo oscuro solo en móvil */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <aside
        className={`
          fixed md:static
          top-16 right-0
          w-80 md:w-72
          h-full md:max-h-screen
          bg-white dark:bg-gray-900
          border-l border-gray-200 dark:border-gray-800
          p-4 space-y-4 z-50
          overflow-y-auto transition-transform duration-300

          ${open ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}
      >
        {/* Botón cerrar (solo móvil) */}
        <button
          onClick={onClose}
          className="md:hidden mb-4 text-gray-700 dark:text-gray-200"
        >
          ✕ Cerrar
        </button>

        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Carrito
        </h2>

        {items.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tu carrito respira paz absoluta… no hay productos todavía.
          </p>
        )}

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-3 shadow-sm bg-gray-50 dark:bg-gray-800 flex gap-3"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex flex-col flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  ${item.price}
                </span>

                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() => console.log("restar", item)}
                  >
                    –
                  </button>

                  <span className="text-sm text-gray-900 dark:text-gray-100">
                    {item.quantity}
                  </span>

                  <button
                    className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() => console.log("sumar", item)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => console.log("comprar", item)}
                  className="mt-2 py-1.5 px-3 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Comprar
                </button>

                <button
                  onClick={() => console.log("eliminar", item)}
                  className="mt-1 py-1 px-3 text-xs text-red-600 dark:text-red-400 hover:underline w-fit"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

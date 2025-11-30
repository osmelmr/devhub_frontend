import React from "react";

export const Cart = () => {
  // === MOCK DATA ===
  const cartItems = [
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
    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md mx-auto">
      {/* TITLE */}
      <h2 className="text-xl font-bold mb-4">Carrito</h2>

      {/* ITEMS LIST */}
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 rounded-md object-cover"
            />

            {/* INFO */}
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm opacity-70">${item.price}</p>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-2 mt-2">
                <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                  -
                </button>

                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  {item.quantity}
                </span>

                <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                  +
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-2">
              <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded">
                Agregar
              </button>

              <button className="text-sm px-3 py-1 bg-red-500 text-white rounded">
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-4 border-t pt-4">
        <p className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>$150 {/* total mock */}</span>
        </p>

        <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-xl shadow">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

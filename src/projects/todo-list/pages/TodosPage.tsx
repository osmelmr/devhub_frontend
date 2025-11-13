export function TodosPage() {
  // Datos simulados
  const todos = [
    { id: 1, text: "Terminar el proyecto de React", done: true },
    { id: 2, text: "Estudiar PL/pgSQL", done: false },
    { id: 3, text: "Revisar correos del trabajo", done: false },
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <section className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        {/* Encabezado */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
            Mi lista de tareas
          </h1>

          {/* Formulario visual (sin lógica) */}
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="Escribe una tarea..."
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
            >
              Add
            </button>
          </form>
        </header>

        {/* Controles */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div>
            <span className="mr-2">Total: {todos.length}</span>
            <span>Completas: {todos.filter((t) => t.done).length}</span>
          </div>

          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">
              Todas
            </button>
            <button className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">
              Activas
            </button>
            <button className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">
              Completas
            </button>
          </div>
        </div>

        {/* Lista de tareas */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between bg-gray-50 p-3 rounded-xl border ${
                todo.done ? "border-green-400" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked={todo.done}
                  className="w-4 h-4 text-indigo-600 accent-indigo-600"
                />
                <span
                  className={`${
                    todo.done ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700 text-sm">
                  Editar
                </button>
                <button className="text-red-500 hover:text-red-700 text-sm">
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Pie */}
        <footer className="mt-6 flex justify-between items-center text-sm text-gray-500">
          <button className="hover:text-red-500">Limpiar completadas</button>
          <span className="italic">Tip: arrastra para reordenar</span>
        </footer>
      </section>
    </main>
  );
}

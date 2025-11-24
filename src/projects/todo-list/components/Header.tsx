import { useAppDispatch } from "../redux/storeHooks";
import { addTodo } from "../redux/todosSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleAdd = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const input = document.getElementById("input-todo") as HTMLInputElement;
    const text: string = input.value;
    dispatch(addTodo(text));
    input.value = "";
  };
  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
          Mi lista de tareas
        </h1>

        {/* Formulario visual (sin lógica) */}
        <form className="flex gap-2" onSubmit={handleAdd}>
          <input
            id="input-todo"
            type="text"
            placeholder="Escribe una tarea..."
            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Add
          </button>
        </form>
      </header>
    </>
  );
};

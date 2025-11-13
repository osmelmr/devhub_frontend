import type { TodoList } from "../types";

type ManagerProps = {
  todos: TodoList;
};

export const Manager: React.FC<ManagerProps> = ({ todos }) => {
  return (
    <>
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
    </>
  );
};

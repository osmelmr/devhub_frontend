import type { TodosHookType } from "../types";
import { ListOfTodos } from "./ListOfTodos";

export const Manager = ({
  todos,
  allTodos,
  doneTodos,
  undoneTodos,
}: TodosHookType) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <div>
          <span className="mr-2">Total: {todos.length}</span>
          <span>Completas: {todos.filter((t) => t.done).length}</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={allTodos}
            className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Todas
          </button>
          <button
            onClick={undoneTodos}
            className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Activas
          </button>
          <button
            onClick={doneTodos}
            className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Completas
          </button>
        </div>
      </div>
    </>
  );
};

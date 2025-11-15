import { useAppDispatch } from "../redux/storeHooks";
import { removeTodo, editTodo, toggleTodo } from "../redux/todosSlice";
import type { TodoType } from "../types";
import { useTodo } from "../hooks/useTodo";

type TodoProps = {
  key: string;
  todo: TodoType;
  onDragStart: (index: number) => void;
  onDrop: (index: number) => void;
  index: number;
};

export const Todo: React.FC<TodoProps> = ({
  todo,
  onDragStart,
  index,
  onDrop,
}) => {
  const { setEditState, refEditting, refInput } = useTodo();

  // manejo de edicion
  const handleEdit = () => {
    refEditting.current = refEditting.current ? false : true;
    setEditState(refEditting.current);
  };
  const handleCancel = () => {
    refEditting.current = false;
    setEditState(refEditting.current);
  };
  // fin manejo de edicion

  // bloque edicion de estado global
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };
  type SaveParams = {
    e: { preventDefault: () => void } | null;
    todo: TodoType;
  };
  const handleSave = ({ e, todo }: SaveParams) => {
    if (e) {
      e.preventDefault();
    }
    const text: string = refInput.current ? refInput.current.value : todo.text;
    const newTodo: TodoType = {
      ...todo,
      text: text,
    };
    dispatch(editTodo(newTodo));
    refEditting.current = false;
    setEditState(refEditting.current);
  };
  // fin del bloque edicion de estado global
  return (
    <li
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(index)}
      className={`flex items-center justify-between bg-gray-50 p-3 rounded-xl border ${
        todo.done ? "border-green-400" : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          defaultChecked={todo.done}
          className="w-4 h-4 text-indigo-600 accent-indigo-600"
          onChange={() => handleToggle(todo.id)}
        />
        <span
          className={`${
            todo.done && !refEditting.current
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {refEditting.current ? (
            <form onSubmit={(e) => handleSave({ e, todo })}>
              <input
                type="text"
                id={`edit-todo-${todo.id}`}
                ref={refInput}
                defaultValue={todo.text}
                className="border border-gray-300 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </form>
          ) : (
            <p onDoubleClick={handleEdit} className="px-2 py-1">
              {todo.text}
            </p>
          )}
        </span>
      </div>

      <div className="flex gap-2">
        {!refEditting.current ? (
          <>
            <button
              className="text-blue-500 hover:text-blue-700 text-sm"
              onClick={handleEdit}
            >
              Editar
            </button>
            <button
              className="text-red-500 hover:text-red-700 text-sm"
              onClick={() => handleDelete(todo.id)}
            >
              Eliminar
            </button>
          </>
        ) : (
          <>
            <button
              className="text-green-500 hover:text-blue-700 text-sm"
              onClick={() => {
                const e = null;
                return handleSave({ e, todo });
              }}
            >
              Save
            </button>
            <button
              className="text-red-500 hover:text-red-700 text-sm"
              onClick={handleCancel}
            >
              cancel
            </button>
          </>
        )}
      </div>
    </li>
  );
};

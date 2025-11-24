import { useState } from "react";
import type { TodoList } from "../types";
import { Todo } from "./Todo";
import { useAppDispatch } from "../redux/storeHooks";
import { changeOrder } from "../redux/todosSlice";

type Props = {
  todos: TodoList;
};

export const ListOfTodos: React.FC<Props> = ({ todos }) => {
  const [initIndex, setInitIndex] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const onDragStart = (index: number) => {
    setInitIndex(index);
  };
  const onDrop = (index: number) => {
    dispatch(changeOrder({ actual: initIndex, nueva: index }));
  };

  return (
    <>
      <ul className="space-y-3 dark:space-y-3">
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDragStart={onDragStart}
            index={index}
            onDrop={onDrop}
          />
        ))}
      </ul>
    </>
  );
};

import { useState } from "react";
import type { TodoList } from "../types";
import { Todo } from "./Todo";

type Props = {
  todos: TodoList;
  setTodos: (todos: TodoList) => void;
};

export const ListOfTodos: React.FC<Props> = ({ todos, setTodos }) => {
  const [initIndex, setInitIndex] = useState<number | null>(null);

  const onDragStart = (index: number) => {
    setInitIndex(index);
  };
  const onDrop = (index: number) => {
    let newTodos = [...todos];
    const draggedTodo = todos[initIndex as number];

    newTodos.splice(initIndex as number, 1);
    newTodos.splice(index, 0, draggedTodo);
    setTodos(newTodos);
    console.log("Drop index:", index);
  };

  return (
    <>
      <ul className="space-y-3">
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

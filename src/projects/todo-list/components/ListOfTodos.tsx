import type { TodoList } from "../types";
import { Todo } from "./Todo";

type Props = {
  todos: TodoList;
};

export const ListOfTodos: React.FC<Props> = ({ todos }) => {
  return (
    <>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

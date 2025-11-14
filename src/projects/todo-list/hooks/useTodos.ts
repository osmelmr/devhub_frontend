import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/storeHooks";
import type { TodoType } from "../types";
import type { TodoList } from "../types";

export const useTodos = () => {
  const todosState: TodoList = useAppSelector(
    (state) => state.todos
  ) as TodoList;
  const [todos, setTodos] = useState<TodoList>(todosState);

  useEffect(() => {
    setTodos(todosState);
  }, [todosState]);

  const doneTodos = () => {
    setTodos(todosState.filter((t: TodoType) => t.done));
  };
  const undoneTodos = () => {
    setTodos(todosState.filter((t: TodoType) => !t.done));
  };
  const allTodos = () => {
    setTodos(todosState);
  };

  return { todos, doneTodos, undoneTodos, allTodos };
};

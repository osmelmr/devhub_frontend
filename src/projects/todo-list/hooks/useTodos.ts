import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/storeHooks";
import type { TodoType } from "../types";
import type { TodoList } from "../types";

interface FiltersType {
  doneTodos: boolean;
  allTodos: boolean;
}

export const useTodos = () => {
  const todosState: TodoList = useAppSelector(
    (state) => state.todos
  ) as TodoList;

  const [todos, setTodos] = useState<TodoList>(todosState);

  const [filters, setFilters] = useState<FiltersType>({
    doneTodos: false,
    allTodos: true,
  });
  const { aplyFilters } = useFilters({ filters, setTodos });

  useEffect(() => {
    aplyFilters(filters);
  }, [todosState]);

  const doneTodos = () => {
    setFilters((prev) => ({ ...prev, doneTodos: true }));
    setFilters((prev) => ({ ...prev, allTodos: false }));
  };
  const undoneTodos = () => {
    setFilters((prev) => ({ ...prev, doneTodos: false }));
    setFilters((prev) => ({ ...prev, allTodos: false }));
  };
  const allTodos = () => {
    setFilters((prev) => ({ ...prev, allTodos: true }));
  };
  return { todos, doneTodos, undoneTodos, allTodos };
};

interface PropsFilter {
  filters: FiltersType;
  setTodos: (data: TodoList) => void;
}

export const useFilters = ({ filters, setTodos }: PropsFilter) => {
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
    aplyFilters(filters);
  }, [filters]);

  const aplyFilters = (filters: FiltersType) => {
    const stringStorageTodos: string = localStorage.getItem("todos") as string;
    const todos: TodoList = JSON.parse(stringStorageTodos);

    if (filters.doneTodos && !filters.allTodos) {
      setTodos(todos.filter((t: TodoType) => t.done));
    }
    if (filters.allTodos) {
      setTodos(todos);
    }
    if (!filters.doneTodos && !filters.allTodos) {
      setTodos(todos.filter((t: TodoType) => !t.done));
    }
  };

  return { aplyFilters };
};

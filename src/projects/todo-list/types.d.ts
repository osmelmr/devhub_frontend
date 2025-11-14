export type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoList = TodoType[];

export interface TodosHookType {
  todos: TodoList;
  doneTodos: () => void;
  undoneTodos: () => void;
  allTodos: () => void;
}

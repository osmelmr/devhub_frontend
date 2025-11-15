import { createSlice } from "@reduxjs/toolkit";
import type { TodoList, TodoType } from "../types";
import { v4 as uuidv4 } from "uuid";

// Datos simulados
const todos = [
  { id: "1", text: "Terminar el proyecto de React", done: true },
  { id: "2", text: "Estudiar PL/pgSQL", done: true },
  { id: "3", text: "Revisar correos del trabajo", done: false },
];
let initTodos: TodoList = todos;

const storageTodos = localStorage.getItem("todos");
if (!storageTodos) {
  localStorage.setItem("todos", JSON.stringify(todos));
} else {
  initTodos = JSON.parse(storageTodos);
}

const initialState: TodoList = initTodos;

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: TodoType = {
        id: uuidv4(),
        text: action.payload,
        done: false,
      };
      const newState = [...state];
      newState.push(newTodo);

      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    toggleTodo: (state, action) => {
      const newState = state.map((t) => {
        if (t.id === action.payload) {
          return { ...t, done: !t.done };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    removeTodo: (state, action) => {
      const newState = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    editTodo: (state, action) => {
      const newState = state.map((t) => {
        if (t.id === action.payload.id) {
          return { ...action.payload };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    removeDone: (state) => {
      const newState = state.filter((t) => !t.done);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    changeOrder: (state, action) => {
      const newState = [...state];
      const todo: TodoType = { ...newState[action.payload.actual] };
      newState.splice(action.payload.actual, 1);
      newState.splice(action.payload.nueva, 0, todo);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  removeDone,
  changeOrder,
} = todosSlice.actions;
export default todosSlice.reducer;

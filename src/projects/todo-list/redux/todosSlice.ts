import { createSlice } from "@reduxjs/toolkit";
import type { TodoList, TodoType } from "../types";

// Datos simulados
const todos = [
  { id: 1, text: "Terminar el proyecto de React", done: true },
  { id: 2, text: "Estudiar PL/pgSQL", done: true },
  { id: 3, text: "Revisar correos del trabajo", done: false },
];
const initialState: TodoList = todos;

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: TodoType = { id: 0, text: action.payload, done: false };
      let value = 0;
      for (const todo of state) {
        if (todo.id > value) {
          newTodo.id = todo.id;
        }
      }
      newTodo.id += 1;
      newTodo.done = false;
      console.log(newTodo);
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action) => {
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return { ...action.payload };
        }
        return t;
      });
    },
    removeDone: (state) => {
      return state.filter((t) => !t.done);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo, removeDone } =
  todosSlice.actions;
export default todosSlice.reducer;

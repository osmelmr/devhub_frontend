import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

// Debug: ensure reducer is defined and a function
console.log("todosReducer (type):", typeof todosReducer);
console.log("todosReducer (value):", todosReducer);
if (
  !todosReducer ||
  (typeof todosReducer !== "function" && typeof todosReducer !== "object")
) {
  throw new Error(
    "todosReducer is invalid — expected function or reducer object. Check todosSlice export."
  );
}

export const todosStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof todosStore.getState>;
export type AppDispatch = typeof todosStore.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

export const todosStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof todosStore.getState>;
export type AppDispatch = typeof todosStore.dispatch;

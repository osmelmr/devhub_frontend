import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import temeReducer from "./temeSlice.ts";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    teme: temeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

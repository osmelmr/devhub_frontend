import { createSlice } from "@reduxjs/toolkit";

// Leer el tema guardado, o usar false por defecto
const initialTheme = localStorage.getItem("theme") === "dark";

const temeReducer = createSlice({
  name: "teme",
  initialState: initialTheme,
  reducers: {
    toggleTeme: (state) => {
      const newState = !state;
      localStorage.setItem("theme", newState ? "dark" : "light");

      // Aplicar clase al root
      const doc = document.getElementById("root");
      if (doc) {
        doc.classList.toggle("dark", newState);
      }

      return newState;
    },
  },
});

export default temeReducer.reducer;
export const { toggleTeme } = temeReducer.actions;

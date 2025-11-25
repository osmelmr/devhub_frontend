import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthContextProvider } from "./auth";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </Provider>
);

// https://res.cloudinary.com/dctwk3rlf/image/upload/v1763953034/fdn44ch37fuhcjivb6br.png

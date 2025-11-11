import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeLayout } from "./layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

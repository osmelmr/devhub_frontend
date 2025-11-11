import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { AnotherPage } from "./pages/AnotherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "otra/",
        element: <AnotherPage />,
      },
    ],
  },
]);

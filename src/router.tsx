import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Index } from "./layouts/Index";
import { Projects } from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { TodosMain } from "./projects/todo-list/TodosMain";
import { CloudinaryExample } from "./components/CloudinaryExample";
import { Profile } from "./pages/Profile";
import { StoreLayout } from "./projects/pocket-store/layouts/StoreLayout";
import { AdminPage } from "./projects/pocket-store/pages/Admin";
import { StorePage } from "./projects/pocket-store/pages/Store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "account",
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/todo-list",
        element: <TodosMain />,
      },
      {
        path: "projects/pocket-store/",
        element: <StoreLayout />,
        children: [
          {
            path: "admin",
            element: <AdminPage />,
          },
          {
            path: "",
            element: <StorePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/example",
    element: <CloudinaryExample />,
  },
]);

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
        path: "projects",
        element: <Projects />,
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
        path: "projects/todo-list",
        element: <TodosMain />,
      },
      {
        path: "account",
        element: <Profile />,
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

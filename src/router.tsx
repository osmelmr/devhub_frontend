import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Index } from "./layouts/Index";
import { Projects } from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { TodosMain } from "./projects/todo-list/TodosMain";

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
    ],
  },
]);

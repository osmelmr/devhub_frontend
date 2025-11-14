import { TodosPage } from "./pages/TodosPage";
import { Provider } from "react-redux";
import { todosStore } from "./redux/todosStore";

export const TodosMain = () => {
  return (
    <Provider store={todosStore}>
      <TodosPage />
    </Provider>
  );
};

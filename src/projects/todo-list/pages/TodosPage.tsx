import { ListOfTodos } from "../components/ListOfTodos";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Manager } from "../components/Manager";
import { useTodos } from "../hooks/useTodos";
import type { TodosHookType } from "../types";

export function TodosPage() {
  const filters: TodosHookType = useTodos();
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <section className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        {/* Encabezado */}
        <Header />
        {/* Controles */}
        <Manager {...filters} />

        {/* Lista de tareas */}
        <ListOfTodos todos={filters.todos} setTodos={filters.setTodos} />
        {/* Pie */}
        <Footer />
      </section>
    </main>
  );
}

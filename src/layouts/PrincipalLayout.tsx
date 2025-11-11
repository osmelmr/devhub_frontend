import { Outlet } from "react-router";

export const PrincipalLayout = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <a
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            DevHub
          </a>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li>
              <a
                href="/projects"
                className="hover:text-blue-600 transition-colors"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-blue-600 transition-colors"
              >
                Iniciar sesión
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="hover:text-blue-600 transition-colors"
              >
                Registrarse
              </a>
            </li>
          </ul>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      <Outlet />
      <footer>PrincipalLayoutFooter</footer>
    </>
  );
};

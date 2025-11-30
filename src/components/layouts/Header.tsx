import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleTeme } from "../../redux/temeSlice";
import { useAuth } from "../../hooks/useAuth";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const darkMode = useAppSelector((teme) => teme.teme);
  const dispatch = useAppDispatch();

  const { isAuthenticated: isAuth, logout, user } = useAuth();

  const userMenuRef = useRef<HTMLLIElement | null>(null);
  const navigate = useNavigate();

  // Aplicar tema dark/light en <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Cerrar dropdown si clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-100 transition-colors">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          DevHub
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-8 font-medium items-center text-gray-800 dark:text-gray-200">
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Proyectos
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Sobre mí
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contacto
            </Link>
          </li>

          {/* BOTÓN DE TEMA */}
          <li>
            <button
              onClick={() => dispatch(toggleTeme())} // CORRECTO
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>

          {/* AUTH SECTION */}
          {!isAuth ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  Registrarse
                </Link>
              </li>
            </>
          ) : (
            <li className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <img
                  src={
                    user?.avatar_url
                      ? user.avatar_url
                      : "https://res.cloudinary.com/dctwk3rlf/image/upload/v1763953034/fdn44ch37fuhcjivb6br.png"
                  }
                  alt="avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-semibold">
                  {user?.first_name ? user.first_name : user?.username}
                </span>
                ▼
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md">
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-gray-800 dark:text-gray-200"
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
          <ul className="flex flex-col items-center py-4 space-y-3 font-medium text-gray-800 dark:text-gray-200">
            {/* THEME MOBILE */}
            <li>
              <button
                onClick={() => dispatch(toggleTeme())} // USAR REDUX TAMBIÉN
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>

            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Proyectos
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                Sobre mí
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
            </li>

            {!isAuth ? (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 rounded-md bg-blue-600 text-white"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/account" onClick={() => setMenuOpen(false)}>
                    Mi Cuenta
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="text-red-600 dark:text-red-400"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

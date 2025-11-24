import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState<{ name?: string; username?: string } | null>(
    null
  );

  const userMenuRef = useRef<HTMLLIElement | null>(null);
  const navigate = useNavigate();

  /* ---------------------------------------------------
     Cargar usuario y autenticación simulada
  ---------------------------------------------------- */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);

      setUser({
        name: "Osmel",
        username: "osmel.dev",
      });
    } else {
      setIsAuth(false);
      setUser(null);
    }
  }, []);

  /* ---------------------------------------------------
     BOTÓN DE TEMA (SOLO ICONO — SIN CAMBIAR TEMA)
  ---------------------------------------------------- */
  const toggleTheme = () => {
    console.log("Aquí se cambiaría el tema (pendiente)");
  };

  /* ---------------------------------------------------
     Cerrar dropdown si clic fuera
  ---------------------------------------------------- */
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

  /* ---------------------------------------------------
     Logout
  ---------------------------------------------------- */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DevHub
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li>
            <Link to="/projects" className="hover:text-blue-600">
              Proyectos
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              Sobre mí
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contacto
            </Link>
          </li>

          {/* BOTÓN DE TEMA (solo icono, sin cambiar tema) */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 hover:scale-105 transition"
            >
              <FaMoon />
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
                  className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                >
                  Registrarse
                </Link>
              </li>
            </>
          ) : (
            <li className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="font-semibold">
                  {user?.name ? user.name : user?.username}
                </span>
                ▼
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md">
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
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
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3 font-medium">
            {/* THEME MOBILE */}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 hover:scale-105 transition"
              >
                <FaMoon />
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
                    className="px-4 py-2 rounded-md bg-gray-200"
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
                    className="text-red-600"
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

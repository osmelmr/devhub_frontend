import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-8 mt-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              DevHub
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Plataforma personal para mostrar y gestionar proyectos web
              desarrollados con React, TypeScript y Django REST.
            </p>
          </div>

          {/* ENLACES DE NAVEGACIÓN */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/projects"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Registrarse
                </a>
              </li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
              Sígueme
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:tuemail@devhub.com"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* LÍNEA INFERIOR */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
          © {currentYear} DevHub. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

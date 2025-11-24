import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Crear Cuenta
        </h2>

        {/* Formulario */}
        <form className="space-y-5">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Usuario (obligatorio)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nombre de usuario"
            />
          </div>

          {/* Email opcional */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Correo (opcional)
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* Avatar opcional */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Avatar (opcional)
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="********"
            />
          </div>

          {/* Confirm password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="********"
            />
          </div>

          {/* Botón */}
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 
                       rounded-lg transition"
          >
            Crear Cuenta
          </button>
        </form>

        {/* Enlace a login */}
        <p className="text-center text-sm mt-5 text-gray-600 dark:text-gray-400">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

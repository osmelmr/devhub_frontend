import { Link } from "react-router-dom";
import { useState } from "react";

export function Register() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        {/* Título */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Crear Cuenta
        </h2>

        {/* Avatar al inicio */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full border border-gray-400 dark:border-gray-600 shadow-md flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 dark:text-gray-300 text-sm">
                Sin avatar
              </span>
            )}
          </div>

          {/* Input de archivo */}
          <label className="mt-3 text-sm text-gray-700 dark:text-gray-300 font-medium cursor-pointer">
            Seleccionar avatar
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Formulario */}
        <form className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
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
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nombre de usuario"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Correo (opcional)
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
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
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
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
        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
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

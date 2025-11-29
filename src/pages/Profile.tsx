import { useAuth } from "../hooks/useAuth";
import { deleteAvatar } from "../apis/userApis";

export const Profile = () => {
  const { user } = useAuth();
  const handleClick = async () => {
    try {
      const data = await deleteAvatar();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Mi Perfil
          </h1>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-transform hover:scale-105"
          >
            ✏️ Editar
          </button>
        </div>

        {/* Avatar + Info */}
        <div className="px-6 py-8 flex flex-col items-center">
          <button onClick={handleClick}>eliminar avatar</button>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            {user?.avatar_url ? (
              <>
                <img
                  src={user.avatar_url}
                  alt={`Avatar de ${user.username}`}
                  className="w-full h-full object-cover"
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Sin avatar
                </span>
              </div>
            )}
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">@{user?.username}</p>
          <span className="mt-2 inline-block px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {user?.role === "admin" ? "Administrador" : "Usuario"}
          </span>
        </div>

        {/* Details */}
        <div className="px-6 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">
              Nombre
            </p>
            <p className="mt-1 text-lg text-gray-900 dark:text-white">
              {user?.first_name || "—"}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">
              Apellido
            </p>
            <p className="mt-1 text-lg text-gray-900 dark:text-white">
              {user?.last_name || "—"}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">
              Usuario
            </p>
            <p className="mt-1 text-lg text-gray-900 dark:text-white">
              {user?.username || "—"}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">
              Correo
            </p>
            <p className="mt-1 text-lg text-gray-900 dark:text-white">
              {user?.email || "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

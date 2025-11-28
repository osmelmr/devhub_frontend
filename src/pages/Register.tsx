import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "../types/formUserType";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { uploadImage } from "../apis/cloudinaryApis";
import type { UserCreate } from "../types/usersTypes";

export function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const avatarInputRef = useRef<HTMLInputElement | null>(null);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result as string);
    reader.readAsDataURL(file);

    // Registrar el archivo en react-hook-form
    setValue("avatar_file", e.target.files as any);
  };

  const clearAvatar = () => {
    setAvatarPreview(null);
    setValue("avatar_file", undefined);
    setValue("avatar_url", "");

    if (avatarInputRef.current) {
      avatarInputRef.current.value = "";
    }
  };

  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data: RegisterFormData) => {
    let avatar_url = "";
    let avatar_public_id = "";

    if (data.avatar_file && data.avatar_file[0]) {
      try {
        const res = await uploadImage("avatar", data.avatar_file[0]);
        avatar_url = res.secure_url;
        avatar_public_id = res.public_id;
      } catch {
        console.log("error al guardar imagen");
      }
    }
    const newData: UserCreate = {
      avatar_url: avatar_url ? avatar_url : undefined,
      avatar_public_id: avatar_public_id ? avatar_public_id : undefined,
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      email: data.email,
    };

    try {
      await registerUser(newData);
      navigate("/");
    } catch (error) {
      console.log("error al crear el usuario");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Crear Cuenta
        </h2>

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

          <label className="mt-3 text-sm text-gray-700 dark:text-gray-300 font-medium cursor-pointer">
            Seleccionar avatar
            <input
              type="file"
              accept="image/*"
              className="hidden"
              {...register("avatar_file")}
              onChange={handleAvatarChange}
              ref={avatarInputRef}
            />
          </label>

          {avatarPreview && (
            <button
              onClick={clearAvatar}
              type="button"
              className="mt-2 text-red-500 text-sm font-medium hover:underline"
            >
              Quitar avatar
            </button>
          )}

          {errors.avatar_file && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors.avatar_file.message}`}
            </p>
          )}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Nombre
            </label>
            <input
              type="text"
              {...register("first_name")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tu nombre"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Usuario (obligatorio)
            </label>
            <input
              type="text"
              {...register("username")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nombre de usuario"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Correo (opcional)
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="correo@ejemplo.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Confirmar contraseña
            </label>
            <input
              type="password"
              {...register("password_confirm")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         dark:text-white border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="********"
            />
            {errors.password_confirm && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password_confirm.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 
                       rounded-lg transition"
          >
            Crear Cuenta
          </button>
        </form>

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

import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "../types/formUserType";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { uploadImage } from "../apis/cloudinaryApis";
import type { UserCreate } from "../types/usersTypes";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

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

    setValue("avatar_file", e.target.files as any);
  };

  const clearAvatar = () => {
    setAvatarPreview(null);
    setValue("avatar_file", undefined);
    setValue("avatar_url", "");

    if (avatarInputRef.current) avatarInputRef.current.value = "";
  };

  const { registerUser, loginSocial } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    let avatar_url = "";
    let avatar_public_id = "";

    if (data.avatar_file?.[0]) {
      try {
        const res = await uploadImage("avatar", data.avatar_file[0]);
        avatar_url = res.secure_url;
        avatar_public_id = res.public_id;
      } catch {
        console.log("Error al guardar imagen");
      }
    }

    const newData: UserCreate = {
      avatar_url: avatar_url || undefined,
      avatar_public_id: avatar_public_id || undefined,
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      email: data.email,
    };

    try {
      await registerUser(newData);
      navigate("/");
    } catch {
      console.log("Error al crear el usuario");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const client = google.accounts.oauth2.initTokenClient({
        client_id:
          "641920284570-1if23hcfa9dl2hvn742qllmag3eg5g5v.apps.googleusercontent.com",
        scope: "email profile openid",
        callback: async (response: any) => {
          if (response.access_token) {
            try {
              await loginSocial("google", response.access_token);
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          }
        },
      });
      client.requestAccessToken();
    } catch (error) {
      console.error("Error with Google login:", error);
    }
  };

  return (
    <div className="flex items-start justify-center bg-gray-100 dark:bg-gray-900 px-4 py-8 min-h-[auto]">
      <div
        className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 
                 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* FORMULARIO */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Crear Cuenta
          </h2>

          {/* Avatar */}
          <div className="flex flex-col items-center mb-4">
            <div
              className="w-20 h-20 rounded-full border border-gray-400 dark:border-gray-600 
                       shadow-md flex items-center justify-center overflow-hidden 
                       bg-gray-200 dark:bg-gray-700"
            >
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

            <label className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium cursor-pointer">
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
                className="mt-1 text-red-500 text-sm font-medium hover:underline"
              >
                Quitar avatar
              </button>
            )}

            {errors.avatar_file && (
              <p className="text-red-500 text-sm mt-1">{`${errors.avatar_file.message}`}</p>
            )}
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                Nombre (opcional)
              </label>
              <input
                type="text"
                {...register("first_name")}
                className="w-full px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 
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
                Correo
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 
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
                className="w-full px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 
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
                className="w-full px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 
                       rounded-lg transition"
            >
              Crear Cuenta
            </button>
          </form>

          <p className="text-center text-sm mt-3 text-gray-600 dark:text-gray-400">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>

        {/* COLUMNA DERECHA - SOCIAL LOGIN */}
        <div className="flex flex-col justify-start space-y-3 border-t pt-4 md:pt-0 md:border-t-0 md:border-l dark:border-gray-700 md:pl-4">
          <h3 className="text-center text-gray-700 dark:text-gray-300 font-semibold">
            O registrarse con
          </h3>

          <button
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 
                     dark:bg-gray-700 dark:border-gray-600 py-1.5 rounded-lg hover:bg-gray-50 
                     dark:hover:bg-gray-600 transition"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Google
            </span>
          </button>

          {/* <button
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-1.5 
                     rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

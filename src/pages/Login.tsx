import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../hooks/useAuth";
//import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
//import { FaGithub } from "react-icons/fa";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const schema = z.object({
  email: z.string().email("El email es obligatorio"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

type LoginForm = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();
  const { login, loginSocial } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data: LoginForm) => {
    console.log("Datos enviados:", data);
    try {
      await login(data);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  // access_token
  const loginWithGoogle = async () => {
    try {
      const client = google.accounts.oauth2.initTokenClient({
        client_id: googleClientId,
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

  // id_token

  // useEffect(() => {
  //   // 1. Inicializar Google Identity
  //   google.accounts.id.initialize({
  //     client_id:googleClientId,,
  //     callback: async (response: any) => {
  //       // Enviar directamente el JWT a tu API
  //       try {
  //         await loginSocial("google", response.credential);
  //         navigate("/");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //   });

  //   // 2. Mostrar el botón
  //   google.accounts.id.renderButton(document.getElementById("googleButton"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Iniciar Sesión
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Usuario
            </label>

            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="aias@gmail.com"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Contraseña
            </label>

            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Escribe tu contraseña"
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
          >
            Entrar
          </button>
        </form>

        {/* 🔥 Botones sociales */}
        <div className="mt-6 space-y-3">
          <button
            className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="w-5 h-5" />
            Continuar con Google
          </button>
          {/* <div id="googleButton"></div> */}

          {/* <button className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <FaGithub className="w-5 h-5" />
            Continuar con GitHub
          </button> */}
        </div>

        <p className="text-center text-sm mt-5 text-gray-600 dark:text-gray-400">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}

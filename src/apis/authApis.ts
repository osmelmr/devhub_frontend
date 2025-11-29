import type { UserBase, UserCreate, UserRegister } from "../types/usersTypes";

const BASE_URL = import.meta.env.VITE_API_URL;

// Obtener información del usuario actual
export const getMe = async (token: string): Promise<UserBase> => {
  const res = await fetch(`${BASE_URL}users/auth/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error al obtener usuario actual");
  return res.json();
};

export const getTokens = async (email: string, password: string) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/v1/users/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    const data = await res.json();
    // data tendrá { access, refresh }
    return data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return null;
  }
};

export const registerApi = async (data: UserCreate): Promise<UserRegister> => {
  const res = await fetch(`${BASE_URL}users/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear usuario");
  return res.json();
};

export const loginSocialGoogle = async (token: string) => {
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/users/auth/social-login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: "google",
          token,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      // Lanza un error con el mensaje del servidor
      throw new Error(data.detail || data.message || "Error en login social");
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error en login social:", error);
    // Relanza el error para que el componente lo capture
    throw error;
  }
};

import type { UserBase, UserCreate, UserRegister } from "../types/usersTypes";

const BASE_URL = import.meta.env.VITE_API_URL;

// Obtener información del usuario actual
export const getMe = async (token: string): Promise<UserBase> => {
  const res = await fetch(`${BASE_URL}users/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error al obtener usuario actual");
  return res.json();
};

export const getTokens = async (username: string, password: string) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/v1/auth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
  const res = await fetch(`${BASE_URL}users/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear usuario");
  return res.json();
};

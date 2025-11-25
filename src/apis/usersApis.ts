// usersApis.ts
import type {
  UserBase,
  UserCreate,
  UserUpdate,
  UserList,
} from "../types/usersTypes";

const BASE_URL = "http://127.0.0.1:8000/api/v1/users/";

// Obtener todos los usuarios (puedes usar UserList si quieres solo campos ligeros)
export const getUsers = async (): Promise<UserList[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return res.json();
};

// Obtener un usuario por ID
export const getUserById = async (id: string): Promise<UserBase> => {
  const res = await fetch(`${BASE_URL}${id}/`);
  if (!res.ok) throw new Error("Error al obtener usuario");
  return res.json();
};

// Crear un nuevo usuario
export const createUser = async (data: UserCreate): Promise<UserBase> => {
  const res = await fetch(`${BASE_URL}create/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear usuario");
  return res.json();
};

// Actualizar un usuario
export const updateUser = async (
  id: string,
  data: UserUpdate
): Promise<UserBase> => {
  const res = await fetch(`${BASE_URL}update/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar usuario");
  return res.json();
};

// Eliminar un usuario
export const deleteUser = async (
  id: string
): Promise<{ success: boolean; message?: string }> => {
  const res = await fetch(`${BASE_URL}delete/${id}/`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar usuario");
  return res.json();
};

// Eliminar varios usuarios
export const deleteUsers = async (
  ids: string[]
): Promise<{ success: boolean; message?: string }> => {
  const res = await fetch(`${BASE_URL}delete/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  });
  if (!res.ok) throw new Error("Error al eliminar usuarios");
  return res.json();
};

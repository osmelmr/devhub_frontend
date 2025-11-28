// usersTypes.ts

// Base que refleja el usuario del backend
export interface UserBase {
  id: string;
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: "admin" | "viewer";
  avatar_url?: string;
  projects?: number[];
  avatar_public_id?: string;
}

export interface UserRegister {
  access: string;
  refresh: string;
  user: UserBase;
}
// Para crear un usuario
export interface UserCreate extends Omit<UserBase, "id" | "projects"> {
  password: string; // obligatorio al crear
  avatar_url?: string; // opcional, la URL de Cloudinary
}

// Para actualizar un usuario
export interface UserUpdate extends Partial<Omit<UserBase, "id">> {
  password?: string; // opcional si se desea cambiar
}

// Para listar usuarios (puede ser más liviana)
export interface UserList
  extends Pick<UserBase, "id" | "username" | "avatar_url" | "role"> {}

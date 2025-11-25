import { createContext, useEffect, useState, type ReactNode } from "react";
import { getMe, getTokens } from "./apis/authApis";
import type { UserBase } from "./types/usersTypes";

interface LoginType {
  username: string;
  password: string;
}

interface ContextType {
  user: UserBase | null;
  logout: () => void;
  isAuthenticated: boolean;
  login: ({}: LoginType) => {};
}

export const AuthContext = createContext<ContextType | null>(null);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserBase | null>(null);

  useEffect(() => {
    console.log(user);
    const getUser = async () => {
      const access = localStorage.getItem("access");
      console.log(access);
      if (access) {
        const data = await getMe(access);
        setUser(data);
      }
    };
    getUser();
  }, []);

  const login = async ({ username, password }: LoginType) => {
    const data = await getTokens(username, password);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    console.log("");
    console.log("access :", data.access);
    console.log("");
    console.log("refresh :", data.refresh);
    console.log("");
    const user = await getMe(data.access);
    setUser(user);
  };
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

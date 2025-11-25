import { createContext, useEffect, useState, type ReactNode } from "react";
import { getMe, getTokens } from "./apis/authApis";
import type { UserBase } from "./types/usersTypes";

interface ContextType {
  user: UserBase | null;
  logout: () => void;
  isAuthenticated: boolean;
  login: (username: string, password: string) => {};
}

export const AuthContext = createContext<ContextType | null>(null);

export const AuthCOntextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserBase | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const access = localStorage.getItem("access");
      if (access) {
        const data = await getMe(access);
        setUser(data);
      }
    };
    getUser();
  }, []);

  const login = async (username: string, password: string) => {
    const data = await getTokens(username, password);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
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

import { createContext, useEffect, useState, type ReactNode } from "react";
import { getMe, getTokens, loginSocialGoogle } from "./apis/authApis";
import type { UserBase, UserCreate } from "./types/usersTypes";
import { registerApi } from "./apis/authApis";

interface LoginType {
  email: string;
  password: string;
}

interface ContextType {
  user: UserBase | null;
  logout: () => void;
  isAuthenticated: boolean;
  login: ({}: LoginType) => {};
  registerUser: (formData: UserCreate) => void;
  loginSocial: (service: "google" | "github", token: any) => void;
}

export const AuthContext = createContext<ContextType | null>(null);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserBase | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const access = localStorage.getItem("access");
      console.log(access);
      if (access) {
        const data = await getMe(access);
        console.log(data);
        setUser(data);
      }
    };
    getUser();
  }, []);

  const registerUser = async (formData: UserCreate) => {
    const data = await registerApi(formData);
    setUser(data.user);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
  };

  const login = async ({ email, password }: LoginType) => {
    const data = await getTokens(email, password);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    const user = await getMe(data.access);
    setUser(user);
  };
  const loginSocial = async (service: "google" | "github", token: any) => {
    try {
      let res;
      if (service === "google") {
        res = await loginSocialGoogle(token);
      }
      if (service === "github") {
        console.log("coming soon");
      }
      setUser(res.user);
      localStorage.setItem("access", res.access);
      localStorage.setItem("refresh", res.refresh);
    } catch (error) {}
  };
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        registerUser,
        loginSocial,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

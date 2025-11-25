import { AuthContext } from "../auth";
import { useContext } from "react";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("useAuth debe usarse dentro de AuthContextProvider");
  return authContext;
};

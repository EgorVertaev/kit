import { useContext } from "react";
import { AuthContext } from "../Hoc/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext)
}
import { User } from "firebase/auth";
import { createContext } from "react";

// interfaces
export interface AuthContextReturnType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextReturnType | null>(null);

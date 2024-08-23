import { createContext, useContext, useState } from "react";

interface AuthContextData {
  user: IUser | null;
  login: (newUser: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | null>(null);

interface IUser {
  name: string;
  email: string;
}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (newUser: IUser) => {
    setUser(newUser);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  } else {
    throw new Error("error hai");
  }
};

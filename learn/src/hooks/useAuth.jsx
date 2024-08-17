import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const loginUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    setIsLoading(true);
    const userLS = localStorage.getItem("user");
    if (userLS) {
      setUser(userLS);
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>loading</p>;
  else
    return (
      <AuthContext.Provider
        value={{
          user,
          loginUser,
          logoutUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("context is not working");
  }
  return context;
};

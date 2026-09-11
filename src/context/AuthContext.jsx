import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("gita-user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    localStorage.setItem("gita-user", JSON.stringify(userData));

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("gita-user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}

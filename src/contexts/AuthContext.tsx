import React, { createContext, useContext, useState } from "react";
import { validateCredentials, saveAuthToken, clearAuthToken, isAuthenticated as checkAuthStatus } from "../utils/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(checkAuthStatus());

  const login = (email: string, password: string) => {
    if (validateCredentials(email, password)) {
      saveAuthToken();
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    clearAuthToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export { AuthProvider, useAuth };

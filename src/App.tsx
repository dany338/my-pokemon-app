import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import QueryClientProvider from "./contexts/QueryClientProvider";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar"; // Importa el componente Navbar
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import "./styles/transitions.css";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <QueryClientProvider>
        <Router>
          {/* Contenedor principal con diseño flex y altura completa */}
          <div className="flex flex-col h-screen">
            {/* Barra de navegación fija en la parte superior */}
            <Navbar />
            {/* Contenedor principal del contenido */}
            <div className="flex-1 mt-16 overflow-y-auto bg-gray-100">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/favorites"
                  element={
                    <PrivateRoute>
                      <Favorites />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/details/:id"
                  element={
                    <PrivateRoute>
                      <Details />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </div>
            {/* Footer */}
            <footer className="bg-gray-800 text-white">
              <div className="container mx-auto py-4 px-6 text-center">
                © 2025 My Pokémon App. Todos los derechos reservados.
              </div>
            </footer>
          </div>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;

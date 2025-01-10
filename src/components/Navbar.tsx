import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react"; // Íconos de Lucide-react
import { useAuth } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
  const { logout } = useAuth(); // Función de logout desde el contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Llamada a la función de logout del contexto
    navigate("/login");
  };

  return (
    <Disclosure
      className="bg-gray-800 fixed w-full top-0 z-50 shadow-md"
      as="nav"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-white">
              <Link to="/" className="hover:text-blue-400 transition-colors">
                My Pokémon App
              </Link>
            </div>

            {/* Menú Hamburguesa */}
            <Disclosure.Button
              className="lg:hidden text-white focus:outline-none"
              aria-label="Abrir o cerrar menú"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Disclosure.Button>

            {/* Menú en Pantallas Grandes */}
            <div className="hidden lg:flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/favorites"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Favoritos
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>

          {/* Menú Desplegable para Pantallas Pequeñas */}
          <Disclosure.Panel
            className="lg:hidden bg-gray-800 text-white"
            aria-label="menu desplegable"
            role="region"
          >
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/"
                className="block hover:text-blue-400 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/favorites"
                className="block hover:text-blue-400 transition-colors"
              >
                Favoritos
              </Link>
              <button
                onClick={handleLogout}
                className="block hover:text-blue-400 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

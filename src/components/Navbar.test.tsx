import { render, screen, fireEvent, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthProvider } from "../contexts/AuthContext";

describe("Navbar Component", () => {
  const renderNavbar = () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthProvider>
    );
  };

  it("should render the logo", () => {
    renderNavbar();
    expect(screen.getByText("My Pokémon App")).toBeInTheDocument();
  });

  it("should show menu items", () => {
    renderNavbar();
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Favoritos")).toBeInTheDocument();
    expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
  });

  it("should handle logout", () => {
    renderNavbar();
    const logoutButton = screen.getByText("Iniciar Sesión");
    fireEvent.click(logoutButton);
    expect(window.location.pathname).toBe("/login");
  });

  it("should toggle menu on mobile", () => {
    renderNavbar();
    
    // Verifica que el botón hamburguesa esté presente
    const menuButton = screen.getByRole("button", { name: /abrir o cerrar menú/i });
    expect(menuButton).toBeInTheDocument();

    // Verifica que el enlace "Inicio" no sea visible inicialmente
    expect(screen.queryByText("Inicio")).toBeVisible();

    // Simular clic para abrir el menú
    fireEvent.click(menuButton);

    // Busca el enlace "Inicio" dentro del menú desplegable
    const menuPanel = screen.getByRole("region", { name: /menu desplegable/i });
    const inicioLink = within(menuPanel).getByText("Inicio");
    
    // Verifica que el enlace "Inicio" ahora sea visible
    expect(inicioLink).toBeVisible();
  });
});

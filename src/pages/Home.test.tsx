// eslint-disable-next-line @typescript-eslint/no-namespace
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import QueryClientProvider from "../contexts/QueryClientProvider";
import { AuthProvider } from "../contexts/AuthContext";
import usePokemonListStore from "../store/usePokemonListStore";
import { vi } from 'vitest'; // Cambia Jest por Vitest
import Details from "./Details";

describe("Home Page", () => {
  const renderHome = () => {
    render(
      <AuthProvider>
        <QueryClientProvider>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </QueryClientProvider>
      </AuthProvider>
    );
  };

  // Renderiza el componente con un router simulado
  const renderWithRouter = (ui: React.ReactNode) => {
    return render(
      <AuthProvider>
        <QueryClientProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
            {ui}
          </Router>
        </QueryClientProvider>
      </AuthProvider>
    );
  };

  it("should display the Pokémon list", async () => {
    renderHome();

    // Espera a que los datos carguen (usa un `findBy` para pruebas asincrónicas)
    const pokemonItems = await screen.findAllByRole("listitem");
    expect(pokemonItems.length).toBeGreaterThan(0);
  });

  it("should navigate to details page on click", async () => {
    renderWithRouter(<Home />);

    const allPokemon = screen.getAllByRole("listitem");
    const firstPokemon = allPokemon.find((item) =>
      within(item).getByText(/bulbasaur/i)
    );
    if (firstPokemon) {
      fireEvent.click(firstPokemon);
  
      // Espera a que la URL cambie
      await waitFor(() => {
        expect(global.window.location.href).toContain("/details/1");
      });
    }
  });

  it("should restore scroll position on return", async () => {
    renderWithRouter(<Home />);

    // Simula desplazamiento
    const store = usePokemonListStore.getState();
    store.setScrollPosition(300);
    
    // Simular desplazamiento y restauración
    const scrollMock = vi.fn();
    window.scrollTo = scrollMock;

    // Navega a la página de detalles y regresa
   // Encuentra el primer Pokémon
   const firstPokemon = await screen.findByRole("listitem", { name: "pokemon-bulbasaur" });
   fireEvent.click(firstPokemon);
  
    fireEvent.popState(window, { state: {} }); // Simula regresar con el botón "Atrás"

    // Verifica que el scroll se restaure
    expect(scrollMock).toHaveBeenCalledWith(0, 300);
  });
});

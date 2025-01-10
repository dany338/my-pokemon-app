import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PokemonListState {
  currentPage: number;
  scrollPosition: number;
  setCurrentPage: (page: number) => void;
  setScrollPosition: (position: number) => void;
}

const usePokemonListStore = create(
  persist<PokemonListState>(
    (set) => ({
      currentPage: 1, // Página inicial
      scrollPosition: 0, // Scroll inicial
      setCurrentPage: (page) => set({ currentPage: page }),
      setScrollPosition: (position) => set({ scrollPosition: position }),
    }),
    {
      name: "pokemon-list-store", // Clave en localStorage
    }
  )
);

export default usePokemonListStore;

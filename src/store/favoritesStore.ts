import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface FavoritesStore {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (pokemon: Pokemon) => {
        const currentFavorites = get().favorites;
        if (!currentFavorites.some((fav: Pokemon) => fav.id === pokemon.id)) {
          set({ favorites: [...currentFavorites, pokemon] });
        }
      },
      removeFavorite: (id: number) => {
        set({
          favorites: get().favorites.filter((fav: Pokemon) => fav.id !== id),
        });
      },
      isFavorite: (id: number) => {
        return get().favorites.some((fav: Pokemon) => fav.id === id);
      },
    }),
    {
      name: "favorites-storage", // Clave en localStorage
    }
  )
);

export default useFavoritesStore;

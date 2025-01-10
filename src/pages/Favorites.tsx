import React from "react";
import useFavoritesStore from "../store/favoritesStore";
import { Link } from "react-router-dom";

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavoritesStore();

  if (favorites.length === 0) {
    return <p className="p-4 text-center">No tienes Pokémon favoritos aún.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Pokémon Favoritos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((pokemon) => (
          <div
            key={pokemon.id}
            className="border rounded p-4 shadow hover:shadow-lg relative"
          >
            <Link to={`/details/${pokemon.id}`}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-center font-bold">{pokemon.name}</p>
            </Link>
            <button
              onClick={() => removeFavorite(pokemon.id)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
            >
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

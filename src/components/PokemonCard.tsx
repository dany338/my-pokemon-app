import React from "react";
import useFavoritesStore from "../store/favoritesStore";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  handleNavigateToDetails: (pokemonId: number) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, image, handleNavigateToDetails }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic en el botón afecte el clic en la tarjeta
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, image });
    }
  };

  return (
    <div
      role="listitem"
      aria-label={`pokemon-${name}`}
      className="border rounded p-4 shadow hover:shadow-lg relative"
      onClick={() => handleNavigateToDetails(id)}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img src={image} alt={name} className="w-full h-32 object-contain bg-gray-100" />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">ID: {id}</p>
        </div>
      </div>
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 ${
          favorite ? "bg-red-500" : "bg-gray-300"
        } text-white rounded-full px-2 py-1 text-xs`}
      >
        {favorite ? "★" : "☆"}
      </button>
    </div>
  );
};

export default PokemonCard;

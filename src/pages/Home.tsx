import React, { useEffect, useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import usePokemonListStore from "../store/usePokemonListStore";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    currentPage,
    scrollPosition,
    setScrollPosition,
    setCurrentPage,
  } = usePokemonListStore();
  const { data, isLoading, isError } = usePokemon(currentPage);
  const navigate = useNavigate();
  const totalPages = Math.ceil((data?.count || 0) / 20); // Total de páginas

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  // Si no hay búsqueda, muestra todos los resultados originales
  const filteredResults = searchQuery
    ? data?.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery)
      )
    : data?.results;

  useEffect(() => {
    // Restaurar el scroll al volver al listado
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  const handleNavigateToDetails = (pokemonId: number) => {
    new Promise<void>((resolve) => {
      setScrollPosition(window.scrollY);
      resolve(); // Resolver después de setScrollPosition
    }).then(() => {
      navigate(`/details/${pokemonId}`);
    });
  };

  const handlePageChange = (newPage: number) => {
    // setPage(newPage);
    setCurrentPage(newPage);
  };


  if (isLoading) return <p className="mt-16 p-4">Cargando...</p>;
  if (isError) return <p className="mt-16 p-4">Error al cargar datos.</p>;

  return (
    <div className="mt-16 p-4">
      <h1 className="text-2xl font-bold mb-4">Pokémon</h1>
      <SearchBar onSearch={handleSearch} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <div role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredResults?.map((pokemon: any, index: number) => (
          <PokemonCard
            key={index}
            id={index + 1 + (currentPage - 1) * 20}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1 + (currentPage - 1) * 20
            }.png`}
            handleNavigateToDetails={handleNavigateToDetails}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;

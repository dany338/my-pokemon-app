import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // Espera 500ms antes de ejecutar la búsqueda

  // Ejecutar la búsqueda cuando el valor con debounce cambie
  useEffect(() => {
    onSearch(debouncedQuery); // Llama a la función de búsqueda con el valor debounced
  }, [debouncedQuery, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar Pokémon..."
        className="w-full border rounded p-2"
      />
    </div>
  );
};

export default SearchBar;

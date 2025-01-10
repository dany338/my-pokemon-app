import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonDetails = async (id: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

export const usePokemonDetails = (id: string) => {
  return useQuery({
    queryKey: ["pokemonDetails", id],
    queryFn: () => fetchPokemonDetails(id),
    staleTime: 5000,
  });
};

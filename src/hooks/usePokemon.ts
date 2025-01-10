import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const fetchPokemon = async (page: number): Promise<PokemonResponse> => {
  const limit = 20;
  const offset = (page - 1) * limit;
  const response = await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  return response.data;
};

export const usePokemon = (page: number) => {
  return useQuery<PokemonResponse, Error>({
    queryKey: ["pokemon", page],
    queryFn: () => fetchPokemon(page),
    keepPreviousData: true,
    staleTime: 5000,
  } as UseQueryOptions<PokemonResponse, Error>); // Forzar los tipos
};

// api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000, // 10 segundos
});

/**
 * Realiza una solicitud GET a la API.
 * @param endpoint - Ruta relativa dentro de la API.
 * @returns Datos obtenidos de la API.
 */
export const getData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud a la API:", error);
    throw new Error("Error al obtener datos.");
  }
};

export default api;

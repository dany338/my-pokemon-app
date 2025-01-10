// formatters.ts

/**
 * Convierte el nombre de un Pokémon (o cualquier texto) a formato capitalizado.
 * @param name - Nombre en minúsculas.
 * @returns Nombre capitalizado.
 */
export const capitalize = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

/**
 * Formatea un número para mostrarlo con ceros iniciales (ejemplo: 001, 015).
 * @param number - Número a formatear.
 * @param length - Longitud deseada.
 * @returns Número formateado como string.
 */
export const padNumber = (number: number, length: number): string => {
  return number.toString().padStart(length, "0");
};

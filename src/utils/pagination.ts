// pagination.ts

/**
 * Calcula el offset basado en el número de página y el límite de elementos por página.
 * @param page - Número de página.
 * @param limit - Cantidad de elementos por página.
 * @returns Offset calculado.
 */
export const calculateOffset = (page: number, limit: number): number => {
  return (page - 1) * limit;
};

/**
 * Calcula el número total de páginas basado en la cantidad total de elementos.
 * @param totalItems - Cantidad total de elementos.
 * @param limit - Cantidad de elementos por página.
 * @returns Número total de páginas.
 */
export const calculateTotalPages = (totalItems: number, limit: number): number => {
  return Math.ceil(totalItems / limit);
};

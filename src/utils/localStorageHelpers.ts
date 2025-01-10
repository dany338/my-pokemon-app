// localStorageHelpers.ts

/**
 * Guarda un valor en localStorage.
 * @param key - Clave para almacenar el dato.
 * @param value - Valor a guardar.
 */
export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Obtiene un valor de localStorage.
 * @param key - Clave del dato a recuperar.
 * @returns Valor almacenado o null si no existe.
 */
export const getFromLocalStorage = (key: string): any => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

/**
 * Elimina un valor de localStorage.
 * @param key - Clave del dato a eliminar.
 */
export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

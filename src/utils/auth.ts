// auth.ts

/**
 * Verifica si las credenciales proporcionadas son válidas.
 * @param email - Correo electrónico del usuario.
 * @param password - Contraseña del usuario.
 * @returns True si las credenciales son válidas, False en caso contrario.
 */
export const validateCredentials = (email: string, password: string): boolean => {
  const validEmail = import.meta.env.VITE_SIMULATED_EMAIL || "";
  const validPassword = import.meta.env.VITE_SIMULATED_PASSWORD || "";

  return email === validEmail && password === validPassword;
};

/**
 * Guarda el token de autenticación en el localStorage.
 */
export const saveAuthToken = () => {
  localStorage.setItem("authToken", "authenticated");
};

/**
 * Elimina el token de autenticación del localStorage.
 */
export const clearAuthToken = () => {
  localStorage.removeItem("authToken");
};

/**
 * Verifica si el usuario está autenticado.
 * @returns True si el token existe, False en caso contrario.
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken");
};
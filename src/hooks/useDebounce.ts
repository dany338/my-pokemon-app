import { useState, useEffect } from "react";

/**
 * Hook personalizado para manejar debounce.
 * @param value - Valor que queremos debouncer.
 * @param delay - Tiempo en milisegundos para esperar antes de aplicar el debounce.
 * @returns El valor con debounce aplicado.
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiar el timeout si el valor cambia antes de que expire el delay
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

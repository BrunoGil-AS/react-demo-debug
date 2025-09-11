import { createContext, useContext } from "react";

export const CountContext = createContext();

/**
 * This hook allows components to access to the count context, it must be used inside a CountProvider component
 * @returns {Object} { count, setCount }
 */
export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount debe ser usado dentro de un CountProvider");
  }
  return context;
};

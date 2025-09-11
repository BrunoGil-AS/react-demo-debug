import { useState } from "react";
import { CountContext } from "./useCount";

/**
 * This component provides the count context to its children, it must wrap the components that need to access to the count context
 * @param {Object} props - The props of the component
 * @param {React.ReactNode} props.children - The children components that will have access to the count context
 * @returns {JSX.Element} The CountProvider component
 */
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

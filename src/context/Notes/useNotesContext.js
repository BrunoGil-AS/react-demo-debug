import { createContext, useContext } from "react";

export const NotesContext = createContext();

export const useNotesContext = () => {
  if (!NotesContext) {
    throw new Error(
      "useNotesContext debe ser usado dentro de un NotesProvider"
    );
  }
  return useContext(NotesContext);
};

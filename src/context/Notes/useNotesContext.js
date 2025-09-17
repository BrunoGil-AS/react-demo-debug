import { createContext, useContext } from "react";

/**
 * Context to manage notes state across the application.
 */
export const NotesContext = createContext();

/**
 * Custom hook to access the NotesContext.
 * Ensures it is used within a NotesProvider.
 * @returns {object} The context value containing notes and setNotes function.
 */
export const useNotesContext = () => {
  if (!NotesContext) {
    throw new Error(
      "useNotesContext debe ser usado dentro de un NotesProvider"
    );
  }
  return useContext(NotesContext);
};

import { NotesContext } from "./useNotesContext";
import { useState, useEffect } from "react";
import { Note } from "../../components/Notes/Note";
import ErrorBoundary from "../../components/ErrorBoundary";

/**
 * NotesProvider component to manage notes state and provide it via context.
 * @param {*} children - Child components that will have access to the notes context.
 * @returns
 */
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage on initial render
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map(
        (note) =>
          new Note({
            title: note.title,
            content: note.content,
            id: note.id,
          })
      );
      return parsedNotes;
    }
    return []; // Initial state is empty if no notes are saved
  });

  useEffect(() => {
    console.log("Notes updated:", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </NotesContext.Provider>
  );
};

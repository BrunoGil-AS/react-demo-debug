import { Note } from "./Note";
import { useNotesContext } from "../../context/Notes/useNotesContext";
import {
  NoteCard,
  AddNoteButton,
  NoteInput,
  NoteTitleInput,
} from "./Notes.styles";

/**
 * NewNoteCard component for creating a new note.
 * @param {string} newNoteTitle - Title of the new note.
 * @param {string} newNoteContent - Content of the new note.
 * @param {function} setNewNoteTitle - Function to update the new note title.
 * @param {function} setNewNoteContent - Function to update the new note content.
 * @param {function} setIsNewNoteWriting - Function to update the new note writing state.
 * @returns JSX element for the new note card.
 */
export function NewNoteCard({
  newNoteTitle,
  newNoteContent,
  setNewNoteTitle,
  setNewNoteContent,
  setIsNewNoteWriting,
}) {
  const { notes, setNotes } = useNotesContext();
  const handleSaveNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      const newNote = new Note({
        title: newNoteTitle,
        content: newNoteContent,
      });
      setNotes([...notes, newNote]);
      setNewNoteTitle("");
      setNewNoteContent("");
      setIsNewNoteWriting(false);
    }
  };
  return (
    <>
      <NoteCard>
        <NoteTitleInput
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
          placeholder="Note Title"
        />
        <NoteInput
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
          placeholder="Write your note here..."
        />
        <AddNoteButton onClick={handleSaveNote}>Save Note</AddNoteButton>
      </NoteCard>
    </>
  );
}

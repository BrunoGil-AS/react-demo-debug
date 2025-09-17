import { Note } from "./Note";
import { useNotesContext } from "../../context/Notes/useNotesContext";
import {
  NoteCard,
  AddNoteButton,
  NoteInput,
  NoteTitleInput,
} from "./Notes.styles";

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

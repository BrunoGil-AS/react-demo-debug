import {
  NotesContainer,
  NoteCard,
  AddNoteButton,
  NoteInput,
  NoteTitleInput,
  NotesHeader,
} from "./Notes.styles";
import { NewNoteCard } from "./NewNoteCard";
import { useEffect, useState } from "react";
import { NoteList } from "./NoteList";

/**
 * Notes component to manage and display notes.
 * @returns JSX element for the Notes component.
 */
export default function Notes() {
  const [isNewNoteWriting, setIsNewNoteWriting] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isNoteEditing, setIsNoteEditing] = useState(null);

  const handleAddNote = () => {
    if (isNoteEditing) return;
    setIsNewNoteWriting(true);
  };

  useEffect(() => {
    console.log("isNoteEditing changed:", isNoteEditing);
  }, [isNoteEditing]);

  const cancelEdit = () => {
    if (isNoteEditing) {
      setIsNoteEditing(null);
    }
    setIsNewNoteWriting(false);
    setNewNoteTitle("");
    setNewNoteContent("");
  };
  const handleCancelEdit = (e) => {
    if (e.target === e.currentTarget) {
      cancelEdit();
    }
  };

  return (
    <>
      <h1>Notes Page</h1>
      <NotesContainer onDoubleClick={handleCancelEdit}>
        <NotesHeader>Your Notes</NotesHeader>
        <AddNoteButton
          onClick={handleAddNote}
          disabled={isNewNoteWriting || isNoteEditing}
        >
          Add Note
        </AddNoteButton>

        {isNewNoteWriting && (
          <NewNoteCard
            newNoteTitle={newNoteTitle}
            newNoteContent={newNoteContent}
            setNewNoteTitle={setNewNoteTitle}
            setNewNoteContent={setNewNoteContent}
            setIsNewNoteWriting={setIsNewNoteWriting}
          />
        )}

        <NoteList
          isNoteEditing={isNoteEditing}
          isNewNoteWriting={isNewNoteWriting}
          setIsNoteEditing={setIsNoteEditing}
        />
      </NotesContainer>
    </>
  );
}

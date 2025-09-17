import {
  NoteTitle,
  NoteContent,
  AddNoteButton,
  NoteInput,
  NoteTitleInput,
  NotesList,
  NoteItem,
  EditNoteButton,
  NoteItemContent,
  NoteTitleContainer,
  ButtonContainer,
  DeleteNoteButton,
} from "./Notes.styles";
import { useNotesContext } from "../../context/Notes/useNotesContext";
import { useState } from "react";

export function NoteList({
  isNoteEditing,
  isNewNoteWriting,
  setIsNoteEditing,
}) {
  const { notes, setNotes } = useNotesContext();
  const [editNoteTitle, setEditNoteTitle] = useState("");
  const [editNoteContent, setEditNoteContent] = useState("");
  const handleEditNote = (id) => {
    if (isNewNoteWriting) return;
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setIsNoteEditing(noteToEdit);
      setEditNoteTitle(noteToEdit.title);
      setEditNoteContent(noteToEdit.content);
    }
  };
  const handleUpdateNote = () => {
    if (isNoteEditing) {
      const updatedNotes = notes.map((note) =>
        note.id === isNoteEditing.id
          ? note.update({ title: editNoteTitle, content: editNoteContent })
          : note
      );

      setNotes(updatedNotes);
      setEditNoteTitle("");
      setEditNoteContent("");
      setIsNoteEditing(null);
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  return (
    <>
      <NotesList>
        {notes.map((note) => (
          <NoteItem key={note.id}>
            <NoteItemContent>
              <NoteTitleContainer>
                <NoteTitle>Note: {note.title}</NoteTitle>
              </NoteTitleContainer>
              {isNoteEditing?.id === note.id ? (
                <NoteContent>
                  <NoteTitleInput
                    value={editNoteTitle}
                    onChange={(e) => setEditNoteTitle(e.target.value)}
                  />
                  <NoteInput
                    value={editNoteContent}
                    onChange={(e) => setEditNoteContent(e.target.value)}
                  />
                  <AddNoteButton onClick={handleUpdateNote}>
                    Update Note
                  </AddNoteButton>
                </NoteContent>
              ) : (
                <NoteContent>{note.content}</NoteContent>
              )}
              <ButtonContainer>
                <EditNoteButton
                  onClick={() => handleEditNote(note.id)}
                  disabled={
                    isNewNoteWriting ||
                    (isNoteEditing && isNoteEditing.id !== note.id)
                  }
                >
                  Edit
                </EditNoteButton>
                <DeleteNoteButton onClick={() => handleDeleteNote(note.id)}>
                  Delete
                </DeleteNoteButton>
              </ButtonContainer>
            </NoteItemContent>
          </NoteItem>
        ))}
      </NotesList>
    </>
  );
}

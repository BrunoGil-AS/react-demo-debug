import {
  NotesContainer,
  NoteCard,
  NoteTitle,
  NoteContent,
  AddNoteButton,
  NoteInput,
  NoteTitleInput,
  NotesHeader,
  NotesList,
  NoteItem,
  EditNoteButton,
  NoteItemContent,
  NoteTitleContainer,
  ButtonContainer,
  DeleteNoteButton,
} from "./Notes.styles";
import { Note } from "./Note";

import { useNotesContext } from "../../context/Notes/useNotesContext";
import { useEffect, useState } from "react";
export default function Notes() {
  const { notes, setNotes } = useNotesContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isNoteEditing, setIsNoteEditing] = useState(null);

  const handleAddNote = () => {
    if (isNoteEditing) return;
    setIsEditing(true);
  };

  const handleSaveNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      const newNote = new Note({
        title: newNoteTitle,
        content: newNoteContent,
      });
      setNotes([...notes, newNote]);
      setNewNoteTitle("");
      setNewNoteContent("");
      setIsEditing(false);
    }
  };

  const handleEditNote = (id) => {
    if (isEditing) return;
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setIsNoteEditing(noteToEdit);
      setNewNoteTitle(noteToEdit.title);
      setNewNoteContent(noteToEdit.content);
    }
  };

  const handleUpdateNote = () => {
    if (isNoteEditing) {
      const updatedNotes = notes.map((note) =>
        note.id === isNoteEditing.id
          ? note.update({ title: newNoteTitle, content: newNoteContent })
          : note
      );

      setNotes(updatedNotes);
      setNewNoteTitle("");
      setNewNoteContent("");
      setIsEditing(false);
      setIsNoteEditing(null);
    }
  };

  useEffect(() => {
    console.log("isNoteEditing changed:", isNoteEditing);
  }, [isNoteEditing]);

  const cancelEdit = () => {
    if (isNoteEditing) {
      setIsNoteEditing(null);
    }
    setIsEditing(false);
    setNewNoteTitle("");
    setNewNoteContent("");
  };
  const handleCancelEdit = (e) => {
    if (e.target === e.currentTarget) {
      cancelEdit();
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <>
      <h1>Notes Page</h1>
      <NotesContainer onDoubleClick={handleCancelEdit}>
        <NotesHeader>Your Notes</NotesHeader>
        <AddNoteButton
          onClick={handleAddNote}
          disabled={isEditing || isNoteEditing}
        >
          Add Note
        </AddNoteButton>

        {isEditing && (
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
        )}

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
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                    />
                    <NoteInput
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
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
                      isEditing ||
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
      </NotesContainer>
    </>
  );
}

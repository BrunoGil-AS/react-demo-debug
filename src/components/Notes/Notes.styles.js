import styled from "styled-components";
import { colors } from "../../styles/colors";

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 20px;
  background-color: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 20px auto;
  max-width: 800px;
`;

export const NoteCard = styled.div`
  background-color: ${colors.cardBackground};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NoteTitle = styled.h2`
  margin: 0 0 8px 0;
  color: ${colors.primaryText};
`;

export const NoteContent = styled.p`
  margin: 0;
  color: ${colors.secondaryText};
`;

export const AddNoteButton = styled.button`
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.buttonHover};
  }
`;

export const NoteInput = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const NoteTitleInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const NotesHeader = styled.h1`
  color: ${colors.primaryText};
  margin-bottom: 16px;
`;

export const NotesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NoteItem = styled.li`
  margin-bottom: 16px;
`;

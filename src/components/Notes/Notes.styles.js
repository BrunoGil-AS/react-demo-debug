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
  background-color: rgba(169, 176, 182, 0.8);
  border-color: rgba(255, 255, 255, 0.2);
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

export const NoteTitle = styled.h3`
  margin: 0 0 8px 0;
  color: ${colors.primaryText};
`;

export const NoteTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 300px;
`;
export const NoteContent = styled.p`
  margin: 0;
  color: ${colors.secondaryText};
  text-align: justify;
  line-height: 1.5;
`;

export const AddNoteButton = styled.button`
  // Button styles if disabled
  background-color: ${(props) =>
    props.disabled ? colors.disabledBackground : colors.buttonBackground};
  color: ${(props) =>
    props.disabled ? colors.disabledText : colors.buttonText};

  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  // Button  cursor and hover effects if disabled
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? colors.disabledBackground : colors.buttonHover};
  }
`;

export const EditNoteButton = styled.button`
  // Button styles if disabled
  background-color: ${(props) =>
    props.disabled ? colors.disabledBackground : colors.editButtonBackground};
  color: ${(props) =>
    props.disabled ? colors.disabledText : colors.buttonText};

  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  // Button  cursor and hover effects if disabled
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? colors.disabledBackground : colors.editButtonHover};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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

export const NoteItemContent = styled.div`
  margin-bottom: 16px;
  display: inline-block;
  min-width: 300px;
  max-width: 500px;
  min-height: 100px;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: ${colors.cardBackground};
`;

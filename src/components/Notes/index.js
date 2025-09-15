import { Note } from "./Note";
import Notes from "./Notes";
import { withErrorBoundary } from "../ErrorBoundary/withErrorBoundary";

const NotesWithErrorBoundary = withErrorBoundary(Notes, "Notes");

export default NotesWithErrorBoundary;
export * from "./Notes.styles";
export { Note } from "./Note";

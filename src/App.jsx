import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Box from "./components/Box";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import { CountProvider } from "./context/Counter/CountProvider";
import "./App.css";
import { useEffect } from "react";
import Notes from "./components/Notes";
import { NotesProvider } from "./context/Notes/NotesProvider";

/**
 * The main App component
 * @returns {JSX.Element} The main App component
 */
function App() {
  useEffect(() => {
    console.log("Effect runs after every render of App component");
  });
  return (
    <CountProvider>
      <NotesProvider>
        <Router>
          <Nav />

          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/box" element={<Box />} />
              {/* Ejemplo de redirect */}
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/notes" element={<Notes />} />
            </Routes>
          </main>
        </Router>
      </NotesProvider>
    </CountProvider>
  );
}

export default App;

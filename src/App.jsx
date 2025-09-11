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

/**
 * The main App component
 * @returns {JSX.Element} The main App component
 */
function App() {
  return (
    <CountProvider>
      <Router>
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/box" element={<Box />} />
            {/* Ejemplo de redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </CountProvider>
  );
}

export default App;

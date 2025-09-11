import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Box from "./components/Box";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Nav />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Dashboard counter={count} setCounter={setCount} />}
          />
          <Route
            path="/box"
            element={<Box counter={count} setCounter={setCount} />}
          />
          {/* Ejemplo de redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

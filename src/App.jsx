import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Box from "./components/Box/Box.jsx";
import Navigation from "./components/navigation";
import Home from "./components/home/Home.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navigation />

      <main>
        <Routes>
          <Route
            path="/home"
            element={<Home counter={count} setCounter={setCount} />}
          />
          <Route
            path="/box"
            element={<Box counter={count} setCounter={setCount} />}
          />
          {/* Ejemplo de redirect */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

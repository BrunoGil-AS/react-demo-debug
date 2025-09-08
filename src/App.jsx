import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Box from "./components/Box/Box.jsx";
import { Navigation } from "./components/navigation/Navigation.jsx";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
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

function Home({ counter, setCounter }) {
  return (
    <>
      <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>
          count is {counter}
        </button>
        <p>This demo has the propuse to show how to debug in react</p>
      </div>
    </>
  );
}

export default App;

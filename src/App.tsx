import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameSelection from "./pages/GameSelection";
import MemoryGame from "./pages/MemoryGame"; // ודא שיצרת את הקובץ הזה

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-selection" element={<GameSelection />} />
        <Route path="/memory-game" element={<MemoryGame />} />
      </Routes>
    </Router>
  );
};

export default App;

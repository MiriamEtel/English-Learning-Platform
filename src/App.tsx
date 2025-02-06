import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameSelection from "./pages/GameSelection";
import MemoryGame from "./pages/MemoryGame";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/English-Learning-Games/"> {/* 👈 שימוש ב-basenamed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-selection" element={<GameSelection />} />
        <Route path="/memory-game" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

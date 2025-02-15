import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameSelection from "./pages/GameSelection";
import MemoryGame from "./pages/MemoryGame";
import AdventureStart from "./pages/Adventure/AdventureStart"; // מסך פתיחה למשחק
import AdventureGame from "./pages/Adventure/AdventureGame"; // מסך השאלות
import GameCompletion from "./pages/Adventure/GameCompletion";
import CharacterSelection from "./pages/Adventure/CharacterSelection";
import LevelSelection from "./pages/Adventure/LevelSelection";
import GameMap from "./pages/Adventure/GameMap";
const App: React.FC = () => {
  return (
    <BrowserRouter basename="/English-Learning-Platform/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-selection" element={<GameSelection />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/adventure-start" element={<AdventureStart />} /> {/* מסך הפתיחה */}
        <Route path="/adventure-game" element={<AdventureGame />} /> {/* מסך השאלות */}
        <Route path="/adventure/completion" element={<GameCompletion />} />
        <Route path="/adventure/character-selection" element={<CharacterSelection/>}/>
        <Route path="/adventure/level-selection" element={<LevelSelection />} />
        <Route path="/adventure/game-map" element={<GameMap />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

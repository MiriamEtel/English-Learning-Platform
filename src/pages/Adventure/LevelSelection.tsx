import React from "react";
import { useNavigate } from "react-router-dom";

const LevelSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="level-container">
      <h2>בחר רמה</h2>
      <button onClick={() => navigate("/adventure/game?level=easy")}>קל</button>
      <button onClick={() => navigate("/adventure/game?level=medium")}>בינוני</button>
      <button onClick={() => navigate("/adventure/game?level=hard")}>קשה</button>
    </div>
  );
};

export default LevelSelection;

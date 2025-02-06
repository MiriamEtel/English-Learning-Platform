import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameCompletion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="completion-container">
      <h1>🎉 סיימת את המשחק! 🎉</h1>
      <p>התוצאה שלך: {score} מתוך {total}</p>
      <button onClick={() => navigate("/")}>חזרה לדף הראשי</button>
    </div>
  );
};

export default GameCompletion;

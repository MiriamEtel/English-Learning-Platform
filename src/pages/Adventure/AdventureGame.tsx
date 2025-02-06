import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { questions } from "../../data"; // ייבוא השאלות לפי רמות קושי

const AdventureGame: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level") || "easy";
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(score + 1);
    if (index < questions[level].length - 1) {
      setIndex(index + 1);
    } else {
      navigate("/adventure/completion", { state: { score, total: questions[level].length } });
    }
  };

  return (
    <div className="game-container">
      <h2>{questions[level][index].question}</h2>
      {questions[level][index].answers.map((answer, i) => (
        <button key={i} onClick={() => handleAnswer(answer.correct)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
};

export default AdventureGame;

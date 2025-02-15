import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import questionsData from "../../data";

import villageBg from "../../assets/images/village.jpg";
import castleBg from "../../assets/images/castle.jpg";
import forestBg from "../../assets/images/forest.jpg";
import fountainBg from "../../assets/images/fountain.jpg";
import waterfallBg from "../../assets/images/waterfall.jpg";
import victoryBg from "../../assets/images/victory.jpg";

const locationBackgrounds = {
  "🏡 הכפר השקט": villageBg,
  "🏰 הטירה הקסומה": castleBg,
  "🌳 היער הקסום": forestBg,
  "המזרקה המסתורית": fountainBg,
  "💦 המפל הקסום": waterfallBg,
  "🏆 שער הניצחון": victoryBg,
};

const QUESTIONS_PER_STEP = 2;

const AdventureGame: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const level = (location.state?.level || "easy") as keyof typeof questionsData;
  const step = location.state?.step || 0; // לא משנים אותו כאן!
  const hero = location.state?.hero || "hero1";
  const currentLocation = location.state?.location || "🏡 הכפר השקט";
  const questions = questionsData[level];

  const backgroundImage = locationBackgrounds[currentLocation] || "/assets/images/default_bg.jpg";

  const [index, setIndex] = useState(location.state?.questionIndex || 0);
  const [score, setScore] = useState(location.state?.score || 0);

const handleAnswer = (correct: boolean) => {
    console.log("🧐 שאלה מספר:", index + 1, "מתוך", questions.length);
    console.log("✅ תשובה נכונה?", correct);
    
    setScore(prevScore => {
        const newScore = correct ? prevScore + 1 : prevScore;
        const nextQuestionIndex = index + 1;

        if (nextQuestionIndex % QUESTIONS_PER_STEP === 0 || nextQuestionIndex >= questions.length) {
            console.log("📍 חזרה למפה אחרי שלב:", step);
            navigate("/adventure/game-map", { 
                state: { 
                    level, 
                    step, 
                    hero, 
                    location: currentLocation, 
                    score: newScore, 
                    questionIndex: nextQuestionIndex,
                    totalQuestions: questions.length // 🔹 הוספת מספר השאלות!
                }
            });
        } else {
            setIndex(nextQuestionIndex);
        }

        return newScore;
    });
};



  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#5A3E1B" }}>
          {questions[index].question}
        </Typography>
        {questions[index].answers.map((answer, i) => (
          <Button
            key={i}
            variant="contained"
            sx={{
              m: 1,
              fontSize: "20px",
              padding: "10px 20px",
              backgroundColor: "#d4a373",
              color: "white",
              "&:hover": { backgroundColor: "#b5855d" },
            }}
            onClick={() => handleAnswer(answer.correct)}
          >
            {answer.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default AdventureGame;

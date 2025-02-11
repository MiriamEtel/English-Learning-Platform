import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import questionsData from "../../data"; 
import backgroundImage from "../../assets/images/adventure_game_bg.jpg"; // תמונת הרקע עם המגילה

const AdventureGame: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const level = (location.state?.level || "easy") as keyof typeof questionsData;
  const questions = questionsData[level];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct: boolean) => {
    setScore(prevScore => {
      const newScore = correct ? prevScore + 1 : prevScore;
      if (index < questions.length - 1) {
        setIndex(prevIndex => prevIndex + 1);
      } else {
        navigate("/adventure/completion", { state: { score: newScore, total: questions.length } });
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
      {/* קונטיינר להצגת השאלות על המגילה */}
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

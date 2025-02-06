import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import questionsData from "../../data"; // ודאי שהשאלות מיובאות נכון
import backgroundImage from "../../assets/images/adventure_game_bg.jpg"; // ייבוא תמונת הרקע

const AdventureGame: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const level = (location.state?.level || "easy") as keyof typeof questionsData; // טיפוס בטוח
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
        backgroundImage: `url(${backgroundImage})`, // הגדרת תמונת רקע
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h2" gutterBottom>
          {questions[index].question}
        </Typography>
        {questions[index].answers.map((answer, i) => (
          <Button
            key={i}
            variant="contained"
            color="primary"
            sx={{ m: 1, fontSize: "20px", padding: "10px 20px" }}
            onClick={() => handleAnswer(answer.correct)}
          >
            {answer.text}
          </Button>
        ))}
      </Container>
    </Box>
  );
};

export default AdventureGame;

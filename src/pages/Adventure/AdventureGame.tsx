import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import questionsData from "../../data"; // ודאי שהשאלות מיובאות נכון

const AdventureGame: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const level = (location.state?.level || "easy") as keyof typeof questionsData; // טיפוס בטוח
  const questions = questionsData[level];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(score + 1);
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      navigate("/adventure/completion", { state: { score, total: questions.length } });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          {questions[index].question}
        </Typography>
        {questions[index].answers.map((answer, i) => (
          <Button key={i} variant="contained" sx={{ m: 1 }} onClick={() => handleAnswer(answer.correct)}>
            {answer.text}
          </Button>
        ))}
      </Container>
    </Box>
  );
};

export default AdventureGame;

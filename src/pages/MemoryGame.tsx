import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardActionArea, CardContent } from "@mui/material";

// ייבוא תמונות מהתיקייה src/assets
import dogImage from "../assets/images/dog.png";
import catImage from "../assets/images/cat.png";
import sunImage from "../assets/images/sun.png";
import treeImage from "../assets/images/tree.png";
import appleImage from "../assets/images/apple.png";
import carImage from "../assets/images/car.png";
import backgroundImage from "../assets/images/background_memory.jpg"; // רקע המשחק

// רשימת מילים ותמונות
const words = [
  { word: "Dog", image: dogImage },
  { word: "Cat", image: catImage },
  { word: "Sun", image: sunImage },
  { word: "Tree", image: treeImage },
  { word: "Apple", image: appleImage },
  { word: "Car", image: carImage },
];

// ערבוב הקלפים כך שיכללו גם תמונות וגם מילים
const shuffledCards = [...words.flatMap((item) => [
  { type: "image", content: item.image, pair: item.word },
  { type: "word", content: item.word, pair: item.word }
])].sort(() => Math.random() - 0.5);

const MemoryGame: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    if (selected.length === 2 || selected.includes(index) || matched.includes(index)) return;
    setSelected([...selected, index]);

    if (selected.length === 1) {
      const first = shuffledCards[selected[0]];
      const second = shuffledCards[index];

      if (first.pair === second.pair) {
        setMatched([...matched, selected[0], index]);
      }

      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{
          mb: 3,
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
        }}
      >
        משחק זיכרון - התאמת תמונות למילים
      </Typography>

      {/* מסגרת הלוח */}
      <Box
        sx={{
          width: "90vw",
          maxWidth: "650px",
          height: "75vh",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "20px",
          padding: 3,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
          border: "5px solid rgba(43, 10, 142, 0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Grid container spacing={1} justifyContent="center">
          {shuffledCards.map((item, index) => (
            <Grid item xs={4} sm={3} key={index}>
              <Card
                sx={{
                  width: 110,
                  height: 140,
                  bgcolor: matched.includes(index) ? "#66bb6a" : "#ffcc00",
                  border: selected.includes(index) ? "3px solid blue" : "2px solid white",
                  borderRadius: "10px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.4)",
                  transition: "transform 0.4s ease-in-out",
                  transform: selected.includes(index) || matched.includes(index) ? "rotateY(0deg)" : "rotateY(180deg)",
                  overflow: "hidden",
                }}
              >
                <CardActionArea
                  sx={{ width: "100%", height: "100%" }}
                  onClick={() => handleSelect(index)}
                >
                  {selected.includes(index) || matched.includes(index) ? (
                    item.type === "image" ? (
                      <Box
                        component="img"
                        src={item.content}
                        alt="card"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // תמלא את כל הכרטיס בלי רווחים
                          borderRadius: "10px",
                        }}
                      />
                    ) : (
                      <CardContent
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          fontFamily: "'Arial Black', sans-serif",
                          color: "#2c3e50",
                          background: "rgba(255, 255, 255, 0.9)",
                          borderRadius: "10px",
                          textTransform: "uppercase",
                          textAlign: "center",
                          letterSpacing: "1px",
                        }}
                      >
                        {item.content}
                      </CardContent>
                    )
                  ) : (
                    <CardContent
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      background: "#ffcc00",
                      borderRadius: "10px",
                      color: "black",
                      transform: "rotateY(180deg)", // מוסיף תיקון להפיכת סימן השאלה
                    }}
                  >
                    ❓
                  </CardContent>
                  
                  
                  )}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    
  );
};

export default MemoryGame;

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/map2.jpg"; // 🗺️ מפת המסע
import heroIcon from "../../assets/images/h3.png"; // 🏃 דמות השחקן

// רשימת המיקומים במשחק
const locations = [
  { name: "הכפר", x: "10%", y: "80%" },
  { name: "היער הקסום", x: "30%", y: "65%" },
  { name: "הטירה המלכותית", x: "50%", y: "50%" },
  { name: "החורבות העתיקות", x: "70%", y: "35%" },
  { name: "האי הצף", x: "90%", y: "20%" }
];

const GameMap: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < locations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/adventure/completion");
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          textShadow: "2px 2px 4px black",
          position: "absolute",
          top: "10px",
        }}
      >
        המסע שלך: {locations[currentIndex].name}
      </Typography>

      {/* דמות השחקן שמתקדמת */}
      <Box
        component="img"
        src={heroIcon}
        alt="Hero"
        sx={{
          position: "absolute",
          left: locations[currentIndex].x,
          top: locations[currentIndex].y,
          width: "80px",
          height: "80px",
          transition: "all 0.5s ease-in-out",
        }}
      />

      {/* כפתור התקדמות */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          fontSize: "20px",
          padding: "10px 20px",
          backgroundColor: "#ffcc00",
          color: "black",
          fontWeight: "bold",
          boxShadow: "3px 3px 8px rgba(0,0,0,0.5)",
        }}
        onClick={handleNext}
      >
        המשך במסע →
      </Button>
    </Box>
  );
};

export default GameMap;

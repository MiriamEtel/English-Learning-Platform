import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import mapBackground from "../../assets/images/map.jpg"; // תמונת המפה
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";

// נקודות היעד במסלול
const locations = [
  { name: "הכפר", x: "10%", y: "80%" },
  { name: "היער הקסום", x: "30%", y: "60%" },
  { name: "ההר העתיק", x: "50%", y: "40%" },
  { name: "הטירה הקסומה", x: "70%", y: "30%" },
  { name: "שער הניצחון", x: "90%", y: "10%" },
];

const GameMap: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedHero = location.state?.hero || "hero1";
  const difficulty = location.state?.level || "easy";
  const [currentStep, setCurrentStep] = useState(location.state?.step || 0);
  const [score, setScore] = useState(location.state?.score || 0);
  const [questionIndex, setQuestionIndex] = useState(location.state?.questionIndex || 0); // שמירת מספר השאלה

  // מיפוי הדמויות שנבחרו
  const heroImages: Record<string, string> = {
    hero1,
    hero2,
    hero3,
    hero4,
  };

  useEffect(() => {
    console.log("🌍 חזרת למפה!");
    console.log("📍 שלב נוכחי:", currentStep);
    console.log("💯 ניקוד:", score);
    console.log("❓ מספר השאלה הנוכחי:", questionIndex);
  }, [currentStep, questionIndex]);

  const handleNext = () => {
    if (currentStep < locations.length - 1) {
      navigate("/adventure-game", {
        state: { level: difficulty, step: currentStep + 1, hero: selectedHero, score, questionIndex },
      });
    } else {
      navigate("/adventure/completion", { state: { score, total: locations.length } });
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${mapBackground})`,
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
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        המסע שלך: {locations[currentStep].name}
      </Typography>

      {/* הדמות על המפה */}
      <img
        src={heroImages[selectedHero]}
        alt="דמות השחקן"
        style={{
          position: "absolute",
          width: "80px",
          left: locations[currentStep].x,
          top: locations[currentStep].y,
          transition: "left 1s ease-in-out, top 1s ease-in-out",
        }}
      />

      {/* כפתור המשך */}
      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          bottom: 30,
          backgroundColor: "#ffcc00",
          border: "none",
          padding: "15px 40px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#ffdd44",
          },
        }}
      >
        המשך במסע →
      </Button>
    </Box>
  );
};

export default GameMap;

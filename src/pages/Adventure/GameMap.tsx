import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import mapBackground from "../../assets/images/map.jpg"; // תמונת המפה
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";
import moveSound from "../../assets/sounds/move.mp3"; // סאונד קפיצה

// נקודות היעד במסלול (עכשיו נכונות יותר)
const locations = [
  { name: "🏡 הכפר השקט", x: 27, y: 35, message: "ברוך הבא לכפר! 😊" },
  { name: "🏰 הטירה הקסומה", x: 42, y: 17, message: "הגעת לטירה קסומה! מה מסתתר בפנים" },
  { name: "🌳 היער הקסום", x: 42, y: 43, message: "עצים גבוהים ולחשושים... אולי חיות יער מסתתרות פה" },
  { name: "המזרקה המסתורית", x: 12, y: 70, message: "מזרקה מסתורית מפכה" },
  { name: "💦 המפל הקסום", x: 74, y: 57, message: "מפל מבריק זורם כאן! תרגיש את רסיסי המים הקרים" },
  { name: "🏆 שער הניצחון", x: 74, y: 16, message: "הגעת לסוף המסע! " },
];

const GameMap: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedHero = location.state?.hero || "hero1";
  const difficulty = location.state?.level || "easy";
  const [currentStep, setCurrentStep] = useState(location.state?.step || 0);
  const [posX, setPosX] = useState(locations[currentStep].x); // מתחיל במקום הנכון
  const [posY, setPosY] = useState(locations[currentStep].y);
  const [isJumping, setIsJumping] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // הצגת ההודעה במקום החדש

  // מיפוי הדמויות שנבחרו
  const heroImages: Record<string, string> = {
    hero1,
    hero2,
    hero3,
    hero4,
  };

  const handleNext = () => {
    if (currentStep < locations.length - 1) {
      setIsJumping(true);
      setShowMessage(false);
      const audio = new Audio(moveSound);
      audio.play();

      const prevLocation = locations[currentStep]; // מאיפה מתחילים
      const nextLocation = locations[currentStep + 1]; // לאן להגיע
      let steps = 10; // כמה קפיצות קטנות יהיו בדרך
      let stepX = (nextLocation.x - prevLocation.x) / steps;
      let stepY = (nextLocation.y - prevLocation.y) / steps;
      let count = 0;

      const moveInterval = setInterval(() => {
        count++;
        setPosX((prevX) => prevX + stepX);
        setPosY((prevY) => prevY + stepY);

        if (count >= steps) {
          clearInterval(moveInterval);
          setIsJumping(false);
          setCurrentStep((prevStep) => prevStep + 1);
          setShowMessage(true);
          
          // שמירה של המיקום החדש
          setPosX(nextLocation.x);
          setPosY(nextLocation.y);

          setTimeout(() => {
            navigate("/adventure-game", {
              state: { level: difficulty, step: currentStep + 1, hero: selectedHero },
            });
          }, 2500); // שהייה של שנייה וחצי לפני מעבר לשאלה
        }
      }, 100);
    } else {
      navigate("/adventure/completion");
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
      הגעת ל : {locations[currentStep].name}
      </Typography>

      {/* כיתוב מעניין בכל תחנה */}
      {showMessage && (
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            bottom: "20%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          {locations[currentStep].message}
        </Typography>
      )}

      {/* דמות השחקן */}
      <img
        src={heroImages[selectedHero]}
        alt="דמות השחקן"
        style={{
          position: "absolute",
          width: "80px",
          left: `${posX}%`,
          top: `${posY}%`,
          transition: "top 0.2s ease-in-out, left 0.2s ease-in-out",
          transform: isJumping ? "translateY(-15px)" : "translateY(0px)", // קפיצה קטנה כל פעם
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
